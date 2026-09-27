// ===== Логика сайта: языки, меню, продукты, форма =====

const LANGS = ['az', 'ru', 'en'];
const DEFAULT_LANG = 'ru';

// ===== Ключи переводов модуля CORE (translations.js не редактируем) =====
Object.assign(TRANSLATIONS.az, {
  'a11y.skip': 'Kataloqa keç',
  'a11y.brands': 'Brendlər',
  'a11y.species': 'Kimin üçün',
  'a11y.close': 'Bağla',
  'a11y.lang': 'Dil seçimi',
  'species.none.cats': '{brand} brendinin pişiklər üçün məhsulu yoxdur',
  'species.none.dogs': '{brand} brendinin itlər üçün məhsulu yoxdur',
  'species.none.baby': '{brand} brendinin küçüklər və pişik balaları üçün məhsulu yoxdur',
  'live.count': 'Göstərilən məhsul sayı: {n}',
  'hero.carousel': 'karusel',
  'hero.label': 'Ev heyvanlarının fotoları',
  'hero.pause': 'Slayderi dayandır',
  'hero.play': 'Slayderi başlat'
});
Object.assign(TRANSLATIONS.ru, {
  'a11y.skip': 'Перейти к каталогу',
  'a11y.brands': 'Бренды',
  'a11y.species': 'Для кого',
  'a11y.close': 'Закрыть',
  'a11y.lang': 'Выбор языка',
  'species.none.cats': 'У {brand} нет товаров для кошек',
  'species.none.dogs': 'У {brand} нет товаров для собак',
  'species.none.baby': 'У {brand} нет товаров для малышей',
  'live.count': 'Показано товаров: {n}',
  'hero.carousel': 'карусель',
  'hero.label': 'Фотографии питомцев',
  'hero.pause': 'Остановить слайдер',
  'hero.play': 'Запустить слайдер'
});
Object.assign(TRANSLATIONS.en, {
  'a11y.skip': 'Skip to catalog',
  'a11y.brands': 'Brands',
  'a11y.species': 'Who it is for',
  'a11y.close': 'Close',
  'a11y.lang': 'Choose language',
  'species.none.cats': '{brand} has no products for cats',
  'species.none.dogs': '{brand} has no products for dogs',
  'species.none.baby': '{brand} has no products for puppies and kittens',
  'live.count': '{n} products shown',
  'hero.carousel': 'carousel',
  'hero.label': 'Pet photos',
  'hero.pause': 'Pause slideshow',
  'hero.play': 'Play slideshow'
});

// ===== Общие утилиты =====
const VALID_BRANDS = ['np', 'araton', 'tpl', 'misoko'];
const BRAND_NAMES = { np: "Nature's Protection", araton: 'Araton', tpl: 'Tauro Pro Line', misoko: 'Misoko' };
const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
const reduceMotion = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const emit = (name, detail) => document.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
const cssEsc = (s) => (window.CSS && CSS.escape) ? CSS.escape(s) : String(s).replace(/["\\]/g, '\\$&');
const LANG_HOOKS = [];   // функции, которые нужно перезапустить после смены языка (aria-метки, индикаторы)

// Перевод по ключу для текущего языка, с подстановкой {vars}
function tr(key, vars) {
  const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.ru;
  let s = dict[key];
  if (s === undefined) s = TRANSLATIONS.ru[key] || '';
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
  return s;
}

// Сообщение для скринридера (live-регион #npLive)
function announce(text) {
  const live = document.getElementById('npLive');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => { live.textContent = text; }, 30);
}

// Базовые стили-страховки с нулевой специфичностью (любое правило в CSS их перекрывает)
(function injectBaseStyles() {
  if (document.getElementById('np-core-base')) return;
  const st = document.createElement('style');
  st.id = 'np-core-base';
  st.textContent =
    ':where(.sr-only){position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}' +
    ':where(.skip-link){position:fixed;left:16px;top:12px;z-index:1000;padding:10px 16px;border-radius:10px;background:#1f2a24;color:#fff;font-weight:600;text-decoration:none;transform:translateY(-200%)}' +
    ':where(.skip-link:focus-visible,.skip-link:focus){transform:none}' +
    ':where(.hero-bg__toggle){position:absolute;right:16px;bottom:16px;z-index:5;width:40px;height:40px;border-radius:50%;border:0;display:grid;place-items:center;background:rgba(255,255,255,.85);color:#1f2a24;cursor:pointer}' +
    ':where(.species__btn[aria-disabled="true"]){opacity:.45;cursor:not-allowed}';
  (document.head || document.documentElement).insertBefore(st, (document.head || document.documentElement).firstChild);
})();

// Текущий язык: из localStorage или по умолчанию
function getLang() {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* private mode */ }
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
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  // Перерисовать линейки и продукты на нужном языке (без анимации — текст меняется мгновенно)
  renderRanges(lang);
  renderProducts(currentBrand, lang);
  LANG_HOOKS.forEach(fn => { try { fn(lang); } catch (e) { /* ignore */ } });
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
  applyTranslations(lang);
  emit('np:lang', { lang });
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
let MODAL_ITEMS = [];       // реестр карточек текущего рендера для модального окна
let MODAL_KEYS = [];        // ключи для поиска полного описания (js/descriptions.js)

// Ключ полного описания: только для Nature's Protection (наш сайт-источник)
function descKeyFor(brand, species, item) {
  if (brand !== 'np' || !item.en) return null;
  return species + '||' + (item.en.cat || '') + '||' + (item.en.name || '');
}

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
let CATALOG_CACHE = null;
function buildCatalog() {
  if (CATALOG_CACHE) return CATALOG_CACHE;
  const extra = (typeof BRANDS_EXTRA !== 'undefined') ? BRANDS_EXTRA : {};
  CATALOG_CACHE = {
    np: prefixGroups(PRODUCTS.cats, '🐱 ', 'cats').concat(prefixGroups(PRODUCTS.dogs, '🐶 ', 'dogs')),
    araton: extra.araton || [],
    tpl: extra.tpl || [],
    misoko: extra.misoko || []
  };
  return CATALOG_CACHE;
}

// Оставить группы для выбранного вида (кошки/собаки). species "both"/пусто — показываем всегда.
function filterBySpecies(groups, species) {
  if (species === 'all') return groups;
  return groups.filter(g => {
    const sp = g.species || 'both';
    return sp === 'both' || sp === species;
  });
}

// Группы бренда для фильтра «Все / Кошки / Собаки / Малыши»
function groupsFor(brand, species) {
  const groups = buildCatalog()[brand] || [];
  if (species === 'baby') {
    // Малыши: только товары для щенков и котят из всех групп
    return groups
      .map(g => Object.assign({}, g, { items: g.items.filter(it => it.baby) }))
      .filter(g => g.items.length);
  }
  return filterBySpecies(groups, species);
}

// Сколько карточек покажет фильтр (как в renderProducts: товары из витрин Tauro не дублируются)
function countFor(brand, species) {
  let skip = null;
  if (brand === 'tpl' && typeof TPL_SYSTEMS !== 'undefined') {
    skip = new Set();
    TPL_SYSTEMS.forEach(sys => sys.steps.forEach(st => skip.add(st.img)));
  }
  return groupsFor(brand, species).reduce((sum, g) =>
    sum + (skip ? g.items.filter(it => !skip.has(it.img)).length : g.items.length), 0);
}

// Стабильный id товара: бренд + ':' + путь к фото
function productId(item, brand) {
  if (!item) return '';
  const k = item.img || (item.en && item.en.name) || (item.ru && item.ru.name) || '';
  return brand + ':' + k;
}

function findById(id) {
  id = String(id || '');
  const i = id.indexOf(':');
  if (i < 0) return null;
  const brand = id.slice(0, i);
  const cat = buildCatalog();
  if (!cat[brand]) return null;
  for (const g of cat[brand]) {
    for (const it of g.items) if (productId(it, brand) === id) return { item: it, brand, species: g.species || 'both' };
  }
  if (brand === 'tpl' && typeof TPL_SYSTEMS !== 'undefined') {
    for (const sys of TPL_SYSTEMS) for (const st of sys.steps) {
      if (productId(st.item, 'tpl') === id) return { item: st.item, brand, species: 'both' };
    }
  }
  return null;
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

function productCard(item, lang, id, uid) {
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
  const pid = (id === undefined || id === null) ? '' : ` data-pid="${id}" tabindex="0" role="button"`;
  const did = uid ? ` data-id="${uid}"` : '';
  const more = `<span class="product__more">${dict['products.more'] || 'Подробнее'}<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
  return `
    <article class="product${coat ? ' product--coat product--coat-' + coat : ''} is-clickable"${pid}${did}>
      <div class="product__img">${ribbon}${media}<div class="product__actions"></div></div>
      <div class="product__body">
        <span class="product__cat">${t.cat}</span>
        <h3 class="product__name">${t.name}</h3>
        <p class="product__desc">${t.desc}</p>
        <div class="product__tags">${tags}</div>
        ${more}
      </div>
    </article>`;
}

// Построение модального окна товара
// opts: {id, brand, card, keyboard}
function openProductModal(item, lang, key, opts) {
  const modal = document.getElementById('productModal');
  const body = document.getElementById('pmodalBody');
  if (!modal || !body || !item) return;
  const t = item[lang] || item.ru;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  const fallback = item.emoji || '🐾';
  const coat = coatOf(item);
  const ribbon = coat
    ? `<span class="coat-ribbon coat-ribbon--${coat}"><span class="coat-ribbon__dot"></span>${dict['coat.' + coat + '.label'] || ''}</span>`
    : '';
  const media = item.img
    ? `<img src="${item.img}" alt="${t.name}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'product__emoji',textContent:'${fallback}'}))">`
    : `<span class="product__emoji">${fallback}</span>`;
  const tags = (t.tags || []).map(x => `<span>${x}</span>`).join('');
  // Полное описание: из item, затем из FULL_DESC (js/descriptions.js), затем обычное desc
  const ext = (key && typeof FULL_DESC !== 'undefined' && FULL_DESC[key] && FULL_DESC[key][lang]) || null;
  const comp = t.comp || (ext && ext.comp);
  const feeding = t.feeding || (ext && ext.feeding);
  const full = t.full || (ext && ext.full) || t.desc || '';
  const paras = (Array.isArray(full) ? full : String(full).split('\n')).filter(Boolean);
  const descHtml = paras.map(p => `<p>${p}</p>`).join('');
  const block = (labelKey, val) => {
    if (!val) return '';
    const rows = (Array.isArray(val) ? val : String(val).split('\n')).filter(Boolean).map(p => `<p>${p}</p>`).join('');
    return `<div class="pmodal__section"><h4>${dict[labelKey] || ''}</h4>${rows}</div>`;
  };
  // Структурированные секции (напр. шаги Tauro: кому подходит / тип шерсти / описание / применение)
  const sectionsHtml = (t.sections || []).map(s => {
    const inner = s.list
      ? `<ul class="pmodal__list">${s.list.map(x => `<li>${x}</li>`).join('')}</ul>`
      : `<p>${s.text || ''}</p>`;
    return `<div class="pmodal__section"><h4>${s.title}</h4>${inner}</div>`;
  }).join('');
  body.innerHTML = `
    <div class="pmodal__media">${ribbon}${media}</div>
    <div class="pmodal__info">
      <span class="product__cat">${t.cat}</span>
      <h3 class="pmodal__name" id="pmodalName">${t.name}</h3>
      <div class="pmodal__desc">${descHtml}</div>
      ${sectionsHtml}
      ${block('products.composition', comp)}
      ${block('products.feeding', feeding)}
      ${tags ? `<div class="product__tags">${tags}</div>` : ''}
    </div>`;
  showModal(modal, body, opts || {}, item);
}

// ===== Модальное окно: состояние, фокус, inert, анимация с поколениями =====
let modalGen = 0;
let modalState = 'closed';   // closed | open | closing
let modalOrigin = null;      // элемент, на который вернуть фокус
let modalId = null;

// Фон под модалкой — inert (помечаем только то, что заинертили сами)
function setBackgroundInert(on) {
  const modal = document.getElementById('productModal');
  Array.from(document.body.children).forEach(el => {
    if (el === modal || el.tagName === 'SCRIPT' || el.id === 'npLive') return;
    if (on) {
      if (!el.hasAttribute('inert')) { el.setAttribute('inert', ''); el.setAttribute('data-np-inert', ''); }
    } else if (el.hasAttribute('data-np-inert')) {
      el.removeAttribute('inert'); el.removeAttribute('data-np-inert');
    }
  });
}

function setModalLock(on) {
  document.documentElement.classList.toggle('modal-open', on);
  document.body.classList.toggle('modal-open', on);   // на body висит «скольжение» шапки и тулбара
}

function showModal(modal, body, opts, item) {
  const dlg = modal.querySelector('.pmodal__dialog');
  const instant = !!opts.keyboard || reduceMotion();
  modalGen++;
  modalId = opts.id || null;
  if (modalState === 'closed') {
    const active = document.activeElement;
    modalOrigin = opts.card || (active && active !== document.body ? active : null);
  } else if (opts.card) {
    modalOrigin = opts.card;
  }
  // Точка «вылета»: 15% пути к карточке, не дальше ±60px
  if (dlg) {
    const r = (!instant && opts.card) ? opts.card.getBoundingClientRect() : null;
    const c = v => Math.max(-60, Math.min(60, v * 0.15)).toFixed(1) + 'px';
    dlg.style.setProperty('--from-x', r ? c(r.left + r.width / 2 - window.innerWidth / 2) : '0px');
    dlg.style.setProperty('--from-y', r ? c(r.top + r.height / 2 - window.innerHeight / 2) : '0px');
    if (!dlg.hasAttribute('tabindex')) dlg.setAttribute('tabindex', '-1');
    void dlg.offsetWidth;   // зафиксировать стартовое состояние до .is-open
  }
  modal.classList.toggle('is-instant', instant);
  modal.classList.remove('is-closing');
  modal.inert = false;
  modal.setAttribute('aria-hidden', 'false');
  setModalLock(true);
  setBackgroundInert(true);
  modal.classList.add('is-open');
  modalState = 'open';
  if (dlg) { dlg.scrollTop = 0; dlg.focus({ preventScroll: true }); }
  emit('np:modal-open', { id: modalId, item, brand: opts.brand || currentBrand, dialog: dlg });
}

function closeProductModal(instant) {
  const modal = document.getElementById('productModal');
  if (!modal || modalState !== 'open') return;
  const dlg = modal.querySelector('.pmodal__dialog');
  const g = ++modalGen;
  const id = modalId;
  modalState = 'closing';
  let cleanup = () => {};
  const finalize = () => {
    if (g !== modalGen || modalState !== 'closing') return;   // модалку успели открыть заново
    cleanup();
    modalState = 'closed';
    modal.classList.remove('is-open', 'is-closing', 'is-instant');
    modal.setAttribute('aria-hidden', 'true');
    modal.inert = true;
    setModalLock(false);
    setBackgroundInert(false);
    const grid = document.getElementById('productsGrid');
    let back = (id && grid) ? grid.querySelector('[data-id="' + cssEsc(id) + '"]') : null;
    if (!back || !back.isConnected) back = modalOrigin;
    if (back && back.isConnected && typeof back.focus === 'function') back.focus({ preventScroll: true });
    modalOrigin = null;
    emit('np:modal-close', { id });
  };
  if (instant || reduceMotion()) { modal.classList.add('is-instant'); finalize(); return; }
  modal.classList.remove('is-instant');
  modal.classList.add('is-closing');
  // Стили на keyframes держат .is-open и играют .is-closing; стили на transitions — просто снимаем .is-open
  const keyframed = dlg && getComputedStyle(dlg).animationName !== 'none';
  if (!keyframed) modal.classList.remove('is-open');
  const onEnd = (e) => { if (e.target === dlg && (e.type === 'animationend' || e.propertyName === 'opacity')) finalize(); };
  if (dlg) { dlg.addEventListener('animationend', onEnd); dlg.addEventListener('transitionend', onEnd); }
  const timer = setTimeout(finalize, 320);   // запасной таймер
  cleanup = () => {
    clearTimeout(timer);
    if (dlg) { dlg.removeEventListener('animationend', onEnd); dlg.removeEventListener('transitionend', onEnd); }
  };
}

// Ловушка фокуса внутри модалки
function trapModalFocus(e) {
  if (modalState !== 'open' || e.key !== 'Tab') return;
  const modal = document.getElementById('productModal');
  const dlg = modal && modal.querySelector('.pmodal__dialog');
  if (!dlg) return;
  const f = Array.from(dlg.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
    .filter(el => !el.disabled && el.getAttribute('aria-hidden') !== 'true' && el.getClientRects().length);
  if (!f.length) { e.preventDefault(); dlg.focus(); return; }
  const first = f[0], last = f[f.length - 1], a = document.activeElement;
  if (e.shiftKey && (a === first || a === dlg || !dlg.contains(a))) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && (a === last || !dlg.contains(a))) { e.preventDefault(); first.focus(); }
}

// Каскад появления: только первые 8 видимых карточек, 300ms, шаг --stagger (40ms)
let staggerGen = 0;
function staggerCards(wrap) {
  const g = ++staggerGen;
  if (!wrap || typeof wrap.animate !== 'function') return;
  const reduce = reduceMotion();
  const vh = window.innerHeight || 800;
  const step = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--stagger'));
  const stagger = reduce ? 0 : (isNaN(step) ? 40 : step);
  const cards = Array.from(wrap.querySelectorAll('.product, .tpl-bottle'))
    .filter(c => { const r = c.getBoundingClientRect(); return r.bottom > 0 && r.top < vh; })
    .slice(0, 8);
  const frames = reduce
    ? [{ opacity: 0 }, { opacity: 1 }]
    : [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }];
  cards.forEach((c, i) => {
    if (g !== staggerGen) return;
    c.animate(frames, { duration: reduce ? 150 : 300, delay: i * stagger, easing: EASE_OUT, fill: 'backwards' });
  });
}

// opts: {stagger: true} — каскад первых 8 карточек (первый рендер / смена бренда мышью)
let firstRenderDone = false;
function renderProducts(brand, lang, opts) {
  const wrap = document.getElementById('productsGrid');
  if (!wrap) return;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  const doStagger = (opts && opts.stagger) || !firstRenderDone;
  firstRenderDone = true;
  const finish = () => {
    updateSpeciesAvailability();
    if (doStagger) staggerCards(wrap);
    emit('np:render', { brand, lang, species: currentSpecies });
  };
  let groups = groupsFor(brand, currentSpecies);

  // Tauro: товары, вошедшие в витрины-комплексы (Step-системы), не дублируем карточками.
  if (brand === 'tpl' && typeof TPL_SYSTEMS !== 'undefined') {
    const inShowcase = new Set();
    TPL_SYSTEMS.forEach(sys => sys.steps.forEach(st => inShowcase.add(st.img)));
    groups = groups
      .map(g => Object.assign({}, g, { items: g.items.filter(it => !inShowcase.has(it.img)) }))
      .filter(g => g.items.length);
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
    MODAL_ITEMS = []; MODAL_KEYS = [];
    finish();
    return;
  }

  const banner = currentSpecies === 'baby'
    ? `<div class="baby-banner"><span class="baby-banner__icon">🍼</span><div class="baby-banner__text"><h3>${dict['products.babiesTitle'] || ''}</h3><p>${dict['products.babiesText'] || ''}</p></div></div>`
    : '';
  // Реестр карточек для модального окна: id = индекс в MODAL_ITEMS.
  MODAL_ITEMS = []; MODAL_KEYS = [];
  const mk = (it, species) => {
    const id = MODAL_ITEMS.length;
    MODAL_ITEMS.push(it);
    MODAL_KEYS.push(descKeyFor(brand, species, it));
    return productCard(it, lang, id, productId(it, brand));
  };
  // Вставка «зачем нужны степы» — в самом верху вкладки Tauro
  let tplWhy = '';
  if (brand === 'tpl') {
    // Ботанический декор — то, что входит в составы шампуней (травы, экстракты, капли)
    const deco = `
      <svg class="tpl-why__deco tpl-why__deco--rosemary" viewBox="0 0 70 120" aria-hidden="true">
        <path d="M35 8 C32 45 38 80 35 112" fill="none" stroke="#4e9a60" stroke-width="3" stroke-linecap="round"/>
        ${[20,32,44,56,68,80,92].map(y => `
          <path d="M35 ${y} L${12 + (y % 3)} ${y - 12}" stroke="#5fae72" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M35 ${y + 5} L${58 - (y % 3)} ${y - 7}" stroke="#5fae72" stroke-width="2.6" stroke-linecap="round"/>`).join('')}
      </svg>
      <svg class="tpl-why__deco tpl-why__deco--chamomile" viewBox="0 0 100 100" aria-hidden="true">
        ${[0,45,90,135,180,225,270,315].map(a => `<ellipse cx="50" cy="26" rx="9" ry="20" fill="#fff" stroke="#eadfc4" stroke-width="1.5" transform="rotate(${a} 50 50)"/>`).join('')}
        <circle cx="50" cy="50" r="13" fill="#f2b93b"/>
        <circle cx="50" cy="50" r="13" fill="none" stroke="#e0a52a" stroke-width="2"/>
      </svg>
      <svg class="tpl-why__deco tpl-why__deco--lavender" viewBox="0 0 60 130" aria-hidden="true">
        <path d="M30 128 C28 95 32 70 30 40" fill="none" stroke="#7fa16a" stroke-width="3" stroke-linecap="round"/>
        ${[[30,16],[21,28],[39,28],[24,42],[36,42],[27,55],[33,55]].map(([x,y]) => `<ellipse cx="${x}" cy="${y}" rx="7.5" ry="10" fill="#9b7fd4" opacity=".9"/>`).join('')}
      </svg>
      <svg class="tpl-why__deco tpl-why__deco--citrus" viewBox="0 0 110 110" aria-hidden="true">
        <circle cx="55" cy="55" r="50" fill="#f6c04a"/>
        <circle cx="55" cy="55" r="43" fill="#fbe4a9"/>
        ${[0,60,120,180,240,300].map(a => `<path d="M55 55 L55 17 A38 38 0 0 1 87 36 Z" fill="#f3b32d" transform="rotate(${a} 55 55)"/>`).join('')}
        <circle cx="55" cy="55" r="5" fill="#fbe4a9"/>
      </svg>
      <svg class="tpl-why__deco tpl-why__deco--leaf" viewBox="0 0 90 70" aria-hidden="true">
        <path d="M6 60 C10 20 50 4 84 10 C80 44 46 66 6 60 Z" fill="#7cc08d"/>
        <path d="M10 58 C34 44 58 28 80 13" fill="none" stroke="#57a06a" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <svg class="tpl-why__deco tpl-why__deco--drop" viewBox="0 0 50 70" aria-hidden="true">
        <path d="M25 4 C34 24 45 36 45 48 A20 20 0 1 1 5 48 C5 36 16 24 25 4 Z" fill="#79c6d8" opacity=".95"/>
        <circle cx="18" cy="48" r="6" fill="#a7dde8"/>
      </svg>
      <svg class="tpl-why__deco tpl-why__deco--amber" viewBox="0 0 50 70" aria-hidden="true">
        <path d="M25 4 C34 24 45 36 45 48 A20 20 0 1 1 5 48 C5 36 16 24 25 4 Z" fill="#e8a34c"/>
        <circle cx="18" cy="48" r="6" fill="#f5c98a"/>
      </svg>`;
    // Извилистая линия-маршрут через весь экран; степы — остановки на ней.
    // y в px (высота journey фиксирована 430px), x — растягивается на всю ширину (viewBox 1000).
    const path = `
      <svg class="tpl-why__path" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="tplWaveG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#4e9a60"/><stop offset=".5" stop-color="#d9812f"/><stop offset="1" stop-color="#c99a2a"/>
          </linearGradient>
        </defs>
        <path d="M -30 60 C 60 70, 110 120, 200 120 C 290 120, 270 200, 350 235 C 420 262, 450 250, 520 250 C 600 250, 630 165, 710 148 C 755 139, 790 150, 830 150 C 890 150, 940 200, 1030 245"
          fill="none" stroke="url(#tplWaveG)" stroke-width="5" stroke-linecap="round" opacity=".8"/>
        <path d="M -30 74 C 60 84, 112 134, 202 134 C 288 134, 272 212, 352 247 C 420 274, 450 262, 520 262 C 598 262, 632 177, 712 160 C 756 151, 790 162, 830 162 C 888 162, 938 212, 1028 257"
          fill="none" stroke="url(#tplWaveG)" stroke-width="2" stroke-linecap="round" opacity=".28"/>
        <circle cx="350" cy="235" r="5.5" fill="#d9812f" opacity=".9"/>
        <circle cx="710" cy="148" r="5.5" fill="#c99a2a" opacity=".9"/>
        <circle cx="110" cy="97" r="4" fill="#4e9a60" opacity=".75"/>
      </svg>`;
    // Лапка в конце маршрута — результат :)
    const paw = `
      <svg class="tpl-why__paw" viewBox="0 0 60 60" aria-hidden="true">
        <ellipse cx="30" cy="38" rx="13" ry="11" fill="#c9822f"/>
        <ellipse cx="12" cy="24" rx="6" ry="8" fill="#c9822f"/>
        <ellipse cx="25" cy="16" rx="6" ry="8" fill="#c9822f"/>
        <ellipse cx="39" cy="17" rx="6" ry="8" fill="#c9822f"/>
        <ellipse cx="50" cy="27" rx="6" ry="8" fill="#c9822f"/>
      </svg>`;
    const stops = [
      { n: 1, x: 20, y: 120, side: 'above' },
      { n: 2, x: 52, y: 250, side: 'below' },
      { n: 3, x: 83, y: 150, side: 'above' },
    ];
    tplWhy = `
      <section class="tpl-why">
        ${deco}
        <div class="tpl-why__head">
          <h2 class="tpl-why__title">${dict['tplWhy.title'] || ''}</h2>
          <p class="tpl-why__text">${dict['tplWhy.text'] || ''}</p>
        </div>
        <div class="tpl-why__journey">
          ${path}
          ${stops.map(s => `
            <div class="tpl-why__stop tpl-why__stop--${s.n} tpl-why__stop--${s.side}" style="left:${s.x}%;top:${s.y}px">
              <span class="tpl-why__num">${s.n}</span>
              <div class="tpl-why__bubble">
                <h4>${dict['tplWhy.s' + s.n + '.title'] || ''}</h4>
                <p>${dict['tplWhy.s' + s.n + '.text'] || ''}</p>
              </div>
            </div>`).join('')}
          ${paw}
        </div>
      </section>`;
  }
  // Витрины «стоящих» флаконов Tauro Pro Line (Step-системы) — только на вкладке Tauro
  let showcase = '';
  if (brand === 'tpl' && typeof TPL_SYSTEMS !== 'undefined') {
    showcase = TPL_SYSTEMS.map(sys => {
      const bottles = sys.steps.map((st, bi) => {
        const id = MODAL_ITEMS.length;
        MODAL_ITEMS.push(st.item);
        MODAL_KEYS.push(null);
        const nm = (st.item[lang] || st.item.ru).name;
        const short = (st.short && (st.short[lang] || st.short.ru)) || '';
        const smallLabel = st.label ? (st.label[lang] || st.label.ru) : ('STEP ' + st.step);
        return `
          <div class="tpl-bottle" data-pid="${id}" data-id="${productId(st.item, 'tpl')}" tabindex="0" role="button" style="--c:${st.color};--d:${(bi + 1) * 0.6}s" aria-label="${smallLabel} — ${nm}">
            <span class="tpl-bottle__num">${st.step}</span>
            <div class="tpl-bottle__img"><img src="${st.img}" alt="${nm}" loading="lazy" /></div>
            <div class="tpl-bottle__label">
              <span class="tpl-bottle__step">${smallLabel}</span>
              <span class="tpl-bottle__name">${nm}</span>
              <span class="tpl-bottle__short">${short}</span>
            </div>
          </div>`;
      }).join('');
      const badges = (sys.badges[lang] || sys.badges.ru).map(b => `<span>${b}</span>`).join('');
      return `
        <section class="tpl-system">
          <div class="tpl-system__head">
            <span class="section__tag">${(sys.tag[lang] || sys.tag.ru)}</span>
            <h2 class="tpl-system__title">${(sys.title[lang] || sys.title.ru)}</h2>
            <p class="tpl-system__intro">${(sys.intro[lang] || sys.intro.ru)}</p>
          </div>
          <div class="tpl-system__stage" style="--cols:${sys.steps.length}">${bottles}</div>
          <div class="tpl-system__badges">${badges}</div>
          <p class="tpl-system__note">${(sys.note[lang] || sys.note.ru)}</p>
        </section>`;
    }).join('');
  }
  wrap.innerHTML = banner + tplWhy + showcase + groups.map((g, i) => {
    const groupName = (g.group && (g.group[lang] || g.group.ru)) || '';
    // Группа Superior Care: распределяем по цвету шерсти и добавляем вставки.
    if (g.coat) {
      const buckets = { white: [], red: [], dark: [], none: [] };
      g.items.forEach(it => { buckets[coatOf(it) || 'none'].push(it); });
      let inner = `<p class="coat-note">${dict['products.coatNote'] || ''}</p>`;
      const LINE_ORDER = ['starter', 'junior', 'adult-small', 'all-life-stage'];
      const LINE_KEY = { 'starter': 'line.starter', 'junior': 'line.junior', 'adult-small': 'line.adultSmall', 'all-life-stage': 'line.allLifeStage' };
      ['white', 'red', 'dark'].forEach(c => {
        if (!buckets[c].length) return;
        inner += `
          <div class="coat-insert coat-insert--${c}">
            <span class="coat-insert__dot"></span>
            <div class="coat-insert__text">
              <h4>${dict['coat.' + c + '.title'] || ''}</h4>
              <p>${dict['coat.' + c + '.desc'] || ''}</p>
            </div>
          </div>`;
        // Если в группе есть подлинейки (Starter/Junior/Adult/All Life Stage) — делим по ним
        if (buckets[c].some(it => it.line)) {
          LINE_ORDER.forEach(ln => {
            const items = buckets[c].filter(it => it.line === ln);
            if (!items.length) return;
            inner += `<h4 class="coat-subline coat-subline--${c}">${dict[LINE_KEY[ln]] || ''}</h4>
              <div class="products">${items.map(it => mk(it, g.species)).join('')}</div>`;
          });
          const rest = buckets[c].filter(it => !it.line);
          if (rest.length) inner += `<div class="products">${rest.map(it => mk(it, g.species)).join('')}</div>`;
        } else {
          inner += `<div class="products">${buckets[c].map(it => mk(it, g.species)).join('')}</div>`;
        }
      });
      if (buckets.none.length) {
        inner += `<div class="products">${buckets.none.map(it => mk(it, g.species)).join('')}</div>`;
      }
      return `
        <div class="product-group product-group--coat" id="grp-${i}">
          <h3 class="product-group__title">${groupName}</h3>
          ${inner}
        </div>`;
    }
    const cards = g.items.map(it => mk(it, g.species)).join('');
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

  finish();
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

// ===== Анимация перехода между страницами =====
// Каждая страница мягко проявляется (CSS, класс .page-enter). Здесь — плавное гашение
// при любом переходе на ДРУГУЮ внутреннюю страницу (главная ↔ каталог).
function initPageTransition() {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    if (a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    let url;
    try { url = new URL(a.href, location.href); } catch (_) { return; }
    if (url.origin !== location.origin) return;       // внешняя ссылка
    if (url.pathname === location.pathname) return;    // та же страница (якорь) — без перехода
    e.preventDefault();
    document.body.classList.remove('page-enter');      // снять fill анимации входа
    document.body.classList.add('page-leaving');
    let navigated = false;
    const go = () => { if (navigated) return; navigated = true; window.location.href = a.href; };
    setTimeout(go, 210); // переход после короткого затухания
  });
}

// ===== Индикаторы вкладок (.tabs__indicator / .species__indicator) =====
// Позиция передаётся CSS-переменными --ind-x/--ind-w (и --ind-y/--ind-h для переноса строк)
function placeIndicator(list, cls, instant) {
  if (!list) return;
  let ind = list.querySelector(':scope > .' + cls);
  if (!ind) {
    ind = document.createElement('span');
    ind.className = cls;
    ind.setAttribute('aria-hidden', 'true');
    list.appendChild(ind);
    list.classList.add('has-indicator');
    instant = true;   // первое размещение — без анимации
  }
  const act = list.querySelector('.is-active');
  if (!act) return;
  const lr = list.getBoundingClientRect(), ar = act.getBoundingClientRect();
  if (!ar.width) return;
  const vals = {
    '--ind-x': (ar.left - lr.left - list.clientLeft + list.scrollLeft).toFixed(1) + 'px',
    '--ind-y': (ar.top - lr.top - list.clientTop + list.scrollTop).toFixed(1) + 'px',
    '--ind-w': ar.width.toFixed(1) + 'px',
    '--ind-h': ar.height.toFixed(1) + 'px'
  };
  if (instant) { ind.classList.add('is-instant'); ind.style.transition = 'none'; }
  Object.keys(vals).forEach(k => { list.style.setProperty(k, vals[k]); ind.style.setProperty(k, vals[k]); });
  if (instant) {
    void ind.offsetWidth;
    requestAnimationFrame(() => { ind.style.transition = ''; ind.classList.remove('is-instant'); });
  }
}
function placeIndicators(instant) {
  placeIndicator(document.getElementById('tabs'), 'tabs__indicator', instant);
  placeIndicator(document.getElementById('species'), 'species__indicator', instant);
}

// Фильтр вида: варианты без товаров у бренда — aria-disabled + причина (никогда не скрываем)
function updateSpeciesAvailability() {
  const wrap = document.getElementById('species');
  if (!wrap) return;
  wrap.querySelectorAll('.species__btn').forEach(btn => {
    const sp = btn.getAttribute('data-species') || 'all';
    const empty = sp !== 'all' && countFor(currentBrand, sp) === 0;
    btn.classList.toggle('is-disabled', empty);
    if (empty) {
      const reason = tr('species.none.' + sp, { brand: BRAND_NAMES[currentBrand] || currentBrand });
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('title', reason);
      btn.setAttribute('aria-description', reason);
    } else {
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('title');
      btn.removeAttribute('aria-description');
    }
  });
}

// ===== Глубокие ссылки: #brand=tpl, #p=<id> (а также старые #tpl). #q= принадлежит поиску =====
function parseHash() {
  const raw = location.hash.slice(1);
  const out = {};
  if (!raw) return out;
  if (VALID_BRANDS.includes(raw)) { out.brand = raw; return out; }
  raw.split('&').forEach(part => {
    const i = part.indexOf('=');
    if (i < 0) return;
    let v = part.slice(i + 1);
    try { v = decodeURIComponent(v); } catch (e) { /* keep raw */ }
    const k = part.slice(0, i);
    if (k === 'brand' && VALID_BRANDS.includes(v)) out.brand = v;
    if (k === 'p' && v) out.p = v;
  });
  return out;
}
function setHashBrand(brand) {
  const raw = location.hash.slice(1);
  const parts = (raw && !VALID_BRANDS.includes(raw) ? raw.split('&') : [])
    .filter(p => p && !/^(brand|p)=/.test(p) && p.indexOf('=') > 0);
  parts.unshift('brand=' + brand);
  history.replaceState(null, '', '#' + parts.join('&'));
}

// Контроллер каталога (заполняется при инициализации products.html)
const NPCtl = {};

function openProduct(id, opts) {
  const found = findById(id);
  if (!found) return false;
  const grid = document.getElementById('productsGrid');
  if (!grid) { window.location.href = 'products.html#p=' + encodeURIComponent(id); return true; }
  if (found.brand !== currentBrand && NPCtl.activateBrand) NPCtl.activateBrand(found.brand, { animate: false, updateHash: true });
  const card = grid.querySelector('[data-id="' + cssEsc(id) + '"]');
  const o = { id, brand: found.brand, card, keyboard: !!(opts && opts.keyboard) };
  if (card) {
    const pid = +card.getAttribute('data-pid');
    openProductModal(MODAL_ITEMS[pid] || found.item, getLang(), MODAL_KEYS[pid], o);
  } else {
    openProductModal(found.item, getLang(), descKeyFor(found.brand, found.species, found.item), o);
  }
  return true;
}

// ===== Публичный API для остальных модулей =====
window.NP = {
  lang: () => getLang(),
  brand: () => currentBrand,
  species: () => currentSpecies,
  setBrand: (b) => {
    if (NPCtl.activateBrand) return NPCtl.activateBrand(b, { animate: true, updateHash: true });
    if (VALID_BRANDS.includes(b)) window.location.href = 'products.html#brand=' + b;
  },
  setSpecies: (sp) => { if (NPCtl.setSpecies) NPCtl.setSpecies(sp, { animate: true }); },
  catalog: () => buildCatalog(),
  productId,
  findById,
  openProduct,
  t: (key) => tr(key)
};

// ===== Переключатель языка =====
function initLangMenu() {
  const langWrap = document.getElementById('lang');
  const langBtn = document.getElementById('langBtn');
  if (!langWrap || !langBtn) return;
  const items = () => Array.from(langWrap.querySelectorAll('#langMenu button'));
  const setOpen = (open, instant) => {
    langWrap.classList.toggle('is-instant', !!instant);
    langWrap.classList.toggle('is-open', open);
    langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    const kb = e.detail === 0;
    const open = !langWrap.classList.contains('is-open');
    setOpen(open, kb);
    if (open && kb) {
      const cur = items().find(b => b.getAttribute('data-lang') === getLang()) || items()[0];
      if (cur) cur.focus();
    }
  });
  items().forEach(btn => {
    btn.addEventListener('click', e => {
      const kb = e.detail === 0;
      setLang(btn.getAttribute('data-lang'));
      setOpen(false, kb);
      if (kb) langBtn.focus();
    });
  });
  langWrap.addEventListener('keydown', e => {
    if (!langWrap.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); setOpen(false, true); langBtn.focus(); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const list = items(), i = list.indexOf(document.activeElement);
      const n = e.key === 'ArrowDown' ? (i + 1) % list.length : (i - 1 + list.length) % list.length;
      list[n].focus();
    }
  });
  langWrap.addEventListener('focusout', e => {
    if (e.relatedTarget && !langWrap.contains(e.relatedTarget)) setOpen(false, true);
  });
  document.addEventListener('click', () => setOpen(false, false));
  const relabel = () => langBtn.setAttribute('aria-label', tr('a11y.lang') + ': ' + getLang().toUpperCase());
  relabel();
  LANG_HOOKS.push(relabel);
}

// ===== Каталог: вкладки брендов, фильтр вида, модалка =====
function initCatalog(initial) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const tabsWrap = document.getElementById('tabs');
  const tabs = Array.from(document.querySelectorAll('#tabs .tab'));
  const speciesWrap = document.getElementById('species');
  const spBtns = speciesWrap ? Array.from(speciesWrap.querySelectorAll('.species__btn')) : [];
  const nav = document.getElementById('catNav');
  let brandGen = 0;
  let leaveAnims = [];

  const cardCount = () => grid.querySelectorAll('[data-id]').length;

  function syncTabs() {
    tabs.forEach(t => {
      const on = t.getAttribute('data-brand') === currentBrand;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    const act = tabs.find(t => t.classList.contains('is-active'));
    if (act && act.id) grid.setAttribute('aria-labelledby', act.id);
  }
  function syncSpecies() {
    spBtns.forEach(b => {
      const on = (b.getAttribute('data-species') || 'all') === currentSpecies;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
  }
  const cancelLeave = () => { leaveAnims.forEach(a => a.cancel()); leaveAnims = []; };

  // opts: {animate, updateHash}
  function activateBrand(brand, opts) {
    opts = opts || {};
    if (!VALID_BRANDS.includes(brand)) return;
    const changed = currentBrand !== brand;
    currentBrand = brand;
    document.body.setAttribute('data-brand', brand); // плавная смена тинта страницы
    // выбранный вид пропал у нового бренда — возвращаемся к «Все»
    if (currentSpecies !== 'all' && countFor(brand, currentSpecies) === 0) currentSpecies = 'all';
    syncTabs(); syncSpecies();
    placeIndicator(tabsWrap, 'tabs__indicator', !opts.animate);
    if (opts.updateHash) setHashBrand(brand);
    if (!changed) return;
    const g = ++brandGen;
    let finished = false;
    const done = () => {
      if (g !== brandGen || finished) return;
      finished = true;
      renderProducts(currentBrand, getLang(), { stagger: !!opts.animate });
      cancelLeave();
      placeIndicator(speciesWrap, 'species__indicator', !opts.animate);
      announce(tr('live.count', { n: cardCount() }));
    };
    if (opts.animate && typeof grid.animate === 'function') {
      // уход 150ms (только прозрачность), затем рендер и каскад; повторный клик перенацеливает
      const els = [grid].concat(nav ? [nav] : []);
      els.forEach(el => leaveAnims.push(el.animate({ opacity: 0 }, { duration: 150, easing: EASE_OUT, fill: 'forwards' })));
      const a = leaveAnims[leaveAnims.length - els.length];
      a.onfinish = done;
      setTimeout(done, 400);   // запасной путь (фоновые вкладки не играют анимации)
    } else {
      cancelLeave();
      done();
    }
  }

  function setSpecies(sp, opts) {
    opts = opts || {};
    const btn = spBtns.find(b => (b.getAttribute('data-species') || 'all') === sp);
    if (!btn || btn.getAttribute('aria-disabled') === 'true' || sp === currentSpecies) return;
    currentSpecies = sp;
    syncSpecies();
    placeIndicator(speciesWrap, 'species__indicator', !opts.animate);
    renderProducts(currentBrand, getLang());
    if (opts.animate && typeof grid.animate === 'function') {
      grid.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 150, easing: EASE_OUT });   // лёгкий «провал» без движения
    }
    announce(tr('live.count', { n: cardCount() }));
  }
  NPCtl.activateBrand = activateBrand;
  NPCtl.setSpecies = setSpecies;

  // Роуминг-табиндекс + стрелки/Home/End (с клавиатуры — мгновенно)
  function rovingKeys(items, isEnabled, onPick) {
    return (e) => {
      const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
      if (!keys.includes(e.key)) return;
      const list = items.filter(isEnabled);
      if (!list.length) return;
      const i = list.indexOf(document.activeElement);
      let n;
      if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = list.length - 1;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + list.length) % list.length;
      else n = (i + 1) % list.length;
      e.preventDefault();
      list[n].focus();
      onPick(list[n]);
    };
  }

  if (tabsWrap) {
    tabsWrap.setAttribute('role', 'tablist');
    tabs.forEach(t => {
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-controls', 'productsGrid');
      if (!t.id) t.id = 'tab-' + t.getAttribute('data-brand');
      t.addEventListener('click', e => activateBrand(t.getAttribute('data-brand'), { animate: e.detail !== 0, updateHash: true }));
    });
    tabsWrap.addEventListener('keydown', rovingKeys(tabs, () => true,
      t => activateBrand(t.getAttribute('data-brand'), { animate: false, updateHash: true })));
    grid.setAttribute('role', 'tabpanel');
  }
  if (speciesWrap) {
    speciesWrap.setAttribute('role', 'radiogroup');
    spBtns.forEach(b => {
      b.setAttribute('role', 'radio');
      b.addEventListener('click', e => {
        if (b.getAttribute('aria-disabled') === 'true') { e.preventDefault(); return; }
        setSpecies(b.getAttribute('data-species') || 'all', { animate: e.detail !== 0 });
      });
    });
    speciesWrap.addEventListener('keydown', rovingKeys(spBtns, b => b.getAttribute('aria-disabled') !== 'true',
      b => setSpecies(b.getAttribute('data-species') || 'all', { animate: false })));
  }
  const relabel = () => {
    if (tabsWrap) tabsWrap.setAttribute('aria-label', tr('a11y.brands'));
    if (speciesWrap) speciesWrap.setAttribute('aria-label', tr('a11y.species'));
    const close = document.querySelector('#productModal .pmodal__close');
    if (close) close.setAttribute('aria-label', tr('a11y.close'));
    placeIndicators(true);
  };
  syncTabs(); syncSpecies(); relabel();
  LANG_HOOKS.push(relabel);

  // Индикаторы: при ресайзе и после загрузки шрифтов — без анимации
  if ('ResizeObserver' in window) {
    let raf = 0;
    const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => placeIndicators(true)); });
    if (tabsWrap) ro.observe(tabsWrap);
    if (speciesWrap) ro.observe(speciesWrap);
  } else {
    window.addEventListener('resize', () => placeIndicators(true));
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => placeIndicators(true));

  // Открытие карточки товара (мышь / Enter / Space); кнопки внутри карточки (избранное) не открывают модалку
  const openFromCard = (card, keyboard) => {
    const pid = +card.getAttribute('data-pid');
    const item = MODAL_ITEMS[pid];
    if (!item) return;
    openProductModal(item, getLang(), MODAL_KEYS[pid], { id: card.getAttribute('data-id'), brand: currentBrand, card, keyboard });
  };
  grid.addEventListener('click', e => {
    const card = e.target.closest('[data-pid]');
    if (!card) return;
    const ctl = e.target.closest('button, a, input, select, textarea, .product__actions');
    if (ctl && card.contains(ctl) && ctl !== card) return;
    openFromCard(card, e.detail === 0);
  });
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('[data-pid]');
    if (!card || e.target !== card) return;
    e.preventDefault();
    openFromCard(card, true);
  });

  // Прямые ссылки после первого рендера
  window.addEventListener('hashchange', () => {
    const h = parseHash();
    if (h.brand && h.brand !== currentBrand) activateBrand(h.brand, { animate: true, updateHash: false });
    if (h.p) openProduct(h.p);
  });
  if (initial.p) openProduct(initial.p);
}

function initModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.inert = true;
  modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeProductModal(e.detail === 0); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalState === 'open') { e.preventDefault(); closeProductModal(true); return; }
    trapModalFocus(e);
  });
}

// ===== Фоновый слайдер на главной (мягкое «стирание», стрелки, пауза) =====
function initHeroSlider() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  const slides = Array.from(heroBg.querySelectorAll('.hero-bg__slide'));
  if (!slides.length) return;
  const hero = heroBg.closest('section') || heroBg.parentElement;
  const reduce = reduceMotion();
  let cur = 0, timer = null, gen = 0;
  let paused = reduce;          // без автопрокрутки при prefers-reduced-motion
  let hovered = false, offscreen = false;
  slides.forEach((s, i) => { s.style.zIndex = i === 0 ? '1' : '0'; });

  function settle() {
    slides.forEach((s, i) => {
      s.style.transition = 'none';
      if (i === cur) s.style.clipPath = 'inset(0 0 0 0)';
      s.style.zIndex = i === cur ? '1' : '0';
    });
  }
  function wipeTo(n, dir, instant) {
    if (n === cur || !slides[n]) return;
    settle();   // прерываем незавершённое стирание
    const g = ++gen;
    const incoming = slides[n], prev = cur;
    cur = n;
    if (instant || reduce) { settle(); return; }
    incoming.style.zIndex = '2';
    incoming.style.clipPath = dir === 'prev' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)';
    void incoming.offsetWidth; // reflow, чтобы переход сработал
    incoming.style.transition = 'clip-path 1.4s var(--ease-in-out, ease-in-out)';
    incoming.style.clipPath = 'inset(0 0 0 0)';
    setTimeout(() => { if (g !== gen) return; slides[prev].style.zIndex = '0'; incoming.style.zIndex = '1'; }, 1450);
  }
  const next = (instant) => wipeTo((cur + 1) % slides.length, 'next', instant);
  const prev = (instant) => wipeTo((cur - 1 + slides.length) % slides.length, 'prev', instant);

  const running = () => slides.length > 1 && !paused && !hovered && !offscreen && !document.hidden;
  function sync() {
    clearInterval(timer);
    timer = running() ? setInterval(() => next(false), 7000) : null;
  }

  // Доступность: карусель + кнопка паузы (создаём здесь, index.html не меняем)
  if (hero) {
    hero.setAttribute('aria-roledescription', tr('hero.carousel'));
    hero.setAttribute('aria-label', tr('hero.label'));
    if (!hero.getAttribute('role')) hero.setAttribute('role', 'region');
  }
  let toggle = null;
  const ICON_PAUSE = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/></svg>';
  const ICON_PLAY = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 2.8v10.4a.6.6 0 0 0 .9.5l8.2-5.2a.6.6 0 0 0 0-1L5.4 2.3a.6.6 0 0 0-.9.5z" fill="currentColor"/></svg>';
  const relabel = () => {
    if (hero) {
      hero.setAttribute('aria-roledescription', tr('hero.carousel'));
      hero.setAttribute('aria-label', tr('hero.label'));
    }
    if (!toggle) return;
    toggle.innerHTML = paused ? ICON_PLAY : ICON_PAUSE;
    toggle.setAttribute('aria-label', tr(paused ? 'hero.play' : 'hero.pause'));
    toggle.classList.toggle('is-paused', paused);
  };
  if (slides.length > 1 && hero) {
    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'hero-bg__toggle';
    toggle.id = 'heroToggle';
    const nextBtnEl = document.getElementById('heroNext');
    if (nextBtnEl && nextBtnEl.parentNode) nextBtnEl.parentNode.insertBefore(toggle, nextBtnEl.nextSibling);
    else hero.appendChild(toggle);
    toggle.addEventListener('click', () => { paused = !paused; relabel(); sync(); });
  }
  relabel();
  LANG_HOOKS.push(relabel);

  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  if (prevBtn) prevBtn.addEventListener('click', e => { prev(e.detail === 0); sync(); });
  if (nextBtn) nextBtn.addEventListener('click', e => { next(e.detail === 0); sync(); });
  if (hero) {
    hero.addEventListener('keydown', e => {
      if (e.target.closest('input, textarea, select')) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(true); sync(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); next(true); sync(); }
    });
    heroBg.addEventListener('mouseenter', () => { hovered = true; sync(); });
    heroBg.addEventListener('mouseleave', () => { hovered = false; sync(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => { offscreen = !entries[0].isIntersecting; sync(); }, { threshold: 0.05 }).observe(hero);
    }
  }
  document.addEventListener('visibilitychange', sync);
  sync();
}

// ===== Инициализация =====
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  // Бренд из адреса выбираем ДО первого рендера (#brand=tpl, #tpl, #p=<id>)
  const initial = parseHash();
  if (initial.brand) currentBrand = initial.brand;
  else if (initial.p) { const f = findById(initial.p); if (f) currentBrand = f.brand; }
  if (document.getElementById('productsGrid')) document.body.setAttribute('data-brand', currentBrand);

  applyTranslations(lang);

  initLangMenu();

  // --- Бургер-меню ---
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', nav.classList.contains('is-open') ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  initModal();
  initCatalog(initial);

  // --- Форма обратной связи (демо, без отправки на сервер) ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = document.getElementById('formOk');
      if (ok) ok.hidden = false;
      form.reset();
    });
  }

  initHeroSlider();

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

  // --- Анимация перехода между страницами (шторка) ---
  initPageTransition();

  // --- Год в подвале ---
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  emit('np:ready', {});
});
