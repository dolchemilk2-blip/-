// ===== Каталог: ряды карточек (.rail) =====
// Раздел, который не помещается в один ряд, уходит вбок: стрелки по краям (компьютер), свайп (телефон) и ползунок
// под рядом — он же линия, отделяющая следующий раздел. Ползунок можно тянуть или щёлкнуть по линии.
// main.js рисует разметку (railHtml); здесь — подписи стрелок, состояние ряда и управление.
(function () {
  'use strict';

  const T = {
    ru: { 'rail.prev': 'Назад', 'rail.next': 'Дальше' },
    az: { 'rail.prev': 'Geri', 'rail.next': 'İrəli' },
    en: { 'rail.prev': 'Previous', 'rail.next': 'Next' }
  };
  if (typeof TRANSLATIONS !== 'undefined') Object.keys(T).forEach(l => { if (TRANSLATIONS[l]) Object.assign(TRANSLATIONS[l], T[l]); });

  const reduce = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = () => (reduce() ? 'auto' : 'smooth');

  // Состояние ряда: можно ли листать, у края ли он; ползунок — ширина = видимая доля, сдвиг — в своих ширинах
  function sync(rail) {
    const tr = rail._track;
    if (!tr) return;
    const max = tr.scrollWidth - tr.clientWidth;
    const can = max > 2;
    rail.classList.toggle('is-scrollable', can);
    if (!can) { rail.classList.remove('at-start', 'at-end'); return; }
    const x = Math.max(0, Math.min(max, tr.scrollLeft));
    rail.classList.toggle('at-start', x < 4);
    rail.classList.toggle('at-end', x > max - 4);
    rail._thumb.style.width = (tr.clientWidth / tr.scrollWidth * 100) + '%';
    rail._thumb.style.transform = 'translateX(' + (x / tr.clientWidth * 100) + '%)';
  }

  function setup(rail) {
    if (rail._track) { sync(rail); return; }
    rail._track = rail.querySelector('.rail__track');
    rail._thumb = rail.querySelector('.rail__thumb');
    if (!rail._track || !rail._thumb) return;
    const later = () => {
      if (rail._raf) return;
      rail._raf = requestAnimationFrame(() => { rail._raf = 0; sync(rail); });
    };
    rail._track.addEventListener('scroll', later, { passive: true });
    // ряд, нарисованный во время смены бренда (сетка скрыта), получит размер позже — пересчитать тогда
    if (ro) ro.observe(rail._track);
    sync(rail);
  }
  const ro = window.ResizeObserver ? new ResizeObserver(list => list.forEach(en => { const r = en.target.closest('.rail'); if (r) sync(r); })) : null;
  function setupAll() { document.querySelectorAll('.rail').forEach(setup); }

  // Стрелки: на ширину видимой части (снап доводит до начала карточки)
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('.rail__btn');
    if (!b) return;
    const rail = b.closest('.rail'), tr = rail && rail._track;
    if (!tr) return;
    const dir = b.classList.contains('rail__btn--prev') ? -1 : 1;
    tr.scrollBy({ left: dir * tr.clientWidth * 0.92, behavior: behavior() });
  });

  // Ползунок: тянуть за бегунок или щёлкнуть по линии
  document.addEventListener('pointerdown', e => {
    const bar = e.target.closest && e.target.closest('.rail__bar');
    if (!bar || e.button > 0) return;
    const rail = bar.closest('.rail'), tr = rail && rail._track;
    if (!tr || !rail.classList.contains('is-scrollable')) return;
    e.preventDefault();
    const box = bar.getBoundingClientRect();
    const k = tr.scrollWidth / box.width;   // пиксель линии → пикселей ряда
    if (!e.target.closest('.rail__thumb')) {
      tr.scrollTo({ left: (e.clientX - box.left) * k - tr.clientWidth / 2, behavior: behavior() });
      return;
    }
    const x0 = e.clientX, s0 = tr.scrollLeft;
    rail.classList.add('is-dragging');
    tr.style.scrollSnapType = 'none';   // снап мешает тянуть плавно
    try { bar.setPointerCapture(e.pointerId); } catch (err) { /* old browser */ }
    const move = ev => { tr.scrollLeft = s0 + (ev.clientX - x0) * k; };
    const up = () => {
      bar.removeEventListener('pointermove', move);
      bar.removeEventListener('pointerup', up);
      bar.removeEventListener('pointercancel', up);
      rail.classList.remove('is-dragging');
      tr.style.scrollSnapType = '';
    };
    bar.addEventListener('pointermove', move);
    bar.addEventListener('pointerup', up);
    bar.addEventListener('pointercancel', up);
  });

  // Карточка дальше по ряду (поиск, «Мой список», ссылка) — прокрутить ряд к ней
  function reveal(card) {
    const rail = card && card.closest && card.closest('.rail');
    const tr = rail && rail.querySelector('.rail__track');
    if (!tr) return;
    const left = card.offsetLeft - parseFloat(getComputedStyle(tr).paddingLeft || 0);
    if (card.offsetLeft < tr.scrollLeft || card.offsetLeft + card.offsetWidth > tr.scrollLeft + tr.clientWidth) tr.scrollLeft = Math.max(0, left);
  }

  document.addEventListener('np:render', setupAll);
  document.addEventListener('np:render-more', setupAll);
  document.addEventListener('np:ready', setupAll);
  let rsT = 0;
  window.addEventListener('resize', () => { clearTimeout(rsT); rsT = setTimeout(() => document.querySelectorAll('.rail').forEach(sync), 120); });

  window.NPRails = { reveal, sync: setupAll };
})();
