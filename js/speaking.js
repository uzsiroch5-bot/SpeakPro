// ==========================================================================
// SpeakPro — Speaking with AI (Nutq va Audio Suhbat Tizimi)
// Muallif: "Planeta" o'quv markazi • 2026 Edition
// ==========================================================================

const SpeakingApp = {
    // Current State
    lang: 'en', // 'en' | 'ru' | 'de'
    coachId: 'alex',
    topicId: 'daily',
    level: 'B1',
    isRecording: false,
    recognition: null,
    interimTranscript: '',
    userTurnsCount: 0,
    sessionStarsEarned: 0,
    autoSpeakAI: true,
    showTranslations: false,

    // Coaches definitions
    coaches: {
        alex: {
            id: 'alex',
            name: 'Alex',
            role: 'General English Coach',
            flag: '🇬🇧',
            avatar: '👨‍💼',
            lang: 'en',
            badge: 'Do\'stona Suhbatdosh',
            desc: 'Kundalik erkin muloqot, do\'stona savol-javob va nutq ravonligini oshirish bo\'yicha mutaxassis.',
            greeting: 'Hello there! I am Alex, your friendly English speaking coach. I am very excited to chat with you today! How has your day been going so far?',
            greetingUz: 'Salom! Men Alexman — sizning do\'stona ingliz tili so\'zlashuv repetitoringiz. Bugun siz bilan suhbatlashishdan juda mamnunman! Kuningiz qanday o\'tmoqda?'
        },
        sarah: {
            id: 'sarah',
            name: 'Sarah',
            role: 'IELTS Speaking Examiner',
            flag: '🇬🇧',
            avatar: '👩‍🏫',
            lang: 'en',
            badge: 'IELTS Band 7.5+',
            desc: 'IELTS Part 1, Part 2 va Part 3 mezonlari bo\'yicha chuqur savollar, akademik leksika va rasmiy tahlil.',
            greeting: 'Good day! My name is Sarah, and I will be guiding your IELTS Speaking practice today. Let us start: Could you please tell me about the area or neighborhood where you currently live?',
            greetingUz: 'Xayrli kun! Mening ismim Sarah, bugun sizning IELTS Speaking amaliyotingizni olib boraman. Keling, boshlaymiz: Hozir istiqomat qilayotgan hududingiz yoki mahallangiz haqida aytib bera olasizmi?'
        },
        maxim: {
            id: 'maxim',
            name: 'Максим',
            role: 'Репетитор русского языка',
            flag: '🇷🇺',
            avatar: '👨‍🏫',
            lang: 'ru',
            badge: 'Деловой & Разговорный',
            desc: 'Rus tilida erkin va to\'g\'ri gapirish, urg\'ular, kundalik va ishbilarmonlik iboralarini mukammal o\'rgatadi.',
            greeting: 'Здравствуйте! Рад нашему знакомству. Меня зовут Максим, я помогу вам заговорить на чистом и уверенном русском языке. Расскажите, чем вы любите заниматься в свободное время?',
            greetingUz: 'Assalomu alaykum! Tanishganimdan xursandman. Ismim Maksim, men sizga toza va ishonchli rus tilida so\'zlashishga yordam beraman. Ayting-chi, bo\'sh vaqtingizda nimalar qilishni yoqtirasiz?'
        },
        hans: {
            id: 'hans',
            name: 'Hans',
            role: 'Goethe Zertifikat Trainer',
            flag: '🇩🇪',
            avatar: '👨‍💼',
            lang: 'de',
            badge: 'Goethe & TestDaF',
            desc: 'Nemis tilida erkin suhbat, to\'g\'ri artikllar (der/die/das) va Germaniyada yashash uchun zarur nutq ko\'nikmalari.',
            greeting: 'Guten Tag! Mein Name ist Hans. Ich freue mich sehr, heute mit Ihnen Deutsch zu sprechen. Wie läuft Ihr Deutschlernen bisher und worüber möchten Sie heute sprechen?',
            greetingUz: 'Xayrli kun! Mening ismim Hans. Bugun siz bilan nemis tilida suhbatlashishdan juda mamnunman. Nemis tilini o\'rganishingiz qanday ketmoqda va bugun nima haqida suhbatlashmoqchisiz?'
        }
    },

    // Topics definitions
    topics: [
        { id: 'daily', name: 'Kundalik hayot & Qiziqishlar', icon: '☕', en: 'Daily Life & Hobbies', ru: 'Повседневная жизнь', de: 'Alltag & Hobbys' },
        { id: 'travel', name: 'Sayohat & Aeroport', icon: '✈️', en: 'Travel & Airport', ru: 'Путешествия и аэропорт', de: 'Reisen & Flughafen' },
        { id: 'interview', name: 'Ish suhbati & Karyera', icon: '💼', en: 'Job Interview & Career', ru: 'Собеседование и карьера', de: 'Vorstellungsgespräch' },
        { id: 'cafe', name: 'Restoran & Qahvaxona', icon: '🍽️', en: 'Restaurant & Food', ru: 'Ресторан и кухня', de: 'Restaurant & Café' },
        { id: 'tech', name: 'IT & Sun\'iy Intellekt', icon: '💻', en: 'Tech & Artificial Intelligence', ru: 'Технологии и ИИ', de: 'Technologie & KI' },
        { id: 'free', name: 'Erkin Do\'stona Suhbat', icon: '🌟', en: 'Open Free Conversation', ru: 'Свободная беседа', de: 'Freies Gespräch' }
    ],

    // Conversation messages
    messages: [],

    // Suggestion chips
    suggestionChips: [],

    // Init
    init() {
        this.setupSpeechRecognition();
        if (this.messages.length === 0) {
            this.resetConversation();
        } else {
            this.render();
        }
    },

    // Reset or Start New Session
    resetConversation() {
        const coach = this.coaches[this.coachId] || this.coaches.alex;
        this.messages = [
            {
                id: 'msg-0',
                sender: 'ai',
                text: coach.greeting,
                tr: coach.greetingUz,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                feedback: null
            }
        ];
        this.userTurnsCount = 0;
        this.sessionStarsEarned = 0;
        this.updateSuggestionChips();
        this.render();

        if (this.autoSpeakAI) {
            setTimeout(() => {
                this.speak(coach.greeting);
            }, 600);
        }
    },

    // Update Quick Suggestions based on topic & language
    updateSuggestionChips() {
        if (this.lang === 'en') {
            if (this.topicId === 'interview') {
                this.suggestionChips = [
                    'I have a strong background in software engineering.',
                    'My greatest strength is solving complex problems.',
                    'I am looking for new challenges to grow professionally.'
                ];
            } else if (this.topicId === 'travel') {
                this.suggestionChips = [
                    'I would like to visit European countries next summer.',
                    'Traveling broadens our horizons and introduces new cultures.',
                    'I prefer beach resorts and historical cities.'
                ];
            } else {
                this.suggestionChips = [
                    'My day has been very productive and exciting!',
                    'I am currently preparing for language exams.',
                    'I love reading books and practicing foreign languages.'
                ];
            }
        } else if (this.lang === 'ru') {
            this.suggestionChips = [
                'Мой день проходит очень продуктивно и интересно!',
                'В свободное время я увлекаюсь чтением и изучением языков.',
                'Я считаю, что практика речи — это главный ключ к успеху.'
            ];
        } else {
            this.suggestionChips = [
                'Mein Tag war bisher sehr erfolgreich und produktiv!',
                'Ich lerne Deutsch, weil ich in Deutschland studieren möchte.',
                'In meiner Freizeit lese ich gern Bücher und treibe Sport.'
            ];
        }
    },

    // Setup Web Speech API for real-time speech-to-text
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
                this.updateMicUI();
                if (event.error === 'not-allowed') {
                    if (window.App) App.showToast('Mikrofon ruxsati berilmadi. Matn orqali ham yozishingiz mumkin!', 'warning');
                }
            };

            rec.onend = () => {
                this.isRecording = false;
                this.updateMicUI();
                const input = document.getElementById('speaking-text-input');
                if (input && input.value.trim().length > 0) {
                    // Auto-send when speech ends comfortably
                    setTimeout(() => {
                        this.handleSendUserMessage();
                    }, 400);
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
            let langCode = 'en-US';
            if (this.lang === 'ru') langCode = 'ru-RU';
            else if (this.lang === 'de') langCode = 'de-DE';
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
        const micBtn = document.getElementById('speaking-mic-btn');
        const statusPill = document.getElementById('speaking-ai-status-indicator');
        if (micBtn) {
            if (this.isRecording) {
                micBtn.classList.add('recording-pulse');
                micBtn.innerHTML = `
                    <span class="mic-wave-anim"></span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                        <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                    <span>Eshitilmoqda (To'xtatish)...</span>
                `;
            } else {
                micBtn.classList.remove('recording-pulse');
                micBtn.innerHTML = `
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                    <span>Ovoz Bilan Gapirish 🎙️</span>
                `;
            }
        }

        if (statusPill) {
            if (this.isRecording) {
                statusPill.innerHTML = `<span class="status-dot status-recording"></span> Ovoz yozilmoqda...`;
                statusPill.style.color = '#ef4444';
            } else {
                statusPill.innerHTML = `<span class="status-dot status-online"></span> AI Tayyor • Muloqot faol`;
                statusPill.style.color = '#10b981';
            }
        }
    },

    // User sends a message (spoken or typed)
    handleSendUserMessage(customText) {
        const input = document.getElementById('speaking-text-input');
        const text = (customText || (input ? input.value : '')).trim();
        if (!text) return;

        if (input) input.value = '';

        // Add user message
        const userMsg = {
            id: 'msg-' + (this.messages.length + 1),
            sender: 'user',
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            feedback: this.generateSmartFeedback(text)
        };
        this.messages.push(userMsg);
        this.userTurnsCount++;

        if (window.SoundEffects) SoundEffects.playClick();

        // Award Stars every 3 turns
        if (this.userTurnsCount % 3 === 0) {
            this.sessionStarsEarned += 10;
            if (window.App && window.App.user) {
                window.App.user.stars += 10;
                window.App.saveUserState();
                window.App.updateHeaderStats();
                window.App.showToast('Ajoyib nutq faolligi! +10 Star ⭐ hisobingizga qo\'shildi!', 'success');
                if (window.SoundEffects) SoundEffects.playSuccess();
            }
        }

        this.renderChatList();
        this.scrollToBottom();

        // Show AI thinking indicator
        this.showAIThinking();

        // Generate and speak AI response after realistic pause
        setTimeout(() => {
            this.respondAsAI(text);
        }, 900);
    },

    showAIThinking() {
        const list = document.getElementById('speaking-chat-flow');
        if (!list) return;
        const thinkingHtml = `
            <div class="ai-speaking-bubble ai-thinking-bubble" id="speaking-thinking-temp">
                <div class="speaking-avatar ai-avatar">${this.coaches[this.coachId].avatar}</div>
                <div class="speaking-bubble-body">
                    <div class="typing-wave">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        `;
        list.insertAdjacentHTML('beforeend', thinkingHtml);
        this.scrollToBottom();
    },

    removeAIThinking() {
        const el = document.getElementById('speaking-thinking-temp');
        if (el) el.remove();
    },

    // Generate intelligent contextual response
    respondAsAI(userText) {
        this.removeAIThinking();
        const coach = this.coaches[this.coachId] || this.coaches.alex;
        const responseData = this.generateAIResponseText(userText);

        const aiMsg = {
            id: 'msg-' + (this.messages.length + 1),
            sender: 'ai',
            text: responseData.text,
            tr: responseData.tr,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            feedback: null
        };

        this.messages.push(aiMsg);
        this.suggestionChips = responseData.suggestions;

        this.renderChatList();
        this.renderSuggestionChips();
        this.scrollToBottom();

        if (this.autoSpeakAI) {
            this.speak(responseData.text);
        }
    },

    // AI Natural Dialogue Generator
    generateAIResponseText(userText) {
        const lower = userText.toLowerCase();

        if (this.lang === 'en') {
            if (lower.includes('name') || lower.includes('who are you')) {
                return {
                    text: `I am ${this.coaches[this.coachId].name}, your dedicated AI English partner. My mission is to make you completely fluent, confident and natural in English!`,
                    tr: `Men ${this.coaches[this.coachId].name}man — sizning shaxsiy sun'iy intellekt ingliz tili repetitoringiz. Maqsadim sizni ingliz tilida ravon, ishonchli va tabiiy so'zlashishga o'rgatish!`,
                    suggestions: ['What is your favorite topic to discuss?', 'How can I improve my English pronunciation?', 'Let us practice job interview questions!']
                };
            } else if (lower.includes('ielts') || lower.includes('exam') || lower.includes('test')) {
                return {
                    text: 'That is fantastic! In IELTS Speaking, clarity, lexical resource, and grammatical range are crucial. Could you elaborate on what specific band score you are targeting?',
                    tr: 'Bu juda ajoyib! IELTS Speaking bo\'limida aniqlik, so\'z boyligi va grammatik diapazon hal qiluvchi ahamiyatga ega. Aynan qaysi ballni maqsad qilayotganingizni ayta olasizmi?',
                    suggestions: ['I am aiming for an overall Band 7.5 or higher.', 'I want to improve my fluency and coherence.', 'Can we practice IELTS Part 2 cue cards?']
                };
            } else if (lower.includes('work') || lower.includes('job') || lower.includes('career') || lower.includes('developer') || lower.includes('it')) {
                return {
                    text: 'Career and modern technology are wonderful areas! Effective professional communication helps you present complex ideas simply. What motivated you to pursue this career path?',
                    tr: 'Karyera va zamonaviy texnologiyalar — ajoyib soha! Samarali kasbiy muloqot murakkab g\'oyalarni sodda tushuntirishga yordam beradi. Ushbu kasbni tanlashingizga nima turtki bo\'lgan?',
                    suggestions: ['I enjoy creating innovative solutions for people.', 'Technology evolves rapidly and offers huge global opportunities.', 'I love collaborating with international teams.']
                };
            } else if (lower.includes('travel') || lower.includes('trip') || lower.includes('city') || lower.includes('country') || lower.includes('germany') || lower.includes('usa')) {
                return {
                    text: 'Travel gives us unforgettable memories and teaches cultural adaptability. If you had the chance to embark on a journey tomorrow, which country would be at the top of your list?',
                    tr: 'Sayohat bizga unutilmas xotiralar baxsh etadi va madaniy moslashuvchanlikka o\'rgatadi. Agar ertaga sayohatga chiqish imkoni bo\'lsa, ro\'yxatingizda qaysi davlat birinchi o\'rinda turardi?',
                    suggestions: ['I would definitely travel to Germany or the UK.', 'I love discovering historical architecture and local food.', 'Traveling helps me practice speaking with locals.']
                };
            } else {
                return {
                    text: 'That is very insightful and well-articulated! I love how you expressed that idea. How do you usually balance your language practice with your daily routine?',
                    tr: 'Bu juda mazmunli va chiroyli ifodalangan fikr! G\'oyangizni bunday bayon qilganingiz menga juda yoqdi. Odatda til o\'rganishni kundalik yumushlaringiz bilan qanday muvofiqlashtirasiz?',
                    suggestions: ['I try to dedicate at least 30 minutes every morning.', 'Using SpeakPro makes practicing fun and consistent.', 'I watch English videos and repeat after native speakers.']
                };
            }
        } else if (this.lang === 'ru') {
            if (lower.includes('привет') || lower.includes('здравствуй') || lower.includes('добр')) {
                return {
                    text: 'Очень приятно слышать вас! Прекрасное начало нашего диалога. Расскажите немного о ваших главных целях в изучении русского языка?',
                    tr: 'Sizni eshitish juda yoqimli! Suhbatimizning ajoyib boshlanishi. Rus tilini o\'rganishdagi asosiy maqsadlaringiz haqida bir oz aytib bering?',
                    suggestions: ['Я хочу свободно общаться с коллегами по работе.', 'Мне нужен русский язык для путешествий и бизнеса.', 'Я хочу говорить уверенно и без грамматических ошибок.']
                };
            } else {
                return {
                    text: 'Замечательная мысль! Вы отлично формулируете предложения. Скажите, что для вас самое интересное или сложное при изучении языка?',
                    tr: 'Ajoyib fikr! Gaplarni juda yaxshi tuzmoqdasiz. Ayting-chi, til o\'rganishda siz uchun eng qiziqarli yoki murakkab narsa nima?',
                    suggestions: ['Больше всего мне нравится расширять словарный запас.', 'Иногда бывает сложно сразу подобрать нужное слово.', 'Постоянная практика помогает преодолеть языковой барьер.']
                };
            }
        } else { // de
            return {
                text: 'Ausgezeichnet! Ihr Deutsch klingt schon sehr flüssig und strukturiert. Was gefällt Ihnen am meisten an der deutschen Sprache und Kultur?',
                tr: 'Ajoyib! Nemischa nutqingiz juda ravon va tartibli eshitilmoqda. Nemis tili va madaniyatida sizga eng ko\'p yoqadigan jihat nima?',
                suggestions: ['Die deutsche Sprache ist sehr logisch und präzise aufgebaut.', 'Ich interessiere mich für Kultur und Technologie in Deutschland.', 'Ich möchte meine Aussprache und Grammatik täglich verbessern.']
            };
        }
    },

    // AI Smart Feedback calculation
    generateSmartFeedback(text) {
        const words = text.trim().split(/\s+/).filter(Boolean);
        const wordCount = words.length;

        // Fluency score based on length and structure
        let score = 86;
        if (wordCount >= 3) score += 4;
        if (wordCount >= 6) score += 5;
        if (wordCount >= 10) score += 3;
        if (score > 98) score = 98;

        let note = "A'lo darajada! Fikringiz aniq va tushunarli bayon etildi.";
        let suggestion = "Muloqotni yanada boyitish uchun so'zlarni bog'lovchi iboralar (Furthermore, As a result, Actually) qo'shishingiz mumkin.";

        if (this.lang === 'en') {
            if (wordCount < 3) {
                note = "Yaxshi boshlanish, ammo to'liq gap bilan javob berish nutqingizni yanada professional qiladi.";
                suggestion = `Tavsiya: "Yes, definitely! I completely agree with this." shaklida kengaytirib ayting.`;
            } else {
                note = "Juda ravon va ishonchli talaffuz! Grammatik tuzilma mantiqiy.";
                suggestion = `Alternativ ifoda: "To be honest, ${text.toLowerCase().replace(/[.?!]/g, '')} is quite important to me."`;
            }
        } else if (this.lang === 'ru') {
            note = "Отличная интонация и чистая речь! Предложение построено верно.";
            suggestion = "Слова-связки: 'На самом деле', 'Я считаю, что...' nutqni yanada jonli qiladi.";
        } else {
            note = "Sehr gute Aussprache und Struktur! Weiter so.";
            suggestion = "Tipp: Achten Sie immer auf die Verbstellung an zweiter Position im Hauptsatz.";
        }

        return {
            score: score,
            note: note,
            suggestion: suggestion
        };
    },

    // Speech Output
    speak(text) {
        if (typeof speakForeignWord === 'function') {
            let code = 'en-US';
            if (this.lang === 'ru') code = 'ru-RU';
            else if (this.lang === 'de') code = 'de-DE';
            speakForeignWord(text, code);
        }
    },

    // Select Language
    selectLang(langCode) {
        this.lang = langCode;
        if (langCode === 'en') this.coachId = 'alex';
        else if (langCode === 'ru') this.coachId = 'maxim';
        else if (langCode === 'de') this.coachId = 'hans';
        this.resetConversation();
    },

    // Select Coach
    selectCoach(coachId) {
        this.coachId = coachId;
        const coach = this.coaches[coachId];
        if (coach) {
            this.lang = coach.lang;
        }
        this.resetConversation();
    },

    // Select Topic
    selectTopic(topicId) {
        this.topicId = topicId;
        this.resetConversation();
    },

    // Select Level
    selectLevel(lvl) {
        this.level = lvl;
        this.render();
    },

    toggleTranslations() {
        this.showTranslations = !this.showTranslations;
        this.renderChatList();
    },

    scrollToBottom() {
        const flow = document.getElementById('speaking-chat-flow');
        if (flow) {
            flow.scrollTop = flow.scrollHeight;
        }
    },

    // Main View Render
    render() {
        const root = document.getElementById('speaking-app-container');
        if (!root) return;

        const currentCoach = this.coaches[this.coachId] || this.coaches.alex;
        const activeTopic = this.topics.find(t => t.id === this.topicId) || this.topics[0];

        root.innerHTML = `
            <div class="speaking-layout-wrapper">
                
                <!-- TOP HEADER & CONTROLS STRIP -->
                <div class="speaking-top-bar">
                    <!-- Language & Coach Selector -->
                    <div class="speaking-controls-group">
                        <div class="speaking-lang-pills">
                            <button class="sp-pill ${this.lang === 'en' ? 'active' : ''}" onclick="SpeakingApp.selectLang('en')">
                                🇬🇧 English
                            </button>
                            <button class="sp-pill ${this.lang === 'ru' ? 'active' : ''}" onclick="SpeakingApp.selectLang('ru')">
                                🇷🇺 Русский
                            </button>
                            <button class="sp-pill ${this.lang === 'de' ? 'active' : ''}" onclick="SpeakingApp.selectLang('de')">
                                🇩🇪 Deutsch
                            </button>
                        </div>

                        <!-- Level Selector -->
                        <div class="speaking-level-pills">
                            ${['A1', 'A2', 'B1', 'B2', 'C1'].map(l => `
                                <button class="sp-lvl-btn ${this.level === l ? 'active' : ''}" onclick="SpeakingApp.selectLevel('${l}')">
                                    ${l}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Right Stats & Reset -->
                    <div class="speaking-stats-strip">
                        <div class="speaking-stat-item" title="Bugungi suhbatdagi replikalar">
                            <span>🗣️ Replikalar:</span>
                            <strong>${this.userTurnsCount} ta</strong>
                        </div>
                        <div class="speaking-stat-item" style="color: #f59e0b;" title="Suhbat davomida to'plangan yulduzlar">
                            <span>⭐ Ishlangan:</span>
                            <strong>+${this.sessionStarsEarned} Star</strong>
                        </div>
                        <button class="btn btn-secondary btn-sm" onclick="SpeakingApp.resetConversation()" title="Suhbatni boshidan boshlash">
                            🔄 Yangi Suhbat
                        </button>
                    </div>
                </div>

                <!-- COACH SELECTION ROW -->
                <div class="speaking-coaches-row">
                    ${Object.values(this.coaches).map(c => `
                        <div class="coach-mini-card ${this.coachId === c.id ? 'active' : ''}" onclick="SpeakingApp.selectCoach('${c.id}')">
                            <span class="coach-avatar">${c.avatar}</span>
                            <div class="coach-text">
                                <div class="coach-name-row">
                                    <strong>${c.name}</strong>
                                    <span class="coach-flag">${c.flag}</span>
                                </div>
                                <span class="coach-badge-sub">${c.badge}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- TOPIC STRIP -->
                <div class="speaking-topic-row">
                    <strong style="font-size: 13px; color: var(--text-secondary); margin-right: 6px;">Mavzu:</strong>
                    ${this.topics.map(t => `
                        <button class="topic-pill-btn ${this.topicId === t.id ? 'active' : ''}" onclick="SpeakingApp.selectTopic('${t.id}')">
                            ${t.icon} ${t.name}
                        </button>
                    `).join('')}
                </div>

                <!-- MAIN CHAT CONTAINER -->
                <div class="speaking-chat-arena">
                    <!-- Arena Header -->
                    <div class="chat-arena-header">
                        <div class="active-coach-banner">
                            <div class="speaking-avatar ai-avatar">${currentCoach.avatar}</div>
                            <div>
                                <h4 style="margin: 0; font-size: 17px; font-weight: 800; color: var(--text-primary);">
                                    ${currentCoach.name} — ${currentCoach.role}
                                </h4>
                                <p style="margin: 2px 0 0; font-size: 12px; color: var(--text-muted);">
                                    ${activeTopic.icon} Mavzu: <strong>${activeTopic.name}</strong> • Daraja: <strong>${this.level}</strong>
                                </p>
                            </div>
                        </div>

                        <div class="chat-header-actions">
                            <button class="btn-toggle-tr ${this.showTranslations ? 'active' : ''}" onclick="SpeakingApp.toggleTranslations()" title="Barcha xabarlar tarjimasini ko'rsatish">
                                👁️ ${this.showTranslations ? 'Tarjimalar (Ochiq)' : 'Tarjimalarni Ko\'rsatish'}
                            </button>
                            <div class="ai-status-pill" id="speaking-ai-status-indicator">
                                <span class="status-dot status-online"></span> AI Tayyor • Muloqot faol
                            </div>
                        </div>
                    </div>

                    <!-- Scrollable Chat Flow -->
                    <div class="speaking-chat-flow" id="speaking-chat-flow">
                        <!-- Populated dynamically by renderChatList() -->
                    </div>

                    <!-- Suggestion Chips Bar -->
                    <div class="speaking-chips-container" id="speaking-chips-container">
                        <!-- Populated dynamically by renderSuggestionChips() -->
                    </div>

                    <!-- Input & Voice Controls Bottom Bar -->
                    <div class="speaking-bottom-controls">
                        <div class="speaking-input-row">
                            <input type="text" id="speaking-text-input" class="speaking-text-input" 
                                placeholder="Javobingizni shu yerga yozing yoki pastdagi mikrofonni bosing..." 
                                autocomplete="off"
                                onkeydown="if(event.key === 'Enter') SpeakingApp.handleSendUserMessage()">
                            
                            <button class="btn btn-primary speaking-send-btn" onclick="SpeakingApp.handleSendUserMessage()" title="Yuborish">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                <span>Yuborish</span>
                            </button>
                        </div>

                        <!-- Big Microphone & Audio Assist Bar -->
                        <div class="speaking-mic-action-bar">
                            <button id="speaking-mic-btn" class="speaking-mic-btn" onclick="SpeakingApp.toggleSpeechRecognition()">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                    <line x1="12" y1="19" x2="12" y2="23"></line>
                                    <line x1="8" y1="23" x2="16" y2="23"></line>
                                </svg>
                                <span>Ovoz Bilan Gapirish 🎙️</span>
                            </button>

                            <div class="speaking-mic-hint">
                                💡 <strong>Maslahat:</strong> Mikrofon tugmasini bosing va to'g'ridan-to'g'ri chet tilida gapiring. AI ovozingizni tushunadi va talaffuzingizga baho beradi!
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `;

        this.renderChatList();
        this.renderSuggestionChips();
        this.scrollToBottom();
    },

    // Render individual chat bubbles
    renderChatList() {
        const flow = document.getElementById('speaking-chat-flow');
        if (!flow) return;

        const currentCoach = this.coaches[this.coachId] || this.coaches.alex;

        flow.innerHTML = this.messages.map(m => {
            const isAI = m.sender === 'ai';
            return `
                <div class="speaking-bubble-wrap ${isAI ? 'bubble-ai' : 'bubble-user'}">
                    <div class="speaking-avatar ${isAI ? 'ai-avatar' : 'user-avatar'}">
                        ${isAI ? currentCoach.avatar : '👤'}
                    </div>
                    <div class="speaking-bubble-content">
                        <div class="bubble-meta-header">
                            <strong>${isAI ? currentCoach.name : (window.App && window.App.user ? window.App.user.name : 'Siz')}</strong>
                            <span class="bubble-time">${m.time}</span>
                            ${isAI ? `
                                <button class="btn-bubble-audio" onclick="SpeakingApp.speak('${m.text.replace(/['\\]/g, '')}')" title="Ovozni qayta eshitish">
                                    🔊 Eshitish
                                </button>
                            ` : ''}
                        </div>

                        <div class="bubble-main-text">${m.text}</div>

                        ${isAI && (this.showTranslations || m.showTr) ? `
                            <div class="bubble-translation-text">
                                🇺🇿 ${m.tr}
                            </div>
                        ` : ''}

                        ${isAI && !this.showTranslations && !m.showTr ? `
                            <button class="btn-reveal-tr" onclick="SpeakingApp.revealSingleTr('${m.id}')">
                                👁️ O'zbekcha tarjimasi
                            </button>
                        ` : ''}

                        <!-- AI Smart Feedback for User messages -->
                        ${!isAI && m.feedback ? `
                            <div class="ai-smart-feedback-box">
                                <div class="feedback-badge-row">
                                    <span class="fb-score-pill">🎯 Talaffuz & Ravonlik: <strong>${m.feedback.score}%</strong></span>
                                    <span class="fb-eval-tag">A'lo nutq</span>
                                </div>
                                <div class="fb-note-text">${m.feedback.note}</div>
                                <div class="fb-suggestion-text">💡 ${m.feedback.suggestion}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
    },

    revealSingleTr(msgId) {
        const msg = this.messages.find(m => m.id === msgId);
        if (msg) {
            msg.showTr = true;
            this.renderChatList();
        }
    },

    // Render 3 suggestion chips
    renderSuggestionChips() {
        const container = document.getElementById('speaking-chips-container');
        if (!container) return;

        if (!this.suggestionChips || this.suggestionChips.length === 0) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = `
            <div class="chips-title">💡 Nima deb javob berishni bilmayapsizmi? Quyidagilardan birini bosing:</div>
            <div class="chips-flex-row">
                ${this.suggestionChips.map(chip => `
                    <button class="speaking-chip-btn" onclick="SpeakingApp.handleSendUserMessage('${chip.replace(/['\\]/g, "\\'")}')">
                        💬 "${chip}"
                    </button>
                `).join('')}
            </div>
        `;
    }
};

window.SpeakingApp = SpeakingApp;
