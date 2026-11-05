// SpeakPro - Real-world Practical Dialogues Database
// Languages: English (en), Russian (ru), German (de)

const SpeakProDialogues = {
    en: [
        {
            id: 'dlg-en-1',
            title: 'At the International Airport',
            titleUz: 'Xalqaro Aeroportda',
            category: 'travel',
            categoryName: 'Sayohat & Aeroport',
            icon: '✈️',
            level: 'A2',
            desc: 'Parvozga ro\'yxatdan o\'tish, yuk topshirish va samolyot darvozasini aniqlash.',
            lines: [
                { speaker: 'A', role: 'Passenger (Yo\'lovchi)', text: 'Good morning! Where is the check-in counter for British Airways flight 178 to London?', tr: 'Xayrli tong! London tomon uchadigan British Airways 178-reysi uchun ro\'yxatdan o\'tish peshtaxtasi qayerda?' },
                { speaker: 'B', role: 'Agent (Xodim)', text: 'Good morning! It is at counter 12, just straight ahead past the currency exchange.', tr: 'Xayrli tong! U 12-peshtaxtada, valyuta ayirboshlash shoxobchasidan to\'g\'riga o\'tishingiz bilanoq joylashgan.' },
                { speaker: 'A', role: 'Passenger (Yo\'lovchi)', text: 'Thank you! Here are my passport and electronic ticket booking.', tr: 'Rahmat! Mana mening pasportim va elektron chipta bronim.' },
                { speaker: 'B', role: 'Agent (Xodim)', text: 'Thank you, Mr. Azizbek. Are you checking in any baggage today?', tr: 'Rahmat, janob Azizbek. Bugun topshiriladigan yukingiz bormi?' },
                { speaker: 'A', role: 'Passenger (Yo\'lovchi)', text: 'Yes, just this one large suitcase, and I will keep this backpack as hand luggage.', tr: 'Ha, faqat bitta katta chamadon, bu ryukzakni esa qo\'l yuki sifatida o\'zim bilan olib qolaman.' },
                { speaker: 'B', role: 'Agent (Xodim)', text: 'Please place your suitcase on the scale. Perfect, 21 kilograms. Would you prefer a window or an aisle seat?', tr: 'Iltimos, chamadoningizni taroziga qo\'ying. Ajoyib, 21 kilogramm. Oyna yonidagi yoki yo\'lak yonidagi o\'rindiqni ma\'qul ko\'rasizmi?' },
                { speaker: 'A', role: 'Passenger (Yo\'lovchi)', text: 'A window seat, please, if available.', tr: 'Agar iloji bo\'lsa, iltimos, oyna yonidagi o\'rindiq.' },
                { speaker: 'B', role: 'Agent (Xodim)', text: 'Here is your boarding pass. Seat 16A, Gate B4. Boarding starts at 10:15 AM. Have a wonderful flight!', tr: 'Mana sizning parvozga chiqish taloningiz. 16A o\'rindiq, B4 darvoza. Chiqish soat 10:15 da boshlanadi. Parvozingiz yoqimli o\'tsin!' }
            ]
        },
        {
            id: 'dlg-en-2',
            title: 'Hotel Check-in & Requesting Services',
            titleUz: 'Mehmonxonaga Joylashish',
            category: 'hotel',
            categoryName: 'Mehmonxona',
            icon: '🏨',
            level: 'A2',
            desc: 'Bron qilingan xonani qabul qilish, Wi-Fi paroli va nonushta vaqtini bilish.',
            lines: [
                { speaker: 'A', role: 'Guest (Mehmon)', text: 'Good evening! I have a reservation for three nights under the name Azizbek.', tr: 'Xayrli kech! Mening nomimga 3 kechaga bron qilingan xona bor edi, ismim Azizbek.' },
                { speaker: 'B', role: 'Receptionist (Qabulxona)', text: 'Welcome to Grand Plaza Hotel! Let me check... Yes, a Deluxe King Room with city view. May I have your ID?', tr: 'Grand Plaza mehmonxonasiga xush kelibsiz! Tekshirib ko\'ray... Ha, shahar manzarali Deluxe King xona. Shaxsingizni tasdiqlovchi hujjatni olsam maylimi?' },
                { speaker: 'A', role: 'Guest (Mehmon)', text: 'Of course, here is my passport. What time is breakfast served in the morning?', tr: 'Albatta, mana pasportim. Ertalab nonushta soat nechada beriladi?' },
                { speaker: 'B', role: 'Receptionist (Qabulxona)', text: 'Breakfast buffet is served on the second floor from 7:00 AM to 10:30 AM.', tr: 'Shved stoli nonushtasi 2-qavatda soat 7:00 dan 10:30 gacha taqdim etiladi.' },
                { speaker: 'A', role: 'Guest (Mehmon)', text: 'Excellent! And could you please tell me how to connect to the hotel Wi-Fi?', tr: 'Ajoyib! Mehmonxona Wi-Fi tarmog\'iga qanday ulanish mumkinligini ayta olasizmi?' },
                { speaker: 'B', role: 'Receptionist (Qabulxona)', text: 'Select "Plaza_Guest" network, and enter your room number and last name. Here is your keycard for room 405. Enjoy your stay!', tr: '"Plaza_Guest" tarmog\'ini tanlang, xona raqamingiz va familiyangizni kiriting. Mana 405-xona kalit-kartasi. Maroqli hordiq tilaymiz!' }
            ]
        },
        {
            id: 'dlg-en-3',
            title: 'Dining at a Fine Restaurant',
            titleUz: 'Restoranda Buyurtma Berish',
            category: 'food',
            categoryName: 'Restoran & Taom',
            icon: '🍽️',
            level: 'B1',
            desc: 'Menyudan taom tanlash, ofitsiantdan maslahat so\'rash va hisob-kitob qilish.',
            lines: [
                { speaker: 'A', role: 'Waiter (Ofitsiant)', text: 'Good evening! Welcome to Bella Vista. Here is the dinner menu. Can I get you something to drink first?', tr: 'Xayrli kech! Bella Vista restoraniga xush kelibsiz. Mana kechki ovqat menyusi. Avval ichimlik keltiraymi?' },
                { speaker: 'B', role: 'Customer (Mijoz)', text: 'Good evening! Just a glass of sparkling water with lemon, please. What is the chef\'s special today?', tr: 'Xayrli kech! Menga bir stakan limonli gazlangan suv, iltimos. Bugungi bosh oshpazning maxsus taomi nima?' },
                { speaker: 'A', role: 'Waiter (Ofitsiant)', text: 'Today\'s special is grilled Norwegian salmon served with asparagus and creamy garlic sauce.', tr: 'Bugungi maxsus taomimiz — sarsabil va qaymoqli sarimsoq sousi bilan tortiladigan qovurilgan Norvegiya losos balig\'i.' },
                { speaker: 'B', role: 'Customer (Mijoz)', text: 'That sounds delightful! I will have the salmon, please. And for the starter, a fresh Greek salad.', tr: 'Juda yoqimli eshitilyapti! Menga o\'sha lososni keltiring. Gazak uchun esa yangi Grekcha salat.' },
                { speaker: 'A', role: 'Waiter (Ofitsiant)', text: 'Excellent choice. Would you like medium-rare or well-done for the salmon?', tr: 'Ajoyib tanlov. Baliq o\'rtacha pishirilgan bo\'lsinmi yoki to\'liq qovurilganmi?' },
                { speaker: 'B', role: 'Customer (Mijoz)', text: 'Medium, please. And could you bring the bill after we finish dessert?', tr: 'O\'rtacha, iltimos. Desertni tugatganimizdan so\'ng hisobni olib kela olasizmi?' }
            ]
        },
        {
            id: 'dlg-en-4',
            title: 'Professional Job Interview',
            titleUz: 'Xalqaro Kompaniyada Ish Suhbati',
            category: 'career',
            categoryName: 'Ish & Karyera',
            icon: '💼',
            level: 'B2',
            desc: 'Tajriba, kuchli tomonlar va yangi lavozim bo\'yicha suhbatdan muvaffaqiyatli o\'tish.',
            lines: [
                { speaker: 'A', role: 'Interviewer (Intervyu oluvchi)', text: 'Welcome, Azizbek! Thank you for joining us today. To start, could you introduce yourself and your background?', tr: 'Xush kelibsiz, Azizbek! Bugun bizga qo\'shilganingiz uchun rahmat. Boshlash uchun o\'zingiz va tajribangiz haqida so\'zlab bera olasizmi?' },
                { speaker: 'B', role: 'Candidate (Nomzod)', text: 'Thank you for this opportunity! I have been working as a Software Engineer for over three years, specializing in modern web applications.', tr: 'Ushbu imkoniyat uchun rahmat! Men zamonaviy veb-ilovalar ishlab chiqishga ixtisoslashgan Dasturiy ta\'minot muhandisi sifatida 3 yildan ortiq vaqtdan beri ishlayapman.' },
                { speaker: 'A', role: 'Interviewer (Intervyu oluvchi)', text: 'Impressive! What would you say is your greatest professional achievement so far?', tr: 'Taassurotli! Hozirgacha erishgan eng katta professional yutug\'ingiz nima deb o\'ylaysiz?' },
                { speaker: 'B', role: 'Candidate (Nomzod)', text: 'Last year, I led a project that improved platform loading speed by 40%, which directly increased customer retention.', tr: 'O\'tgan yili platforma yuklanish tezligini 40% ga yaxshilagan loyihaga rahbarlik qildim, bu esa mijozlarni saqlab qolish ko\'rsatkichini to\'g\'ridan-to\'g\'ri oshirdi.' },
                { speaker: 'A', role: 'Interviewer (Intervyu oluvchi)', text: 'How do you handle tight deadlines and high-pressure team environments?', tr: 'Qisqa muddatlar va yuqori bosimli jamoaviy muhitda qanday ishlaysiz?' },
                { speaker: 'B', role: 'Candidate (Nomzod)', text: 'I prioritize tasks systematically, communicate transparently with my team, and stay focused on delivery milestones.', tr: 'Men vazifalarni tizimli ravishda muhimligiga qarab saralayman, jamoa bilan ochiq muloqot qilaman va belgilangan muddatlarga e\'tibor qarataman.' }
            ]
        },
        {
            id: 'dlg-en-5',
            title: 'At the Medical Clinic & Pharmacy',
            titleUz: 'Shifokor Qabulida va Dorixonada',
            category: 'health',
            categoryName: 'Salomatlik & Tibbiyot',
            icon: '🏥',
            level: 'B1',
            desc: 'Shikoyat qilish, alomatlarni tushuntirish va dori retsepti olish.',
            lines: [
                { speaker: 'A', role: 'Doctor (Shifokor)', text: 'Good morning, please have a seat. What seems to be bothering you today?', tr: 'Xayrli tong, marhamat o\'tiring. Bugun sizni nima bezovta qilyapti?' },
                { speaker: 'B', role: 'Patient (Bemor)', text: 'Good morning, Doctor. I have had a severe headache and a sore throat since yesterday, and I feel feverish.', tr: 'Xayrli tong, doktor. Kechadan beri boshim qattiq og\'rib, tomog\'im qaqshayapti, o\'zimni isitmalayotgandek his qilyapman.' },
                { speaker: 'A', role: 'Doctor (Shifokor)', text: 'Let me check your temperature and listen to your chest. Open your mouth, please... Yes, your throat is inflamed.', tr: 'Keling, haroratingizni o\'lchaymiz va o\'pkangizni eshitib ko\'raman. Og\'zingizni oching, iltimos... Ha, tomog\'ingiz yallig\'langan.' },
                { speaker: 'B', role: 'Patient (Bemor)', text: 'Is it something serious, or just a seasonal flu?', tr: 'Bu biror jiddiy narsami yoki shunchaki mavsumiy shamollashmi?' },
                { speaker: 'A', role: 'Doctor (Shifokor)', text: 'It is a mild viral infection. I am prescribing an anti-inflammatory medicine and throat lozenges. Drink plenty of warm water.', tr: 'Bu yengil virusli infeksiya. Men yallig\'lanishga qarshi dori va tomoq uchun shimish tabletkalarini yozib beryapman. Ko\'p iliq suv iching.' },
                { speaker: 'B', role: 'Patient (Bemor)', text: 'Thank you, Doctor! How often should I take the tablets?', tr: 'Rahmat, doktor! Tabletkalarni kuniga necha marta ichishim kerak?' }
            ]
        },
        {
            id: 'dlg-en-6',
            title: 'Shopping for Clothes & Tech Gadgets',
            titleUz: 'Do\'konda Xarid Qilish',
            category: 'shopping',
            categoryName: 'Xaridlar & Do\'kon',
            icon: '🛍️',
            level: 'A2',
            desc: 'Kiyim o\'lchami, chegirma so\'rash va to\'lov qilish.',
            lines: [
                { speaker: 'A', role: 'Shop Assistant (Sotuvchi)', text: 'Hello! Can I help you find anything in particular today?', tr: 'Salom! Bugun biror aniq narsa qidirishda yordam bera olamanmi?' },
                { speaker: 'B', role: 'Shopper (Xaridor)', text: 'Hi! Yes, I really like this navy blue jacket, but do you have it in a size Medium?', tr: 'Salom! Ha, menga bu to\'q ko\'k kurtka juda yoqdi, lekin sizda buning Medium (o\'rtacha) o\'lchami bormi?' },
                { speaker: 'A', role: 'Shop Assistant (Sotuvchi)', text: 'Let me check in the stockroom... Yes, here is a Medium! You can try it on in the fitting room over there.', tr: 'Ombordan tekshirib ko\'ray... Ha, mana Medium o\'lchami! Uni anavi kiyib ko\'rish xonasida kiyib ko\'rishingiz mumkin.' },
                { speaker: 'B', role: 'Shopper (Xaridor)', text: 'It fits perfectly! Is this jacket eligible for the weekend discount?', tr: 'U menga ayni mos keldi! Bu kurtka dam olish kunlari chegirmasiga kiradimi?' },
                { speaker: 'A', role: 'Shop Assistant (Sotuvchi)', text: 'Yes, absolutely! It has a 20% discount today. Will you be paying by cash or credit card?', tr: 'Ha, albatta! Bugun unga 20% chegirma bor. Naqd pul bilan to\'laysizmi yoki karta orqalimi?' },
                { speaker: 'B', role: 'Shopper (Xaridor)', text: 'By credit card, please. Here is my contactless card.', tr: 'Karta orqali, iltimos. Mana kontaktsiz kartam.' }
            ]
        }
    ],

    ru: [
        {
            id: 'dlg-ru-1',
            title: 'В Международном Аэропорту',
            titleUz: 'Aeroportda Ro\'yxatdan O\'tish',
            category: 'travel',
            categoryName: 'Sayohat & Aeroport',
            icon: '✈️',
            level: 'A2',
            desc: 'Регистрация на рейс, сдача багажа и посадка на самолёт.',
            lines: [
                { speaker: 'A', role: 'Пассажир (Yo\'lovchi)', text: 'Здравствуйте! Подскажите, где проходит регистрация на рейс в Москву?', tr: 'Assalomu alaykum! Moskvaga uchadigan reysga ro\'yxatdan o\'tish qayerda ekanligini aytib yubora olmaysizmi?' },
                { speaker: 'B', role: 'Сотрудник (Xodim)', text: 'Добрый день! Стойки номер 7 и 8. Пройдите прямо по коридору.', tr: 'Xayrli kun! 7 va 8-peshtaxtalar. Yo\'lak bo\'ylab to\'g\'riga yuring.' },
                { speaker: 'A', role: 'Пассажир (Yo\'lovchi)', text: 'Спасибо! Вот мой паспорт и билет. У меня один чемодан в багаж.', tr: 'Rahmat! Mana pasportim va chiptam. Menda bitta chamadon yuk bor.' },
                { speaker: 'B', role: 'Сотрудник (Xodim)', text: 'Поставьте, пожалуйста, багаж на ленту. Вес 19 килограммов, всё в норме. Место у окна?', tr: 'Iltimos, yukingizni tasmaga qo\'ying. Og\'irligi 19 kilogramm, hammasi me\'yorda. Oyna yonidagi o\'rindiqmi?' },
                { speaker: 'A', role: 'Пассажир (Yo\'lovchi)', text: 'Да, пожалуйста, если есть возможность у окна.', tr: 'Ha, iltimos, agar oyna yonida imkon bo\'lsa.' },
                { speaker: 'B', role: 'Сотрудник (Xodim)', text: 'Вот ваш посадочный талон. Выход на посадку номер три. Приятного полёта!', tr: 'Mana sizning parvozga chiqish taloningiz. Chiqish darvozasi 3-raqam. Parvozingiz yoqimli o\'tsin!' }
            ]
        },
        {
            id: 'dlg-ru-2',
            title: 'Заселение в Гостиницу и Сервис',
            titleUz: 'Mehmonxonaga Joylashish',
            category: 'hotel',
            categoryName: 'Mehmonxona',
            icon: '🏨',
            level: 'A2',
            desc: 'Бронирование номера, получение ключей и вопросы о завтраке.',
            lines: [
                { speaker: 'A', role: 'Гость (Mehmon)', text: 'Добрый вечер! У меня забронирован двухместный номер на фамилию Азизбек.', tr: 'Xayrli kech! Menda Azizbek familiyasiga ikki kishilik xona bron qilingan edi.' },
                { speaker: 'B', role: 'Администратор (Qabulxona)', text: 'Добрый вечер! Рады вас приветствовать. Предъявите, пожалуйста, ваш паспорт.', tr: 'Xayrli kech! Sizni ko\'rganimizdan xursandmiz. Iltimos, pasportingizni taqdim eting.' },
                { speaker: 'A', role: 'Гость (Mehmon)', text: 'Вот, держите. Подскажите, во сколько у вас начинается завтрак?', tr: 'Mana, oling. Ayting-chi, sizda nonushta soat nechada boshlanadi?' },
                { speaker: 'B', role: 'Администратор (Qabulxona)', text: 'Завтрак "шведский стол" на первом этаже с семи до одиннадцати утра.', tr: 'Birinchi qavatdagi "shved stoli" nonushtasi ertalab soat yettidan o\'n birgacha.' },
                { speaker: 'A', role: 'Гость (Mehmon)', text: 'Отлично! А как подключиться к интернету?', tr: 'Ajoyib! Internetga qanday ulanish mumkin?' },
                { speaker: 'B', role: 'Администратор (Qabulxona)', text: 'Пароль от Wi-Fi указан на конверте с ключом. Ваш номер 312 на третьем этаже.', tr: 'Wi-Fi paroli kalit solingan konvertda ko\'rsatilgan. Xonangiz 3-qavatda, 312-raqam.' }
            ]
        },
        {
            id: 'dlg-ru-3',
            title: 'Успешное Собеседование на Работу',
            titleUz: 'Ishga Qabul Qilish Suhbati',
            category: 'career',
            categoryName: 'Ish & Karyera',
            icon: '💼',
            level: 'B2',
            desc: 'Обсуждение профессионального опыта, навыков и обязанностей.',
            lines: [
                { speaker: 'A', role: 'Интервьюер (Intervyu oluvchi)', text: 'Здравствуйте, Азизбек! Расскажите кратко о себе и вашем опыте работы.', tr: 'Assalomu alaykum, Azizbek! O\'zingiz va ish tajribangiz haqida qisqacha so\'zlab bering.' },
                { speaker: 'B', role: 'Соискатель (Nomzod)', text: 'Здравствуйте! Я более трёх лет занимаюсь разработкой и успешно реализовал несколько крупных проектов.', tr: 'Assalomu alaykum! Men uch yildan ortiq vaqtdan beri dasturlash bilan shug\'ullanaman va bir nechta yirik loyihalarni muvaffaqiyatli yakunlaganman.' },
                { speaker: 'A', role: 'Интервьюер (Intervyu oluvchi)', text: 'Какие технологии вы используете чаще всего в своей повседневной работе?', tr: 'Kundalik ishingizda eng ko\'p qaysi texnologiyalardan foydalanasiz?' },
                { speaker: 'B', role: 'Соискатель (Nomzod)', text: 'Я специализируюсь на современных веб-технологиях, базах данных и создании удобного интерфейса.', tr: 'Men zamonaviy veb-texnologiyalar, ma\'lumotlar bazalari va qulay foydalanuvchi interfeysi yaratishga ixtisoslashganman.' },
                { speaker: 'A', role: 'Интервьюер (Intervyu oluvchi)', text: 'Отлично! Когда вы готовы приступить к работе в случае положительного решения?', tr: 'Ajoyib! Ijobiy qaror qabul qilingan taqdirda qachondan ish boshlashga tayyorsiz?' },
                { speaker: 'B', role: 'Соискатель (Nomzod)', text: 'Я готов выйти на работу со следующего понедельника.', tr: 'Kelasi dushanbadan ishga chiqishga tayyorman.' }
            ]
        }
    ],

    de: [
        {
            id: 'dlg-de-1',
            title: 'Am Flughafen und Passkontrolle',
            titleUz: 'Aeroportda va Pasport Nazoratida',
            category: 'travel',
            categoryName: 'Sayohat & Aeroport',
            icon: '✈️',
            level: 'A2',
            desc: 'Gepäckabgabe, Bordkarte und Flugsteig finden.',
            lines: [
                { speaker: 'A', role: 'Passagier (Yo\'lovchi)', text: 'Guten Tag! Wo kann ich für den Lufthansa-Flug nach Frankfurt einchecken?', tr: 'Xayrli kun! Frankfurtga uchadigan Lufthansa reysi uchun qayerda ro\'yxatdan o\'tishim mumkin?' },
                { speaker: 'B', role: 'Mitarbeiter (Xodim)', text: 'Guten Tag! Die Schalter 20 bis 25 sind für Lufthansa geöffnet. Bitte folgen Sie den Schildern.', tr: 'Xayrli kun! 20 dan 25 gacha bo\'lgan peshtaxtalar Lufthansa uchun ochiq. Iltimos, ko\'rsatkichlarga qarab yuring.' },
                { speaker: 'A', role: 'Passagier (Yo\'lovchi)', text: 'Vielen Dank! Hier sind mein Reisepass und meine Buchungsbestätigung.', tr: 'Katta rahmat! Mana mening xorijiy pasportim va bron tasdig\'im.' },
                { speaker: 'B', role: 'Mitarbeiter (Xodim)', text: 'Danke. Haben Sie nur ein Gepäckstück zum Aufgeben?', tr: 'Rahmat. Sizda topshirish uchun faqat bitta yuk bormi?' },
                { speaker: 'A', role: 'Passagier (Yo\'lovchi)', text: 'Ja, nur dieser Koffer. Den Rucksack nehme ich als Handgepäck mit.', tr: 'Ha, faqat shu chamadon. Ryukzakni esa qo\'l yuki sifatida o\'zim bilan olaman.' },
                { speaker: 'B', role: 'Mitarbeiter (Xodim)', text: 'Alles bestens! Hier ist Ihre Bordkarte. Flugsteig A12. Guten Flug!', tr: 'Hammasi a\'lo darajada! Mana sizning parvoz taloningiz. Chiqish darvozasi A12. Yaxshi parvoz qiling!' }
            ]
        },
        {
            id: 'dlg-de-2',
            title: 'Im Restaurant und Bestellen',
            titleUz: 'Nemis Restoranida Buyurtma Berish',
            category: 'food',
            categoryName: 'Restoran & Taom',
            icon: '🍽️',
            level: 'A2',
            desc: 'Essen bestellen, Empfehlungen und die Rechnung verlangen.',
            lines: [
                { speaker: 'A', role: 'Kellner (Ofitsiant)', text: 'Guten Abend! Haben Sie schon gewählt oder möchten Sie zuerst etwas trinken?', tr: 'Xayrli kech! Taom tanladingizmi yoki avval biror narsa ichishni xohlaysizmi?' },
                { speaker: 'B', role: 'Gast (Mehmon)', text: 'Guten Abend! Ich möchte bitte ein Mineralwasser ohne Kohlensäure.', tr: 'Xayrli kech! Menga gazsiz ma\'danli suv, iltimos.' },
                { speaker: 'A', role: 'Kellner (Ofitsiant)', text: 'Sehr gerne. Was darf ich Ihnen zu essen bringen?', tr: 'Bajonidil. Ovqatlanish uchun nima keltiray?' },
                { speaker: 'B', role: 'Gast (Mehmon)', text: 'Ich nehme das Wiener Schnitzel mit Kartoffelsalat, bitte.', tr: 'Menga kartoshkali salat bilan birga Vena shnitselini bering, iltimos.' },
                { speaker: 'A', role: 'Kellner (Ofitsiant)', text: 'Ausgezeichnete Wahl! Möchten Sie auch einen kleinen gemischten Salat dazu?', tr: 'Ajoyib tanlov! Qo\'shimcha ravishda kichik aralash salat ham xohlaysizmi?' },
                { speaker: 'B', role: 'Gast (Mehmon)', text: 'Ja, gerne! Und bringen Sie mir bitte später die Rechnung zusammen.', tr: 'Ha, mamnuniyat bilan! Keyinroq hisobni ham birga olib kelarsiz.' }
            ]
        },
        {
            id: 'dlg-de-3',
            title: 'Das Vorstellungsgespräch in Deutschland',
            titleUz: 'Germaniyada Ishga Kirish Suhbati',
            category: 'career',
            categoryName: 'Ish & Karyera',
            icon: '💼',
            level: 'B2',
            desc: 'Berufliche Qualifikationen, Motivation und Stärken präsentieren.',
            lines: [
                { speaker: 'A', role: 'Personalleiter (Kadrlar rahbari)', text: 'Herzlich willkommen, Herr Azizbek! Schön, dass Sie den Weg zu uns gefunden haben.', tr: 'Xush kelibsiz, janob Azizbek! Bizga tashrif buyurganingizdan xursandmiz.' },
                { speaker: 'B', role: 'Bewerber (Nomzod)', text: 'Vielen Dank für die Einladung! Ich freue mich sehr auf unser Gespräch.', tr: 'Taklif uchun katta rahmat! Suhbatimizni intizorlik bilan kutgandim.' },
                { speaker: 'A', role: 'Personalleiter (Kadrlar rahbari)', text: 'Warum haben Sie sich gerade für unser Technologieunternehmen entschieden?', tr: 'Nima sababdan aynan bizning texnologik kompaniyamizni tanladingiz?' },
                { speaker: 'B', role: 'Bewerber (Nomzod)', text: 'Ihre innovativen Projekte im Bildungsbereich faszinieren mich sehr, und meine Fähigkeiten passen ideal dazu.', tr: 'Sizning ta\'lim sohasidagi innovatsion loyihalaringiz meni juda qiziqtirdi va mening ko\'nikmalarim bunga juda mos keladi.' },
                { speaker: 'A', role: 'Personalleiter (Kadrlar rahbari)', text: 'Das klingt überzeugend. Wie gehen Sie mit komplexen Aufgabenstellungen um?', tr: 'Bu juda ishonchli eshitilmoqda. Murakkab vazifalar yuzaga kelganda ularni qanday hal qilasiz?' },
                { speaker: 'B', role: 'Bewerber (Nomzod)', text: 'Ich analysiere das Problem schrittweise und arbeite eng im Team zusammen, um die beste Lösung zu finden.', tr: 'Men muammoni bosqichma-bosqich tahlil qilaman va eng yaxshi yechimni topish uchun jamoa bilan birgalikda ishlayman.' }
            ]
        }
    ]
};

window.SpeakProDialogues = SpeakProDialogues;
