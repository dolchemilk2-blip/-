// Покадровый рендер promo/index.html в MP4 (1080×1920).
//   node promo/render.js                      → promo/out/promo-az.mp4 (60 к/с)
//   node promo/render.js --stills 1,4.5,8     → PNG-кадры в promo/out/stills/
//   FFMPEG=/путь/к/ffmpeg CHROME=/путь/к/chrome — если не в PATH
const { chromium } = require('playwright-core');
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.join(__dirname, 'out');
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'] });
  const page = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on('pageerror', e => console.error('PAGEERR', e.message));
  await page.goto('file://' + path.join(__dirname, 'index.html') + '?render', { waitUntil: 'load' });
  const meta = await page.evaluate(() => window.promoReady);
  const stills = arg('stills');
  if (stills) {
    const dir = path.join(OUT, 'stills'); fs.mkdirSync(dir, { recursive: true });
    for (const s of stills.split(',').map(Number)) {
      await page.evaluate(t => renderAt(t), s);
      await page.screenshot({ path: path.join(dir, `t${s.toFixed(2)}.png`) });
    }
    console.log('stills →', dir); await b.close(); return;
  }
  const fps = +arg('fps', meta.FPS), from = +arg('from', 0), to = +arg('to', meta.DUR), out = arg('out', path.join(OUT, 'promo-az.mp4'));
  const ff = spawn(process.env.FFMPEG || 'ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-tune', 'film', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.2',
    '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const n0 = Math.round(from * fps), n1 = Math.round(to * fps), t0 = Date.now();
  for (let f = n0; f < n1; f++) {
    await page.evaluate(([t, f]) => renderAt(t, f), [f / fps, f]);
    const buf = await page.screenshot({ type: 'jpeg', quality: 96 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % 120 === 0) console.log(`${f}/${n1} кадров, ${((Date.now() - t0) / 1000).toFixed(0)} с`);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r));
  console.log('готово →', out); await b.close();
})();
