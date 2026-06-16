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

  // Перерисовать продукты на нужном языке
  renderProducts(currentTab, lang);
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

// ===== Продукты =====
let currentTab = 'cats';

function renderProducts(tab, lang) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const items = PRODUCTS[tab] || [];
  grid.innerHTML = items.map(p => {
    const t = p[lang] || p.ru;
    const tags = t.tags.map(x => `<span>${x}</span>`).join('');
    return `
      <article class="product">
        <div class="product__img" style="background:linear-gradient(150deg,#eaf1e3,#d4e3c5)">${p.emoji}</div>
        <div class="product__body">
          <span class="product__cat">${t.cat}</span>
          <h3 class="product__name">${t.name}</h3>
          <p class="product__desc">${t.desc}</p>
          <div class="product__tags">${tags}</div>
        </div>
      </article>`;
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

  // --- Табы продуктов ---
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      currentTab = tab.getAttribute('data-tab');
      renderProducts(currentTab, getLang());
    });
  });

  // --- Форма обратной связи (демо, без отправки на сервер) ---
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formOk').hidden = false;
    form.reset();
  });

  // --- Год в подвале ---
  document.getElementById('year').textContent = new Date().getFullYear();
});
