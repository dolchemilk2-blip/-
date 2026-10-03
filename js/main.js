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
  'sections.label': 'Kataloq bölmələri',
  'sections.all': 'Hamısı',
  'sections.both': 'Pişiklər və itlər üçün',
  'sections.none': 'Bu seçimdə məhsul yoxdur',
  'result.shown.one': '{n} məhsul göstərilir',
  'result.shown.other': '{n} məhsul göstərilir',
  'result.reset': 'Bütün bölmələr',
  'hero.carousel': 'karusel',
  'hero.label': 'Ev heyvanlarının fotoları',
  'hero.pause': 'Slayderi dayandır',
  'hero.play': 'Slayderi başlat',
  'sections.toFilters': 'Brend və filtrlər',
  'sections.scDry': 'Superior Care quru qidası tük rənginə görə',
  'treats.general': "Nature's Protection funksional qəlyanaltıları",
  'result.bothSpecies': 'Tauro-nun bütün məhsulları həm pişiklər, həm də itlər üçündür',
  'result.sectionEmpty': '«{sec}» — bu seçimdə məhsul yoxdur, bütün bölmələr göstərilir',
  'products.babiesTextCare': 'Balalar üçün zərif qulluq',
  'coat.red.label': 'Kürən tük',
  'coat.red.title': 'Kürən və qəhvəyi tük üçün',
  'coat.red.desc': 'Red Coat / Red Cats xətti RCE kompleksi ilə — kürən və qəhvəyi rəngin dolğunluğunu vurğulayır.'
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
  'sections.label': 'Разделы каталога',
  'sections.all': 'Все',
  'sections.both': 'Для кошек и собак',
  'sections.none': 'Для этого фильтра товаров нет',
  'result.shown.one': 'Показан {n} товар',
  'result.shown.few': 'Показано {n} товара',
  'result.shown.many': 'Показано {n} товаров',
  'result.shown.other': 'Показано {n} товара',
  'result.reset': 'Все разделы',
  'hero.carousel': 'карусель',
  'hero.label': 'Фотографии питомцев',
  'hero.pause': 'Остановить слайдер',
  'hero.play': 'Запустить слайдер',
  'sections.toFilters': 'Бренд и фильтры',
  'sections.scDry': 'сухих кормов Superior Care по цвету шерсти',
  'treats.general': "Функциональные лакомства Nature's Protection",
  'result.bothSpecies': 'Все товары Tauro подходят и кошкам, и собакам',
  'result.sectionEmpty': '«{sec}» — нет товаров для этого фильтра, показаны все разделы',
  'products.babiesTextCare': 'Мягкий уход для щенков и котят'
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
  'sections.label': 'Catalogue sections',
  'sections.all': 'All',
  'sections.both': 'For cats and dogs',
  'sections.none': 'No products for this filter',
  'result.shown.one': 'Showing {n} product',
  'result.shown.other': 'Showing {n} products',
  'result.reset': 'All sections',
  'hero.carousel': 'carousel',
  'hero.label': 'Pet photos',
  'hero.pause': 'Pause slideshow',
  'hero.play': 'Play slideshow',
  'sections.toFilters': 'Brand & filters',
  'sections.scDry': 'Superior Care dry foods by coat colour',
  'treats.general': "Nature's Protection functional treats",
  'result.bothSpecies': 'All Tauro products suit both cats and dogs',
  'result.sectionEmpty': '«{sec}» has no products for this filter — showing all sections',
  'products.babiesTextCare': 'Gentle care for puppies and kittens'
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
let currentSpecies = 'all'; // all | cats | dogs | baby
let currentSection = 'all'; // 'all' | sectionId (CATALOG_SECTIONS)
let MODAL_ITEMS = [];       // реестр карточек текущего рендера для модального окна
let MODAL_KEYS = [];        // ключи для поиска полного описания (js/descriptions.js)

// Ключ полного описания: только для Nature's Protection (наш сайт-источник)
function descKeyFor(brand, species, item) {
  if (brand !== 'np' || !item.en) return null;
  return species + '||' + (item.en.cat || '') + '||' + (item.en.name || '');
}

// ===== Разделы каталога (см. CATALOG_SECTIONS в js/catalog.js) =====
function sectionDefs(brand) {
  return (typeof CATALOG_SECTIONS !== 'undefined' && CATALOG_SECTIONS[brand]) || [];
}
function sectionDef(brand, id) {
  return sectionDefs(brand).find(d => d.id === id) || null;
}
// Раздел для группы Nature's Protection — по английскому названию группы из PRODUCTS
function npSectionId(g) {
  if (g.coat) return 'superior-care';
  const en = (g.group && g.group.en) || '';
  if (/pouch/i.test(en)) return 'pouches';
  if (/veterinary/i.test(en)) return 'vet';
  if (/dry/i.test(en)) return 'dry';
  if (/wet/i.test(en)) return 'wet';
  if (/treat|snack/i.test(en)) return 'treats';
  if (/supplement|vitamin/i.test(en)) return 'supplements';
  return 'other';
}

// Добавить значок питомца к названию группы (для NP) + раздел и короткое название (sub)
function prefixGroups(groups, prefix, species) {
  return groups.map(g => {
    const sid = npSectionId(g);
    const def = sectionDef('np', sid);
    return Object.assign({}, g, {
      group: {
        az: prefix + g.group.az,
        ru: prefix + g.group.ru,
        en: prefix + g.group.en
      },
      sub: g.group,
      species: species,
      sectionId: sid,
      section: def ? { az: def.az, ru: def.ru, en: def.en } : g.group
    });
  });
}

// Возрастной порядок внутри группы: щенки/котята → взрослые → пожилые (стабильно: внутри этапа — исходный порядок)
const stageRank = it => {
  if (it.baby) return 0;
  const s = (it.en && ((it.en.cat || '') + ' ' + (it.en.name || ''))) || '';
  return /senior|ageing|mature/i.test(s) ? 2 : 1;
};
const byStage = items => items.map((it, i) => [it, i])
  .sort((a, b) => stageRank(a[0]) - stageRank(b[0]) || a[1] - b[1]).map(x => x[0]);
const stageSorted = groups => groups.map(g => (g.coat ? g : Object.assign({}, g, { items: byStage(g.items) })));

// Азербайджанские названия в PRODUCTS (translations.js не правим): кальки → принятые в магазинах слова
const AZ_FIX = [
  [/Funksional snacklər/g, 'Funksional qəlyanaltılar'], [/snackləri/g, 'qəlyanaltıları'], [/snacklər/g, 'qəlyanaltılar'],
  [/Mükafatlar/g, 'Qəlyanaltılar'], [/\(paket\)/g, '(pauç)'], [/Baytar dieti/g, 'Baytarlıq pəhrizi']
];
function fixAz(o, keys) {
  if (!o) return;
  keys.forEach(k => {
    if (typeof o[k] === 'string') AZ_FIX.forEach(([re, to]) => { o[k] = o[k].replace(re, to); });
    else if (Array.isArray(o[k])) o[k] = o[k].map(x => AZ_FIX.reduce((v, [re, to]) => v.replace(re, to), String(x)));
  });
}
function patchAzProducts() {
  ['cats', 'dogs'].forEach(sp => (PRODUCTS[sp] || []).forEach(g => {
    fixAz(g.group, ['az']);
    (g.items || []).forEach(it => fixAz(it.az, ['cat', 'name', 'desc', 'tags']));
  }));
}

// Полный каталог: NP собираем из PRODUCTS (кошки+собаки), остальное — из BRANDS_EXTRA
let CATALOG_CACHE = null;
function buildCatalog() {
  if (CATALOG_CACHE) return CATALOG_CACHE;
  const extra = (typeof BRANDS_EXTRA !== 'undefined') ? BRANDS_EXTRA : {};
  patchAzProducts();
  CATALOG_CACHE = {
    np: stageSorted(prefixGroups(PRODUCTS.cats, '🐱 ', 'cats').concat(prefixGroups(PRODUCTS.dogs, '🐶 ', 'dogs'))),
    araton: stageSorted(extra.araton || []),
    tpl: extra.tpl || [],
    misoko: extra.misoko || []
  };
  mergeAdded(CATALOG_CACHE);
  return CATALOG_CACHE;
}

// Товары, добавленные через admin/ (js/catalog-added.js → window.NP_ADDED): каждый встаёт в свой раздел —
// в первую подходящую группу бренда (тот же раздел и вид), иначе в новую группу с названием раздела.
// Текст приходит из формы, поэтому экранируется; картинка — только путь assets/… или https-ссылка.
function mergeAdded(cat) {
  const list = Array.isArray(window.NP_ADDED) ? window.NP_ADDED : [];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const okImg = s => typeof s === 'string' && /^(assets\/[\w\-./]+|https:\/\/[^\s"'<>()]+)$/.test(s) ? s : '';
  list.forEach(p => {
    if (!p || !cat[p.brand] || !p.section || (p.brand === 'tpl' && p.section === 'systems')) return;
    const def = sectionDef(p.brand, p.section); if (!def) return;
    const species = p.species === 'cats' || p.species === 'dogs' ? p.species : 'both';
    const item = { img: okImg(p.img), baby: !!p.baby, added: true };
    ['az', 'ru', 'en'].forEach(l => {
      const t = p[l] || p.ru || {};
      item[l] = { cat: esc(t.cat), name: esc(t.name), desc: esc(t.desc), tags: (t.tags || []).map(esc) };
    });
    if (!item.img) item.emoji = species === 'cats' ? '🐱' : species === 'dogs' ? '🐶' : '🐾';
    if (!item.en.name && !item.img) return;
    let g = cat[p.brand].find(x => !x.coat && x.sectionId === p.section && (x.species || 'both') === species);
    if (!g) {
      const name = { az: def.az, ru: def.ru, en: def.en };
      g = { group: name, sub: name, species, sectionId: p.section, section: name, items: [] };
      cat[p.brand].push(g);
    }
    g.items.push(item);
  });
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

// Товары, вошедшие в витрины-комплексы Tauro (Step-системы): карточками их не дублируем
let TPL_SHOWCASE = null;
function tplShowcaseSet() {
  if (!TPL_SHOWCASE) {
    TPL_SHOWCASE = new Set();
    if (typeof TPL_SYSTEMS !== 'undefined') TPL_SYSTEMS.forEach(sys => sys.steps.forEach(st => TPL_SHOWCASE.add(st.img)));
  }
  return TPL_SHOWCASE;
}
function tplBottleCount() {
  return (typeof TPL_SYSTEMS !== 'undefined') ? TPL_SYSTEMS.reduce((s, sys) => s + sys.steps.length, 0) : 0;
}

// Группы, которые реально выводятся карточками (без витринных товаров Tauro)
function visibleGroups(brand, species) {
  let groups = groupsFor(brand, species);
  if (brand === 'tpl' && typeof TPL_SYSTEMS !== 'undefined') {
    const skip = tplShowcaseSet();
    groups = groups
      .map(g => Object.assign({}, g, { items: g.items.filter(it => !skip.has(it.img)) }))
      .filter(g => g.items.length);
  }
  return groups;
}

// Сколько карточек покажет фильтр вида (без витрин Tauro)
function countFor(brand, species) {
  return visibleGroups(brand, species).reduce((sum, g) => sum + g.items.length, 0);
}

// Разделы бренда для вида: [{id, def:{az,ru,en}, groups, count}] в порядке чипов.
// Tauro: раздел «Комплексы Step» = витрины флаконов (count = число флаконов).
function sectionsFor(brand, species) {
  const out = sectionDefs(brand).map(d => ({ id: d.id, def: d, groups: [], count: 0 }));
  const byId = {};
  out.forEach(s => { byId[s.id] = s; });
  visibleGroups(brand, species).forEach(g => {
    let s = byId[g.sectionId];
    if (!s) {
      const id = g.sectionId || 'other';
      s = byId[id] = { id, def: g.section || g.group, groups: [], count: 0 };
      out.push(s);
    }
    s.groups.push(g);
    s.count += g.items.length;
  });
  if (byId.systems) byId.systems.count = (brand === 'tpl' && species !== 'baby') ? tplBottleCount() : 0;   // флаконы Step — не детские товары
  return out;
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
  // первые 8 карточек выдачи грузим сразу: они попадают в снимок View Transition (NP.swap ждёт их декодирования)
  const eager = typeof id === 'number' && id < 8;
  const media = item.img
    ? `<img src="${item.img}" alt="" ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="240" height="240" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'product__emoji',textContent:'${fallback}'}))">`
    : `<span class="product__emoji">${fallback}</span>`;
  // Карточка — не кнопка: открывает её кнопка-название, растянутая на всю карточку (::after);
  // сердечко — соседний элемент выше по z-index (без вложенных интерактивных элементов)
  const hasPid = !(id === undefined || id === null);
  const pid = hasPid ? ` data-pid="${id}"` : '';
  const did = uid ? ` data-id="${uid}"` : '';
  const more = `<span class="product__more">${dict['products.more'] || 'Подробнее'}<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
  return `
    <article class="product${coat ? ' product--coat product--coat-' + coat : ''} is-clickable spr-glare"${pid}${did}>
      <div class="product__img">${ribbon}${media}<div class="product__actions"></div></div>
      <div class="product__body">
        <span class="product__cat">${t.cat}</span>
        <h4 class="product__name">${hasPid ? `<button class="product__open" type="button">${t.name}</button>` : t.name}</h4>
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

const sheetMq = window.matchMedia('(max-width: 720px)');   // phones: the product is a bottom sheet
function showModal(modal, body, opts, item) {
  const dlg = modal.querySelector('.pmodal__dialog');
  const instant = !!opts.keyboard || reduceMotion();
  modalGen++;
  modalId = opts.id || null;
  document.querySelectorAll('[data-ghost="pmodal"]').forEach(g => g.remove());   // a closing copy gives way at once
  if (modalState === 'closed') {
    const active = document.activeElement;
    modalOrigin = opts.card || (active && active !== document.body ? active : null);
  } else if (opts.card) {
    modalOrigin = opts.card;
  }
  // Open from the point of invocation (Монтажка): the dialog starts over the clicked card — its centre, at roughly
  // the card's size — and springs to the middle of the screen (css: closed transform → open, on --pm-spring).
  // No card (deep link, search) — a small zoom from the centre. Phones: a bottom sheet, it rises from the edge.
  if (dlg) {
    const r = (!instant && opts.card && !sheetMq.matches) ? opts.card.getBoundingClientRect() : null;
    let x = 0, y = 0, sc = 0.96;
    if (r && r.width) {
      const w = dlg.offsetWidth || 1, h = dlg.offsetHeight || 1;
      x = r.left + r.width / 2 - window.innerWidth / 2;
      y = r.top + r.height / 2 - window.innerHeight / 2;
      sc = Math.max(0.3, Math.min(0.9, Math.sqrt((r.width * r.height) / (w * h))));
    }
    dlg.style.setProperty('--from-x', x.toFixed(1) + 'px');
    dlg.style.setProperty('--from-y', y.toFixed(1) + 'px');
    dlg.style.setProperty('--from-s', sc.toFixed(3));
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
  // the content follows the panel in a short spring staircase (after np:modal-open: phones have rebuilt the sections)
  if (!instant && sprOK()) {
    const info = body.querySelector('.pmodal__info');
    const parts = [body.querySelector('.pmodal__media')].concat(info ? Array.from(info.children) : []).filter(Boolean);
    NPSpring.stagger(parts.slice(0, 8), 35, { opacity: 0, transform: 'translateY(8px)' }, [0.9, 0.42]);
  }
}

// Close without waiting (Монтажка's ghost-out): a copy of the modal leaves — desktop: shrinks back into its card
// (360ms); phone sheet: slides down from wherever it is now (320ms, drawer curve) — while the real one is
// closed at once (focus, scroll lock and inert come back immediately; a new open is not blocked by the exit).
function modalGhostOut(modal) {
  if (!sprOK()) return false;
  const dlg = modal.querySelector('.pmodal__dialog'), bd = modal.querySelector('.pmodal__backdrop');
  const body = document.getElementById('pmodalBody');
  if (!dlg || !bd) return false;
  const phone = sheetMq.matches;
  // read first: where it is now (mid-zoom / mid-drag), how far it is scrolled
  const dcs = getComputedStyle(dlg), tr = dcs.transform, op = dcs.opacity, bop = getComputedStyle(bd).opacity;
  const st = dlg.scrollTop, bst = body ? body.scrollTop : 0, h = dlg.offsetHeight;
  const g = modal.cloneNode(true);
  [g].concat(Array.from(g.querySelectorAll('[id]'))).forEach(x => x.removeAttribute('id'));
  g.classList.remove('is-closing'); g.classList.add('is-instant');
  g.inert = true; g.setAttribute('aria-hidden', 'true'); g.setAttribute('data-ghost', 'pmodal');
  g.style.pointerEvents = 'none';
  document.body.appendChild(g);
  const gd = g.querySelector('.pmodal__dialog'), gb = g.querySelector('.pmodal__backdrop'), gbody = g.querySelector('.pmodal__body');
  if (st) gd.scrollTop = st;
  if (gbody && bst) gbody.scrollTop = bst;
  const t0 = tr === 'none' ? 'none' : tr;
  // Desktop: the mirror of the open — the panel shrinks back into the card it came from (its centre, roughly its
  // size) while the content fades first, so text is never seen squashed. No card on screen — settles back softly.
  let target = null;
  if (!phone) {
    const grid = document.getElementById('productsGrid');
    let card = (modalId && grid) ? grid.querySelector('[data-id="' + cssEsc(modalId) + '"]') : null;
    if (!card || !card.isConnected) card = modalOrigin && modalOrigin.isConnected ? modalOrigin : null;
    const r = card && card.getBoundingClientRect(), d = dlg.getBoundingClientRect();
    if (r && r.width && r.bottom > 0 && r.top < window.innerHeight) {
      target = {
        x: r.left + r.width / 2 - (d.left + d.width / 2), y: r.top + r.height / 2 - (d.top + d.height / 2),
        s: Math.max(0.25, Math.min(0.9, Math.sqrt((r.width * r.height) / (d.width * d.height))))
      };
    }
  }
  const ms = phone ? 320 : target ? 360 : 260;
  const frames = phone
    ? [{ transform: t0 }, { transform: 'translate3d(0, ' + (h + 24) + 'px, 0)' }]
    : target
      ? [{ transform: 'translate(0px, 0px) ' + (t0 === 'none' ? '' : t0 + ' ') + 'scale(1)', opacity: op }, { opacity: op, offset: 0.55 },
         { transform: 'translate(' + target.x.toFixed(1) + 'px, ' + target.y.toFixed(1) + 'px) ' + (t0 === 'none' ? '' : t0 + ' ') + 'scale(' + target.s.toFixed(3) + ')', opacity: 0 }]
      : [{ transform: t0, opacity: op }, { transform: (t0 === 'none' ? '' : t0 + ' ') + 'translateY(12px) scale(0.96)', opacity: 0 }];
  const a = gd.animate(frames, { duration: ms, easing: phone ? 'cubic-bezier(0.32, 0.72, 0, 1)' : 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' });
  if (target && gbody) gbody.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms * 0.45, easing: 'ease-out', fill: 'forwards' });
  gb.animate([{ opacity: bop }, { opacity: 0 }], { duration: ms, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' });
  a.onfinish = a.oncancel = () => g.remove();
  return true;
}

// instant — keyboard (Esc / Enter on ×) or swiped away (the sheet has already left the screen): no exit motion
function closeProductModal(instant) {
  const modal = document.getElementById('productModal');
  if (!modal || modalState !== 'open') return;
  const dlg = modal.querySelector('.pmodal__dialog');
  const g = ++modalGen;
  const id = modalId;
  modalState = 'closing';
  let cleanup = () => {};
  let keepInstant = false;
  const finalize = () => {
    if (g !== modalGen || modalState !== 'closing') return;   // модалку успели открыть заново
    cleanup();
    modalState = 'closed';
    // an instant close stays .is-instant until the next open: the backdrop must not fade out under the ghost
    modal.classList.remove('is-open', 'is-closing');
    if (!keepInstant) modal.classList.remove('is-instant');
    modal.setAttribute('aria-hidden', 'true');
    modal.inert = true;
    setModalLock(false);
    setBackgroundInert(false);
    const grid = document.getElementById('productsGrid');
    let back = (id && grid) ? grid.querySelector('[data-id="' + cssEsc(id) + '"]') : null;
    if (!back || !back.isConnected) back = modalOrigin;
    if (back && back.isConnected) {
      const btn = back.querySelector && back.querySelector('.product__open');   // карточка открывается кнопкой-названием
      const f = btn || back;
      if (typeof f.focus === 'function') f.focus({ preventScroll: true });
    }
    modalOrigin = null;
    emit('np:modal-close', { id });
  };
  if (instant || reduceMotion() || modalGhostOut(modal)) { keepInstant = true; modal.classList.add('is-instant'); finalize(); return; }
  modal.classList.remove('is-instant');
  modal.classList.add('is-closing');
  // Шапка, тулбар и чипы возвращаются одновременно с растворением диалога (одним движением);
  // блокировка прокрутки (html.modal-open) и inert снимаются в finalize
  document.body.classList.remove('modal-open');
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

// ===== Switching the catalog without jump-cuts (Монтажка: survivors glide, newcomers rise, leavers ghost out) =====
// Only what is on screen takes part. Blocks are read top-down and the walk stops at the first one below the
// viewport, and a group is entered only when it is on screen — off-screen groups (content-visibility: auto) are
// never laid out for this. All reads happen before the update and right after it; the motion itself is springs
// (NPSpring: FLIP on `translate`, WAAPI enters) — nothing is measured per frame.
const sprOK = () => !!(window.NPSpring && NPSpring.ok() && NPSpring.ready);
const UNIT_IN_GROUP = '.product-group__title, .product-subgroup__title, .coat-insert, .coat-subline, .products > .product';
function screenUnits(grid) {
  const vh = window.innerHeight, out = [];
  const walk = (els, deep) => {
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (!r.height || r.bottom < 0) continue;
      if (r.top > vh) return false;
      if (deep && el.classList.contains('cat-section')) { if (walk(el.children, true) === false) return false; }
      else if (deep && el.classList.contains('product-group')) { if (walk(el.querySelectorAll(UNIT_IN_GROUP), false) === false) return false; }
      else out.push(el);
    }
    return true;
  };
  if (grid) walk(grid.children, true);
  return out;
}
// Stable identity of a block across renders: its section + product id (cards) or class + text (titles, inserts…)
function unitKey(el) {
  if (el._uk) return el._uk;
  const sec = el.closest('[data-sec]'), id = el.getAttribute('data-id');
  return (el._uk = (sec ? sec.getAttribute('data-sec') : '') + '|' + (id || el.className.split(' ')[0] + ':' + el.textContent.trim().slice(0, 60)));
}
// Newcomers: a 40ms staircase on a spring (≤10 steps), rising 10px from .99 — no blur (cards are big, and many).
function enterUnits(els) {
  if (els.length && sprOK()) NPSpring.stagger(els, 40, { opacity: 0, transform: 'translateY(10px) scale(0.99)' }, [0.88, 0.42]);
}
// Survivors glide home on springs. While they fly, their own CSS transitions (hover lift on `translate`) are off,
// otherwise every spring frame would restart a 160ms transition and smear the glide.
let flipT = 0;
function flipUnits(before, els) {
  if (!els.length || !NPSpring.flipPlay(before, els, unitKey, { damping: 0.82, response: 0.38 })) return;
  els.forEach(el => el.classList.add('is-flip'));
  clearTimeout(flipT);
  flipT = setTimeout(() => document.querySelectorAll('.is-flip').forEach(el => el.classList.remove('is-flip')), NPSpring.ease(0.82, 0.38).duration);
}
// Leavers: they fade out where they were (≤6, 150ms) while the new content is already in place. The old nodes are
// reused as they are (the update has just detached them — no cloning, images already decoded), each wrapped in the
// containers the catalog CSS expects (.cat-section > .product-group > .products) so it looks exactly the same,
// and all of them sit in ONE overlay: a single layer fades, not one per block. The overlay is only as big as the
// ghosts and starts below the sticky toolbar / chip row — nothing fades under their backdrop blur, which would
// otherwise be re-rendered every frame of the fade. top — the bottom of the sticky stack (read with the other reads).
function ghostUnits(list, top) {
  const vh = window.innerHeight;
  list = list.slice(0, 6).filter(u => u.r.bottom > top && u.r.top < vh);
  if (!list.length) return;
  const box0 = { l: Math.min(...list.map(u => u.r.left)), t: Math.max(top, Math.min(...list.map(u => u.r.top))),
    r: Math.max(...list.map(u => u.r.right)), b: Math.min(vh, Math.max(...list.map(u => u.r.bottom))) };
  const layer = document.createElement('div');
  layer.className = 'cat-ghosts';
  layer.inert = true; layer.setAttribute('aria-hidden', 'true');
  layer.style.cssText = 'position:fixed;z-index:30;pointer-events:none;overflow:hidden;left:' + box0.l + 'px;top:' + box0.t + 'px;width:' + (box0.r - box0.l) + 'px;height:' + (box0.b - box0.t) + 'px;';
  // read where each one lived before any of them is moved (moving one changes its old siblings' :only-child)
  const metas = list.map(({ el, r }) => ({ el, r, grp: el.closest('.product-group'), inSec: !!el.closest('.cat-section'),
    isCard: el.matches('.products > .product'), lone: el.matches('.products > .product:only-child') }));
  metas.forEach(({ el, r, grp, inSec, isCard, lone }) => {
    if (el._sprT) { NPSpring.set(el._sprT.x, 0); NPSpring.set(el._sprT.y, 0); }   // a glide in flight: the rect has it already
    [el].concat(Array.from(el.querySelectorAll('[id], [data-id], [data-pid]'))).forEach(x => { x.removeAttribute('id'); x.removeAttribute('data-id'); x.removeAttribute('data-pid'); });
    el.style.margin = '0';
    let box = el;
    const wrap = cls => { const w = document.createElement('div'); w.className = cls; w.style.cssText = 'display:block;margin:0;padding:0;content-visibility:visible;contain:none;'; w.appendChild(box); box = w; };
    if (isCard) {
      wrap('products');
      if (!lone) box.appendChild(Object.assign(document.createElement('i'), { hidden: true }));   // keep :only-child rules off
    }
    if (grp && grp !== el) wrap(grp.className);
    if (inSec) wrap('cat-section');
    Object.assign(box.style, { position: 'absolute', left: (r.left - box0.l) + 'px', top: (r.top - box0.t) + 'px', width: r.width + 'px' });
    layer.appendChild(box);
  });
  document.body.appendChild(layer);
  const a = layer.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: NPSpring.EASE, fill: 'forwards' });
  a.onfinish = a.oncancel = () => layer.remove();
}
// the bottom edge of what sticks at the top (header + toolbar + chip row) — ghosts stay below it
function stickyBottom() {
  const nav = document.getElementById('catNav'), bar = document.getElementById('catalogBar'), hdr = document.getElementById('header');
  const el = nav && !nav.hidden ? nav : bar || hdr;
  return el ? Math.max(0, el.getBoundingClientRect().bottom) : 0;
}
// What follows the grid (brand ranges + footer) glides to its new place instead of snapping when the page height
// changes (Монтажка's motionTabSwitch). Only when the page did not scroll and it is on screen before or after.
function tailEls() { return [document.querySelector('#products .ranges-block'), document.querySelector('.footer')].filter(Boolean); }
function tailRecord() {
  const t = tailEls();
  return t.length && sprOK() ? { top: t[0].getBoundingClientRect().top, sy: window.pageYOffset } : null;
}
// read the new place (call with the other reads after the update), then play — no read after a write
function tailMeasure(rec) {
  if (!rec || Math.abs(window.pageYOffset - rec.sy) > 1) return null;
  const vh = window.innerHeight, top1 = tailEls()[0].getBoundingClientRect().top;
  if ((rec.top > vh && top1 > vh) || Math.abs(rec.top - top1) < 2) return null;
  return Math.min(rec.top, vh + 24) - top1;   // from below the screen at most — it slides in, not flies in
}
function tailPlay(dy) {
  if (!dy) return;
  tailEls().forEach(el => { const T = NPSpring.tform(el); T.y.v += dy; NPSpring.to(T.y, 0, { damping: 0.92, response: 0.4 }); });
}
// Species / section switch: record what is on screen, update, then morph.
function morphGrid(update, animate) {
  const grid = document.getElementById('productsGrid');
  if (!animate || !grid || !sprOK()) { update(); return; }
  const units0 = screenUnits(grid);
  const rects0 = units0.map(el => ({ el, r: el.getBoundingClientRect() }));
  const before = NPSpring.flipRecord(units0, unitKey);
  const tail = tailRecord();
  update();
  // reads (one layout): what is on screen now, where the tail went, where the survivors are (inside flipPlay) …
  const units1 = screenUnits(grid);
  const keys1 = new Set(units1.map(unitKey));
  const dy = tailMeasure(tail), top = stickyBottom();
  flipUnits(before, units1.filter(el => before.has(unitKey(el))));
  // … then writes only
  ghostUnits(rects0.filter(u => !keys1.has(unitKey(u.el))), top);
  enterUnits(units1.filter(el => !before.has(unitKey(el))));
  tailPlay(dy);
}

// Tauro: вставка «зачем нужны степы» + витрины «левитирующих» флаконов (Step-системы)
function tplIntroHtml(brand, lang, dict) {
  // Вставка «зачем нужны степы» — в самом верху вкладки Tauro
  let tplWhy = '';
  if (brand === 'tpl') {
    // Три шага ухода — салонный ритуал на тёмной «студийной» панели: у каждого шага свой флакон (шампунь, маска,
    // кондиционер), который наполняется своим цветом, когда блок появляется на экране (.is-in, js/motion-catalog.js).
    // На этикетке флакона — номер шага. Флаконы связаны пунктиром.
    // Флаконы нарисованы как настоящая упаковка: шампунь с откидной крышкой, баночка-маска с рифлёной крышкой,
    // кондиционер с дозатором. Стекло с бликами, жидкость с волной сверху, этикетка TAURO с номером шага.
    const bottles = {
      1: { body: 'M30 34h20c6 2 10 7 10 14v90c0 8-6 14-14 14H34c-8 0-14-6-14-14V48c0-7 4-12 10-14z',
           top: '<rect x="33" y="26" width="14" height="9" rx="2"/><path d="M28 11c0-3 2-5 5-5h14c3 0 5 2 5 5v15H28z"/><path d="M28 18h24" stroke-opacity=".5"/>',
           label: [24, 80, 32, 46], shine: 'M25.5 58v66', shade: 'M55 60v62', extra: '<circle cx="34" cy="132" r="2.2"/><circle cx="44" cy="120" r="1.6"/><circle cx="38" cy="142" r="1.3"/><circle cx="47" cy="138" r="2"/>' },
      2: { body: 'M15 78h50c4 0 7 3 7 7v53c0 8-6 14-14 14H22c-8 0-14-6-14-14V85c0-4 3-7 7-7z',
           top: '<rect x="10" y="58" width="60" height="20" rx="5"/>' + [17, 24, 31, 38, 45, 52, 59, 65].map(x => `<path d="M${x} 62v12" stroke-opacity=".35"/>`).join(''),
           label: [21, 94, 38, 40], shine: 'M13.5 90v44', shade: 'M66.5 92v42', extra: '' },
      3: { body: 'M29 52h22c6 2 10 6 10 12v76c0 7-5 12-12 12H31c-7 0-12-5-12-12V64c0-6 4-10 10-12z',
           top: '<rect x="30" y="43" width="20" height="9" rx="2.5"/><rect x="37" y="27" width="6" height="16" rx="1.5"/><path d="M30 15c0-2 2-4 4-4h14c2 0 4 2 4 4v8c0 2-1 4-3 4H30z"/><path d="M30 17H19c-2 0-3.5 1.5-3.5 3.5V23"/>',
           label: [25, 84, 30, 46], shine: 'M24.5 70v58', shade: 'M56 72v56', extra: '' }
    };
    // цвета шагов: оранжевый → жёлтый → зелёный (прямо в SVG — флаконы цветные даже до загрузки стилей)
    const tones = { 1: ['#d9731f', '#f6b26b'], 2: ['#d9a514', '#f6dc6a'], 3: ['#3f9a5b', '#8fd6a2'] };
    const bottle = n => {
      const b = bottles[n], t = tones[n], [lx, ly, lw, lh] = b.label;
      return `<svg class="tpl-why__bottle" viewBox="0 0 80 160" aria-hidden="true">
        <defs><clipPath id="tplWhyClip${n}"><path d="${b.body}"/></clipPath>
          <linearGradient id="tplWhyLiq${n}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t[1]}"/><stop offset="1" stop-color="${t[0]}"/></linearGradient>
          <linearGradient id="tplWhyGlass${n}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".45" stop-color="#fff" stop-opacity=".03"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient></defs>
        <ellipse cx="40" cy="155" rx="26" ry="3.5" fill="#000" fill-opacity=".35"/>
        <g clip-path="url(#tplWhyClip${n})">
          <g class="tpl-why__liquid"><path d="M0 6 Q10 1 20 6 T40 6 T60 6 T80 6 V170 H0 Z" fill="url(#tplWhyLiq${n})"/>
            <g fill="#fff" fill-opacity=".45">${b.extra}</g></g>
          <path d="${b.body}" fill="url(#tplWhyGlass${n})"/>
        </g>
        <g class="tpl-why__glass" fill="#ffffff" fill-opacity=".05" stroke="#f4efe6" stroke-width="1.8" stroke-linejoin="round"><path d="${b.body}"/>${b.top}</g>
        <path d="${b.shine}" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.6" stroke-linecap="round"/>
        <path d="${b.shade}" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="2.4" stroke-linecap="round"/>
        <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="6" fill="#f7f2e8"/>
        <rect x="${lx}" y="${ly + 7}" width="${lw}" height="2" fill="${t[0]}"/>
        <text x="40" y="${ly + 17}" text-anchor="middle" fill="#15181b" fill-opacity=".62" font-size="5.6" font-weight="700" letter-spacing=".9">TAURO</text>
        <text x="40" y="${ly + lh - 9}" text-anchor="middle" fill="#15181b" font-size="17" font-weight="700">${n}</text>
      </svg>`;
    };
    tplWhy = `
      <section class="tpl-why" aria-labelledby="tplWhyTitle">
        <div class="tpl-why__head">
          <h2 class="tpl-why__title" id="tplWhyTitle">${dict['tplWhy.title'] || ''}</h2>
          <p class="tpl-why__text">${dict['tplWhy.text'] || ''}</p>
        </div>
        <ol class="tpl-why__steps">
          ${[1, 2, 3].map(n => `
            <li class="tpl-why__step tpl-why__step--${n}" style="--i:${n - 1}">
              <div class="tpl-why__stage">${bottle(n)}</div>
              <div class="tpl-why__body">
                <h3 class="tpl-why__h">${dict['tplWhy.s' + n + '.title'] || ''}</h3>
                <p class="tpl-why__p">${dict['tplWhy.s' + n + '.text'] || ''}</p>
              </div>
            </li>`).join('')}
        </ol>
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
            <div class="tpl-bottle__img"><img src="${st.img}" alt="${nm}" loading="lazy" decoding="async" width="200" height="260" /></div>
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
  return { tplWhy, showcase };
}

// Суперпремиум-группа Superior Care: карточки по цвету шерсти со вставками и подлинейками (Starter → All life stage)
function coatGroupInner(g, dict, mk) {
  const buckets = { white: [], red: [], dark: [], none: [] };
  g.items.forEach(it => { buckets[coatOf(it) || 'none'].push(it); });
  let inner = '';
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
  return inner;
}

// Короткое название группы внутри раздела: «Prime · Влажный корм (паучи)» → «Prime»
function shortGroupLabel(g, lang) {
  const src = g.sub || g.group || {};
  const n = src[lang] || src.ru || '';
  return n.indexOf(' · ') > 0 ? n.split(' · ')[0] : n;
}
const SPECIES_HEAD = { cats: ['🐱', 'products.tabCats'], dogs: ['🐶', 'products.tabDogs'], both: ['🐾', 'sections.both'] };

// Раздел: заголовок + группы-подзаголовки. NP/Araton при «Все»/«Малыши» — подзаголовки «Для кошек» / «Для собак».
// NP «Лакомства»: внутри группы — подзаголовки по цвету шерсти (White / Red) и функциональные NP; молодые — первыми
function treatsGroupInner(g, dict, mk) {
  const b = { white: [], red: [], other: [] };
  g.items.forEach(it => { const c = coatOf(it); (b[c === 'white' || c === 'red' ? c : 'other']).push(it); });
  const filled = ['white', 'red', 'other'].filter(k => b[k].length);
  if (filled.length < 2) return `<div class="products">${byStage(g.items).map(it => mk(it, g.species)).join('')}</div>`;
  const head = { white: dict['coat.white.title'], red: dict['coat.red.title'], other: dict['treats.general'] || tr('treats.general') };
  return filled.map(k => `<h4 class="product-subgroup__title${k !== 'other' ? ' coat-subline--' + k : ''}">${head[k] || ''}</h4>` +
    `<div class="products">${byStage(b[k]).map(it => mk(it, g.species)).join('')}</div>`).join('');
}

function sectionParts(s, brand, lang, dict, mk) {
  const title = (s.def && (s.def[lang] || s.def.ru)) || '';
  const groupBody = g => g.coat ? coatGroupInner(g, dict, mk)
    : (brand === 'np' && s.id === 'treats') ? treatsGroupInner(g, dict, mk)
    : `<div class="products">${g.items.map(it => mk(it, g.species)).join('')}</div>`;
  const wrapGroup = (inner, head, coat) => `
      <div class="product-group${coat ? ' product-group--coat' : ''}">
        ${head ? `<h3 class="product-group__title">${head}</h3>` : ''}
        ${inner}
      </div>`;
  const blocks = [];   // top-level pieces of the section: notes and product groups (the unit of chunked rendering)
  if (brand === 'np' && s.id === 'superior-care') blocks.push(`<p class="coat-note">${dict['products.coatNote'] || ''}</p>`);
  // «Сухой корм» NP: сухие корма Superior Care (по цвету шерсти) живут в своём разделе — даём прямой переход
  if (brand === 'np' && s.id === 'dry' && currentSection === 'dry') {
    const sc = sectionsFor('np', currentSpecies).find(x => x.id === 'superior-care');
    if (sc && sc.count) blocks.push(`<button class="cat-xlink" type="button" data-sec="superior-care">+ ${sc.count} ${tr('sections.scDry')} <span aria-hidden="true">→</span></button>`);
  }
  if (brand === 'np' || brand === 'araton') {
    const bySpecies = currentSpecies === 'all' || currentSpecies === 'baby';
    ['cats', 'dogs', 'both'].forEach(sp => {
      const gs = s.groups.filter(g => (g.species || 'both') === sp);
      if (!gs.length) return;
      const multi = gs.length > 1;
      const coat = gs.some(g => g.coat);
      if (bySpecies) {
        const h = SPECIES_HEAD[sp];
        const head = `<span class="product-group__ico" aria-hidden="true">${h[0]}</span>${dict[h[1]] || tr(h[1])}`;
        const inner = gs.map(g => (multi ? `<h4 class="product-subgroup__title">${shortGroupLabel(g, lang)}</h4>` : '') + groupBody(g)).join('');
        blocks.push(wrapGroup(inner, head, coat));
      } else {
        gs.forEach(g => { blocks.push(wrapGroup(groupBody(g), multi ? shortGroupLabel(g, lang) : '', g.coat)); });
      }
    });
  } else {
    const multi = s.groups.length > 1;
    s.groups.forEach(g => {
      const name = (g.group && (g.group[lang] || g.group.ru)) || '';
      blocks.push(wrapGroup(groupBody(g), multi ? name : '', g.coat));
    });
  }
  return {
    id: s.id,
    open: `
    <section class="cat-section" id="sec-${s.id}" data-sec="${s.id}" aria-labelledby="sec-${s.id}-t">
      <h2 class="cat-section__title" id="sec-${s.id}-t"><span class="cat-section__name">${title}</span><span class="cat-section__count">${s.count}</span></h2>`,
    blocks,
    close: `
    </section>`
  };
}
function sectionHtml(s, brand, lang, dict, mk) { const p = sectionParts(s, brand, lang, dict, mk); return p.open + p.blocks.join('') + p.close; }

// Motion of a re-render (survivors / newcomers / leavers) is the caller's: morphGrid / activateBrand.
// The first render is covered by the page's own entrance — no second layer of motion.
let firstRenderDone = false;
let resultNote = '';   // пояснение к выдаче (раздел сброшен фильтром / Tauro: все товары для обоих видов)
function renderProducts(brand, lang, chunk) {
  const wrap = document.getElementById('productsGrid');
  if (!wrap) return;
  wrap.setAttribute('data-brand', brand);   // the grid's own brand tint — see styles.css «Тинт страницы по бренду»
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  const finish = () => {
    updateSpeciesAvailability();
    updateResultLine();
    requestAnimationFrame(() => spySections());
    emit('np:render', { brand, lang, species: currentSpecies, section: currentSection });
  };

  const secs = sectionsFor(brand, currentSpecies);
  resultNote = '';
  if (currentSection !== 'all' && !secs.some(s => s.id === currentSection && s.count)) {
    const def = sectionDef(brand, currentSection);
    if (def && firstRenderDone) resultNote = tr('result.sectionEmpty', { sec: def[lang] || def.ru });
    currentSection = 'all';
  }
  if (!resultNote && brand === 'tpl' && (currentSpecies === 'cats' || currentSpecies === 'dogs') &&
      countFor(brand, 'cats') === countFor(brand, 'all') && countFor(brand, 'dogs') === countFor(brand, 'all')) {
    resultNote = tr('result.bothSpecies');
  }
  firstRenderDone = true;
  renderSectionNav(secs, lang);
  const total = secs.reduce((n, s) => n + s.count, 0);

  if (!total) {
    wrap.innerHTML = `<p class="catalog-empty">${dict['products.empty'] || ''}</p>`;
    MODAL_ITEMS = []; MODAL_KEYS = [];
    finish();
    return;
  }

  // Малыши: у брендов без кормов (Tauro, Misoko) — текст про уход, а не про стартовые корма
  const babyText = (brand === 'np' || brand === 'araton') ? dict['products.babiesText'] : (dict['products.babiesTextCare'] || tr('products.babiesTextCare'));
  const banner = currentSpecies === 'baby'
    ? `<div class="baby-banner"><span class="baby-banner__icon">🍼</span><div class="baby-banner__text"><h2>${dict['products.babiesTitle'] || ''}</h2><p>${babyText || ''}</p></div></div>`
    : '';
  // Реестр карточек для модального окна: id = индекс в MODAL_ITEMS.
  MODAL_ITEMS = []; MODAL_KEYS = [];
  const mk = (it, species) => {
    const id = MODAL_ITEMS.length;
    MODAL_ITEMS.push(it);
    MODAL_KEYS.push(descKeyFor(brand, species, it));
    return productCard(it, lang, id, productId(it, brand));
  };
  // Tauro: «зачем нужны степы» + витрины флаконов — при «Все» и в разделе «Комплексы Step»
  let intro = '';
  if (brand === 'tpl' && currentSpecies !== 'baby' && (currentSection === 'all' || currentSection === 'systems')) {
    const t = tplIntroHtml(brand, lang, dict);
    const label = (sectionDef('tpl', 'systems') || {})[lang] || '';
    intro = `<section class="cat-section cat-section--systems" id="sec-systems" data-sec="systems" aria-label="${label}">${t.tplWhy}${t.showcase}</section>`;
  }
  const shown = secs.filter(s => s.id !== 'systems' && s.count && (currentSection === 'all' || s.id === currentSection));
  const secParts = shown.map(s => sectionParts(s, brand, lang, dict, mk));
  const head = banner + intro;
  const ids = str => str.split(' data-id="').length - 1;
  RENDER_COUNT = ids(head) + secParts.reduce((n, p) => n + p.blocks.reduce((m, b) => m + ids(b), 0), 0);
  // An animated switch (chunk) renders in pieces: the first screen at once — product groups until about a screenful
  // of cards — and the rest one group per idle slot. One big innerHTML of 100+ cards froze phones mid-way through the
  // pill / fade springs.
  const units = [];   // {p: section parts, b: block html, first: opens its section}
  secParts.forEach(p => { if (!p.blocks.length) units.push({ p, b: '', first: true }); p.blocks.forEach((b, i) => units.push({ p, b, first: i === 0 })); });
  let k = units.length;
  if (chunk && renderedOnce) {
    const want = window.innerWidth <= 720 ? 6 : 12;
    k = 0; for (let n = ids(head); k < units.length && (k === 0 || n < want); k++) n += ids(units[k].b);
    while (k < units.length && !units[k].first && !units[k].b.includes(' data-id="')) k++;   // a section's notes stay with it
  }
  let html = head, openSec = null;
  units.slice(0, k).forEach(u => {
    if (u.first) { if (openSec) html += openSec.close; html += u.p.open; openSec = u.p; }
    html += u.b;
  });
  if (openSec) html += openSec.close;
  wrap.innerHTML = html;
  renderedOnce = true;
  renderRest(wrap, units.slice(k), { brand, lang, species: currentSpecies, section: currentSection });
  finish();
}

// The rest of a render, one product group per idle slot (into its section, or a new section). flushRender() appends
// it all at once (deep links, search).
let RENDER_COUNT = 0, renderedOnce = false, renderGen = 0, pendingRest = null;
function renderRest(wrap, rest, detail) {
  const gen = ++renderGen;
  pendingRest = null;
  if (!rest.length) return;
  const idle = window.requestIdleCallback ? f => requestIdleCallback(f, { timeout: 250 }) : f => setTimeout(f, 32);
  const put = u => {
    const sec = !u.first && document.getElementById('sec-' + u.p.id);
    if (sec && sec.parentNode === wrap) sec.insertAdjacentHTML('beforeend', u.b);
    else wrap.insertAdjacentHTML('beforeend', u.p.open + u.b + u.p.close);
  };
  const step = all => {
    if (gen !== renderGen) return;
    do put(rest.shift()); while (all && rest.length);
    if (rest.length) { idle(() => step(false)); return; }
    pendingRest = null;
    spySections();
    emit('np:render-more', detail);
  };
  pendingRest = () => step(true);
  // The rest is off screen: it waits until the entrance springs have played (≈650ms), so parsing it never drops their
  // frames — unless the user starts scrolling first, then it comes at once.
  let started = false;
  const go = () => { if (started || gen !== renderGen) return; started = true; window.removeEventListener('scroll', go); idle(() => step(false)); };
  requestAnimationFrame(() => requestAnimationFrame(() => { if (!started) window.addEventListener('scroll', go, { passive: true }); }));
  setTimeout(go, 650);
}
function flushRender() { if (pendingRest) pendingRest(); }

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
    if (e.detail === 0) return;   // Enter с клавиатуры — переходим сразу, без затухания
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

// ===== Индикаторы вкладок (.tabs__indicator / .species__indicator / .cat-nav__indicator) =====
// The pill glides on a spring curve (pillFor below) and can be caught mid-flight. First placement, keyboard, resize,
// fonts and reduced motion — instant. Label colour hand-off: a label is "lit" (.is-lit → active colour) once the
// pill covers most of it.
// Boxes come from offsetLeft/Top/Width/Height: layout values, untouched by the press spring's scale.
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
  if (!act || !act.offsetWidth) return;
  const box = b => ({ x: b.offsetLeft, y: b.offsetTop, w: b.offsetWidth, h: b.offsetHeight });
  const to = box(act);
  if (!window.NPSpring || !NPSpring.indicator) {   // no spring core: plain placement through the CSS vars
    ind.style.setProperty('--ind-x', to.x + 'px'); ind.style.setProperty('--ind-y', to.y + 'px');
    ind.style.setProperty('--ind-w', to.w + 'px'); ind.style.setProperty('--ind-h', to.h + 'px');
    return;
  }
  const I = ind._pill || (ind._pill = pillFor(list, ind));
  I.items = Array.from(list.children).filter(b => b !== ind && b.tagName === 'BUTTON').map(b => Object.assign(box(b), { el: b }));
  I.move(to, instant);
}
// The pill moves on the COMPOSITOR: one WAAPI transform animation on the spring's own curve (NPSpring.ease → CSS
// linear(), slight overshoot), so it keeps gliding even while the main thread is busy building the new brand's cards —
// a JS-driven spring froze for exactly those frames. The final geometry is set at once (left/width/height) and the
// animation runs from the old box to it as translate + scale (FLIP). A new click mid-flight starts from where the pill
// is on screen. Labels flip to the active colour when the pill is halfway there (Монтажка's segOff hand-off).
const PILL_SPRING = [0.78, 0.42];
function pillFor(list, ind) {
  const I = { items: [], box: null, anim: null, timer: 0 };
  const sp = NPSpring.ease(PILL_SPRING[0], PILL_SPRING[1]);
  const pts = (sp.easing.match(/-?[\d.]+/g) || []).map(Number);
  const half = Math.max(0, pts.findIndex(v => v >= 0.5)) / Math.max(1, pts.length - 1) * sp.duration;
  ind.style.transformOrigin = '0 0';
  const light = b => {
    I.items.forEach(it => {
      const ox = Math.min(b.x + b.w, it.x + it.w) - Math.max(b.x, it.x), oy = Math.min(b.y + b.h, it.y + it.h) - Math.max(b.y, it.y);
      const on = ox > it.w * 0.5 && oy > it.h * 0.5;
      if (it.el._lit !== on) { it.el._lit = on; it.el.classList.toggle('is-lit', on); }
    });
  };
  const place = b => {
    ind.style.width = b.w + 'px'; ind.style.height = b.h + 'px';
    ind.style.transform = 'translate(' + b.x + 'px, ' + b.y + 'px)';
  };
  I.move = (to, instant) => {
    list.classList.add('spr-lit');
    let from = I.box;
    if (from && I.anim && I.anim.playState === 'running') {   // caught mid-flight: start from what is on screen
      const m = new DOMMatrixReadOnly(getComputedStyle(ind).transform);
      from = { x: m.e, y: m.f, w: from.w * m.a, h: from.h * m.d };
    }
    if (I.anim) { I.anim.cancel(); I.anim = null; }
    clearTimeout(I.timer);
    place(to); I.box = to;
    const same = from && Math.abs(from.x - to.x) < 0.5 && Math.abs(from.y - to.y) < 0.5 && Math.abs(from.w - to.w) < 0.5 && Math.abs(from.h - to.h) < 0.5;
    if (instant || !from || same || !NPSpring.ok() || !NPSpring.ready) { light(to); return; }
    I.anim = ind.animate([
      { transform: 'translate(' + from.x + 'px, ' + from.y + 'px) scale(' + (from.w / to.w) + ', ' + (from.h / to.h) + ')' },
      { transform: 'translate(' + to.x + 'px, ' + to.y + 'px) scale(1, 1)' }
    ], { duration: sp.duration, easing: sp.easing });
    I.timer = setTimeout(() => light(to), half);
  };
  return I;
}
function placeIndicators(instant) {
  placeIndicator(document.getElementById('tabs'), 'tabs__indicator', instant);
  placeIndicator(document.getElementById('species'), 'species__indicator', instant);
  placeIndicator(sectionChipsEl(), 'cat-nav__indicator', instant);
}

// ===== Чипы разделов: одна прокручиваемая строка, sticky под тулбаром, скользящий индикатор =====
let navSig = '';
function sectionChipsEl() {
  const nav = document.getElementById('catNav');
  return nav ? nav.querySelector('.cat-nav__scroller') : null;
}
function renderSectionNav(secs, lang) {
  const nav = document.getElementById('catNav');
  if (!nav) return;
  const total = secs.reduce((n, s) => n + s.count, 0);
  const sig = [currentBrand, lang, currentSpecies].concat(secs.map(s => s.id + ':' + s.count)).join('|');
  if (sig === navSig && sectionChipsEl()) { syncSectionNav(false); return; }
  navSig = sig;
  const hadFocus = nav.contains(document.activeElement);
  const reason = tr('sections.none');
  // Чип — короткое название (def.chip), полное — в title / заголовке раздела / строке результата
  const chip = (id, label, n, full) =>
    `<button class="cat-chip" type="button" data-sec="${id}" aria-pressed="false" tabindex="-1"` +
    (n ? (full && full !== label ? ` title="${full}" aria-label="${full} ${n}"` : '') : ` aria-disabled="true" title="${reason}"`) + `>` +
    `<span class="cat-chip__label">${label}</span><span class="cat-chip__n">${n}</span></button>`;
  const full = s => (s.def && (s.def[lang] || s.def.ru)) || s.id;
  const short = s => (s.def && s.def.chip && (s.def.chip[lang] || s.def.chip.ru)) || full(s);
  // Телефон: тулбар (бренд, поиск, вид) не липкий — кнопка «↑ бренд» возвращает к нему из глубины выдачи
  const brandShort = { np: 'NP', araton: 'Araton', tpl: 'Tauro', misoko: 'Misoko' }[currentBrand] || currentBrand;
  const up = `<button class="cat-nav__up" type="button" title="${tr('sections.toFilters')}">` +
    `<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>` +
    `<span>${brandShort}</span><span class="sr-only"> — ${tr('sections.toFilters')}</span></button>`;
  nav.innerHTML = up + `<div class="cat-nav__scroller" role="toolbar" aria-label="${tr('sections.label')}">` +
    chip('all', tr('sections.all'), total) +
    secs.map(s => chip(s.id, short(s), s.count, full(s))).join('') +
    `</div>`;
  nav.hidden = secs.length < 2;
  spyId = null;
  syncSectionNav(true);
  if (hadFocus) { const a = nav.querySelector('.cat-chip.is-active'); if (a) a.focus({ preventScroll: true }); }
}
function syncSectionNav(instant) {
  const sc = sectionChipsEl();
  if (!sc) return;
  let active = null;
  sc.querySelectorAll('.cat-chip').forEach(c => {
    const on = c.getAttribute('data-sec') === currentSection;
    c.classList.toggle('is-active', on);
    c.setAttribute('aria-pressed', on ? 'true' : 'false');
    c.tabIndex = on ? 0 : -1;
    if (on) active = c;
  });
  placeIndicator(sc, 'cat-nav__indicator', instant);
  if (active) revealChip(active, instant);
  updateNavFades();
}
// Держим чип в зоне видимости горизонтальной ленты (центрируем, если он за краем)
function revealChip(chip, instant) {
  const sc = chip && chip.parentElement;
  if (!sc || sc.scrollWidth <= sc.clientWidth + 1) return;
  const l = chip.offsetLeft, r = l + chip.offsetWidth;
  if (l >= sc.scrollLeft + 24 && r <= sc.scrollLeft + sc.clientWidth - 24) return;
  const left = Math.max(0, l - (sc.clientWidth - chip.offsetWidth) / 2);
  if (instant || reduceMotion() || typeof sc.scrollTo !== 'function') sc.scrollLeft = left;
  else sc.scrollTo({ left, behavior: 'smooth' });
}
// Маски-затухания по краям — только если ленту можно прокрутить в эту сторону
function updateNavFades() {
  const nav = document.getElementById('catNav');
  const sc = sectionChipsEl();
  if (!nav || !sc) return;
  const max = sc.scrollWidth - sc.clientWidth;
  nav.classList.toggle('is-fade-l', sc.scrollLeft > 2);
  nav.classList.toggle('is-fade-r', max > 2 && sc.scrollLeft < max - 2);
}

// Scroll-spy (только в режиме «Все»): подсвечиваем чип раздела, который сейчас под лентой
let spyId = null;
function spySections() {
  const nav = document.getElementById('catNav');
  const grid = document.getElementById('productsGrid');
  const sc = sectionChipsEl();
  if (!nav || !grid || !sc) return;
  let id = null;
  if (currentSection === 'all') {
    const line = nav.getBoundingClientRect().bottom + 24;
    grid.querySelectorAll(':scope > .cat-section').forEach(s => {
      if (s.getBoundingClientRect().top <= line) id = s.getAttribute('data-sec');
    });
  }
  if (id === spyId) return;
  spyId = id;
  let spied = null;
  sc.querySelectorAll('.cat-chip').forEach(c => {
    const on = !!id && c.getAttribute('data-sec') === id;
    c.classList.toggle('is-spy', on);
    if (on) spied = c;
  });
  revealChip(spied || sc.querySelector('.cat-chip.is-active'), false);
}

// Строка «Показано N товаров» над сеткой (Intl.PluralRules по языку)
function shownText(n) {
  let cat = 'other';
  try { cat = new Intl.PluralRules(getLang()).select(n); } catch (e) { /* old browser */ }
  return tr('result.shown.' + cat, { n }) || tr('result.shown.other', { n });
}
function updateResultLine() {
  const el = document.getElementById('catResult');
  const grid = document.getElementById('productsGrid');
  if (!el || !grid) return;
  const n = RENDER_COUNT || grid.querySelectorAll('[data-id]').length;
  // the count's digits pop in (NPSpring.num, keyed across re-renders by data-num): only the changed ones move —
  // up from below when the number grows, from above when it shrinks
  const count = shownText(n);
  let html = `<span class="cat-result__count" data-num="cat-count">${window.NPSpring ? '' : count}</span>`;
  if (currentSection !== 'all') {
    const def = sectionDef(currentBrand, currentSection);
    const name = def ? (def[getLang()] || def.ru) : '';
    html += `<span class="cat-result__sec">${name}</span>` +
      `<button class="cat-result__reset" type="button" data-sec="all">${tr('result.reset')}</button>`;
  }
  if (resultNote) html += `<span class="cat-result__note">${resultNote}</span>`;
  el.innerHTML = html;
  if (window.NPSpring) NPSpring.num(el.querySelector('.cat-result__count'), count);
}

// Прокрутить так, чтобы начало выдачи оказалось сразу под липкой лентой (только если ушли ниже)
function scrollToResults(smooth) {
  const nav = document.getElementById('catNav');
  const anchor = document.getElementById('catResult') || document.getElementById('productsGrid');
  if (!anchor) return;
  const stick = nav && !nav.hidden ? (parseFloat(getComputedStyle(nav).top) || 0) + nav.offsetHeight : 0;
  const y = Math.max(0, Math.round(window.pageYOffset + anchor.getBoundingClientRect().top - stick - 8));
  if (window.pageYOffset <= y + 1) return;
  if (smooth && !reduceMotion()) { window.scrollTo({ top: y, behavior: 'smooth' }); return; }
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, y);
  root.style.scrollBehavior = prev;
}

// ===== View Transitions: NP.swap(updateFn, type) — type: 'brand' | 'species' | 'section' =====
// MOTION стилизует ::view-transition-*(np-grid / np-sections); имена элементам даёт css/catalog.css по html[data-vt].
let vtCurrent = null;
// View Transitions отключены: снимок страницы замораживал ввод на 0.2–0.5s (особенно на телефонах).
// Лёгкий путь — индикатор скользит сразу (композитор), сетка гаснет 150ms, новая выдача поднимается каскадом.
const VT_ENABLED = false;
function vtAvailable() {
  return VT_ENABLED && typeof document.startViewTransition === 'function' && !reduceMotion() && !document.hidden;
}
// Первые карточки новой выдачи — декодированы до снимка (иначе пустые карточки «дозаполняются» после кроссфейда)
function firstImagesReady(grid) {
  const imgs = grid ? Array.from(grid.querySelectorAll('img')).slice(0, 8) : [];
  if (!imgs.length) return Promise.resolve();
  return Promise.race([
    Promise.all(imgs.map(i => (typeof i.decode === 'function' ? i.decode() : Promise.resolve()).catch(() => {}))),
    new Promise(r => setTimeout(r, 80))    // не больше 80ms (обычно 30–60ms) — ввод не должен «зависать»
  ]);
}
// opts: {keyboard, after} — after() выполняется последним (в т.ч. внутри перехода, когда снимок новой выдачи готов):
// там запускаем скольжение индикаторов, чтобы оно началось на первом видимом кадре, а не «проглатывалось» заморозкой
function swap(updateFn, type, opts) {
  const keyboard = !!(opts && opts.keyboard);
  const after = (opts && opts.after) || null;
  if (keyboard || !vtAvailable()) { updateFn(); if (after) after(); return null; }
  const root = document.documentElement;
  root.dataset.vt = type || 'brand';
  const grid = document.getElementById('productsGrid');
  const top0 = grid ? grid.getBoundingClientRect().top : 0;
  let t;
  try {
    t = document.startViewTransition(async () => {
      updateFn();
      // обновление могло прокрутить страницу к началу выдачи: сдвигаем старый снимок на ту же величину (styles.css)
      if (grid) root.style.setProperty('--vt-dy', (top0 - grid.getBoundingClientRect().top).toFixed(1) + 'px');
      await firstImagesReady(grid);
      if (after) after();
    });
  } catch (e) {
    delete root.dataset.vt;
    updateFn();
    if (after) after();
    return null;
  }
  vtCurrent = t;
  const clear = () => { if (vtCurrent === t) { vtCurrent = null; delete root.dataset.vt; root.style.removeProperty('--vt-dy'); } };
  t.finished.then(clear, clear);
  if (t.ready) t.ready.catch(() => {});
  if (t.updateCallbackDone) t.updateCallbackDone.catch(() => {});
  return t;
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

// ===== Глубокие ссылки: #brand=np&sec=dry, #p=<id> (а также старые #tpl). #q= принадлежит поиску =====
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
    if (k === 'sec' && /^[\w-]+$/.test(v)) out.sec = v;
  });
  return out;
}
function setHashState() {
  const raw = location.hash.slice(1);
  const parts = (raw && !VALID_BRANDS.includes(raw) ? raw.split('&') : [])
    .filter(p => p && !/^(brand|p|sec)=/.test(p) && p.indexOf('=') > 0);
  if (currentSection && currentSection !== 'all') parts.unshift('sec=' + encodeURIComponent(currentSection));
  parts.unshift('brand=' + currentBrand);
  try { history.replaceState(null, '', '#' + parts.join('&')); } catch (e) { /* file:// quirks */ }
}

// Контроллер каталога (заполняется при инициализации products.html)
const NPCtl = {};

function openProduct(id, opts) {
  const found = findById(id);
  if (!found) return false;
  const grid = document.getElementById('productsGrid');
  if (!grid) { window.location.href = 'products.html#p=' + encodeURIComponent(id); return true; }
  if (found.brand !== currentBrand && NPCtl.activateBrand) NPCtl.activateBrand(found.brand, { animate: false, updateHash: true, keepScroll: true });
  flushRender();
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
  section: () => currentSection,
  setSection: (id) => { if (NPCtl.setSection) NPCtl.setSection(id, { animate: true }); },
  sections: (brand, species) => sectionsFor(brand || currentBrand, species || currentSpecies)
    .map(s => ({ id: s.id, label: s.def, count: s.count })),
  swap: (updateFn, type, opts) => swap(updateFn, type, opts),
  catalog: () => buildCatalog(),
  productId,
  findById,
  openProduct,
  // instant: no exit motion — e.g. the bottom sheet was swiped away and has already left the screen
  closeModal: (instant) => closeProductModal(!!instant),
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

// ===== Каталог: вкладки брендов, фильтр вида, разделы, модалка =====
function initCatalog(initial) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const tabsWrap = document.getElementById('tabs');
  const tabs = Array.from(document.querySelectorAll('#tabs .tab'));
  const speciesWrap = document.getElementById('species');
  const spBtns = speciesWrap ? Array.from(speciesWrap.querySelectorAll('.species__btn')) : [];
  const nav = document.getElementById('catNav');
  const bar = document.getElementById('catalogBar');
  let brandGen = 0;
  let leaveAnims = [];

  const cardCount = () => RENDER_COUNT || grid.querySelectorAll('[data-id]').length;
  const announceCount = () => announce(tr('live.count', { n: cardCount() }) + (resultNote ? '. ' + resultNote : ''));

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

  // opts: {animate, updateHash, section, keyboard}
  function activateBrand(brand, opts) {
    opts = opts || {};
    if (!VALID_BRANDS.includes(brand)) return;
    const changed = currentBrand !== brand;
    if (!changed) {
      if (opts.section && opts.section !== currentSection) setSection(opts.section, { animate: opts.animate, updateHash: opts.updateHash });
      else if (opts.updateHash) setHashState();
      return;
    }
    currentBrand = brand;
    currentSection = opts.section || 'all';
    // выбранный вид пропал у нового бренда — возвращаемся к «Все»
    if (currentSpecies !== 'all' && countFor(brand, currentSpecies) === 0) currentSpecies = 'all';
    const g = ++brandGen;
    const useVT = !!opts.animate && vtAvailable();
    // Состояние вкладок + скольжение индикаторов. С View Transition — в конце обновления (swap → after),
    // иначе скольжение стартует во время «заморозки» кадров и выглядит прыжком.
    // The page tint glides from the tap (body[data-brand]); the grid keeps its own brand values until its new content
    // arrives (renderProducts sets #productsGrid[data-brand]), so this restyles the page around it, not the old grid.
    const paintTabs = () => {
      document.body.setAttribute('data-brand', currentBrand);
      syncTabs(); syncSpecies();
      placeIndicator(tabsWrap, 'tabs__indicator', !opts.animate);
      placeIndicator(speciesWrap, 'species__indicator', !opts.animate);
    };
    if (!useVT) paintTabs();
    let finished = false;
    const done = () => {
      if (g !== brandGen || finished) return;
      finished = true;
      const tail = opts.animate ? tailRecord() : null;
      renderProducts(currentBrand, getLang(), !!opts.animate);
      if (!useVT) placeIndicator(speciesWrap, 'species__indicator', !opts.animate);
      if (opts.updateHash) setHashState();
      if (!opts.keepScroll) scrollToResults(false);
      // a new brand shares no blocks with the old one: the old content has faded out, the new one rises in a
      // spring staircase, the chip row fades back in, ranges + footer glide to the new page height
      if (opts.animate && !useVT && sprOK()) {
        const units = screenUnits(grid), dy = tailMeasure(tail);
        enterUnits(units);
        if (nav && leaveAnims.length) NPSpring.enter(nav, { opacity: 0 }, [1, 0.3]);
        tailPlay(dy);
      }
      cancelLeave();
      announceCount();
    };
    if (useVT) {
      cancelLeave();
      swap(done, 'brand', { after: () => { if (g === brandGen) paintTabs(); } });
    } else if (opts.animate && typeof grid.animate === 'function' && !reduceMotion()) {
      // уход 150ms (только прозрачность), затем рендер и каскад; повторный клик перенацеливает — the fade that
      // is already running keeps going from where it is (no flash back to full opacity)
      if (!leaveAnims.length) {
        const els = [grid].concat(nav ? [nav] : []);
        els.forEach(el => leaveAnims.push(el.animate({ opacity: 0 }, { duration: 150, easing: EASE_OUT, fill: 'forwards' })));
      }
      leaveAnims[0].onfinish = done;
      if (leaveAnims[0].playState === 'finished') done();
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
    const useVT = !!opts.animate && vtAvailable();
    const paintSpecies = () => { syncSpecies(); placeIndicator(speciesWrap, 'species__indicator', !opts.animate); };
    if (!useVT) paintSpecies();
    const update = () => { renderProducts(currentBrand, getLang(), !!opts.animate); setHashState(); announceCount(); };
    if (useVT) swap(update, 'species', { after: () => { if (currentSpecies === sp) paintSpecies(); } });
    else morphGrid(update, !!opts.animate);
  }

  // Раздел-фильтр: чип фильтрует выдачу (не якорь) и возвращает к началу сетки
  function setSection(id, opts) {
    opts = opts || {};
    const secs = sectionsFor(currentBrand, currentSpecies);
    const ok = id === 'all' || secs.some(s => s.id === id && s.count);
    if (!ok) return;
    if (id === currentSection) { scrollToResults(!!opts.animate); return; }
    const useVT = !!opts.animate && vtAvailable();
    const update = () => {
      currentSection = id;
      renderProducts(currentBrand, getLang(), !!opts.animate);
      if (opts.updateHash !== false) setHashState();
      // back to the start of the results at once: morphGrid compares screen positions before / after, so the
      // blocks on screen glide, rise or fade in place and the jump itself is never seen
      scrollToResults(false);
      announceCount();
    };
    if (useVT) swap(update, 'section');
    else morphGrid(update, !!opts.animate);
  }
  NPCtl.activateBrand = activateBrand;
  NPCtl.setSpecies = setSpecies;
  NPCtl.setSection = setSection;

  // Роуминг-табиндекс + стрелки/Home/End (с клавиатуры — мгновенно)
  function rovingKeys(items, isEnabled, onPick) {
    return (e) => {
      const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
      if (!keys.includes(e.key)) return;
      const list = (typeof items === 'function' ? items() : items).filter(isEnabled);
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
      t => activateBrand(t.getAttribute('data-brand'), { animate: false, updateHash: true, keepScroll: true })));
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
  // Чипы разделов: клик фильтрует; стрелки двигают фокус (Enter/Space — выбрать, мгновенно)
  if (nav) {
    nav.addEventListener('click', e => {
      if (e.target.closest('.cat-nav__up')) {
        if (bar) bar.scrollIntoView({ behavior: (reduceMotion() || e.detail === 0) ? 'auto' : 'smooth', block: 'start' });
        const t = tabsWrap && tabsWrap.querySelector('.tab.is-active');
        if (t) t.focus({ preventScroll: true });
        return;
      }
      const chip = e.target.closest('.cat-chip');
      if (!chip || !nav.contains(chip)) return;
      if (chip.getAttribute('aria-disabled') === 'true') { e.preventDefault(); return; }
      setSection(chip.getAttribute('data-sec'), { animate: e.detail !== 0 });
    });
    nav.addEventListener('keydown', rovingKeys(() => Array.from(nav.querySelectorAll('.cat-chip')),
      c => c.getAttribute('aria-disabled') !== 'true',
      c => {
        nav.querySelectorAll('.cat-chip').forEach(x => { x.tabIndex = x === c ? 0 : -1; });
        revealChip(c, true);
      }));
    nav.addEventListener('scroll', () => updateNavFades(), { capture: true, passive: true });
  }
  const result = document.getElementById('catResult');
  if (result) {
    result.addEventListener('click', e => {
      const b = e.target.closest('.cat-result__reset');
      if (b) setSection('all', { animate: e.detail !== 0 });
    });
  }

  // Scroll-spy для режима «Все» (rAF-троттлинг)
  let spyRaf = 0;
  window.addEventListener('scroll', () => {
    if (spyRaf) return;
    spyRaf = requestAnimationFrame(() => { spyRaf = 0; spySections(); });
  }, { passive: true });

  const relabel = () => {
    if (tabsWrap) tabsWrap.setAttribute('aria-label', tr('a11y.brands'));
    if (speciesWrap) speciesWrap.setAttribute('aria-label', tr('a11y.species'));
    const close = document.querySelector('#productModal .pmodal__close');
    if (close) close.setAttribute('aria-label', tr('a11y.close'));
    placeIndicators(true);
  };
  syncTabs(); syncSpecies(); relabel();
  LANG_HOOKS.push(relabel);

  // Высота липкого тулбара → --bar-h (лента разделов прилипает сразу под ним)
  // Пишем 0, если тулбар не липкий (≤720px он static) — иначе scroll-padding и лента съезжают вниз.
  // --chips-h: высота липкой ленты разделов (0, если скрыта) → входит в --sticky-offset (tokens.css).
  const setBarH = () => {
    const rs = document.documentElement.style;
    if (bar) rs.setProperty('--bar-h', (getComputedStyle(bar).position === 'sticky' ? bar.offsetHeight : 0) + 'px');
    if (nav) rs.setProperty('--chips-h', (!nav.hidden && getComputedStyle(nav).position === 'sticky' ? nav.offsetHeight : 0) + 'px');
  };
  setBarH();

  // Индикаторы: при ресайзе и после загрузки шрифтов — без анимации
  if ('ResizeObserver' in window) {
    let raf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { setBarH(); placeIndicators(true); updateNavFades(); });
    });
    if (tabsWrap) ro.observe(tabsWrap);
    if (speciesWrap) ro.observe(speciesWrap);
    if (nav) ro.observe(nav);
    if (bar) ro.observe(bar);
  } else {
    window.addEventListener('resize', () => { setBarH(); placeIndicators(true); updateNavFades(); });
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { setBarH(); placeIndicators(true); });

  // Открытие карточки товара (мышь / Enter / Space); кнопки внутри карточки (избранное) не открывают модалку
  const openFromCard = (card, keyboard) => {
    const pid = +card.getAttribute('data-pid');
    const item = MODAL_ITEMS[pid];
    if (!item) return;
    openProductModal(item, getLang(), MODAL_KEYS[pid], { id: card.getAttribute('data-id'), brand: currentBrand, card, keyboard });
  };
  grid.addEventListener('click', e => {
    const x = e.target.closest('.cat-xlink');
    if (x) { setSection(x.getAttribute('data-sec'), { animate: e.detail !== 0 }); return; }
    const card = e.target.closest('[data-pid]');
    if (!card) return;
    const ctl = e.target.closest('button, a, input, select, textarea, .product__actions');
    if (ctl && card.contains(ctl) && ctl !== card && !ctl.classList.contains('product__open')) return;
    openFromCard(card, e.detail === 0);
  });
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('[data-pid]');
    if (!card || e.target !== card) return;
    e.preventDefault();
    openFromCard(card, true);
  });

  // Desktop: cards lean toward the cursor (≤4° at the edge) with a soft glare (.spr-glare); Tauro bottles lean their image —
  // not .tpl-bottle__img, which floats (4.6s) on its own transform. NPSpring.tilt listens to fine pointers only and
  // goes flat while the page scrolls. Bottles also get the spring press (rows on phones, columns on desktop).
  if (window.NPSpring) {
    NPSpring.press.add('.tpl-bottle');
    NPSpring.tilt(grid, '.product.is-clickable, .tpl-bottle__img img', 8);   // ±4° at the edges
  }

  // Прямые ссылки после первого рендера
  window.addEventListener('hashchange', () => {
    const h = parseHash();
    if (h.brand && h.brand !== currentBrand) activateBrand(h.brand, { animate: true, updateHash: false, section: h.sec });
    else if (h.sec && h.sec !== currentSection) setSection(h.sec, { animate: true, updateHash: false });
    if (h.p) openProduct(h.p);
  });
  if (initial.p) openProduct(initial.p);
}

function initModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.inert = true;
  // the zoom from the card: a slightly underdamped spring (a big surface — no visible bounce, but alive)
  if (window.NPSpring && NPSpring.ok()) {
    const sp = NPSpring.ease(0.86, 0.44);
    modal.style.setProperty('--pm-spring', sp.easing);
    modal.style.setProperty('--pm-spring-dur', sp.duration + 'ms');
  }
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
  // Главная (.hero--home): мягкий кроссфейд 1.04→1 через WAAPI — прерываемый: новый слайд проявляется
  // поверх текущей картинки (незавершённый слайд фиксирует свою прозрачность, а не «прыгает» до 1)
  const fadeMode = !!(hero && hero.classList.contains('hero--home'));
  let fadeAnim = null;
  function fadeTo(n, instant) {
    const g = ++gen;
    const incoming = slides[n];
    if (fadeAnim) {
      if (fadeAnim.playState === 'running') { try { fadeAnim.commitStyles(); } catch (e) { /* not rendered */ } }
      fadeAnim.cancel();
      fadeAnim = null;
    }
    cur = n;
    const clear = () => slides.forEach((s, i) => {
      s.style.transition = 'none';
      s.style.zIndex = i === cur ? '1' : '0';
      s.style.opacity = ''; s.style.transform = '';
    });
    if (instant || reduce || typeof incoming.animate !== 'function') { clear(); return; }
    const top = Math.max.apply(null, slides.map(s => +s.style.zIndex || 0));
    const from = parseFloat(incoming.style.opacity);
    incoming.style.opacity = ''; incoming.style.transform = '';
    incoming.style.zIndex = String(top + 1);
    fadeAnim = incoming.animate(
      [{ opacity: isNaN(from) ? 0 : from, transform: 'scale(1.04)' }, { opacity: 1, transform: 'none' }],
      { duration: 600, easing: EASE_OUT, fill: 'both' });
    const a = fadeAnim;
    a.onfinish = () => { if (g !== gen || a !== fadeAnim) return; clear(); a.cancel(); fadeAnim = null; };
  }
  function wipeTo(n, dir, instant) {
    if (n === cur || !slides[n]) return;
    if (fadeMode) { fadeTo(n, instant); return; }
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
  if (initial.sec && initial.brand) currentSection = initial.sec;   // проверяется при рендере
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

  // Первый кадр отрисован без переходов (html.is-booting) — дальше включаем их
  const booted = () => document.documentElement.classList.remove('is-booting');
  requestAnimationFrame(() => requestAnimationFrame(booted));
  setTimeout(booted, 600);   // фоновая вкладка: rAF не идёт
});
