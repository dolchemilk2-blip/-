# Задание 2 — Данные и тексты (для нейросети, которая работает с zip-архивом)

## Контекст
Статичный сайт (HTML/CSS/JS) дистрибьютора Nature's Protection, три языка az/ru/en. Тебе нужны только 4 файла: `js/np-official.js`, `js/translations.js`, `js/descriptions.js`, `js/catalog.js`. **Меняй только их и верни изменённые файлы целиком.** Остальные файлы параллельно правят другие нейросети.

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

Тексты Tauro лежат в `js/catalog.js` и/или `js/translations.js` — искать поиском по словам.

### G6. Misoko (`js/catalog.js`)
- «Yengəc» — это воротник, не игрушка. Убрать из игрушек и перенести в раздел «Gəzinti və gigiyena» как воротник («yaxalıq»), на всех языках.
- «Suiti» → «Su iti» (раздельно).
- «Krossovka» → «Ayaqqabı».
- Спрей «Ləkə və qoxu təmizləyici sprey»: указать три вида — лимон, лаванда, без запаха (az: limon, lavanda, qoxusuz) — в описании и тегах, на всех языках.

## Проверка
- Все 4 файла — валидный JavaScript, например `node -e "require('vm').runInNewContext(require('fs').readFileSync('js/np-official.js','utf8'))"`.
- Ключи в `np-official.js` и `descriptions.js` совпадают с `cat` и `name` товаров.
- Верни список того, что изменил.
