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

  // ---------- силуэты: минимализм, одна сплошная заливка (currentColor), растут по мере взросления ----------
  // Земля — нижний край viewBox. Цвет задаёт CSS: серый у неактивных, зелёный бренда у выбранного возраста.
  const tail = (d, w) => `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round"/>`;
  // щенок в профиль: круглое тельце, короткие лапы, большая голова, висячее ухо, хвостик торчком
  const PUPPY = `<ellipse cx="19" cy="27" rx="12" ry="7.5"/>
    <rect x="10" y="28" width="5" height="12" rx="2.5"/><rect x="14.5" y="28" width="5" height="12" rx="2.5"/>
    <rect x="22.5" y="28" width="5" height="12" rx="2.5"/><rect x="27" y="28" width="5" height="12" rx="2.5"/>
    <circle cx="31" cy="15" r="9"/><ellipse cx="39" cy="18" rx="4.5" ry="3.5"/>
    <ellipse cx="23.5" cy="17" rx="3" ry="6.5" transform="rotate(25 23.5 17)"/>${tail('M8.5 24q-4-2-3-7', 3)}`;
  // подросток стоит в профиль: длинные лапы, висячее ухо
  const JUNIOR = `<rect x="10" y="17" width="27" height="10" rx="5"/>
    <rect x="12" y="22" width="4" height="18" rx="2"/><rect x="16.5" y="22" width="4" height="18" rx="2"/>
    <rect x="29" y="22" width="4" height="18" rx="2"/><rect x="33.5" y="22" width="4" height="18" rx="2"/>
    <path d="M31 21l6-13 6 2-5 14z"/><circle cx="41" cy="9" r="5.5"/><ellipse cx="47" cy="11" rx="4.5" ry="2.8"/>
    <ellipse cx="38" cy="11" rx="2.3" ry="5" transform="rotate(20 38 11)"/>${tail('M11 20q-6-3-6-10', 2.8)}`;
  // взрослая: крупнее, стоячие уши, вытянутая морда
  const ADULT = `<rect x="10" y="19" width="34" height="13" rx="6.5"/><ellipse cx="41" cy="26" rx="6.5" ry="7.5"/>
    <rect x="12" y="26" width="4.6" height="20" rx="2.3"/><rect x="17.4" y="26" width="4.6" height="20" rx="2.3"/>
    <rect x="35.5" y="26" width="4.6" height="20" rx="2.3"/><rect x="41" y="26" width="4.6" height="20" rx="2.3"/>
    <path d="M37 22l6-13 7 2-3 16z"/><circle cx="47" cy="11" r="6.2"/><path d="M50 8.5l9 4q.5 3-3 3.5h-7z"/>
    <path d="M42.5 8l1.5-8 4.5 6z"/><path d="M46.5 6l4-6.5 1.3 8z"/>${tail('M11 22q-7 3-7 13', 3.4)}`;
  const DOGS = {
    starter: { h: 21, vb: '0 5 45 35', svg: PUPPY },
    junior: { h: 29, vb: '0 0 52 40', svg: JUNIOR },
    adult: { h: 38, vb: '0 -2 61 48', svg: ADULT },
    // все возрасты: взрослая собака и щенок напротив, мордой к ней
    'all-life-stage': { h: 38, vb: '0 -2 95 48', svg: ADULT + `<g transform="translate(96 14.8) scale(-.78 .78)">${PUPPY}</g>` }
  };
  const dogSvg = age => `<svg viewBox="${DOGS[age].vb}" aria-hidden="true" focusable="false"><g fill="currentColor">${DOGS[age].svg}</g></svg>`;

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
        <span class="age-dog__txt"><span class="age-dog__label">${t('age.' + a)}<span class="age-dog__n">${counts[a] || 0}</span></span>
        <span class="age-dog__hint">${t('age.' + a + '.hint')}</span></span>
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
      { transform: 'translateY(-7px) scale(.97,1.04)', offset: .5 }, { transform: 'translateY(0) scale(1,1)' }], { duration: 560, easing: 'cubic-bezier(.3,.7,.3,1)' });
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
