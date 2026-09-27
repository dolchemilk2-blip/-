// ===== Mobile helpers: visual-viewport height, active tab kept in view, search sheet position =====
(function () {
  const mq = window.matchMedia('(max-width: 720px)');
  const root = document.documentElement;

  // Экранная клавиатура уменьшает видимую область — CSS читает --vvh
  const vv = window.visualViewport;
  function setVvh() { root.style.setProperty('--vvh', Math.round(vv ? vv.height : innerHeight) + 'px'); }
  setVvh();
  (vv || window).addEventListener('resize', setVvh);

  // Активная вкладка/кнопка в прокручиваемом ряду всегда видна (без вертикального скролла страницы)
  function keepInView(list) {
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const a = list.querySelector('.is-active, [aria-selected="true"], [aria-checked="true"]');
    if (!a) return;
    const pad = 12, l = a.offsetLeft - pad, r = a.offsetLeft + a.offsetWidth + pad;
    let x = list.scrollLeft;
    if (l < x) x = l; else if (r > x + list.clientWidth) x = r - list.clientWidth;
    if (x !== list.scrollLeft) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      list.scrollTo({ left: x, behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  function syncRows() {
    if (!mq.matches) return;
    ['tabs', 'species'].forEach(id => keepInView(document.getElementById(id)));
    document.querySelectorAll('.brand .tabs').forEach(keepInView);
  }
  document.addEventListener('np:ready', syncRows);
  document.addEventListener('np:render', () => requestAnimationFrame(syncRows));
  document.addEventListener('click', e => { if (e.target.closest('.tabs, .species')) requestAnimationFrame(syncRows); });
  window.addEventListener('load', syncRows);

  // Поиск: лист результатов прибит прямо под полем (position: fixed в css/mobile.css)
  function placeSearch() {
    const wrap = document.querySelector('.np-search.is-open');
    if (!wrap || !mq.matches) return;
    const field = wrap.querySelector('.np-search__field');
    if (!field) return;
    const b = field.getBoundingClientRect().bottom;
    wrap.style.setProperty('--pop-top', Math.max(8, Math.round(b + 6)) + 'px');
  }
  window.NPMobile = { placeSearch, syncRows };
  window.addEventListener('scroll', placeSearch, { passive: true });
  (vv || window).addEventListener('resize', placeSearch);
  (vv || window).addEventListener('scroll', placeSearch);

  // При фокусе в поиске на телефоне поднимаем поле к верху экрана, чтобы результатам было где поместиться
  document.addEventListener('focusin', e => {
    if (!mq.matches || !e.target.closest('.np-search__field')) return;
    const field = e.target.closest('.np-search__field');
    const header = document.querySelector('.header');
    const top = field.getBoundingClientRect().top - ((header && header.offsetHeight) || 56) - 10;
    if (top > 40) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollBy({ top, behavior: reduce ? 'auto' : 'smooth' });
    }
    setTimeout(placeSearch, 350);
  });
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
