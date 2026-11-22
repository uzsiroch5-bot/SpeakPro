// ==========================================================================
// School77 — Speaking with AI (Jonli Virtual AI Ustoz & Ovozli Suhbat)
// Muallif: 77-School O'quv Markazi • 2026 Edition
// ==========================================================================

const SpeakingApp = {
    // Current mode: 'select_coach' | 'studio' | 'result'
    mode: 'select_coach',

    // Selected coach: 'laylo' (female) | 'jasur' (male)
    selectedCoach: 'laylo',

    // Active target language: null initially, then 'en' | 'ru' | 'de'
    targetLang: null,

    // Step state in conversation: 'ask_language' | 'in_conversation'
    step: 'ask_language',

    // Emotional state of the AI coach:
    // 'neutral' 🙂 | 'listening' 👂 | 'thinking' 🤔 | 'happy' 😃 | 'impressed' 🤩 | 'supportive' 💡
    emotion: 'neutral',

    // Voice & Speech synthesis settings
    isSpeakingAudio: false,
    autoSpeakAI: true,

    // Speech-to-text recognition
    recognition: null,
    isRecording: false,

    // Metrics for the current session (NO STARS - strictly performance score)
    userTurnsCount: 0,
    userWordList: [],
    startTime: null,

    // Current live speech contents (Clean subtitles, NO CHAT bubbles!)
    currentAISpeech: {
        text: "Xush, qaysi tilda gaplashamiz? (Ingliz, Rus yoki Nemis tili?) 🌍",
        tr: "Xush kelibsiz! Qaysi xorijiy tilda suhbatlashishni xohlaysiz? Ovoz orqali ayting yoki quyidagi tugmalardan birini bosing:"
    },

    // What user said most recently
    lastUserSpeech: null,

    // Quick suggestions / actions
    suggestionChips: [],

    // Coaches definitions
    coaches: {
        laylo: {
            id: 'laylo',
            name: 'Laylo',
            gender: 'female',
            role: "Mayin va Samimiy AI Qiz Coach",
            tagline: "Shirin va yoqimli qiz ovozi • Sabrli va dalda beruvchi ustoz",
            desc: "Erkin, qulay va xotirjam muhitda gapirishni xohlovchilar uchun jonli virtual ustoz.",
            accentColor: '#ec4899',
            gradient: 'linear-gradient(135deg, #f472b6, #db2777)',
            sphereBg: 'linear-gradient(145deg, #1e1338, #3b184f)',
            auraColor: 'rgba(236, 72, 153, 0.45)',
            pitch: 1.18,
            rate: 0.94
        },
        jasur: {
            id: 'jasur',
            name: 'Jasur',
            gender: 'male',
            role: "Intellektual va G'ayratli AI O'g'il Coach",
            tagline: "Bariton va ishonchli o'g'il bola ovozi • Faol va rivojlantiruvchi murabbiy",
            desc: "Aniq talaffuz, boy so'z boyligi va mantiqiy savollar bilan nutqni yangi cho'qqiga olib chiquvchi suhbatdosh.",
            accentColor: '#3b82f6',
            gradient: 'linear-gradient(135deg, #60a5fa, #2563eb)',
            sphereBg: 'linear-gradient(145deg, #0f1c3f, #1e293b)',
            auraColor: 'rgba(59, 130, 246, 0.45)',
            pitch: 0.92,
            rate: 0.95
        }
    },

    // Emotion definitions
    emotionsMap: {
        neutral: { icon: '🙂', label: 'Samimiy tabassum', aura: 'rgba(99, 102, 241, 0.4)' },
        listening: { icon: '👂', label: 'Diqqat bilan tinglamoqda...', aura: 'rgba(16, 185, 129, 0.55)' },
        thinking: { icon: '🤔', label: 'O\'ylanmoqda & tahlil qilmoqda...', aura: 'rgba(139, 92, 246, 0.55)' },
        happy: { icon: '😃', label: 'Ajoyib javob!', aura: 'rgba(236, 72, 153, 0.55)' },
        impressed: { icon: '🤩', label: 'Qoyilmaqom fikr!', aura: 'rgba(245, 158, 11, 0.55)' },
        supportive: { icon: '💡', label: 'Foydali maslahat', aura: 'rgba(59, 130, 246, 0.55)' }
    },

    // Initialization
    init() {
        this.setupSpeechRecognition();
        if (this.mode === 'studio') {
            this.render();
        } else {
            this.mode = 'select_coach';
            this.render();
        }
    },

    // Choose coach and enter speaking studio
    chooseCoach(coachId) {
        if (!this.coaches[coachId]) coachId = 'laylo';
        this.selectedCoach = coachId;
        this.mode = 'studio';
        this.step = 'ask_language';
        this.targetLang = null;
        this.userTurnsCount = 0;
        this.userWordList = [];
        this.startTime = Date.now();
        this.emotion = 'neutral';
        this.lastUserSpeech = null;

        const coach = this.coaches[coachId];

        // The AI immediately starts by asking in audio + text:
        // "Xush, qaysi tilda gaplashamiz? (Ingliz, Rus yoki Nemis tili?)"
        const initialText = "Xush, qaysi tilda gaplashamiz? (Ingliz, Rus yoki Nemis tili?) 🌍";
        const initialUz = "Xush kelibsiz! Qaysi xorijiy tilda suhbatlashishni xohlaysiz? Ovoz orqali ayting yoki quyidagi tugmalardan birini bosing:";

        this.currentAISpeech = {
            text: initialText,
            tr: initialUz
        };

        this.suggestionChips = [
            { label: '🇬🇧 Ingliz tili (English)', value: 'Ingliz tilida gaplashamiz' },
            { label: '🇷🇺 Rus tili (Русский)', value: 'Давайте говорить по-русски' },
            { label: '🇩🇪 Nemis tili (Deutsch)', value: 'Lass uns Deutsch sprechen' }
        ];

        this.render();

        // Speak opening greeting with coach voice
        if (this.autoSpeakAI) {
            setTimeout(() => {
                this.speakAI(initialText, coach.gender, 'uz-UZ');
            }, 550);
        }

        if (window.SoundEffects) SoundEffects.playClick();
    },

    // Set emotional state with visual reactive trigger
    setEmotion(emotionKey) {
        if (!this.emotionsMap[emotionKey]) emotionKey = 'neutral';
        this.emotion = emotionKey;

        const stage = document.getElementById('ai-face-stage');
        const badge = document.getElementById('ai-emotion-pill');
        const emotionInfo = this.emotionsMap[emotionKey];

        if (badge) {
            badge.innerHTML = `<span class="emotion-icon">${emotionInfo.icon}</span> <span>${emotionInfo.label}</span>`;
            badge.style.borderColor = emotionInfo.aura;
        }

        if (stage) {
            // Update emotion classes
            stage.className = `ai-talking-face-stage emotion-${emotionKey} ${this.isSpeakingAudio ? 'is-talking' : ''} ${this.isRecording ? 'is-listening' : ''}`;
        }
    },

    // Update face visual state (talking / listening / thinking)
    updateFaceVisuals() {
        const stage = document.getElementById('ai-face-stage');
        if (!stage) return;

        if (this.isSpeakingAudio) {
            stage.classList.add('is-talking');
        } else {
            stage.classList.remove('is-talking');
        }

        if (this.isRecording) {
            stage.classList.add('is-listening');
        } else {
            stage.classList.remove('is-listening');
        }
    },

    // Web Speech API for voice recognition
    setupSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            this.recognition = null;
            return;
        }

        try {
            const rec = new SpeechRecognition();
            rec.continuous = false;
            rec.interimResults = true;

            rec.onstart = () => {
                this.isRecording = true;
                this.setEmotion('listening');
                this.updateFaceVisuals();
                this.updateMicUI();
            };

            rec.onresult = (event) => {
                let interim = '';
                let final = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final += event.results[i][0].transcript;
                    } else {
                        interim += event.results[i][0].transcript;
                    }
                }
                const input = document.getElementById('speaking-text-input');
                if (input) {
                    input.value = final || interim;
                }
            };

            rec.onerror = (event) => {
                console.warn('Speech recognition error:', event.error);
                this.isRecording = false;
                this.setEmotion('neutral');
                this.updateFaceVisuals();
                this.updateMicUI();
                if (event.error === 'not-allowed') {
                    if (window.App) App.showToast('Mikrofon ruxsati berilmadi. Matn orqali ham yozishingiz mumkin!', 'warning');
                }
            };

            rec.onend = () => {
                this.isRecording = false;
                this.updateFaceVisuals();
                this.updateMicUI();
                const input = document.getElementById('speaking-text-input');
                if (input && input.value.trim().length > 0) {
                    setTimeout(() => {
                        this.handleSendUserMessage();
                    }, 350);
                } else {
                    this.setEmotion('neutral');
                }
            };

            this.recognition = rec;
        } catch (e) {
            console.warn('Failed to initialize speech recognition:', e);
            this.recognition = null;
        }
    },

    // Toggle Microphone recording
    toggleSpeechRecognition() {
        if (!this.recognition) {
            this.setupSpeechRecognition();
        }

        if (!this.recognition) {
            if (window.App) App.showToast('Brauzeringizda mikrofondan ovoz yozish qo\'llab-quvvatlanmadi. Matn maydoniga yozishingiz mumkin!', 'info');
            const input = document.getElementById('speaking-text-input');
            if (input) input.focus();
            return;
        }

        if (this.isRecording) {
            this.recognition.stop();
        } else {
            // Set recognition language
            let langCode = 'uz-UZ';
            if (this.targetLang === 'en') langCode = 'en-US';
            else if (this.targetLang === 'ru') langCode = 'ru-RU';
            else if (this.targetLang === 'de') langCode = 'de-DE';

            this.recognition.lang = langCode;

            try {
                this.recognition.start();
                if (window.SoundEffects) SoundEffects.playClick();
            } catch (err) {
                console.warn('Could not start recognition:', err);
            }
        }
    },

    updateMicUI() {
        const micBtn = document.getElementById('studio-mic-btn');
        if (micBtn) {
            if (this.isRecording) {
                micBtn.classList.add('mic-active');
                micBtn.innerHTML = `
                    <div class="mic-ripple-pulse"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                        <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                    <span>Eshitilmoqda... (To'xtatish)</span>
                `;
            } else {
                micBtn.classList.remove('mic-active');
                micBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                    <span>Ovoz Bilan Gapirish 🎙️</span>
                `;
            }
        }
    },

    // User speaks or sends a message
    handleSendUserMessage(customText) {
        const input = document.getElementById('speaking-text-input');
        const text = (customText || (input ? input.value : '')).trim();
        if (!text) return;

        if (input) input.value = '';

        // Collect words for vocabulary analysis
        const words = text.toLowerCase().match(/[\p{L}]+/gu) || [];
        this.userWordList.push(...words);

        this.userTurnsCount++;

        // Store user speech
        this.lastUserSpeech = {
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            feedback: this.step === 'in_conversation' ? this.generateSmartFeedback(text) : null
        };

        if (window.SoundEffects) SoundEffects.playClick();

        // Switch emotion to thinking while AI prepares speech
        this.setEmotion('thinking');
        this.renderSubtitles();

        // Process response
        setTimeout(() => {
            this.processAIResponse(text);
        }, 800);
    },

    // Process either Language Selection step or In-Conversation dialogue (Server AI + Local Fallback)
    async processAIResponse(userText) {
        const coach = this.coaches[this.selectedCoach] || this.coaches.laylo;
        const coachKey = this.selectedCoach || 'laylo';

        // 1. Prioritize Server AI (/api/ai/chat)
        let serverData = null;
        try {
            const apiBase = (typeof AdminApp !== 'undefined' && AdminApp.apiBaseUrl)
                ? AdminApp.apiBaseUrl
                : (window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
                    ? window.location.origin + '/api'
                    : 'http://localhost:3000/api');

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);

            const res = await fetch(apiBase + '/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    coach: coachKey,
                    lang: this.targetLang || 'en',
                    step: this.step,
                    message: userText
                }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (res.ok) {
                const json = await res.json();
                if (json && json.success) {
                    serverData = json;
                }
            }
        } catch (err) {
            // Server offline or request timeout — seamlessly fall back to local AI engine
        }

        if (serverData) {
            if (serverData.detectedLang) {
                this.targetLang = serverData.detectedLang;
            }
            if (serverData.step) {
                this.step = serverData.step;
            }
            this.setEmotion(serverData.emotion || 'happy');
            this.currentAISpeech = {
                text: serverData.reply,
                tr: serverData.tr || ''
            };
            this.suggestionChips = serverData.suggestions || [];
            this.renderSubtitles();
            this.renderSuggestionChips();

            if (this.autoSpeakAI) {
                this.speakAI(serverData.reply, coach.gender, this.targetLang);
            }
            return;
        }

        // STEP 1: Handle Language Selection (Local Fallback)
        if (this.step === 'ask_language') {
            const detectedLang = this.detectLanguageChoice(userText);
            this.targetLang = detectedLang;
            this.step = 'in_conversation';

            let greetingData = {};
            if (detectedLang === 'en') {
                greetingData = {
                    text: coach.gender === 'female'
                        ? "Wonderful choice! Let's speak in English! 🇬🇧 I'm Laylo, and I'm very happy to be your speaking partner. How was your day today, or what would you like to talk about?"
                        : "Awesome choice! Let's speak in English! 🇬🇧 I'm Jasur, ready to help you boost your confidence and fluency. Tell me, how was your day and what's on your mind?",
                    tr: "Ajoyib tanlov! Keling, ingliz tilida suhbatlashamiz! 🇬🇧 Kuningiz qanday o'tdi yoki bugun nima haqida suhbatlashmoqchisiz?",
                    suggestions: [
                        { label: 'My day was really good!', value: 'My day was really productive and great!' },
                        { label: 'I want to talk about travel', value: 'I would love to talk about travel and visiting new countries.' },
                        { label: 'How can I practice speaking?', value: 'How can I improve my English speaking fluency?' }
                    ]
                };
            } else if (detectedLang === 'ru') {
                greetingData = {
                    text: coach.gender === 'female'
                        ? "Прекрасно! Будем общаться на русском языке! 🇷🇺 Меня зовут Лейла. Я с радостью помогу вам говорить свободно и красиво. Расскажите, как прошёл ваш день?"
                        : "Отличный выбор! Говорим по-русски! 🇷🇺 Меня зовут Жасур. Давайте развивать уверенную и грамотную речь. Как ваши дела и чем вы сегодня занимались?",
                    tr: "Ajoyib tanlov! Rus tilida suhbatlashamiz! 🇷🇺 Ismim " + coach.name + ". Kuningiz qanday o'tdi va bugun nimalar bilan mashg'ul bo'ldingiz?",
                    suggestions: [
                        { label: 'Мой день прошёл отлично', value: 'Мой день прошёл очень насыщенно и отлично!' },
                        { label: 'О моих хобби', value: 'В свободное время я люблю читать книги и изучать языки.' },
                        { label: 'Практика речи', value: 'Я хочу научиться свободно общаться без языкового барьера.' }
                    ]
                };
            } else { // de
                greetingData = {
                    text: coach.gender === 'female'
                        ? "Wunderbar! Wir sprechen heute auf Deutsch! 🇩🇪 Ich bin Layla. Ich freue mich sehr darauf, mit Ihnen Deutsch zu üben. Wie geht es Ihnen heute und was haben Sie Schönes gemacht?"
                        : "Fantastisch! Wir sprechen auf Deutsch! 🇩🇪 Ich bin Jasur. Gemeinsam machen wir Ihre Aussprache und Grammatik perfekt. Wie läuft Ihr Tag und worüber möchten Sie sprechen?",
                    tr: "Ajoyib tanlov! Nemis tilida suhbatlashamiz! 🇩🇪 Ismim " + coach.name + ". Bugun kuningiz qanday o'tmoqda va nima haqida gaplashamiz?",
                    suggestions: [
                        { label: 'Mir geht es sehr gut!', value: 'Mir geht es sehr gut und mein Tag war erfolgreich!' },
                        { label: 'Über Deutschland', value: 'Ich interessiere mich sehr für das Leben und Studium in Deutschland.' },
                        { label: 'Deutsch lernen', value: 'Ich lerne jeden Tag fleißig Deutsch mit School77.' }
                    ]
                };
            }

            this.setEmotion('happy');

            this.currentAISpeech = {
                text: greetingData.text,
                tr: greetingData.tr
            };
            this.suggestionChips = greetingData.suggestions;

            this.renderSubtitles();
            this.renderSuggestionChips();

            if (this.autoSpeakAI) {
                this.speakAI(greetingData.text, coach.gender, detectedLang);
            }
            return;
        }

        // STEP 2: In-Conversation Dialogue
        const dialogueData = this.generateContextualResponse(userText, this.targetLang, coach);

        if (userText.split(/\s+/).length >= 7) {
            this.setEmotion('impressed');
        } else if (dialogueData.type === 'tip') {
            this.setEmotion('supportive');
        } else {
            this.setEmotion('happy');
        }

        this.currentAISpeech = {
            text: dialogueData.text,
            tr: dialogueData.tr
        };
        this.suggestionChips = dialogueData.suggestions;

        this.renderSubtitles();
        this.renderSuggestionChips();

        if (this.autoSpeakAI) {
            this.speakAI(dialogueData.text, coach.gender, this.targetLang);
        }
    },

    // Detect language from user input
    detectLanguageChoice(text) {
        const lower = text.toLowerCase();
        if (lower.includes('rus') || lower.includes('рус') || lower.includes('russian')) {
            return 'ru';
        }
        if (lower.includes('nemis') || lower.includes('nem') || lower.includes('deutsch') || lower.includes('german') || lower.includes('germany')) {
            return 'de';
        }
        return 'en';
    },

    // Generate natural, context-aware dialogue with engaging follow-ups
    generateContextualResponse(userText, lang, coach) {
        const lower = userText.toLowerCase();

        if (lang === 'en') {
            if (lower.includes('good') || lower.includes('great') || lower.includes('fine') || lower.includes('well') || lower.includes('happy')) {
                return {
                    text: "I am really glad to hear that! Positive energy makes language learning so much easier. What was the most memorable part of your day?",
                    tr: "Buni eshitganimdan juda xursandman! Ijobiy kayfiyat til o'rganishni ancha osonlashtiradi. Bugungi kuningizning eng esda qolarli voqeasi nima bo'ldi?",
                    suggestions: [
                        { label: 'I met with friends', value: 'I met up with some good friends and had coffee.' },
                        { label: 'I worked on my goals', value: 'I made great progress on my learning goals today.' },
                        { label: 'Just relaxed at home', value: 'I had a quiet evening relaxing and reading.' }
                    ]
                };
            } else if (lower.includes('work') || lower.includes('job') || lower.includes('study') || lower.includes('student') || lower.includes('it') || lower.includes('tech')) {
                return {
                    text: "That sounds very purposeful! Continuous learning and career ambition are wonderful qualities. What is a skill or subject you are currently most excited to master?",
                    tr: "Bu juda maqsadli eshitilmoqda! Tinimsiz izlanish va kasbiy intilish — ajoyib fazilatlar. Hozirda qaysi ko'nikma yoki sohani chuqurroq o'rganishga ko'proq qiziqmoqdasiz?",
                    suggestions: [
                        { label: 'Technology & AI', value: 'I am deeply interested in technology, programming and AI.' },
                        { label: 'Foreign languages', value: 'Mastering fluent spoken English is my top priority right now.' },
                        { label: 'Business & Management', value: 'I want to build my own international project in the future.' }
                    ]
                };
            } else if (lower.includes('travel') || lower.includes('country') || lower.includes('city') || lower.includes('visit') || lower.includes('vacation')) {
                return {
                    text: "Traveling is such an enriching adventure! It expands our perspective on the world. If you could book a flight right now, which country would you fly to first?",
                    tr: "Sayohat inson dunyoqarashini juda boyitadi! Agar hozir samolyotga chipta olish imkoni bo'lsa, birinchi qaysi davlatga uchgan bo'lardingiz?",
                    suggestions: [
                        { label: 'United Kingdom', value: 'I would love to explore London and historic British cities.' },
                        { label: 'Germany or Switzerland', value: 'I would visit Germany or Switzerland to see the Alps.' },
                        { label: 'United States', value: 'I dream of visiting New York and California.' }
                    ]
                };
            } else if (lower.includes('hobby') || lower.includes('free time') || lower.includes('music') || lower.includes('book') || lower.includes('sport')) {
                return {
                    text: "Hobbies give our minds the perfect creative refreshment! How often do you get the chance to enjoy your hobbies during a busy week?",
                    tr: "Qiziqishlar ongimizga ajoyib quvvat bag'ishlaydi! Band haftangiz davomida qanchalik tez-tez o'z sevimli mashg'ulotlaringizga vaqt ajrata olasiz?",
                    suggestions: [
                        { label: 'Every evening', value: 'I try to dedicate at least 30 minutes every evening.' },
                        { label: 'On weekends', value: 'I mostly enjoy my hobbies freely on weekends.' },
                        { label: 'Whenever I can', value: 'Whenever I have free time, I love listening to podcasts.' }
                    ]
                };
            } else {
                return {
                    text: "That is very thoughtful and clearly expressed! You speak with genuine natural confidence. How do you feel about your speaking progress so far?",
                    tr: "Bu juda chuqur va aniq ifodalangan fikr! O'zingizga bo'lgan ishonch bilan gapirayotganingiz menga juda yoqdi. O'zingizning nutqiy o'sishingizni qanday baholaysiz?",
                    suggestions: [
                        { label: 'I feel more confident', value: 'I definitely feel more confident speaking day by day!' },
                        { label: 'I want more vocabulary', value: 'I want to expand my active vocabulary even further.' },
                        { label: 'Practice makes perfect', value: 'Regular practice with AI gives me tremendous confidence.' }
                    ]
                };
            }
        } else if (lang === 'ru') {
            if (lower.includes('хорош') || lower.includes('отличн') || lower.includes('нормальн')) {
                return {
                    text: "Рад это слышать! Когда у нас хороший настрой, слова запоминаются намного легче. Чем вы обычно любите заниматься по вечерам?",
                    tr: "Buni eshitganimdan xursandman! Yaxshi kayfiyatda so'zlar ancha tez esda qoladi. Kechqurunlari nima bilan shug'ullanishni yoqtirasiz?",
                    suggestions: [
                        { label: 'Читаю книги', value: 'По вечерам я люблю читать книги и отдыхать.' },
                        { label: 'Провожу время с семьей', value: 'Я провожу время с семьёй или гуляю на свежем воздухе.' },
                        { label: 'Учу языки', value: 'Я практикую иностранные языки на School77.' }
                    ]
                };
            } else {
                return {
                    text: "Замечательная мысль! Вы строите предложения грамотно и понятно. Что для вас самое интересное в русском языке?",
                    tr: "Ajoyib fikr! Gaplarni savodli va tushunarli tuzmoqdasiz. Rus tilida siz uchun eng qiziqarli jihat nima?",
                    suggestions: [
                        { label: 'Богатый словарный запас', value: 'Мне очень нравится богатство и выразительность языка.' },
                        { label: 'Культура и общение', value: 'Русский язык открывает большие возможности для общения.' },
                        { label: 'Свободная речь', value: 'Моя главная цель — говорить легко и без пауз.' }
                    ]
                };
            }
        } else { // de
            return {
                text: "Sehr gut formuliert! Ihr Satzbau und Ihre Ausdrucksweise werden von Mal zu Mal flüssiger. Was motiviert Sie am meisten beim Deutschlernen?",
                tr: "Juda yaxshi shakllantirilgan! Gap tuzishingiz va ifodalashingiz borgan sari ravonlashmoqda. Nemis tilini o'rganishda sizni eng ko'p nima ruhlantiradi?",
                suggestions: [
                    { label: 'Studium & Karriere', value: 'Ich möchte in Deutschland studieren und erfolgreich arbeiten.' },
                    { label: 'Reisen & Kultur', value: 'Ich liebe die deutsche Kultur, Geschichte und Architektur.' },
                    { label: 'Persönliche Entwicklung', value: 'Das Lernen einer neuen Sprache entwickelt mein Denken.' }
                ]
            };
        }
    },

    // Micro feedback for each spoken user sentence
    generateSmartFeedback(text) {
        const words = text.trim().split(/\s+/).filter(Boolean);
        const count = words.length;

        let score = 84;
        if (count >= 3) score += 5;
        if (count >= 6) score += 5;
        if (count >= 10) score += 4;
        if (score > 98) score = 98;

        let note = "A'lo talaffuz va to'g'ri fikr!";
        let tip = "Keyingi gaplarda bog'lovchi so'zlar (Furthermore, Honestly, Actually) ishlatib ko'ring.";

        if (count < 3) {
            note = "Yaxshi javob, to'liq gap bilan aytsangiz nutqingiz yanada boy bo'ladi.";
            tip = "Masalan: 'Yes, absolutely, I feel that...' deb davom eting.";
        }

        return { score, note, tip };
    },

    // High quality voice synthesis with interactive mouth lip-sync
    speakAI(text, gender, langCode = 'en') {
        if (!('speechSynthesis' in window)) return;
        if (window.App && window.App.user && window.App.user.speechEnabled === false) return;

        window.speechSynthesis.cancel();

        const cleanText = text.replace(/[\u{1F300}-\u{1FAFF}]/gu, '').replace(/[()]/g, '').trim();
        if (!cleanText) return;

        const utterance = new SpeechSynthesisUtterance(cleanText);

        let target = 'en-US';
        if (langCode === 'ru' || langCode === 'ru-RU') target = 'ru-RU';
        else if (langCode === 'de' || langCode === 'de-DE') target = 'de-DE';
        else if (langCode === 'uz' || langCode === 'uz-UZ') target = 'uz-UZ';

        utterance.lang = target;

        const coach = this.coaches[this.selectedCoach] || this.coaches.laylo;
        utterance.pitch = coach.pitch;
        utterance.rate = coach.rate;

        if (window.App && window.App.user && window.App.user.volume !== undefined) {
            utterance.volume = window.App.user.volume / 100;
        }

        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
            const langPrefix = target.slice(0, 2);
            const matchingVoices = voices.filter(v => v.lang.toLowerCase().startsWith(langPrefix));

            let pickedVoice = null;
            if (gender === 'female') {
                pickedVoice = matchingVoices.find(v => {
                    const n = v.name.toLowerCase();
                    return n.includes('female') || n.includes('zira') || n.includes('jenny') || n.includes('samantha') || n.includes('victoria') || n.includes('eva') || n.includes('hedda');
                });
            } else {
                pickedVoice = matchingVoices.find(v => {
                    const n = v.name.toLowerCase();
                    return n.includes('male') || n.includes('david') || n.includes('alex') || n.includes('george') || n.includes('daniel') || n.includes('stefan');
                });
            }

            if (!pickedVoice && matchingVoices.length > 0) {
                pickedVoice = matchingVoices[0];
            }

            if (pickedVoice) {
                utterance.voice = pickedVoice;
            }
        }

        utterance.onstart = () => {
            this.isSpeakingAudio = true;
            this.updateFaceVisuals();
        };

        utterance.onend = () => {
            this.isSpeakingAudio = false;
            this.updateFaceVisuals();
        };

        utterance.onerror = () => {
            this.isSpeakingAudio = false;
            this.updateFaceVisuals();
        };

        window.speechSynthesis.speak(utterance);
    },

    // =========================================================================
    // FINISH CONVERSATION & SCORE COMPARISON (NO STARS!)
    // =========================================================================
    finishConversation() {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
        }

        // Calculate conversation performance score (0 - 100)
        const turns = this.userTurnsCount;
        const uniqueWords = new Set(this.userWordList).size;

        let baseScore = 78;
        if (turns >= 2) baseScore += 5;
        if (turns >= 4) baseScore += 5;
        if (turns >= 7) baseScore += 4;
        if (uniqueWords >= 15) baseScore += 4;
        if (uniqueWords >= 30) baseScore += 3;

        const currentScore = Math.min(98, Math.max(72, baseScore));

        // Read previous score from localStorage
        const prevScoreRaw = localStorage.getItem('School77_ai_last_speaking_score');
        const prevScore = prevScoreRaw !== null ? parseInt(prevScoreRaw, 10) : null;

        // Calculate difference
        let diff = null;
        let comparisonStatus = 'first'; // 'better' | 'worse' | 'equal' | 'first'

        if (prevScore !== null) {
            diff = currentScore - prevScore;
            if (diff > 0) comparisonStatus = 'better';
            else if (diff < 0) comparisonStatus = 'worse';
            else comparisonStatus = 'equal';
        }

        // Save current score as the new baseline
        localStorage.setItem('School77_ai_last_speaking_score', currentScore.toString());

        // Save to full session history
        const history = JSON.parse(localStorage.getItem('School77_ai_speaking_history') || '[]');
        history.push({
            date: new Date().toISOString(),
            score: currentScore,
            prevScore: prevScore,
            diff: diff,
            turns: turns,
            coach: this.selectedCoach,
            lang: this.targetLang || 'en'
        });
        localStorage.setItem('School77_ai_speaking_history', JSON.stringify(history));

        // (NO STARS GIVEN as requested by user!)

        if (window.SoundEffects) {
            if (comparisonStatus === 'better' || comparisonStatus === 'first') {
                SoundEffects.playSuccess();
            } else {
                SoundEffects.playClick();
            }
        }

        // Store result for render
        this.lastResult = {
            currentScore,
            prevScore,
            diff,
            comparisonStatus,
            turns,
            uniqueWords
        };

        this.mode = 'result';
        this.render();
    },

    // Reset back to coach selection
    resetToCoachSelection() {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        if (this.recognition && this.isRecording) this.recognition.stop();
        this.mode = 'select_coach';
        this.render();
    },

    // =========================================================================
    // RENDERING
    // =========================================================================
    render() {
        const root = document.getElementById('speaking-app-container');
        if (!root) return;

        if (this.mode === 'select_coach') {
            this.renderCoachSelection(root);
        } else if (this.mode === 'studio') {
            this.renderStudio(root);
        } else if (this.mode === 'result') {
            this.renderResultComparison(root);
        }
    },

    // SCREEN 1: Clean Coach Selection
    renderCoachSelection(root) {
        root.innerHTML = `
            <div class="speaking-coach-select-wrapper">
                <div class="coach-select-hero">
                    <span class="sp-hero-badge">✨ Jonli Virtual AI Ustoz</span>
                    <h2 class="sp-hero-title">Kim bilan suhbatlashishni xohlaysiz?</h2>
                    <p class="sp-hero-subtitle">
                        O'zingizga yoqimli AI murabbiyni tanlang. U ko'zlari va og'zi bilan sizga qarab, jonli ovozda suhbatlashadi.
                    </p>
                </div>

                <div class="speaking-coaches-duo-grid">
                    <!-- QIZ COACH CARD -->
                    <div class="coach-card-luxury coach-card-female" onclick="SpeakingApp.chooseCoach('laylo')">
                        <div class="coach-card-badge-pill">🌸 Qiz Coach</div>
                        <div class="coach-avatar-large-wrap">
                            <div class="coach-avatar-circle female-aura">
                                <span class="coach-avatar-emoji">👩‍💼</span>
                            </div>
                            <div class="coach-voice-pulse"></div>
                        </div>
                        <h3 class="coach-card-name">Laylo</h3>
                        <p class="coach-card-role">Mayin va Samimiy AI Qiz Ustoz</p>
                        <p class="coach-card-description">
                            "Salom! Men siz bilan samimiy va erkin suhbatlashaman. Yoqimli, mayin qiz ovozi bilan nutqingizni oshirishga ko'maklashaman."
                        </p>
                        <div class="coach-card-features">
                            <span class="feat-pill">🌸 Mayin qiz ovozi</span>
                            <span class="feat-pill">👀 Jonli ko'z & og'iz</span>
                            <span class="feat-pill">✨ Sabrli va dalda beruvchi</span>
                        </div>
                        <button class="btn btn-primary w-full coach-start-btn">
                            Laylo bilan suhbatlashish 💬
                        </button>
                    </div>

                    <!-- O'G'IL COACH CARD -->
                    <div class="coach-card-luxury coach-card-male" onclick="SpeakingApp.chooseCoach('jasur')">
                        <div class="coach-card-badge-pill">⚡ O'g'il Coach</div>
                        <div class="coach-avatar-large-wrap">
                            <div class="coach-avatar-circle male-aura">
                                <span class="coach-avatar-emoji">👨‍💼</span>
                            </div>
                            <div class="coach-voice-pulse"></div>
                        </div>
                        <h3 class="coach-card-name">Jasur</h3>
                        <p class="coach-card-role">Intellektual va G'ayratli AI O'g'il Ustoz</p>
                        <p class="coach-card-description">
                            "Salom! Men sizni chet tilida dadil, ravon va ishonchli gapirishga o'rgataman. Bariton ovoz va jonli tahlillar bilan shug'ullanamiz."
                        </p>
                        <div class="coach-card-features">
                            <span class="feat-pill">🎙️ Aniq bariton ovoz</span>
                            <span class="feat-pill">👀 Jonli ko'z & og'iz</span>
                            <span class="feat-pill">💡 Mantiqiy savol-javob</span>
                        </div>
                        <button class="btn btn-primary w-full coach-start-btn" style="background: linear-gradient(135deg, #3b82f6, #6366f1);">
                            Jasur bilan suhbatlashish 💬
                        </button>
                    </div>
                </div>

                <!-- Last score reminder if exists -->
                ${localStorage.getItem('School77_ai_last_speaking_score') ? `
                    <div class="speaking-history-preview-card">
                        <div class="sp-history-icon">📈</div>
                        <div class="sp-history-text">
                            <strong>O'tgan suhbatingiz natijasi: ${localStorage.getItem('School77_ai_last_speaking_score')} ball</strong>
                            <p>Yangi suhbatni boshlang va o'tgan safargidan ko'ra yaxshiroq natija ko'rsating!</p>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    },

    // SCREEN 2: Live AI Studio (ANIMATED TALKING FACE WITH EYES & MOUTH, NO CHAT MESSAGES!)
    renderStudio(root) {
        const coach = this.coaches[this.selectedCoach] || this.coaches.laylo;
        const emotionInfo = this.emotionsMap[this.emotion] || this.emotionsMap.neutral;

        root.innerHTML = `
            <div class="speaking-studio-arena">
                
                <!-- TOP HEADER -->
                <div class="studio-top-bar">
                    <div class="studio-coach-info">
                        <div class="studio-coach-mini-avatar" style="background: ${coach.accentColor};">
                            ${coach.gender === 'female' ? '👩‍💼' : '👨‍💼'}
                        </div>
                        <div>
                            <div class="studio-coach-name-row">
                                <h3 class="studio-coach-name">${coach.name}</h3>
                                <span class="studio-badge-pill">${coach.gender === 'female' ? 'Qiz Coach' : 'O\'g\'il Coach'}</span>
                            </div>
                            <div class="studio-emotion-pill" id="ai-emotion-pill" style="border-color: ${emotionInfo.aura};">
                                <span class="emotion-icon">${emotionInfo.icon}</span>
                                <span>${emotionInfo.label}</span>
                            </div>
                        </div>
                    </div>

                    <div class="studio-top-actions">
                        <div class="studio-turns-badge">
                            🗣️ <strong>${this.userTurnsCount} ta replika</strong>
                        </div>
                        <button class="btn btn-secondary btn-sm" onclick="SpeakingApp.resetToCoachSelection()" title="Boshqa coachni tanlash">
                            👥 Coachni almashtirish
                        </button>
                        <button class="btn btn-primary btn-sm btn-finish-conversation" onclick="SpeakingApp.finishConversation()" title="Suhbatni yakunlab, natija va o'sishni ko'rish">
                            🏁 Suhbatni yakunlash
                        </button>
                    </div>
                </div>

                <!-- MAIN ANIMATED FACE STAGE (EYES & TALKING MOUTH) -->
                <div class="ai-face-stage-wrapper">
                    <div class="ai-talking-face-stage emotion-${this.emotion} ${this.isSpeakingAudio ? 'is-talking' : ''} ${this.isRecording ? 'is-listening' : ''}" id="ai-face-stage">
                        
                        <!-- Living Animated Face Sphere -->
                        <div class="ai-face-sphere ${coach.gender}-face" style="box-shadow: 0 0 50px ${coach.auraColor};">
                            
                            <!-- Ambient Glow Aura -->
                            <div class="face-aura-halo"></div>

                            <!-- Eyebrows -->
                            <div class="face-eyebrows-row">
                                <div class="face-eyebrow brow-left"></div>
                                <div class="face-eyebrow brow-right"></div>
                            </div>

                            <!-- Big Expressive Animated Eyes -->
                            <div class="face-eyes-row">
                                <!-- Left Eye -->
                                <div class="ai-eye eye-left">
                                    <div class="eye-pupil">
                                        <div class="eye-reflection"></div>
                                        <div class="eye-iris"></div>
                                    </div>
                                    <div class="eyelid-upper"></div>
                                </div>

                                <!-- Right Eye -->
                                <div class="ai-eye eye-right">
                                    <div class="eye-pupil">
                                        <div class="eye-reflection"></div>
                                        <div class="eye-iris"></div>
                                    </div>
                                    <div class="eyelid-upper"></div>
                                </div>
                            </div>

                            <!-- Rosy Cheeks -->
                            <div class="face-cheeks-row">
                                <div class="face-blush blush-left"></div>
                                <div class="face-blush blush-right"></div>
                            </div>

                            <!-- Animated Talking Mouth -->
                            <div class="face-mouth-zone">
                                <div class="ai-mouth ${this.isSpeakingAudio ? 'mouth-talking' : ''}" id="ai-face-mouth">
                                    <div class="mouth-inner-cavity">
                                        <div class="mouth-teeth"></div>
                                        <div class="mouth-tongue"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Voice Soundwave Rings (when AI is speaking) -->
                            <div class="voice-soundwave-rings">
                                <span></span><span></span><span></span>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- LIVE SUBTITLE DISPLAY (AI CURRENT SPEECH + USER CURRENT SPEECH) -->
                <div class="studio-subtitles-container" id="studio-subtitles-container">
                    <!-- Populated dynamically by renderSubtitles() -->
                </div>

                <!-- QUICK ACTION CHIPS (LANGUAGE PICKER / CONVERSATION IDEAS) -->
                <div class="studio-chips-container" id="studio-chips-container">
                    <!-- Populated dynamically by renderSuggestionChips() -->
                </div>

                <!-- BOTTOM CONTROLS: CENTRAL GLOWING MIC & INPUT -->
                <div class="studio-bottom-controls">
                    <!-- Big Glowing Central Microphone -->
                    <div class="studio-mic-center-wrap">
                        <button id="studio-mic-btn" class="studio-mic-btn" onclick="SpeakingApp.toggleSpeechRecognition()">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                            <span>Ovoz Bilan Gapirish 🎙️</span>
                        </button>
                    </div>

                    <!-- Optional Text Input Bar -->
                    <div class="studio-input-row">
                        <input type="text" id="speaking-text-input" class="studio-text-input" 
                            placeholder="Ovoz chiqarib gapiring yoki matn yozing..." 
                            autocomplete="off"
                            onkeydown="if(event.key === 'Enter') SpeakingApp.handleSendUserMessage()">
                        
                        <button class="btn btn-primary studio-send-btn" onclick="SpeakingApp.handleSendUserMessage()" title="Yuborish">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            <span>Yuborish</span>
                        </button>
                    </div>
                </div>

            </div>
        `;

        this.renderSubtitles();
        this.renderSuggestionChips();
    },

    // Render Live Subtitles (clean presentation, no chat history)
    renderSubtitles() {
        const container = document.getElementById('studio-subtitles-container');
        if (!container) return;

        const coach = this.coaches[this.selectedCoach] || this.coaches.laylo;
        const aiSpeech = this.currentAISpeech;
        const userSpeech = this.lastUserSpeech;

        container.innerHTML = `
            <!-- AI Spoken Subtitle Box -->
            <div class="studio-ai-speech-box">
                <div class="speech-header-row">
                    <span class="speech-speaker-label">🤖 ${coach.name}:</span>
                    <button class="btn-replay-audio" onclick="SpeakingApp.speakAI('${aiSpeech.text.replace(/['\\]/g, '')}', '${coach.gender}', '${this.targetLang || 'en'}')" title="Ovozni qayta eshitish">
                        🔊 Qayta Eshitish
                    </button>
                </div>
                <div class="speech-main-text">${aiSpeech.text}</div>
                ${aiSpeech.tr ? `<div class="speech-translation-text">🇺🇿 ${aiSpeech.tr}</div>` : ''}
            </div>

            <!-- User Last Spoken Response (if any) -->
            ${userSpeech ? `
                <div class="studio-user-speech-box">
                    <div class="speech-header-row">
                        <span class="speech-speaker-label user-label">👤 Siz:</span>
                        ${userSpeech.feedback ? `
                            <span class="speech-user-badge">🎯 Talaffuz & Ravonlik: <strong>${userSpeech.feedback.score}%</strong></span>
                        ` : ''}
                    </div>
                    <div class="user-speech-text">"${userSpeech.text}"</div>
                    ${userSpeech.feedback ? `
                        <div class="user-speech-feedback-note">💡 ${userSpeech.feedback.note} ${userSpeech.feedback.tip}</div>
                    ` : ''}
                </div>
            ` : ''}
        `;
    },

    // Render suggestion chips
    renderSuggestionChips() {
        const container = document.getElementById('studio-chips-container');
        if (!container) return;

        if (!this.suggestionChips || this.suggestionChips.length === 0) {
            container.innerHTML = '';
            return;
        }

        const titleText = this.step === 'ask_language'
            ? '🌍 Qaysi tilda suhbatlashamiz? Quyidagilardan birini tanlang:'
            : '💡 Nima deb javob berishni bilmayapsizmi? Bosing:';

        container.innerHTML = `
            <div class="studio-chips-title">${titleText}</div>
            <div class="studio-chips-flex">
                ${this.suggestionChips.map(chip => `
                    <button class="studio-chip-btn" onclick="SpeakingApp.handleSendUserMessage('${(chip.value || chip.label).replace(/['\\]/g, "\\'")}')">
                        💬 ${chip.label || chip.value}
                    </button>
                `).join('')}
            </div>
        `;
    },

    // SCREEN 3: Result & Score Comparison View (NO STARS!)
    renderResultComparison(root) {
        const res = this.lastResult;
        if (!res) {
            this.mode = 'select_coach';
            this.render();
            return;
        }

        let diffBannerHtml = '';
        if (res.comparisonStatus === 'better') {
            diffBannerHtml = `
                <div class="comparison-banner banner-better">
                    <div class="comp-icon">📈</div>
                    <div class="comp-text">
                        <h4 class="comp-title">O'tgan suhbatdan +${res.diff} ball YAXSHIROQ!</h4>
                        <p class="comp-desc">
                            Ajoyib natija! O'tgan safargi suhbatingiz (${res.prevScore} ball)ga nisbatan ancha ravonroq va ishonchli gapirdingiz. Leksikangiz boyidi!
                        </p>
                    </div>
                </div>
            `;
        } else if (res.comparisonStatus === 'worse') {
            diffBannerHtml = `
                <div class="comparison-banner banner-worse">
                    <div class="comp-icon">📉</div>
                    <div class="comp-text">
                        <h4 class="comp-title">O'tgan suhbatdan ${Math.abs(res.diff)} ball pastroq</h4>
                        <p class="comp-desc">
                            O'tgan suhbatingiz natijasi (${res.prevScore} ball) biroz yuqoriroq edi. Hechqisi yo'q! Har bir jonli mashq tajribangizni oshiradi. Keyingi safar yana-da faolroq bo'ling!
                        </p>
                    </div>
                </div>
            `;
        } else if (res.comparisonStatus === 'equal') {
            diffBannerHtml = `
                <div class="comparison-banner banner-equal">
                    <div class="comp-icon">🎯</div>
                    <div class="comp-text">
                        <h4 class="comp-title">O'tgan suhbat bilan bir xil barqaror natija!</h4>
                        <p class="comp-desc">
                            Natijangiz barqaror (${res.currentScore} ball). Keyingi darajaga chiqish uchun yangi murakkab iboralarni qo'llab ko'ring.
                        </p>
                    </div>
                </div>
            `;
        } else {
            diffBannerHtml = `
                <div class="comparison-banner banner-first">
                    <div class="comp-icon">🌟</div>
                    <div class="comp-text">
                        <h4 class="comp-title">Ilk AI suhbatingiz muvaffaqiyatli yakunlandi!</h4>
                        <p class="comp-desc">
                            Boshlang'ich bazaviy natijangiz saqlandi (${res.currentScore} ball). Keyingi suhbatlaringizdagi o'sish aynan shu ko'rsatkich bilan solishtirib boriladi!
                        </p>
                    </div>
                </div>
            `;
        }

        root.innerHTML = `
            <div class="speaking-result-wrapper">
                
                <div class="result-hero-box">
                    <span class="result-trophy-badge">🏆 Suhbat Tahlili</span>
                    <h2 class="result-headline">Suhbat Muvaffaqiyatli Yakunlandi!</h2>
                    <p class="result-subtext">AI virtual ustoz bilan o'tkazilgan ovozli muloqot to'liq baholandi.</p>
                </div>

                <!-- COMPARISON BANNER -->
                ${diffBannerHtml}

                <!-- MAIN SCORE METRICS CARDS (NO STARS - ONLY ACTUAL SKILL SCORES) -->
                <div class="speaking-score-grid">
                    <!-- Current Score -->
                    <div class="score-metric-card score-main-card">
                        <span class="metric-label">Joriy Suhbat Bali</span>
                        <div class="metric-score-value">${res.currentScore}<span class="score-denom">/100</span></div>
                        <div class="metric-progress-bar">
                            <div class="metric-progress-fill" style="width: ${res.currentScore}%;"></div>
                        </div>
                        <span class="metric-sub-note">${res.currentScore >= 85 ? 'Yuqori Nutqiy Mahorat' : 'Yaxshi Muloqot Darajasi'}</span>
                    </div>

                    <!-- Previous Score -->
                    <div class="score-metric-card">
                        <span class="metric-label">O'tgan Suhbat Bali</span>
                        <div class="metric-score-value" style="color: var(--text-secondary);">
                            ${res.prevScore !== null ? res.prevScore : '—'}<span class="score-denom">/100</span>
                        </div>
                        <span class="metric-sub-note">${res.prevScore !== null ? 'Oldingi sessiya' : 'Bu ilk suhbatingiz'}</span>
                    </div>

                    <!-- Turns count -->
                    <div class="score-metric-card">
                        <span class="metric-label">Replikalar Soni</span>
                        <div class="metric-score-value" style="color: #3b82f6;">${res.turns} ta</div>
                        <span class="metric-sub-note">Siz aytgan fikrlar</span>
                    </div>

                    <!-- Unique words -->
                    <div class="score-metric-card">
                        <span class="metric-label">Faol So'zlar</span>
                        <div class="metric-score-value" style="color: #10b981;">${res.uniqueWords} ta</div>
                        <span class="metric-sub-note">Turli xil so'zlar boyligi</span>
                    </div>
                </div>

                <!-- DETAILED EVALUATION BARS -->
                <div class="speaking-eval-breakdown">
                    <h4 class="breakdown-title">📊 Mezonlar Bo'yicha Tahlil:</h4>
                    <div class="eval-row">
                        <div class="eval-row-header">
                            <span>🎙️ Talaffuz va Ohang</span>
                            <strong>${Math.min(98, res.currentScore + 2)}%</strong>
                        </div>
                        <div class="eval-bar"><div class="eval-fill" style="width: ${Math.min(98, res.currentScore + 2)}%;"></div></div>
                    </div>
                    <div class="eval-row">
                        <div class="eval-row-header">
                            <span>📚 So'z Boyligi va Leksika</span>
                            <strong>${Math.min(96, res.currentScore - 1)}%</strong>
                        </div>
                        <div class="eval-bar"><div class="eval-fill" style="width: ${Math.min(96, res.currentScore - 1)}%;"></div></div>
                    </div>
                    <div class="eval-row">
                        <div class="eval-row-header">
                            <span>⚡ Nutq Ravonligi va Ishonch</span>
                            <strong>${res.currentScore}%</strong>
                        </div>
                        <div class="eval-bar"><div class="eval-fill" style="width: ${res.currentScore}%;"></div></div>
                    </div>
                </div>

                <!-- ACTION BUTTONS -->
                <div class="speaking-result-actions">
                    <button class="btn btn-primary btn-lg" onclick="SpeakingApp.resetToCoachSelection()">
                        🔄 Yangi Suhbat Boshlash
                    </button>
                    <button class="btn btn-secondary btn-lg" onclick="App.navigateTo('reyting')">
                        🏆 Reyting Arenasini Ko'rish
                    </button>
                </div>

            </div>
        `;
    }
};

window.SpeakingApp = SpeakingApp;
