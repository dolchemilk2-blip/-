# Задание 2 — Данные и тексты. Для Antigravity, 4 агента

## Контекст
Статичный сайт (HTML/CSS/JS, без сборки) дистрибьютора Nature's Protection в Баку, три языка az/ru/en. Тебе нужны только 5 файлов: `js/translations.js`, `js/catalog.js`, `js/tpl-system.js`, `js/np-official.js`, `js/descriptions.js`.

**Меняй только их, прямо в папке проекта.** Остальные файлы параллельно правят другие нейросети: каталог (`products.html`, `js/main.js`) — Claude, главную (`index.html`, `js/home.js`, `js/feed-calc.js`) — GPT. Версии `?v=N` в HTML не трогай.

`js/np-official.js` весит 1,7 МБ, поэтому правь точечно: поиском по ключу. Не переписывай и не переформатируй файл целиком.

Скриншоты клиента с пометками лежат в zip-архиве (например в `tasks/zip/`). Пункт G ниже — их расшифровка. Если на скриншоте видно что-то, чего нет в списке, сделай это тоже и допиши в отчёт.

## Как разделить на агентов
Файлы между агентами не пересекаются: каждый файл правит только один агент.

| Агент | Файлы | Пункты |
|---|---|---|
| **1 — тексты Nature's Protection** | `js/translations.js` | B, C (для товаров NP), D, E, F, G1 (только тексты: размер банки в описании, «Game» из названия), G2 (если Flowpack есть здесь), G3 (названия, удаление двух товаров из `PRODUCTS`) |
| **2 — другие бренды** | `js/catalog.js`, `js/tpl-system.js` | C (для Araton, Tauro, Misoko), E (если есть здесь), G2 («Pauçlar» → «Jele» — это `catalog.js`, строки с `id: "pouches"` и `id: "wet"`), G4 (названия, «<1 yaş», удаление пауча), G5, G6 |
| **3 — фасовки и ключи** | `js/np-official.js`, `js/descriptions.js` | A, G1 (`packs`), G4 (фасовка Araton 15 кг), переименование ключей, удаление записей удалённых товаров |
| **4 — проверка** | ничего не правит | Раздел «Проверка» в конце |

**Порядок работы:**
1. Агенты 1 и 2 работают параллельно.
2. Агент 3 сразу делает фасовки (пункт A) по текущим ключам.
3. Агенты 1 и 2 записывают каждое изменение английского `en.name` или `en.cat` товара Nature's Protection в файл `tasks/renames.md` строкой `старый ключ → новый ключ`. Ключ: `"<cats|dogs>||<en.cat>||<en.name>"`. Удалённые товары — строкой `старый ключ → УДАЛЁН`.
4. Когда агенты 1 и 2 закончат, агент 3 по `tasks/renames.md` переименовывает или удаляет ключи в `np-official.js` и `descriptions.js`. Значение под ключом не меняется, только сам ключ.
5. Агент 4 проверяет всё в конце.

У Araton ключи в `np-official.js` вида `"araton:assets/products/art-dog-lamb.webp"` (по картинке). При переименовании товаров Araton эти ключи **не меняются**.

Как устроено:
- Товары Nature's Protection — объект `PRODUCTS` в `js/translations.js` (`cats` / `dogs` → группы → `items`, у каждого товара `az/ru/en` с полями `cat`, `name`, `desc`, `tags`). Araton, Tauro, Misoko — `BRANDS_EXTRA` в `js/catalog.js`.
- Официальные данные — `js/np-official.js`: `const NP_OFFICIAL = {...}`, ключ `"<species>||<en.cat>||<en.name>"` (например `"dogs||Superior Care · White Dogs · Adult||White Dogs Adult — Lamb"`). Фасовки — поле `packs`, например `["1.5 kg","10 kg"]`.
- Полные описания — `js/descriptions.js`, ключи такие же.
- **Важно:** если меняешь английское название (`en.name`) или категорию (`en.cat`), переименуй ключ и в `np-official.js`, и в `descriptions.js`, иначе пропадут описания.

## A. Фасовки (поле `packs` в `js/np-official.js`)
Собаки, Superior Care White Dogs:
- All Life Stage — White Fish и All Life Stage — Insect: убрать 4 кг → `["10 kg"]`.
- Starter — Salmon и обе Junior: только 1,5 и 10 кг (проверить).
- Adult — Lamb: убрать 4 кг → 1,5 и 10.
- Adult — White Fish: добавить 1,5 кг → 1,5 и 10.
- Adult — Salmon: убрать 17 кг → 1,5 и 10.
- Adult — Insect: исправить `"10kg"` на `"10 kg"`.
- Red Coat Junior — Salmon & Krill: 1,5 и 10 кг (проверить).

Кошки, сухой корм:
- Kitten: 2 и 7 кг.
- Indoor: убрать 400 г → 2 и 7.
- Sensitive Digestion: только 7 кг.
- Urinary Formula-S: только 7 кг.
- Sterilised: убрать 400 г → 2 и 7.
- Superior Care White / Red / Dark Cats: убрать 400 г → 1,5 и 7.

Собаки, секция «Сухой корм» (по порядку, как в каталоге):
1. Junior Lamb — должна быть 7,5 кг (уже есть — оставить).
2. Weight Control Sterilised: убрать 4 кг → только 12.
3. Mini Adult: убрать 500 г → 2 и 7,5.
4. Maxi Adult: убрать 4 кг → только 12.
5. Adult Lamb: оставить только 12 кг.

Общее правило: у сухих кормов вариант 400 г убрать везде. У консервов фасовки — по таблице ниже (пункт G1).

## B. Название для тёмной шерсти (собаки)
Сухой корм «Dark Coat — All breeds» (Superior Care, собаки): добавить в название мясо домашней птицы:
- en: `Dark Coat — Poultry`
- ru: `Dark Coat — Мясо домашней птицы`
- az: `Dark Coat — Poultry` (см. пункт C)

Переименовать ключ в `np-official.js` и `descriptions.js`.

## C. Азербайджанская версия: названия по-английски
У **всех** товаров всех брендов поле `az.name` сделать таким же, как английское `en.name` (например «White Cats — Siyənək» → «White Cats — Herring»). Описания (`az.desc`), теги и категории остаются на азербайджанском.

## D. «Life Long MZG»
- В карточках товаров (поле `cat`) все товары MZG пометить как «Vitamins» / «Витамины» / «Vitaminlər» — так же, как остальные витамины.
- Название линейки на главной (`RANGES` в `js/translations.js`): «Life Long MZG» → «Supplements».
- Слово «MicroZeoGen» в описаниях не трогать.

## E. «Послы» → «Амбассадоры» на всех языках
- ru: `tab.ambassadors`: «Послы» → «Амбассадоры». В текстах «посол бренда» → «амбассадор бренда».
- az: «Səfirlər» → «Ambassadorlar», «səfir» → «ambassador».
- en: «Ambassadors» (оставить).

## F. Убрать слово «sürfələridir»
`js/translations.js`, ключ `values.v3.text` (az): «…ət, balıq və ya həşərat sürfələridir.» → «…ət, balıq və ya həşərat.».

## G. Правки клиента по скриншотам (архив с пометками)

### G1. Консервы для собак — указать размеры банок
Размер вписать и в `packs` (`js/np-official.js`), и в конец описания, где сейчас «200 г.»:
| Товар (ru) | Фасовки |
|---|---|
| Ягнёнок (Puppy) | 200 г, 400 г |
| Телятина (Puppy) | 200 г, 400 г |
| Lamb — Взрослые собаки | 200 г, 400 г |
| Говядина и индейка | 200 г, 400 г |
| Дичь (Game) | 200 г, 400 г; из названия убрать слово «Game» на всех языках → «Дичь» |
| Телятина и утка (Small Breed) | 200 г, 400 г |
| Индейка (высокая банка) | только 400 г |
| White Dogs Wellness Soup — Тунец и лосось | 140 мл |

### G2. Названия разделов и категорий
- Az: «Pauçlar» (паучи) → «Jele».
- Категория «Superior Care · Flowpack» → «Superior Care · Snacks» на всех языках. Ключи в `np-official.js` и `descriptions.js` переименовать.

### G3. Nature's Protection — добавки
- Malt Paste: вторую пасту (Anti-Hairball Malt Paste) явно подписать как пасту для стерилизованных кошек — в названии.
- Healthy Pregnancy — это витамины, категория «Vitamins» (см. пункт D).
- **Удалить товары:** «MicroZeoGen — Detox & Calcium» (кошки) и «Recovery & Performance» (собаки). Удалить и их записи в `np-official.js` и `descriptions.js`.

### G4. Araton (`js/catalog.js`)
- Названия сухих кормов для собак:
  - Lamb → «Adult Lamb»;
  - Active → «Adult Active»;
  - Maxi → «Adult Maxi»;
  - Poultry → «Adult Poultry»;
  - Junior → «Junior Poultry».
- Фасовка сухих кормов Araton — одна: 15 кг (`packs` в `js/np-official.js` по ключам `araton:…`).
- Az: в подписи возраста «<1 il» → «<1 yaş» (везде, где «il» про возраст).
- **Удалить товар:** пауч для котят «Kitten — Turkey & Chicken».

### G5. Tauro Pro Line, азербайджанские тексты
- «bariyeri» → «bariyer».
- Убрать слова «itaətkar və».
- «ağladıcı» → «ağardıcı».
- Заголовок системы «Tökülməyə qarşı və tük böyüməsi üçün — Fur Growth · Step 1·2·3» → «Tük tökülməyə qarşı və tük böyüməsi üçün».
- «Keçələşməyə» → «Dolaşıqlaşmağa».

Тексты Tauro (описания степов, заголовки систем) лежат в `js/tpl-system.js`, часть может быть в `js/catalog.js`. Ищи поиском по словам, без учёта регистра: «Keçələşmə», «Bariyerin», «bariyerini» — правь все формы слова по смыслу.

### G6. Misoko (`js/catalog.js`)
- «Yengec» (в файле написано без ə; правильно «Yengəc») — это воротник, не игрушка. Убрать из игрушек и перенести в раздел «Gəzinti və gigiyena» как воротник («yaxalıq»), на всех языках.
- «Suiti» → «Su iti» (раздельно).
- «Krossovka» → «Ayaqqabı».
- Спрей «Ləkə və qoxu təmizləyici sprey»: указать три вида — лимон, лаванда, без запаха (az: limon, lavanda, qoxusuz) — в описании и тегах, на всех языках.

## Проверка (агент 4)
1. **Скрипт ключей.** Запусти `node tasks/check-keys.js`. Он проверяет:
   - все 4 файла — валидный JS;
   - у каждого товара Nature's Protection есть запись в `np-official.js` и описание в `descriptions.js`;
   - у сухих кормов нет 400 г;
   - `az.name` совпадает с `en.name`.

   До правок скрипт показывает около 170 проблем (это то, что надо исправить), после — «Всё в порядке».
   - Строки `WARN` про 3 старых ключа в `descriptions.js` были ещё до правок, их можно не трогать.
   - Если появился `WARN` со старым ключом и одновременно `FAIL` с новым, ключ забыли переименовать.
2. **Браузер.** Открой `products.html`. Пройди все 4 бренда (вкладки сверху) и все 3 языка (переключатель в шапке). Открой несколько карточек: окно товара показывает описание и фасовки. В консоли нет ошибок.
3. **Скриншоты.** Сверь результат со скриншотами клиента из zip: каждая пометка учтена.
4. **Отчёт.** Верни список изменений по пунктам A–G. Отдельно — что не получилось или вызвало сомнение.
