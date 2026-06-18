// ===== Каталог брендов Araton / Tauro Pro Line / Misoko (3 языка) =====
// Названия и описания взяты с упаковок (фото в assets/products).
const BRANDS_EXTRA = {
  "araton": [
    {
      group: { az: "İtlər üçün quru qida", ru: "Сухой корм для собак", en: "Dry food for dogs" },
      items: [
        { img: "assets/products/art-dog-lamb.png",
          az: { cat: "Adult · Bütün cinslər", name: "Lamb", desc: "Bütün cins yetkin itlər üçün quzu əti ilə tam rasion; sağlam dəri və parlaq tük üçün, 65% heyvani protein.", tags: ["Quzu", "Adult"] },
          ru: { cat: "Adult · Все породы", name: "Lamb", desc: "Полнорационный корм с ягнёнком для взрослых собак всех пород; для здоровой кожи и блестящей шерсти, 65% животного белка.", tags: ["Ягнёнок", "Adult"] },
          en: { cat: "Adult · All breeds", name: "Lamb", desc: "Complete lamb food for adult dogs of all breeds; for healthy skin and a shiny coat, 65% animal protein.", tags: ["Lamb", "Adult"] } },
        { img: "assets/products/art-dog-poultry.png",
          az: { cat: "Adult · Bütün cinslər", name: "Poultry", desc: "Bütün cins yetkin itlər üçün quş əti ilə tam rasion; sağlam dəri və tük üçün.", tags: ["Quş əti", "Adult"] },
          ru: { cat: "Adult · Все породы", name: "Poultry", desc: "Полнорационный корм с птицей для взрослых собак всех пород; для здоровой кожи и шерсти.", tags: ["Птица", "Adult"] },
          en: { cat: "Adult · All breeds", name: "Poultry", desc: "Complete poultry food for adult dogs of all breeds; for healthy skin and coat.", tags: ["Poultry", "Adult"] } },
        { img: "assets/products/art-dog-junior.png",
          az: { cat: "Junior · <1 il", name: "Junior", desc: "Bütün cins böyüyən bala itlər üçün qida; sağlam böyümə üçün, 68% heyvani protein.", tags: ["Junior", "<1 il"] },
          ru: { cat: "Junior · <1 года", name: "Junior", desc: "Корм для растущих щенков всех пород; для здорового роста, 68% животного белка.", tags: ["Junior", "<1 года"] },
          en: { cat: "Junior · <1 year", name: "Junior", desc: "Food for growing puppies of all breeds; for healthy growth, 68% animal protein.", tags: ["Junior", "<1 year"] } },
        { img: "assets/products/art-dog-maxi.png",
          az: { cat: "Adult · İri cinslər", name: "Maxi", desc: "İri cins (25–90 kq) yetkin itlər üçün tam rasion.", tags: ["Maxi", "25–90 kq"] },
          ru: { cat: "Adult · Крупные породы", name: "Maxi", desc: "Полнорационный корм для взрослых собак крупных пород (25–90 кг).", tags: ["Maxi", "25–90 кг"] },
          en: { cat: "Adult · Large breeds", name: "Maxi", desc: "Complete food for adult large-breed dogs (25–90 kg).", tags: ["Maxi", "25–90 kg"] } }
      ]
    },
    {
      group: { az: "Pişiklər üçün quru qida", ru: "Сухой корм для кошек", en: "Dry food for cats" },
      items: [
        { img: "assets/products/art-cat-salmon.png",
          az: { cat: "Adult · Bütün cinslər", name: "Salmon", desc: "Bütün cins yetkin pişiklər üçün qızılbalıqlı qida; 87% ət tərkibi.", tags: ["Qızılbalıq", "Adult"] },
          ru: { cat: "Adult · Все породы", name: "Salmon", desc: "Корм с лососем для взрослых кошек всех пород; 87% мясных ингредиентов.", tags: ["Лосось", "Adult"] },
          en: { cat: "Adult · All breeds", name: "Salmon", desc: "Salmon food for adult cats of all breeds; 87% meat content.", tags: ["Salmon", "Adult"] } },
        { img: "assets/products/art-cat-outdoor.png",
          az: { cat: "Adult · Bütün cinslər", name: "Outdoor", desc: "Aktiv, çöldə gəzən pişiklər üçün enerjili qida; 87% ət tərkibi.", tags: ["Outdoor", "Aktiv"] },
          ru: { cat: "Adult · Все породы", name: "Outdoor", desc: "Энергетический корм для активных, гуляющих на улице кошек; 87% мясных ингредиентов.", tags: ["Outdoor", "Активные"] },
          en: { cat: "Adult · All breeds", name: "Outdoor", desc: "Energy food for active, outdoor cats; 87% meat content.", tags: ["Outdoor", "Active"] } },
        { img: "assets/products/art-cat-sterilised.png",
          az: { cat: "Adult · Bütün cinslər", name: "Sterilised", desc: "Sterilizə olunmuş yetkin pişiklər üçün ideal çəki formulası; 47% heyvani protein.", tags: ["Sterilised", "İdeal çəki"] },
          ru: { cat: "Adult · Все породы", name: "Sterilised", desc: "Формула идеального веса для стерилизованных взрослых кошек; 47% животного белка.", tags: ["Sterilised", "Идеальный вес"] },
          en: { cat: "Adult · All breeds", name: "Sterilised", desc: "Ideal-weight formula for sterilised adult cats; 47% animal protein.", tags: ["Sterilised", "Ideal weight"] } },
        { img: "assets/products/art-cat-kitten.png",
          az: { cat: "Kitten · <1 il", name: "Kitten", desc: "Bütün cins böyüyən balaca pişiklər üçün qida.", tags: ["Kitten", "<1 il"] },
          ru: { cat: "Kitten · <1 года", name: "Kitten", desc: "Корм для растущих котят всех пород.", tags: ["Kitten", "<1 года"] },
          en: { cat: "Kitten · <1 year", name: "Kitten", desc: "Food for growing kittens of all breeds.", tags: ["Kitten", "<1 year"] } }
      ]
    },
    {
      group: { az: "Yaş qida (paketlər)", ru: "Влажный корм (паучи)", en: "Wet food (pouches)" },
      items: [
        { img: "assets/products/art-dog-pouch.png",
          az: { cat: "Junior · Bütün cinslər", name: "Lamb & Rabbit", desc: "Bala itlər üçün quzu və dovşan əti ilə paket; sousda şirəli ət parçaları, 92% heyvani protein, 85 q.", tags: ["Quzu", "Dovşan", "Junior"] },
          ru: { cat: "Junior · Все породы", name: "Lamb & Rabbit", desc: "Пауч с ягнёнком и кроликом для щенков; сочные кусочки мяса в соусе, 92% животного белка, 85 г.", tags: ["Ягнёнок", "Кролик", "Junior"] },
          en: { cat: "Junior · All breeds", name: "Lamb & Rabbit", desc: "Lamb and rabbit pouch for puppies; juicy meaty chunks in gravy, 92% animal protein, 85 g.", tags: ["Lamb", "Rabbit", "Junior"] } },
        { img: "assets/products/art-cat-pouch.png",
          az: { cat: "Adult · Bütün cinslər", name: "Salmon & Chicken", desc: "Yetkin pişiklər üçün qızılbalıq və toyuq ilə paket; sousda şirəli ət parçaları, 93% heyvani protein, 85 q.", tags: ["Qızılbalıq", "Toyuq", "Adult"] },
          ru: { cat: "Adult · Все породы", name: "Salmon & Chicken", desc: "Пауч с лососем и курицей для взрослых кошек; сочные кусочки мяса в соусе, 93% животного белка, 85 г.", tags: ["Лосось", "Курица", "Adult"] },
          en: { cat: "Adult · All breeds", name: "Salmon & Chicken", desc: "Salmon and chicken pouch for adult cats; juicy meaty chunks in gravy, 93% animal protein, 85 g.", tags: ["Salmon", "Chicken", "Adult"] } }
      ]
    }
  ],

  "tpl": [
    {
      group: { az: "Ultra Natural Care", ru: "Ultra Natural Care", en: "Ultra Natural Care" },
      items: [
        { img: "assets/products/tpl-un-deep.jpg",
          az: { cat: "Şampun · Step 1", name: "Deep Clean Shampoo", desc: "Bütün tük tipləri üçün dərin təmizləyən şampun; dəri və tükdən artıq yağ, çirk və toz hissəciklərini təmizləyir. Adaçayı, pantenol və qliserinlə, 94% təbii.", tags: ["Şampun", "Dərin təmizləmə"] },
          ru: { cat: "Шампунь · Step 1", name: "Deep Clean Shampoo", desc: "Глубоко очищающий шампунь для всех типов шерсти; удаляет излишки жира, грязь и частицы пыли с кожи и шерсти. С шалфеем, пантенолом и глицерином, 94% натуральных компонентов.", tags: ["Шампунь", "Глубокое очищение"] },
          en: { cat: "Shampoo · Step 1", name: "Deep Clean Shampoo", desc: "Deep cleansing shampoo for all coat types; wicks away excess oil, dirt and dust particles from skin and coat. With sage, panthenol and glycerin, 94% natural.", tags: ["Shampoo", "Deep clean"] } },
        { img: "assets/products/tpl-un-repair-sh.jpg",
          az: { cat: "Şampun · Step 2", name: "Repair & Nourish Shampoo", desc: "Bütün tük tipləri üçün bərpa edən və qidalandıran şampun; tükün quruluşunu bərpa edir, susuzlaşmış dərini və zədələnmiş tükü canlandırır. 95% təbii.", tags: ["Şampun", "Bərpa"] },
          ru: { cat: "Шампунь · Step 2", name: "Repair & Nourish Shampoo", desc: "Восстанавливающий и питающий шампунь для всех типов шерсти; восстанавливает структуру волоса, оживляет обезвоженную кожу и повреждённую шерсть. 95% натуральных компонентов.", tags: ["Шампунь", "Восстановление"] },
          en: { cat: "Shampoo · Step 2", name: "Repair & Nourish Shampoo", desc: "Repairing and nourishing shampoo for all coat types; repairs hair structure, revitalizes dehydrated skin and damaged coat. 95% natural.", tags: ["Shampoo", "Repair"] } },
        { img: "assets/products/tpl-un-repair-mask.jpg",
          az: { cat: "Maska · Step 3", name: "Repair & Nourish Mask", desc: "Bütün tük tipləri üçün bərpaedici maska; şi yağı və hidrolizə olunmuş ipəklə tükü dərindən bərpa edir. 97% təbii.", tags: ["Maska", "Bərpa"] },
          ru: { cat: "Маска · Step 3", name: "Repair & Nourish Mask", desc: "Восстанавливающая маска для всех типов шерсти; глубоко восстанавливает с маслом ши и гидролизованным шёлком. 97% натуральных компонентов.", tags: ["Маска", "Восстановление"] },
          en: { cat: "Mask · Step 3", name: "Repair & Nourish Mask", desc: "Repairing mask for all coat types; deeply restores with shea butter and hydrolyzed silk. 97% natural.", tags: ["Mask", "Repair"] } },
        { img: "assets/products/tpl-un-volume.jpg",
          az: { cat: "Şampun", name: "Volume Boost Shampoo", desc: "Hər növ tükə heyrətamiz həcm verən şampun; buğda proteini və qliserinlə. 90% təbii.", tags: ["Şampun", "Həcm"] },
          ru: { cat: "Шампунь", name: "Volume Boost Shampoo", desc: "Шампунь, придающий потрясающий объём любому типу шерсти; с пшеничным протеином и глицерином. 90% натуральных компонентов.", tags: ["Шампунь", "Объём"] },
          en: { cat: "Shampoo", name: "Volume Boost Shampoo", desc: "Shampoo that adds astonishing volume to any kind of coat; with wheat protein and glycerin. 90% natural.", tags: ["Shampoo", "Volume"] } },
        { img: "assets/products/tpl-un-whitening.jpg",
          az: { cat: "Şampun · Ağ tük", name: "Whitening Shampoo", desc: "Ağ və açıq tüklər üçün ağardıcı şampun; açıq və ağ tükü canlandırır və nəmləndirir. 92% təbii.", tags: ["Şampun", "Ağ tük"] },
          ru: { cat: "Шампунь · Белая шерсть", name: "Whitening Shampoo", desc: "Отбеливающий шампунь для белой и светлой шерсти; интенсивно осветляет и увлажняет светлую и белую шерсть. 92% натуральных компонентов.", tags: ["Шампунь", "Белая шерсть"] },
          en: { cat: "Shampoo · White coat", name: "Whitening Shampoo", desc: "Whitening shampoo for white and light coats; intensely brightens and hydrates light and white coats. 92% natural.", tags: ["Shampoo", "White coat"] } },
        { img: "assets/products/tpl-un-hydrate-mask.jpg",
          az: { cat: "Maska · Açıq tük", name: "Intense Hydrate Mask", desc: "Ağ və açıq tüklər üçün intensiv nəmləndirici maska; quru dərinin və açıq tükün təbii nəm balansını bərpa edir. 97% təbii.", tags: ["Maska", "Nəmləndirmə"] },
          ru: { cat: "Маска · Светлая шерсть", name: "Intense Hydrate Mask", desc: "Интенсивно увлажняющая маска для белой и светлой шерсти; восстанавливает естественный баланс влаги сухой кожи и светлой шерсти. 97% натуральных компонентов.", tags: ["Маска", "Увлажнение"] },
          en: { cat: "Mask · Light coat", name: "Intense Hydrate Mask", desc: "Intensive hydrating mask for white and light coats; restores the natural moisture balance of dry skin and light coat. 97% natural.", tags: ["Mask", "Hydration"] } }
      ]
    },
    {
      group: { az: "Pure Nature", ru: "Pure Nature", en: "Pure Nature" },
      items: [
        { img: "assets/products/tpl-pn-5in1.jpg",
          az: { cat: "Şampun", name: "5in1 Shampoo", desc: "Nəmləndirilmiş və güclü tük üçün efir yağı əsaslı universal 5-i-1 şampun; silikon, SLS, paraben və mineral yağsız.", tags: ["5in1", "Efir yağı"] },
          ru: { cat: "Шампунь", name: "5in1 Shampoo", desc: "Универсальный шампунь 5в1 на эфирных маслах для увлажнённой и крепкой шерсти; без силиконов, SLS, парабенов и минеральных масел.", tags: ["5в1", "Эфирные масла"] },
          en: { cat: "Shampoo", name: "5in1 Shampoo", desc: "Universal 5-in-1 essential-oil shampoo for moisturized and strong hair; no silicones, SLS, parabens or mineral oils.", tags: ["5in1", "Essential oils"] } },
        { img: "assets/products/tpl-pn-puppy.jpg",
          az: { cat: "Şampun", name: "Puppy & Kitten Shampoo", desc: "Balalar üçün incə efir yağı əsaslı şampun; həssas qulluq üçün, silikon, SLS, paraben və mineral yağsız.", tags: ["Puppy", "Kitten"] },
          ru: { cat: "Шампунь", name: "Puppy & Kitten Shampoo", desc: "Деликатный шампунь на эфирных маслах для щенков и котят; для бережного ухода, без силиконов, SLS, парабенов и минеральных масел.", tags: ["Puppy", "Kitten"] },
          en: { cat: "Shampoo", name: "Puppy & Kitten Shampoo", desc: "Delicate essential-oil shampoo for puppies and kittens; for gentle care, no silicones, SLS, parabens or mineral oils.", tags: ["Puppy", "Kitten"] } },
        { img: "assets/products/tpl-pn-furgrowth.jpg",
          az: { cat: "Şampun", name: "Fur Growth Shampoo", desc: "Tükün sıxlığı və yenidən böyüməsi üçün efir yağı əsaslı şampun.", tags: ["Tük böyüməsi"] },
          ru: { cat: "Шампунь", name: "Fur Growth Shampoo", desc: "Шампунь на эфирных маслах для густоты и роста шерсти.", tags: ["Рост шерсти"] },
          en: { cat: "Shampoo", name: "Fur Growth Shampoo", desc: "Essential-oil shampoo for coat density and regrowth.", tags: ["Fur growth"] } },
        { img: "assets/products/tpl-pn-detox.jpg",
          az: { cat: "Şampun", name: "Herbal Detox Shampoo", desc: "Dərin təmizləmə üçün bitki əsaslı efir yağı şampunu.", tags: ["Detoks", "Bitki"] },
          ru: { cat: "Шампунь", name: "Herbal Detox Shampoo", desc: "Травяной шампунь на эфирных маслах для глубокого очищения.", tags: ["Детокс", "Травы"] },
          en: { cat: "Shampoo", name: "Herbal Detox Shampoo", desc: "Herbal essential-oil shampoo for deep cleaning.", tags: ["Detox", "Herbal"] } },
        { img: "assets/products/tpl-pn-magicplex.jpg",
          az: { cat: "Şampun", name: "Magic-Plex Shampoo", desc: "Tükü ani canlandıran efir yağı əsaslı bərpaedici şampun.", tags: ["Bərpa"] },
          ru: { cat: "Шампунь", name: "Magic-Plex Shampoo", desc: "Восстанавливающий шампунь на эфирных маслах для мгновенного оживления шерсти.", tags: ["Восстановление"] },
          en: { cat: "Shampoo", name: "Magic-Plex Shampoo", desc: "Repairing essential-oil shampoo for instant revitalization.", tags: ["Repair"] } },
        { img: "assets/products/tpl-pn-sensitive.jpg",
          az: { cat: "Şampun", name: "Ultra Sensitive Shampoo", desc: "Gündəlik istifadə üçün həssas dəriyə uyğun efir yağı şampunu.", tags: ["Sensitive", "Gündəlik"] },
          ru: { cat: "Шампунь", name: "Ultra Sensitive Shampoo", desc: "Шампунь на эфирных маслах для чувствительной кожи, для ежедневного использования.", tags: ["Sensitive", "Ежедневный"] },
          en: { cat: "Shampoo", name: "Ultra Sensitive Shampoo", desc: "Essential-oil shampoo for sensitive skin, for daily use.", tags: ["Sensitive", "Daily"] } },
        { img: "assets/products/tpl-acc-3.jpg",
          az: { cat: "Balzam", name: "Paw & Nose Balm", desc: "Pəncə və burun üçün nəmləndirici balzam; şirin badam yağı, hindqozu və sidr ağacı ilə. Pure Nature.", tags: ["Pəncə", "Burun", "Nəmləndirmə"] },
          ru: { cat: "Бальзам", name: "Paw & Nose Balm", desc: "Увлажняющий бальзам для лап и носа; со сладким миндальным маслом, кокосом и кедром. Pure Nature.", tags: ["Лапы", "Нос", "Увлажнение"] },
          en: { cat: "Balm", name: "Paw & Nose Balm", desc: "Hydrating balm for paws and nose; with sweet almond oil, coconut and cedarwood. Pure Nature.", tags: ["Paw", "Nose", "Hydration"] } }
      ]
    },
    {
      group: { az: "Qulluq aksesuarları", ru: "Аксессуары для груминга", en: "Grooming accessories" },
      items: [
        { img: "assets/products/tpl-acc-1.jpg",
          az: { cat: "Aksesuar", name: "Claw Scissors", desc: "Pişik və balaca heyvanlar üçün dırnaq qayçısı; ağac saplı, dəqiq kəsim.", tags: ["Dırnaq", "Qayçı"] },
          ru: { cat: "Аксессуар", name: "Claw Scissors", desc: "Когтерез-ножницы для кошек и мелких животных; деревянные ручки, аккуратный срез.", tags: ["Когти", "Ножницы"] },
          en: { cat: "Accessory", name: "Claw Scissors", desc: "Claw scissors for cats and small pets; wooden handles, precise cut.", tags: ["Claws", "Scissors"] } },
        { img: "assets/products/tpl-acc-2.jpg",
          az: { cat: "Aksesuar", name: "Slicker Brush", desc: "Tükü daramaq və ölü tükü çıxarmaq üçün puxoderka (slicker) fırçası.", tags: ["Fırça", "Daraq"] },
          ru: { cat: "Аксессуар", name: "Slicker Brush", desc: "Пуходёрка (slicker) для расчёсывания и удаления отмершей шерсти.", tags: ["Щётка", "Расчёсывание"] },
          en: { cat: "Accessory", name: "Slicker Brush", desc: "Slicker brush for detangling and removing loose, dead hair.", tags: ["Brush", "Grooming"] } },
        { img: "assets/products/tpl-acc-4.png",
          az: { cat: "Aksesuar", name: "Microfiber Towel", desc: "Ultra-hopdurucu mikrofiber dəsmal; çimdikdən sonra tez qurutma üçün.", tags: ["Dəsmal", "Mikrofiber"] },
          ru: { cat: "Аксессуар", name: "Microfiber Towel", desc: "Ультравпитывающее полотенце из микрофибры; для быстрой сушки после купания.", tags: ["Полотенце", "Микрофибра"] },
          en: { cat: "Accessory", name: "Microfiber Towel", desc: "Ultra-absorbent microfiber towel; for quick drying after bathing.", tags: ["Towel", "Microfiber"] } }
      ]
    }
  ],

  "misoko": [
    {
      group: { az: "Top oyuncaqlar", ru: "Мячики", en: "Balls" },
      items: [
        { img: "assets/products/misoko-01.jpg",
          az: { cat: "Oyuncaq", name: "Tennis Balls (3 ədəd)", desc: "İtlər üçün rəngli tennis topları dəsti; aktiv oyun və apportirovka üçün. Champion's Choice.", tags: ["Top", "Oyun"] },
          ru: { cat: "Игрушка", name: "Теннисные мячики (3 шт.)", desc: "Набор цветных теннисных мячей для собак; для активной игры и апортировки. Champion's Choice.", tags: ["Мяч", "Игра"] },
          en: { cat: "Toy", name: "Tennis Balls (set of 3)", desc: "Set of colourful tennis balls for dogs; for active play and fetch. Champion's Choice.", tags: ["Ball", "Play"] } }
      ]
    },
    {
      group: { az: "Yumşaq oyuncaqlar", ru: "Плюшевые игрушки", en: "Plush toys" },
      items: [
        { img: "assets/products/misoko-02.jpg",
          az: { cat: "Yumşaq oyuncaq", name: "Armud", desc: "Səsli yumşaq armud oyuncağı; gəmirmək və oynamaq üçün.", tags: ["Plüş", "Meyvə"] },
          ru: { cat: "Плюшевая игрушка", name: "Груша", desc: "Мягкая плюшевая игрушка-груша с пищалкой; для игры и покусывания.", tags: ["Плюш", "Фрукт"] },
          en: { cat: "Plush toy", name: "Pear", desc: "Soft plush pear toy with a squeaker; for play and gentle chewing.", tags: ["Plush", "Fruit"] } },
        { img: "assets/products/misoko-03.jpg",
          az: { cat: "Yumşaq oyuncaq", name: "Portağal", desc: "Səsli yumşaq portağal oyuncağı; gəmirmək və oynamaq üçün.", tags: ["Plüş", "Meyvə"] },
          ru: { cat: "Плюшевая игрушка", name: "Апельсин", desc: "Мягкая плюшевая игрушка-апельсин с пищалкой; для игры и покусывания.", tags: ["Плюш", "Фрукт"] },
          en: { cat: "Plush toy", name: "Orange", desc: "Soft plush orange toy with a squeaker; for play and gentle chewing.", tags: ["Plush", "Fruit"] } },
        { img: "assets/products/misoko-04.jpg",
          az: { cat: "Yumşaq oyuncaq", name: "Limon", desc: "Səsli yumşaq limon oyuncağı; gəmirmək və oynamaq üçün.", tags: ["Plüş", "Meyvə"] },
          ru: { cat: "Плюшевая игрушка", name: "Лимон", desc: "Мягкая плюшевая игрушка-лимон с пищалкой; для игры и покусывания.", tags: ["Плюш", "Фрукт"] },
          en: { cat: "Plush toy", name: "Lemon", desc: "Soft plush lemon toy with a squeaker; for play and gentle chewing.", tags: ["Plush", "Fruit"] } },
        { img: "assets/products/misoko-06.jpg",
          az: { cat: "Yumşaq oyuncaq", name: "Kivi", desc: "Səsli yumşaq kivi oyuncağı; gəmirmək və oynamaq üçün.", tags: ["Plüş", "Meyvə"] },
          ru: { cat: "Плюшевая игрушка", name: "Киви", desc: "Мягкая плюшевая игрушка-киви с пищалкой; для игры и покусывания.", tags: ["Плюш", "Фрукт"] },
          en: { cat: "Plush toy", name: "Kiwi", desc: "Soft plush kiwi toy with a squeaker; for play and gentle chewing.", tags: ["Plush", "Fruit"] } },
        { img: "assets/products/misoko-07.jpg",
          az: { cat: "Yumşaq oyuncaq", name: "Üzüm", desc: "Səsli yumşaq üzüm oyuncağı; gəmirmək və oynamaq üçün.", tags: ["Plüş", "Meyvə"] },
          ru: { cat: "Плюшевая игрушка", name: "Виноград", desc: "Мягкая плюшевая игрушка-виноград с пищалкой; для игры и покусывания.", tags: ["Плюш", "Фрукт"] },
          en: { cat: "Plush toy", name: "Grape", desc: "Soft plush grape toy with a squeaker; for play and gentle chewing.", tags: ["Plush", "Fruit"] } },
        { img: "assets/products/misoko-08.jpg",
          az: { cat: "Yumşaq oyuncaq", name: "Avokado", desc: "Səsli yumşaq avokado oyuncağı; gəmirmək və oynamaq üçün.", tags: ["Plüş", "Meyvə"] },
          ru: { cat: "Плюшевая игрушка", name: "Авокадо", desc: "Мягкая плюшевая игрушка-авокадо с пищалкой; для игры и покусывания.", tags: ["Плюш", "Фрукт"] },
          en: { cat: "Plush toy", name: "Avocado", desc: "Soft plush avocado toy with a squeaker; for play and gentle chewing.", tags: ["Plush", "Fruit"] } }
      ]
    },
    {
      group: { az: "Lateks oyuncaqlar", ru: "Латексные игрушки", en: "Latex squeaky toys" },
      items: [
        { img: "assets/products/misoko-05.jpg",
          az: { cat: "Lateks oyuncaq", name: "Ay", desc: "Səsli lateks oyuncaq «Ay»; yumşaq, gəmirməyə davamlı.", tags: ["Lateks", "Səsli"] },
          ru: { cat: "Латексная игрушка", name: "Луна", desc: "Латексная игрушка-пищалка «Луна»; мягкая, устойчива к покусыванию.", tags: ["Латекс", "Пищалка"] },
          en: { cat: "Latex toy", name: "Moon", desc: "Latex squeaky toy “Moon”; soft and chew-resistant.", tags: ["Latex", "Squeaker"] } },
        { img: "assets/products/misoko-09.jpg",
          az: { cat: "Lateks oyuncaq", name: "Soğan", desc: "Səsli lateks oyuncaq «Soğan»; yumşaq, gəmirməyə davamlı.", tags: ["Lateks", "Səsli"] },
          ru: { cat: "Латексная игрушка", name: "Луковка", desc: "Латексная игрушка-пищалка «Луковка»; мягкая, устойчива к покусыванию.", tags: ["Латекс", "Пищалка"] },
          en: { cat: "Latex toy", name: "Onion", desc: "Latex squeaky toy “Onion”; soft and chew-resistant.", tags: ["Latex", "Squeaker"] } },
        { img: "assets/products/misoko-10.jpg",
          az: { cat: "Lateks oyuncaq", name: "Brokoli", desc: "Səsli lateks oyuncaq «Brokoli»; yumşaq, gəmirməyə davamlı.", tags: ["Lateks", "Səsli"] },
          ru: { cat: "Латексная игрушка", name: "Брокколи", desc: "Латексная игрушка-пищалка «Брокколи»; мягкая, устойчива к покусыванию.", tags: ["Латекс", "Пищалка"] },
          en: { cat: "Latex toy", name: "Broccoli", desc: "Latex squeaky toy “Broccoli”; soft and chew-resistant.", tags: ["Latex", "Squeaker"] } },
        { img: "assets/products/misoko-11.jpg",
          az: { cat: "Lateks oyuncaq", name: "Xoruz", desc: "Səsli lateks oyuncaq «Xoruz»; yumşaq, gəmirməyə davamlı.", tags: ["Lateks", "Səsli"] },
          ru: { cat: "Латексная игрушка", name: "Петух", desc: "Латексная игрушка-пищалка «Петух»; мягкая, устойчива к покусыванию.", tags: ["Латекс", "Пищалка"] },
          en: { cat: "Latex toy", name: "Rooster", desc: "Latex squeaky toy “Rooster”; soft and chew-resistant.", tags: ["Latex", "Squeaker"] } },
        { img: "assets/products/misoko-12.jpg",
          az: { cat: "Lateks oyuncaq", name: "Ördək", desc: "Səsli lateks oyuncaq «Ördək»; yumşaq, gəmirməyə davamlı.", tags: ["Lateks", "Səsli"] },
          ru: { cat: "Латексная игрушка", name: "Уточка", desc: "Латексная игрушка-пищалка «Уточка»; мягкая, устойчива к покусыванию.", tags: ["Латекс", "Пищалка"] },
          en: { cat: "Latex toy", name: "Duck", desc: "Latex squeaky toy “Duck”; soft and chew-resistant.", tags: ["Latex", "Squeaker"] } }
      ]
    }
  ]
};
