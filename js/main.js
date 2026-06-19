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

// Добавить значок питомца к названию группы (для брендов кормов NP/Araton)
function prefixGroups(groups, prefix) {
  return groups.map(g => ({
    group: {
      az: prefix + g.group.az,
      ru: prefix + g.group.ru,
      en: prefix + g.group.en
    },
    items: g.items
  }));
}

// Полный каталог: NP собираем из PRODUCTS (кошки+собаки), остальное — из BRANDS_EXTRA
function buildCatalog() {
  const extra = (typeof BRANDS_EXTRA !== 'undefined') ? BRANDS_EXTRA : {};
  return {
    np: prefixGroups(PRODUCTS.cats, '🐱 ').concat(prefixGroups(PRODUCTS.dogs, '🐶 ')),
    araton: extra.araton || [],
    tpl: extra.tpl || [],
    misoko: extra.misoko || []
  };
}

function productCard(item, lang) {
  const t = item[lang] || item.ru;
  const tags = (t.tags || []).map(x => `<span>${x}</span>`).join('');
  const fallback = item.emoji || '🐾';
  const media = item.img
    ? `<img src="${item.img}" alt="${t.name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'product__emoji',textContent:'${fallback}'}))">`
    : `<span class="product__emoji">${fallback}</span>`;
  return `
    <article class="product">
      <div class="product__img">${media}</div>
      <div class="product__body">
        <span class="product__cat">${t.cat}</span>
        <h3 class="product__name">${t.name}</h3>
        <p class="product__desc">${t.desc}</p>
        <div class="product__tags">${tags}</div>
      </div>
    </article>`;
}

function renderProducts(brand, lang) {
  const wrap = document.getElementById('productsGrid');
  if (!wrap) return;
  const groups = buildCatalog()[brand] || [];
  wrap.innerHTML = groups.map(g => {
    const groupName = (g.group && (g.group[lang] || g.group.ru)) || '';
    const cards = g.items.map(it => productCard(it, lang)).join('');
    return `
      <div class="product-group">
        <h3 class="product-group__title">${groupName}</h3>
        <div class="products">${cards}</div>
      </div>`;
  }).join('');
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

  // --- Слайдер фото на главной ---
  const slider = document.getElementById('heroSlider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slider__slide'));
    const dotsWrap = document.getElementById('heroSliderDots');
    let idx = 0, timer = null;
    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.className = 'slider__dot' + (i === 0 ? ' is-active' : '');
      b.type = 'button';
      b.setAttribute('aria-label', 'Слайд ' + (i + 1));
      b.addEventListener('click', () => { go(i); restart(); });
      dotsWrap.appendChild(b);
      return b;
    });
    function go(n) {
      slides[idx].classList.remove('is-active');
      dots[idx].classList.remove('is-active');
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add('is-active');
      dots[idx].classList.add('is-active');
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(() => go(idx + 1), 4500);
    }
    if (slides.length > 1) {
      restart();
      slider.addEventListener('mouseenter', () => clearInterval(timer));
      slider.addEventListener('mouseleave', restart);
    }
  }

  // --- Год в подвале ---
  document.getElementById('year').textContent = new Date().getFullYear();
});
