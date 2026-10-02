// ===== Catalog motion on phones (≤720px) — loaded after js/mobile.js, BEFORE js/main.js =====
// Styles: css/motion-catalog.css. Exposes window.NPMotion { clamp, sheetDrag }. Physics: window.NPSpring (spring.js).
// Rules: springs / transitions (interruptible) over keyframes, keyboard-initiated = instant, reduced motion = no movement.
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

  // ---------- clamp: animate a line-clamped block's height (opens on the smooth spring, closes in 220ms) ----------
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
    const sp = open && window.NPSpring ? NPSpring.ease(1, 0.38) : { duration: 220, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' };
    const dur = sp.duration;
    const unmask = open && el.classList.contains('pmodal__desc');
    el.classList.add('m-clamp-anim');
    if (unmask) el.classList.add('m-unmask');
    el.style.maxHeight = h0 + 'px';
    void el.offsetHeight;
    el.style.transition = 'max-height ' + dur + 'ms ' + sp.easing;
    el.style.maxHeight = h1 + 'px';
    let maskAnim = null;
    if (unmask && el.animate) {
      maskAnim = el.animate([{ maskSize: '100% 100%', webkitMaskSize: '100% 100%' }, { maskSize: '100% 400%', webkitMaskSize: '100% 400%' }],
        { duration: dur, easing: sp.easing, fill: 'forwards' });
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

  // ---------- sheetDrag: drag-to-dismiss for a bottom sheet («Монтажка» sheetDrag, on NPSpring) ----------
  // The sheet follows the finger 1:1 downward and rubber-bands upward. On release it keeps the finger's speed:
  // where the throw would land (Apple's momentum projection, project(v, .998)) past half the height, or a flick
  // faster than 900px/s, sends it off-screen on a spring that starts with that velocity — the close itself
  // happens when it has left (o.close(true): "swiped", no exit motion needed). Otherwise it springs back
  // (damping .8, response .32) with the same velocity. The backdrop follows the sheet. A sheet still travelling
  // (opening, springing back, flying out) can be caught mid-way: the drag starts from where it is.
  // Never steals the inner scroll: a drag starts only in the top zone (handle / header) or when the touched
  // scroller is at its top. Same API as before: {el, back, canStart, skip, zone, scroller, close} → {reset}.
  const S = window.NPSpring;
  const sheetY = el => { const t = getComputedStyle(el).transform; return t && t !== 'none' ? new DOMMatrixReadOnly(t).m42 : 0; };
  M.sheetDrag = function (o) {
    const el = o.el;
    if (!el || el._mDrag) return;
    el._mDrag = true;
    let st = null, out = false, h = 400;
    const back = () => (o.back ? o.back() : null);
    const clearInline = () => {
      el.style.transition = ''; el.style.transform = ''; el.classList.remove('m-dragging');
      const b = back(); if (b) { b.style.transition = ''; b.style.opacity = ''; }
    };
    const owner = { render() {
      const y = m.v, moving = S.moving(m);
      if (out && (y >= h || !moving)) {           // it has left the screen: close for real, then let go of it
        out = false; S.set(m, 0); o.close(true); clearInline(); return;
      }
      if (!st && !moving && Math.abs(y) < 0.5) { clearInline(); return; }   // at rest: back to the CSS state
      el.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)';
      const b = back(); if (b) b.style.opacity = y > 0.5 ? Math.max(0, 1 - y / h).toFixed(3) : '';
    } };
    const m = S.mv(0, 0.3, owner);
    el.addEventListener('touchstart', e => {
      st = null;
      if (!phone() || e.touches.length !== 1 || out || !o.canStart()) return;
      if (o.skip && e.target.closest(o.skip)) return;
      const y = e.touches[0].clientY;
      const zone = y - el.getBoundingClientRect().top < (o.zone || 56);
      const sc = o.scroller ? o.scroller(e.target) : null;
      if (!zone && sc && sc.scrollTop > 0) return;
      st = { y0: y, zone, sc, active: false, hist: [{ t: performance.now(), x: 0, y }] };
    }, { passive: true });
    el.addEventListener('touchmove', e => {
      if (!st) return;
      const y = e.touches[0].clientY;
      const dy = y - st.y0;
      if (!st.active) {
        if (Math.abs(dy) < 6) return;
        if (dy < 0 && !st.zone) { st = null; return; }            // an upward swipe in the content scrolls it
        if (dy > 0 && !st.zone && st.sc && st.sc.scrollTop > 0) { st = null; return; }
        // caught: start from where the sheet is now (mid-opening transition or mid-spring) and stay under the
        // finger from its touch-down point (the browser holds back the first few px of a touch as slop)
        st.active = true; h = el.offsetHeight || 400;
        const cur = S.moving(m) ? m.v : sheetY(el);
        el.getAnimations().forEach(a => a.cancel());
        el.style.transition = 'none'; el.classList.add('m-dragging');
        const b = back(); if (b) b.style.transition = 'none';
        st.base = cur;
      }
      if (e.cancelable) e.preventDefault();
      st.hist.push({ t: performance.now(), x: 0, y }); if (st.hist.length > 8) st.hist.shift();
      const ty = st.base + dy;
      S.set(m, ty >= 0 ? ty : -S.rubber(-ty, 90));
    }, { passive: false });
    const end = () => {
      const s = st; st = null;
      if (!s || !s.active) return;
      const v = S.velocityOf(s.hist).y, y = m.v;
      if (y > 0 && (y + S.project(v, 0.998) > h * 0.5 || v > 900)) {
        out = true;
        S.to(m, h + 24, { damping: 1, response: 0.28, velocity: Math.max(v, 400) });
      } else {
        S.to(m, 0, { damping: 0.8, response: 0.32, velocity: v });
      }
      if (!S.moving(m)) owner.render();   // reduced motion: springs land at once
    };
    el.addEventListener('touchend', end);
    el.addEventListener('touchcancel', end);
    return { reset: () => { st = null; out = false; S.set(m, 0); clearInline(); } };
  };
  // swiped: the sheet has already left the screen on its spring → close without an exit motion (detail 0 = instant)
  const clickClose = (btn, swiped) => { if (btn) btn.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: swiped ? 0 : 1 })); };

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
      close: swiped => (window.NP && NP.closeModal ? NP.closeModal(swiped) : clickClose(modal.querySelector('.pmodal__close'), swiped))
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
      close: swiped => clickClose(panel.querySelector('.np-listpanel__close'), swiped)
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
    // The first IO entry decides (its boundingClientRect comes with the IO pass, so no forced layout of the whole
    // freshly rendered Tauro page): already on screen → drawn at once; below → steps wait hidden and rise later.
    const seen = new WeakSet();
    const draw = g => { g.classList.add('m-drawn'); g.querySelectorAll('.tpl-why__stop').forEach(c => c.classList.add('m-drawn')); };
    riseIO = riseIO || new IntersectionObserver(es => es.forEach(en => {
      const g = en.target;
      if (!seen.has(g)) {
        seen.add(g);
        if (en.boundingClientRect.top <= window.innerHeight - 40) { draw(g); riseIO.unobserve(g); return; }
        g.querySelectorAll(':scope > .tpl-bottle, :scope > .tpl-why__stop').forEach((c, i) => {
          c.style.setProperty('--rd', Math.min(i, 7) * 40 + 'ms');
          c.classList.add('m-rise');
        });
        if (!en.isIntersecting) return;
      } else if (!en.isIntersecting) return;
      riseIO.unobserve(g);
      g.classList.add('m-drawn');
      g.querySelectorAll('.m-rise').forEach(c => c.classList.add('m-rise-in'));
      g.querySelectorAll('.tpl-why__stop').forEach(c => c.classList.add('m-drawn'));
    }), { threshold: 0.12 });
    document.querySelectorAll('.tpl-system__stage:not([data-m-rise]), .tpl-why__journey:not([data-m-rise])').forEach(g => {
      g.setAttribute('data-m-rise', '');
      riseIO.observe(g);
    });
  }

  // Brand / species / section switches (stagger, FLIP, ghosts) and «Показано N» (NPSpring.num) live in main.js —
  // one implementation for every width.
  document.addEventListener('np:render', setupTauro);
  document.addEventListener('np:render-more', setupTauro);
  document.addEventListener('np:ready', () => { bindSearch(); setupTauro(); });
})();
