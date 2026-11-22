// School77 - Knowledge Base & Datastore (English, Russian, German)
// Includes vocabulary, lesson modules, leaderboard entries, and Star gift store items.

const School77Data = {
    // 3 Supported languages
    languages: {
        en: {
            id: 'en',
            name: 'Ingliz tili',
            nativeName: 'English',
            flag: '🇬🇧',
            code: 'en-US',
            description: 'Dunyodagi №1 xalqaro muloqot tili. IT, biznes, sayohat va fan sohasi uchun zarur.',
            stats: { words: '3500+', lessons: '48 ta modul', learners: '12,450 o\'quvchi' },
            samplePhrase: { text: 'Hello, welcome to School77!', tr: 'Salom, School77-ga xush kelibsiz!' }
        },
        ru: {
            id: 'ru',
            name: 'Rus tili',
            nativeName: 'Русский язык',
            flag: '🇷🇺',
            code: 'ru-RU',
            description: 'MDH davlatlari va xalqaro munosabatlarda muhim til. Adabiyot va amaliy muloqot asosi.',
            stats: { words: '2800+', lessons: '42 ta modul', learners: '9,820 o\'quvchi' },
            samplePhrase: { text: 'Привет, добро пожаловать в School77!', tr: 'Salom, School77-ga xush kelibsiz!' }
        },
        de: {
            id: 'de',
            name: 'Nemis tili',
            nativeName: 'Deutsch',
            flag: '🇩🇪',
            code: 'de-DE',
            description: 'Yevropaning iqtisodiy yetakchisi Germaniya, Avstriya va Shveytsariyada ta\'lim va ish kaliti.',
            stats: { words: '2400+', lessons: '36 ta modul', learners: '6,340 o\'quvchi' },
            samplePhrase: { text: 'Hallo, willkommen bei School77!', tr: 'Salom, School77-ga xush kelibsiz!' }
        }
    },

    // Rich vocabulary database for lessons, flashcards, and interactive games
    vocabulary: {
        en: [
            { word: 'Opportunity', tr: 'Imkoniyat', phonetic: '/ˌɒp.əˈtjuː.nə.ti/', pos: 'ot', example: 'Take this great opportunity.', distractors: ['Qiyinchilik', 'Tarix', 'Xavf'] },
            { word: 'Knowledge', tr: 'Bilim', phonetic: '/ˈnɒl.ɪdʒ/', pos: 'ot', example: 'Knowledge is power.', distractors: ['Kutubxona', 'O\'qituvchi', 'Vaqt'] },
            { word: 'Success', tr: 'Muvaffaqiyat', phonetic: '/səkˈses/', pos: 'ot', example: 'Hard work brings success.', distractors: ['Boylik', 'Sabr', 'Imtihon'] },
            { word: 'Challenge', tr: 'Sinov / Qiyinchilik', phonetic: '/ˈtʃæl.ɪndʒ/', pos: 'ot', example: 'Accept the challenge.', distractors: ['G\'alaba', 'Soat', 'Do\'st'] },
            { word: 'Inspire', tr: 'Ilhomlantirmoq', phonetic: '/ɪnˈspaɪər/', pos: 'fe\'l', example: 'You inspire many people.', distractors: ['Eslab qolmoq', 'Charchamoq', 'Qo\'rqitmoq'] },
            { word: 'Journey', tr: 'Sayohat / Safar', phonetic: '/ˈdʒɜː.ni/', pos: 'ot', example: 'Life is a wonderful journey.', distractors: ['Kema', 'Samolyot', 'Uy'] },
            { word: 'Improve', tr: 'Rivojlantirmoq', phonetic: '/ɪmˈpruːv/', pos: 'fe\'l', example: 'Practice will improve your skills.', distractors: ['To\'xtatmoq', 'Buzmoq', 'Uchmoq'] },
            { word: 'Courage', tr: 'Jasorat', phonetic: '/ˈkʌr.ɪdʒ/', pos: 'ot', example: 'Have the courage to speak.', distractors: ['Qo\'rquv', 'G\'azab', 'Kulgi'] },
            { word: 'Achieve', tr: 'Erishmoq', phonetic: '/əˈtʃiːv/', pos: 'fe\'l', example: 'You will achieve your goals.', distractors: ['Yo\'qotmoq', 'Sotib olmoq', 'Yozmoq'] },
            { word: 'Curious', tr: 'Qiziquvchan', phonetic: '/ˈkjʊə.ri.əs/', pos: 'sifat', example: 'Stay curious and learn every day.', distractors: ['Dangasa', 'Xafa', 'Kuchli'] },
            { word: 'Confidence', tr: 'Ishonch', phonetic: '/ˈkɒn.fɪ.dəns/', pos: 'ot', example: 'Speak with confidence.', distractors: ['Shubha', 'Gumon', 'Zaiflik'] },
            { word: 'Patience', tr: 'Sabr-toqat', phonetic: '/ˈpeɪ.ʃəns/', pos: 'ot', example: 'Patience is essential for learning.', distractors: ['Shoshqaloqlik', 'Burch', 'G\'urur'] }
        ],
        ru: [
            { word: 'Возможность', tr: 'Imkoniyat', phonetic: '[vəzˈmoʐnəsʲtʲ]', pos: 'ot', example: 'Не упустите эту возможность.', distractors: ['Qiyinchilik', 'Boylik', 'Sabab'] },
            { word: 'Знание', tr: 'Bilim', phonetic: '[ˈznanʲɪjə]', pos: 'ot', example: 'Знание — это великая сила.', distractors: ['Xabar', 'Kitob', 'Dars'] },
            { word: 'Успех', tr: 'Muvaffaqiyat', phonetic: '[ʊsʲˈpʲex]', pos: 'ot', example: 'Желаем вам огромных успехов!', distractors: ['Omad', 'Quvonch', 'G\'alaba'] },
            { word: 'Развитие', tr: 'Rivojlanish', phonetic: '[rəzˈvʲitʲɪjə]', pos: 'ot', example: 'Развитие речи очень важно.', distractors: ['To\'xtash', 'O\'sish', 'Qaytish'] },
            { word: 'Путешествие', tr: 'Sayohat', phonetic: '[pʊtʲɪˈʂɛstvʲɪjə]', pos: 'ot', example: 'Это было незабываемое путешествие.', distractors: ['Poyezd', 'Kema', 'Mehmonxona'] },
            { word: 'Вдохновение', tr: 'Ilhom', phonetic: '[vdəxnɐˈvʲenʲɪjə]', pos: 'ot', example: 'Музыка дарит вдохновение.', distractors: ['Hordiq', 'Charchoq', 'Orzu'] },
            { word: 'Терпение', tr: 'Sabr', phonetic: '[tʲɪrˈpʲenʲɪjə]', pos: 'ot', example: 'Терпение и труд всё перетрут.', distractors: ['G\'azab', 'Quvvat', 'Aqllilik'] },
            { word: 'Достижение', tr: 'Yutuq / Natija', phonetic: '[dəstʲɪˈʐɛnʲɪjə]', pos: 'ot', example: 'Важные научные достижения.', distractors: ['Topshiriq', 'Vazifa', 'Qadam'] },
            { word: 'Общение', tr: 'Muloqot', phonetic: '[ɐpˈɕːenʲɪjə]', pos: 'ot', example: 'Живое общение помогает учить язык.', distractors: ['Sukunat', 'Maktub', 'Yig\'ilish'] },
            { word: 'Дружба', tr: 'Do\'stlik', phonetic: '[ˈdruʐbə]', pos: 'ot', example: 'Крепкая дружба навек.', distractors: ['Raqobat', 'Uchrashuv', 'Yordam'] },
            { word: 'Будущее', tr: 'Kelajak', phonetic: '[ˈbudʊɕːɪjə]', pos: 'ot', example: 'Инвестируйте в своё будущее.', distractors: ['O\'tmish', 'Bugun', 'Vaqt'] },
            { word: 'Уверенность', tr: 'Ishonch', phonetic: '[ʊˈvʲerʲɪnəsʲtʲ]', pos: 'ot', example: 'Уверенность в своих силах.', distractors: ['Qo\'rquv', 'Shubha', 'Tashvish'] }
        ],
        de: [
            { word: 'Gelegenheit', tr: 'Imkoniyat / Fursat', phonetic: '[ɡəˈleːɡn̩haɪ̯t]', pos: 'ot', example: 'Nutzen Sie diese Gelegenheit.', distractors: ['Vaqt', 'Xavf', 'Mehnat'] },
            { word: 'Wissen', tr: 'Bilim', phonetic: '[ˈvɪsn̩]', pos: 'ot', example: 'Wissen ist die beste Investition.', distractors: ['Aql', 'Sinf', 'Maktab'] },
            { word: 'Erfolg', tr: 'Muvaffaqiyat', phonetic: '[ɛɐ̯ˈfɔlk]', pos: 'ot', example: 'Viel Erfolg beim Deutschlernen!', distractors: ['Omad', 'Harakat', 'G\'alaba'] },
            { word: 'Zukunft', tr: 'Kelajak', phonetic: '[ˈtsuːkʊnft]', pos: 'ot', example: 'Die Zukunft gehört den Mutigen.', distractors: ['O\'tmish', 'Hozirgi payt', 'Umr'] },
            { word: 'Reise', tr: 'Sayohat / Safar', phonetic: '[ˈʁaɪ̯zə]', pos: 'ot', example: 'Gute Reise nach Berlin!', distractors: ['Chipta', 'Chegara', 'Shahar'] },
            { word: 'Geduld', tr: 'Sabr-toqat', phonetic: '[ɡəˈdʊlt]', pos: 'ot', example: 'Geduld bringt Rosen.', distractors: ['Jasorat', 'Kutish', 'Tinchlik'] },
            { word: 'Freundschaft', tr: 'Do\'stlik', phonetic: '[ˈfʁɔɪ̯ntʃaft]', pos: 'ot', example: 'Echte Freundschaft ist wertvoll.', distractors: ['Hamkorlik', 'Qarindoshlik', 'Tanish'] },
            { word: 'Erfahrung', tr: 'Tajriba', phonetic: '[ɛɐ̯ˈfaːʁʊŋ]', pos: 'ot', example: 'Praktische Erfahrung zählt.', distractors: ['Ma\'lumot', 'Dars', 'Qoida'] },
            { word: 'Entscheidung', tr: 'Qaror', phonetic: '[ɛntˈʃaɪ̯dʊŋ]', pos: 'ot', example: 'Eine kluge Entscheidung treffen.', distractors: ['Fikr', 'Taklif', 'Maslahat'] },
            { word: 'Mut', tr: 'Jasorat / Botirlik', phonetic: '[muːt]', pos: 'ot', example: 'Hab Mut, Deutsch zu sprechen!', distractors: ['Qo\'rquv', 'Kuch', 'Harakat'] },
            { word: 'Ziel', tr: 'Maqsad / Marra', phonetic: '[tsiːl]', pos: 'ot', example: 'Wir haben unser Ziel erreicht.', distractors: ['Yo\'l', 'Boshlanish', 'Reja'] },
            { word: 'Sprache', tr: 'Til', phonetic: '[ˈʃpʁaːxə]', pos: 'ot', example: 'Jede neue Sprache öffnet eine Tür.', distractors: ['Kitob', 'Lug\'at', 'Xalq'] }
        ]
    },

    // Lesson packages for interactive learning view
    lessons: [
        {
            id: 'l1',
            lang: 'en',
            langName: 'Ingliz tili',
            level: 'A1 - Boshlang\'ich',
            title: 'Salomlashish va O\'zini tanishtirish',
            desc: 'Ingliz tilida ilk suhbatni erkin boshlash sirlari va eng muhim iboralar.',
            stars: 15,
            cardsCount: 6,
            items: [
                { term: 'Nice to meet you', tr: 'Tanishganimdan xursandman', audio: 'Nice to meet you' },
                { term: 'Where are you from?', tr: 'Siz qayerdansiz?', audio: 'Where are you from?' },
                { term: 'I am learning languages', tr: 'Men tillarni o\'rganyapman', audio: 'I am learning languages' },
                { term: 'Have a great day!', tr: 'Kuningiz xayrli o\'tsin!', audio: 'Have a great day!' },
                { term: 'Could you help me?', tr: 'Menga yordam bera olasizmi?', audio: 'Could you help me?' },
                { term: 'See you tomorrow', tr: 'Ertagacha ko\'rishguncha', audio: 'See you tomorrow' }
            ]
        },
        {
            id: 'l2',
            lang: 'ru',
            langName: 'Rus tili',
            level: 'A1 - Boshlang\'ich',
            title: 'Muloqot va Kundalik Iboralar',
            desc: 'Do\'kon, transport va kundalik hayotda eng ko\'p ishlatiladigan jonli iboralar.',
            stars: 15,
            cardsCount: 6,
            items: [
                { term: 'Рад познакомиться', tr: 'Tanishganimdan xursandman', audio: 'Рад познакомиться' },
                { term: 'Откуда вы?', tr: 'Siz qayerdansiz?', audio: 'Откуда вы?' },
                { term: 'Я изучаю языки в School77', tr: 'Men School77-da tillarni o\'rganmoqdaman', audio: 'Я изучаю языки в СпикПро' },
                { term: 'Хорошего дня!', tr: 'Kuningiz yaxshi o\'tsin!', audio: 'Хорошего дня!' },
                { term: 'Подскажите, пожалуйста', tr: 'Iltimos, aytib yubora olasizmi?', audio: 'Подскажите, пожалуйста' },
                { term: 'До скорой встречи', tr: 'Tez orada ko\'rishguncha', audio: 'До скорой встречи' }
            ]
        },
        {
            id: 'l3',
            lang: 'de',
            langName: 'Nemis tili',
            level: 'A1 - Boshlang\'ich',
            title: 'Begrüßung und Vorstellung (Salomlashish)',
            desc: 'Nemis tilining asosiy etiket qoidalari va o\'zini tanishtirish modellari.',
            stars: 15,
            cardsCount: 6,
            items: [
                { term: 'Freut mich, Sie kennenzulernen', tr: 'Siz bilan tanishganimdan mamnunman', audio: 'Freut mich, Sie kennenzulernen' },
                { term: 'Woher kommen Sie?', tr: 'Siz qayerdansiz?', audio: 'Woher kommen Sie?' },
                { term: 'Ich lerne gerne Deutsch', tr: 'Men nemis tilini bajonidil o\'rganaman', audio: 'Ich lerne gerne Deutsch' },
                { term: 'Einen schönen Tag noch!', tr: 'Kuningiz yoqimli o\'tsin!', audio: 'Einen schönen Tag noch!' },
                { term: 'Können Sie mir helfen?', tr: 'Menga yordam bera olasizmi?', audio: 'Können Sie mir helfen?' },
                { term: 'Auf Wiedersehen', tr: 'Xayr, ko\'rishguncha', audio: 'Auf Wiedersehen' }
            ]
        },
        {
            id: 'l4',
            lang: 'en',
            langName: 'Ingliz tili',
            level: 'A2 - O\'rta',
            title: 'Sayohat va Aeroportda',
            desc: 'Chet elga sayohat qilish, chipta olish va mehmonxonaga joylashish.',
            stars: 20,
            cardsCount: 6,
            items: [
                { term: 'Boarding pass', tr: 'Samolyotga chiqish taloni', audio: 'Boarding pass' },
                { term: 'Luggage claim', tr: 'Bagaj topshirish / qabul qilish joyi', audio: 'Luggage claim' },
                { term: 'I have a reservation', tr: 'Menda oldindan band qilingan joy bor', audio: 'I have a reservation' },
                { term: 'How much does it cost?', tr: 'Bu qancha turadi?', audio: 'How much does it cost?' },
                { term: 'Can I pay by card?', tr: 'Karta bilan to\'lasam bo\'ladimi?', audio: 'Can I pay by card?' },
                { term: 'Have a safe flight', tr: 'Parvozingiz bexatar bo\'lsin', audio: 'Have a safe flight' }
            ]
        }
    ],

    // Global Leaderboard data across English, Russian and German
    leaderboard: [
        // Oltin Liga 3 (634 - 800+ g'alaba)
        { rank: 1, name: 'Sardor Karimov', avatar: '👨‍🎓', stars: 5120, wins: 760, lang: 'en', langName: 'Ingliz tili' },
        { rank: 2, name: 'Madina Umarova', avatar: '👩‍💼', stars: 4680, wins: 695, lang: 'de', langName: 'Nemis tili' },

        // Oltin Liga 2 (467 - 633 g'alaba)
        { rank: 3, name: 'Bekzod Aliyev', avatar: '🧑‍💻', stars: 4210, wins: 610, lang: 'ru', langName: 'Rus tili' },
        { rank: 4, name: 'Shahzoda Rustamova', avatar: '👩‍🎓', stars: 3650, wins: 520, lang: 'en', langName: 'Ingliz tili' },
        { rank: 5, name: 'Elena Morozova', avatar: '👩‍🏫', stars: 3380, wins: 485, lang: 'ru', langName: 'Rus tili' },

        // Oltin Liga 1 (301 - 466 g'alaba)
        { rank: 6, name: 'Lukas Weber', avatar: '👨‍💼', stars: 2950, wins: 410, lang: 'de', langName: 'Nemis tili' },
        { rank: 7, name: 'Jasur Vohidov', avatar: '👨‍🚀', stars: 2580, wins: 345, lang: 'en', langName: 'Ingliz tili' },
        { rank: 8, name: 'Anastasia Smirnova', avatar: '👩‍🎨', stars: 2420, wins: 320, lang: 'ru', langName: 'Rus tili' },
        { rank: 9, name: 'Max Richter', avatar: '🧑‍🔬', stars: 2310, wins: 305, lang: 'de', langName: 'Nemis tili' },

        // Kumush Liga 3 (234 - 300 g'alaba)
        { rank: 10, name: 'Dilshod Yusupov', avatar: '👨‍🚀', stars: 2180, wins: 285, lang: 'de', langName: 'Nemis tili' },
        { rank: 11, name: 'Malika Qosimova', avatar: '👩‍🎨', stars: 2040, wins: 260, lang: 'ru', langName: 'Rus tili' },
        { rank: 12, name: 'Jasur Raimov', avatar: '🧑‍💼', stars: 1890, wins: 238, lang: 'en', langName: 'Ingliz tili' },

        // Kumush Liga 2 (167 - 233 g'alaba)
        { rank: 13, name: 'Anna Ivanova', avatar: '👩‍⚕️', stars: 1710, wins: 195, lang: 'ru', langName: 'Rus tili' },
        { rank: 14, name: 'Felix Braun', avatar: '👨‍🎓', stars: 1520, wins: 172, lang: 'de', langName: 'Nemis tili' },

        // Kumush Liga 1 (101 - 166 g'alaba)
        { rank: 15, name: 'Nodira Karimova', avatar: '👩‍💻', stars: 1350, wins: 140, lang: 'en', langName: 'Ingliz tili' },
        { rank: 16, name: 'Dmitry Petrov', avatar: '👨‍🏫', stars: 1230, wins: 122, lang: 'ru', langName: 'Rus tili' },
        { rank: 17, name: 'Leon Schmidt', avatar: '🧑‍💻', stars: 1160, wins: 112, lang: 'de', langName: 'Nemis tili' },
        { rank: 18, name: 'Alisher Usmonov', avatar: '👨‍🎓', stars: 1090, wins: 105, lang: 'en', langName: 'Ingliz tili' },

        // Bronza Liga 3 (84 - 100 g'alaba)
        { rank: 19, name: 'Javohir Toirov', avatar: '🧑‍🔬', stars: 990, wins: 95, lang: 'en', langName: 'Ingliz tili' },
        { rank: 20, name: 'Feruza Ergasheva', avatar: '👩‍⚕️', stars: 930, wins: 88, lang: 'de', langName: 'Nemis tili' },

        // Bronza Liga 2 (67 - 83 g'alaba)
        { rank: 21, name: 'Azamat Boboev', avatar: '👨‍🏫', stars: 880, wins: 82, lang: 'ru', langName: 'Rus tili' },
        { rank: 22, name: 'Gulnoza Saidova', avatar: '👩‍💻', stars: 820, wins: 74, lang: 'en', langName: 'Ingliz tili' },

        // Bronza Liga 1 (50 - 66 g'alaba)
        { rank: 23, name: 'Timur Zokirov', avatar: '👨‍🚀', stars: 770, wins: 68, lang: 'ru', langName: 'Rus tili' },
        { rank: 24, name: 'Sophie Müller', avatar: '👩‍🎨', stars: 720, wins: 61, lang: 'de', langName: 'Nemis tili' },
        { rank: 25, name: 'Doniyor Karimov', avatar: '🧑‍💻', stars: 680, wins: 56, lang: 'en', langName: 'Ingliz tili' },
        { rank: 26, name: 'Maria Volkova', avatar: '👩‍🎓', stars: 640, wins: 52, lang: 'ru', langName: 'Rus tili' },

        // Boshlang'ich (0 - 49 g'alaba)
        { rank: 27, name: 'Kamola Saidova', avatar: '👩‍💼', stars: 550, wins: 44, lang: 'en', langName: 'Ingliz tili' },
        { rank: 28, name: 'Otabek Mirzayev', avatar: '👨‍🎓', stars: 470, wins: 36, lang: 'de', langName: 'Nemis tili' },
        { rank: 29, name: 'Doston Rustamov', avatar: '🧑‍🔬', stars: 400, wins: 28, lang: 'ru', langName: 'Rus tili' },
        { rank: 30, name: 'Hanna Becker', avatar: '👩‍⚕️', stars: 310, wins: 19, lang: 'de', langName: 'Nemis tili' }
    ],

    // Star Store Gifts catalog
    storeGifts: [
        {
            id: 'g1',
            title: 'School77 & 77-School Maxsus Ryukzaki',
            category: 'Esdalik sovg\'alari',
            cost: 500,
            icon: '🎒',
            desc: 'Suv o\'tkazmaydigan, noutbuk uchun maxsus bo\'lmali zamonaviy ryukzak.',
            badge: 'Eng ommabop'
        },
        {
            id: 'g2',
            title: '77-School Brendli Hoodie (Sviter)',
            category: 'Kiyim-kechak',
            cost: 450,
            icon: '👕',
            desc: 'Issiq va qulay, 100% paxta sifatli matodan tayyorlangan School77 sviteri.',
            badge: 'Trendda'
        },
        {
            id: 'g3',
            title: 'Simsiz Bluetooth Quloqchinlar',
            category: 'Elektronika',
            cost: 800,
            icon: '🎧',
            desc: 'Chet tili darslarini va chet el qo\'shiqlarini tiniq eshitish uchun moslama.',
            badge: 'Premium'
        },
        {
            id: 'g4',
            title: 'Chet Tili Kitoblar To\'plami',
            category: 'Kitoblar',
            cost: 300,
            icon: '📚',
            desc: 'Grammatika va so\'z boyligi bo\'yicha original xorijiy darsliklar va badiiy asar.',
            badge: 'Bestseller'
        },
        {
            id: 'g5',
            title: '77-Schoolda 1 Oylik Bepul Kurs Vaucheri',
            category: 'Ta\'lim',
            cost: 1000,
            icon: '🎟️',
            desc: '77-School o\'quv markazining jonli yoki onlayn istalgan tildagi to\'liq oylik kursi.',
            badge: 'Super Mukofot'
        },
        {
            id: 'g6',
            title: 'School77 Aqlli Termo-Krujka',
            category: 'Aksessuarlar',
            cost: 200,
            icon: '☕',
            desc: 'Haroratni ko\'rsatib turuvchi LED displeyli, zamonaviy metall termo-krujka.',
            badge: 'Yangi'
        }
    ]
};
