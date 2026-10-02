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


  // Motion (js/spring.js, «Монтажка»): the heart swaps outline ↔ filled icons and sparks on a like; the list button
  // grows out of a pill like an island and bumps when something is added; the toast rises on a spring, can be
  // swiped away and leaves the way it came; the panel grows out of the button that opened it; rows that leave
  // ghost out while the rest glide up (FLIP). Keyboard-initiated opening / closing is instant.
  const S = window.NPSpring || null;
  const ok = () => !!(S && S.ok() && S.ready);

  const KEY = 'np:list';
  const BRANDS = { np: "Nature's Protection", araton: 'Araton', tpl: 'Tauro Pro Line', misoko: 'Misoko' };
  const TOAST_MS = 4000;
  const HEART = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  // outline (a) and filled (b) hearts share one cell — transitions.dev icon swap (css/spring.css .t-swap). The filled
  // one is only built for hearts that are (or once were) on: a grid of 100 cards renders half the icon nodes.
  const ICON_A = '<span data-icon="a">' + HEART + '</span>', ICON_B = '<span data-icon="b">' + HEART + '</span>';
  const CHECK = '<span class="np-check" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14" focusable="false"><path d="M3.4 8.4l3 3 6.2-6.9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lang = () => (window.NP && NP.lang && NP.lang()) || document.documentElement.lang || 'ru';
  function t(k) {
    if (typeof TRANSLATIONS === 'undefined') return k;
    const d = TRANSLATIONS[lang()] || TRANSLATIONS.ru;
    return (d && d[k]) || (TRANSLATIONS.ru && TRANSLATIONS.ru[k]) || k;
  }
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function announce(text) {
    const live = document.getElementById('npLive');
    if (!live) return;
    live.textContent = '';
    setTimeout(() => { live.textContent = text; }, 30);
  }

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

  // --- кнопка-сердечко ---
  function makeHeart(id) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'np-heart';
    b.dataset.heart = id;
    b.innerHTML = '<span class="np-heart__ic t-swap" data-state="a" aria-hidden="true">' + ICON_A + '</span>';
    syncHeart(b, true);
    b.addEventListener('click', (e) => {
      e.stopPropagation(); e.preventDefault();
      const added = toggle(id);
      if (added && e.detail !== 0) burst(b); else unburst(b);
    });
    return b;
  }
  /** fresh — a heart being built: it takes its state without a swap */
  function syncHeart(b, fresh) {
    const on = has(b.dataset.heart);
    const ic = b.firstElementChild;
    if (ic && ic.dataset.state !== (on ? 'b' : 'a')) {
      if (on && ic.childElementCount < 2) {
        ic.insertAdjacentHTML('beforeend', ICON_B);
        if (!fresh) getComputedStyle(ic.lastChild).opacity;   // first like: it exists hidden for a frame, so it can swap in
      }
      ic.dataset.state = on ? 'b' : 'a';   // the swap is a CSS transition: re-taps reverse it mid-way
    }
    if (b.getAttribute('aria-pressed') === (on ? 'true' : 'false') && b.title === t(on ? 'list.remove' : 'list.add')) return;
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.setAttribute('aria-label', t(on ? 'list.remove' : 'list.add'));
    b.title = t(on ? 'list.remove' : 'list.add');
  }
  function syncHearts() { document.querySelectorAll('.np-heart').forEach(b => syncHeart(b)); }

  // Like (never unlike): a ring and six sparks fly off the heart (transitions.dev like button). Two nodes, built on
  // demand and removed when done (the hundred hearts in the grid carry nothing extra): the ring, and one dot whose
  // box-shadow copies are the sparks — scaling it throws them outward. Both animate on the compositor only.
  function burst(b) {
    unburst(b);
    if (!ok()) return;
    const box = document.createElement('span');
    box.className = 'np-burst';
    box.setAttribute('aria-hidden', 'true');
    box.innerHTML = '<i class="np-burst__ring"></i><i class="np-burst__dots"></i>';
    b.appendChild(box);
    const turn = Math.round(Math.random() * 60) + 'deg';   // a different spray every time
    box.firstChild.animate([{ transform: 'scale(0.35)', opacity: 0.6 }, { transform: 'scale(1.3)', opacity: 0 }], { duration: 420, easing: S.EASE });
    box.lastChild.animate([
      { transform: 'rotate(' + turn + ') scale(0.3)', opacity: 0 },
      { transform: 'rotate(' + turn + ') scale(0.75)', opacity: 1, offset: 0.25 },
      { transform: 'rotate(' + turn + ') scale(1.25)', opacity: 0 }
    ], { duration: 520, easing: S.EASE, delay: 30 }).onfinish = () => box.remove();
  }
  function unburst(b) { const old = b.querySelector('.np-burst'); if (old) old.remove(); }

  function injectCards() {
    document.querySelectorAll('.product__actions').forEach(slot => {
      if (slot.querySelector('.np-heart')) return;
      const card = slot.closest('[data-id]');
      if (card && card.dataset.id) slot.appendChild(makeHeart(card.dataset.id));
    });
  }

  // --- изменение списка ---
  const rowKey = (li) => li.dataset.key;
  function setList(next) {
    ids = next;
    save();
    syncHearts();
    updateFab();
    if (!panelOpen) return;
    // rows keep their nodes across renders: the ones that stay glide to their new places, new ones rise in
    const before = ok() ? S.flipRecord(listEl.children, rowKey) : null;
    const wasEmpty = !emptyEl.hidden;
    const asSheet = panel.classList.contains('is-sheet'), h0 = before && asSheet ? sheet.offsetHeight : 0;
    const fresh = renderPanel();
    if (!before) return;
    // the bottom sheet hugs its rows: its top glides to the new height instead of jumping (rows FLIP inside it)
    const h1 = h0 ? sheet.offsetHeight : 0;
    if (Math.abs(h1 - h0) > 1) {
      const sp = S.ease(0.9, 0.36);
      sheet.animate([{ height: h0 + 'px' }, { height: h1 + 'px' }], { duration: sp.duration, easing: sp.easing });
    }
    S.flipPlay(before, listEl.children, rowKey, { damping: 0.86, response: 0.34 });
    fresh.slice(0, 8).forEach((li, i) => S.enter(li, { opacity: 0, transform: 'translateY(-6px) scale(0.98)' }, [0.86, 0.4], { delay: i * 40 }));
    if (!wasEmpty && !emptyEl.hidden) S.enter(emptyEl, { opacity: 0, transform: 'translateY(6px)' }, [1, 0.36], { delay: 60 });
  }
  function toggle(id) {
    const prev = ids.slice();
    const added = !has(id);
    setList(added ? ids.concat(id) : ids.filter(x => x !== id));
    toast(t(added ? 'list.added' : 'list.removed'), () => setList(prev));
    return added;
  }

  // --- toast ---
  // Enters like Монтажка's message: from 22px below, scale .9 and a 6px blur, on a spring (0.7, 0.5). Leaves the way
  // it came (220ms, a ghost copy — the real one is gone at once, a new toast can rise right away). Swipe down to
  // dismiss: 1:1 under the finger, rubber band upwards, a throw keeps its speed. Hover, focus and a drag pause the timer.
  let toastRoot, toastEl, toastText, toastUndo, toastTimer = 0, toastLeft = 0, toastStart = 0, undoFn = null;
  let toastOpen = false, toastHover = false, toastGhost = null;
  const TD = { m: null, drag: null };
  function buildToast() {
    toastRoot = document.createElement('div');
    toastRoot.className = 'np-toast-region';
    toastRoot.innerHTML = '<div class="np-toast"><span class="np-toast__text" role="status" aria-live="polite" aria-atomic="true"></span><button type="button" class="np-toast__undo"></button></div>';
    document.body.appendChild(toastRoot);
    toastEl = toastRoot.firstChild;
    toastText = toastEl.querySelector('.np-toast__text');
    toastUndo = toastEl.querySelector('.np-toast__undo');
    toastUndo.addEventListener('click', () => { const f = undoFn; undoFn = null; hideToast(); if (f) f(); });
    toastEl.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { toastHover = true; pauseToast(); } });
    toastEl.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { toastHover = false; resumeToast(); } });
    toastEl.addEventListener('focusin', pauseToast);
    toastEl.addEventListener('focusout', () => setTimeout(resumeToast, 0));
    initToastDrag();
  }
  function pauseToast() { if (!toastTimer) return; clearTimeout(toastTimer); toastTimer = 0; toastLeft = Math.max(1200, toastLeft - (Date.now() - toastStart)); }
  function resumeToast() {
    if (toastTimer || !toastOpen || TD.drag || toastHover || toastEl.contains(document.activeElement)) return;
    arm(toastLeft);
  }
  function arm(ms) { clearTimeout(toastTimer); toastLeft = ms; toastStart = Date.now(); toastTimer = setTimeout(() => hideToast(), ms); }
  function dropToastGhost() { if (toastGhost) { toastGhost.remove(); toastGhost = null; } }
  /** swipeV — the release speed (px/s) of a throw: the copy keeps flying down at it */
  function hideToast(swipeV) {
    clearTimeout(toastTimer); toastTimer = 0; undoFn = null;
    if (!toastOpen) return;
    toastOpen = false;
    dropToastGhost();
    if (ok()) {
      toastEl.getAnimations({ subtree: true }).forEach(a => a.finish());   // caught mid-entrance: the copy starts from rest
      const from = { opacity: parseFloat(toastEl.style.opacity) || 1 };
      let a;
      if (swipeV != null) {
        const r = toastEl.getBoundingClientRect(), dist = Math.max(60, window.innerHeight - r.top);
        const ms = Math.round(Math.max(120, Math.min(320, dist / Math.max(0.6, swipeV / 1000))));
        a = S.ghostOut(toastEl, { transform: 'translateY(' + Math.round(dist) + 'px)' }, ms, from);
      } else a = S.ghostOut(toastEl, { transform: 'translateY(26px) scale(0.94)', filter: 'blur(4px)' }, 220, from);
      if (a && a.effect && a.effect.target) {
        const g = toastGhost = a.effect.target;
        g.style.zIndex = '1200';
        g.querySelectorAll('[role], [aria-live]').forEach(x => { x.removeAttribute('role'); x.removeAttribute('aria-live'); });
        a.addEventListener('finish', () => { if (toastGhost === g) toastGhost = null; });
      }
    }
    toastEl.classList.remove('is-open');
    TD.drag = null;
    if (TD.m) S.set(TD.m, 0);
  }
  function toast(msg, undo) {
    if (!toastEl) buildToast();
    undoFn = undo || null;
    toastUndo.textContent = t('list.undo');
    toastUndo.hidden = !undo;
    if (toastOpen) {
      if (S) S.swapText(toastText, msg); else toastText.textContent = msg;   // already up: only the words change
    } else {
      toastText.textContent = msg;
      dropToastGhost();
      TD.drag = null;
      if (TD.m) S.set(TD.m, 0);
      toastEl.classList.add('is-open');
      toastOpen = true;
      if (S && S.ready) S.enter(toastEl, { opacity: 0, transform: 'translateY(22px) scale(0.9)', filter: 'blur(6px)' }, [0.7, 0.5]);
    }
    if (toastHover || TD.drag || toastEl.contains(document.activeElement)) { clearTimeout(toastTimer); toastTimer = 0; toastLeft = TOAST_MS; }
    else arm(TOAST_MS);
  }
  function initToastDrag() {
    if (!S) return;
    // individual `translate` property: composes with the spring entrance, which animates `transform`
    const owner = { render() {
      const y = TD.m.v, still = Math.abs(y) < 0.05 && !S.moving(TD.m);
      toastEl.style.translate = still ? '' : '0 ' + y.toFixed(2) + 'px';
      toastEl.style.opacity = y > 0.5 ? String(Math.max(0.2, 1 - y / 120)) : '';
    } };
    TD.m = S.mv(0, 0.05, owner);
    toastEl.addEventListener('pointerdown', (e) => {
      if (S.reduce() || e.button !== 0 || !toastOpen || e.target.closest('button')) return;   // Undo is pressed, not dragged
      try { toastEl.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      TD.drag = { id: e.pointerId, y0: e.clientY - TD.m.v, hist: [{ t: performance.now(), x: e.clientX, y: e.clientY }] };
      pauseToast();
    });
    toastEl.addEventListener('pointermove', (e) => {
      const d = TD.drag;
      if (!d || d.id !== e.pointerId) return;
      d.hist.push({ t: performance.now(), x: e.clientX, y: e.clientY });
      if (d.hist.length > 8) d.hist.shift();
      const y = e.clientY - d.y0;
      S.set(TD.m, y < 0 ? S.rubber(y, 80) : y);   // up is against the way out: rubber band
    });
    const end = (e) => {
      const d = TD.drag;
      if (!d || d.id !== e.pointerId) return;
      TD.drag = null;
      const v = S.velocityOf(d.hist).y, y = TD.m.v;
      if (y > 0 && (y + S.project(v) > 60 || v > 600)) { hideToast(Math.max(v, 400)); return; }   // thrown or pulled far: away
      S.to(TD.m, 0, { damping: 0.7, response: 0.4, velocity: v });                                 // not far enough: springs back
      resumeToast();
    };
    toastEl.addEventListener('pointerup', end);
    toastEl.addEventListener('pointercancel', end);
  }

  // --- плавающая кнопка ---
  // Appears like Монтажка's island: grows out of a pill (clip-path) while its content sharpens in; leaves faster
  // (a ghost copy shrinks back into the pill). The count changes by digits (NPSpring.num); adding bumps it.
  let fab, fabCount, lastCount = -1;
  function buildFab() {
    fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'np-fab';
    fab.innerHTML = HEART + '<span class="np-fab__label"></span><span class="np-fab__count" aria-hidden="true"></span>';
    fabCount = fab.querySelector('.np-fab__count');
    fab.addEventListener('click', (e) => openPanel(fab, e.detail === 0));
    document.body.appendChild(fab);
  }
  function fabClip(pill, R) { return pill ? 'inset(0 ' + pill + 'px round ' + R + 'px)' : 'inset(-28px round ' + (R + 28) + 'px)'; }   // open: room for the shadow
  function fabIn() {
    if (!ok()) return;
    const h = fab.offsetHeight, w = fab.offsetWidth, R = h / 2, pill = Math.max(1, Math.round(w / 2 - R));
    const sp = S.ease(0.74, 0.55);
    fab.animate([{ clipPath: fabClip(pill, R) }, { clipPath: fabClip(0, R) }], { duration: sp.duration, easing: sp.easing });
    Array.prototype.forEach.call(fab.children, c => {
      if (c.offsetWidth) S.enter(c, { opacity: 0, transform: 'scale(0.96)', filter: 'blur(5px)' }, [1, 0.4], { delay: 90 });
    });
  }
  function fabOut() {
    if (!ok()) return;
    fab.getAnimations({ subtree: true }).forEach(a => a.finish());   // caught mid-entrance: the copy starts from rest
    const h = fab.offsetHeight, w = fab.offsetWidth, R = h / 2, pill = Math.max(1, Math.round(w / 2 - R));
    const a = S.ghostOut(fab, { clipPath: fabClip(pill, R), filter: 'blur(3px)' }, 220, { clipPath: fabClip(0, R) });
    if (a && a.effect && a.effect.target) {
      const g = a.effect.target;
      g.style.zIndex = '1100';
      g.querySelectorAll('.is-animating, .is-tick').forEach(x => x.classList.remove('is-animating', 'is-tick'));   // digits must not replay in the copy
    }
  }
  // The bump is a spring's impulse response (kicked at rest, damping .45, response .34) baked into keyframes: it runs
  // on the compositor (the press spring writes `scale` from JS every frame — fine for a finger, wasteful for a bump).
  let bumpKF = null;
  function fabBump() {
    if (!ok() || S.tform(fab).s.v !== 1) return;   // being pressed: the press spring owns `scale`
    if (!bumpKF) {
      const w = 2 * Math.PI / 0.34, z = 0.45, wd = w * Math.sqrt(1 - z * z), v0 = 1.6, n = 24, T = 0.75;
      bumpKF = [];
      for (let i = 0; i <= n; i++) {
        const t = i / n * T, x = i === n ? 0 : v0 / wd * Math.exp(-z * w * t) * Math.sin(wd * t);
        bumpKF.push({ scale: (1 + x).toFixed(4) });
      }
    }
    fab.animate(bumpKF, { duration: 750, easing: 'linear' });
  }
  function updateFab() {
    if (!fab) return;
    const n = ids.length, show = n > 0, was = fab.classList.contains('is-visible');
    const lbl = fab.querySelector('.np-fab__label');
    if (lbl.textContent !== t('list.title')) lbl.textContent = t('list.title');
    fab.setAttribute('aria-label', t('list.fab') + ' ' + n);
    if (was && !show) fabOut();   // the copy leaves with the old number
    if (S) S.num(fabCount, String(n)); else fabCount.textContent = n;
    fab.classList.toggle('is-visible', show);
    fab.tabIndex = show ? 0 : -1;
    fab.setAttribute('aria-hidden', show ? 'false' : 'true');
    if (lastCount !== -1 && show) {
      if (!was) fabIn();
      else if (n > lastCount) fabBump();
    }
    lastCount = n;
  }

  // --- панель (drawer / bottom sheet) ---
  let panel, sheet, listEl, emptyEl, titleEl, copyBtn, opener = null, panelOpen = false, closeTimer = 0;
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
        '<button type="button" class="np-btn np-btn--primary" data-list-copy><span class="np-btn__lbl"></span></button></div>' +
      '</div>';
    document.body.appendChild(panel);
    sheet = panel.querySelector('.np-listpanel__sheet');
    listEl = panel.querySelector('.np-listpanel__list');
    emptyEl = panel.querySelector('.np-listpanel__empty');
    titleEl = panel.querySelector('.np-listpanel__title');
    copyBtn = panel.querySelector('[data-list-copy]');

    panel.addEventListener('click', (e) => {
      if (e.target.closest('[data-list-close]')) return closePanel(true, e.detail === 0);
      if (e.target.closest('[data-list-print]')) return printList();
      if (e.target.closest('[data-list-copy]')) return copyList();
      const rm = e.target.closest('[data-remove]');
      if (rm) return removeFromPanel(rm.dataset.remove, rm);
      const op = e.target.closest('[data-open]');
      if (op) { const id = op.dataset.open; closePanel(false); if (window.NP && NP.openProduct) NP.openProduct(id); }
    });
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closePanel(true, true); return; }
      if (e.key !== 'Tab') return;
      const f = Array.from(sheet.querySelectorAll('button:not([disabled]):not([hidden]), [href]')).filter(x => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === sheet)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    initDrag();
  }

  function rowHtml(it) {
    return '<button type="button" class="np-li__open" data-open="' + esc(it.id) + '">' +
        '<span class="np-li__thumb">' + (it.img ? '<img src="' + esc(it.img) + '" alt="" loading="lazy">' : esc(it.emoji)) + '</span>' +
        '<span class="np-li__text"><span class="np-li__name">' + esc(it.name) + '</span><span class="np-li__brand">' + esc(it.brand) + '</span></span>' +
      '</button>' +
      '<button type="button" class="np-li__remove" data-remove="' + esc(it.id) + '" aria-label="' + esc(t('list.removeItem') + ': ' + it.name) + '">&times;</button>';
  }
  /** Keyed render: a row keeps its node (and its loaded picture) while it stays in the list. Returns the new rows. */
  function renderPanel() {
    titleEl.textContent = t('list.title');
    const close = panel.querySelector('.np-listpanel__close');
    close.setAttribute('aria-label', t('list.close'));
    panel.querySelector('[data-list-print]').textContent = t('list.print');
    if (!copyBtn._doneT) copyBtn.lastChild.textContent = t('list.copy');
    const items = ids.map(info).filter(Boolean);
    emptyEl.textContent = t('list.empty');
    emptyEl.hidden = items.length > 0;
    panel.querySelector('.np-listpanel__foot').hidden = items.length === 0;
    const want = new Set(items.map(it => it.id)), keep = new Map(), fresh = [], L = lang();
    Array.from(listEl.children).forEach(li => { if (want.has(li.dataset.key)) keep.set(li.dataset.key, li); else li.remove(); });
    items.forEach((it, i) => {
      let li = keep.get(it.id);
      if (!li) { li = document.createElement('li'); li.className = 'np-li'; li.dataset.key = it.id; fresh.push(li); }
      const sig = L + '|' + it.name + '|' + it.img;
      if (li._sig !== sig) { li.innerHTML = rowHtml(it); li._sig = sig; }
      if (listEl.children[i] !== li) listEl.insertBefore(li, listEl.children[i] || null);
    });
    return fresh;
  }

  function removeFromPanel(id, btn) {
    const li = btn.closest('li');
    const nextLi = li && (li.nextElementSibling || li.previousElementSibling);
    const nextId = nextLi && nextLi.querySelector('[data-remove]').dataset.remove;
    // the row leaves as a copy (the real one is gone at once); setList's FLIP slides the rest up into its place
    if (li && ok()) S.ghostOut(li, { transform: 'translateX(-16px) scale(0.98)', filter: 'blur(2px)' }, 220, null, panel);
    const prev = ids.slice();
    setList(ids.filter(x => x !== id));
    toast(t('list.removed'), () => setList(prev));
    const target = nextId && listEl.querySelector('[data-remove="' + CSS.escape(nextId) + '"]');
    (target || panel.querySelector('.np-listpanel__close')).focus({ preventScroll: true });
  }

  function openPanel(from, instant) {
    if (!panel) buildPanel();
    if (panelOpen) return;
    clearTimeout(closeTimer);
    opener = from || document.activeElement;
    panelOpen = true;
    renderPanel();
    panel.hidden = false;
    const asSheet = mqSheet.matches;
    panel.classList.toggle('is-sheet', asSheet);
    sheet.style.transform = '';
    sheet.style.transformOrigin = '';
    sheet.getAnimations().forEach(a => a.cancel());
    document.documentElement.classList.add('np-list-open');
    void panel.offsetWidth;
    panel.classList.add('is-open');
    if (!instant && ok()) {
      if (!asSheet) {
        // desktop: grows out of the button that opened it (the bottom sheet slides up in css, NPMotion.sheetDrag drags it)
        const r = sheet.getBoundingClientRect(), o = from && from.isConnected ? from.getBoundingClientRect() : null;
        sheet.style.transformOrigin = o && o.width
          ? Math.round(o.left + o.width / 2 - r.left) + 'px ' + Math.round(o.top + o.height / 2 - r.top) + 'px' : '100% 100%';
        S.enter(sheet, { opacity: 0, transform: 'translateX(24px) scale(0.96)' }, [0.86, 0.48]);
      }
      S.stagger(Array.prototype.slice.call(listEl.children, 0, 8), 30, { opacity: 0, transform: 'translateY(8px)' }, [0.88, 0.42]);
    }
    const first = listEl.querySelector('button') || panel.querySelector('.np-listpanel__close');
    first.focus({ preventScroll: true });
  }
  /** instant — keyboard (Esc / Enter on ×) or handing over to the product card: no exit motion */
  function closePanel(restore, instant) {
    if (!panelOpen) return;
    panelOpen = false;
    sheet.style.transform = '';
    sheet.style.transition = '';
    panel.classList.remove('is-open');
    document.documentElement.classList.remove('np-list-open');
    let ms = 0;
    if (instant) ms = 0;
    else if (reduced()) ms = 160;
    else if (panel.classList.contains('is-sheet')) ms = 300;
    else if (ok()) {
      // desktop: back toward where it came from, faster than it came
      sheet.getAnimations().forEach(a => a.cancel());
      sheet.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(20px) scale(0.97)' }], { duration: 200, easing: S.EASE, fill: 'forwards' });
      ms = 260;
    }
    const done = () => { if (panelOpen) return; panel.hidden = true; sheet.getAnimations().forEach(a => a.cancel()); };
    clearTimeout(closeTimer);
    if (ms) closeTimer = setTimeout(done, ms); else done();
    if (restore) {
      const back = opener && document.contains(opener) && opener.offsetParent !== null ? opener : (fab && fab.classList.contains('is-visible') ? fab : null);
      if (back) back.focus({ preventScroll: true });
    }
    opener = null;
  }

  // Drag-to-dismiss для bottom sheet мышью (тач — NPMotion.sheetDrag в js/motion-catalog.js): >0.11 px/ms или >25% высоты
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
  // Copied: the button itself confirms (transitions.dev success check — the plate pops, the mark draws in) and the
  // label swaps; after 1.8s it swaps back. A second copy meanwhile only extends it (no replay from zero).
  function copied() {
    announce(t('list.copied'));
    const b = copyBtn, lbl = b.lastChild;
    if (b._doneT) clearTimeout(b._doneT);
    else {
      b.classList.add('is-done');
      b.insertAdjacentHTML('afterbegin', CHECK);
      if (S) S.swapText(lbl, t('list.copied')); else lbl.textContent = t('list.copied');
    }
    b._doneT = setTimeout(() => {
      b._doneT = 0;
      b.classList.remove('is-done');
      const c = b.querySelector('.np-check');
      if (c) c.remove();
      if (S) S.swapText(lbl, t('list.copy')); else lbl.textContent = t('list.copy');
    }, 1800);
  }
  function copyList() {
    const text = lines().map(it => it.name + ' — ' + it.brand).join('\n');
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      sheet.appendChild(ta); ta.select();
      let res = false; try { res = document.execCommand('copy'); } catch (e) { /* ignore */ }
      ta.remove();
      copyBtn.focus({ preventScroll: true });
      res ? copied() : toast(t('list.copyFail'));
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(copied, fallback);
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
