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
  window.NPMobile = { placeSearch: function () {}, syncRows: function () {} };

  // ---------- C1 Burger language segment (both pages) ----------
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-lang-pick]');
    if (!b) return;
    const item = document.querySelector('#langMenu button[data-lang="' + b.getAttribute('data-lang-pick') + '"]');
    // reuse main.js setLang; detail:1 = pointer, so focus does not jump to the header button
    if (item) item.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
    syncLang();
  });
  function syncLang() {
    const cur = L();
    document.querySelectorAll('.nav-lang__btn').forEach(b => b.setAttribute('aria-pressed', b.getAttribute('data-lang-pick') === cur ? 'true' : 'false'));
    document.querySelectorAll('.nav-lang').forEach(g => g.setAttribute('aria-label', T('a11y.lang')));
  }
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
  let reopenAfterModal = false;
  function enterSearch() {
    if (!mq.matches || !document.getElementById('catalogSearch')) return false;
    const wrap = document.querySelector('#catalogSearch .np-search');
    if (!wrap) return false;
    root.classList.add('m-search');
    if (!wrap.querySelector('.m-search-cancel')) {
      const c = document.createElement('button');
      c.type = 'button'; c.className = 'm-search-cancel'; c.textContent = T('m.cancel');
      const field = wrap.querySelector('.np-search__field');
      if (field) field.after(c); else wrap.appendChild(c);
    }
    return true;
  }
  function exitSearch(clear) {
    const inp = input();
    if (inp) {
      if (clear && inp.value) { inp.value = ''; inp.dispatchEvent(new Event('input', { bubbles: true })); }
      inp.blur();
    }
    root.classList.remove('m-search');
  }
  document.addEventListener('click', e => {
    if (e.target.closest('#mSearchBtn')) {
      if (!enterSearch()) return;
      const inp = input();
      if (inp) inp.focus({ preventScroll: true });   // same tap: the iOS keyboard opens
      return;
    }
    if (e.target.closest('.m-search-cancel')) exitSearch(true);
  });
  document.addEventListener('focusin', e => {
    if (mq.matches && e.target.closest && e.target.closest('#catalogSearch .np-search__field')) enterSearch();
  });
  document.addEventListener('keydown', e => {
    // capture: runs before search.js — with text, its Esc clears; on an empty field Esc leaves the overlay
    if (e.key !== 'Escape' || !root.classList.contains('m-search')) return;
    const inp = input();
    if (!inp || !inp.value) exitSearch(false);
  }, true);
  document.addEventListener('np:modal-open', () => {
    if (!root.classList.contains('m-search')) return;
    reopenAfterModal = true;
    exitSearch(false);   // the query stays; results come back when the product closes
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
    document.querySelectorAll(MORE_SEL).forEach(el => {
      const next = el.nextElementSibling;
      const has = next && next.classList.contains('m-more');
      if (!mq.matches) { if (has) next.remove(); el.classList.remove('is-expanded'); return; }
      if (has) {
        if (!el.classList.contains('is-expanded') && el.scrollHeight <= el.clientHeight + 2) next.remove();
        return;
      }
      if (el.classList.contains('is-expanded') || el.scrollHeight <= el.clientHeight + 2) return;
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
    el.classList.toggle('is-expanded', open);
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.textContent = T(open ? 'm.less' : 'm.more');
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
    if (!mq.matches && root.classList.contains('m-search')) exitSearch(false);
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
        b.addEventListener('click', () => { d.classList.remove('is-clamped'); b.remove(); });
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
    bindSwipe();
  });

  // d) swipe down to close
  let swipeBound = false;
  function bindSwipe() {
    if (swipeBound) return;
    const modal = document.getElementById('productModal');
    const dlg = modal && modal.querySelector('.pmodal__dialog');
    const body = document.getElementById('pmodalBody');
    const back = modal && modal.querySelector('.pmodal__backdrop');
    if (!dlg || !body) return;
    swipeBound = true;
    let y0 = 0, t0 = 0, dy = 0, tracking = false, active = false, topZone = false, snapT = 0;
    const reset = () => {
      dlg.style.transition = ''; dlg.style.transform = '';
      if (back) { back.style.transition = ''; back.style.opacity = ''; }
    };
    dlg.addEventListener('touchstart', e => {
      tracking = false; active = false;
      if (!mq.matches || !modal.classList.contains('is-open') || modal.classList.contains('is-closing') || e.touches.length !== 1) return;
      if (e.target.closest('button, a, input, .pmodal__actions')) return;
      const y = e.touches[0].clientY;
      topZone = y - dlg.getBoundingClientRect().top < 56;
      if (!topZone && body.scrollTop > 0) return;
      clearTimeout(snapT);
      tracking = true; y0 = y; t0 = performance.now(); dy = 0;
    }, { passive: true });
    dlg.addEventListener('touchmove', e => {
      if (!tracking) return;
      dy = e.touches[0].clientY - y0;
      if (!active) {
        if (dy < -6) { tracking = false; return; }
        if (dy > 6 && (topZone || body.scrollTop <= 0)) active = true;
        else return;
      }
      e.preventDefault();
      const d = Math.max(0, dy);
      dlg.style.transition = 'none';
      dlg.style.transform = `translate3d(0,${d}px,0)`;
      if (back) { back.style.transition = 'none'; back.style.opacity = String(1 - Math.min(1, d / dlg.offsetHeight) * 0.8); }
    }, { passive: false });
    const end = () => {
      if (!tracking) return;
      tracking = false;
      if (!active) return;
      active = false;
      const ms = Math.max(1, performance.now() - t0);
      const v = dy / ms;
      if (dy > 120 || (v > 0.5 && dy > 40)) {
        reset();
        const close = modal.querySelector('.pmodal__close');
        if (close) close.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
        return;
      }
      if (reduce()) { reset(); return; }
      dlg.style.transition = 'transform 300ms var(--ease-drawer)';
      dlg.style.transform = '';
      if (back) { back.style.transition = 'opacity 300ms var(--ease-drawer)'; back.style.opacity = ''; }
      snapT = setTimeout(() => { dlg.style.transition = ''; if (back) back.style.transition = ''; }, 300);
    };
    dlg.addEventListener('touchend', end);
    dlg.addEventListener('touchcancel', end);
  }
})();

// ===== Burger menu: dimmed backdrop, tap-outside and Esc close, page scroll locked =====
(function () {
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
    new MutationObserver(() => {
      const open = nav.classList.contains('is-open');
      scrim.classList.toggle('is-open', open);
      document.documentElement.classList.toggle('nav-open', open);
    }).observe(nav, { attributes: true, attributeFilter: ['class'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
