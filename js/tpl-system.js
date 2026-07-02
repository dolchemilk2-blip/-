// ===== Tauro Pro Line — комплексы профессионального ухода (витрины «стоящих» флаконов) =====
// TPL_SYSTEMS — массив витрин (Step-систем). Рендерятся только на вкладке Tauro (brand === 'tpl').
// Клик по флакону открывает подробное описание шага (модалка).
const TPL_SYSTEMS = [
  {
    "tag": {
      "az": "Tauro Pro Line · Pure Nature",
      "ru": "Tauro Pro Line · Pure Nature",
      "en": "Tauro Pro Line · Pure Nature"
    },
    "title": {
      "az": "Həssas dəri üçün kompleks — Step 1·2·3",
      "ru": "Комплекс для чувствительной кожи — Step 1·2·3",
      "en": "Sensitive skin system — Step 1·2·3"
    },
    "intro": {
      "az": "Həssas, quru və qıcıqlanmış dərili it və pişiklər üçün peşəkar üçmərhələli qulluq sistemi. Kompleks dərini yumşaq təmizləyir, qaşınma, qızartı və pullanmanı azaldır, qoruyucu bariyeri bərpa edir və tükü sağlam, yumşaq və parlaq edir. Bütün it və pişik cinsləri üçün uyğundur.",
      "ru": "Профессиональная трёхэтапная система ухода для собак и кошек с чувствительной, сухой и раздражённой кожей. Комплекс мягко очищает кожу, уменьшает зуд, покраснение и шелушение, восстанавливает защитный барьер и делает шерсть здоровой, мягкой и блестящей. Подходит для всех пород собак и кошек.",
      "en": "A professional three-step care system for dogs and cats with sensitive, dry and irritated skin. The complex gently cleanses the skin, reduces itching, redness and flaking, restores the protective barrier and makes the coat healthy, soft and shiny. Suitable for all dog and cat breeds."
    },
    "note": {
      "az": "Maksimum effekt hər üç mərhələdən birlikdə istifadə etdikdə əldə olunur. Sistem dərin təmizləmə, intensiv qulluq, qoruyucu bariyerin bərpası və dəri ilə tükün uzunmüddətli sağlamlığını təmin edir.",
      "ru": "Максимальный эффект достигается при использовании всех трёх этапов вместе. Система обеспечивает глубокое очищение, интенсивный уход, восстановление защитного барьера и длительное здоровье кожи и шерсти.",
      "en": "Maximum effect is achieved when all three steps are used together. The system delivers deep cleansing, intensive care, barrier restoration and long-lasting skin and coat health."
    },
    "badges": {
      "az": [
        "Silikonsuz",
        "SLS-siz",
        "Parabensiz",
        "97% təbii tərkib"
      ],
      "ru": [
        "Без силиконов",
        "Без SLS",
        "Без парабенов",
        "97% натуральных компонентов"
      ],
      "en": [
        "Silicone-free",
        "SLS-free",
        "Paraben-free",
        "97% natural ingredients"
      ]
    },
    "steps": [
      {
        "step": 1,
        "color": "#5aa46a",
        "img": "assets/products/tpl-pn-detox.webp",
        "short": {
          "az": "Yuyur və dərindən təmizləyir — çirki, yağı və qoxunu aparır.",
          "ru": "Моет и глубоко очищает — убирает грязь, жир и запах.",
          "en": "Washes and deep-cleans — removes dirt, grease and odour."
        },
        "item": {
          "emoji": "🌿",
          "img": "assets/products/tpl-pn-detox.webp",
          "az": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Addım 1 — dərin təmizləmə. Pure Nature peşəkar qulluğunun birinci mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Həssas dəri",
                  "Qıcıqlanma",
                  "Qızartı",
                  "Pullanma",
                  "Kəpək",
                  "Yağlı dəri",
                  "Peşəkar qulluqdan əvvəl tükün hazırlanması"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Qısa",
                  "Orta",
                  "Uzun",
                  "Düz",
                  "Qıvrım",
                  "Sərt"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar qulluğun birinci mərhələsi. Şampun dəri və tükü çirkdən, dəri yağından, kosmetika qalıqlarından və xoşagəlməz qoxulardan dərindən təmizləyir. Təbii bitki tərkibləri sayəsində dərini onun təbii balansını pozmadan yumşaq təmizləyir və tükü növbəti mərhələlərə hazırlayır."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu su ilə 1:10 nisbətində qarışdırın. Güclü çirklənmə və ya yüksək yağlılıqda 1:5 tövsiyə olunur. Nəm tükə çəkin, masaj hərəkətləri ilə yaxşı köpükləndirin, 3–5 dəqiqə saxlayın və ilıq su ilə diqqətlə yuyun."
              }
            ],
            "tags": [
              "Detoks",
              "Dərin təmizləmə",
              "Step 1"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Шаг 1 — глубокое очищение. Первый этап профессионального ухода Pure Nature.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Чувствительная кожа",
                  "Раздражение",
                  "Покраснение",
                  "Шелушение",
                  "Перхоть",
                  "Жирная кожа",
                  "Подготовка шерсти перед профессиональным уходом"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Короткая",
                  "Средняя",
                  "Длинная",
                  "Прямая",
                  "Кудрявая",
                  "Жёсткая"
                ]
              },
              {
                "title": "Описание",
                "text": "Первый этап профессионального ухода. Шампунь глубоко очищает кожу и шерсть от загрязнений, кожного жира, остатков косметики и неприятных запахов. Благодаря натуральным растительным компонентам мягко очищает кожу, не нарушая её естественный баланс, и подготавливает шерсть к последующим этапам ухода."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой в пропорции 1:10. При сильных загрязнениях или повышенной жирности кожи рекомендуется 1:5. Нанести на влажную шерсть, хорошо вспенить массажными движениями, оставить на 3–5 минут и тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Детокс",
              "Глубокое очищение",
              "Step 1"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Step 1 — deep cleansing. The first stage of Pure Nature professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Sensitive skin",
                  "Irritation",
                  "Redness",
                  "Flaking",
                  "Dandruff",
                  "Oily skin",
                  "Prepping the coat before professional grooming"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "Short",
                  "Medium",
                  "Long",
                  "Straight",
                  "Curly",
                  "Wiry"
                ]
              },
              {
                "title": "Description",
                "text": "The first stage of professional care. The shampoo deeply cleanses skin and coat of dirt, sebum, cosmetic residue and unpleasant odours. Thanks to natural plant-based ingredients it gently cleanses the skin without disturbing its natural balance and prepares the coat for the following steps."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water at a ratio of 1:10. For heavy soiling or very oily skin, 1:5 is recommended. Apply to wet coat, lather well with massaging movements, leave for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Detox",
              "Deep cleanse",
              "Step 1"
            ]
          }
        }
      },
      {
        "step": 2,
        "color": "#4fa6b6",
        "img": "assets/products/tpl-pn-sensitive.webp",
        "short": {
          "az": "Dərini sakitləşdirir — qaşınma və qızartı azalır, nəmlik artır.",
          "ru": "Успокаивает кожу — меньше зуда и покраснений, больше увлажнения.",
          "en": "Calms the skin — less itching and redness, more moisture."
        },
        "item": {
          "emoji": "💧",
          "img": "assets/products/tpl-pn-sensitive.webp",
          "az": {
            "cat": "Pure Nature · STEP 2",
            "name": "Ultra Sensitive Shampoo",
            "desc": "Addım 2 — əsas qulluq. Həssas dərini sakitləşdirir və nəmləndirir.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Həssas dəri",
                  "Allergik reaksiyalar",
                  "Qızartı",
                  "Qaşınma",
                  "Dərinin quruluğu",
                  "Tez-tez çimizdirmə"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Bütün rənglər"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Qulluğun əsas mərhələsi. Şampun həssas dərini sakitləşdirir, qaşınma, qıcıqlanma və qızartını azaltmağa kömək edir, dərinin təbii qoruyucu bariyerini dəstəkləyir və tükü intensiv nəmləndirir. Quruluğa və qıcıqlanmaya meylli həssas dərili ev heyvanları üçün uyğundur."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Step 1-dən sonra şampunu su ilə 1:10 qarışdırın. Çox həssas dəri üçün 1:15 tövsiyə olunur. Tükə bərabər çəkin, yüngülcə masaj edin, 3–5 dəqiqə saxlayın və ilıq su ilə diqqətlə yuyun."
              }
            ],
            "tags": [
              "Sensitive",
              "Sakitləşdirmə",
              "Step 2"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 2",
            "name": "Ultra Sensitive Shampoo",
            "desc": "Шаг 2 — основной уход. Успокаивает и увлажняет чувствительную кожу.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Чувствительная кожа",
                  "Аллергические реакции",
                  "Покраснение",
                  "Зуд",
                  "Сухость кожи",
                  "Частое купание"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Все окрасы"
                ]
              },
              {
                "title": "Описание",
                "text": "Основной этап ухода. Шампунь успокаивает чувствительную кожу, помогает уменьшить зуд, раздражение и покраснение, поддерживает естественный защитный барьер кожи и интенсивно увлажняет шерсть. Подходит питомцам с чувствительной кожей, склонной к сухости и раздражению."
              },
              {
                "title": "Способ применения",
                "text": "После использования Step 1 развести шампунь водой 1:10. Для очень чувствительной кожи — 1:15. Равномерно нанести на шерсть, мягко помассировать, оставить на 3–5 минут и тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Sensitive",
              "Успокоение",
              "Step 2"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 2",
            "name": "Ultra Sensitive Shampoo",
            "desc": "Step 2 — the main care. Soothes and hydrates sensitive skin.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Sensitive skin",
                  "Allergic reactions",
                  "Redness",
                  "Itching",
                  "Dry skin",
                  "Frequent bathing"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "All colours"
                ]
              },
              {
                "title": "Description",
                "text": "The main care step. The shampoo soothes sensitive skin, helps reduce itching, irritation and redness, supports the skin's natural protective barrier and intensively hydrates the coat. Suitable for pets with sensitive skin prone to dryness and irritation."
              },
              {
                "title": "How to use",
                "text": "After Step 1, dilute the shampoo with water 1:10. For very sensitive skin, use 1:15. Apply evenly to the coat, massage gently, leave for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Sensitive",
              "Soothing",
              "Step 2"
            ]
          }
        }
      },
      {
        "step": 3,
        "color": "#4fa6b6",
        "img": "assets/products/tpl-pn-sensitive-cond.webp",
        "short": {
          "az": "Yumşaldır və nəmləndirir — tük itaətkar və parlaq olur.",
          "ru": "Смягчает и увлажняет — шерсть послушная и блестящая.",
          "en": "Softens and hydrates — a smooth, manageable, shiny coat."
        },
        "item": {
          "emoji": "✨",
          "img": "assets/products/tpl-pn-sensitive-cond.webp",
          "az": {
            "cat": "Pure Nature · STEP 3",
            "name": "Ultra Sensitive Conditioner",
            "desc": "Addım 3 — tamamlama. Nəmləndirir, daranmanı asanlaşdırır və nəticəni möhkəmləndirir.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Həssas dəri",
                  "Quru tük",
                  "Kövrək tük",
                  "Müalicəvi qulluqdan sonra"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Bütün it və pişik cinsləri"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar qulluğun sonuncu mərhələsi. Kondisioner tükü intensiv nəmləndirir, daranmanı asanlaşdırır, dolaşmanı azaldır, tük kutikulasını bağlayır və şampundan sonra nəticəni möhkəmləndirir. Tükü daha yumşaq, hamar və parlaq edir, eyni zamanda dərinin sağlam vəziyyətini dəstəkləyir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Kondisioneri su ilə 1:10 qarışdırın. Çox quru və ya zədələnmiş tük üçün 1:5 tövsiyə olunur. Şampundan sonra təmiz nəm tükə çəkin, bütün uzunluğa yayın, 3–5 dəqiqə saxlayın və ilıq su ilə diqqətlə yuyun."
              }
            ],
            "tags": [
              "Kondisioner",
              "Nəmləndirmə",
              "Step 3"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 3",
            "name": "Ultra Sensitive Conditioner",
            "desc": "Шаг 3 — завершение. Увлажняет, облегчает расчёсывание и закрепляет результат.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Чувствительная кожа",
                  "Сухая шерсть",
                  "Ломкая шерсть",
                  "После лечебного ухода"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Все породы собак и кошек"
                ]
              },
              {
                "title": "Описание",
                "text": "Завершающий этап профессионального ухода. Кондиционер интенсивно увлажняет шерсть, облегчает расчёсывание, уменьшает спутывание, закрывает кутикулу волоса и закрепляет результат после шампуня. Делает шерсть более мягкой, гладкой и блестящей, одновременно поддерживая здоровое состояние кожи."
              },
              {
                "title": "Способ применения",
                "text": "Развести кондиционер водой 1:10. Для очень сухой или повреждённой шерсти — 1:5. Нанести на чистую влажную шерсть после шампуня, распределить по всей длине, оставить на 3–5 минут и тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Кондиционер",
              "Увлажнение",
              "Step 3"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 3",
            "name": "Ultra Sensitive Conditioner",
            "desc": "Step 3 — the finish. Hydrates, eases combing and locks in the result.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Sensitive skin",
                  "Dry coat",
                  "Brittle coat",
                  "After therapeutic care"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "All dog and cat breeds"
                ]
              },
              {
                "title": "Description",
                "text": "The final stage of professional care. The conditioner intensively hydrates the coat, eases combing, reduces tangling, seals the hair cuticle and locks in the result after the shampoo. It makes the coat softer, smoother and shinier while supporting healthy skin."
              },
              {
                "title": "How to use",
                "text": "Dilute the conditioner with water 1:10. For very dry or damaged coat, use 1:5. Apply to clean wet coat after shampooing, distribute along the full length, leave for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Conditioner",
              "Hydration",
              "Step 3"
            ]
          }
        }
      }
    ]
  },
  {
    "tag": {
      "az": "Tauro Pro Line · Pure Nature",
      "ru": "Tauro Pro Line · Pure Nature",
      "en": "Tauro Pro Line · Pure Nature"
    },
    "title": {
      "az": "Gündəlik qulluq üçün 5 in 1 kompleks — Step 1·2·3",
      "ru": "Комплекс 5 in 1 для ежедневного ухода — Step 1·2·3",
      "en": "5-in-1 daily-care system — Step 1·2·3"
    },
    "intro": {
      "az": "Bütün cinslərdən olan it və pişiklər üçün universal üçmərhələli qulluq sistemi. Kompleks müntəzəm istifadə üçün hazırlanıb və tükün dərin təmizlənməsini, qidalanmasını, nəmləndirilməsini və qorunmasını təmin edir. Həm ev şəraitində qulluq, həm də peşəkar qruminq üçün uyğundur. Tükü daha yumşaq, hamar və parlaq edir, daranmanı əhəmiyyətli dərəcədə asanlaşdırır. Bütün cinslərdən və bütün tük tiplərindən olan it və pişiklər üçün uyğundur.",
      "ru": "Универсальная трехэтапная система ухода для собак и кошек всех пород. Комплекс разработан для регулярного использования, обеспечивая глубокое очищение, питание, увлажнение и защиту шерсти. Подходит как для домашнего ухода, так и для профессионального груминга. Делает шерсть более мягкой, гладкой, блестящей и значительно облегчает расчесывание. Подходит для собак и кошек всех пород и всех типов шерсти.",
      "en": "A universal three-step care system for dogs and cats of all breeds. The set is designed for regular use, delivering deep cleansing, nourishment, hydration and protection for the coat. Suitable both for at-home care and for professional grooming. It leaves the coat softer, smoother and shinier, and makes brushing considerably easier. Suitable for dogs and cats of all breeds and all coat types."
    },
    "note": {
      "az": "Tauro Pro Line 5 in 1 kompleksi it və pişiklərin tükünə müntəzəm qulluq üçün ideal seçimdir. Xüsusilə uzun, sıx və qıvrım tükə malik, asan daranmaya və düyünlərin qarşısının alınmasına ehtiyacı olan heyvanlar üçün tövsiyə olunur. Müntəzəm istifadə zamanı tük daha yumşaq, hamar, parlaq və baxımlı olur, gündəlik qulluq isə xeyli asanlaşır. Maksimum nəticə üçün kompleksin hər üç mərhələsindən istifadə etmək tövsiyə olunur.",
      "ru": "Комплекс Tauro Pro Line 5 in 1 идеально подходит для регулярного ухода за шерстью собак и кошек. Он особенно рекомендуется питомцам с длинной, густой и кудрявой шерстью, которым необходимо легкое расчесывание и профилактика образования колтунов. При регулярном использовании шерсть становится более мягкой, гладкой, блестящей и ухоженной, а ежедневный уход значительно упрощается. Для максимального результата рекомендуется использовать все три этапа комплекса.",
      "en": "The Tauro Pro Line 5 in 1 system is ideal for the regular coat care of dogs and cats. It is especially recommended for pets with long, dense and curly coats that need easy brushing and protection against matting. With regular use the coat becomes softer, smoother, shinier and well-groomed, and everyday care is made much simpler. For the best results, use all three steps of the system."
    },
    "badges": {
      "az": [
        "Silikonsuz",
        "SLS-siz",
        "Parabensiz",
        "Təbii tərkib"
      ],
      "ru": [
        "Без силиконов",
        "Без SLS",
        "Без парабенов",
        "Натуральный состав"
      ],
      "en": [
        "Silicone-free",
        "SLS-free",
        "Paraben-free",
        "Natural formula"
      ]
    },
    "steps": [
      {
        "step": 1,
        "color": "#5aa46a",
        "img": "assets/products/tpl-pn-detox.webp",
        "short": {
          "az": "Yuyur və dərindən təmizləyir — çirki, piyi və kosmetik qalıqları aradan qaldırır, tükü sonrakı qulluğa hazırlayır.",
          "ru": "Моет и глубоко очищает — убирает грязь, кожный жир и остатки косметики, готовит шерсть к дальнейшему уходу.",
          "en": "Washes and deeply cleanses — removes dirt, sebum and product residue, and preps the coat for the next steps."
        },
        "item": {
          "emoji": "🌿",
          "img": "assets/products/tpl-pn-detox.webp",
          "az": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Addım 1 — dərin təmizləmə. Peşəkar qulluğun ilk mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Müntəzəm qulluq",
                  "Solğun tük",
                  "Tükün qulluqdan əvvəl hazırlanması",
                  "Yağlı dəri",
                  "Çirklənmiş tük"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Qısa",
                  "Orta",
                  "Uzun",
                  "Qıvrım",
                  "Sərt",
                  "Sıx"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar qulluğun ilk mərhələsi. Dəri və tükü çirkdən, dəri piyindən və kosmetik vasitə qalıqlarından dərindən təmizləyir. Tükü sonrakı qulluğa hazırlayır, növbəti mərhələlərin aktiv komponentlərinin daha yaxşı nüfuz etməsini təmin edir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu su ilə 1:10 nisbətində qarışdırın. Güclü çirklənmə və ya yağlı dəri zamanı 1:5 nisbətindən istifadə edin. Nəmli tükə çəkin, 3–5 dəqiqə masaj edin və isti su ilə diqqətlə yuyun."
              }
            ],
            "tags": [
              "Dərin təmizləmə",
              "Hazırlıq mərhələsi",
              "Yağlı dəri"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Шаг 1 — глубокое очищение. Первый этап профессионального ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Регулярный уход",
                  "Тусклая шерсть",
                  "Подготовка шерсти перед уходом",
                  "Жирная кожа",
                  "Загрязненная шерсть"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Короткая",
                  "Средняя",
                  "Длинная",
                  "Кудрявая",
                  "Жесткая",
                  "Густая"
                ]
              },
              {
                "title": "Описание",
                "text": "Первый этап профессионального ухода. Глубоко очищает кожу и шерсть от загрязнений, кожного жира и остатков косметических средств. Подготавливает шерсть к дальнейшему уходу, улучшая проникновение активных компонентов последующих этапов."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой в пропорции 1:10. При сильных загрязнениях или жирной коже использовать разведение 1:5. Нанести на влажную шерсть, помассировать 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Глубокое очищение",
              "Подготовительный этап",
              "Жирная кожа"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Step 1 — deep cleansing. The first stage of professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Regular care",
                  "Dull coat",
                  "Prepping the coat before care",
                  "Oily skin",
                  "Soiled coat"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "Short",
                  "Medium",
                  "Long",
                  "Curly",
                  "Wiry",
                  "Dense"
                ]
              },
              {
                "title": "Description",
                "text": "The first stage of professional care. It deeply cleanses skin and coat of dirt, sebum and cosmetic residue. It prepares the coat for further care, improving the penetration of the active ingredients in the following steps."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water at a ratio of 1:10. For heavy soiling or oily skin, use a 1:5 dilution. Apply to the wet coat, massage in for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Deep cleansing",
              "Prep step",
              "Oily skin"
            ]
          }
        }
      },
      {
        "step": 2,
        "color": "#d9812f",
        "img": "assets/products/tpl-pn-5in1.webp",
        "short": {
          "az": "Nəmləndirir və qidalandırır — tükü yumşaldır, parlaqlıq verir və gündəlik daranmanı asanlaşdırır.",
          "ru": "Увлажняет и питает — смягчает шерсть, придает блеск и облегчает ежедневное расчесывание.",
          "en": "Hydrates and nourishes — softens the coat, adds shine and makes everyday brushing easier."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-pn-5in1.webp",
          "az": {
            "cat": "Pure Nature · STEP 2",
            "name": "5 in 1 Shampoo",
            "desc": "Addım 2 — əsas qulluq. Nəmləndirmə və qidalanma ilə incə təmizləmə.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Gündəlik qulluq",
                  "Quru tük",
                  "Solğun tük",
                  "Yüngül tökülmə",
                  "Tükün dolaşması"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Düz",
                  "Qıvrım",
                  "Uzun",
                  "Qısa",
                  "Sıx"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Tükü nəmləndirir",
                  "Təbii parlaqlıq verir",
                  "Tükü yumşaldır",
                  "Daranmanı asanlaşdırır",
                  "Dolaşmanı azaldır",
                  "Sağlam dərinin qorunmasına kömək edir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Əsas qulluq mərhələsi. Şampun tükü incə şəkildə təmizləyir, eyni zamanda onu bütün uzunluğu boyunca nəmləndirir və qidalandırır. Tükü daha yumşaq, hamar və elastik edir, gündəlik daranmanı asanlaşdırır və təbii parlaqlığın qorunmasına kömək edir. İstənilən cinsdən olan it və pişiklərdə müntəzəm istifadə üçün uyğundur."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Step 1-dən sonra şampunu su ilə 1:10 nisbətində qarışdırın. Quru, uzun və ya sıx tük üçün 1:5 nisbətinə icazə verilir. Nəmli tükə çəkin, bərabər paylayın, 3–5 dəqiqə saxlayın və isti su ilə diqqətlə yuyun."
              }
            ],
            "tags": [
              "Nəmləndirmə",
              "Əsas mərhələ",
              "Parlaqlıq"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 2",
            "name": "5 in 1 Shampoo",
            "desc": "Шаг 2 — основной уход. Бережное очищение с увлажнением и питанием.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Ежедневный уход",
                  "Сухая шерсть",
                  "Тусклая шерсть",
                  "Легкая линька",
                  "Спутывание шерсти"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Прямая",
                  "Кудрявая",
                  "Длинная",
                  "Короткая",
                  "Густая"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Увлажняет шерсть",
                  "Придает естественный блеск",
                  "Смягчает волос",
                  "Облегчает расчесывание",
                  "Уменьшает спутывание",
                  "Помогает поддерживать здоровую кожу"
                ]
              },
              {
                "title": "Описание",
                "text": "Основной этап ухода. Шампунь бережно очищает шерсть, одновременно увлажняя и питая ее по всей длине. Делает шерсть более мягкой, гладкой и эластичной, облегчает ежедневное расчесывание и помогает сохранить естественный блеск. Подходит для регулярного применения собакам и кошкам любых пород."
              },
              {
                "title": "Способ применения",
                "text": "После Step 1 разведите шампунь водой в пропорции 1:10. Для сухой, длинной или густой шерсти допускается разведение 1:5. Нанести на влажную шерсть, равномерно распределить, оставить на 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Увлажнение",
              "Основной этап",
              "Блеск"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 2",
            "name": "5 in 1 Shampoo",
            "desc": "Step 2 — the core wash. Gentle cleansing with hydration and nourishment.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Everyday care",
                  "Dry coat",
                  "Dull coat",
                  "Light shedding",
                  "Coat tangling"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "Straight",
                  "Curly",
                  "Long",
                  "Short",
                  "Dense"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Hydrates the coat",
                  "Adds natural shine",
                  "Softens the hair",
                  "Makes brushing easier",
                  "Reduces tangling",
                  "Helps maintain healthy skin"
                ]
              },
              {
                "title": "Description",
                "text": "The core stage of care. The shampoo gently cleanses the coat while hydrating and nourishing it along its full length. It leaves the coat softer, smoother and more elastic, makes daily brushing easier and helps preserve its natural shine. Suitable for regular use on dogs and cats of any breed."
              },
              {
                "title": "How to use",
                "text": "After Step 1, dilute the shampoo with water at a ratio of 1:10. For dry, long or dense coats, a 1:5 dilution is acceptable. Apply to the wet coat, distribute evenly, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Hydration",
              "Core step",
              "Shine"
            ]
          }
        }
      },
      {
        "step": 3,
        "color": "#c99a2a",
        "img": "assets/products/tpl-pn-5in1-cond.webp",
        "short": {
          "az": "Nəticəni möhkəmləndirir — tükü ipək kimi yumşaq edir, düyünlərin qarşısını alır və daranmanı xeyli asanlaşdırır.",
          "ru": "Закрепляет результат — делает шерсть шелковистой, предотвращает колтуны и заметно облегчает расчесывание.",
          "en": "Locks in the result — leaves the coat silky, prevents mats and makes brushing noticeably easier."
        },
        "item": {
          "emoji": "✨",
          "img": "assets/products/tpl-pn-5in1-cond.webp",
          "az": {
            "cat": "Pure Nature · STEP 3",
            "name": "5 in 1 Conditioner",
            "desc": "Addım 3 — yekun mərhələ. Nəticəni möhkəmləndirən intensiv nəmləndirmə.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Gündəlik qulluq",
                  "Uzun tük",
                  "Qıvrım tük",
                  "Quru tük",
                  "Tükün dolaşması",
                  "Çətin daranma"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Xüsusilə uzuntüklü və qıvrım cinslərə tövsiyə olunur"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Daranmanı asanlaşdırır",
                  "Düyünlərin əmələ gəlməsinin qarşısını alır",
                  "Tükü nəmləndirir",
                  "Tükü hamar edir",
                  "Təbii parlaqlıq verir",
                  "Statik elektriki azaldır"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Qulluğun yekun mərhələsi. Kondisioner tükü intensiv şəkildə nəmləndirir və qidalandırır, tük kutikulasını bağlayır və şampundan sonrakı nəticəni möhkəmləndirir. Tükü ipək kimi yumşaq və itaətkar edir, gündəlik daranmanı əhəmiyyətli dərəcədə asanlaşdırır. Xüsusilə uzun, sıx, tüklü və qıvrım tükə malik it və pişiklərə tövsiyə olunur."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Kondisioneri su ilə 1:10 nisbətində qarışdırın. Çox quru, uzun və ya qıvrım tük üçün 1:5 nisbəti tövsiyə olunur. Şampundan sonra təmiz, nəmli tükə çəkin, 3–5 dəqiqə saxlayın və isti su ilə diqqətlə yuyun."
              }
            ],
            "tags": [
              "Yekun mərhələ",
              "Düyünlərə qarşı",
              "İpək kimi tük"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 3",
            "name": "5 in 1 Conditioner",
            "desc": "Шаг 3 — завершающий этап. Интенсивное увлажнение, закрепляющее результат.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Ежедневный уход",
                  "Длинная шерсть",
                  "Кудрявая шерсть",
                  "Сухая шерсть",
                  "Спутывание шерсти",
                  "Трудное расчесывание"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Особенно рекомендуется длинношерстным и кудрявым породам"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Облегчает расчесывание",
                  "Предотвращает образование колтунов",
                  "Увлажняет шерсть",
                  "Делает шерсть гладкой",
                  "Придает естественный блеск",
                  "Снижает статическое электричество"
                ]
              },
              {
                "title": "Описание",
                "text": "Завершающий этап ухода. Кондиционер интенсивно увлажняет и питает шерсть, закрывает кутикулу волоса и закрепляет результат после шампуня. Делает шерсть шелковистой, послушной и значительно облегчает ежедневное расчесывание. Особенно рекомендуется собакам и кошкам с длинной, густой, пушистой и кудрявой шерстью."
              },
              {
                "title": "Способ применения",
                "text": "Развести кондиционер водой в пропорции 1:10. Для очень сухой, длинной или кудрявой шерсти рекомендуется разведение 1:5. Нанести на чистую влажную шерсть после шампуня, оставить на 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Завершающий этап",
              "Против колтунов",
              "Шелковистая шерсть"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 3",
            "name": "5 in 1 Conditioner",
            "desc": "Step 3 — the finishing stage. Intensive hydration that locks in the result.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Everyday care",
                  "Long coat",
                  "Curly coat",
                  "Dry coat",
                  "Coat tangling",
                  "Difficult brushing"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "Especially recommended for long-haired and curly breeds"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Makes brushing easier",
                  "Prevents mats from forming",
                  "Hydrates the coat",
                  "Leaves the coat smooth",
                  "Adds natural shine",
                  "Reduces static electricity"
                ]
              },
              {
                "title": "Description",
                "text": "The finishing stage of care. The conditioner intensively hydrates and nourishes the coat, seals the hair cuticle and locks in the result after the shampoo. It leaves the coat silky and manageable and makes daily brushing considerably easier. Especially recommended for dogs and cats with long, dense, fluffy and curly coats."
              },
              {
                "title": "How to use",
                "text": "Dilute the conditioner with water at a ratio of 1:10. For very dry, long or curly coats, a 1:5 dilution is recommended. Apply to clean, wet coat after the shampoo, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Finishing step",
              "Anti-mat",
              "Silky coat"
            ]
          }
        }
      }
    ]
  },
  {
    "tag": {
      "az": "Tauro Pro Line · Pure Nature",
      "ru": "Tauro Pro Line · Pure Nature",
      "en": "Tauro Pro Line · Pure Nature"
    },
    "title": {
      "az": "Zədələnmiş tükün bərpası — Magic-Plex · Step 1·2·3",
      "ru": "Восстановление повреждённой шерсти — Magic-Plex · Step 1·2·3",
      "en": "Damaged-coat repair — Magic-Plex · Step 1·2·3"
    },
    "intro": {
      "az": "Zədələnmiş, quru, kövrək və dolaşmış tükün bərpası üçün hazırlanmış peşəkar üç mərhələli baxım sistemi. Xüsusilə uzun, sıx, qıvrım və tüklü örtüyü olan, müntəzəm daranma tələb edən it və pişiklər üçün tövsiyə olunur. Kompleks tük strukturunu möhkəmləndirməyə kömək edir, daranmanı asanlaşdırır, keçələşmənin qarşısını alır və tükü möhkəmləndirərək bol tük tökülməsini azaltmağa yardım edir. Bütün cins it və pişiklər üçün uyğundur.",
      "ru": "Профессиональная трёхэтапная система ухода, разработанная для восстановления повреждённой, сухой, ломкой и спутанной шерсти. Особенно рекомендуется для собак и кошек с длинной, густой, кудрявой и пушистой шерстью, которая требует регулярного расчёсывания. Комплекс помогает укрепить структуру волоса, облегчает расчёсывание, уменьшает образование колтунов и способствует снижению обильной линьки за счёт укрепления шерсти. Подходит для собак и кошек всех пород.",
      "en": "A professional three-step care system developed to restore damaged, dry, brittle and tangled coats. Especially recommended for dogs and cats with long, thick, curly and fluffy coats that need regular brushing. The system helps strengthen the hair structure, makes brushing easier, reduces matting and helps cut down heavy shedding by reinforcing the coat. Suitable for dogs and cats of all breeds."
    },
    "note": {
      "az": "Magic-Plex kompleksini zədələnmiş tük zamanı, qroominqdən sonra, mövsümi tük tökülməsi dövründə, həmçinin uzuntüklü və qıvrım cins it və pişiklərin müntəzəm baxımı üçün kurs şəklində istifadə etmək tövsiyə olunur. Hər üç mərhələnin birlikdə tətbiqi tükü möhkəmləndirməyə, daranmanı asanlaşdırmağa, keçələşməni azaltmağa və tükü daha hamar, parlaq və sağlam etməyə kömək edir.",
      "ru": "Комплекс Magic-Plex рекомендуется использовать курсом при повреждённой шерсти, после груминга, в период сезонной линьки и для регулярного ухода за длинношёрстными и кудрявыми породами собак и кошек. Использование всех трёх этапов помогает укрепить шерсть, облегчить расчёсывание, уменьшить образование колтунов, сделать шерсть более гладкой, блестящей и здоровой.",
      "en": "The Magic-Plex system is best used as a course for damaged coats, after grooming, during seasonal shedding and for the regular care of long-haired and curly breeds of dogs and cats. Using all three steps together helps strengthen the coat, make brushing easier, reduce matting and leave the coat smoother, shinier and healthier."
    },
    "badges": {
      "az": [
        "Silikonsuz",
        "SLS-siz",
        "Parabensiz",
        "Təbii tərkib"
      ],
      "ru": [
        "Без силиконов",
        "Без SLS",
        "Без парабенов",
        "Натуральный состав"
      ],
      "en": [
        "Silicone-free",
        "SLS-free",
        "Paraben-free",
        "Natural formula"
      ]
    },
    "steps": [
      {
        "step": 1,
        "color": "#5aa46a",
        "img": "assets/products/tpl-pn-detox.webp",
        "short": {
          "az": "Dərini və tükü çirkdən, piydən və qalıqlardan dərindən təmizləyir, bərpaya hazırlayır.",
          "ru": "Глубоко очищает кожу и шерсть от грязи, жира и остатков средств, готовит к восстановлению.",
          "en": "Deeply cleanses skin and coat of dirt, oil and product residue, preparing it for repair."
        },
        "item": {
          "emoji": "🌿",
          "img": "assets/products/tpl-pn-detox.webp",
          "az": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Addım 1 — dərin təmizləmə. Peşəkar baxımın ilk mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Zədələnmiş tük",
                  "Bol tük tökülməsi",
                  "Dolaşmış tük",
                  "Peşəkar baxımdan əvvəl",
                  "Solğun tük"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Qıvrım",
                  "Uzun",
                  "Sıx",
                  "Tüklü",
                  "İkiqat tük",
                  "Alt tük"
                ]
              },
              {
                "title": "Tövsiyə olunan cinslər",
                "list": [
                  "Pudel",
                  "Bişon frize",
                  "Labradudl",
                  "Kokapu",
                  "Pomeran şpisi",
                  "Samoyed",
                  "Meyn-kun",
                  "Fars pişiyi",
                  "Britaniya uzuntüklü pişiyi",
                  "Reqdoll"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar baxımın ilk mərhələsi. Şampun dərini və tükü çirkdən, dəri piyindən və kosmetik vasitə qalıqlarından dərindən təmizləyir. Tükü bərpaya hazırlayır, sonrakı mərhələlərin aktiv komponentlərinin nüfuz etməsini yaxşılaşdırır və dərinin sağlamlığını qorumağa kömək edir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu su ilə 1:10 nisbətində qatışdırın. Güclü çirklənmə və ya yağlı tük zamanı 1:5 nisbətində qatışdırmaq tövsiyə olunur. Nəm tükə çəkin, köpük əmələ gələnə qədər masaj edin, 3–5 dəqiqə saxlayın və ilıq su ilə yaxşıca yuyun."
              }
            ],
            "tags": [
              "Dərin təmizləmə",
              "Bərpaya hazırlıq",
              "Silikonsuz"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Шаг 1 — глубокое очищение. Первый этап профессионального ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Повреждённая шерсть",
                  "Обильная линька",
                  "Спутанная шерсть",
                  "Перед профессиональным уходом",
                  "Тусклая шерсть"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Кудрявая",
                  "Длинная",
                  "Густая",
                  "Пушистая",
                  "Двойная шерсть",
                  "Подшёрсток"
                ]
              },
              {
                "title": "Рекомендуемые породы",
                "list": [
                  "Пудель",
                  "Бишон фризе",
                  "Лабрадудль",
                  "Кокапу",
                  "Померанский шпиц",
                  "Самоед",
                  "Мейн-кун",
                  "Персидская кошка",
                  "Британская длинношёрстная",
                  "Рэгдолл"
                ]
              },
              {
                "title": "Описание",
                "text": "Первый этап профессионального ухода. Шампунь глубоко очищает кожу и шерсть от загрязнений, кожного жира и остатков косметических средств. Подготавливает шерсть к восстановлению, улучшает проникновение активных компонентов последующих этапов и помогает поддерживать здоровье кожи."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой в пропорции 1:10. При сильном загрязнении или жирной шерсти рекомендуется разведение 1:5. Нанести на влажную шерсть, помассировать до образования пены, оставить на 3–5 минут и тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Глубокое очищение",
              "Подготовка к восстановлению",
              "Без силиконов"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Step 1 — deep cleansing. The first stage of professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Damaged coat",
                  "Heavy shedding",
                  "Tangled coat",
                  "Before professional grooming",
                  "Dull coat"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "Curly",
                  "Long",
                  "Thick",
                  "Fluffy",
                  "Double coat",
                  "Undercoat"
                ]
              },
              {
                "title": "Recommended breeds",
                "list": [
                  "Poodle",
                  "Bichon Frise",
                  "Labradoodle",
                  "Cockapoo",
                  "Pomeranian",
                  "Samoyed",
                  "Maine Coon",
                  "Persian cat",
                  "British Longhair",
                  "Ragdoll"
                ]
              },
              {
                "title": "Description",
                "text": "The first stage of professional care. The shampoo deeply cleanses the skin and coat of dirt, sebum and cosmetic residue. It prepares the coat for repair, improves the penetration of the active ingredients used in the following steps and helps maintain healthy skin."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water at a ratio of 1:10. For heavy soiling or greasy coats a 1:5 dilution is recommended. Apply to a wet coat, massage until it lathers, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Deep cleansing",
              "Preps for repair",
              "Silicone-free"
            ]
          }
        }
      },
      {
        "step": 2,
        "color": "#7d73c4",
        "img": "assets/products/tpl-pn-magicplex.webp",
        "short": {
          "az": "Tük strukturunu möhkəmləndirir, kövrəkliyi azaldır və zədələnmiş tükü bərpa edir.",
          "ru": "Укрепляет структуру волоса, уменьшает ломкость и восстанавливает повреждённую шерсть.",
          "en": "Strengthens the hair structure, reduces breakage and repairs the damaged coat."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-pn-magicplex.webp",
          "az": {
            "cat": "Pure Nature · STEP 2",
            "name": "Magic-Plex Shampoo",
            "desc": "Addım 2 — əsas bərpa. Tükü möhkəmləndirir və elastik edir.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Zədələnmiş tük",
                  "Kövrək tük",
                  "Qroominqdən sonra",
                  "Tükün açıqlaşdırılmasından sonra",
                  "Bol tük tökülməsi",
                  "Tükün dolaşması"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Qıvrım",
                  "Uzun",
                  "Sıx",
                  "Dalğalı",
                  "Tüklü"
                ]
              },
              {
                "title": "Tövsiyə olunan cinslər",
                "list": [
                  "Pudel",
                  "Bişon frize",
                  "Maltipu",
                  "Labradudl",
                  "Yorkşir teryeri",
                  "Pomeran şpisi",
                  "Şi-tsu",
                  "Meyn-kun",
                  "Fars pişiyi",
                  "Reqdoll"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Tükün bərpasının əsas mərhələsi. Şampun tük strukturunu möhkəmləndirməyə kömək edir, kövrəkliyi azaldır, zədələnmiş tükün bərpasına yardım edir və onu daha möhkəm və elastik edir. İntensiv nəmləndirmə sayəsində tük daha yumşaq olur, asan daranır, az dolaşır və sağlam parlaqlıq qazanır. Müntəzəm istifadə tükün kövrəkliyi və zədələnməsi ilə bağlı bol tökülməni azaltmağa kömək edir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Step 1-dən sonra şampunu su ilə 1:10 nisbətində qatışdırın. Ciddi zədələnmiş tük üçün 1:5 nisbətində istifadə tövsiyə olunur. Nəm tükə çəkin, masaj hərəkətləri ilə paylayın, 3–5 dəqiqə saxlayın və ilıq su ilə yaxşıca yuyun."
              }
            ],
            "tags": [
              "Tükün bərpası",
              "Möhkəmləndirmə",
              "Kövrəkliyi azaldır"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 2",
            "name": "Magic-Plex Shampoo",
            "desc": "Шаг 2 — основное восстановление. Укрепляет и делает шерсть эластичной.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Повреждённая шерсть",
                  "Ломкая шерсть",
                  "После груминга",
                  "После осветления шерсти",
                  "Обильная линька",
                  "Спутывание шерсти"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Кудрявая",
                  "Длинная",
                  "Густая",
                  "Волнистая",
                  "Пушистая"
                ]
              },
              {
                "title": "Рекомендуемые породы",
                "list": [
                  "Пудель",
                  "Бишон фризе",
                  "Мальтипу",
                  "Лабрадудль",
                  "Йоркширский терьер",
                  "Померанский шпиц",
                  "Ши-тцу",
                  "Мейн-кун",
                  "Персидская кошка",
                  "Рэгдолл"
                ]
              },
              {
                "title": "Описание",
                "text": "Основной этап восстановления шерсти. Шампунь помогает укрепить структуру волоса, уменьшает ломкость, способствует восстановлению повреждённой шерсти и делает её более прочной и эластичной. Благодаря интенсивному увлажнению шерсть становится мягче, легче расчёсывается, меньше спутывается и приобретает здоровый блеск. Регулярное применение помогает снизить обильную линьку, связанную с ломкостью и повреждением шерсти."
              },
              {
                "title": "Способ применения",
                "text": "После Step 1 разведите шампунь водой в пропорции 1:10. Для сильно повреждённой шерсти рекомендуется использовать разведение 1:5. Нанесите на влажную шерсть, распределите массажными движениями, оставьте на 3–5 минут и тщательно смойте тёплой водой."
              }
            ],
            "tags": [
              "Восстановление шерсти",
              "Укрепление волоса",
              "Меньше ломкости"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 2",
            "name": "Magic-Plex Shampoo",
            "desc": "Step 2 — core repair. Strengthens the coat and makes it more elastic.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Damaged coat",
                  "Brittle coat",
                  "After grooming",
                  "After coat lightening",
                  "Heavy shedding",
                  "Coat tangling"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "Curly",
                  "Long",
                  "Thick",
                  "Wavy",
                  "Fluffy"
                ]
              },
              {
                "title": "Recommended breeds",
                "list": [
                  "Poodle",
                  "Bichon Frise",
                  "Maltipoo",
                  "Labradoodle",
                  "Yorkshire Terrier",
                  "Pomeranian",
                  "Shih Tzu",
                  "Maine Coon",
                  "Persian cat",
                  "Ragdoll"
                ]
              },
              {
                "title": "Description",
                "text": "The core stage of coat repair. The shampoo helps strengthen the hair structure, reduces breakage, supports the recovery of damaged coats and makes them stronger and more elastic. Thanks to intensive moisturising the coat becomes softer, easier to brush, less prone to tangling and gains a healthy shine. Regular use helps reduce the heavy shedding linked to brittle and damaged hair."
              },
              {
                "title": "How to use",
                "text": "After Step 1, dilute the shampoo with water at a ratio of 1:10. For badly damaged coats a 1:5 dilution is recommended. Apply to a wet coat, work in with massaging movements, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Coat repair",
              "Hair strengthening",
              "Less breakage"
            ]
          }
        }
      },
      {
        "step": 3,
        "color": "#8b80c0",
        "img": "assets/products/tpl-pn-magicplex-cond.webp",
        "short": {
          "az": "Tükü intensiv qidalandırır və nəmləndirir, daranmanı asanlaşdırır və nəticəni möhkəmləndirir.",
          "ru": "Интенсивно питает и увлажняет шерсть, облегчает расчёсывание и закрепляет результат.",
          "en": "Intensively nourishes and moisturises the coat, eases brushing and locks in the result."
        },
        "item": {
          "emoji": "✨",
          "img": "assets/products/tpl-pn-magicplex-cond.webp",
          "az": {
            "cat": "Pure Nature · STEP 3",
            "name": "Magic-Plex Conditioner",
            "desc": "Addım 3 — yekun baxım. Nəticəni möhkəmləndirir və daranmanı asanlaşdırır.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Quru tük",
                  "Kövrək tük",
                  "Dolaşmış tük",
                  "Çətin daranma",
                  "Qıvrım tük",
                  "Bol tük tökülməsi"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Qıvrım",
                  "Uzun",
                  "Sıx",
                  "Dalğalı",
                  "Tüklü"
                ]
              },
              {
                "title": "Tövsiyə olunan cinslər",
                "list": [
                  "Pudel",
                  "Bişon frize",
                  "Maltipu",
                  "Kavapu",
                  "Pomeran şpisi",
                  "Şi-tsu",
                  "Əfqan tazısı",
                  "Meyn-kun",
                  "Fars pişiyi",
                  "Reqdoll"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Baxımın yekun mərhələsi. Kondisioner tükü intensiv qidalandırır və nəmləndirir, tük kutikulasını bağlayır və şampundan sonrakı nəticəni möhkəmləndirir. Tükü hamar, ipəkvari edir və gündəlik daranmanı əhəmiyyətli dərəcədə asanlaşdırır. Keçələşmənin qarşısını almağa kömək edir, tükün pırtlaşmasını və statik elektriki azaldır. Xüsusilə qıvrım, uzun və sıx tüklü heyvanlar üçün, həmçinin mövsümi tük tökülməsi dövründə tövsiyə olunur."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Kondisioneri su ilə 1:10 nisbətində qatışdırın. Çox quru, qıvrım və ya ciddi zədələnmiş tük üçün 1:5 nisbətində qatışdırmaq tövsiyə olunur. Şampundan sonra təmiz, nəm tükə çəkin, bütün uzunluq boyu bərabər paylayın, 3–5 dəqiqə saxlayın və ilıq su ilə yaxşıca yuyun."
              }
            ],
            "tags": [
              "Qidalanma və nəmlənmə",
              "Asan daranma",
              "Keçələşməyə qarşı"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 3",
            "name": "Magic-Plex Conditioner",
            "desc": "Шаг 3 — завершающий уход. Закрепляет результат и облегчает расчёсывание.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Сухая шерсть",
                  "Ломкая шерсть",
                  "Спутанная шерсть",
                  "Трудное расчёсывание",
                  "Кудрявая шерсть",
                  "Обильная линька"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Кудрявая",
                  "Длинная",
                  "Густая",
                  "Волнистая",
                  "Пушистая"
                ]
              },
              {
                "title": "Рекомендуемые породы",
                "list": [
                  "Пудель",
                  "Бишон фризе",
                  "Мальтипу",
                  "Кавапу",
                  "Померанский шпиц",
                  "Ши-тцу",
                  "Афганская борзая",
                  "Мейн-кун",
                  "Персидская кошка",
                  "Рэгдолл"
                ]
              },
              {
                "title": "Описание",
                "text": "Завершающий этап ухода. Кондиционер интенсивно питает и увлажняет шерсть, закрывает кутикулу волоса и закрепляет результат после шампуня. Делает шерсть гладкой, шелковистой и значительно облегчает ежедневное расчёсывание. Помогает предотвратить образование колтунов, уменьшает пушистость и статическое электричество. Особенно рекомендуется питомцам с кудрявой, длинной и густой шерстью, а также в период сезонной линьки."
              },
              {
                "title": "Способ применения",
                "text": "Развести кондиционер водой в пропорции 1:10. Для очень сухой, кудрявой или сильно повреждённой шерсти рекомендуется разведение 1:5. Нанести на чистую влажную шерсть после шампуня, равномерно распределить по всей длине, оставить на 3–5 минут и тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Питание и увлажнение",
              "Лёгкое расчёсывание",
              "Против колтунов"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 3",
            "name": "Magic-Plex Conditioner",
            "desc": "Step 3 — the finishing touch. Locks in the result and makes brushing easier.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Dry coat",
                  "Brittle coat",
                  "Tangled coat",
                  "Hard to brush",
                  "Curly coat",
                  "Heavy shedding"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "Curly",
                  "Long",
                  "Thick",
                  "Wavy",
                  "Fluffy"
                ]
              },
              {
                "title": "Recommended breeds",
                "list": [
                  "Poodle",
                  "Bichon Frise",
                  "Maltipoo",
                  "Cavapoo",
                  "Pomeranian",
                  "Shih Tzu",
                  "Afghan Hound",
                  "Maine Coon",
                  "Persian cat",
                  "Ragdoll"
                ]
              },
              {
                "title": "Description",
                "text": "The finishing stage of care. The conditioner intensively nourishes and moisturises the coat, seals the hair cuticle and locks in the result achieved with the shampoo. It leaves the coat smooth and silky and makes daily brushing far easier. It helps prevent matting and reduces frizz and static. Especially recommended for pets with curly, long and thick coats, as well as during seasonal shedding."
              },
              {
                "title": "How to use",
                "text": "Dilute the conditioner with water at a ratio of 1:10. For very dry, curly or badly damaged coats a 1:5 dilution is recommended. Apply to a clean, wet coat after shampooing, spread evenly along the full length, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Nourish & moisturise",
              "Easy brushing",
              "Anti-matting"
            ]
          }
        }
      }
    ]
  },
  {
    "tag": {
      "az": "Tauro Pro Line · White Coat",
      "ru": "Tauro Pro Line · White Coat",
      "en": "Tauro Pro Line · White Coat"
    },
    "title": {
      "az": "Ağ və açıq tüklər üçün sistem — Step 1–4",
      "ru": "Система для белой и светлой шерсти — Step 1–4",
      "en": "White & light coat system — Step 1–4"
    },
    "intro": {
      "az": "Ağ, krem və açıq tüklü it və pişiklər üçün xüsusi hazırlanmış peşəkar dördmərhələli baxım sistemi. Kompleks tükün təbii ağlığını qorumağa, sarımtıllığı azaltmağa, tündləşmiş nahiyələri açmağa, tükə parlaqlıq, işıltı və ipəkvarilik verməyə kömək edir. Ev heyvanları və sərgi heyvanları üçün ideal uyğundur.",
      "ru": "Профессиональная четырёхэтапная система ухода, разработанная специально для собак и кошек с белой, кремовой и светлой шерстью. Комплекс помогает сохранить естественную белизну шерсти, уменьшить желтизну, осветлить потемневшие участки, придать шерсти яркость, блеск и шелковистость. Идеально подходит для домашних питомцев и выставочных животных.",
      "en": "A professional four-step care system developed specifically for dogs and cats with white, cream and light coats. The complex helps preserve the coat's natural whiteness, reduce yellowness, brighten darkened areas and give the coat vibrancy, shine and silkiness. Ideally suited for both household pets and show animals."
    },
    "note": {
      "az": "Tauro Pro Line White Coat kompleksi zəngin ağ rəngi qorumaq, sarımtıllığı aradan qaldırmaq və peşəkar baxım üçün ağ, krem və açıq tüklü it və pişiklərə tövsiyə olunur. Xüsusilə sərgilərdə iştirak edən heyvanlara, həmçinin tükü zamanla parlaqlığını itirən heyvanlara uyğundur. Maksimum nəticə əldə etmək üçün kompleksin hər dörd mərhələsindən istifadə etmək tövsiyə olunur.",
      "ru": "Комплекс Tauro Pro Line White Coat рекомендуется собакам и кошкам с белой, кремовой и светлой шерстью для поддержания насыщенного белого цвета, устранения желтизны и профессионального ухода. Особенно подходит питомцам, участвующим в выставках, а также животным, у которых со временем шерсть теряет яркость. Для достижения максимального результата рекомендуется использовать все четыре этапа комплекса.",
      "en": "The Tauro Pro Line White Coat complex is recommended for dogs and cats with white, cream and light coats to maintain a rich white colour, eliminate yellowness and provide professional care. It is especially suited to pets that take part in shows, as well as animals whose coat loses its vibrancy over time. For the best possible result, it is recommended to use all four stages of the complex."
    },
    "badges": {
      "az": [
        "Silikonsuz",
        "SLS-siz",
        "Parabensiz",
        "Ağladıcı təsir"
      ],
      "ru": [
        "Без силиконов",
        "Без SLS",
        "Без парабенов",
        "Отбеливающий эффект"
      ],
      "en": [
        "Silicone-free",
        "SLS-free",
        "Paraben-free",
        "Whitening effect"
      ]
    },
    "steps": [
      {
        "step": 1,
        "color": "#8ba62f",
        "img": "assets/products/tpl-un-wc-deep.webp",
        "short": {
          "az": "Tükü dərindən təmizləyir — kir, piy və kosmetika qalıqlarını yuyub ağladıcı baxıma hazırlayır.",
          "ru": "Глубоко очищает шерсть — убирает грязь, жир и остатки косметики, готовит к отбеливающему уходу.",
          "en": "Deeply cleanses the coat — removes dirt, grease and product residue and preps it for whitening care."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-un-wc-deep.webp",
          "az": {
            "cat": "White Coat · STEP 1",
            "name": "Deep Clean Shampoo",
            "desc": "Addım 1 — dərin təmizlik. Peşəkar baxımın ilk mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Ağ tük",
                  "Açıq tük",
                  "Sarımtıllıq",
                  "Çirklənmiş tük",
                  "Ağladıcı baxıma hazırlıq"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Qısa",
                  "Uzun",
                  "Qıvrım",
                  "Sıx",
                  "Sərt"
                ]
              },
              {
                "title": "Tövsiyə olunan cinslər",
                "list": [
                  "Maltez",
                  "Bişon frize",
                  "Samoyed",
                  "Vest-haylend-ağ teryer",
                  "Ağ şpits",
                  "Ağ rəngli pudel",
                  "Ağ Britaniya pişikləri",
                  "Ağ Şotlandiya pişikləri",
                  "Fars pişikləri"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar baxımın ilk mərhələsi. Şampun tükü və dərini çirkdən, dəri piyindən və kosmetik vasitə qalıqlarından dərindən təmizləyir. Tükü ağladıcı baxıma hazırlayır və sonrakı mərhələlərin aktiv komponentlərinin maksimum effektiv işləməsinə imkan verir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu su ilə 1:10 nisbətində durulaşdırın. Güclü çirklənmə zamanı 1:5 nisbətində durulaşdırmaq tövsiyə olunur. Yaş tükə çəkin, 3–5 dəqiqə saxlayın və hərtərəfli yuyun."
              }
            ],
            "tags": [
              "Dərin təmizlik",
              "Hazırlıq mərhələsi",
              "Ağ tük"
            ]
          },
          "ru": {
            "cat": "White Coat · STEP 1",
            "name": "Deep Clean Shampoo",
            "desc": "Шаг 1 — глубокое очищение. Первый этап профессионального ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Белая шерсть",
                  "Светлая шерсть",
                  "Желтизна",
                  "Загрязнённая шерсть",
                  "Подготовка к отбеливающему уходу"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Короткая",
                  "Длинная",
                  "Кудрявая",
                  "Густая",
                  "Жёсткая"
                ]
              },
              {
                "title": "Рекомендуемые породы",
                "list": [
                  "Мальтезе",
                  "Бишон фризе",
                  "Самоед",
                  "Вест-хайленд-уайт-терьер",
                  "Белый шпиц",
                  "Пудель белого окраса",
                  "Белые британские кошки",
                  "Белые шотландские кошки",
                  "Персидские кошки"
                ]
              },
              {
                "title": "Описание",
                "text": "Первый этап профессионального ухода. Шампунь глубоко очищает шерсть и кожу от загрязнений, кожного жира и остатков косметических средств. Подготавливает шерсть к отбеливающему уходу, позволяя активным компонентам последующих этапов работать максимально эффективно."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой 1:10. При сильных загрязнениях рекомендуется использовать разведение 1:5. Нанести на влажную шерсть, оставить на 3–5 минут и тщательно смыть."
              }
            ],
            "tags": [
              "Глубокое очищение",
              "Подготовительный этап",
              "Белая шерсть"
            ]
          },
          "en": {
            "cat": "White Coat · STEP 1",
            "name": "Deep Clean Shampoo",
            "desc": "Step 1 — deep cleansing. The first stage of professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "White coat",
                  "Light coat",
                  "Yellowness",
                  "Soiled coat",
                  "Preparation for whitening care"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "Short",
                  "Long",
                  "Curly",
                  "Dense",
                  "Wiry"
                ]
              },
              {
                "title": "Recommended breeds",
                "list": [
                  "Maltese",
                  "Bichon Frisé",
                  "Samoyed",
                  "West Highland White Terrier",
                  "White Spitz",
                  "White Poodle",
                  "White British cats",
                  "White Scottish cats",
                  "Persian cats"
                ]
              },
              {
                "title": "Description",
                "text": "The first stage of professional care. The shampoo deeply cleanses the coat and skin of dirt, sebum and cosmetic product residue. It prepares the coat for whitening care, allowing the active ingredients of the following stages to work at maximum efficiency."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water 1:10. For heavy soiling, a 1:5 dilution is recommended. Apply to a wet coat, leave on for 3–5 minutes and rinse thoroughly."
              }
            ],
            "tags": [
              "Deep cleansing",
              "Preparatory stage",
              "White coat"
            ]
          }
        }
      },
      {
        "step": 2,
        "color": "#2f9ecb",
        "img": "assets/products/tpl-un-whitening.webp",
        "short": {
          "az": "Sarı çaları çıxarır və tükün ağlığını gücləndirir — rəngi daha parlaq və təmiz edir.",
          "ru": "Убирает жёлтый оттенок и усиливает белизну — делает цвет ярче и чище.",
          "en": "Removes the yellow tint and boosts whiteness — makes the colour brighter and cleaner."
        },
        "item": {
          "emoji": "✨",
          "img": "assets/products/tpl-un-whitening.webp",
          "az": {
            "cat": "White Coat · STEP 2",
            "name": "White Coat Whitening Shampoo",
            "desc": "Addım 2 — ağladıcı baxımın əsas mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Ağ tük",
                  "Krem tük",
                  "Sarımtıllıq",
                  "Solmuş tük",
                  "Göz yaşı izləri"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Sarı çaları aradan qaldırır",
                  "Tükün ağlığını gücləndirir",
                  "Rəngi daha parlaq edir",
                  "Tükün görünüşünü təzələyir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Ağladıcı baxımın əsas mərhələsi. Şampun tükün təbii ağlığını vurğulamağa kömək edir, sarımtıllığı azaldır və tükə parlaq, təmiz çalar qaytarır. Müntəzəm istifadə zamanı tük daha işıltılı, baxımlı olur və təbii parlaqlıq qazanır."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Step 1-dən sonra şampunu su ilə 1:10 nisbətində durulaşdırın. Kəskin sarımtıllıq zamanı 1:5 nisbətində durulaşdırmaq olar. Tükə bərabər paylayın, 3–5 dəqiqə saxlayın və isti su ilə hərtərəfli yuyun."
              }
            ],
            "tags": [
              "Ağladıcı təsir",
              "Sarımtıllığa qarşı",
              "Əsas mərhələ"
            ]
          },
          "ru": {
            "cat": "White Coat · STEP 2",
            "name": "White Coat Whitening Shampoo",
            "desc": "Шаг 2 — основной этап отбеливающего ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Белая шерсть",
                  "Кремовая шерсть",
                  "Желтизна",
                  "Потускневшая шерсть",
                  "Следы от слёз"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Убирает жёлтый оттенок",
                  "Усиливает белизну шерсти",
                  "Делает цвет ярче",
                  "Освежает внешний вид шерсти"
                ]
              },
              {
                "title": "Описание",
                "text": "Основной этап отбеливающего ухода. Шампунь помогает подчеркнуть естественную белизну шерсти, уменьшает желтизну и возвращает шерсти яркий, чистый оттенок. При регулярном использовании шерсть становится более сияющей, ухоженной и приобретает естественный блеск."
              },
              {
                "title": "Способ применения",
                "text": "После Step 1 развести шампунь водой 1:10. При выраженной желтизне допускается разведение 1:5. Равномерно распределить по шерсти, оставить на 3–5 минут и тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Отбеливающий эффект",
              "Против желтизны",
              "Основной этап"
            ]
          },
          "en": {
            "cat": "White Coat · STEP 2",
            "name": "White Coat Whitening Shampoo",
            "desc": "Step 2 — the main stage of whitening care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "White coat",
                  "Cream coat",
                  "Yellowness",
                  "Dull coat",
                  "Tear stains"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Removes the yellow tint",
                  "Enhances the coat's whiteness",
                  "Makes the colour brighter",
                  "Refreshes the coat's appearance"
                ]
              },
              {
                "title": "Description",
                "text": "The main stage of whitening care. The shampoo helps emphasise the coat's natural whiteness, reduces yellowness and restores a bright, clean tone to the coat. With regular use the coat becomes more radiant, well-groomed and gains a natural shine."
              },
              {
                "title": "How to use",
                "text": "After Step 1, dilute the shampoo with water 1:10. For pronounced yellowness a 1:5 dilution is acceptable. Distribute evenly over the coat, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Whitening effect",
              "Anti-yellowness",
              "Main stage"
            ]
          }
        }
      },
      {
        "step": 3,
        "color": "#1f9e78",
        "img": "assets/products/tpl-un-hydrate-sh.webp",
        "short": {
          "az": "Ağ rəngin parlaqlığını gücləndirir və əlavə işıltı verir — sərgi görünüşü üçün ideal.",
          "ru": "Усиливает яркость белого и придаёт дополнительный блеск — идеально для выставочного вида.",
          "en": "Boosts the brightness of white and adds extra shine — perfect for a show-ready look."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-un-hydrate-sh.webp",
          "az": {
            "cat": "White Coat · STEP 3",
            "name": "White Coat Shampoo",
            "desc": "Addım 3 — ağladıcı effekti gücləndirən mərhələ.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Sərgi heyvanları",
                  "Ağ tük",
                  "Açıq tük",
                  "Rəngin parlaqlığının qorunması"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Ağ rəngin parlaqlığını gücləndirir",
                  "Əlavə işıltı verir",
                  "Tükün görünüşünü təzələyir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Baxımın üçüncü mərhələsi ağladıcı effekti gücləndirir, ağ tükü daha parlaq və işıltılı edir. Zəngin ağ çaları qorumağa kömək edir, tükü yumşaq, hamar və vizual olaraq daha həcmli edir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu su ilə 1:10 nisbətində durulaşdırın. Step 2-dən sonra çəkin, 3–5 dəqiqə saxlayın və isti su ilə hərtərəfli yuyun."
              }
            ],
            "tags": [
              "Parlaqlıq",
              "İşıltı",
              "Sərgi baxımı"
            ]
          },
          "ru": {
            "cat": "White Coat · STEP 3",
            "name": "White Coat Shampoo",
            "desc": "Шаг 3 — этап, усиливающий эффект отбеливания.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Выставочные животные",
                  "Белая шерсть",
                  "Светлая шерсть",
                  "Поддержание яркости цвета"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Усиливает яркость белого цвета",
                  "Придаёт дополнительный блеск",
                  "Освежает внешний вид шерсти"
                ]
              },
              {
                "title": "Описание",
                "text": "Третий этап ухода усиливает эффект отбеливания, делает белую шерсть более яркой и сияющей. Помогает сохранить насыщенный белый оттенок, делает шерсть мягкой, гладкой и визуально более объёмной."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой 1:10. Нанести после Step 2, оставить на 3–5 минут и тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Яркость",
              "Блеск",
              "Выставочный уход"
            ]
          },
          "en": {
            "cat": "White Coat · STEP 3",
            "name": "White Coat Shampoo",
            "desc": "Step 3 — the stage that enhances the whitening effect.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Show animals",
                  "White coat",
                  "Light coat",
                  "Maintaining colour vibrancy"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Enhances the brightness of white",
                  "Adds extra shine",
                  "Refreshes the coat's appearance"
                ]
              },
              {
                "title": "Description",
                "text": "The third stage of care enhances the whitening effect, making the white coat brighter and more radiant. It helps preserve a rich white tone and makes the coat soft, smooth and visually fuller."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water 1:10. Apply after Step 2, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Brightness",
              "Shine",
              "Show care"
            ]
          }
        }
      },
      {
        "step": 4,
        "color": "#46a97e",
        "img": "assets/products/tpl-un-hydrate-mask.webp",
        "short": {
          "az": "Tükü dərindən qidalandırır və bərpa edir — ipəkvari edir və ağladıcı effekti möhkəmləndirir.",
          "ru": "Глубоко питает и восстанавливает шерсть — делает её шелковистой и закрепляет эффект отбеливания.",
          "en": "Deeply nourishes and restores the coat — makes it silky and locks in the whitening effect."
        },
        "item": {
          "emoji": "💧",
          "img": "assets/products/tpl-un-hydrate-mask.webp",
          "az": {
            "cat": "White Coat · STEP 4",
            "name": "White Coat Mask",
            "desc": "Addım 4 — peşəkar baxımın yekun mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Ağ tük",
                  "Quru tük",
                  "Zədələnmiş tük",
                  "Sərgiyə hazırlıq"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Xüsusilə uzuntüklü cinslərə tövsiyə olunur"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "İntensiv nəmləndirir",
                  "Tükü qidalandırır",
                  "İpəkvarilik verir",
                  "Daranmasını asanlaşdırır",
                  "Tük kutikulasını bağlayır",
                  "Ağladıcı effekti möhkəmləndirir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar baxımın yekun mərhələsi. Maska tükü dərindən qidalandırır, onun strukturunu bərpa edir, tükü hamar və ipəkvari edir. Əvvəlki mərhələlərin nəticəsini möhkəmləndirir, daranmanı asanlaşdırır və qar kimi ağ rəngi əhəmiyyətli dərəcədə daha uzun qorumağa kömək edir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Maskanı su ilə 1:10 nisbətində durulaşdırın. Çox quru və ya zədələnmiş tük üçün 1:5 nisbətində durulaşdırmaq tövsiyə olunur. Şampundan sonra təmiz, yaş tükə çəkin, bütün uzunluq boyunca bərabər paylayın, 5–10 dəqiqə saxlayın, sonra isti su ilə hərtərəfli yuyun."
              }
            ],
            "tags": [
              "Nəmləndirmə",
              "Bərpa",
              "Yekun mərhələ"
            ]
          },
          "ru": {
            "cat": "White Coat · STEP 4",
            "name": "White Coat Mask",
            "desc": "Шаг 4 — финальный этап профессионального ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Белая шерсть",
                  "Сухая шерсть",
                  "Повреждённая шерсть",
                  "Выставочная подготовка"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Особенно рекомендуется длинношёрстным породам"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Интенсивно увлажняет",
                  "Питает шерсть",
                  "Придаёт шелковистость",
                  "Облегчает расчёсывание",
                  "Закрывает кутикулу волоса",
                  "Закрепляет эффект отбеливания"
                ]
              },
              {
                "title": "Описание",
                "text": "Финальный этап профессионального ухода. Маска глубоко питает шерсть, восстанавливает её структуру, делает волос гладким и шелковистым. Закрепляет результат предыдущих этапов, облегчает расчёсывание и помогает сохранить белоснежный цвет шерсти значительно дольше."
              },
              {
                "title": "Способ применения",
                "text": "Развести маску водой 1:10. Для очень сухой или повреждённой шерсти рекомендуется использовать разведение 1:5. Нанести после шампуня на чистую влажную шерсть, равномерно распределить по всей длине, оставить на 5–10 минут, затем тщательно смыть тёплой водой."
              }
            ],
            "tags": [
              "Увлажнение",
              "Восстановление",
              "Финальный этап"
            ]
          },
          "en": {
            "cat": "White Coat · STEP 4",
            "name": "White Coat Mask",
            "desc": "Step 4 — the final stage of professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "White coat",
                  "Dry coat",
                  "Damaged coat",
                  "Show preparation"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "Especially recommended for long-haired breeds"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Intensely moisturises",
                  "Nourishes the coat",
                  "Adds silkiness",
                  "Makes combing easier",
                  "Seals the hair cuticle",
                  "Locks in the whitening effect"
                ]
              },
              {
                "title": "Description",
                "text": "The final stage of professional care. The mask deeply nourishes the coat, restores its structure and makes the hair smooth and silky. It locks in the results of the previous stages, makes combing easier and helps keep the snow-white colour significantly longer."
              },
              {
                "title": "How to use",
                "text": "Dilute the mask with water 1:10. For very dry or damaged coats, a 1:5 dilution is recommended. Apply after shampooing to a clean, wet coat, distribute evenly along the full length, leave on for 5–10 minutes, then rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Moisturising",
              "Restoration",
              "Final stage"
            ]
          }
        }
      }
    ]
  },
  {
    "tag": {
      "az": "Tauro Pro Line · Ultra Natural",
      "ru": "Tauro Pro Line · Ultra Natural",
      "en": "Tauro Pro Line · Ultra Natural"
    },
    "title": {
      "az": "Tükün bərpası və qidalanması — Repair & Nourish · Step 1·2·3",
      "ru": "Восстановление и питание шерсти — Repair & Nourish · Step 1·2·3",
      "en": "Repair & nourish system — Step 1·2·3"
    },
    "intro": {
      "az": "Quru, kövrək, zədələnmiş və solğun tükə malik it və pişiklər üçün hazırlanmış peşəkar üçmərhələli baxım sistemi. Kompleks dərini dərindən təmizləyir, tükün strukturunu bərpa edir, tükü intensiv qidalandırır və ona yumşaqlıq, elastiklik, sağlam parıltı və güc qaytarır. Xüsusilə uzun, sıx, buruq və zədələnmiş tükə malik, həmçinin qroominqdən, tez-tez çimizdirilmədən və mövsümi tük tökülməsindən sonra heyvanlar üçün tövsiyə olunur. Bütün cinsdən olan it və pişiklər üçün uyğundur.",
      "ru": "Профессиональная трехэтапная система ухода, разработанная для собак и кошек с сухой, ломкой, поврежденной и тусклой шерстью. Комплекс глубоко очищает кожу, восстанавливает структуру волоса, интенсивно питает шерсть и возвращает ей мягкость, эластичность, здоровый блеск и силу. Особенно рекомендуется питомцам с длинной, густой, кудрявой и поврежденной шерстью, а также после груминга, частого купания и сезонной линьки. Подходит для собак и кошек всех пород.",
      "en": "A professional three-step care system developed for dogs and cats with dry, brittle, damaged and dull coats. The complex deeply cleanses the skin, restores the hair structure, intensively nourishes the coat and returns its softness, elasticity, healthy shine and strength. It is especially recommended for pets with long, thick, curly and damaged coats, as well as after grooming, frequent bathing and seasonal shedding. Suitable for dogs and cats of all breeds."
    },
    "note": {
      "az": "Tauro Pro Line Repair & Nourish kompleksi zədələnmiş, quru, kövrək və solğun tükə malik heyvanlar üçün tövsiyə olunur. Xüsusilə uzun, sıx və buruq tükə malik, intensiv qidalanmaya, bərpaya və asan darama tələb edən it və pişiklər üçün effektivdir. Hər üç mərhələnin birlikdə istifadəsi tükə sağlam görünüş, yumşaqlıq, elastiklik və təbii parıltı qaytarmağa kömək edir.",
      "ru": "Комплекс Tauro Pro Line Repair & Nourish рекомендуется питомцам с поврежденной, сухой, ломкой и тусклой шерстью. Особенно эффективен для собак и кошек с длинной, густой и кудрявой шерстью, которым требуется интенсивное питание, восстановление и легкое расчесывание. Использование всех трех этапов помогает вернуть шерсти здоровый вид, мягкость, эластичность и естественный блеск.",
      "en": "The Tauro Pro Line Repair & Nourish complex is recommended for pets with damaged, dry, brittle and dull coats. It is especially effective for dogs and cats with long, thick and curly coats that need intensive nourishment, restoration and easy combing. Using all three steps helps restore the coat's healthy look, softness, elasticity and natural shine."
    },
    "badges": {
      "az": [
        "Silikonsuz",
        "SLS-siz",
        "Parabensiz",
        "Təbii tərkib"
      ],
      "ru": [
        "Без силиконов",
        "Без SLS",
        "Без парабенов",
        "Натуральный состав"
      ],
      "en": [
        "Silicone-free",
        "SLS-free",
        "Paraben-free",
        "Natural formula"
      ]
    },
    "steps": [
      {
        "step": 1,
        "color": "#c99a2a",
        "img": "assets/products/tpl-un-deep.webp",
        "short": {
          "az": "Yuyur və dərindən təmizləyir — kir, piy və kosmetika qalıqlarını aradan qaldırır.",
          "ru": "Моет и глубоко очищает — убирает грязь, жир и остатки косметики.",
          "en": "Washes and deeply cleanses — removes dirt, grease and cosmetic residue."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-un-deep.webp",
          "az": {
            "cat": "Repair & Nourish · STEP 1",
            "name": "Deep Clean Shampoo",
            "desc": "Addım 1 — dərin təmizləmə. Peşəkar baxımın ilk mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Zədələnmiş tük",
                  "Quru tük",
                  "Solğun tük",
                  "Bərpaya hazırlıq",
                  "Peşəkar kosmetikadan istifadədən əvvəl"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Qısa",
                  "Uzun",
                  "Buruq",
                  "Sərt"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Dərini və tükü dərindən təmizləyir",
                  "Artıq dəri piyini aradan qaldırır",
                  "Kosmetika qalıqlarını təmizləyir",
                  "Tükü bərpaya hazırlayır"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar baxımın ilk mərhələsi. Şampun tükü və dərini dərindən təmizləyir, çirkləri və kosmetik vasitələrin qalıqlarını aradan qaldırır. Tükü intensiv bərpaya hazırlayır və sonrakı baxım mərhələlərinin effektivliyini əhəmiyyətli dərəcədə artırır."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu 1:10 nisbətində su ilə qarışdırın. Güclü çirklənmələrdə 1:5 nisbətində qarışdırmağa icazə verilir. Nəm tükə çəkin, masaj hərəkətləri ilə köpükləndirin, 3–5 dəqiqə saxlayın və ilıq su ilə hərtərəfli yuyun."
              },
              {
                "title": "Fərqləndirici xüsusiyyət",
                "text": "Tərkibində dərinin təbii qoruyucu baryerini pozmadan tükü effektiv təmizləyən təbii təmizləyici komponentlər var. Bunun sayəsində sonrakı mərhələlərin aktiv komponentləri daha dərinə nüfuz edir və maksimum effektiv işləyir."
              }
            ],
            "tags": [
              "Dərin təmizləmə",
              "Hazırlıq",
              "Silikonsuz"
            ]
          },
          "ru": {
            "cat": "Repair & Nourish · STEP 1",
            "name": "Deep Clean Shampoo",
            "desc": "Шаг 1 — глубокое очищение. Первый этап профессионального ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Поврежденная шерсть",
                  "Сухая шерсть",
                  "Тусклая шерсть",
                  "Подготовка к восстановлению",
                  "Перед использованием профессиональной косметики"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Короткая",
                  "Длинная",
                  "Кудрявая",
                  "Жесткая"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Глубоко очищает кожу и шерсть",
                  "Удаляет избыток кожного жира",
                  "Удаляет остатки косметики",
                  "Подготавливает шерсть к восстановлению"
                ]
              },
              {
                "title": "Описание",
                "text": "Первый этап профессионального ухода. Шампунь глубоко очищает шерсть и кожу, удаляя загрязнения и остатки косметических средств. Подготавливает волос к интенсивному восстановлению и значительно повышает эффективность последующих этапов ухода."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой в пропорции 1:10. При сильных загрязнениях допускается разведение 1:5. Нанести на влажную шерсть, вспенить массажными движениями, оставить на 3–5 минут и тщательно смыть теплой водой."
              },
              {
                "title": "Изюминка",
                "text": "Содержит натуральные очищающие компоненты, которые эффективно очищают шерсть, не нарушая естественный защитный барьер кожи. Благодаря этому активные компоненты следующих этапов проникают глубже и работают максимально эффективно."
              }
            ],
            "tags": [
              "Глубокое очищение",
              "Подготовка",
              "Без силиконов"
            ]
          },
          "en": {
            "cat": "Repair & Nourish · STEP 1",
            "name": "Deep Clean Shampoo",
            "desc": "Step 1 — deep cleansing. The first stage of professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Damaged coat",
                  "Dry coat",
                  "Dull coat",
                  "Preparation for restoration",
                  "Before using professional cosmetics"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "Short",
                  "Long",
                  "Curly",
                  "Wiry"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Deeply cleanses the skin and coat",
                  "Removes excess skin oil",
                  "Removes cosmetic residue",
                  "Prepares the coat for restoration"
                ]
              },
              {
                "title": "Description",
                "text": "The first stage of professional care. The shampoo deeply cleanses the coat and skin, removing dirt and cosmetic product residue. It prepares the hair for intensive restoration and significantly increases the effectiveness of the following care stages."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water at a 1:10 ratio. For heavy soiling, a 1:5 dilution is acceptable. Apply to a damp coat, lather with massaging motions, leave on for 3–5 minutes and rinse thoroughly with warm water."
              },
              {
                "title": "What makes it special",
                "text": "It contains natural cleansing ingredients that effectively cleanse the coat without disrupting the skin's natural protective barrier. Thanks to this, the active ingredients of the following steps penetrate deeper and work as effectively as possible."
              }
            ],
            "tags": [
              "Deep cleansing",
              "Preparation",
              "Silicone-free"
            ]
          }
        }
      },
      {
        "step": 2,
        "color": "#d97d16",
        "img": "assets/products/tpl-un-repair-sh.webp",
        "short": {
          "az": "Bərpa edir və qidalandırır — tükü yumşaq, güclü və parlaq edir.",
          "ru": "Восстанавливает и питает — делает шерсть мягкой, крепкой и блестящей.",
          "en": "Repairs and nourishes — makes the coat soft, strong and shiny."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-un-repair-sh.webp",
          "az": {
            "cat": "Repair & Nourish · STEP 2",
            "name": "Repair & Nourish Shampoo",
            "desc": "Addım 2 — əsas bərpa mərhələsi. Tükü dərindən qidalandırır.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Zədələnmiş tük",
                  "Kövrək tük",
                  "Quru tük",
                  "Zəifləmiş tük",
                  "Qroominqdən sonra"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Xüsusilə uzun, sıx və buruq"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Tükün strukturunu bərpa edir",
                  "Kövrəkliyi azaldır",
                  "Tükü dərindən qidalandırır",
                  "Tükü daha yumşaq edir",
                  "Təbii parıltını qaytarır"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Əsas bərpa mərhələsi. Şampun tükü dərindən qidalandırır, zədələnmiş tük strukturunun bərpasına kömək edir, onun möhkəmliyini və elastikliyini artırır. İstifadədən sonra tük hamar, ipəkvari, itaətkar olur və daha asan daranır."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Step 1-dən sonra şampunu 1:10 nisbətində su ilə qarışdırın. Çox quru və zədələnmiş tük üçün 1:5 nisbətində qarışdırmaq tövsiyə olunur. Nəm tükə çəkin, 3–5 dəqiqə saxlayın və ilıq su ilə hərtərəfli yuyun."
              },
              {
                "title": "Fərqləndirici xüsusiyyət",
                "text": "Zədələnmiş tük strukturunu bərpa etməyə kömək edən, tükü içəridən dərindən qidalandıran və ona təbii güc, hamarlıq və sağlam parıltı qaytaran təbii yağlar və hidrolizlənmiş ipəklə zənginləşdirilmişdir."
              }
            ],
            "tags": [
              "Bərpa",
              "Qidalanma",
              "Parabensiz"
            ]
          },
          "ru": {
            "cat": "Repair & Nourish · STEP 2",
            "name": "Repair & Nourish Shampoo",
            "desc": "Шаг 2 — основной этап восстановления. Глубоко питает шерсть.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Поврежденная шерсть",
                  "Ломкая шерсть",
                  "Сухая шерсть",
                  "Ослабленная шерсть",
                  "После груминга"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Особенно длинная, густая и кудрявая"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Восстанавливает структуру волоса",
                  "Уменьшает ломкость",
                  "Глубоко питает шерсть",
                  "Делает шерсть более мягкой",
                  "Возвращает естественный блеск"
                ]
              },
              {
                "title": "Описание",
                "text": "Основной этап восстановления. Шампунь глубоко питает шерсть, способствует восстановлению поврежденной структуры волоса, повышает его прочность и эластичность. После применения шерсть становится гладкой, шелковистой, послушной и значительно легче расчесывается."
              },
              {
                "title": "Способ применения",
                "text": "После Step 1 разведите шампунь водой в пропорции 1:10. Для очень сухой и поврежденной шерсти рекомендуется использовать разведение 1:5. Нанести на влажную шерсть, оставить на 3–5 минут и тщательно смыть теплой водой."
              },
              {
                "title": "Изюминка",
                "text": "Обогащен натуральными маслами и гидролизованным шелком, которые помогают восстановить поврежденную структуру шерсти, глубоко питают волос изнутри и возвращают ему природную силу, гладкость и здоровый блеск."
              }
            ],
            "tags": [
              "Восстановление",
              "Питание",
              "Без парабенов"
            ]
          },
          "en": {
            "cat": "Repair & Nourish · STEP 2",
            "name": "Repair & Nourish Shampoo",
            "desc": "Step 2 — the main restoration stage. Deeply nourishes the coat.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Damaged coat",
                  "Brittle coat",
                  "Dry coat",
                  "Weakened coat",
                  "After grooming"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "Especially long, thick and curly"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Restores the hair structure",
                  "Reduces brittleness",
                  "Deeply nourishes the coat",
                  "Makes the coat softer",
                  "Restores the natural shine"
                ]
              },
              {
                "title": "Description",
                "text": "The main restoration stage. The shampoo deeply nourishes the coat, helps restore the damaged hair structure and increases its strength and elasticity. After use, the coat becomes smooth, silky, manageable and significantly easier to comb."
              },
              {
                "title": "How to use",
                "text": "After Step 1, dilute the shampoo with water at a 1:10 ratio. For very dry and damaged coats, a 1:5 dilution is recommended. Apply to a damp coat, leave on for 3–5 minutes and rinse thoroughly with warm water."
              },
              {
                "title": "What makes it special",
                "text": "Enriched with natural oils and hydrolyzed silk that help restore the damaged coat structure, deeply nourish the hair from within and return its natural strength, smoothness and healthy shine."
              }
            ],
            "tags": [
              "Restoration",
              "Nourishment",
              "Paraben-free"
            ]
          }
        }
      },
      {
        "step": 3,
        "color": "#db9a3f",
        "img": "assets/products/tpl-un-repair-mask.webp",
        "short": {
          "az": "İntensiv bərpa maskası — daramanı asanlaşdırır və dolaşmanın qarşısını alır.",
          "ru": "Маска интенсивного восстановления — облегчает расчесывание и предотвращает колтуны.",
          "en": "Intensive repair mask — eases combing and prevents matting."
        },
        "item": {
          "emoji": "💧",
          "img": "assets/products/tpl-un-repair-mask.webp",
          "az": {
            "cat": "Repair & Nourish · STEP 3",
            "name": "Repair & Nourish Mask",
            "desc": "Addım 3 — peşəkar baxımın yekun mərhələsi. Tükü intensiv bərpa edir.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Quru tük",
                  "Zədələnmiş tük",
                  "Kövrək tük",
                  "Qroominqdən sonra",
                  "Tez-tez çimizdirilmədən sonra"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Xüsusilə uzun tüklü, sıx tüklü və buruq cinslər üçün tövsiyə olunur"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Tükü intensiv bərpa edir",
                  "Dərindən qidalandırır",
                  "Daramanı asanlaşdırır",
                  "Dolaşmanın əmələ gəlməsinin qarşısını alır",
                  "İpəkvarilik və parıltı verir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar baxımın yekun mərhələsi. Maska zədələnmiş tükü dərindən bərpa edir, onu qidalandırıcı komponentlərlə doyurur və nəmi tükün içində saxlayır. Kutikulanı bağlayır, tükü daha hamar, yumşaq və parlaq edir, gündəlik daramanı asanlaşdırır."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Maskanı 1:10 nisbətində su ilə qarışdırın. Çox quru və ya güclü zədələnmiş tük üçün 1:5 nisbətində qarışdırmaq tövsiyə olunur. Şampundan sonra təmiz nəm tükə çəkin, bütün uzunluq boyunca bərabər paylayın, 5–10 dəqiqə saxlayın, sonra ilıq su ilə hərtərəfli yuyun."
              },
              {
                "title": "Fərqləndirici xüsusiyyət",
                "text": "Təbii komponentlərin və hidrolizlənmiş ipəyin yüksək konsentrasiyası hətta güclü zədələnmiş tükün belə intensiv bərpasını təmin edir. İstifadədən sonra tük nəzərəçarpacaq dərəcədə daha sıx, ipəkvari, parlaq və kövrəklikdən qorunmuş olur."
              }
            ],
            "tags": [
              "İntensiv bərpa",
              "Asan darama",
              "Təbii tərkib"
            ]
          },
          "ru": {
            "cat": "Repair & Nourish · STEP 3",
            "name": "Repair & Nourish Mask",
            "desc": "Шаг 3 — финальный этап профессионального ухода. Интенсивно восстанавливает шерсть.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Сухая шерсть",
                  "Поврежденная шерсть",
                  "Ломкая шерсть",
                  "После груминга",
                  "После частого купания"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Особенно рекомендуется длинношерстным, густошерстным и кудрявым породам"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Интенсивно восстанавливает шерсть",
                  "Глубоко питает",
                  "Облегчает расчесывание",
                  "Предотвращает образование колтунов",
                  "Придает шелковистость и блеск"
                ]
              },
              {
                "title": "Описание",
                "text": "Финальный этап профессионального ухода. Маска глубоко восстанавливает поврежденную шерсть, насыщает ее питательными компонентами и удерживает влагу внутри волоса. Закрывает кутикулу, делает шерсть более гладкой, мягкой и блестящей, облегчая ежедневное расчесывание."
              },
              {
                "title": "Способ применения",
                "text": "Развести маску водой в пропорции 1:10. Для очень сухой или сильно поврежденной шерсти рекомендуется использовать разведение 1:5. Нанести на чистую влажную шерсть после шампуня, равномерно распределить по всей длине, оставить на 5–10 минут, затем тщательно смыть теплой водой."
              },
              {
                "title": "Изюминка",
                "text": "Высокая концентрация натуральных компонентов и гидролизованного шелка обеспечивает интенсивное восстановление даже сильно поврежденной шерсти. После применения шерсть становится заметно более плотной, шелковистой, блестящей и защищенной от ломкости."
              }
            ],
            "tags": [
              "Интенсивное восстановление",
              "Легкое расчесывание",
              "Натуральный состав"
            ]
          },
          "en": {
            "cat": "Repair & Nourish · STEP 3",
            "name": "Repair & Nourish Mask",
            "desc": "Step 3 — the final stage of professional care. Intensively restores the coat.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Dry coat",
                  "Damaged coat",
                  "Brittle coat",
                  "After grooming",
                  "After frequent bathing"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "Especially recommended for long-haired, thick-coated and curly breeds"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Intensively restores the coat",
                  "Deeply nourishes",
                  "Eases combing",
                  "Prevents matting",
                  "Adds silkiness and shine"
                ]
              },
              {
                "title": "Description",
                "text": "The final stage of professional care. The mask deeply restores the damaged coat, saturates it with nourishing ingredients and holds moisture inside the hair. It seals the cuticle, makes the coat smoother, softer and shinier, and eases daily combing."
              },
              {
                "title": "How to use",
                "text": "Dilute the mask with water at a 1:10 ratio. For very dry or heavily damaged coats, a 1:5 dilution is recommended. Apply to a clean, damp coat after the shampoo, distribute evenly along the entire length, leave on for 5–10 minutes, then rinse thoroughly with warm water."
              },
              {
                "title": "What makes it special",
                "text": "A high concentration of natural ingredients and hydrolyzed silk delivers intensive restoration even for heavily damaged coats. After use, the coat becomes noticeably denser, silkier, shinier and protected against breakage."
              }
            ],
            "tags": [
              "Intensive restoration",
              "Easy combing",
              "Natural formula"
            ]
          }
        }
      }
    ]
  },
  {
    "tag": {
      "az": "Tauro Pro Line · Pure Nature",
      "ru": "Tauro Pro Line · Pure Nature",
      "en": "Tauro Pro Line · Pure Nature"
    },
    "title": {
      "az": "Tökülməyə qarşı və tük böyüməsi üçün — Fur Growth · Step 1·2·3",
      "ru": "Против выпадения и для роста шерсти — Fur Growth · Step 1·2·3",
      "en": "Anti-shedding & fur-growth system — Step 1·2·3"
    },
    "intro": {
      "az": "Alopesiya (tükün tökülməsi), həddindən artıq tük tökülməsi, kövrəklik və yavaş tük böyüməsindən əziyyət çəkən it və pişiklər üçün xüsusi hazırlanmış peşəkar üçmərhələli baxım sistemi. Kompleks tük follikullarını gücləndirməyə kömək edir, dərinin vəziyyətini yaxşılaşdırır, yeni tükün böyüməsini stimullaşdırır və tük örtüyünün sıxlığını və həcmini bərpa etməyə kömək edir. Bütün cinsdən olan it və pişiklər üçün uyğundur.",
      "ru": "Профессиональная трехэтапная система ухода, разработанная специально для собак и кошек, страдающих алопецией (облысением), чрезмерной линькой, ломкостью и замедленным ростом шерсти. Комплекс способствует укреплению волосяных фолликулов, улучшает состояние кожи, стимулирует рост новой шерсти и помогает восстановить густоту и объем шерстного покрова. Подходит для собак и кошек всех пород.",
      "en": "A professional three-step care system developed specifically for dogs and cats suffering from alopecia (baldness), excessive shedding, brittleness and slow fur growth. The system helps strengthen the hair follicles, improves skin condition, stimulates the growth of new fur and helps restore the density and volume of the coat. Suitable for dogs and cats of all breeds."
    },
    "note": {
      "az": "Fur Growth kompleksi alopesiyanın, ocaqlı keçəlliyin, həddindən artıq tük tökülməsinin, yavaş tük böyüməsinin ilk əlamətlərində, həmçinin xəstəliklərdən və qırxımdan sonra tövsiyə olunur. Ən yaxşı nəticəyə nail olmaq üçün kompleksin hər üç mərhələsindən istifadə etmək və çimizdirmələr arasında yuyulmayan kondisionerdən müntəzəm istifadə etmək tövsiyə olunur. Vacibdir: əgər tükün tökülməsi hər hansı bir xəstəliklə bağlıdırsa, mütləq baytar həkimi ilə məsləhətləşin.",
      "ru": "Комплекс Fur Growth рекомендуется при первых признаках алопеции, очагового облысения, чрезмерной линьки, замедленного роста шерсти и после заболеваний или стрижек. Для достижения наилучшего результата рекомендуется использовать все три этапа комплекса и регулярно применять несмываемый кондиционер между купаниями. Важно: если выпадение шерсти связано с заболеванием, обязательно проконсультируйтесь с ветеринаром.",
      "en": "The Fur Growth system is recommended at the first signs of alopecia, patchy baldness, excessive shedding, slow fur growth, and after illness or grooming. For the best result, we recommend using all three steps of the system and regularly applying the leave-in conditioner between baths. Important: if the shedding is related to an underlying illness, be sure to consult a veterinarian."
    },
    "badges": {
      "az": [
        "Silikonsuz",
        "SLS-siz",
        "Parabensiz",
        "Təbii tərkib"
      ],
      "ru": [
        "Без силиконов",
        "Без SLS",
        "Без парабенов",
        "Натуральный состав"
      ],
      "en": [
        "Silicone-free",
        "SLS-free",
        "Paraben-free",
        "Natural formula"
      ]
    },
    "steps": [
      {
        "step": 1,
        "color": "#5aa46a",
        "img": "assets/products/tpl-pn-detox.webp",
        "short": {
          "az": "Yuyur və dərini dərindən təmizləyir — tükü aktiv baxıma hazırlayır.",
          "ru": "Моет и глубоко очищает кожу — готовит шерсть к активному уходу.",
          "en": "Washes and deeply cleanses the skin — prepares the coat for active care."
        },
        "item": {
          "emoji": "🌿",
          "img": "assets/products/tpl-pn-detox.webp",
          "az": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Addım 1 — dərin təmizlik. Peşəkar baxımın ilk mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Alopesiya (keçəllik)",
                  "Tükün tökülməsi",
                  "Həddindən artıq tük tökülməsi",
                  "Zəifləmiş tük",
                  "Yağlı dəri",
                  "Bərpadan əvvəl dərinin hazırlanması"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Qısa",
                  "Uzun",
                  "Buruq",
                  "Sərt",
                  "Hamar",
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar baxımın ilk mərhələsi. Dərini və tükü çirkdən, dəri yağından və buynuzlaşmış hüceyrələrdən dərindən təmizləyir. Dərinin vəziyyətini yaxşılaşdırır, tük follikullarının təmizlənməsinə kömək edir və onları kompleksin aktiv komponentlərinin təsirinə hazırlayır. Sağlam dəri — güclü və sıx tükün böyüməsinin əsasıdır."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu su ilə 1:10 nisbətində durulaşdırın. Dəri çox yağlı olduqda və ya güclü çirklənmə zamanı 1:5 nisbətində durulaşdırmaq tövsiyə olunur. Nəm tükə çəkin, dərini 3–5 dəqiqə masaj edin və ilıq su ilə hərtərəfli yuyun."
              }
            ],
            "tags": [
              "Dərin təmizlik",
              "Detoks",
              "Baxıma hazırlıq"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Шаг 1 — глубокое очищение. Первый этап профессионального ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Алопеция (облысение)",
                  "Выпадение шерсти",
                  "Чрезмерная линька",
                  "Ослабленная шерсть",
                  "Жирная кожа",
                  "Подготовка кожи перед восстановлением"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Короткая",
                  "Длинная",
                  "Кудрявая",
                  "Жесткая",
                  "Гладкая",
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Описание",
                "text": "Первый этап профессионального ухода. Глубоко очищает кожу и шерсть от загрязнений, кожного жира и ороговевших клеток. Улучшает состояние кожи, способствует очищению волосяных фолликулов и подготавливает их к воздействию активных компонентов комплекса. Здоровая кожа — основа роста крепкой и густой шерсти."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой в пропорции 1:10. При сильной жирности кожи или выраженных загрязнениях рекомендуется использовать разведение 1:5. Нанести на влажную шерсть, помассировать кожу 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Глубокое очищение",
              "Детокс",
              "Подготовка к уходу"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 1",
            "name": "Herbal Detox Shampoo",
            "desc": "Step 1 — deep cleansing. The first stage of professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Alopecia (baldness)",
                  "Fur loss",
                  "Excessive shedding",
                  "Weakened coat",
                  "Oily skin",
                  "Preparing the skin before restoration"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "Short",
                  "Long",
                  "Curly",
                  "Wiry",
                  "Smooth",
                  "All coat types"
                ]
              },
              {
                "title": "Description",
                "text": "The first stage of professional care. Deeply cleanses the skin and coat from dirt, sebum and dead skin cells. Improves skin condition, helps cleanse the hair follicles and prepares them for the action of the system's active ingredients. Healthy skin is the foundation for the growth of strong, dense fur."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water at a 1:10 ratio. For very oily skin or heavy soiling, a 1:5 dilution is recommended. Apply to wet fur, massage the skin for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Deep cleansing",
              "Detox",
              "Care prep"
            ]
          }
        }
      },
      {
        "step": 2,
        "color": "#cf7d74",
        "img": "assets/products/tpl-pn-furgrowth.webp",
        "short": {
          "az": "Yeni tükün böyüməsini stimullaşdırır və follikulları gücləndirir.",
          "ru": "Стимулирует рост новой шерсти и укрепляет волосяные фолликулы.",
          "en": "Stimulates the growth of new fur and strengthens the hair follicles."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-pn-furgrowth.webp",
          "az": {
            "cat": "Pure Nature · STEP 2",
            "name": "Fur Growth Shampoo",
            "desc": "Addım 2 — tük böyüməsi. Kompleksin əsas mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Alopesiya (keçəllik)",
                  "Ocaqlı tük tökülməsi",
                  "Mövsümi tük tökülməsi",
                  "Yavaş tük böyüməsi",
                  "Qırxımdan sonra bərpa",
                  "Xəstəliklərdən sonra tükün bərpası"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Bütün rənglər"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Kompleksin əsas mərhələsi. Şampun yeni tükün böyüməsini stimullaşdırmaq və tük follikullarını gücləndirmək üçün hazırlanmışdır. Tükün tökülməsini azaltmağa kömək edir, tükü bütün uzunluğu boyunca gücləndirir, onun quruluşunu yaxşılaşdırır və daha sıx, güclü və sağlam tükün formalaşmasına kömək edir. Müntəzəm istifadə xüsusilə alopesiyası, seyrək tükü və intensiv tük tökülməsi olan heyvanlara tövsiyə olunur."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Step 1-dən sonra şampunu su ilə 1:10 nisbətində durulaşdırın. Aydın alopesiya və zədələnmiş tük zamanı 1:5 nisbətində durulaşdırmaq tövsiyə olunur. Nəm tükə çəkin, dəriyə yaxşıca yayın, 3–5 dəqiqə saxlayın və hərtərəfli yuyun."
              }
            ],
            "tags": [
              "Tük böyüməsi",
              "Follikulların gücləndirilməsi",
              "Tökülməyə qarşı"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 2",
            "name": "Fur Growth Shampoo",
            "desc": "Шаг 2 — рост шерсти. Основной этап комплекса.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Алопеция (облысение)",
                  "Очаговое выпадение шерсти",
                  "Сезонная линька",
                  "Медленный рост шерсти",
                  "Восстановление после стрижки",
                  "Восстановление шерсти после заболеваний"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Все окрасы"
                ]
              },
              {
                "title": "Описание",
                "text": "Основной этап комплекса. Шампунь разработан для стимуляции роста новой шерсти и укрепления волосяных фолликулов. Помогает уменьшить выпадение шерсти, укрепляет волос по всей длине, улучшает его структуру и способствует формированию более густой, крепкой и здоровой шерсти. Регулярное использование особенно рекомендуется питомцам с алопецией, редкой шерстью и интенсивной линькой."
              },
              {
                "title": "Способ применения",
                "text": "После использования Step 1 разведите шампунь водой в пропорции 1:10. При выраженной алопеции и поврежденной шерсти рекомендуется использовать разведение 1:5. Нанести на влажную шерсть, тщательно распределить по коже, оставить на 3–5 минут и тщательно смыть."
              }
            ],
            "tags": [
              "Рост шерсти",
              "Укрепление фолликулов",
              "Против выпадения"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 2",
            "name": "Fur Growth Shampoo",
            "desc": "Step 2 — fur growth. The core stage of the system.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Alopecia (baldness)",
                  "Patchy fur loss",
                  "Seasonal shedding",
                  "Slow fur growth",
                  "Recovery after grooming",
                  "Coat recovery after illness"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "All colors"
                ]
              },
              {
                "title": "Description",
                "text": "The core stage of the system. The shampoo is designed to stimulate the growth of new fur and strengthen the hair follicles. It helps reduce shedding, strengthens the hair along its entire length, improves its structure and promotes the formation of denser, stronger and healthier fur. Regular use is especially recommended for pets with alopecia, sparse fur and intensive shedding."
              },
              {
                "title": "How to use",
                "text": "After using Step 1, dilute the shampoo with water at a 1:10 ratio. For pronounced alopecia and damaged fur, a 1:5 dilution is recommended. Apply to wet fur, distribute thoroughly over the skin, leave on for 3–5 minutes and rinse thoroughly."
              }
            ],
            "tags": [
              "Fur growth",
              "Follicle strengthening",
              "Anti-shedding"
            ]
          }
        }
      },
      {
        "step": 3,
        "color": "#cf837a",
        "img": "assets/products/tpl-pn-furgrowth-cond.webp",
        "short": {
          "az": "Tükü qidalandırır və nəmləndirir, kövrəkliyi azaldır.",
          "ru": "Питает и увлажняет шерсть, уменьшает ломкость.",
          "en": "Nourishes and moisturizes the coat, reduces brittleness."
        },
        "item": {
          "emoji": "✨",
          "img": "assets/products/tpl-pn-furgrowth-cond.webp",
          "az": {
            "cat": "Pure Nature · STEP 3",
            "name": "Fur Growth Conditioner",
            "desc": "Addım 3 — qidalandırma və bərpa. Baxımın yekun mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Alopesiya",
                  "Tükün tökülməsi",
                  "Kövrək tük",
                  "Quru tük",
                  "Zədələnmiş tük"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Baxımın yekun mərhələsi. Kondisioner tükü intensiv qidalandırır və nəmləndirir, onun quruluşunu gücləndirir, tükü daha elastik edir və kövrəkliyi azaldır. Tükün kutikulasını bağlayır, daranmasını asanlaşdırır və tükün sağlam görünüşünü qorumağa kömək edir. Müntəzəm istifadə kövrəklikdən yaranan tük tökülməsini azaltmağa kömək edir və tük örtüyünün bərpasını dəstəkləyir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Kondisioneri su ilə 1:10 nisbətində durulaşdırın. Çox quru və ya zədələnmiş tük üçün 1:5 nisbətində istifadəyə icazə verilir. Şampundan sonra təmiz nəm tükə çəkin, 3–5 dəqiqə saxlayın və ilıq su ilə hərtərəfli yuyun."
              }
            ],
            "tags": [
              "Qidalandırma",
              "Nəmləndirmə",
              "Kövrəkliyə qarşı"
            ]
          },
          "ru": {
            "cat": "Pure Nature · STEP 3",
            "name": "Fur Growth Conditioner",
            "desc": "Шаг 3 — питание и восстановление. Завершающий этап ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Алопеция",
                  "Выпадение шерсти",
                  "Ломкая шерсть",
                  "Сухая шерсть",
                  "Поврежденная шерсть"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Описание",
                "text": "Завершающий этап ухода. Кондиционер интенсивно питает и увлажняет шерсть, укрепляет ее структуру, делает волос более эластичным и уменьшает ломкость. Закрывает кутикулу волоса, облегчает расчесывание и помогает сохранить здоровый внешний вид шерсти. Регулярное применение способствует снижению выпадения шерсти, вызванного ломкостью, и поддерживает восстановление шерстного покрова."
              },
              {
                "title": "Способ применения",
                "text": "Развести кондиционер водой в пропорции 1:10. Для очень сухой или поврежденной шерсти допускается использование в пропорции 1:5. Нанести на чистую влажную шерсть после шампуня, оставить на 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Питание",
              "Увлажнение",
              "Против ломкости"
            ]
          },
          "en": {
            "cat": "Pure Nature · STEP 3",
            "name": "Fur Growth Conditioner",
            "desc": "Step 3 — nourishment and restoration. The final stage of care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Alopecia",
                  "Fur loss",
                  "Brittle coat",
                  "Dry coat",
                  "Damaged coat"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types"
                ]
              },
              {
                "title": "Description",
                "text": "The final stage of care. The conditioner intensively nourishes and moisturizes the coat, strengthens its structure, makes the hair more elastic and reduces brittleness. It closes the hair cuticle, makes combing easier and helps maintain the healthy appearance of the coat. Regular use helps reduce shedding caused by brittleness and supports coat restoration."
              },
              {
                "title": "How to use",
                "text": "Dilute the conditioner with water at a 1:10 ratio. For very dry or damaged fur, a 1:5 dilution is allowed. Apply to clean, wet fur after shampooing, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Nourishment",
              "Moisturizing",
              "Anti-brittleness"
            ]
          }
        }
      },
      {
        "step": "+",
        "color": "#d68f86",
        "img": "assets/products/tpl-pn-furgrowth-leavein.webp",
        "short": {
          "az": "Çimizdirmələr arasında qidalandırır və qoruyur — yuyulmur.",
          "ru": "Питает и защищает между купаниями — не смывается.",
          "en": "Nourishes and protects between baths — leave-in, no rinsing."
        },
        "item": {
          "emoji": "💦",
          "img": "assets/products/tpl-pn-furgrowth-leavein.webp",
          "az": {
            "cat": "Pure Nature · Leave-in",
            "name": "Fur Growth Leave-in Conditioner",
            "desc": "Əlavə addım — gündəlik baxım. Yuyulmayan kondisioner.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Alopesiya",
                  "Tükün tökülməsi",
                  "Quru tük",
                  "Zəifləmiş tük",
                  "Çimizdirmələr arasında gündəlik baxım"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Yuyulmayan kondisioner tükə əlavə qidalanma və nəmlənmə təmin edir, tükü kövrəklikdən qorumağa kömək edir, daranmasını asanlaşdırır və dolaşmanı azaldır. Çimizdirmələr arasında tükü yaxşı vəziyyətdə saxlayır və Fur Growth kompleksinin təsirini gücləndirir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Az miqdarda vasitəni təmiz nəm və ya quru tükə 20–30 sm məsafədən püskürdün. Əl və ya daraqla tükə bərabər yayın. Yumayın. Gündəlik istifadə üçün uyğundur."
              }
            ],
            "tags": [
              "Yuyulmayan",
              "Gündəlik baxım",
              "Qidalandırma"
            ]
          },
          "ru": {
            "cat": "Pure Nature · Leave-in",
            "name": "Fur Growth Leave-in Conditioner",
            "desc": "Дополнительный шаг — ежедневный уход. Несмываемый кондиционер.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Алопеция",
                  "Выпадение шерсти",
                  "Сухая шерсть",
                  "Ослабленная шерсть",
                  "Ежедневный уход между купаниями"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Описание",
                "text": "Несмываемый кондиционер обеспечивает дополнительное питание и увлажнение шерсти, помогает защитить волос от ломкости, облегчает расчесывание и уменьшает спутывание. Поддерживает шерсть в хорошем состоянии между купаниями и усиливает действие комплекса Fur Growth."
              },
              {
                "title": "Способ применения",
                "text": "Распылить небольшое количество средства на чистую влажную или сухую шерсть с расстояния 20–30 см. Равномерно распределить по шерсти руками или расческой. Не смывать. Подходит для ежедневного применения."
              }
            ],
            "tags": [
              "Несмываемый",
              "Ежедневный уход",
              "Питание"
            ]
          },
          "en": {
            "cat": "Pure Nature · Leave-in",
            "name": "Fur Growth Leave-in Conditioner",
            "desc": "Extra step — daily care. Leave-in conditioner, no rinsing.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Alopecia",
                  "Fur loss",
                  "Dry coat",
                  "Weakened coat",
                  "Daily care between baths"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types"
                ]
              },
              {
                "title": "Description",
                "text": "The leave-in conditioner provides extra nourishment and moisture for the coat, helps protect the hair from brittleness, makes combing easier and reduces tangling. It keeps the coat in good condition between baths and enhances the effect of the Fur Growth system."
              },
              {
                "title": "How to use",
                "text": "Spray a small amount of the product onto clean, wet or dry fur from a distance of 20–30 cm. Distribute evenly over the coat with your hands or a comb. Do not rinse. Suitable for daily use."
              }
            ],
            "tags": [
              "Leave-in",
              "Daily care",
              "Nourishment"
            ]
          }
        },
        "label": {
          "az": "Əlavə qulluq",
          "ru": "Доп. уход",
          "en": "Add-on"
        }
      }
    ]
  },
  {
    "tag": {
      "az": "Tauro Pro Line · Derma Care",
      "ru": "Tauro Pro Line · Derma Care",
      "en": "Tauro Pro Line · Derma Care"
    },
    "title": {
      "az": "Həssas və problemli dəri üçün qulluq — Derma Care · Step 1–3",
      "ru": "Уход за чувствительной и проблемной кожей — Derma Care · Step 1–3",
      "en": "Sensitive & problem-skin care — Derma Care · Step 1–3"
    },
    "intro": {
      "az": "Həssas, quru, qıcıqlanmış və allergik reaksiyalara meylli dəriyə malik it və pişiklər üçün xüsusi olaraq hazırlanmış peşəkar qulluq sistemidir. Kompleks qaşınmanı, qızartını, soyulmanı və quruluğu azaltmağa kömək edir, dərinin təbii qoruyucu bariyerini dəstəkləyir və sağlam tükün bərpasına şərait yaradır. Xüsusilə həssas dəriyə, mövsümi qıcıqlanmalara və dermatoloji problemlərə malik, həmçinin intensiv qrumingdən sonrakı ev heyvanları üçün tövsiyə olunur.",
      "ru": "Профессиональная система ухода, разработанная специально для собак и кошек с чувствительной, сухой, раздраженной и склонной к аллергическим реакциям кожей. Комплекс помогает уменьшить зуд, покраснение, шелушение и сухость, поддерживает естественный защитный барьер кожи и способствует восстановлению здоровой шерсти. Особенно рекомендуется питомцам с чувствительной кожей, сезонными раздражениями, дерматологическими проблемами и после интенсивного груминга.",
      "en": "A professional care system developed specifically for dogs and cats with sensitive, dry, irritated and allergy-prone skin. The complex helps reduce itching, redness, flaking and dryness, supports the skin's natural protective barrier and promotes the restoration of healthy coat. It is especially recommended for pets with sensitive skin, seasonal irritations, dermatological issues and after intensive grooming."
    },
    "note": {
      "az": "Tauro Pro Line Derma Care kompleksi həssas, quru və qıcıqlanmağa meylli dəriyə malik it və pişiklər üçün tövsiyə olunur. Maksimum nəticə əldə etmək üçün bütün sistemdən istifadə edin: təmizləyici şampun, əsas şampun, kondisioner, yuyulmayan kondisioner və lokal qulluq üçün krem. Kompleks qulluq dərinin sağlamlığını qorumağa kömək edir, qaşınmanı və qıcıqlanmanı azaldır, tükün daranmasını asanlaşdırır və tükü yumşaq, baxımlı və sağlam edir.",
      "ru": "Комплекс Tauro Pro Line Derma Care рекомендуется собакам и кошкам с чувствительной, сухой и склонной к раздражению кожей. Для достижения максимального результата используйте всю систему: очищающий шампунь, основной шампунь, кондиционер, несмываемый кондиционер и крем для локального ухода. Комплексный уход помогает поддерживать здоровье кожи, уменьшает зуд и раздражение, облегчает расчесывание и делает шерсть мягкой, ухоженной и здоровой.",
      "en": "The Tauro Pro Line Derma Care complex is recommended for dogs and cats with sensitive, dry and irritation-prone skin. For the best results, use the entire system: cleansing shampoo, main shampoo, conditioner, leave-in conditioner and cream for local care. Complete care helps maintain skin health, reduces itching and irritation, makes combing easier and leaves the coat soft, well-groomed and healthy."
    },
    "badges": {
      "az": [
        "Silikonsuz",
        "SLS-siz",
        "Parabensiz",
        "Təbii tərkib"
      ],
      "ru": [
        "Без силиконов",
        "Без SLS",
        "Без парабенов",
        "Натуральный состав"
      ],
      "en": [
        "Silicone-free",
        "SLS-free",
        "Paraben-free",
        "Natural formula"
      ]
    },
    "steps": [
      {
        "step": 1,
        "color": "#a9793f",
        "img": "assets/products/tpl-dc-deep.webp",
        "short": {
          "az": "Dərini dərindən təmizləyir — çirki və artıq piyi çıxarır və müalicəvi qulluğa hazırlayır.",
          "ru": "Глубоко очищает кожу — удаляет грязь и избыток жира, готовит к лечебному уходу.",
          "en": "Deeply cleanses the skin — removes dirt and excess oil and preps it for treatment care."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-dc-deep.webp",
          "az": {
            "cat": "Derma Care · STEP 1",
            "name": "Amber Scrub Shampoo",
            "desc": "Step 1 — dərin təmizlənmə. Peşəkar qulluğun ilk mərhələsi.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Həssas dəri",
                  "Qaşınma",
                  "Qızartı",
                  "Soyulma",
                  "Allergik reaksiyalar",
                  "Yağlı dəri",
                  "Müalicəvi qulluğa hazırlıq"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri",
                  "Qısa",
                  "Uzun",
                  "Qıvrım",
                  "Hamar"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Dərini təmizləyir",
                  "Artıq dəri piyini çıxarır",
                  "Çirkləri təmizləyir",
                  "Dərini sonrakı qulluğa hazırlayır"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Peşəkar qulluğun ilk mərhələsi. Şampun dərini və tükü dərindən təmizləyir, çirki və artıq dəri piyini dərinin təbii qoruyucu bariyerini pozmadan çıxarır. Dərini sonrakı mərhələlərin aktiv komponentlərinin təsirinə hazırlayır və daha effektiv qulluğa şərait yaradır."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Şampunu su ilə 1:10 nisbətində durulaşdırın. Güclü çirklənmələr zamanı 1:5 nisbətində durulaşdırmaq olar. Nəm tükə çəkin, dərini yumşaq masaj edin, 3–5 dəqiqə saxlayın və ilıq su ilə yaxşıca yuyun."
              }
            ],
            "tags": [
              "Dərin təmizlənmə",
              "Həssas dəri",
              "Step 1"
            ]
          },
          "ru": {
            "cat": "Derma Care · STEP 1",
            "name": "Amber Scrub Shampoo",
            "desc": "Шаг 1 — глубокое очищение. Первый этап профессионального ухода.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Чувствительная кожа",
                  "Зуд",
                  "Покраснение",
                  "Шелушение",
                  "Аллергические реакции",
                  "Жирная кожа",
                  "Подготовка к лечебному уходу"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти",
                  "Короткая",
                  "Длинная",
                  "Кудрявая",
                  "Гладкая"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Очищает кожу",
                  "Удаляет избыток кожного жира",
                  "Удаляет загрязнения",
                  "Подготавливает кожу к дальнейшему уходу"
                ]
              },
              {
                "title": "Описание",
                "text": "Первый этап профессионального ухода. Шампунь глубоко очищает кожу и шерсть, удаляет загрязнения и излишки кожного жира, не нарушая естественный защитный барьер кожи. Подготавливает кожу к действию активных компонентов последующих этапов и способствует более эффективному уходу."
              },
              {
                "title": "Способ применения",
                "text": "Развести шампунь водой в пропорции 1:10. При сильных загрязнениях допускается разведение 1:5. Нанести на влажную шерсть, мягко помассировать кожу, оставить на 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Глубокое очищение",
              "Чувствительная кожа",
              "Шаг 1"
            ]
          },
          "en": {
            "cat": "Derma Care · STEP 1",
            "name": "Amber Scrub Shampoo",
            "desc": "Step 1 — deep cleansing. The first stage of professional care.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Sensitive skin",
                  "Itching",
                  "Redness",
                  "Flaking",
                  "Allergic reactions",
                  "Oily skin",
                  "Preparation for treatment care"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types",
                  "Short",
                  "Long",
                  "Curly",
                  "Smooth"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Cleanses the skin",
                  "Removes excess skin oil",
                  "Removes dirt",
                  "Prepares the skin for further care"
                ]
              },
              {
                "title": "Description",
                "text": "The first stage of professional care. The shampoo deeply cleanses the skin and coat, removing dirt and excess skin oil without disrupting the skin's natural protective barrier. It prepares the skin for the active ingredients of the following stages and promotes more effective care."
              },
              {
                "title": "How to use",
                "text": "Dilute the shampoo with water at a ratio of 1:10. For heavy soiling, a 1:5 dilution is allowed. Apply to wet coat, gently massage the skin, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Deep cleansing",
              "Sensitive skin",
              "Step 1"
            ]
          }
        }
      },
      {
        "step": 2,
        "color": "#9c6b3a",
        "img": "assets/products/tpl-dc-intensive.webp",
        "short": {
          "az": "Qıcıqlanmış dərini sakitləşdirir — qaşınmanı azaldır və dəri bariyerini bərpa edir.",
          "ru": "Успокаивает раздраженную кожу — уменьшает зуд и восстанавливает кожный барьер.",
          "en": "Soothes irritated skin — reduces itching and restores the skin barrier."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-dc-intensive.webp",
          "az": {
            "cat": "Derma Care · STEP 2",
            "name": "Dry & Itchy Skin Relief Shampoo",
            "desc": "Step 2 — əsas qulluq. Həssas dərini sakitləşdirir və bariyeri bərpa edir.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Həssas dəri",
                  "Qaşınma",
                  "Qızartı",
                  "Qıcıqlanma",
                  "Quru dəri",
                  "Allergik reaksiyalar"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Qaşınmanı azaldır",
                  "Dərini sakitləşdirir",
                  "Qıcıqlanmanı azaldır",
                  "İntensiv nəmləndirir",
                  "Dəri bariyerinin bərpasını dəstəkləyir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Qulluğun əsas mərhələsi. Şampun qıcıqlanmış dərini sakitləşdirməyə kömək edir, qaşınma və quruluq hissini azaldır, təbii qoruyucu bariyerin bərpasına şərait yaradır və dərinin, tükün sağlamlığını dəstəkləyir. Xüsusilə həssas dəriyə və qıcıqlanmağa meylli ev heyvanları üçün tövsiyə olunur."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Step 1-dən istifadə etdikdən sonra şampunu su ilə 1:10 nisbətində durulaşdırın. Çox həssas dəri üçün 1:15 nisbətində durulaşdırma tövsiyə olunur. Nəm tükə çəkin, 3–5 dəqiqə saxlayın və ilıq su ilə yaxşıca yuyun."
              }
            ],
            "tags": [
              "Sakitləşdirir",
              "Həssas dəri",
              "Step 2"
            ]
          },
          "ru": {
            "cat": "Derma Care · STEP 2",
            "name": "Dry & Itchy Skin Relief Shampoo",
            "desc": "Шаг 2 — основной уход. Успокаивает чувствительную кожу и восстанавливает барьер.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Чувствительная кожа",
                  "Зуд",
                  "Покраснение",
                  "Раздражение",
                  "Сухая кожа",
                  "Аллергические реакции"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Уменьшает зуд",
                  "Успокаивает кожу",
                  "Снижает раздражение",
                  "Интенсивно увлажняет",
                  "Поддерживает восстановление кожного барьера"
                ]
              },
              {
                "title": "Описание",
                "text": "Основной этап ухода. Шампунь помогает успокоить раздраженную кожу, уменьшает ощущение зуда и сухости, способствует восстановлению естественного защитного барьера и поддерживает здоровье кожи и шерсти. Особенно рекомендуется питомцам с чувствительной кожей и склонностью к раздражениям."
              },
              {
                "title": "Способ применения",
                "text": "После использования Step 1 развести шампунь водой в пропорции 1:10. Для очень чувствительной кожи рекомендуется разведение 1:15. Нанести на влажную шерсть, оставить на 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Успокаивает",
              "Чувствительная кожа",
              "Шаг 2"
            ]
          },
          "en": {
            "cat": "Derma Care · STEP 2",
            "name": "Dry & Itchy Skin Relief Shampoo",
            "desc": "Step 2 — main care. Soothes sensitive skin and restores the barrier.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Sensitive skin",
                  "Itching",
                  "Redness",
                  "Irritation",
                  "Dry skin",
                  "Allergic reactions"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Reduces itching",
                  "Soothes the skin",
                  "Reduces irritation",
                  "Intensely moisturizes",
                  "Supports skin barrier restoration"
                ]
              },
              {
                "title": "Description",
                "text": "The main stage of care. The shampoo helps soothe irritated skin, reduces the feeling of itching and dryness, promotes the restoration of the natural protective barrier and supports the health of the skin and coat. It is especially recommended for pets with sensitive skin and a tendency to irritation."
              },
              {
                "title": "How to use",
                "text": "After using Step 1, dilute the shampoo with water at a ratio of 1:10. For very sensitive skin, a 1:15 dilution is recommended. Apply to wet coat, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Soothing",
              "Sensitive skin",
              "Step 2"
            ]
          }
        }
      },
      {
        "step": 3,
        "color": "#8a5d33",
        "img": "assets/products/tpl-dc-cond.webp",
        "short": {
          "az": "Nəmləndirir və yumşaldır — daranmanı asanlaşdırır və nəticəni möhkəmləndirir.",
          "ru": "Увлажняет и смягчает — облегчает расчесывание и закрепляет результат.",
          "en": "Moisturizes and softens — eases combing and locks in the result."
        },
        "item": {
          "emoji": "✨",
          "img": "assets/products/tpl-dc-cond.webp",
          "az": {
            "cat": "Derma Care · STEP 3",
            "name": "Dry & Itchy Skin Relief Conditioner",
            "desc": "Step 3 — yekunlaşdırıcı qulluq. Tükü yumşaq və itaətkar edir.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Həssas dəri",
                  "Quru tük",
                  "Kövrək tük",
                  "Qıcıqlanmış dəri"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Dərini və tükü nəmləndirir",
                  "Tükü yumşaldır",
                  "Daranmanı asanlaşdırır",
                  "Quruluğu azaldır",
                  "Tükün kutikulasını bağlayır"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Kondisioner peşəkar qulluğu tamamlayır, dərini və tükü intensiv nəmləndirir, tükü yumşaq, hamar və itaətkar edir. Tükün dolaşmasını azaltmağa kömək edir və şampundan sonrakı nəticəni möhkəmləndirir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Kondisioneri su ilə 1:10 nisbətində durulaşdırın. Quru və zədələnmiş tük üçün 1:5 nisbətində durulaşdırmaq olar. Şampundan sonra təmiz nəm tükə çəkin, 3–5 dəqiqə saxlayın və ilıq su ilə yaxşıca yuyun."
              }
            ],
            "tags": [
              "Nəmləndirir",
              "Yumşaldır",
              "Step 3"
            ]
          },
          "ru": {
            "cat": "Derma Care · STEP 3",
            "name": "Dry & Itchy Skin Relief Conditioner",
            "desc": "Шаг 3 — завершающий уход. Делает шерсть мягкой и послушной.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Чувствительная кожа",
                  "Сухая шерсть",
                  "Ломкая шерсть",
                  "Раздраженная кожа"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Увлажняет кожу и шерсть",
                  "Смягчает шерсть",
                  "Облегчает расчесывание",
                  "Уменьшает сухость",
                  "Закрывает кутикулу волоса"
                ]
              },
              {
                "title": "Описание",
                "text": "Кондиционер завершает профессиональный уход, интенсивно увлажняет кожу и шерсть, делает шерсть мягкой, гладкой и послушной. Помогает уменьшить спутывание шерсти и закрепляет результат после использования шампуня."
              },
              {
                "title": "Способ применения",
                "text": "Развести кондиционер водой в пропорции 1:10. Для сухой и поврежденной шерсти допускается разведение 1:5. Нанести на чистую влажную шерсть после шампуня, оставить на 3–5 минут и тщательно смыть теплой водой."
              }
            ],
            "tags": [
              "Увлажняет",
              "Смягчает",
              "Шаг 3"
            ]
          },
          "en": {
            "cat": "Derma Care · STEP 3",
            "name": "Dry & Itchy Skin Relief Conditioner",
            "desc": "Step 3 — finishing care. Makes the coat soft and manageable.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Sensitive skin",
                  "Dry coat",
                  "Brittle coat",
                  "Irritated skin"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Moisturizes the skin and coat",
                  "Softens the coat",
                  "Eases combing",
                  "Reduces dryness",
                  "Seals the hair cuticle"
                ]
              },
              {
                "title": "Description",
                "text": "The conditioner completes the professional care, intensely moisturizing the skin and coat and making the coat soft, smooth and manageable. It helps reduce tangling and locks in the result after using the shampoo."
              },
              {
                "title": "How to use",
                "text": "Dilute the conditioner with water at a ratio of 1:10. For dry and damaged coat, a 1:5 dilution is allowed. Apply to clean, wet coat after shampooing, leave on for 3–5 minutes and rinse thoroughly with warm water."
              }
            ],
            "tags": [
              "Moisturizes",
              "Softens",
              "Step 3"
            ]
          }
        }
      },
      {
        "step": "+",
        "color": "#b0895a",
        "img": "assets/products/tpl-dc-leavein.webp",
        "short": {
          "az": "Yuyulmayan qulluq — çimizdirmələr arasında nəmləndirir və tükü qoruyur.",
          "ru": "Несмываемый уход — увлажняет между купаниями и защищает шерсть.",
          "en": "Leave-in care — moisturizes between baths and protects the coat."
        },
        "item": {
          "emoji": "💦",
          "img": "assets/products/tpl-dc-leavein.webp",
          "az": {
            "cat": "Derma Care · Leave-in",
            "name": "Dry & Itchy Skin Relief Leave-In Conditioner",
            "desc": "Yuyulmayan kondisioner — çimizdirmələr arasında əlavə nəmləndirmə və qoruma.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Həssas dəri",
                  "Quru tük",
                  "Gündəlik qulluq",
                  "Dolaşmağa meylli tük"
                ]
              },
              {
                "title": "Tük tipi",
                "list": [
                  "Bütün tük tipləri"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "Nəmliyi qoruyur",
                  "Daranmanı asanlaşdırır",
                  "Çimizdirmələr arasında tükü qoruyur",
                  "Tükü daha yumşaq edir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Yuyulmayan kondisioner çimizdirmələr arasında tükə əlavə nəmləndirmə və qoruma verir. Dərinin sağlam vəziyyətini qorumağa kömək edir, daranmanı asanlaşdırır və tükü daha hamar və ipəkvari edir."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Az miqdarda vasitəni təmiz nəm və ya quru tükə 20–30 sm məsafədən çiləyin. Əl və ya daraqla tük boyu bərabər paylayın. Yumayın. Gündəlik istifadə üçün uyğundur."
              }
            ],
            "tags": [
              "Yuyulmayan",
              "Nəmləndirir",
              "Gündəlik qulluq"
            ]
          },
          "ru": {
            "cat": "Derma Care · Leave-in",
            "name": "Dry & Itchy Skin Relief Leave-In Conditioner",
            "desc": "Несмываемый кондиционер — дополнительное увлажнение и защита между купаниями.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Чувствительная кожа",
                  "Сухая шерсть",
                  "Ежедневный уход",
                  "Шерсть, склонная к спутыванию"
                ]
              },
              {
                "title": "Тип шерсти",
                "list": [
                  "Все типы шерсти"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Поддерживает увлажнение",
                  "Облегчает расчесывание",
                  "Защищает шерсть между купаниями",
                  "Делает шерсть более мягкой"
                ]
              },
              {
                "title": "Описание",
                "text": "Несмываемый кондиционер обеспечивает дополнительное увлажнение и защиту шерсти между купаниями. Помогает поддерживать здоровое состояние кожи, облегчает расчесывание и делает шерсть более гладкой и шелковистой."
              },
              {
                "title": "Способ применения",
                "text": "Распылить небольшое количество средства на чистую влажную или сухую шерсть с расстояния 20–30 см. Равномерно распределить по шерсти руками или расческой. Не смывать. Подходит для ежедневного применения."
              }
            ],
            "tags": [
              "Несмываемый",
              "Увлажняет",
              "Ежедневный уход"
            ]
          },
          "en": {
            "cat": "Derma Care · Leave-in",
            "name": "Dry & Itchy Skin Relief Leave-In Conditioner",
            "desc": "Leave-in conditioner — extra moisture and protection between baths.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Sensitive skin",
                  "Dry coat",
                  "Daily care",
                  "Tangle-prone coat"
                ]
              },
              {
                "title": "Coat type",
                "list": [
                  "All coat types"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Maintains moisture",
                  "Eases combing",
                  "Protects the coat between baths",
                  "Makes the coat softer"
                ]
              },
              {
                "title": "Description",
                "text": "The leave-in conditioner provides extra moisture and protection for the coat between baths. It helps maintain healthy skin, eases combing and leaves the coat smoother and silkier."
              },
              {
                "title": "How to use",
                "text": "Spray a small amount of product onto clean wet or dry coat from a distance of 20–30 cm. Distribute evenly through the coat by hand or with a comb. Do not rinse. Suitable for daily use."
              }
            ],
            "tags": [
              "Leave-in",
              "Moisturizes",
              "Daily care"
            ]
          }
        },
        "label": {
          "az": "Əlavə qulluq",
          "ru": "Доп. уход",
          "en": "Add-on"
        }
      },
      {
        "step": "+",
        "color": "#7a5330",
        "img": "assets/products/tpl-dc-cream.webp",
        "short": {
          "az": "Lokal krem — quru və qıcıqlanmış nahiyələri nəmləndirir və yumşaldır.",
          "ru": "Локальный крем — увлажняет и смягчает сухие и раздраженные участки.",
          "en": "Local cream — moisturizes and softens dry and irritated areas."
        },
        "item": {
          "emoji": "🧴",
          "img": "assets/products/tpl-dc-cream.webp",
          "az": {
            "cat": "Derma Care · Cream",
            "name": "Dry & Itchy Skin Relief Cream",
            "desc": "Krem — quru və qıcıqlanmış dəri nahiyələri üçün lokal qulluq.",
            "sections": [
              {
                "title": "Kimə uyğundur",
                "list": [
                  "Quru dəri",
                  "Qızartı",
                  "Qıcıqlanma",
                  "Qaşınma",
                  "Kobudlaşmış dəri nahiyələri"
                ]
              },
              {
                "title": "Harada istifadə olunur",
                "list": [
                  "Lokal qıcıqlanmalar",
                  "Dəri qatları",
                  "Pəncələr",
                  "Dirsəklər",
                  "Digər quru dəri nahiyələri"
                ]
              },
              {
                "title": "Hansı problemləri həll edir",
                "list": [
                  "İntensiv nəmləndirir",
                  "Dərini yumşaldır",
                  "Qıcıqlanmanı azaldır",
                  "Dərinin qoruyucu bariyerini bərpa etməyə kömək edir"
                ]
              },
              {
                "title": "Təsvir",
                "text": "Krem quru və qıcıqlanmış dəri nahiyələrinin lokal qulluğu üçün hazırlanmışdır. Dərini qidalandırır, yumşaldır və bərpasına şərait yaradır, quruluq və narahatlıq hissini azaldır. Tez sorulur və gündəlik istifadə üçün uyğundur."
              },
              {
                "title": "İstifadə qaydası",
                "text": "Az miqdarda kremi təmiz və quru dəriyə çəkin. Yüngül masaj hərəkətləri ilə vasitəni tam sorulanadək yayın. Gündə 1–2 dəfə və ya ehtiyac olduqca istifadə edin."
              }
            ],
            "tags": [
              "Lokal qulluq",
              "Nəmləndirir",
              "Yumşaldır"
            ]
          },
          "ru": {
            "cat": "Derma Care · Cream",
            "name": "Dry & Itchy Skin Relief Cream",
            "desc": "Крем — локальный уход за сухими и раздраженными участками кожи.",
            "sections": [
              {
                "title": "Кому подходит",
                "list": [
                  "Сухая кожа",
                  "Покраснение",
                  "Раздражение",
                  "Зуд",
                  "Огрубевшие участки кожи"
                ]
              },
              {
                "title": "Где использовать",
                "list": [
                  "Локальные раздражения",
                  "Складки кожи",
                  "Лапы",
                  "Локти",
                  "Другие сухие участки кожи"
                ]
              },
              {
                "title": "Какие проблемы решает",
                "list": [
                  "Интенсивно увлажняет",
                  "Смягчает кожу",
                  "Уменьшает раздражение",
                  "Помогает восстановить защитный барьер кожи"
                ]
              },
              {
                "title": "Описание",
                "text": "Крем разработан для локального ухода за сухими и раздраженными участками кожи. Питает, смягчает и способствует восстановлению кожи, уменьшая ощущение сухости и дискомфорта. Быстро впитывается и подходит для ежедневного применения."
              },
              {
                "title": "Способ применения",
                "text": "Нанесите небольшое количество крема на чистую и сухую кожу. Легкими массажными движениями распределите средство до полного впитывания. Используйте 1–2 раза в день или по мере необходимости."
              }
            ],
            "tags": [
              "Локальный уход",
              "Увлажняет",
              "Смягчает"
            ]
          },
          "en": {
            "cat": "Derma Care · Cream",
            "name": "Dry & Itchy Skin Relief Cream",
            "desc": "Cream — local care for dry and irritated areas of skin.",
            "sections": [
              {
                "title": "Who it's for",
                "list": [
                  "Dry skin",
                  "Redness",
                  "Irritation",
                  "Itching",
                  "Roughened areas of skin"
                ]
              },
              {
                "title": "Where to use",
                "list": [
                  "Local irritations",
                  "Skin folds",
                  "Paws",
                  "Elbows",
                  "Other dry areas of skin"
                ]
              },
              {
                "title": "Problems it solves",
                "list": [
                  "Intensely moisturizes",
                  "Softens the skin",
                  "Reduces irritation",
                  "Helps restore the skin's protective barrier"
                ]
              },
              {
                "title": "Description",
                "text": "The cream is designed for local care of dry and irritated areas of skin. It nourishes, softens and promotes skin restoration, reducing the feeling of dryness and discomfort. It absorbs quickly and is suitable for daily use."
              },
              {
                "title": "How to use",
                "text": "Apply a small amount of cream to clean, dry skin. Using light massaging movements, spread the product until fully absorbed. Use 1–2 times a day or as needed."
              }
            ],
            "tags": [
              "Local care",
              "Moisturizes",
              "Softens"
            ]
          }
        },
        "label": {
          "az": "Əlavə qulluq",
          "ru": "Доп. уход",
          "en": "Add-on"
        }
      }
    ]
  }
];
