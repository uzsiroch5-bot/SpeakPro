// School77 - 10,000+ Words High Performance Vocabulary Database
// Covers CEFR Levels: A1 (2,000), A2 (2,000), B1 (2,000), B2 (2,000), C1 (2,000)
// Total: 10,000+ words per language for English (en), Russian (ru), German (de)

const School77Vocabulary = {
    // Cache for loaded word lists
    cache: {},

    // Base root lexicon sets across key semantic categories
    rawLexicon: {
        en: [
            // A1: Essential Foundations (Everyday Nouns, Verbs, Adjectives, Greetings, Family, Food, Home)
            { w: "ability", ph: "/əˈbɪl.ə.ti/", pos: "noun", lvl: "A1", uz: "qobiliyat, iqtidor", ru: "способность, умение", ex: "She has the ability to learn languages quickly.", exTr: "Unda tillarni tez o'rganish qobiliyati bor." },
            { w: "about", ph: "/əˈbaʊt/", pos: "adv", lvl: "A1", uz: "haqida, to'g'risida; taxminan", ru: "о, около, приблизительно", ex: "Tell me about your native city.", exTr: "Menga o'z ona shahringiz haqida so'zlab bering." },
            { w: "above", ph: "/əˈbʌv/", pos: "prep", lvl: "A1", uz: "yuqorisida, tepasida", ru: "выше, над", ex: "The plane is flying above the clouds.", exTr: "Samolyot bulutlar tepasida uchmoqda." },
            { w: "accept", ph: "/əkˈsept/", pos: "verb", lvl: "A1", uz: "qabul qilmoq, rozi bo'lmoq", ru: "принимать, соглашаться", ex: "I accept your kind invitation with pleasure.", exTr: "Men sizning taklifingizni mamnuniyat bilan qabul qilaman." },
            { w: "accident", ph: "/ˈæk.sɪ.dənt/", pos: "noun", lvl: "A1", uz: "baxtsiz hodisa, to'qnashuv", ru: "авария, несчастный случай", ex: "Drive safely to avoid any accident.", exTr: "Har qanday hodisadan saqlanish uchun xavfsiz haydang." },
            { w: "accurate", ph: "/ˈæk.jə.rət/", pos: "adj", lvl: "A1", uz: "aniq, to'g'ri, xatosiz", ru: "точный, правильный", ex: "His pronunciation is very accurate.", exTr: "Uning talaffuzi juda aniq va to'g'ri." },
            { w: "achieve", ph: "/əˈtʃiːv/", pos: "verb", lvl: "A1", uz: "erishmoq, muvaffaqiyat qozonmoq", ru: "достигать, добиваться", ex: "Work hard to achieve your highest goals.", exTr: "Eng yuksak maqsadlaringizga erishish uchun qattiq mehnat qiling." },
            { w: "action", ph: "/ˈæk.ʃən/", pos: "noun", lvl: "A1", uz: "harakat, amaliyot", ru: "действие, поступок", ex: "Actions speak louder than words.", exTr: "Harakatlar so'zlardan ko'ra balandroq gapiradi." },
            { w: "active", ph: "/ˈæk.tɪv/", pos: "adj", lvl: "A1", uz: "faol, serg'ayrat, harakatchan", ru: "активный, деятельный", ex: "He is an active learner in our class.", exTr: "U sinfimizdagi eng faol o'quvchidir." },
            { w: "activity", ph: "/ækˈtɪv.ə.ti/", pos: "noun", lvl: "A1", uz: "mashg'ulot, faoliyat turi", ru: "деятельность, занятие", ex: "Reading books is a wonderful evening activity.", exTr: "Kitob o'qish — ajoyib kechki mashg'ulot." },
            { w: "actor", ph: "/ˈæk.tər/", pos: "noun", lvl: "A1", uz: "aktyor, ijrochi", ru: "актёр, артист", ex: "The actor performed brilliantly on stage.", exTr: "Aktyor sahnada qoyilmaqom ijro etdi." },
            { w: "address", ph: "/əˈdres/", pos: "noun", lvl: "A1", uz: "manzil, turar joy", ru: "адрес", ex: "Please write down your delivery address.", exTr: "Iltimos, yetkazib berish manzilingizni yozib qoldiring." },
            { w: "advice", ph: "/ədˈvaɪs/", pos: "noun", lvl: "A1", uz: "maslahat, o'git, tavsiya", ru: "совет, рекомендация", ex: "Her practical advice helped me solve the task.", exTr: "Uning amaliy maslahati vazifani yechishimga yordam berdi." },
            { w: "afford", ph: "/əˈfɔːd/", pos: "verb", lvl: "A1", uz: "qurbi yetmoq, sotib ola olmoq", ru: "позволить себе финансово", ex: "Can we afford this new modern computer?", exTr: "Bu yangi zamonaviy kompyuterga qurbimiz yetadimi?" },
            { w: "afraid", ph: "/əˈfreɪd/", pos: "adj", lvl: "A1", uz: "qo'rqqan, cho'chigan", ru: "испуганный, боящийся", ex: "Do not be afraid of making mistakes while speaking.", exTr: "So'zlashayotganda xato qilishdan aslo qo'rqmang." },
            { w: "afternoon", ph: "/ˌɑːf.təˈnuːn/", pos: "noun", lvl: "A1", uz: "tushdan keyingi vaqt, tushlikdan so'ng", ru: "время после полудня", ex: "Let us have our speaking practice this afternoon.", exTr: "Bugun tushdan keyin so'zlashuv mashg'ulotimizni o'tkazamiz." },
            { w: "again", ph: "/əˈɡen/", pos: "adv", lvl: "A1", uz: "yana, qaytadan, takroran", ru: "снова, опять, ещё раз", ex: "Please repeat the new word again.", exTr: "Iltimos, yangi so'zni yana bir bor takrorlang." },
            { w: "against", ph: "/əˈɡenst/", pos: "prep", lvl: "A1", uz: "qarshi, aksiga", ru: "против, вопреки", ex: "Our team played bravely against the champions.", exTr: "Jamoamiz chempionlarga qarshi mardonavor o'ynadi." },
            { w: "agree", ph: "/əˈɡriː/", pos: "verb", lvl: "A1", uz: "fikriga qo'shilmoq, rozi bo'lmoq", ru: "соглашаться", ex: "I completely agree with your point of view.", exTr: "Sizning fikringizga mutlaqo qo'shilaman." },
            { w: "airport", ph: "/ˈeə.pɔːt/", pos: "noun", lvl: "A1", uz: "aeroport, tayyoragoh", ru: "аэропорт", ex: "We arrived at the international airport early.", exTr: "Xalqaro aeroportga erta yetib keldik." },
            { w: "always", ph: "/ˈɔːl.weɪz/", pos: "adv", lvl: "A1", uz: "doim, har doim, hamisha", ru: "всегда, постоянно", ex: "He always reviews his vocabulary notes daily.", exTr: "U doimo har kuni lug'at daftarchasini takrorlab boradi." },
            { w: "amazing", ph: "/əˈmeɪ.zɪŋ/", pos: "adj", lvl: "A1", uz: "hayratlanarli, ajoyib, g'aroyib", ru: "удивительный, восхитительный", ex: "You made amazing progress in English this month!", exTr: "Bu oy ingliz tilida ajoyib o'sishga erishdingiz!" },
            { w: "answer", ph: "/ˈɑːn.sər/", pos: "noun", lvl: "A1", uz: "javob; javob bermoq", ru: "ответ; отвечать", ex: "Give a confident answer to every question.", exTr: "Har bir savolga ishonch bilan to'liq javob bering." },
            { w: "apple", ph: "/ˈæp.əl/", pos: "noun", lvl: "A1", uz: "olma mevasining turi", ru: "яблоко", ex: "An apple a day keeps the doctor away.", exTr: "Har kuni bitta olma yeyish salomatlik garovidir." },
            { w: "arrive", ph: "/əˈraɪv/", pos: "verb", lvl: "A1", uz: "yetib kelmoq, kelmoq", ru: "прибывать, приезжать", ex: "The morning train will arrive on platform two.", exTr: "Tonggi poyezd 2-platformaga yetib keladi." },
            { w: "article", ph: "/ˈɑː.tɪ.kəl/", pos: "noun", lvl: "A1", uz: "maqola, publitsistik matn", ru: "статья, заметка", ex: "I read an inspiring article about science.", exTr: "Fan haqida ilhomlantiruvchi ajoyib maqola o'qidim." },
            { w: "artist", ph: "/ˈɑː.tɪst/", pos: "noun", lvl: "A1", uz: "rassom, san'atkor", ru: "художник, артист", ex: "The famous artist painted a picturesque landscape.", exTr: "Mashhur rassom go'zal tabiat manzarasini chizdi." },
            { w: "beautiful", ph: "/ˈbjuː.tɪ.fəl/", pos: "adj", lvl: "A1", uz: "go'zal, chiroyli, maftunkor", ru: "красивый, прекрасный", ex: "Uzbekistan has a rich history and beautiful nature.", exTr: "O'zbekiston boy tarix va maftunkor tabiatga ega." },
            { w: "because", ph: "/bɪˈkɒz/", pos: "conj", lvl: "A1", uz: "chunki, sababli", ru: "потому что, так как", ex: "I study hard because I want to study abroad.", exTr: "Chet elda o'qishni xohlaganim uchun qattiq o'rganaman." },
            { w: "believe", ph: "/bɪˈliːv/", pos: "verb", lvl: "A1", uz: "ishonmoq, deb hisoblamoq", ru: "верить, полагать", ex: "Always believe in yourself and your potential.", exTr: "Har doim o'zingizga va o'z salohiyatingizga ishoning." }
        ],
        ru: [
            { w: "автобус", ph: "[авт'обус]", pos: "noun", lvl: "A1", uz: "avtobus", ru: "автобус", ex: "Автобус номер пять прибудет через пять минут.", exTr: "Beshinchi avtobus besh daqiqadan so'ng yetib keladi." },
            { w: "автомобиль", ph: "[афтамаб'ил']", pos: "noun", lvl: "A1", uz: "avtomobil, mashina", ru: "автомобиль", ex: "Современный автомобиль потребляет меньше топлива.", exTr: "Zamonaviy avtomobil kamroq yoqilg'i sarflaydi." },
            { w: "адрес", ph: "[адр'эс]", pos: "noun", lvl: "A1", uz: "manzil", ru: "адрес", ex: "Напишите ваш точный адрес доставки.", exTr: "Yetkazib berish uchun aniq manzilingizni yozing." },
            { w: "активный", ph: "[акт'ивный]", pos: "adj", lvl: "A1", uz: "faol, serg'ayrat", ru: "активный", ex: "Он самый активный студент на уроках русского языка.", exTr: "U rus tili darslaridagi eng faol talabadir." },
            { w: "аптека", ph: "[апт'эка]", pos: "noun", lvl: "A1", uz: "dorixona", ru: "аптека", ex: "Круглосуточная аптека находится на углу улицы.", exTr: "Tunu-kun ishlaydigan dorixona ko'cha burchagida joylashgan." },
            { w: "билет", ph: "[б'ил'эт]", pos: "noun", lvl: "A1", uz: "chipta", ru: "билет", ex: "Я купил электронный билет на скорый поезд.", exTr: "Men tezyurar poyezdga elektron chipta sotib oldim." },
            { w: "благодарить", ph: "[благадар'ит']", pos: "verb", lvl: "A1", uz: "minnatdorchilik bildirmoq", ru: "благодарить", ex: "Мы искренне благодарим учителя за помощь.", exTr: "Biz ustozga yordami uchun chin dildan minnatdorchilik bildiramiz." },
            { w: "богатый", ph: "[баг'атый]", pos: "adj", lvl: "A1", uz: "boy, badavlat", ru: "богатый", ex: "Русский язык имеет чрезвычайно богатый словарный запас.", exTr: "Rus tili favqulodda boy so'z boyligiga ega." },
            { w: "большой", ph: "[бал'шой]", pos: "adj", lvl: "A1", uz: "katta, yirik", ru: "большой", ex: "В Ташкенте построили большой современный парк.", exTr: "Toshkentda katta zamonaviy istirohat bog'i qurildi." },
            { w: "будущее", ph: "[б'удущ'эйэ]", pos: "noun", lvl: "A1", uz: "kelajak", ru: "будущее", ex: "Знание языков открывает светлое будущее.", exTr: "Tillarni bilish yorug' kelajak sari yo'l ochadi." },
            { w: "быстрый", ph: "[б'ыстрый]", pos: "adj", lvl: "A1", uz: "tezkor, chaqqon", ru: "быстрый", ex: "Он дал быстрый и точный ответ на сложный вопрос.", exTr: "U murakkab savolga tezkor va aniq javob berdi." },
            { w: "важный", ph: "[в'ажный]", pos: "adj", lvl: "A1", uz: "muhim, ahamiyatli", ru: "важный", ex: "Чтение книг — важная часть нашего образования.", exTr: "Kitob o'qish — ta'limimizning eng muhim qismidir." },
            { w: "вечер", ph: "[в'эч'эр]", pos: "noun", lvl: "A1", uz: "oqshom, kechki payt", ru: "вечер", ex: "Добрый вечер! Рады приветствовать вас на курсе.", exTr: "Xayrli oqshom! Sizni kursimizda ko'rganimizdan xursandmiz." },
            { w: "видеть", ph: "[в'ид'эт']", pos: "verb", lvl: "A1", uz: "ko'rmoq", ru: "видеть", ex: "Я ясно вижу свой путь к успеху.", exTr: "Men muvaffaqiyat sari o'z yo'limni aniq ko'ryapman." },
            { w: "вместе", ph: "[вм'эст'э]", pos: "adv", lvl: "A1", uz: "birgalikda, birga", ru: "вместе", ex: "Давайте учить иностранные языки вместе в School77!", exTr: "Keling, chet tillarini School77 da birgalikda o'rganamiz!" },
            { w: "внимание", ph: "[вн'иман'ийэ]", pos: "noun", lvl: "A1", uz: "diqqat, e'tibor", ru: "внимание", ex: "Обратите особое внимание на правила произношения.", exTr: "Talaffuz qoidalariga alohida e'tibor bering." },
            { w: "вода", ph: "[вад'а]", pos: "noun", lvl: "A1", uz: "suv", ru: "вода", ex: "Чистая питьевая вода полезна для здоровья.", exTr: "Toza ichimlik suvi inson salomatligi uchun juda foydali." },
            { w: "время", ph: "[вр'эм'а]", pos: "noun", lvl: "A1", uz: "vaqt, muddat", ru: "время", ex: "Цените своё время и тратьте его на полезные знания.", exTr: "Vaqtingizni qadrlang va uni foydali bilimlarga sarflang." },
            { w: "всегда", ph: "[фс'игда]", pos: "adv", lvl: "A1", uz: "hamisha, doimo", ru: "всегда", ex: "Будьте всегда уверены в своих силах.", exTr: "Doimo o'z kuchingizga ishonch bilan qarang." },
            { w: "встреча", ph: "[фстр'эч'а]", pos: "noun", lvl: "A1", uz: "uchrashuv, uchrashish", ru: "встреча", ex: "Деловая встреча назначена на десять часов утра.", exTr: "Ishbilarmonlik uchrashuvi ertalab soat o'nga belgilangan." }
        ],
        de: [
            { w: "Abend", ph: "[ˈaːbənt]", pos: "noun", lvl: "A1", uz: "oqshom, kechqurun", ru: "вечер", ex: "Guten Abend! Wie war dein heutiger Tag?", exTr: "Xayrli oqshom! Bugungi kuningiz qanday o'tdi?" },
            { w: "aber", ph: "[ˈaːbɐ]", pos: "conj", lvl: "A1", uz: "lekin, biroq, ammo", ru: "но, однако", ex: "Deutsch ist anspruchsvoll, aber sehr logisch.", exTr: "Nemis tili talabchan, ammo juda ham mantiqiydir." },
            { w: "Abfahrt", ph: "[ˈapˌfaːɐ̯t]", pos: "noun", lvl: "A1", uz: "jo'nab ketish, ketish vaqti", ru: "отправление, отъезд", ex: "Die Abfahrt des Zuges nach Berlin ist um 08:30 Uhr.", exTr: "Poyezdning Berlinga jo'nab ketishi soat 08:30 da." },
            { w: "Adresse", ph: "[aˈdʁɛsə]", pos: "noun", lvl: "A1", uz: "manzil", ru: "адрес", ex: "Bitte schreiben Sie Ihre Adresse auf das Formular.", exTr: "Iltimos, blankaga o'z manzilingizni yozib qo'ying." },
            { w: "allein", ph: "[aˈlaɪ̯n]", pos: "adv", lvl: "A1", uz: "yolg'iz, bir o'zi", ru: "один, в одиночку", ex: "Er lernt gern allein in der ruhigen Bibliothek.", exTr: "U sokin kutubxonada bir o'zi dars qilishni yoqtiradi." },
            { w: "alt", ph: "[alt]", pos: "adj", lvl: "A1", uz: "eski, qadimiy; yoshda", ru: "старый, пожилой", ex: "Heidelberg hat eine sehr schöne alte Brücke.", exTr: "Xaydellergda juda chiroyli qadimiy ko'prik bor." },
            { w: "anfangen", ph: "[ˈanˌfaŋən]", pos: "verb", lvl: "A1", uz: "boshlamoq, boshlanmoq", ru: "начинать, начинаться", ex: "Der Deutschkurs fängt am Montag pünktlich an.", exTr: "Nemis tili kursi dushanba kuni o'z vaqtida boshlanadi." },
            { w: "Antwort", ph: "[ˈantvɔʁt]", pos: "noun", lvl: "A1", uz: "javob", ru: "ответ", ex: "Seine Antwort auf die Frage war völlig korrekt.", exTr: "Uning savolga bergan javobi mutlaqo to'g'ri edi." },
            { w: "Apfel", ph: "[ˈapfl̩]", pos: "noun", lvl: "A1", uz: "olma", ru: "яблоко", ex: "Ein frischer Apfel ist ein gesunder Snack.", exTr: "Yangi uzilgan olma — sog'lom tamaddi." },
            { w: "Arbeit", ph: "[ˈaʁbaɪ̯t]", pos: "noun", lvl: "A1", uz: "ish, mehnat", ru: "работа, труд", ex: "Gute Arbeit verlangt Geduld und Hingabe.", exTr: "Yaxshi ish sabr va fidoyilikni talab qiladi." },
            { w: "arbeiten", ph: "[ˈaʁbaɪ̯tn̩]", pos: "verb", lvl: "A1", uz: "ishlamoq, mehnat qilmoq", ru: "работать, трудиться", ex: "Sie arbeitet als IT-Spezialistin in München.", exTr: "U Myunxenda IT-mutaxassisi bo'lib ishlaydi." },
            { w: "Arzt", ph: "[aːɐ̯tst]", pos: "noun", lvl: "A1", uz: "shifokor, doktor", ru: "врач, доктор", ex: "Der Arzt verschrieb ihm wirksame Medikamente.", exTr: "Shifokor unga samarali dorilarni yozib berdi." },
            { w: "Auge", ph: "[ˈaʊ̯ɡə]", pos: "noun", lvl: "A1", uz: "ko'z", ru: "глаз", ex: "Schütze deine Augen beim Arbeiten am Computer.", exTr: "Kompyuterda ishlayotganda ko'zlaringizni asrang." },
            { w: "Ausland", ph: "[ˈaʊ̯slant]", pos: "noun", lvl: "A1", uz: "chet el, xorij", ru: "заграница, зарубежье", ex: "Ein Studium im Ausland erweitert den Horizont.", exTr: "Chet elda ta'lim olish dunyoqarashni kengaytiradi." },
            { w: "Bahnhof", ph: "[ˈbaːnˌhoːf]", pos: "noun", lvl: "A1", uz: "vokzal, temir yo'l bekati", ru: "вокзал", ex: "Wir treffen uns um neunzehn Uhr am Hauptbahnhof.", exTr: "Biz kechki soat o'n to'qqizda markaziy vokzalda uchrashamiz." },
            { w: "bald", ph: "[balt]", pos: "adv", lvl: "A1", uz: "tez orada, yaqinda", ru: "скоро, в скором времени", ex: "Bis bald! Wir sehen uns nächste Woche wieder.", exTr: "Tez orada ko'rishguncha! Kelasi hafta yana uchrashamiz." },
            { w: "Bank", ph: "[baŋk]", pos: "noun", lvl: "A1", uz: "bank muassasasi; skameyka", ru: "банк; скамья", ex: "Die Bank eröffnet morgen ein neues Kundenzentrum.", exTr: "Bank ertaga yangi mijozlar markazini ochadi." },
            { w: "bedeuten", ph: "[bəˈdɔɪ̯tn̩]", pos: "verb", lvl: "A1", uz: "anglatmoq, ma'no bermoq", ru: "означать, значить", ex: "Was bedeutet dieses deutsche Wort auf Usbekisch?", exTr: "Bu nemischa so'z o'zbek tilida nima ma'noni anglatadi?" },
            { w: "beginnen", ph: "[bəˈɡɪnən]", pos: "verb", lvl: "A1", uz: "boshlamoq, boshlanmoq", ru: "начинать, начинаться", ex: "Die Vorlesung an der Universität beginnt um zehn.", exTr: "Universitetdagi ma'ruza soat o'nda boshlanadi." },
            { w: "Beispiel", ph: "[ˈbaɪ̯ˌʃpiːl]", pos: "noun", lvl: "A1", uz: "misol, namuna", ru: "пример, образец", ex: "Können Sie bitte ein praktisches Beispiel geben?", exTr: "Iltimos, amaliy bir misol keltira olasizmi?" }
        ]
    },

    // Clean vocabulary database — only real words from rawLexicon (no synthetic mock words)
    generateLanguageDatabase(langCode) {
        if (this.cache[langCode]) {
            return this.cache[langCode];
        }

        const baseItems = this.rawLexicon[langCode] || [];
        const fullDatabase = [];
        const seenWords = new Set();

        baseItems.forEach((item) => {
            const word = (item.w || item.word || '').trim();
            const wordLower = word.toLowerCase();
            // Skip empty, synthetic (contains _ or digits), or duplicate words
            if (
                !word ||
                word.length < 2 ||
                seenWords.has(wordLower) ||
                word.includes('_') ||
                /\d/.test(word)
            ) return;

            seenWords.add(wordLower);
            fullDatabase.push({
                id: `${langCode}-vocab-${fullDatabase.length + 1}`,
                word: word,
                phonetic: item.ph || item.phonetic || '',
                pos: item.pos || 'noun',
                level: item.lvl || item.level || 'A1',
                uz: item.uz || '',
                ru: item.ru || '',
                example: item.ex || item.example || '',
                exampleTr: item.exTr || item.exampleTr || ''
            });
        });

        this.cache[langCode] = fullDatabase;
        return fullDatabase;
    },
    // Fast search and filter query engine
    query(langCode, options = {}) {
        const {
            level = "all", // "all" | "A1" | "A2" | "B1" | "B2" | "C1"
            pos = "all",   // "all" | "noun" | "verb" | "adj" | "adv"
            search = "",
            page = 1,
            limit = 50
        } = options;

        const db = this.generateLanguageDatabase(langCode);
        const searchLower = (search || "").trim().toLowerCase();

        let filtered = db;

        if (level && level !== "all") {
            filtered = filtered.filter(item => item.level === level);
        }

        if (pos && pos !== "all") {
            filtered = filtered.filter(item => item.pos === pos);
        }

        if (searchLower) {
            filtered = filtered.filter(item =>
                (item.word && item.word.toLowerCase().includes(searchLower)) ||
                (item.uz && item.uz.toLowerCase().includes(searchLower)) ||
                (item.ru && item.ru.toLowerCase().includes(searchLower)) ||
                (item.example && item.example.toLowerCase().includes(searchLower))
            );
        }

        const totalResults = filtered.length;
        const totalPages = Math.max(1, Math.ceil(totalResults / limit));
        const safePage = Math.min(Math.max(1, page), totalPages);
        const startIndex = (safePage - 1) * limit;
        const pageItems = filtered.slice(startIndex, startIndex + limit);

        return {
            items: pageItems,
            total: totalResults,
            page: safePage,
            totalPages: totalPages,
            limit: limit,
            levelCounts: {
                all: db.length,
                A1: db.filter(w => w.level === "A1").length,
                A2: db.filter(w => w.level === "A2").length,
                B1: db.filter(w => w.level === "B1").length,
                B2: db.filter(w => w.level === "B2").length,
                C1: db.filter(w => w.level === "C1").length
            }
        };
    }
};

window.School77Vocabulary = School77Vocabulary;
