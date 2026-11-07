// ===== Подбор корма: вид → порода → возраст → окрас → особенности → результат =====
// Открывается с любой кнопки [data-finder] (data-finder="dogs|cats" — сразу со 2-го шага), по ссылке #finder
// и из нижней панели на телефоне. Результат — товары каталога с объяснением, зачем каждый подходит.
// Сайт не обещает лечение: тексты говорят «поддерживает / помогает», ветеринарные диеты — только по совету врача.
(function () {
  'use strict';

  const WA = '994102200525';

  // ---------- Тексты ----------
  const T = {
    az: {
      title: 'Qida seçimi', step: 'Addım {n}/{m}', back: 'Geri', close: 'Bağla', next: 'Davam et', show: 'Nəticəni göstər',
      restart: 'Yenidən başla', details: 'Ətraflı', edit: 'Dəyiş', wa: 'WhatsApp-da məsləhət',
      'q.species': 'Heyvanınız kimdir?', 'q.breed': 'Cinsini seçin', 'q.size': 'Böyüyəndə ölçüsü necədir?',
      'q.age': 'Neçə yaşı var?', 'q.coat': 'Tükünün rəngi', 'q.feats': 'Nəyə diqqət etmək istəyirsiniz?', 'q.results': 'Sizin üçün seçim',
      'h.breed': 'Cinsi bilmirsinizsə, «Cinssiz / metis» seçin.', 'h.coat': 'Superior Care xəttini tükün rənginə görə seçirik.',
      'h.coatBreed': '{breed} adətən: {coat}', 'h.feats': 'Bir neçəsini seçə bilərsiniz. Heç biri yoxdursa, sadəcə davam edin.',
      'sp.dogs': 'İt', 'sp.cats': 'Pişik', search: 'Cinsi axtarın', mixed: 'Cinssiz / metis', nothing: 'Belə cins tapılmadı — «Cinssiz / metis» seçin',
      'size.mini': 'Kiçik', 'size.mini.s': '10 kq-a qədər', 'size.medium': 'Orta', 'size.medium.s': '10–25 kq', 'size.large': 'İri', 'size.large.s': '25 kq-dan çox',
      'age.starter': '2 aya qədər', 'age.starter.s': 'Yenidoğulmuş', 'age.junior': '2–12 ay', 'age.junior.L': '2–18 ay',
      'age.junior.s.dogs': 'Küçük', 'age.junior.s.cats': 'Pişik balası', 'age.adult': '1–7 yaş', 'age.adult.L': '1,5–7 yaş', 'age.adult.s': 'Yetkin',
      'age.senior': '7 yaşdan çox', 'age.senior.s': 'Yaşlı',
      'coat.white': 'Ağ və ya açıq', 'coat.red': 'Kürən və ya qəhvəyi', 'coat.dark': 'Qara və ya tünd', 'coat.other': 'Başqa / ala-bula',
      'f.tears': 'Gözləri yaşarır, göz altında ləkələr', 'f.digestion': 'Həssas həzm', 'f.skin': 'Dəri və tük: qaşınma, tutqunluq',
      'f.allergy': 'Qidaya həssaslıq', 'f.weight': 'Artıq çəki', 'f.sterilised': 'Sterilizə olunub', 'f.joints': 'Oynaqlar, hərəkətlilik',
      'f.teeth': 'Dişlər, ağızdan iy', 'f.active': 'Çox aktivdir', 'f.picky': 'Seçici iştah', 'f.calm': 'Stress, narahatlıq',
      'f.urinary': 'Sidik yolları', 'f.hairball': 'Tük topaları', 'f.indoor': 'Yalnız evdə yaşayır', 'f.outdoor': 'Çölə çıxır',
      'g.dry': 'Əsas quru qida', 'g.wet': 'Yaş qida', 'g.extra': 'Əlavə qayğı', 'g.vet': 'Baytar pəhrizləri',
      'g.vet.note': 'Yalnız baytar həkimin tövsiyəsi ilə verilir.', 'tag.vet': 'Baytar pəhrizi', 'tag.alt': 'Sərfəli alternativ', 'tag.care': 'Qulluq',
      'why.coat.white': 'Ağ və açıq tük üçün xətt: göz ətrafında ləkələrin azalmasına kömək edə bilər.',
      'why.coat.red': 'Kürən və qəhvəyi tük üçün: RCE kompleksi rəngin doyğunluğunu dəstəkləyir.',
      'why.coat.dark': 'Qara və tünd tük üçün: DCE kompleksi tünd rəngi qoruyur.',
      'why.coat.reddark': 'Kürən və tünd tüklü itlər üçün xətt.',
      'why.size.mini': 'Kiçik cinslər (1–10 kq) üçün nəzərdə tutulub.', 'why.size.large': 'İri cinslər (25 kq-dan) üçün nəzərdə tutulub.',
      'why.stage.starter': 'Ən kiçik balalar üçün: ilk qida və keçid dövrü.', 'why.stage.junior': 'Bala dövründə sağlam böyüməni dəstəkləyir.',
      'why.stage.junior.L': 'İri cinslərdə bala dövrü 18 aya qədər davam edir.', 'why.stage.adult': 'Yetkin heyvan üçün gündəlik tam rasion.',
      'why.stage.senior': 'Gündəlik tam rasion; yaşlı heyvanlar üçün oynaqlara əlavə qayğı aşağıdadır.',
      'why.f.tears': 'Göz ətrafındakı tükün təmiz və açıq qalmasına kömək edə bilər.',
      'why.f.digestion': 'Həssas həzm nəzərə alınıb: yüngül, asan həzm olunan tərkib.',
      'why.f.skin': 'Sağlam dəri və parlaq tük üçün nəzərdə tutulub.',
      'why.f.allergy': 'Alternativ protein mənbəyi — qidaya həssas heyvanlar üçün.',
      'why.f.weight': 'Kalorisi nəzarətdədir — çəkiyə nəzarət üçün.',
      'why.f.sterilised': 'Sterilizasiyadan sonrakı ehtiyaclar nəzərə alınıb.',
      'why.f.joints': 'Oynaqların və hərəkətliliyin dəstəklənməsi üçün.',
      'why.f.teeth': 'Gündəlik ağız boşluğu qulluğu: ərpin azalmasına kömək edir.',
      'why.f.active': 'Aktiv heyvanlar üçün enerji və dözümlülük.',
      'why.f.picky': 'Ətirli yaş qida — iştahı az olanlar üçün yaxşı əlavədir.',
      'why.f.calm': 'Stressli vəziyyətlərdə sakitliyə dəstək.',
      'why.f.urinary': 'Sidik yollarının sağlamlığını dəstəkləyir: minerallar nəzarətdədir.',
      'why.f.hairball': 'Tük topalarının təbii yolla çıxmasına kömək edir.',
      'why.f.indoor': 'Az hərəkət edən ev pişikləri üçün yüngül formula.',
      'why.f.outdoor': 'Çölə çıxan aktiv pişiklər üçün.',
      'why.vet': 'Baytar pəhrizi: yalnız həkimin tövsiyəsi ilə.',
      'why.araton': 'Araton — hər gün üçün balanslı qida, sərfəli seçim.',
      'why.prime': 'Premium yaş qida: 98% heyvani protein.',
      'why.als': 'Bütün yaşlar və ölçülər üçün (All Life Stage).',
      'why.starterWhite': 'Ağ tüklü balaların ilk quru qidası.',
      'why.juniorLamb': '2–18 aylıq bütün cins küçüklər üçün, quzu əti ilə.',
      'why.adultLamb': 'Bütün cins yetkin itlər üçün, quzu əti ilə, buğdasız.',
      'why.miniKibble': 'Kiçik ağız üçün kiçik qranullar.',
      'why.milk': 'Yenidoğulmuşlar üçün süd əvəzedicisi — ana südü çatmayanda.',
      'why.minerals': 'Böyümə dövründə vitamin və minerallar.',
      'why.ageing': 'Yaşlı heyvanlar üçün: dişlər, oynaqlar və sümüklər.',
      'why.stainless': 'Xarici qulluq: göz ətrafında tükdəki ləkələr üçün gil maska.',
      'why.whiteShampoo': 'Ağ tük üçün şampun — təmiz, parlaq ağ rəng üçün.',
      'why.babyShampoo': 'Balalar üçün yumşaq şampun.',
      'why.mousse': 'Pişik balalarının ilk qidası — yumşaq mus.',
      'why.kitten': '1 yaşa qədər pişik balaları üçün.',
      'why.wean': 'Ana südündən quru qidaya keçid üçün.',
      'why.indoorBase': 'Ev pişikləri üçün yüngül gündəlik formula.',
      'why.vitamins': 'Gündəlik vitamin və minerallar.',
      'why.growthSnack': 'Böyümə dövrü üçün funksional qəlyanaltı.',
      'why.wet.young': 'Yumşaq yaş qida — balalar üçün asan yeyilir.',
      'why.wet.adult': 'Quru qidaya ətirli əlavə və ya ayrıca yemək.',
      'note.tears': 'Göz yaşı axması göz, göz yaşı kanalı və ya allergiya ilə bağlı ola bilər — əvvəlcə heyvanı baytar həkimə göstərin. Qida və qulluq yalnız göz ətrafındakı tükün təmizliyinə və rənginə kömək edə bilər.',
      'note.senior': '7 yaşdan sonra: yetkin heyvan rasionu və oynaqlar üçün əlavə qayğı seçilib. Çəkini və iştahı izləyin, ildə 1–2 dəfə baytar müayinəsi tövsiyə olunur.',
      'note.starter': 'Yenidoğulmuş balalar üçün qidalanma rejimini baytar həkimlə razılaşdırın.',
      disclaimer: 'Bu seçim məlumat xarakterlidir. Qida dərman deyil və xəstəlikləri müalicə etmir. Əlamətlər (göz yaşı axması, qaşınma, qusma, ishal, iştahsızlıq) davam edirsə, baytar həkimə müraciət edin.',
      'wa.text': 'Salam! Saytda qida seçdim: {summary}. Məsləhət istərdim.',
      empty: 'Bu seçim üçün məhsul tapılmadı. Bizə WhatsApp-da yazın — kömək edək.',
      'bar.home': 'Ana səhifə', 'bar.catalog': 'Kataloq', 'bar.finder': 'Qida seçimi', 'bar.wa': 'WhatsApp', 'bar.label': 'Əsas menyu'
    },
    ru: {
      title: 'Подбор корма', step: 'Шаг {n} из {m}', back: 'Назад', close: 'Закрыть', next: 'Далее', show: 'Показать подбор',
      restart: 'Начать заново', details: 'Подробнее', edit: 'Изменить', wa: 'Спросить в WhatsApp',
      'q.species': 'Кто ваш питомец?', 'q.breed': 'Выберите породу', 'q.size': 'Какого размера во взрослом возрасте?',
      'q.age': 'Сколько лет?', 'q.coat': 'Цвет шерсти', 'q.feats': 'На что обратить внимание?', 'q.results': 'Подбор для вашего питомца',
      'h.breed': 'Если порода неизвестна, выберите «Беспородный / метис».', 'h.coat': 'Линию Superior Care подбираем по цвету шерсти.',
      'h.coatBreed': '{breed} — обычно: {coat}', 'h.feats': 'Можно выбрать несколько. Если ничего из этого нет — просто продолжайте.',
      'sp.dogs': 'Собака', 'sp.cats': 'Кошка', search: 'Поиск породы', mixed: 'Беспородный / метис', nothing: 'Такой породы нет в списке — выберите «Беспородный / метис»',
      'size.mini': 'Маленькая', 'size.mini.s': 'до 10 кг', 'size.medium': 'Средняя', 'size.medium.s': '10–25 кг', 'size.large': 'Крупная', 'size.large.s': 'больше 25 кг',
      'age.starter': 'До 2 месяцев', 'age.starter.s': 'Новорождённый', 'age.junior': '2–12 месяцев', 'age.junior.L': '2–18 месяцев',
      'age.junior.s.dogs': 'Щенок', 'age.junior.s.cats': 'Котёнок', 'age.adult': '1–7 лет', 'age.adult.L': '1,5–7 лет', 'age.adult.s': 'Взрослый',
      'age.senior': 'Старше 7 лет', 'age.senior.s': 'Пожилой',
      'coat.white': 'Белая или светлая', 'coat.red': 'Рыжая или коричневая', 'coat.dark': 'Чёрная или тёмная', 'coat.other': 'Другая / пёстрая',
      'f.tears': 'Слезятся глаза, дорожки под глазами', 'f.digestion': 'Чувствительное пищеварение', 'f.skin': 'Кожа и шерсть: зуд, тусклость',
      'f.allergy': 'Пищевая чувствительность', 'f.weight': 'Лишний вес', 'f.sterilised': 'Стерилизован(а)', 'f.joints': 'Суставы, подвижность',
      'f.teeth': 'Зубы, запах изо рта', 'f.active': 'Очень активный', 'f.picky': 'Привередлив в еде', 'f.calm': 'Стресс, беспокойство',
      'f.urinary': 'Мочевыводящие пути', 'f.hairball': 'Комочки шерсти', 'f.indoor': 'Живёт только дома', 'f.outdoor': 'Гуляет на улице',
      'g.dry': 'Основной сухой корм', 'g.wet': 'Влажный корм', 'g.extra': 'Дополнительный уход', 'g.vet': 'Ветеринарные диеты',
      'g.vet.note': 'Только по рекомендации ветеринарного врача.', 'tag.vet': 'Ветеринарная диета', 'tag.alt': 'Выгодная альтернатива', 'tag.care': 'Уход',
      'why.coat.white': 'Линия для белой и светлой шерсти: помогает уменьшить слёзные дорожки.',
      'why.coat.red': 'Для рыжей и коричневой шерсти: комплекс RCE поддерживает насыщенность окраса.',
      'why.coat.dark': 'Для чёрной и тёмной шерсти: комплекс DCE сохраняет глубокий тёмный окрас.',
      'why.coat.reddark': 'Линия для собак с рыжей и тёмной шерстью.',
      'why.size.mini': 'Для мелких пород (1–10 кг).', 'why.size.large': 'Для крупных пород (от 25 кг).',
      'why.stage.starter': 'Для самых маленьких: первый корм и переходный период.', 'why.stage.junior': 'Поддерживает здоровый рост в период взросления.',
      'why.stage.junior.L': 'У крупных пород щенячий период длится до 18 месяцев.', 'why.stage.adult': 'Полнорационный корм на каждый день для взрослого питомца.',
      'why.stage.senior': 'Полнорационный корм на каждый день; дополнительная забота о суставах для пожилых — ниже.',
      'why.f.tears': 'Помогает сохранить шерсть вокруг глаз чистой и светлой.',
      'why.f.digestion': 'Учитывает чувствительное пищеварение: лёгкий, легкоусвояемый состав.',
      'why.f.skin': 'Для здоровой кожи и блестящей шерсти.',
      'why.f.allergy': 'Альтернативный источник белка — для питомцев с пищевой чувствительностью.',
      'why.f.weight': 'Контролируемая калорийность — для контроля веса.',
      'why.f.sterilised': 'Учитывает потребности после стерилизации.',
      'why.f.joints': 'Для поддержки суставов и подвижности.',
      'why.f.teeth': 'Ежедневный уход за полостью рта: помогает уменьшить налёт.',
      'why.f.active': 'Энергия и выносливость для активных питомцев.',
      'why.f.picky': 'Ароматный влажный корм — хорошее дополнение для малоежек.',
      'why.f.calm': 'Поддержка спокойствия в стрессовых ситуациях.',
      'why.f.urinary': 'Поддерживает здоровье мочевыводящих путей: контролируемый уровень минералов.',
      'why.f.hairball': 'Помогает естественному выведению комочков шерсти.',
      'why.f.indoor': 'Лёгкая формула для малоподвижных домашних кошек.',
      'why.f.outdoor': 'Для активных кошек, которые гуляют на улице.',
      'why.vet': 'Ветеринарная диета: только по рекомендации врача.',
      'why.araton': 'Araton — сбалансированный корм на каждый день, выгодный выбор.',
      'why.prime': 'Премиальный влажный корм: 98% животного белка.',
      'why.als': 'Для всех возрастов и размеров (All Life Stage).',
      'why.starterWhite': 'Первый сухой корм для щенков со светлой шерстью.',
      'why.juniorLamb': 'Для щенков всех пород от 2 до 18 месяцев, с ягнёнком.',
      'why.adultLamb': 'Для взрослых собак всех пород, с ягнёнком, без пшеницы.',
      'why.miniKibble': 'Мелкие гранулы для маленькой пасти.',
      'why.milk': 'Заменитель молока для новорождённых — когда материнского не хватает.',
      'why.minerals': 'Витамины и минералы в период роста.',
      'why.ageing': 'Для пожилых питомцев: зубы, суставы и кости.',
      'why.stainless': 'Внешний уход: глиняная маска для пятен на шерсти вокруг глаз.',
      'why.whiteShampoo': 'Шампунь для белой шерсти — для чистого, яркого белого цвета.',
      'why.babyShampoo': 'Мягкий шампунь для малышей.',
      'why.mousse': 'Первый корм для котят — нежный мусс.',
      'why.kitten': 'Для котят до 1 года.',
      'why.wean': 'Для перехода с материнского молока на сухой корм.',
      'why.indoorBase': 'Лёгкая формула на каждый день для домашних кошек.',
      'why.vitamins': 'Витамины и минералы на каждый день.',
      'why.growthSnack': 'Функциональное лакомство на период роста.',
      'why.wet.young': 'Мягкий влажный корм — малышам легко есть.',
      'why.wet.adult': 'Ароматное дополнение к сухому корму или отдельное кормление.',
      'note.tears': 'Слезотечение может быть связано с глазами, слёзным каналом или аллергией — сначала покажите питомца ветеринару. Корм и уход могут помочь только с чистотой и цветом шерсти вокруг глаз.',
      'note.senior': 'После 7 лет подобран рацион для взрослого питомца и дополнительный уход за суставами. Следите за весом и аппетитом, показывайтесь ветеринару 1–2 раза в год.',
      'note.starter': 'Режим кормления новорождённых согласуйте с ветеринарным врачом.',
      disclaimer: 'Подбор носит информационный характер. Корм — не лекарство и не лечит заболевания. Если симптомы (слезотечение, зуд, рвота, диарея, отказ от еды) сохраняются, обратитесь к ветеринарному врачу.',
      'wa.text': 'Здравствуйте! Подобрал(а) корм на сайте: {summary}. Хочу консультацию.',
      empty: 'Для такого выбора товаров не нашлось. Напишите нам в WhatsApp — поможем.',
      'bar.home': 'Главная', 'bar.catalog': 'Каталог', 'bar.finder': 'Подбор корма', 'bar.wa': 'WhatsApp', 'bar.label': 'Главное меню'
    },
    en: {
      title: 'Food finder', step: 'Step {n} of {m}', back: 'Back', close: 'Close', next: 'Next', show: 'Show results',
      restart: 'Start over', details: 'Details', edit: 'Edit', wa: 'Ask on WhatsApp',
      'q.species': 'Who is your pet?', 'q.breed': 'Choose the breed', 'q.size': 'How big as an adult?',
      'q.age': 'How old?', 'q.coat': 'Coat colour', 'q.feats': 'Anything to keep in mind?', 'q.results': 'Our picks for your pet',
      'h.breed': 'Not sure of the breed? Choose “Mixed breed”.', 'h.coat': 'We match the Superior Care line to the coat colour.',
      'h.coatBreed': '{breed} usually: {coat}', 'h.feats': 'You can pick several. If none apply, just continue.',
      'sp.dogs': 'Dog', 'sp.cats': 'Cat', search: 'Search breed', mixed: 'Mixed breed', nothing: 'No such breed in the list — choose “Mixed breed”',
      'size.mini': 'Small', 'size.mini.s': 'up to 10 kg', 'size.medium': 'Medium', 'size.medium.s': '10–25 kg', 'size.large': 'Large', 'size.large.s': 'over 25 kg',
      'age.starter': 'Under 2 months', 'age.starter.s': 'Newborn', 'age.junior': '2–12 months', 'age.junior.L': '2–18 months',
      'age.junior.s.dogs': 'Puppy', 'age.junior.s.cats': 'Kitten', 'age.adult': '1–7 years', 'age.adult.L': '1.5–7 years', 'age.adult.s': 'Adult',
      'age.senior': 'Over 7 years', 'age.senior.s': 'Senior',
      'coat.white': 'White or light', 'coat.red': 'Red or brown', 'coat.dark': 'Black or dark', 'coat.other': 'Other / multicoloured',
      'f.tears': 'Teary eyes, tear stains', 'f.digestion': 'Sensitive digestion', 'f.skin': 'Skin & coat: itch, dull coat',
      'f.allergy': 'Food sensitivity', 'f.weight': 'Excess weight', 'f.sterilised': 'Neutered / spayed', 'f.joints': 'Joints & mobility',
      'f.teeth': 'Teeth, bad breath', 'f.active': 'Very active', 'f.picky': 'Picky eater', 'f.calm': 'Stress, anxiety',
      'f.urinary': 'Urinary tract', 'f.hairball': 'Hairballs', 'f.indoor': 'Indoor only', 'f.outdoor': 'Goes outdoors',
      'g.dry': 'Main dry food', 'g.wet': 'Wet food', 'g.extra': 'Extra care', 'g.vet': 'Veterinary diets',
      'g.vet.note': 'Only on a veterinarian’s recommendation.', 'tag.vet': 'Veterinary diet', 'tag.alt': 'Budget alternative', 'tag.care': 'Care',
      'why.coat.white': 'Line for white and light coats: helps reduce tear stains.',
      'why.coat.red': 'For red and brown coats: the RCE complex supports colour richness.',
      'why.coat.dark': 'For black and dark coats: the DCE complex preserves the deep colour.',
      'why.coat.reddark': 'Line for dogs with red and dark coats.',
      'why.size.mini': 'Made for small breeds (1–10 kg).', 'why.size.large': 'Made for large breeds (from 25 kg).',
      'why.stage.starter': 'For the youngest: first food and weaning.', 'why.stage.junior': 'Supports healthy growth while growing up.',
      'why.stage.junior.L': 'In large breeds the puppy stage lasts up to 18 months.', 'why.stage.adult': 'Complete everyday diet for an adult pet.',
      'why.stage.senior': 'Complete everyday diet; extra joint care for seniors is below.',
      'why.f.tears': 'Helps keep the coat around the eyes clean and light.',
      'why.f.digestion': 'Made with sensitive digestion in mind: light, easily digestible.',
      'why.f.skin': 'For healthy skin and a shiny coat.',
      'why.f.allergy': 'Alternative protein source — for food-sensitive pets.',
      'why.f.weight': 'Controlled calories — for weight control.',
      'why.f.sterilised': 'Covers the needs after neutering.',
      'why.f.joints': 'Supports joints and mobility.',
      'why.f.teeth': 'Daily oral care: helps reduce plaque.',
      'why.f.active': 'Energy and stamina for active pets.',
      'why.f.picky': 'Tasty wet food — a good addition for picky eaters.',
      'why.f.calm': 'Supports calm in stressful situations.',
      'why.f.urinary': 'Supports urinary tract health: controlled minerals.',
      'why.f.hairball': 'Helps hairballs pass naturally.',
      'why.f.indoor': 'Light formula for low-activity indoor cats.',
      'why.f.outdoor': 'For active cats that go outdoors.',
      'why.vet': 'Veterinary diet: only on a vet’s recommendation.',
      'why.araton': 'Araton — balanced everyday food, a budget-friendly choice.',
      'why.prime': 'Premium wet food: 98% animal protein.',
      'why.als': 'For all ages and sizes (All Life Stage).',
      'why.starterWhite': 'First dry food for light-coated puppies.',
      'why.juniorLamb': 'For puppies of all breeds aged 2–18 months, with lamb.',
      'why.adultLamb': 'For adult dogs of all breeds, with lamb, no wheat.',
      'why.miniKibble': 'Small kibble for small mouths.',
      'why.milk': 'Milk replacer for newborns — when mother’s milk is not enough.',
      'why.minerals': 'Vitamins and minerals while growing.',
      'why.ageing': 'For senior pets: teeth, joints and bones.',
      'why.stainless': 'External care: clay mask for stains on the coat around the eyes.',
      'why.whiteShampoo': 'Shampoo for white coats — for a clean, bright white.',
      'why.babyShampoo': 'Gentle shampoo for puppies and kittens.',
      'why.mousse': 'First food for kittens — a tender mousse.',
      'why.kitten': 'For kittens under 1 year.',
      'why.wean': 'For the move from mother’s milk to dry food.',
      'why.indoorBase': 'Light everyday formula for indoor cats.',
      'why.vitamins': 'Everyday vitamins and minerals.',
      'why.growthSnack': 'Functional treat for the growth period.',
      'why.wet.young': 'Soft wet food — easy for little ones to eat.',
      'why.wet.adult': 'A tasty addition to dry food or a meal on its own.',
      'note.tears': 'Teary eyes can be caused by the eyes, tear ducts or allergy — show your pet to a vet first. Food and grooming can only help with how clean and light the coat around the eyes stays.',
      'note.senior': 'After 7: an adult diet plus extra joint care. Watch weight and appetite and see the vet once or twice a year.',
      'note.starter': 'Agree the feeding plan for newborns with your vet.',
      disclaimer: 'This selection is for information only. Food is not medicine and does not treat disease. If symptoms (teary eyes, itch, vomiting, diarrhoea, loss of appetite) persist, see a veterinarian.',
      'wa.text': 'Hello! I used the food finder on your site: {summary}. I would like advice.',
      empty: 'No products matched this selection. Message us on WhatsApp — we will help.',
      'bar.home': 'Home', 'bar.catalog': 'Catalog', 'bar.finder': 'Food finder', 'bar.wa': 'WhatsApp', 'bar.label': 'Main menu'
    }
  };
  // Ключи для статичной разметки страниц (кнопка в каталоге, блок на главной) — в общий словарь сайта
  if (typeof TRANSLATIONS !== 'undefined') {
    const PAGE = {
      az: { 'finder.cta.t': 'Qida seçimi', 'finder.cta.s': 'Cinsi, yaşı və xüsusiyyətlərinə görə', 'home.hero.finder': 'Qidanı seçin',
        'pick.tag': 'Qida seçimi', 'pick.title': 'Heyvanınıza uyğun qidanı bir dəqiqədə seçin',
        'pick.lead': 'Cinsi, yaşı, tük rəngi və xüsusiyyətlərinə görə. Hər məhsulun nə üçün uyğun olduğunu izah edirik.',
        'pick.example': 'Məsələn: it → maltez → 2 yaş → gözləri yaşarır', 'pick.dogs': 'İt üçün', 'pick.cats': 'Pişik üçün' },
      ru: { 'finder.cta.t': 'Подбор корма', 'finder.cta.s': 'По породе, возрасту и особенностям', 'home.hero.finder': 'Подобрать корм',
        'pick.tag': 'Подбор корма', 'pick.title': 'Подберите корм для питомца за минуту',
        'pick.lead': 'По породе, возрасту, цвету шерсти и особенностям. Объясняем, чем подходит каждый продукт.',
        'pick.example': 'Например: собака → мальтезе → 2 года → слезятся глаза', 'pick.dogs': 'Для собаки', 'pick.cats': 'Для кошки' },
      en: { 'finder.cta.t': 'Food finder', 'finder.cta.s': 'By breed, age and needs', 'home.hero.finder': 'Find the right food',
        'pick.tag': 'Food finder', 'pick.title': 'Find the right food for your pet in a minute',
        'pick.lead': 'By breed, age, coat colour and needs. We explain why each product fits.',
        'pick.example': 'For example: dog → Maltese → 2 years → teary eyes', 'pick.dogs': 'For a dog', 'pick.cats': 'For a cat' }
    };
    Object.keys(PAGE).forEach(l => { if (TRANSLATIONS[l]) Object.assign(TRANSLATIONS[l], PAGE[l]); });
  }

  const lang = () => {
    const l = (window.NP && NP.lang && NP.lang()) || document.documentElement.lang || 'az';
    return T[l] ? l : 'az';
  };
  const t = (k, v) => {
    let s = T[lang()][k];
    if (s == null) s = T.az[k] != null ? T.az[k] : k;
    if (v) s = s.replace(/\{(\w+)\}/g, (m, x) => (v[x] != null ? v[x] : m));
    return s;
  };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------- Породы: [id, az, ru, en, размер (собаки), типичный окрас ('' — бывает разный)] ----------
  const BREEDS = {
    dogs: [
      ['maltese', 'Maltez', 'Мальтезе', 'Maltese', 'mini', 'white'],
      ['pomeranian', 'Pomeranian şpits', 'Померанский шпиц', 'Pomeranian', 'mini', ''],
      ['yorkie', 'Yorkşir terrieri', 'Йоркширский терьер', 'Yorkshire Terrier', 'mini', ''],
      ['chihuahua', 'Çihuahua', 'Чихуахуа', 'Chihuahua', 'mini', ''],
      ['toypoodle', 'Toy pudel', 'Той-пудель', 'Toy Poodle', 'mini', ''],
      ['shihtzu', 'Şih-tsu', 'Ши-тцу', 'Shih Tzu', 'mini', ''],
      ['bichon', 'Bişon frize', 'Бишон фризе', 'Bichon Frisé', 'mini', 'white'],
      ['westie', 'Vest-haylend-uayt-terrier', 'Вест-хайленд-уайт-терьер', 'West Highland White Terrier', 'mini', 'white'],
      ['jspitz', 'Yapon şpitsi', 'Японский шпиц', 'Japanese Spitz', 'mini', 'white'],
      ['coton', 'Koton de tulear', 'Котон-де-тулеар', 'Coton de Tulear', 'mini', 'white'],
      ['maltipoo', 'Maltipu', 'Мальтипу', 'Maltipoo', 'mini', ''],
      ['pug', 'Mops', 'Мопс', 'Pug', 'mini', ''],
      ['dachshund', 'Taksa', 'Такса', 'Dachshund', 'mini', ''],
      ['pekingese', 'Pekines', 'Пекинес', 'Pekingese', 'mini', ''],
      ['papillon', 'Papiyon', 'Папийон', 'Papillon', 'mini', ''],
      ['jrt', 'Cek-rassel-terrier', 'Джек-рассел-терьер', 'Jack Russell Terrier', 'mini', ''],
      ['minischnauzer', 'Miniatür şnauzer', 'Цвергшнауцер', 'Miniature Schnauzer', 'mini', ''],
      ['minipinscher', 'Miniatür pinçer', 'Цвергпинчер', 'Miniature Pinscher', 'mini', ''],
      ['russiantoy', 'Rus toy terrieri', 'Русский той-терьер', 'Russian Toy', 'mini', ''],
      ['cavalier', 'Kavaler-kinq-çarlz-spaniel', 'Кавалер-кинг-чарльз-спаниель', 'Cavalier King Charles Spaniel', 'mini', ''],
      ['shiba', 'Şiba-inu', 'Сиба-ину', 'Shiba Inu', 'mini', 'red'],
      ['frenchie', 'Fransız buldoqu', 'Французский бульдог', 'French Bulldog', 'medium', ''],
      ['corgi', 'Velş-korgi', 'Вельш-корги', 'Welsh Corgi', 'medium', 'red'],
      ['beagle', 'Biql', 'Бигль', 'Beagle', 'medium', ''],
      ['cocker', 'Koker-spaniel', 'Кокер-спаниель', 'Cocker Spaniel', 'medium', ''],
      ['bordercollie', 'Border-kolli', 'Бордер-колли', 'Border Collie', 'medium', ''],
      ['husky', 'Sibir haskisi', 'Сибирский хаски', 'Siberian Husky', 'medium', ''],
      ['samoyed', 'Samoyed iti', 'Самоедская собака', 'Samoyed', 'medium', 'white'],
      ['sharpei', 'Şar-pey', 'Шарпей', 'Shar Pei', 'medium', ''],
      ['amstaff', 'Amerikan stafford-terrieri', 'Американский стаффордширский терьер', 'American Staffordshire Terrier', 'medium', ''],
      ['aussie', 'Avstraliya çoban iti', 'Австралийская овчарка', 'Australian Shepherd', 'medium', ''],
      ['bullterrier', 'Bulterier', 'Бультерьер', 'Bull Terrier', 'medium', ''],
      ['englishbulldog', 'İngilis buldoqu', 'Английский бульдог', 'English Bulldog', 'medium', ''],
      ['poodle', 'Böyük pudel', 'Большой пудель', 'Standard Poodle', 'medium', ''],
      ['labrador', 'Labrador-retriver', 'Лабрадор-ретривер', 'Labrador Retriever', 'large', ''],
      ['golden', 'Qızılı retriver', 'Золотистый ретривер', 'Golden Retriever', 'large', ''],
      ['gsd', 'Alman çoban iti', 'Немецкая овчарка', 'German Shepherd', 'large', ''],
      ['caucasian', 'Qafqaz çoban iti', 'Кавказская овчарка', 'Caucasian Shepherd', 'large', ''],
      ['alabai', 'Alabay (Orta Asiya çoban iti)', 'Алабай (среднеазиатская овчарка)', 'Alabai (Central Asian Shepherd)', 'large', ''],
      ['canecorso', 'Kane-korso', 'Кане-корсо', 'Cane Corso', 'large', 'dark'],
      ['rottweiler', 'Rotveyler', 'Ротвейлер', 'Rottweiler', 'large', 'dark'],
      ['doberman', 'Doberman', 'Доберман', 'Dobermann', 'large', 'dark'],
      ['malinois', 'Belçika çoban iti (malinua)', 'Бельгийская овчарка (малинуа)', 'Belgian Malinois', 'large', ''],
      ['akita', 'Akita-inu', 'Акита-ину', 'Akita Inu', 'large', ''],
      ['boxer', 'Boksyor', 'Боксёр', 'Boxer', 'large', ''],
      ['greatdane', 'Alman doqu', 'Немецкий дог', 'Great Dane', 'large', ''],
      ['bernese', 'Bern zennenhundu', 'Бернский зенненхунд', 'Bernese Mountain Dog', 'large', ''],
      ['dogo', 'Arqentina doqu', 'Аргентинский дог', 'Dogo Argentino', 'large', 'white']
    ],
    cats: [
      ['british', 'Britaniya qısatüklü', 'Британская короткошёрстная', 'British Shorthair', '', ''],
      ['scottish', 'Şotland qatlaqulaq', 'Шотландская вислоухая', 'Scottish Fold', '', ''],
      ['persian', 'Fars pişiyi', 'Персидская', 'Persian', '', ''],
      ['exotic', 'Ekzotik qısatüklü', 'Экзотическая короткошёрстная', 'Exotic Shorthair', '', ''],
      ['mainecoon', 'Men-kun', 'Мейн-кун', 'Maine Coon', '', ''],
      ['siamese', 'Siam pişiyi', 'Сиамская', 'Siamese', '', ''],
      ['sphynx', 'Sfinks', 'Сфинкс', 'Sphynx', '', 'none'],
      ['ragdoll', 'Reqdoll', 'Рэгдолл', 'Ragdoll', '', ''],
      ['bengal', 'Benqal pişiyi', 'Бенгальская', 'Bengal', '', ''],
      ['russianblue', 'Rus mavi pişiyi', 'Русская голубая', 'Russian Blue', '', ''],
      ['angora', 'Türk ankarası', 'Турецкая ангора', 'Turkish Angora', '', 'white'],
      ['van', 'Van pişiyi', 'Ванская кошка', 'Turkish Van', '', 'white'],
      ['abyssinian', 'Habeş pişiyi', 'Абиссинская', 'Abyssinian', '', 'red'],
      ['bombay', 'Bombey pişiyi', 'Бомбейская', 'Bombay', '', 'dark'],
      ['siberian', 'Sibir pişiyi', 'Сибирская', 'Siberian', '', ''],
      ['neva', 'Neva maskaradı', 'Невская маскарадная', 'Neva Masquerade', '', ''],
      ['burmese', 'Birma pişiyi', 'Бурманская', 'Burmese', '', '']
    ]
  };
  const LI = { az: 1, ru: 2, en: 3 };
  const breedOf = (sp, id) => (BREEDS[sp] || []).find(b => b[0] === id) || null;
  const breedName = (sp, id) => {
    if (id === 'mixed') return t('mixed');
    const b = breedOf(sp, id);
    return b ? b[LI[lang()]] : '';
  };

  const FEATS = {
    dogs: ['tears', 'digestion', 'skin', 'allergy', 'weight', 'sterilised', 'joints', 'teeth', 'active', 'picky', 'calm'],
    cats: ['tears', 'digestion', 'skin', 'weight', 'sterilised', 'urinary', 'hairball', 'indoor', 'outdoor', 'teeth', 'joints', 'picky']
  };
  const AGES = ['starter', 'junior', 'adult', 'senior'];
  const COATS = ['white', 'red', 'dark', 'other'];
  const SIZES = ['mini', 'medium', 'large'];

  // ---------- Правила подбора ----------
  // b бренд · sp вид · n английское название в каталоге · k группа (dry | alt | wet | extra | vet)
  // st возрасты · sz размеры · coat окрасы · req нужен хотя бы один из признаков · f вес признака
  // base базовый вес · why/why2 своё объяснение · vet ветеринарная диета · care средство ухода
  const A = ['adult', 'senior'], J = ['junior'], S = ['starter'], ALL = ['junior', 'adult', 'senior'];
  const P = [
    // ---- собаки · сухой корм
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs Starter — Salmon', st: S, coat: ['white'], base: 7, why: 'why.starterWhite' },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Junior Lamb — Lamb', st: ['starter', 'junior'], base: 4, why: 'why.juniorLamb' },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs Junior — White Fish & Krill', st: J, sz: ['mini'], coat: ['white'], base: 6 },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs Junior — Salmon', st: J, coat: ['white'], base: 5, f: { skin: 1 } },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Red Coat Junior — Salmon & Krill', st: J, sz: ['mini'], coat: ['red'], base: 6 },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs Adult — Lamb', st: A, sz: ['mini'], coat: ['white'], base: 6 },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs Adult — White Fish', st: A, sz: ['mini'], coat: ['white'], base: 5, f: { digestion: 2, allergy: 1 } },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs Adult — Salmon', st: A, sz: ['mini'], coat: ['white'], base: 5, f: { skin: 2 } },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs Adult — Insect', st: A, sz: ['mini'], coat: ['white'], base: 3, f: { allergy: 4 } },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs All Life Stage — White Fish', st: ALL, coat: ['white'], base: 5, f: { digestion: 1 }, why: 'why.als' },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'White Dogs All Life Stage — Insect', st: ALL, coat: ['white'], base: 3, f: { allergy: 4 }, why: 'why.als' },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Red Coat Adult — Lamb', st: A, sz: ['mini'], coat: ['red'], base: 6 },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Red Coat Adult — Salmon', st: A, sz: ['mini'], coat: ['red'], base: 5, f: { skin: 2 } },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Dark Coat — Poultry', st: A, coat: ['dark'], base: 6, f: { skin: 1 } },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Weight Control Sterilised — Poultry', st: A, req: ['weight', 'sterilised'], base: 3, f: { weight: 5, sterilised: 5 } },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Mini Adult — Lamb', st: A, sz: ['mini'], base: 4, why: 'why.miniKibble' },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Maxi Adult — Poultry', st: A, sz: ['large'], base: 4 },
    { b: 'np', sp: 'dogs', k: 'dry', n: 'Adult Lamb — Lamb', st: A, base: 3, why: 'why.adultLamb' },
    // ---- собаки · Araton (выгодная альтернатива)
    { b: 'araton', sp: 'dogs', k: 'alt', n: 'Junior Poultry', st: J, base: 3 },
    { b: 'araton', sp: 'dogs', k: 'alt', n: 'Junior Lamb', st: J, base: 2, f: { allergy: 1 } },
    { b: 'araton', sp: 'dogs', k: 'alt', n: 'Adult Maxi', st: A, sz: ['large'], base: 3 },
    { b: 'araton', sp: 'dogs', k: 'alt', n: 'Adult Active', st: ['adult'], base: 1, f: { active: 5 } },
    { b: 'araton', sp: 'dogs', k: 'alt', n: 'Adult Lamb', st: A, base: 3, f: { allergy: 1 } },
    { b: 'araton', sp: 'dogs', k: 'alt', n: 'Adult Poultry', st: A, base: 2 },
    // ---- собаки · влажный корм
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Prime Puppy — Chicken & Turkey', st: ['starter', 'junior'], base: 5, why2: 'why.prime' },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Lamb (Puppy)', st: ['starter', 'junior'], base: 4 },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Junior — Rabbit & Krill', st: J, base: 3, f: { allergy: 3 } },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'White Coat — White Fish & Krill', st: A, coat: ['white'], base: 5, f: { tears: 1 } },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'White Dogs Wellness Soup — Tuna & Salmon', st: A, coat: ['white'], base: 3, f: { picky: 4, skin: 1 } },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Red Coat — Salmon & Krill', st: A, coat: ['red'], base: 5 },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Dark Coat — Trout & Krill', st: A, coat: ['dark'], base: 5 },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Prime Weight Control — Chicken & White Fish', st: A, req: ['weight', 'sterilised'], base: 3, f: { weight: 5, sterilised: 3 }, why2: 'why.prime' },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Turkey & Lamb (Light)', st: A, req: ['weight', 'sterilised'], base: 2, f: { weight: 4, sterilised: 2 } },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Turkey', st: A, req: ['digestion'], base: 2, f: { digestion: 6 } },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Prime Skin & Coat — Chicken & Salmon', st: A, base: 1, f: { skin: 5, picky: 1 }, why2: 'why.prime' },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Prime Active — Chicken & Beef', st: ['adult'], req: ['active'], base: 2, f: { active: 5 }, why2: 'why.prime' },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Turkey & Apples (Small Breeds)', st: A, sz: ['mini'], base: 3 },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Veal & Duck (Small Breed)', st: A, sz: ['mini'], base: 2 },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Lamb — Adult dog', st: A, base: 2, f: { picky: 1 } },
    { b: 'np', sp: 'dogs', k: 'wet', n: 'Beef & Turkey', st: A, base: 1, f: { picky: 1 } },
    // ---- собаки · дополнительный уход
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Milk Replacer for Puppies', st: S, base: 9, why: 'why.milk' },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Puppy Minerals', st: J, base: 4, why: 'why.minerals' },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs Junior — Healthy Growth', st: J, coat: ['white'], base: 3, why: 'why.growthSnack' },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Red Coat Junior — Gums & Oral Care', st: J, coat: ['red', 'dark'], base: 2, f: { teeth: 4 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Junior — Healthy Growth', st: J, base: 2, why: 'why.growthSnack' },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs — Clear Vision', st: A, coat: ['white'], req: ['tears'], base: 1, f: { tears: 5 } },
    { b: 'tpl', k: 'extra', n: 'Stainless Look', req: ['tears'], base: 1, f: { tears: 6 }, why: 'why.stainless', care: true },
    { b: 'tpl', k: 'extra', n: 'Whitening Shampoo', coat: ['white'], base: 0, f: { tears: 2, skin: 1 }, why: 'why.whiteShampoo', care: true },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs — Intestinal Care', st: A, coat: ['white'], req: ['digestion'], base: 1, f: { digestion: 5 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Red Coat — Hypoallergenic & Intestinal Care', st: A, coat: ['red', 'dark'], req: ['digestion', 'allergy'], base: 1, f: { digestion: 4, allergy: 4 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Healthy Digestion', st: A, req: ['digestion'], base: 1, f: { digestion: 3 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Salmon Oil', st: ALL, req: ['skin'], base: 1, f: { skin: 5 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Beauty Formula', st: ALL, req: ['skin'], base: 1, f: { skin: 3 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Red Coat — Healthy Skin & Coat', st: A, coat: ['red', 'dark'], req: ['skin'], base: 1, f: { skin: 4 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs — Hypoallergenic Dental', st: A, coat: ['white'], req: ['teeth', 'allergy'], base: 1, f: { teeth: 4, allergy: 2 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs — Daily Oral Care', st: A, coat: ['white'], req: ['teeth'], base: 1, f: { teeth: 4 } },
    { b: 'tpl', k: 'extra', n: 'Toothpaste — Kaolin & Nano Silver', req: ['teeth'], base: 1, f: { teeth: 3 }, care: true },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Red Coat — Weight Control', st: A, coat: ['red', 'dark'], req: ['weight', 'sterilised'], base: 1, f: { weight: 4, sterilised: 2 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Healthy Ageing', st: ['senior'], base: 6, f: { joints: 2 }, why: 'why.ageing' },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Mobility Formula', st: A, req: ['joints'], base: 1, f: { joints: 5 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs — Healthy Hips & Joints', st: A, coat: ['white'], req: ['joints'], base: 1, f: { joints: 4 } },
    { b: 'np', k: 'extra', n: 'Faugis — Wellness Formula 5in1', st: A, req: ['joints'], base: 1, f: { joints: 3 }, only: 'dogs' },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Red Coat — Healthy Body & Endurance', st: ['adult'], coat: ['red', 'dark'], req: ['active'], base: 1, f: { active: 4 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs — Endurance', st: ['adult'], coat: ['white'], req: ['active'], base: 1, f: { active: 4 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Comfort Calm', st: A, req: ['calm'], base: 1, f: { calm: 6 } },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'White Dogs — Immune Health', st: A, coat: ['white'], base: 1 },
    { b: 'np', sp: 'dogs', k: 'extra', n: 'Multivitamins', st: A, base: 1, why: 'why.vitamins' },
    { b: 'tpl', k: 'extra', n: 'Puppy & Kitten Shampoo', st: ['starter', 'junior'], base: 1, why: 'why.babyShampoo', care: true },
    // ---- собаки · ветеринарные диеты
    { b: 'np', sp: 'dogs', k: 'vet', n: 'Sensitive Skin & Stomach — Lamb', st: A, req: ['skin', 'digestion', 'allergy'], base: 1, f: { skin: 3, digestion: 3, allergy: 2 }, vet: true },
    { b: 'np', sp: 'dogs', k: 'vet', n: 'Hypoallergenic — Insect protein', st: A, req: ['allergy'], base: 1, f: { allergy: 4, skin: 1 }, vet: true },
    { b: 'np', sp: 'dogs', k: 'vet', n: 'Gastrointestinal — White Fish', st: A, req: ['digestion'], base: 1, f: { digestion: 3 }, vet: true },
    { b: 'np', sp: 'dogs', k: 'vet', n: 'Dermatosis — Salmon', st: A, req: ['skin'], base: 1, f: { skin: 2 }, vet: true },

    // ---- кошки · сухой корм
    { b: 'np', sp: 'cats', k: 'dry', n: 'Kitten — Poultry', st: ['starter', 'junior'], base: 6, why: 'why.kitten' },
    { b: 'np', sp: 'cats', k: 'dry', n: 'White Cats — Herring', st: A, coat: ['white'], base: 6, f: { tears: 2 } },
    { b: 'np', sp: 'cats', k: 'dry', n: 'Red Cats — Herring (RCE)', st: A, coat: ['red'], base: 6 },
    { b: 'np', sp: 'cats', k: 'dry', n: 'Dark Cats — Herring (DCE)', st: A, coat: ['dark'], base: 6 },
    { b: 'np', sp: 'cats', k: 'dry', n: 'Sterilised — Poultry', st: A, req: ['sterilised', 'weight'], base: 3, f: { sterilised: 6, weight: 2 } },
    { b: 'np', sp: 'cats', k: 'dry', n: 'Indoor — Poultry', st: A, base: 4, f: { indoor: 4, weight: 3 }, why: 'why.indoorBase' },
    { b: 'np', sp: 'cats', k: 'dry', n: 'Sensitive Digestion — Poultry', st: A, req: ['digestion'], base: 3, f: { digestion: 7 } },
    // ---- кошки · Araton
    { b: 'araton', sp: 'cats', k: 'alt', n: 'Kitten', st: ['starter', 'junior'], base: 3 },
    { b: 'araton', sp: 'cats', k: 'alt', n: 'Sterilised', st: A, req: ['sterilised', 'weight'], base: 2, f: { sterilised: 4, weight: 2 } },
    { b: 'araton', sp: 'cats', k: 'alt', n: 'Outdoor', st: ['adult'], req: ['outdoor'], base: 2, f: { outdoor: 5 } },
    { b: 'araton', sp: 'cats', k: 'alt', n: 'Salmon', st: A, base: 2, f: { skin: 1 } },
    // ---- кошки · влажный корм
    { b: 'np', sp: 'cats', k: 'wet', n: 'Starter Mousse — Chicken', st: ['starter', 'junior'], base: 5, why: 'why.mousse' },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Prime Kitten — Chicken & Turkey', st: J, base: 5, why2: 'why.prime' },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Kitten — Turkey, Chicken breast', st: J, base: 4 },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Beef & Turkey Hearts (Kitten)', st: J, base: 3 },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Prime Urinary — White Fish, Anchovies & Cranberries', st: A, req: ['urinary'], base: 3, f: { urinary: 6 }, why2: 'why.prime' },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Urinary — Duck, Chicken breast', st: A, req: ['urinary'], base: 2, f: { urinary: 5 } },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Prime Sterilised — Salmon & Trout', st: A, req: ['sterilised'], base: 3, f: { sterilised: 5 }, why2: 'why.prime' },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Sterilised — Rabbit, Chicken breast', st: A, req: ['sterilised'], base: 2, f: { sterilised: 5 } },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Chicken & Duck', st: A, req: ['sterilised'], base: 1, f: { sterilised: 4 } },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Prime Weight Control — Chicken, Salmon & Tuna', st: A, req: ['weight'], base: 3, f: { weight: 6 }, why2: 'why.prime' },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Weight Control — Herring, Chicken breast', st: A, req: ['weight'], base: 2, f: { weight: 5 } },
    { b: 'np', sp: 'cats', k: 'wet', n: 'White Fish', st: A, req: ['digestion'], base: 2, f: { digestion: 6 } },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Prime Skin & Coat — Chicken & White Fish', st: A, base: 1, f: { skin: 5, picky: 1 }, why2: 'why.prime' },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Beef & Lamb — Adult cat', st: A, base: 2, f: { picky: 2 } },
    { b: 'np', sp: 'cats', k: 'wet', n: 'Chicken & Cheese', st: A, base: 2, f: { picky: 2 } },
    // ---- кошки · дополнительный уход
    { b: 'np', sp: 'cats', k: 'extra', n: 'Milk Replacer for Kittens', st: S, base: 9, why: 'why.milk' },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Malt Paste', st: ALL, req: ['hairball'], base: 1, f: { hairball: 5 } },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Anti-Hairball Malt Paste', st: A, req: ['hairball'], base: 1, f: { hairball: 4, sterilised: 2 } },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Oral Care — Functional snacks', st: A, req: ['teeth'], base: 1, f: { teeth: 5 } },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Sterilised — Functional snacks', st: A, req: ['sterilised', 'weight'], base: 1, f: { sterilised: 3, weight: 3 } },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Urinary — Functional snacks', st: A, req: ['urinary'], base: 1, f: { urinary: 4 } },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Salmon Oil', st: ALL, req: ['skin'], base: 1, f: { skin: 5 } },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Beauty Formula', st: ALL, req: ['skin'], base: 1, f: { skin: 3 } },
    { b: 'np', k: 'extra', n: 'Healthy Ageing', st: ['senior'], base: 6, f: { joints: 2 }, why: 'why.ageing', only: 'cats' },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Faugis — Wellness Formula 5in1', st: A, req: ['joints'], base: 1, f: { joints: 4 } },
    { b: 'np', sp: 'cats', k: 'extra', n: 'Daily Vitamin Formula', st: ALL, base: 1, why: 'why.vitamins' },
    // ---- кошки · ветеринарные диеты
    { b: 'np', sp: 'cats', k: 'vet', n: 'Urinary Formula-S — Poultry', st: A, req: ['urinary'], base: 1, f: { urinary: 4 }, vet: true }
  ];

  // ---------- Поиск товаров в каталоге ----------
  let INDEX = null;
  function extraBrands() {
    try { return typeof BRANDS_EXTRA !== 'undefined' ? BRANDS_EXTRA : null; } catch (e) { return null; }   // eslint-disable-line no-undef
  }
  function buildIndex() {
    const idx = {};
    const add = (brand, groups) => (groups || []).forEach(g => {
      const sp = g.species === 'cats' || g.species === 'dogs' ? g.species : 'both';
      (g.items || []).forEach(it => {
        const n = it && it.en && it.en.name; if (!n) return;
        const k1 = brand + '|' + sp + '|' + n, k2 = brand + '|*|' + n;
        if (!idx[k1]) idx[k1] = { item: it, brand };
        if (!idx[k2]) idx[k2] = { item: it, brand };
      });
    });
    const cat = (window.NP && NP.catalog) ? NP.catalog() : {};
    const ex = extraBrands() || {};
    ['np', 'araton', 'tpl'].forEach(b => add(b, (cat[b] && cat[b].length) ? cat[b] : ex[b]));
    return idx;
  }
  function resolve(d, sp) {
    if (!INDEX) INDEX = buildIndex();
    return INDEX[d.b + '|' + sp + '|' + d.n] || INDEX[d.b + '|both|' + d.n] || INDEX[d.b + '|*|' + d.n] || null;
  }
  // На главной нет js/catalog.js (Araton, Tauro): подгружаем его один раз перед первым подбором
  let extraLoading = null;
  function ensureExtra() {
    if (extraBrands()) return Promise.resolve();
    if (extraLoading) return extraLoading;
    extraLoading = new Promise(res => {
      const s = document.createElement('script');
      s.src = 'js/catalog.js?v=18';
      s.onload = s.onerror = () => { INDEX = null; res(); };
      document.head.appendChild(s);
      setTimeout(res, 4000);
    });
    return extraLoading;
  }

  // ---------- Состояние ----------
  const KEY = 'npFinder';
  let st = fresh();
  function fresh() { return { sp: '', breed: '', size: '', age: '', coat: '', feats: [], step: 'species' }; }
  function save() { try { sessionStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* private mode */ } }
  function load() {
    try {
      const s = JSON.parse(sessionStorage.getItem(KEY) || 'null');
      if (s && typeof s === 'object' && (s.sp === 'dogs' || s.sp === 'cats')) return Object.assign(fresh(), s, { feats: Array.isArray(s.feats) ? s.feats : [] });
    } catch (e) { /* ignore */ }
    return null;
  }
  const has = f => st.feats.indexOf(f) >= 0;
  const isLarge = () => st.sp === 'dogs' && st.size === 'large';
  const skipCoat = () => st.sp === 'cats' && st.breed === 'sphynx';
  function steps() {
    const s = ['species', 'breed', 'age'];
    if (!skipCoat()) s.push('coat');
    s.push('feats');
    return s;
  }

  // ---------- Подбор ----------
  function pick(kind, limit) {
    const out = [], seen = [];
    const coat = skipCoat() ? 'other' : st.coat;
    P.forEach(d => {
      if (d.k !== kind) return;
      if (d.sp && d.sp !== st.sp) return;
      if (d.only && d.only !== st.sp) return;
      if (d.st && d.st.indexOf(st.age) < 0) return;
      if (d.sz && (st.sp !== 'dogs' || d.sz.indexOf(st.size) < 0)) return;
      if (d.coat && d.coat.indexOf(coat) < 0) return;
      if (d.req && !d.req.some(has)) return;
      const r = resolve(d, st.sp); if (!r || seen.indexOf(r.item) >= 0) return;
      seen.push(r.item);
      let s = d.base || 0;
      if (d.coat) s += 3;
      if (d.sz) s += 1;
      const hit = [];
      Object.keys(d.f || {}).forEach(f => { if (has(f)) { s += d.f[f]; hit.push(f); } });
      out.push({ d, r, s, hit });
    });
    out.sort((a, b) => b.s - a.s);
    return out.slice(0, limit);
  }
  function reasons(x) {
    const d = x.d, R = [];
    const push = k => { const s = t(k); if (R.indexOf(s) < 0) R.push(s); };
    if (d.why) push(d.why);
    const whiteLine = d.coat && d.coat.length === 1 && d.coat[0] === 'white' && !d.care;
    if (d.coat && !d.care) push(d.coat.length > 1 ? 'why.coat.reddark' : 'why.coat.' + d.coat[0]);
    if (d.sz && st.size !== 'medium') push('why.size.' + st.size);
    x.hit.forEach(f => { if (!(f === 'tears' && (whiteLine || d.why === 'why.stainless'))) push('why.f.' + f); });
    if (d.vet) push('why.vet');
    if (d.b === 'araton') push('why.araton');
    if (d.why2) push(d.why2);
    if ((d.k === 'dry' || d.k === 'alt') && R.length < 3) {
      if (st.age === 'junior' && isLarge()) push('why.stage.junior.L');
      else push('why.stage.' + st.age);
    }
    if (d.k === 'wet' && R.length < 2) push(st.age === 'starter' || st.age === 'junior' ? 'why.wet.young' : 'why.wet.adult');
    return R.slice(0, 3);
  }

  // ---------- Разметка ----------
  let root = null, dlg = null, body = null, foot = null, lastFocus = null, pushed = false, isOpen = false;
  const ICON = {
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    go: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6z"/><path class="f" d="M9.2 8.6c.2-.4.6-.4.9-.2l.8 1.6c.1.3 0 .5-.2.7l-.5.5c.5 1 1.3 1.9 2.4 2.4l.5-.5c.2-.2.5-.3.7-.2l1.6.8c.3.2.3.6 0 .9-.5.7-1.3 1-2.1.7a8 8 0 0 1-4.4-4.4c-.3-.8 0-1.6.3-2.3z"/></svg>',
    redo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>'
  };

  function build() {
    if (root) return;
    root = document.createElement('div');
    root.className = 'fnd';
    root.id = 'npFinder';
    root.hidden = true;
    root.innerHTML =
      '<div class="fnd__backdrop" data-fnd-x></div>' +
      '<section class="fnd__dialog" role="dialog" aria-modal="true" aria-labelledby="fndQ" tabindex="-1">' +
        '<header class="fnd__head">' +
          '<button type="button" class="fnd__ib fnd__back" data-fnd-back>' + ICON.back + '</button>' +
          '<p class="fnd__kicker" aria-live="polite"></p>' +
          '<button type="button" class="fnd__ib fnd__x" data-fnd-x>' + ICON.x + '</button>' +
          '<div class="fnd__prog" aria-hidden="true"><span></span></div>' +
        '</header>' +
        '<div class="fnd__body"></div>' +
        '<footer class="fnd__foot"></footer>' +
      '</section>';
    document.body.appendChild(root);
    dlg = root.querySelector('.fnd__dialog');
    body = root.querySelector('.fnd__body');
    foot = root.querySelector('.fnd__foot');
    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKey);
    body.addEventListener('input', e => { if (e.target.matches('.fnd-search input')) filterBreeds(e.target.value); });
  }

  function head() {
    const list = steps();
    const i = st.step === 'results' ? list.length : list.indexOf(st.step);
    root.querySelector('.fnd__kicker').textContent = t('title') + (st.step === 'results' ? '' : ' · ' + t('step', { n: i + 1, m: list.length }));
    root.querySelector('.fnd__prog span').style.transform = 'scaleX(' + (st.step === 'results' ? 1 : (i + 1) / (list.length + 1)) + ')';
    const back = root.querySelector('[data-fnd-back]');
    back.setAttribute('aria-label', t('back'));
    back.hidden = st.step === 'species';
    root.querySelector('.fnd__x').setAttribute('aria-label', t('close'));
  }

  const opt = (attrs, inner, on) => '<button type="button" class="fnd-opt' + (on ? ' is-on' : '') + '" ' + attrs + ' aria-pressed="' + (on ? 'true' : 'false') + '">' + inner + '</button>';
  const q = (k, hint) => '<h2 class="fnd__q" id="fndQ">' + esc(t(k)) + '</h2>' + (hint ? '<p class="fnd__hint">' + esc(hint) + '</p>' : '');

  function viewSpecies() {
    return q('q.species') + '<div class="fnd-species">' + ['dogs', 'cats'].map(sp =>
      '<button type="button" class="fnd-sp' + (st.sp === sp ? ' is-on' : '') + '" data-sp="' + sp + '">' +
        '<span class="fnd-sp__pic"><img src="assets/species/' + sp + '.webp" alt="" width="480" height="360" decoding="async"></span>' +
        '<span class="fnd-sp__lbl">' + esc(t('sp.' + sp)) + ICON.go + '</span>' +
      '</button>').join('') + '</div>';
  }

  function breedMeta(b) {
    const parts = [];
    if (st.sp === 'dogs' && b[4]) parts.push(t('size.' + b[4]));
    if (b[5] && b[5] !== 'none') parts.push(t('coat.' + b[5]).toLowerCase());
    return parts.join(' · ');
  }
  function viewBreed() {
    const L = LI[lang()];
    const list = (BREEDS[st.sp] || []).slice().sort((a, b) => a[L].localeCompare(b[L], lang()));
    const row = (id, name, meta) =>
      '<button type="button" class="fnd-row' + (st.breed === id ? ' is-on' : '') + '" data-breed="' + id + '" data-q="' + esc(norm(id === 'mixed' ? [T.az.mixed, T.ru.mixed, T.en.mixed, 'metis', 'mix'].join(' ') : breedOf(st.sp, id).slice(1, 4).join(' '))) + '">' +
        '<span class="fnd-row__t"><span class="fnd-row__n">' + esc(name) + '</span>' + (meta ? '<span class="fnd-row__m">' + esc(meta) + '</span>' : '') + '</span>' +
        '<span class="fnd-row__c">' + ICON.check + '</span></button>';
    let h = q('q.breed', t('h.breed')) +
      '<label class="fnd-search">' + ICON.search + '<input type="search" autocomplete="off" enterkeyhint="search" placeholder="' + esc(t('search')) + '" aria-label="' + esc(t('search')) + '"></label>' +
      '<div class="fnd-rows" role="list">' + row('mixed', t('mixed'), '') + list.map(b => row(b[0], b[L], breedMeta(b))).join('') + '</div>' +
      '<p class="fnd-none" hidden>' + esc(t('nothing')) + '</p>';
    if (st.sp === 'dogs' && st.breed === 'mixed') h += viewSize();
    return h;
  }
  function viewSize() {
    return '<div class="fnd-size" id="fndSize"><h3 class="fnd__q2">' + esc(t('q.size')) + '</h3><div class="fnd-opts fnd-opts--3">' +
      SIZES.map(s => opt('data-size="' + s + '"', '<span class="fnd-opt__t">' + esc(t('size.' + s)) + '</span><span class="fnd-opt__s">' + esc(t('size.' + s + '.s')) + '</span>', st.size === s)).join('') +
      '</div></div>';
  }
  function ageLabel(a) {
    if (isLarge() && (a === 'junior' || a === 'adult')) return t('age.' + a + '.L');
    return t('age.' + a);
  }
  function ageSub(a) { return a === 'junior' ? t('age.junior.s.' + st.sp) : t('age.' + a + '.s'); }
  function viewAge() {
    return q('q.age') + '<div class="fnd-opts">' + AGES.map(a =>
      opt('data-age="' + a + '"', '<span class="fnd-opt__t">' + esc(ageLabel(a)) + '</span><span class="fnd-opt__s">' + esc(ageSub(a)) + '</span>', st.age === a)).join('') + '</div>';
  }
  function viewCoat() {
    const b = breedOf(st.sp, st.breed);
    const hint = b && b[5] && b[5] !== 'none' ? t('h.coatBreed', { breed: b[LI[lang()]], coat: t('coat.' + b[5]).toLowerCase() }) : t('h.coat');
    return q('q.coat', hint) + '<div class="fnd-opts">' + COATS.map(c =>
      opt('data-coat="' + c + '"', '<span class="fnd-sw fnd-sw--' + c + '" aria-hidden="true"></span><span class="fnd-opt__t">' + esc(t('coat.' + c)) + '</span>', st.coat === c)).join('') + '</div>';
  }
  function viewFeats() {
    return q('q.feats', t('h.feats')) + '<div class="fnd-chips">' + FEATS[st.sp].filter(f => !(f === 'sterilised' && (st.age === 'starter' || st.age === 'junior'))).map(f =>
      '<button type="button" class="fnd-chip' + (has(f) ? ' is-on' : '') + '" data-feat="' + f + '" aria-pressed="' + has(f) + '">' +
        '<span class="fnd-chip__c">' + ICON.check + '</span><span>' + esc(t('f.' + f)) + '</span></button>').join('') + '</div>';
  }

  function summaryParts() {
    const p = [t('sp.' + st.sp)];
    const bn = breedName(st.sp, st.breed); if (bn) p.push(bn);
    if (st.sp === 'dogs' && st.size && st.breed === 'mixed') p.push(t('size.' + st.size).toLowerCase());
    if (st.age) p.push(ageLabel(st.age));
    if (st.coat && !skipCoat()) p.push(t('coat.' + st.coat).toLowerCase());
    st.feats.forEach(f => p.push(t('f.' + f).toLowerCase()));
    return p;
  }
  function card(x) {
    const it = x.r.item, L = lang();
    const tx = it[L] || it.ru || it.en || {};
    const id = (window.NP && NP.productId) ? NP.productId(it, x.r.brand) : '';
    const tag = x.d.vet ? t('tag.vet') : x.d.k === 'alt' ? t('tag.alt') : x.d.care ? t('tag.care') : '';
    const pic = it.img ? '<img src="' + esc(it.img) + '" alt="" loading="lazy" decoding="async">' : '<span class="fnd-p__emo">' + esc(it.emoji || '🐾') + '</span>';
    return '<article class="fnd-p' + (x.d.vet ? ' fnd-p--vet' : '') + '" data-pid="' + esc(id) + '">' +
      '<div class="fnd-p__pic">' + pic + '</div>' +
      '<div class="fnd-p__txt">' +
        (tag ? '<span class="fnd-p__tag">' + esc(tag) + '</span>' : '') +
        '<p class="fnd-p__line">' + esc(tx.cat || '') + '</p>' +
        '<h4 class="fnd-p__name">' + esc(tx.name || '') + '</h4>' +
        '<ul class="fnd-p__why">' + reasons(x).map(r => '<li>' + esc(r) + '</li>').join('') + '</ul>' +
        '<button type="button" class="fnd-p__more" data-open="' + esc(id) + '">' + esc(t('details')) + ICON.go + '</button>' +
      '</div></article>';
  }
  function viewResults() {
    const groups = [
      ['dry', pick('dry', 2).concat(pick('alt', 1))],
      ['wet', pick('wet', 2)],
      ['extra', pick('extra', 4)],
      ['vet', pick('vet', 2)]
    ].filter(g => g[1].length);
    const chips = summaryParts().map(s => '<li>' + esc(s) + '</li>').join('');
    let h = q('q.results') +
      '<div class="fnd-sum"><ul>' + chips + '</ul><button type="button" class="fnd-sum__edit" data-goto="breed">' + esc(t('edit')) + '</button></div>';
    const notes = [];
    if (has('tears')) notes.push('note.tears');
    if (st.age === 'senior') notes.push('note.senior');
    if (st.age === 'starter') notes.push('note.starter');
    notes.forEach(n => { h += '<p class="fnd-note">' + ICON.info + '<span>' + esc(t(n)) + '</span></p>'; });
    if (!groups.length) h += '<p class="fnd-empty">' + esc(t('empty')) + '</p>';
    groups.forEach(g => {
      h += '<section class="fnd-g fnd-g--' + g[0] + '"><h3 class="fnd-g__h">' + esc(t('g.' + g[0])) + '</h3>' +
        (g[0] === 'vet' ? '<p class="fnd-g__note">' + esc(t('g.vet.note')) + '</p>' : '') +
        '<div class="fnd-g__list">' + g[1].map(card).join('') + '</div></section>';
    });
    h += '<p class="fnd-disc">' + esc(t('disclaimer')) + '</p>';
    return h;
  }

  function waHref() {
    return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t('wa.text', { summary: summaryParts().join(', ') }));
  }
  function footer() {
    const s = st.step;
    if (s === 'results') {
      foot.innerHTML = '<a class="btn btn--primary fnd-wa" href="' + esc(waHref()) + '" target="_blank" rel="noopener">' + ICON.wa + '<span>' + esc(t('wa')) + '</span></a>' +
        '<button type="button" class="fnd-restart" data-fnd-restart aria-label="' + esc(t('restart')) + '" title="' + esc(t('restart')) + '">' + ICON.redo + '<span>' + esc(t('restart')) + '</span></button>';
      return;
    }
    let ok = true, label = t('next');
    if (s === 'species') ok = !!st.sp;
    if (s === 'breed') ok = !!st.breed && !(st.sp === 'dogs' && st.breed === 'mixed' && !st.size);
    if (s === 'age') ok = !!st.age;
    if (s === 'coat') ok = !!st.coat;
    if (s === 'feats') label = t('show');
    foot.innerHTML = '<button type="button" class="btn btn--primary fnd-next" data-fnd-next' + (ok ? '' : ' disabled') + '>' + esc(label) + '</button>';
  }

  function render(dir) {
    if (!root) return;
    const views = { species: viewSpecies, breed: viewBreed, age: viewAge, coat: viewCoat, feats: viewFeats, results: viewResults };
    body.innerHTML = '<div class="fnd__view">' + (views[st.step] || viewSpecies)() + '</div>';
    head();
    footer();
    dlg.setAttribute('data-step', st.step);
    body.scrollTop = 0;
    const v = body.firstChild;
    if (dir && v && !reduce()) { v.classList.add(dir > 0 ? 'is-in-fwd' : 'is-in-back'); }
    save();
  }
  const reduce = () => !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  function filterBreeds(val) {
    const n = norm(val);
    let shown = 0;
    body.querySelectorAll('.fnd-row').forEach(r => {
      const ok = !n || r.getAttribute('data-q').indexOf(n) >= 0 || r.getAttribute('data-breed') === 'mixed';
      r.hidden = !ok; if (ok && r.getAttribute('data-breed') !== 'mixed') shown++;
    });
    const none = body.querySelector('.fnd-none');
    if (none) none.hidden = !(n && !shown);
  }
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/ə/g, 'e').replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ё/g, 'е')
      .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zа-я0-9]+/g, ' ').trim();
  }

  function go(step) {
    const list = steps().concat('results');
    const from = list.indexOf(st.step), to = list.indexOf(step);
    st.step = step;
    if (step === 'results') {
      ensureExtra().then(() => { if (st.step === 'results') { render(1); focusQ(); } });
      return;
    }
    render(to >= from ? 1 : -1);
    focusQ();
  }
  function nextStep() {
    const list = steps().concat('results');
    const i = list.indexOf(st.step);
    if (i >= 0 && i < list.length - 1) go(list[i + 1]);
  }
  function prevStep() {
    const list = steps().concat('results');
    const i = list.indexOf(st.step);
    if (i > 0) go(list[i - 1]);
  }
  function focusQ() {
    const h = body.querySelector('.fnd__q');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  }

  function onClick(e) {
    const el = e.target.closest('button, a, article');
    if (!el || !root.contains(el)) return;
    if (el.hasAttribute('data-fnd-x')) { close(); return; }
    if (el.hasAttribute('data-fnd-back')) { prevStep(); return; }
    if (el.hasAttribute('data-fnd-next')) { nextStep(); return; }
    if (el.hasAttribute('data-fnd-restart')) { const sp = st.sp; st = fresh(); st.sp = sp; go('breed'); return; }
    if (el.hasAttribute('data-goto')) { go(el.getAttribute('data-goto')); return; }
    if (el.hasAttribute('data-sp')) {
      const sp = el.getAttribute('data-sp');
      if (sp !== st.sp) st = Object.assign(fresh(), { sp });
      go('breed'); return;
    }
    if (el.hasAttribute('data-breed')) {
      const id = el.getAttribute('data-breed');
      st.breed = id;
      const b = breedOf(st.sp, id);
      if (st.sp === 'dogs') st.size = b ? b[4] : (id === 'mixed' ? st.size : '');
      st.coat = b && b[5] ? (b[5] === 'none' ? 'other' : b[5]) : '';
      if (st.sp === 'dogs' && id === 'mixed') {
        save();
        body.querySelectorAll('.fnd-row').forEach(r => { const on = r === el; r.classList.toggle('is-on', on); });
        if (!body.querySelector('#fndSize')) body.firstChild.insertAdjacentHTML('beforeend', viewSize());
        footer();
        const box = body.querySelector('#fndSize');
        if (box) { box.scrollIntoView({ block: 'nearest', behavior: reduce() ? 'auto' : 'smooth' }); const b0 = box.querySelector('button'); if (b0) b0.focus({ preventScroll: true }); }
        return;
      }
      go('age'); return;
    }
    if (el.hasAttribute('data-size')) { st.size = el.getAttribute('data-size'); go('age'); return; }
    if (el.hasAttribute('data-age')) { st.age = el.getAttribute('data-age'); if (st.age === 'starter' || st.age === 'junior') st.feats = st.feats.filter(f => f !== 'sterilised'); go(skipCoat() ? 'feats' : 'coat'); return; }
    if (el.hasAttribute('data-coat')) { st.coat = el.getAttribute('data-coat'); go('feats'); return; }
    if (el.hasAttribute('data-feat')) {
      const f = el.getAttribute('data-feat');
      st.feats = has(f) ? st.feats.filter(x => x !== f) : st.feats.concat(f);
      el.classList.toggle('is-on', has(f));
      el.setAttribute('aria-pressed', has(f) ? 'true' : 'false');
      save();
      return;
    }
    const pid = el.getAttribute('data-open') || (el.tagName === 'ARTICLE' ? el.getAttribute('data-pid') : '');
    if (pid) { openItem(pid, el); }
  }

  function openItem(pid, el) {
    const grid = document.getElementById('productsGrid');
    if (grid && window.NP && NP.openProduct) {
      lastFocus = el.closest('article') ? el.closest('article').querySelector('.fnd-p__more') : el;
      if (NP.openProduct(pid)) return;
    }
    // Главная: уходим в каталог; кнопка «Назад» в браузере вернёт к результатам подбора
    save();
    try { history.replaceState(history.state, '', '#finder'); } catch (e) { /* file:// */ }
    window.location.href = 'products.html#p=' + encodeURIComponent(pid);
  }

  function focusables() {
    return Array.from(dlg.querySelectorAll('button:not([disabled]):not([hidden]), a[href], input')).filter(x => x.offsetParent !== null || x === document.activeElement);
  }
  function onKey(e) {
    if (e.key === 'Escape') {
      if (document.documentElement.classList.contains('modal-open')) return;   // сначала закрывается карточка товара
      e.preventDefault(); close(); return;
    }
    if (e.key === 'Enter' && e.target.matches('.fnd-search input')) {
      e.preventDefault();
      const first = Array.from(body.querySelectorAll('.fnd-row')).find(r => !r.hidden && r.getAttribute('data-breed') !== 'mixed');
      if (first) first.click();
      return;
    }
    if (e.key !== 'Tab') return;
    const f = focusables(); if (!f.length) return;
    const a = f[0], z = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === a || !dlg.contains(document.activeElement))) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  }

  // ---------- Открытие и закрытие ----------
  function open(opts) {
    opts = opts || {};
    build();
    INDEX = null;
    const saved = load();
    if (opts.restore && saved) st = saved;
    else if (opts.sp === 'dogs' || opts.sp === 'cats') { if (!saved || saved.sp !== opts.sp || opts.fresh) st = Object.assign(fresh(), { sp: opts.sp }); else st = saved; if (st.step === 'species') st.step = 'breed'; }
    else st = saved && saved.step !== 'results' ? saved : fresh();
    if (st.step === 'species' && opts.sp) st.step = 'breed';
    if (!isOpen) {
      lastFocus = document.activeElement;
      isOpen = true;
      root.hidden = false;
      document.documentElement.classList.add('fnd-open');
      requestAnimationFrame(() => root.classList.add('is-open'));
      try { history.pushState({ npFinder: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
    }
    if (st.step === 'results') { go('results'); } else { render(0); }
    setTimeout(focusQ, 30);
    ensureExtra();
  }
  function close(fromPop) {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('is-open');
    document.documentElement.classList.remove('fnd-open');
    const done = () => { if (!isOpen) root.hidden = true; };
    if (reduce()) done(); else setTimeout(done, 320);
    if (pushed && !fromPop) { pushed = false; cleanAfterPop = true; try { history.back(); } catch (e) { cleanAfterPop = false; cleanHash(); } }
    else cleanHash();
    pushed = false;
    const back = lastFocus;
    lastFocus = null;
    if (back && back.isConnected && typeof back.focus === 'function') back.focus({ preventScroll: true });
  }
  // #finder в адресе нужен только чтобы открыть подбор; после закрытия убираем, иначе он откроется при перезагрузке
  let cleanAfterPop = false;
  function cleanHash() {
    if (!/^#finder(=|$)/.test(location.hash)) return;
    try { history.replaceState(history.state, '', location.pathname + location.search); } catch (e) { /* file:// */ }
  }
  window.addEventListener('popstate', () => {
    if (cleanAfterPop) { cleanAfterPop = false; if (!isOpen) cleanHash(); return; }
    if (!isOpen) return;
    if (document.documentElement.classList.contains('modal-open') && window.NP && NP.closeModal) { NP.closeModal(); try { history.pushState({ npFinder: 1 }, ''); } catch (e) { /* ignore */ } return; }
    pushed = false;
    close(true);
  });
  // После карточки товара фокус возвращается в подбор
  document.addEventListener('np:modal-close', () => {
    if (!isOpen) return;
    setTimeout(() => {
      const f = lastFocus && lastFocus.isConnected && root.contains(lastFocus) ? lastFocus : body.querySelector('.fnd__q');
      if (f) f.focus({ preventScroll: true });
    }, 0);
  });
  document.addEventListener('np:lang', () => { if (isOpen) render(0); relabelBar(); });

  // Любая кнопка или ссылка с [data-finder] открывает подбор
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-finder]');
    if (!el || (root && root.contains(el))) return;
    e.preventDefault();
    const sp = el.getAttribute('data-finder');
    open({ sp: sp === 'dogs' || sp === 'cats' ? sp : '', fresh: !!sp });
  });

  // ---------- Нижняя панель на телефоне ----------
  let bar = null;
  const BAR_ICONS = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5L12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/></svg>',
    catalog: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></svg>',
    finder: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="16" rx="4.2" ry="3.4"/><ellipse cx="6.2" cy="10.6" rx="1.8" ry="2.3"/><ellipse cx="17.8" cy="10.6" rx="1.8" ry="2.3"/><ellipse cx="9.4" cy="6.4" rx="1.8" ry="2.3"/><ellipse cx="14.6" cy="6.4" rx="1.8" ry="2.3"/></svg>',
    wa: ICON.wa
  };
  function buildBar() {
    if (bar || document.querySelector('.mbar')) return;
    const page = document.body.classList.contains('page-catalog') ? 'catalog' : 'home';
    bar = document.createElement('nav');
    bar.className = 'mbar';
    bar.innerHTML =
      '<a class="mbar__it' + (page === 'home' ? ' is-cur' : '') + '" href="index.html" data-bar="home"' + (page === 'home' ? ' aria-current="page"' : '') + '>' + BAR_ICONS.home + '<span></span></a>' +
      '<a class="mbar__it' + (page === 'catalog' ? ' is-cur' : '') + '" href="products.html" data-bar="catalog"' + (page === 'catalog' ? ' aria-current="page"' : '') + '>' + BAR_ICONS.catalog + '<span></span></a>' +
      '<button type="button" class="mbar__it mbar__it--main" data-finder data-bar="finder">' + BAR_ICONS.finder + '<span></span></button>' +
      '<a class="mbar__it" href="https://wa.me/' + WA + '" target="_blank" rel="noopener" data-bar="wa">' + BAR_ICONS.wa + '<span></span></a>';
    document.body.appendChild(bar);
    document.documentElement.classList.add('has-mbar');
    bar.addEventListener('click', e => {
      const a = e.target.closest('a[data-bar]');
      if (!a) return;
      const k = a.getAttribute('data-bar');
      if ((k === 'home' && page === 'home') || (k === 'catalog' && page === 'catalog')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduce() ? 'auto' : 'smooth' });
      }
    });
    relabelBar();
  }
  function relabelBar() {
    if (!bar) return;
    bar.setAttribute('aria-label', t('bar.label'));
    bar.querySelectorAll('[data-bar]').forEach(el => { el.querySelector('span').textContent = t('bar.' + el.getAttribute('data-bar')); });
  }

  // ---------- Старт ----------
  function boot() {
    buildBar();
    const h = location.hash;
    if (/^#finder(=|$)/.test(h)) {
      const m = h.match(/^#finder=(dogs|cats)/);
      if (m) open({ sp: m[1], fresh: true });
      else open({ restore: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  const missing = () => { INDEX = null; return P.filter(d => (d.sp ? [d.sp] : d.only ? [d.only] : ['dogs', 'cats']).some(sp => !resolve(d, sp))).map(d => d.b + ' ' + (d.sp || '*') + ' ' + d.n); };
  window.NPFinder = { open, close, missing, pick: (s) => { const keep = st; st = Object.assign(fresh(), s); const r = { dry: pick('dry', 2).concat(pick('alt', 1)), wet: pick('wet', 2), extra: pick('extra', 4), vet: pick('vet', 2) }; const out = {}; Object.keys(r).forEach(k => { out[k] = r[k].map(x => x.d.n + ' :: ' + reasons(x).join(' | ')); }); st = keep; return out; }, defs: P };
})();
