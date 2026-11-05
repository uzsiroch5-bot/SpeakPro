// SpeakPro - Knowledge Base & Datastore (English, Russian, German)
// Includes vocabulary, lesson modules, leaderboard entries, and Star gift store items.

const SpeakProData = {
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
            samplePhrase: { text: 'Hello, welcome to SpeakPro!', tr: 'Salom, SpeakPro-ga xush kelibsiz!' }
        },
        ru: {
            id: 'ru',
            name: 'Rus tili',
            nativeName: 'Русский язык',
            flag: '🇷🇺',
            code: 'ru-RU',
            description: 'MDH davlatlari va xalqaro munosabatlarda muhim til. Adabiyot va amaliy muloqot asosi.',
            stats: { words: '2800+', lessons: '42 ta modul', learners: '9,820 o\'quvchi' },
            samplePhrase: { text: 'Привет, добро пожаловать в SpeakPro!', tr: 'Salom, SpeakPro-ga xush kelibsiz!' }
        },
        de: {
            id: 'de',
            name: 'Nemis tili',
            nativeName: 'Deutsch',
            flag: '🇩🇪',
            code: 'de-DE',
            description: 'Yevropaning iqtisodiy yetakchisi Germaniya, Avstriya va Shveytsariyada ta\'lim va ish kaliti.',
            stats: { words: '2400+', lessons: '36 ta modul', learners: '6,340 o\'quvchi' },
            samplePhrase: { text: 'Hallo, willkommen bei SpeakPro!', tr: 'Salom, SpeakPro-ga xush kelibsiz!' }
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
                { term: 'Я изучаю языки в SpeakPro', tr: 'Men SpeakPro-da tillarni o\'rganmoqdaman', audio: 'Я изучаю языки в СпикПро' },
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

    // Global Leaderboard mock data
    leaderboard: [
        { rank: 1, name: 'Sardor Karimov', avatar: '👨‍🎓', league: 'Oltin Liga', stars: 2450, wins: 142, lang: '🇬🇧 Ingliz' },
        { rank: 2, name: 'Madina Umarova', avatar: '👩‍💼', league: 'Oltin Liga', stars: 2180, wins: 128, lang: '🇩🇪 Nemis' },
        { rank: 3, name: 'Bekzod Aliyev', avatar: '🧑‍💻', league: 'Oltin Liga', stars: 1950, wins: 110, lang: '🇷🇺 Rus' },
        { rank: 4, name: 'Shahzoda Rustamova', avatar: '👩‍🎓', league: 'Kumush Liga', stars: 1620, wins: 94, lang: '🇬🇧 Ingliz' },
        { rank: 5, name: 'Dilshod Yusupov', avatar: '👨‍🚀', league: 'Kumush Liga', stars: 1490, wins: 88, lang: '🇩🇪 Nemis' },
        { rank: 6, name: 'Malika Qosimova', avatar: '👩‍🎨', league: 'Kumush Liga', stars: 1350, wins: 76, lang: '🇷🇺 Rus' },
        { rank: 7, name: 'Javohir Toirov', avatar: '🧑‍🔬', league: 'Bronza Liga', stars: 1120, wins: 62, lang: '🇬🇧 Ingliz' },
        { rank: 8, name: 'Feruza Ergasheva', avatar: '👩‍⚕️', league: 'Bronza Liga', stars: 980, wins: 54, lang: '🇩🇪 Nemis' },
        { rank: 9, name: 'Azamat Boboev', avatar: '👨‍🏫', league: 'Bronza Liga', stars: 850, wins: 46, lang: '🇷🇺 Rus' },
        { rank: 10, name: 'Gulnoza Saidova', avatar: '👩‍💻', league: 'Bronza Liga', stars: 740, wins: 39, lang: '🇬🇧 Ingliz' }
    ],

    // Star Store Gifts catalog
    storeGifts: [
        {
            id: 'g1',
            title: 'SpeakPro & "Planeta" Maxsus Ryukzaki',
            category: 'Esdalik sovg\'alari',
            cost: 500,
            icon: '🎒',
            desc: 'Suv o\'tkazmaydigan, noutbuk uchun maxsus bo\'lmali zamonaviy ryukzak.',
            badge: 'Eng ommabop'
        },
        {
            id: 'g2',
            title: '"Planeta" Brendli Hoodie (Sviter)',
            category: 'Kiyim-kechak',
            cost: 450,
            icon: '👕',
            desc: 'Issiq va qulay, 100% paxta sifatli matodan tayyorlangan SpeakPro sviteri.',
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
            title: '"Planeta"da 1 Oylik Bepul Kurs Vaucheri',
            category: 'Ta\'lim',
            cost: 1000,
            icon: '🎟️',
            desc: '"Planeta" o\'quv markazining jonli yoki onlayn istalgan tildagi to\'liq oylik kursi.',
            badge: 'Super Mukofot'
        },
        {
            id: 'g6',
            title: 'SpeakPro Aqlli Termo-Krujka',
            category: 'Aksessuarlar',
            cost: 200,
            icon: '☕',
            desc: 'Haroratni ko\'rsatib turuvchi LED displeyli, zamonaviy metall termo-krujka.',
            badge: 'Yangi'
        }
    ]
};
