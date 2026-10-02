// ===== Phone layer (≤720px): loaded on both pages, BEFORE main.js =====
// Every feature no-ops when its elements are missing and checks the media query at event time.
// Styles: css/mobile.css (shared chrome), css/mobile-catalog.css (catalog), css/mobile-tauro.css, css/mobile-home.css.

// C0 — phone-only strings (picked up by main.js applyTranslations, which runs after this file)
if (typeof TRANSLATIONS !== 'undefined') {
  Object.assign(TRANSLATIONS.az, { 'm.sp.cats': 'Pişiklər', 'm.sp.dogs': 'İtlər', 'm.search': 'Axtarış', 'm.cancel': 'Ləğv et', 'm.more': 'Daha çox', 'm.less': 'Yığ', 'm.readAll': 'Tam oxu' });
  Object.assign(TRANSLATIONS.ru, { 'm.sp.cats': 'Кошки', 'm.sp.dogs': 'Собаки', 'm.search': 'Поиск', 'm.cancel': 'Отмена', 'm.more': 'Ещё', 'm.less': 'Свернуть', 'm.readAll': 'Читать полностью' });
  Object.assign(TRANSLATIONS.en, { 'm.sp.cats': 'Cats', 'm.sp.dogs': 'Dogs', 'm.search': 'Search', 'm.cancel': 'Cancel', 'm.more': 'More', 'm.less': 'Less', 'm.readAll': 'Read more' });
}

(function () {
  const mq = window.matchMedia('(max-width: 720px)');
  const root = document.documentElement;
  const L = () => (window.NP && NP.lang && NP.lang()) || root.lang || 'ru';
  const T = k => (window.NP && NP.t) ? NP.t(k) : (((typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS.ru) || {})[k] || k);
  const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onReady = fn => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(fn, 0));
    else setTimeout(fn, 0);
  };

  // Экранная клавиатура уменьшает видимую область — CSS читает --vvh
  const vv = window.visualViewport;
  function setVvh() { root.style.setProperty('--vvh', Math.round(vv ? vv.height : innerHeight) + 'px'); }
  setVvh();
  (vv || window).addEventListener('resize', setVvh);

  // search.js still calls NPMobile.placeSearch(): the results are a full-screen overlay now, nothing to place
  window.NPMobile = { exitSearch: (clear, instant) => exitSearch(clear, instant), placeSearch: function () {}, syncRows: function () {} };
  // css/motion-catalog.js: animated height for clamp toggles (falls back to an instant toggle)
  const clampAnim = (el, open, instant, apply) => {
    if (window.NPMotion && NPMotion.clamp) NPMotion.clamp(el, open, instant, apply); else apply(open);
  };

  // ---------- C1 Burger language segment (both pages) ----------
  // The white thumb is one sliding indicator (NPSpring.indicator, «Монтажка»'s tab pill): it springs to the tapped
  // language and stretches like a drop on the way. Keyboard / a change from the header menu: it is just there.
  let pickAnim = false;
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-lang-pick]');
    if (!b) return;
    const item = document.querySelector('#langMenu button[data-lang="' + b.getAttribute('data-lang-pick') + '"]');
    // reuse main.js setLang; detail:1 = pointer, so focus does not jump to the header button
    pickAnim = e.detail !== 0;
    if (item) item.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
    syncLang();
    pickAnim = false;
  });
  function syncLang() {
    const cur = L();
    document.querySelectorAll('.nav-lang__btn').forEach(b => b.setAttribute('aria-pressed', b.getAttribute('data-lang-pick') === cur ? 'true' : 'false'));
    document.querySelectorAll('.nav-lang').forEach(g => g.setAttribute('aria-label', T('a11y.lang')));
    if (pickAnim || root.classList.contains('nav-open')) langInd(pickAnim);   // closed sheet: measured when it opens
  }
  function langInd(animate) {
    if (!window.NPSpring || !mq.matches) return;   // the segment only shows on phones
    document.querySelectorAll('.nav-lang').forEach(g => {
      const on = g.querySelector('.nav-lang__btn[aria-pressed="true"]');
      if (!on || !on.offsetWidth) return;   // desktop: the segment is not shown
      if (!g._ind) {
        const el = document.createElement('span');
        el.className = 'nav-lang__ind spr-ind';
        el.setAttribute('aria-hidden', 'true');
        g.prepend(el);
        g._ind = NPSpring.indicator(el);
        g.classList.add('has-ind');
      }
      g._ind.move({ x: on.offsetLeft, y: on.offsetTop, w: on.offsetWidth, h: on.offsetHeight }, !animate);
    });
  }
  window.NPMobile.langInd = langInd;
  onReady(syncLang);
  document.addEventListener('np:lang', syncLang);

  // ---------- C2 Language dropdown closes after a 24px scroll ----------
  let langY0 = null;
  window.addEventListener('scroll', () => {
    const wrap = document.getElementById('lang');
    if (!wrap || !wrap.classList.contains('is-open')) { langY0 = null; return; }
    if (langY0 === null) { langY0 = window.scrollY; return; }
    if (Math.abs(window.scrollY - langY0) > 24) {
      wrap.classList.remove('is-open');
      const btn = document.getElementById('langBtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      langY0 = null;
    }
  }, { passive: true });
  document.addEventListener('click', e => {
    // record the scroll position at the moment the menu opens
    if (e.target.closest('#langBtn')) setTimeout(() => { const w = document.getElementById('lang'); langY0 = w && w.classList.contains('is-open') ? window.scrollY : null; }, 0);
  });

  // ---------- C3 Search: full-screen overlay (products) ----------
  const input = () => document.getElementById('npSearchInput');
  let reopenAfterModal = false, searchOutT = 0;
  function enterSearch() {
    if (!mq.matches || !document.getElementById('catalogSearch')) return false;
    const wrap = document.querySelector('#catalogSearch .np-search');
    if (!wrap) return false;
    clearTimeout(searchOutT);
    root.classList.remove('m-search-out');   // an exit in flight reverses (css/motion-catalog.css transitions)
    root.classList.add('m-search');
    if (!wrap.querySelector('.m-search-cancel')) {
      const c = document.createElement('button');
      c.type = 'button'; c.className = 'm-search-cancel'; c.textContent = T('m.cancel');
      const field = wrap.querySelector('.np-search__field');
      if (field) field.after(c); else wrap.appendChild(c);
    }
    return true;
  }
  // instant: keyboard (Esc / Enter on «Cancel»), the product sheet taking over, or reduced motion
  function exitSearch(clear, instant) {
    const inp = input();
    if (inp) {
      if (clear && inp.value) { inp.value = ''; inp.dispatchEvent(new Event('input', { bubbles: true })); }
      inp.blur();
    }
    clearTimeout(searchOutT);
    if (instant || reduce() || !mq.matches || !root.classList.contains('m-search')) {
      root.classList.remove('m-search', 'm-search-out');
      return;
    }
    root.classList.add('m-search-out');   // slides down 250ms, then the overlay is removed
    searchOutT = setTimeout(() => root.classList.remove('m-search', 'm-search-out'), 260);
  }
  document.addEventListener('click', e => {
    if (e.target.closest('#mSearchBtn')) {
      if (!enterSearch()) return;
      const inp = input();
      if (inp) inp.focus({ preventScroll: true });   // same tap: the iOS keyboard opens
      return;
    }
    if (e.target.closest('.m-search-cancel')) exitSearch(true, e.detail === 0);
  });
  document.addEventListener('focusin', e => {
    if (mq.matches && e.target.closest && e.target.closest('#catalogSearch .np-search__field')) enterSearch();
  });
  document.addEventListener('keydown', e => {
    // capture: runs before search.js — with text, its Esc clears; on an empty field Esc leaves the overlay
    if (e.key !== 'Escape' || !root.classList.contains('m-search')) return;
    const inp = input();
    if (!inp || !inp.value) exitSearch(false, true);
  }, true);
  document.addEventListener('np:modal-open', () => {
    if (!root.classList.contains('m-search')) return;
    reopenAfterModal = true;
    exitSearch(false, true);   // the query stays; results come back when the product closes
  });
  document.addEventListener('np:modal-close', () => {
    if (!reopenAfterModal) return;
    reopenAfterModal = false;
    const inp = input();
    if (!mq.matches || !inp || !inp.value) return;
    if (enterSearch()) {
      const c = document.querySelector('.m-search-cancel');   // focus inside the overlay, no keyboard pop-up
      if (c) c.focus({ preventScroll: true });
    }
  });
  function labelSearch() {
    const b = document.getElementById('mSearchBtn');
    if (b) b.setAttribute('aria-label', T('m.search'));
    document.querySelectorAll('.m-search-cancel').forEach(c => { c.textContent = T('m.cancel'); });
  }
  onReady(labelSearch);
  document.addEventListener('np:lang', labelSearch);
  // #q= deep link: search.js fills the field on np:ready (the field is display:none on phones) → show the overlay
  document.addEventListener('np:ready', () => setTimeout(() => {
    const inp = input();
    if (mq.matches && inp && inp.value && /(?:^|[#&])q=/.test(location.hash) && enterSearch()) inp.focus({ preventScroll: true });
  }, 0));

  // ---------- C4 Disabled filter → hint pill with the reason ----------
  let hintEl = null, hintT = 0;
  function showHint(text) {
    if (!text) return;
    if (!hintEl) {
      hintEl = document.createElement('div');
      hintEl.className = 'm-hint';
      hintEl.setAttribute('role', 'status');
      hintEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(hintEl);
      void hintEl.offsetWidth;
    }
    hintEl.textContent = text;
    hintEl.classList.add('is-on');
    clearTimeout(hintT);
    hintT = setTimeout(() => hintEl.classList.remove('is-on'), 2500);
  }
  document.addEventListener('click', e => {
    if (!mq.matches) return;
    const el = e.target.closest('.species__btn[aria-disabled="true"], .cat-chip[aria-disabled="true"]');
    if (el) showHint(el.getAttribute('aria-description') || el.getAttribute('title'));
  }, true);

  // ---------- C5 Coat inserts → disclosures ----------
  function prepCoat() {
    document.querySelectorAll('.coat-insert').forEach(el => {
      if (mq.matches) {
        if (el.hasAttribute('data-m')) return;
        el.setAttribute('data-m', '1');
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-expanded', el.classList.contains('is-open') ? 'true' : 'false');
      } else if (el.hasAttribute('data-m')) {
        ['data-m', 'role', 'tabindex', 'aria-expanded'].forEach(a => el.removeAttribute(a));
        el.classList.remove('is-open');
      }
    });
  }
  function toggleCoat(el) {
    const open = !el.classList.contains('is-open');
    el.classList.toggle('is-open', open);
    el.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  document.addEventListener('click', e => {
    if (!mq.matches) return;
    const el = e.target.closest('.coat-insert[data-m]');
    if (el) toggleCoat(el);
  });
  document.addEventListener('keydown', e => {
    if (!mq.matches || (e.key !== 'Enter' && e.key !== ' ')) return;
    const el = e.target.closest && e.target.closest('.coat-insert[data-m]');
    if (!el || e.target !== el) return;
    e.preventDefault();
    toggleCoat(el);
  });

  // ---------- C6 "More" toggles for clamped Tauro text ----------
  const MORE_SEL = '.tpl-system__intro, .tpl-system__note';
  function syncMore() {
    const els = Array.from(document.querySelectorAll(MORE_SEL));
    if (!mq.matches) {
      els.forEach(el => { const n = el.nextElementSibling; if (n && n.classList.contains('m-more')) n.remove(); el.classList.remove('is-expanded'); });
      return;
    }
    // Сначала все замеры (одна раскладка), потом все вставки/удаления — без чередования чтения и записи
    const plan = els.map(el => {
      const next = el.nextElementSibling;
      const has = !!(next && next.classList.contains('m-more'));
      const expanded = el.classList.contains('is-expanded');
      const clamped = expanded ? true : el.scrollHeight > el.clientHeight + 2;
      return { el, next, has, expanded, clamped };
    });
    plan.forEach(({ el, next, has, expanded, clamped }) => {
      if (has && !expanded && !clamped) { next.remove(); return; }
      if (has || expanded || !clamped) return;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'm-more'; b.setAttribute('data-m-more', 'clamp');
      b.setAttribute('aria-expanded', 'false');
      b.textContent = T('m.more');
      el.after(b);
    });
  }
  function relabelMore() {
    document.querySelectorAll('.m-more[data-m-more="clamp"]').forEach(b => {
      b.textContent = T(b.getAttribute('aria-expanded') === 'true' ? 'm.less' : 'm.more');
    });
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.m-more[data-m-more="clamp"]');
    if (!b) return;
    const el = b.previousElementSibling;
    if (!el) return;
    const open = !el.classList.contains('is-expanded');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.textContent = T(open ? 'm.less' : 'm.more');
    clampAnim(el, open, e.detail === 0, st => el.classList.toggle('is-expanded', st));
  });

  // ---------- C8 Filters button in the chip row: icon-only on phones ----------
  function labelUp() {
    document.querySelectorAll('.cat-nav__up').forEach(b => b.setAttribute('aria-label', T('sections.toFilters')));
  }

  // np:render / np:lang / np:ready / resize → re-sync the per-render phone bits
  function onRender() { prepCoat(); labelUp(); requestAnimationFrame(() => { syncMore(); relabelMore(); }); }
  document.addEventListener('np:render', onRender);
  document.addEventListener('np:ready', onRender);
  document.addEventListener('np:lang', onRender);
  let rsT = 0;
  window.addEventListener('resize', () => { clearTimeout(rsT); rsT = setTimeout(syncMore, 150); });
  const onMq = () => {
    prepCoat(); syncMore();
    if (!mq.matches && root.classList.contains('m-search')) exitSearch(false, true);
  };
  if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);

  // ---------- C7 Product modal as a bottom sheet ----------
  document.addEventListener('np:modal-open', () => {
    if (!mq.matches) return;
    const body = document.getElementById('pmodalBody');
    if (!body) return;
    body.scrollTop = 0;
    // b) long description: 5 lines + «Read more» (only when it really overflows)
    const d = body.querySelector('.pmodal__desc');
    if (d) {
      d.classList.add('is-clamped');
      if (d.scrollHeight > d.clientHeight + 2) {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'm-more'; b.textContent = T('m.readAll');
        b.addEventListener('click', e => {
          b.remove();
          clampAnim(d, true, e.detail === 0, st => d.classList.toggle('is-clamped', !st));
        });
        d.after(b);
      } else d.classList.remove('is-clamped');
    }
    // c) sections collapse into 52px rows (the body HTML is rebuilt on every open)
    const secs = Array.from(body.querySelectorAll('.pmodal__section')).filter(s => s.querySelector(':scope > h4'));
    secs.forEach(s => {
      const h = s.querySelector(':scope > h4');
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'pmodal__sectoggle';
      b.setAttribute('aria-expanded', 'false');
      b.textContent = h.textContent;
      h.textContent = '';
      h.appendChild(b);
      // content → one grid row that animates 0fr ↔ 1fr (css/mobile-catalog.css D7, css/motion-catalog.css)
      const wrap = document.createElement('div'), inner = document.createElement('div');
      wrap.className = 'pmodal__secbody'; inner.className = 'pmodal__secinner';
      Array.from(s.children).forEach(c => { if (c !== h) inner.appendChild(c); });
      wrap.appendChild(inner); s.appendChild(wrap);
      s.classList.add('is-collapsible');
      b.addEventListener('click', () => {
        const open = !s.classList.contains('is-open');
        s.classList.toggle('is-open', open);
        b.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    if (secs.length === 1) {
      secs[0].classList.add('is-open');
      secs[0].querySelector('.pmodal__sectoggle').setAttribute('aria-expanded', 'true');
    }
  });

  // d) swipe down to close: js/motion-catalog.js (shared bottom-sheet drag, also for My list / search)
})();

// ===== Burger menu: dimmed backdrop, tap-outside and Esc close, page scroll locked, drag the sheet to close =====
(function () {
  const S = window.NPSpring || null;
  function init() {
    const nav = document.getElementById('nav'), burger = document.getElementById('burger');
    if (!nav || !burger) return;
    const scrim = document.createElement('div');
    scrim.className = 'nav-scrim';
    scrim.setAttribute('aria-hidden', 'true');
    document.body.appendChild(scrim);
    const close = () => { if (nav.classList.contains('is-open')) burger.click(); };
    scrim.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { close(); burger.focus(); } });
    const drag = S ? navDrag(nav, burger, scrim, close) : null;
    new MutationObserver(() => {
      const open = nav.classList.contains('is-open');
      scrim.classList.toggle('is-open', open);
      document.documentElement.classList.toggle('nav-open', open);
      if (open) {
        if (drag) drag.reopen();
        if (window.NPMobile && NPMobile.langInd) NPMobile.langInd(false);   // the segment's thumb, measured in place
      }
    }).observe(nav, { attributes: true, attributeFilter: ['class'] });
  }

  // Drag the sheet sideways to close it («Монтажка» sheetDrag): 1:1 under the finger, rubber band past the open edge,
  // the scrim follows. Thrown or pulled past half — it flies off at the finger's speed and the menu is closed at once
  // (the inline styles only keep it visible until it is out); otherwise it springs back with a little overshoot.
  // A vertical swipe is left to the sheet's own scroll (touch-action: pan-y, css/mobile.css).
  function navDrag(nav, burger, scrim, close) {
    let d = null, out = false, w = 320, dragged = false;
    const owner = { render() {
      const x = m.v;
      if (!S.moving(m) && !d && (out || Math.abs(x) < 0.3)) { out = false; clear(); return; }
      nav.style.transform = 'translate3d(' + x.toFixed(2) + 'px, 0, 0)';
      scrim.style.opacity = x > 0 ? String(Math.max(0, 1 - x / w)) : '';
    } };
    const m = S.mv(0, 0.3, owner);
    function clear() {
      nav.style.transform = ''; nav.style.transition = ''; nav.style.visibility = '';
      scrim.style.opacity = ''; scrim.style.transition = ''; scrim.style.visibility = '';
      if (m.v !== 0) S.set(m, 0);
    }
    nav.addEventListener('pointerdown', e => {
      if (e.button !== 0 || !nav.classList.contains('is-open') || S.reduce() || !burger.offsetParent) return;   // a drawer only while the burger shows
      if (e.pointerType === 'mouse' && e.target.closest('a, button, input')) return;
      const tr = getComputedStyle(nav).transform;   // caught mid-flight: from where it is now
      d = { id: e.pointerId, x0: e.clientX, y0: e.clientY, cur: tr && tr !== 'none' ? new DOMMatrixReadOnly(tr).m41 : 0, active: false, hist: [] };
    });
    nav.addEventListener('pointermove', e => {
      if (!d || d.id !== e.pointerId) return;
      if (!d.active) {
        const dx = e.clientX - d.x0, dy = e.clientY - d.y0;
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        if (Math.abs(dy) > Math.abs(dx)) { d = null; return; }   // vertical: the sheet scrolls
        d.active = true; d.x0 = e.clientX; out = false; w = nav.offsetWidth || w;
        nav.style.transition = 'none'; scrim.style.transition = 'none';
        try { nav.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      }
      d.hist.push({ t: performance.now(), x: e.clientX, y: e.clientY });
      if (d.hist.length > 8) d.hist.shift();
      const x = d.cur + e.clientX - d.x0;
      S.set(m, x < 0 ? S.rubber(x, 60) : x);
    });
    const end = e => {
      const s = d;
      if (!s || s.id !== e.pointerId) return;
      d = null;
      if (!s.active) return;
      dragged = true; setTimeout(() => { dragged = false; }, 0);
      const v = S.velocityOf(s.hist).x, x = m.v;
      if (x > 0 && (x + S.project(v, 0.998) > w * 0.5 || v > 900)) {
        out = true;
        nav.style.visibility = 'visible'; scrim.style.visibility = 'visible';
        S.to(m, w + 16, { damping: 1, response: 0.3, velocity: Math.max(v, 400) });
        const hadFocus = nav.contains(document.activeElement);
        close();
        if (hadFocus) burger.focus({ preventScroll: true });
      } else S.to(m, 0, { damping: 0.8, response: 0.32, velocity: v });
    };
    nav.addEventListener('pointerup', end);
    nav.addEventListener('pointercancel', end);
    nav.addEventListener('click', e => { if (dragged) { e.preventDefault(); e.stopPropagation(); } }, true);   // a mouse drag is not a tap
    return {
      // opened again while it was flying off: it comes back from where it is
      reopen() { if (out || S.moving(m)) { out = false; S.to(m, 0, { damping: 0.86, response: 0.4 }); } }
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
