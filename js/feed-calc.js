// ===== Калькулятор кормления: вес питомца → суточная доза сухого корма → на сколько дней хватит упаковки =====
// Виджет ставится в любой [data-feed-calc] (главная) и сам добавляется в окно товара для сухих кормов (каталог).
// Нормы — ориентировочные (взрослые животные, средняя активность); точная таблица — на упаковке.
(function () {
  'use strict';
  // [вес от, вес до, г/день от, г/день до]
  const TABLE = {
    dogs: [[2, 5, 42, 83], [5, 10, 83, 139], [10, 15, 139, 188], [15, 20, 188, 234], [20, 25, 234, 276], [25, 30, 276, 317],
      [30, 40, 317, 393], [40, 50, 393, 464], [50, 60, 464, 532], [60, 70, 532, 598], [70, 80, 598, 660]],
    cats: [[2, 3, 30, 45], [3, 4, 45, 55], [4, 5, 55, 65], [5, 6, 65, 75], [6, 7, 75, 85], [7, 8, 85, 95]]
  };
  const RANGE = { dogs: { min: 2, max: 80, step: 0.5, def: 15 }, cats: { min: 2, max: 8, step: 0.1, def: 4 } };
  const PACKS = { dogs: [4, 12, 18], cats: [0.4, 2, 7] };
  const I18N = {
    ru: { title: 'Сколько корма нужно?', tipTitle: 'Подбор корма по весу', tipText: 'Узнайте суточную норму для вашего питомца и на сколько дней хватит упаковки.', tipBtn: 'Рассчитать', close: 'Закрыть', weight: 'Вес питомца', kg: 'кг', g: 'г', dose: 'суточная доза', doseHint: 'Расчётная рекомендуемая доза',
      format: 'Выберите формат', dogs: 'Собака', cats: 'Кошка', days: n => n + ' ' + plural(n, 'день', 'дня', 'дней'),
      note: 'Ориентировочно для взрослого питомца со средней активностью. Точная норма — в таблице на упаковке.',
      tableW: 'Вес (кг)', tableG: 'Дневная норма (г / день)', table: 'Таблица кормления', pack: 'Упаковка' },
    az: { title: 'Nə qədər yem lazımdır?', tipTitle: 'Çəkiyə görə yem seçimi', tipText: 'Heyvanınız üçün gündəlik normanı və qablaşdırmanın neçə günə çatacağını öyrənin.', tipBtn: 'Hesabla', close: 'Bağla', weight: 'Heyvanın çəkisi', kg: 'kq', g: 'q', dose: 'gündəlik doza', doseHint: 'Hesablanmış tövsiyə olunan doza',
      format: 'Qablaşdırmanı seçin', dogs: 'İt', cats: 'Pişik', days: n => n + ' gün',
      note: 'Orta aktivlikli yetkin heyvan üçün təxminidir. Dəqiq norma qablaşdırmadakı cədvəldədir.',
      tableW: 'Çəki (kq)', tableG: 'Gündəlik norma (q / gün)', table: 'Yemləmə cədvəli', pack: 'Qablaşdırma' },
    en: { title: 'How much food is needed?', tipTitle: 'Food by pet weight', tipText: 'Find the daily portion for your pet and how many days a bag will last.', tipBtn: 'Calculate', close: 'Close', weight: 'Pet weight', kg: 'kg', g: 'g', dose: 'daily portion', doseHint: 'Estimated recommended portion',
      format: 'Choose a bag size', dogs: 'Dog', cats: 'Cat', days: n => n + ' ' + (n === 1 ? 'day' : 'days'),
      note: 'Approximate, for an adult pet with average activity. The exact amount is in the table on the bag.',
      tableW: 'Weight (kg)', tableG: 'Daily amount (g / day)', table: 'Feeding table', pack: 'Bag' }
  };
  function plural(n, a, b, c) { const m = n % 100, k = n % 10; return m > 10 && m < 20 ? c : k === 1 ? a : k >= 2 && k <= 4 ? b : c; }
  const lang = () => (window.NP && NP.lang ? NP.lang() : document.documentElement.lang) || 'ru';
  const T = () => I18N[lang()] || I18N.ru;
  const fmtKg = (v, l) => (l === 'en' ? v.toFixed(1) : v.toFixed(1).replace('.', ','));
  const packLabel = (p, t) => p < 1 ? Math.round(p * 1000) + ' ' + t.g : String(p).replace('.', lang() === 'en' ? '.' : ',') + ' ' + t.kg;

  function dose(sp, w, table) {
    const rows = table || TABLE[sp];
    const r = rows.find(x => w <= x[1]) || rows[rows.length - 1];
    const k = Math.max(0, Math.min(1, (w - r[0]) / (r[1] - r[0])));
    return Math.round(r[2] + (r[3] - r[2]) * k);
  }

  const BOWL = '<svg viewBox="0 0 64 48" aria-hidden="true"><path d="M8 26h48l-4 16a4 4 0 0 1-4 3H16a4 4 0 0 1-4-3z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 26c0-7 8-12 18-12s18 5 18 12" fill="none" stroke="currentColor" stroke-width="2.4"/><g fill="currentColor"><circle cx="32" cy="34" r="3.2"/><circle cx="26.5" cy="29.5" r="1.7"/><circle cx="30" cy="27.5" r="1.7"/><circle cx="34" cy="27.5" r="1.7"/><circle cx="37.5" cy="29.5" r="1.7"/></g></svg>';
  const BAG = '<svg viewBox="0 0 40 48" aria-hidden="true"><path d="M8 6h24l3 8v28a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V14z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M5 14h30M12 6v4M28 6v4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><g fill="currentColor"><circle cx="20" cy="28" r="3"/><circle cx="15" cy="23.5" r="1.6"/><circle cx="18.3" cy="21.5" r="1.6"/><circle cx="21.7" cy="21.5" r="1.6"/><circle cx="25" cy="23.5" r="1.6"/></g></svg>';

  let uid = 0;
  /** host — container; o: {species: 'dogs'|'cats'|null (toggle), packs: [kg…] | null} */
  function mount(host, o) {
    o = o || {};
    const id = 'fc' + (++uid);
    // o.table — официальная таблица товара [[кг от, кг до, г от, г до], …] (js/np-official.js): с ней шкала веса и нормы — как на упаковке
    const st = { sp: o.species || 'dogs', fixed: !!o.species, packs: o.packs, table: o.table || null, w: 0, pack: 0, showTable: false };
    const rangeOf = sp => {
      if (!st.table) return RANGE[sp];
      const lo = st.table[0][0], hi = st.table[st.table.length - 1][1], step = hi <= 12 ? 0.1 : 0.5;
      return { min: lo, max: hi, step, def: Math.min(hi, Math.max(lo, RANGE[sp].def)) };
    };
    host.classList.add('fcalc');
    host.innerHTML = `
      <div class="fcalc__top">
        <div class="fcalc__sp" role="radiogroup"></div>
      </div>
      <div class="fcalc__grid">
        <div class="fcalc__weight">
          <label class="fcalc__lbl" for="${id}-w"></label>
          <input class="fcalc__range" type="range" id="${id}-w">
          <output class="fcalc__wval" for="${id}-w"><b data-v></b> <span data-u></span></output>
        </div>
        <div class="fcalc__res">
          <div class="fcalc__dose">
            <span class="fcalc__hint" data-t="doseHint"></span>
            <div class="fcalc__bowl">${BOWL}</div>
            <div class="fcalc__num"><b data-dose></b> <span data-gu></span></div>
            <div class="fcalc__cap" data-t="dose"></div>
          </div>
          <div class="fcalc__packs-wrap">
            <span class="fcalc__hint" data-t="format"></span>
            <div class="fcalc__packs" role="radiogroup"></div>
            <div class="fcalc__days" aria-live="polite"><b data-days></b></div>
          </div>
        </div>
      </div>
      <p class="fcalc__note" data-t="note"></p>
      <details class="fcalc__more"><summary data-t="table"></summary><table class="fcalc__table"><thead><tr><th data-t="tableW"></th><th data-t="tableG"></th></tr></thead><tbody></tbody></table></details>`;
    const $ = s => host.querySelector(s);
    const range = $('.fcalc__range');

    function setSpecies(sp, keepW) {
      st.sp = sp;
      const R = rangeOf(sp);
      range.min = R.min; range.max = R.max; range.step = R.step;
      if (!keepW) st.w = R.def;
      st.w = Math.max(R.min, Math.min(R.max, st.w));
      range.value = st.w;
      const packs = st.packs && st.packs.length ? st.packs : PACKS[sp];
      if (packs.indexOf(st.pack) < 0) st.pack = packs[0];
      labels();
      update(true);
    }
    function labels() {
      const t = T(), l = lang();
      host.querySelectorAll('[data-t]').forEach(el => { el.textContent = t[el.getAttribute('data-t')]; });
      $('.fcalc__lbl').textContent = t.weight;
      $('[data-u]').textContent = t.kg; $('[data-gu]').textContent = t.g;
      const sp = $('.fcalc__sp');
      sp.hidden = st.fixed;
      sp.innerHTML = ['dogs', 'cats'].map(s => `<button type="button" role="radio" aria-checked="${s === st.sp}" data-sp="${s}">${t[s]}</button>`).join('');
      const packs = st.packs && st.packs.length ? st.packs : PACKS[st.sp];
      $('.fcalc__packs').innerHTML = packs.map(p => `<button type="button" role="radio" aria-checked="${p === st.pack}" data-pack="${p}" aria-label="${t.pack} ${packLabel(p, t)}">${BAG}<span>${packLabel(p, t)}</span></button>`).join('');
      $('.fcalc__table tbody').innerHTML = (st.table || TABLE[st.sp]).map(r => `<tr><td>${r[0]}–${r[1]}</td><td>${r[2]}–${r[3]}</td></tr>`).join('');
      range.setAttribute('aria-valuetext', fmtKg(st.w, l) + ' ' + t.kg);
    }
    function setNum(el, text, quiet) {
      if (!quiet && window.NPSpring && NPSpring.num) NPSpring.num(el, text); else { el.textContent = text; el._numText = text; }
    }
    function update(quiet) {
      const t = T(), l = lang(), R = rangeOf(st.sp);
      const d = dose(st.sp, st.w, st.table);
      setNum($('[data-v]'), fmtKg(st.w, l), true);
      setNum($('[data-dose]'), String(d), quiet);
      setNum($('[data-days]'), t.days(Math.max(1, Math.floor(st.pack * 1000 / d))), quiet);
      range.style.setProperty('--p', ((st.w - R.min) / (R.max - R.min) * 100).toFixed(2) + '%');
      range.setAttribute('aria-valuetext', fmtKg(st.w, l) + ' ' + t.kg);
    }
    range.addEventListener('input', () => { st.w = +range.value; update(false); });
    host.addEventListener('click', e => {
      const s = e.target.closest('[data-sp]'), p = e.target.closest('[data-pack]');
      if (s && s.getAttribute('data-sp') !== st.sp) setSpecies(s.getAttribute('data-sp'));
      if (p) {
        st.pack = +p.getAttribute('data-pack');
        host.querySelectorAll('[data-pack]').forEach(b => b.setAttribute('aria-checked', String(b === p)));
        update(false);
      }
    });
    host.addEventListener('keydown', e => {   // стрелки в группах-переключателях
      const g = e.target.closest('[role="radiogroup"]'); if (!g || !/Arrow(Left|Right|Up|Down)/.test(e.key)) return;
      const bs = Array.from(g.querySelectorAll('button')), i = bs.indexOf(e.target), n = bs[(i + (/Right|Down/.test(e.key) ? 1 : bs.length - 1)) % bs.length];
      e.preventDefault(); n.click(); n.focus();
    });
    host._fcLang = () => { labels(); update(true); };
    setSpecies(st.sp);
  }

  // ---------- главная: [data-feed-calc] ----------
  function boot() { document.querySelectorAll('[data-feed-calc]').forEach(h => { if (!h.classList.contains('fcalc')) mount(h); }); }
  document.addEventListener('np:lang', () => document.querySelectorAll('.fcalc').forEach(h => h._fcLang && h._fcLang()));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

  // ---------- каталог: окно товара сухого корма ----------
  // Есть официальная таблица кормления товара (js/np-official.js) — калькулятор считает по ней и с официальными
  // фасовками (и для влажных кормов тоже); нет — по общей ориентировочной таблице, только для сухих кормов.
  const DRY = { np: ['dry', 'superior-care'], araton: ['dry'] };
  const official = (brand, sp, item) => {
    if (brand !== 'np' || typeof NP_OFFICIAL === 'undefined' || !item.en) return null;
    return NP_OFFICIAL[sp + '||' + (item.en.cat || '') + '||' + (item.en.name || '')] || null;
  };
  const kgOf = s => { const m = /([\d.,]+)\s*(kg|g)\b/i.exec(s || ''); if (!m) return 0; const v = parseFloat(m[1].replace(',', '.')); return m[2].toLowerCase() === 'g' ? v / 1000 : v; };
  document.addEventListener('np:modal-open', e => {
    const d = e.detail || {}, item = d.item, brand = d.brand;
    if (!item || item.baby || !window.NP || !NP.catalog) return;   // нормы — для взрослых: у щенков и котят своя таблица на упаковке
    const g = (NP.catalog()[brand] || []).find(x => (x.items || []).indexOf(item) >= 0);
    if (!g) return;
    const off = official(brand, g.species || 'both', item);
    const table = off && off.feed && off.feed.length > 1 ? off.feed : null;
    if (!table && (!DRY[brand] || DRY[brand].indexOf(g.sectionId) < 0)) return;
    const sp = g.species === 'cats' || g.species === 'dogs' ? g.species : null;
    const txt = ['ru', 'en'].map(l => item[l] ? [item[l].cat, item[l].name, item[l].desc].join(' ') : '').join(' ');
    let packs = Array.from(new Set((txt.match(/\d+(?:[.,]\d+)?\s*(?:kg|кг)\b/gi) || []).map(s => parseFloat(s.replace(',', '.')))))
      .filter(v => v >= 0.3 && v <= 25).sort((a, b) => a - b);
    if (off && off.packs && off.packs.length) { const op = off.packs.map(kgOf).filter(v => v > 0).sort((a, b) => a - b); if (op.length) packs = op; }
    const info = d.dialog && d.dialog.querySelector('.pmodal__info');
    if (!info) return;
    const box = document.createElement('section');
    box.className = 'pmodal__fcalc';
    const h = document.createElement('h4'); h.className = 'pmodal__fcalc-title'; h.textContent = T().title;
    const w = document.createElement('div');
    box.append(h, w);
    const tags = info.querySelector('.product__tags');
    info.insertBefore(box, tags || null);
    mount(w, { species: sp, packs: packs.length ? packs : null, table });
  });
  // ---------- каталог: всплывающая подсказка «подбор корма по весу» + калькулятор в окне ----------
  // Раз за сессию, через ~1.5с после входа в каталог (не поверх открытого товара). «Рассчитать» открывает калькулятор
  // в своём окне; после этого подсказка больше не показывается. Уходит сама через 10с (наведение / фокус держат).
  const S = () => window.NPSpring;
  const store = (k, v, local) => { try { const st = local ? localStorage : sessionStorage; if (v === undefined) return st.getItem(k); st.setItem(k, v); } catch (e) { return null; } };
  let tip = null, tipTimer = 0, dlg = null, dlgBack = null;
  function hideTip(remember) {
    if (!tip) return;
    clearTimeout(tipTimer);
    if (remember) store('np:fctip', '1', true);
    if (S() && S().ghostOut) S().ghostOut(tip, { transform: 'translateY(16px) scale(0.96)', filter: 'blur(4px)' }, 200);
    tip.remove(); tip = null;
  }
  function showTip() {
    if (tip || document.body.classList.contains('modal-open') || document.querySelector('.fc-dlg')) return;
    const t = T();
    tip = document.createElement('div');
    tip.className = 'fc-tip';
    tip.setAttribute('role', 'dialog'); tip.setAttribute('aria-modal', 'false'); tip.setAttribute('aria-labelledby', 'fcTipT');
    tip.innerHTML = `<div class="fc-tip__ico" aria-hidden="true">${BOWL}</div>
      <div class="fc-tip__txt"><p class="fc-tip__t" id="fcTipT">${t.tipTitle}</p><p class="fc-tip__p">${t.tipText}</p>
      <button type="button" class="btn btn--primary fc-tip__go">${t.tipBtn}</button></div>
      <button type="button" class="fc-tip__x" aria-label="${t.close}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>`;
    document.body.appendChild(tip);
    store('np:fctip-s', '1');
    if (S() && S().enter) S().enter(tip, { opacity: 0, transform: 'translateY(18px) scale(0.94)', filter: 'blur(6px)' }, [0.72, 0.5]);
    tip.querySelector('.fc-tip__x').addEventListener('click', () => hideTip(false));
    tip.querySelector('.fc-tip__go').addEventListener('click', e => { hideTip(true); openCalc(e.currentTarget); });
    const arm = () => { clearTimeout(tipTimer); tipTimer = setTimeout(() => hideTip(false), 10000); };
    tip.addEventListener('pointerenter', () => clearTimeout(tipTimer));
    tip.addEventListener('pointerleave', arm);
    tip.addEventListener('focusin', () => clearTimeout(tipTimer));
    arm();
  }
  function openCalc(origin) {
    if (dlg) return;
    const t = T();
    dlgBack = document.activeElement && document.activeElement !== document.body ? document.activeElement : origin;
    dlg = document.createElement('div');
    dlg.className = 'fc-dlg';
    dlg.innerHTML = `<div class="fc-dlg__bd"></div><div class="fc-dlg__panel" role="dialog" aria-modal="true" aria-labelledby="fcDlgT" tabindex="-1">
      <div class="fc-dlg__head"><h2 class="fc-dlg__t" id="fcDlgT">${t.title}</h2>
      <button type="button" class="fc-dlg__x" aria-label="${t.close}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
      <div class="fc-dlg__body"></div></div>`;
    document.body.appendChild(dlg);
    document.documentElement.classList.add('fc-lock');
    mount(dlg.querySelector('.fc-dlg__body'));
    const panel = dlg.querySelector('.fc-dlg__panel');
    if (S() && S().enter) {
      const phone = window.matchMedia('(max-width: 720px)').matches;
      S().enter(dlg.querySelector('.fc-dlg__bd'), { opacity: 0 }, [1, 0.3]);
      S().enter(panel, phone ? { transform: 'translateY(100%)' } : { opacity: 0, transform: 'translateY(24px) scale(0.96)' }, phone ? [0.9, 0.42] : [0.82, 0.48]);
    }
    panel.focus({ preventScroll: true });
    dlg.addEventListener('click', e => { if (e.target.closest('.fc-dlg__x') || e.target.classList.contains('fc-dlg__bd')) closeCalc(); });
    dlg.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); closeCalc(true); return; }
      if (e.key !== 'Tab') return;   // фокус не уходит из окна
      const f = Array.from(panel.querySelectorAll('button, input, summary, [href]')).filter(x => !x.disabled && x.getClientRects().length);
      if (!f.length) return;
      const a = document.activeElement;
      if (e.shiftKey && (a === f[0] || a === panel)) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && a === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
  }
  function closeCalc(keyboard) {
    if (!dlg) return;
    const phone = window.matchMedia('(max-width: 720px)').matches, panel = dlg.querySelector('.fc-dlg__panel');
    if (!keyboard && S() && S().ghostOut) {
      S().ghostOut(dlg.querySelector('.fc-dlg__bd'), {}, 220);
      S().ghostOut(panel, phone ? { transform: 'translateY(60%)' } : { transform: 'translateY(16px) scale(0.97)' }, phone ? 260 : 200);
    }
    dlg.remove(); dlg = null;
    document.documentElement.classList.remove('fc-lock');
    if (dlgBack && dlgBack.isConnected) dlgBack.focus({ preventScroll: true });
  }
  window.NPFeedCalc = { open: openCalc, tip: showTip };
  if (document.getElementById('productsGrid') && !store('np:fctip', undefined, true) && !store('np:fctip-s')) {
    const later = () => setTimeout(() => {
      if (document.body.classList.contains('modal-open')) { document.addEventListener('np:modal-close', later, { once: true }); return; }
      showTip();
    }, 1500);
    if (document.readyState === 'complete') later(); else window.addEventListener('load', later, { once: true });
  }
  document.addEventListener('np:lang', () => { if (tip) { const t = T(); tip.querySelector('.fc-tip__t').textContent = t.tipTitle; tip.querySelector('.fc-tip__p').textContent = t.tipText; tip.querySelector('.fc-tip__go').textContent = t.tipBtn; } });
})();
