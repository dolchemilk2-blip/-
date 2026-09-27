// ===== Мгновенный поиск по каталогу (ARIA 1.2 combobox) =====
// Пакет SEARCH: рендерит поле в #catalogSearch после 'np:ready'.
// API: window.NP (main.js). Хэш: #q=<текст> открывает результаты.

// --- Переводы модуля (вливаются до main.js) ---
Object.assign(TRANSLATIONS.az, {
  'search.label': 'Kataloq üzrə axtarış',
  'search.placeholder': '260+ məhsul arasında axtarış…',
  'search.clear': 'Təmizlə',
  'search.results': 'Axtarış nəticələri',
  'search.more': '+ daha {n}',
  'search.empty': 'Heç nə tapılmadı',
  'search.emptyHint': 'Başqa sözü yoxlayın: məsələn, "qızılbalıq", "лосось", "şampun" və ya "top".',
  'search.count': 'Tapıldı: {n}',
  'search.slash': 'Qısa düymə /',
  'search.shortcut': 'Ctrl K — axtarış'
});
Object.assign(TRANSLATIONS.ru, {
  'search.label': 'Поиск по каталогу',
  'search.placeholder': 'Поиск по 260+ товарам…',
  'search.clear': 'Очистить',
  'search.results': 'Результаты поиска',
  'search.more': '+ ещё {n}',
  'search.empty': 'Ничего не найдено',
  'search.emptyHint': 'Попробуйте другое слово: например, «лосось», «qızılbalıq», «шампунь» или «мяч».',
  'search.count': 'Найдено: {n}',
  'search.slash': 'Горячая клавиша /',
  'search.shortcut': 'Ctrl K — поиск'
});
Object.assign(TRANSLATIONS.en, {
  'search.label': 'Search the catalogue',
  'search.placeholder': 'Search 260+ products…',
  'search.clear': 'Clear',
  'search.results': 'Search results',
  'search.more': '+ {n} more',
  'search.empty': 'Nothing found',
  'search.emptyHint': 'Try another word, for example "salmon", "shampoo" or "ball".',
  'search.count': 'Found: {n}',
  'search.slash': 'Shortcut /',
  'search.shortcut': 'Ctrl K — search'
});

(function () {
  const BRAND_ORDER = ['np', 'araton', 'tpl', 'misoko'];
  const BRAND_NAMES = { np: "Nature's Protection", araton: 'Araton', tpl: 'Tauro Pro Line', misoko: 'Misoko' };
  const PER_BRAND = 6;
  const SLASH_KEY = 'np.search.slash';
  const OUT_MS = 300; // дольше обеих фаз «растворения» (см. search.css)

  let INDEX = [];
  let wrap, field, input, mirror, fakePh, clearBtn, pop, list, empty, countEl, slashBox, slashTxt, labelEl, emptyTitle, emptyHint;
  let results = [];      // плоский список видимых опций (entries; {more: brand} — строка «+ ещё N»)
  const expanded = new Set();   // бренды, раскрытые кнопкой «+ ещё N»
  let active = -1;
  let debounceT, clearT, liveT;

  const t = (k, vars) => {
    let s = (window.NP && NP.t(k)) || k;
    if (vars) Object.keys(vars).forEach(v => { s = s.replace('{' + v + '}', vars[v]); });
    return s;
  };
  const lang = () => (window.NP ? NP.lang() : 'ru');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Нормализация: нижний регистр, без диакритики, азербайджанские буквы → латиница
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/ə/g, 'e').replace(/ı/g, 'i')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^\p{L}\p{N}%]+/gu, ' ').trim();
  }

  // --- Индекс: все товары всех брендов в текущем языке + английское название ---
  function buildIndex() {
    const L = lang();
    const cat = NP.catalog();
    const seen = new Map();
    const add = (item, brand) => {
      const id = NP.productId(item, brand);
      if (!id || seen.has(id)) return;
      const tr = item[L] || item.ru || item.en || {};
      const en = item.en || {};
      const tags = (tr.tags || []).join(' ');
      seen.set(id, {
        id, brand, item,
        name: tr.name || en.name || '', cat: tr.cat || '',
        n: norm(tr.name), nEn: norm(en.name), nTags: norm(tags), nCat: norm(tr.cat), nDesc: norm(tr.desc),
        // другие языки интерфейса: двуязычные покупатели (RU ↔ AZ, AZ без диакритики)
        nAlt: norm(['az', 'ru', 'en'].filter(k => k !== L).map(k => { const x = item[k] || {}; return [x.name, (x.tags || []).join(' ')].join(' '); }).join(' '))
      });
    };
    BRAND_ORDER.forEach(b => (cat[b] || []).forEach(g => (g.items || []).forEach(it => add(it, b))));
    if (typeof TPL_SYSTEMS !== 'undefined') TPL_SYSTEMS.forEach(sys => (sys.steps || []).forEach(st => st.item && add(st.item, 'tpl')));
    INDEX = Array.from(seen.values());
  }

  const startsWord = (hay, w) => hay.startsWith(w) || hay.indexOf(' ' + w) >= 0;

  // Все слова должны найтись; ранг: префикс названия > название > теги/категория > описание
  function score(e, words, whole) {
    let s = 0;
    for (const w of words) {
      let best = 0;
      if (e.n.startsWith(w)) best = 100;
      else if (startsWord(e.n, w)) best = 85;
      else if (e.n.includes(w)) best = 60;
      else if (startsWord(e.nEn, w)) best = 55;
      else if (e.nEn.includes(w)) best = 45;
      else if (startsWord(e.nAlt, w)) best = 50;
      else if (e.nAlt.includes(w)) best = 40;
      else if (e.nTags.includes(w) || e.nCat.includes(w)) best = 30;
      else if (e.nDesc.includes(w)) best = 10;
      if (!best) return 0;
      s += best;
    }
    if (e.n.startsWith(whole)) s += 50;
    return s;
  }

  function search(q) {
    const whole = norm(q);
    if (!whole) return null;
    const words = whole.split(' ');
    const byBrand = {};
    INDEX.forEach(e => {
      const sc = score(e, words, whole);
      if (sc) (byBrand[e.brand] = byBrand[e.brand] || []).push({ e, sc });
    });
    const cur = NP.brand();
    const order = [cur].concat(BRAND_ORDER.filter(b => b !== cur));
    return order.filter(b => byBrand[b]).map(b => ({
      brand: b,
      hits: byBrand[b].sort((a, z) => z.sc - a.sc || a.e.name.localeCompare(z.e.name)).map(x => x.e)
    }));
  }

  function highlight(name, q) {
    const words = norm(q).split(' ').filter(Boolean);
    const n = norm(name);
    // Подсвечиваем, только если нормализация не изменила длину (иначе индексы не совпадут)
    if (n.length !== name.length || !words.length) return esc(name);
    const marks = new Array(name.length).fill(false);
    words.forEach(w => { let i = n.indexOf(w); while (i >= 0) { for (let k = i; k < i + w.length; k++) marks[k] = true; i = n.indexOf(w, i + w.length); } });
    let out = '', open = false;
    for (let i = 0; i < name.length; i++) {
      if (marks[i] !== open) { out += open ? '</mark>' : '<mark>'; open = marks[i]; }
      out += esc(name[i]);
    }
    return out + (open ? '</mark>' : '');
  }

  function thumb(e) {
    const fb = esc(e.item.emoji || '🐾');
    return e.item.img
      ? `<img src="${esc(e.item.img)}" alt="" width="40" height="40" loading="lazy" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'np-search__emoji',textContent:'${fb}'}))">`
      : `<span class="np-search__emoji">${fb}</span>`;
  }

  // --- Рендер выпадающего списка ---
  function render(announceIt, instant) {
    const q = input.value;
    const groups = search(q);
    results = []; active = -1;
    input.removeAttribute('aria-activedescendant');
    if (!groups) { clearTimeout(liveT); list.innerHTML = ''; setOpen(false, instant); return; }
    let total = 0, html = '';
    groups.forEach((g, gi) => {
      total += g.hits.length;
      const shown = g.hits.slice(0, expanded.has(g.brand) ? Infinity : PER_BRAND);
      const gid = 'npsG' + gi;
      html += `<li role="presentation" class="np-search__group"><div class="np-search__ghead" id="${gid}"><span>${esc(BRAND_NAMES[g.brand])}</span><span class="np-search__gcount">${g.hits.length}</span></div>`
        + `<ul role="group" aria-labelledby="${gid}">`;
      shown.forEach(e => {
        const i = results.length; results.push(e);
        html += `<li role="option" id="npsO${i}" class="np-search__opt" aria-selected="false" data-i="${i}">`
          + `<span class="np-search__thumb">${thumb(e)}</span>`
          + `<span class="np-search__txt"><span class="np-search__name">${highlight(e.name, q)}</span>`
          + `<span class="np-search__meta">${esc(e.cat)}<span class="np-search__dot" aria-hidden="true"> · </span>${esc(BRAND_NAMES[e.brand])}</span></span></li>`;
      });
      if (shown.length < g.hits.length) {
        const i = results.length; results.push({ more: g.brand });
        html += `<li role="option" id="npsO${i}" class="np-search__opt np-search__more" aria-selected="false" data-i="${i}">${esc(t('search.more', { n: g.hits.length - shown.length }))}</li>`;
      }
      html += '</ul></li>';
    });
    list.innerHTML = html;
    list.hidden = !total;
    empty.hidden = !!total;
    countEl.textContent = t('search.count', { n: total });
    setOpen(true, instant);
    if (announceIt !== false) {
      clearTimeout(liveT);
      liveT = setTimeout(() => announce(total ? t('search.count', { n: total }) : t('search.empty')), 450);
    }
  }

  function announce(text) {
    const live = document.getElementById('npLive');
    if (!live) return;
    live.textContent = '';
    setTimeout(() => { live.textContent = text; }, 30);
  }

  // instant: открытие/закрытие с клавиатуры (набор текста, Esc, стрелки) — без анимации
  function setOpen(open, instant) {
    if (open !== wrap.classList.contains('is-open')) wrap.classList.toggle('is-instant', !!instant);
    wrap.classList.toggle('is-open', open);
    input.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open) { active = -1; input.removeAttribute('aria-activedescendant'); }
    else if (window.NPMobile) window.NPMobile.placeSearch();
  }

  function setActive(i) {
    const prev = list.querySelector('[aria-selected="true"]');
    if (prev) prev.setAttribute('aria-selected', 'false');
    active = i;
    if (i < 0) { input.removeAttribute('aria-activedescendant'); return; }
    const el = document.getElementById('npsO' + i);
    if (!el) return;
    el.setAttribute('aria-selected', 'true');
    input.setAttribute('aria-activedescendant', el.id);
    el.scrollIntoView({ block: 'nearest' });
  }

  function choose(i, instant) {
    const e = results[i];
    if (!e) return;
    if (e.more) {   // «+ ещё N»: раскрыть бренд целиком, фокус — на первый новый результат
      expanded.add(e.more);
      render(false, true);
      const k = results.findIndex(r => !r.more && r.brand === e.more);
      setActive(k >= 0 && results[k + PER_BRAND] ? k + PER_BRAND : k);
      return;
    }
    setOpen(false, instant);
    NP.openProduct(e.id);
  }

  // --- Хэш #q= ---
  function readHashQ() {
    const m = /(?:^|&)q=([^&]*)/.exec(location.hash.slice(1));
    if (!m) return null;
    try { return decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch (e) { return m[1]; }
  }
  function writeHashQ() {
    const h = location.hash.slice(1);
    if (h && !/^q=/.test(h)) return; // не трогаем #p= / #brand=
    const v = input.value.trim();
    const url = location.pathname + location.search + (v ? '#q=' + encodeURIComponent(v) : '');
    try { history.replaceState(history.state, '', url); } catch (e) { /* file:// в некоторых браузерах */ }
  }

  function syncValue() { field.classList.toggle('has-value', input.value.length > 0); }

  // «Растворение» текста при очистке (brief_transitions §13)
  function clearSearch(instant) {
    if (!input.value) return;
    expanded.clear();
    mirror.textContent = input.value;
    input.value = '';
    syncValue();
    field.classList.remove('is-clearing'); void field.offsetWidth; field.classList.add('is-clearing');
    clearTimeout(clearT);
    clearT = setTimeout(() => { field.classList.remove('is-clearing'); mirror.textContent = ''; }, OUT_MS);
    clearTimeout(debounceT);
    render(false, instant === true);
    writeHashQ();
    input.focus({ preventScroll: true });
  }

  const slashEnabled = () => { try { return localStorage.getItem(SLASH_KEY) !== '0'; } catch (e) { return true; } };

  function applyTexts() {
    labelEl.textContent = t('search.label');
    input.setAttribute('placeholder', t('search.placeholder'));
    fakePh.textContent = t('search.placeholder');
    clearBtn.setAttribute('aria-label', t('search.clear'));
    list.setAttribute('aria-label', t('search.results'));
    emptyTitle.textContent = t('search.empty');
    emptyHint.textContent = t('search.emptyHint');
    slashTxt.textContent = t('search.slash');
    wrap.querySelector('.np-search__kbd').textContent = /Mac|iPhone|iPad/.test(navigator.platform || '') ? '⌘K' : 'Ctrl K';
  }

  function mount() {
    const host = document.getElementById('catalogSearch');
    if (!host || !window.NP || host.querySelector('.np-search')) return;
    host.innerHTML = `
      <div class="np-search">
        <label class="sr-only" for="npSearchInput"></label>
        <div class="np-search__field t-clear">
          <svg class="np-search__icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          <input id="npSearchInput" type="search" role="combobox" autocomplete="off" spellcheck="false" enterkeyhint="search"
                 aria-autocomplete="list" aria-expanded="false" aria-controls="npSearchList" aria-haspopup="listbox" />
          <div class="t-clear-mirror" aria-hidden="true"></div>
          <div class="t-clear-placeholder" aria-hidden="true"></div>
          <kbd class="np-search__kbd" aria-hidden="true"></kbd>
          <button class="t-clear-btn" type="button" tabindex="-1"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>
        </div>
        <div class="np-search__pop">
          <ul class="np-search__list" id="npSearchList" role="listbox"></ul>
          <div class="np-search__empty" hidden><strong></strong><p></p></div>
          <div class="np-search__foot">
            <span class="np-search__count"></span>
            <label class="np-search__slash"><input type="checkbox" /> <span></span></label>
          </div>
        </div>
      </div>`;
    wrap = host.querySelector('.np-search');
    field = wrap.querySelector('.np-search__field');
    labelEl = wrap.querySelector('label.sr-only');
    input = wrap.querySelector('#npSearchInput');
    mirror = wrap.querySelector('.t-clear-mirror');
    fakePh = wrap.querySelector('.t-clear-placeholder');
    clearBtn = wrap.querySelector('.t-clear-btn');
    pop = wrap.querySelector('.np-search__pop');
    list = wrap.querySelector('.np-search__list');
    empty = wrap.querySelector('.np-search__empty');
    emptyTitle = empty.querySelector('strong');
    emptyHint = empty.querySelector('p');
    countEl = wrap.querySelector('.np-search__count');
    slashBox = wrap.querySelector('.np-search__slash input');
    slashTxt = wrap.querySelector('.np-search__slash span');
    slashBox.checked = slashEnabled();
    applyTexts();
    buildIndex();

    input.addEventListener('input', () => {
      if (input.value) field.classList.remove('is-clearing');
      syncValue();
      expanded.clear();
      clearTimeout(debounceT);
      debounceT = setTimeout(() => { render(undefined, true); writeHashQ(); }, 80);
    });
    input.addEventListener('focus', () => { if (input.value && !wrap.classList.contains('is-open')) render(false); });
    input.addEventListener('keydown', e => {
      const open = wrap.classList.contains('is-open');
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (!input.value) return;
        e.preventDefault();
        if (!open) { clearTimeout(debounceT); render(false, true); }
        if (!results.length) return;
        const n = results.length, d = e.key === 'ArrowDown' ? 1 : -1;
        setActive(active < 0 ? (d > 0 ? 0 : n - 1) : (active + d + n) % n);
      } else if (e.key === 'Enter') {
        if (!input.value) return;
        e.preventDefault();
        clearTimeout(debounceT);
        if (!open) render(false, true);
        choose(active >= 0 ? active : 0, true);
      } else if (e.key === 'Escape') {
        if (input.value) { e.preventDefault(); clearSearch(true); }
        else if (open) { e.preventDefault(); setOpen(false, true); }
      }
    });
    clearBtn.addEventListener('pointerdown', e => e.preventDefault());
    clearBtn.addEventListener('click', e => clearSearch(e.detail === 0));
    list.addEventListener('pointerdown', e => e.preventDefault()); // фокус остаётся в поле
    list.addEventListener('click', e => {
      const o = e.target.closest('[role="option"]');
      if (o) choose(+o.getAttribute('data-i'));
    });
    list.addEventListener('pointermove', e => {
      const o = e.target.closest('[role="option"]');
      if (o && +o.getAttribute('data-i') !== active) setActive(+o.getAttribute('data-i'));
    });
    wrap.addEventListener('focusout', e => { if (!wrap.contains(e.relatedTarget)) setOpen(false); });
    document.addEventListener('pointerdown', e => { if (wrap && !wrap.contains(e.target)) setOpen(false); });
    slashBox.addEventListener('change', () => {
      try { localStorage.setItem(SLASH_KEY, slashBox.checked ? '1' : '0'); } catch (e) { /* приватный режим */ }
    });

    // Горячие клавиши: Ctrl/⌘+K всегда, «/» — если не отключена и фокус не в поле ввода
    document.addEventListener('keydown', e => {
      if (document.body.classList.contains('modal-open')) return;
      const k = (e.key || '').toLowerCase();
      const isCmdK = k === 'k' && (e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey;
      const isSlash = e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey;
      if (!isCmdK && !isSlash) return;
      if (isSlash) {
        const tg = e.target;
        if (tg && (tg.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName))) return;
        if (!slashEnabled()) return;
      }
      e.preventDefault();
      input.focus({ preventScroll: false });
      input.select();
    });

    document.addEventListener('np:lang', () => {
      applyTexts();
      buildIndex();
      if (wrap.classList.contains('is-open')) render(false);
    });
    document.addEventListener('np:modal-open', () => setOpen(false, true));
    window.addEventListener('hashchange', () => {
      const q = readHashQ();
      if (q != null && q !== input.value) { input.value = q; syncValue(); render(); }
    });

    const q0 = readHashQ();
    if (q0) {
      input.value = q0; syncValue();
      input.focus({ preventScroll: true });
      render();
    }
  }

  document.addEventListener('np:ready', mount);
  // Если модуль подключили после np:ready
  if (window.NP && document.readyState === 'complete' && document.querySelector('.catalog-grid, #productsGrid')) setTimeout(mount, 0);
})();
