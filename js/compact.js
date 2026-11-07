// ===== Телефон: компактный режим =====
// 1. Шапка прячется при прокрутке вниз и возвращается при прокрутке вверх (в каталоге строка разделов
//    поднимается на её место) — больше места под товары.
// 2. Раскрывающиеся блоки главной ([data-m-box] + кнопка [data-m-open]): калькулятор корма и форма письма
//    на телефоне свёрнуты в одну кнопку. На компьютере кнопки скрыты, блоки открыты (css/compact.css).
(function () {
  'use strict';

  const T = {
    az: { 'compact.calc': 'Hesabla', 'compact.calcLead': 'Heyvanın çəkisinə və qablaşdırmaya görə gündəlik norma.', 'compact.mail': 'E-poçtla yazın', 'compact.less': 'Gizlət' },
    ru: { 'compact.calc': 'Рассчитать', 'compact.calcLead': 'Суточная норма по весу питомца и упаковке.', 'compact.mail': 'Написать письмо', 'compact.less': 'Скрыть' },
    en: { 'compact.calc': 'Calculate', 'compact.calcLead': 'Daily amount by your pet’s weight and pack.', 'compact.mail': 'Write an email', 'compact.less': 'Hide' }
  };
  if (typeof TRANSLATIONS !== 'undefined') Object.keys(T).forEach(l => { if (TRANSLATIONS[l]) Object.assign(TRANSLATIONS[l], T[l]); });
  const lang = () => (window.NP && NP.lang && NP.lang()) || document.documentElement.lang || 'az';
  const t = k => (T[lang()] || T.az)[k] || T.az[k] || '';

  const root = document.documentElement;
  const mq = window.matchMedia('(max-width: 720px)');

  // ---------- 1. Шапка при прокрутке ----------
  let lastY = window.scrollY, ticking = false;
  const busy = () => root.classList.contains('nav-open') || root.classList.contains('modal-open') ||
    root.classList.contains('fnd-open') || root.classList.contains('m-search') || !!document.querySelector('.lang.is-open');
  function setOff(off) { root.classList.toggle('hdr-off', off); }
  function onScroll() {
    ticking = false;
    const y = window.scrollY, dy = y - lastY;
    if (!mq.matches || busy() || y < 160) { setOff(false); lastY = y; return; }
    if (dy > 8) { setOff(true); lastY = y; }
    else if (dy < -8) { setOff(false); lastY = y; }
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  mq.addEventListener ? mq.addEventListener('change', () => setOff(false)) : mq.addListener(() => setOff(false));
  // шапка нужна — показываем: фокус с клавиатуры попал в неё, открылось меню
  document.addEventListener('focusin', e => { if (e.target.closest && e.target.closest('.header')) setOff(false); });

  // ---------- 2. Раскрывающиеся блоки ----------
  function label(btn) {
    const open = btn.getAttribute('aria-expanded') === 'true';
    const span = btn.querySelector('span');
    if (span) span.textContent = t(open ? btn.getAttribute('data-less-key') : btn.getAttribute('data-open-key'));
  }
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-m-open]');
    if (!btn) return;
    const box = btn.closest('[data-m-box]');
    if (!box) return;
    const open = !box.classList.contains('is-open');
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    label(btn);
    if (open) {
      const first = box.querySelector('input, select, textarea, [data-feed-calc] button, [data-feed-calc] input');
      if (first && box.tagName === 'FORM') first.focus({ preventScroll: true });
    } else if (btn.getBoundingClientRect().top < 0) {
      btn.scrollIntoView({ block: 'center' });
    }
  });
  function relabel() { document.querySelectorAll('[data-m-open]').forEach(label); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', relabel); else relabel();
  document.addEventListener('np:lang', relabel);
})();
