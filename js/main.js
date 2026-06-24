// ===== Логика сайта: языки, меню, продукты, форма =====

const LANGS = ['az', 'ru', 'en'];
const DEFAULT_LANG = 'ru';

// Текущий язык: из localStorage или по умолчанию
function getLang() {
  const saved = localStorage.getItem('lang');
  return LANGS.includes(saved) ? saved : DEFAULT_LANG;
}

// Применить переводы ко всем элементам с data-i18n
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value === undefined) return;
    if (el.hasAttribute('content')) {
      el.setAttribute('content', value);   // meta-теги
    } else {
      el.textContent = value;
    }
  });

  // <title> и meta description
  if (dict['meta.title']) document.title = dict['meta.title'];

  // Метка языка в кнопке
  document.getElementById('langLabel').textContent = lang.toUpperCase();

  // Перерисовать линейки и продукты на нужном языке
  renderRanges(lang);
  renderProducts(currentBrand, lang);
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

// ===== Линейки бренда =====
function renderRanges(lang) {
  const grid = document.getElementById('rangesGrid');
  if (!grid) return;
  grid.innerHTML = RANGES.map(r => {
    const t = r[lang] || r.ru;
    return `
      <article class="range">
        <div class="range__icon">${r.emoji}</div>
        <h3 class="range__name">${t.name}</h3>
        <p class="range__desc">${t.desc}</p>
      </article>`;
  }).join('');
}

// ===== Каталог по брендам =====
let currentBrand = 'np';
let currentSpecies = 'all'; // all | cats | dogs

// Добавить значок питомца к названию группы (для брендов кормов NP/Araton)
function prefixGroups(groups, prefix, species) {
  return groups.map(g => Object.assign({}, g, {
    group: {
      az: prefix + g.group.az,
      ru: prefix + g.group.ru,
      en: prefix + g.group.en
    },
    species: species
  }));
}

// Полный каталог: NP собираем из PRODUCTS (кошки+собаки), остальное — из BRANDS_EXTRA
function buildCatalog() {
  const extra = (typeof BRANDS_EXTRA !== 'undefined') ? BRANDS_EXTRA : {};
  return {
    np: prefixGroups(PRODUCTS.cats, '🐱 ', 'cats').concat(prefixGroups(PRODUCTS.dogs, '🐶 ', 'dogs')),
    araton: extra.araton || [],
    tpl: extra.tpl || [],
    misoko: extra.misoko || []
  };
}

// Оставить группы для выбранного вида (кошки/собаки). species "both"/пусто — показываем всегда.
function filterBySpecies(groups, species) {
  if (species === 'all') return groups;
  return groups.filter(g => {
    const sp = g.species || 'both';
    return sp === 'both' || sp === species;
  });
}

// Определяем цвет шерсти товара по линейке Superior Care (White / Red / Dark).
// Токены берём из английского названия — они одинаковы во всех языках.
function coatOf(item) {
  const s = (item.en && ((item.en.cat || '') + ' ' + (item.en.name || ''))) || '';
  if (!/Superior Care/.test(s)) return null; // метка только для линейки Superior Care
  if (/Dark (Cats|Coat)/.test(s)) return 'dark';
  if (/Red (Cats|Coat)/.test(s)) return 'red';
  if (/White (Cats|Dogs|Coat)/.test(s)) return 'white';
  return null;
}

function productCard(item, lang) {
  const t = item[lang] || item.ru;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  const tags = (t.tags || []).map(x => `<span>${x}</span>`).join('');
  const fallback = item.emoji || '🐾';
  const coat = coatOf(item);
  const ribbon = coat
    ? `<span class="coat-ribbon coat-ribbon--${coat}"><span class="coat-ribbon__dot"></span>${dict['coat.' + coat + '.label'] || ''}</span>`
    : '';
  const media = item.img
    ? `<img src="${item.img}" alt="${t.name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'product__emoji',textContent:'${fallback}'}))">`
    : `<span class="product__emoji">${fallback}</span>`;
  return `
    <article class="product${coat ? ' product--coat product--coat-' + coat : ''}">
      <div class="product__img">${ribbon}${media}</div>
      <div class="product__body">
        <span class="product__cat">${t.cat}</span>
        <h3 class="product__name">${t.name}</h3>
        <p class="product__desc">${t.desc}</p>
        <div class="product__tags">${tags}</div>
      </div>
    </article>`;
}

// Плавное появление карточек при прокрутке (без анимации при reduce-motion)
function revealCards(wrap) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const c = e.target;
      c.classList.add('in');
      io.unobserve(c);
      setTimeout(() => { c.classList.remove('reveal', 'in'); c.style.transitionDelay = ''; }, 700);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  wrap.querySelectorAll('.product').forEach((c, i) => {
    c.classList.add('reveal');
    c.style.transitionDelay = ((i % 3) * 70) + 'ms';
    io.observe(c);
  });
}

function renderProducts(brand, lang) {
  const wrap = document.getElementById('productsGrid');
  if (!wrap) return;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  let groups = buildCatalog()[brand] || [];
  if (currentSpecies === 'baby') {
    // Малыши: показываем только товары для щенков и котят из всех групп
    groups = groups
      .map(g => Object.assign({}, g, { items: g.items.filter(it => it.baby) }))
      .filter(g => g.items.length);
  } else {
    groups = filterBySpecies(groups, currentSpecies);
  }

  // Быстрые чипы-категории для перехода к группам
  const nav = document.getElementById('catNav');
  if (nav) {
    nav.innerHTML = groups.map((g, i) => {
      const name = (g.group && (g.group[lang] || g.group.ru)) || '';
      return `<button class="cat-chip" type="button" data-target="grp-${i}">${name}</button>`;
    }).join('');
  }

  if (!groups.length) {
    wrap.innerHTML = `<p class="catalog-empty">${dict['products.empty'] || ''}</p>`;
    return;
  }

  const banner = currentSpecies === 'baby'
    ? `<div class="baby-banner"><span class="baby-banner__icon">🍼</span><div class="baby-banner__text"><h3>${dict['products.babiesTitle'] || ''}</h3><p>${dict['products.babiesText'] || ''}</p></div></div>`
    : '';
  wrap.innerHTML = banner + groups.map((g, i) => {
    const groupName = (g.group && (g.group[lang] || g.group.ru)) || '';
    // Группа Superior Care: распределяем по цвету шерсти и добавляем вставки.
    if (g.coat) {
      const buckets = { white: [], red: [], dark: [], none: [] };
      g.items.forEach(it => { buckets[coatOf(it) || 'none'].push(it); });
      let inner = `<p class="coat-note">${dict['products.coatNote'] || ''}</p>`;
      ['white', 'red', 'dark'].forEach(c => {
        if (!buckets[c].length) return;
        inner += `
          <div class="coat-insert coat-insert--${c}">
            <span class="coat-insert__dot"></span>
            <div class="coat-insert__text">
              <h4>${dict['coat.' + c + '.title'] || ''}</h4>
              <p>${dict['coat.' + c + '.desc'] || ''}</p>
            </div>
          </div>
          <div class="products">${buckets[c].map(it => productCard(it, lang)).join('')}</div>`;
      });
      if (buckets.none.length) {
        inner += `<div class="products">${buckets.none.map(it => productCard(it, lang)).join('')}</div>`;
      }
      return `
        <div class="product-group product-group--coat" id="grp-${i}">
          <h3 class="product-group__title">${groupName}</h3>
          ${inner}
        </div>`;
    }
    const cards = g.items.map(it => productCard(it, lang)).join('');
    return `
      <div class="product-group" id="grp-${i}">
        <h3 class="product-group__title">${groupName}</h3>
        <div class="products">${cards}</div>
      </div>`;
  }).join('');

  // Прокрутка к группе по клику на чип
  if (nav) {
    nav.querySelectorAll('.cat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const target = document.getElementById(chip.getAttribute('data-target'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  revealCards(wrap);
}

// ===== Парящие фото товаров в фоне (параллакс) =====
const FLOATIES = [
  { sel: '.brand', items: [
    { img: 'assets/float/np-mzg.webp',       css: 'top:14%;left:-46px;width:150px;',  speed: 0.08, delay: 0 },
    { img: 'assets/float/np-mobility.webp',  css: 'bottom:8%;right:-30px;width:128px;', speed: 0.15, delay: 1.2 }
  ]},
  { sel: '.catalog-cta', items: [
    { img: 'assets/float/np-salmonoil.webp', css: 'top:12%;right:1%;width:118px;',     speed: 0.12, delay: 0.4 },
    { img: 'assets/float/np-kitten.webp',    css: 'bottom:-24px;left:2%;width:150px;', speed: 0.07, delay: 1.6 }
  ]},
  { sel: '.about', items: [
    { img: 'assets/float/np-beauty.webp',    css: 'top:10%;right:-34px;width:138px;',  speed: 0.10, delay: 0.8 },
    { img: 'assets/float/np-whitecats.webp', css: 'bottom:8%;left:-26px;width:150px;', speed: 0.16, delay: 2.0 }
  ]},
  { sel: '.quality', items: [
    { img: 'assets/float/np-weight.webp',    css: 'top:14%;left:1%;width:150px;',      speed: 0.09, delay: 0.2 },
    { img: 'assets/float/np-sensitive.webp', css: 'bottom:10%;right:2%;width:138px;',   speed: 0.13, delay: 1.4 }
  ]},
  { sel: '#contact', items: [
    { img: 'assets/float/np-mobility.webp',  css: 'top:12%;left:1%;width:122px;',       speed: 0.11, delay: 0.6 }
  ]}
];

function initFloaties() {
  if (typeof window === 'undefined' || window.innerWidth <= 720) return;
  const created = [];
  FLOATIES.forEach(group => {
    const section = document.querySelector(group.sel);
    if (!section) return;
    section.classList.add('floaties-host');
    group.items.forEach(it => {
      const div = document.createElement('div');
      div.className = 'floatie';
      div.style.cssText = it.css;
      div.dataset.speed = it.speed;
      const img = document.createElement('img');
      img.src = it.img; img.alt = ''; img.setAttribute('aria-hidden', 'true');
      img.className = 'floatie__img'; img.style.animationDelay = (it.delay || 0) + 's';
      div.appendChild(img);
      section.appendChild(div);
      created.push(div);
    });
  });
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!created.length || reduce) return;

  let centers = [];
  function measure() {
    const sy = window.pageYOffset;
    centers = created.map(f => { f.style.transform = 'none'; const r = f.getBoundingClientRect(); return r.top + sy + r.height / 2; });
  }
  function update() {
    const mid = window.pageYOffset + window.innerHeight / 2;
    created.forEach((f, i) => {
      const speed = parseFloat(f.dataset.speed) || 0.1;
      const delta = (mid - centers[i]) * speed;
      f.style.transform = 'translate3d(0,' + delta.toFixed(1) + 'px,0)';
    });
  }
  let ticking = false;
  function onScroll() { if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; } }
  measure(); update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { measure(); update(); });
}

// ===== Инициализация =====
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyTranslations(lang);

  // --- Переключатель языка ---
  const langWrap = document.getElementById('lang');
  const langBtn = document.getElementById('langBtn');
  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    langWrap.classList.toggle('is-open');
    langBtn.setAttribute('aria-expanded', langWrap.classList.contains('is-open'));
  });
  document.querySelectorAll('#langMenu button').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-lang'));
      langWrap.classList.remove('is-open');
    });
  });
  document.addEventListener('click', () => langWrap.classList.remove('is-open'));

  // --- Бургер-меню ---
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open');
      nav.classList.remove('is-open');
    });
  });

  // --- Табы брендов ---
  const VALID_BRANDS = ['np', 'araton', 'tpl', 'misoko'];

  function activateBrand(brand, updateHash) {
    if (!VALID_BRANDS.includes(brand)) return;
    currentBrand = brand;
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.toggle('is-active', t.getAttribute('data-brand') === brand);
    });
    renderProducts(currentBrand, getLang());
    if (updateHash) history.replaceState(null, '', '#' + brand);
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => activateBrand(tab.getAttribute('data-brand'), true));
  });

  // --- Переключатель «Все / Для кошек / Для собак» ---
  const speciesWrap = document.getElementById('species');
  if (speciesWrap) {
    speciesWrap.querySelectorAll('.species__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        speciesWrap.querySelectorAll('.species__btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentSpecies = btn.getAttribute('data-species') || 'all';
        renderProducts(currentBrand, getLang());
      });
    });
  }

  // Открыть нужный бренд по адресу (#np / #araton / #tpl / #misoko)
  if (document.getElementById('productsGrid')) {
    const hashBrand = location.hash.replace('#', '');
    if (hashBrand) activateBrand(hashBrand, false);
    window.addEventListener('hashchange', () => activateBrand(location.hash.replace('#', ''), false));
  }

  // --- Форма обратной связи (демо, без отправки на сервер) ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('formOk').hidden = false;
      form.reset();
    });
  }

  // --- Фоновый слайдер на главной (мягкий эффект «стирания», стрелки по бокам) ---
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const slides = Array.from(heroBg.querySelectorAll('.hero-bg__slide'));
    let cur = 0, timer = null;
    slides.forEach((s, i) => { s.style.zIndex = i === 0 ? '1' : '0'; });
    // Плавно показываем следующее фото мягким стиранием (clip-path)
    function wipeTo(n, dir) {
      if (n === cur || !slides[n]) return;
      const incoming = slides[n], prev = cur;
      const hidden = dir === 'prev' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)';
      incoming.style.transition = 'none';
      incoming.style.zIndex = '2';
      incoming.style.clipPath = hidden;
      void incoming.offsetWidth; // reflow, чтобы анимация сработала
      incoming.style.transition = 'clip-path 1.4s ease-in-out';
      incoming.style.clipPath = 'inset(0 0 0 0)';
      cur = n;
      setTimeout(() => { slides[prev].style.zIndex = '0'; incoming.style.zIndex = '1'; }, 1450);
    }
    function next() { wipeTo((cur + 1) % slides.length, 'next'); }
    function prev() { wipeTo((cur - 1 + slides.length) % slides.length, 'prev'); }
    function restart() { clearInterval(timer); timer = setInterval(next, 7000); }

    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });

    if (slides.length > 1) {
      restart();
      heroBg.addEventListener('mouseenter', () => clearInterval(timer));
      heroBg.addEventListener('mouseleave', restart);
    }
  }

  // --- Вкладки «О бренде» на главной ---
  const brandTabs = Array.from(document.querySelectorAll('.brand-tab'));
  if (brandTabs.length) {
    const panels = document.querySelectorAll('.brand-panel');
    brandTabs.forEach(t => t.addEventListener('click', () => {
      brandTabs.forEach(x => x.classList.remove('is-active'));
      panels.forEach(p => p.classList.remove('is-active'));
      t.classList.add('is-active');
      const name = t.getAttribute('data-tab');
      const panel = document.querySelector('.brand-panel[data-panel="' + name + '"]');
      if (panel) panel.classList.add('is-active');
    }));
  }

  // --- Парящие фото товаров в фоне ---
  initFloaties();

  // --- Год в подвале ---
  document.getElementById('year').textContent = new Date().getFullYear();
});
