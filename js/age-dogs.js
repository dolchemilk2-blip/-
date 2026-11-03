// ===== Каталог: «собачки возраста» над линейками Superior Care + иконки плиток групп =====
// Полоска-линия, на ней стоят собаки по мере взросления: Starter → Junior → Adult → All Life Stage, у каждого
// возраста своя собака. Нажатие показывает в колонках (белая / рыжая / тёмная шерсть) корма этого возраста.
// main.js рисует разметку через NPAge.track(); здесь — иллюстрации, подписи на трёх языках и переключение.
(function () {
  'use strict';

  // ---------- подписи (свои ключи — js/translations.js не трогаем) ----------
  const T = {
    ru: { 'age.title': 'Возраст собаки', 'age.none': 'В этой линейке нет корма для этого возраста',
      'age.starter': 'Starter', 'age.starter.hint': 'щенки', 'age.junior': 'Junior', 'age.junior.hint': 'подростки',
      'age.adult': 'Adult', 'age.adult.hint': 'взрослые', 'age.all-life-stage': 'All Life Stage', 'age.all-life-stage.hint': 'все возрасты' },
    az: { 'age.title': 'İtin yaşı', 'age.none': 'Bu xəttdə həmin yaş üçün yem yoxdur',
      'age.starter': 'Starter', 'age.starter.hint': 'balalar', 'age.junior': 'Junior', 'age.junior.hint': 'gənc itlər',
      'age.adult': 'Adult', 'age.adult.hint': 'yetkin itlər', 'age.all-life-stage': 'All Life Stage', 'age.all-life-stage.hint': 'bütün yaşlar' },
    en: { 'age.title': "Dog's age", 'age.none': 'No food for this age in this line',
      'age.starter': 'Starter', 'age.starter.hint': 'puppies', 'age.junior': 'Junior', 'age.junior.hint': 'young dogs',
      'age.adult': 'Adult', 'age.adult.hint': 'adult dogs', 'age.all-life-stage': 'All Life Stage', 'age.all-life-stage.hint': 'all ages' }
  };
  if (typeof TRANSLATIONS !== 'undefined') Object.keys(T).forEach(l => { if (TRANSLATIONS[l]) Object.assign(TRANSLATIONS[l], T[l]); });
  const lang = () => (window.NP && NP.lang ? NP.lang() : document.documentElement.lang) || 'ru';
  const t = k => (T[lang()] || T.ru)[k] || T.ru[k] || '';

  // ---------- иллюстрации: плоские собаки одного стиля, растут по мере взросления ----------
  // viewBox 0 0 140 104, земля — y = 100. Цвета шерсти — переменные, чтобы у каждого возраста была своя порода.
  const eye = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#2a2420"/><circle cx="${x + r * .35}" cy="${y - r * .35}" r="${r * .36}" fill="#fff"/>`;
  const PUPPY = (c) => `
    <ellipse cx="70" cy="100.5" rx="25" ry="3.4" fill="rgba(0,0,0,.12)"/>
    <path d="M88 93c11-1 15-8 12-17" fill="none" stroke="${c.dark}" stroke-width="6" stroke-linecap="round"/>
    <path d="M50 100c-3-24 8-36 20-36s23 12 20 36z" fill="${c.fur}"/>
    <ellipse cx="70" cy="82" rx="9" ry="11" fill="${c.cream}"/>
    <rect x="58" y="84" width="8" height="17" rx="4" fill="${c.fur}"/><rect x="74" y="84" width="8" height="17" rx="4" fill="${c.fur}"/>
    <ellipse cx="62" cy="99" rx="5.5" ry="2.6" fill="${c.cream}"/><ellipse cx="78" cy="99" rx="5.5" ry="2.6" fill="${c.cream}"/>
    <path d="M57 66q13 7 26 0" fill="none" stroke="#009a4d" stroke-width="3.6" stroke-linecap="round"/><circle cx="70" cy="70" r="2.6" fill="#f2c94c"/>
    <ellipse cx="52" cy="50" rx="7" ry="13" transform="rotate(18 52 50)" fill="${c.dark}"/>
    <ellipse cx="88" cy="50" rx="7" ry="13" transform="rotate(-18 88 50)" fill="${c.dark}"/>
    <circle cx="70" cy="50" r="18" fill="${c.fur}"/>
    <ellipse cx="70" cy="59" rx="9.5" ry="7" fill="${c.cream}"/>
    <ellipse cx="70" cy="55.5" rx="3.4" ry="2.5" fill="#2a2420"/>
    <path d="M70 58v3.2M66.5 61.5q3.5 2.4 7 0" fill="none" stroke="#2a2420" stroke-width="1.4" stroke-linecap="round"/>
    ${eye(62.5, 47, 2.6)}${eye(77.5, 47, 2.6)}`;
  const JUNIOR = (c) => `
    <ellipse cx="72" cy="100.5" rx="36" ry="3.4" fill="rgba(0,0,0,.12)"/>
    <path d="M44 66c-10-6-12-17-6-26" fill="none" stroke="${c.dark}" stroke-width="5.5" stroke-linecap="round"/>
    <rect x="45" y="74" width="8" height="27" rx="4" fill="${c.shade}"/><rect x="82" y="74" width="8" height="27" rx="4" fill="${c.shade}"/>
    <ellipse cx="68" cy="71" rx="28" ry="13" fill="${c.fur}"/>
    <path d="M54 62q10-6 22 0" fill="none" stroke="${c.dark}" stroke-width="8" stroke-linecap="round" opacity=".55"/>
    <ellipse cx="72" cy="78" rx="17" ry="5" fill="${c.cream}"/>
    <rect x="53" y="76" width="8" height="25" rx="4" fill="${c.fur}"/><rect x="90" y="75" width="8" height="26" rx="4" fill="${c.fur}"/>
    <ellipse cx="57" cy="99.5" rx="5" ry="2.4" fill="${c.cream}"/><ellipse cx="94" cy="99.5" rx="5" ry="2.4" fill="${c.cream}"/>
    <path d="M90 66q8 5 15-1" fill="none" stroke="#009a4d" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="100" cy="54" r="14" fill="${c.fur}"/>
    <ellipse cx="94" cy="53" rx="6" ry="12" transform="rotate(22 94 53)" fill="${c.dark}"/>
    <ellipse cx="111" cy="60" rx="9" ry="6.4" fill="${c.cream}"/>
    <ellipse cx="118.5" cy="57.5" rx="3" ry="2.4" fill="#2a2420"/>
    <path d="M110 64q5 4 9 0" fill="none" stroke="#2a2420" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M112 64.5q1.5 5 4 .5" fill="#f08c8c"/>
    ${eye(104, 50.5, 2.3)}`;
  const ADULT = (c) => `
    <ellipse cx="74" cy="100.5" rx="46" ry="3.6" fill="rgba(0,0,0,.12)"/>
    <path d="M34 63c-11 6-13 18-9 28" fill="none" stroke="${c.dark}" stroke-width="7" stroke-linecap="round"/>
    <rect x="36" y="70" width="9" height="31" rx="4.5" fill="${c.shade}"/><rect x="94" y="70" width="9" height="31" rx="4.5" fill="${c.shade}"/>
    <path d="M30 66c0-12 14-18 40-18s40 5 40 17-12 16-40 16-40-3-40-15z" fill="${c.fur}"/>
    <path d="M42 54q26-8 52-1" fill="none" stroke="${c.dark}" stroke-width="11" stroke-linecap="round" opacity=".7"/>
    <ellipse cx="99" cy="70" rx="11" ry="12" fill="${c.cream}"/>
    <rect x="46" y="72" width="9" height="29" rx="4.5" fill="${c.fur}"/><rect x="104" y="71" width="9" height="30" rx="4.5" fill="${c.fur}"/>
    <ellipse cx="50.5" cy="99.5" rx="5.6" ry="2.5" fill="${c.cream}"/><ellipse cx="108.5" cy="99.5" rx="5.6" ry="2.5" fill="${c.cream}"/>
    <path d="M100 53q9 6 17 0" fill="none" stroke="#009a4d" stroke-width="3.8" stroke-linecap="round"/><circle cx="108" cy="57" r="2.8" fill="#f2c94c"/>
    <path d="M101 33l3-17 10 13z" fill="${c.dark}"/><path d="M112 31l7-15 5 16z" fill="${c.dark}"/>
    <circle cx="110" cy="41" r="15" fill="${c.fur}"/>
    <path d="M113 45c6-2 14-1 17 3 2 4-2 8-9 8-6 0-9-3-8-11z" fill="${c.cream}"/>
    <ellipse cx="129" cy="48" rx="3.2" ry="2.6" fill="#2a2420"/>
    <path d="M120 54q4 3 8 0" fill="none" stroke="#2a2420" stroke-width="1.3" stroke-linecap="round"/>
    ${eye(113, 37.5, 2.4)}`;
  const DOGS = {
    starter: { h: 80, svg: PUPPY({ fur: '#f0cf9a', dark: '#c98f52', cream: '#fff6e6', shade: '#e0b97f' }) },
    junior: { h: 94, svg: JUNIOR({ fur: '#f1e3cf', dark: '#8f5a33', cream: '#fffaf1', shade: '#dcc8ab' }) },
    adult: { h: 114, svg: ADULT({ fur: '#c98a4e', dark: '#4a3a30', cream: '#f3dcc0', shade: '#b07a43' }) },
    // все возрасты: взрослая собака и щенок рядом
    'all-life-stage': { h: 114, svg: `<g transform="translate(-14 16) scale(.84)">${ADULT({ fur: '#e9e2d6', dark: '#8d7b6a', cream: '#ffffff', shade: '#d9d0c2' })}</g>` +
      `<g transform="translate(72 44) scale(.56)">${PUPPY({ fur: '#f3e3c8', dark: '#b58a5f', cream: '#ffffff', shade: '#e6d2b0' })}</g>` }
  };
  const dogSvg = age => `<svg viewBox="0 0 140 104" aria-hidden="true" focusable="false"><g stroke="rgba(70,45,25,.28)" stroke-width="1.1" paint-order="stroke">${DOGS[age].svg}</g></svg>`;

  // ---------- иконки плиток «Для собак / Для кошек» ----------
  const ICON = {
    dogs: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 14c-4 0-6 6-5 11 1 3 3 4 5 3M35 14c4 0 6 6 5 11-1 3-3 4-5 3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M13 16c2-4 6-6 11-6s9 2 11 6c2 4 2 10 0 15-2 6-6 9-11 9s-9-3-11-9c-2-5-2-11 0-15z" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="19" cy="23" r="1.9" fill="currentColor"/><circle cx="29" cy="23" r="1.9" fill="currentColor"/><path d="M21.5 30.5c1.4 1.2 3.6 1.2 5 0M24 28.5v2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="24" cy="27.6" rx="2.6" ry="1.8" fill="currentColor"/></svg>',
    cats: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 9l5 9M37 9l-5 9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M11 9c-2 6-3 12-2 17 1 9 7 14 15 14s14-5 15-14c1-5 0-11-2-17-4 3-8 5-13 5s-9-2-13-5z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><circle cx="18.5" cy="25" r="1.9" fill="currentColor"/><circle cx="29.5" cy="25" r="1.9" fill="currentColor"/><path d="M22 30.5l2 1.6 2-1.6M24 32.1v1.6M8 30l8 1M8 34l8-1M40 30l-8 1M40 34l-8-1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    both: '<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="30" rx="8" ry="7" fill="currentColor"/><ellipse cx="13" cy="21" rx="3.6" ry="4.6" fill="currentColor"/><ellipse cx="35" cy="21" rx="3.6" ry="4.6" fill="currentColor"/><ellipse cx="19" cy="13" rx="3.4" ry="4.4" fill="currentColor"/><ellipse cx="29" cy="13" rx="3.4" ry="4.4" fill="currentColor"/></svg>'
  };

  // ---------- полоска возрастов ----------
  let chosen = null;   // выбор пользователя переживает перерисовку каталога
  function track(ages, counts, def) {
    const cur = chosen && ages.includes(chosen) ? chosen : def;
    const dogs = ages.map(a => `
      <button class="age-dog" type="button" data-age="${a}" aria-pressed="${a === cur}" style="--h:${DOGS[a].h}px">
        <span class="age-dog__fig">${dogSvg(a)}</span>
        <span class="age-dog__label">${t('age.' + a)}<span class="age-dog__n">${counts[a] || 0}</span></span>
        <span class="age-dog__hint">${t('age.' + a + '.hint')}</span>
      </button>`).join('');
    return { cur, html: `<div class="age-track" role="group" aria-label="${t('age.title')}" style="--n:${ages.length}">${dogs}</div>` };
  }

  const reduce = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function setAge(block, age, from) {
    if (!block || block.getAttribute('data-age') === age) return;
    block.setAttribute('data-age', age);
    chosen = age;
    block.querySelectorAll('.age-dog').forEach(b => b.setAttribute('aria-pressed', String(b.getAttribute('data-age') === age)));
    if (reduce()) return;
    const fig = from && from.querySelector('.age-dog__fig');
    if (fig && fig.animate) fig.animate([{ transform: 'translateY(0) scale(1,1)' }, { transform: 'translateY(2px) scale(1.06,.92)', offset: .18 },
      { transform: 'translateY(-14px) scale(.97,1.04)', offset: .5 }, { transform: 'translateY(0) scale(1,1)' }], { duration: 560, easing: 'cubic-bezier(.3,.7,.3,1)' });
    const shown = Array.from(block.querySelectorAll('.product[data-age="' + age + '"], .coat-col__empty')).filter(el => el.offsetParent);
    if (window.NPSpring && NPSpring.ok && NPSpring.ok() && NPSpring.stagger) NPSpring.stagger(shown, 45, { opacity: 0, transform: 'translateY(12px) scale(0.98)' }, [0.88, 0.42]);
    else shown.forEach((el, i) => el.animate && el.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: i * 45, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' }));
  }
  // карточка внутри скрытого возраста (поиск, «Мой список», ссылка) — переключаем возраст, чтобы она была видна
  function reveal(card) {
    const block = card && card.closest && card.closest('.coat-block.has-ages');
    const age = card && card.getAttribute('data-age');
    if (block && age && block.getAttribute('data-age') !== age) setAge(block, age, block.querySelector('.age-dog[data-age="' + age + '"]'));
  }
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('.age-dog');
    if (b) setAge(b.closest('.coat-block'), b.getAttribute('data-age'), b);
  });

  window.NPAge = { track, reveal, icon: sp => ICON[sp] || ICON.both, t, ORDER: ['starter', 'junior', 'adult', 'all-life-stage'] };
})();
