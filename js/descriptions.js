// Полные описания товаров Nature's Protection (3 языка), стиль и факты — с naturesprotection.com.
// Ключ: "<species>||<en.cat>||<en.name>". Подхватывается модальным окном товара (js/main.js).
const FULL_DESC = {
 "cats||Superior Care · White Cats||White Cats — Salmon & Krill": {
  "az": {
   "full": [
    "Ağ və açıq rəngli tükə malik yetkin pişiklər üçün hazırlanmış bu reseptdə qızılbalıq və kril dənizin ən qiymətli zülal mənbələrini bir araya gətirir. Açıq rəngli tükün gözəlliyini qorumaq üçün xüsusi düşünülmüş formula, göz ətrafında yaranan qəhvəyi göz yaşı izlərini azaltmağa kömək edir və tükün təmiz, parlaq görünüşünü dəstəkləyir.",
    "Yüksək heyvani zülal tərkibi ilə zəngin olan qida, sağlam dəri və parlaq tük üçün Omega-3 və Omega-6 yağ turşuları ilə möhkəmləndirilmişdir. Süni rəngləndirici, dad gücləndirici və konservantlardan azad olan bu resept Avropa İttifaqında, premium keyfiyyət standartları ilə istehsal olunur."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı yemləmə cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; təmiz içməli su həmişə əlçatan olmalıdır.",
   "comp": "Qızılbalıq və kril kimi keyfiyyətli dəniz zülalları ilə hazırlanmış, süni əlavələrdən azad resept."
  },
  "ru": {
   "full": [
    "Этот рецепт создан для взрослых кошек со светлой и белой шерстью и объединяет лосось и криль — два ценнейших источника морского белка. Специально продуманная формула помогает уменьшить коричневые слёзные дорожки вокруг глаз и поддерживает чистый, сияющий вид светлой шубки.",
    "Богатый высоким содержанием животного белка корм обогащён жирными кислотами Омега-3 и Омега-6 для здоровой кожи и блестящей шерсти. Рецепт не содержит искусственных красителей, усилителей вкуса и консервантов и произведён в Европейском Союзе по премиальным стандартам качества."
   ],
   "feeding": "Давайте суточную норму согласно таблице кормления на упаковке, корректируя её с учётом возраста, веса и активности кошки; чистая питьевая вода должна быть доступна всегда.",
   "comp": "Рецепт на основе качественных морских белков — лосося и криля, без искусственных добавок."
  },
  "en": {
   "full": [
    "Crafted for adult cats with white and light-coloured coats, this recipe brings together salmon and krill — two of the sea's most prized sources of protein. The specially balanced formula helps reduce the brown tear stains that can form around the eyes, keeping a pale coat looking clean, bright and beautifully cared for.",
    "Rich in animal protein, the food is fortified with Omega-3 and Omega-6 fatty acids to support healthy skin and a glossy coat. Free from artificial colours, flavours and preservatives, it is made in the EU to premium quality standards."
   ],
   "feeding": "Feed the daily amount according to the feeding table on the pack, adjusting for your cat's age, weight and activity level; always keep fresh drinking water available.",
   "comp": "Built around quality marine proteins such as salmon and krill, with no artificial additives."
  }
 },
 "cats||Superior Care · Red Cats||Red Cats — Salmon (RCE)": {
  "az": {
   "full": [
    "Qəhvəyi və qırmızımtıl tükə malik yetkin pişiklər üçün nəzərdə tutulmuş bu resept ləzzətli qızılbalıqla zəngindir. Tərkibindəki RCE kompleksi tükün təbii qırmızı və qəhvəyi çalarlarını gücləndirərək rəngin canlı və dərin görünməsinə kömək edir, beləliklə pişiyinizin tükü bütün zənginliyi ilə parlayır.",
    "Yüksək heyvani zülal məzmunu sağlam əzələ və enerji üçün dəstək verir, Omega-3 və Omega-6 yağ turşuları isə dəri sağlamlığını və tükün parlaqlığını qoruyur. 1 yaşdan etibarən uyğun olan bu premium qida süni rəngləndirici, dad gücləndirici və konservantlar olmadan Avropa İttifaqında istehsal edilir."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı yemləmə cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; təmiz içməli su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli qızılbalıq zülalı və rəngi gücləndirən RCE kompleksi ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот рецепт предназначен для взрослых кошек с коричневой и рыжей шерстью и насыщен вкусным лососем. Входящий в состав комплекс RCE подчёркивает естественные красные и коричневые оттенки, помогая окрасу выглядеть ярким и глубоким, чтобы шерсть вашего питомца сияла во всём своём богатстве.",
    "Высокое содержание животного белка поддерживает крепкие мышцы и энергию, а жирные кислоты Омега-3 и Омега-6 заботятся о здоровье кожи и блеске шерсти. Подходящий с 1 года, этот премиальный корм произведён в Европейском Союзе без искусственных красителей, усилителей вкуса и консервантов."
   ],
   "feeding": "Давайте суточную норму согласно таблице кормления на упаковке, корректируя её с учётом возраста, веса и активности кошки; чистая питьевая вода должна быть доступна всегда.",
   "comp": "Создан на основе качественного лососевого белка и комплекса RCE, усиливающего окрас."
  },
  "en": {
   "full": [
    "Designed for adult cats with brown and red coats, this recipe is rich in flavourful salmon. The RCE complex within the formula enhances the natural red and brown tones of the coat, helping the colour appear vivid and deep so your cat's fur shines in all its richness.",
    "A high level of animal protein supports strong muscles and lasting energy, while Omega-3 and Omega-6 fatty acids care for healthy skin and a glossy coat. Suitable from 1 year of age, this premium food is made in the EU without artificial colours, flavours or preservatives."
   ],
   "feeding": "Feed the daily amount according to the feeding table on the pack, adjusting for your cat's age, weight and activity level; always keep fresh drinking water available.",
   "comp": "Made with quality salmon protein and the colour-enhancing RCE complex."
  }
 },
 "cats||Superior Care · Dark Cats||Dark Cats — Salmon (DCE)": {
  "az": {
   "full": [
    "Qara və tünd rəngli tükə malik yetkin pişiklər üçün yaradılmış bu resept dadlı qızılbalıqla zəngindir. Tərkibindəki DCE kompleksi tükün dərin tünd və qara rəngini qorumağa kömək edərək, pişiyinizin xəz örtüyünün zəngin, doymuş və parlaq görünməsini təmin edir.",
    "Yüksək heyvani zülal məzmunu sağlam əzələ tonusunu və enerjini dəstəkləyir, Omega-3 və Omega-6 yağ turşuları isə dəri sağlamlığı və tükün təbii parıltısı üçün qayğı göstərir. 1 yaşdan etibarən uyğun olan bu premium qida Avropa İttifaqında, süni rəngləndirici, dad gücləndirici və konservantlar olmadan istehsal olunur."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı yemləmə cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; təmiz içməli su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli qızılbalıq zülalı və tünd rəngi qoruyan DCE kompleksi ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот рецепт создан для взрослых кошек с чёрной и тёмной шерстью и насыщен вкусным лососем. Входящий в состав комплекс DCE помогает сохранить глубокий тёмный и чёрный окрас, чтобы шубка вашего питомца выглядела насыщенной, богатой и блестящей.",
    "Высокое содержание животного белка поддерживает крепкий мышечный тонус и энергию, а жирные кислоты Омега-3 и Омега-6 заботятся о здоровье кожи и естественном блеске шерсти. Подходящий с 1 года, этот премиальный корм произведён в Европейском Союзе без искусственных красителей, усилителей вкуса и консервантов."
   ],
   "feeding": "Давайте суточную норму согласно таблице кормления на упаковке, корректируя её с учётом возраста, веса и активности кошки; чистая питьевая вода должна быть доступна всегда.",
   "comp": "Создан на основе качественного лососевого белка и комплекса DCE, сохраняющего тёмный окрас."
  },
  "en": {
   "full": [
    "Created for adult cats with black and dark coats, this recipe is rich in flavourful salmon. The DCE complex within the formula helps preserve the deep dark and black colour, keeping your cat's coat looking saturated, rich and beautifully glossy.",
    "A high level of animal protein supports strong muscle tone and energy, while Omega-3 and Omega-6 fatty acids care for healthy skin and the natural shine of the coat. Suitable from 1 year of age, this premium food is made in the EU without artificial colours, flavours or preservatives."
   ],
   "feeding": "Feed the daily amount according to the feeding table on the pack, adjusting for your cat's age, weight and activity level; always keep fresh drinking water available.",
   "comp": "Made with quality salmon protein and the colour-preserving DCE complex."
  }
 },
 "cats||Kitten||Kitten — Poultry": {
  "az": {
   "full": [
    "Bu quş əti reseptiı bütün cinslərdən olan, 1 yaşına qədər balacaların böyüməsinin ən vacib mərhələsi üçün hazırlanmışdır. 63% heyvani zülal məzmunu sürətli inkişaf, güclü əzələ və sağlam böyümə üçün lazımi tikinti materialını təmin edir, buğdasız tərkib isə həzm sistemini yüngül saxlayır.",
    "Resept eyni zamanda südverən pişiklər üçün də uyğundur, çünki bu dövrdə artan enerji ehtiyacını dəstəkləyir. Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş qida sağlam dəri və yumşaq tük üçün qayğı göstərir, süni rəngləndirici, dad gücləndirici və konservantlar olmadan Avropa İttifaqında istehsal edilir."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı yemləmə cədvəlinə uyğun verin və balacanın yaşına, çəkisinə və aktivliyinə görə tənzimləyin; təmiz içməli su həmişə əlçatan olmalıdır.",
   "comp": "Yüksək heyvani zülal məzmunu və buğdasız tərkib ilə hazırlanmış keyfiyyətli resept."
  },
  "ru": {
   "full": [
    "Этот рецепт с птицей создан для самого важного этапа роста котят всех пород в возрасте до 1 года. Содержание животного белка 63% обеспечивает строительный материал для быстрого развития, крепких мышц и здорового роста, а состав без пшеницы бережно относится к пищеварению малыша.",
    "Корм также подходит кормящим кошкам, поддерживая повышенную потребность в энергии в этот период. Обогащённый жирными кислотами Омега-3 и Омега-6, он заботится о здоровой коже и мягкой шёрстке, и произведён в Европейском Союзе без искусственных красителей, усилителей вкуса и консервантов."
   ],
   "feeding": "Давайте суточную норму согласно таблице кормления на упаковке, корректируя её с учётом возраста, веса и активности котёнка; чистая питьевая вода должна быть доступна всегда.",
   "comp": "Рецепт с высоким содержанием животного белка и составом без пшеницы."
  },
  "en": {
   "full": [
    "This poultry recipe is made for the most important stage of growth in kittens of all breeds under 1 year of age. With 63% animal protein, it provides the building blocks for rapid development, strong muscles and healthy growth, while the wheat-free composition stays gentle on a young digestion.",
    "The recipe is also suitable for lactating cats, supporting their increased energy needs during this demanding period. Fortified with Omega-3 and Omega-6 fatty acids, it cares for healthy skin and a soft coat, and is made in the EU without artificial colours, flavours or preservatives."
   ],
   "feeding": "Feed the daily amount according to the feeding table on the pack, adjusting for the kitten's age, weight and activity level; always keep fresh drinking water available.",
   "comp": "A quality recipe with a high level of animal protein and a wheat-free composition."
  }
 },
 "cats||Indoor||Indoor — Poultry": {
  "az": {
   "full": [
    "Bu yüngül quş əti formulu evdə yaşayan, az hərəkətli pişiklərin gündəlik ehtiyaclarına uyğunlaşdırılmışdır. 65% heyvani zülal məzmunu ilə zəngin olan qida, az aktiv həyat tərzi sürən pişiklərdə artıq çəkinin yığılmasının qarşısını almağa kömək edir və ideal forma saxlamağı dəstəkləyir.",
    "Buğdasız tərkib həzmi yüngül saxlayır, Omega-3 və Omega-6 yağ turşuları isə sağlam dəri və parlaq tük üçün qayğı göstərir. Premium keyfiyyət standartları ilə Avropa İttifaqında istehsal olunan resept süni rəngləndirici, dad gücləndirici və konservantlardan azaddır."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı yemləmə cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; təmiz içməli su həmişə əlçatan olmalıdır.",
   "comp": "Yüksək heyvani zülal və buğdasız tərkib ilə hazırlanmış yüngül resept."
  },
  "ru": {
   "full": [
    "Эта лёгкая формула с птицей адаптирована под повседневные потребности домашних малоподвижных кошек. Богатый содержанием животного белка 65%, корм помогает избежать накопления лишнего веса при малоактивном образе жизни и поддерживает идеальную форму питомца.",
    "Состав без пшеницы бережно относится к пищеварению, а жирные кислоты Омега-3 и Омега-6 заботятся о здоровой коже и блестящей шерсти. Произведённый в Европейском Союзе по премиальным стандартам качества, рецепт не содержит искусственных красителей, усилителей вкуса и консервантов."
   ],
   "feeding": "Давайте суточную норму согласно таблице кормления на упаковке, корректируя её с учётом возраста, веса и активности кошки; чистая питьевая вода должна быть доступна всегда.",
   "comp": "Лёгкий рецепт с высоким содержанием животного белка и составом без пшеницы."
  },
  "en": {
   "full": [
    "This light poultry formula is tailored to the everyday needs of low-activity indoor cats. Rich in animal protein at 65%, it helps prevent the build-up of excess weight that can come with a less active lifestyle and supports your cat in staying in ideal shape.",
    "The wheat-free composition keeps digestion light, while Omega-3 and Omega-6 fatty acids care for healthy skin and a glossy coat. Made in the EU to premium quality standards, the recipe is free from artificial colours, flavours and preservatives."
   ],
   "feeding": "Feed the daily amount according to the feeding table on the pack, adjusting for your cat's age, weight and activity level; always keep fresh drinking water available.",
   "comp": "A light recipe with a high level of animal protein and a wheat-free composition."
  }
 },
 "cats||Sensitive Digestion||Sensitive Digestion — Poultry": {
  "az": {
   "full": [
    "Həssas həzm sisteminə malik yetkin pişiklər üçün hazırlanmış bu resept asan mənimsənilən quş ətini əsas alır. Təəccüblü dərəcədə yüksək olan 92% heyvani zülal məzmunu mədə-bağırsaq sistemini yüngül saxlayır və həzm problemləri yaşayan pişiklərə daha rahat həzm üçün dəstək verir.",
    "Buğdasız tərkib həssas mədəni qıcıqlandıra biləcək komponentlərdən qaçmağa imkan verir, Omega-3 və Omega-6 yağ turşuları isə sağlam dəri və parlaq tük üçün qayğı göstərir. Premium resept Avropa İttifaqında, süni rəngləndirici, dad gücləndirici və konservantlar olmadan istehsal olunur."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı yemləmə cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; təmiz içməli su həmişə əlçatan olmalıdır.",
   "comp": "Asan mənimsənilən quş əti və yüksək heyvani zülal məzmunu ilə hazırlanmış buğdasız resept."
  },
  "ru": {
   "full": [
    "Этот рецепт создан для взрослых кошек с чувствительным пищеварением и основан на легкоусвояемой птице. Впечатляюще высокое содержание животного белка 92% бережно относится к желудочно-кишечному тракту и поддерживает более комфортное пищеварение у кошек, склонных к проблемам кишечника.",
    "Состав без пшеницы позволяет избегать компонентов, способных раздражать чувствительный желудок, а жирные кислоты Омега-3 и Омега-6 заботятся о здоровой коже и блестящей шерсти. Премиальный рецепт произведён в Европейском Союзе без искусственных красителей, усилителей вкуса и консервантов."
   ],
   "feeding": "Давайте суточную норму согласно таблице кормления на упаковке, корректируя её с учётом возраста, веса и активности кошки; чистая питьевая вода должна быть доступна всегда.",
   "comp": "Рецепт без пшеницы на основе легкоусвояемой птицы с высоким содержанием животного белка."
  },
  "en": {
   "full": [
    "This recipe is made for adult cats with sensitive digestion and is built around easily digestible poultry. An impressively high 92% animal protein content stays gentle on the gastrointestinal tract and supports more comfortable digestion in cats prone to intestinal problems.",
    "The wheat-free composition helps avoid ingredients that can irritate a sensitive stomach, while Omega-3 and Omega-6 fatty acids care for healthy skin and a glossy coat. This premium recipe is made in the EU without artificial colours, flavours or preservatives."
   ],
   "feeding": "Feed the daily amount according to the feeding table on the pack, adjusting for your cat's age, weight and activity level; always keep fresh drinking water available.",
   "comp": "A wheat-free recipe built on easily digestible poultry with a high level of animal protein."
  }
 },
 "cats||Urinary · VET||Urinary Formula-S — Poultry": {
  "az": {
   "full": [
    "Bu xüsusi quş əti formulu yetkin pişiklərdə sağlam sidik yollarını dəstəkləmək üçün hazırlanmışdır. Düşünülmüş tərkib struvit daşlarının əmələ gəlmə riskini azaltmağa kömək edir və sidik sisteminin tarazlığını qorumaqda dəstək olur, bu da onu həssas pişiklər üçün etibarlı gündəlik seçim edir.",
    "66% heyvani zülal məzmunu sağlam əzələ tonusu və enerji üçün qida verir, buğdasız tərkib isə həzmi yüngül saxlayır. Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş resept dəri və tük sağlamlığına qayğı göstərir və Avropa İttifaqında süni əlavələr olmadan istehsal olunur."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı yemləmə cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; təmiz içməli su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli quş əti və yüksək heyvani zülal məzmunu ilə hazırlanmış buğdasız resept."
  },
  "ru": {
   "full": [
    "Эта специальная формула с птицей создана для поддержания здоровья мочевыводящих путей у взрослых кошек. Продуманный состав помогает снизить риск образования струвитных камней и поддерживает баланс мочевыделительной системы, что делает корм надёжным ежедневным выбором для чувствительных питомцев.",
    "Содержание животного белка 66% обеспечивает питание для крепкого мышечного тонуса и энергии, а состав без пшеницы сохраняет лёгкость пищеварения. Обогащённый жирными кислотами Омега-3 и Омега-6, рецепт заботится о здоровье кожи и шерсти и произведён в Европейском Союзе без искусственных добавок."
   ],
   "feeding": "Давайте суточную норму согласно таблице кормления на упаковке, корректируя её с учётом возраста, веса и активности кошки; чистая питьевая вода должна быть доступна всегда.",
   "comp": "Рецепт без пшеницы с качественной птицей и высоким содержанием животного белка."
  },
  "en": {
   "full": [
    "This specialised poultry formula is created to support healthy urinary tract function in adult cats. The thoughtfully balanced composition helps reduce the risk of struvite stone formation and supports balance in the urinary system, making it a dependable everyday choice for sensitive cats.",
    "With 66% animal protein, it provides nourishment for strong muscle tone and energy, while the wheat-free composition keeps digestion light. Fortified with Omega-3 and Omega-6 fatty acids, the recipe cares for skin and coat health and is made in the EU without artificial additives."
   ],
   "feeding": "Feed the daily amount according to the feeding table on the pack, adjusting for your cat's age, weight and activity level; always keep fresh drinking water available.",
   "comp": "A wheat-free recipe with quality poultry and a high level of animal protein."
  }
 },
 "cats||Sterilised||Sterilised — Poultry": {
  "az": {
   "full": [
    "Sterilised — Quş əti steril edilmiş yetkin pişiklərin xüsusi ehtiyaclarını nəzərə alaraq hazırlanmış quru qidadır. Yüksək heyvan zülalı tərkibi formanı qoruyur, dadlı quş əti isə pişiyinizin könüllü iştahla yeməsini təmin edir. Buğdasız resept həssas həzmi olan pişiklər üçün incə seçimdir.",
    "Tərkibə əlavə edilmiş Omeqa-3 və Omeqa-6 yağ turşuları sağlam dəri və parlaq tük örtüyünü dəstəkləyir. Süni rəngləndiricilər, dad gücləndiriciləri və konservantlar olmadan, soya və GMO-suz, Aİ-də istehsal olunan bu qida steril edilmiş pişiyinizə hər gün etibarlı qayğı bəxş edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su olsun.",
   "comp": "Yüksək faizli heyvan zülalı və keyfiyyətli quş əti əsasında, buğdasız formul ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Sterilised — Птица — это сухой корм, созданный с учётом особых потребностей стерилизованных взрослых кошек. Высокое содержание животного белка помогает сохранять форму, а вкусное мясо птицы делает каждый приём пищи желанным. Рецепт без пшеницы станет деликатным выбором для кошек с чувствительным пищеварением.",
    "Добавленные жирные кислоты Омега-3 и Омега-6 поддерживают здоровье кожи и блеск шерсти. Без искусственных красителей, усилителей вкуса и консервантов, без сои и ГМО, произведённый в ЕС, этот корм дарит вашей стерилизованной кошке надёжную заботу каждый день."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Создан на основе высокого процента животного белка и качественного мяса птицы по рецептуре без пшеницы."
  },
  "en": {
   "full": [
    "Sterilised — Poultry is a dry food crafted around the specific needs of sterilised adult cats. Its high animal-protein content helps keep your cat in shape, while the tasty poultry makes every meal something to look forward to. The wheat-free recipe is a gentle choice for cats with a more sensitive digestion.",
    "Added Omega-3 and Omega-6 fatty acids support healthy skin and a glossy coat. With no artificial colours, flavour enhancers or preservatives, no soy and no GMO, and made in the EU, this food brings dependable everyday care to your sterilised companion."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Built around a high percentage of animal protein and quality poultry in a wheat-free formula."
  }
 },
 "cats||Starter Mousse||Starter Mousse — Chicken": {
  "az": {
   "full": [
    "Starter Mousse — Toyuq balaca pişik balaları üçün hazırlanmış incə və mülayim toyuq mussudur. İlk yumşaq qida (Best Start) kimi, ana südündən bərk qidaya yumşaq keçidi asanlaşdırır və körpə damağa uyğun zərif teksturaya malikdir. Hər tikəsi həm dadlı, həm də həzm üçün rahatdır.",
    "Bu konserv qida balaların təbii müdafiəsini dəstəkləməyə kömək edir və böyümə dövründə lazım olan qayğını təmin edir. Süni rəngləndiricilər və konservantlar olmadan hazırlanmış muss körpə pişiyinizin sağlam başlanğıcına etibarlı dəstək olur."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı balanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su olsun.",
   "comp": "Körpələrin həssas damağına uyğun incə toyuq əti əsasında hazırlanıb."
  },
  "ru": {
   "full": [
    "Starter Mousse — Курица — это нежный и деликатный куриный мусс для маленьких котят. В роли первого мягкого прикорма (Best Start) он облегчает плавный переход от материнского молока к твёрдой пище и обладает текстурой, подходящей для нежного животика. Каждый кусочек одновременно вкусный и лёгкий для усвоения.",
    "Этот консервированный корм помогает поддерживать естественную защиту котёнка и обеспечивает заботу, необходимую в период роста. Приготовленный без искусственных красителей и консервантов, мусс становится надёжной поддержкой для здорового старта вашего малыша."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности котёнка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Создан на основе нежного куриного мяса, подходящего для деликатного животика котят."
  },
  "en": {
   "full": [
    "Starter Mousse — Chicken is a tender, gentle chicken mousse made for tiny kittens. As a first soft food (Best Start), it eases the smooth transition from mother's milk to solid food, with a delicate texture suited to little tummies. Every spoonful is both tasty and easy to digest.",
    "This canned food helps support a kitten's natural defences and provides the care needed during the growing months. Prepared without artificial colours or preservatives, the mousse is a reassuring partner for your little one's healthy start."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your kitten's age, weight and activity; always keep fresh water available.",
   "comp": "Made around tender chicken suited to the delicate appetite of young kittens."
  }
 },
 "cats||Wet food||Beef & Lamb — Adult cat": {
  "az": {
   "full": [
    "Beef & Lamb — Yetkin pişik yetkin pişiklər üçün mal əti və quzu ətindən hazırlanmış dadlı yaş qidadır. Şirəli ətli tikələr zəngin dad və yüksək nəmlik təqdim edir, dənsiz və qlütensiz resept isə həssas pişiklər üçün incə seçim olur. Hər porsiya iştahaçan və qidalandırıcıdır.",
    "Tərkibə əlavə edilmiş vitaminlər və minerallar sağlam ürək və gözlərin saxlanmasına dəstək olur. Süni rəngləndiricilər və konservantlar olmadan, Aİ-də istehsal olunan bu qida pişiyinizin gündəlik menyusuna keyfiyyət və ləzzət qatır."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su olsun.",
   "comp": "Mal əti və quzu ətindən hazırlanmış, dənsiz və qlütensiz, vitamin və minerallarla zənginləşdirilmiş resept."
  },
  "ru": {
   "full": [
    "Beef & Lamb — Взрослые кошки — это вкусный влажный корм из говядины и ягнёнка для взрослых кошек. Сочные мясные кусочки дарят насыщенный вкус и высокую влажность, а беззерновой и не содержащий глютена рецепт становится деликатным выбором для чувствительных питомцев. Каждая порция аппетитна и питательна.",
    "Добавленные витамины и минералы поддерживают здоровье сердца и глаз. Без искусственных красителей и консервантов, произведённый в ЕС, этот корм добавляет качество и вкус в ежедневное меню вашей кошки."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Рецептура из говядины и ягнёнка, беззерновая и без глютена, обогащённая витаминами и минералами."
  },
  "en": {
   "full": [
    "Beef & Lamb — Adult cat is a tasty wet food made with beef and lamb for adult cats. Juicy meaty chunks deliver rich flavour and high moisture, while the grain-free and gluten-free recipe makes a gentle choice for sensitive companions. Every serving is appetising and nourishing.",
    "Added vitamins and minerals help support a healthy heart and eyes. With no artificial colours or preservatives and made in the EU, this food brings quality and great taste to your cat's daily menu."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "A beef-and-lamb recipe, grain-free and gluten-free, fortified with vitamins and minerals."
  }
 },
 "cats||Wet food (can)||Chicken & Cheese": {
  "az": {
   "full": [
    "Toyuq və pendir yetkin pişiklər üçün toyuq və pendirlə hazırlanmış dadlı konserv qidadır. Şirəli ətli tikələr və pendirin zəngin aroması ən seçici pişiklərin belə iştahını oyadır, yüksək nəmlik isə gündəlik maye balansına töhfə verir. Dadlı və qane edən bir təcrübədir.",
    "Dənsiz və qlütensiz resept həssas pişiklər üçün incə seçim olur. Süni rəngləndiricilər və konservantlar olmadan, Aİ-də istehsal olunan bu qida pişiyinizin menyusuna ləzzətli müxtəliflik gətirir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su olsun.",
   "comp": "Toyuq və pendirlə, dənsiz və qlütensiz resept əsasında hazırlanıb."
  },
  "ru": {
   "full": [
    "Курица и сыр — это вкусные консервы с курицей и сыром для взрослых кошек. Сочные мясные кусочки и насыщенный аромат сыра пробуждают аппетит даже у самых привередливых питомцев, а высокая влажность поддерживает ежедневный водный баланс. Это вкусное и сытное угощение.",
    "Беззерновой и не содержащий глютена рецепт становится деликатным выбором для чувствительных кошек. Без искусственных красителей и консервантов, произведённые в ЕС, эти консервы добавляют аппетитное разнообразие в меню вашей кошки."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Приготовлены с курицей и сыром по беззерновой рецептуре без глютена."
  },
  "en": {
   "full": [
    "Chicken & Cheese is a tasty canned food made with chicken and cheese for adult cats. Juicy meaty chunks and the rich aroma of cheese awaken the appetite of even the fussiest companions, while the high moisture content supports daily hydration. It is a flavourful and satisfying treat.",
    "The grain-free and gluten-free recipe makes a gentle choice for sensitive cats. With no artificial colours or preservatives and made in the EU, this canned food brings appetising variety to your cat's menu."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with chicken and cheese in a grain-free, gluten-free recipe."
  }
 },
 "cats||Wet food (can)||White Fish": {
  "az": {
   "full": [
    "Ağ balıq həssas həzmi olan yetkin pişiklər üçün ağ balıqla hazırlanmış zərif konserv qidadır. Yüngül və yaxşı həzm olunan ağ balıq mədəyə yumşaq təsir göstərir, şirəli teksturası isə iştahaçan və dadlı bir təcrübə yaradır. Həssas pişiklər üçün düşünülmüş incə seçimdir.",
    "Dənsiz resept gündəlik qidalanmaya yüngüllük qatır və yüksək nəmlik maye balansını dəstəkləyir. Süni rəngləndiricilər və konservantlar olmadan, Aİ-də istehsal olunan bu qida həssas pişiyinizə qayğıkeş bir menyu təqdim edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su olsun.",
   "comp": "Yüngül və yaxşı həzm olunan ağ balıq əsasında, dənsiz resept ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Белая рыба — это деликатные консервы с белой рыбой для взрослых кошек с чувствительным пищеварением. Лёгкая и хорошо усваиваемая белая рыба мягко воздействует на желудок, а сочная текстура создаёт аппетитное и вкусное угощение. Это продуманный деликатный выбор для чувствительных питомцев.",
    "Беззерновой рецепт добавляет лёгкости в ежедневное питание, а высокая влажность поддерживает водный баланс. Без искусственных красителей и консервантов, произведённые в ЕС, эти консервы дарят вашей чувствительной кошке заботливое меню."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Приготовлены на основе лёгкой и хорошо усваиваемой белой рыбы по беззерновой рецептуре."
  },
  "en": {
   "full": [
    "White Fish is a delicate canned food made with white fish for adult cats with a sensitive digestion. The light, easily digestible white fish is gentle on the stomach, while its juicy texture creates an appetising and tasty experience. It is a thoughtful, gentle choice for sensitive companions.",
    "The grain-free recipe adds lightness to everyday feeding, and the high moisture content supports hydration. With no artificial colours or preservatives and made in the EU, this canned food offers your sensitive cat a caring menu."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made around light, easily digestible white fish in a grain-free recipe."
  }
 },
 "cats||Wet food (can)||Beef & Turkey Hearts (Kitten)": {
  "az": {
   "full": [
    "Mal əti və hinduşka ürəkləri (Kitten) böyüməkdə olan pişik balaları üçün mal əti və hinduşka ürəkləri ilə hazırlanmış zəngin konserv qidadır. Şirəli ətli tikələr körpə iştahını oyadır, yüksək nəmlik isə inkişaf dövründə vacib olan maye balansını dəstəkləyir. Hər porsiya dadlı və qidalandırıcıdır.",
    "Dənsiz resept körpələrin həssas həzminə uyğun incə seçimdir. Süni rəngləndiricilər və konservantlar olmadan, Aİ-də istehsal olunan bu qida balalarınızın sağlam böyüməsinə etibarlı dəstək olur."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı balanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su olsun.",
   "comp": "Mal əti və hinduşka ürəkləri ilə, dənsiz resept əsasında hazırlanıb."
  },
  "ru": {
   "full": [
    "Говядина и индюшиные сердечки (Kitten) — это насыщенные консервы из говядины и индюшиных сердечек для растущих котят. Сочные мясные кусочки пробуждают детский аппетит, а высокая влажность поддерживает водный баланс, важный в период развития. Каждая порция вкусна и питательна.",
    "Беззерновой рецепт — деликатный выбор, подходящий для чувствительного пищеварения малышей. Без искусственных красителей и консервантов, произведённые в ЕС, эти консервы становятся надёжной поддержкой здорового роста ваших котят."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности котёнка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Приготовлены из говядины и индюшиных сердечек по беззерновой рецептуре."
  },
  "en": {
   "full": [
    "Beef & Turkey Hearts (Kitten) is a rich canned food made with beef and turkey hearts for growing kittens. Juicy meaty chunks awaken a little one's appetite, while the high moisture content supports the hydration that matters during development. Every serving is tasty and nourishing.",
    "The grain-free recipe is a gentle choice suited to a kitten's sensitive digestion. With no artificial colours or preservatives and made in the EU, this canned food is a dependable support for your kittens' healthy growth."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your kitten's age, weight and activity; always keep fresh water available.",
   "comp": "Made with beef and turkey hearts in a grain-free recipe."
  }
 },
 "cats||Wet food (can)||Chicken & Duck": {
  "az": {
   "full": [
    "Toyuq və ördək steril edilmiş yetkin pişiklər üçün toyuq və ördəklə hazırlanmış dadlı konserv qidadır. Şirəli ətli tikələr zəngin dad təqdim edir, yüksək nəmlik isə steril edilmiş pişiklərin maye balansına töhfə verir. Hər porsiya iştahaçan və qane edicidir.",
    "Dənsiz resept həssas pişiklər üçün incə seçim olur və gündəlik qidalanmaya yüngüllük qatır. Süni rəngləndiricilər və konservantlar olmadan, Aİ-də istehsal olunan bu qida steril edilmiş pişiyinizə ləzzətli və qayğıkeş bir menyu bəxş edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su olsun.",
   "comp": "Toyuq və ördəklə, dənsiz resept əsasında hazırlanıb."
  },
  "ru": {
   "full": [
    "Курица и утка — это вкусные консервы с курицей и уткой для взрослых кошек после стерилизации. Сочные мясные кусочки дарят насыщенный вкус, а высокая влажность поддерживает водный баланс стерилизованных питомцев. Каждая порция аппетитна и приносит удовольствие.",
    "Беззерновой рецепт становится деликатным выбором для чувствительных кошек и добавляет лёгкости в ежедневное питание. Без искусственных красителей и консервантов, произведённые в ЕС, эти консервы дарят вашей стерилизованной кошке вкусное и заботливое меню."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Приготовлены с курицей и уткой по беззерновой рецептуре."
  },
  "en": {
   "full": [
    "Chicken & Duck is a tasty canned food made with chicken and duck for adult cats after sterilisation. Juicy meaty chunks deliver rich flavour, while the high moisture content supports the hydration of sterilised companions. Every serving is appetising and satisfying.",
    "The grain-free recipe makes a gentle choice for sensitive cats and adds lightness to everyday feeding. With no artificial colours or preservatives and made in the EU, this canned food gives your sterilised cat a flavourful and caring menu."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with chicken and duck in a grain-free recipe."
  }
 },
 "cats||Vitamins||Beauty Formula": {
  "az": {
   "full": [
    "Beauty Formula, pişiyinizin gözəlliyinin içəridən başladığına inananlar üçün düşünülmüş vitamin və mineral kompleksidir. Sağlam dəri və parlaq, ipək kimi tük üçün hazırlanmış bu formula gündəlik qulluğa zərif, lakin nəzərəçarpan dəstək verir.",
    "Hər gün asanlıqla verilən tabletlər şəklində təqdim olunan Beauty Formula sevimlinizin tükünün canlılığını və dərisinin sağlamlığını qorumağa kömək edir. Premium tərkib pişiyinizin özünü ən yaxşı şəkildə hiss etməsi və göstərməsi üçün qayğı ilə düşünülüb."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz, təzə su təmin edin.",
   "comp": "Sağlam dəri və parlaq tük üçün diqqətlə seçilmiş vitamin və minerallardan ibarətdir."
  },
  "ru": {
   "full": [
    "Beauty Formula — это комплекс витаминов и минералов для тех, кто уверен, что красота кошки начинается изнутри. Созданная для здоровой кожи и блестящей, шелковистой шерсти, эта формула обеспечивает мягкую, но заметную поддержку ежедневному уходу.",
    "В удобной форме таблеток Beauty Formula помогает сохранить жизненную силу шерсти и здоровье кожи вашего любимца. Премиальный состав продуман с заботой, чтобы кошка чувствовала и выглядела наилучшим образом каждый день."
   ],
   "feeding": "Давайте согласно таблице кормления на упаковке, корректируя порцию под возраст, вес и активность кошки; всегда обеспечивайте доступ к чистой свежей воде.",
   "comp": "Содержит тщательно подобранные витамины и минералы для здоровой кожи и блестящей шерсти."
  },
  "en": {
   "full": [
    "Beauty Formula is a vitamin and mineral complex for those who believe a cat's beauty begins from within. Crafted for healthy skin and a glossy, silky coat, this formula offers gentle yet visible support to your daily care routine.",
    "Presented as easy-to-give tablets, Beauty Formula helps preserve the vitality of your companion's coat and the health of their skin. The premium blend is thoughtfully designed so your cat looks and feels its very best every day."
   ],
   "feeding": "Give according to the feeding table on the pack, adjusting to your cat's age, weight and activity; always provide access to clean, fresh water.",
   "comp": "Contains carefully selected vitamins and minerals for healthy skin and a shiny coat."
  }
 },
 "cats||Paste||Malt Paste": {
  "az": {
   "full": [
    "Malt Paste, pişiklər üçün dadlı və faydalı əlavə qida olub, həzm sistemini dəstəkləmək və tük yumaqlarının yaranmasının qarşısını almaq üçün hazırlanıb. Prebiotiklərlə zənginləşdirilmiş bu pasta sağlam bağırsaq florasını qoruyaraq sevimlinizin daxili rahatlığına qayğı göstərir.",
    "Özünə qulluq edən pişiklər tez-tez tük udurlar, ona görə də Malt Paste gündəlik rutinə xoş bir kömək olur. Zərif dadı sayəsində əksər pişiklər onu həvəslə qəbul edir və o, mütəmadi istifadədə daha rahat həzmə dəstək verir."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və ehtiyacına görə tənzimləyin; daim təmiz, təzə su təmin edin.",
   "comp": "Sağlam həzm üçün prebiotiklərlə zənginləşdirilmişdir."
  },
  "ru": {
   "full": [
    "Malt Paste — вкусное и полезное дополнительное питание для кошек, созданное для поддержки пищеварения и профилактики образования комков шерсти. Обогащённая пребиотиками, эта паста заботится о внутреннем комфорте любимца, поддерживая здоровую микрофлору кишечника.",
    "Ухаживая за собой, кошки часто заглатывают шерсть, поэтому Malt Paste становится приятным помощником в ежедневном уходе. Благодаря мягкому вкусу большинство кошек охотно её принимают, а при регулярном использовании она поддерживает более лёгкое пищеварение."
   ],
   "feeding": "Давайте согласно таблице кормления на упаковке, корректируя порцию под возраст, вес и потребности кошки; всегда обеспечивайте доступ к чистой свежей воде.",
   "comp": "Обогащена пребиотиками для здорового пищеварения."
  },
  "en": {
   "full": [
    "Malt Paste is a tasty and beneficial complementary feed for cats, created to support digestion and help prevent the formation of hairballs. Enriched with prebiotics, this paste cares for your companion's inner comfort by supporting a healthy gut flora.",
    "Cats that groom themselves often swallow loose hair, which is why Malt Paste makes a welcome addition to the daily routine. Thanks to its mild flavour, most cats take it readily, and with regular use it supports smoother, easier digestion."
   ],
   "feeding": "Give according to the feeding table on the pack, adjusting to your cat's age, weight and needs; always provide access to clean, fresh water.",
   "comp": "Enriched with prebiotics to support healthy digestion."
  }
 },
 "cats||Paste||Anti-Hairball Malt Paste": {
  "az": {
   "full": [
    "Anti-Hairball Malt Paste xüsusilə sterilizə olunmuş pişiklər üçün düşünülüb — onların dəyişən ehtiyaclarını nəzərə alaraq həm tük yumaqları ilə mübarizə aparır, həm də sağlam çəki tarazlığına dəstək verir. Taurin və L-karnitin ilə zənginləşdirilmiş bu formula yağ mübadiləsini dəstəkləyərək sevimlinizin formada qalmasına kömək edir.",
    "Sterilizə olunmuş pişiklər tək-tək qulluq zamanı udduqları tükdən narahatlıq yaşaya bilər; bu pasta onların həzm sistemini yumşaq şəkildə dəstəkləyir. Dadlı və qəbul edilməsi asan olan Anti-Hairball Malt Paste gündəlik qayğının xoş bir hissəsinə çevrilir."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz, təzə su təmin edin.",
   "comp": "Tərkibində yağ mübadiləsini dəstəkləyən taurin və L-karnitin var."
  },
  "ru": {
   "full": [
    "Anti-Hairball Malt Paste разработана специально для стерилизованных кошек — с учётом их меняющихся потребностей она помогает бороться с комками шерсти и поддерживать здоровый баланс веса. Обогащённая таурином и L-карнитином, эта формула поддерживает жировой обмен, помогая любимцу оставаться в форме.",
    "Стерилизованные кошки могут испытывать дискомфорт от шерсти, заглатываемой во время вылизывания; эта паста мягко поддерживает их пищеварение. Вкусная и легко принимаемая, Anti-Hairball Malt Paste становится приятной частью ежедневного ухода."
   ],
   "feeding": "Давайте согласно таблице кормления на упаковке, корректируя порцию под возраст, вес и активность кошки; всегда обеспечивайте доступ к чистой свежей воде.",
   "comp": "Содержит таурин и L-карнитин, поддерживающие жировой обмен."
  },
  "en": {
   "full": [
    "Anti-Hairball Malt Paste is designed especially for sterilised cats — mindful of their changing needs, it helps combat hairballs while supporting a healthy weight balance. Enriched with taurine and L-carnitine, this formula supports fat metabolism to help your companion stay in good shape.",
    "Sterilised cats can experience discomfort from the hair they swallow while grooming; this paste gently supports their digestion. Tasty and easy to give, Anti-Hairball Malt Paste becomes a welcome part of the daily care routine."
   ],
   "feeding": "Give according to the feeding table on the pack, adjusting to your cat's age, weight and activity; always provide access to clean, fresh water.",
   "comp": "Contains taurine and L-carnitine to support fat metabolism."
  }
 },
 "cats||Milk replacer||Milk Replacer for Kittens": {
  "az": {
   "full": [
    "Milk Replacer for Kittens yenicə doğulmuş balalar üçün qayğı ilə hazırlanmış süd əvəzedicisidir və həyatlarının ən həssas dövründə onlara möhkəm bir başlanğıc bəxş edir. Optimal böyümə və immun müdafiəsini dəstəkləməklə, ana südünün olmadığı və ya kifayət etmədiyi hallarda etibarlı dəstək təmin edir.",
    "Toz şəklində təqdim olunan bu formula asanlıqla hazırlanır və kiçik balaların incə ehtiyaclarına uyğunlaşdırılıb. Hər qida ilə balalarınız sağlam inkişaf üçün lazım olan dəstəyi alır ki, güclü və canlı böyüsünlər."
   ],
   "feeding": "Bağlamadakı hazırlanma və qidalandırma təlimatına uyğun verin və balanın yaşına və ehtiyacına görə tənzimləyin; daim təmiz, təzə su təmin edin.",
   "comp": "Balaların optimal böyüməsi və immun müdafiəsini dəstəkləmək üçün hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Milk Replacer for Kittens — это заботливо разработанный заменитель молока для новорождённых котят, дарящий им крепкий старт в самый уязвимый период жизни. Поддерживая оптимальный рост и иммунную защиту, он становится надёжной опорой, когда материнского молока нет или недостаточно.",
    "В удобной форме порошка эта формула легко готовится и адаптирована к нежным потребностям самых маленьких. С каждым кормлением котята получают поддержку, необходимую для здорового развития, чтобы расти сильными и полными жизни."
   ],
   "feeding": "Готовьте и давайте согласно инструкции на упаковке, корректируя под возраст и потребности котёнка; всегда обеспечивайте доступ к чистой свежей воде.",
   "comp": "Создан для поддержки оптимального роста и иммунной защиты котят."
  },
  "en": {
   "full": [
    "Milk Replacer for Kittens is a thoughtfully crafted milk substitute for newborn kittens, giving them a strong start during the most delicate period of their lives. By supporting optimal growth and immune protection, it becomes a reliable source of nourishment when a mother's milk is absent or insufficient.",
    "Presented as a convenient powder, this formula is easy to prepare and tailored to the gentle needs of the very young. With every feeding, kittens receive the support they need for healthy development, so they can grow strong and full of life."
   ],
   "feeding": "Prepare and give according to the instructions on the pack, adjusting to the kitten's age and needs; always provide access to clean, fresh water.",
   "comp": "Formulated to support optimal growth and immune protection in kittens."
  }
 },
 "cats||Life Long MZG||MicroZeoGen — Detox & Calcium": {
  "az": {
   "full": [
    "MicroZeoGen — Detox & Calcium, vulkanik mənşəli təbii klinoptilolit olan MicroZeoGen əsasında hazırlanmış MZG sistemidir və həm pişiklər, həm də itlər üçün uyğundur. Bu təbii detoks dəstəyi orqanizmdən zərərli maddələrin və ağır metalların çıxarılmasına kömək edərək sevimlinizin daxili tarazlığına qayğı göstərir.",
    "Eyni zamanda bu formula diş daşının yaranmasının qarşısını almağa, sümükləri, oynaqları və dişləri möhkəm saxlamağa dəstək verir. Asanlıqla qidaya əlavə edilən toz şəklində təqdim olunan bu məhsul gündəlik sağlamlıq qayğısının zərif bir hissəsinə çevrilir."
   ],
   "feeding": "Bağlamadakı cədvələ uyğun olaraq qidaya əlavə edin və heyvanın növünə, yaşına və çəkisinə görə tənzimləyin; daim təmiz, təzə su təmin edin.",
   "comp": "Təbii vulkanik klinoptilolit (MicroZeoGen) detoks və antioksidant dəstəyi üçün əsas tərkibdir."
  },
  "ru": {
   "full": [
    "MicroZeoGen — Detox & Calcium — это система MZG на основе MicroZeoGen, природного клиноптилолита вулканического происхождения, подходящая и для кошек, и для собак. Эта естественная детокс-поддержка помогает выводить токсины и тяжёлые металлы из организма, заботясь о внутреннем равновесии вашего любимца.",
    "Вместе с тем эта формула помогает предотвращать образование зубного камня и поддерживает крепость костей, суставов и зубов. В удобной форме порошка, легко добавляемого к корму, она становится мягкой частью ежедневной заботы о здоровье."
   ],
   "feeding": "Добавляйте к корму согласно таблице на упаковке, корректируя под вид животного, возраст и вес; всегда обеспечивайте доступ к чистой свежей воде.",
   "comp": "Природный вулканический клиноптилолит (MicroZeoGen) служит основой для детокса и антиоксидантной поддержки."
  },
  "en": {
   "full": [
    "MicroZeoGen — Detox & Calcium is an MZG system built around MicroZeoGen, a natural clinoptilolite of volcanic origin, suitable for both cats and dogs. This natural detox support helps remove toxins and heavy metals from the body, caring for your companion's inner balance.",
    "At the same time, this formula helps prevent the build-up of tartar and supports strong bones, joints and teeth. Presented as a powder that is easy to add to food, it becomes a gentle part of everyday health care."
   ],
   "feeding": "Add to food according to the table on the pack, adjusting to the animal's species, age and weight; always provide access to clean, fresh water.",
   "comp": "Natural volcanic clinoptilolite (MicroZeoGen) forms the basis for detox and antioxidant support."
  }
 },
 "cats||Vitamins||Daily Vitamin Formula": {
  "az": {
   "full": [
    "Daily Vitamin Formula pişiyinizin gündəlik sağlamlığına hərtərəfli dəstək vermək üçün hazırlanmış vitamin və mineral kompleksidir. İmmunitet, həzm və sümük və qığırdaq sağlamlığını eyni anda qoruyaraq, o, sevimlinizin gündən-günə öz forması ilə parlamasına kömək edir.",
    "Asanlıqla verilən tabletlər şəklində təqdim olunan bu formula pişiyinizin gündəlik rutininə təbii şəkildə uyğunlaşır. Müntəzəm istifadə ilə Daily Vitamin Formula balanslı və canlı bir həyat üçün etibarlı gündəlik dayaq olur."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə uyğun verin və pişiyin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz, təzə su təmin edin.",
   "comp": "İmmunitet, həzm və sümüklərin sağlamlığı üçün diqqətlə seçilmiş vitamin və minerallardan ibarətdir."
  },
  "ru": {
   "full": [
    "Daily Vitamin Formula — это комплекс витаминов и минералов, созданный для всесторонней поддержки ежедневного здоровья вашей кошки. Одновременно заботясь об иммунитете, пищеварении и здоровье костей и хрящей, он помогает любимцу день за днём оставаться в отличной форме.",
    "В удобной форме легко принимаемых таблеток эта формула естественно вписывается в ежедневный распорядок кошки. При регулярном использовании Daily Vitamin Formula становится надёжной ежедневной опорой для сбалансированной и активной жизни."
   ],
   "feeding": "Давайте согласно таблице кормления на упаковке, корректируя порцию под возраст, вес и активность кошки; всегда обеспечивайте доступ к чистой свежей воде.",
   "comp": "Содержит тщательно подобранные витамины и минералы для иммунитета, пищеварения и здоровья костей."
  },
  "en": {
   "full": [
    "Daily Vitamin Formula is a vitamin and mineral complex created to give your cat well-rounded support for everyday health. By caring for immunity, digestion and bone and cartilage health all at once, it helps your companion stay in great form day after day.",
    "Presented as easy-to-give tablets, this formula fits naturally into your cat's daily routine. With regular use, Daily Vitamin Formula becomes a dependable everyday foundation for a balanced and active life."
   ],
   "feeding": "Give according to the feeding table on the pack, adjusting to your cat's age, weight and activity; always provide access to clean, fresh water.",
   "comp": "Contains carefully selected vitamins and minerals for immunity, digestion and bone health."
  }
 },
 "cats||Life Long MZG||Healthy Pregnancy": {
  "az": {
   "full": [
    "Healthy Pregnancy, vulkanik mənşəli təbii MicroZeoGen əsasında hazırlanmış MZG sistemidir və həm pişiklər, həm də itlər üçün uyğundur. Bu xüsusi formula dişiləri hamiləlikdən əvvəl, hamiləlik dövründə və ondan sonra dəstəkləyərək həyatın bu mühüm mərhələsində onların sağlamlığına qayğı göstərir.",
    "Sağlam inkişafı, doğuşdan sonra bərpanı və süd istehsalını dəstəkləyən Healthy Pregnancy ana və balaları üçün etibarlı bir dayaqdır. Asanlıqla verilən tabletlər şəklində təqdim olunan bu məhsul həssas bir dövrdə zərif və düşünülmüş qayğı təmin edir."
   ],
   "feeding": "Bağlamadakı cədvələ uyğun verin və heyvanın növünə, çəkisinə və hamiləlik mərhələsinə görə tənzimləyin; daim təmiz, təzə su təmin edin.",
   "comp": "Təbii vulkanik klinoptilolit (MicroZeoGen) detoks və antioksidant dəstəyi üçün əsas tərkibdir."
  },
  "ru": {
   "full": [
    "Healthy Pregnancy — это система MZG на основе природного MicroZeoGen вулканического происхождения, подходящая и для кошек, и для собак. Эта особая формула поддерживает самок до, во время и после беременности, заботясь об их здоровье на этом важном этапе жизни.",
    "Поддерживая здоровое развитие, восстановление после родов и выработку молока, Healthy Pregnancy становится надёжной опорой для матери и её потомства. В удобной форме легко принимаемых таблеток продукт обеспечивает мягкую и продуманную заботу в чувствительный период."
   ],
   "feeding": "Давайте согласно таблице на упаковке, корректируя под вид животного, вес и стадию беременности; всегда обеспечивайте доступ к чистой свежей воде.",
   "comp": "Природный вулканический клиноптилолит (MicroZeoGen) служит основой для детокса и антиоксидантной поддержки."
  },
  "en": {
   "full": [
    "Healthy Pregnancy is an MZG system based on natural MicroZeoGen of volcanic origin, suitable for both cats and dogs. This special formula supports females before, during and after pregnancy, caring for their wellbeing through this important stage of life.",
    "By supporting healthy development, post-birth recovery and milk production, Healthy Pregnancy becomes a dependable foundation for mother and offspring alike. Presented as easy-to-give tablets, it offers gentle, thoughtful care during a sensitive period."
   ],
   "feeding": "Give according to the table on the pack, adjusting to the animal's species, weight and stage of pregnancy; always provide access to clean, fresh water.",
   "comp": "Natural volcanic clinoptilolite (MicroZeoGen) forms the basis for detox and antioxidant support."
  }
 },
 "cats||Vitamins||Faugis — Wellness Formula 5in1": {
  "az": {
   "full": [
    "Faugis — Wellness Formula 5in1, pişiklər və itlər üçün silisium əsaslı damcılardır və gündəlik sağlamlığa kompleks dəstək verir. Vahid formula oynaqların, vətər və bağların, ürəyin, sümüklərin, eləcə də sağlam dəri və parlaq tükün qayğısına eyni anda xidmət edir.",
    "Heyvanınızın hərəkətliyini və ümumi formasını qoruyaraq, Faugis aktiv və enerjili həyat tərzini dəstəkləyir. Rahat damcı formatı sayəsində onu gündəlik yeməyə asanlıqla əlavə etmək mümkündür."
   ],
   "feeding": "Qablaşdırma üzərindəki istifadə cədvəlinə əməl edin və dozanı heyvanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz suyun olmasını təmin edin.",
   "comp": "Silisium əsaslı keyfiyyətli formula ilə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Faugis — Wellness Formula 5in1 — это капли на основе кремния для кошек и собак, обеспечивающие комплексную поддержку повседневного здоровья. Единая формула одновременно заботится о суставах, сухожилиях и связках, сердце, костях, а также о здоровой коже и блестящей шерсти.",
    "Поддерживая подвижность и общую форму вашего питомца, Faugis способствует активному и энергичному образу жизни. Удобный формат капель позволяет легко добавлять средство в ежедневный рацион."
   ],
   "feeding": "Следуйте таблице применения на упаковке и корректируйте дозировку с учётом возраста, веса и активности питомца; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено по качественной формуле на основе кремния."
  },
  "en": {
   "full": [
    "Faugis — Wellness Formula 5in1 is a silicon-based liquid supplement for cats and dogs that delivers comprehensive support for everyday wellbeing. A single formula cares at once for joints, tendons and ligaments, the heart, the bones, and healthy skin and a glossy coat.",
    "By supporting your pet's mobility and overall condition, Faugis encourages an active, energetic way of life. The convenient drop format makes it easy to add to the daily meal."
   ],
   "feeding": "Follow the usage table on the pack and adjust the dose to your pet's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with a quality silicon-based formula."
  }
 },
 "cats||Superior Care · Snacks||Oral Care — Functional snacks": {
  "az": {
   "full": [
    "Oral Care — Funksional snacklər yetkin pişiklərin ağız sağlamlığının qayğısına qalmaq üçün düşünülüşdür. Quş əti ilə hazırlanan xüsusilə xırtıldayan dənələr çeynəmə zamanı diş ərpinin azaldılmasına kömək edir.",
    "Hər gün dadlı və faydalı bir mükafat kimi verilə bilən bu snacklər həm sevincə, həm də ağız boşluğunun təmizliyinə xidmət edir. Premium tərkib pişiyiniz üçün gündəlik qayğını ləzzətli ana çevirir."
   ],
   "feeding": "Qablaşdırma üzərindəki tövsiyələrə əməl edərək gündəlik miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz suyun olmasını təmin edin.",
   "comp": "Quş əti ilə hazırlanan keyfiyyətli funksional snacklər."
  },
  "ru": {
   "full": [
    "Oral Care — Функциональные снеки созданы для заботы о здоровье полости рта взрослых кошек. Особенно хрустящие кусочки с птицей помогают снижать зубной налёт во время жевания.",
    "Эти снеки можно давать каждый день как вкусное и полезное лакомство, которое радует питомца и поддерживает чистоту полости рта. Премиальный состав превращает ежедневный уход в приятный момент."
   ],
   "feeding": "Следуйте рекомендациям на упаковке и корректируйте суточное количество с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Качественные функциональные снеки с птицей."
  },
  "en": {
   "full": [
    "Oral Care — Functional snacks are designed to look after the oral health of adult cats. The extra-crunchy poultry pieces help reduce plaque as your cat chews.",
    "Given as a tasty, purposeful daily reward, these snacks delight your pet while supporting a cleaner mouth. The premium recipe turns everyday care into a moment your cat looks forward to."
   ],
   "feeding": "Follow the guidance on the pack and adjust the daily amount to your cat's age, weight and activity; always provide access to fresh water.",
   "comp": "Quality functional snacks made with poultry."
  }
 },
 "cats||Superior Care · Snacks||Sterilised — Functional snacks": {
  "az": {
   "full": [
    "Sterilised — Funksional snacklər steril edilmiş yetkin pişiklərin xüsusi ehtiyaclarına uyğunlaşdırılmışdır. Quş əti ilə hazırlanan xırtıldayan dənələr daha az kalorili tərkibi sayəsində sağlam çəkinin qorunmasına dəstək olur.",
    "Steril edilmiş pişiklər çəki artımına meylli olduğundan, bu snacklər onları korlamaq və eyni zamanda formada saxlamaq üçün ideal seçimdir. Premium resept gündəlik mükafatı həm dadlı, həm də qayğılı edir."
   ],
   "feeding": "Qablaşdırma üzərindəki tövsiyələrə əməl edərək gündəlik miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz suyun olmasını təmin edin.",
   "comp": "Quş əti ilə hazırlanan, kalorisi azaldılmış keyfiyyətli snacklər."
  },
  "ru": {
   "full": [
    "Sterilised — Функциональные снеки адаптированы под особые потребности стерилизованных взрослых кошек. Хрустящие кусочки с птицей с пониженной калорийностью помогают поддерживать здоровый вес.",
    "Поскольку стерилизованные кошки склонны к набору веса, эти снеки — идеальный способ побаловать питомца, сохраняя его в форме. Премиальный рецепт делает ежедневное лакомство и вкусным, и заботливым."
   ],
   "feeding": "Следуйте рекомендациям на упаковке и корректируйте суточное количество с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Качественные снеки с птицей и пониженной калорийностью."
  },
  "en": {
   "full": [
    "Sterilised — Functional snacks are tailored to the particular needs of sterilised adult cats. The crunchy poultry pieces are lower in calories, helping to support a healthy weight.",
    "Because sterilised cats are prone to weight gain, these snacks are the perfect way to treat your pet while keeping them in shape. The premium recipe makes the daily reward both delicious and caring."
   ],
   "feeding": "Follow the guidance on the pack and adjust the daily amount to your cat's age, weight and activity; always provide access to fresh water.",
   "comp": "Quality lower-calorie snacks made with poultry."
  }
 },
 "cats||Superior Care · Snacks||Urinary — Functional snacks": {
  "az": {
   "full": [
    "Urinary — Funksional snacklər yetkin pişiklərdə sidik yollarının sağlamlığını dəstəkləmək üçün hazırlanmışdır. Quş əti ilə zəngin xırtıldayan dənələr gündəlik qayğının dadlı bir hissəsinə çevrilir.",
    "Bu funksional snacklər pişiyinizi mükafatlandırmaqla yanaşı, onun rifahına məqsədyönlü dəstək verir. Premium tərkib hər tikəni həm ləzzətli, həm də faydalı edir."
   ],
   "feeding": "Qablaşdırma üzərindəki tövsiyələrə əməl edərək gündəlik miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz suyun olmasını təmin edin.",
   "comp": "Quş əti ilə hazırlanan keyfiyyətli funksional snacklər."
  },
  "ru": {
   "full": [
    "Urinary — Функциональные снеки разработаны для поддержки здоровья мочевыводящих путей взрослых кошек. Хрустящие кусочки с птицей становятся вкусной частью ежедневной заботы.",
    "Эти функциональные снеки не только радуют питомца, но и оказывают целенаправленную поддержку его благополучию. Премиальный состав делает каждый кусочек одновременно лакомым и полезным."
   ],
   "feeding": "Следуйте рекомендациям на упаковке и корректируйте суточное количество с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Качественные функциональные снеки с птицей."
  },
  "en": {
   "full": [
    "Urinary — Functional snacks are formulated to support urinary tract health in adult cats. The extra-crunchy poultry pieces make everyday care a tasty pleasure.",
    "Beyond rewarding your cat, these functional snacks offer purposeful support for their wellbeing. The premium recipe makes every bite both flavourful and beneficial."
   ],
   "feeding": "Follow the guidance on the pack and adjust the daily amount to your cat's age, weight and activity; always provide access to fresh water.",
   "comp": "Quality functional snacks made with poultry."
  }
 },
 "cats||Prime · Kitten||Prime Kitten — Chicken & Turkey": {
  "az": {
   "full": [
    "Prime Kitten — Toyuq və hinduşka, böyüyən balacalarınız üçün hazırlanmış premium yaş yeməkdir. 98% heyvan mənşəli zülal ilə zəngin tərkib, körpə pişiklərin sürətli inkişafı və enerji ehtiyacları üçün dadlı və qidalı bir seçim təqdim edir.",
    "Tam və balanslaşdırılmış bu formula süni boyalardan azaddır, beləliklə kiçik dostunuz yalnız ən yaxşısını alır. Yumşaq və sulu tikələr həm iştahaaçan, həm də həzmi rahat olub gündəlik qidalanmanı sevincə çevirir."
   ],
   "feeding": "Qablaşdırma üzərindəki qidalanma cədvəlinə əməl edin və miqdarı balanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz suyun olmasını təmin edin.",
   "comp": "Toyuq və hinduşka ilə hazırlanmış, 98% heyvan mənşəli zülaldan ibarət keyfiyyətli tərkib."
  },
  "ru": {
   "full": [
    "Prime Kitten — Курица и индейка — это премиальный влажный корм, созданный для ваших растущих малышей. Богатый состав с 98% животного белка обеспечивает вкусное и питательное решение для быстрого развития и энергетических потребностей котят.",
    "Эта полнорационная и сбалансированная формула не содержит искусственных красителей, поэтому ваш маленький друг получает только лучшее. Нежные и сочные кусочки аппетитны и легко усваиваются, превращая каждое кормление в радость."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности котёнка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Качественный состав с курицей и индейкой и 98% животного белка."
  },
  "en": {
   "full": [
    "Prime Kitten — Chicken & Turkey is a premium wet food crafted for your growing little ones. Rich in 98% animal protein, it offers a tasty, nourishing choice that meets the fast development and energy needs of kittens.",
    "This complete and balanced recipe is free from artificial colours, so your small companion receives only the best. The tender, juicy chunks are both appetising and easy to digest, turning every mealtime into a joy."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your kitten's age, weight and activity; always provide access to fresh water.",
   "comp": "A quality recipe with chicken and turkey and 98% animal protein."
  }
 },
 "cats||Prime · Adult||Prime Skin & Coat — Chicken & White Fish": {
  "az": {
   "full": [
    "Prime Skin & Coat — Toyuq və ağ balıq, yetkin pişiklərin sağlam dərisi və parlaq tükü üçün hazırlanmış premium yaş yeməkdir. Toyuq və ağ balığın incə birləşməsi 98% heyvan mənşəli zülal ilə zənginləşərək həm dadlı, həm də qidalı bir təcrübə təqdim edir.",
    "Bu qulluqyönümlü resept pişiyinizin xarici görünüşünü içəridən dəstəkləyir, tükü yumşaq və parlaq saxlayır. Sulu, ətli tikələr gündəlik qidalanmanı zövqlü bir mərasimə çevirir."
   ],
   "feeding": "Qablaşdırma üzərindəki qidalanma cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz suyun olmasını təmin edin.",
   "comp": "Toyuq və ağ balıq ilə hazırlanmış, 98% heyvan mənşəli zülaldan ibarət keyfiyyətli tərkib."
  },
  "ru": {
   "full": [
    "Prime Skin & Coat — Курица и белая рыба — это премиальный влажный корм, созданный для здоровой кожи и блестящей шерсти взрослых кошек. Изысканное сочетание курицы и белой рыбы, обогащённое 98% животного белка, дарит и вкусное, и питательное угощение.",
    "Этот заботливый рецепт поддерживает внешний вид вашего питомца изнутри, сохраняя шерсть мягкой и сияющей. Сочные мясные кусочки превращают ежедневное кормление в приятный ритуал."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Качественный состав с курицей и белой рыбой и 98% животного белка."
  },
  "en": {
   "full": [
    "Prime Skin & Coat — Chicken & White Fish is a premium wet food created for the healthy skin and shiny coat of adult cats. The refined pairing of chicken and white fish, enriched with 98% animal protein, delivers a treat that is both delicious and nourishing.",
    "This care-focused recipe supports your cat's appearance from within, keeping the coat soft and lustrous. The juicy, meaty chunks turn everyday feeding into a pleasurable ritual."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your cat's age, weight and activity; always provide access to fresh water.",
   "comp": "A quality recipe with chicken and white fish and 98% animal protein."
  }
 },
 "cats||Prime · Sterilised||Prime Sterilised — Salmon & Trout": {
  "az": {
   "full": [
    "Prime Sterilised — Qızılbalıq və alabalıq, steril edilmiş pişiklərin ehtiyaclarına uyğunlaşdırılmış premium yaş yeməkdir. Qızılbalıq və alabalığın zərif birləşməsi 98% heyvan mənşəli zülal ilə zənginləşərək tam və ləzzətli bir rasion təqdim edir.",
    "Steril edilmiş pişiklərin xüsusi qayğıya ehtiyacı olduğunu nəzərə alan bu resept onların formada və məmnun qalmasına dəstək olur. Sulu, ətli tikələr gündəlik qidalanmanı həm dadlı, həm də qayğılı edir."
   ],
   "feeding": "Qablaşdırma üzərindəki qidalanma cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz suyun olmasını təmin edin.",
   "comp": "Qızılbalıq və alabalıq ilə hazırlanmış, 98% heyvan mənşəli zülaldan ibarət keyfiyyətli tərkib."
  },
  "ru": {
   "full": [
    "Prime Sterilised — Лосось и форель — это премиальный влажный корм, адаптированный под потребности стерилизованных кошек. Нежное сочетание лосося и форели, обогащённое 98% животного белка, обеспечивает полноценный и аппетитный рацион.",
    "Учитывая, что стерилизованным кошкам нужна особая забота, этот рецепт помогает им оставаться в форме и довольными. Сочные мясные кусочки делают ежедневное кормление и вкусным, и заботливым."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Качественный состав с лососем и форелью и 98% животного белка."
  },
  "en": {
   "full": [
    "Prime Sterilised — Salmon & Trout is a premium wet food tailored to the needs of sterilised cats. The delicate pairing of salmon and trout, enriched with 98% animal protein, makes for a complete and appetising diet.",
    "Recognising that sterilised cats need special care, this recipe helps them stay in shape and contented. The juicy, meaty chunks make everyday feeding both tasty and caring."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your cat's age, weight and activity; always provide access to fresh water.",
   "comp": "A quality recipe with salmon and trout and 98% animal protein."
  }
 },
 "cats||Prime · Sterilised||Prime Sterilised — Turkey, Pheasant & Cranberries": {
  "az": {
   "full": [
    "Sterilizə olunmuş pişiyiniz üçün düşünülmüş Prime Sterilised, zərif hinduşka və qırqovul ətinin lətafətini mərcangilənin təravəti ilə birləşdirir. Yüksək heyvani zülal payı dolğun pəhriz təmin edərək sterilizədən sonra ideal forma və canlılığı qorumağa kömək edir.",
    "Şirəli, ətli tikələr pişiyinizi hər yeməkdə sevindirir, mərcangilə isə təbii təravət qatır. Süni rəngləndirici, dadlandırıcı və konservant olmadan hazırlanan bu reseptura premium qulluğu gündəlik məməyə çevirir."
   ],
   "feeding": "Bələdçi kimi qablaşdırma üzərindəki yemləmə cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su əlçatan olsun.",
   "comp": "Keyfiyyətli heyvani zülal mənbələri və təbii tərkib hissələri ilə hazırlanır."
  },
  "ru": {
   "full": [
    "Создан специально для стерилизованных кошек: Prime Sterilised сочетает нежное мясо индейки и фазана с освежающей клюквой. Высокая доля животного белка обеспечивает насыщенное питание и помогает сохранять идеальную форму и жизненный тонус после стерилизации.",
    "Сочные мясные кусочки радуют питомца при каждом кормлении, а клюква добавляет естественной свежести. Рецептура без искусственных красителей, ароматизаторов и консервантов превращает премиальный уход в ежедневное удовольствие."
   ],
   "feeding": "Ориентируйтесь на таблицу кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных источников животного белка и натуральных ингредиентов."
  },
  "en": {
   "full": [
    "Crafted especially for sterilised cats, Prime Sterilised brings together tender turkey and pheasant with refreshing cranberries. A high share of animal protein delivers rich, satisfying nourishment and helps keep your cat in ideal shape and full of vitality after sterilisation.",
    "Juicy, meaty pieces delight your companion at every meal, while cranberries add a touch of natural freshness. Made without artificial colours, flavours or preservatives, this recipe turns premium care into an everyday pleasure."
   ],
   "feeding": "Follow the feeding table on the pack as a guide and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with quality animal protein sources and natural ingredients."
  }
 },
 "cats||Prime · Urinary||Prime Urinary — White Fish, Anchovies & Cranberries": {
  "az": {
   "full": [
    "Prime Urinary pişiyinizin sidik yollarının sağlamlığını dəstəkləmək üçün ağ balıq, ançous və mərcangilənin uyğun birləşməsini təklif edir. Yüksək heyvani zülal payı ilə zəngin bu reseptura gündəlik balansı qorumağa diqqətlə yanaşır.",
    "Dəniz dadının zənginliyi şirəli, ətli tikələrdə açılır, mərcangilə isə təbii təravət qatır. Süni rəngləndirici, dadlandırıcı və konservant olmadan hazırlanaraq pişiyinizə həm dadlı, həm də qayğılı qida bəxş edir."
   ],
   "feeding": "Bələdçi kimi qablaşdırma üzərindəki yemləmə cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su əlçatan olsun.",
   "comp": "Keyfiyyətli balıq və heyvani mənşəli tərkib hissələri ilə hazırlanır."
  },
  "ru": {
   "full": [
    "Prime Urinary создан для поддержки здоровья мочевыводящих путей и сочетает белую рыбу, анчоусы и клюкву в гармоничной формуле. Высокая доля животного белка обеспечивает полноценное питание с заботой о ежедневном балансе организма.",
    "Богатство морского вкуса раскрывается в сочных мясных кусочках, а клюква добавляет естественной свежести. Рецептура без искусственных красителей, ароматизаторов и консервантов дарит питомцу одновременно вкусную и заботливую еду."
   ],
   "feeding": "Ориентируйтесь на таблицу кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественной рыбы и ингредиентов животного происхождения."
  },
  "en": {
   "full": [
    "Prime Urinary is designed to support your cat's urinary tract health, blending white fish, anchovies and cranberries into a balanced recipe. Rich in animal protein, it offers complete nourishment while caring for everyday wellbeing.",
    "The richness of the sea unfolds in juicy, meaty pieces, while cranberries add a touch of natural freshness. Made without artificial colours, flavours or preservatives, it gives your cat food that is both delicious and caring."
   ],
   "feeding": "Follow the feeding table on the pack as a guide and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with quality fish and animal-based ingredients."
  }
 },
 "cats||Prime · Weight Control||Prime Weight Control — Chicken, Salmon & Tuna": {
  "az": {
   "full": [
    "Prime Weight Control aktiv formanı qorumaq istəyən pişiklər üçün toyuq, qızılbalıq və tunesin yüngül, lakin dolğun birləşməsini təqdim edir. Yüksək heyvani zülal payı sağlam çəki nəzarətini dəstəkləyərkən pişiyinizi tox və enerjili saxlamağa kömək edir.",
    "Şirəli, ətli tikələr hər yeməyi həzz dolu edir və balıq ləzzəti iştahı çəkir. Süni rəngləndirici, dadlandırıcı və konservant olmadan hazırlanan reseptura zərif qayğını gündəlik vərdişə çevirir."
   ],
   "feeding": "Bələdçi kimi qablaşdırma üzərindəki yemləmə cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su əlçatan olsun.",
   "comp": "Keyfiyyətli heyvani zülal və balıq mənbələri ilə hazırlanır."
  },
  "ru": {
   "full": [
    "Prime Weight Control предлагает лёгкое, но полноценное сочетание курицы, лосося и тунца для кошек, которым важно сохранять форму. Высокая доля животного белка поддерживает здоровый контроль веса, помогая питомцу оставаться сытым и энергичным.",
    "Сочные мясные кусочки делают каждый приём пищи удовольствием, а рыбный вкус пробуждает аппетит. Рецептура без искусственных красителей, ароматизаторов и консервантов превращает деликатную заботу в ежедневную привычку."
   ],
   "feeding": "Ориентируйтесь на таблицу кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных источников животного белка и рыбы."
  },
  "en": {
   "full": [
    "Prime Weight Control offers a light yet satisfying blend of chicken, salmon and tuna for cats who need to stay in shape. A high share of animal protein supports healthy weight management while helping your cat feel full and energetic.",
    "Juicy, meaty pieces make every meal a pleasure, and the fishy flavour tempts the appetite. Made without artificial colours, flavours or preservatives, this recipe turns gentle care into a daily habit."
   ],
   "feeding": "Follow the feeding table on the pack as a guide and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with quality animal protein and fish sources."
  }
 },
 "cats||Superior Care · Sterilised||Sterilised — Rabbit, Chicken breast": {
  "az": {
   "full": [
    "Superior Care Sterilised sterilizə olunmuş pişiklər üçün zərif dovşan ətini lətafətli toyuq döşü ilə birləşdirən, soss içində təqdim olunan incə filedir. Buğdasız reseptura və yüksək heyvani zülal payı sterilizədən sonra ideal formanın qorunmasına diqqətlə yanaşır.",
    "İştahaçan soss içində üzən yumşaq filelər pişiyinizin hər yeməyini həzzə çevirir. Süni rəngləndirici, dadlandırıcı və konservant olmadan hazırlanaraq gündəlik qida üçün premium seçim təqdim edir."
   ],
   "feeding": "Bələdçi kimi qablaşdırma üzərindəki yemləmə cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su əlçatan olsun.",
   "comp": "Keyfiyyətli heyvani zülal mənbələri ilə, buğdasız hazırlanır."
  },
  "ru": {
   "full": [
    "Superior Care Sterilised — это нежное филе в соусе, сочетающее деликатное мясо кролика с лёгкой куриной грудкой для стерилизованных кошек. Рецептура без пшеницы и высокая доля животного белка бережно помогают сохранять идеальную форму после стерилизации.",
    "Мягкие кусочки филе в аппетитном соусе превращают каждый приём пищи в удовольствие. Без искусственных красителей, ароматизаторов и консервантов — это премиальный выбор для ежедневного питания."
   ],
   "feeding": "Ориентируйтесь на таблицу кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных источников животного белка, без пшеницы."
  },
  "en": {
   "full": [
    "Superior Care Sterilised is a tender fillet in gravy that pairs delicate rabbit with light chicken breast for sterilised cats. A wheat-free recipe with a high share of animal protein gently helps maintain ideal shape after sterilisation.",
    "Soft fillet pieces bathed in an appetising gravy turn every meal into a pleasure for your cat. Made without artificial colours, flavours or preservatives, it is a premium choice for everyday feeding."
   ],
   "feeding": "Follow the feeding table on the pack as a guide and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with quality animal protein sources and wheat-free."
  }
 },
 "cats||Superior Care · Urinary||Urinary — Duck, Chicken breast": {
  "az": {
   "full": [
    "Superior Care Urinary sidik yollarının sağlamlığına qayğı göstərərək zərif ördək ətini incə toyuq döşü ilə birləşdirən, soss içində təqdim olunan filedir. Mineral səviyyəsinə nəzarət edilən reseptura pişiyinizin gündəlik balansını dəstəkləmək üçün düşünülüb.",
    "İştahaçan soss içində üzən yumşaq filelər hər yeməyə təravət və ləzzət qatır. Süni rəngləndirici, dadlandırıcı və konservant olmadan hazırlanaraq həm dadlı, həm də qayğılı qulluq təqdim edir."
   ],
   "feeding": "Bələdçi kimi qablaşdırma üzərindəki yemləmə cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su əlçatan olsun.",
   "comp": "Keyfiyyətli heyvani mənşəli tərkib hissələri ilə, nəzarət olunan mineral səviyyəsi ilə hazırlanır."
  },
  "ru": {
   "full": [
    "Superior Care Urinary — это филе в соусе, заботящееся о здоровье мочевыводящих путей и сочетающее нежное мясо утки с лёгкой куриной грудкой. Рецептура с контролируемым уровнем минералов создана для поддержки ежедневного баланса организма вашей кошки.",
    "Мягкие кусочки филе в аппетитном соусе добавляют свежести и вкуса каждому приёму пищи. Без искусственных красителей, ароматизаторов и консервантов — это одновременно вкусный и заботливый уход."
   ],
   "feeding": "Ориентируйтесь на таблицу кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных ингредиентов животного происхождения с контролируемым уровнем минералов."
  },
  "en": {
   "full": [
    "Superior Care Urinary is a fillet in gravy that cares for urinary tract health, combining tender duck with light chicken breast. A recipe with controlled mineral levels is designed to support your cat's everyday balance.",
    "Soft fillet pieces bathed in an appetising gravy bring freshness and flavour to every meal. Made without artificial colours, flavours or preservatives, it delivers care that is both delicious and thoughtful."
   ],
   "feeding": "Follow the feeding table on the pack as a guide and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with quality animal-based ingredients and controlled mineral levels."
  }
 },
 "cats||Superior Care · Kitten||Kitten — Turkey, Chicken breast": {
  "az": {
   "full": [
    "Superior Care Kitten balaca pişiklərin sağlam böyüməsi üçün zərif hinduşka ətini incə toyuq döşü ilə birləşdirən, soss içində təqdim olunan yumşaq filedir. Yüngül və qidalı reseptura həssas körpə orqanizmi üçün xüsusi düşünülüb.",
    "İştahaçan soss içində üzən yumşaq tikələr körpənizin ilk ləzzət təcrübələrini həzzlə doldurur. Süni rəngləndirici, dadlandırıcı və konservant olmadan hazırlanaraq böyümə dövrü üçün premium qulluq təqdim edir."
   ],
   "feeding": "Bələdçi kimi qablaşdırma üzərindəki yemləmə cədvəlinə əməl edin və miqdarı balaca pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su əlçatan olsun.",
   "comp": "Keyfiyyətli heyvani zülal mənbələri ilə, böyüyən orqanizm üçün hazırlanır."
  },
  "ru": {
   "full": [
    "Superior Care Kitten — это мягкое филе в соусе, сочетающее нежное мясо индейки с лёгкой куриной грудкой для здорового роста котят. Лёгкая и питательная рецептура специально создана для чувствительного организма малыша.",
    "Мягкие кусочки в аппетитном соусе наполняют первые вкусовые впечатления котёнка удовольствием. Без искусственных красителей, ароматизаторов и консервантов — это премиальный уход в период роста."
   ],
   "feeding": "Ориентируйтесь на таблицу кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности котёнка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных источников животного белка для растущего организма."
  },
  "en": {
   "full": [
    "Superior Care Kitten is a soft fillet in gravy that combines tender turkey with light chicken breast for the healthy growth of kittens. A light, nourishing recipe is specially designed for a young one's sensitive system.",
    "Soft pieces bathed in an appetising gravy fill your kitten's first taste experiences with delight. Made without artificial colours, flavours or preservatives, it offers premium care during the growing stage."
   ],
   "feeding": "Follow the feeding table on the pack as a guide and adjust the portion to your kitten's age, weight and activity; always keep fresh water available.",
   "comp": "Made with quality animal protein sources for a growing body."
  }
 },
 "cats||Superior Care · Weight Control||Weight Control — Herring, Chicken breast": {
  "az": {
   "full": [
    "Superior Care Weight Control formanı qorumaq istəyən pişiklər üçün dəniz balığı siyənəyi incə toyuq döşü ilə birləşdirən, soss içində təqdim olunan yüngül filedir. Reseptura maddələr mübadiləsini yaxşılaşdırmağa yönəlmişdir.",
    "İştahaçan soss içində üzən yumşaq filelər dəniz ləzzətini hər yeməyə daşıyır və iştahı çəkir. Süni rəngləndirici, dadlandırıcı və konservant olmadan hazırlanaraq sağlam çəki nəzarətini ləzzətlə birləşdirir."
   ],
   "feeding": "Bələdçi kimi qablaşdırma üzərindəki yemləmə cədvəlinə əməl edin və miqdarı pişiyin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su əlçatan olsun.",
   "comp": "Keyfiyyətli balıq və heyvani mənşəli tərkib hissələri ilə hazırlanır."
  },
  "ru": {
   "full": [
    "Superior Care Weight Control — это лёгкое филе в соусе, сочетающее морскую сельдь с нежной куриной грудкой для кошек, которым важно сохранять форму. Рецептура направлена на улучшение обмена веществ.",
    "Мягкие кусочки филе в аппетитном соусе несут морской вкус в каждый приём пищи и пробуждают аппетит. Без искусственных красителей, ароматизаторов и консервантов — здоровый контроль веса в сочетании с удовольствием."
   ],
   "feeding": "Ориентируйтесь на таблицу кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности кошки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественной рыбы и ингредиентов животного происхождения."
  },
  "en": {
   "full": [
    "Superior Care Weight Control is a light fillet in gravy that combines sea herring with tender chicken breast for cats who need to stay in shape. The recipe is designed to help improve metabolism.",
    "Soft fillet pieces bathed in an appetising gravy carry a taste of the sea into every meal and tempt the appetite. Made without artificial colours, flavours or preservatives, it brings healthy weight control together with pure enjoyment."
   ],
   "feeding": "Follow the feeding table on the pack as a guide and adjust the portion to your cat's age, weight and activity; always keep fresh water available.",
   "comp": "Made with quality fish and animal-based ingredients."
  }
 },
 "dogs||Superior Care · White Dogs||White Dogs — White Fish": {
  "az": {
   "full": [
    "Ağ və açıq tüklü kiçik və mini cinsli yetkin itlər (1–10 kq) üçün xüsusi hazırlanmış bu reseptdə əsas zülal mənbəyi kimi ağ balıq seçilib. Superior Care seriyası tük rənginə görə uyğunlaşdırılır və bu məhsul ağ tükün təmizliyini və parlaqlığını qorumağa kömək edir.",
    "Tərkibə daxil edilən dəyərli komponentlər göz altındakı qonur dəmgözü ləkələrini azaltmağa yönəlib, dərini və tükü isə Omega-3 və Omega-6 yağ turşuları sağlam saxlayır. Beləliklə, balaca dostunuzun zərif xarici görünüşü hər gün qulluq görür."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı qidalanma cədvəlinə uyğun seçin və itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz və təzə su əlçatan olsun.",
   "comp": "Yüksək faizli heyvan zülalı və ağ balıqdan ibarət, keyfiyyətli komponentlərlə hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот рецепт с белой рыбой создан специально для взрослых собак малых и мини-пород (1–10 кг) со светлой и белой шерстью. Линия Superior Care подбирается по цвету шерсти, и данный корм помогает сохранить чистоту и сияние белого окраса.",
    "Тщательно подобранные ингредиенты направлены на уменьшение коричневых слёзных дорожек под глазами, а жирные кислоты Омега-3 и Омега-6 поддерживают здоровье кожи и шерсти. Так ваш маленький друг каждый день получает заботу о своём изящном внешнем виде."
   ],
   "feeding": "Подбирайте суточную норму по таблице кормления на упаковке и корректируйте её с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Высокий процент животного белка и белая рыба в составе из качественных ингредиентов."
  },
  "en": {
   "full": [
    "Crafted especially for adult small and mini breed dogs (1–10 kg) with white and light coats, this recipe puts white fish at the heart of the bowl. As part of the coat-matched Superior Care line, it is designed to keep a pale coat clean, bright and beautifully kept.",
    "Carefully chosen ingredients work to help reduce the brown tear stains beneath the eyes, while Omega-3 and Omega-6 fatty acids nourish healthy skin and coat. Day after day, your little companion enjoys real care for that delicate, elegant look."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the daily amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with quality ingredients and a high percentage of animal protein from white fish."
  }
 },
 "dogs||Superior Care · Red Coat||Red Coat Junior — Small breeds": {
  "az": {
   "full": [
    "Qonur və qızılı tükü olan kiçik cinsli balalar üçün nəzərdə tutulmuş bu Red Coat Junior resepti böyüməyin ən vacib dövründə güclü dəstək verir. RCE kompleksinin köməyi ilə bənövşəyi-qırmızı və qonur çalarlar daha canlı və zəngin görünür.",
    "Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş formula sağlam inkişafa, möhkəm dəriyə və parlaq tükə zəmin yaradır. Beləliklə, yetişməkdə olan dostunuz hər gün enerjili və gözəl tükə malik böyüyür."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı qidalanma cədvəlinə uyğun verin və balanın yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz və təzə su əlçatan olsun.",
   "comp": "Yüksək faizli heyvan zülalı və faydalı Omega yağ turşuları ilə zənginləşdirilib."
  },
  "ru": {
   "full": [
    "Этот корм Red Coat Junior разработан для щенков малых пород с коричневой и рыжей шерстью и поддерживает их в самый важный период роста. Благодаря комплексу RCE красно-коричневые оттенки выглядят более насыщенными и живыми.",
    "Формула, обогащённая жирными кислотами Омега-3 и Омега-6, закладывает основу для здорового развития, крепкой кожи и блестящей шерсти. Так ваш растущий друг каждый день становится энергичнее и обзаводится красивой шерстью."
   ],
   "feeding": "Давайте суточную норму по таблице кормления на упаковке и корректируйте её с учётом возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Обогащён жирными кислотами Омега и содержит высокий процент животного белка."
  },
  "en": {
   "full": [
    "Red Coat Junior is created for small-breed puppies with brown and red coats, supporting them through the most important stage of growth. With the help of the RCE complex, warm red and brown tones look richer and more vivid.",
    "Rich in Omega-3 and Omega-6 fatty acids, the formula lays the foundation for healthy development, resilient skin and a glossy coat. Each day your growing friend gains energy and a beautifully coloured coat to match."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the daily amount to your puppy's age, weight and activity level; always keep fresh water available.",
   "comp": "Enriched with Omega fatty acids and made with a high percentage of animal protein."
  }
 },
 "dogs||Superior Care · Red Coat||Red Coat Adult — Small breeds": {
  "az": {
   "full": [
    "Qonur və qızılı tükü olan yetkin kiçik cinsli itlər üçün hazırlanmış bu beztaxıl tam rasion gündəlik qidalanmanı zərif xarici görünüşlə birləşdirir. RCE kompleksi tükün qırmızı və qonur çalarlarını qabardaraq rəngin dolğunluğunu və parıltısını dəstəkləyir.",
    "Beztaxıl formula və yüksək faizli heyvan zülalı həzm rahatlığına və ümumi sağlamlığa zəmin yaradır, Omega yağ turşuları isə dərini və tükü qoruyur. Beləliklə, balaca dostunuz həm enerjili, həm də gözoxşayan tüklə qalır."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı qidalanma cədvəlinə uyğun verin və itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz və təzə su əlçatan olsun.",
   "comp": "Beztaxıl tərkib və yüksək faizli heyvan zülalı, keyfiyyətli komponentlərlə."
  },
  "ru": {
   "full": [
    "Этот беззерновой полнорацион для взрослых собак малых пород с коричневой и рыжей шерстью объединяет ежедневное питание и заботу о красивом внешнем виде. Комплекс RCE подчёркивает красные и коричневые оттенки шерсти, поддерживая насыщенность цвета и блеск.",
    "Беззерновая формула и высокий процент животного белка создают основу для комфортного пищеварения и общего здоровья, а жирные кислоты Омега берегут кожу и шерсть. Так ваш маленький друг остаётся энергичным и радует ухоженной шубкой."
   ],
   "feeding": "Давайте суточную норму по таблице кормления на упаковке и корректируйте её с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Беззерновой состав с высоким процентом животного белка из качественных ингредиентов."
  },
  "en": {
   "full": [
    "This grain-free complete diet for adult small-breed dogs with brown and red coats brings together everyday nutrition and care for a beautiful appearance. The RCE complex highlights the red and brown tones of the coat, supporting depth of colour and shine.",
    "A grain-free formula with a high percentage of animal protein lays the groundwork for comfortable digestion and overall wellbeing, while Omega fatty acids protect skin and coat. Your little companion stays lively and proudly shows off a well-kept coat."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the daily amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "A grain-free recipe with a high percentage of animal protein and quality ingredients."
  }
 },
 "dogs||Superior Care · Dark Coat||Dark Coat — All breeds": {
  "az": {
   "full": [
    "Qara və tünd tükü olan bütün cins yetkin itlər üçün hazırlanmış bu Dark Coat resepti tükün dərinliyini və zənginliyini qorumağa yönəlib. DCE kompleksinin köməyi ilə tünd və qara çalarlar uzun müddət dolğun və parlaq qalır.",
    "Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş formula dərini sağlam saxlayır və tükü ipək kimi parıldadır. Beləliklə, dostunuzun zərif tünd örtüyü hər gün canlı və gözəl görünür."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı qidalanma cədvəlinə uyğun verin və itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz və təzə su əlçatan olsun.",
   "comp": "Yüksək faizli heyvan zülalı və faydalı Omega yağ turşuları ilə zənginləşdirilib."
  },
  "ru": {
   "full": [
    "Этот корм Dark Coat для взрослых собак всех пород с чёрной и тёмной шерстью создан, чтобы сохранять глубину и насыщенность окраса. Благодаря комплексу DCE тёмные и чёрные оттенки надолго остаются полными и сияющими.",
    "Формула, обогащённая жирными кислотами Омега-3 и Омега-6, поддерживает здоровье кожи и придаёт шерсти шелковистый блеск. Так благородная тёмная шубка вашего друга каждый день выглядит живой и красивой."
   ],
   "feeding": "Давайте суточную норму по таблице кормления на упаковке и корректируйте её с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Обогащён жирными кислотами Омега и содержит высокий процент животного белка."
  },
  "en": {
   "full": [
    "Dark Coat is made for adult dogs of all breeds with black and dark coats, designed to preserve the depth and richness of their colour. With the help of the DCE complex, dark and black tones stay full and lustrous for longer.",
    "Rich in Omega-3 and Omega-6 fatty acids, the formula keeps skin healthy and gives the coat a silky shine. Day after day, your dog's elegant dark coat looks vibrant and beautifully kept."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the daily amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Enriched with Omega fatty acids and made with a high percentage of animal protein."
  }
 },
 "dogs||Weight Control||Weight Control Sterilised — Poultry": {
  "az": {
   "full": [
    "Steril edilmiş bütün cins yetkin itlər üçün hazırlanmış bu Weight Control resepti sağlam çəkini saxlamaq düşünülərək yaradılıb. 68% heyvan zülalı dolğunluq və əzələ tonusunu dəstəkləyir, buğdasız tərkib isə yüngül və balanslı qidalanma təmin edir.",
    "Quş ətinin yumşaq dadı çoxseçimli itlər üçün belə cəlbedicidir, formula isə steril dostunuzun enerji tələbatına uyğunlaşdırılıb. Beləliklə, gündəlik qidalanma həm ləzzətli, həm də formada qalmağa kömək edən olur."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı qidalanma cədvəlinə uyğun verin və itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz və təzə su əlçatan olsun.",
   "comp": "68% heyvan zülalı və buğdasız tərkiblə, keyfiyyətli komponentlərdən ibarətdir."
  },
  "ru": {
   "full": [
    "Этот корм Weight Control для стерилизованных взрослых собак всех пород создан с заботой о поддержании здорового веса. 68% животного белка поддерживают чувство сытости и мышечный тонус, а состав без пшеницы обеспечивает лёгкое и сбалансированное питание.",
    "Нежный вкус птицы привлекателен даже для разборчивых собак, а формула учитывает сниженные энергетические потребности стерилизованных питомцев. Так ежедневное кормление становится и вкусным, и помогающим оставаться в форме."
   ],
   "feeding": "Давайте суточную норму по таблице кормления на упаковке и корректируйте её с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "68% животного белка и состав без пшеницы из качественных ингредиентов."
  },
  "en": {
   "full": [
    "This Weight Control recipe for sterilised adult dogs of all breeds is created with a healthy weight in mind. With 68% animal protein, it supports satiety and muscle tone, while a wheat-free composition keeps meals light and balanced.",
    "The gentle taste of poultry appeals even to fussy dogs, and the formula is tuned to the calmer energy needs of a sterilised pet. Everyday feeding becomes both flavourful and supportive of staying in shape."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the daily amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with 68% animal protein and a wheat-free composition from quality ingredients."
  }
 },
 "dogs||Mini Adult||Mini Adult — Lamb": {
  "az": {
   "full": [
    "Kiçik cinsli yetkin itlər (1–10 kq) üçün hazırlanmış bu Mini Adult resepti dadlı quzu ətini balaca ağıza uyğun kiçik dənəciklərlə birləşdirir. 58% heyvan zülalı gündəlik enerji və əzələ tonusunu dəstəkləyir, buğdasız tərkib isə yüngül qidalanma təmin edir.",
    "Quzu ətinin yumşaq dadı seçici itləri belə razı salır, kiçik qranul forması isə dişləmə və həzmi rahatlaşdırır. Beləliklə, balaca dostunuz hər gün ona görə düşünülmüş ləzzətli yeməkdən həzz alır."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı qidalanma cədvəlinə uyğun verin və itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz və təzə su əlçatan olsun.",
   "comp": "58% heyvan zülalı və buğdasız tərkiblə, keyfiyyətli quzu ətindən ibarətdir."
  },
  "ru": {
   "full": [
    "Этот корм Mini Adult для взрослых собак малых пород (1–10 кг) сочетает вкусную ягнятину с мелкими гранулами, удобными для маленькой пасти. 58% животного белка поддерживают ежедневную энергию и мышечный тонус, а состав без пшеницы делает питание лёгким.",
    "Нежный вкус ягнёнка нравится даже привередливым собакам, а мелкая гранула облегчает захват и пищеварение. Так ваш маленький друг каждый день наслаждается едой, продуманной именно для него."
   ],
   "feeding": "Давайте суточную норму по таблице кормления на упаковке и корректируйте её с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "58% животного белка и состав без пшеницы с качественной ягнятиной."
  },
  "en": {
   "full": [
    "This Mini Adult recipe for adult small-breed dogs (1–10 kg) pairs tasty lamb with small kibble shaped for little mouths. With 58% animal protein, it supports everyday energy and muscle tone, while a wheat-free composition keeps meals light.",
    "The gentle flavour of lamb pleases even fussy dogs, and the small kibble makes picking up and digesting food easier. Each day your little companion enjoys a meal thoughtfully made just for them."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the daily amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with 58% animal protein and quality lamb in a wheat-free composition."
  }
 },
 "dogs||Maxi Adult||Maxi Adult — Poultry": {
  "az": {
   "full": [
    "Böyük cinsli yetkin itlər (25 kq-dan) üçün hazırlanmış bu Maxi Adult resepti güclü bədənin tələblərini ödəmək üçün düşünülüb. Tam 80% heyvan zülalı əzələ kütləsini və gündəlik enerjini güclü şəkildə dəstəkləyir, buğdasız tərkib isə həzmi yüngül saxlayır.",
    "Quş ətinin zəngin dadı iri dostunuzun iştahını açır, formula isə böyük cinslərin aktiv həyat tərzinə uyğunlaşdırılıb. Beləliklə, güclü dostunuz hər gün ona güc və forma verən dolğun qidalanma alır."
   ],
   "feeding": "Gündəlik miqdarı qablaşdırmadakı qidalanma cədvəlinə uyğun verin və itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin; daim təmiz və təzə su əlçatan olsun.",
   "comp": "80% heyvan zülalı və buğdasız tərkiblə, keyfiyyətli komponentlərdən ibarətdir."
  },
  "ru": {
   "full": [
    "Этот корм Maxi Adult для взрослых собак крупных пород (от 25 кг) создан, чтобы отвечать запросам сильного тела. Целых 80% животного белка мощно поддерживают мышечную массу и ежедневную энергию, а состав без пшеницы сохраняет лёгкость пищеварения.",
    "Богатый вкус птицы пробуждает аппетит вашего крупного друга, а формула учитывает активный образ жизни больших пород. Так ваш сильный питомец каждый день получает полноценное питание, дающее силу и форму."
   ],
   "feeding": "Давайте суточную норму по таблице кормления на упаковке и корректируйте её с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "80% животного белка и состав без пшеницы из качественных ингредиентов."
  },
  "en": {
   "full": [
    "This Maxi Adult recipe for adult large-breed dogs (from 25 kg) is built to meet the demands of a powerful body. A full 80% animal protein strongly supports muscle mass and everyday energy, while a wheat-free composition keeps digestion light.",
    "The rich taste of poultry awakens your big dog's appetite, and the formula is tuned to the active lifestyle of large breeds. Each day your strong companion receives complete nutrition that fuels both power and condition."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the daily amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with 80% animal protein and a wheat-free composition from quality ingredients."
  }
 },
 "dogs||Junior||Junior Lamb — Lamb": {
  "az": {
   "full": [
    "Böyüməkdə olan balalar üçün hazırlanmış bu quzu əti ilə zəngin yem, 2-18 aylıq bütün cins küçüklərin sağlam inkişafını dəstəkləyir. Yüksək heyvan zülalı tərkibi möhkəm əzələlərin və enerjili böyümənin əsasını qoyur, buğda isə tərkibinə daxil edilməyib və həssas mədə üçün daha yüngül seçim təklif edir.",
    "Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş resept dərinin sağlamlığına və parlaq tükə qayğı göstərir. Süni rəng, dad və konservantlardan azad olan bu premium yem, balanızın həyatının ən vacib dövründə ona etibarlı qidalanma bəxş edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı küçüyün yaşına, çəkisinə və aktivliyinə uyğun tənzimləyin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Yüksək faizli heyvan zülalı ilə hazırlanır, soya, GMO və süni əlavələr olmadan, Aİ-də istehsal olunur."
  },
  "ru": {
   "full": [
    "Этот насыщенный ягнёнком корм создан для растущих малышей и поддерживает здоровое развитие щенков всех пород в возрасте от 2 до 18 месяцев. Высокое содержание животного белка закладывает основу для крепких мышц и энергичного роста, а отсутствие пшеницы делает его более лёгким выбором для чувствительного пищеварения.",
    "Рецептура, обогащённая жирными кислотами Омега-3 и Омега-6, заботится о здоровье кожи и блеске шёрстки. Без искусственных красителей, ароматизаторов и консервантов этот премиальный корм дарит вашему малышу надёжное питание в самый важный период его жизни."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и регулируйте порцию в зависимости от возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом животного белка, без сои, ГМО и искусственных добавок, произведён в ЕС."
  },
  "en": {
   "full": [
    "Crafted for growing little ones, this lamb-rich food supports the healthy development of puppies of all breeds from 2 to 18 months of age. Its high animal protein content lays the foundation for strong muscles and energetic growth, while the wheat-free recipe offers a gentler choice for sensitive young tummies.",
    "Enriched with Omega-3 and Omega-6 fatty acids, the formula nurtures healthy skin and a glossy coat. Free from artificial colours, flavours and preservatives, this premium food gives your puppy dependable nutrition during the most important stage of life."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your puppy's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with a high percentage of animal protein, without soy, GMO or artificial additives, produced in the EU."
  }
 },
 "dogs||Adult||Adult Lamb — Lamb": {
  "az": {
   "full": [
    "Bu quru yem yetkin itlərin gündəlik enerji və sağlamlıq ehtiyaclarını ödəmək üçün dadlı quzu əti əsasında hazırlanıb və bütün cinslər üçün uyğundur. Yüksək heyvan zülalı möhkəm əzələləri və canlı həyat tərzini dəstəkləyir, buğdasız resept isə həssas həzm sistemli itlər üçün yüngül və rahat seçimdir.",
    "Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş tərkib dərinin sağlamlığına və tükün təbii parlaqlığına qayğı göstərir. Süni rəng, dad və konservantlar olmadan bu premium yem hər gün dolğun və balanslı qidalanma təklif edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğun tənzimləyin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Yüksək faizli heyvan zülalı ilə hazırlanır, soya, GMO və süni əlavələr olmadan, Aİ-də istehsal olunur."
  },
  "ru": {
   "full": [
    "Этот сухой корм создан на основе вкусного ягнёнка, чтобы удовлетворить ежедневные потребности взрослых собак в энергии и здоровье, и подходит для всех пород. Высокое содержание животного белка поддерживает крепкие мышцы и активный образ жизни, а рецептура без пшеницы становится лёгким и комфортным выбором для собак с чувствительным пищеварением.",
    "Обогащённый жирными кислотами Омега-3 и Омега-6 состав заботится о здоровье кожи и естественном блеске шерсти. Без искусственных красителей, ароматизаторов и консервантов этот премиальный корм обеспечивает полноценное и сбалансированное питание каждый день."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и регулируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом животного белка, без сои, ГМО и искусственных добавок, произведён в ЕС."
  },
  "en": {
   "full": [
    "This dry food is built around tasty lamb to meet the everyday energy and wellness needs of adult dogs, and it suits all breeds. A high animal protein content supports strong muscles and an active lifestyle, while the wheat-free recipe makes a light, comfortable choice for dogs with sensitive digestion.",
    "Enriched with Omega-3 and Omega-6 fatty acids, the formula cares for healthy skin and the natural shine of the coat. Free from artificial colours, flavours and preservatives, this premium food delivers complete, balanced nutrition every day."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with a high percentage of animal protein, without soy, GMO or artificial additives, produced in the EU."
  }
 },
 "dogs||Wet food||Lamb — Adult dog": {
  "az": {
   "full": [
    "Şirəli ət parçaları ilə zəngin bu yaş yem, yetkin itlərə həm dadlı, həm də qidalı bir təam təqdim edir. Quzu əti həssas damaqlar üçün ləzzətli bir seçimdir, yüksək nəmlik isə hər gün su balansının qorunmasına kömək edir.",
    "Resept dərinin sağlamlığını və tükün təbii parlaqlığını dəstəkləmək üçün düşünülüb. Süni rəng, dad və konservantlardan azad olan bu premium konserv, sevimlinizin gündəlik qidalanmasına dəyər qatır."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğun tənzimləyin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli tərkib hissələri ilə, süni rəng, dad və konservantlar olmadan, Aİ-də istehsal olunur."
  },
  "ru": {
   "full": [
    "Этот влажный корм с сочными мясными кусочками предлагает взрослым собакам одновременно вкусное и питательное блюдо. Ягнёнок становится аппетитным выбором даже для разборчивых питомцев, а высокое содержание влаги помогает поддерживать водный баланс каждый день.",
    "Рецептура продумана для поддержания здоровья кожи и естественного блеска шерсти. Без искусственных красителей, ароматизаторов и консервантов эти премиальные консервы добавляют ценности ежедневному рациону вашего любимца."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и регулируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных ингредиентов, без искусственных красителей, ароматизаторов и консервантов, произведён в ЕС."
  },
  "en": {
   "full": [
    "With juicy meaty chunks, this wet food gives adult dogs a meal that is both tasty and nourishing. Lamb makes an appetising choice even for fussy eaters, while the high moisture content helps support healthy hydration every day.",
    "The recipe is designed to support healthy skin and the natural shine of the coat. Free from artificial colours, flavours and preservatives, this premium can adds real value to your companion's daily diet."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with quality ingredients, without artificial colours, flavours or preservatives, produced in the EU."
  }
 },
 "dogs||Wet food||Veal — Adult dog": {
  "az": {
   "full": [
    "Bu yaş yem incə dana əti ilə hazırlanıb və yetkin itlərə asanlıqla həzm olunan, ləzzətli bir təam təqdim edir. Şirəli ət parçaları həssas mədəli itlər üçün belə yüngül və rahat seçimdir, yüksək nəmlik isə gündəlik su balansını dəstəkləyir.",
    "Resept dərinin sağlamlığına və tükün canlı görünüşünə qayğı göstərmək üçün nəzərdə tutulub. Süni rəng, dad və konservantlardan azad olan bu premium konserv, sevimlinizə hər gün etibarlı qidalanma bəxş edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğun tənzimləyin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli tərkib hissələri ilə, süni rəng, dad və konservantlar olmadan, Aİ-də istehsal olunur."
  },
  "ru": {
   "full": [
    "Этот влажный корм приготовлен из нежной телятины и предлагает взрослым собакам легкоусвояемое и аппетитное блюдо. Сочные мясные кусочки становятся лёгким и комфортным выбором даже для собак с чувствительным желудком, а высокое содержание влаги поддерживает ежедневный водный баланс.",
    "Рецептура создана, чтобы заботиться о здоровье кожи и живом виде шерсти. Без искусственных красителей, ароматизаторов и консервантов эти премиальные консервы дарят вашему любимцу надёжное питание каждый день."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и регулируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных ингредиентов, без искусственных красителей, ароматизаторов и консервантов, произведён в ЕС."
  },
  "en": {
   "full": [
    "Made with tender veal, this wet food offers adult dogs an easily digestible and appetising meal. The juicy meaty chunks make a light, comfortable choice even for dogs with a sensitive stomach, while the high moisture content supports daily hydration.",
    "The recipe is created to care for healthy skin and a lively-looking coat. Free from artificial colours, flavours and preservatives, this premium can gives your companion dependable nourishment every day."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with quality ingredients, without artificial colours, flavours or preservatives, produced in the EU."
  }
 },
 "dogs||Wet food (can)||Turkey & Lamb (Light)": {
  "az": {
   "full": [
    "Hinduşka və quzunun incə birləşməsi ilə hazırlanmış bu yüngül konserv, yetkin itlərə yüngüllük və ləzzəti bir araya gətirən bir təam təqdim edir. Şirəli ət parçaları gündəlik enerjini dəstəkləyərkən, yüngül resept ölçülü qidalanmaya üstünlük verən itlər üçün uyğun seçimdir.",
    "Tərkib dərinin sağlamlığına və tükün təbii parlaqlığına qayğı göstərmək üçün düşünülüb. Süni rəng, dad və konservantlardan azad olan bu premium konserv, sevimlinizin balanslı qidalanmasına dəyər qatır."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğun tənzimləyin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli tərkib hissələri ilə, süni rəng, dad və konservantlar olmadan, Aİ-də istehsal olunur."
  },
  "ru": {
   "full": [
    "Эти лёгкие консервы с нежным сочетанием индейки и ягнёнка предлагают взрослым собакам блюдо, объединяющее лёгкость и вкус. Сочные мясные кусочки поддерживают ежедневную энергию, а облегчённая рецептура становится подходящим выбором для собак, которым нужно умеренное питание.",
    "Состав продуман, чтобы заботиться о здоровье кожи и естественном блеске шерсти. Без искусственных красителей, ароматизаторов и консервантов эти премиальные консервы добавляют ценности сбалансированному рациону вашего любимца."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и регулируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных ингредиентов, без искусственных красителей, ароматизаторов и консервантов, произведён в ЕС."
  },
  "en": {
   "full": [
    "With a delicate pairing of turkey and lamb, this light canned food gives adult dogs a meal that brings together lightness and flavour. The juicy meaty chunks support everyday energy, while the lighter recipe makes a fitting choice for dogs that benefit from more measured feeding.",
    "The formula is designed to care for healthy skin and the natural shine of the coat. Free from artificial colours, flavours and preservatives, this premium can adds value to your companion's balanced diet."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with quality ingredients, without artificial colours, flavours or preservatives, produced in the EU."
  }
 },
 "dogs||Wet food (can)||Turkey & Apples (Small Breeds)": {
  "az": {
   "full": [
    "Hinduşka və almanın təravətli birləşməsi ilə hazırlanmış bu konserv, kiçik cinsli yetkin itlərin xüsusi ehtiyaclarına uyğunlaşdırılıb. Şirəli ət parçaları kiçik damaqları məmnun edən ləzzət təqdim edir, bezərzəz resept isə həssas həzm sistemi üçün yüngül seçimdir.",
    "Kiçik dostlar üçün düşünülmüş bu premium konserv, gündəlik qidalanmaya təravət və dəyər qatır. Süni rəng, dad və konservantlardan azad olan tərkib, sevimlinizə etibarlı və balanslı bir təam bəxş edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğun tənzimləyin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli tərkib hissələri ilə, bezərzəz, süni rəng, dad və konservantlar olmadan, Aİ-də istehsal olunur."
  },
  "ru": {
   "full": [
    "Эти консервы со свежим сочетанием индейки и яблок адаптированы под особые потребности взрослых собак мелких пород. Сочные мясные кусочки дарят вкус, который радует маленьких гурманов, а беззерновая рецептура становится лёгким выбором для чувствительного пищеварения.",
    "Продуманные для маленьких друзей, эти премиальные консервы добавляют свежести и ценности ежедневному рациону. Без искусственных красителей, ароматизаторов и консервантов состав дарит вашему любимцу надёжное и сбалансированное блюдо."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и регулируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных ингредиентов, беззерновой, без искусственных красителей, ароматизаторов и консервантов, произведён в ЕС."
  },
  "en": {
   "full": [
    "With a fresh combination of turkey and apples, this canned food is tailored to the special needs of adult small-breed dogs. The juicy meaty chunks deliver a flavour that delights little gourmets, while the grain-free recipe makes a light choice for sensitive digestion.",
    "Thoughtfully designed for small companions, this premium can adds freshness and value to the daily diet. Free from artificial colours, flavours and preservatives, the formula gives your pet a dependable, balanced meal."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with quality ingredients, grain-free, without artificial colours, flavours or preservatives, produced in the EU."
  }
 },
 "dogs||Wet food (can)||Lamb (Puppy)": {
  "az": {
   "full": [
    "Quzu əti ilə hazırlanmış bu konserv, böyüməkdə olan küçüklərin həssas ehtiyaclarına uyğun yumşaq və ləzzətli bir təam təqdim edir. Şirəli ət parçaları balanın inkişafını dəstəkləyərkən, yüksək nəmlik kiçik bədənin su balansını qorumağa kömək edir.",
    "Resept dərinin sağlamlığına və tükün təbii parlaqlığına qayğı göstərmək üçün düşünülüb. Süni rəng, dad və konservantlardan azad olan bu premium konserv, balanıza həyatının ilk dövründə etibarlı qidalanma bəxş edir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı küçüyün yaşına, çəkisinə və aktivliyinə uyğun tənzimləyin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli tərkib hissələri ilə, süni rəng, dad və konservantlar olmadan, Aİ-də istehsal olunur."
  },
  "ru": {
   "full": [
    "Эти консервы с ягнёнком предлагают растущим щенкам нежное и аппетитное блюдо, подходящее их деликатным потребностям. Сочные мясные кусочки поддерживают развитие малыша, а высокое содержание влаги помогает сохранять водный баланс маленького организма.",
    "Рецептура продумана, чтобы заботиться о здоровье кожи и естественном блеске шёрстки. Без искусственных красителей, ароматизаторов и консервантов эти премиальные консервы дарят вашему малышу надёжное питание в самый первый период жизни."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и регулируйте порцию в зависимости от возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлен из качественных ингредиентов, без искусственных красителей, ароматизаторов и консервантов, произведён в ЕС."
  },
  "en": {
   "full": [
    "Made with lamb, this canned food offers growing puppies a tender, appetising meal suited to their delicate needs. The juicy meaty chunks support a youngster's development, while the high moisture content helps keep a small body well hydrated.",
    "The recipe is designed to care for healthy skin and the natural shine of the coat. Free from artificial colours, flavours and preservatives, this premium can gives your little one dependable nourishment in the very first stage of life."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your puppy's age, weight and activity level; always keep fresh water available.",
   "comp": "Made with quality ingredients, without artificial colours, flavours or preservatives, produced in the EU."
  }
 },
 "dogs||Wet food (can)||Beef & Turkey": {
  "az": {
   "full": [
    "Yetkin itinizi dilim-dilim mal əti və hinduşkanın faydalı dadı ilə sevindirin — şirəli, ətli parçalar hər yeməkdə həvəslə gözləniləcək. Bu taxılsız konserv resepti iki keyfiyyətli heyvani zülalı birləşdirərək təbii zəngin dad bəxş edir.",
    "Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş yem sağlam dəri və parlaq tükü qoruyur. Soyasız, GMO-suz, süni boya, dad və konservantsız — Aİ-də istehsal olunmuş təmiz, premium seçimdir."
   ],
   "feeding": "Qablaşdırmadakı yemləmə cədvəlinə əməl edin və gündəlik miqdarı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın, daima təmiz suya çıxış təmin edin.",
   "comp": "Keyfiyyətli heyvani zülallardan hazırlanıb, soyasız, GMO-suz və süni əlavələrsizdir."
  },
  "ru": {
   "full": [
    "Порадуйте взрослую собаку нежным мясом говядины и индейки, томлёным до сочных мясных кусочков, которые она будет ждать с удовольствием. Этот беззерновой рецепт в консервах сочетает два качественных животных белка ради насыщенного, естественно богатого вкуса.",
    "Обогащённый жирными кислотами Омега-3 и Омега-6, корм помогает поддерживать здоровье кожи и блеск шерсти. Без сои, без ГМО и без искусственных красителей, ароматизаторов и консервантов — это чистый премиальный выбор, произведённый в ЕС."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте суточную норму с учётом возраста, веса и активности собаки, всегда обеспечивая доступ к свежей воде.",
   "comp": "Изготовлено из качественных животных белков, без сои, ГМО и искусственных добавок."
  },
  "en": {
   "full": [
    "Treat your adult dog to the wholesome goodness of tender beef and turkey, slow-cooked into juicy, meaty chunks they will look forward to at every meal. This grain-free canned recipe pairs two quality animal proteins for a satisfying, naturally rich taste.",
    "Fortified with Omega-3 and Omega-6 fatty acids, it helps nourish healthy skin and a glossy coat from the inside out. With no soy, no GMO, and no artificial colours, flavours or preservatives, it is a clean, premium choice made in the EU."
   ],
   "feeding": "Follow the feeding guide on the pack and adjust the daily amount to your dog's age, weight and activity level, always keeping fresh water available.",
   "comp": "Made with quality animal proteins and free from soy, GMO and artificial additives."
  }
 },
 "dogs||Wet food (can)||Veal (Puppy)": {
  "az": {
   "full": [
    "Böyüyən balanıza zərif dana əti ilə yumşaq, qidalı bir başlanğıc verin — şirəli, yumşaq parçalar asanlıqla yeyilir. Bu taxılsız konserv resepti xüsusilə balalar üçün hazırlanıb və sağlam inkişaf üçün keyfiyyətli heyvani zülal təqdim edir.",
    "Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş yem balanın həssas dərisinə və yumşaq, parlaq tükünə qayğı göstərir. Soyasız, GMO-suz və süni boya, dad, konservantsız, etibarlı keyfiyyət üçün Aİ-də istehsal olunub."
   ],
   "feeding": "Qablaşdırmadakı yemləmə cədvəlinə əməl edin və porsiyaları balanızın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın, daima təmiz su təmin edin.",
   "comp": "Keyfiyyətli dana zülalından hazırlanıb, soyasız, GMO-suz və süni əlavələrsizdir."
  },
  "ru": {
   "full": [
    "Подарите растущему щенку мягкий и питательный старт с нежной телятиной в виде сочных кусочков, которые легко есть. Этот беззерновой рецепт в консервах создан специально для щенков и обеспечивает качественный животный белок для здорового развития.",
    "Обогащённый жирными кислотами Омега-3 и Омега-6, корм бережно заботится о нежной коже щенка и мягкой блестящей шерсти. Без сои, ГМО и искусственных красителей, ароматизаторов и консервантов, произведено в ЕС."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порции с учётом возраста, веса и активности щенка, всегда обеспечивая доступ к свежей воде.",
   "comp": "Изготовлено из качественного белка телятины, без сои, ГМО и искусственных добавок."
  },
  "en": {
   "full": [
    "Give your growing puppy a gentle, nourishing start with tender veal, served as soft, juicy chunks that are easy to enjoy. This grain-free canned recipe is crafted especially for puppies, delivering quality animal protein to support healthy development.",
    "Enriched with Omega-3 and Omega-6 fatty acids, it helps care for delicate puppy skin and a soft, shiny coat. Free from soy, GMO and artificial colours, flavours and preservatives, and made in the EU for trusted quality."
   ],
   "feeding": "Follow the feeding guide on the pack and adjust portions to your puppy's age, weight and activity, always keeping fresh water within reach.",
   "comp": "Made with quality veal protein and free from soy, GMO and artificial additives."
  }
 },
 "dogs||Wet food (can)||Game": {
  "az": {
   "full": [
    "Yetkin itinizin qabına şirəli ov əti ilə vəhşi təbiətin dadını gətirin — zərif, şirəli parçalar təbii zəngin bir yemək təşkil edir. Bu taxılsız konserv resepti seçici iştahları belə cəlb edən keyfiyyətli heyvani zülal mənbəyi təqdim edir.",
    "Omega-3 və Omega-6 yağ turşuları ilə zənginləşdirilmiş yem sağlam dərini və gözəl, parlaq tükü dəstəkləyir. Soyasız, GMO-suz və süni boya, dad, konservantsız — Aİ-də istehsal olunmuş etibarlı, faydalı qidadır."
   ],
   "feeding": "Qablaşdırmadakı yemləmə cədvəlinə əməl edin və gündəlik miqdarı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın, daima təmiz suya çıxış təmin edin.",
   "comp": "Keyfiyyətli ov əti zülalından hazırlanıb, soyasız, GMO-suz və süni əlavələrsizdir."
  },
  "ru": {
   "full": [
    "Привнесите вкус дикой природы в миску взрослой собаки с сочной дичью, приготовленной в виде нежных мясных кусочков для естественно насыщенного блюда. Этот беззерновой рецепт в консервах предлагает качественный источник животного белка, привлекательный даже для разборчивых питомцев.",
    "Обогащённый жирными кислотами Омега-3 и Омега-6, корм поддерживает здоровье кожи и красивую блестящую шерсть. Без сои, ГМО и искусственных красителей, ароматизаторов и консервантов — это полезное питание, произведённое в ЕС."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте суточную норму с учётом возраста, веса и активности собаки, всегда обеспечивая доступ к свежей воде.",
   "comp": "Изготовлено из качественного белка дичи, без сои, ГМО и искусственных добавок."
  },
  "en": {
   "full": [
    "Bring a taste of the wild to your adult dog's bowl with succulent game, prepared as tender, juicy chunks for a naturally flavourful meal. This grain-free canned recipe offers a quality animal protein source that appeals to even discerning appetites.",
    "Enriched with Omega-3 and Omega-6 fatty acids, it supports healthy skin and a beautiful, shiny coat. With no soy, no GMO and no artificial colours, flavours or preservatives, it delivers wholesome, EU-made nutrition you can trust."
   ],
   "feeding": "Follow the feeding guide on the pack and adjust the daily amount to your dog's age, weight and activity, always keeping fresh water available.",
   "comp": "Made with quality game protein and free from soy, GMO and artificial additives."
  }
 },
 "dogs||Wet food (can)||Veal & Duck (Small Breed)": {
  "az": {
   "full": [
    "Kiçik cinsli dostlar üçün mükəmməl porsiyalanmış bu konserv resepti zərif dana əti və zəngin ördəyi kiçik itlərin çox sevdiyi şirəli, ətli parçalarda birləşdirir. Taxılsız və keyfiyyətli heyvani zülallardan hazırlanmış bu yem hər tikədə zəngin dad bəxş edir.",
    "Bir-birini tamamlayan iki zülal mənbəyi hər yeməyi həm doyurucu, həm də faydalı edir. Soyasız, GMO-suz və süni boya, dad, konservantsız, Aİ-də istehsal olunub — əzizlənən kiçik cinsli itlər üçün premium seçimdir."
   ],
   "feeding": "Qablaşdırmadakı yemləmə cədvəlinə əməl edin və gündəlik miqdarı kiçik itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın, daima təmiz su təmin edin.",
   "comp": "Keyfiyyətli dana və ördək zülallarından hazırlanıb, soyasız, GMO-suz və süni əlavələrsizdir."
  },
  "ru": {
   "full": [
    "Идеально порционированный для питомцев малых пород, этот рецепт в консервах сочетает нежную телятину и насыщенную утку в сочных мясных кусочках, которые так нравятся маленьким собакам. Беззерновой и приготовленный из качественных животных белков, он дарит яркий вкус в каждом кусочке.",
    "Два дополняющих друг друга источника белка делают каждый приём пищи сытным и полезным. Без сои, ГМО и искусственных красителей, ароматизаторов и консервантов, произведено в ЕС — премиальный выбор для любимых собак малых пород."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте суточную норму с учётом возраста, веса и активности маленькой собаки, всегда обеспечивая доступ к свежей воде.",
   "comp": "Изготовлено из качественных белков телятины и утки, без сои, ГМО и искусственных добавок."
  },
  "en": {
   "full": [
    "Perfectly portioned for small-breed companions, this canned recipe combines tender veal and rich duck into juicy, meaty chunks that smaller dogs adore. Grain-free and made with quality animal proteins, it delivers big flavour in every bite for your little one.",
    "Two complementary protein sources make every meal both satisfying and wholesome. Free from soy, GMO and artificial colours, flavours and preservatives, and made in the EU, it is a premium choice for pampered small-breed dogs."
   ],
   "feeding": "Follow the feeding guide on the pack and adjust the daily amount to your small dog's age, weight and activity, always keeping fresh water available.",
   "comp": "Made with quality veal and duck proteins, free from soy, GMO and artificial additives."
  }
 },
 "dogs||Wet food (can)||Turkey": {
  "az": {
   "full": [
    "Mədəyə zərif və dadı zəngin olan bu hinduşka resepti həssas həzm sisteminə malik yetkin itlər üçün diqqətlə hazırlanıb. Yağsız, asan həzm olunan hinduşka şirəli, ətli parçalar şəklində təqdim olunur və yemək vaxtını həm rahat, həm də dadlı edir.",
    "Taxılsız və qlütensiz olan yem ümumi qıcıqlandırıcılardan qaçır və eyni zamanda keyfiyyətli heyvani zülal təqdim edir. Soyasız, GMO-suz və süni boya, dad, konservantsız — Aİ-də istehsal olunmuş bu resept həssas itlər üçün mehriban, faydalı seçimdir."
   ],
   "feeding": "Qablaşdırmadakı yemləmə cədvəlinə əməl edin və gündəlik miqdarı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın, daima təmiz suya çıxış təmin edin.",
   "comp": "Asan həzm olunan hinduşkadan hazırlanıb, taxılsız və qlütensizdir, soyasız, GMO-suz və süni əlavələrsizdir."
  },
  "ru": {
   "full": [
    "Бережный для животика и насыщенный по вкусу, этот рецепт с индейкой заботливо создан для взрослых собак с чувствительным пищеварением. Постная, легко усваиваемая индейка подаётся в виде сочных мясных кусочков, делая приём пищи приятным и вкусным.",
    "Беззерновой и без глютена, корм исключает распространённые раздражители, обеспечивая при этом качественный животный белок. Без сои, ГМО и искусственных красителей, ароматизаторов и консервантов — этот произведённый в ЕС рецепт станет деликатным выбором для чувствительных собак."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте суточную норму с учётом возраста, веса и активности собаки, всегда обеспечивая доступ к свежей воде.",
   "comp": "Изготовлено из легко усваиваемой индейки, без зерна и глютена, без сои, ГМО и искусственных добавок."
  },
  "en": {
   "full": [
    "Gentle on tummies and rich in flavour, this turkey recipe is thoughtfully crafted for adult dogs with sensitive digestion. Lean, easily digestible turkey is served as juicy, meaty chunks that make mealtime both comforting and delicious.",
    "Grain-free and gluten-free, it avoids common irritants while delivering quality animal protein. With no soy, no GMO and no artificial colours, flavours or preservatives, this EU-made recipe is a kind, wholesome choice for sensitive dogs."
   ],
   "feeding": "Follow the feeding guide on the pack and adjust the daily amount to your dog's age, weight and activity, always keeping fresh water available.",
   "comp": "Made with easily digestible turkey, grain-free and gluten-free, with no soy, GMO or artificial additives."
  }
 },
 "dogs||Superior Care · Soup||White Dogs Wellness Soup — Tuna & Salmon": {
  "az": {
   "full": [
    "Açıq rəngli tüklü dostunuzu bu zərif velnes şorbası ilə əzizləyin — dadlı, nəm zəngin bulyonda tunes və qızılbalığın incə qarışığı. Tük rənginə uyğunlaşdırılmış Superior Care xəttinin bir hissəsi olan bu şorba xüsusilə ağ və açıq rəngli tüklü itlər üçün yaradılıb.",
    "Balıq əsaslı resept təbii olaraq sağlam dəriyə və yumşaq, parlaq tükə qayğı göstərən qida maddələri ilə zəngindir. İtinizin görünüşünə və rifahına qayğı göstərərkən yemək vaxtına müxtəliflik qatmağın isti, nəmləndirici yoludur."
   ],
   "feeding": "Qablaşdırmadakı yemləmə cədvəlinə əməl edin və porsiyaları itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın, daima təmiz su təmin edin.",
   "comp": "Tunes və qızılbalıqdan hazırlanıb, dəri və tük qayğısını təbii şəkildə dəstəkləyir."
  },
  "ru": {
   "full": [
    "Побалуйте питомца со светлой шерстью этим нежным велнес-супом — деликатным сочетанием тунца и лосося в ароматном, насыщенном влагой бульоне. Входящий в линию Superior Care, подобранную по цвету шерсти, он создан специально для собак с белой и светлой шерстью.",
    "Рецепт на основе рыбы естественно богат питательными веществами, которые помогают поддерживать здоровье кожи и мягкую, сияющую шерсть. Согревающий и увлажняющий способ разнообразить рацион, заботясь о внешнем виде и самочувствии вашей собаки."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порции с учётом возраста, веса и активности собаки, всегда обеспечивая доступ к свежей воде.",
   "comp": "Приготовлено с тунцом и лососем, естественно поддерживает здоровье кожи и шерсти."
  },
  "en": {
   "full": [
    "Pamper your light-coated companion with this gentle wellness soup, a delicate blend of tuna and salmon in a flavourful, moisture-rich broth. Part of the Superior Care line tailored to coat colour, it is created especially for dogs with white and light coats.",
    "The fish-based recipe is naturally rich in nutrients that help nourish healthy skin and a soft, radiant coat. A warming, hydrating way to add variety to mealtime while caring for your dog's appearance and wellbeing."
   ],
   "feeding": "Follow the feeding guide on the pack and adjust servings to your dog's age, weight and activity, always keeping fresh water available.",
   "comp": "Crafted with tuna and salmon, naturally supporting skin and coat care."
  }
 },
 "dogs||Vitamins||Mobility Formula": {
  "az": {
   "full": [
    "İtinizin aktiv və çevik qalmasına Mobility Formula ilə kömək edin — diqqətlə seçilmiş vitamin və minerallardan ibarət tablet əlavəsi. O, oynaqların hərəkətliliyini və ümumi oynaq sağlamlığını dəstəkləmək üçün hazırlanıb ki, dostunuz həyatın hər mərhələsində rahat hərəkət edə bilsin.",
    "Bu formula itinizin gündəlik rejiminə əlavə kimi asanlıqla verilir. O, aktiv həyat tərzi keçirən və ya sadəcə oynaqlarına bir az əlavə qayğıya ehtiyacı olan hər yaşdan itlər üçün məqsədyönlü dəstək təklif edir."
   ],
   "feeding": "Qablaşdırmadakı doza təlimatına əməl edin və itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın, daima təmiz su təmin edin.",
   "comp": "Oynaq sağlamlığını dəstəkləmək üçün seçilmiş vitamin və mineralların məqsədyönlü qarışığı."
  },
  "ru": {
   "full": [
    "Помогите своей собаке оставаться активной и подвижной с Mobility Formula — таблетированной добавкой из тщательно подобранных витаминов и минералов. Она разработана для поддержки подвижности и здоровья суставов, чтобы ваш питомец комфортно двигался на каждом этапе жизни.",
    "Эту формулу легко давать как ежедневное дополнение к рациону собаки. Она обеспечивает целенаправленную поддержку для собак любого возраста, ведущих активный образ жизни или просто нуждающихся в дополнительной заботе о суставах."
   ],
   "feeding": "Следуйте рекомендациям по дозировке на упаковке и корректируйте с учётом возраста, веса и активности собаки, всегда обеспечивая доступ к свежей воде.",
   "comp": "Целенаправленное сочетание витаминов и минералов, подобранное для поддержки здоровья суставов."
  },
  "en": {
   "full": [
    "Help your dog stay active and agile with Mobility Formula, a tablet supplement of carefully selected vitamins and minerals. It is designed to support joint mobility and overall joint health, so your companion can keep moving comfortably through every stage of life.",
    "Easy to give as a daily addition to your dog's routine, this formula offers targeted support for dogs of all ages who lead an active life or simply need a little extra care for their joints."
   ],
   "feeding": "Follow the dosage guidance on the pack and adjust to your dog's age, weight and activity, always keeping fresh water available.",
   "comp": "A targeted blend of vitamins and minerals chosen to support joint health."
  }
 },
 "dogs||Oils||Salmon Oil": {
  "az": {
   "full": [
    "Pişməmiş qızılbalıqdan alınan bu təbii yağ, sevimli pişiyiniz və itiniz üçün təmiz Omega-3 yağ turşuları mənbəyidir. Hər gün yeməyə əlavə edildikdə dəriyə qulluq edir, qaşınmanı azaldır və tükü içəridən qidalandırır.",
    "Müntəzəm istifadə nəticəsində tük parlaq, sıx və sağlam görünüş alır. Omega-3 həmçinin ümumi sağlamlığı və canlılığı dəstəkləyir, heyvanınızın hər mövsümdə öz ən yaxşı formasında qalmasına kömək edir."
   ],
   "feeding": "Yeməyə gündəlik əlavə olaraq qabın üzərindəki cədvələ uyğun verin; heyvanın yaşına, çəkisinə və aktivliyinə görə tənzimləyin və daim təmiz su təmin edin.",
   "comp": "Tərkibində süni əlavələr olmadan, dəri və tükün sağlamlığı üçün dəyərli Omega-3 mənbəyi olan qızılbalıq yağı vardır."
  },
  "ru": {
   "full": [
    "Это натуральное масло из лосося — чистый источник жирных кислот Омега-3 для вашей кошки и собаки. Добавленное в ежедневный рацион, оно ухаживает за кожей, уменьшает зуд и питает шерсть изнутри.",
    "При регулярном применении шерсть становится блестящей, густой и здоровой на вид. Омега-3 также поддерживает общее здоровье и жизненный тонус, помогая питомцу оставаться в наилучшей форме в любое время года."
   ],
   "feeding": "Добавляйте к корму ежедневно согласно таблице на упаковке; корректируйте дозу с учётом возраста, веса и активности животного и всегда обеспечивайте свежую воду.",
   "comp": "Содержит лососёвое масло — ценный источник Омега-3 для здоровья кожи и шерсти, без искусственных добавок."
  },
  "en": {
   "full": [
    "This natural salmon oil is a pure source of Omega-3 fatty acids for your cat and dog. Added to the daily meal, it nourishes the skin from within, helps soothe itching and feeds the coat for a healthy shine.",
    "With regular use the coat becomes glossy, dense and beautifully conditioned. Omega-3 also supports overall wellbeing and vitality, helping your pet look and feel its best in every season."
   ],
   "feeding": "Add to food daily following the feeding table on the pack; adjust the amount to your pet's age, weight and activity, and always provide fresh water.",
   "comp": "Contains salmon oil, a valued source of Omega-3 for skin and coat health, with no artificial additives."
  }
 },
 "dogs||Life Long MZG||Recovery & Performance": {
  "az": {
   "full": [
    "Recovery & Performance, pişik və itlər üçün hazırlanmış MZG sistemidir və təbii volkanik mənşəli klinoptilolit olan MicroZeoGen əsasında işləyir. O, enerji səviyyəsini dəstəkləyir və orqanizmin aktiv yükdən sonra daha tez bərpa olunmasına kömək edir.",
    "MicroZeoGen-in təbii detoks və antioksidant xüsusiyyətləri toksinlərin xaric olunmasına dəstək olur, bağırsaq və immun sistemin sağlamlığına töhfə verir. Bu, xüsusilə aktiv, idmançı və ya bərpa dövründə olan heyvanlar üçün ideal gündəlik dəstəkdir."
   ],
   "feeding": "Toz formanı qabın üzərindəki cədvələ uyğun olaraq yeməyə əlavə edin; heyvanın yaşına, çəkisinə və aktivliyinə görə tənzimləyin və daim təmiz su təmin edin.",
   "comp": "Tərkibində təbii volkanik mənşəli MicroZeoGen (klinoptilolit) vardır."
  },
  "ru": {
   "full": [
    "Recovery & Performance — это система MZG для кошек и собак на основе MicroZeoGen, природного клиноптилолита вулканического происхождения. Она поддерживает уровень энергии и помогает организму быстрее восстанавливаться после нагрузок.",
    "Природные детокс- и антиоксидантные свойства MicroZeoGen способствуют выведению токсинов и поддерживают здоровье кишечника и иммунитета. Это идеальная ежедневная поддержка для активных, спортивных питомцев или животных в период восстановления."
   ],
   "feeding": "Добавляйте порошок к корму согласно таблице на упаковке; корректируйте с учётом возраста, веса и активности животного и всегда обеспечивайте свежую воду.",
   "comp": "Содержит MicroZeoGen (клиноптилолит) природного вулканического происхождения."
  },
  "en": {
   "full": [
    "Recovery & Performance is an MZG system for cats and dogs built around MicroZeoGen, a natural clinoptilolite of volcanic origin. It supports healthy energy levels and helps the body recover faster after exertion.",
    "The natural detox and antioxidant properties of MicroZeoGen aid the removal of toxins and support gut and immune health. It is an ideal daily companion for active, sporting pets or animals in a recovery phase."
   ],
   "feeding": "Add the powder to food following the feeding table on the pack; adjust to your pet's age, weight and activity, and always provide fresh water.",
   "comp": "Contains MicroZeoGen (clinoptilolite) of natural volcanic origin."
  }
 },
 "dogs||Life Long MZG||Active Detox": {
  "az": {
   "full": [
    "Active Detox, pişik və itlər üçün MZG sistemidir və təbii volkanik mənşəli klinoptilolit olan MicroZeoGen-in gücündən faydalanır. O, sağlam bağırsaq və düzgün həzm prosesini dəstəkləyərək orqanizmin tam detoksuna kömək edir.",
    "MicroZeoGen təbii şəkildə toksinlərin və ağır metalların bədəndən xaric olunmasına yardım edir, eyni zamanda antioksidant müdafiə təmin edir. Müntəzəm istifadə bağırsaq və immun sisteminin sağlamlığını dəstəkləyərək heyvanınızın daxili tarazlığını qoruyur."
   ],
   "feeding": "Toz formanı qabın üzərindəki cədvələ uyğun olaraq yeməyə əlavə edin; heyvanın yaşına, çəkisinə və aktivliyinə görə tənzimləyin və daim təmiz su təmin edin.",
   "comp": "Tərkibində təbii volkanik mənşəli MicroZeoGen (klinoptilolit) vardır."
  },
  "ru": {
   "full": [
    "Active Detox — это система MZG для кошек и собак, использующая силу MicroZeoGen, природного клиноптилолита вулканического происхождения. Она поддерживает здоровый кишечник и правильное пищеварение, способствуя полному детоксу организма.",
    "MicroZeoGen естественным образом помогает выводить токсины и тяжёлые металлы, обеспечивая при этом антиоксидантную защиту. Регулярное применение поддерживает здоровье кишечника и иммунитета, сохраняя внутренний баланс вашего питомца."
   ],
   "feeding": "Добавляйте порошок к корму согласно таблице на упаковке; корректируйте с учётом возраста, веса и активности животного и всегда обеспечивайте свежую воду.",
   "comp": "Содержит MicroZeoGen (клиноптилолит) природного вулканического происхождения."
  },
  "en": {
   "full": [
    "Active Detox is an MZG system for cats and dogs that harnesses the power of MicroZeoGen, a natural clinoptilolite of volcanic origin. It supports a healthy gut and smooth digestion while encouraging a full-body detox.",
    "MicroZeoGen naturally helps remove toxins and heavy metals from the body while providing antioxidant defence. Regular use supports gut and immune health, keeping your pet's internal balance in great shape."
   ],
   "feeding": "Add the powder to food following the feeding table on the pack; adjust to your pet's age, weight and activity, and always provide fresh water.",
   "comp": "Contains MicroZeoGen (clinoptilolite) of natural volcanic origin."
  }
 },
 "dogs||Vitamins||Puppy Minerals": {
  "az": {
   "full": [
    "Puppy Minerals, böyüməkdə olan balaların incə tələbatlarına uyğun hazırlanmış vitamin və mineral kompleksidir. O, optimal böyüməni dəstəkləyir, gənc immun sistemi gücləndirir və beyin inkişafına töhfə verir.",
    "Bu tabletlər körpə dövründə möhkəm sümük və sağlam inkişaf üçün lazım olan dəyərli mineralları təmin edir. Hər gün asanlıqla verilə bilən bu kompleks balanıza güclü və enerjili bir başlanğıc bəxş edir."
   ],
   "feeding": "Tabletləri qabın üzərindəki cədvələ uyğun olaraq verin; balanın yaşına, çəkisinə və aktivliyinə görə tənzimləyin və daim təmiz su təmin edin.",
   "comp": "Böyümə dövründə dəstək üçün vacib vitamin və minerallarla zənginləşdirilmişdir."
  },
  "ru": {
   "full": [
    "Puppy Minerals — это комплекс витаминов и минералов, разработанный с учётом особых потребностей растущих щенков. Он поддерживает оптимальный рост, укрепляет молодой иммунитет и способствует развитию мозга.",
    "Эти таблетки обеспечивают ценные минералы, необходимые для крепких костей и здорового развития в раннем возрасте. Удобный для ежедневного приёма комплекс даёт вашему щенку сильный и энергичный старт в жизни."
   ],
   "feeding": "Давайте таблетки согласно таблице на упаковке; корректируйте с учётом возраста, веса и активности щенка и всегда обеспечивайте свежую воду.",
   "comp": "Обогащён важными витаминами и минералами для поддержки в период роста."
  },
  "en": {
   "full": [
    "Puppy Minerals is a vitamin and mineral complex tailored to the delicate needs of growing puppies. It supports optimal growth, strengthens the young immune system and aids healthy brain development.",
    "These tablets deliver the valuable minerals needed for strong bones and sound development in the earliest months. Easy to give every day, the complex gives your puppy a strong, energetic start in life."
   ],
   "feeding": "Give the tablets following the feeding table on the pack; adjust to your puppy's age, weight and activity, and always provide fresh water.",
   "comp": "Fortified with essential vitamins and minerals to support the growth phase."
  }
 },
 "dogs||Vitamins||Multivitamins": {
  "az": {
   "full": [
    "Multivitamins, itiniz üçün gündəlik geniş spektrli sağlamlıq dəstəyi təmin edən vitamin tabletləridir. O, immun sistemi gücləndirir, sinir sisteminin balanslı işinə dəstək olur və güclü oynaq və sümüklərin qorunmasına töhfə verir.",
    "Bu mükəmməl tarazlaşdırılmış kompleks, aktiv və sağlam bir həyat üçün lazım olan vacib qida maddələrini bir yerdə toplayır. Müntəzəm istifadə itinizin hər yaşda canlı və formada qalmasına kömək edir."
   ],
   "feeding": "Tabletləri qabın üzərindəki cədvələ uyğun olaraq verin; itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin və daim təmiz su təmin edin.",
   "comp": "Ümumi sağlamlığı dəstəkləmək üçün vacib vitamin və minerallarla zənginləşdirilmişdir."
  },
  "ru": {
   "full": [
    "Multivitamins — это витаминные таблетки, обеспечивающие вашей собаке ежедневную всестороннюю поддержку здоровья. Они укрепляют иммунитет, поддерживают сбалансированную работу нервной системы и способствуют крепости суставов и костей.",
    "Этот тщательно сбалансированный комплекс объединяет важные питательные вещества, необходимые для активной и здоровой жизни. Регулярное применение помогает вашей собаке оставаться бодрой и в хорошей форме в любом возрасте."
   ],
   "feeding": "Давайте таблетки согласно таблице на упаковке; корректируйте с учётом возраста, веса и активности собаки и всегда обеспечивайте свежую воду.",
   "comp": "Обогащён важными витаминами и минералами для поддержки общего здоровья."
  },
  "en": {
   "full": [
    "Multivitamins are vitamin tablets that give your dog all-round daily health support. They strengthen immunity, support the balanced function of the nervous system and help keep joints and bones strong.",
    "This carefully balanced complex brings together the essential nutrients needed for an active, healthy life. Regular use helps your dog stay lively and in great shape at every stage of life."
   ],
   "feeding": "Give the tablets following the feeding table on the pack; adjust to your dog's age, weight and activity, and always provide fresh water.",
   "comp": "Fortified with essential vitamins and minerals to support overall health."
  }
 },
 "dogs||Vitamins||Beauty Formula": {
  "az": {
   "full": [
    "Beauty Formula, itinizin gözəlliyini içəridən bəsləyən vitamin və mineral kompleksidir. Bu xüsusi bəstə sağlam dəri, möhkəm dırnaqlar və parlaq, baxımlı tük üçün hazırlanmışdır.",
    "Hər gün asanlıqla verilə bilən bu tabletlər tükün təbii canlılığını və yumşaqlığını qoruyur. Müntəzəm istifadə nəticəsində itiniz həm sağlam, həm də göz oxşayan bir görünüş əldə edir."
   ],
   "feeding": "Tabletləri qabın üzərindəki cədvələ uyğun olaraq verin; itin yaşına, çəkisinə və aktivliyinə görə tənzimləyin və daim təmiz su təmin edin.",
   "comp": "Dəri və tükün sağlamlığını dəstəkləyən vitamin və minerallarla zənginləşdirilmişdir."
  },
  "ru": {
   "full": [
    "Beauty Formula — это комплекс витаминов и минералов, питающий красоту вашей собаки изнутри. Эта особая формула создана для здоровой кожи, крепких когтей и блестящей, ухоженной шерсти.",
    "Удобные для ежедневного приёма таблетки помогают сохранить природную живость и мягкость шерсти. При регулярном применении ваша собака обретает здоровый и эффектный внешний вид."
   ],
   "feeding": "Давайте таблетки согласно таблице на упаковке; корректируйте с учётом возраста, веса и активности собаки и всегда обеспечивайте свежую воду.",
   "comp": "Обогащён витаминами и минералами для поддержки здоровья кожи и шерсти."
  },
  "en": {
   "full": [
    "Beauty Formula is a vitamin and mineral complex that nourishes your dog's beauty from the inside out. This dedicated blend is crafted for healthy skin, strong nails and a shiny, well-groomed coat.",
    "Easy to give every day, these tablets help preserve the natural softness and vitality of the coat. With regular use your dog gains a look that is both healthy and eye-catching."
   ],
   "feeding": "Give the tablets following the feeding table on the pack; adjust to your dog's age, weight and activity, and always provide fresh water.",
   "comp": "Fortified with vitamins and minerals to support skin and coat health."
  }
 },
 "dogs||Milk replacer||Milk Replacer for Puppies": {
  "az": {
   "full": [
    "Milk Replacer for Puppies, yenicə doğulmuş balaların həssas mədəsi üçün hazırlanmış laktozsuz süd əvəzedicisidir. O, ananın südü əlçatan olmadıqda optimal böyümə üçün lazım olan qidalanmanı təmin edir və həyatın ilk günlərində möhkəm bir başlanğıc verir.",
    "Bu incə bəstə immun müdafiəni dəstəkləyərək kiçik körpələrin sağlam inkişafına kömək edir. Asanlıqla hazırlanan toz, ən kövrək dövrdə balanıza ehtiyac duyduğu qayğı və qidanı bəxş edir."
   ],
   "feeding": "Tozu qabın üzərindəki təlimata uyğun hazırlayın və verin; balanın yaşına və ehtiyacına görə tənzimləyin və daim təmiz su təmin edin.",
   "comp": "Yenicə doğulmuş balaların həssas həzmi üçün laktozsuz hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Milk Replacer for Puppies — это безлактозный заменитель молока, разработанный для чувствительного желудка новорождённых щенков. Он обеспечивает питание, необходимое для оптимального роста, когда материнское молоко недоступно, и даёт малышам крепкий старт в первые дни жизни.",
    "Эта бережная формула поддерживает иммунную защиту и способствует здоровому развитию крошечных щенков. Легко приготавливаемый порошок дарит вашему малышу заботу и питание, в которых он нуждается в самый хрупкий период."
   ],
   "feeding": "Готовьте и давайте порошок согласно инструкции на упаковке; корректируйте с учётом возраста и потребностей щенка и всегда обеспечивайте свежую воду.",
   "comp": "Создан без лактозы для чувствительного пищеварения новорождённых щенков."
  },
  "en": {
   "full": [
    "Milk Replacer for Puppies is a lactose-free milk substitute created for the sensitive stomachs of newborn puppies. It provides the nourishment needed for optimal growth when the mother's milk is unavailable, giving the little ones a strong start in their first days.",
    "This gentle formula supports immune protection and encourages the healthy development of tiny puppies. Easy to prepare, the powder gives your newborn the care and nutrition it needs during its most fragile period."
   ],
   "feeding": "Prepare and give the powder following the instructions on the pack; adjust to the puppy's age and needs, and always provide fresh water.",
   "comp": "Made lactose-free for the sensitive digestion of newborn puppies."
  }
 },
 "dogs||Vitamins||D-Worm Formula": {
  "az": {
   "full": [
    "D-Worm Formula itlər üçün 100% təbii tozdur və sağlam bağırsaq mühitinin saxlanmasına, eləcə də qurdların qarşısının alınmasına dəstək olmaq üçün hazırlanmışdır. Süni əlavələrdən azad olan bu yumşaq formula gündəlik qayğının təbii bir hissəsi kimi düşünülmüşdür.",
    "Müntəzəm istifadə həzm sisteminin balansını dəstəkləyir və itinizin daxili rahatlığına qayğı göstərir. Etibarlı, təbii həll axtaran sahibləri üçün sadə və düşünülmüş seçimdir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; həmişə təmiz içməli su təmin edin.",
   "comp": "Süni rəng, dad və qoruyucu maddələr olmadan, diqqətlə seçilmiş təbii tərkib hissələri ilə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "D-Worm Formula — это 100% натуральный порошок для собак, созданный для поддержания здоровой среды кишечника и естественной профилактики глистов. Мягкая формула без искусственных добавок задумана как часть повседневного бережного ухода.",
    "Регулярное применение помогает поддерживать баланс пищеварения и заботится о внутреннем комфорте вашей собаки. Это простой и продуманный выбор для владельцев, ищущих надёжное натуральное решение."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество в зависимости от возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из тщательно отобранных натуральных ингредиентов, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "D-Worm Formula is a 100% natural powder for dogs, created to maintain a healthy gut environment and support the natural prevention of worms. This gentle, additive-free formula is designed to be part of your everyday routine of caring for your companion.",
    "Used regularly, it helps keep digestion in balance and looks after your dog's inner comfort from within. A simple, thoughtful choice for owners seeking a dependable, natural solution."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh drinking water.",
   "comp": "Made with carefully selected natural ingredients, free from artificial colours, flavours and preservatives."
  }
 },
 "dogs||Vitamins||Stop Stool Eating Formula": {
  "az": {
   "full": [
    "Stop Stool Eating Formula itlərdə koprofagiyanın (nəcis yeməsinin) qarşısını almaq üçün hazırlanmış bitki mənşəli tozdur. Baytarlarla birgə işlənib hazırlanmış bu formula bu narahatedici vərdişi təbii və qayğıkeş şəkildə həll etməyə kömək edir.",
    "Eyni zamanda bağırsaq mikroflorasını dəstəkləyərək həzmin daha balanslı işləməsinə yardım edir. Sahibləri üçün etibarlı, mütəxəssis dəstəkli və gündəlik istifadəyə uyğun bir köməkçidir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; həmişə təmiz içməli su təmin edin.",
   "comp": "Diqqətlə seçilmiş bitki mənşəli tərkib hissələri ilə, süni əlavələr olmadan hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Stop Stool Eating Formula — растительный порошок для собак, разработанный для предотвращения копрофагии (поедания фекалий). Созданная совместно с ветеринарами, эта формула помогает мягко и заботливо справиться с этой неприятной привычкой.",
    "Одновременно она поддерживает микрофлору кишечника, способствуя более сбалансированной работе пищеварения. Это надёжный помощник для владельцев, созданный при участии специалистов и подходящий для ежедневного применения."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество в зависимости от возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из тщательно отобранных растительных ингредиентов, без искусственных добавок."
  },
  "en": {
   "full": [
    "Stop Stool Eating Formula is a herbal powder for dogs, developed to help prevent coprophagia (stool eating). Created together with vets, this formula offers a gentle, caring way to address this troubling habit.",
    "At the same time it supports the intestinal microflora, helping digestion work in a more balanced way. A reliable, expert-backed helper for owners, suited to everyday use."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh drinking water.",
   "comp": "Made with carefully selected herbal ingredients, free from artificial additives."
  }
 },
 "dogs||Life Long MZG||Healthy Growth": {
  "az": {
   "full": [
    "Healthy Growth, böyüməkdə olan pişiklər və itlər üçün hazırlanmış MZG sistemidir və sağlam dişlər, oynaqlar və sümüklər, sərbəst hərəkət, eləcə də optimal inkişaf üçün düşünülüb. Təbii vulkanik mənşəli MicroZeoGen daxili tarazlığı dəstəkləyərək gənc orqanizmin güclü təməl qurmasına kömək edir.",
    "Müntəzəm istifadə ən aktiv böyümə dövründə həyati əhəmiyyət daşıyan möhkəm sümük və oynaq sağlamlığına qayğı göstərir. Sevimli dostunuzun enerjili və canlı böyüməsi üçün etibarlı gündəlik dəstəkdir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı heyvanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; həmişə təmiz içməli su təmin edin.",
   "comp": "Təbii vulkanik mənşəli MicroZeoGen (klinoptilolit) əsasında, antioksidant xüsusiyyətləri ilə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Healthy Growth — это система MZG для растущих кошек и собак, созданная для здоровья зубов, суставов и костей, свободы движений и оптимального развития. Натуральный MicroZeoGen вулканического происхождения поддерживает внутренний баланс, помогая юному организму заложить крепкий фундамент.",
    "Регулярное применение заботится о прочности костей и суставов, что особенно важно в период активного роста. Это надёжная ежедневная поддержка для энергичного и здорового взросления вашего любимца."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество в зависимости от возраста, веса и активности животного; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Создано на основе натурального MicroZeoGen (клиноптилолита) вулканического происхождения с антиоксидантными свойствами."
  },
  "en": {
   "full": [
    "Healthy Growth is an MZG system for growing cats and dogs, designed to support healthy teeth, joints and bones, free movement and optimal development. Natural MicroZeoGen of volcanic origin supports inner balance, helping a young body build strong foundations.",
    "Used regularly, it looks after the bone and joint health that matters most during the active growing years. A dependable daily support for an energetic, thriving start in life."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your pet's age, weight and activity level; always provide fresh drinking water.",
   "comp": "Built around natural MicroZeoGen (clinoptilolite) of volcanic origin, with antioxidant properties."
  }
 },
 "dogs||Life Long MZG||Healthy Ageing": {
  "az": {
   "full": [
    "Healthy Ageing, yaşlı pişiklər və itlər üçün hazırlanmış MZG sistemidir və dişlər, oynaqlar və sümüklər, sərbəst hərəkət, qida maddələrinin udulması və immunitet üçün düşünülüb. Təbii vulkanik mənşəli MicroZeoGen toksinlərin təbii şəkildə təmizlənməsinə kömək edərək yaşlanan orqanizmi içəridən dəstəkləyir.",
    "Müntəzəm istifadə hərəkət rahatlığına və ümumi həyat keyfiyyətinə qayğı göstərərək sevimli dostunuzun illər boyu canlı qalmasına yardım edir. Qayğıkeş sahibləri üçün yaşlılıq dövründə düşünülmüş gündəlik dəstəkdir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı heyvanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; həmişə təmiz içməli su təmin edin.",
   "comp": "Təbii vulkanik mənşəli MicroZeoGen (klinoptilolit) əsasında, detoks və antioksidant xüsusiyyətləri ilə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Healthy Ageing — это система MZG для пожилых кошек и собак, созданная для здоровья зубов, суставов и костей, свободы движений, усвоения питательных веществ и иммунитета. Натуральный MicroZeoGen вулканического происхождения помогает естественному выведению токсинов, поддерживая стареющий организм изнутри.",
    "Регулярное применение заботится о комфорте движений и общем качестве жизни, помогая вашему любимцу оставаться бодрым с годами. Это продуманная ежедневная поддержка для заботливых владельцев в зрелом возрасте питомца."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество в зависимости от возраста, веса и активности животного; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Создано на основе натурального MicroZeoGen (клиноптилолита) вулканического происхождения с детокс- и антиоксидантными свойствами."
  },
  "en": {
   "full": [
    "Healthy Ageing is an MZG system for senior cats and dogs, designed to support teeth, joints and bones, free movement, nutrient absorption and immunity. Natural MicroZeoGen of volcanic origin helps the natural removal of toxins, supporting an ageing body from within.",
    "Used regularly, it cares for comfortable movement and overall quality of life, helping your companion stay lively through the years. A thoughtful daily support for caring owners during the senior chapter."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your pet's age, weight and activity level; always provide fresh drinking water.",
   "comp": "Built around natural MicroZeoGen (clinoptilolite) of volcanic origin, with detox and antioxidant properties."
  }
 },
 "dogs||Superior Care · Snacks||White Dogs Junior — Healthy Growth": {
  "az": {
   "full": [
    "White Dogs Junior — Healthy Growth, açıq və ağ tüklü balalar üçün hazırlanmış dənsiz yumşaq snəklərdir. Həşərat zülalı ilə zənginləşdirilmiş bu dadlı tikələr sağlam böyümə və inkişafı dəstəkləyərkən həssas həzm sistemi üçün də yumşaqdır.",
    "Superior Care xəttinin bir parçası olaraq açıq tüklü balaların xüsusi ehtiyaclarına uyğunlaşdırılıb. Təlim mükafatı və ya gün ərzində qayğıkeş bir ləzzət kimi mükəmməl seçimdir."
   ],
   "feeding": "Qablaşdırmadakı tövsiyələrə əməl edin və snəkləri balanızın yaşına, çəkisinə və aktivliyinə uyğun məhdud miqdarda əlavə yem kimi verin; həmişə təmiz içməli su təmin edin.",
   "comp": "Dənsiz resept və həşərat zülalı ilə, süni rəng, dad və qoruyucu maddələr olmadan hazırlanmışdır."
  },
  "ru": {
   "full": [
    "White Dogs Junior — Healthy Growth — это беззерновые мягкие снеки для щенков со светлой и белой шерстью. Обогащённые белком насекомых, эти аппетитные кусочки поддерживают здоровый рост и развитие, оставаясь мягкими для чувствительного пищеварения.",
    "Как часть линейки Superior Care, они адаптированы под особые потребности щенков со светлой шерстью. Прекрасный выбор в качестве награды за обучение или заботливого лакомства в течение дня."
   ],
   "feeding": "Следуйте рекомендациям на упаковке и давайте снеки как дополнительное лакомство в умеренном количестве с учётом возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено по беззерновому рецепту с белком насекомых, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "White Dogs Junior — Healthy Growth are grain-free soft snacks crafted for puppies with light and white coats. Enriched with insect protein, these tasty morsels support healthy growth and development while staying gentle on a sensitive tummy.",
    "As part of the Superior Care line, they are matched to the special needs of light-coated youngsters. A wonderful choice as a training reward or a caring treat throughout the day."
   ],
   "feeding": "Follow the guidance on the pack and offer the snacks as a supplementary treat in moderate amounts, adjusted to your puppy's age, weight and activity; always provide fresh drinking water.",
   "comp": "Made to a grain-free recipe with insect protein, free from artificial colours, flavours and preservatives."
  }
 },
 "dogs||Superior Care · Snacks||White Dogs — Daily Oral Care": {
  "az": {
   "full": [
    "White Dogs — Daily Oral Care, açıq və ağ tüklü yetkin itlər üçün hazırlanmış dənsiz yumşaq snəklərdir və hər gün ağız sağlamlığına qayğı göstərmək üçün düşünülüb. Həşərat zülalı ilə zənginləşdirilmiş bu yumşaq tikələr ləzzətli bir mükafatı gündəlik diş qayğısı ilə birləşdirir.",
    "Superior Care xəttinin bir parçası olaraq açıq tüklü itlərin xüsusi ehtiyaclarına uyğunlaşdırılıb. Hər gün təbii və xoş bir anla ağız təravətini dəstəkləməyin asan yoludur."
   ],
   "feeding": "Qablaşdırmadakı tövsiyələrə əməl edin və snəkləri itinizin yaşına, çəkisinə və aktivliyinə uyğun məhdud miqdarda əlavə yem kimi verin; həmişə təmiz içməli su təmin edin.",
   "comp": "Dənsiz resept və həşərat zülalı ilə, süni rəng, dad və qoruyucu maddələr olmadan hazırlanmışdır."
  },
  "ru": {
   "full": [
    "White Dogs — Daily Oral Care — это беззерновые мягкие снеки для взрослых собак со светлой и белой шерстью, созданные для ежедневной заботы о здоровье полости рта. Обогащённые белком насекомых, эти мягкие кусочки сочетают вкусную награду с повседневным уходом за зубами.",
    "Как часть линейки Superior Care, они адаптированы под особые потребности собак со светлой шерстью. Это лёгкий способ поддерживать свежесть полости рта каждый день естественным и приятным образом."
   ],
   "feeding": "Следуйте рекомендациям на упаковке и давайте снеки как дополнительное лакомство в умеренном количестве с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено по беззерновому рецепту с белком насекомых, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "White Dogs — Daily Oral Care are grain-free soft snacks for adult dogs with light and white coats, created for everyday oral care. Enriched with insect protein, these tender morsels combine a tasty reward with daily attention to clean teeth.",
    "As part of the Superior Care line, they are matched to the special needs of light-coated dogs. An easy way to support fresh, healthy oral hygiene each day in a natural, enjoyable moment."
   ],
   "feeding": "Follow the guidance on the pack and offer the snacks as a supplementary treat in moderate amounts, adjusted to your dog's age, weight and activity; always provide fresh drinking water.",
   "comp": "Made to a grain-free recipe with insect protein, free from artificial colours, flavours and preservatives."
  }
 },
 "dogs||Superior Care · Snacks||White Dogs — Immune Health": {
  "az": {
   "full": [
    "White Dogs — Immune Health, açıq və ağ tüklü yetkin itlər üçün hazırlanmış dənsiz yumşaq snəklərdir. Dadlı siyənək balığı ilə hazırlanan bu yumşaq tikələr təbii müdafiə sisteminin dəstəklənməsinə kömək edərkən damaq dadına xoş gəlir.",
    "Superior Care xəttinin bir parçası olaraq açıq tüklü itlərin xüsusi ehtiyaclarına uyğunlaşdırılıb. İtinizin gündəlik sağlamlığına qayğı göstərmək üçün ləzzətli və qayğıkeş bir mükafatdır."
   ],
   "feeding": "Qablaşdırmadakı tövsiyələrə əməl edin və snəkləri itinizin yaşına, çəkisinə və aktivliyinə uyğun məhdud miqdarda əlavə yem kimi verin; həmişə təmiz içməli su təmin edin.",
   "comp": "Dənsiz resept və siyənək balığı ilə, süni rəng, dad və qoruyucu maddələr olmadan hazırlanmışdır."
  },
  "ru": {
   "full": [
    "White Dogs — Immune Health — это беззерновые мягкие снеки для взрослых собак со светлой и белой шерстью. Приготовленные с аппетитной сельдью, эти мягкие кусочки помогают поддерживать естественные защитные силы организма и радуют вкусом.",
    "Как часть линейки Superior Care, они адаптированы под особые потребности собак со светлой шерстью. Это вкусная и заботливая награда для поддержания ежедневного здоровья вашей собаки."
   ],
   "feeding": "Следуйте рекомендациям на упаковке и давайте снеки как дополнительное лакомство в умеренном количестве с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено по беззерновому рецепту с сельдью, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "White Dogs — Immune Health are grain-free soft snacks for adult dogs with light and white coats. Made with tasty herring, these tender morsels help support the body's natural defences while delighting the palate.",
    "As part of the Superior Care line, they are matched to the special needs of light-coated dogs. A flavourful, caring reward to look after your dog's everyday wellbeing."
   ],
   "feeding": "Follow the guidance on the pack and offer the snacks as a supplementary treat in moderate amounts, adjusted to your dog's age, weight and activity; always provide fresh drinking water.",
   "comp": "Made to a grain-free recipe with herring, free from artificial colours, flavours and preservatives."
  }
 },
 "dogs||Superior Care · Snacks||White Dogs — Healthy Hips & Joints": {
  "az": {
   "full": [
    "Açıq və ağ tüklü yetkin itlər üçün hazırlanmış bu dənsiz yumşaq tıxaclar gündəlik mükafatlandırmanı həqiqi qulluqla birləşdirir. Tərkibindəki ağ balıq dadlı və yüngül zülal mənbəyidir, qlükozamin və xondroitin isə sümük-oynaq sisteminin sağlamlığını dəstəkləyir.",
    "Hər tıxac aktiv həyat tərzi sürən, oynaqlarının çevikliyinə ehtiyac duyan dostunuz üçün düşünülmüşdür. Yumşaq tekstura asanlıqla çeynənilir və hər yaşda mükafat və ya təlim anı üçün idealdır."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su təmin edin.",
   "comp": "Keyfiyyətli heyvani zülal mənbələri ilə hazırlanır, süni rəng, dad və konservant əlavə edilmir."
  },
  "ru": {
   "full": [
    "Эти беззерновые мягкие лакомства созданы для взрослых собак со светлой и белой шерстью и сочетают вкусное угощение с настоящей заботой. Белая рыба служит лёгким и аппетитным источником белка, а глюкозамин и хондроитин поддерживают здоровье суставов и связок.",
    "Каждое лакомство продумано для активного питомца, которому важна подвижность и крепость суставов. Нежная текстура легко разжёвывается и делает их идеальными для поощрения или дрессировки в любом возрасте."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из качественных источников животного белка, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "Created for adult dogs with light and white coats, these grain-free soft snacks combine a tasty reward with genuine care. White fish provides a light, appetising source of protein, while glucosamine and chondroitin help support healthy hips and joints.",
    "Every snack is designed for an active companion who relies on supple, strong joints. The soft texture is easy to chew, making these treats perfect for rewarding or training at any age."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with quality animal protein sources, with no artificial colours, flavours or preservatives."
  }
 },
 "dogs||Superior Care · Snacks||White Dogs — Intestinal Care": {
  "az": {
   "full": [
    "Açıq və ağ tüklü yetkin itlər üçün nəzərdə tutulmuş bu dənsiz yumşaq tıxaclar həssas həzm sistemini nəzərə alaraq hazırlanıb. Ağ balıq və düyünün uyğunlaşdırılmış birləşməsi yüngül və asan həzm olunan zövqlü mükafat təqdim edir.",
    "Mədə-bağırsaq rahatlığına diqqət yetirən sahiblər üçün ideal seçimdir. Yumşaq və dadlı struktur gündəlik mükafatlandırmanı zərif həzm dəstəyi ilə birləşdirir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su təmin edin.",
   "comp": "Keyfiyyətli heyvani zülal mənbələri ilə hazırlanır, süni rəng, dad və konservant əlavə edilmir."
  },
  "ru": {
   "full": [
    "Эти беззерновые мягкие лакомства предназначены для взрослых собак со светлой и белой шерстью и созданы с заботой о чувствительном пищеварении. Продуманное сочетание белой рыбы и риса даёт лёгкое, легко усваиваемое и аппетитное угощение.",
    "Это идеальный выбор для владельцев, которые уделяют внимание комфорту желудочно-кишечного тракта питомца. Мягкая и вкусная текстура соединяет ежедневное поощрение с деликатной поддержкой пищеварения."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из качественных источников животного белка, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "These grain-free soft snacks are made for adult dogs with light and white coats, crafted with sensitive digestion in mind. A thoughtful blend of white fish and rice delivers a light, easily digestible and appetising reward.",
    "They are an ideal choice for owners who care about their pet's digestive comfort. The soft, tasty texture pairs everyday rewarding with gentle support for the gut."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with quality animal protein sources, with no artificial colours, flavours or preservatives."
  }
 },
 "dogs||Superior Care · Snacks||White Dogs — Endurance": {
  "az": {
   "full": [
    "Açıq və ağ tüklü, enerjili yetkin itlər üçün hazırlanan bu dənsiz yumşaq tıxaclar gücə və dözümlülüyə dəstək olur. Həşərat zülalı və düyünün birləşməsi davamlı enerji üçün yüngül və müasir zülal mənbəyi təqdim edir.",
    "Hərəkətli və oynaq dostunuzun günü boyu formada qalmasına kömək edir. Yumşaq tekstura həm aktivlik anlarında, həm də gündəlik mükafat üçün mükəmməl seçimdir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su təmin edin.",
   "comp": "Keyfiyyətli zülal mənbələri ilə hazırlanır, süni rəng, dad və konservant əlavə edilmir."
  },
  "ru": {
   "full": [
    "Созданные для энергичных взрослых собак со светлой и белой шерстью, эти беззерновые мягкие лакомства поддерживают силу и выносливость. Сочетание белка насекомых и риса даёт лёгкий и современный источник белка для устойчивой энергии.",
    "Они помогают подвижному и игривому питомцу оставаться в форме на протяжении всего дня. Мягкая текстура идеальна как для активных моментов, так и для ежедневного поощрения."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из качественных источников белка, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "Created for energetic adult dogs with light and white coats, these grain-free soft snacks support strength and endurance. A blend of insect protein and rice offers a light, modern source of protein for sustained energy.",
    "They help your active, playful companion stay in top form throughout the day. The soft texture is perfect both for moments of activity and for everyday rewarding."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with quality protein sources, with no artificial colours, flavours or preservatives."
  }
 },
 "dogs||Superior Care · Snacks||Red Coat — Hypoallergenic & Intestinal Care": {
  "az": {
   "full": [
    "Qırmızı və tünd tüklü yetkin itlər üçün hazırlanan bu dənsiz yumşaq tıxaclar həssas dostlar üçün düşünülmüş hipoallergen mükafatdır. Lososun zərif dadı asan həzm olunan, dadlı və qayğılı bir təcrübə təqdim edir.",
    "Həzm rahatlığına və həssas qidalanmaya diqqət yetirən sahiblər üçün ideal seçimdir. Yumşaq struktur gündəlik mükafatlandırmanı mədə-bağırsaq dəstəyi ilə birləşdirir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su təmin edin.",
   "comp": "Keyfiyyətli heyvani zülal mənbələri ilə hazırlanır, süni rəng, dad və konservant əlavə edilmir."
  },
  "ru": {
   "full": [
    "Эти беззерновые мягкие лакомства созданы для взрослых собак с рыжей и тёмной шерстью и представляют собой гипоаллергенное угощение, продуманное для чувствительных питомцев. Нежный вкус лосося дарит легко усваиваемое, аппетитное и заботливое лакомство.",
    "Это идеальный выбор для владельцев, которые уделяют внимание комфорту пищеварения и чувствительному питанию. Мягкая структура соединяет ежедневное поощрение с поддержкой желудочно-кишечного тракта."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из качественных источников животного белка, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "Created for adult dogs with red and dark coats, these grain-free soft snacks are a hypoallergenic reward designed for sensitive companions. The gentle taste of salmon delivers an easily digestible, appetising and caring treat.",
    "They are an ideal choice for owners who focus on digestive comfort and sensitive feeding. The soft structure brings together everyday rewarding with support for the gut."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with quality animal protein sources, with no artificial colours, flavours or preservatives."
  }
 },
 "dogs||Superior Care · Snacks||Red Coat — Healthy Skin & Coat": {
  "az": {
   "full": [
    "Qırmızı və tünd tüklü yetkin itlər üçün nəzərdə tutulmuş bu dənsiz yumşaq tıxaclar parlaq görünüş üçün düşünülüb. Losos yağı və sink dəri sağlamlığını və tüklərin təbii parıltısını dəstəkləyir, qırmızı və tünd tüklərin gözəlliyini ön plana çıxarır.",
    "Hər mükafat dostunuzun zahiri gözəlliyinə qulluq edərkən zövqlü bir an bəxş edir. Yumşaq tekstura asanlıqla çeynənilir və gündəlik istifadə üçün idealdır."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su təmin edin.",
   "comp": "Losos yağı kimi keyfiyyətli tərkib hissələri ilə zənginləşdirilib, süni rəng, dad və konservant əlavə edilmir."
  },
  "ru": {
   "full": [
    "Эти беззерновые мягкие лакомства предназначены для взрослых собак с рыжей и тёмной шерстью и созданы для сияющего внешнего вида. Лососёвое масло и цинк поддерживают здоровье кожи и естественный блеск шерсти, подчёркивая красоту рыжего и тёмного окраса.",
    "Каждое угощение дарит вкусный момент, одновременно заботясь о внешней красоте питомца. Мягкая текстура легко разжёвывается и идеально подходит для ежедневного использования."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Обогащено качественными ингредиентами, такими как лососёвое масло, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "These grain-free soft snacks are made for adult dogs with red and dark coats and crafted for a radiant appearance. Salmon oil and zinc support healthy skin and a natural shine, bringing out the beauty of red and dark coats.",
    "Each reward offers a tasty moment while caring for your companion's outward beauty. The soft texture is easy to chew and ideal for everyday use."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Enriched with quality ingredients such as salmon oil, with no artificial colours, flavours or preservatives."
  }
 },
 "dogs||Superior Care · Snacks||Red Coat — Healthy Body & Endurance": {
  "az": {
   "full": [
    "Qırmızı və tünd tüklü, aktiv yetkin itlər üçün hazırlanan bu dənsiz yumşaq tıxaclar güclü bədən və dözümlülük üçün düşünülüb. Quzu əti dadlı və keyfiyyətli zülal mənbəyi təqdim edir, L-karnitin isə enerji və forma saxlanmasına dəstək olur.",
    "Hərəkətli və enerjili dostunuzun gün boyu formada qalmasına kömək edir. Yumşaq tekstura həm təlim, həm də gündəlik mükafat anları üçün mükəmməldir."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su təmin edin.",
   "comp": "Keyfiyyətli heyvani zülal mənbələri ilə hazırlanır, süni rəng, dad və konservant əlavə edilmir."
  },
  "ru": {
   "full": [
    "Созданные для активных взрослых собак с рыжей и тёмной шерстью, эти беззерновые мягкие лакомства продуманы для крепкого тела и выносливости. Ягнёнок служит вкусным и качественным источником белка, а L-карнитин поддерживает энергию и хорошую форму.",
    "Они помогают подвижному и энергичному питомцу оставаться в форме в течение всего дня. Мягкая текстура отлично подходит как для дрессировки, так и для ежедневного поощрения."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из качественных источников животного белка, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "Created for active adult dogs with red and dark coats, these grain-free soft snacks are designed for a strong body and lasting endurance. Lamb provides a tasty, quality source of protein, while L-carnitine supports energy and good condition.",
    "They help your lively, energetic companion stay in form throughout the day. The soft texture is perfect both for training and for everyday rewarding."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with quality animal protein sources, with no artificial colours, flavours or preservatives."
  }
 },
 "dogs||Superior Care · Snacks||Red Coat Junior — Gums & Oral Care": {
  "az": {
   "full": [
    "Qırmızı və tünd tüklü balaca küçüklər üçün hazırlanan bu dənsiz yumşaq tıxaclar böyümə dövründəki dostlarınız üçün düşünülmüş zərif mükafatdır. Həşərat zülalı yüngül və müasir zülal mənbəyi təqdim edir, struktur isə diş əti sağlamlığını və ağız boşluğuna qulluğu dəstəkləyir.",
    "Hər tıxac təlim və mükafat anlarını balaca dostunuzun ehtiyaclarına uyğunlaşdırır. Yumşaq tekstura həssas dişlər üçün asan çeynənilir və gündəlik istifadə üçün idealdır."
   ],
   "feeding": "Qablaşdırmadakı qidalanma cədvəlinə əməl edin və miqdarı küçüyün yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz su təmin edin.",
   "comp": "Keyfiyyətli zülal mənbələri ilə hazırlanır, süni rəng, dad və konservant əlavə edilmir."
  },
  "ru": {
   "full": [
    "Эти беззерновые мягкие лакомства созданы для щенков с рыжей и тёмной шерстью и представляют собой деликатное угощение, продуманное для питомцев в период роста. Белок насекомых даёт лёгкий и современный источник белка, а структура лакомства поддерживает здоровье дёсен и уход за полостью рта.",
    "Каждое лакомство адаптирует моменты дрессировки и поощрения к потребностям вашего малыша. Мягкая текстура легко разжёвывается чувствительными зубами и идеально подходит для ежедневного использования."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте количество с учётом возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из качественных источников белка, без искусственных красителей, ароматизаторов и консервантов."
  },
  "en": {
   "full": [
    "Created for puppies with red and dark coats, these grain-free soft snacks are a gentle reward designed for companions in their growing stage. Insect protein offers a light, modern source of protein, while the treat's structure supports healthy gums and oral care.",
    "Each snack tailors training and reward moments to your little one's needs. The soft texture is easy on sensitive teeth and ideal for everyday use."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the amount to your puppy's age, weight and activity level; always provide fresh water.",
   "comp": "Made with quality protein sources, with no artificial colours, flavours or preservatives."
  }
 },
 "dogs||Superior Care · Snacks||Red Coat — Weight Control": {
  "az": {
   "full": [
    "Qırmızı və tünd tüklü yetkin itlər üçün hazırlanmış bu yumşaq, dənsiz snacklər siqlət nəzarətini dadlı bir mükafata çevirir. Siyənək balığı ilə zəngin və azaldılmış kalorili formula gündəlik təlim və ünsiyyət anlarını günahkar hiss etdirmədən ləzzətli edir.",
    "Superior Care seriyası tük rənginə uyğunlaşdırılıb: qırmızı və tünd tüklü dostlarınız üçün bu snacklər balıqdan gələn faydalı yağlarla zəngindir və sağlam dəri ilə parlaq tük örtüyünü dəstəkləyir. Heyvan zülalına əsaslanan tərkib istənilən gün üçün etibarlı, premium seçimdir."
   ],
   "feeding": "Paketin üzərindəki yemləmə cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Keyfiyyətli heyvan zülalı ilə hazırlanıb, soya, GMO və süni rəngləndiricilərsiz."
  },
  "ru": {
   "full": [
    "Эти мягкие беззерновые лакомства для взрослых собак с рыжей и тёмной шерстью превращают контроль веса во вкусную награду. Богатая сельдью формула с пониженной калорийностью делает дрессировку и моменты общения приятными без чувства вины.",
    "Линия Superior Care подобрана по цвету шерсти: для ваших рыжих и тёмных питомцев эти снеки богаты полезными жирами из рыбы и поддерживают здоровую кожу и блестящий шерстный покров. Состав на основе животного белка — надёжный премиальный выбор на каждый день."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено из качественного животного белка, без сои, ГМО и искусственных красителей."
  },
  "en": {
   "full": [
    "These soft, grain-free treats for adult dogs with red and dark coats turn weight management into a tasty reward. The herring-rich, lower-calorie recipe keeps training and bonding moments delicious without the guilt.",
    "The Superior Care line is matched to coat colour: for your red- and dark-coated companions, these snacks are rich in beneficial fish-derived nutrients and help support healthy skin and a glossy coat. A high-animal-protein base makes them a dependable, premium choice every day."
   ],
   "feeding": "Follow the feeding table on the pack and adjust to your dog's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with quality animal protein, with no soy, no GMO and no artificial colours."
  }
 },
 "dogs||Nature's Protection · Snacks||Junior — Healthy Growth": {
  "az": {
   "full": [
    "Balaca dostunuzun böyüməsi xüsusi qayğı tələb edir, və bu yumşaq funksional snacklər məhz bunun üçün yaradılıb. Quş əti ilə zəngin və 87% heyvan zülalı təşkil edən tərkib küçüklərin sağlam inkişafını dadlı şəkildə dəstəkləyir.",
    "Yüksək heyvan zülalı küçüklərin böyüyən bədəni və əzələləri üçün güclü bünövrə qoyur. Premium tərkib və təbii yanaşma bu snackləri təlim mükafatları və ya gün ərzində xırda ləzzətlər üçün ideal seçim edir."
   ],
   "feeding": "Paketin üzərindəki yemləmə cədvəlinə əməl edin və miqdarı küçüyün yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Yüksək faizli heyvan zülalı ilə, soya, GMO və süni qatqılarsız hazırlanıb."
  },
  "ru": {
   "full": [
    "Рост вашего малыша требует особой заботы, и эти мягкие функциональные снеки созданы именно для этого. Богатый птицей состав с 87% животного белка вкусно поддерживает здоровое развитие щенков.",
    "Высокое содержание животного белка закладывает прочный фундамент для растущего тела и мышц щенка. Премиальный состав и натуральный подход делают эти снеки идеальными для поощрения на дрессировке или маленьких удовольствий в течение дня."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено с высоким содержанием животного белка, без сои, ГМО и искусственных добавок."
  },
  "en": {
   "full": [
    "Your little one's growth deserves special care, and these soft functional snacks are made for exactly that. Rich in poultry and built around 87% animal protein, they deliciously support the healthy development of puppies.",
    "A high level of animal protein lays a strong foundation for a puppy's growing body and muscles. The premium recipe and natural approach make these snacks an ideal choice for training rewards or small everyday treats."
   ],
   "feeding": "Follow the feeding table on the pack and adjust to your puppy's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with a high percentage of animal protein, with no soy, no GMO and no artificial additives."
  }
 },
 "dogs||Superior Care · Flowpack||White Dogs Junior — Brain Development": {
  "az": {
   "full": [
    "Açıq və ağ tüklü küçüklər üçün hazırlanmış bu porsiyalı funksional snack hər ləzzətli tikəni dəyərli inkişaf anına çevirir. Qızılbalıqla zəngin formula gənc beynin sağlam inkişafını dəstəkləmək üçün düşünülüb.",
    "Superior Care White seriyası açıq tüklü dostlar üçün xüsusi seçilib: qızılbalıqdan gələn faydalı Omega yağları parlaq, sağlam tük örtüyünü qoruyur. Rahat birdəfəlik paket təmizliyi və təzəliyi saxlayaraq snacki gündəlik mükafat üçün ideal edir."
   ],
   "feeding": "Paketin üzərindəki yemləmə cədvəlinə əməl edin və miqdarı küçüyün yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Keyfiyyətli qızılbalıq və Omega yağları ilə, süni rəngləndirici və qatqılarsız hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот порционный функциональный снек для щенков со светлой и белой шерстью превращает каждый вкусный кусочек в ценный момент развития. Богатая лососем формула продумана для поддержки здорового развития юного мозга.",
    "Линия Superior Care White подобрана специально для питомцев со светлой шерстью: полезные жиры Омега из лосося помогают сохранять блестящий, здоровый шерстный покров. Удобная одноразовая упаковка сохраняет чистоту и свежесть, делая снек идеальным для ежедневного поощрения."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено с качественным лососем и жирами Омега, без искусственных красителей и добавок."
  },
  "en": {
   "full": [
    "This single-serve functional snack for light- and white-coated puppies turns every tasty bite into a meaningful moment of development. The salmon-rich recipe is designed to support the healthy development of the young brain.",
    "The Superior Care White line is matched specially to light-coated companions: the beneficial Omega oils from salmon help maintain a bright, healthy coat. The convenient single-serve pack keeps things clean and fresh, making it an ideal everyday reward."
   ],
   "feeding": "Follow the feeding table on the pack and adjust to your puppy's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with quality salmon and Omega oils, with no artificial colours or additives."
  }
 },
 "dogs||Superior Care · Flowpack||White Dogs — Clear Vision": {
  "az": {
   "full": [
    "Açıq və ağ tüklü yetkin itlər üçün bu porsiyalı funksional snack gündəlik qayğını dadlı bir anla birləşdirir. Qızılbalıqla zəngin formula sağlam görmə qabiliyyətini dəstəkləmək üçün düşünülmüş, hər tikəyə həm ləzzət, həm də fayda qatır.",
    "Superior Care White seriyası açıq tüklü dostlar üçün uyğunlaşdırılıb: qızılbalıqdan gələn faydalı yağlar parlaq tük örtüyünü və sağlam dərini dəstəkləyir. Rahat birdəfəlik paket təzəliyi qoruyaraq onu istənilən gün üçün etibarlı premium mükafat edir."
   ],
   "feeding": "Paketin üzərindəki yemləmə cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Keyfiyyətli qızılbalıq ilə, soya, GMO və süni rəngləndiricilərsiz hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот порционный функциональный снек для взрослых собак со светлой и белой шерстью объединяет ежедневную заботу со вкусным моментом. Богатая лососем формула продумана для поддержки здорового зрения, добавляя каждому кусочку и вкус, и пользу.",
    "Линия Superior Care White подобрана для питомцев со светлой шерстью: полезные жиры из лосося поддерживают блестящий шерстный покров и здоровую кожу. Удобная одноразовая упаковка сохраняет свежесть, делая снек надёжным премиальным поощрением на каждый день."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено с качественным лососем, без сои, ГМО и искусственных красителей."
  },
  "en": {
   "full": [
    "This single-serve functional snack for adult dogs with light and white coats combines everyday care with a tasty moment. The salmon-rich recipe is designed to support healthy vision, adding both flavour and benefit to every bite.",
    "The Superior Care White line is matched to light-coated companions: the beneficial salmon-derived oils support a glossy coat and healthy skin. The convenient single-serve pack keeps things fresh, making it a dependable, premium reward for any day."
   ],
   "feeding": "Follow the feeding table on the pack and adjust to your dog's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with quality salmon, with no soy, no GMO and no artificial colours."
  }
 },
 "dogs||Superior Care · Flowpack||White Dogs Junior — Cognitive & Vision Support": {
  "az": {
   "full": [
    "Açıq və ağ tüklü küçüklər üçün bu porsiyalı funksional snack böyümənin ən vacib anlarına qayğı göstərir. Qızılbalıqla zəngin formula həm idrak qabiliyyətini, həm də sağlam görməni dəstəkləmək üçün düşünülüb, hər ləzzətli tikəni faydalı edir.",
    "Superior Care White seriyası açıq tüklü dostlar üçün xüsusi uyğunlaşdırılıb: qızılbalıqdan gələn faydalı Omega yağları parlaq tük örtüyünü qoruyur. Rahat birdəfəlik paket təmizliyi və təzəliyi saxlayaraq onu gündəlik təlim mükafatı üçün ideal edir."
   ],
   "feeding": "Paketin üzərindəki yemləmə cədvəlinə əməl edin və miqdarı küçüyün yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Keyfiyyətli qızılbalıq və Omega yağları ilə, süni rəngləndirici və qatqılarsız hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот порционный функциональный снек для щенков со светлой и белой шерстью заботится о самых важных моментах роста. Богатая лососем формула продумана для поддержки и когнитивных функций, и здорового зрения, делая каждый вкусный кусочек полезным.",
    "Линия Superior Care White подобрана специально для питомцев со светлой шерстью: полезные жиры Омега из лосося помогают сохранять блестящий шерстный покров. Удобная одноразовая упаковка сохраняет чистоту и свежесть, делая снек идеальным для ежедневного поощрения на дрессировке."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности щенка; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено с качественным лососем и жирами Омега, без искусственных красителей и добавок."
  },
  "en": {
   "full": [
    "This single-serve functional snack for light- and white-coated puppies cares for the most important moments of growth. The salmon-rich recipe is designed to support both cognitive function and healthy vision, making every tasty bite a beneficial one.",
    "The Superior Care White line is matched specially to light-coated companions: the beneficial Omega oils from salmon help maintain a glossy coat. The convenient single-serve pack keeps things clean and fresh, making it an ideal everyday training reward."
   ],
   "feeding": "Follow the feeding table on the pack and adjust to your puppy's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with quality salmon and Omega oils, with no artificial colours or additives."
  }
 },
 "dogs||Superior Care · Flowpack||White Dogs — Hypoallergenic Dental": {
  "az": {
   "full": [
    "Açıq və ağ tüklü yetkin itlər üçün bu porsiyalı funksional snack gündəlik diş qayğısını həssas həzm sistemlərinə uyğun şəkildə təqdim edir. Ağ balıqla hazırlanmış hipoallergen formula ləzzətli çeynəmə anını sağlam dişlər və ağız üçün faydaya çevirir.",
    "Superior Care White seriyası açıq tüklü dostlar üçün uyğunlaşdırılıb: ağ balıqdan gələn yüngül və faydalı tərkib parlaq tük örtüyünü dəstəkləyir. Rahat birdəfəlik paket təzəliyi qoruyaraq onu həssas itlər üçün etibarlı premium seçim edir."
   ],
   "feeding": "Paketin üzərindəki yemləmə cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Keyfiyyətli ağ balıq ilə, soya, GMO və süni rəngləndiricilərsiz hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот порционный функциональный снек для взрослых собак со светлой и белой шерстью обеспечивает ежедневный уход за зубами с учётом чувствительного пищеварения. Гипоаллергенная формула с белой рыбой превращает вкусный момент жевания в пользу для здоровых зубов и полости рта.",
    "Линия Superior Care White подобрана для питомцев со светлой шерстью: лёгкий и полезный состав на основе белой рыбы поддерживает блестящий шерстный покров. Удобная одноразовая упаковка сохраняет свежесть, делая снек надёжным премиальным выбором для чувствительных собак."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено с качественной белой рыбой, без сои, ГМО и искусственных красителей."
  },
  "en": {
   "full": [
    "This single-serve functional snack for adult dogs with light and white coats delivers daily dental care suited to sensitive digestion. The hypoallergenic recipe with white fish turns a tasty moment of chewing into a benefit for healthy teeth and mouth.",
    "The Superior Care White line is matched to light-coated companions: the light, beneficial white-fish base supports a glossy coat. The convenient single-serve pack keeps things fresh, making it a dependable, premium choice for sensitive dogs."
   ],
   "feeding": "Follow the feeding table on the pack and adjust to your dog's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with quality white fish, with no soy, no GMO and no artificial colours."
  }
 },
 "dogs||Superior Care · Flowpack||White Dogs — Mobility & Joint Health": {
  "az": {
   "full": [
    "Açıq və ağ tüklü yetkin itlər üçün bu porsiyalı funksional snack hərəkət sevincini qoruyur. Quzu əti ilə hazırlanmış formula oynaqların sağlamlığını və rahat hərəkətliyi dəstəkləmək üçün düşünülüb, hər tikəyə həm ləzzət, həm də fayda qatır.",
    "Superior Care White seriyası açıq tüklü dostlar üçün uyğunlaşdırılıb: zəngin və dadlı quzu əti parlaq tük örtüyünü və ümumi rifahı dəstəkləyir. Rahat birdəfəlik paket təzəliyi qoruyaraq onu aktiv itlər üçün etibarlı premium mükafat edir."
   ],
   "feeding": "Paketin üzərindəki yemləmə cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Keyfiyyətli quzu əti ilə, soya, GMO və süni rəngləndiricilərsiz hazırlanıb."
  },
  "ru": {
   "full": [
    "Этот порционный функциональный снек для взрослых собак со светлой и белой шерстью бережёт радость движения. Формула с ягнёнком продумана для поддержки здоровья суставов и комфортной подвижности, добавляя каждому кусочку и вкус, и пользу.",
    "Линия Superior Care White подобрана для питомцев со светлой шерстью: богатый и вкусный ягнёнок поддерживает блестящий шерстный покров и общее благополучие. Удобная одноразовая упаковка сохраняет свежесть, делая снек надёжным премиальным поощрением для активных собак."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию с учётом возраста, веса и активности собаки; всегда обеспечивайте доступ к свежей воде.",
   "comp": "Изготовлено с качественным ягнёнком, без сои, ГМО и искусственных красителей."
  },
  "en": {
   "full": [
    "This single-serve functional snack for adult dogs with light and white coats protects the joy of movement. The recipe with lamb is designed to support joint health and comfortable mobility, adding both flavour and benefit to every bite.",
    "The Superior Care White line is matched to light-coated companions: the rich, tasty lamb supports a glossy coat and overall wellbeing. The convenient single-serve pack keeps things fresh, making it a dependable, premium reward for active dogs."
   ],
   "feeding": "Follow the feeding table on the pack and adjust to your dog's age, weight and activity; always provide access to fresh water.",
   "comp": "Made with quality lamb, with no soy, no GMO and no artificial colours."
  }
 },
 "dogs||Nature's Protection · Flowpack||Comfort Calm": {
  "az": {
   "full": [
    "Comfort Calm, böyük itlər üçün xüsusi hazırlanmış, hər porsiyası ayrıca qablaşdırılan funksional snəkdir. Quş əti ilə zənginləşdirilmiş bu dadlı tikə 88% heyvan mənşəli zülaldan ibarətdir və itinizə həm ləzzətli, həm də faydalı bir an bəxş edir.",
    "Gərginlik anlarında, səyahət zamanı və ya gündəlik rutinin dəyişdiyi vəziyyətlərdə bu snək sakitləşdirici dəstək kimi düşünülmüşdür. Süni rəngləndiricilər və artıq əlavələr olmadan hazırlanan Comfort Calm, sevimlinizin rahat və balanslı qalmasına kömək edir."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə əməl edin və porsiyanı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Keyfiyyətli heyvan mənşəli zülalla zəngin, yüksək faiz quş əti əsasında hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Comfort Calm — это порционный функциональный снек для взрослых собак, где каждая порция упакована отдельно для удобства и свежести. С птицей и 88% животного белка это лакомство дарит вашему питомцу не только приятный вкус, но и заботу в каждом кусочке.",
    "Снек создан как мягкая успокаивающая поддержка в моменты стресса, путешествий или перемен в привычном распорядке. Без искусственных красителей и лишних добавок Comfort Calm помогает вашему любимцу оставаться спокойным и уравновешенным."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте свободный доступ к свежей воде.",
   "comp": "Изготовлен на основе высокого процента птицы и богат качественным животным белком."
  },
  "en": {
   "full": [
    "Comfort Calm is a single-serve functional snack for adult dogs, with each portion individually wrapped for freshness and convenience. Made with poultry and 88% animal protein, this tasty bite gives your dog a moment that is as wholesome as it is delicious.",
    "Thoughtfully created to offer gentle calming support, it is ideal for moments of stress, travel, or changes in the daily routine. Free from artificial colours and unnecessary additives, Comfort Calm helps your companion stay relaxed and balanced."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Crafted around a high proportion of poultry and rich in quality animal protein."
  }
 },
 "dogs||Nature's Protection · Flowpack||Healthy Digestion": {
  "az": {
   "full": [
    "Healthy Digestion, böyük itlər üçün hər porsiyası ayrıca qablaşdırılan funksional snəkdir və sağlam həzm sisteminə dəstək məqsədilə hazırlanmışdır. Quş əti ilə zəngin, 88% heyvan mənşəli zülaldan ibarət bu tikə həm dadlı, həm də sevimlinizin daxili rahatlığına xidmət edir.",
    "Gündəlik mükafat və ya öyrətmə anları üçün ideal olan bu snək, mədə-bağırsaq rahatlığını dəstəkləyərək itinizin özünü yüngül və enerjili hiss etməsinə kömək edir. Süni əlavələr olmadan hazırlanaraq hər gün etibarla verilə bilər."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə əməl edin və porsiyanı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Yüksək faiz quş əti ilə hazırlanmış, keyfiyyətli heyvan mənşəli zülalla zəngindir."
  },
  "ru": {
   "full": [
    "Healthy Digestion — порционный функциональный снек для взрослых собак, упакованный по отдельности и созданный для поддержки здорового пищеварения. С птицей и 88% животного белка это лакомство сочетает приятный вкус с заботой о внутреннем комфорте вашего питомца.",
    "Идеальный выбор для ежедневного поощрения или моментов обучения, этот снек помогает поддерживать работу желудочно-кишечного тракта, чтобы собака чувствовала себя легко и бодро. Без искусственных добавок, его можно с уверенностью давать каждый день."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте свободный доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом птицы и богат качественным животным белком."
  },
  "en": {
   "full": [
    "Healthy Digestion is a single-serve functional snack for adult dogs, individually wrapped and created to support a healthy digestive system. With poultry and 88% animal protein, this bite pairs great taste with genuine care for your dog's inner comfort.",
    "Perfect for daily rewarding or training moments, this snack helps support the gut so your dog feels light and energetic. Made without artificial additives, it can be offered with confidence every day."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with a high proportion of poultry and rich in quality animal protein."
  }
 },
 "dogs||Prime · Puppy||Prime Puppy — Chicken & Turkey": {
  "az": {
   "full": [
    "Prime Puppy — Toyuq və hinduşka, böyüməkdə olan balalar üçün premium yaş qida pauçudur. 98% heyvan mənşəli zülaldan ibarət, dadlı toyuq və hinduşka ilə hazırlanan bu reseptura kiçik dostunuzun sağlam inkişafı üçün lazım olan zəngin qidalanmanı təqdim edir.",
    "Tam rasionlu formula süni rəngləndiricilər olmadan hazırlanır və 85 q rahat porsiyada təqdim olunur. Yumşaq, sulu tikələri ilə bu pauç ən tələbkar balaların belə iştahını açır və hər yeməyi həm ləzzətli, həm də qidalı edir."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə əməl edin və porsiyanı balanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Yüksək faiz heyvan mənşəli zülal və keyfiyyətli toyuq və hinduşka əti ilə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Prime Puppy — Курица и индейка — это премиальный влажный пауч для растущих щенков. С 98% животного белка, вкусной курицей и индейкой эта рецептура обеспечивает богатое питание, необходимое для здорового развития вашего малыша.",
    "Полнорационная формула приготовлена без искусственных красителей и предлагается в удобной порции 85 г. Нежные сочные кусочки пробуждают аппетит даже у самых привередливых щенков, делая каждый приём пищи и вкусным, и питательным."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности щенка; всегда обеспечивайте свободный доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом животного белка из качественной курицы и индейки."
  },
  "en": {
   "full": [
    "Prime Puppy — Chicken & Turkey is a premium wet pouch crafted for growing puppies. With 98% animal protein and tasty chicken and turkey, this recipe delivers the rich nourishment your little one needs for healthy development.",
    "The complete diet is made without artificial colours and comes in a convenient 85 g portion. Its tender, juicy chunks awaken the appetite of even the fussiest puppies, making every meal both delicious and nutritious."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your puppy's age, weight and activity level; always provide fresh water.",
   "comp": "Made with a high proportion of animal protein from quality chicken and turkey."
  }
 },
 "dogs||Prime · Adult||Prime Skin & Coat — Chicken & Salmon": {
  "az": {
   "full": [
    "Prime Skin & Coat — Toyuq və qızılbalıq, böyük itlər üçün sağlam dəri və parlaq tük məqsədilə hazırlanmış premium yaş qida pauçudur. Dadlı toyuq və qiymətli qızılbalığın birləşməsi 98% heyvan mənşəli zülalla zənginləşdirilərək sevimlinizin gözəlliyinə içəridən qayğı göstərir.",
    "Qızılbalıq dərinin sağlamlığını və tükün təbii parıltısını dəstəkləməyə kömək edir. 85 q rahat porsiyada təqdim olunan bu sulu və ləzzətli reseptura hər yeməyi həm zövqlü, həm də faydalı edir."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə əməl edin və porsiyanı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Yüksək faiz heyvan mənşəli zülal, toyuq və qızılbalıqla zəngin şəkildə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Prime Skin & Coat — Курица и лосось — это премиальный влажный пауч для взрослых собак, созданный для здоровья кожи и блеска шерсти. Сочетание вкусной курицы и ценного лосося с 98% животного белка заботится о красоте вашего питомца изнутри.",
    "Лосось помогает поддерживать здоровье кожи и естественное сияние шерсти. В удобной порции 85 г эта сочная и аппетитная рецептура делает каждый приём пищи и приятным, и полезным."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте свободный доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом животного белка из качественной курицы и лосося."
  },
  "en": {
   "full": [
    "Prime Skin & Coat — Chicken & Salmon is a premium wet pouch for adult dogs, created for healthy skin and a shiny coat. The pairing of tasty chicken and prized salmon, with 98% animal protein, cares for your companion's beauty from the inside out.",
    "Salmon helps support skin health and the natural shine of the coat. Served in a convenient 85 g portion, this juicy and appetising recipe makes every meal both enjoyable and beneficial."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with a high proportion of animal protein, rich in chicken and salmon."
  }
 },
 "dogs||Prime · Weight Control||Prime Weight Control — Chicken & White Fish": {
  "az": {
   "full": [
    "Prime Weight Control — Toyuq və ağ balıq, sağlam çəkisini qoruması üçün dəstəyə ehtiyacı olan itlər üçün hazırlanmış premium yaş qida pauçudur. Yüngül toyuq və ağ balığın incə birləşməsi 98% heyvan mənşəli zülalla zənginləşdirilərək doyumlu, lakin balanslı yemək təqdim edir.",
    "85 q ölçülmüş porsiyada təqdim olunan bu reseptura sevimlinizin formada qalmasına kömək edərkən dadlı tikələrindən həzz almasına imkan verir. Hər yemək həm ləzzətli, həm də diqqətlə düşünülmüşdür."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə əməl edin və porsiyanı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Yüksək faiz heyvan mənşəli zülal, yüngül toyuq və ağ balıqla hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Prime Weight Control — Курица и белая рыба — это премиальный влажный пауч для собак, которым нужна поддержка в сохранении здорового веса. Лёгкое сочетание курицы и белой рыбы с 98% животного белка обеспечивает сытное, но сбалансированное питание.",
    "В отмеренной порции 85 г эта рецептура помогает вашему питомцу оставаться в форме, наслаждаясь вкусными кусочками. Каждый приём пищи и аппетитный, и продуманный."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте свободный доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом животного белка из лёгкой курицы и белой рыбы."
  },
  "en": {
   "full": [
    "Prime Weight Control — Chicken & White Fish is a premium wet pouch for dogs who need support in maintaining a healthy weight. The light combination of chicken and white fish, with 98% animal protein, provides a satisfying yet balanced meal.",
    "Served in a measured 85 g portion, this recipe helps your companion stay in shape while enjoying delicious chunks. Every meal is both appetising and thoughtfully considered."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with a high proportion of animal protein from light chicken and white fish."
  }
 },
 "dogs||Prime · Active||Prime Active — Chicken & Beef": {
  "az": {
   "full": [
    "Prime Active — Toyuq və mal əti, enerjili və hərəkətli itlər üçün hazırlanmış premium yaş qida pauçudur. Dadlı toyuq və qidalı mal ətinin birləşməsi 98% heyvan mənşəli zülalla zənginləşdirilərək aktiv günlərə lazım olan gücü təmin edir.",
    "85 q rahat porsiyada təqdim olunan bu doyumlu reseptura sulu tikələri ilə sevimlinizin iştahını açır. Hər yemək həm ləzzətli, həm də fəal həyat tərzini dəstəkləyəcək şəkildə düşünülmüşdür."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə əməl edin və porsiyanı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Yüksək faiz heyvan mənşəli zülal, toyuq və mal əti ilə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Prime Active — Курица и говядина — это премиальный влажный пауч для энергичных и подвижных собак. Сочетание вкусной курицы и питательной говядины с 98% животного белка обеспечивает силы, необходимые для активных дней.",
    "В удобной порции 85 г эта сытная рецептура с сочными кусочками пробуждает аппетит вашего питомца. Каждый приём пищи и вкусный, и продуман так, чтобы поддерживать активный образ жизни."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте свободный доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом животного белка из курицы и говядины."
  },
  "en": {
   "full": [
    "Prime Active — Chicken & Beef is a premium wet pouch crafted for energetic, on-the-go dogs. The combination of tasty chicken and nourishing beef, with 98% animal protein, provides the strength needed for active days.",
    "Served in a convenient 85 g portion, this satisfying recipe with juicy chunks awakens your companion's appetite. Every meal is both delicious and designed to support an active lifestyle."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with a high proportion of animal protein from chicken and beef."
  }
 },
 "dogs||Prime · Immune Support||Prime Immune Support — Chicken & Lamb": {
  "az": {
   "full": [
    "Prime Immune Support — Toyuq və quzu, immunitetin təbii dəstəyi üçün hazırlanmış premium yaş qidadır. Dadlı toyuq və zərif quzu ətinin birləşməsi 98% heyvan mənşəli zülalla zənginləşdirilərək sevimlinizin sağlamlığına içəridən qayğı göstərir.",
    "85 q və 500 q variantlarında təqdim olunan bu doyumlu reseptura həm gündəlik qidalanma, həm də rahatlıq üçün idealdır. Sulu və ləzzətli tikələri ilə hər yemək həm zövqlü, həm də faydalıdır."
   ],
   "feeding": "Bağlamadakı qidalandırma cədvəlinə əməl edin və porsiyanı itinizin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; daim təmiz içməli su təmin edin.",
   "comp": "Yüksək faiz heyvan mənşəli zülal, toyuq və quzu əti ilə hazırlanmışdır."
  },
  "ru": {
   "full": [
    "Prime Immune Support — Курица и ягнёнок — это премиальный влажный корм, созданный для естественной поддержки иммунитета. Сочетание вкусной курицы и нежного ягнёнка с 98% животного белка заботится о здоровье вашего питомца изнутри.",
    "Доступная в вариантах 85 г и 500 г, эта сытная рецептура идеальна как для ежедневного кормления, так и для удобства. С сочными и аппетитными кусочками каждый приём пищи и приятен, и полезен."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; всегда обеспечивайте свободный доступ к свежей воде.",
   "comp": "Изготовлен с высоким процентом животного белка из курицы и ягнёнка."
  },
  "en": {
   "full": [
    "Prime Immune Support — Chicken & Lamb is a premium wet food created for natural immune support. The combination of tasty chicken and tender lamb, with 98% animal protein, cares for your companion's wellbeing from the inside out.",
    "Available in 85 g and 500 g formats, this satisfying recipe is ideal for both everyday feeding and convenience. With juicy, appetising chunks, every meal is both enjoyable and beneficial."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity level; always provide fresh water.",
   "comp": "Made with a high proportion of animal protein from chicken and lamb."
  }
 },
 "dogs||Superior Care · Junior||Junior — Rabbit & Krill": {
  "az": {
   "full": [
    "Böyüyən balalar üçün hazırlanmış bu zərif sousda filelər həssas mədə-bağırsaq sisteminə qayğı ilə yanaşır. Dovşan əti hipoallergen zülal mənbəyi kimi seçilib, kril isə dadlı və qida dəyəri ilə zəngin əlavə olaraq sağlam böyüməyə dəstək verir.",
    "Sulu, ətyana tikələr körpə dostunuzu həm doydurur, həm də nəmlənmə səviyyəsini qoruyur. Balaca bədənin bütün inkişaf mərhələlərində ona lazım olan zərif, ləzzətli qidalanmanı təmin edir."
   ],
   "feeding": "Qablaşdırmanın üzərindəki qidalanma cədvəlinə əməl edin və miqdarı balanın yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli, diqqətlə seçilmiş tərkib hissələri ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Эти филе в нежном соусе созданы для растущих щенков и бережно заботятся о чувствительном пищеварении. Кролик выбран как гипоаллергенный источник белка, а криль добавляет вкус и питательную ценность, поддерживая здоровый рост малыша.",
    "Сочные мясные кусочки не только насыщают вашего питомца, но и поддерживают необходимый уровень влаги. Это нежное и аппетитное питание сопровождает щенка на всех этапах его развития."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности щенка; свежая вода всегда должна быть в свободном доступе.",
   "comp": "Изготовлено из качественных, тщательно отобранных ингредиентов."
  },
  "en": {
   "full": [
    "These fillets in a delicate gravy are crafted for growing puppies and gently care for a sensitive digestive system. Rabbit is chosen as a hypoallergenic protein source, while krill adds flavour and nutritional value to support healthy growth.",
    "The juicy, meaty pieces both satisfy your little companion and help maintain proper hydration. It is tender, appetising nourishment that accompanies a puppy through every stage of development."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your puppy's age, weight and activity; fresh water should always be available.",
   "comp": "Made with quality, carefully selected ingredients."
  }
 },
 "dogs||Superior Care · White Coat||White Coat — White Fish & Krill": {
  "az": {
   "full": [
    "Açıq və ağ tüklü itlər üçün xüsusi hazırlanmış bu filelər zərif sousda təqdim olunur. Ağ balıq və kril dadlı zülal mənbəyi olmaqla yanaşı, gözaltı qəhvəyi ləkələrin azaldılmasına kömək edərək parlaq, təmiz görünüşü dəstəkləyir.",
    "Buğdasız resept həssas dostunuz üçün daha yumşaq seçim təqdim edir. Sulu, ətyana tikələr həm iştahaaçandır, həm də gündəlik nəmlənməyə töhfə verir."
   ],
   "feeding": "Qablaşdırmanın üzərindəki qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli, diqqətlə seçilmiş tərkib hissələri ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Эти филе в нежном соусе созданы специально для собак со светлой и белой шерстью. Белая рыба и криль не только служат вкусным источником белка, но и помогают уменьшить коричневые слёзные дорожки, поддерживая яркий и чистый вид.",
    "Рецепт без пшеницы делает это лакомство более мягким выбором для чувствительного питомца. Сочные мясные кусочки одновременно аппетитны и способствуют ежедневному увлажнению."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; свежая вода всегда должна быть в свободном доступе.",
   "comp": "Изготовлено из качественных, тщательно отобранных ингредиентов."
  },
  "en": {
   "full": [
    "These fillets in a gentle gravy are made especially for dogs with light and white coats. White fish and krill serve as a tasty protein source while helping to reduce brown tear stains, supporting a bright and clean appearance.",
    "The wheat-free recipe offers a softer choice for a sensitive companion. The juicy, meaty pieces are both appetising and contribute to everyday hydration."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity; fresh water should always be available.",
   "comp": "Made with quality, carefully selected ingredients."
  }
 },
 "dogs||Superior Care · Red Coat||Red Coat — Salmon & Krill": {
  "az": {
   "full": [
    "Qızılı və qırmızımtıl tüklü itlər üçün yaradılmış bu filelər zərif sousda təqdim olunur. Qızılbalıq və kril dadlı zülal təmin edir, RCE kompleksi isə qırmızı və qəhvəyi rəng çalarlarını gücləndirərək tükün təbii istiliyini ön plana çıxarır.",
    "Sulu, ətyana tikələr gündəlik qidalanmanı həm ləzzətli, həm də nəmləndirici edir. Bu, dostunuzun parlaq, zəngin görünüşünü qoruyan zərif bir seçimdir."
   ],
   "feeding": "Qablaşdırmanın üzərindəki qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli, diqqətlə seçilmiş tərkib hissələri ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Эти филе в нежном соусе созданы для собак с рыжей и красноватой шерстью. Лосось и криль обеспечивают вкусный белок, а комплекс RCE подчёркивает красные и коричневые оттенки, выявляя естественную теплоту шерсти.",
    "Сочные мясные кусочки делают повседневное питание одновременно аппетитным и увлажняющим. Это изысканный выбор, сохраняющий яркий и насыщенный вид вашего питомца."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; свежая вода всегда должна быть в свободном доступе.",
   "comp": "Изготовлено из качественных, тщательно отобранных ингредиентов."
  },
  "en": {
   "full": [
    "These fillets in a delicate gravy are created for dogs with red and reddish coats. Salmon and krill provide tasty protein, while the RCE complex enhances red and brown tones, bringing out the natural warmth of the coat.",
    "The juicy, meaty pieces make everyday feeding both appetising and hydrating. It is a refined choice that preserves your companion's vivid, rich appearance."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity; fresh water should always be available.",
   "comp": "Made with quality, carefully selected ingredients."
  }
 },
 "dogs||Superior Care · Dark Coat||Dark Coat — Trout & Krill": {
  "az": {
   "full": [
    "Tünd və qara tüklü itlər üçün hazırlanmış bu filelər zərif sousda təqdim olunur. Alabalıq və kril dadlı zülal mənbəyidir, DCE kompleksi isə dərin tünd və qara rəngi qoruyaraq tükün zəngin parıltısını saxlamağa kömək edir.",
    "Sulu, ətyana tikələr gündəlik qidalanmanı ləzzətli edir və nəmlənməyə töhfə verir. Bu, dostunuzun zərif, dolğun görünüşünü dəstəkləyən xüsusi seçimdir."
   ],
   "feeding": "Qablaşdırmanın üzərindəki qidalanma cədvəlinə əməl edin və miqdarı itin yaşına, çəkisinə və aktivliyinə uyğunlaşdırın; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Keyfiyyətli, diqqətlə seçilmiş tərkib hissələri ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Эти филе в нежном соусе созданы для собак с тёмной и чёрной шерстью. Форель и криль служат вкусным источником белка, а комплекс DCE сохраняет глубокий тёмный и чёрный окрас, помогая поддерживать насыщенный блеск шерсти.",
    "Сочные мясные кусочки делают повседневное питание аппетитным и способствуют увлажнению. Это особый выбор, поддерживающий изысканный и насыщенный вид вашего питомца."
   ],
   "feeding": "Следуйте таблице кормления на упаковке и корректируйте порцию в зависимости от возраста, веса и активности собаки; свежая вода всегда должна быть в свободном доступе.",
   "comp": "Изготовлено из качественных, тщательно отобранных ингредиентов."
  },
  "en": {
   "full": [
    "These fillets in a gentle gravy are made for dogs with dark and black coats. Trout and krill serve as a tasty protein source, while the DCE complex preserves deep dark and black colour, helping to maintain the coat's rich shine.",
    "The juicy, meaty pieces make everyday feeding appetising and contribute to hydration. It is a special choice that supports your companion's refined, saturated appearance."
   ],
   "feeding": "Follow the feeding table on the pack and adjust the portion to your dog's age, weight and activity; fresh water should always be available.",
   "comp": "Made with quality, carefully selected ingredients."
  }
 },
 "dogs||Veterinary Diet||Gastrointestinal — White Fish": {
  "az": {
   "full": [
    "Bu veterinar pəhriz yetkin itlərdə kəskin bağırsaq pozğunluqları zamanı və bərpa dövründə dəstək üçün hazırlanıb. Asan həzm olunan ağ balıq əsasında, beztaxıl resepti ilə həssas həzm sisteminə qayğı göstərir.",
    "Bütün cins itlər üçün uyğun olan bu formula bağırsaqların yumşaq şəkildə bərpasına yönəlib. Çətin dövrlərdə dostunuza ehtiyac duyduğu nəzakətli qidalanmanı təmin edir."
   ],
   "feeding": "Veterinar pəhriz olduğundan istifadədən əvvəl baytarınızla məsləhətləşin və qablaşdırmadakı qidalanma cədvəlinə əməl edin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Asan həzm olunan, keyfiyyətli tərkib hissələri ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Эта ветеринарная диета разработана для поддержки взрослых собак при острых кишечных расстройствах и в период восстановления. На основе легкоусвояемой белой рыбы и по беззерновому рецепту она бережно заботится о чувствительном пищеварении.",
    "Подходящая для всех пород, эта формула направлена на мягкое восстановление работы кишечника. В непростые периоды она обеспечивает питомцу деликатное питание, в котором он нуждается."
   ],
   "feeding": "Поскольку это ветеринарная диета, перед применением проконсультируйтесь с ветеринаром и следуйте таблице кормления на упаковке; свежая вода всегда должна быть в свободном доступе.",
   "comp": "Изготовлено из легкоусвояемых, качественных ингредиентов."
  },
  "en": {
   "full": [
    "This veterinary diet is formulated to support adult dogs during acute intestinal disorders and recovery. Based on easily digestible white fish and made to a grain-free recipe, it gently cares for a sensitive digestive system.",
    "Suitable for all breeds, this formula is aimed at the smooth restoration of intestinal function. Through difficult periods it provides your companion with the gentle nourishment it needs."
   ],
   "feeding": "As this is a veterinary diet, consult your vet before use and follow the feeding table on the pack; fresh water should always be available.",
   "comp": "Made with easily digestible, quality ingredients."
  }
 },
 "dogs||Veterinary Diet||Hypoallergenic — Insect protein": {
  "az": {
   "full": [
    "Bu veterinar pəhriz qida və qida maddələrinə qarşı dözümsüzlüyü azaltmaq üçün yetkin itlərə yönəlib. Tək, qeyri-adi zülal mənbəyi kimi həşərat zülalından istifadə edir və beztaxıl resepti ilə həssas orqanizmləri rahatlığa qovuşdurur.",
    "Bütün cins itlər üçün nəzərdə tutulan bu formula seçici həzm sistemi olan dostlar üçün ideal seçimdir. Allergiyaya meylli itlərə zərif və balanslaşdırılmış qidalanma təqdim edir."
   ],
   "feeding": "Veterinar pəhriz olduğundan istifadədən əvvəl baytarınızla məsləhətləşin və qablaşdırmadakı qidalanma cədvəlinə əməl edin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Diqqətlə seçilmiş, alternativ zülal mənbəyi ilə hazırlanıb."
  },
  "ru": {
   "full": [
    "Эта ветеринарная диета предназначена для взрослых собак, чтобы снизить непереносимость ингредиентов и питательных веществ. Она использует белок насекомых как единственный необычный источник белка и по беззерновому рецепту дарит чувствительному организму облегчение.",
    "Разработанная для всех пород, эта формула станет идеальным выбором для питомцев с избирательным пищеварением. Она обеспечивает склонным к аллергии собакам мягкое и сбалансированное питание."
   ],
   "feeding": "Поскольку это ветеринарная диета, перед применением проконсультируйтесь с ветеринаром и следуйте таблице кормления на упаковке; свежая вода всегда должна быть в свободном доступе.",
   "comp": "Изготовлено с тщательно отобранным альтернативным источником белка."
  },
  "en": {
   "full": [
    "This veterinary diet is intended for adult dogs to reduce intolerances to ingredients and nutrients. It uses insect protein as a single, unusual protein source and, with its grain-free recipe, brings relief to a sensitive system.",
    "Designed for all breeds, this formula is an ideal choice for companions with a selective digestion. It offers allergy-prone dogs gentle and balanced nourishment."
   ],
   "feeding": "As this is a veterinary diet, consult your vet before use and follow the feeding table on the pack; fresh water should always be available.",
   "comp": "Made with a carefully selected alternative protein source."
  }
 },
 "dogs||Veterinary Diet||Dermatosis — Salmon": {
  "az": {
   "full": [
    "Bu veterinar pəhriz dermatoz və həddindən artıq tük tökülməsi zamanı yetkin itlərdə dərinin funksiyasını dəstəkləmək üçün hazırlanıb. Qızılbalıq və qiymətli yağ turşuları ilə dəri sağlamlığına və tükün gözəlliyinə qayğı göstərir.",
    "Bütün cinslər üçün uyğun olan bu formula qıcıqlanmış dəriyə malik dostlara yönəlib. Gündəlik qidalanma vasitəsilə daha sağlam dəri və daha güclü tük örtüyünə dəstək verir."
   ],
   "feeding": "Veterinar pəhriz olduğundan istifadədən əvvəl baytarınızla məsləhətləşin və qablaşdırmadakı qidalanma cədvəlinə əməl edin; təmiz su həmişə əlçatan olmalıdır.",
   "comp": "Qızılbalıq və faydalı yağ turşuları ilə zənginləşdirilib."
  },
  "ru": {
   "full": [
    "Эта ветеринарная диета разработана для поддержки функции кожи у взрослых собак при дерматозе и чрезмерной потере шерсти. Лосось и ценные жирные кислоты заботятся о здоровье кожи и красоте шерсти.",
    "Подходящая для всех пород, эта формула предназначена для питомцев с раздражённой кожей. Через ежедневное питание она поддерживает более здоровую кожу и более крепкий шёрстный покров."
   ],
   "feeding": "Поскольку это ветеринарная диета, перед применением проконсультируйтесь с ветеринаром и следуйте таблице кормления на упаковке; свежая вода всегда должна быть в свободном доступе.",
   "comp": "Обогащено лососем и полезными жирными кислотами."
  },
  "en": {
   "full": [
    "This veterinary diet is formulated to support skin function in adult dogs during dermatosis and excessive hair loss. With salmon and valuable fatty acids, it cares for skin health and the beauty of the coat.",
    "Suitable for all breeds, this formula is intended for companions with irritated skin. Through daily feeding it supports healthier skin and a stronger coat."
   ],
   "feeding": "As this is a veterinary diet, consult your vet before use and follow the feeding table on the pack; fresh water should always be available.",
   "comp": "Enriched with salmon and beneficial fatty acids."
  }
 }
};
