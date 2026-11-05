// ==========================================================================
// SpeakPro — To'liq Ko'p Tilli Interfeys Dvijogi (Full-Site i18n Engine)
// Tillari: O'zbek tili (uz), Русский язык (ru), English (en)
// ==========================================================================

const SpeakProI18n = {
    currentLang: 'uz',

    dictionaries: {
        uz: {
            // Header & Nav
            nav_home: 'Asosiy',
            nav_languages: 'Tillar',
            nav_lessons: 'Darslar',
            nav_lugat: 'Lug\'at',
            nav_leaderboard: 'Reyting',
            nav_star: 'Star',
            nav_games: 'Mini O\'yinlar',
            nav_game_1v1: '1 vs 1 Lug\'at Bellashuv',
            nav_game_6p: '6 Kishilik Bellashuv',
            nav_game_2v2: '2 vs 2 Jamoaviy Yozish',
            nav_speaking: 'Speaking AI',
            nav_settings: 'Sozlamalar',
            nav_login: 'Kirish / Ro\'yxatdan o\'tish',
            brand_tagline: '"Planeta" o\'quv markazi',

            // Home - Hero
            hero_seal: '"Planeta" O\'quv Markazi Loyihasi • 2026',
            hero_title: 'SpeakPro haqida — <span class="gradient-text">Tillarni oson, qiziqarli va raqobat ruhida o\'rganing!</span>',
            hero_desc: 'SpeakPro — bu zamonaviy va interaktiv til o\'rganish platformasi bo\'lib, u til o\'rganishni zerikarli yodlash jarayonidan qiziqarli sarguzashtga aylantirish uchun yaratilgan. Bizning asosiy maqsadimiz — har bir o\'quvchiga sifatli ta\'limni qulay va motivatsion muhitda taqdim etish.',
            hero_btn_lessons: 'Darslarni Tanlash',
            hero_btn_1v1: '1 vs 1 Bellashuvga Kirish',
            hero_btn_store: 'Sovg\'alar Do\'koni',
            metric_active_learners: 'Faol o\'quvchilar',
            metric_stars_awarded: 'Topshirilgan yulduzlar',
            metric_main_langs: 'Ingliz, Rus, Nemis',

            // Home - Which Languages
            which_langs_badge: 'Global Muloqot',
            which_langs_title: '🌐 Qaysi tillarni o\'rganish mumkin?',
            which_langs_sub: 'Platformamizda dunyodagi eng ommabop va talab yuqori bo\'lgan 3 ta xorijiy tilni mukammal o\'zlashtirishingiz mumkin:',
            lang_en_title: '🇬🇧 Ingliz tili',
            lang_en_desc: 'Xalqaro biznes, IT sohasi, chet el sayohati va global ilmiy maqolalar uchun asosiy raqamli til. A1 dan C1 gacha mukammal darslar.',
            lang_en_btn: 'Ingliz Tilini Boshlash 🚀',
            lang_ru_title: '🇷🇺 Rus tili',
            lang_ru_desc: 'MDH mamlakatlari bo\'ylab keng qo\'llaniladigan va savdo-sotiq hamda ilmiy sohalarda erkin so\'zlashishni ta\'minlaydigan boy til.',
            lang_ru_btn: 'Rus Tilini Boshlash 🚀',
            lang_de_title: '🇩🇪 Nemis tili',
            lang_de_desc: 'Germaniya, Avstriya va Shveytsariyada nufuzli universitetlarda bepul ta\'lim olish va yuqori daromadli mutaxassislik sari yo\'llanma.',
            lang_de_btn: 'Nemis Tilini Boshlash 🚀',
            btn_listen: 'Eshitish',
            live_pronounce: 'Jonli Talaffuz:',

            // Home - Gamification (Star)
            gamify_badge: 'Gamifikatsiya & Sovrinlar',
            gamify_title: '🏆 Musobaqa va Yulduzlar tizimi (Star)',
            gamify_sub: 'SpeakPro shunchaki darslik emas, bu haqiqiy bilimlar arenasidir! Bizda o\'qish jarayoni yanada qiziqarli bo\'lishi uchun maxsus gamifikatsiya tizimi joriy qilingan:',
            feat_duel_title: 'O\'zaro musobaqalar',
            feat_duel_desc: 'Boshqa o\'quvchilar bilan bellashing, o\'z bilimingizni sinovdan o\'tkazing va reyting jadvalida yuqori o\'rinlarni egallang.',
            feat_duel_pill: '1v1, 6 kishilik, 2v2 rejimlar',
            feat_star_title: 'Yulduzlar (Star) yig\'ing',
            feat_star_desc: 'Har bir bajarilgan dars, muvaffaqiyatli topshiriq va g\'alaba uchun maxsus yulduzlar bilan taqdirlanasiz.',
            feat_star_pill: 'Har bir g\'alaba uchun +5 ⭐ gacha',
            feat_gift_title: 'Sovg\'alar va mukofotlar',
            feat_gift_desc: 'To\'plagan yulduzlaringizni o\'zingiz yoqtirgan qimmatli sovg\'alar va esdalik narsalariga almashtiring! O\'qigansari mukofot oling!',
            feat_gift_pill: 'Ryukzak, Hoodie, AirPods va Kurslar',

            // Home - About App
            about_app_title: '📱 Ilova haqida',
            about_meta_year: '📅 <strong>Yaratilgan yili:</strong> 2026-yil',
            about_meta_author: '🏢 <strong>Tashkilotchi / Muallif:</strong> "Planeta" o\'quv markazi',
            about_copyright: '<strong>Mualliflik huquqi:</strong> © 2026 "Planeta" o\'quv markazi. Barcha huquqlar himoyalangan. Materiallardan nusxa ko\'chirish, ularni tarqatish yoki tijorat maqsadida foydalanish qat\'iyan taqiqlanadi.',

            // Tillar View
            view_tillar_badge: 'Tillarni O\'zlashtirish',
            view_tillar_title: '🌐 Xorijiy Tillar Bo\'limi',
            view_tillar_sub: 'O\'zingizga qulay tilni tanlang va audio talaffuzlar orqali so\'z boyligingizni oshiring.',
            btn_start_learning: 'O\'rganishni Boshlash 🚀',

            // Reyting View
            view_reyting_badge: 'Peshqadamlar Arenasi',
            view_reyting_title: '🏆 O\'quvchilar Reytingi',
            view_reyting_sub: 'Eng faol va bilimdon o\'quvchilar ligasi. Bellashing va yuqori o\'rinni zabt eting!',
            th_rank: 'O\'rin',
            th_learner: 'O\'quvchi',
            th_league: 'Liga',
            th_wins: 'G\'alabalar',
            th_stars: 'To\'plangan Yulduzlar',

            // Star View
            star_balance_title: '⭐ Sizning Yulduzlaringiz',
            star_balance_sub: 'Darslarni tamomlash, 1vs1 va 6 kishilik bellashuvlarda g\'alaba qozonish orqali ko\'proq yulduz to\'plang!',
            star_store_badge: 'Mukofotlar Bozori',
            star_store_title: '🎁 Sovg\'alar va Mukofotlar Do\'koni',
            star_store_sub: 'To\'plagan yulduzlaringizni "Planeta" o\'quv markazining esdalik sovg\'alari va vaucherlariga almashtiring!',
            btn_redeem: 'Almashtirish 🎁',

            // Store Gift Localizations
            store_g1_title: 'SpeakPro & "Planeta" Maxsus Ryukzaki',
            store_g1_category: 'ESDALIK SOVG\'ALARI',
            store_g1_desc: 'Suv o\'tkazmaydigan, noutbuk uchun maxsus bo\'lmali zamonaviy ryukzak.',
            store_g1_badge: 'ENG OMMABOP',
            store_g2_title: '"Planeta" Brendli Hoodie (Sviter)',
            store_g2_category: 'KIYIM-KECHAK',
            store_g2_desc: 'Issiq va qulay, 100% paxta sifatli matodan tayyorlangan SpeakPro sviteri.',
            store_g2_badge: 'TRENDDA',
            store_g3_title: 'Simsiz Bluetooth Quloqchinlar',
            store_g3_category: 'ELEKTRONIKA',
            store_g3_desc: 'Chet tili darslarini va chet el qo\'shiqlarini tiniq eshitish uchun moslama.',
            store_g3_badge: 'PREMIUM',
            store_g4_title: 'Chet Tili Kitoblar To\'plami',
            store_g4_category: 'KITOBLAR',
            store_g4_desc: 'Grammatika va so\'z boyligi bo\'yicha original xorijiy darsliklar va badiiy asar.',
            store_g4_badge: 'BESTSELLER',
            store_g5_title: '"Planeta"da 1 Oylik Bepul Kurs Vaucheri',
            store_g5_category: 'TA\'LIM',
            store_g5_desc: '"Planeta" o\'quv markazining jonli yoki onlayn istalgan tildagi to\'liq oylik kursi.',
            store_g5_badge: 'SUPER MUKOFOT',
            store_g6_title: 'SpeakPro Aqlli Termo-Krujka',
            store_g6_category: 'AKSESSUARLAR',
            store_g6_desc: 'Haroratni ko\'rsatib turuvchi LED displeyli, zamonaviy metall termo-krujka.',
            store_g6_badge: 'YANGI',
            store_not_enough: 'Yulduzlaringiz yetarli emas! Sizda: {stars} ⭐, kerak: {cost} ⭐. Bellashuvlarda ko\'proq yulduz to\'plang!',
            store_confirm: '"{title}" sovg\'asini {cost} ⭐ evaziga olmoqchimisiz?\n\nSovg\'angiz "Planeta" o\'quv markazining ma\'muriyati orqali topshiriladi.',
            store_success_title: '🎉 Tabriklaymiz! Siz "{title}" sovg\'asiga buyurtma berdingiz!\n\nBuyurtmangiz tasdiqlandi. "Planeta" o\'quv markazi ma\'muriyati tez orada siz bilan bog\'lanadi.',
            store_success_toast: '"{title}" muvaffaqiyatli xarid qilindi! -{cost} ⭐',

            // Leaderboard
            league_gold: 'Oltin Liga',
            league_silver: 'Kumush Liga',
            league_bronze: 'Bronza Liga',
            lang_tag_en: '🇬🇧 Ingliz',
            lang_tag_ru: '🇷🇺 Rus',
            lang_tag_de: '🇩🇪 Nemis',
            wins_suffix: 'ta',

            // Game Result Modal
            result_victory: 'G\'alaba! Tabriklaymiz! 🏆',
            result_good_game: 'Ajoyib Bellashuv! 🤝',
            result_score_1v1: 'Siz: {userScore} ball | Raqib: {oppScore} ball',
            result_stars_win: '+5 ⭐ Yulduz mukofoti (G\'alaba)',
            result_stars_lose: '0 ⭐ (Mag\'lubiyat: 5 - 0)',
            result_6p_champion: '🥇 1-O\'RIN! CHEMIPON!',
            result_6p_place: 'Siz {rank}-o\'rinni egalladingiz!',
            result_6p_score: '6 kishilik bellashuv yakunlandi! Siz to\'plagan ball: {score}',
            result_6p_stars_win: '+{stars} ⭐ Yulduz mukofoti',
            result_6p_stars_lose: '0 ⭐ (Shoxsupaga chiqilmadi)',
            result_2v2_red_win: 'Burgutlar Jamoasi G\'alaba Qozondi! 🦅',
            result_2v2_blue_win: 'Lochinlar Jamoasi G\'olib! 🤝',
            result_2v2_score: 'Siz kiritgan to\'g\'ri so\'zlar soni: {count} ta',

            // Games Views
            game_1v1_badge: 'Tezkor Bilimlar Duell',
            game_1v1_title: '⚔️ 1 vs 1 Lug\'at Bellashuvi',
            game_1v1_sub: 'Tasodifiy onlayn o\'quvchi yoki kompyuter boti bilan so\'z boyligingizni sinang!',
            game_6p_badge: 'Ommaviy Musobaqa',
            game_6p_title: '🏟️ 6 Kishilik So\'z Bellashuvi',
            game_6p_sub: '6 nafar o\'quvchi bir vaqtning o\'zida kurashadigan katta bilim maydoni!',
            game_2v2_badge: 'Jamoaviy Tez Yozish',
            game_2v2_title: '⌨️ 2 vs 2 Jamoaviy Yozish',
            game_2v2_sub: 'Sherigingiz bilan birlashing va raqib jamoaga qarshi tez yozishda bellashing!',
            game_rules_title: 'Bellashuv Qoidalari:',
            game_rule_1v1_rewards: '<strong>Yulduzlar mukofoti:</strong> G\'alaba qozongan o\'quvchi <strong>+5 ⭐</strong> oladi, mag\'lubiyat uchun <strong>0 ⭐</strong> (5 - 0).',
            game_rule_6p_rewards: '<strong>Yulduzlar mukofoti:</strong> 1-o\'ringa <strong>+3 ⭐</strong>, 2-o\'ringa <strong>+2 ⭐</strong>, 3-o\'ringa <strong>+1 ⭐</strong>, qolganlarga <strong>0 ⭐</strong>.',
            game_select_lang: 'Qaysi tilda bellashasiz?',
            btn_start_game: 'O\'yinni Boshlash!',
            arena_round: 'Raund',
            arena_you: 'Siz (O\'quvchi)',
            arena_opponent: 'Raqib',
            arena_thinking: 'O\'ylamoqda...',
            arena_listen: 'Talaffuzni tinglash',

            // Mini Games Extended Setup & Rules
            game_1v1_about_title: '1 vs 1 Lug\'at Bellashuvi',
            game_1v1_about_desc: 'Boshqa o\'quvchi bilan yuzma-yuz lug\'at bilimini sinovdan o\'tkazuvchi tezkor duel. 5 ta raund davomida berilgan so\'zning to\'g\'ri tarjimasini eng tez topgan ishtirokchi g\'olib bo\'ladi!',
            game_1v1_rule1: '<strong>O\'yin tuzilishi:</strong> 5 ta raund. Har bir raund uchun 10 soniya vaqt beriladi.',
            game_1v1_rule2: '<strong>Ballar:</strong> Tezroq va to\'g\'ri javob bergan ishtirokchi ko\'proq ballga ega bo\'ladi (maksimal 120 ball).',
            game_1v1_rule3: '<strong>Yulduzlar mukofoti:</strong> G\'alaba qozongan o\'quvchi <strong>+5 ⭐</strong> oladi, mag\'lubiyat uchun <strong>0 ⭐</strong> (5 - 0).',
            game_1v1_btn: 'O\'yinni Boshlash!',

            game_6p_about_title: 'Lug\'at Bellashuv — 6 Kishilik Xona',
            game_6p_about_desc: '6 nafar o\'quvchi bir xonaga yig\'ilib, bir vaqtning o\'zida bir xil savollarga javob beradilar. Tezkorlik va so\'z boyligi bo\'yicha eng kuchlilar saralanadi!',
            game_6p_rule1: '<strong>Xona sig\'imi:</strong> 6 ta ishtirokchi jonli ravishda raqobatlashadi.',
            game_6p_rule2: '<strong>Tezkorlik muhim:</strong> Birinchi to\'g\'ri javob bergan ishtirokchi eng ko\'p ball oladi (100 ball, 80 ball, 60 ball...).',
            game_6p_rule3: '<strong>Shoxsupa mukofotlari:</strong> 1-o\'rin <strong>+3 ⭐</strong>, 2-o\'rin <strong>+2 ⭐</strong>, 3-o\'rin <strong>+1 ⭐</strong>, qolgan o\'rinlarga 0 ⭐.',
            game_6p_label: 'Bellashuv tili:',
            game_6p_btn: '6 Kishilik Xonaga Kirish va Boshlash!',

            game_2v2_about_title: 'Yozish 2 vs 2 (Tezkor Yozuv Poygasi)',
            game_2v2_about_desc: 'Ikki jamoa o\'rtasida shiddatli so\'z yozish musobaqasi! Ekranda ko\'ringan so\'zlarni xatosiz va tez klaviaturada terib, o\'z jamoangiz bayrog\'ini marra chizig\'i tomon torting!',
            game_2v2_rule1: '<strong>Jamoalar:</strong> "Burgutlar" (Qizil) va "Lochinlar" (Ko\'k). Har birida 2 tadan ishtirokchi.',
            game_2v2_rule2: '<strong>Arqon tortish mexanikasi:</strong> Har bir xatosiz kiritilgan so\'z arqonni sizning jamoangiz foydasiga suradi.',
            game_2v2_rule3: '<strong>Mukofot:</strong> G\'olib jamoa a\'zolariga <strong>+5 ⭐</strong>, mag\'lub jamoaga 0 ⭐!',
            game_2v2_label: 'Yozish tili:',
            game_2v2_btn: '2 vs 2 Yozish Poygasini Boshlash!',

            opt_en: '🇬🇧 Ingliz tili',
            opt_ru: '🇷🇺 Rus tili',
            opt_de: '🇩🇪 Nemis tili',

            modal_close: 'Yopish',
            modal_view_leaderboard: 'Reytingni ko\'rish 🏆',

            // Settings View
            settings_badge: 'Shaxsiy Profil va Moslashuv',
            settings_title: '⚙️ Tizim Sozlamalari',
            settings_subtitle: 'O\'quv muhitingizni, ilova tilini va akkauntingizni o\'zingizga moslang.',
            section_app_lang: '🌐 Ilova Tili (Interfeys)',
            section_app_lang_sub: 'Dasturning barcha menyu va yozuvlari uchun tilni tanlang:',
            lang_uz: 'O\'zbek tili',
            lang_ru: 'Русский язык',
            lang_en: 'English',
            section_account: '👤 Akkaunt Boshqarish',
            section_account_sub: 'Profil ma\'lumotlaringiz va o\'quvchi avatarini tanlang:',
            label_avatar: 'Profil rasmi (Avatar):',
            label_name: 'Foydalanuvchi ismi',
            label_email: 'Elektron pochta (Email)',
            label_phone: 'Telefon raqam',
            label_id: 'O\'quvchi ID raqami',
            stat_stars: 'To\'plangan Yulduzlar',
            stat_wins: 'G\'alabalar',
            stat_level: 'Ta\'lim darajasi',
            btn_logout: 'Akkauntdan chiqish 🚪',
            btn_reset: 'Progressni tozalash 🔄',
            section_theme: '🌓 Dastur Mavzusi (Rejim)',
            section_theme_sub: 'Ko\'zingizga qulay interfeys ko\'rinishini tanlang:',
            theme_light: '☀️ Kunduzgi Rejim (Light Mode)',
            theme_light_desc: 'Yorug\', tiniq va zamonaviy oq dizayn',
            theme_dark: '🌙 Tungi Rejim (Dark Mode)',
            theme_dark_desc: 'Qorong\'i, kontrastli va ko\'zga yoqimli neon dizayn',
            section_sound: '🔊 Ovoz va Talaffuz',
            section_sound_sub: 'Tugmalar chertilishi va darslardagi ovozli talaffuz:',
            sound_effects: 'Ovoz effektlari (Sound FX)',
            sound_effects_desc: 'Tugmalar bosilishi, g\'alaba va to\'g\'ri javob ovozlari',
            speech_audio: 'Nutq va Talaffuz (Web Speech)',
            speech_audio_desc: 'Chet tili so\'zlarini robot ovozda to\'g\'ri talaffuz qilish',
            volume_label: 'Ovoz balandligi:',
            btn_save_all: 'Barcha Sozlamalarni Saqlash ✅',

            // Footer & Modals
            footer_copy: '© 2026 "Planeta" o\'quv markazi. Barcha huquqlar himoyalangan.<br>Materiallardan nusxa ko\'chirish, ularni tarqatish yoki tijorat maqsadida foydalanish qat\'iyan taqiqlanadi.',
            auth_tab_login: 'Kirish',
            auth_tab_register: 'Ro\'yxatdan O\'tish',
            auth_btn_submit: 'Tizimga Kirish',
            auth_btn_demo: '⚡ Mehmon / Demo sifatida kirish'
        },

        ru: {
            // Header & Nav
            nav_home: 'Главная',
            nav_languages: 'Языки',
            nav_lessons: 'Уроки',
            nav_lugat: 'Словарь',
            nav_leaderboard: 'Рейтинг',
            nav_star: 'Star (Звёзды)',
            nav_games: 'Мини-игры',
            nav_game_1v1: '1 на 1 Словарная дуэль',
            nav_game_6p: 'Битва на 6 игроков',
            nav_game_2v2: '2 на 2 Командное письмо',
            nav_speaking: 'Speaking с ИИ',
            nav_settings: 'Настройки',
            nav_login: 'Войти / Регистрация',
            brand_tagline: 'Учебный центр «Планета»',

            // Home - Hero
            hero_seal: 'Проект Учебного Центра «Планета» • 2026',
            hero_title: 'О SpeakPro — <span class="gradient-text">Изучайте языки легко, интересно и в духе соревнований!</span>',
            hero_desc: 'SpeakPro — это современная и интерактивная платформа для изучения иностранных языков, созданная для того, чтобы превратить скучную зубрёжку в увлекательное приключение. Наша главная цель — предоставить каждому ученику качественное образование в комфортной и мотивирующей среде.',
            hero_btn_lessons: 'Выбрать Уроки',
            hero_btn_1v1: '1 на 1 Словарная дуэль',
            hero_btn_store: 'Магазин Подарков',
            metric_active_learners: 'Активных учеников',
            metric_stars_awarded: 'Собрано звёзд',
            metric_main_langs: 'Английский, Русский, Немецкий',

            // Home - Which Languages
            which_langs_badge: 'Глобальное общение',
            which_langs_title: '🌐 Какие языки можно изучать?',
            which_langs_sub: 'На нашей платформе вы можете в совершенстве овладеть 3 самыми востребованными иностранными языками в мире:',
            lang_en_title: '🇬🇧 Английский язык',
            lang_en_desc: 'Главный цифровой язык для международного бизнеса, сферы IT, зарубежных путешествий и научных статей. Курсы от A1 до C1.',
            lang_en_btn: 'Начать Английский 🚀',
            lang_ru_title: '🇷🇺 Русский язык',
            lang_ru_desc: 'Богатый язык, широко используемый в странах СНГ, открывающий двери в торговлю, науку и свободное культурное общение.',
            lang_ru_btn: 'Начать Русский 🚀',
            lang_de_title: '🇩🇪 Немецкий язык',
            lang_de_desc: 'Путеводитель к бесплатному высшему образованию в университетах Германии, Австрии и Швейцарии и высокооплачиваемой карьере.',
            lang_de_btn: 'Начать Немецкий 🚀',
            btn_listen: 'Слушать',
            live_pronounce: 'Живое произношение:',

            // Home - Gamification (Star)
            gamify_badge: 'Геймификация и Призы',
            gamify_title: '🏆 Соревнования и Система Звёзд (Star)',
            gamify_sub: 'SpeakPro — это не просто учебник, это настоящая арена знаний! Для максимального интереса к учёбе внедрена уникальная система геймификации:',
            feat_duel_title: 'Соревнования между учениками',
            feat_duel_desc: 'Соревнуйтесь с другими учениками, проверяйте свои знания и занимайте верхние строчки в рейтинговой таблице лиги.',
            feat_duel_pill: 'Режимы 1 на 1, на 6 игроков, 2 на 2',
            feat_star_title: 'Собирайте звёзды (Star)',
            feat_star_desc: 'За каждый пройденный урок, выполненное задание и победу в дуэли вы награждаетесь особыми звёздами.',
            feat_star_pill: 'До +5 ⭐ за каждую победу',
            feat_gift_title: 'Подарки и награды',
            feat_gift_desc: 'Обменивайте накопленные звёзды на ценные памятные подарки и сувениры учебного центра! Учитесь и получайте призы!',
            feat_gift_pill: 'Рюкзаки, Худи, AirPods и Курсы',

            // Home - About App
            about_app_title: '📱 О приложении',
            about_meta_year: '📅 <strong>Год создания:</strong> 2026 год',
            about_meta_author: '🏢 <strong>Организатор / Автор:</strong> Учебный центр «Планета»',
            about_copyright: '<strong>Авторские права:</strong> © 2026 Учебный центр «Планета». Все права защищены. Копирование, распространение или коммерческое использование материалов строго запрещено.',

            // Tillar View
            view_tillar_badge: 'Освоение языков',
            view_tillar_title: '🌐 Каталог Иностранных Языков',
            view_tillar_sub: 'Выберите удобный язык и пополняйте словарный запас с помощью аудио произношения.',
            btn_start_learning: 'Начать Обучение 🚀',

            // Reyting View
            view_reyting_badge: 'Арена Лидеров',
            view_reyting_title: '🏆 Рейтинг Учеников',
            view_reyting_sub: 'Лига самых активных и эрудированных учеников. Побеждайте и возглавьте вершину!',
            th_rank: 'Место',
            th_learner: 'Ученик',
            th_league: 'Лига',
            th_wins: 'Побед',
            th_stars: 'Набрано Звёзд',

            // Star View
            star_balance_title: '⭐ Ваши Звёзды',
            star_balance_sub: 'Зарабатывайте звёзды за просмотр видео уроков, прохождение тестов и победы в дуэлях!',
            star_store_badge: 'Ярмарка Наград',
            star_store_title: '🎁 Магазин Подарков и Призов',
            star_store_sub: 'Обменивайте накопленные звёзды на фирменные подарки и ваучеры учебного центра «Планета»!',
            btn_redeem: 'Обменять 🎁',

            // Store Gift Localizations
            store_g1_title: 'Фирменный рюкзак SpeakPro & «Планета»',
            store_g1_category: 'СУВЕНИРЫ',
            store_g1_desc: 'Водонепроницаемый современный рюкзак с отделением для ноутбука.',
            store_g1_badge: 'ПОПУЛЯРНОЕ',
            store_g2_title: 'Брендовое худи «Планета»',
            store_g2_category: 'ОДЕЖДА',
            store_g2_desc: 'Тёплое и удобное худи SpeakPro из 100% качественного хлопка.',
            store_g2_badge: 'В ТРЕНДЕ',
            store_g3_title: 'Беспроводные Bluetooth-наушники',
            store_g3_category: 'ЭЛЕКТРОНИКА',
            store_g3_desc: 'Устройство для чистого прослушивания уроков и иностранной речи.',
            store_g3_badge: 'ПРЕМИУМ',
            store_g4_title: 'Комплект книг на иностранном языке',
            store_g4_category: 'КНИГИ',
            store_g4_desc: 'Оригинальные зарубежные учебники и художественные книги для расширения словарного запаса.',
            store_g4_badge: 'БЕСТСЕЛЛЕР',
            store_g5_title: 'Ваучер на 1 месяц бесплатного курса в «Планета»',
            store_g5_category: 'ОБРАЗОВАНИЕ',
            store_g5_desc: 'Полный месячный курс любого языка в учебном центре «Планета» — онлайн или очно.',
            store_g5_badge: 'СУПЕР ПРИЗ',
            store_g6_title: 'Умная термокружка SpeakPro',
            store_g6_category: 'АКСЕССУАРЫ',
            store_g6_desc: 'Современная металлическая термокружка с LED-дисплеем, показывающим температуру.',
            store_g6_badge: 'НОВИНКА',
            store_not_enough: 'Недостаточно звёзд! У вас: {stars} ⭐, нужно: {cost} ⭐. Побеждайте в битвах, чтобы заработать больше!',
            store_confirm: 'Хотите обменять "{title}" за {cost} ⭐?\n\nПодарок будет вручён администрацией учебного центра «Планета».',
            store_success_title: '🎉 Поздравляем! Вы заказали подарок "{title}"!\n\nЗаказ подтверждён. Администрация «Планета» свяжется с вами в ближайшее время.',
            store_success_toast: '"{title}" успешно получен! -{cost} ⭐',

            // Leaderboard
            league_gold: 'Золотая Лига',
            league_silver: 'Серебряная Лига',
            league_bronze: 'Бронзовая Лига',
            lang_tag_en: '🇬🇧 Английский',
            lang_tag_ru: '🇷🇺 Русский',
            lang_tag_de: '🇩🇪 Немецкий',
            wins_suffix: '',

            // Game Result Modal
            result_victory: 'Победа! Поздравляем! 🏆',
            result_good_game: 'Отличная битва! 🤝',
            result_score_1v1: 'Вы: {userScore} очков | Соперник: {oppScore} очков',
            result_stars_win: '+5 ⭐ Звёздная награда (Победа)',
            result_stars_lose: '0 ⭐ (Поражение: 5 - 0)',
            result_6p_champion: '🥇 1-Е МЕСТО! ЧЕМПИОН!',
            result_6p_place: 'Вы заняли {rank}-е место!',
            result_6p_score: 'Битва на 6 игроков завершена! Ваш счёт: {score}',
            result_6p_stars_win: '+{stars} ⭐ Звёздная награда',
            result_6p_stars_lose: '0 ⭐ (Не вошли в тройку)',
            result_2v2_red_win: 'Команда Орлов победила! 🦅',
            result_2v2_blue_win: 'Команда Соколов победила! 🤝',
            result_2v2_score: 'Вы правильно ввели слов: {count}',

            // Games Views
            game_1v1_badge: 'Скоростная Дуэль Знаний',
            game_1v1_title: '⚔️ 1 на 1 Словарная Дуэль',
            game_1v1_sub: 'Проверьте свой словарный запас в режиме реального времени против соперника!',
            game_6p_badge: 'Массовое Состязание',
            game_6p_title: '🏟️ Битва Слов на 6 Игроков',
            game_6p_sub: 'Арена знаний, где 6 учеников сражаются за призовые места одновременно!',
            game_2v2_badge: 'Командная Скоростная Печать',
            game_2v2_title: '⌨️ 2 на 2 Командное Письмо',
            game_2v2_sub: 'Объединяйтесь с напарником и побеждайте соперников в скорости ввода слов!',
            game_rules_title: 'Правила Сражения:',
            game_rule_1v1_rewards: '<strong>Награда звёздами:</strong> Победитель получает <strong>+5 ⭐</strong>, проигравший <strong>0 ⭐</strong> (5 - 0).',
            game_rule_6p_rewards: '<strong>Награда звёздами:</strong> 1 место — <strong>+3 ⭐</strong>, 2 место — <strong>+2 ⭐</strong>, 3 место — <strong>+1 ⭐</strong>, остальным <strong>0 ⭐</strong>.',
            game_select_lang: 'На каком языке будете сражаться?',
            btn_start_game: 'Начать Игру!',
            arena_round: 'Раунд',
            arena_you: 'Вы (Ученик)',
            arena_opponent: 'Соперник',
            arena_thinking: 'Думает...',
            arena_listen: 'Слушать произношение',

            // Mini Games Extended Setup & Rules
            game_1v1_about_title: '1 на 1 Словарная Дуэль',
            game_1v1_about_desc: 'Быстрая дуэль один на один для проверки словарного запаса. Побеждает тот, кто быстрее всех найдёт правильный перевод за 5 раундов!',
            game_1v1_rule1: '<strong>Структура игры:</strong> 5 раундов. На каждый раунд даётся 10 секунд.',
            game_1v1_rule2: '<strong>Очки:</strong> Быстрый и точный ответ приносит больше очков (максимум 120 очков).',
            game_1v1_rule3: '<strong>Награда звёздами:</strong> Победитель получает <strong>+5 ⭐</strong>, проигравший <strong>0 ⭐</strong> (5 - 0).',
            game_1v1_btn: 'Начать Игру!',

            game_6p_about_title: 'Словарная Битва — Комната на 6 Игроков',
            game_6p_about_desc: '6 учеников собираются в одной комнате и одновременно отвечают на одинаковые вопросы. Побеждают самые быстрые и эрудированные!',
            game_6p_rule1: '<strong>Вместимость комнаты:</strong> 6 участников соревнуются в реальном времени.',
            game_6p_rule2: '<strong>Скорость решает:</strong> Первый правильный ответ приносит максимум очков (100, 80, 60 очков...).',
            game_6p_rule3: '<strong>Призы подиума:</strong> 1 место <strong>+3 ⭐</strong>, 2 место <strong>+2 ⭐</strong>, 3 место <strong>+1 ⭐</strong>, остальным 0 ⭐.',
            game_6p_label: 'Язык битвы:',
            game_6p_btn: 'Войти в комнату на 6 и начать!',

            game_2v2_about_title: 'Письмо 2 на 2 (Скоростная Гонка Печати)',
            game_2v2_about_desc: 'Ожесточённое соревнование по вводу слов между двумя командами! Набирайте слова на экране быстро и без ошибок, тяните флаг своей команды к финишной черте!',
            game_2v2_rule1: '<strong>Команды:</strong> «Орлы» (Красные) и «Соколы» (Синие). По 2 участника в каждой.',
            game_2v2_rule2: '<strong>Механика перетягивания:</strong> Каждое безошибочно введённое слово сдвигает канат в пользу вашей команды.',
            game_2v2_rule3: '<strong>Награда:</strong> Победившая команда получает <strong>+5 ⭐</strong>, проигравшая — 0 ⭐!',
            game_2v2_label: 'Язык письма:',
            game_2v2_btn: 'Начать Гонку Печати 2 на 2!',

            opt_en: '🇬🇧 Английский язык',
            opt_ru: '🇷🇺 Русский язык',
            opt_de: '🇩🇪 Немецкий язык',

            modal_close: 'Закрыть',
            modal_view_leaderboard: 'Посмотреть рейтинг 🏆',

            // Settings View
            settings_badge: 'Профиль и Настройки',
            settings_title: '⚙️ Настройки Системы',
            settings_subtitle: 'Настройте язык интерфейса, личный профиль и звуковые эффекты под себя.',
            section_app_lang: '🌐 Язык Приложения (Интерфейс)',
            section_app_lang_sub: 'Выберите язык для меню, кнопок и текстов системы:',
            lang_uz: 'O\'zbek tili',
            lang_ru: 'Русский язык',
            lang_en: 'English',
            section_account: '👤 Управление Аккаунтом',
            section_account_sub: 'Ваши данные и выбор аватара ученика:',
            label_avatar: 'Фото профиля (Аватар):',
            label_name: 'Имя пользователя',
            label_email: 'Электронная почта (Email)',
            label_phone: 'Номер телефона',
            label_id: 'ID номер ученика',
            stat_stars: 'Собрано Звёзд',
            stat_wins: 'Побед',
            stat_level: 'Уровень обучения',
            btn_logout: 'Выйти из аккаунта 🚪',
            btn_reset: 'Сбросить прогресс 🔄',
            section_theme: '🌓 Тема Оформления (Режим)',
            section_theme_sub: 'Выберите комфортную тему для ваших глаз:',
            theme_light: '☀️ Светлая тема (Light Mode)',
            theme_light_desc: 'Светлый, чистый и современный дизайн',
            theme_dark: '🌙 Тёмная тема (Dark Mode)',
            theme_dark_desc: 'Глубокий неоновый дизайн, комфортный для глаз ночью',
            section_sound: '🔊 Звук и Произношение',
            section_sound_sub: 'Звуковые эффекты кликов и произношение слов:',
            sound_effects: 'Звуковые эффекты (Sound FX)',
            sound_effects_desc: 'Звуки побед, нажатий и правильных ответов',
            speech_audio: 'Синтез речи (Web Speech)',
            speech_audio_desc: 'Правильное озвучивание иностранных слов',
            volume_label: 'Громкость звука:',
            btn_save_all: 'Сохранить все настройки ✅',

            // Footer & Modals
            footer_copy: '© 2026 Учебный центр «Планета». Все права защищены.<br>Копирование, распространение или коммерческое использование материалов строго запрещено.',
            auth_tab_login: 'Войти',
            auth_tab_register: 'Регистрация',
            auth_btn_submit: 'Войти в систему',
            auth_btn_demo: '⚡ Войти как гость / Демо'
        },

        en: {
            // Header & Nav
            nav_home: 'Home',
            nav_languages: 'Languages',
            nav_lessons: 'Lessons',
            nav_lugat: 'Dictionary',
            nav_leaderboard: 'Leaderboard',
            nav_star: 'Star Store',
            nav_games: 'Mini Games',
            nav_game_1v1: '1 vs 1 Word Duel',
            nav_game_6p: '6-Player Arena',
            nav_game_2v2: '2 vs 2 Team Typing',
            nav_speaking: 'Speaking with AI',
            nav_settings: 'Settings',
            nav_login: 'Login / Register',
            brand_tagline: '"Planeta" Learning Center',

            // Home - Hero
            hero_seal: '"Planeta" Learning Center Project • 2026',
            hero_title: 'About SpeakPro — <span class="gradient-text">Learn languages easily, fun and with competitive spirit!</span>',
            hero_desc: 'SpeakPro is a state-of-the-art interactive language learning platform built to transform monotonous memorization into an exciting competitive adventure. Our primary mission is to deliver quality education in a comfortable, highly motivating environment.',
            hero_btn_lessons: 'Explore Lessons',
            hero_btn_1v1: 'Enter 1 vs 1 Duel',
            hero_btn_store: 'Gifts & Rewards Store',
            metric_active_learners: 'Active Learners',
            metric_stars_awarded: 'Stars Earned',
            metric_main_langs: 'English, Russian, German',

            // Home - Which Languages
            which_langs_badge: 'Global Communication',
            which_langs_title: '🌐 Which languages can you learn?',
            which_langs_sub: 'On our platform you can achieve complete mastery in the world\'s top 3 most demanded languages:',
            lang_en_title: '🇬🇧 English Language',
            lang_en_desc: 'The essential digital lingua franca for international business, IT, world travel, and academic science. A1 through C1 courses.',
            lang_en_btn: 'Start English 🚀',
            lang_ru_title: '🇷🇺 Russian Language',
            lang_ru_desc: 'Widely spoken across Eurasia, empowering fluent cross-border commerce, scientific research, and cultural dialogue.',
            lang_ru_btn: 'Start Russian 🚀',
            lang_de_title: '🇩🇪 German Language',
            lang_de_desc: 'Gateway to tuition-free university education and high-paying engineering careers in Germany, Austria, and Switzerland.',
            lang_de_btn: 'Start German 🚀',
            btn_listen: 'Listen',
            live_pronounce: 'Native Pronunciation:',

            // Home - Gamification (Star)
            gamify_badge: 'Gamification & Rewards',
            gamify_title: '🏆 Competition and Star Reward System',
            gamify_sub: 'SpeakPro is much more than a textbook — it is a true knowledge arena! We implemented a specialized gamification engine to maximize engagement:',
            feat_duel_title: 'Peer-to-Peer Battles',
            feat_duel_desc: 'Compete against other learners in real-time word duels, test your vocabulary, and claim top ranks in the league.',
            feat_duel_pill: '1v1, 6-Player, 2v2 Modes',
            feat_star_title: 'Collect Stars (Star)',
            feat_star_desc: 'Earn shiny stars for every completed video lesson, passed examination, and battle victory.',
            feat_star_pill: 'Up to +5 ⭐ per victory',
            feat_gift_title: 'Gifts and Prizes',
            feat_gift_desc: 'Redeem your accumulated stars for genuine branded merchandise, hoodies, backpacks, AirPods, and vouchers!',
            feat_gift_pill: 'Backpacks, Hoodies, AirPods & Courses',

            // Home - About App
            about_app_title: '📱 About the Application',
            about_meta_year: '📅 <strong>Year Created:</strong> 2026',
            about_meta_author: '🏢 <strong>Organizer / Author:</strong> "Planeta" Learning Center',
            about_copyright: '<strong>Copyright:</strong> © 2026 "Planeta" Learning Center. All rights reserved. Reproduction, distribution, or commercial exploitation is strictly prohibited.',

            // Tillar View
            view_tillar_badge: 'Language Mastery',
            view_tillar_title: '🌐 Foreign Language Catalog',
            view_tillar_sub: 'Choose your desired language and expand your vocabulary with native audio pronunciation.',
            btn_start_learning: 'Start Learning 🚀',

            // Reyting View
            view_reyting_badge: 'Leaders Arena',
            view_reyting_title: '🏆 Student Leaderboard',
            view_reyting_sub: 'The league of most active and knowledgeable learners. Battle hard and take 1st place!',
            th_rank: 'Rank',
            th_learner: 'Student',
            th_league: 'League',
            th_wins: 'Wins',
            th_stars: 'Total Stars',

            // Star View
            star_balance_title: '⭐ Your Stars Balance',
            star_balance_sub: 'Complete video lessons, pass mock exams, and triumph in 1v1 battles to earn more stars!',
            star_store_badge: 'Rewards Marketplace',
            star_store_title: '🎁 Gifts and Rewards Store',
            star_store_sub: 'Redeem your earned stars for commemorative gifts and merchandise from «Planeta» Learning Center!',
            btn_redeem: 'Redeem Gift 🎁',

            // Store Gift Localizations
            store_g1_title: 'SpeakPro & "Planeta" Special Backpack',
            store_g1_category: 'SOUVENIRS',
            store_g1_desc: 'Water-resistant modern backpack with dedicated laptop compartment.',
            store_g1_badge: 'MOST POPULAR',
            store_g2_title: '"Planeta" Branded Hoodie',
            store_g2_category: 'APPAREL',
            store_g2_desc: 'Warm and comfortable SpeakPro hoodie made of 100% premium cotton.',
            store_g2_badge: 'TRENDING',
            store_g3_title: 'Wireless Bluetooth Headphones',
            store_g3_category: 'ELECTRONICS',
            store_g3_desc: 'Crisp audio device for listening to language lessons and foreign music.',
            store_g3_badge: 'PREMIUM',
            store_g4_title: 'Foreign Language Book Collection',
            store_g4_category: 'BOOKS',
            store_g4_desc: 'Original imported textbooks and graded readers to expand your vocabulary.',
            store_g4_badge: 'BESTSELLER',
            store_g5_title: '1-Month Free Course Voucher at "Planeta"',
            store_g5_category: 'EDUCATION',
            store_g5_desc: 'Full month of any language course at "Planeta" Learning Center — online or in-person.',
            store_g5_badge: 'SUPER PRIZE',
            store_g6_title: 'SpeakPro Smart Thermo Mug',
            store_g6_category: 'ACCESSORIES',
            store_g6_desc: 'Modern stainless steel thermal mug with LED temperature display.',
            store_g6_badge: 'NEW ARRIVAL',
            store_not_enough: 'Not enough stars! You have: {stars} ⭐, need: {cost} ⭐. Win more battles to earn stars!',
            store_confirm: 'Do you want to redeem "{title}" for {cost} ⭐?\n\nYour gift will be delivered by "Planeta" Learning Center administration.',
            store_success_title: '🎉 Congratulations! You ordered the "{title}" gift!\n\nOrder confirmed. "Planeta" Learning Center will contact you soon.',
            store_success_toast: '"{title}" successfully redeemed! -{cost} ⭐',

            // Leaderboard
            league_gold: 'Gold League',
            league_silver: 'Silver League',
            league_bronze: 'Bronze League',
            lang_tag_en: '🇬🇧 English',
            lang_tag_ru: '🇷🇺 Russian',
            lang_tag_de: '🇩🇪 German',
            wins_suffix: '',

            // Game Result Modal
            result_victory: 'Victory! Congratulations! 🏆',
            result_good_game: 'Great Battle! 🤝',
            result_score_1v1: 'You: {userScore} pts | Opponent: {oppScore} pts',
            result_stars_win: '+5 ⭐ Star Reward (Victory)',
            result_stars_lose: '0 ⭐ (Defeat: 5 - 0)',
            result_6p_champion: '🥇 1ST PLACE! CHAMPION!',
            result_6p_place: 'You finished in {rank}th place!',
            result_6p_score: '6-player battle finished! Your score: {score}',
            result_6p_stars_win: '+{stars} ⭐ Star Reward',
            result_6p_stars_lose: '0 ⭐ (Did not reach podium)',
            result_2v2_red_win: 'Eagles Team Wins! 🦅',
            result_2v2_blue_win: 'Falcons Team Wins! 🤝',
            result_2v2_score: 'Words you typed correctly: {count}',

            // Games Views
            game_1v1_badge: 'Speed Knowledge Duel',
            game_1v1_title: '⚔️ 1 vs 1 Vocabulary Duel',
            game_1v1_sub: 'Test your vocabulary speed and accuracy against real online opponents or intelligent bots!',
            game_6p_badge: 'Mass Tournament',
            game_6p_title: '🏟️ 6-Player Word Arena',
            game_6p_sub: 'A massive knowledge arena where 6 players battle simultaneously for podium spots!',
            game_2v2_badge: 'Team Speed Typing',
            game_2v2_title: '⌨️ 2 vs 2 Team Typing',
            game_2v2_sub: 'Team up with a partner and out-type the opposing duo in fast-paced word typing!',
            game_rules_title: 'Battle Rules:',
            game_rule_1v1_rewards: '<strong>Star Rewards:</strong> Winner takes <strong>+5 ⭐</strong>, defeat gets <strong>0 ⭐</strong> (5 - 0).',
            game_rule_6p_rewards: '<strong>Star Rewards:</strong> 1st place: <strong>+3 ⭐</strong>, 2nd: <strong>+2 ⭐</strong>, 3rd: <strong>+1 ⭐</strong>, others <strong>0 ⭐</strong>.',
            game_select_lang: 'Which language will you battle in?',
            btn_start_game: 'Start Battle!',
            arena_round: 'Round',
            arena_you: 'You (Student)',
            arena_opponent: 'Opponent',
            arena_thinking: 'Thinking...',
            arena_listen: 'Listen pronunciation',

            // Mini Games Extended Setup & Rules
            game_1v1_about_title: '1 vs 1 Vocabulary Duel',
            game_1v1_about_desc: 'Fast-paced 1-on-1 duel testing vocabulary knowledge. Over 5 rounds, the player who finds the correct translation fastest wins!',
            game_1v1_rule1: '<strong>Game Structure:</strong> 5 rounds. 10 seconds given per round.',
            game_1v1_rule2: '<strong>Points:</strong> Faster and correct answers grant higher points (max 120 pts).',
            game_1v1_rule3: '<strong>Star Rewards:</strong> Winner receives <strong>+5 ⭐</strong>, defeat gets <strong>0 ⭐</strong> (5 - 0).',
            game_1v1_btn: 'Start the Battle!',

            game_6p_about_title: 'Word Battle — 6-Player Room',
            game_6p_about_desc: '6 students gather in one room and simultaneously answer the same questions. The fastest and most knowledgeable rise to the top!',
            game_6p_rule1: '<strong>Room capacity:</strong> 6 participants compete in real-time.',
            game_6p_rule2: '<strong>Speed matters:</strong> The first correct answer earns maximum points (100, 80, 60 pts...).',
            game_6p_rule3: '<strong>Podium rewards:</strong> 1st place <strong>+3 ⭐</strong>, 2nd <strong>+2 ⭐</strong>, 3rd <strong>+1 ⭐</strong>, others 0 ⭐.',
            game_6p_label: 'Battle language:',
            game_6p_btn: 'Enter 6-Player Room & Start!',

            game_2v2_about_title: 'Typing 2 vs 2 (Speed Typing Race)',
            game_2v2_about_desc: 'A fierce word-typing competition between two teams! Type the words on screen quickly and flawlessly, pull your team\'s flag towards the finish line!',
            game_2v2_rule1: '<strong>Teams:</strong> "Eagles" (Red) and "Falcons" (Blue). 2 members each.',
            game_2v2_rule2: '<strong>Tug-of-war mechanics:</strong> Each correctly typed word pulls the rope in your team\'s favor.',
            game_2v2_rule3: '<strong>Reward:</strong> Winning team members get <strong>+5 ⭐</strong>, losing team gets 0 ⭐!',
            game_2v2_label: 'Typing language:',
            game_2v2_btn: 'Start 2 vs 2 Typing Race!',

            opt_en: '🇬🇧 English',
            opt_ru: '🇷🇺 Russian',
            opt_de: '🇩🇪 German',

            modal_close: 'Close',
            modal_view_leaderboard: 'View Leaderboard 🏆',

            // Settings View
            settings_badge: 'Profile & Preferences',
            settings_title: '⚙️ System Settings',
            settings_subtitle: 'Customize your interface language, personal account, and audio settings.',
            section_app_lang: '🌐 App Language (Interface)',
            section_app_lang_sub: 'Choose language for all menus, buttons, and texts:',
            lang_uz: 'O\'zbek tili (Uzbek)',
            lang_ru: 'Русский (Russian)',
            lang_en: 'English (US/UK)',
            section_account: '👤 Account Management',
            section_account_sub: 'Manage your learner profile and avatar:',
            label_avatar: 'Profile Avatar:',
            label_name: 'Full Name',
            label_email: 'Email Address',
            label_phone: 'Phone Number',
            label_id: 'Student ID Code',
            stat_stars: 'Stars Earned',
            stat_wins: 'Battles Won',
            stat_level: 'Current Level',
            btn_logout: 'Log Out 🚪',
            btn_reset: 'Reset Progress 🔄',
            section_theme: '🌓 Appearance Theme',
            section_theme_sub: 'Select comfortable color mode for your eyes:',
            theme_light: '☀️ Light Mode',
            theme_light_desc: 'Clean, radiant and crisp modern design',
            theme_dark: '🌙 Dark Mode',
            theme_dark_desc: 'Deep neon contrast, comfortable at night',
            section_sound: '🔊 Audio & Speech',
            section_sound_sub: 'Button sound effects and voice pronunciation:',
            sound_effects: 'Sound Effects (Sound FX)',
            sound_effects_desc: 'Button clicks, victory chimes and sound feedback',
            speech_audio: 'Voice Synthesis (Web Speech)',
            speech_audio_desc: 'Accurate foreign speech pronunciation by system audio',
            volume_label: 'Volume level:',
            btn_save_all: 'Save All Settings ✅',

            // Footer & Modals
            footer_copy: '© 2026 "Planeta" Learning Center. All rights reserved.<br>Copying, distribution, or commercial exploitation is strictly prohibited.',
            auth_tab_login: 'Log In',
            auth_tab_register: 'Register',
            auth_btn_submit: 'Sign In to Account',
            auth_btn_demo: '⚡ Enter as Guest / Demo'
        }
    },

    init() {
        const saved = localStorage.getItem('speakpro_app_lang');
        if (saved && this.dictionaries[saved]) {
            this.currentLang = saved;
        } else {
            this.currentLang = 'uz';
        }
        this.applyLanguage(this.currentLang);
    },

    setLanguage(langCode) {
        if (!this.dictionaries[langCode]) return;
        this.currentLang = langCode;
        localStorage.setItem('speakpro_app_lang', langCode);
        this.applyLanguage(langCode);
        if (window.App) {
            App.user.appLang = langCode;
            App.saveUserState();
            App.showToast(this.t('toast_lang_changed') || 'Ilova tili yangilandi! 🌐', 'success');
        }
    },

    t(key) {
        const dict = this.dictionaries[this.currentLang] || this.dictionaries['uz'];
        return dict[key] || key;
    },

    applyLanguage(langCode) {
        const dict = this.dictionaries[langCode] || this.dictionaries['uz'];

        // 1. Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // 2. Navigation bar items
        const navMap = {
            'home': 'nav_home',
            'tillar': 'nav_languages',
            'darslar': 'nav_lessons',
            'lugat': 'nav_lugat',
            'reyting': 'nav_leaderboard',
            'star': 'nav_star',
            'speaking': 'nav_speaking',
            'sozlamalar': 'nav_settings'
        };

        Object.keys(navMap).forEach(viewId => {
            const link = document.querySelector(`.nav-menu-link[data-view="${viewId}"]`);
            if (link) {
                const key = navMap[viewId];
                link.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                        node.textContent = ' ' + dict[key];
                    }
                });
            }
        });

        const gamesLink = document.querySelector(`.nav-menu-link[data-view="games-parent"]`);
        if (gamesLink && dict['nav_games']) {
            gamesLink.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                    node.textContent = ' ' + dict['nav_games'] + ' ';
                }
            });
        }

        const sub1 = document.querySelector('[data-view="game-1v1"]');
        if (sub1 && dict['nav_game_1v1']) sub1.innerHTML = '⚔️ ' + dict['nav_game_1v1'];
        const sub2 = document.querySelector('[data-view="game-6p"]');
        if (sub2 && dict['nav_game_6p']) sub2.innerHTML = '🏟️ ' + dict['nav_game_6p'];
        const sub3 = document.querySelector('[data-view="game-2v2"]');
        if (sub3 && dict['nav_game_2v2']) sub3.innerHTML = '⌨️ ' + dict['nav_game_2v2'];

        const authBtnText = document.getElementById('nav-auth-btn-text');
        if (authBtnText && (!window.App || !window.App.user || !window.App.user.isLoggedIn)) {
            authBtnText.innerText = dict['nav_login'];
        }

        // 3. Home View - Hero & Metrics
        const heroSeal = document.querySelector('.hero-planeta-seal');
        if (heroSeal) {
            heroSeal.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                    node.textContent = ' ' + dict['hero_seal'];
                }
            });
        }

        const heroTitle = document.querySelector('.hero-main-title');
        if (heroTitle) heroTitle.innerHTML = dict['hero_title'];

        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) heroDesc.innerHTML = dict['hero_desc'];

        const heroBtns = document.querySelectorAll('.hero-actions-row button');
        if (heroBtns.length >= 3) {
            this.replaceBtnText(heroBtns[0], dict['hero_btn_lessons']);
            this.replaceBtnText(heroBtns[1], dict['hero_btn_1v1']);
            this.replaceBtnText(heroBtns[2], dict['hero_btn_store']);
        }

        const metricLabels = document.querySelectorAll('.hero-metrics-ribbon .metric-label');
        if (metricLabels.length >= 3) {
            metricLabels[0].innerText = dict['metric_active_learners'];
            metricLabels[1].innerText = dict['metric_stars_awarded'];
            metricLabels[2].innerText = dict['metric_main_langs'];
        }

        // 4. Home View - Languages section
        const homeSectionBlocks = document.querySelectorAll('#view-home .section-block');
        if (homeSectionBlocks.length >= 3) {
            // Block 1: Which languages
            const b1 = homeSectionBlocks[0];
            const b1Badge = b1.querySelector('.section-badge-pill');
            const b1Title = b1.querySelector('.section-title');
            const b1Sub = b1.querySelector('.section-subtitle');
            if (b1Badge) b1Badge.innerText = dict['which_langs_badge'];
            if (b1Title) b1Title.innerText = dict['which_langs_title'];
            if (b1Sub) b1Sub.innerText = dict['which_langs_sub'];

            // Block 1 language cards inside Home
            const langCards = b1.querySelectorAll('.luxury-lang-card');
            if (langCards.length >= 3) {
                // English
                this.updateLangCard(langCards[0], dict['lang_en_title'], dict['lang_en_desc'], dict['lang_en_btn'], dict['btn_listen'], dict['live_pronounce']);
                // Russian
                this.updateLangCard(langCards[1], dict['lang_ru_title'], dict['lang_ru_desc'], dict['lang_ru_btn'], dict['btn_listen'], dict['live_pronounce']);
                // German
                this.updateLangCard(langCards[2], dict['lang_de_title'], dict['lang_de_desc'], dict['lang_de_btn'], dict['btn_listen'], dict['live_pronounce']);
            }

            // Block 2: Gamification (Star)
            const b2 = homeSectionBlocks[1];
            const b2Badge = b2.querySelector('.section-badge-pill');
            const b2Title = b2.querySelector('.section-title');
            const b2Sub = b2.querySelector('.section-subtitle');
            if (b2Badge) b2Badge.innerText = dict['gamify_badge'];
            if (b2Title) b2Title.innerText = dict['gamify_title'];
            if (b2Sub) b2Sub.innerText = dict['gamify_sub'];

            const featCards = b2.querySelectorAll('.luxury-feature-card');
            if (featCards.length >= 3) {
                this.updateFeatureCard(featCards[0], dict['feat_duel_title'], dict['feat_duel_desc'], dict['feat_duel_pill']);
                this.updateFeatureCard(featCards[1], dict['feat_star_title'], dict['feat_star_desc'], dict['feat_star_pill']);
                this.updateFeatureCard(featCards[2], dict['feat_gift_title'], dict['feat_gift_desc'], dict['feat_gift_pill']);
            }

            // Block 3: About App
            const b3 = homeSectionBlocks[2];
            const aboutTitle = b3.querySelector('.about-app-title');
            if (aboutTitle) {
                aboutTitle.childNodes.forEach(n => {
                    if (n.nodeType === Node.TEXT_NODE && n.textContent.trim()) {
                        n.textContent = ' ' + dict['about_app_title'];
                    }
                });
            }
            const metaRows = b3.querySelectorAll('.about-meta-row span');
            if (metaRows.length >= 2) {
                metaRows[0].innerHTML = dict['about_meta_year'];
                metaRows[1].innerHTML = dict['about_meta_author'];
            }
            const legalBlock = b3.querySelector('.copyright-legal-block');
            if (legalBlock) legalBlock.innerHTML = dict['about_copyright'];
        }

        // 5. Tillar View
        const tillarSec = document.getElementById('view-tillar');
        if (tillarSec) {
            const tBadge = tillarSec.querySelector('.section-badge-pill');
            const tTitle = tillarSec.querySelector('.section-title');
            const tSub = tillarSec.querySelector('.section-subtitle');
            if (tBadge) tBadge.innerText = dict['view_tillar_badge'];
            if (tTitle) tTitle.innerText = dict['view_tillar_title'];
            if (tSub) tSub.innerText = dict['view_tillar_sub'];
        }

        // 6. Reyting View
        const reytingSec = document.getElementById('view-reyting');
        if (reytingSec) {
            const rBadge = reytingSec.querySelector('.section-badge-pill');
            const rTitle = reytingSec.querySelector('.section-title');
            const rSub = reytingSec.querySelector('.section-subtitle');
            if (rBadge) rBadge.innerText = dict['view_reyting_badge'];
            if (rTitle) rTitle.innerText = dict['view_reyting_title'];
            if (rSub) rSub.innerText = dict['view_reyting_sub'];

            const ths = reytingSec.querySelectorAll('thead th');
            if (ths.length >= 5) {
                ths[0].innerText = dict['th_rank'];
                ths[1].innerText = dict['th_learner'];
                ths[2].innerText = dict['th_league'];
                ths[3].innerText = dict['th_wins'];
                ths[4].innerText = dict['th_stars'];
            }
        }

        // 7. Star View
        const starSec = document.getElementById('view-star');
        if (starSec) {
            const sBalTitle = starSec.querySelector('.star-balance-info h2');
            const sBalSub = starSec.querySelector('.star-balance-info p');
            const sBadge = starSec.querySelector('.section-header .section-badge-pill');
            const sTitle = starSec.querySelector('.section-header .section-title');
            const sSub = starSec.querySelector('.section-header .section-subtitle');
            if (sBalTitle) sBalTitle.innerText = dict['star_balance_title'];
            if (sBalSub) sBalSub.innerText = dict['star_balance_sub'];
            if (sBadge) sBadge.innerText = dict['star_store_badge'];
            if (sTitle) sTitle.innerText = dict['star_store_title'];
            if (sSub) sSub.innerText = dict['star_store_sub'];
        }

        // 8. Mini Games Views (1v1, 6p, 2v2)
        this.updateGameView('view-game-1v1', dict['game_1v1_badge'], dict['game_1v1_title'], dict['game_1v1_sub'], dict['btn_start_game'], dict['game_select_lang'], dict['game_rules_title']);
        this.updateGameView('view-game-6p', dict['game_6p_badge'], dict['game_6p_title'], dict['game_6p_sub'], dict['btn_start_game'], dict['game_select_lang'], dict['game_rules_title']);
        this.updateGameView('view-game-2v2', dict['game_2v2_badge'], dict['game_2v2_title'], dict['game_2v2_sub'], dict['btn_start_game'], dict['game_select_lang'], dict['game_rules_title']);

        // 9. Footer
        const footerCopy = document.querySelector('.footer-copy');
        if (footerCopy) footerCopy.innerHTML = dict['footer_copy'];

        // 10. Auth Modal
        const authTabLogin = document.getElementById('auth-tab-login');
        const authTabReg = document.getElementById('auth-tab-register');
        const authSubmit = document.getElementById('auth-submit-btn');
        const authDemo = document.getElementById('btn-demo-login');
        if (authTabLogin) authTabLogin.innerText = dict['auth_tab_login'];
        if (authTabReg) authTabReg.innerText = dict['auth_tab_register'];
        if (authSubmit) authSubmit.innerText = dict['auth_btn_submit'];
        if (authDemo) authDemo.innerText = dict['auth_btn_demo'];

        // 10b. Game Result Modal buttons
        const gameResClose = document.getElementById('game-res-close');
        const gameResLB = document.getElementById('game-res-leaderboard');
        if (gameResClose) gameResClose.innerText = dict['modal_close'] || 'Yopish';
        if (gameResLB) gameResLB.innerText = dict['modal_view_leaderboard'] || 'Reytingni ko\'rish 🏆';

        // 11. Re-render dynamic components with translated labels
        if (window.App) {
            App.renderLanguages();
            App.renderStarStore();
            App.renderLeaderboard('weekly');
        }
        if (window.LessonsApp) {
            LessonsApp.render();
        }
    },

    replaceBtnText(btn, text) {
        if (!btn) return;
        btn.childNodes.forEach(n => {
            if (n.nodeType === Node.TEXT_NODE && n.textContent.trim()) {
                n.textContent = ' ' + text;
            }
        });
    },

    updateLangCard(card, title, desc, btnText, listenText, liveText) {
        if (!card) return;
        const titleEl = card.querySelector('.lang-card-title');
        const descEl = card.querySelector('.lang-card-desc');
        const btn = card.querySelector('button.btn-primary');
        const listenBtn = card.querySelector('.sample-listen-btn');
        const liveEl = card.querySelector('.audio-sample-strip > div > div:first-child');

        if (titleEl) titleEl.innerText = title;
        if (descEl) descEl.innerText = desc;
        if (btn) btn.innerText = btnText;
        if (listenBtn) this.replaceBtnText(listenBtn, listenText);
        if (liveEl) liveEl.innerText = liveText;
    },

    updateFeatureCard(card, title, desc, pill) {
        if (!card) return;
        const titleEl = card.querySelector('.feature-title');
        const descEl = card.querySelector('.feature-description');
        const pillEl = card.querySelector('.feature-pill-badge');
        if (titleEl) titleEl.innerText = title;
        if (descEl) descEl.innerText = desc;
        if (pillEl) pillEl.innerText = pill;
    },

    updateGameView(viewId, badge, title, sub, btnText, selectLangLabel, rulesTitle) {
        const sec = document.getElementById(viewId);
        if (!sec) return;
        const dict = this.dictionaries[this.currentLang] || this.dictionaries['uz'];

        const b = sec.querySelector('.section-badge-pill');
        const t = sec.querySelector('.section-title');
        const s = sec.querySelector('.section-subtitle');
        const btn = sec.querySelector('.game-setup-row .btn-primary');
        const lbl = sec.querySelector('.game-setup-row label');
        const rTitle = sec.querySelector('.game-rules-card h3');

        if (b) b.innerText = badge;
        if (t) t.innerText = title;
        if (s) s.innerText = sub;
        if (btn) this.replaceBtnText(btn, btnText);
        if (lbl) lbl.innerText = selectLangLabel;
        if (rTitle) rTitle.innerText = rulesTitle;

        // Update game about card title, description, rules, select options, and button
        let prefix = '';
        if (viewId === 'view-game-1v1') prefix = 'game_1v1';
        else if (viewId === 'view-game-6p') prefix = 'game_6p';
        else if (viewId === 'view-game-2v2') prefix = 'game_2v2';

        if (prefix) {
            // About title
            const aboutTitle = sec.querySelector('.game-about-title');
            if (aboutTitle && dict[prefix + '_about_title']) {
                aboutTitle.innerText = dict[prefix + '_about_title'];
            }
            // About description
            const aboutDesc = sec.querySelector('.game-about-desc');
            if (aboutDesc && dict[prefix + '_about_desc']) {
                aboutDesc.innerText = dict[prefix + '_about_desc'];
            }
            // Rules (3 items)
            const ruleItems = sec.querySelectorAll('.game-rule-item');
            if (ruleItems.length >= 3) {
                const rule1Div = ruleItems[0].querySelector('div:last-child');
                const rule2Div = ruleItems[1].querySelector('div:last-child');
                const rule3Div = ruleItems[2].querySelector('div:last-child');
                if (rule1Div && dict[prefix + '_rule1']) rule1Div.innerHTML = dict[prefix + '_rule1'];
                if (rule2Div && dict[prefix + '_rule2']) rule2Div.innerHTML = dict[prefix + '_rule2'];
                if (rule3Div && dict[prefix + '_rule3']) rule3Div.innerHTML = dict[prefix + '_rule3'];
            }
            // Label for select
            const setupLabel = sec.querySelector('.game-setup-row label');
            if (setupLabel) {
                if (prefix === 'game_1v1') setupLabel.innerText = dict['game_select_lang'] || selectLangLabel;
                else if (dict[prefix + '_label']) setupLabel.innerText = dict[prefix + '_label'];
            }
            // Button text for specific games
            const setupBtn = sec.querySelector('.game-setup-row .btn-primary');
            if (setupBtn && dict[prefix + '_btn']) {
                this.replaceBtnText(setupBtn, dict[prefix + '_btn']);
            }
            // Select options
            const selectEl = sec.querySelector('.game-select-input');
            if (selectEl && dict['opt_en']) {
                const options = selectEl.querySelectorAll('option');
                options.forEach(opt => {
                    if (opt.value === 'en') opt.innerText = dict['opt_en'];
                    else if (opt.value === 'ru') opt.innerText = dict['opt_ru'];
                    else if (opt.value === 'de') opt.innerText = dict['opt_de'];
                });
            }

            // Arena elements
            const arena = sec.querySelector('.game-arena');
            if (arena) {
                // Player name "Siz (O'quvchi)" / "You (Student)"
                const duelNames = arena.querySelectorAll('.duel-name');
                if (duelNames.length >= 1 && !duelNames[0].id) {
                    duelNames[0].innerText = dict['arena_you'] || 'Siz (O\'quvchi)';
                }
                // Opponent name
                const oppStatus = arena.querySelector('.opp-status');
                if (oppStatus) oppStatus.innerText = dict['arena_thinking'] || 'O\'ylamoqda...';
                // Listen button
                const listenBtns = arena.querySelectorAll('.question-box .btn-secondary');
                listenBtns.forEach(btn => {
                    this.replaceBtnText(btn, dict['arena_listen'] || 'Talaffuzni tinglash');
                });
            }
        }
    }
};

window.SpeakProI18n = SpeakProI18n;
