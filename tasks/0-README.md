# Распределение задач по трём нейросетям

| № | Кому | Что | Файлы (только их!) |
|---|------|-----|--------------------|
| 1 | **Claude** (эта сессия) | Каталог: место на экране, собаки выше кошек, линейки шерсти в ряд, интерактивная «собачка возраста» | `products.html`, `js/main.js`, `js/motion-catalog.js`, `css/catalog.css`, `css/mobile-catalog.css`, `css/motion-catalog.css`, `css/styles.css`, новые файлы |
| 2 | **Нейросеть с zip-архивом** | Данные и тексты: фасовки (и банки консервов), названия, правки по скриншотам клиента, «Амбассадоры», слово sürfələridir | `js/np-official.js`, `js/translations.js`, `js/descriptions.js`, `js/catalog.js` |
| 3 | **Третья нейросеть** | Главная страница: слайды, карточки брендов, калькулятор, карта | `index.html`, `js/home.js`, `js/motion-home.js`, `css/home.css`, `css/mobile-home.css`, `css/motion-home.css`, `js/feed-calc.js`, `css/feed-calc.css`, `assets/hero/` |

Файлы не пересекаются — результаты можно сложить в одну папку без конфликтов.
Версии `?v=N` в подключениях никто не меняет: их поднимают одним шагом в конце, после объединения.
Если работа идёт через git — у каждой своя ветка от `claude/natures-protection-multilingual-1vd1ni`: `task-catalog`, `task-data`, `task-home`.
