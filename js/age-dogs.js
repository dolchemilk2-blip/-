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
  // Хвост — отдельной фигурой (.age-tail): у выбранной собаки он виляет (css/catalog-v2.css).
  const tail = d => `<path class="age-tail" d="${d}"/>`;
  // щенок сидит: большая голова, висячее ухо, круглая спинка, хвостик лежит на земле (земля y = 70)
  const PUPPY = `<path d="M44 29C31 34 20 45 18 59C17 64 18 69 22 70L56 70C58 70 58 67 55 67L53 66L52 45C54 41 55 37 54 33Z"/>
    <circle cx="46" cy="20" r="12.5"/><ellipse cx="57" cy="24.5" rx="7.5" ry="5.6"/><ellipse cx="63.5" cy="22.4" rx="2.6" ry="2.2"/>
    <ellipse cx="37.5" cy="25" rx="4.6" ry="9.5" transform="rotate(16 37.5 25)"/>${tail('M21 68C13 70 6 66 8 59C9 57 11 58 11 60C11 64 16 66 21 65Z')}`;
  // подросток стоит: легче, лапы длиннее (бедро мускулистое, как у взрослой), висячее ухо, хвост весело поднят (земля y = 80)
  const JUNIOR = `<path d="M28 32C40 30 56 30 68 30C73 29 76 25 78 20C80 14 86 12 90 15C92 17 94 19 96 20L103 22C106 23 107 27 104 28C100 30 95 31 91 31C89 33 89 37 90 40C90 43 88 46 85 48L85 76C85 78 87 79 89 80L77 80L77 76L76 51C68 51 59 50 53 49C49 49 46 51 45 55C44 59 42 64 40 68L39 76C40 78 42 79 44 80L31 80L31 75C30 71 29 68 27 65C23 59 21 52 22 45C22 39 25 34 28 32Z"/>
    <path d="M75 51L73 77C73 79 74 80 76 80L67 80L67 76L68 51Z"/><path d="M48 50C51 56 51 63 49 68L48 76C48 78 49 79 51 80L43 80L43 75C44 70 45 63 45 57Z"/>
    <ellipse cx="80" cy="21" rx="3.6" ry="8" transform="rotate(22 80 21)"/>${tail('M29 33C22 30 17 24 16 15C16 12 19 12 20 15C21 22 25 27 30 29Z')}`;
  // взрослая — лабрадор: глубокая грудь, ровная спина, висячее ухо, хвост «выдрой» (земля y = 80)
  const ADULT = `<path d="M28 28C42 26 60 26 74 26C79 25 83 20 85 15C87 10 93 9 97 13C99 15 101 18 104 19L113 21C117 22 118 26 115 28C111 30 105 31 99 31C96 33 96 38 97 41C98 44 96 48 92 51L91 76C91 78 93 79 94 80L82 80L81 76L80 54C72 54 62 52 54 51C50 51 47 53 46 57C45 61 43 65 40 69L39 76C40 78 42 79 43 80L29 80L29 75C28 71 27 68 25 65C21 59 19 51 20 43C21 36 24 31 28 28Z"/>
    <path d="M79 53L77 77C77 79 78 80 80 80L71 80L71 76L72 53Z"/><path d="M50 52C53 58 53 64 51 69L50 76C50 78 51 79 53 80L44 80L44 75C45 70 46 64 46 58Z"/>
    <ellipse cx="84.5" cy="20" rx="4" ry="8.5" transform="rotate(20 84.5 20)"/>${tail('M29 31C22 32 14 35 7 40C5 41 6 44 8 43C15 40 22 38 27 37Z')}`;
  const DOGS = {
    starter: { h: 24, vb: '4 6 64 64', svg: PUPPY },
    junior: { h: 31, vb: '10 10 100 70', svg: JUNIOR },
    adult: { h: 36, vb: '4 6 116 74', svg: ADULT },
    // все возрасты: взрослая собака и сидящий щенок напротив, мордой к ней
    'all-life-stage': { h: 36, vb: '4 6 172 74', svg: ADULT + `<g transform="translate(178 24) scale(-.8 .8)">${PUPPY}</g>` }
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
