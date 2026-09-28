// ===== Главная: движение в духе apple.com (css/motion-home.css) =====
// Однократно: маска строк заголовков, счёт чисел героя, clip-вытеснение фото «до/после».
// По скроллу (scrub): уход героя, подсветка слов заявления бренда, параллакс пачек, линия этапов.
// Scrub-части читают одно число --mh-p: его даёт CSS view()-таймлайн, а без него — rAF-запасной путь ниже
// (только пока элемент в кадре, одно чтение layout на кадр). Reduced motion / нет IO → скрипт молчит, всё в финале.
// Загружается ДО main.js; все разбиения делаем в rAF после DOMContentLoaded — уже после переводов main.js.
(function () {
  'use strict';
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  if ((mq && mq.matches) || !('IntersectionObserver' in window) || !document.querySelector('.hero--home')) return;
  root.classList.add('mh-js');

  var heroTitle = document.querySelector('[data-mh-lines="hero"]');
  // Страховка: заголовок героя никогда не остаётся скрытым
  var safety = setTimeout(function () { if (heroTitle) heroTitle.classList.add('mh-done'); }, 2500);
  var cssScroll = !!(window.CSS && CSS.supports && CSS.supports('animation-timeline: view()'));

  // ---------- Маска строк ----------
  // Слова → span, одно чтение offsetTop, затем строки <span.mh-line><span.mh-line__in>.
  // После анимации возвращаем простой текст (переносы снова живые, resize не страшен).
  function splitLines(els) {
    var jobs = els.map(function (el) {
      var text = el.textContent.replace(/\s+/g, ' ').trim();
      el.textContent = '';
      var spans = text.split(' ').map(function (w, i) {
        if (i) el.appendChild(document.createTextNode(' '));
        var s = document.createElement('span'); s.textContent = w; el.appendChild(s); return s;
      });
      return { el: el, text: text, spans: spans };
    });
    jobs.forEach(function (j) { j.tops = j.spans.map(function (s) { return s.offsetTop; }); });   // чтение
    jobs.forEach(function (j) {                                                                  // запись
      var lines = [], last = null;
      j.spans.forEach(function (s, i) {
        if (j.tops[i] !== last) { lines.push([]); last = j.tops[i]; }
        lines[lines.length - 1].push(s.textContent);
      });
      j.el.textContent = '';
      lines.forEach(function (ws, i) {
        if (i) j.el.appendChild(document.createTextNode(' '));
        var line = document.createElement('span'); line.className = 'mh-line';
        var inner = document.createElement('span'); inner.className = 'mh-line__in';
        inner.style.setProperty('--li', String(i));
        inner.textContent = ws.join(' ');
        line.appendChild(inner); j.el.appendChild(line);
      });
      j.el._mh = { text: j.text, lines: lines.length, state: 'split' };
      j.el.classList.add('mh-lines');
    });
  }
  function playLines(el) {
    var st = el._mh;
    if (!st || st.state !== 'split') return;
    st.state = 'playing';
    el.classList.add('mh-in');
    var hero = el === heroTitle;
    var total = (hero ? 80 + 800 + 70 * (st.lines - 1) : 700 + 60 * (st.lines - 1)) + 60;
    setTimeout(function () {
      // язык могли сменить посреди анимации — тогда main.js уже вставил новый простой текст
      if (el.querySelector('.mh-line')) el.textContent = st.text;
      el.classList.remove('mh-lines', 'mh-in');
      el.classList.add('mh-done');
      st.state = 'done';
    }, total);
  }

  function initTitles() {
    var titles = Array.prototype.slice.call(document.querySelectorAll('main [data-mh-lines]:not([data-mh-lines="hero"])'));
    if (!titles.length) return;
    // Разбиваем заранее (за 25% экрана до появления, когда шрифт уже загружен), играем при входе
    var play = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        play.unobserve(e.target); playLines(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    var prep = new IntersectionObserver(function (entries) {
      var ready = entries.filter(function (e) { return e.isIntersecting; }).map(function (e) { return e.target; });
      ready.forEach(function (el) { prep.unobserve(el); });
      if (!ready.length) return;
      splitLines(ready);
      ready.forEach(function (el) { play.observe(el); });
    }, { rootMargin: '0px 0px 25% 0px' });
    titles.forEach(function (el) { prep.observe(el); });
    // Смена языка до показа: main.js заменил текст — разбиваем заново, наблюдение продолжается
    document.addEventListener('np:lang', function () {
      var again = titles.filter(function (el) { return el._mh && el._mh.state === 'split'; });
      if (again.length) splitLines(again);
      titles.forEach(function (el) {
        if (el._mh && el._mh.state === 'playing') { el.classList.remove('mh-lines', 'mh-in'); el.classList.add('mh-done'); el._mh.state = 'done'; }
      });
    });
  }

  // ---------- Слова заявления бренда ----------
  var wordEls = Array.prototype.slice.call(document.querySelectorAll('[data-mh-words]'));
  function wrapWords() {
    wordEls.forEach(function (p) {
      var parts = p.textContent.split(/(\s+)/), n = 0, frag = document.createDocumentFragment();
      parts.forEach(function (part) {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
        var s = document.createElement('span'); s.className = 'mh-w';
        s.style.setProperty('--i', String(n++)); s.textContent = part; frag.appendChild(s);
      });
      p.textContent = ''; p.appendChild(frag);
      p.style.setProperty('--mh-n', String(n));
      p.classList.add('mh-words');
    });
  }

  // ---------- Счёт чисел героя ----------
  var counters = [];
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 5); };   // ≈ cubic-bezier(.23,1,.32,1)
  function initCount() {
    var dl = document.querySelector('[data-mh-count]');
    if (!dl) return;
    var dts = Array.prototype.slice.call(dl.querySelectorAll('dt'));
    var items = dts.map(function (dt) {
      var m = /^(\D*)(\d+)(\D*)$/.exec(dt.textContent.trim());
      if (!m) return null;
      var to = +m[2];
      return { dt: dt, pre: m[1], suf: m[3], to: to, from: (m[2].length === 4 && to >= 1900) ? to - 24 : 0, text: dt.textContent };
    }).filter(Boolean);
    var widths = items.map(function (it) { return it.dt.getBoundingClientRect().width; });   // чтение до записей
    items.forEach(function (it, i) {
      it.dt.style.minWidth = Math.ceil(widths[i]) + 'px';
      it.dt.textContent = it.pre + it.from + it.suf;
    });
    counters = items;
    var io = new IntersectionObserver(function (entries) {
      if (!entries.some(function (e) { return e.isIntersecting; })) return;
      io.disconnect();
      setTimeout(function () {
        var t0 = performance.now();
        var tick = function (now) {
          var t = Math.min(1, (now - t0) / 1000);
          items.forEach(function (it) {
            if (it.dead) return;
            it.dt.textContent = t < 1 ? it.pre + Math.round(it.from + (it.to - it.from) * easeOut(t)) + it.suf : it.text;
          });
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, 540);   // вместе с появлением строки статистики
    }, { threshold: 0.5 });
    io.observe(dl);
  }

  // ---------- Фото «до/после»: clip-path один раз ----------
  function initWipe() {
    var els = document.querySelectorAll('[data-mh-wipe]');
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target;
        el.classList.add('mh-in');
        setTimeout(function () { el.classList.add('mh-done'); }, 1200);
      });
    }, { rootMargin: '0px 0px -15% 0px' });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  // ---------- Этапы качества: где на линии стоит каждая точка (--mh-at) ----------
  function measureJourney() {
    var ol = document.querySelector('[data-mh-journey]');
    if (!ol) return;
    var stops = Array.prototype.slice.call(ol.children);
    var vertical = window.matchMedia('(max-width: 860px)').matches;
    var W = ol.clientWidth || 1, H = ol.clientHeight || 1;
    var at = stops.map(function (s) {
      return vertical ? (s.offsetTop + 9.5) / H : (s.offsetLeft + 5.5) / W;   // центр точки вдоль линии
    });
    stops.forEach(function (s, i) { s.style.setProperty('--mh-at', (Math.max(0, at[i] - 0.01)).toFixed(4)); });
  }

  // ---------- Запасной scrub (нет animation-timeline): IO-гейт + один rAF на кадр ----------
  function initScrubFallback() {
    var list = [];
    var hero = document.querySelector('.hero--home');
    if (hero) list.push({ el: hero, exit: true });
    ['.coat', '[data-mh-words]', '[data-mh-journey]'].forEach(function (sel) {
      Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) { list.push({ el: el }); });
    });
    var readRange = function () {
      list.forEach(function (t) {
        if (t.exit) return;
        var cs = getComputedStyle(t.el);
        t.a = parseFloat(cs.getPropertyValue('--mh-a')) || 0;
        t.b = parseFloat(cs.getPropertyValue('--mh-b')) || 1;
      });
    };
    var calc = function (t, top, h, vh) {
      var p = t.exit ? -top / (h || 1) : ((vh - top) / (vh + h) - t.a) / ((t.b - t.a) || 1);
      return Math.min(1, Math.max(0, p));
    };
    var paint = function (t, p) {
      var q = Math.round(p * 1000) / 1000;
      if (q === t.last) return;
      t.last = q; t.el.style.setProperty('--mh-p', String(q));
    };
    var live = new Set(), raf = 0;
    var frame = function () {
      raf = 0;
      var vh = window.innerHeight || 1;
      var arr = Array.from(live);
      var rects = arr.map(function (t) { return t.el.getBoundingClientRect(); });   // чтение
      arr.forEach(function (t, i) { paint(t, calc(t, rects[i].top, rects[i].height, vh)); });   // запись
    };
    var request = function () { if (!raf && live.size) raf = requestAnimationFrame(frame); };
    var byEl = new Map(list.map(function (t) { return [t.el, t]; }));
    var io = new IntersectionObserver(function (entries) {
      var vh = window.innerHeight || 1;
      entries.forEach(function (e) {
        var t = byEl.get(e.target);
        if (e.isIntersecting) live.add(t);
        else { live.delete(t); paint(t, calc(t, e.boundingClientRect.top, e.boundingClientRect.height, vh)); }
      });
      request();
    });
    readRange();
    list.forEach(function (t) { io.observe(t.el); });
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', function () { readRange(); request(); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // rAF: после обработчика DOMContentLoaded в main.js (переводы уже вставлены), до первой отрисовки
    requestAnimationFrame(function () {
      try {
        if (heroTitle) { splitLines([heroTitle]); playLines(heroTitle); }
      } catch (err) {
        if (heroTitle) heroTitle.classList.add('mh-done');
      }
      clearTimeout(safety);
      wrapWords();
      initCount();
      initTitles();
      initWipe();
      measureJourney();
      if (!cssScroll) initScrubFallback();
      var rt = 0;
      window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(measureJourney, 150); });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureJourney);
    });
  });

  document.addEventListener('np:lang', function () {
    wrapWords();   // main.js заменил текст — оборачиваем слова заново
    counters.forEach(function (it) {
      it.dead = true; it.dt.style.minWidth = '';
      if (!it.dt.hasAttribute('data-i18n')) it.dt.textContent = it.text;
    });   // перевод уже поставил финальный текст
    measureJourney();
  });
})();
