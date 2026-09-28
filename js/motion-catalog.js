// ===== Catalog motion on phones (≤720px) — loaded after js/mobile.js, BEFORE js/main.js =====
// Styles: css/motion-catalog.css. Exposes window.NPMotion { clamp, sheetDrag }.
// Rules: transitions (interruptible) over keyframes, keyboard-initiated = instant, reduced motion = no movement.
(function () {
  const mq = window.matchMedia('(max-width: 720px)');
  const rmq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const reduce = () => rmq.matches;
  const phone = () => mq.matches;
  const M = window.NPMotion = window.NPMotion || {};
  root.classList.add('m-motion');

  // ---------- keyboard toggles → instant (css: [data-m-instant]) ----------
  function instantOnce(el) {
    if (!el) return;
    el.setAttribute('data-m-instant', '');
    requestAnimationFrame(() => requestAnimationFrame(() => el.removeAttribute('data-m-instant')));
  }
  document.addEventListener('click', e => {
    if (e.detail !== 0 || !e.target.closest) return;
    const t = e.target.closest('.coat-insert[data-m], .pmodal__sectoggle');
    if (t) instantOnce(t.closest('.coat-insert, .pmodal__section'));
  }, true);
  document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest && e.target.closest('.coat-insert[data-m]')) instantOnce(e.target);
  }, true);

  // ---------- clamp: animate a line-clamped block's height (open 300ms / close 220ms, --ease-out) ----------
  // apply(state) sets the classes of the final state; closing keeps the open classes until the end so the
  // text is not cut before the box has shrunk.
  M.clamp = function (el, open, instant, apply) {
    if (el._mClamp) el._mClamp();   // interrupted: settle the previous toggle, then animate from there
    if (instant || reduce() || !phone()) { apply(open); return; }
    const h0 = el.getBoundingClientRect().height;
    apply(open);
    const h1 = el.getBoundingClientRect().height;
    if (!open) apply(true);
    if (Math.abs(h1 - h0) < 2) { apply(open); return; }
    const dur = open ? 300 : 220;
    const unmask = open && el.classList.contains('pmodal__desc');
    el.classList.add('m-clamp-anim');
    if (unmask) el.classList.add('m-unmask');
    el.style.maxHeight = h0 + 'px';
    void el.offsetHeight;
    el.style.transition = 'max-height ' + dur + 'ms var(--ease-out)';
    el.style.maxHeight = h1 + 'px';
    let maskAnim = null;
    if (unmask && el.animate) {
      maskAnim = el.animate([{ maskSize: '100% 100%', webkitMaskSize: '100% 100%' }, { maskSize: '100% 400%', webkitMaskSize: '100% 400%' }],
        { duration: dur, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'forwards' });
    }
    const done = () => {
      clearTimeout(t);
      el.removeEventListener('transitionend', onEnd);
      el._mClamp = null;
      if (!open) apply(false);
      el.style.maxHeight = ''; el.style.transition = '';
      el.classList.remove('m-clamp-anim', 'm-unmask');
      if (maskAnim) maskAnim.cancel();
    };
    const onEnd = e => { if (e.target === el && e.propertyName === 'max-height') done(); };
    el.addEventListener('transitionend', onEnd);
    const t = setTimeout(done, dur + 80);
    el._mClamp = done;
  };

  // ---------- sheetDrag: drag-to-dismiss for a bottom sheet ----------
  // Follows the finger 1:1 downward, rubber-bands upward, dismisses on v > 0.11 px/ms or > 25% of the height,
  // otherwise springs back (--spring). Never steals the inner scroll: a drag starts only in the top zone
  // (handle / header) or when the touched scroller is at its top.
  function rubber(x, dim) { return dim * (1 - 1 / (x * 0.55 / dim + 1)); }
  M.sheetDrag = function (o) {
    const el = o.el;
    if (!el || el._mDrag) return;
    el._mDrag = true;
    let st = null, relT = 0;
    const back = () => (o.back ? o.back() : null);
    const clearInline = () => {
      el.style.transition = ''; el.style.transform = '';
      const b = back(); if (b) { b.style.transition = ''; b.style.opacity = ''; }
    };
    el.addEventListener('touchstart', e => {
      st = null;
      if (!phone() || e.touches.length !== 1 || !o.canStart()) return;
      if (o.skip && e.target.closest(o.skip)) return;
      const y = e.touches[0].clientY;
      const zone = y - el.getBoundingClientRect().top < (o.zone || 56);
      const sc = o.scroller ? o.scroller(e.target) : null;
      if (!zone && sc && sc.scrollTop > 0) return;
      st = { y0: y, zone, sc, active: false, h: el.offsetHeight, s: [[e.timeStamp, y]], dy: 0 };
    }, { passive: true });
    el.addEventListener('touchmove', e => {
      if (!st) return;
      const y = e.touches[0].clientY;
      const dy = y - st.y0;
      if (!st.active) {
        if (Math.abs(dy) < 6) return;
        if (dy < 0 && !st.zone) { st = null; return; }            // an upward swipe in the content scrolls it
        if (dy > 0 && !st.zone && st.sc && st.sc.scrollTop > 0) { st = null; return; }
        st.active = true;
        clearTimeout(relT);
        el.classList.add('m-dragging');
        el.style.transition = 'none';
        const b = back(); if (b) b.style.transition = 'none';
      }
      if (e.cancelable) e.preventDefault();
      st.dy = dy;
      st.s.push([e.timeStamp, y]);
      while (st.s.length > 2 && e.timeStamp - st.s[0][0] > 100) st.s.shift();
      const ty = dy >= 0 ? dy : -rubber(-dy, 64);
      el.style.transform = 'translate3d(0,' + ty.toFixed(1) + 'px,0)';
      const b = back(); if (b) b.style.opacity = String(1 - Math.min(1, Math.max(0, dy) / st.h) * 0.85);
    }, { passive: false });
    const end = () => {
      const s = st; st = null;
      if (!s || !s.active) return;
      el.classList.remove('m-dragging');
      const a = s.s[0], z = s.s[s.s.length - 1];
      const v = (z[1] - a[1]) / Math.max(1, z[0] - a[0]);   // px/ms over the last ~100ms
      const b = back();
      if (s.dy > 0 && (v > 0.11 || s.dy > s.h * 0.25)) {
        // continue with the finger's speed: the remaining distance at ≥ the release velocity, 120–250ms
        const dur = reduce() ? 0 : Math.round(Math.max(120, Math.min(250, (s.h - s.dy) / Math.max(v, 0.9))));
        el.style.transition = 'transform ' + dur + 'ms var(--ease-out)';
        if (b) b.style.transition = 'opacity ' + dur + 'ms var(--ease-out)';
        o.close();
        el.style.transform = '';   // → transitions from the dragged position to the closed one
        if (b) b.style.opacity = '';
        relT = setTimeout(clearInline, dur + 400);
        return;
      }
      if (reduce()) { clearInline(); return; }
      el.style.transition = 'transform var(--dur-spring-smooth) var(--spring)';
      el.style.transform = '';
      if (b) { b.style.transition = 'opacity 300ms var(--ease-out)'; b.style.opacity = ''; }
      relT = setTimeout(clearInline, 600);
    };
    el.addEventListener('touchend', end);
    el.addEventListener('touchcancel', end);
    return { reset: () => { clearTimeout(relT); clearInline(); } };
  };
  const clickClose = btn => { if (btn) btn.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 })); };

  // product modal (phones: bottom sheet)
  let pmDrag = null;
  document.addEventListener('np:modal-open', () => {
    const modal = document.getElementById('productModal');
    const dlg = modal && modal.querySelector('.pmodal__dialog');
    if (!dlg) return;
    if (pmDrag) pmDrag.reset();
    pmDrag = pmDrag || M.sheetDrag({
      el: dlg,
      back: () => modal.querySelector('.pmodal__backdrop'),
      canStart: () => modal.classList.contains('is-open') && !modal.classList.contains('is-closing'),
      skip: '.pmodal__actions, .pmodal__close, input',
      scroller: () => document.getElementById('pmodalBody'),
      close: () => clickClose(modal.querySelector('.pmodal__close'))
    });
  });
  document.addEventListener('np:modal-close', () => {
    const dlg = document.querySelector('#productModal .pmodal__dialog');
    if (pmDrag && dlg && !dlg.classList.contains('m-dragging')) pmDrag.reset();
  });

  // My list sheet (built lazily by list.js): touch drags anywhere at top / in the list at scrollTop 0.
  // list.js's own pointer drag on the grip/head is kept for mouse; touch goes through this controller.
  function bindList() {
    const panel = document.querySelector('.np-listpanel');
    const sheet = panel && panel.querySelector('.np-listpanel__sheet');
    if (!sheet || sheet._mDrag) return;
    panel.addEventListener('pointerdown', e => { if (e.pointerType === 'touch' && panel.classList.contains('is-sheet')) e.stopPropagation(); }, true);
    M.sheetDrag({
      el: sheet,
      back: () => panel.querySelector('.np-listpanel__scrim'),
      canStart: () => panel.classList.contains('is-sheet') && panel.classList.contains('is-open'),
      skip: '.np-listpanel__close, .np-listpanel__foot',
      scroller: () => panel.querySelector('.np-listpanel__list'),
      close: () => clickClose(panel.querySelector('.np-listpanel__close'))
    });
  }
  new MutationObserver(bindList).observe(document.body || root, { childList: true });

  // search sheet: drag down from the top bar / results at top → close (the query stays)
  function bindSearch() {
    const s = document.querySelector('#catalogSearch');
    if (!s) return;
    M.sheetDrag({
      el: s,
      canStart: () => root.classList.contains('m-search') && !root.classList.contains('m-search-out'),
      skip: 'input, .t-clear-btn, .m-search-cancel',
      zone: 64,
      scroller: () => s.querySelector('.np-search__list'),
      close: () => { if (window.NPMobile && NPMobile.exitSearch) NPMobile.exitSearch(false); }
    });
  }

  // ---------- Tauro: rails draw (CSS scroll-driven; IO fallback), steps rise once (40ms stagger), float in view ----------
  let riseIO = null, floatIO = null;
  function setupTauro() {
    if (!('IntersectionObserver' in window)) return;
    // bottle float runs only while its showcase is on screen (all widths; styles.css pauses .is-offscreen)
    floatIO = floatIO || new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle('is-offscreen', !en.isIntersecting)), { rootMargin: '40px 0px' });
    document.querySelectorAll('.tpl-system:not([data-m-float])').forEach(s => { s.setAttribute('data-m-float', ''); floatIO.observe(s); });
    if (!phone() || reduce()) return;
    riseIO = riseIO || new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      riseIO.unobserve(en.target);
      en.target.classList.add('m-drawn');
      en.target.querySelectorAll('.m-rise').forEach(c => c.classList.add('m-rise-in'));
      en.target.querySelectorAll('.tpl-why__stop').forEach(c => c.classList.add('m-drawn'));
    }), { threshold: 0.12 });
    document.querySelectorAll('.tpl-system__stage:not([data-m-rise]), .tpl-why__journey:not([data-m-rise])').forEach(g => {
      g.setAttribute('data-m-rise', '');
      const below = g.getBoundingClientRect().top > window.innerHeight - 40;
      if (below) {
        g.querySelectorAll(':scope > .tpl-bottle, :scope > .tpl-why__stop').forEach((c, i) => {
          c.style.setProperty('--rd', Math.min(i, 7) * 40 + 'ms');
          c.classList.add('m-rise');
        });
      } else {
        g.classList.add('m-drawn');
        g.querySelectorAll('.tpl-why__stop').forEach(c => c.classList.add('m-drawn'));
      }
      riseIO.observe(g);
    });
  }

  // ---------- brand / species / section switch: first 8 cards rise 8px, 40ms apart; the count swaps ----------
  function staggerCards() {
    if (!phone() || reduce() || !root.dataset.vt) return;   // only inside an animated NP.swap (never keyboard)
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const top = grid.getBoundingClientRect().top;
    let i = 0;
    grid.querySelectorAll('.products > .product').forEach(c => {
      if (i >= 8) return;
      const r = c.getBoundingClientRect();
      if (r.bottom < top || r.top > window.innerHeight) return;
      c.style.setProperty('--i', i++);
      c.classList.remove('m-card-in'); void c.offsetWidth; c.classList.add('m-card-in');
      c.addEventListener('animationend', function f(ev) { if (ev.target === c) { c.classList.remove('m-card-in'); c.removeEventListener('animationend', f); } });
    });
  }
  let lastCount = null;
  function swapCount() {
    const c = document.querySelector('#catResult .cat-result__count');
    if (!c) return;
    const txt = c.textContent;
    const was = lastCount; lastCount = txt;
    if (was === null || was === txt || !c.animate) return;
    const kf = reduce() || !phone()
      ? [{ opacity: 0 }, { opacity: 1 }]
      : [{ opacity: 0, transform: 'translateY(4px)', filter: 'blur(2px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }];
    c.style.display = 'inline-block';
    c.animate(kf, { duration: 150, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }).finished.then(() => { c.style.display = ''; }, () => {});
  }

  function onRender() { setupTauro(); staggerCards(); swapCount(); }
  document.addEventListener('np:render', onRender);
  document.addEventListener('np:ready', () => { bindSearch(); setupTauro(); const c = document.querySelector('#catResult .cat-result__count'); lastCount = c ? c.textContent : null; });
  const cr = () => document.getElementById('catResult');
  document.addEventListener('DOMContentLoaded', () => {
    const el = cr();
    if (el) new MutationObserver(() => swapCount()).observe(el, { childList: true });
  });
})();
