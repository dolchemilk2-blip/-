// ===== Tauro Pro Line · Pure Nature — комплекс для чувствительной кожи (Step 1·2·3) =====
// Витрина «стоящих» флаконов на странице Tauro. Клик по флакону открывает описание шага.
const TPL_SYSTEM = {
  tag:   { az: "Tauro Pro Line · Pure Nature", ru: "Tauro Pro Line · Pure Nature", en: "Tauro Pro Line · Pure Nature" },
  title: { az: "Həssas dəri üçün kompleks — Step 1·2·3", ru: "Комплекс для чувствительной кожи — Step 1·2·3", en: "Sensitive skin system — Step 1·2·3" },
  intro: {
    az: "Həssas, quru və qıcıqlanmış dərili it və pişiklər üçün peşəkar üçmərhələli qulluq sistemi. Kompleks dərini yumşaq təmizləyir, qaşınma, qızartı və pullanmanı azaldır, qoruyucu bariyeri bərpa edir və tükü sağlam, yumşaq və parlaq edir. Bütün it və pişik cinsləri üçün uyğundur.",
    ru: "Профессиональная трёхэтапная система ухода для собак и кошек с чувствительной, сухой и раздражённой кожей. Комплекс мягко очищает кожу, уменьшает зуд, покраснение и шелушение, восстанавливает защитный барьер и делает шерсть здоровой, мягкой и блестящей. Подходит для всех пород собак и кошек.",
    en: "A professional three-step care system for dogs and cats with sensitive, dry and irritated skin. The complex gently cleanses the skin, reduces itching, redness and flaking, restores the protective barrier and makes the coat healthy, soft and shiny. Suitable for all dog and cat breeds."
  },
  note: {
    az: "Maksimum effekt hər üç mərhələdən birlikdə istifadə etdikdə əldə olunur. Sistem dərin təmizləmə, intensiv qulluq, qoruyucu bariyerin bərpası və dəri ilə tükün uzunmüddətli sağlamlığını təmin edir.",
    ru: "Максимальный эффект достигается при использовании всех трёх этапов вместе. Система обеспечивает глубокое очищение, интенсивный уход, восстановление защитного барьера и длительное здоровье кожи и шерсти.",
    en: "Maximum effect is achieved when all three steps are used together. The system delivers deep cleansing, intensive care, barrier restoration and long-lasting skin and coat health."
  },
  badges: {
    az: ["Silikonsuz", "SLS-siz", "Parabensiz", "97% təbii tərkib"],
    ru: ["Без силиконов", "Без SLS", "Без парабенов", "97% натуральных компонентов"],
    en: ["Silicone-free", "SLS-free", "Paraben-free", "97% natural ingredients"]
  },
  steps: [
    {
      step: 1, color: "#5aa46a", img: "assets/products/tpl-pn-detox.webp",
      short: { az: "Yuyur və dərindən təmizləyir — çirki, yağı və qoxunu aparır.", ru: "Моет и глубоко очищает — убирает грязь, жир и запах.", en: "Washes and deep-cleans — removes dirt, grease and odour." },
      item: {
        emoji: "🌿", img: "assets/products/tpl-pn-detox.webp",
        az: { cat: "Pure Nature · STEP 1", name: "Herbal Detox Shampoo",
          desc: "Addım 1 — dərin təmizləmə. Pure Nature peşəkar qulluğunun birinci mərhələsi.",
          sections: [
            { title: "Kimə uyğundur", list: ["Həssas dəri", "Qıcıqlanma", "Qızartı", "Pullanma", "Kəpək", "Yağlı dəri", "Peşəkar qulluqdan əvvəl tükün hazırlanması"] },
            { title: "Tük tipi", list: ["Qısa", "Orta", "Uzun", "Düz", "Qıvrım", "Sərt"] },
            { title: "Təsvir", text: "Peşəkar qulluğun birinci mərhələsi. Şampun dəri və tükü çirkdən, dəri yağından, kosmetika qalıqlarından və xoşagəlməz qoxulardan dərindən təmizləyir. Təbii bitki tərkibləri sayəsində dərini onun təbii balansını pozmadan yumşaq təmizləyir və tükü növbəti mərhələlərə hazırlayır." },
            { title: "İstifadə qaydası", text: "Şampunu su ilə 1:10 nisbətində qarışdırın. Güclü çirklənmə və ya yüksək yağlılıqda 1:5 tövsiyə olunur. Nəm tükə çəkin, masaj hərəkətləri ilə yaxşı köpükləndirin, 3–5 dəqiqə saxlayın və ilıq su ilə diqqətlə yuyun." }
          ],
          tags: ["Detoks", "Dərin təmizləmə", "Step 1"] },
        ru: { cat: "Pure Nature · STEP 1", name: "Herbal Detox Shampoo",
          desc: "Шаг 1 — глубокое очищение. Первый этап профессионального ухода Pure Nature.",
          sections: [
            { title: "Кому подходит", list: ["Чувствительная кожа", "Раздражение", "Покраснение", "Шелушение", "Перхоть", "Жирная кожа", "Подготовка шерсти перед профессиональным уходом"] },
            { title: "Тип шерсти", list: ["Короткая", "Средняя", "Длинная", "Прямая", "Кудрявая", "Жёсткая"] },
            { title: "Описание", text: "Первый этап профессионального ухода. Шампунь глубоко очищает кожу и шерсть от загрязнений, кожного жира, остатков косметики и неприятных запахов. Благодаря натуральным растительным компонентам мягко очищает кожу, не нарушая её естественный баланс, и подготавливает шерсть к последующим этапам ухода." },
            { title: "Способ применения", text: "Развести шампунь водой в пропорции 1:10. При сильных загрязнениях или повышенной жирности кожи рекомендуется 1:5. Нанести на влажную шерсть, хорошо вспенить массажными движениями, оставить на 3–5 минут и тщательно смыть тёплой водой." }
          ],
          tags: ["Детокс", "Глубокое очищение", "Step 1"] },
        en: { cat: "Pure Nature · STEP 1", name: "Herbal Detox Shampoo",
          desc: "Step 1 — deep cleansing. The first stage of Pure Nature professional care.",
          sections: [
            { title: "Who it's for", list: ["Sensitive skin", "Irritation", "Redness", "Flaking", "Dandruff", "Oily skin", "Prepping the coat before professional grooming"] },
            { title: "Coat type", list: ["Short", "Medium", "Long", "Straight", "Curly", "Wiry"] },
            { title: "Description", text: "The first stage of professional care. The shampoo deeply cleanses skin and coat of dirt, sebum, cosmetic residue and unpleasant odours. Thanks to natural plant-based ingredients it gently cleanses the skin without disturbing its natural balance and prepares the coat for the following steps." },
            { title: "How to use", text: "Dilute the shampoo with water at a ratio of 1:10. For heavy soiling or very oily skin, 1:5 is recommended. Apply to wet coat, lather well with massaging movements, leave for 3–5 minutes and rinse thoroughly with warm water." }
          ],
          tags: ["Detox", "Deep cleanse", "Step 1"] }
      }
    },
    {
      step: 2, color: "#4fa6b6", img: "assets/products/tpl-pn-sensitive.webp",
      short: { az: "Dərini sakitləşdirir — qaşınma və qızartı azalır, nəmlik artır.", ru: "Успокаивает кожу — меньше зуда и покраснений, больше увлажнения.", en: "Calms the skin — less itching and redness, more moisture." },
      item: {
        emoji: "💧", img: "assets/products/tpl-pn-sensitive.webp",
        az: { cat: "Pure Nature · STEP 2", name: "Ultra Sensitive Shampoo",
          desc: "Addım 2 — əsas qulluq. Həssas dərini sakitləşdirir və nəmləndirir.",
          sections: [
            { title: "Kimə uyğundur", list: ["Həssas dəri", "Allergik reaksiyalar", "Qızartı", "Qaşınma", "Dərinin quruluğu", "Tez-tez çimizdirmə"] },
            { title: "Tük tipi", list: ["Bütün tük tipləri", "Bütün rənglər"] },
            { title: "Təsvir", text: "Qulluğun əsas mərhələsi. Şampun həssas dərini sakitləşdirir, qaşınma, qıcıqlanma və qızartını azaltmağa kömək edir, dərinin təbii qoruyucu bariyerini dəstəkləyir və tükü intensiv nəmləndirir. Quruluğa və qıcıqlanmaya meylli həssas dərili ev heyvanları üçün uyğundur." },
            { title: "İstifadə qaydası", text: "Step 1-dən sonra şampunu su ilə 1:10 qarışdırın. Çox həssas dəri üçün 1:15 tövsiyə olunur. Tükə bərabər çəkin, yüngülcə masaj edin, 3–5 dəqiqə saxlayın və ilıq su ilə diqqətlə yuyun." }
          ],
          tags: ["Sensitive", "Sakitləşdirmə", "Step 2"] },
        ru: { cat: "Pure Nature · STEP 2", name: "Ultra Sensitive Shampoo",
          desc: "Шаг 2 — основной уход. Успокаивает и увлажняет чувствительную кожу.",
          sections: [
            { title: "Кому подходит", list: ["Чувствительная кожа", "Аллергические реакции", "Покраснение", "Зуд", "Сухость кожи", "Частое купание"] },
            { title: "Тип шерсти", list: ["Все типы шерсти", "Все окрасы"] },
            { title: "Описание", text: "Основной этап ухода. Шампунь успокаивает чувствительную кожу, помогает уменьшить зуд, раздражение и покраснение, поддерживает естественный защитный барьер кожи и интенсивно увлажняет шерсть. Подходит питомцам с чувствительной кожей, склонной к сухости и раздражению." },
            { title: "Способ применения", text: "После использования Step 1 развести шампунь водой 1:10. Для очень чувствительной кожи — 1:15. Равномерно нанести на шерсть, мягко помассировать, оставить на 3–5 минут и тщательно смыть тёплой водой." }
          ],
          tags: ["Sensitive", "Успокоение", "Step 2"] },
        en: { cat: "Pure Nature · STEP 2", name: "Ultra Sensitive Shampoo",
          desc: "Step 2 — the main care. Soothes and hydrates sensitive skin.",
          sections: [
            { title: "Who it's for", list: ["Sensitive skin", "Allergic reactions", "Redness", "Itching", "Dry skin", "Frequent bathing"] },
            { title: "Coat type", list: ["All coat types", "All colours"] },
            { title: "Description", text: "The main care step. The shampoo soothes sensitive skin, helps reduce itching, irritation and redness, supports the skin's natural protective barrier and intensively hydrates the coat. Suitable for pets with sensitive skin prone to dryness and irritation." },
            { title: "How to use", text: "After Step 1, dilute the shampoo with water 1:10. For very sensitive skin, use 1:15. Apply evenly to the coat, massage gently, leave for 3–5 minutes and rinse thoroughly with warm water." }
          ],
          tags: ["Sensitive", "Soothing", "Step 2"] }
      }
    },
    {
      step: 3, color: "#4fa6b6", img: "assets/products/tpl-pn-sensitive-cond.webp",
      short: { az: "Yumşaldır və nəmləndirir — tük itaətkar və parlaq olur.", ru: "Смягчает и увлажняет — шерсть послушная и блестящая.", en: "Softens and hydrates — a smooth, manageable, shiny coat." },
      item: {
        emoji: "✨", img: "assets/products/tpl-pn-sensitive-cond.webp",
        az: { cat: "Pure Nature · STEP 3", name: "Ultra Sensitive Conditioner",
          desc: "Addım 3 — tamamlama. Nəmləndirir, daranmanı asanlaşdırır və nəticəni möhkəmləndirir.",
          sections: [
            { title: "Kimə uyğundur", list: ["Həssas dəri", "Quru tük", "Kövrək tük", "Müalicəvi qulluqdan sonra"] },
            { title: "Tük tipi", list: ["Bütün tük tipləri", "Bütün it və pişik cinsləri"] },
            { title: "Təsvir", text: "Peşəkar qulluğun sonuncu mərhələsi. Kondisioner tükü intensiv nəmləndirir, daranmanı asanlaşdırır, dolaşmanı azaldır, tük kutikulasını bağlayır və şampundan sonra nəticəni möhkəmləndirir. Tükü daha yumşaq, hamar və parlaq edir, eyni zamanda dərinin sağlam vəziyyətini dəstəkləyir." },
            { title: "İstifadə qaydası", text: "Kondisioneri su ilə 1:10 qarışdırın. Çox quru və ya zədələnmiş tük üçün 1:5 tövsiyə olunur. Şampundan sonra təmiz nəm tükə çəkin, bütün uzunluğa yayın, 3–5 dəqiqə saxlayın və ilıq su ilə diqqətlə yuyun." }
          ],
          tags: ["Kondisioner", "Nəmləndirmə", "Step 3"] },
        ru: { cat: "Pure Nature · STEP 3", name: "Ultra Sensitive Conditioner",
          desc: "Шаг 3 — завершение. Увлажняет, облегчает расчёсывание и закрепляет результат.",
          sections: [
            { title: "Кому подходит", list: ["Чувствительная кожа", "Сухая шерсть", "Ломкая шерсть", "После лечебного ухода"] },
            { title: "Тип шерсти", list: ["Все типы шерсти", "Все породы собак и кошек"] },
            { title: "Описание", text: "Завершающий этап профессионального ухода. Кондиционер интенсивно увлажняет шерсть, облегчает расчёсывание, уменьшает спутывание, закрывает кутикулу волоса и закрепляет результат после шампуня. Делает шерсть более мягкой, гладкой и блестящей, одновременно поддерживая здоровое состояние кожи." },
            { title: "Способ применения", text: "Развести кондиционер водой 1:10. Для очень сухой или повреждённой шерсти — 1:5. Нанести на чистую влажную шерсть после шампуня, распределить по всей длине, оставить на 3–5 минут и тщательно смыть тёплой водой." }
          ],
          tags: ["Кондиционер", "Увлажнение", "Step 3"] },
        en: { cat: "Pure Nature · STEP 3", name: "Ultra Sensitive Conditioner",
          desc: "Step 3 — the finish. Hydrates, eases combing and locks in the result.",
          sections: [
            { title: "Who it's for", list: ["Sensitive skin", "Dry coat", "Brittle coat", "After therapeutic care"] },
            { title: "Coat type", list: ["All coat types", "All dog and cat breeds"] },
            { title: "Description", text: "The final stage of professional care. The conditioner intensively hydrates the coat, eases combing, reduces tangling, seals the hair cuticle and locks in the result after the shampoo. It makes the coat softer, smoother and shinier while supporting healthy skin." },
            { title: "How to use", text: "Dilute the conditioner with water 1:10. For very dry or damaged coat, use 1:5. Apply to clean wet coat after shampooing, distribute along the full length, leave for 3–5 minutes and rinse thoroughly with warm water." }
          ],
          tags: ["Conditioner", "Hydration", "Step 3"] }
      }
    }
  ]
};
