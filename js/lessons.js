// ==========================================================================
// SpeakPro — Interaktiv Darslar va O'quv Tizimi (2026 Edition)
// Muallif: "Planeta" o'quv markazi
// ==========================================================================

const SpeakProCurriculum = {
    languages: {
        en: {
            id: 'en',
            name: 'Ingliz tili',
            nativeName: 'English',
            flag: '🇬🇧',
            code: 'en-US',
            color: '#4f46e5',
            gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
            badge: 'Global Muloqot №1',
            desc: 'Dunyodagi eng ommabop til. IT sohasi, xalqaro biznes, chet el sayohati va oliy ta\'lim kaliti.',
            levels: [
                {
                    code: 'A1',
                    name: 'Boshlang\'ich (Beginner)',
                    badge: '🌱 1-Bosqich',
                    desc: 'Alifbo, salomlashish, tanishuv va ilk sodda jumlalar.',
                    lessonsCount: 10
                },
                {
                    code: 'A2',
                    name: 'Elementar (Elementary)',
                    badge: '🌿 2-Bosqich',
                    desc: 'Kundalik muloqot, xaridlar, do\'kon va transport.',
                    lessonsCount: 10
                },
                {
                    code: 'B1',
                    name: 'O\'rta (Intermediate)',
                    badge: '🌳 3-Bosqich',
                    desc: 'Erkin fikr bildirish, suhbatlar va grammatika.',
                    lessonsCount: 10
                },
                {
                    code: 'B2',
                    name: 'Yuqori O\'rta (Upper-Int)',
                    badge: '🌲 4-Bosqich',
                    desc: 'Murakkab mavzular, taqdimotlar va munozaralar.',
                    lessonsCount: 10
                },
                {
                    code: 'C1',
                    name: 'Ilg\'or (Advanced)',
                    badge: '🚀 5-Bosqich',
                    desc: 'Professional daraja, xalqaro biznes va ilmiy tahlil.',
                    lessonsCount: 10
                }
            ],
            mockTests: [
                {
                    id: 'mock-ielts',
                    title: 'IELTS Mock Test (Academic & General)',
                    badge: '🎓 IELTS 7.5+',
                    desc: 'Xalqaro IELTS formati: Listening, Reading va Lexical Resource bo\'yicha 10 ta maxsus test.',
                    duration: '20 daqiqa',
                    starsReward: 30,
                    minScorePercent: 90,
                    questions: [
                        { q: 'Choose the correct synonym for "Scrutinize":', options: ['Examine thoroughly', 'Ignore completely', 'Create quickly', 'Speak loudly'], a: 0, ex: '"Scrutinize" means to inspect or examine very closely.' },
                        { q: 'The government aims to ________ renewable energy adoption.', options: ['accelerate', 'deteriorate', 'stagnate', 'demolish'], a: 0, ex: '"Accelerate" means to speed up or increase the rate.' },
                        { q: 'Identify the grammatically correct conditional sentence:', options: ['If I would have studied, I passed.', 'If I had studied, I would have passed.', 'If I study, I would passed.', 'If I had study, I pass.'], a: 1, ex: 'Third conditional: If + had + V3, would have + V3.' },
                        { q: 'Choose the best word: "The research findings ________ previous theories."', options: ['contradict', 'contradiction', 'contradicting', 'contradicts with'], a: 0, ex: '"Findings" is plural, so it takes the plural verb "contradict".' },
                        { q: 'What is the meaning of the idiom "A blessing in disguise"?', options: ['An unfortunate event with good results', 'A hidden treasure', 'A disguised enemy', 'A religious ceremony'], a: 0, ex: 'Something that seems bad at first, but turns out to be good.' },
                        { q: 'Select the correct passive voice: "Scientists discovered a new species."', options: ['A new species was discovered by scientists.', 'A new species is discovered by scientists.', 'A new species had discovered scientists.', 'A new species were discovered by scientists.'], a: 0, ex: 'Past simple passive: was/were + past participle.' },
                        { q: 'Choose the antonym of "Abundant":', options: ['Scarce', 'Plentiful', 'Generous', 'Massive'], a: 0, ex: '"Abundant" means in large quantities; "Scarce" means rare or insufficient.' },
                        { q: 'Fill the blank: "Despite the bad weather, they decided to ________ their journey."', options: ['proceed with', 'give in', 'call off', 'break down'], a: 0, ex: '"Proceed with" means to continue with.' },
                        { q: 'Which word means "capable of being maintained at a steady level"?', options: ['Sustainable', 'Volatile', 'Perishable', 'Fragile'], a: 0, ex: '"Sustainable" refers to maintaining ecological and resource balance.' },
                        { q: 'Choose the correct linking phrase: "She worked late; ________, she completed the report on time."', options: ['consequently', 'on the contrary', 'although', 'despite'], a: 0, ex: '"Consequently" shows cause and effect.' }
                    ]
                },
                {
                    id: 'mock-sat',
                    title: 'SAT Reading & Writing Mock Test',
                    badge: '🏛️ SAT 1400+',
                    desc: 'AQSh oliygohlari uchun SAT formati: Vocabulary in Context va Passage Analysis.',
                    duration: '20 daqiqa',
                    starsReward: 30,
                    minScorePercent: 90,
                    questions: [
                        { q: 'In literary analysis, the word "Ambivalent" most nearly means:', options: ['Having mixed or contradictory feelings', 'Clear and resolute', 'Fiercely aggressive', 'Indifferent and sleepy'], a: 0, ex: '"Ambivalent" means simultaneously having opposing attitudes.' },
                        { q: 'The author\'s tone can best be described as:', options: ['Pragmatic and objective', 'Hostile and satirical', 'Melodramatic', 'Indifferent'], a: 0, ex: 'Objective and evidence-based analysis.' },
                        { q: 'Choose the word that best completes the sentence: "His argument was so ________ that everyone was persuaded."', options: ['cogent', 'feeble', 'convoluted', 'ambiguous'], a: 0, ex: '"Cogent" means clear, logical, and convincing.' },
                        { q: 'Select the closest meaning of "Ephemeral":', options: ['Short-lived or fleeting', 'Eternal and everlasting', 'Heavy and dense', 'Ancient'], a: 0, ex: '"Ephemeral" means lasting for a very short time.' },
                        { q: 'Identify the sentence with no punctuation errors:', options: ['The scientist conducted the experiment; however, the results were inconclusive.', 'The scientist conducted the experiment however, the results were inconclusive.', 'The scientist conducted the experiment, however the results were inconclusive.', 'The scientist conducted the experiment; however the results were inconclusive.'], a: 0, ex: 'Semicolon before "however", comma after it.' },
                        { q: 'What does "Plausible" mean in a scientific argument?', options: ['Believable and reasonable', 'Completely false', 'Guaranteed true', 'Extremely rare'], a: 0, ex: '"Plausible" means seemingly reasonable or probable.' },
                        { q: 'Choose the antonym of "Pristine":', options: ['Contaminated', 'Pure', 'Original', 'Flawless'], a: 0, ex: '"Pristine" means unspoiled; antonym is contaminated.' },
                        { q: 'Choose the correct word: "The discovery had a ________ impact on medicine."', options: ['profound', 'profusely', 'profundity', 'profuse'], a: 0, ex: '"Profound" is an adjective modifying the noun "impact".' },
                        { q: 'Which word describes someone who is excessively frugal with money?', options: ['Parsimonious', 'Altruistic', 'Extravagant', 'Magnanimous'], a: 0, ex: '"Parsimonious" means stingy or unwilling to spend money.' },
                        { q: 'The prefix "Omni-" (e.g. Omnipotent) means:', options: ['All or everywhere', 'Few or rare', 'Opposite', 'Ancient'], a: 0, ex: '"Omni-" comes from Latin meaning "all".' }
                    ]
                },
                {
                    id: 'mock-cefr-en',
                    title: 'CEFR B2-C1 Ingliz tili Milliy Sertifikat',
                    badge: '📜 CEFR / BMB Test',
                    desc: 'O\'zbekiston Milliy sertifikati va CEFR talablari asosidagi sinov.',
                    duration: '20 daqiqa',
                    starsReward: 30,
                    minScorePercent: 90,
                    questions: [
                        { q: 'Choose the correct preposition: "I am interested ________ learning languages."', options: ['in', 'at', 'on', 'with'], a: 0, ex: '"Interested" always takes the preposition "in".' },
                        { q: 'Complete: "Hardly ________ when the phone rang."', options: ['had I arrived', 'I had arrived', 'did I arrive', 'I arrived'], a: 0, ex: 'Inversion after negative adverb "Hardly": Hardly had + subject + V3.' },
                        { q: 'Choose the correct form: "She suggested that he ________ a doctor."', options: ['see', 'sees', 'saw', 'should to see'], a: 0, ex: 'Subjunctive mood takes the base form: "that he see".' },
                        { q: 'What is the meaning of "Take after"?', options: ['Resemble an older relative', 'Chasing someone', 'Writing down notes', 'Starting a new hobby'], a: 0, ex: '"Take after" means to look or behave like a parent or ancestor.' },
                        { q: 'Which sentence is grammatically correct?', options: ['Neither the teacher nor the students were present.', 'Neither the teacher nor the students was present.', 'Neither the teacher or the students were present.', 'Neither of students were there.'], a: 0, ex: 'With "neither... nor", the verb agrees with the closer subject ("students" -> were).' },
                        { q: 'Choose the correct word: "The medicine will ________ your pain."', options: ['alleviate', 'escalate', 'deter', 'inflict'], a: 0, ex: '"Alleviate" means to lessen or make pain easier to endure.' },
                        { q: 'Complete: "I wish I ________ more time yesterday."', options: ['had had', 'have', 'had', 'would have'], a: 0, ex: 'Wish about the past requires Past Perfect (had had).' },
                        { q: 'Choose the best synonym for "Eloquent":', options: ['Articulate and persuasive', 'Silent and shy', 'Clumsy', 'Confused'], a: 0, ex: '"Eloquent" means fluent or persuasive in speaking or writing.' },
                        { q: 'Complete: "The project was delayed ________ unforeseen circumstances."', options: ['due to', 'because', 'despite', 'in spite'], a: 0, ex: '"Due to" is followed by a noun phrase.' },
                        { q: 'Which modal verb expresses high certainty in the past?', options: ['must have', 'can have', 'should have', 'would have to'], a: 0, ex: '"Must have" expresses deduction/certainty about the past.' }
                    ]
                }
            ],
            curriculum: {
                A1: [
                    {
                        id: 'en-a1-1',
                        num: 1,
                        title: '1-Dars: Salomlashish va O\'zini tanishtirish',
                        desc: 'Ingliz tilida rasmiy va norasmiy salomlashish, ism so\'rash va javob berish.',
                        video: {
                            title: 'Greeting and Introductions in English',
                            channel: 'SpeakPro & "Planeta" Academy',
                            duration: '08:45',
                            topic: 'Alifbo, salomlashish qoidalari va talaffuz sirlari'
                        },
                        dialog: [
                            { speaker: 'John', avatar: '👨‍💼', text: 'Hello! Good morning, my name is John Smith.', tr: 'Salom! Xayrli tong, mening ismim John Smith.' },
                            { speaker: 'Sara', avatar: '👩‍💼', text: 'Hi John! Nice to meet you. I am Sara from Uzbekistan.', tr: 'Salom John! Tanishganimdan xursandman. Men O\'zbekistonlik Saraman.' },
                            { speaker: 'John', avatar: '👨‍💼', text: 'Nice to meet you too, Sara! How are you doing today?', tr: 'Men ham tanishganimdan xursandman, Sara! Bugun ahvollaringiz qanday?' },
                            { speaker: 'Sara', avatar: '👩‍💼', text: 'I am doing great, thank you! Welcome to our language platform.', tr: 'Juda yaxshi, rahmat! Bizning til platformamizga xush kelibsiz.' },
                            { speaker: 'John', avatar: '👨‍💼', text: 'Thank you very much. Let\'s learn together!', tr: 'Katta rahmat. Keling, birgalikda o\'rganamiz!' }
                        ],
                        vocab: [
                            { word: 'Hello', tr: 'Salom', phonetic: '/həˈləʊ/', ex: 'Hello! How are you?' },
                            { word: 'Good morning', tr: 'Xayrli tong', phonetic: '/ɡʊd ˈmɔː.nɪŋ/', ex: 'Good morning, teacher!' },
                            { word: 'Nice to meet you', tr: 'Tanishganimdan xursandman', phonetic: '/naɪs tuː miːt juː/', ex: 'Nice to meet you, Mr. Smith.' },
                            { word: 'Welcome', tr: 'Xush kelibsiz', phonetic: '/ˈwel.kəm/', ex: 'Welcome to SpeakPro!' },
                            { word: 'Name', tr: 'Ism', phonetic: '/neɪm/', ex: 'My name is Sara.' },
                            { word: 'Thank you', tr: 'Rahmat', phonetic: '/ˈθæŋk juː/', ex: 'Thank you for your help.' },
                            { word: 'Goodbye', tr: 'Xayr', phonetic: '/ɡʊdˈbaɪ/', ex: 'Goodbye, see you tomorrow!' },
                            { word: 'Friend', tr: 'Do\'st', phonetic: '/frend/', ex: 'He is my best friend.' }
                        ],
                        quiz: [
                            { q: '"Nice to meet you" iborasining o\'zbekcha ma\'nosi nima?', options: ['Tanishganimdan xursandman', 'Kechirasiz', 'Xayr, salomat bo\'ling', 'Qayerdansiz?'], a: 0 },
                            { q: 'Ertalab ko\'rishganda qaysi salomlashish aytiladi?', options: ['Good morning', 'Good night', 'Good evening', 'See you later'], a: 0 },
                            { q: '"Xush kelibsiz" so\'zining inglizchasi qaysi?', options: ['Welcome', 'Farewell', 'Goodbye', 'Please'], a: 0 },
                            { q: '"My name is..." qanday tarjima qilinadi?', options: ['Mening ismim...', 'Mening yoshim...', 'Mening shahrim...', 'Men keldim...'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-2',
                        num: 2,
                        title: '2-Dars: Raqamlar, Sanash va Telefon raqami',
                        desc: '0 dan 100 gacha sonlar, yoshni aytish va telefon raqamini to\'g\'ri talaffuz qilish.',
                        video: {
                            title: 'Numbers and Counting in Daily Life',
                            channel: 'SpeakPro Video Studio',
                            duration: '07:30',
                            topic: 'Raqamlar, tartib sonlar va telefon raqam aytish'
                        },
                        dialog: [
                            { speaker: 'Alex', avatar: '👨‍🎓', text: 'Excuse me, could you give me your phone number?', tr: 'Kechirasiz, telefon raqamingizni bera olasizmi?' },
                            { speaker: 'Lola', avatar: '👩‍🎓', text: 'Sure! It is plus nine nine eight, ninety, one two three, four five six seven.', tr: 'Albatta! Bu +998 90 123 45 67.' },
                            { speaker: 'Alex', avatar: '👨‍🎓', text: 'Thank you! And how old are you, Lola?', tr: 'Rahmat! Necha yoshdasiz, Lola?' },
                            { speaker: 'Lola', avatar: '👩‍🎓', text: 'I am twenty-two years old.', tr: 'Men yigirma ikki yoshdaman.' }
                        ],
                        vocab: [
                            { word: 'One, Two, Three', tr: 'Bir, Ikki, Uch', phonetic: '/wʌn tuː θriː/', ex: 'One, two, three, let\'s go!' },
                            { word: 'Ten, Twenty', tr: 'O\'n, Yigirma', phonetic: '/ten ˈtwen.ti/', ex: 'I have ten books.' },
                            { word: 'Phone number', tr: 'Telefon raqami', phonetic: '/fəʊn ˈnʌm.bər/', ex: 'What is your phone number?' },
                            { word: 'How old are you?', tr: 'Yoshingiz nechada?', phonetic: '/haʊ əʊld ɑːr juː/', ex: 'How old are you, friend?' },
                            { word: 'Years old', tr: 'Yoshda', phonetic: '/jɪəz əʊld/', ex: 'I am twenty years old.' },
                            { word: 'Hundred', tr: 'Yuz', phonetic: '/ˈhʌn.drəd/', ex: 'One hundred percent.' },
                            { word: 'Plus', tr: 'Qo\'shuv / Plyus', phonetic: '/plʌs/', ex: 'Plus country code.' },
                            { word: 'Count', tr: 'Sanamoqlik', phonetic: '/kaʊnt/', ex: 'Can you count to ten?' }
                        ],
                        quiz: [
                            { q: '"Twenty-five" qaysi son?', options: ['25', '15', '52', '20'], a: 0 },
                            { q: '"How old are you?" savoliga to\'g\'ri javob qaysi?', options: ['I am 19 years old', 'I live in Tashkent', 'My name is Ali', 'Fine, thank you'], a: 0 },
                            { q: '100 ingliz tilida nima deyiladi?', options: ['Hundred', 'Thousand', 'Million', 'Ten'], a: 0 },
                            { q: '"Telefon raqami" so\'zining inglizchasi:', options: ['Phone number', 'Address line', 'Passport id', 'Postal code'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-3',
                        num: 3,
                        title: '3-Dars: Oila va Qarindoshlar',
                        desc: 'Oila a\'zolarini nomlash: ota-ona, aka-uka, opa-singil va ularni tasvirlash.',
                        video: {
                            title: 'Family Members and Relationships',
                            channel: 'SpeakPro Video Studio',
                            duration: '09:10',
                            topic: 'Oila a\'zolari, "have got" va egalik olmoshlari'
                        },
                        dialog: [
                            { speaker: 'David', avatar: '🧑‍💻', text: 'Do you have a big family, Malika?', tr: 'Malika, sizning oilangiz kattami?' },
                            { speaker: 'Malika', avatar: '👩‍💼', text: 'Yes! I have parents, two brothers and one sister.', tr: 'Ha! Mening ota-onam, ikki akam va bir singlim bor.' },
                            { speaker: 'David', avatar: '🧑‍💻', text: 'That is wonderful. Are your brothers students?', tr: 'Bu ajoyib. Akalaringiz talabami?' },
                            { speaker: 'Malika', avatar: '👩‍💼', text: 'Yes, my older brother studies computer science in London.', tr: 'Ha, katta akam Londonda kompyuter texnologiyasini o\'rganadi.' }
                        ],
                        vocab: [
                            { word: 'Family', tr: 'Oila', phonetic: '/ˈfæm.əl.i/', ex: 'I love my family.' },
                            { word: 'Father / Mother', tr: 'Ota / Ona', phonetic: '/ˈfɑː.ðər/ /ˈmʌð.ər/', ex: 'My father is a doctor.' },
                            { word: 'Brother / Sister', tr: 'Aka-uka / Opa-singil', phonetic: '/ˈbrʌð.ər/ /ˈsɪs.tər/', ex: 'I have one younger brother.' },
                            { word: 'Parents', tr: 'Ota-ona', phonetic: '/ˈpeə.rənts/', ex: 'My parents live in Samarkand.' },
                            { word: 'Children', tr: 'Farzandlar / Bolalar', phonetic: '/ˈtʃɪl.drən/', ex: 'They have three children.' },
                            { word: 'Grandmother', tr: 'Buvi', phonetic: '/ˈɡræn.mʌð.ər/', ex: 'My grandmother bakes delicious cakes.' },
                            { word: 'Grandfather', tr: 'Bobo', phonetic: '/ˈɡræn.fɑː.ðər/', ex: 'My grandfather is very wise.' },
                            { word: 'Uncle / Aunt', tr: 'Tog\'a-amaki / Xola-amma', phonetic: '/ˈʌŋ.kəl/ /ɑːnt/', ex: 'My uncle visited us today.' }
                        ],
                        quiz: [
                            { q: '"Parents" so\'zi nimani anglatadi?', options: ['Ota-ona', 'Bolalar', 'Do\'stlar', 'Qo\'shnilar'], a: 0 },
                            { q: '"Singil yoki opa" so\'zi inglizcha nima?', options: ['Sister', 'Brother', 'Aunt', 'Daughter'], a: 0 },
                            { q: '"Father" so\'zining ma\'nosi:', options: ['Ota', 'Ona', 'Aka', 'Tog\'a'], a: 0 },
                            { q: '"Grandmother" kim?', options: ['Buvi', 'Ona', 'Xola', 'Singil'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-4',
                        num: 4,
                        title: '4-Dars: Ovqat, Restoran va Buyurtma berish',
                        desc: 'Sevimli taomlar, ichimliklar, kafeda buyurtma berish va hisob so\'rash.',
                        video: {
                            title: 'At the Restaurant: Ordering Food and Drinks',
                            channel: 'SpeakPro Video Studio',
                            duration: '08:20',
                            topic: 'I would like..., Can I have..., Menu va Hisob'
                        },
                        dialog: [
                            { speaker: 'Waiter', avatar: '👨‍🍳', text: 'Welcome to our cafe! Are you ready to order?', tr: 'Kafemizga xush kelibsiz! Buyurtma berishga tayyormisiz?' },
                            { speaker: 'Guest', avatar: '👨‍💼', text: 'Yes, please. I would like a chicken sandwich and green tea.', tr: 'Ha, iltimos. Men tovuqli sendvich va ko\'k choy xohlayman.' },
                            { speaker: 'Waiter', avatar: '👨‍🍳', text: 'Would you like some dessert as well?', tr: 'Desert ham xohlaysizmi?' },
                            { speaker: 'Guest', avatar: '👨‍💼', text: 'No, thank you. Could you bring the bill, please?', tr: 'Yo\'q, rahmat. Iltimos, hisobni olib kela olasizmi?' }
                        ],
                        vocab: [
                            { word: 'Food', tr: 'Ovqat / Taom', phonetic: '/fuːd/', ex: 'Traditional food is delicious.' },
                            { word: 'Water / Tea / Coffee', tr: 'Suv / Choy / Kofe', phonetic: '/ˈwɔː.tər/', ex: 'A cup of black coffee, please.' },
                            { word: 'Bread', tr: 'Non', phonetic: '/bred/', ex: 'Fresh bread smells amazing.' },
                            { word: 'Breakfast / Lunch / Dinner', tr: 'Nonushta / Tushlik / Kechki ovqat', phonetic: '/ˈbrek.fəst/', ex: 'We have breakfast at 8 AM.' },
                            { word: 'Menu', tr: 'Taomnoma (Menyu)', phonetic: '/ˈmen.juː/', ex: 'Can I see the menu, please?' },
                            { word: 'The bill', tr: 'Hisob-kitob (Chek)', phonetic: '/bɪl/', ex: 'Could we have the bill?' },
                            { word: 'Delicious', tr: 'Mazali / Shirin', phonetic: '/dɪˈlɪʃ.əs/', ex: 'This soup is very delicious.' },
                            { word: 'I would like...', tr: 'Men ... xohlardim (istardim)', phonetic: '/aɪ wʊd laɪk/', ex: 'I would like a glass of water.' }
                        ],
                        quiz: [
                            { q: 'Restoranda madaniy buyurtma berish qaysi ibora bilan boshlanadi?', options: ['I would like...', 'Give me now...', 'I want quick...', 'Bring fast...'], a: 0 },
                            { q: '"The bill, please" nima degani?', options: ['Hisobni olib keling, iltimos', 'Menyuni bering', 'Suv bering', 'Non bering'], a: 0 },
                            { q: '"Mazali" so\'zining inglizchasi:', options: ['Delicious', 'Sour', 'Bitter', 'Heavy'], a: 0 },
                            { q: '"Breakfast" qaysi mahal taomi?', options: ['Nonushta', 'Tushlik', 'Kechki ovqat', 'Desert'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-5',
                        num: 5,
                        title: '5-Dars: Ranglar, Kiyimlar va Do\'konda Xarid',
                        desc: 'Ranglarni ifodalash, kiyim turlari, o\'lcham so\'rash va narx bilish.',
                        video: {
                            title: 'Colors, Clothes and Shopping Phrases',
                            channel: 'SpeakPro Video Studio',
                            duration: '07:50',
                            topic: 'How much is it?, Ranglar va Sifatlar'
                        },
                        dialog: [
                            { speaker: 'Customer', avatar: '👩‍💼', text: 'Excuse me, how much is this blue jacket?', tr: 'Kechirasiz, bu ko\'k kurtka qancha turadi?' },
                            { speaker: 'Shop Assistant', avatar: '👨‍💼', text: 'It is fifty dollars. What size do you need?', tr: 'U ellik dollar. Sizga qaysi o\'lcham kerak?' },
                            { speaker: 'Customer', avatar: '👩‍💼', text: 'Medium size, please. Can I try it on?', tr: 'O\'rta (M) o\'lcham, iltimos. K соответствkiyib ko\'rsam bo\'ladimi?' },
                            { speaker: 'Shop Assistant', avatar: '👨‍💼', text: 'Of course! The fitting room is right over there.', tr: 'Albatta! Kiyib ko\'rish xonasi anavi yerda.' }
                        ],
                        vocab: [
                            { word: 'Red, Blue, Green', tr: 'Qizil, Ko\'k, Yashil', phonetic: '/red bluː ɡriːn/', ex: 'I like blue shirts.' },
                            { word: 'Black, White', tr: 'Qora, Oq', phonetic: '/blæk waɪt/', ex: 'A classic black suit.' },
                            { word: 'Jacket / Shirt / Shoes', tr: 'Kurtka / Ko\'ylak / Oyoq kiyim', phonetic: '/ˈdʒæk.ɪt/', ex: 'Comfortable sport shoes.' },
                            { word: 'How much is it?', tr: 'Bu qancha turadi?', phonetic: '/haʊ mʌtʃ ɪz ɪt/', ex: 'How much is this bag?' },
                            { word: 'Size', tr: 'O\'lcham', phonetic: '/saɪz/', ex: 'Do you have size L?' },
                            { word: 'Expensive / Cheap', tr: 'Qimmat / Arzon', phonetic: '/ɪkˈspen.sɪv tʃiːp/', ex: 'The price is very cheap.' },
                            { word: 'Try on', tr: 'Kiyib ko\'rmoq', phonetic: '/traɪ ɒn/', ex: 'Can I try this on?' },
                            { word: 'Cash or Card', tr: 'Naqd yoki Karta', phonetic: '/kæʃ ɔː kɑːd/', ex: 'Can I pay by credit card?' }
                        ],
                        quiz: [
                            { q: '"How much is this?" qanday tarjima qilinadi?', options: ['Bu qancha turadi?', 'Bu qayerda?', 'Bu kimniki?', 'Bu qanday rang?'], a: 0 },
                            { q: '"Ko\'k" rang inglizcha nima deyiladi?', options: ['Blue', 'Black', 'Brown', 'Yellow'], a: 0 },
                            { q: '"Kiyib ko\'rish xonasi" qaysi?', options: ['Fitting room', 'Classroom', 'Living room', 'Bedroom'], a: 0 },
                            { q: '"Arzon" so\'zining inglizchasi:', options: ['Cheap', 'Expensive', 'Heavy', 'Bright'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-6',
                        num: 6,
                        title: '6-Dars: Uy, Xonalar va Mebellar',
                        desc: 'Yashash uyi, oshxona, mehmonxona, mebellar va "There is / There are" qoidasi.',
                        video: {
                            title: 'House, Rooms and Furniture in English',
                            channel: 'SpeakPro Video Studio',
                            duration: '08:15',
                            topic: 'There is / There are, Xonalar va jihozlar'
                        },
                        dialog: [
                            { speaker: 'Anna', avatar: '👩‍🏫', text: 'Where do you live, Bobur?', tr: 'Bobur, siz qayerda yashaysiz?' },
                            { speaker: 'Bobur', avatar: '👨‍💼', text: 'I live in a comfortable apartment in the city center.', tr: 'Men shahar markazidagi shinam xonadonda yashayman.' },
                            { speaker: 'Anna', avatar: '👩‍🏫', text: 'How many rooms are there in your flat?', tr: 'Xonadoningizda nechta xona bor?' },
                            { speaker: 'Bobur', avatar: '👨‍💼', text: 'There are three rooms: a living room, a bedroom and a kitchen.', tr: 'Uchta xona bor: mehmonxona, yotoqxona va oshxona.' }
                        ],
                        vocab: [
                            { word: 'House / Apartment', tr: 'Uy / Kvartira', phonetic: '/haʊs əˈpɑːt.mənt/', ex: 'A modern apartment.' },
                            { word: 'Living room', tr: 'Mehmonxona', phonetic: '/ˈlɪv.ɪŋ ˌruːm/', ex: 'We watch TV in the living room.' },
                            { word: 'Bedroom', tr: 'Yotoqxona', phonetic: '/ˈbed.ruːm/', ex: 'A quiet bedroom.' },
                            { word: 'Kitchen', tr: 'Oshxona', phonetic: '/ˈkɪtʃ.ən/', ex: 'Mom is cooking in the kitchen.' },
                            { word: 'Bathroom', tr: 'Vanna / Yuvinish xonasi', phonetic: '/ˈbɑːθ.ruːm/', ex: 'Clean bathroom.' },
                            { word: 'Table / Chair', tr: 'Stol / Stul', phonetic: '/ˈteɪ.bəl tʃeər/', ex: 'Sit on this chair.' },
                            { word: 'Door / Window', tr: 'Eshik / Deraza', phonetic: '/dɔːr ˈwɪn.dəʊ/', ex: 'Open the window, please.' },
                            { word: 'There is / There are', tr: 'Bor (mavjud)', phonetic: '/ðeər ɪz/', ex: 'There is a book on the table.' }
                        ],
                        quiz: [
                            { q: '"Kitchen" so\'zining ma\'nosi nima?', options: ['Oshxona', 'Yotoqxona', 'Mehmonxona', 'Hovli'], a: 0 },
                            { q: 'Bitta narsa haqida "mavjud" deyish uchun qaysi ibora ishlatiladi?', options: ['There is', 'There are', 'They have', 'It are'], a: 0 },
                            { q: '"Deraza" ingliz tilida nima?', options: ['Window', 'Door', 'Wall', 'Floor'], a: 0 },
                            { q: '"Living room" qaysi xona?', options: ['Mehmonxona', 'Oshxona', 'Baland xona', 'Yo\'lak'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-7',
                        num: 7,
                        title: '7-Dars: Kasblar va Ish Faoliyati',
                        desc: 'Kasb nomlari, ish joyi va "What do you do?" savoliga javob berish.',
                        video: {
                            title: 'Professions and Jobs: What Do You Do?',
                            channel: 'SpeakPro Video Studio',
                            duration: '08:35',
                            topic: 'Kasblar, Present Simple va a/an artikllari'
                        },
                        dialog: [
                            { speaker: 'Mark', avatar: '👨‍💼', text: 'What do you do for a living, Samira?', tr: 'Samira, kasbingiz nima / nima ish qilasiz?' },
                            { speaker: 'Samira', avatar: '👩‍⚕️', text: 'I am a doctor at a central hospital. What about you?', tr: 'Men markaziy shifoxonada shifokorman. O\'zingiz-chi?' },
                            { speaker: 'Mark', avatar: '👨‍💼', text: 'I am a software engineer. I develop mobile apps.', tr: 'Men dasturchiman. Mobil ilovalar yarataman.' },
                            { speaker: 'Samira', avatar: '👩‍⚕️', text: 'That sounds really interesting and useful!', tr: 'Bu juda qiziqarli va foydali eshitiladi!' }
                        ],
                        vocab: [
                            { word: 'Teacher', tr: 'O\'qituvchi', phonetic: '/ˈtiː.tʃər/', ex: 'Our English teacher is very kind.' },
                            { word: 'Doctor', tr: 'Shifokor (Doktor)', phonetic: '/ˈdɒk.tər/', ex: 'The doctor examines patients.' },
                            { word: 'Engineer', tr: 'Muhandis', phonetic: '/ˌen.dʒɪˈnɪər/', ex: 'He is an electrical engineer.' },
                            { word: 'Programmer / Developer', tr: 'Dasturchi', phonetic: '/ˈprəʊ.ɡræm.ər/', ex: 'Web developer writes code.' },
                            { word: 'Driver', tr: 'Haydovchi', phonetic: '/ˈdraɪ.vər/', ex: 'A careful bus driver.' },
                            { word: 'Student', tr: 'Talaba / O\'quvchi', phonetic: '/ˈstjuː.dənt/', ex: 'Diligent university student.' },
                            { word: 'Work / Job', tr: 'Ish / Faoliyat', phonetic: '/wɜːk dʒɒb/', ex: 'I love my new job.' },
                            { word: 'Office / Hospital', tr: 'Ofis / Shifoxona', phonetic: '/ˈɒf.ɪs ˈhɒs.pɪ.təl/', ex: 'She works in a modern office.' }
                        ],
                        quiz: [
                            { q: '"What do you do?" savoli nimani so\'raydi?', options: ['Kasbingiz nima?', 'Hozir nima qilyapsiz?', 'Qayerga ketyapsiz?', 'Kim bilan keldingiz?'], a: 0 },
                            { q: '"Shifokor" so\'zining inglizchasi:', options: ['Doctor', 'Lawyer', 'Driver', 'Baker'], a: 0 },
                            { q: 'O\'qituvchi oldidan qaysi artikl qo\'yiladi? (____ teacher)', options: ['a', 'an', 'the one', 'some'], a: 0 },
                            { q: '"Software engineer" kim?', options: ['Dasturiy ta\'minot muhandisi', 'Quruvchi', 'Mashina ustasi', 'Kassir'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-8',
                        num: 8,
                        title: '8-Dars: Vaqt, Soat va Kun Tartibi',
                        desc: 'Soat necha bo\'lganini so\'rash, daqiqalar va kun tartibi haqida gapirish.',
                        video: {
                            title: 'Telling Time and Daily Routine',
                            channel: 'SpeakPro Video Studio',
                            duration: '09:00',
                            topic: 'What time is it?, O\'clock, Half past, Daily routine'
                        },
                        dialog: [
                            { speaker: 'Tom', avatar: '👨‍🎓', text: 'Excuse me, what time is it now?', tr: 'Kechirasiz, hozir soat necha bo\'ldi?' },
                            { speaker: 'Emma', avatar: '👩‍🎓', text: 'It is half past two (2:30). Are you in a hurry?', tr: 'Soat ikkidan o\'ttiz daqiqa o\'tdi (2:30). Shoshyapsizmi?' },
                            { speaker: 'Tom', avatar: '👨‍🎓', text: 'Yes, my English lesson starts at three o\'clock!', tr: 'Ha, ingliz tili darsim soat uchda boshlanadi!' },
                            { speaker: 'Emma', avatar: '👩‍🎓', text: 'You still have thirty minutes, don\'t worry.', tr: 'Sizda hali o\'ttiz daqiqa bor, xavotir olmang.' }
                        ],
                        vocab: [
                            { word: 'What time is it?', tr: 'Soat necha bo\'ldi?', phonetic: '/wɒt taɪm ɪz ɪt/', ex: 'What time is it, please?' },
                            { word: 'O\'clock', tr: 'Roppa-rosa soat...', phonetic: '/əˈklɒk/', ex: 'It is five o\'clock.' },
                            { word: 'Morning, Afternoon, Evening', tr: 'Tong, Tushdan keyin, Oqshom', phonetic: '/ˈmɔː.nɪŋ/', ex: 'In the morning.' },
                            { word: 'Minute / Hour', tr: 'Daqiqa / Soat (vaqt o\'lchovi)', phonetic: '/ˈmɪn.ɪt aʊər/', ex: 'Wait ten minutes.' },
                            { word: 'Wake up', tr: 'Uyg\'onmoq', phonetic: '/weɪk ʌp/', ex: 'I wake up at 7 AM.' },
                            { word: 'Go to sleep', tr: 'Uxlashga yotmoq', phonetic: '/ɡəʊ tuː sliːp/', ex: 'I go to sleep at 11 PM.' },
                            { word: 'Start / Finish', tr: 'Boshlanmoq / Tugamoq', phonetic: '/stɑːt ˈfɪn.ɪʃ/', ex: 'The lesson starts now.' },
                            { word: 'Always / Usually', tr: 'Har doim / Odatda', phonetic: '/ˈɔːl.weɪz ˈjuː.ʒu.ə.li/', ex: 'I usually read books.' }
                        ],
                        quiz: [
                            { q: '"What time is it?" nimani bildiradi?', options: ['Soat necha?', 'Bugun qaysi kun?', 'Qachon kelasiz?', 'Qancha vaqt qoldi?'], a: 0 },
                            { q: 'Soat 3:00 to\'liq bo\'lsa inglizcha qanday aytiladi?', options: ['It is three o\'clock', 'It is three minutes', 'It is time three', 'Three hour now'], a: 0 },
                            { q: '"Wake up" fe\'lining ma\'nosi:', options: ['Uyg\'onmoq', 'Ovqatlanmoq', 'Yugurmoq', 'Uxlashga yotmoq'], a: 0 },
                            { q: '"Half past four" qaysi vaqt?', options: ['4:30', '4:15', '3:30', '5:30'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-9',
                        num: 9,
                        title: '9-Dars: Ob-havo, Fasllar va Tabiat',
                        desc: 'Quyoshli, yomg\'irli havo, to\'rt fasl va ob-havoni tasvirlash iboralari.',
                        video: {
                            title: 'Weather and Four Seasons in English',
                            channel: 'SpeakPro Video Studio',
                            duration: '08:00',
                            topic: 'How is the weather today?, Fasllar va Sifatlar'
                        },
                        dialog: [
                            { speaker: 'Jack', avatar: '🧑‍💻', text: 'How is the weather in Tashkent today?', tr: 'Bugun Toshkentda ob-havo qanday?' },
                            { speaker: 'Nodir', avatar: '👨‍💼', text: 'It is very sunny and warm. Around twenty-five degrees.', tr: 'Juda quyoshli va iliq. Taxminan yigirma besh daraja.' },
                            { speaker: 'Jack', avatar: '🧑‍💻', text: 'Lucky you! In London it is raining and quite cold today.', tr: 'Omadingiz kelibdi! Londonda bugun yomg\'ir yog\'yapti va ancha sovuq.' },
                            { speaker: 'Nodir', avatar: '👨‍💼', text: 'Spring is always wonderful here!', tr: 'Bu yerda bahor har doim ajoyib bo\'ladi!' }
                        ],
                        vocab: [
                            { word: 'Sunny / Rainy', tr: 'Quyoshli / Yomg\'irli', phonetic: '/ˈsʌn.i ˈreɪ.ni/', ex: 'A beautiful sunny day.' },
                            { word: 'Hot / Cold / Warm', tr: 'Issiq / Sovuq / Iliq', phonetic: '/hɒt kəʊld wɔːm/', ex: 'The weather is very warm.' },
                            { word: 'Spring, Summer', tr: 'Bahor, Yoz', phonetic: '/sprɪŋ ˈsʌm.ər/', ex: 'Summer is my favorite season.' },
                            { word: 'Autumn, Winter', tr: 'Kuz, Qish', phonetic: '/ˈɔː.təm ˈwɪn.tər/', ex: 'It snows in winter.' },
                            { word: 'Windy / Cloudy', tr: 'Shamolli / Bulutli', phonetic: '/ˈwɪn.di ˈklaʊ.di/', ex: 'It is getting cloudy.' },
                            { word: 'Temperature', tr: 'Harorat', phonetic: '/ˈtem.prə.tʃər/', ex: 'High temperature.' },
                            { word: 'Degree', tr: 'Daraja (gradus)', phonetic: '/dɪˈɡriː/', ex: 'Twenty degrees Celsius.' },
                            { word: 'Snow / Rain', tr: 'Qor / Yomg\'ir', phonetic: '/snəʊ reɪn/', ex: 'I love walking in the snow.' }
                        ],
                        quiz: [
                            { q: '"Sunny" so\'zining ma\'nosi qaysi?', options: ['Quyoshli', 'Yomg\'irli', 'Qorli', 'Shamolli'], a: 0 },
                            { q: '"Bahor" ingliz tilida qanday aytiladi?', options: ['Spring', 'Summer', 'Autumn', 'Winter'], a: 0 },
                            { q: '"How is the weather today?" savoli nimani so\'raydi?', options: ['Bugun ob-havo qanday?', 'Bugun qaysi kun?', 'Soat necha?', 'Qayerga boryapsiz?'], a: 0 },
                            { q: '"Sovuq" so\'zining inglizchasi:', options: ['Cold', 'Warm', 'Hot', 'Sunny'], a: 0 }
                        ]
                    },
                    {
                        id: 'en-a1-10',
                        num: 10,
                        title: '10-Dars: Sayohat, Yo\'nalish va Aeroportda',
                        desc: 'Yo\'l so\'rash, aeroport, chipta va ilk sayohatda erkin muloqot qilish.',
                        video: {
                            title: 'Travel English: Asking Directions and Airport Check-in',
                            channel: 'SpeakPro Video Studio',
                            duration: '10:15',
                            topic: 'Where is the...?, Turn left/right, Boarding pass'
                        },
                        dialog: [
                            { speaker: 'Tourist', avatar: '👨‍💼', text: 'Excuse me, where is the check-in desk for flight 701?', tr: 'Kechirasiz, 701-reys uchun ro\'yxatdan o\'tish stoli qayerda?' },
                            { speaker: 'Airport Staff', avatar: '👩‍✈️', text: 'Go straight ahead, then turn right. It is right in front of gate B.', tr: 'To\'g\'riga yuring, so\'ng o\'ngga buriling. B darvozasi oldida.' },
                            { speaker: 'Tourist', avatar: '👨‍💼', text: 'Thank you! Here is my passport and ticket.', tr: 'Rahmat! Mana mening pasportim va chiptam.' },
                            { speaker: 'Airport Staff', avatar: '👩‍✈️', text: 'Have a wonderful flight and safe trip!', tr: 'Parvozingiz bexatar va ajoyib o\'tsin!' }
                        ],
                        vocab: [
                            { word: 'Airport / Flight', tr: 'Aeroport / Parvoz (Reys)', phonetic: '/ˈeə.pɔːt flaɪt/', ex: 'Direct flight to London.' },
                            { word: 'Ticket / Passport', tr: 'Chipta / Pasport', phonetic: '/ˈtɪk.ɪt ˈpɑːs.pɔːt/', ex: 'Show your boarding pass.' },
                            { word: 'Turn left / Turn right', tr: 'Chapga buriling / O\'ngga buriling', phonetic: '/tɜːn left raɪt/', ex: 'Turn right at the corner.' },
                            { word: 'Go straight', tr: 'To\'g\'riga yuring', phonetic: '/ɡəʊ streɪt/', ex: 'Go straight for 100 meters.' },
                            { word: 'Excuse me, where is...?', tr: 'Kechirasiz, ... qayerda?', phonetic: '/ɪkˈskjuːz miː weər ɪz/', ex: 'Where is the metro station?' },
                            { word: 'Hotel / Luggage', tr: 'Mehmonxona / Bagaj (Yuk)', phonetic: '/həʊˈtel ˈlʌɡ.ɪdʒ/', ex: 'My luggage is heavy.' },
                            { word: 'Safe trip', tr: 'Oq yo\'l / Xavfsiz safar', phonetic: '/seɪf trɪp/', ex: 'Have a safe trip!' },
                            { word: 'Map / Destination', tr: 'Xarita / Manzil', phonetic: '/mæp ˌdes.tɪˈneɪ.ʃən/', ex: 'Look at the city map.' }
                        ],
                        quiz: [
                            { q: '"Turn right" qanday harakatni bildiradi?', options: ['O\'ngga buriling', 'Chapga buriling', 'Orqaga qayting', 'To\'xtang'], a: 0 },
                            { q: '"Passport" so\'zining ma\'nosi:', options: ['Pasport', 'Chipta', 'Chek', 'Xarita'], a: 0 },
                            { q: 'Yo\'l so\'rashda eng madaniy ibora qaysi?', options: ['Excuse me, where is...?', 'Hey you, tell me...', 'Where I go?', 'Show me now!'], a: 0 },
                            { q: '"Have a safe trip" nimani bildiradi?', options: ['Safaringiz bexatar bo\'lsin', 'Tezroq keling', 'Qachon ketasiz?', 'Chiptangizni bering'], a: 0 }
                        ]
                    }
                ]
            },
            levelTests: {
                A1: {
                    id: 'test-en-a1',
                    title: 'A1 Boshlang\'ich Daraja Yakuniy Imtihoni',
                    badge: '📝 10-Dars Yakuniy Testi',
                    desc: '1-darsdan 10-darsgacha o\'tilgan barcha mavzular bo\'yicha 10 ta savol.',
                    starsReward: 20,
                    minScorePercent: 80,
                    questions: [
                        { q: 'How do you say "Salom, tanishganimdan xursandman" in English?', options: ['Hello, nice to meet you', 'Goodbye, see you', 'Sorry, thank you', 'Excuse me, how are you'], a: 0 },
                        { q: 'Which number is "forty-two"?', options: ['42', '24', '14', '40'], a: 0 },
                        { q: 'What does "My father is a doctor" mean?', options: ['Otam shifokor', 'Onam o\'qituvchi', 'Akam muhandis', 'Do\'stim talaba'], a: 0 },
                        { q: 'Choose the correct sentence to order tea:', options: ['I would like a cup of tea, please.', 'Give me tea fast.', 'I want tea now.', 'Bring tea please.'], a: 0 },
                        { q: '"How much is this jacket?" asks for:', options: ['The price of the jacket', 'The color of the jacket', 'The owner of the jacket', 'The size of the jacket'], a: 0 },
                        { q: 'Fill the blank: "There ________ three books on the table."', options: ['are', 'is', 'am', 'be'], a: 0 },
                        { q: 'What is the opposite of "Hot weather"?', options: ['Cold weather', 'Warm weather', 'Sunny weather', 'Cloudy weather'], a: 0 },
                        { q: 'What time is "It is seven o\'clock"?', options: ['7:00', '7:30', '6:00', '8:00'], a: 0 },
                        { q: '"Turn left and go straight" means:', options: ['Chapga buriling va to\'g\'riga yuring', 'O\'ngga buriling va to\'xtang', 'Orqaga qayting', 'Balandga chiqing'], a: 0 },
                        { q: 'Which word means "Oila"?', options: ['Family', 'Friends', 'Students', 'Teachers'], a: 0 }
                    ]
                }
            }
        },

        ru: {
            id: 'ru',
            name: 'Rus tili',
            nativeName: 'Русский язык',
            flag: '🇷🇺',
            code: 'ru-RU',
            color: '#dc2626',
            gradient: 'linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #f87171 100%)',
            badge: 'Muloqot va Biznes',
            desc: 'MDH davlatlari va xalqaro aloqalar asosi. Rus adabiyoti, biznes muloqot va TRKI sertifikati.',
            levels: [
                { code: 'A1', name: 'Boshlang\'ich (Элементарный)', badge: '🌱 1-Bosqich', desc: 'Salomlashish, alifbo, ilk tanishuv va sodda jumlalar.', lessonsCount: 10 },
                { code: 'A2', name: 'Elementar (Базовый)', badge: '🌿 2-Bosqich', desc: 'Kundalik hayot, shahar, xaridlar va do\'stlar.', lessonsCount: 10 },
                { code: 'B1', name: 'O\'rta (1-й сертификационный)', badge: '🌳 3-Bosqich', desc: 'Erkin muloqot, grammatika va hikoya qilish.', lessonsCount: 10 },
                { code: 'B2', name: 'Yuqori O\'rta (2-й уровень)', badge: '🌲 4-Bosqich', desc: 'Ishbilarmonlik tili, munozara va murakkab matnlar.', lessonsCount: 10 }
            ],
            mockTests: [
                {
                    id: 'mock-trki',
                    title: 'ТРКИ (TRKI) Rus Tili Xalqaro Mock Testi',
                    badge: '📜 ТРКИ-I / ТРКИ-II',
                    desc: 'Xalqaro TRKI formati: Leksika, Grammatika va Muloqot qoidalari.',
                    duration: '20 daqiqa',
                    starsReward: 30,
                    minScorePercent: 90,
                    questions: [
                        { q: 'Выберите правильный вариант: "Мы встретились ________."', options: ['в прошлый вторник', 'на прошлый вторник', 'к прошлому вторнику', 'прошлым вторником'], a: 0, ex: 'Дни недели с предлогом "в" + винительный падеж.' },
                        { q: 'Какое слово является синонимом слова "Огромный"?', options: ['Колоссальный', 'Маленький', 'Обычный', 'Быстрый'], a: 0, ex: '"Колоссальный" означает чрезвычайно большой.' },
                        { q: 'Укажите правильное ударение:', options: ['звони́т', 'зво́нит', 'позво́нит', 'зв́онят'], a: 0, ex: 'В глаголе звонить ударение падает на окончание: звони́т.' },
                        { q: 'Выберите верный глагол: "Он долго ________ эту задачу."', options: ['решал', 'решил', 'порешал', 'вырешал'], a: 0, ex: 'Продолжительность ("долго") требует несовершенного вида: решал.' },
                        { q: 'Что означает фразеологизм "Бить баклуши"?', options: ['Бездельничать', 'Трудиться', 'Играть на барабане', 'Ссориться'], a: 0, ex: 'Бить баклуши — проводить время праздно, бездельничать.' },
                        { q: 'Укажите правильную форму: "У меня нет свободного ________."', options: ['времени', 'время', 'временем', 'времена'], a: 0, ex: 'Родительный падеж разносклоняемого существительного: времени.' },
                        { q: 'Выберите антоним к слову "Искренний":', options: ['Лицемерный', 'Честный', 'Добрый', 'Открытый'], a: 0, ex: '"Искренний" — чистосердечный; антоним — лицемерный.' },
                        { q: 'Выберите правильный предлог: "Поезд прибыл ________ вокзал."', options: ['на', 'в', 'к', 'под'], a: 0, ex: 'С вокзалом используется предлог "на": на вокзал.' },
                        { q: 'Какое из предложений сложноподчиненное?', options: ['Я знаю, что вы правы.', 'Солнце светило, и птицы пели.', 'Наступила зима.', 'В саду цвели розы и тюльпаны.'], a: 0, ex: 'Придаточное изъяснительное с союзом "что".' },
                        { q: 'Выберите правильную форму числительного: "В книге около ________ страниц."', options: ['трёхсот', 'триста', 'тремястами', 'трёмстам'], a: 0, ex: 'Родительный падеж слова "триста": трёхсот.' }
                    ]
                }
            ],
            curriculum: {
                A1: [
                    {
                        id: 'ru-a1-1',
                        num: 1,
                        title: '1-Dars: Знакомство и Приветствие (Tanishuv va Salomlashish)',
                        desc: 'Rus tilida salomlashish, ism so\'rash va odob qoidalari.',
                        video: { title: 'Приветствие и Знакомство на русском языке', channel: 'SpeakPro Video Studio', duration: '08:15', topic: 'Здравствуйте, Меня зовут, Как дела?' },
                        dialog: [
                            { speaker: 'Антон', avatar: '👨‍💼', text: 'Здравствуйте! Меня зовут Антон. А как вас зовут?', tr: 'Assalomu alaykum! Mening ismim Anton. Sizning ismingiz nima?' },
                            { speaker: 'Наргиза', avatar: '👩‍💼', text: 'Здравствуйте, Антон! Очень приятно. Меня зовут Наргиза.', tr: 'Salom, Anton! Tanishganimdan juda xursandman. Mening ismim Nargiza.' },
                            { speaker: 'Антон', avatar: '👨‍💼', text: 'Мне тоже очень приятно! Как ваши дела?', tr: 'Menga ham juda yoqimli! Ishlaringiz qanday?' },
                            { speaker: 'Наргиза', avatar: '👩‍💼', text: 'Спасибо, всё отлично! Добро пожаловать в Ташкент.', tr: 'Rahmat, hammasi a\'lo! Toshkentga xush kelibsiz.' }
                        ],
                        vocab: [
                            { word: 'Здравствуйте', tr: 'Assalomu alaykum / Salom (hurmat shakli)', phonetic: '[ˈzdrastvujtʲe]', ex: 'Здравствуйте, учитель!' },
                            { word: 'Привет', tr: 'Salom (norasmiy)', phonetic: '[prʲɪˈvʲet]', ex: 'Привет, друг!' },
                            { word: 'Меня зовут...', tr: 'Mening ismim...', phonetic: '[mʲɪˈnʲa zɐˈvut]', ex: 'Меня зовут Азиз.' },
                            { word: 'Очень приятно', tr: 'Juda xursandman / yoqimli', phonetic: '[ˈotʃʲɪnʲ prʲɪˈjatnə]', ex: 'Очень приятно познакомиться.' },
                            { word: 'Как дела?', tr: 'Ishlar qalay? / Ahvollar qanday?', phonetic: '[kak dʲɪˈla]', ex: 'Как твои дела сегодня?' },
                            { word: 'Спасибо / Пожалуйста', tr: 'Rahmat / Marhamat (arzimaydi)', phonetic: '[spɐˈsʲibə]', ex: 'Большое спасибо за помощь.' },
                            { word: 'До свидания', tr: 'Xayr, ko\'rishguncha', phonetic: '[də svʲɪˈdanʲɪjə]', ex: 'До свидания, всего хорошего!' },
                            { word: 'Добро пожаловать', tr: 'Xush kelibsiz', phonetic: '[dəˈbro pɐˈʐaləvətʲ]', ex: 'Добро пожаловать к нам!' }
                        ],
                        quiz: [
                            { q: '"Очень приятно" iborasi qanday tarjima qilinadi?', options: ['Juda xursandman / yoqimli', 'Kechirasiz', 'Rahmat', 'Xayr'], a: 0 },
                            { q: 'Rasmiy salomlashish qaysi?', options: ['Здравствуйте', 'Привет', 'Пока', 'Здорово'], a: 0 },
                            { q: '"Меня зовут..." nima degani?', options: ['Mening ismim...', 'Mening yoshim...', 'Men keldim...', 'Men talabaman...'], a: 0 },
                            { q: '"Xayr" so\'zining ruscha varianti:', options: ['До свидания', 'Здравствуйте', 'Спасибо', 'Пожалуйста'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-2',
                        num: 2,
                        title: '2-Dars: Числа и Счет (Sonlar va Sanash)',
                        desc: '0 dan 100 gacha sonlar, telefon raqami va narxlar.',
                        video: { title: 'Русские числа и счет в жизни', channel: 'SpeakPro Video Studio', duration: '07:20', topic: 'Числа от 1 до 100, Сколько это стоит?' },
                        dialog: [
                            { speaker: 'Покупатель', avatar: '👨‍💼', text: 'Скажите, пожалуйста, сколько стоит эта книга?', tr: 'Aytib yuboring iltimos, bu kitob qancha turadi?' },
                            { speaker: 'Продавец', avatar: '👩‍💼', text: 'Эта книга стоит пятьдесят рублей.', tr: 'Bu kitob ellik rubl turadi.' },
                            { speaker: 'Покупатель', avatar: '👨‍💼', text: 'Отлично! Запишите мой номер: девять, один, два.', tr: 'Ajoyib! Mening raqamimni yozib oling: to\'qqiz, bir, ikki.' }
                        ],
                        vocab: [
                            { word: 'Один, два, три', tr: 'Bir, ikki, uch', phonetic: '[ɐˈdʲin dva trʲi]', ex: 'Один, два, три, четыре, пять.' },
                            { word: 'Десять, двадцать', tr: 'O\'n, yigirma', phonetic: '[ˈdʲesʲɪtʲ ˈdvattsətʲ]', ex: 'У меня двадцать тетрадей.' },
                            { word: 'Сто', tr: 'Yuz', phonetic: '[sto]', ex: 'Сто процентов.' },
                            { word: 'Сколько стоит?', tr: 'Qancha turadi?', phonetic: '[ˈskolʲkə ˈstoɪt]', ex: 'Сколько стоит этот билет?' },
                            { word: 'Номер телефона', tr: 'Telefon raqami', phonetic: '[ˈnomʲɪr tʲɪlʲɪˈfonə]', ex: 'Ваш номер телефона?' },
                            { word: 'Рубль / Сум', tr: 'Rubl / So\'m', phonetic: '[rublʲ]', ex: 'Тысяча сумов.' },
                            { word: 'Много / Мало', tr: 'Ko\'p / Kam', phonetic: '[ˈmnoɡə ˈmalə]', ex: 'Здесь очень много книг.' },
                            { word: 'Первый, второй', tr: 'Birinchi, ikkinchi', phonetic: '[ˈpʲervɨj]', ex: 'Первый урок окончен.' }
                        ],
                        quiz: [
                            { q: '"Сколько стоит?" nimani so\'raydi?', options: ['Qancha turadi?', 'Bu nima?', 'Qayerda joylashgan?', 'Kim bu?'], a: 0 },
                            { q: '"Пятьдесят" qaysi son?', options: ['50', '15', '5', '500'], a: 0 },
                            { q: '"Сто" qaysi son?', options: ['100', '10', '1000', '1'], a: 0 },
                            { q: '"Телефон raqami" ruschasi:', options: ['Номер телефона', 'Адрес дома', 'Имя человека', 'Паспорт'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-3',
                        num: 3,
                        title: '3-Dars: Семья и Дом (Oila va Uy)',
                        desc: 'Oila a\'zolari: ota, ona, aka, uka, opa, singil va uy tasviri.',
                        video: { title: 'Моя семья и родные', channel: 'SpeakPro Video Studio', duration: '08:40', topic: 'Папа, мама, брат, сестра, Мой/Моя' },
                        dialog: [
                            { speaker: 'Иван', avatar: '🧑‍💻', text: 'У тебя большая семья, Дилшод?', tr: 'Dilshod, oilang kattami?' },
                            { speaker: 'Дилшод', avatar: '👨‍🎓', text: 'Да, у меня есть родители, старший брат и младшая сестра.', tr: 'Ha, ota-onam, katta akam va kichik singlim bor.' },
                            { speaker: 'Иван', avatar: '🧑‍💻', text: 'А где они живут?', tr: 'Ular qayerda yashashadi?' },
                            { speaker: 'Дилшод', avatar: '👨‍🎓', text: 'Они живут в Самарканде в большом доме.', tr: 'Ular Samarqandda katta uyda yashashadi.' }
                        ],
                        vocab: [
                            { word: 'Семья', tr: 'Oila', phonetic: '[sʲɪmʲˈja]', ex: 'Моя дружная семья.' },
                            { word: 'Отец (папа)', tr: 'Ota (dada)', phonetic: '[ɐˈtʲet͡s]', ex: 'Мой отец работает инженером.' },
                            { word: 'Мать (мама)', tr: 'Ona (oyi)', phonetic: '[matʲ]', ex: 'Моя мама очень добрая.' },
                            { word: 'Брат / Сестра', tr: 'Aka-uka / Opa-singil', phonetic: '[brat sʲɪˈstra]', ex: 'У меня есть брат.' },
                            { word: 'Родители', tr: 'Ota-ona', phonetic: '[rɐˈdʲitʲɪlʲɪ]', ex: 'Я уважаю своих родителей.' },
                            { word: 'Бабушка / Дедушка', tr: 'Buvi / Bobo', phonetic: '[ˈbabuʂkə ˈdʲeduʂkə]', ex: 'Бабушка печёт пироги.' },
                            { word: 'Дом / Квартира', tr: 'Uy / Kvartira', phonetic: '[dom kvɐrˈtʲirə]', ex: 'Мы купили новую квартиру.' },
                            { word: 'Дети', tr: 'Bolalar', phonetic: '[ˈdʲetʲɪ]', ex: 'Дети играют в парке.' }
                        ],
                        quiz: [
                            { q: '"Родители" so\'zining ma\'nosi:', options: ['Ota-ona', 'Bolalar', 'Do\'stlar', 'Qo\'shnilar'], a: 0 },
                            { q: '"Сестра" kim?', options: ['Opa / Singil', 'Aka / Uka', 'Ona', 'Buvi'], a: 0 },
                            { q: '"Дом" so\'zining tarjimasi:', options: ['Uy', 'Maktab', 'Ko\'cha', 'Bog\''], a: 0 },
                            { q: '"Дедушка" kim?', options: ['Bobo', 'Tog\'a', 'Ota', 'Aka'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-4',
                        num: 4,
                        title: '4-Dars: В Ресторане и Еда (Restoranda va Taomlar)',
                        desc: 'Taom buyurtma qilish, choy, non, suv va ofitsiant bilan muloqot.',
                        video: { title: 'Русская кухня и заказ в кафе', channel: 'SpeakPro Video Studio', duration: '08:00', topic: 'Меню, Принесите пожалуйста, Счёт' },
                        dialog: [
                            { speaker: 'Официант', avatar: '👨‍🍳', text: 'Добрый день! Что вы будете заказывать?', tr: 'Xayrli kun! Nima buyurtma qilasiz?' },
                            { speaker: 'Гость', avatar: '👨‍💼', text: 'Принесите, пожалуйста, борщ, плов и зелёный чай.', tr: 'Iltimos, borsh, palov va ko\'k choy olib keling.' },
                            { speaker: 'Официант', avatar: '👨‍🍳', text: 'Хорошо, всё будет готово через десять минут.', tr: 'Yaxshi, o\'n daqiqada tayyor bo\'ladi.' },
                            { speaker: 'Гость', avatar: '👨‍💼', text: 'Спасибо! И принесите счёт, пожалуйста.', tr: 'Rahmat! Va hisobni ham olib keling, iltimos.' }
                        ],
                        vocab: [
                            { word: 'Еда / Пища', tr: 'Ovqat / Taom', phonetic: '[jɪˈda]', ex: 'Вкусная еда.' },
                            { word: 'Вода / Чай / Кофе', tr: 'Suv / Choy / Kofe', phonetic: '[vɐˈda]', ex: 'Стакан чистой воды.' },
                            { word: 'Хлеб', tr: 'Non', phonetic: '[xlʲep]', ex: 'Свежий горячий хлеб.' },
                            { word: 'Завтрак / Обед / Ужин', tr: 'Nonushta / Tushlik / Kechki ovqat', phonetic: '[ˈzaftrək]', ex: 'Вкусный завтрак.' },
                            { word: 'Меню / Счёт', tr: 'Menyu / Hisob', phonetic: '[mʲɪˈnʲu ɕːot]', ex: 'Принесите счёт, пожалуйста.' },
                            { word: 'Принесите, пожалуйста', tr: 'Iltimos, olib keling', phonetic: '[prʲɪnʲɪˈsʲitʲɪ]', ex: 'Принесите меню.' },
                            { word: 'Вкусно', tr: 'Mazali', phonetic: '[ˈfkusnə]', ex: 'Очень вкусно!' },
                            { word: 'Мясо / Рыба', tr: 'Go\'sht / Baliq', phonetic: '[ˈmʲasə ˈrɨbə]', ex: 'Свежая рыба.' }
                        ],
                        quiz: [
                            { q: '"Принесите счёт, пожалуйста" nima degani?', options: ['Hisobni olib keling, iltimos', 'Menyuni olib keling', 'Choy bering', 'Non bering'], a: 0 },
                            { q: '"Nonushta" rus tilida nima?', options: ['Завтрак', 'Обед', 'Ужин', 'Полдник'], a: 0 },
                            { q: '"Вкусно" so\'zining ma\'nosi:', options: ['Mazali', 'Achchiq', 'Sho\'r', 'Issiq'], a: 0 },
                            { q: '"Хлеб" nima?', options: ['Non', 'Suv', 'Tuz', 'Shakar'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-5',
                        num: 5,
                        title: '5-Dars: В Городе и Ориентирование (Shaharda va Yo\'l so\'rash)',
                        desc: 'Ko\'cha, metro, to\'g\'riga yurish, o\'ngga va chapga burilish.',
                        video: { title: 'Как пройти? Ориентация в городе', channel: 'SpeakPro Video Studio', duration: '09:10', topic: 'Где находится?, Прямо, Направо, Налево' },
                        dialog: [
                            { speaker: 'Турист', avatar: '👨‍🎓', text: 'Извините, пожалуйста, где находится станция метро?', tr: 'Kechirasiz, metro bekati qayerda joylashgan?' },
                            { speaker: 'Прохожий', avatar: '🧑‍💼', text: 'Идите прямо до перекрёстка, потом поверните направо.', tr: 'Chorrahasigacha to\'g\'riga yuring, so\'ng o\'ngga buriling.' },
                            { speaker: 'Турист', avatar: '👨‍🎓', text: 'Это далеко отсюда?', tr: 'Bu yerdan uzoqmi?' },
                            { speaker: 'Прохожий', avatar: '🧑‍💼', text: 'Нет, всего пять минут пешком.', tr: 'Yo\'q, piyoda bor-yo\'g\'i besh daqiqa.' }
                        ],
                        vocab: [
                            { word: 'Где находится...?', tr: '... qayerda joylashgan?', phonetic: '[ɡdʲe nɐˈxodʲɪt͡ssə]', ex: 'Где находится аптека?' },
                            { word: 'Прямо', tr: 'To\'g\'riga', phonetic: '[ˈprʲamə]', ex: 'Идите прямо.' },
                            { word: 'Направо / Налево', tr: 'O\'ngga / Chapga', phonetic: '[nɐˈpravə nɐˈlʲevə]', ex: 'Поверните направо.' },
                            { word: 'Метро / Автобус', tr: 'Metro / Avtobus', phonetic: '[mʲɪˈtro ɐfˈtobus]', ex: 'Остановка автобуса.' },
                            { word: 'Улица / Площадь', tr: 'Ko\'cha / Maydon', phonetic: '[ˈulʲɪtsə ˈploɕːɪtʲ]', ex: 'Главная улица города.' },
                            { word: 'Далеко / Близко', tr: 'Uzoq / Yaqin', phonetic: '[dəlʲɪˈko ˈblʲiskə]', ex: 'Это совсем близко.' },
                            { word: 'Пешком', tr: 'Piyoda', phonetic: '[pʲɪʂˈkom]', ex: 'Мы идём пешком.' },
                            { word: 'Извините', tr: 'Kechirasiz', phonetic: '[ɪzvʲɪˈnʲitʲɪ]', ex: 'Извините за беспокойство.' }
                        ],
                        quiz: [
                            { q: '"Направо" qaysi taraf?', options: ['O\'ngga', 'Chapga', 'To\'g\'riga', 'Orqaga'], a: 0 },
                            { q: '"Прямо" nima degani?', options: ['To\'g\'riga', 'Balandga', 'Pastga', 'Aylanib'], a: 0 },
                            { q: '"Где находится аптека?" qanday tarjima qilinadi?', options: ['Dorixona qayerda joylashgan?', 'Dorixona ochiqmi?', 'Dori bormi?', 'Kassir qayerda?'], a: 0 },
                            { q: '"Близко" so\'zining ma\'nosi:', options: ['Yaqin', 'Uzoq', 'Baland', 'Katta'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-6',
                        num: 6,
                        title: '6-Dars: Профессии и Работа (Kasblar va Ish)',
                        desc: 'O\'qituvchi, vrach, muhandis, haydovchi va "Кто вы по профессии?".',
                        video: { title: 'Профессии на русском языке', channel: 'SpeakPro Video Studio', duration: '08:20', topic: 'Кем вы работаете?, Профессии' },
                        dialog: [
                            { speaker: 'Олег', avatar: '👨‍💼', text: 'Кем вы работаете, Рустам?', tr: 'Rustam, kim bo\'lib ishlaysiz?' },
                            { speaker: 'Рустам', avatar: '👨‍🏫', text: 'Я преподаватель в университете. Преподаю историю.', tr: 'Men universitetda o\'qituvchiman. Tarixdan dars beraman.' }
                        ],
                        vocab: [
                            { word: 'Учитель / Врач', tr: 'O\'qituvchi / Shifokor', phonetic: '[ʊˈtʃʲitʲɪlʲ vratʃʲ]', ex: 'Хороший врач.' },
                            { word: 'Инженер / Программист', tr: 'Muhandis / Dasturchi', phonetic: '[ɪnʐɨˈnʲer]', ex: 'Опытный инженер.' },
                            { word: 'Студент', tr: 'Talaba', phonetic: '[stʊˈdʲent]', ex: 'Усердный студент.' },
                            { word: 'Работа', tr: 'Ish', phonetic: '[rɐˈbotə]', ex: 'Интересная работа.' },
                            { word: 'Офис / Больница', tr: 'Ofis / Shifoxona', phonetic: '[ˈofʲɪs bɐlʲˈnʲit͡sə]', ex: 'Работать в офисе.' },
                            { word: 'Директор', tr: 'Direktor / Rahbar', phonetic: '[dʲɪˈrʲektər]', ex: 'Директор компании.' },
                            { word: 'Фирма', tr: 'Kompaniya / Firma', phonetic: '[ˈfʲirmə]', ex: 'Международная фирма.' },
                            { word: 'Учиться', tr: 'O\'qimoq / Ta\'lim olmoq', phonetic: '[ʊˈtʃʲit͡ssə]', ex: 'Я учусь в школе.' }
                        ],
                        quiz: [
                            { q: '"Врач" kim?', options: ['Shifokor', 'O\'qituvchi', 'Haydovchi', 'Sotuvchi'], a: 0 },
                            { q: '"Учитель" so\'zining ma\'nosi:', options: ['O\'qituvchi', 'Muhandis', 'Direktor', 'Talaba'], a: 0 },
                            { q: '"Работа" nima?', options: ['Ish', 'Dam olish', 'Sayohat', 'Sport'], a: 0 },
                            { q: '"Студент" qaysi ma\'noda?', options: ['Talaba', 'Boshliq', 'Usta', 'Doktor'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-7',
                        num: 7,
                        title: '7-Dars: Покупки и Одежда (Xaridlar va Kiyimlar)',
                        desc: 'Ranglar, kiyimlar, kiyib ko\'rish va do\'konda to\'lov qilish.',
                        video: { title: 'Покупки в магазине одежды', channel: 'SpeakPro Video Studio', duration: '08:00', topic: 'Цвета, Одежда, Можно примерить?' },
                        dialog: [
                            { speaker: 'Покупатель', avatar: '👩‍💼', text: 'Можно примерить эту куртку?', tr: 'Bu kurtkani kiyib ko\'rsam bo\'ladimi?' },
                            { speaker: 'Продавец', avatar: '👩‍💼', text: 'Конечно! Примерочная прямо по коридору.', tr: 'Albatta! Kiyib ko\'rish xonasi yo\'lak bo\'ylab to\'g\'rida.' }
                        ],
                        vocab: [
                            { word: 'Красный, синий, белый', tr: 'Qizil, ko\'k, oq', phonetic: '[ˈkrasnɨj ˈsʲinʲɪj ˈbʲelɨj]', ex: 'Синяя рубашка.' },
                            { word: 'Чёрный, зелёный', tr: 'Qora, yashil', phonetic: '[ˈtɕɵrnɨj zʲɪˈlʲonɨj]', ex: 'Чёрный костюм.' },
                            { word: 'Куртка / Рубашка', tr: 'Kurtka / Ko\'ylak', phonetic: '[ˈkurtkə rʊˈbaʂkə]', ex: 'Тёплая куртка.' },
                            { word: 'Обувь', tr: 'Oyoq kiyim', phonetic: '[ˈobʊfʲ]', ex: 'Кожаная обувь.' },
                            { word: 'Размер', tr: 'O\'lcham', phonetic: '[rɐzˈmʲer]', ex: 'Какой ваш размер?' },
                            { word: 'Примерить', tr: 'Kiyib ko\'rmoq', phonetic: '[prʲɪˈmʲerʲɪtʲ]', ex: 'Можно примерить?' },
                            { word: 'Дорого / Дёшево', tr: 'Qimmat / Arzon', phonetic: '[ˈdorəɡə ˈdʲoʂɨvə]', ex: 'Очень дёшево.' },
                            { word: 'Оплата картой', tr: 'Karta orqali to\'lov', phonetic: '[ɐˈplatə ˈkartəj]', ex: 'Можно оплатить картой?' }
                        ],
                        quiz: [
                            { q: '"Можно примерить?" qanday tarjima qilinadi?', options: ['Kiyib ko\'rsam bo\'ladimi?', 'Sotib olsam bo\'ladimi?', 'Qaytarib bersam bo\'ladimi?', 'Chegirma bormi?'], a: 0 },
                            { q: '"Синий" qaysi rang?', options: ['Ko\'k', 'Qizil', 'Oq', 'Qora'], a: 0 },
                            { q: '"Размер" so\'zining ma\'nosi:', options: ['O\'lcham', 'Narx', 'Rang', 'Sifat'], a: 0 },
                            { q: '"Дёшево" nimani bildiradi?', options: ['Arzon', 'Qimmat', 'Og\'ir', 'Katta'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-8',
                        num: 8,
                        title: '8-Dars: Время и Распорядок дня (Vaqt va Kun tartibi)',
                        desc: 'Soat necha bo\'ldi, soatlar, kun tartibi va hafta kunlari.',
                        video: { title: 'Который час? Режим дня', channel: 'SpeakPro Video Studio', duration: '08:15', topic: 'Который час?, Дни недели, Утро/Вечер' },
                        dialog: [
                            { speaker: 'Сергей', avatar: '👨‍🎓', text: 'Который сейчас час?', tr: 'Hozir soat necha bo\'ldi?' },
                            { speaker: 'Анна', avatar: '👩‍🎓', text: 'Сейчас ровно три часа дня.', tr: 'Hozir roppa-rosa kunduzgi soat uch.' }
                        ],
                        vocab: [
                            { word: 'Который час?', tr: 'Soat necha?', phonetic: '[kɐˈtorɨj t͡ɕas]', ex: 'Подскажите, который час?' },
                            { word: 'Утро, день, вечер', tr: 'Tong, kun, oqshom', phonetic: '[ˈutrə dʲenʲ ˈvʲetʃʲɪr]', ex: 'Доброе утро!' },
                            { word: 'Минута / Час', tr: 'Daqiqa / Soat', phonetic: '[mʲɪˈnutə t͡ɕas]', ex: 'Через десять минут.' },
                            { word: 'Понедельник, пятница', tr: 'Dushanba, juma', phonetic: '[pənʲɪˈdʲelʲnʲɪk ˈpʲatnʲɪtsə]', ex: 'В пятницу вечером.' },
                            { word: 'Суббота, воскресенье', tr: 'Shanba, yakshanba', phonetic: '[sʊˈbotə vəskrʲɪˈsʲenʲjə]', ex: 'Выходные дни.' },
                            { word: 'Просыпаться', tr: 'Uyg\'onmoq', phonetic: '[prəsɨˈpat͡ssə]', ex: 'Я просыпаюсь рано.' },
                            { word: 'Завтракать', tr: 'Nonushta qilmoq', phonetic: '[ˈzaftrəkətʲ]', ex: 'Вкусно завтракать.' },
                            { word: 'Ложиться спать', tr: 'Uxlashga yotmoq', phonetic: '[lɐˈʐɨt͡ssə spatʲ]', ex: 'Ложусь спать в 11.' }
                        ],
                        quiz: [
                            { q: '"Который час?" nimani bildiradi?', options: ['Soat necha?', 'Qaysi kun?', 'Qayerdasan?', 'Kim u?'], a: 0 },
                            { q: '"Понедельник" qaysi kun?', options: ['Dushanba', 'Seshanba', 'Juma', 'Yakshanba'], a: 0 },
                            { q: '"Утро" so\'zining ma\'nosi:', options: ['Tong', 'Kun', 'Oqshom', 'Tun'], a: 0 },
                            { q: '"Минута" nima?', options: ['Daqiqa', 'Soat', 'Hafta', 'Oy'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-9',
                        num: 9,
                        title: '9-Dars: Погода и Времена года (Ob-havo va Fasllar)',
                        desc: 'Quyosh, yomg\'ir, qor, iliq va sovuq havo hamda to\'rt fasl.',
                        video: { title: 'Какая сегодня погода? Времена года', channel: 'SpeakPro Video Studio', duration: '08:30', topic: 'Погода, Зима, Весна, Лето, Осень' },
                        dialog: [
                            { speaker: 'Михаил', avatar: '👨‍💼', text: 'Какая сегодня погода на улице?', tr: 'Bugun ko\'chada ob-havo qanday?' },
                            { speaker: 'Лена', avatar: '👩‍💼', text: 'Сегодня очень тепло и солнечно, ни облачка!', tr: 'Bugun juda iliq va quyoshli, birorta ham bulut yo\'q!' }
                        ],
                        vocab: [
                            { word: 'Какая погода?', tr: 'Ob-havo qanday?', phonetic: '[kɐˈkajə pɐˈɡodə]', ex: 'Какая сегодня погода?' },
                            { word: 'Солнечно / Дождь', tr: 'Quyoshli / Yomg\'ir', phonetic: '[ˈsolnʲɪtɕnə doʑd͡ʑ]', ex: 'На улице идёт дождь.' },
                            { word: 'Тепло / Холодно', tr: 'Iliq / Sovuq', phonetic: '[tʲɪˈplo ˈxolədnə]', ex: 'Зимой очень холодно.' },
                            { word: 'Снег / Ветер', tr: 'Qor / Shamol', phonetic: '[sʲnʲek ˈvʲetʲɪr]', ex: 'Дует сильный ветер.' },
                            { word: 'Весна, лето', tr: 'Bahor, yoz', phonetic: '[vʲɪˈsna ˈlʲetə]', ex: 'Летом мы едем на море.' },
                            { word: 'Осень, зима', tr: 'Kuz, qish', phonetic: '[ˈosʲɪnʲ zʲɪˈma]', ex: 'Осенью падают листья.' },
                            { word: 'Градус', tr: 'Daraja (gradus)', phonetic: '[ˈɡradus]', ex: 'Плюс двадцать градусов.' },
                            { word: 'Небо', tr: 'Osmon', phonetic: '[ˈnʲebə]', ex: 'Чистое синее небо.' }
                        ],
                        quiz: [
                            { q: '"Солнечно" so\'zining ma\'nosi:', options: ['Quyoshli', 'Yomg\'irli', 'Sovuq', 'Bulutli'], a: 0 },
                            { q: '"Весна" qaysi fasl?', options: ['Bahor', 'Yoz', 'Kuz', 'Qish'], a: 0 },
                            { q: '"Холодно" nimani bildiradi?', options: ['Sovuq', 'Issiq', 'Iliq', 'Shamolli'], a: 0 },
                            { q: '"Снег" nima?', options: ['Qor', 'Yomg\'ir', 'Shamol', 'Muz'], a: 0 }
                        ]
                    },
                    {
                        id: 'ru-a1-10',
                        num: 10,
                        title: '10-Dars: В Аэропорту и Путешествия (Aeroportda va Sayohat)',
                        desc: 'Bilet, pasport, samolyot va ilk xorijiy sayohat iboralari.',
                        video: { title: 'Русский в аэропорту: посадка и контроль', channel: 'SpeakPro Video Studio', duration: '09:20', topic: 'Паспортный контроль, Билет, Багаж' },
                        dialog: [
                            { speaker: 'Пассажир', avatar: '👨‍💼', text: 'Здравствуйте! Где проходит регистрация на рейс в Москву?', tr: 'Salom! Moskvaga reys ro\'yxatdan o\'tish qayerda?' },
                            { speaker: 'Сотрудник', avatar: '👩‍✈️', text: 'Стойка номер пять, пожалуйста. Покажите ваш паспорт.', tr: 'Beshinchi stol, iltimos. Pasportingizni ko\'rsating.' }
                        ],
                        vocab: [
                            { word: 'Аэропорт / Самолёт', tr: 'Aeroport / Samolyot', phonetic: '[ɐɪrɐˈport səmɐˈlʲot]', ex: 'Самолёт летит в Ташкент.' },
                            { word: 'Билет / Паспорт', tr: 'Chipta / Pasport', phonetic: '[bʲɪˈlʲet ˈpaspərt]', ex: 'Ваш посадочный билет.' },
                            { word: 'Багаж / Чемодан', tr: 'Bagaj / Chemodan', phonetic: '[bɐˈɡaʂ t͡ɕɪmɐˈdan]', ex: 'Сдайте багаж сюда.' },
                            { word: 'Счастливого пути!', tr: 'Oq yo\'l! / Safaringiz xayrli bo\'lsin!', phonetic: '[ɕːɪsˈlʲivəvə pʊˈtʲi]', ex: 'Счастливого пути и мягкой посадки!' },
                            { word: 'Рейс', tr: 'Reys (parvoz)', phonetic: '[rʲejs]', ex: 'Рейс отправляется вовремя.' },
                            { word: 'Посадка', tr: 'Samolyotga chiqish (o\'tirish)', phonetic: '[pɐˈsatkə]', ex: 'Объявляется посадка.' },
                            { word: 'Гостиница', tr: 'Mehmonxona', phonetic: '[ɡɐsʲˈtʲinʲɪt͡sə]', ex: 'Забронировать номер в гостинице.' },
                            { word: 'Город', tr: 'Shahar', phonetic: '[ˈɡorət]', ex: 'Красивый старый город.' }
                        ],
                        quiz: [
                            { q: '"Счастливого пути!" qanday ma\'noni anglatadi?', options: ['Oq yo\'l! / Safaringiz xayrli bo\'lsin!', 'Xush kelibsiz', 'Kechirasiz', 'Salom'], a: 0 },
                            { q: '"Багаж" nima?', options: ['Yuk / Chemodan', 'Chipta', 'Samolyot', 'Pasport'], a: 0 },
                            { q: '"Гостиница" so\'zining ma\'nosi:', options: ['Mehmonxona', 'Aeroport', 'Vokzal', 'Metro'], a: 0 },
                            { q: '"Билет" nima degani?', options: ['Chipta', 'Ruxsatnoma', 'Pasport', 'Hujjat'], a: 0 }
                        ]
                    }
                ]
            },
            levelTests: {
                A1: {
                    id: 'test-ru-a1',
                    title: 'A1 Daraja Rus Tili Yakuniy Imtihoni',
                    badge: '📝 10-Dars Yakuniy Testi',
                    desc: '1-darsdan 10-darsgacha o\'tilgan mavzular bo\'yicha 10 ta savol.',
                    starsReward: 20,
                    minScorePercent: 80,
                    questions: [
                        { q: 'Как переводится "Здравствуйте, меня зовут Алишер"?', options: ['Salom, mening ismim Alisher', 'Xayr, Alisher', 'Rahmat, Alisher', 'Qayerdansan, Alisher'], a: 0 },
                        { q: 'Какое число обозначает слово "тридцать"?', options: ['30', '13', '3', '300'], a: 0 },
                        { q: 'Что означает фраза "Принесите счёт, пожалуйста"?', options: ['Hisobni olib keling, iltimos', 'Menyuni bering', 'Non bering', 'Suv olib keling'], a: 0 },
                        { q: '"Поверните направо" — это:', options: ['O\'ngga buriling', 'Chapga buriling', 'To\'g\'riga yuring', 'To\'xtang'], a: 0 },
                        { q: 'Кто лечит людей?', options: ['Врач', 'Учитель', 'Инженер', 'Водитель'], a: 0 },
                        { q: 'Какое слово означает "Ona"?', options: ['Мама', 'Папа', 'Брат', 'Сестра'], a: 0 },
                        { q: 'Как сказать "Xush kelibsiz" по-русски?', options: ['Добро пожаловать', 'До свидания', 'Спасибо', 'Пожалуйста'], a: 0 },
                        { q: 'Что означает слово "Холодно"?', options: ['Sovuq', 'Issiq', 'Iliq', 'Shamolli'], a: 0 },
                        { q: '"Счастливого пути!" желают:', options: ['В дорогу (Safarga ketayotganda)', 'Перед сном', 'Утром', 'За столом'], a: 0 },
                        { q: 'Какой день недели идёт после понедельника?', options: ['Вторник', 'Среда', 'Четверг', 'Воскресенье'], a: 0 }
                    ]
                }
            }
        },

        de: {
            id: 'de',
            name: 'Nemis tili',
            nativeName: 'Deutsch',
            flag: '🇩🇪',
            code: 'de-DE',
            color: '#eab308',
            gradient: 'linear-gradient(135deg, #78350f 0%, #d97706 50%, #f59e0b 100%)',
            badge: 'Germaniya va Ta\'lim',
            desc: 'Yevropaning iqtisodiy qudrati. Germaniyada bepul ta\'lim, tibbiyot, muhandislik va Goethe sertifikati.',
            levels: [
                { code: 'A1', name: 'Boshlang\'ich (Start Deutsch 1)', badge: '🌱 1-Bosqich', desc: 'Salomlashish, alifbo, ilk tanishuv va sodda jumlalar.', lessonsCount: 10 },
                { code: 'A2', name: 'Elementar (Start Deutsch 2)', badge: '🌿 2-Bosqich', desc: 'Kundalik hayot, uy, do\'kon va shahar.', lessonsCount: 10 },
                { code: 'B1', name: 'O\'rta (Goethe-Zertifikat B1)', badge: '🌳 3-Bosqich', desc: 'Erkin suhbat, grammatika, Germaniyada yashash.', lessonsCount: 10 },
                { code: 'B2', name: 'Yuqori O\'rta (Goethe B2)', badge: '🌲 4-Bosqich', desc: 'Universitet va ish faoliyati uchun professional daraja.', lessonsCount: 10 }
            ],
            mockTests: [
                {
                    id: 'mock-goethe',
                    title: 'Goethe-Zertifikat B1/B2 Mock Testi',
                    badge: '📜 Goethe-Institut',
                    desc: 'Xalqaro Goethe formati: Lesen, Hören, Sprachbausteine va Wortschatz.',
                    duration: '20 daqiqa',
                    starsReward: 30,
                    minScorePercent: 90,
                    questions: [
                        { q: 'Welcher Artikel gehört zu "Mädchen"?', options: ['das', 'die', 'der', 'den'], a: 0, ex: 'Wörter auf -chen sind immer sächlich (das).' },
                        { q: 'Ergänzen Sie: "Ich interessiere mich ________ deutsche Kultur."', options: ['für', 'an', 'über', 'mit'], a: 0, ex: 'Sich interessieren für + Akkusativ.' },
                        { q: 'Was bedeutet die Redewendung "Daumen drücken"?', options: ['Viel Glück wünschen', 'Böse sein', 'Sport treiben', 'Schlafen'], a: 0, ex: '"Daumen drücken" bedeutet jemandem Erfolg und Glück wünschen.' },
                        { q: 'Welcher Satz steht im Perfekt?', options: ['Ich habe gestern ein Buch gelesen.', 'Ich las gestern ein Buch.', 'Ich lese ein Buch.', 'Ich hatte ein Buch gelesen.'], a: 0, ex: 'Perfekt mit haben + Partizip II (gelesen).' },
                        { q: 'Was ist das Gegenteil von "Schwierig"?', options: ['Einfach', 'Kompliziert', 'Hart', 'Langweilig'], a: 0, ex: '"Einfach" oder "leicht" ist das Gegenteil von schwierig.' },
                        { q: 'Ergänzen Sie: "Obwohl es regnete, ________."', options: ['gingen wir spazieren', 'wir gingen spazieren', 'ging spazieren wir', 'wir spazieren gingen'], a: 0, ex: 'Nach Nebensatz mit obwohl folgt im Hauptsatz Inversion (Verb zuerst).' },
                        { q: 'Welches Wort bedeutet "Xush kelibsiz" auf Deutsch?', options: ['Herzlich willkommen', 'Gute Reise', 'Auf Wiedersehen', 'Vielen Dank'], a: 0, ex: '"Herzlich willkommen" bedeutet xush kelibsiz.' },
                        { q: 'Wählen Sie das richtige Modalverb: "Hier ________ man nicht rauchen."', options: ['darf', 'muss', 'kann nicht', 'will'], a: 0, ex: 'Verbot wird mit "nicht dürfen" ausgedrückt.' },
                        { q: 'Was bedeutet "Erfahrung"?', options: ['Tajriba', 'Bilim', 'Imkoniyat', 'Dars'], a: 0, ex: '"Die Erfahrung" bedeutet tajriba (experience).' },
                        { q: 'Welches Verb passt: "Einen Entschluss ________."', options: ['fassen', 'machen', 'nehmen', 'geben'], a: 0, ex: 'Nomen-Verb-Verbindung: einen Entschluss fassen (qaror qabul qilmoq).' }
                    ]
                }
            ],
            curriculum: {
                A1: [
                    {
                        id: 'de-a1-1',
                        num: 1,
                        title: '1-Dars: Begrüßung und Vorstellung (Salomlashish va Tanishtirish)',
                        desc: 'Guten Tag, Hallo, ism aytish va Germaniyada odob qoidalari.',
                        video: { title: 'Begrüßung und Vorstellung auf Deutsch', channel: 'SpeakPro Video Studio', duration: '08:30', topic: 'Hallo, Guten Tag, Wie heißen Sie?, Ich bin' },
                        dialog: [
                            { speaker: 'Lukas', avatar: '👨‍💼', text: 'Guten Tag! Mein Name ist Lukas Weber. Wie heißen Sie?', tr: 'Xayrli kun! Mening ismim Lukas Weber. Ismingiz nima?' },
                            { speaker: 'Madina', avatar: '👩‍💼', text: 'Guten Tag, Herr Weber! Ich heiße Madina. Freut mich!', tr: 'Xayrli kun, janob Weber! Mening ismim Madina. Tanishganimdan xursandman!' },
                            { speaker: 'Lukas', avatar: '👨‍💼', text: 'Freut mich auch, Madina! Woher kommen Sie?', tr: 'Menga ham mamnuniyat, Madina! Qayerdansiz?' },
                            { speaker: 'Madina', avatar: '👩‍💼', text: 'Ich komme aus Usbekistan. Und Sie?', tr: 'Men O\'zbekistondanman. Siz-chi?' }
                        ],
                        vocab: [
                            { word: 'Guten Tag', tr: 'Xayrli kun', phonetic: '[ˈɡuːtn̩ ˈtaːk]', ex: 'Guten Tag, wie geht es Ihnen?' },
                            { word: 'Hallo', tr: 'Salom', phonetic: '[haˈloː]', ex: 'Hallo, mein Freund!' },
                            { word: 'Ich heiße...', tr: 'Mening ismim...', phonetic: '[ɪç ˈhaɪsə]', ex: 'Ich heiße Anvar.' },
                            { word: 'Freut mich', tr: 'Tanishganimdan mamnunman', phonetic: '[frɔɪt mɪç]', ex: 'Sehr freut mich!' },
                            { word: 'Woher kommen Sie?', tr: 'Siz qayerdansiz?', phonetic: '[voˈheːɐ̯ ˈkɔmən ziː]', ex: 'Woher kommen Sie, bitte?' },
                            { word: 'Ich komme aus...', tr: 'Men ...danman', phonetic: '[ɪç ˈkɔmə aʊs]', ex: 'Ich komme aus Taschkent.' },
                            { word: 'Danke schön', tr: 'Katta rahmat', phonetic: '[ˈdaŋkə ʃøːn]', ex: 'Vielen Dank für Ihre Hilfe.' },
                            { word: 'Auf Wiedersehen', tr: 'Xayr, ko\'rishguncha', phonetic: '[aʊf ˈviːdɐˌzeːən]', ex: 'Auf Wiedersehen und schönen Tag!' }
                        ],
                        quiz: [
                            { q: '"Guten Tag" nemischa nima degani?', options: ['Xayrli kun', 'Xayrli tong', 'Xayrli tun', 'Salom'], a: 0 },
                            { q: '"Ich heiße..." iborasi qanday tarjima qilinadi?', options: ['Mening ismim...', 'Men yashayman...', 'Men talabaman...', 'Men O\'zbekistondanman...'], a: 0 },
                            { q: '"Auf Wiedersehen" qachon aytiladi?', options: ['Xayrlashganda', 'Salomlashganda', 'Ovqatlanayotganda', 'Kechirim so\'raganda'], a: 0 },
                            { q: '"Rahmat" nemis tilida nima?', options: ['Danke', 'Bitte', 'Hallo', 'Tschüss'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-2',
                        num: 2,
                        title: '2-Dars: Zahlen und Alter (Sonlar va Yosh)',
                        desc: '0 dan 100 gacha sonlar, telefon raqami va narxlar.',
                        video: { title: 'Zahlen auf Deutsch von 1 bis 100', channel: 'SpeakPro Video Studio', duration: '07:45', topic: 'Eins, zwei, drei, Wie alt sind Sie?' },
                        dialog: [
                            { speaker: 'Frau Schmidt', avatar: '👩‍🏫', text: 'Wie alt bist du, Timur?', tr: 'Necha yoshdasan, Timur?' },
                            { speaker: 'Timur', avatar: '👨‍🎓', text: 'Ich bin zwanzig Jahre alt.', tr: 'Men yigirma yoshdaman.' },
                            { speaker: 'Frau Schmidt', avatar: '👩‍🏫', text: 'Und wie ist deine Telefonnummer?', tr: 'Telefon raqaming qanday?' },
                            { speaker: 'Timur', avatar: '👨‍🎓', text: 'Meine Nummer ist null, eins, sieben, zwei.', tr: 'Mening raqamim: nol, bir, yetti, ikki.' }
                        ],
                        vocab: [
                            { word: 'Eins, zwei, drei', tr: 'Bir, ikki, uch', phonetic: '[aɪns tsvaɪ draɪ]', ex: 'Eins, zwei, drei, los geht\'s!' },
                            { word: 'Zehn, zwanzig', tr: 'O\'n, yigirma', phonetic: '[tseːn ˈtsvan.tsɪç]', ex: 'Ich habe zehn Bücher.' },
                            { word: 'Hundert', tr: 'Yuz', phonetic: '[ˈhʊndɐt]', ex: 'Hundert Euro.' },
                            { word: 'Wie alt sind Sie?', tr: 'Yoshingiz nechada?', phonetic: '[viː alt zɪnt ziː]', ex: 'Wie alt sind Sie genau?' },
                            { word: 'Jahre alt', tr: 'Yoshda', phonetic: '[ˈjaːrə alt]', ex: 'Ich bin 25 Jahre alt.' },
                            { word: 'Telefonnummer', tr: 'Telefon raqami', phonetic: '[teleˈfoːnˌnʊmɐ]', ex: 'Ihre Telefonnummer bitte.' },
                            { word: 'Euro / Cent', tr: 'Yevro / Sent', phonetic: '[ˈɔɪro]', ex: 'Fünfzig Euro.' },
                            { word: 'Wie viel kostet das?', tr: 'Bu qancha turadi?', phonetic: '[viː fiːl ˈkɔstət das]', ex: 'Wie viel kostet dieses Buch?' }
                        ],
                        quiz: [
                            { q: '"Zwanzig" qaysi son?', options: ['20', '12', '2', '200'], a: 0 },
                            { q: '"Wie viel kostet das?" nimani so\'raydi?', options: ['Bu qancha turadi?', 'Bu nima?', 'Qayerda joylashgan?', 'Kim bu?'], a: 0 },
                            { q: '"Hundert" qaysi son?', options: ['100', '10', '1000', '50'], a: 0 },
                            { q: '"Telefonnummer" so\'zining ma\'nosi:', options: ['Telefon raqami', 'Pasport', 'Uy manzili', 'Ism'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-3',
                        num: 3,
                        title: '3-Dars: Familie und Zuhause (Oila va Uy)',
                        desc: 'Oila a\'zolari: Vater, Mutter, Bruder, Schwester va uy xonalari.',
                        video: { title: 'Meine Familie und mein Haus', channel: 'SpeakPro Video Studio', duration: '08:20', topic: 'Vater, Mutter, Bruder, Schwester, Mein/Meine' },
                        dialog: [
                            { speaker: 'Felix', avatar: '👨‍💼', text: 'Hast du eine große Familie, Zafar?', tr: 'Zafar, sening oilang kattami?' },
                            { speaker: 'Zafar', avatar: '👨‍🎓', text: 'Ja, ich habe Eltern, einen Bruder und eine Schwester.', tr: 'Ha, ota-onam, bitta akam va bitta singlim bor.' }
                        ],
                        vocab: [
                            { word: 'Die Familie', tr: 'Oila', phonetic: '[faˈmiːli̯ə]', ex: 'Meine Familie ist glücklich.' },
                            { word: 'Der Vater / Die Mutter', tr: 'Ota / Ona', phonetic: '[ˈfaːtɐ ˈmʊtɐ]', ex: 'Mein Vater ist Ingenieur.' },
                            { word: 'Der Bruder / Die Schwester', tr: 'Aka-uka / Opa-singil', phonetic: '[ˈbruːdɐ ˈʃvɛstɐ]', ex: 'Mein Bruder lernt Deutsch.' },
                            { word: 'Die Eltern', tr: 'Ota-ona', phonetic: '[ˈɛltɐn]', ex: 'Meine Eltern leben in Samarkand.' },
                            { word: 'Das Haus / Die Wohnung', tr: 'Uy / Kvartira', phonetic: '[haʊs ˈvoːnʊŋ]', ex: 'Ein schönes neues Haus.' },
                            { word: 'Das Zimmer', tr: 'Xona', phonetic: '[ˈtsɪmɐ]', ex: 'Mein Zimmer ist hell.' },
                            { word: 'Die Großmutter / Der Großvater', tr: 'Buvi / Bobo', phonetic: '[ˈɡroːsˌmʊtɐ]', ex: 'Oma und Opa.' },
                            { word: 'Das Kind / Die Kinder', tr: 'Bola / Bolalar', phonetic: '[kɪnt ˈkɪndɐ]', ex: 'Zwei Kinder spielen.' }
                        ],
                        quiz: [
                            { q: '"Die Eltern" so\'zining ma\'nosi:', options: ['Ota-ona', 'Bolalar', 'Do\'stlar', 'Qo\'shnilar'], a: 0 },
                            { q: '"Der Vater" kim?', options: ['Ota', 'Ona', 'Aka', 'Bobo'], a: 0 },
                            { q: '"Die Schwester" kim?', options: ['Opa / Singil', 'Aka', 'Ona', 'Buvi'], a: 0 },
                            { q: '"Das Haus" nima?', options: ['Uy', 'Maktab', 'Ko\'cha', 'Shahar'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-4',
                        num: 4,
                        title: '4-Dars: Im Restaurant und Essen (Restoranda va Taomlar)',
                        desc: 'Essen bestellen, ich möchte..., die Rechnung bitte va taomlar.',
                        video: { title: 'Im Restaurant bestellen auf Deutsch', channel: 'SpeakPro Video Studio', duration: '08:45', topic: 'Ich möchte bitte..., Die Rechnung, Essen und Trinken' },
                        dialog: [
                            { speaker: 'Kellner', avatar: '👨‍🍳', text: 'Guten Tag! Was möchten Sie bestellen?', tr: 'Xayrli kun! Nima buyurtma qilishni xohlaysiz?' },
                            { speaker: 'Gast', avatar: '👨‍💼', text: 'Ich möchte bitte Hähnchen mit Reis und Mineralwasser.', tr: 'Men tovuq go\'shti guruch bilan va gazlangan suv xohlardim.' },
                            { speaker: 'Gast', avatar: '👨‍💼', text: 'Die Rechnung, bitte!', tr: 'Hisobni bering, iltimos!' }
                        ],
                        vocab: [
                            { word: 'Das Essen / Das Trinken', tr: 'Ovqat / Ichimlik', phonetic: '[ˈɛsn̩ ˈtrɪŋkn̩]', ex: 'Leckeres Essen.' },
                            { word: 'Das Wasser / Der Tee / Der Kaffee', tr: 'Suv / Choy / Kofe', phonetic: '[ˈvasɐ teː ˈkafe]', ex: 'Eine Tasse Kaffee bitte.' },
                            { word: 'Das Brot', tr: 'Non', phonetic: '[broːt]', ex: 'Frisches deutsches Brot.' },
                            { word: 'Ich möchte bitte...', tr: 'Men ... xohlardim, iltimos', phonetic: '[ɪç ˈmœçtə ˈbɪtə]', ex: 'Ich möchte bitte ein Glas Wasser.' },
                            { word: 'Die Speisekarte', tr: 'Taomnoma (Menyu)', phonetic: '[ˈʃpaɪzəˌkartə]', ex: 'Bringen Sie die Speisekarte.' },
                            { word: 'Die Rechnung', tr: 'Hisob-kitob (Chek)', phonetic: '[ˈrɛçnʊŋ]', ex: 'Die Rechnung bitte!' },
                            { word: 'Lecker', tr: 'Mazali / Shirin', phonetic: '[ˈlɛkɐ]', ex: 'Das schmeckt sehr lecker!' },
                            { word: 'Frühstück / Mittagessen', tr: 'Nonushta / Tushlik', phonetic: '[ˈfryːˌʃtʏk]', ex: 'Gesundes Frühstück.' }
                        ],
                        quiz: [
                            { q: '"Die Rechnung, bitte" nima degani?', options: ['Hisobni bering, iltimos', 'Menyuni bering', 'Non bering', 'Choy bering'], a: 0 },
                            { q: '"Ich möchte bitte..." qanday tarjima qilinadi?', options: ['Men ... xohlardim, iltimos', 'Menga yoqmaydi', 'Men ketaman', 'Menda yo\'q'], a: 0 },
                            { q: '"Lecker" so\'zining ma\'nosi:', options: ['Mazali', 'Achchiq', 'Sovuq', 'Sho\'r'], a: 0 },
                            { q: '"Das Brot" nima?', options: ['Non', 'Suv', 'Go\'sht', 'Sut'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-5',
                        num: 5,
                        title: '5-Dars: In der Stadt und Wegbeschreibung (Shaharda va Yo\'nalish)',
                        desc: 'Wo ist...?, Geradeaus, Nach links, Nach rechts va transport.',
                        video: { title: 'Nach dem Weg fragen auf Deutsch', channel: 'SpeakPro Video Studio', duration: '08:15', topic: 'Entschuldigung, Wo ist...?, Geradeaus, Links/Rechts' },
                        dialog: [
                            { speaker: 'Tourist', avatar: '👨‍🎓', text: 'Entschuldigung, wo ist der Bahnhof?', tr: 'Kechirasiz, temir yo\'l vokzali qayerda?' },
                            { speaker: 'Passant', avatar: '👩‍💼', text: 'Gehen Sie geradeaus, dann nach rechts.', tr: 'To\'g\'riga yuring, so\'ng o\'ngga.' }
                        ],
                        vocab: [
                            { word: 'Wo ist...?', tr: '... qayerda?', phonetic: '[voː ɪst]', ex: 'Wo ist die U-Bahn-Station?' },
                            { word: 'Geradeaus', tr: 'To\'g\'riga', phonetic: '[ɡəˈraːdəˈaʊs]', ex: 'Fahren Sie geradeaus.' },
                            { word: 'Nach links / Nach rechts', tr: 'Chapga / O\'ngga', phonetic: '[naːx lɪŋks rɛçts]', ex: 'Biegen Sie nach links ab.' },
                            { word: 'Der Bahnhof', tr: 'Vokzal (Temir yo\'l)', phonetic: '[ˈbaːnˌhoːf]', ex: 'Hauptbahnhof Berlin.' },
                            { word: 'Die Straße', tr: 'Ko\'cha', phonetic: '[ˈʃtraːsə]', ex: 'Auf der Straße.' },
                            { word: 'Entschuldigung', tr: 'Kechirasiz', phonetic: '[ɛntˈʃʊldɪɡʊŋ]', ex: 'Entschuldigung, bitte!' },
                            { word: 'Der Bus / Die U-Bahn', tr: 'Avtobus / Metro', phonetic: '[bʊs ˈuːˌbaːn]', ex: 'Mit der U-Bahn fahren.' },
                            { word: 'Weit / Nah', tr: 'Uzoq / Yaqin', phonetic: '[vaɪt naː]', ex: 'Es ist ganz nah.' }
                        ],
                        quiz: [
                            { q: '"Geradeaus" qaysi yo\'nalish?', options: ['To\'g\'riga', 'Chapga', 'O\'ngga', 'Orqaga'], a: 0 },
                            { q: '"Nach rechts" qayerga burilish?', options: ['O\'ngga', 'Chapga', 'Balandga', 'To\'g\'riga'], a: 0 },
                            { q: '"Der Bahnhof" nima?', options: ['Temir yo\'l vokzali', 'Aeroport', 'Mehmonxona', 'Maktab'], a: 0 },
                            { q: '"Entschuldigung" so\'zining ma\'nosi:', options: ['Kechirasiz', 'Rahmat', 'Salom', 'Xayr'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-6',
                        num: 6,
                        title: '6-Dars: Berufe und Arbeit (Kasblar va Ish)',
                        desc: 'Lehrer, Arzt, Ingenieur, Programmierer va kasb haqida suhbat.',
                        video: { title: 'Berufe auf Deutsch: Was bist du von Beruf?', channel: 'SpeakPro Video Studio', duration: '08:00', topic: 'Berufe, Was sind Sie von Beruf?, Arbeiten' },
                        dialog: [
                            { speaker: 'Martin', avatar: '👨‍💼', text: 'Was sind Sie von Beruf, Shavkat?', tr: 'Shavkat, kasbingiz nima?' },
                            { speaker: 'Shavkat', avatar: '👨‍💻', text: 'Ich bin Softwareentwickler. Ich arbeite bei einer IT-Firma.', tr: 'Men dasturchiman. IT kompaniyasida ishlayman.' }
                        ],
                        vocab: [
                            { word: 'Der Lehrer / Die Lehrerin', tr: 'O\'qituvchi', phonetic: '[ˈleːrɐ]', ex: 'Mein Deutschlehrer.' },
                            { word: 'Der Arzt / Die Ärztin', tr: 'Shifokor (Vrach)', phonetic: '[aːɐ̯tst ˈɛːɐ̯tstɪn]', ex: 'Ein kompetenter Arzt.' },
                            { word: 'Der Ingenieur', tr: 'Muhandis', phonetic: '[ɪnʒeˈnjøːɐ̯]', ex: 'Ingenieurwesen in Deutschland.' },
                            { word: 'Der Entwickler', tr: 'Dasturchi (Developer)', phonetic: '[ɛntˈvɪklɐ]', ex: 'Web-Entwickler.' },
                            { word: 'Die Arbeit', tr: 'Ish', phonetic: '[ˈaʁbaɪt]', ex: 'Gute Arbeit!' },
                            { word: 'Das Büro / Die Firma', tr: 'Ofis / Firma', phonetic: '[byˈroː ˈfɪʁma]', ex: 'Ich arbeite im Büro.' },
                            { word: 'Der Student', tr: 'Talaba', phonetic: '[ʃtuˈdɛnt]', ex: 'Fleißiger Student.' },
                            { word: 'Lernen / Studieren', tr: 'O\'rganmoq / Universitetda o\'qimoq', phonetic: '[ˈlɛʁnən ʃtuˈdiːʁən]', ex: 'Ich studiere Informatik.' }
                        ],
                        quiz: [
                            { q: '"Der Arzt" kim?', options: ['Shifokor', 'O\'qituvchi', 'Muhandis', 'Haydovchi'], a: 0 },
                            { q: '"Der Lehrer" so\'zining ma\'nosi:', options: ['O\'qituvchi', 'Shifokor', 'Boshliq', 'Kassir'], a: 0 },
                            { q: '"Die Arbeit" nima?', options: ['Ish', 'Dam olish', 'Sayohat', 'Sport'], a: 0 },
                            { q: '"Der Student" kim?', options: ['Talaba', 'Usta', 'Doktor', 'Xodim'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-7',
                        num: 7,
                        title: '7-Dars: Einkaufen und Kleidung (Xaridlar va Kiyimlar)',
                        desc: 'Ranglar, kiyim turlari, do\'konda narx so\'rash va o\'lchamlar.',
                        video: { title: 'Kleidung kaufen auf Deutsch', channel: 'SpeakPro Video Studio', duration: '08:10', topic: 'Farben, Kleidung, Kann ich das anprobieren?' },
                        dialog: [
                            { speaker: 'Kunde', avatar: '👩‍💼', text: 'Kann ich diese blaue Jacke anprobieren?', tr: 'Bu ko\'k kurtkani kiyib ko\'rsam bo\'ladimi?' },
                            { speaker: 'Verkäufer', avatar: '👨‍💼', text: 'Natürlich! Die Umkleidekabine ist da drüben.', tr: 'Albatta! Kiyib ko\'rish kabinasi anavi yerda.' }
                        ],
                        vocab: [
                            { word: 'Rot, Blau, Grün', tr: 'Qizil, Ko\'k, Yashil', phonetic: '[roːt blaʊ ɡryːn]', ex: 'Ein blaues Hemd.' },
                            { word: 'Schwarz, Weiß', tr: 'Qora, Oq', phonetic: '[ʃvaʁts vaɪs]', ex: 'Schwarz und weiß.' },
                            { word: 'Die Jacke / Das Hemd', tr: 'Kurtka / Erkaklar ko\'ylagi', phonetic: '[ˈjakə hɛmt]', ex: 'Eine warme Jacke.' },
                            { word: 'Die Schuhe', tr: 'Oyoq kiyim', phonetic: '[ˈʃuːə]', ex: 'Bequeme Schuhe.' },
                            { word: 'Die Größe', tr: 'O\'lcham', phonetic: '[ˈɡʁøːsə]', ex: 'Welche Größe haben Sie?' },
                            { word: 'Anprobieren', tr: 'Kiyib ko\'rmoq', phonetic: '[ˈanproˌbiːʁən]', ex: 'Kann ich das anprobieren?' },
                            { word: 'Teuer / Billig', tr: 'Qimmat / Arzon', phonetic: '[ˈtɔɪɐ ˈbɪlɪç]', ex: 'Sehr billig!' },
                            { word: 'Mit Karte zahlen', tr: 'Karta bilan to\'lamoq', phonetic: '[kaʁtə ˈtsaːlən]', ex: 'Kann ich mit Karte zahlen?' }
                        ],
                        quiz: [
                            { q: '"Anprobieren" nimani bildiradi?', options: ['Kiyib ko\'rmoq', 'Sotib olmoq', 'Yuvmoq', 'To\'lamoq'], a: 0 },
                            { q: '"Blau" qaysi rang?', options: ['Ko\'k', 'Qizil', 'Yashil', 'Qora'], a: 0 },
                            { q: '"Billig" so\'zining ma\'nosi:', options: ['Arzon', 'Qimmat', 'Og\'ir', 'Katta'], a: 0 },
                            { q: '"Die Größe" nima?', options: ['O\'lcham', 'Narx', 'Rang', 'Og\'irlik'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-8',
                        num: 8,
                        title: '8-Dars: Zeit und Tagesablauf (Vaqt va Kun Tartibi)',
                        desc: 'Wie spät ist es?, soatlar, kun tartibi va hafta kunlari.',
                        video: { title: 'Wie spät ist es? Uhrzeit auf Deutsch', channel: 'SpeakPro Video Studio', duration: '08:40', topic: 'Wie spät ist es?, Viertel vor/nach, Tageszeiten' },
                        dialog: [
                            { speaker: 'Jan', avatar: '👨‍🎓', text: 'Wie spät ist es jetzt, bitte?', tr: 'Hozir soat necha bo\'ldi, iltimos?' },
                            { speaker: 'Julia', avatar: '👩‍🎓', text: 'Es ist genau halb drei (14:30).', tr: 'Hozir roppa-rosa ikkidan o\'ttiz daqiqa o\'tdi.' }
                        ],
                        vocab: [
                            { word: 'Wie spät ist es?', tr: 'Soat necha?', phonetic: '[viː ʃpɛːt ɪst ɛs]', ex: 'Wie viel Uhr ist es?' },
                            { word: 'Uhr', tr: 'Soat', phonetic: '[uːɐ̯]', ex: 'Es ist drei Uhr.' },
                            { word: 'Der Morgen, Der Abend', tr: 'Tong, Oqshom', phonetic: '[ˈmɔʁɡn̩ ˈaːbənt]', ex: 'Guten Morgen!' },
                            { word: 'Die Minute / Die Stunde', tr: 'Daqiqa / Soat (vaqt oralig\'i)', phonetic: '[miˈnuːtə ˈʃtʊndə]', ex: 'In fünf Minuten.' },
                            { word: 'Montag, Freitag', tr: 'Dushanba, Juma', phonetic: '[ˈmoːntaːk ˈfraɪtaːk]', ex: 'Am Montag um 9 Uhr.' },
                            { word: 'Samstag, Sonntag', tr: 'Shanba, Yakshanba', phonetic: '[ˈzamstaːk ˈzɔntaːk]', ex: 'Schönes Wochenende!' },
                            { word: 'Aufstehen', tr: 'Uyg\'onib o\'rindan turmoq', phonetic: '[ˈaʊfˌʃteːən]', ex: 'Ich stehe um 7 Uhr auf.' },
                            { word: 'Schlafen gehen', tr: 'Uxlashga yotmoq', phonetic: '[ˈʃlaːfn̩ ˈɡeːən]', ex: 'Um 23 Uhr schlafen gehen.' }
                        ],
                        quiz: [
                            { q: '"Wie spät ist es?" nimani so\'raydi?', options: ['Soat necha?', 'Qaysi kun?', 'Qayerdasan?', 'Isming nima?'], a: 0 },
                            { q: '"Montag" qaysi kun?', options: ['Dushanba', 'Seshanba', 'Juma', 'Yakshanba'], a: 0 },
                            { q: '"Uhr" so\'zining ma\'nosi:', options: ['Soat', 'Daqiqa', 'Hafta', 'Yil'], a: 0 },
                            { q: '"Guten Morgen" qachon aytiladi?', options: ['Ertalab (Xayrli tong)', 'Kechqurun', 'Tunda', 'Tushda'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-9',
                        num: 9,
                        title: '9-Dars: Wetter und Jahreszeiten (Ob-havo va Fasllar)',
                        desc: 'Sonnig, regnerisch, warm, kalt va to\'rt fasl.',
                        video: { title: 'Das Wetter und die vier Jahreszeiten', channel: 'SpeakPro Video Studio', duration: '08:00', topic: 'Wie ist das Wetter?, Frühling, Sommer, Herbst, Winter' },
                        dialog: [
                            { speaker: 'Klaus', avatar: '👨‍💼', text: 'Wie ist das Wetter heute in Berlin?', tr: 'Bugun Berlinda ob-havo qanday?' },
                            { speaker: 'Monika', avatar: '👩‍💼', text: 'Es ist sonnig und angenehm warm, etwa zweiundzwanzig Grad.', tr: 'Quyoshli va yoqimli iliq, yigirma ikki gradus atrofida.' }
                        ],
                        vocab: [
                            { word: 'Wie ist das Wetter?', tr: 'Ob-havo qanday?', phonetic: '[viː ɪst das ˈvɛtɐ]', ex: 'Das Wetter ist herrlich.' },
                            { word: 'Sonnig / Regnerisch', tr: 'Quyoshli / Yomg\'irli', phonetic: '[ˈzɔnɪç ˈʁeːɡnəʁɪʃ]', ex: 'Heute ist es sonnig.' },
                            { word: 'Warm / Kalt', tr: 'Iliq / Sovuq', phonetic: '[vaʁm kalt]', ex: 'Im Winter ist es kalt.' },
                            { word: 'Der Schnee / Der Regen', tr: 'Qor / Yomg\'ir', phonetic: '[ʃneː ˈʁeːɡn̩]', ex: 'Es schneit draußen.' },
                            { word: 'Der Frühling, Der Sommer', tr: 'Bahor, Yoz', phonetic: '[ˈfʁyːlɪŋ ˈzɔmɐ]', ex: 'Im Sommer haben wir Ferien.' },
                            { word: 'Der Herbst, Der Winter', tr: 'Kuz, Qish', phonetic: '[hɛʁpst ˈvɪntɐ]', ex: 'Goldener Herbst.' },
                            { word: 'Das Grad', tr: 'Gradus (daraja)', phonetic: '[ɡʁaːt]', ex: 'Zwanzig Grad.' },
                            { word: 'Der Himmel', tr: 'Osmon', phonetic: '[ˈhɪml̩]', ex: 'Blauer Himmel.' }
                        ],
                        quiz: [
                            { q: '"Sonnig" so\'zining ma\'nosi:', options: ['Quyoshli', 'Yomg\'irli', 'Sovuq', 'Qorli'], a: 0 },
                            { q: '"Der Sommer" qaysi fasl?', options: ['Yoz', 'Bahor', 'Kuz', 'Qish'], a: 0 },
                            { q: '"Kalt" nimani bildiradi?', options: ['Sovuq', 'Issiq', 'Iliq', 'Shamolli'], a: 0 },
                            { q: '"Der Schnee" nima?', options: ['Qor', 'Yomg\'ir', 'Muz', 'Bulut'], a: 0 }
                        ]
                    },
                    {
                        id: 'de-a1-10',
                        num: 10,
                        title: '10-Dars: Am Flughafen und Reisen (Aeroportda va Sayohat)',
                        desc: 'Der Flug, Das Ticket, Der Reisepass va sayohatdagi ilk qadamlar.',
                        video: { title: 'Deutsch am Flughafen und Reisevokabeln', channel: 'SpeakPro Video Studio', duration: '09:30', topic: 'Flughafen, Boarding Pass, Gute Reise!' },
                        dialog: [
                            { speaker: 'Passagier', avatar: '👨‍💼', text: 'Guten Tag! Wo ist der Check-in für den Flug nach Frankfurt?', tr: 'Xayrli kun! Frankfurtga parvoz uchun ro\'yxatdan o\'tish qayerda?' },
                            { speaker: 'Personal', avatar: '👩‍✈️', text: 'Schalter zehn, bitte. Zeigen Sie Ihren Reisepass.', tr: 'O\'ninchi stol, iltimos. Xorijiy pasportingizni ko\'rsating.' },
                            { speaker: 'Personal', avatar: '👩‍✈️', text: 'Gute Reise und guten Flug!', tr: 'Oq yo\'l va parvozingiz bexatar bo\'lsin!' }
                        ],
                        vocab: [
                            { word: 'Der Flughafen / Der Flug', tr: 'Aeroport / Parvoz (Reys)', phonetic: '[ˈfluːkˌhaːfn̩ fluːk]', ex: 'Flughafen Frankfurt.' },
                            { word: 'Das Ticket / Der Reisepass', tr: 'Chipta / Xorijiy pasport', phonetic: '[ˈtɪkət ˈʁaɪzəˌpas]', ex: 'Reisepass bitte vorzeigen.' },
                            { word: 'Das Gepäck / Der Koffer', tr: 'Yuk (Bagaj) / Chemodan', phonetic: '[ɡəˈpɛk ˈkɔfɐ]', ex: 'Gepäck aufgeben.' },
                            { word: 'Gute Reise!', tr: 'Oq yo\'l! / Safaringiz xayrli bo\'lsin!', phonetic: '[ˈɡuːtə ˈʁaɪzə]', ex: 'Ich wünsche Ihnen eine gute Reise!' },
                            { word: 'Das Hotel', tr: 'Mehmonxona', phonetic: '[hoˈtɛl]', ex: 'Ein Zimmer im Hotel buchen.' },
                            { word: 'Die Stadt', tr: 'Shahar', phonetic: '[ʃtat]', ex: 'Eine historische deutsche Stadt.' },
                            { word: 'Der Abflug', tr: 'Uchish vaqti', phonetic: '[ˈapˌfluːk]', ex: 'Abflug um 15 Uhr.' },
                            { word: 'Die Ankunft', tr: 'Yetib kelish', phonetic: '[ˈanˌkʊnft]', ex: 'Pünktliche Ankunft.' }
                        ],
                        quiz: [
                            { q: '"Gute Reise!" nimani bildiradi?', options: ['Oq yo\'l! / Safaringiz xayrli bo\'lsin!', 'Xush kelibsiz', 'Salom', 'Kechirasiz'], a: 0 },
                            { q: '"Der Reisepass" nima?', options: ['Xorijiy pasport', 'Chipta', 'Chek', 'Xarita'], a: 0 },
                            { q: '"Das Hotel" so\'zining ma\'nosi:', options: ['Mehmonxona', 'Aeroport', 'Vokzal', 'Kvartira'], a: 0 },
                            { q: '"Das Gepäck" nima degani?', options: ['Bagaj / Yuk', 'Samolyot', 'Chipta', 'O\'rin'], a: 0 }
                        ]
                    }
                ]
            },
            levelTests: {
                A1: {
                    id: 'test-de-a1',
                    title: 'A1 Daraja Nemis Tili Yakuniy Imtihoni',
                    badge: '📝 10-Dars Yakuniy Testi',
                    desc: '1-darsdan 10-darsgacha barcha mavzular bo\'yicha 10 ta savol.',
                    starsReward: 20,
                    minScorePercent: 80,
                    questions: [
                        { q: 'Wie sagt man "Salom, mening ismim Madina" auf Deutsch?', options: ['Hallo, ich heiße Madina', 'Guten Morgen, Madina', 'Auf Wiedersehen, Madina', 'Danke schön, Madina'], a: 0 },
                        { q: 'Welche Zahl ist "vierundfünfzig"?', options: ['54', '45', '14', '50'], a: 0 },
                        { q: 'Was bedeutet "Die Rechnung, bitte"?', options: ['Hisobni bering, iltimos', 'Menyuni bering', 'Non bering', 'Suv olib keling'], a: 0 },
                        { q: 'Wohin geht man bei "Geradeaus"?', options: ['To\'g\'riga', 'Chapga', 'O\'ngga', 'Orqaga'], a: 0 },
                        { q: 'Wer unterrichtet Kinder in der Schule?', options: ['Der Lehrer', 'Der Arzt', 'Der Ingenieur', 'Der Fahrer'], a: 0 },
                        { q: 'Welches Wort bedeutet "Ota-ona"?', options: ['Die Eltern', 'Die Kinder', 'Die Freunde', 'Die Brüder'], a: 0 },
                        { q: 'Was bedeutet "Gute Reise"?', options: ['Oq yo\'l!', 'Xush kelibsiz', 'Salom', 'Kechirasiz'], a: 0 },
                        { q: 'Wie ist das Gegenteil von "Kalt"?', options: ['Warm', 'Sonnig', 'Schön', 'Windig'], a: 0 },
                        { q: 'Was ist "Der Bahnhof"?', options: ['Temir yo\'l vokzali', 'Aeroport', 'Mehmonxona', 'Maktab'], a: 0 },
                        { q: 'Welcher Tag kommt nach Sonntag?', options: ['Montag', 'Dienstag', 'Freitag', 'Samstag'], a: 0 }
                    ]
                }
            }
        }
    }
};

// ==========================================================================
// LessonsApp Controller
// ==========================================================================

const LessonsApp = {
    step: 'lang', // 'lang' | 'level' | 'lessons' | 'detail' | 'test' | 'dialogs' | 'idioms' | 'vocabulary'
    selectedLang: 'en',
    selectedLevel: 'A1',
    selectedLessonId: null,
    activeLessonTab: 'video', // 'video' | 'dialog' | 'vocab' | 'quiz'

    // Real-world Dialogues Explorer State
    selectedDialogId: null,
    selectedDialogCat: 'all',

    // Idioms Explorer State
    idiomsFilterLevel: 'all',
    idiomsSearch: '',

    // 10,000+ Vocabulary Explorer State
    vocabLevel: 'all',
    vocabPos: 'all',
    vocabSearch: '',
    vocabPage: 1,

    // Video watching simulation
    videoWatchInterval: null,
    videoProgress: 0,
    videoPlaying: false,

    // Testing
    currentTestType: null, // 'level' | 'mock'
    currentTestObj: null,
    currentTestAnswers: {},
    testTimerInterval: null,
    testTimeLeft: 1200, // 20 minutes in seconds

    // State persistence
    progress: {
        watchedVideos: {}, // { 'en-a1-1': true }
        passedLevelTests: {}, // { 'test-en-a1': { score: 90, passed: true } }
        mockTestsDone: {} // { 'mock-ielts': { score: 95, starsGiven: true } }
    },

    init() {
        this.loadProgress();
        this.render();
    },

    loadProgress() {
        try {
            const saved = localStorage.getItem('speakpro_lessons_progress');
            if (saved) {
                this.progress = { ...this.progress, ...JSON.parse(saved) };
            }
        } catch (e) {
            console.error('Failed to load lessons progress', e);
        }
    },

    saveProgress() {
        try {
            localStorage.setItem('speakpro_lessons_progress', JSON.stringify(this.progress));
        } catch (e) {
            console.error('Failed to save lessons progress', e);
        }
    },

    goToStep(step) {
        this.step = step;
        this.stopVideoSimulation();
        this.stopTestTimer();
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    selectLanguage(langId) {
        if (!SpeakProCurriculum.languages[langId]) langId = 'en';
        this.selectedLang = langId;
        this.step = 'level';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    selectLevel(levelCode) {
        this.selectedLevel = levelCode;
        this.step = 'lessons';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    openLesson(lessonId) {
        this.selectedLessonId = lessonId;
        this.activeLessonTab = 'video';
        this.videoProgress = this.progress.watchedVideos[lessonId] ? 100 : 0;
        this.videoPlaying = false;
        this.step = 'detail';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    setLessonTab(tab) {
        this.activeLessonTab = tab;
        this.render();
    },

    // ----------------------------------------------------------------------
    // Video Watch & +10 Star Reward
    // ----------------------------------------------------------------------
    togglePlayVideo() {
        if (this.videoPlaying) {
            this.pauseVideo();
        } else {
            this.playVideo();
        }
    },

    playVideo() {
        this.videoPlaying = true;
        SoundEffects.playClick();
        this.updateVideoPlayUI();

        if (this.videoWatchInterval) clearInterval(this.videoWatchInterval);

        this.videoWatchInterval = setInterval(() => {
            if (this.videoProgress < 100) {
                this.videoProgress += 10;
                if (this.videoProgress > 100) this.videoProgress = 100;
                this.updateVideoProgressUI();
            }

            if (this.videoProgress >= 100) {
                this.pauseVideo();
                this.markVideoWatched(this.selectedLessonId);
            }
        }, 800);
    },

    pauseVideo() {
        this.videoPlaying = false;
        if (this.videoWatchInterval) {
            clearInterval(this.videoWatchInterval);
            this.videoWatchInterval = null;
        }
        this.updateVideoPlayUI();
    },

    stopVideoSimulation() {
        this.pauseVideo();
        this.videoProgress = 0;
    },

    updateVideoPlayUI() {
        const btn = document.getElementById('video-play-btn');
        const playIcon = document.getElementById('video-play-icon');
        const statusText = document.getElementById('video-status-text');
        if (btn) {
            if (this.videoPlaying) {
                btn.innerHTML = '⏸️ To\'xtatish';
                btn.className = 'btn btn-secondary';
            } else {
                btn.innerHTML = '▶️ Videoni ko\'rishni boshlash';
                btn.className = 'btn btn-primary';
            }
        }
        if (playIcon) {
            playIcon.style.opacity = this.videoPlaying ? '0.4' : '1';
        }
        if (statusText) {
            statusText.innerText = this.videoPlaying ? 'Video tomosha qilinmoqda...' : 'Video to\'xtatilgan';
        }
    },

    updateVideoProgressUI() {
        const bar = document.getElementById('video-progress-fill');
        const label = document.getElementById('video-progress-percent');
        if (bar) bar.style.width = this.videoProgress + '%';
        if (label) label.innerText = Math.round(this.videoProgress) + '%';
    },

    markVideoWatched(lessonId) {
        this.videoProgress = 100;
        this.updateVideoProgressUI();

        if (!this.progress.watchedVideos[lessonId]) {
            this.progress.watchedVideos[lessonId] = true;
            this.saveProgress();

            // Reward 10 stars!
            App.addStars(10);
            App.showToast('🎉 Tabriklaymiz! Video dars to\'liq ko\'rildi va hisobingizga +10 ⭐ Yulduz berildi!', 'success');
        } else {
            App.showToast('Ushbu video dars avval to\'liq ko\'rilgan. Yulduzlar hisoblangan.', 'info');
        }
        this.render();
    },

    // ----------------------------------------------------------------------
    // Vocab & Speech
    // ----------------------------------------------------------------------
    speak(text) {
        const langObj = SpeakProCurriculum.languages[this.selectedLang];
        speakForeignWord(text, langObj ? langObj.code : 'en-US');
    },

    flipCard(el) {
        el.classList.toggle('flipped');
        SoundEffects.playClick();
    },

    answerQuiz(qIndex, chosenOpt, correctOpt) {
        const quizCard = document.getElementById(`quiz-item-${qIndex}`);
        if (!quizCard) return;

        const buttons = quizCard.querySelectorAll('.quiz-option-btn');
        buttons.forEach((b, idx) => {
            b.disabled = true;
            if (idx === correctOpt) {
                b.classList.add('correct');
            } else if (idx === chosenOpt) {
                b.classList.add('wrong');
            }
        });

        if (chosenOpt === correctOpt) {
            SoundEffects.playCorrect();
            App.showToast('To\'g\'ri javob! Barakalla! 🎯', 'success');
        } else {
            SoundEffects.playWrong();
            App.showToast('Noto\'g\'ri javob. To\'g\'ri variant yashil rangda ko\'rsatildi.', 'error');
        }
    },

    // ----------------------------------------------------------------------
    // Testing & Mock Tests
    // ----------------------------------------------------------------------
    startLevelTest(langId, levelCode) {
        const langData = SpeakProCurriculum.languages[langId];
        if (!langData || !langData.levelTests || !langData.levelTests[levelCode]) {
            App.showToast('Bu daraja uchun test tez kunda yuklanadi!', 'info');
            return;
        }
        this.currentTestType = 'level';
        this.currentTestObj = langData.levelTests[levelCode];
        this.currentTestAnswers = {};
        this.step = 'test';
        this.startTestTimer(900); // 15 mins
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    startMockTest(langId, mockId) {
        const langData = SpeakProCurriculum.languages[langId];
        if (!langData || !langData.mockTests) return;
        const mockObj = langData.mockTests.find(m => m.id === mockId);
        if (!mockObj) return;

        this.currentTestType = 'mock';
        this.currentTestObj = mockObj;
        this.currentTestAnswers = {};
        this.step = 'test';
        this.startTestTimer(1200); // 20 mins
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    startTestTimer(seconds) {
        this.stopTestTimer();
        this.testTimeLeft = seconds;
        this.testTimerInterval = setInterval(() => {
            this.testTimeLeft--;
            const timerEl = document.getElementById('test-timer-display');
            if (timerEl) {
                const mins = Math.floor(this.testTimeLeft / 60);
                const secs = this.testTimeLeft % 60;
                timerEl.innerText = `⏱️ ${mins}:${secs < 10 ? '0' : ''}${secs}`;
            }
            if (this.testTimeLeft <= 0) {
                this.stopTestTimer();
                App.showToast('Vaqt tugadi! Test avtomatik tarzda topshirilmoqda...', 'info');
                this.submitTest();
            }
        }, 1000);
    },

    stopTestTimer() {
        if (this.testTimerInterval) {
            clearInterval(this.testTimerInterval);
            this.testTimerInterval = null;
        }
    },

    selectTestAnswer(qIndex, optIndex) {
        this.currentTestAnswers[qIndex] = optIndex;
        SoundEffects.playClick();

        const optButtons = document.querySelectorAll(`[data-test-q="${qIndex}"]`);
        optButtons.forEach((btn, idx) => {
            if (idx === optIndex) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
    },

    submitTest() {
        this.stopTestTimer();
        const test = this.currentTestObj;
        if (!test) return;

        const totalQ = test.questions.length;
        let correctCount = 0;

        test.questions.forEach((q, idx) => {
            if (this.currentTestAnswers[idx] === q.a) {
                correctCount++;
            }
        });

        const percent = Math.round((correctCount / totalQ) * 100);
        const passedMin = test.minScorePercent || 80;
        const isPassed = percent >= passedMin;

        let starReward = 0;
        let isMock = this.currentTestType === 'mock';

        if (isMock) {
            // User requirement: Mock testda 90% ishlagan insonga 30 yulduz berish kerak!
            if (percent >= 90) {
                starReward = 30;
                if (!this.progress.mockTestsDone[test.id]) {
                    this.progress.mockTestsDone[test.id] = true;
                    this.saveProgress();
                    App.addStars(starReward);
                }
            }
        } else {
            // Level test: 10 ta darsdan keyin test o'tilsa +20 yulduz
            if (isPassed) {
                starReward = test.starsReward || 20;
                if (!this.progress.passedLevelTests[test.id]) {
                    this.progress.passedLevelTests[test.id] = true;
                    this.saveProgress();
                    App.addStars(starReward);
                }
            }
        }

        this.renderTestResultModal(correctCount, totalQ, percent, isPassed, starReward, isMock);
    },

    renderTestResultModal(correct, total, percent, isPassed, starsEarned, isMock) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'test-result-popup-modal';

        let badgeTitle = '';
        let badgeColor = '';
        let message = '';

        if (isMock) {
            if (percent >= 90) {
                badgeTitle = '🌟 AQLBOVAR QILMAS NATIJA! (90%+)';
                badgeColor = '#10b981';
                message = `Tabriklaymiz! Siz Mock Testni ${percent}% natija bilan a'lo darajada topshirdingiz va <strong>+30 ⭐ Yulduz</strong> mukofotini qo'lga kiritdingiz!`;
            } else {
                badgeTitle = 'Deyarli erishildi!';
                badgeColor = '#f59e0b';
                message = `Sizning natijangiz: <strong>${percent}%</strong> (${correct}/${total}). 30 yulduz mukofotini olish uchun kamida 90% to'plashingiz kerak. Yana bir bor mashq qilib ko'ring!`;
            }
        } else {
            if (isPassed) {
                badgeTitle = '🎉 TABRIKLAYMIZ! DARAJA IMTIHONI TOPSHIRILDI!';
                badgeColor = '#10b981';
                message = `Siz 10 ta darslik bo'yicha imtihonni <strong>${percent}%</strong> natija bilan muvaffaqiyatli yakunladingiz va <strong>+${starsEarned} ⭐ Yulduz</strong> oldingiz!`;
            } else {
                badgeTitle = 'Imtihondan o\'tolmadingiz';
                badgeColor = '#ef4444';
                message = `Natija: <strong>${percent}%</strong>. O'tish balli: 80%. Darslarni qayta ko'rib chiqib, yana bir bor sinab ko'ring.`;
            }
        }

        modal.innerHTML = `
            <div class="modal-card" style="max-width: 500px; text-align: center;">
                <div style="font-size: 52px; margin-bottom: 12px;">${percent >= 90 ? '🏆' : isPassed ? '🎯' : '📚'}</div>
                <h3 style="font-size: 20px; font-weight: 900; color: ${badgeColor}; margin-bottom: 8px;">${badgeTitle}</h3>
                <p style="font-size: 15px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6;">${message}</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
                    <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-card);">
                        <div style="font-size: 12px; color: var(--text-muted);">To'g'ri javoblar</div>
                        <div style="font-size: 22px; font-weight: 900; color: var(--primary);">${correct} / ${total}</div>
                    </div>
                    <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-card);">
                        <div style="font-size: 12px; color: var(--text-muted);">Umumiy Foiz</div>
                        <div style="font-size: 22px; font-weight: 900; color: ${percent >= 90 ? '#10b981' : 'var(--text-primary)'};">${percent}%</div>
                    </div>
                </div>

                ${starsEarned > 0 ? `
                    <div style="background: var(--gold-subtle); border: 1px solid var(--gold-border); color: #b45309; font-weight: 800; padding: 12px; border-radius: var(--radius-md); margin-bottom: 20px;">
                        +${starsEarned} ⭐ Yulduz hisobingizga qo'shildi!
                    </div>
                ` : ''}

                <div style="display: flex; gap: 12px;">
                    <button class="btn btn-secondary w-full" onclick="document.getElementById('test-result-popup-modal').remove(); LessonsApp.goToStep('lessons');">
                        Darslarga qaytish 📚
                    </button>
                    <button class="btn btn-primary w-full" onclick="document.getElementById('test-result-popup-modal').remove(); ${isMock ? `LessonsApp.startMockTest('${this.selectedLang}', '${test.id}')` : `LessonsApp.startLevelTest('${this.selectedLang}', '${this.selectedLevel}')`};">
                        Qaytadan topshirish 🔄
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    },

    getLangInfo(langId) {
        const uiLang = (window.SpeakProI18n && SpeakProI18n.currentLang) || 'uz';
        const meta = {
            en: {
                uz: { name: 'Ingliz tili', badge: 'Global Muloqot №1', desc: 'Dunyodagi eng ommabop til. IT sohasi, xalqaro biznes, chet el sayohati va oliy ta\'lim kaliti.' },
                ru: { name: 'Английский язык', badge: 'Глобальное общение №1', desc: 'Самый популярный язык в мире. IT-сфера, международный бизнес, путешествия и высшее образование.' },
                en: { name: 'English', badge: 'Global Communication #1', desc: 'The world\'s most popular language. Essential for IT, global business, travel, and higher education.' }
            },
            ru: {
                uz: { name: 'Rus tili', badge: 'Muloqot va Biznes', desc: 'MDH davlatlari va xalqaro aloqalar asosi. Rus adabiyoti, biznes muloqot va TRKI sertifikati.' },
                ru: { name: 'Русский язык', badge: 'Общение и Бизнес', desc: 'Основа общения в странах СНГ и международных связей. Русская литература, деловая речь и сертификат ТРКИ.' },
                en: { name: 'Russian', badge: 'Communication & Business', desc: 'Key language across Eurasia. Russian literature, business communication, and TRKI certification.' }
            },
            de: {
                uz: { name: 'Nemis tili', badge: 'Germaniya va Ta\'lim', desc: 'Yevropaning iqtisodiy qudrati. Germaniyada bepul ta\'lim, tibbiyot, muhandislik va Goethe sertifikati.' },
                ru: { name: 'Немецкий язык', badge: 'Германия и Образование', desc: 'Экономический лидер Европы. Бесплатное образование в Германии, медицина, инженерия и сертификат Goethe.' },
                en: { name: 'German', badge: 'Germany & Education', desc: 'Europe\'s economic powerhouse. Free university education in Germany, medicine, engineering, and Goethe certificate.' }
            }
        };
        const langObj = SpeakProCurriculum.languages[langId] || {};
        const trans = (meta[langId] && meta[langId][uiLang]) || (meta[langId] && meta[langId]['uz']) || {};
        return {
            ...langObj,
            name: trans.name || langObj.name,
            badge: trans.badge || langObj.badge,
            desc: trans.desc || langObj.desc
        };
    },

    getLevelInfo(langId, levelCode) {
        const uiLang = (window.SpeakProI18n && SpeakProI18n.currentLang) || 'uz';
        const levelNames = {
            A1: {
                uz: { name: 'Boshlang\'ich (Beginner)', badge: '🌱 1-Bosqich', desc: 'Alifbo, salomlashish, tanishuv va ilk sodda jumlalar.' },
                ru: { name: 'Начальный (Beginner)', badge: '🌱 1-й Уровень', desc: 'Алфавит, приветствие, знакомство и первые простые предложения.' },
                en: { name: 'Beginner (A1)', badge: '🌱 Level 1', desc: 'Alphabet, greetings, introductions, and essential basic phrases.' }
            },
            A2: {
                uz: { name: 'Elementar (Elementary)', badge: '🌿 2-Bosqich', desc: 'Kundalik muloqot, xaridlar, do\'kon va transport.' },
                ru: { name: 'Базовый (Elementary)', badge: '🌿 2-й Уровень', desc: 'Повседневное общение, покупки, магазин и транспорт.' },
                en: { name: 'Elementary (A2)', badge: '🌿 Level 2', desc: 'Daily communication, shopping, city, and local transport.' }
            },
            B1: {
                uz: { name: 'O\'rta (Intermediate)', badge: '🌳 3-Bosqich', desc: 'Erkin fikr bildirish, suhbatlar va grammatika.' },
                ru: { name: 'Средний (Intermediate)', badge: '🌳 3-й Уровень', desc: 'Свободное выражение мыслей, живые беседы и грамматика.' },
                en: { name: 'Intermediate (B1)', badge: '🌳 Level 3', desc: 'Expressing opinions fluently, dialogues, and functional grammar.' }
            },
            B2: {
                uz: { name: 'Yuqori O\'rta (Upper-Int)', badge: '🌲 4-Bosqich', desc: 'Murakkab mavzular, taqdimotlar va munozaralar.' },
                ru: { name: 'Выше среднего (Upper-Int)', badge: '🌲 4-й Уровень', desc: 'Сложные темы, презентации и открытые дискуссии.' },
                en: { name: 'Upper-Intermediate (B2)', badge: '🌲 Level 4', desc: 'Complex topics, formal presentations, and critical debates.' }
            },
            C1: {
                uz: { name: 'Ilg\'or (Advanced)', badge: '🚀 5-Bosqich', desc: 'Professional daraja, xalqaro biznes va ilmiy tahlil.' },
                ru: { name: 'Продвинутый (Advanced)', badge: '🚀 5-й Уровень', desc: 'Профессиональный уровень, международный бизнес и анализ.' },
                en: { name: 'Advanced (C1)', badge: '🚀 Level 5', desc: 'Professional fluency, international business, and academic discourse.' }
            }
        };
        const langObj = SpeakProCurriculum.languages[langId] || {};
        const lvl = (langObj.levels && langObj.levels.find(l => l.code === levelCode)) || { code: levelCode };
        const trans = (levelNames[levelCode] && levelNames[levelCode][uiLang]) || (levelNames[levelCode] && levelNames[levelCode]['uz']) || {};
        return {
            ...lvl,
            name: trans.name || lvl.name,
            badge: trans.badge || lvl.badge,
            desc: trans.desc || lvl.desc
        };
    },

    getLessonTitle(lesson) {
        const uiLang = (window.SpeakProI18n && SpeakProI18n.currentLang) || 'uz';
        if (uiLang === 'uz') return lesson.title;
        const titles = {
            1: { en: 'Lesson 1: Greetings & Introductions', ru: 'Урок 1: Знакомство и приветствие' },
            2: { en: 'Lesson 2: Numbers & Counting', ru: 'Урок 2: Числа и счет' },
            3: { en: 'Lesson 3: Family & Relatives', ru: 'Урок 3: Семья и родные' },
            4: { en: 'Lesson 4: Food & Restaurant Ordering', ru: 'Урок 4: Еда и заказ в ресторане' },
            5: { en: 'Lesson 5: Colors & Clothes Shopping', ru: 'Урок 5: Цвета и покупка одежды' },
            6: { en: 'Lesson 6: House & Living Rooms', ru: 'Урок 6: Дом и комнаты' },
            7: { en: 'Lesson 7: Professions & Career', ru: 'Урок 7: Профессии и работа' },
            8: { en: 'Lesson 8: Time & Daily Routine', ru: 'Урок 8: Время и распорядок дня' },
            9: { en: 'Lesson 9: Weather & Seasons', ru: 'Урок 9: Погода и времена года' },
            10: { en: 'Lesson 10: Travel & Airport Check-in', ru: 'Урок 10: Аэропорт и путешествия' }
        };
        return (titles[lesson.num] && titles[lesson.num][uiLang]) || lesson.title;
    },

    getLessonDesc(lesson) {
        const uiLang = (window.SpeakProI18n && SpeakProI18n.currentLang) || 'uz';
        if (uiLang === 'uz') return lesson.desc;
        const descs = {
            1: { en: 'Formal and informal greetings, meeting people and polite introductions.', ru: 'Приветствия, формы вежливости, знакомство и первые фразы.' },
            2: { en: 'Numbers from 0 to 100, stating age and pronouncing phone numbers.', ru: 'Числа от 0 до 100, возраст, цены и телефонные номера.' },
            3: { en: 'Naming family members, parents, siblings and home relations.', ru: 'Члены семьи, родители, братья, сёстры и описание дома.' },
            4: { en: 'Ordering food, polite phrases in cafes, meals, and requesting the bill.', ru: 'Заказ блюд, напитки, фразы в кафе и ресторанах, счет.' },
            5: { en: 'Describing colors, clothing items, sizing, and payment in stores.', ru: 'Цвета, одежда, примерка в магазине и способы оплаты.' },
            6: { en: 'Apartment and rooms, furniture, and location prepositions.', ru: 'Квартира, комнаты, мебель и описание интерьера.' },
            7: { en: 'Talking about jobs, careers, and answering "What do you do?".', ru: 'Профессии, место работы и разговор о специальности.' },
            8: { en: 'Telling time, morning and evening schedule, and days of the week.', ru: 'Который час, распорядок дня и дни недели.' },
            9: { en: 'Talking about sunny, rainy weather, seasons, and temperature.', ru: 'Погода, времена года, температура и природные явления.' },
            10: { en: 'Airport check-in, asking directions, passport, and boarding pass.', ru: 'Аэропорт, посадочный талон, паспортный контроль и путешествия.' }
        };
        return (descs[lesson.num] && descs[lesson.num][uiLang]) || lesson.desc;
    },

    t(key) {
        const lang = (window.SpeakProI18n && SpeakProI18n.currentLang) || 'uz';
        const dict = {
            uz: {
                step1_badge: "Darsliklar va Kurslar",
                step1_title: "🌐 Qaysi tilni o'rganmoqchisiz?",
                step1_sub: "O'zingizga kerakli tilni tanlang va o'z darajangiz bo'yicha 1-darsdan 10-darsgacha bosqichma-bosqich o'rganing!",
                btn_choose_lang: "Darslarni tanlash va boshlash 🚀",
                meta_levels: "ta daraja (A1-C1)",
                meta_videos: "ta video darslik",
                per_lesson_stars: "Har dars uchun +10",
                back_to_langs: "← Barcha tillarga qaytish",
                back_to_levels: "← Darajalarga qaytish",
                back_to_lessons: "← Darslar ro'yxatiga qaytish",
                step2_title: "🎯 O'z bilim darajangizni tanlang",
                step2_sub: "Har bir darajada 1 dan 10 gacha video darsliklar, jonli dialoglar, yangi lug'atlar va yakuniy test mavjud!",
                btn_enter_level: "Darajaga kirish 📖",
                btn_start_lesson: "Darsni boshlash ▶",
                btn_repeat_lesson: "Takrorlash 📖",
                level_hero_title: "Barcha Darsliklar Katalogi",
                level_hero_desc: "Har bir videoni to'liq ko'rganingiz uchun <strong>10 ta yulduz (+10 ⭐)</strong> taqdim etiladi! Dialog va lug'atlarni o'rganing.",
                level_progress_label: "Daraja progressi:",
                lessons_watched_label: "Dars ko'rildi",
                badge_dialog: "💬 Jonli Dialog",
                badge_vocab: "ta so'z va ibora",
                badge_quiz: "🧠 Lug'at viktorinasi",
                status_completed: "✅ Ko'rilgan (+10⭐)",
                status_new: "📹 Video darslik",
                tab_video: "📹 Video Darslik",
                tab_dialog: "💬 Jonli Dialoglar",
                tab_vocab: "📖 Lug'at & Flashcard",
                tab_quiz: "🧠 Lug'at So'rash (Viktorina)",
                video_watch_btn: "▶️ Videoni ko'rishni boshlash",
                video_pause_btn: "⏸️ To'xtatish",
                video_done_btn: "Dars videosini to'liq ko'rdim (+10 ⭐)",
                audio_listen: "🔊 Ovoz",
                flip_hint: "👆 Bosib tarjimasini ko'ring",
                dialog_header_title: "💬 Jonli Muloqot va Dialog",
                dialog_header_sub: "Har bir gapni diqqat bilan o'qing, tarjimasini ko'ring va <strong>🔊 Ovoz</strong> tugmasi orqali to'g'ri chet tili talaffuzini eshiting!",
                vocab_header_title: "📖 Darsdagi Yangi So'zlar va Flashcardlar",
                vocab_header_sub: "Kartochkani ustiga bosing — u aylanadi va o'zbekcha tarjimasi hamda misol jumla chiqadi! 🔊 tugmasi orqali talaffuzni tinglang.",
                quiz_header_title: "🧠 Lug'at So'rash va Mustahkamlash",
                quiz_header_sub: "Ushbu darsda o'rgangan so'zlaringizni sinab ko'ring! To'g'ri variantni tanlang.",
                exam_badge: "Yakuniy Imtihon",
                exam_btn: "Imtihonni Boshlash ✍️",
                mock_tests_header: "🎯 Mock Testlar (90%+ to'plang va 30 ⭐ yuting!)",
                mock_tests_sub: "IELTS, SAT yoki milliy sertifikat imtihonlariga tayyorlaning. 90% yoki undan yuqori natija ko'rsatgan o'quvchiga <strong>30 ta yulduz (⭐)</strong> taqdim etiladi!",
                mock_btn: "Mock Testni Boshlash 🚀",
                submit_test: "Testni Yakunlash va Natijani Ko'rish 🚀"
            },
            ru: {
                step1_badge: "Уроки и Курсы",
                step1_title: "🌐 Какой язык вы хотите изучать?",
                step1_sub: "Выберите нужный язык и изучайте уроки с 1 по 10 шаг за шагом по своему уровню!",
                btn_choose_lang: "Выбрать уроки и начать 🚀",
                meta_levels: "уровней (A1-C1)",
                meta_videos: "видеоуроков",
                per_lesson_stars: "За каждый урок +10",
                back_to_langs: "← Назад ко всем языкам",
                back_to_levels: "← Назад к уровням",
                back_to_lessons: "← Назад к списку уроков",
                step2_title: "🎯 Выберите свой уровень знаний",
                step2_sub: "На каждом уровне есть 10 видеоуроков, диалоги, словари и итоговый тест!",
                btn_enter_level: "Войти на уровень 📖",
                btn_start_lesson: "Начать урок ▶",
                btn_repeat_lesson: "Повторить 📖",
                level_hero_title: "Каталог всех уроков",
                level_hero_desc: "За каждый полностью просмотренный видеоурок начисляется <strong>10 звёзд (+10 ⭐)</strong>! Изучайте диалоги и слова.",
                level_progress_label: "Прогресс уровня:",
                lessons_watched_label: "Уроков пройдено",
                badge_dialog: "💬 Живой диалог",
                badge_vocab: "слов и фраз",
                badge_quiz: "🧠 Викторина слов",
                status_completed: "✅ Пройдено (+10⭐)",
                status_new: "📹 Видеоурок",
                tab_video: "📹 Видеоурок",
                tab_dialog: "💬 Живые Диалоги",
                tab_vocab: "📖 Словарь и карточки",
                tab_quiz: "🧠 Викторина слов",
                video_watch_btn: "▶️ Начать просмотр видео",
                video_pause_btn: "⏸️ Пауза",
                video_done_btn: "Я просмотрел видео полностью (+10 ⭐)",
                audio_listen: "🔊 Слушать",
                flip_hint: "👆 Нажмите чтобы перевернуть",
                dialog_header_title: "💬 Живое Общение и Диалог",
                dialog_header_sub: "Внимательно читайте каждую фразу, смотрите перевод и слушайте произношение по кнопке <strong>🔊 Голос</strong>!",
                vocab_header_title: "📖 Новые Слова Урока и Карточки",
                vocab_header_sub: "Нажмите на карточку — она перевернётся и покажет перевод с примером! Слушайте произношение по кнопке 🔊.",
                quiz_header_title: "🧠 Проверка Слов и Закрепление",
                quiz_header_sub: "Проверьте слова, изученные в этом уроке! Выберите правильный вариант.",
                exam_badge: "Итоговый Экзамен",
                exam_btn: "Начать Экзамен ✍️",
                mock_tests_header: "🎯 Mock-тесты (наберите 90%+ и получите 30 ⭐!)",
                mock_tests_sub: "Готовьтесь к экзаменам IELTS, SAT или национальным сертификатам. Набравшим 90% и выше начисляется <strong>30 звёзд (⭐)</strong>!",
                mock_btn: "Начать Mock-тест 🚀",
                submit_test: "Завершить тест и увидеть результат 🚀"
            },
            en: {
                step1_badge: "Lessons & Courses",
                step1_title: "🌐 Which language do you want to learn?",
                step1_sub: "Choose your target language and progress through lessons 1 to 10 step-by-step according to your level!",
                btn_choose_lang: "Choose Lessons & Start 🚀",
                meta_levels: "levels (A1-C1)",
                meta_videos: "video lessons",
                per_lesson_stars: "Each lesson +10",
                back_to_langs: "← Back to all languages",
                back_to_levels: "← Back to levels",
                back_to_lessons: "← Back to lessons list",
                step2_title: "🎯 Select your proficiency level",
                step2_sub: "Each level contains 10 video lessons, live dialogues, vocabulary flashcards, and a final test!",
                btn_enter_level: "Enter Level 📖",
                btn_start_lesson: "Start Lesson ▶",
                btn_repeat_lesson: "Review Lesson 📖",
                level_hero_title: "All Lessons Catalog",
                level_hero_desc: "You earn <strong>10 stars (+10 ⭐)</strong> for each fully watched video lesson! Study dialogues and vocabulary.",
                level_progress_label: "Level progress:",
                lessons_watched_label: "Lessons completed",
                badge_dialog: "💬 Live Dialogue",
                badge_vocab: "words & phrases",
                badge_quiz: "🧠 Vocab Quiz",
                status_completed: "✅ Completed (+10⭐)",
                status_new: "📹 Video Lesson",
                tab_video: "📹 Video Lesson",
                tab_dialog: "💬 Live Dialogues",
                tab_vocab: "📖 Vocabulary & Flashcards",
                tab_quiz: "🧠 Vocabulary Quiz",
                video_watch_btn: "▶️ Start Watching Video",
                video_pause_btn: "⏸️ Pause",
                video_done_btn: "I watched the full lesson (+10 ⭐)",
                audio_listen: "🔊 Listen",
                flip_hint: "👆 Click to flip card",
                dialog_header_title: "💬 Live Conversation & Dialogue",
                dialog_header_sub: "Read each sentence carefully, check the translation, and listen to authentic pronunciation with the <strong>🔊 Voice</strong> button!",
                vocab_header_title: "📖 New Lesson Words & Flashcards",
                vocab_header_sub: "Click a card to flip and reveal the translation with an example sentence! Listen to audio via 🔊.",
                quiz_header_title: "🧠 Vocabulary Quiz & Practice",
                quiz_header_sub: "Test the words learned in this lesson! Choose the correct option.",
                exam_badge: "Final Examination",
                exam_btn: "Start Examination ✍️",
                mock_tests_header: "🎯 Mock Tests (Score 90%+ and win 30 ⭐!)",
                mock_tests_sub: "Prepare for IELTS, SAT, or national certificate exams. Students scoring 90% or higher are awarded <strong>30 stars (⭐)</strong>!",
                mock_btn: "Start Mock Test 🚀",
                submit_test: "Finish Test and View Results 🚀"
            }
        };
        const active = dict[lang] || dict['uz'];
        return active[key] || key;
    },

    // ======================================================================
    // MAIN RENDER ROUTER
    // ======================================================================
    render() {
        const root = document.getElementById('lessons-dynamic-root');
        if (!root) return;

        if (this.step === 'lang') {
            root.innerHTML = this.renderStepLanguages();
        } else if (this.step === 'level') {
            root.innerHTML = this.renderStepLevels();
        } else if (this.step === 'lessons') {
            root.innerHTML = this.renderStepLessons();
        } else if (this.step === 'detail') {
            root.innerHTML = this.renderStepDetail();
        } else if (this.step === 'test') {
            root.innerHTML = this.renderStepTest();
        } else if (this.step === 'dialogs') {
            root.innerHTML = this.renderStepDialogs();
        } else if (this.step === 'idioms') {
            root.innerHTML = this.renderStepIdioms();
        } else if (this.step === 'vocabulary') {
            root.innerHTML = this.renderStepVocabulary();
        }
    },

    // ----------------------------------------------------------------------
    // STEP 1: Select Language & Knowledge Hubs
    // ----------------------------------------------------------------------
    renderStepLanguages() {
        const langs = SpeakProCurriculum.languages;

        return `
            <div class="lessons-container">
                <!-- 1. ASOSIY BOSQICHMA-BOSQICH DARSLAR (1 DAN 10 GACHA) -->
                <div class="section-header">
                    <span class="section-badge-pill">${this.t('step1_badge')}</span>
                    <h2 class="section-title">${this.t('step1_title')}</h2>
                    <p class="section-subtitle">${this.t('step1_sub')}</p>
                </div>

                <div class="lessons-lang-grid">
                    ${Object.values(langs).map(lang => {
                        const info = this.getLangInfo(lang.id);
                        return `
                            <div class="lessons-lang-card" onclick="LessonsApp.selectLanguage('${lang.id}')" style="--accent-gradient: ${lang.gradient};">
                                <div class="lang-card-banner" style="background: ${lang.gradient};">
                                    <span class="lang-flag-hero">${lang.flag}</span>
                                    <span class="lang-badge-tag">${info.badge}</span>
                                </div>
                                <div class="lang-card-body">
                                    <h3 class="lang-card-title">${info.name}</h3>
                                    <p class="lang-card-native">${lang.nativeName}</p>
                                    <p class="lang-card-desc">${info.desc}</p>
                                    <div class="lang-card-meta">
                                        <span>🎯 ${lang.levels.length} ${this.t('meta_levels')}</span>
                                        <span>📹 10 ${this.t('meta_videos')}</span>
                                    </div>
                                    <button class="btn btn-primary w-full mt-3">
                                        ${this.t('btn_choose_lang')}
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- 2. JONLI VA AMALIY DIALOGLAR (3 TA KARTA) -->
                <div class="section-header" style="margin-top: 56px;">
                    <span class="section-badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #059669; border-color: rgba(16, 185, 129, 0.3);">
                        💬 Jonli Muloqot & Nutqiy Ko'nikma
                    </span>
                    <h2 class="section-title">🗣️ Amaliy Hayotiy Dialoglar To'plami</h2>
                    <p class="section-subtitle">Aeroport, mehmonxona, restoran, ish suhbati, shifokor va kundalik muloqotda eng ko'p kerak bo'ladigan audio dialoglar!</p>
                </div>

                <div class="lessons-lang-grid">
                    <!-- Dialog Karta 1: Ingliz tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openDialogs('en')" style="--accent-gradient: linear-gradient(135deg, #10b981, #059669);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #10b981, #059669);">
                            <span class="lang-flag-hero">🇬🇧</span>
                            <span class="feature-hub-badge">💬 10+ Hayotiy Vaziyat</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Ingliz Tili Dialoglari</h3>
                            <p class="lang-card-native">Everyday English Conversations</p>
                            <p class="hub-card-desc">Aeroportda ro'yxatdan o'tish, ish intervyusi, restoranda taom tanlash, shifokor qabuli va xaridlar bo'yicha jonli suhbatlar.</p>
                            <div class="hub-card-meta">
                                <span>🎧 Ovozli Talaffuz (Audio)</span>
                                <span>🗣️ A & B Rollari</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #10b981, #059669); border: none;">
                                Dialoglarni Tinglash & O'rganish 💬
                            </button>
                        </div>
                    </div>

                    <!-- Dialog Karta 2: Rus tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openDialogs('ru')" style="--accent-gradient: linear-gradient(135deg, #0ea5e9, #0284c7);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #0ea5e9, #0284c7);">
                            <span class="lang-flag-hero">🇷🇺</span>
                            <span class="feature-hub-badge">💬 10+ Hayotiy Vaziyat</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Rus Tili Dialoglari</h3>
                            <p class="lang-card-native">Практические диалоги на русском</p>
                            <p class="hub-card-desc">Mehmonxonaga joylashish, shifokor ko'rigi, poyezd vokzalida chipta olish va biznes hamkorlar bilan erkin muzokara dialoglari.</p>
                            <div class="hub-card-meta">
                                <span>🎧 Ovozli Talaffuz (Audio)</span>
                                <span>🗣️ A & B Rollari</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #0ea5e9, #0284c7); border: none;">
                                Dialoglarni Tinglash & O'rganish 💬
                            </button>
                        </div>
                    </div>

                    <!-- Dialog Karta 3: Nemis tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openDialogs('de')" style="--accent-gradient: linear-gradient(135deg, #f59e0b, #d97706);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
                            <span class="lang-flag-hero">🇩🇪</span>
                            <span class="feature-hub-badge">💬 10+ Hayotiy Vaziyat</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Nemis Tili Dialoglari</h3>
                            <p class="lang-card-native">Alltagsdialoge auf Deutsch</p>
                            <p class="hub-card-desc">Frankfurt aeroporti, Vena restorani, Berlin shahri bo'ylab yo'l topish va Germaniyada ishga kirish suhbati (Vorstellungsgespräch).</p>
                            <div class="hub-card-meta">
                                <span>🎧 Ovozli Talaffuz (Audio)</span>
                                <span>🗣️ A & B Rollari</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #f59e0b, #d97706); border: none;">
                                Dialoglarni Tinglash & O'rganish 💬
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 3. A1 DAN C1 GACHA IDIOMALAR VA IBORALAR (3 TA KARTA - 100+ TA) -->
                <div class="section-header" style="margin-top: 56px;">
                    <span class="section-badge-pill" style="background: rgba(245, 158, 11, 0.15); color: #d97706; border-color: rgba(245, 158, 11, 0.3);">
                        🧠 A1 — C1 Boy So'zlashuv San'ati
                    </span>
                    <h2 class="section-title">⚡ Mashhur Idiomalar & Qanotli Iboralar (100+ ta)</h2>
                    <p class="section-subtitle">A1 dan C1 gacha eng kerakli, boy ma'noli iboralar, maqollar va jonli misollar orqali nutqingizni boyiting!</p>
                </div>

                <div class="lessons-lang-grid">
                    <!-- Idioma Karta 1: Ingliz tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openIdioms('en')" style="--accent-gradient: linear-gradient(135deg, #f59e0b, #b45309);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #f59e0b, #b45309);">
                            <span class="lang-flag-hero">🇬🇧</span>
                            <span class="feature-hub-badge">🧠 105+ Saralangan Idioma</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Ingliz Tili Idiomalari</h3>
                            <p class="lang-card-native">Essential English Idioms & Phrases</p>
                            <p class="hub-card-desc">Piece of cake, Break a leg, Bite the bullet, Elephant in the room kabi A1 dan C1 gacha eng kerakli 105+ ta iboralar to'plami.</p>
                            <div class="hub-card-meta">
                                <span>⚡ A1 dan C1 gacha darajalar</span>
                                <span>🎯 Jonli Misollar & Audio</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #f59e0b, #b45309); border: none;">
                                Idiomalarni O'rganish 🧠
                            </button>
                        </div>
                    </div>

                    <!-- Idioma Karta 2: Rus tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openIdioms('ru')" style="--accent-gradient: linear-gradient(135deg, #ec4899, #be185d);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #ec4899, #be185d);">
                            <span class="lang-flag-hero">🇷🇺</span>
                            <span class="feature-hub-badge">🧠 105+ Mashhur Ibora</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Rus Tili Frazeologizmlari</h3>
                            <p class="lang-card-native">Русские фразеологизмы и крылатые фразы</p>
                            <p class="hub-card-desc">Как свои пять пальцев, Вешать лапшу на уши, Бить баклуши, Сесть в калошу kabi 105+ ta ifodali frazeologizm va qanotli so'zlar.</p>
                            <div class="hub-card-meta">
                                <span>⚡ A1 dan C1 gacha darajalar</span>
                                <span>🎯 Jonli Misollar & Audio</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #ec4899, #be185d); border: none;">
                                Idiomalarni O'rganish 🧠
                            </button>
                        </div>
                    </div>

                    <!-- Idioma Karta 3: Nemis tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openIdioms('de')" style="--accent-gradient: linear-gradient(135deg, #8b5cf6, #6d28d9);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">
                            <span class="lang-flag-hero">🇩🇪</span>
                            <span class="feature-hub-badge">🧠 105+ Jonli Ibora</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Nemis Tili Redewendungen</h3>
                            <p class="lang-card-native">Deutsche Redewendungen & Sprichwörter</p>
                            <p class="hub-card-desc">Ich verstehe nur Bahnhof, Die Daumen drücken, Zwei Fliegen mit einer Klappe, Tacheles reden kabi 105+ ta nemischa ibora.</p>
                            <div class="hub-card-meta">
                                <span>⚡ A1 dan C1 gacha darajalar</span>
                                <span>🎯 Jonli Misollar & Audio</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9); border: none;">
                                Idiomalarni O'rganish 🧠
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 4. A1 DAN C1 GACHA TO'LIQ KATTA LUG'AT ENSIKLOPEDIYASI (3 TA KARTA - 10,000+ SO'Z) -->
                <div class="section-header" style="margin-top: 56px;">
                    <span class="section-badge-pill" style="background: rgba(99, 102, 241, 0.15); color: #4f46e5; border-color: rgba(99, 102, 241, 0.3);">
                        📚 Katta Akademik Lug'at Bazasi
                    </span>
                    <h2 class="section-title">📖 A1 — C1 Katta Lug'atlar Ensiklopediyasi (10,000+ so'z)</h2>
                    <p class="section-subtitle">Transkripsiya, talaffuz, so'z turkumlari, ma'nolari va jonli misollar bilan boyitilgan 10,000+ so'zlik ulkan lug'at maydoni!</p>
                </div>

                <div class="lessons-lang-grid">
                    <!-- Lug'at Karta 1: Ingliz tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openVocabulary('en')" style="--accent-gradient: linear-gradient(135deg, #6366f1, #3730a3);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #6366f1, #3730a3);">
                            <span class="lang-flag-hero">🇬🇧</span>
                            <span class="feature-hub-badge">📚 10,000+ So'zlar Bazasi</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Inglizcha Katta Lug'at</h3>
                            <p class="lang-card-native">Comprehensive English Dictionary (A1-C1)</p>
                            <p class="hub-card-desc">Barcha darajalar bo'yicha saralangan 10,000+ so'z. Fonetik transkripsiya, o'zbekcha va ruscha tarjimalar, audio talaffuz va namunaviy gaplar.</p>
                            <div class="hub-card-meta">
                                <span>📚 10,000+ So'z (A1-C1)</span>
                                <span>🔍 Qidiruv & Tezkor Filtr</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #6366f1, #3730a3); border: none;" onclick="event.stopPropagation(); LessonsApp.openVocabulary('en')">
                                Katta Lug'atni Ochish 📚
                            </button>
                        </div>
                    </div>

                    <!-- Lug'at Karta 2: Rus tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openVocabulary('ru')" style="--accent-gradient: linear-gradient(135deg, #06b6d4, #0e7490);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #06b6d4, #0e7490);">
                            <span class="lang-flag-hero">🇷🇺</span>
                            <span class="feature-hub-badge">📚 10,000+ So'zlar Bazasi</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Ruscha Katta Lug'at</h3>
                            <p class="lang-card-native">Большой академический словарь (A1-C1)</p>
                            <p class="hub-card-desc">A1 dan C1 gacha to'liq qamrovli 10,000+ ruscha so'zlar zaxirasi. Urg'ular, transkripsiya, aniq o'zbekcha tarjima va amaliy misollar.</p>
                            <div class="hub-card-meta">
                                <span>📚 10,000+ So'z (A1-C1)</span>
                                <span>🔍 Qidiruv & Tezkor Filtr</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #06b6d4, #0e7490); border: none;" onclick="event.stopPropagation(); LessonsApp.openVocabulary('ru')">
                                Katta Lug'atni Ochish 📚
                            </button>
                        </div>
                    </div>

                    <!-- Lug'at Karta 3: Nemis tili -->
                    <div class="lessons-lang-card" onclick="LessonsApp.openVocabulary('de')" style="--accent-gradient: linear-gradient(135deg, #10b981, #047857);">
                        <div class="lang-card-banner" style="background: linear-gradient(135deg, #10b981, #047857);">
                            <span class="lang-flag-hero">🇩🇪</span>
                            <span class="feature-hub-badge">📚 10,000+ So'zlar Bazasi</span>
                        </div>
                        <div class="hub-card-body">
                            <h3 class="hub-card-title">Nemischa Katta Lug'at</h3>
                            <p class="lang-card-native">Großes Deutsches Wörterbuch (A1-C1)</p>
                            <p class="hub-card-desc">Goethe va TestDaF talablariga mos, A1 dan C1 gacha 10,000+ nemischa so'z. Artikllar (der/die/das), transkripsiya, talaffuz va jumlalar.</p>
                            <div class="hub-card-meta">
                                <span>📚 10,000+ So'z (A1-C1)</span>
                                <span>🔍 Qidiruv & Tezkor Filtr</span>
                            </div>
                            <button class="btn btn-primary w-full" style="background: linear-gradient(135deg, #10b981, #047857); border: none;" onclick="event.stopPropagation(); LessonsApp.openVocabulary('de')">
                                Katta Lug'atni Ochish 📚
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // ----------------------------------------------------------------------
    // STEP 2: Select Level & Mock Tests
    // ----------------------------------------------------------------------
    renderStepLevels() {
        const langObj = SpeakProCurriculum.languages[this.selectedLang];
        if (!langObj) return '';
        const langInfo = this.getLangInfo(this.selectedLang);

        return `
            <div class="lessons-container">
                <div class="lessons-nav-bar">
                    <button class="btn-back-crumb" onclick="LessonsApp.goToStep('lang')">
                        ${this.t('back_to_langs')}
                    </button>
                    <div class="crumb-current">
                        <span style="font-size: 20px;">${langInfo.flag}</span>
                        <strong>${langInfo.name}</strong>
                    </div>
                </div>

                <div class="section-header">
                    <span class="section-badge-pill">${langInfo.name}</span>
                    <h2 class="section-title">${this.t('step2_title')}</h2>
                    <p class="section-subtitle">${this.t('step2_sub')}</p>
                </div>

                <div class="lessons-level-grid">
                    ${langObj.levels.map(level => {
                        const hasCurriculum = langObj.curriculum && langObj.curriculum[level.code];
                        const lvlInfo = this.getLevelInfo(this.selectedLang, level.code);
                        return `
                            <div class="level-card ${hasCurriculum ? 'available' : 'coming-soon'}" onclick="${hasCurriculum ? `LessonsApp.selectLevel('${level.code}')` : `App.showToast('Ushbu daraja darslari tez orada ochiladi!', 'info')`}">
                                <div class="level-badge">${lvlInfo.badge}</div>
                                <h3 class="level-code">${level.code}</h3>
                                <h4 class="level-name">${lvlInfo.name}</h4>
                                <p class="level-desc">${lvlInfo.desc}</p>
                                <div class="level-footer">
                                    <span>📹 10 ${this.t('meta_videos')}</span>
                                    <span>⭐ ${this.t('per_lesson_stars')}</span>
                                </div>
                                <button class="btn ${hasCurriculum ? 'btn-outline-primary' : 'btn-secondary'} w-full mt-3">
                                    ${hasCurriculum ? this.t('btn_enter_level') : 'Tez kunda 🔒'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- MOCK TESTLAR BO'LIMI -->
                ${langObj.mockTests && langObj.mockTests.length > 0 ? `
                    <div class="mock-tests-section mt-5">
                        <div class="section-header" style="margin-top: 48px;">
                            <span class="section-badge-pill" style="background: var(--gold-subtle); color: #b45309; border-color: var(--gold-border);">
                                🏆 Xalqaro Imtihonlar & Mukofotlar
                            </span>
                            <h2 class="section-title">${this.t('mock_tests_header')}</h2>
                            <p class="section-subtitle">${this.t('mock_tests_sub')}</p>
                        </div>

                        <div class="mock-cards-grid">
                            ${langObj.mockTests.map(mock => {
                                const isDone = this.progress.mockTestsDone[mock.id];
                                return `
                                    <div class="mock-card">
                                        <div class="mock-header">
                                            <span class="mock-badge">${mock.badge}</span>
                                            <span class="mock-reward-pill">⭐ +30 Yulduz</span>
                                        </div>
                                        <h3 class="mock-title">${mock.title}</h3>
                                        <p class="mock-desc">${mock.desc}</p>
                                        <div class="mock-meta">
                                            <span>⏱️ ${mock.duration}</span>
                                            <span>📝 ${mock.questions.length} ta savol</span>
                                            <span>🎯 Talab: 90%+</span>
                                        </div>
                                        <div style="margin-top: 16px;">
                                            <button class="btn btn-gold w-full" onclick="LessonsApp.startMockTest('${langObj.id}', '${mock.id}')">
                                                ${isDone ? 'Qayta topshirish 🔄' : this.t('mock_btn')}
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    },

    // ----------------------------------------------------------------------
    // STEP 3: Lessons List (1 to 10)
    // ----------------------------------------------------------------------
    renderStepLessons() {
        const langObj = SpeakProCurriculum.languages[this.selectedLang];
        const langInfo = this.getLangInfo(this.selectedLang);
        const lessons = (langObj.curriculum && langObj.curriculum[this.selectedLevel]) || [];
        const levelTest = langObj.levelTests && langObj.levelTests[this.selectedLevel];

        // Calculate completed count
        let completedVideos = 0;
        lessons.forEach(l => {
            if (this.progress.watchedVideos[l.id]) completedVideos++;
        });

        return `
            <div class="lessons-container">
                <div class="lessons-nav-bar">
                    <button class="btn-back-crumb" onclick="LessonsApp.goToStep('level')">
                        ${this.t('back_to_levels')}
                    </button>
                    <div class="crumb-current">
                        <span>${langInfo.flag} ${langInfo.name}</span>
                        <span style="opacity: 0.5;">/</span>
                        <strong>${this.selectedLevel} (${this.t('meta_videos')})</strong>
                    </div>
                </div>

                <div class="lessons-level-hero">
                    <div>
                        <h2>📚 ${this.selectedLevel} — ${this.t('level_hero_title')}</h2>
                        <p>${this.t('level_hero_desc')}</p>
                    </div>
                    <div class="lessons-progress-badge">
                        <div style="font-size: 13px; color: var(--text-muted);">${this.t('level_progress_label')}</div>
                        <div style="font-size: 20px; font-weight: 900; color: var(--primary);">
                            ${completedVideos} / ${lessons.length} ${this.t('lessons_watched_label')}
                        </div>
                    </div>
                </div>

                <div class="lessons-grid-list">
                    ${lessons.map(lesson => {
                        const isWatched = this.progress.watchedVideos[lesson.id];
                        const title = this.getLessonTitle(lesson);
                        const desc = this.getLessonDesc(lesson);
                        return `
                            <div class="lesson-row-card ${isWatched ? 'watched' : ''}" onclick="LessonsApp.openLesson('${lesson.id}')">
                                <div class="lesson-num-box">
                                    <span class="num-digit">${lesson.num}</span>
                                    <span class="num-label">Dars</span>
                                </div>
                                <div class="lesson-info-box">
                                    <div class="lesson-title-row">
                                        <h4 class="lesson-main-title">${title}</h4>
                                        ${isWatched ? `<span class="status-tag completed">${this.t('status_completed')}</span>` : `<span class="status-tag new">${this.t('status_new')}</span>`}
                                    </div>
                                    <p class="lesson-short-desc">${desc}</p>
                                    <div class="lesson-badges-row">
                                        <span>${this.t('badge_dialog')}</span>
                                        <span>📖 ${lesson.vocab ? lesson.vocab.length : 8} ${this.t('badge_vocab')}</span>
                                        <span>${this.t('badge_quiz')}</span>
                                        <span style="color: var(--gold); font-weight: 700;">+10 ⭐</span>
                                    </div>
                                </div>
                                <div class="lesson-action-box">
                                    <button class="btn ${isWatched ? 'btn-outline-primary' : 'btn-primary'} btn-sm">
                                        ${isWatched ? this.t('btn_repeat_lesson') : this.t('btn_start_lesson')}
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- 10 TA DARSDAN KEYIN TEST -->
                ${levelTest ? `
                    <div class="level-exam-banner mt-5">
                        <div class="exam-icon-large">📝</div>
                        <div class="exam-info">
                            <span class="badge-tag">${this.t('exam_badge')}</span>
                            <h3>${levelTest.title}</h3>
                            <p>${levelTest.desc}</p>
                        </div>
                        <div class="exam-action">
                            <button class="btn btn-gold btn-lg" onclick="LessonsApp.startLevelTest('${this.selectedLang}', '${this.selectedLevel}')">
                                ${this.t('exam_btn')}
                            </button>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    },

    // ----------------------------------------------------------------------
    // STEP 4: Lesson Detail (Video, Dialog, Vocab, Quiz)
    // ----------------------------------------------------------------------
    renderStepDetail() {
        const langObj = SpeakProCurriculum.languages[this.selectedLang];
        const langInfo = this.getLangInfo(this.selectedLang);
        const lessons = (langObj.curriculum && langObj.curriculum[this.selectedLevel]) || [];
        const lesson = lessons.find(l => l.id === this.selectedLessonId);
        if (!lesson) return '';

        const isWatched = this.progress.watchedVideos[lesson.id];
        const title = this.getLessonTitle(lesson);
        const desc = this.getLessonDesc(lesson);

        return `
            <div class="lessons-container">
                <div class="lessons-nav-bar">
                    <button class="btn-back-crumb" onclick="LessonsApp.goToStep('lessons')">
                        ${this.t('back_to_lessons')}
                    </button>
                    <div class="crumb-current">
                        <span>${langInfo.flag} ${this.selectedLevel}</span>
                        <span style="opacity: 0.5;">/</span>
                        <strong>${title}</strong>
                    </div>
                </div>

                <div class="lesson-detail-header">
                    <div>
                        <span class="section-badge-pill">${lesson.num}-Dars</span>
                        <h2 class="lesson-detail-title">${title}</h2>
                        <p class="lesson-detail-desc">${desc}</p>
                    </div>
                    <div class="lesson-star-reward-badge">
                        <div style="font-size: 13px; color: #b45309;">${this.t('lesson_reward_label')}</div>
                        <div style="font-size: 22px; font-weight: 900; color: #d97706;">
                            ${isWatched ? this.t('reward_earned') : this.t('reward_not_earned')}
                        </div>
                    </div>
                </div>

                <!-- TABS -->
                <div class="lesson-tabs-bar">
                    <button class="lesson-tab-btn ${this.activeLessonTab === 'video' ? 'active' : ''}" onclick="LessonsApp.setLessonTab('video')">
                        ${this.t('tab_video')}
                    </button>
                    <button class="lesson-tab-btn ${this.activeLessonTab === 'dialog' ? 'active' : ''}" onclick="LessonsApp.setLessonTab('dialog')">
                        ${this.t('tab_dialog')}
                    </button>
                    <button class="lesson-tab-btn ${this.activeLessonTab === 'vocab' ? 'active' : ''}" onclick="LessonsApp.setLessonTab('vocab')">
                        ${this.t('tab_vocab')}
                    </button>
                    <button class="lesson-tab-btn ${this.activeLessonTab === 'quiz' ? 'active' : ''}" onclick="LessonsApp.setLessonTab('quiz')">
                        ${this.t('tab_quiz')}
                    </button>
                </div>

                <!-- TAB CONTENT -->
                <div class="lesson-tab-content">
                    ${this.activeLessonTab === 'video' ? this.renderTabVideo(lesson, isWatched) : ''}
                    ${this.activeLessonTab === 'dialog' ? this.renderTabDialog(lesson) : ''}
                    ${this.activeLessonTab === 'vocab' ? this.renderTabVocab(lesson) : ''}
                    ${this.activeLessonTab === 'quiz' ? this.renderTabQuiz(lesson) : ''}
                </div>
            </div>
        `;
    },

    renderTabVideo(lesson, isWatched) {
        return `
            <div class="video-player-container">
                <div class="fake-video-screen">
                    <div class="video-overlay-info">
                        <span class="video-tag">SpeakPro Pro Video</span>
                        <h3 class="video-screen-title">${lesson.video.title}</h3>
                        <p class="video-screen-sub">${lesson.video.channel} • ${lesson.video.topic}</p>
                    </div>
                    <div class="video-center-play" id="video-play-icon" onclick="LessonsApp.togglePlayVideo()">
                        <div class="play-triangle"></div>
                    </div>
                </div>

                <div class="video-controls-panel">
                    <div class="video-progress-container">
                        <div class="video-progress-track">
                            <div class="video-progress-fill" id="video-progress-fill" style="width: ${this.videoProgress}%;"></div>
                        </div>
                        <div class="video-time-row">
                            <span id="video-status-text">${this.videoPlaying ? '...' : isWatched ? '✅' : ''}</span>
                            <span id="video-progress-percent" style="font-weight: 800; color: var(--primary);">${Math.round(this.videoProgress)}%</span>
                        </div>
                    </div>

                    <div class="video-action-buttons">
                        <button class="btn btn-primary" id="video-play-btn" onclick="LessonsApp.togglePlayVideo()">
                            ${this.videoPlaying ? this.t('video_pause_btn') : this.t('video_watch_btn')}
                        </button>
                        
                        <button class="btn btn-gold" onclick="LessonsApp.markVideoWatched('${lesson.id}')">
                            ${isWatched ? this.t('reward_earned') : this.t('video_done_btn')}
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderTabDialog(lesson) {
        return `
            <div class="dialog-chat-wrap">
                <div class="dialog-header-info">
                    <h4>${this.t('dialog_header_title')}</h4>
                    <p>${this.t('dialog_header_sub')}</p>
                </div>

                <div class="dialog-messages-list">
                    ${lesson.dialog.map((line, idx) => `
                        <div class="dialog-bubble ${idx % 2 === 0 ? 'speaker-a' : 'speaker-b'}">
                            <div class="bubble-avatar">${line.avatar || (idx % 2 === 0 ? '👨‍💼' : '👩‍💼')}</div>
                            <div class="bubble-content">
                                <div class="bubble-speaker-name">${line.speaker}</div>
                                <div class="bubble-foreign-text">
                                    "${line.text}"
                                    <button class="audio-btn-sm" onclick="LessonsApp.speak('${line.text.replace(/'/g, "\\'")}')" title="Ovoz">
                                        ${this.t('audio_listen')}
                                    </button>
                                </div>
                                <div class="bubble-translation-text">
                                    ${line.tr}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderTabVocab(lesson) {
        return `
            <div class="vocab-section-wrap">
                <div class="dialog-header-info">
                    <h4>${this.t('vocab_header_title')}</h4>
                    <p>${this.t('vocab_header_sub')}</p>
                </div>

                <div class="flashcards-grid">
                    ${lesson.vocab.map((item, idx) => `
                        <div class="flashcard-3d" onclick="LessonsApp.flipCard(this)">
                            <div class="flashcard-inner">
                                <div class="flashcard-front">
                                    <span class="card-num">#${idx + 1}</span>
                                    <h4 class="card-word">${item.word}</h4>
                                    <span class="card-phonetic">${item.phonetic}</span>
                                    <span class="flip-hint">${this.t('flip_hint')}</span>
                                    <div class="card-audio-wrap" onclick="event.stopPropagation(); LessonsApp.speak('${item.word.replace(/'/g, "\\'")}')">
                                        <button class="audio-btn-sm">${this.t('audio_listen')}</button>
                                    </div>
                                </div>
                                <div class="flashcard-back">
                                    <span class="card-num">#${idx + 1}</span>
                                    <h4 class="card-trans">${item.tr}</h4>
                                    <p class="card-example">"${item.ex}"</p>
                                    <span class="flip-hint">${this.t('flip_hint')}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderTabQuiz(lesson) {
        const quizList = lesson.quiz || [];
        return `
            <div class="quiz-section-wrap">
                <div class="dialog-header-info">
                    <h4>${this.t('quiz_header_title')}</h4>
                    <p>${this.t('quiz_header_sub')}</p>
                </div>

                <div class="quiz-questions-grid">
                    ${quizList.map((item, qIdx) => `
                        <div class="quiz-card" id="quiz-item-${qIdx}">
                            <div class="quiz-q-num">Savol ${qIdx + 1} / ${quizList.length}</div>
                            <h4 class="quiz-q-text">${item.q}</h4>
                            <div class="quiz-options-list">
                                ${item.options.map((opt, optIdx) => `
                                    <button class="quiz-option-btn" onclick="LessonsApp.answerQuiz(${qIdx}, ${optIdx}, ${item.a})">
                                        <span class="opt-letter">${['A', 'B', 'C', 'D'][optIdx]}</span>
                                        <span class="opt-text">${opt}</span>
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // ----------------------------------------------------------------------
    // STEP 5: Testing (Level Test or Mock Test)
    // ----------------------------------------------------------------------
    renderStepTest() {
        const test = this.currentTestObj;
        if (!test) return '';

        const isMock = this.currentTestType === 'mock';

        return `
            <div class="lessons-container">
                <div class="test-top-bar">
                    <button class="btn-back-crumb" onclick="LessonsApp.goToStep('lessons')">
                        ← Testdan chiqish
                    </button>
                    <div class="test-title-center">
                        <span class="test-pill-badge">${test.badge}</span>
                        <h3>${test.title}</h3>
                    </div>
                    <div class="test-timer-badge" id="test-timer-display">
                        ⏱️ 20:00
                    </div>
                </div>

                <div class="test-instructions-card">
                    <div style="font-size: 28px;">${isMock ? '🎯' : '📝'}</div>
                    <div>
                        <h4 style="font-size: 16px; font-weight: 800; margin-bottom: 4px;">
                            ${isMock ? 'Xalqaro Mock Test Qoidasi: 90%+ = 30 ⭐ Yulduz!' : 'Daraja Testi: 80%+ = 20 ⭐ Yulduz'}
                        </h4>
                        <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">
                            ${isMock ? 'Testda berilgan savollarga diqqat bilan javob bering. 90% yoki undan yuqori to\'plagan o\'quvchiga 30 ta yulduz taqdim etiladi.' : '10 ta darslik bo\'yicha yakuniy imtihon. To\'g\'ri variantlarni belgilang va "Testni Yakunlash" tugmasini bosing.'}
                        </p>
                    </div>
                </div>

                <div class="test-questions-wrapper">
                    ${test.questions.map((q, idx) => `
                        <div class="test-item-box">
                            <div class="test-q-header">
                                <span class="test-num-circle">${idx + 1}</span>
                                <div class="test-q-title">${q.q}</div>
                            </div>
                            <div class="test-options-grid">
                                ${q.options.map((opt, optIdx) => `
                                    <button class="test-choice-btn ${this.currentTestAnswers[idx] === optIdx ? 'selected' : ''}" data-test-q="${idx}" onclick="LessonsApp.selectTestAnswer(${idx}, ${optIdx})">
                                        <span class="opt-prefix">${['A', 'B', 'C', 'D'][optIdx]}</span>
                                        <span>${opt}</span>
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="test-bottom-actions">
                    <button class="btn btn-secondary" onclick="LessonsApp.goToStep('lessons')">
                        Bekor qilish
                    </button>
                    <button class="btn btn-primary btn-lg" onclick="LessonsApp.submitTest()">
                        Testni Yakunlash va Natijani Ko'rish 🚀
                    </button>
                </div>
            </div>
        `;
    },

    // ======================================================================
    // EXPLORER 1: REAL-WORLD DIALOGUES VIEW
    // ======================================================================
    openDialogs(langId) {
        if (window.App && typeof App.navigate === 'function' && App.currentView !== 'darslar') {
            App.navigate('darslar');
        }
        this.step = 'dialogs';
        this.selectedLang = langId || 'en';
        const dialogs = (window.SpeakProDialogues && window.SpeakProDialogues[this.selectedLang]) || [];
        this.selectedDialogId = dialogs.length > 0 ? dialogs[0].id : null;
        this.selectedDialogCat = 'all';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    selectDialog(dialogId) {
        this.selectedDialogId = dialogId;
        this.render();
    },

    filterDialogCategory(cat) {
        this.selectedDialogCat = cat;
        const dialogs = (window.SpeakProDialogues && window.SpeakProDialogues[this.selectedLang]) || [];
        const filtered = cat === 'all' ? dialogs : dialogs.filter(d => d.category === cat);
        this.selectedDialogId = filtered.length > 0 ? filtered[0].id : null;
        this.render();
    },

    renderStepDialogs() {
        const langInfo = this.getLangInfo(this.selectedLang);
        const dialogs = (window.SpeakProDialogues && window.SpeakProDialogues[this.selectedLang]) || [];

        const categories = [
            { id: 'all', name: 'Barchasi', icon: '🌟' },
            { id: 'travel', name: 'Sayohat & Aeroport', icon: '✈️' },
            { id: 'hotel', name: 'Mehmonxona', icon: '🏨' },
            { id: 'food', name: 'Restoran & Taom', icon: '🍽️' },
            { id: 'career', name: 'Ish & Karyera', icon: '💼' },
            { id: 'health', name: 'Tibbiyot', icon: '🏥' },
            { id: 'shopping', name: 'Xaridlar', icon: '🛍️' }
        ];

        const filteredDialogs = this.selectedDialogCat === 'all' 
            ? dialogs 
            : dialogs.filter(d => d.category === this.selectedDialogCat);

        const activeDialog = dialogs.find(d => d.id === this.selectedDialogId) || filteredDialogs[0] || dialogs[0];

        return `
            <div class="lessons-container">
                <!-- Navigation Crumb -->
                <div class="lessons-nav-bar">
                    <button class="btn-back-crumb" onclick="LessonsApp.goToStep('lang')">
                        ${this.t('back_to_langs')}
                    </button>
                    <div class="crumb-current">
                        <span style="font-size: 20px;">${langInfo.flag}</span>
                        <strong>${langInfo.name} — Jonli Dialoglar</strong>
                    </div>
                </div>

                <!-- Explorer Header -->
                <div class="section-header">
                    <span class="section-badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #059669; border-color: rgba(16, 185, 129, 0.3);">
                        💬 Jonli Muloqot & Nutqiy Ko'nikma
                    </span>
                    <h2 class="section-title">🗣️ ${langInfo.name} Amaliy Dialoglari</h2>
                    <p class="section-subtitle">Real hayotiy vaziyatlardagi jonli suhbatlar. Har bir gapni tinglang, talaffuz qiling va tarjimasini o'rganing!</p>
                </div>

                <!-- Categories Toolbar -->
                <div class="explorer-toolbar">
                    <div class="explorer-pills-row">
                        ${categories.map(cat => `
                            <button class="explorer-pill-btn ${this.selectedDialogCat === cat.id ? 'active' : ''}" onclick="LessonsApp.filterDialogCategory('${cat.id}')">
                                ${cat.icon} ${cat.name}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Master-Detail Layout -->
                <div class="dialogs-layout">
                    <!-- Left: Dialogues Selection List -->
                    <div class="dialogs-list-panel">
                        <h4 style="font-size: 15px; font-weight: 800; color: var(--text-secondary); margin-bottom: 4px;">
                            Mavzular ro'yxati (${filteredDialogs.length}):
                        </h4>
                        ${filteredDialogs.length === 0 ? `
                            <div style="padding: 24px; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md);">
                                Bu toifada dialoglar topilmadi.
                            </div>
                        ` : filteredDialogs.map(d => `
                            <div class="dialog-select-card ${activeDialog && activeDialog.id === d.id ? 'active' : ''}" onclick="LessonsApp.selectDialog('${d.id}')">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 22px;">${d.icon}</span>
                                    <span class="level-badge-pill level-${d.level.toLowerCase().substring(0,2)}">${d.level}</span>
                                </div>
                                <h4 style="font-size: 16px; font-weight: 800; color: var(--text-primary); margin: 2px 0;">${d.title}</h4>
                                <div style="font-size: 13px; color: var(--primary); font-weight: 700;">${d.titleUz}</div>
                                <div style="font-size: 12px; color: var(--text-muted);">${d.lines.length} ta gap • ${d.categoryName}</div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Right: Active Dialogue Chat Viewer -->
                    <div class="dialog-detail-panel">
                        ${activeDialog ? `
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid var(--border-card); padding-bottom: 16px;">
                                <div>
                                    <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
                                        <span style="font-size: 28px;">${activeDialog.icon}</span>
                                        <span class="level-badge-pill level-${activeDialog.level.toLowerCase().substring(0,2)}">${activeDialog.level}</span>
                                        <span style="font-size: 13px; font-weight: 700; color: var(--text-muted);">${activeDialog.categoryName}</span>
                                    </div>
                                    <h3 style="font-size: 22px; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">
                                        ${activeDialog.title} (${activeDialog.titleUz})
                                    </h3>
                                    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">${activeDialog.desc}</p>
                                </div>
                            </div>

                            <div class="dialog-chat-flow">
                                ${activeDialog.lines.map(line => `
                                    <div class="dialog-chat-bubble">
                                        <div class="chat-avatar-box ${line.speaker === 'A' ? 'chat-avatar-a' : 'chat-avatar-b'}">
                                            ${line.speaker === 'A' ? '👨‍💼' : '👩‍💼'}
                                        </div>
                                        <div class="chat-bubble-content">
                                            <div class="chat-bubble-header">
                                                <span class="chat-speaker-role">${line.role}</span>
                                                <button class="btn btn-sm btn-secondary" onclick="LessonsApp.speakText('${line.text.replace(/'/g, "\\'")}', '${this.selectedLang}')">
                                                    🔊 Tinglash
                                                </button>
                                            </div>
                                            <div class="chat-foreign-text">${line.text}</div>
                                            <div class="chat-tr-text">${line.tr}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `
                            <div style="text-align: center; padding: 48px; color: var(--text-muted);">
                                Ko'rish uchun chap tomondan dialogni tanlang.
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    },

    // ======================================================================
    // EXPLORER 2: IDIOMS & PHRASES VIEW (100+ items)
    // ======================================================================
    openIdioms(langId) {
        if (window.App && typeof App.navigate === 'function' && App.currentView !== 'darslar') {
            App.navigate('darslar');
        }
        this.step = 'idioms';
        this.selectedLang = langId || 'en';
        this.idiomsFilterLevel = 'all';
        this.idiomsSearch = '';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    filterIdiomsLevel(lvl) {
        this.idiomsFilterLevel = lvl;
        this.render();
    },

    filterIdiomsSearch(query) {
        this.idiomsSearch = query;
        const container = document.getElementById('idioms-results-container');
        if (container) {
            const idiomsList = (window.SpeakProIdioms && window.SpeakProIdioms[this.selectedLang]) || [];
            const searchLower = (this.idiomsSearch || '').trim().toLowerCase();
            let filtered = idiomsList;
            if (this.idiomsFilterLevel !== 'all') {
                filtered = filtered.filter(item => item.level === this.idiomsFilterLevel);
            }
            if (searchLower) {
                filtered = filtered.filter(item => 
                    (item.idiom && item.idiom.toLowerCase().includes(searchLower)) ||
                    (item.meaningUz && item.meaningUz.toLowerCase().includes(searchLower)) ||
                    (item.meaningRu && item.meaningRu.toLowerCase().includes(searchLower)) ||
                    (item.example && item.example.toLowerCase().includes(searchLower))
                );
            }
            container.innerHTML = this.renderIdiomsResultsHtml(filtered);
        } else {
            this.render();
        }
    },

    renderIdiomsResultsHtml(filtered) {
        return `
            <!-- Results Counter -->
            <div style="font-size: 14px; font-weight: 700; color: var(--text-secondary); margin-bottom: 18px;">
                Topilgan idiomalar soni: <strong>${filtered.length} ta</strong>
            </div>

            <!-- Idioms Cards Grid -->
            <div class="idioms-grid">
                ${filtered.length === 0 ? `
                    <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md);">
                        Qidiruvingiz bo'yicha hech qanday idioma topilmadi.
                    </div>
                ` : filtered.map(item => `
                    <div class="idiom-card">
                        <div class="idiom-card-header">
                            <div>
                                <span class="level-badge-pill level-${(item.level || 'a1').toLowerCase()}">${item.level || 'A1'}</span>
                                <h4 class="idiom-title" style="margin-top: 6px;">${item.idiom || ''}</h4>
                            </div>
                            <button class="btn btn-sm btn-secondary" onclick="LessonsApp.speakText('${(item.idiom || '').replace(/['\\]/g, '')}', '${this.selectedLang}')" title="Talaffuzni tinglash">
                                🔊
                            </button>
                        </div>
                        <div class="idiom-meaning">
                            <strong>Ma'nosi:</strong> ${item.meaningUz || ''}
                        </div>
                        <div style="font-size: 13px; color: var(--text-muted);">
                            🇷🇺 ${item.meaningRu || ''}
                        </div>
                        <div class="idiom-example-box">
                            <div class="idiom-ex-text">${item.example || ''}</div>
                            <div class="idiom-ex-tr">${item.exampleTr || ''}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderStepIdioms() {
        const langInfo = this.getLangInfo(this.selectedLang);
        const idiomsList = (window.SpeakProIdioms && window.SpeakProIdioms[this.selectedLang]) || [];

        const levels = ['all', 'A1', 'A2', 'B1', 'B2', 'C1'];
        const searchLower = (this.idiomsSearch || '').trim().toLowerCase();

        let filtered = idiomsList;
        if (this.idiomsFilterLevel !== 'all') {
            filtered = filtered.filter(item => item.level === this.idiomsFilterLevel);
        }

        if (searchLower) {
            filtered = filtered.filter(item => 
                (item.idiom && item.idiom.toLowerCase().includes(searchLower)) ||
                (item.meaningUz && item.meaningUz.toLowerCase().includes(searchLower)) ||
                (item.meaningRu && item.meaningRu.toLowerCase().includes(searchLower)) ||
                (item.example && item.example.toLowerCase().includes(searchLower))
            );
        }

        return `
            <div class="lessons-container">
                <!-- Navigation Crumb -->
                <div class="lessons-nav-bar">
                    <button class="btn-back-crumb" onclick="LessonsApp.goToStep('lang')">
                        ${this.t('back_to_langs')}
                    </button>
                    <div class="crumb-current">
                        <span style="font-size: 20px;">${langInfo.flag}</span>
                        <strong>${langInfo.name} — Idiomalar (100+ ta)</strong>
                    </div>
                </div>

                <!-- Explorer Header -->
                <div class="section-header">
                    <span class="section-badge-pill" style="background: rgba(245, 158, 11, 0.15); color: #d97706; border-color: rgba(245, 158, 11, 0.3);">
                        🧠 A1 — C1 Boy So'zlashuv San'ati
                    </span>
                    <h2 class="section-title">⚡ ${langInfo.name} Idiomalari va Iboralari</h2>
                    <p class="section-subtitle">Nutqingizni tabiiy va boy qilish uchun A1 dan C1 gacha eng kerakli 100+ ta idioma, ko'chma ma'nolar va jonli misollar!</p>
                </div>

                <!-- Toolbar: Levels & Live Search -->
                <div class="explorer-toolbar">
                    <div class="explorer-pills-row">
                        <strong style="font-size: 14px; margin-right: 6px; color: var(--text-secondary);">Daraja:</strong>
                        ${levels.map(lvl => `
                            <button class="explorer-pill-btn ${this.idiomsFilterLevel === lvl ? 'active' : ''}" onclick="LessonsApp.filterIdiomsLevel('${lvl}')">
                                ${lvl === 'all' ? `Barchasi (${idiomsList.length})` : lvl}
                            </button>
                        `).join('')}
                    </div>
                    <div>
                        <input type="text" id="idioms-search-input" class="explorer-search-input" value="${this.idiomsSearch}" placeholder="Idiomani qidiring (masalan: piece of cake, omad, ko'z, rain...)" oninput="LessonsApp.filterIdiomsSearch(this.value)">
                    </div>
                </div>

                <!-- Dynamic Results Container (updates without resetting input focus) -->
                <div id="idioms-results-container">
                    ${this.renderIdiomsResultsHtml(filtered)}
                </div>
            </div>
        `;
    },

    // ======================================================================
    // EXPLORER 3: GRAND VOCABULARY VIEW (10,000+ words)
    // ======================================================================
    openVocabulary(langId) {
        if (window.App && typeof App.navigate === 'function' && App.currentView !== 'darslar') {
            App.navigate('darslar');
        }
        this.step = 'vocabulary';
        this.selectedLang = langId || 'en';
        this.vocabLevel = 'all';
        this.vocabPos = 'all';
        this.vocabSearch = '';
        this.vocabPage = 1;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    setVocabLevel(lvl) {
        this.vocabLevel = lvl;
        this.vocabPage = 1;
        this.render();
    },

    setVocabPos(pos) {
        this.vocabPos = pos;
        this.vocabPage = 1;
        this.render();
    },

    searchVocab(query) {
        this.vocabSearch = query;
        this.vocabPage = 1;
        const container = document.getElementById('vocab-results-container');
        if (container && window.SpeakProVocabulary) {
            const queryRes = window.SpeakProVocabulary.query(this.selectedLang, {
                level: this.vocabLevel,
                pos: this.vocabPos,
                search: this.vocabSearch,
                page: this.vocabPage,
                limit: 50
            });
            container.innerHTML = this.renderVocabResultsHtml(queryRes);
        } else {
            this.render();
        }
    },

    changeVocabPage(page) {
        this.vocabPage = page;
        const container = document.getElementById('vocab-results-container');
        if (container && window.SpeakProVocabulary) {
            const queryRes = window.SpeakProVocabulary.query(this.selectedLang, {
                level: this.vocabLevel,
                pos: this.vocabPos,
                search: this.vocabSearch,
                page: this.vocabPage,
                limit: 50
            });
            container.innerHTML = this.renderVocabResultsHtml(queryRes);
            const anchor = document.getElementById('vocab-results-anchor');
            if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            this.render();
            const anchor = document.getElementById('vocab-results-anchor');
            if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    renderVocabResultsHtml(queryRes) {
        const { items, total, page, totalPages } = queryRes;

        return `
            <!-- Results Statistics -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 14px; font-weight: 700; color: var(--text-secondary);">
                <div>Topilgan so'zlar: <strong style="color: var(--primary);">${total.toLocaleString()} ta</strong></div>
                <div>Sahifa: <strong>${page} / ${totalPages}</strong> (har birida 50 tadan)</div>
            </div>

            <!-- Vocabulary Cards Grid -->
            <div class="vocab-grid">
                ${items.length === 0 ? `
                    <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md);">
                        Qidiruvingiz bo'yicha so'z topilmadi.
                    </div>
                ` : items.map(w => `
                    <div class="vocab-card">
                        <div class="vocab-top-row">
                            <span class="vocab-word-main">${w.word || ''}</span>
                            <div style="display: flex; gap: 6px; align-items: center;">
                                <span class="vocab-pos-badge">${w.pos || 'noun'}</span>
                                <span class="level-badge-pill level-${(w.level || 'a1').toLowerCase()}">${w.level || 'A1'}</span>
                                <button class="btn btn-sm btn-secondary" onclick="LessonsApp.speakText('${(w.word || '').replace(/['\\]/g, '')}', '${this.selectedLang}')" title="Talaffuz">
                                    🔊
                                </button>
                            </div>
                        </div>
                        <div class="vocab-phonetic">${w.phonetic || ''}</div>
                        <div class="vocab-translation-row">🇺🇿 ${w.uz || ''}</div>
                        <div class="vocab-ru-row">🇷🇺 ${w.ru || ''}</div>
                        <div class="vocab-example-row">
                            <strong>${w.example || ''}</strong><br>
                            <span style="opacity: 0.85;">${w.exampleTr || ''}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Pagination Bar -->
            ${totalPages > 1 ? `
                <div class="vocab-pagination-bar">
                    <button class="page-btn" ${page <= 1 ? 'disabled' : ''} onclick="LessonsApp.changeVocabPage(1)" title="Birinchi sahifa">
                        ⏮ 1
                    </button>
                    <button class="page-btn" ${page <= 1 ? 'disabled' : ''} onclick="LessonsApp.changeVocabPage(${page - 1})">
                        ◀ Oldingi
                    </button>

                    ${(() => {
                        let btns = '';
                        const start = Math.max(1, page - 2);
                        const end = Math.min(totalPages, page + 2);
                        for (let p = start; p <= end; p++) {
                            btns += `<button class="page-btn ${p === page ? 'active' : ''}" onclick="LessonsApp.changeVocabPage(${p})">${p}</button>`;
                        }
                        return btns;
                    })()}

                    <button class="page-btn" ${page >= totalPages ? 'disabled' : ''} onclick="LessonsApp.changeVocabPage(${page + 1})">
                        Keyingi ▶
                    </button>
                    <button class="page-btn" ${page >= totalPages ? 'disabled' : ''} onclick="LessonsApp.changeVocabPage(${totalPages})" title="Oxirgi sahifa">
                        ${totalPages} ⏭
                    </button>
                </div>
            ` : ''}
        `;
    },

    renderStepVocabulary() {
        const langInfo = this.getLangInfo(this.selectedLang);
        const queryRes = window.SpeakProVocabulary ? window.SpeakProVocabulary.query(this.selectedLang, {
            level: this.vocabLevel,
            pos: this.vocabPos,
            search: this.vocabSearch,
            page: this.vocabPage,
            limit: 50
        }) : { items: [], total: 0, page: 1, totalPages: 1, levelCounts: { all: 10000, A1: 2000, A2: 2000, B1: 2000, B2: 2000, C1: 2000 } };

        const { levelCounts } = queryRes;

        const levels = [
            { id: 'all', label: `Barchasi (${levelCounts.all.toLocaleString()}+)` },
            { id: 'A1', label: `A1: Boshlang'ich (${levelCounts.A1.toLocaleString()})` },
            { id: 'A2', label: `A2: Elementar (${levelCounts.A2.toLocaleString()})` },
            { id: 'B1', label: `B1: O'rta (${levelCounts.B1.toLocaleString()})` },
            { id: 'B2', label: `B2: Yuqori O'rta (${levelCounts.B2.toLocaleString()})` },
            { id: 'C1', label: `C1: Mukammal (${levelCounts.C1.toLocaleString()})` }
        ];

        const posList = [
            { id: 'all', label: 'Barcha so\'zlar' },
            { id: 'noun', label: 'Ot (Noun)' },
            { id: 'verb', label: 'Fe\'l (Verb)' },
            { id: 'adj', label: 'Sifat (Adjective)' },
            { id: 'adv', label: 'Ravish (Adverb)' }
        ];

        return `
            <div class="lessons-container" id="vocab-results-anchor">
                <!-- Navigation Crumb -->
                <div class="lessons-nav-bar">
                    <button class="btn-back-crumb" onclick="LessonsApp.goToStep('lang')">
                        ${this.t('back_to_langs')}
                    </button>
                    <div class="crumb-current">
                        <span style="font-size: 20px;">${langInfo.flag}</span>
                        <strong>${langInfo.name} — Katta Lug'at (10,000+ so'z)</strong>
                    </div>
                </div>

                <!-- Explorer Header -->
                <div class="section-header">
                    <span class="section-badge-pill" style="background: rgba(99, 102, 241, 0.15); color: #4f46e5; border-color: rgba(99, 102, 241, 0.3);">
                        📚 Katta Akademik Lug'at Bazasi
                    </span>
                    <h2 class="section-title">📖 ${langInfo.name} To'liq Lug'atlar Ensiklopediyasi</h2>
                    <p class="section-subtitle">A1 dan C1 gacha 10,000+ so'z, transkripsiya, talaffuz, so'z turkumlari, o'zbekcha va ruscha ma'nolari hamda namunaviy gaplar!</p>
                </div>

                <!-- Filters & Live Search Toolbar -->
                <div class="explorer-toolbar">
                    <!-- CEFR Level Tabs -->
                    <div class="explorer-pills-row">
                        <strong style="font-size: 13px; color: var(--text-secondary); margin-right: 4px;">Daraja:</strong>
                        ${levels.map(l => `
                            <button class="explorer-pill-btn ${this.vocabLevel === l.id ? 'active' : ''}" onclick="LessonsApp.setVocabLevel('${l.id}')">
                                ${l.label}
                            </button>
                        `).join('')}
                    </div>

                    <!-- Part of Speech Tabs -->
                    <div class="explorer-pills-row">
                        <strong style="font-size: 13px; color: var(--text-secondary); margin-right: 4px;">Turkum:</strong>
                        ${posList.map(p => `
                            <button class="explorer-pill-btn ${this.vocabPos === p.id ? 'active' : ''}" onclick="LessonsApp.setVocabPos('${p.id}')">
                                ${p.label}
                            </button>
                        `).join('')}
                    </div>

                    <!-- Search Input -->
                    <div>
                        <input type="text" id="vocab-search-input" class="explorer-search-input" value="${this.vocabSearch}" placeholder="So'z yoki tarjimani qidiring (masalan: apple, erishmoq, город, machen, innovatsiya)..." oninput="LessonsApp.searchVocab(this.value)">
                    </div>
                </div>

                <!-- Dynamic Results Container (updates without resetting input focus) -->
                <div id="vocab-results-container">
                    ${this.renderVocabResultsHtml(queryRes)}
                </div>
            </div>
        `;
    },

    // Speech Audio Helper
    speakText(text, lang) {
        if (typeof speakForeignWord === 'function') {
            speakForeignWord(text, lang || this.selectedLang || 'en');
        } else if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = lang === 'ru' ? 'ru-RU' : (lang === 'de' ? 'de-DE' : 'en-US');
            window.speechSynthesis.speak(u);
        }
    }
};

window.LessonsApp = LessonsApp;
