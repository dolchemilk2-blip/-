// ===== «Мой список» — избранное (heart toggle, toast с отменой, кнопка + панель, печать, копирование) =====
(function () {
  'use strict';

  // --- i18n: ключи модуля добавляются до того, как main.js применит data-i18n ---
  if (typeof TRANSLATIONS !== 'undefined') {
    Object.assign(TRANSLATIONS.az, {
      'list.add': 'Siyahıma əlavə et',
      'list.remove': 'Siyahımdan çıxar',
      'list.added': 'Siyahıma əlavə edildi',
      'list.removed': 'Siyahıdan çıxarıldı',
      'list.undo': 'Geri qaytar',
      'list.title': 'Mənim siyahım',
      'list.empty': 'Siyahınız hələ boşdur. Məhsulu yadda saxlamaq üçün ürək işarəsinə toxunun.',
      'list.print': 'Çap et',
      'list.copy': 'Siyahını kopyala',
      'list.copied': 'Kopyalandı',
      'list.copyFail': 'Kopyalamaq alınmadı',
      'list.close': 'Bağla',
      'list.removeItem': 'Siyahıdan çıxar',
      'list.fab': 'Mənim siyahım, məhsul sayı:'
    });
    Object.assign(TRANSLATIONS.ru, {
      'list.add': 'Добавить в мой список',
      'list.remove': 'Убрать из моего списка',
      'list.added': 'Добавлено в мой список',
      'list.removed': 'Убрано из списка',
      'list.undo': 'Отменить',
      'list.title': 'Мой список',
      'list.empty': 'Список пока пуст. Нажмите на сердечко у товара, чтобы сохранить его.',
      'list.print': 'Печать',
      'list.copy': 'Скопировать список',
      'list.copied': 'Скопировано',
      'list.copyFail': 'Не удалось скопировать',
      'list.close': 'Закрыть',
      'list.removeItem': 'Убрать из списка',
      'list.fab': 'Мой список, товаров:'
    });
    Object.assign(TRANSLATIONS.en, {
      'list.add': 'Add to my list',
      'list.remove': 'Remove from my list',
      'list.added': 'Added to my list',
      'list.removed': 'Removed from list',
      'list.undo': 'Undo',
      'list.title': 'My list',
      'list.empty': 'Your list is empty. Tap the heart on a product to save it.',
      'list.print': 'Print',
      'list.copy': 'Copy list',
      'list.copied': 'Copied',
      'list.copyFail': 'Could not copy',
      'list.close': 'Close',
      'list.removeItem': 'Remove from list',
      'list.fab': 'My list, items:'
    });
  }

  const KEY = 'np:list';
  const BRANDS = { np: "Nature's Protection", araton: 'Araton', tpl: 'Tauro Pro Line', misoko: 'Misoko' };
  const TOAST_MS = 4000;
  const HEART = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lang = () => (window.NP && NP.lang && NP.lang()) || document.documentElement.lang || 'ru';
  function t(k) {
    if (typeof TRANSLATIONS === 'undefined') return k;
    const d = TRANSLATIONS[lang()] || TRANSLATIONS.ru;
    return (d && d[k]) || (TRANSLATIONS.ru && TRANSLATIONS.ru[k]) || k;
  }
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // --- хранилище ---
  function load() {
    try { const v = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v.filter(x => typeof x === 'string') : []; }
    catch (e) { return []; }
  }
  let ids = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(ids)); } catch (e) { /* private mode */ } }
  const has = (id) => ids.indexOf(id) !== -1;

  function info(id) {
    const f = window.NP && NP.findById ? NP.findById(id) : null;
    if (!f) return null;
    const tx = f.item[lang()] || f.item.ru || {};
    return { id, name: tx.name || '', brand: BRANDS[f.brand] || f.brand, img: f.item.img || '', emoji: f.item.emoji || '🐾' };
  }

  // Смена «на месте»: мгновенно ставим стартовое состояние, на следующем кадре отпускаем transition
  function pop(el) {
    if (!el || reduced()) return;
    el.classList.add('is-pop-start');
    void el.offsetWidth;
    requestAnimationFrame(() => el.classList.remove('is-pop-start'));
  }

  // --- кнопка-сердечко ---
  function makeHeart(id) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'np-heart';
    b.dataset.heart = id;
    b.innerHTML = HEART;
    syncHeart(b);
    b.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      const added = toggle(id);
      if (added && e.detail !== 0) pop(b);
    });
    return b;
  }
  function syncHeart(b) {
    const on = has(b.dataset.heart);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.setAttribute('aria-label', t(on ? 'list.remove' : 'list.add'));
    b.title = t(on ? 'list.remove' : 'list.add');
  }
  function syncHearts() { document.querySelectorAll('.np-heart').forEach(syncHeart); }

  function injectCards() {
    document.querySelectorAll('.product__actions').forEach(slot => {
      if (slot.querySelector('.np-heart')) return;
      const card = slot.closest('[data-id]');
      if (card && card.dataset.id) slot.appendChild(makeHeart(card.dataset.id));
    });
  }

  // --- изменение списка ---
  function setList(next, silent) {
    ids = next;
    save();
    syncHearts();
    updateFab();
    if (panelOpen) renderPanel();
  }
  function toggle(id) {
    const prev = ids.slice();
    const added = !has(id);
    setList(added ? ids.concat(id) : ids.filter(x => x !== id));
    toast(t(added ? 'list.added' : 'list.removed'), () => setList(prev));
    return added;
  }

  // --- toast ---
  let toastRoot, toastEl, toastText, toastUndo, toastTimer = 0, toastLeft = 0, toastStart = 0, undoFn = null;
  function buildToast() {
    toastRoot = document.createElement('div');
    toastRoot.className = 'np-toast-region';
    toastRoot.innerHTML = '<div class="np-toast"><span class="np-toast__text" role="status" aria-live="polite" aria-atomic="true"></span><button type="button" class="np-toast__undo"></button></div>';
    document.body.appendChild(toastRoot);
    toastEl = toastRoot.firstChild;
    toastText = toastEl.querySelector('.np-toast__text');
    toastUndo = toastEl.querySelector('.np-toast__undo');
    toastUndo.addEventListener('click', () => { const f = undoFn; undoFn = null; hideToast(); if (f) f(); });
    const pause = () => { if (!toastTimer) return; clearTimeout(toastTimer); toastTimer = 0; toastLeft = Math.max(1200, toastLeft - (Date.now() - toastStart)); };
    const resume = () => { if (toastTimer || !toastEl.classList.contains('is-open')) return; if (toastEl.matches(':hover') || toastEl.contains(document.activeElement)) return; arm(toastLeft); };
    toastEl.addEventListener('pointerenter', pause);
    toastEl.addEventListener('focusin', pause);
    toastEl.addEventListener('pointerleave', resume);
    toastEl.addEventListener('focusout', () => setTimeout(resume, 0));
  }
  function arm(ms) { clearTimeout(toastTimer); toastLeft = ms; toastStart = Date.now(); toastTimer = setTimeout(hideToast, ms); }
  function hideToast() { clearTimeout(toastTimer); toastTimer = 0; toastEl.classList.remove('is-open'); undoFn = null; }
  function toast(msg, undo) {
    if (!toastEl) buildToast();
    undoFn = undo || null;
    toastText.textContent = msg;          // уже открыт — только меняем текст, без повторной анимации
    toastUndo.textContent = t('list.undo');
    toastUndo.hidden = !undo;
    if (!toastEl.classList.contains('is-open')) { void toastEl.offsetWidth; toastEl.classList.add('is-open'); }
    if (toastEl.matches(':hover') || toastEl.contains(document.activeElement)) { clearTimeout(toastTimer); toastTimer = 0; toastLeft = TOAST_MS; }
    else arm(TOAST_MS);
  }

  // --- плавающая кнопка ---
  let fab, fabCount, lastCount = -1;
  function buildFab() {
    fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'np-fab';
    fab.innerHTML = HEART + '<span class="np-fab__label"></span><span class="np-fab__count" aria-hidden="true"></span>';
    fabCount = fab.querySelector('.np-fab__count');
    fab.addEventListener('click', () => openPanel(fab));
    document.body.appendChild(fab);
  }
  function updateFab() {
    if (!fab) return;
    const n = ids.length;
    fab.querySelector('.np-fab__label').textContent = t('list.title');
    fab.setAttribute('aria-label', t('list.fab') + ' ' + n);
    fabCount.textContent = n;
    const show = n > 0;
    fab.classList.toggle('is-visible', show);
    fab.tabIndex = show ? 0 : -1;
    fab.setAttribute('aria-hidden', show ? 'false' : 'true');
    if (lastCount !== -1 && n !== lastCount && show) pop(fabCount);
    lastCount = n;
  }

  // --- панель (drawer / bottom sheet) ---
  let panel, sheet, listEl, emptyEl, titleEl, opener = null, panelOpen = false, closeTimer = 0;
  const mqSheet = window.matchMedia ? matchMedia('(max-width: 640px)') : { matches: false };
  function buildPanel() {
    panel = document.createElement('div');
    panel.className = 'np-listpanel';
    panel.hidden = true;
    panel.innerHTML =
      '<div class="np-listpanel__scrim" data-list-close></div>' +
      '<div class="np-listpanel__sheet" role="dialog" aria-modal="true" aria-labelledby="npListTitle" tabindex="-1">' +
        '<div class="np-listpanel__grip" aria-hidden="true"></div>' +
        '<div class="np-listpanel__head"><h2 class="np-listpanel__title" id="npListTitle"></h2>' +
        '<button type="button" class="np-listpanel__close" data-list-close>&times;</button></div>' +
        '<p class="np-listpanel__empty"></p>' +
        '<ul class="np-listpanel__list"></ul>' +
        '<div class="np-listpanel__foot"><button type="button" class="np-btn" data-list-print></button>' +
        '<button type="button" class="np-btn np-btn--primary" data-list-copy></button></div>' +
      '</div>';
    document.body.appendChild(panel);
    sheet = panel.querySelector('.np-listpanel__sheet');
    listEl = panel.querySelector('.np-listpanel__list');
    emptyEl = panel.querySelector('.np-listpanel__empty');
    titleEl = panel.querySelector('.np-listpanel__title');

    panel.addEventListener('click', (e) => {
      if (e.target.closest('[data-list-close]')) return closePanel(true);
      if (e.target.closest('[data-list-print]')) return printList();
      if (e.target.closest('[data-list-copy]')) return copyList();
      const rm = e.target.closest('[data-remove]');
      if (rm) return removeFromPanel(rm.dataset.remove, rm);
      const op = e.target.closest('[data-open]');
      if (op) { const id = op.dataset.open; closePanel(false); if (window.NP && NP.openProduct) NP.openProduct(id); }
    });
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closePanel(true); return; }
      if (e.key !== 'Tab') return;
      const f = Array.from(sheet.querySelectorAll('button:not([disabled]):not([hidden]), [href]')).filter(x => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === sheet)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    initDrag();
  }

  function renderPanel() {
    titleEl.textContent = t('list.title');
    const close = panel.querySelector('.np-listpanel__close');
    close.setAttribute('aria-label', t('list.close'));
    panel.querySelector('[data-list-print]').textContent = t('list.print');
    panel.querySelector('[data-list-copy]').textContent = t('list.copy');
    const items = ids.map(info).filter(Boolean);
    emptyEl.textContent = t('list.empty');
    emptyEl.hidden = items.length > 0;
    panel.querySelector('.np-listpanel__foot').hidden = items.length === 0;
    listEl.innerHTML = items.map(it =>
      '<li class="np-li">' +
        '<button type="button" class="np-li__open" data-open="' + esc(it.id) + '">' +
          '<span class="np-li__thumb">' + (it.img ? '<img src="' + esc(it.img) + '" alt="" loading="lazy">' : esc(it.emoji)) + '</span>' +
          '<span class="np-li__text"><span class="np-li__name">' + esc(it.name) + '</span><span class="np-li__brand">' + esc(it.brand) + '</span></span>' +
        '</button>' +
        '<button type="button" class="np-li__remove" data-remove="' + esc(it.id) + '" aria-label="' + esc(t('list.removeItem') + ': ' + it.name) + '">&times;</button>' +
      '</li>').join('');
  }

  function removeFromPanel(id, btn) {
    const li = btn.closest('li');
    const nextLi = li && (li.nextElementSibling || li.previousElementSibling);
    const nextId = nextLi && nextLi.querySelector('[data-remove]').dataset.remove;
    const prev = ids.slice();
    setList(ids.filter(x => x !== id));
    toast(t('list.removed'), () => setList(prev));
    const target = nextId && listEl.querySelector('[data-remove="' + CSS.escape(nextId) + '"]');
    (target || panel.querySelector('.np-listpanel__close')).focus();
  }

  function openPanel(from) {
    if (!panel) buildPanel();
    if (panelOpen) return;
    clearTimeout(closeTimer);
    opener = from || document.activeElement;
    panelOpen = true;
    renderPanel();
    panel.hidden = false;
    panel.classList.toggle('is-sheet', mqSheet.matches);
    sheet.style.transform = '';
    document.documentElement.classList.add('np-list-open');
    void panel.offsetWidth;
    panel.classList.add('is-open');
    const first = listEl.querySelector('button') || panel.querySelector('.np-listpanel__close');
    first.focus({ preventScroll: true });
  }
  function closePanel(restore) {
    if (!panelOpen) return;
    panelOpen = false;
    sheet.style.transform = '';
    sheet.style.transition = '';
    panel.classList.remove('is-open');
    document.documentElement.classList.remove('np-list-open');
    const done = () => { if (!panelOpen) panel.hidden = true; };
    closeTimer = setTimeout(done, reduced() ? 0 : 300);
    if (restore) {
      const back = opener && document.contains(opener) && opener.offsetParent !== null ? opener : (fab && fab.classList.contains('is-visible') ? fab : null);
      if (back) back.focus({ preventScroll: true });
    }
    opener = null;
  }

  // Drag-to-dismiss для bottom sheet: >0.11 px/ms или >25% высоты
  function initDrag() {
    let startY = 0, lastY = 0, lastT = 0, vel = 0, dragging = false, h = 0;
    sheet.addEventListener('pointerdown', (e) => {
      if (!panel.classList.contains('is-sheet') || e.button !== 0) return;
      const onGrip = e.target.closest('.np-listpanel__grip, .np-listpanel__head');
      if (!onGrip || e.target.closest('button')) return;
      dragging = true; startY = lastY = e.clientY; lastT = e.timeStamp; vel = 0; h = sheet.offsetHeight;
      sheet.setPointerCapture(e.pointerId);
      sheet.style.transition = 'none';
    });
    sheet.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dy = e.clientY - startY;
      const dt = Math.max(1, e.timeStamp - lastT);
      vel = (e.clientY - lastY) / dt; lastY = e.clientY; lastT = e.timeStamp;
      const y = dy > 0 ? dy : dy / 4; // вверх — с сопротивлением
      sheet.style.transform = 'translate3d(0,' + y + 'px,0)';
    });
    const end = (e) => {
      if (!dragging) return;
      dragging = false;
      const dy = e.clientY - startY;
      sheet.style.transition = '';
      if (dy > 0 && (vel > 0.11 || dy > h * 0.25)) closePanel(true);
      else sheet.style.transform = '';
    };
    sheet.addEventListener('pointerup', end);
    sheet.addEventListener('pointercancel', end);
  }

  // --- печать и копирование ---
  function lines() { return ids.map(info).filter(Boolean); }
  function printList() {
    let box = document.getElementById('npPrintList');
    if (!box) { box = document.createElement('div'); box.id = 'npPrintList'; box.className = 'np-print'; document.body.appendChild(box); }
    box.innerHTML = '<h1>' + esc(t('list.title')) + '</h1><ul>' +
      lines().map(it => '<li><span class="np-print__box" aria-hidden="true"></span>' + esc(it.name) + ' — ' + esc(it.brand) + '</li>').join('') + '</ul>';
    document.documentElement.classList.add('np-printing');
    const off = () => { document.documentElement.classList.remove('np-printing'); window.removeEventListener('afterprint', off); };
    window.addEventListener('afterprint', off);
    try { window.print(); } catch (e) { /* ignore */ }
    setTimeout(off, 1000);
  }
  function copyList() {
    const text = lines().map(it => it.name + ' — ' + it.brand).join('\n');
    const ok = () => toast(t('list.copied'));
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      sheet.appendChild(ta); ta.select();
      let res = false; try { res = document.execCommand('copy'); } catch (e) { /* ignore */ }
      ta.remove();
      const back = panel.querySelector('[data-list-copy]'); if (back) back.focus({ preventScroll: true });
      res ? ok() : toast(t('list.copyFail'));
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback);
    else fallback();
  }

  // --- события ---
  document.addEventListener('np:render', injectCards);
  document.addEventListener('np:modal-open', (e) => {
    const d = e.detail || {};
    const root = d.dialog || document;
    const slot = root.querySelector ? root.querySelector('.pmodal__actions') : null;
    if (!slot || !d.id) return;
    slot.querySelectorAll('.np-heart').forEach(n => n.remove());
    slot.insertBefore(makeHeart(d.id), slot.firstChild);
  });
  document.addEventListener('np:lang', () => {
    syncHearts(); updateFab();
    if (panelOpen) renderPanel();
    if (toastUndo) toastUndo.textContent = t('list.undo');
  });
  window.addEventListener('storage', (e) => { if (e.key === KEY) setList(load()); });
  if (mqSheet.addEventListener) mqSheet.addEventListener('change', () => { if (panel) panel.classList.toggle('is-sheet', mqSheet.matches); });

  function init() { buildFab(); updateFab(); injectCards(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.NPList = { ids: () => ids.slice(), has, toggle, open: () => openPanel() };
})();
