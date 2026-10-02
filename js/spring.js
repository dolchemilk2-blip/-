// ===== Springs and touch physics — shared by both pages. Load early (after translations.js), before page scripts. =====
// Ported from the motion core of «Монтажка» (montage.html, spring.js + motion.js + nums.js).
// Apple-style springs (WWDC 2018 "Designing Fluid Interfaces"): damping (1 = no overshoot, 0.8 = a little)
// and response in seconds. A motion always starts from the current value and keeps its velocity, so it can be
// caught and reversed mid-flight. One requestAnimationFrame loop drives every spring, and only while something
// moves. springEase() turns the same spring into a CSS linear() curve for transitions and WAAPI.
// On top of that:
//   press   — controls shrink toward the finger on pointerdown and spring back on release (bigger = heavier);
//   lean    — small controls drift 1–2.5px toward the mouse (fine pointers only, silent while scrolling);
//   tilt    — cards tilt toward the cursor, with --gx/--gy for a glare;
//   flip    — elements glide from their old place to the new one on springs;
//   num     — changed digits pop in (transitions.dev "Number pop-in"); only the digits that changed move;
//   enter / ghostOut / stagger / fold / swapText / shake / indicator — small helpers used by the page scripts.
// Transforms go to the individual `translate` and `scale` properties, so they compose with any CSS `transform`
// (hover lifts, translate(-50%) centring…) instead of fighting it. Tilt alone writes `transform`, so a tilted
// element must keep its own lift on `translate`.
// prefers-reduced-motion: springs jump to rest, entrances are opacity-only (150ms).
(function () {
  'use strict';
  var root = document.documentElement;
  var rmq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var fineMq = window.matchMedia('(hover: hover) and (pointer: fine)');
  var S = window.NPSpring = window.NPSpring || {};
  var reduce = rmq.matches;
  var canAnimate = typeof Element.prototype.animate === 'function';
  var EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';   // transitions.dev --ease-smooth-out
  root.classList.add('spr');                     // CSS: :active fallbacks are written as html:not(.spr) …
  S.EASE = EASE;
  S.ready = false;
  S.reduce = function () { return reduce; };
  S.ok = function () { return !reduce && canAnimate; };

  // ------------------------------------------------------------------ engine
  var E = { live: new Set(), dirty: new Set(), raf: 0, t: 0, scrollAt: 0 };
  // while the page scrolls, things slide under a still mouse — hover responses then only waste frames
  window.addEventListener('scroll', function () { E.scrollAt = performance.now(); }, { passive: true, capture: true });
  S.scrolling = function () { return performance.now() - E.scrollAt < 180; };

  /** A value on a spring. eps — the precision at which it counts as settled. owner.render() runs once per frame. */
  function mv(v, eps, owner) { v = v || 0; return { v: v, vel: 0, to: v, k: 0, c: 0, eps: eps || 0.01, owner: owner || null }; }
  function mvSet(m, v) {
    m.v = v; m.to = v; m.vel = 0; E.live.delete(m);
    if (m.owner) { E.dirty.add(m.owner); kick(); }
  }
  function mvTo(m, to, o) {
    o = o || {};
    if (o.velocity != null) m.vel = o.velocity;
    m.to = to;
    if (reduce) { mvSet(m, to); return; }
    var w = 2 * Math.PI / (o.response || 0.4), d = o.damping == null ? 1 : o.damping;
    m.k = w * w; m.c = 2 * d * w;
    E.live.add(m); kick();
  }
  function kick() { if (!E.raf) { E.t = performance.now(); E.raf = requestAnimationFrame(tick); } }
  function tick(now) {
    E.raf = 0;
    var dt = Math.min(0.05, Math.max(0.001, (now - E.t) / 1000)); E.t = now;
    var steps = Math.ceil(dt / (1 / 240)), h = dt / steps;
    E.live.forEach(function (m) {
      for (var i = 0; i < steps; i++) { var a = -m.k * (m.v - m.to) - m.c * m.vel; m.vel += a * h; m.v += m.vel * h; }
      if (Math.abs(m.v - m.to) < m.eps && Math.abs(m.vel) < m.eps * 10) { m.v = m.to; m.vel = 0; E.live.delete(m); }
      if (m.owner) E.dirty.add(m.owner);
    });
    E.dirty.forEach(function (o) { o.render(); }); E.dirty.clear();
    if (E.live.size) E.raf = requestAnimationFrame(tick);
  }
  S.mv = mv; S.to = mvTo; S.set = mvSet;
  S.moving = function (m) { return E.live.has(m); };

  /** The spring as a CSS linear() curve + its settle time. Same physics for JS and CSS. Cached. */
  var EASES = new Map();
  function springEase(damping, response) {
    damping = damping == null ? 1 : damping; response = response || 0.4;
    var key = damping + '|' + response; if (EASES.has(key)) return EASES.get(key);
    var w = 2 * Math.PI / response, k = w * w, c = 2 * damping * w, h = 1 / 600, pts = [];
    var x = 0, v = 0, t = 0, settled = 0;
    while (t < 3) {
      var a = -k * (x - 1) - c * v; v += a * h; x += v * h; t += h; pts.push(x);
      if (Math.abs(x - 1) < 0.001 && Math.abs(v) < 0.01) { if (++settled > 30) break; } else settled = 0;
    }
    var n = 44, out = [];
    for (var i = 0; i <= n; i++) out.push(+pts[Math.min(pts.length - 1, Math.round(i / n * (pts.length - 1)))].toFixed(4));
    out[n] = 1;
    var res = { easing: 'linear(' + out.join(', ') + ')', duration: Math.round(t * 1000) };
    EASES.set(key, res); return res;
  }
  S.ease = springEase;
  var hasLinear = !!(window.CSS && CSS.supports && CSS.supports('transition-timing-function', 'linear(0, 1)'));
  if (!hasLinear) springEase = function (d, r) { return { easing: d != null && d < 0.8 ? 'cubic-bezier(0.34, 1.36, 0.64, 1)' : EASE, duration: Math.round((r || 0.4) * 1000) }; };
  S.ease = springEase;

  // CSS springs for transitions: --spring-snappy / -smooth / -bouncy / -pane (+ -dur). Fallbacks live in tokens.css.
  var CSS_SPRINGS = [['snappy', 0.72, 0.32], ['smooth', 1, 0.38], ['bouncy', 0.6, 0.42], ['pane', 0.9, 0.5]];
  function cssSprings() {
    CSS_SPRINGS.forEach(function (s) {
      if (reduce || !hasLinear) { root.style.removeProperty('--spring-' + s[0]); root.style.removeProperty('--spring-' + s[0] + '-dur'); return; }
      var sp = springEase(s[1], s[2]);
      root.style.setProperty('--spring-' + s[0], sp.easing); root.style.setProperty('--spring-' + s[0] + '-dur', sp.duration + 'ms');
    });
  }
  cssSprings();
  function onReduce() { reduce = rmq.matches; cssSprings(); }
  if (rmq.addEventListener) rmq.addEventListener('change', onReduce); else if (rmq.addListener) rmq.addListener(onReduce);

  /** Where a throw lands (Apple's momentum projection). v in px/s. */
  S.project = function (v, rate) { rate = rate || 0.99; return (v / 1000) * rate / (1 - rate); };
  /** Rubber band: the further past the edge, the less it follows. */
  S.rubber = function (over, dim, c) { dim = dim || 200; c = c || 0.55; return (over * dim * c) / (dim + c * Math.abs(over)); };
  /** Release velocity from the last pointer samples [{t, x, y}] → px/s, measured from "now":
   *  a finger that stopped and then lifted throws nothing. */
  S.velocityOf = function (hist, now) {
    now = now || performance.now();
    var pts = hist.filter(function (p) { return now - p.t < 100; });
    if (pts.length < 2) return { x: 0, y: 0 };
    var a = pts[0], b = pts[pts.length - 1], dt = Math.max(1, b.t - a.t);
    return { x: (b.x - a.x) / dt * 1000, y: (b.y - a.y) / dt * 1000 };
  };

  /** Spring-driven translate + scale of an element (individual properties). At rest the inline values are removed. */
  function tform(el) {
    if (el._sprT) return el._sprT;
    var T = { el: el, origin: false, render: function () {
      var x = T.x.v, y = T.y.v, s = T.s.v;
      var still = Math.abs(x) < 0.01 && Math.abs(y) < 0.01;
      el.style.translate = still ? '' : x.toFixed(2) + 'px ' + y.toFixed(2) + 'px';
      if (Math.abs(s - 1) < 0.0005) {
        el.style.scale = '';
        if (T.origin && !E.live.has(T.s)) { el.style.transformOrigin = ''; T.origin = false; }
      } else el.style.scale = s.toFixed(4);
    } };
    T.x = mv(0, 0.02, T); T.y = mv(0, 0.02, T); T.s = mv(1, 0.0004, T);
    el._sprT = T; return T;
  }
  S.tform = tform;

  // ------------------------------------------------------------------ press: shrink toward the finger, spring back
  var PRESS = ['.btn', '.brand-tab', '.species__btn', '.cat-chip', '.brand-chip', '.lang__current', '.lang__menu button',
    '.np-heart', '.np-fab', '.np-btn', '.np-toast__undo', '.product.is-clickable', '.tile', '.cat-tile', '.intent',
    '.hero-ctl', '.hero-bg__toggle', '.cat-xlink', '.cat-nav__up', '.nav-lang__btn', '.m-search-btn', '.burger', '.pmodal__close', '.tab',
    '.coat-insert', '.pmodal__sectoggle', '.m-more', '.m-search-cancel', '.np-search__opt', '.np-li__open', '.cat-result__reset', '.range'];
  var LEAN = ['.np-heart', '.np-fab', '.lang__current', '.hero-ctl', '.cat-nav__up', '.pmodal__close'];
  var pressSel = PRESS.join(','), leanSel = LEAN.join(',');
  S.press = {
    add: function (sel) { PRESS.push(sel); pressSel = PRESS.join(','); },
    remove: function (sel) { PRESS = PRESS.filter(function (s) { return s !== sel; }); pressSel = PRESS.join(','); }
  };
  S.lean = { add: function (sel) { LEAN.push(sel); leanSel = LEAN.join(','); } };
  /** bigger things are heavier: they give less */
  function pressScale(el) { var w = el.offsetWidth; return w < 48 ? 0.9 : w < 140 ? 0.95 : w < 320 ? 0.97 : 0.985; }
  // Touch: like a scroll view on iOS, the press waits 70ms — a finger that starts scrolling never squeezes the card
  // it happened to land on (that squeeze + spring-back on every scroll read as stutter). A quick tap still shows the
  // full press: it starts on release and springs straight back.
  var pressed = null, pending = null;
  function press(el, x, y) {
    var T = tform(el), r = el.getBoundingClientRect();
    if (Math.abs(T.s.v - 1) < 0.002 && r.width) {   // shrinks toward the finger
      el.style.transformOrigin = ((x - r.left) / r.width * 100).toFixed(1) + '% ' + ((y - r.top) / r.height * 100).toFixed(1) + '%';
      T.origin = true;
    }
    mvTo(T.s, pressScale(el), { damping: 1, response: 0.16 });
    pressed = { el: el, r: r };
  }
  function release() {
    if (!pressed) return;
    mvTo(tform(pressed.el).s, 1, { damping: 0.58, response: 0.42 });
    pressed = null;
  }
  function drop() { if (pending) { clearTimeout(pending.t); pending = null; } }
  document.addEventListener('pointerdown', function (e) {
    if (e.button !== 0 || reduce || !e.target.closest) return;
    var el = e.target.closest(pressSel);
    if (!el || el.disabled || el.matches(':disabled, [aria-disabled="true"], [data-no-press]')) return;
    release(); drop();
    if (e.pointerType !== 'touch') { press(el, e.clientX, e.clientY); return; }
    pending = { el: el, x: e.clientX, y: e.clientY, t: setTimeout(function () { var p = pending; pending = null; if (p) press(p.el, p.x, p.y); }, 70) };
  }, true);
  document.addEventListener('pointerup', function () {
    if (pending) { var p = pending; drop(); press(p.el, p.x, p.y); tform(p.el).s.vel = -(1 - pressScale(p.el)) * 25; }   // tap: dip and spring back
    release();
  }, true);
  document.addEventListener('pointercancel', function () { drop(); release(); }, true);
  document.addEventListener('dragstart', function () { drop(); release(); }, true);
  document.addEventListener('pointermove', function (e) {   // finger slid off the control — it lets go, like iOS
    if (pending && Math.abs(e.clientX - pending.x) + Math.abs(e.clientY - pending.y) > 8) drop();
    if (!pressed) return;
    var r = pressed.r, pad = 14;
    if (e.clientX < r.left - pad || e.clientX > r.right + pad || e.clientY < r.top - pad || e.clientY > r.bottom + pad) release();
  }, { passive: true });
  window.addEventListener('scroll', function () { if (pending) drop(); }, { passive: true, capture: true });

  // lean: small controls drift toward the mouse and settle back softly
  (function () {
    var lean = null, raf = 0, last = null;
    function letGo() {
      if (!lean) return; var T = tform(lean);
      mvTo(T.x, 0, { damping: 0.55, response: 0.5 }); mvTo(T.y, 0, { damping: 0.55, response: 0.5 }); lean = null;
    }
    document.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse' || !fineMq.matches) return;
      if (S.scrolling()) { letGo(); return; }
      last = e;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0; if (reduce || !last.target.closest) return;
        var el = last.target.closest(leanSel);
        if (lean && lean !== el) letGo();
        if (!el || el.disabled) return;
        var r = el.getBoundingClientRect(); if (!r.width) return;
        var L = r.width < 48 ? 2.5 : r.width < 160 ? 1.6 : 1;
        var T = tform(el);
        var dx = Math.max(-1, Math.min(1, (last.clientX - r.left - T.x.v - r.width / 2) / (r.width / 2)));
        var dy = Math.max(-1, Math.min(1, (last.clientY - r.top - T.y.v - r.height / 2) / (r.height / 2)));
        mvTo(T.x, dx * L, { damping: 1, response: 0.22 }); mvTo(T.y, dy * L, { damping: 1, response: 0.22 }); lean = el;
      });
    }, { passive: true });
    document.addEventListener('pointerleave', letGo);
    window.addEventListener('blur', letGo);
  })();

  // ------------------------------------------------------------------ tilt: cards lean toward the cursor, with a glare
  /** host — container (or selector); item — selector of the tilting children. Writes inline `transform`
   *  (perspective + rotateX/Y), --gx/--gy (glare centre, %) and .is-tilting. Fine pointers only. */
  S.tilt = function (host, item, max) {
    if (typeof host === 'string') host = document.querySelector(host);
    if (!host || host._sprTilt) return;
    host._sprTilt = true; max = max || 6;
    var cur = null;
    function rig(el) {
      if (el._sprR) return el._sprR;
      var R = { render: function () {
        var rx = R.rx.v, ry = R.ry.v;
        el.style.transform = Math.abs(rx) < 0.01 && Math.abs(ry) < 0.01 ? '' : 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
      } };
      R.rx = mv(0, 0.02, R); R.ry = mv(0, 0.02, R); el._sprR = R; return R;
    }
    function flat(el) {
      if (!el) return; var R = rig(el);
      mvTo(R.rx, 0, { damping: 0.6, response: 0.55 }); mvTo(R.ry, 0, { damping: 0.6, response: 0.55 });
      el.classList.remove('is-tilting'); el._sprRect = null;
    }
    host.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse' || !fineMq.matches || reduce) return;
      if (S.scrolling()) { flat(cur); cur = null; return; }
      var el = e.target.closest ? e.target.closest(item) : null;
      if (el && !host.contains(el)) el = null;
      if (cur !== el) { flat(cur); cur = el; if (el) el._sprRect = el.getBoundingClientRect(); }   // measured flat, before it tilts
      if (!el || !el._sprRect) return;
      var r = el._sprRect, u = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), v = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
      var R = rig(el);
      mvTo(R.ry, (u - 0.5) * max, { damping: 1, response: 0.18 }); mvTo(R.rx, (0.5 - v) * max * 0.8, { damping: 1, response: 0.18 });
      el.style.setProperty('--gx', (u * 100).toFixed(1) + '%'); el.style.setProperty('--gy', (v * 100).toFixed(1) + '%');
      el.classList.add('is-tilting');
    }, { passive: true });
    host.addEventListener('pointerleave', function () { flat(cur); cur = null; });
    window.addEventListener('scroll', function () { if (cur) { flat(cur); cur = null; } }, { passive: true });
  };

  // ------------------------------------------------------------------ FLIP on springs
  /** Remember where elements are. els — NodeList/array or selector; key(el) — stable id. Hidden ones don't count. */
  S.flipRecord = function (els, key) {
    var m = new Map(); if (typeof els === 'string') els = document.querySelectorAll(els);
    Array.prototype.forEach.call(els, function (el) {
      var r = el.getBoundingClientRect(); if (r.width || r.height) m.set(key(el), { x: r.left - (el._sprT ? el._sprT.x.v : 0), y: r.top - (el._sprT ? el._sprT.y.v : 0) });
    });
    return m;
  };
  /** After the DOM changed: each element that moved starts at its old place and glides home. Batched: all reads, then writes. */
  S.flipPlay = function (before, els, key, opt) {
    if (reduce || !S.ready) return 0;
    opt = opt || { damping: 0.82, response: 0.38 };
    if (typeof els === 'string') els = document.querySelectorAll(els);
    var vh = window.innerHeight, jobs = [];
    Array.prototype.forEach.call(els, function (el) {
      var was = before.get(key(el)); if (was == null) return;
      var r = el.getBoundingClientRect(); if (!r.width && !r.height) return;
      var T = el._sprT, dx = was.x - (r.left - (T ? T.x.v : 0)), dy = was.y - (r.top - (T ? T.y.v : 0));
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      if ((r.bottom < -40 && was.y + r.height < -40) || (r.top > vh + 40 && was.y > vh + 40)) return;   // off screen before and after
      jobs.push([el, dx, dy]);
    });
    jobs.forEach(function (j) {
      var T = tform(j[0]);
      if (Math.abs(j[1]) >= 1) { mvSet(T.x, j[1]); mvTo(T.x, 0, opt); }
      if (Math.abs(j[2]) >= 1) { mvSet(T.y, j[2]); mvTo(T.y, 0, opt); }
    });
    return jobs.length;
  };

  // ------------------------------------------------------------------ enter / exit helpers (WAAPI on spring curves)
  /** Enter: from `from` to rest on a spring. Reduced motion: opacity only. extra: {delay, rest:{prop: restValue}} */
  S.enter = function (el, from, spring, extra) {
    if (!el || !canAnimate) return null;
    spring = spring || [0.86, 0.45]; extra = extra || {};
    var to = {};
    Object.keys(from).forEach(function (k) {
      to[k] = k === 'opacity' ? 1 : k === 'filter' ? 'blur(0px)' : extra.rest && extra.rest[k] != null ? extra.rest[k] : 'none';
    });
    if (reduce) {
      var f = { opacity: 0 }, t = { opacity: 1 };
      return el.animate([f, t], { duration: 150, easing: 'ease-out', fill: 'backwards', delay: extra.delay || 0 });
    }
    var sp = springEase(spring[0], spring[1]);
    return el.animate([from, to], { duration: sp.duration, easing: sp.easing, fill: 'backwards', delay: extra.delay || 0 });
  };
  /** Rows / cards: a 40ms staircase on a spring, at most 10 steps. Everything is clickable during it. */
  S.stagger = function (els, each, from, spring) {
    els = Array.prototype.slice.call(els || []);
    if (!els.length || !S.ready) return;
    each = each == null ? 40 : each;
    els.forEach(function (el, i) {
      S.enter(el, from || { opacity: 0, transform: 'translateY(10px) scale(0.99)' }, spring || [0.88, 0.42], { delay: Math.min(i, 9) * each });
    });
  };
  /** Exit without waiting: a copy leaves, the real element is hidden/removed right away by the caller.
   *  Call BEFORE hiding the element. host — where to put the copy if the parent is about to be re-rendered. */
  S.ghostOut = function (el, to, ms, from, host) {
    if (!S.ok() || !el || el.hidden || !el.isConnected) return null;
    var r = el.getBoundingClientRect(); if (!r.width) return null;
    var g = el.cloneNode(true); g.removeAttribute('id');
    Array.prototype.forEach.call(g.querySelectorAll('[id]'), function (x) { x.removeAttribute('id'); });
    g.inert = true; g.setAttribute('aria-hidden', 'true'); g.removeAttribute('role'); g.setAttribute('data-ghost', '');
    Object.assign(g.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px',
      margin: '0', pointerEvents: 'none', transform: 'none', translate: 'none', scale: 'none', bottom: 'auto', right: 'auto', zIndex: 90, maxHeight: 'none', flex: 'none' });
    (host || document.body).appendChild(g);
    var a = g.animate([Object.assign({ opacity: 1, transform: 'none', filter: 'blur(0px)' }, from || {}), Object.assign({ opacity: 0 }, to || {})],
      { duration: ms || 150, easing: EASE, fill: 'forwards' });
    a.onfinish = a.oncancel = function () { g.remove(); };
    return a;
  };
  /** Open a block: height, paddings and opacity grow on a spring (up to the visible part of the screen). */
  function foldBox(el) { var cs = getComputedStyle(el); return { paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom }; }
  var FOLD0 = { height: '0px', paddingTop: '0px', paddingBottom: '0px' };
  S.foldIn = function (el) {
    el.hidden = false; el._sprClosing = false;
    el.getAnimations().forEach(function (a) { a.cancel(); });
    if (!S.ok()) return;
    var h = Math.min(el.offsetHeight, window.innerHeight * 0.85), sp = springEase(0.92, 0.46);
    el.style.overflow = 'hidden';
    var a = el.animate([Object.assign({}, FOLD0, { opacity: 0.2 }), Object.assign(foldBox(el), { height: h + 'px', opacity: 1 })], { duration: sp.duration, easing: sp.easing });
    a.onfinish = a.oncancel = function () { el.style.overflow = ''; };
  };
  /** Close: faster than it came; the logic doesn't wait — the block is already closed, it only plays out. */
  S.foldOut = function (el, done) {
    if (!S.ok() || el.hidden) { el.hidden = true; el._sprClosing = false; if (done) done(); return; }
    var h = Math.min(el.offsetHeight, window.innerHeight * 0.85); el._sprClosing = true; el.style.overflow = 'hidden';
    var a = el.animate([Object.assign(foldBox(el), { height: h + 'px', opacity: 1 }), Object.assign({}, FOLD0, { opacity: 0 })], { duration: 240, easing: EASE, fill: 'forwards' });
    a.onfinish = function () { if (el._sprClosing) { el.hidden = true; el._sprClosing = false; } el.style.overflow = ''; a.cancel(); if (done) done(); };
  };
  /** Swap a label with a soft rise (transitions.dev "Text swap"). */
  S.swapText = function (el, text) {
    if (!el || el.textContent === text) return;
    var had = !!el.textContent; el.textContent = text;
    if (had && S.ready && !reduce) S.enter(el, { opacity: 0, transform: 'translateY(3px)', filter: 'blur(2px)' }, [1, 0.28]);
  };
  /** Error: a short shiver (transitions.dev "Error shake"). */
  S.shake = function (el) {
    if (!S.ok() || !el) return;
    el.animate([{ translate: '0 0' }, { translate: '-6px 0' }, { translate: '5px 0' }, { translate: '-3px 0' }, { translate: '2px 0' }, { translate: '0 0' }], { duration: 360, easing: EASE });
  };

  /** Sliding indicator (transitions.dev "Sliding tabs", Монтажка's tab pill): x/y/w/h on springs; while it travels
   *  it stretches in the direction of travel like a drop. move(rect, instant). rect — {x, y, w, h} in the
   *  indicator's offset-parent coordinates. */
  S.indicator = function (ind, opt) {
    opt = opt || {};
    var P = {}, stretch = opt.stretch !== false;
    var owner = { render: function () {
      var v = P.x.vel, st = stretch ? Math.min(18, Math.abs(v) * 0.02) : 0, left = P.x.v - (v < 0 ? st : 0);
      ind.style.width = (P.w.v + st).toFixed(2) + 'px';
      if (P.useH) ind.style.height = P.h.v.toFixed(2) + 'px';
      ind.style.transform = 'translate(' + left.toFixed(2) + 'px, ' + P.y.v.toFixed(2) + 'px)' + (st ? ' scaleY(' + (1 - st / 140).toFixed(4) + ')' : '');
    } };
    P.x = mv(0, 0.05, owner); P.y = mv(0, 0.05, owner); P.w = mv(0, 0.05, owner); P.h = mv(0, 0.05, owner);
    P.useH = opt.height !== false;
    P.placed = false;
    return {
      move: function (r, instant) {
        if (instant || !P.placed || !S.ready || reduce) {
          mvSet(P.x, r.x); mvSet(P.y, r.y || 0); mvSet(P.w, r.w); mvSet(P.h, r.h || 0); P.placed = true; owner.render(); return;
        }
        mvTo(P.x, r.x, { damping: opt.damping || 0.74, response: opt.response || 0.42 });
        mvTo(P.y, r.y || 0, { damping: 0.86, response: opt.response || 0.42 });
        mvTo(P.w, r.w, { damping: 0.9, response: opt.response || 0.42 });
        mvTo(P.h, r.h || 0, { damping: 0.9, response: opt.response || 0.42 });
      },
      moving: function () { return E.live.has(P.x) || E.live.has(P.y) || E.live.has(P.w) || E.live.has(P.h); },
      springs: P
    };
  };

  // ------------------------------------------------------------------ numbers: changed digits pop in
  // Any element with data-num follows its own text after S.num(el[, text]) (or S.watchNum(el)). Grows — digits come
  // from below, shrinks — from above; neighbouring changed digits stagger 70ms. Only changed digits move: 41 → 42 —
  // one "2". Changes faster than every 140ms only "tick". First render — no motion. data-num-flow — inside running text.
  var NUMS = { prev: new Map(), at: new Map(), ids: new WeakMap(), n: 0 };
  var NUM_RE = /([+−\-]?\d[\d.,:]*\d|[+−\-]?\d)/;
  function numVal(t) { var s = t.replace('−', '-').replace(',', '.'); return parseFloat(s); }
  function esc(t) { return t.replace(/[&<>"]/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]; }); }
  function numShape(a, b) {
    if (a == null || b == null) return false;
    var x = a.split(NUM_RE), y = b.split(NUM_RE);
    return x.length === y.length && x.every(function (p, i) { return i % 2 === 1 || p === y[i]; });
  }
  function numKey(el) { if (el.dataset.num) return el.dataset.num; if (!NUMS.ids.has(el)) NUMS.ids.set(el, '#' + (++NUMS.n)); return NUMS.ids.get(el); }
  function numRender(el, text) {
    var key = numKey(el), prev = NUMS.prev.get(key); NUMS.prev.set(key, text);
    var now = performance.now(), fast = now - (NUMS.at.get(key) || 0) < 140;
    var still = prev == null || prev === text || reduce || !S.ready;
    var flow = el.hasAttribute('data-num-flow'), parts = text.split(NUM_RE), old = prev != null ? prev.split(NUM_RE) : null;
    var same = numShape(prev, text), oldNums = old ? old.filter(function (p, i) { return i % 2; }) : [];
    var html = '', k = 0, moved = false;
    parts.forEach(function (p, i) {
      if (i % 2 === 0) { if (p) html += flow ? esc(p) : '<span class="t-digit t-txt">' + esc(p) + '</span>'; return; }
      var o = same ? old[i] : oldNums.indexOf(p) !== -1 ? p : null;
      var dir = o != null && !isNaN(numVal(o)) && numVal(p) < numVal(o) ? -1 : 1;
      for (var j = 0; j < p.length; j++) {
        var oc = o != null ? o[o.length - p.length + j] : undefined, pop = !still && oc !== p[j];
        if (pop) { moved = true; html += '<span class="t-digit"' + (k ? ' data-stagger="' + Math.min(3, k) + '"' : '') + (dir < 0 ? ' style="--digit-dir-y:-1"' : '') + '>' + p[j] + '</span>'; k++; }
        else html += '<span class="t-digit t-still">' + p[j] + '</span>';
      }
    });
    el.classList.add('t-digit-group'); el.classList.toggle('t-flow', flow);
    el.classList.toggle('is-animating', !fast); el.classList.toggle('is-tick', fast);
    el._numText = text; el.innerHTML = html;
    if (moved) NUMS.at.set(key, now);
  }
  /** Show `text` (or the element's current text) with changed digits popping in. */
  S.num = function (el, text) {
    if (!el) return;
    if (text == null) text = el.textContent;
    if (el._numText === text) return;
    numRender(el, String(text));
  };
  /** Follow an element's text from now on (its own re-render is ignored). */
  S.watchNum = function (el) {
    if (!el || el._numObs || !window.MutationObserver) return;
    S.num(el);
    el._numObs = new MutationObserver(function () { if (el._numText !== el.textContent) S.num(el); });
    el._numObs.observe(el, { childList: true, characterData: true, subtree: true });
  };

  function boot() {
    requestAnimationFrame(function () { requestAnimationFrame(function () { S.ready = true; }); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-num]'), S.watchNum);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
