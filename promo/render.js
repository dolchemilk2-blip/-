// Покадровый рендер promo/index.html в MP4 (1080×1920, 60 к/с) с настоящим размытием движения:
// каждый кадр — среднее нескольких подкадров внутри «затвора» (ffmpeg tmix), работа делится между процессами.
//   node promo/render.js                         → promo/out/promo-az.mp4 (со звуком из promo/audio/music.wav, если есть)
//   node promo/render.js --stills 1,4.5,8        → PNG-кадры в promo/out/stills/
//   --sub 3 (подкадров) --fast 10 (на быстрых переходах) --shutter .5 (доля кадра) --workers 3 --audio путь --out путь
//   FFMPEG=/путь/к/ffmpeg CHROME=/путь/к/chrome — если не в PATH
const { chromium } = require('playwright-core');
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.join(__dirname, 'out'), FF = process.env.FFMPEG || 'ffmpeg';
const run = (cmd, args) => new Promise((ok, no) => { const p = spawn(cmd, args, { stdio: ['ignore', 'inherit', 'inherit'] }); p.on('close', c => c ? no(new Error(cmd + ' ' + c)) : ok()); });

async function openPage() {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'] });
  const page = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on('pageerror', e => console.error('PAGEERR', e.message));
  await page.goto('file://' + path.join(__dirname, 'index.html') + '?render', { waitUntil: 'load' });
  const meta = await page.evaluate(() => window.promoReady);
  return { b, page, meta };
}

// один процесс: кадры [n0, n1) → кусок видео
async function chunk(n0, n1, file, fps, sub, shutter) {
  const { b, page } = await openPage();
  const ff = spawn(FF, ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps * sub), '-i', '-',
    '-vf', `tmix=frames=${sub},select='eq(mod(n\\,${sub})\\,${sub - 1})',setpts=N/${fps}/TB`, '-r', String(fps),
    '-c:v', 'libx264', '-preset', 'fast', '-crf', '10', '-pix_fmt', 'yuv420p', file], { stdio: ['pipe', 'inherit', 'inherit'] });
  const t0 = Date.now();
  for (let f = n0; f < n1; f++) {
    for (let j = 0; j < sub; j++) {
      const off = sub > 1 ? (j / (sub - 1) - .5) * shutter : 0, t = Math.max(0, (f + off) / fps);
      await page.evaluate(([t, f]) => renderAt(t, f), [t, f]);
      const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    if ((f - n0) % 60 === 0) console.log(`[${path.basename(file)}] ${f - n0}/${n1 - n0} кадров, ${((Date.now() - t0) / 1000).toFixed(0)} с`);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await b.close();
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const fps = +arg('fps', 60), sub = +arg('sub', 3), shutter = +arg('shutter', .5);
  if (arg('chunk')) { const [n0, n1] = arg('chunk').split(':').map(Number); await chunk(n0, n1, arg('file'), fps, sub, shutter); return; }
  const stills = arg('stills');
  if (stills) {
    const { b, page } = await openPage(), dir = path.join(OUT, 'stills'); fs.mkdirSync(dir, { recursive: true });
    for (const s of stills.split(',').map(Number)) { await page.evaluate(t => renderAt(t), s); await page.screenshot({ path: path.join(dir, `t${s.toFixed(2)}.png`) }); }
    console.log('stills →', dir); await b.close(); return;
  }
  const dur = 30, N = Math.round(dur * fps), K = +arg('workers', 3), out = arg('out', path.join(OUT, 'promo-az.mp4'));
  const audio = arg('audio', path.join(__dirname, 'audio', 'music.wav'));
  // быстрые переходы — больше подкадров (иначе на свайпах видно «двоение»), спокойные места — меньше
  const FAST = [[2.9, 5.0], [8.4, 9.45], [12.5, 13.2], [14.4, 15.15], [16.3, 17.0], [18.15, 18.9], [20.3, 21.3], [21.85, 22.6], [25.5, 26.35]];
  const subAt = f => FAST.some(([a, z]) => f / fps >= a && f / fps < z) ? +arg('fast', 10) : sub;
  const parts = [];
  for (let f = 0; f < N;) { const s0 = subAt(f); let e = f; while (e < N && subAt(e) === s0 && e - f < 240) e++; parts.push([f, e, path.join(OUT, `part${String(parts.length).padStart(2, '0')}.mp4`), s0]); f = e; }
  const queue = [...parts]; const t0 = Date.now();
  await Promise.all([...Array(K)].map(async () => { for (let p; (p = queue.shift());) await run(process.execPath, [__filename, '--chunk', `${p[0]}:${p[1]}`, '--file', p[2], '--fps', fps, '--sub', p[3], '--shutter', shutter]); }));
  console.log(`кадры готовы за ${((Date.now() - t0) / 60000).toFixed(1)} мин`);
  const list = path.join(OUT, 'parts.txt'); fs.writeFileSync(list, parts.map(p => `file '${p[2]}'`).join('\n'));
  const hasAudio = fs.existsSync(audio);
  await run(FF, ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list, ...(hasAudio ? ['-i', audio] : []),
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-tune', 'film', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.2',
    '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
    ...(hasAudio ? ['-c:a', 'aac', '-b:a', '256k', '-shortest'] : []), '-movflags', '+faststart', out]);
  console.log('готово →', out, hasAudio ? '(со звуком)' : '(без звука)');
})();
