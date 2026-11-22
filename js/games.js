// School77 - Mini Games Engine & Real-Time Multiplayer
// Contains 3 interactive game modes:
// 1. 1 vs 1 Lug'at Bellashuv (Live Online + Bot Training)
// 2. Lug'at Bellashuv 6 Kishilik (Live Online Room + Bot Training)
// 3. Yozish 2 vs 2 (Typing Tug-of-War)

// Clear any stale vocabulary cache from previous sessions
(function() {
    try {
        // Reset School77Vocabulary cache on page load to ensure no synthetic words remain
        if (window.School77Vocabulary) {
            window.School77Vocabulary.cache = {};
        }
    } catch(e) {}
})();
const MiniGames = {
    // Current game modes
    mode1v1: 'live',
    mode6p: 'live',
    ws: null,
    wsConnected: false,
    radarTimer1v1: null,
    radarTimer6p: null,
    isLiveMatch: false,
    activeRoomId: null,

    // Current state holders
    state1v1: {
        active: false,
        lang: 'en',
        round: 0,
        totalRounds: 5,
        userScore: 0,
        opponentScore: 0,
        timer: null,
        timeLeft: 10,
        currentQuestion: null,
        answered: false,
        opponent: null,
        usedWords: new Set()
    },

    state6p: {
        active: false,
        lang: 'en',
        round: 0,
        totalRounds: 5,
        timer: null,
        timeLeft: 10,
        answered: false,
        players: [],
        usedWords: new Set()
    },

    state2v2: {
        active: false,
        lang: 'en',
        timeLeft: 40,
        timer: null,
        botInterval: null,
        teamScore: 50, // 0 = Blue wins, 100 = Red wins. Starts at 50 (balanced)
        userWordsCount: 0,
        currentWord: null,
        wordsQueue: []
    },

    // ==========================================
    // MASSIVE DIVERSE WORD POOL PROVIDER
    // ==========================================
    getGameWordPool(lang) {
        if (!this._cachedPools) this._cachedPools = {};
        if (this._cachedPools[lang] && this._cachedPools[lang].length >= 50) {
            return this._cachedPools[lang];
        }

        const pool = [];
        const seenWords = new Set();

        const addWord = (word, tr, phonetic, pos, example) => {
            if (!word || !tr) return;
            const cleanWord = String(word).trim();
            const lower = cleanWord.toLowerCase();
            // Strictly exclude synthetic mock words, numbers, underscores, and code symbols
            if (
                seenWords.has(lower) ||
                cleanWord.length < 2 ||
                cleanWord.length > 20 ||
                cleanWord.includes('_') ||
                cleanWord.includes('-') ||
                /\d/.test(cleanWord) ||
                cleanWord.includes('{') ||
                cleanWord.includes('}')
            ) return;

            seenWords.add(lower);
            pool.push({
                word: cleanWord,
                tr: String(tr).trim(),
                phonetic: phonetic || '',
                pos: pos || 'ot',
                example: example || ''
            });
        };

        // 1. From School77Vocabulary.rawLexicon (Hand-crafted genuine words)
        if (window.School77Vocabulary && School77Vocabulary.rawLexicon && School77Vocabulary.rawLexicon[lang]) {
            School77Vocabulary.rawLexicon[lang].forEach(item => {
                addWord(item.w || item.word, item.uz, item.ph || item.phonetic, item.pos, item.ex || item.example);
            });
        }

        // 2. From School77Data.vocabulary (Default genuine vocabulary)
        if (window.School77Data && School77Data.vocabulary && School77Data.vocabulary[lang]) {
            School77Data.vocabulary[lang].forEach(item => {
                addWord(item.word, item.tr, item.phonetic, item.pos, item.example);
            });
        }

        // 3. From Admin Custom Vocabulary
        if (window.AdminApp && AdminApp.data && Array.isArray(AdminApp.data.vocabulary)) {
            AdminApp.data.vocabulary.filter(v => v.lang === lang).forEach(item => {
                addWord(item.w, item.uz, item.ph, item.pos, item.ex);
            });
        }

        // 4. Fallback rich genuine vocabulary pool per language
        const genuinePools = {
            en: [
                { w: "freedom", uz: "ozodlik, erkinlik", ph: "/ˈfriː.dəm/" },
                { w: "success", uz: "muvaffaqiyat, zafar", ph: "/səkˈses/" },
                { w: "friendship", uz: "do'stlik, inoq bo'lish", ph: "/ˈfrend.ʃɪp/" },
                { w: "journey", uz: "sayohat, uzoq safar", ph: "/ˈdʒɜː.ni/" },
                { w: "courage", uz: "jasorat, mardlik", ph: "/ˈkʌr.ɪdʒ/" },
                { w: "education", uz: "ta'lim, o'qish", ph: "/ˌedʒ.ʊˈkeɪ.ʃən/" },
                { w: "happiness", uz: "baxt, quvonch", ph: "/ˈhæp.i.nəs/" },
                { w: "knowledge", uz: "bilim, ilmlilik", ph: "/ˈnɒl.ɪdʒ/" },
                { w: "opportunity", uz: "imkoniyat, fursat", ph: "/ˌɒp.əˈtjuː.nə.ti/" },
                { w: "confidence", uz: "ishonch, dadillik", ph: "/ˈkɒn.fɪ.dəns/" },
                { w: "challenge", uz: "sinov, qiyinchilik", ph: "/ˈtʃæl.ɪndʒ/" },
                { w: "inspiration", uz: "ilhom, ruhlanish", ph: "/ˌɪn.spɪˈreɪ.ʃən/" },
                { w: "fluency", uz: "ravon gapirish", ph: "/ˈfluː.ən.si/" },
                { w: "discovery", uz: "kashfiyot, yangilik", ph: "/dɪˈskʌv.ər.i/" },
                { w: "creativity", uz: "ijodkorlik, mahorat", ph: "/ˌkriː.eɪˈtɪv.ə.ti/" },
                { w: "technology", uz: "zamonaviy texnologiya", ph: "/tekˈnɒl.ə.dʒi/" },
                { w: "leadership", uz: "yetakchilik qobiliyati", ph: "/ˈliː.də.ʃɪp/" },
                { w: "perseverance", uz: "qat'iyat, sabot", ph: "/ˌpɜː.sɪˈvɪə.rəns/" },
                { w: "curiosity", uz: "qiziquvchanlik", ph: "/ˌkjʊə.riˈɒs.ə.ti/" },
                { w: "generosity", uz: "saxiylik, oliyjanoblik", ph: "/ˌdʒen.əˈrɒs.ə.ti/" },
                { w: "integrity", uz: "halollik, to'g'rilik", ph: "/ɪnˈteɡ.rə.ti/" },
                { w: "achievement", uz: "yutuq, natija", ph: "/əˈtʃiːv.mənt/" },
                { w: "harmony", uz: "ahillik, uyg'unlik", ph: "/ˈhɑː.mə.ni/" },
                { w: "patience", uz: "sabr, toqat", ph: "/ˈpeɪ.ʃəns/" },
                { w: "gratitude", uz: "minnatdorchilik", ph: "/ˈɡræt.ɪ.tʃuːd/" }
            ],
            ru: [
                { w: "свобода", uz: "ozodlik, erkinlik", ph: "[свабода]" },
                { w: "успех", uz: "muvaffaqiyat", ph: "[усп'эх]" },
                { w: "дружба", uz: "do'stlik", ph: "[дружба]" },
                { w: "знание", uz: "bilim", ph: "[знанийэ]" },
                { w: "счастье", uz: "baxt", ph: "[щ'аст'йэ]" },
                { w: "образование", uz: "ta'lim", ph: "[абразаванийэ]" },
                { w: "терпение", uz: "sabr", ph: "[т'эрп'энийэ]" },
                { w: "вдохновение", uz: "ilhom", ph: "[вдахнав'энийэ]" },
                { w: "развитие", uz: "rivojlanish", ph: "[разв'ит'ийэ]" },
                { w: "мужество", uz: "jasorat", ph: "[мужэства]" },
                { w: "уверенность", uz: "ishonch", ph: "[ув'эрэннаст']" },
                { w: "возможность", uz: "imkoniyat", ph: "[вазможнаст']" },
                { w: "достижение", uz: "yutuq", ph: "[даст'ижэнийэ]" },
                { w: "творчество", uz: "ijod", ph: "[творч'эства]" },
                { w: "будущее", uz: "kelajak", ph: "[будущ'эйэ]" },
                { w: "честность", uz: "halollik", ph: "[ч'эснаст']" },
                { w: "уважение", uz: "hurmat", ph: "[уважэнийэ]" },
                { w: "любознательность", uz: "qiziquvchanlik", ph: "[л'убазнат'эл'наст']" },
                { w: "благодарность", uz: "minnatdorlik", ph: "[благадарнаст']" },
                { w: "целеустремлённость", uz: "maqsad sari intilish", ph: "[ц'эл'эустр'эмл'оннаст']" }
            ],
            de: [
                { w: "Freiheit", uz: "ozodlik, erkinlik", ph: "[ˈfʁaɪ̯haɪ̯t]" },
                { w: "Erfolg", uz: "muvaffaqiyat, zafar", ph: "[ɛɐ̯ˈfɔlk]" },
                { w: "Freundschaft", uz: "do'stlik", ph: "[ˈfʁɔɪ̯ntʃaft]" },
                { w: "Wissen", uz: "bilim, ilm", ph: "[ˈvɪsn̩]" },
                { w: "Glück", uz: "baxt, omad", ph: "[ɡlʏk]" },
                { w: "Bildung", uz: "ta'lim, ma'rifat", ph: "[ˈbɪldʊŋ]" },
                { w: "Geduld", uz: "sabr, toqat", ph: "[ɡəˈdʊlt]" },
                { w: "Begeisterung", uz: "shijoat, ilhom", ph: "[bəˈɡaɪ̯stəʁʊŋ]" },
                { w: "Entwicklung", uz: "rivojlanish, o'sish", ph: "[ɛntˈvɪklʊŋ]" },
                { w: "Mut", uz: "mardlik, jasorat", ph: "[muːt]" },
                { w: "Selbstvertrauen", uz: "o'ziga ishonch", ph: "[ˈzɛlpstfɛɐ̯ˌtʁaʊ̯ən]" },
                { w: "Gelegenheit", uz: "qulay imkoniyat", ph: "[ɡəˈleːɡn̩haɪ̯t]" },
                { w: "Leistung", uz: "yutuq, natija", ph: "[ˈlaɪ̯stʊŋ]" },
                { w: "Kreativität", uz: "ijodkorlik", ph: "[kʁeatiwiˈtɛːt]" },
                { w: "Zukunft", uz: "kelajak", ph: "[ˈtsuːkʊnft]" },
                { w: "Ehrlichkeit", uz: "to'g'riso'zlik, halollik", ph: "[ˈeːɐ̯lɪçkaɪ̯t]" },
                { w: "Respekt", uz: "hurmat, ehtirom", ph: "[ʁeˈspɛkt]" },
                { w: "Neugier", uz: "qiziquvchanlik", ph: "[ˈnɔɪ̯ɡiːɐ̯]" },
                { w: "Dankbarkeit", uz: "minnatdorlik", ph: "[ˈdaŋkbaːɐ̯kaɪ̯t]" },
                { w: "Ausdauer", uz: "chidam, sabot", ph: "[ˈaʊ̯sdaʊ̯ɐ]" }
            ]
        };

        if (genuinePools[lang]) {
            genuinePools[lang].forEach(item => {
                addWord(item.w, item.uz, item.ph, 'ot', '');
            });
        }

        pool.sort(() => Math.random() - 0.5);
        this._cachedPools[lang] = pool;
        return pool.length > 0 ? pool : (School77Data.vocabulary[lang] || []);
    },

    getNextQuestion(lang, usedWordsSet) {
        const pool = this.getGameWordPool(lang);
        let available = pool.filter(w => !usedWordsSet.has(w.word.toLowerCase()));
        if (available.length === 0) {
            usedWordsSet.clear();
            available = pool;
        }

        const chosen = available[Math.floor(Math.random() * available.length)];
        usedWordsSet.add(chosen.word.toLowerCase());

        const otherTranslations = Array.from(new Set(
            pool.filter(w => w.tr !== chosen.tr && w.word.toLowerCase() !== chosen.word.toLowerCase()).map(w => w.tr)
        ));

        otherTranslations.sort(() => Math.random() - 0.5);
        const distractors = otherTranslations.slice(0, 3);

        while (distractors.length < 3) {
            distractors.push(['Kitob', 'Dars', 'Qalam', 'Shahar', 'Imkoniyat', 'Bilim'][distractors.length]);
        }

        const options = [...distractors, chosen.tr].sort(() => Math.random() - 0.5);

        return {
            ...chosen,
            distractors,
            options
        };
    },

    botNames: [
        { name: 'Azizbek Toshkent', avatar: '👨‍🎓', rating: 1450 },
        { name: 'Kamola Samarqand', avatar: '👩‍🎓', rating: 1380 },
        { name: 'Diyorbek Buxoro', avatar: '🧑‍💻', rating: 1520 },
        { name: 'Nodira Farg\'ona', avatar: '👩‍🔬', rating: 1410 },
        { name: 'Javohir Namangan', avatar: '👨‍🚀', rating: 1490 },
        { name: 'Elena Berlin', avatar: '👱‍♀️', rating: 1560 },
        { name: 'Alex London', avatar: '🧔', rating: 1610 },
        { name: 'Anna Moskva', avatar: '👩‍💼', rating: 1480 }
    ],

    // ==========================================
    // REAL-TIME WEBSOCKET CONTROLLER
    // ==========================================
    switch1v1Mode(mode) {
        this.mode1v1 = mode;
        const liveBtn = document.getElementById('btn-mode-1v1-live');
        const botBtn = document.getElementById('btn-mode-1v1-bot');
        if (liveBtn) liveBtn.classList.toggle('active', mode === 'live');
        if (botBtn) botBtn.classList.toggle('active', mode === 'bot');
        if (mode === 'live') {
            App.showToast("⚡ Jonli Onlayn Duel tanlandi! Haqiqiy o'quvchilar bilan bellashasiz.", 'success');
        } else {
            App.showToast("🤖 Mashg'ulot rejimi tanlandi. Bot bilan mashq qilasiz.", 'info');
        }
    },

    switch6pMode(mode) {
        this.mode6p = mode;
        const liveBtn = document.getElementById('btn-mode-6p-live');
        const botBtn = document.getElementById('btn-mode-6p-bot');
        if (liveBtn) liveBtn.classList.toggle('active', mode === 'live');
        if (botBtn) botBtn.classList.toggle('active', mode === 'bot');
        if (mode === 'live') {
            App.showToast("⚡ Jonli 6 kishilik xona tanlandi! Haqiqiy ishtirokchilar yig'iladi.", 'success');
        } else {
            App.showToast("🤖 Mashg'ulot rejimi tanlandi.", 'info');
        }
    },

    getWSUrl() {
        const loc = window.location;
        if (loc.protocol === 'file:' || !loc.host) {
            return 'ws://localhost:3000/ws/game';
        }
        const proto = (loc.protocol === 'https:') ? 'wss://' : 'ws://';
        return proto + loc.host + '/ws/game';
    },

    connectWS(onOpenCallback, onErrorCallback) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            if (onOpenCallback) onOpenCallback();
            return;
        }

        try {
            const url = this.getWSUrl();
            this.ws = new WebSocket(url);

            this.ws.onopen = () => {
                this.wsConnected = true;
                if (onOpenCallback) onOpenCallback();
            };

            this.ws.onmessage = (event) => {
                try {
                    const msg = JSON.parse(event.data);
                    this.handleWSMessage(msg);
                } catch(e) {}
            };

            this.ws.onerror = (err) => {
                this.wsConnected = false;
                if (onErrorCallback) onErrorCallback(err);
            };

            this.ws.onclose = () => {
                this.wsConnected = false;
            };
        } catch (e) {
            if (onErrorCallback) onErrorCallback(e);
        }
    },

    sendWS(obj) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(obj));
        }
    },

    handleWSMessage(msg) {
        // 1. 1v1 MATCH EVENTS
        if (msg.type === 'match_found') {
            this.isLiveMatch = true;
            this.activeRoomId = msg.roomId;
            clearInterval(this.radarTimer1v1);

            const radarTitle = document.getElementById('radar-1v1-title');
            const radarDesc = document.getElementById('radar-1v1-desc');
            if (radarTitle) radarTitle.innerText = "Raqib topildi! 🔥";
            if (radarDesc) radarDesc.innerText = `${msg.opponent.name} (${msg.opponent.avatar}) ulandi! Bellashuv boshlanmoqda...`;

            SoundEffects.playCorrect();

            setTimeout(() => {
                const matchBox = document.getElementById('game1v1-matchmaking');
                const arenaSection = document.getElementById('game1v1-arena-section');
                if (matchBox) matchBox.style.display = 'none';
                if (arenaSection) arenaSection.style.display = 'block';

                document.getElementById('game1v1-opponent-name').innerText = msg.opponent.name;
                document.getElementById('game1v1-opponent-avatar').innerText = msg.opponent.avatar;
                document.getElementById('game1v1-opponent-score').innerText = '0';
                document.getElementById('game1v1-user-score').innerText = '0';

                const liveBadge = document.getElementById('game1v1-live-badge');
                if (liveBadge) {
                    liveBadge.innerText = msg.isLivePlayer ? '🟢 Jonli' : '🤖 Smart Bot';
                    liveBadge.className = 'live-indicator-pill' + (msg.isLivePlayer ? '' : ' bot');
                }
            }, 1000);
        }

        if (msg.type === 'new_round') {
            this.state1v1.round = msg.round;
            this.state1v1.totalRounds = msg.totalRounds;
            this.state1v1.answered = false;
            this.state1v1.timeLeft = msg.timeLimitSec || 10;
            this.state1v1.currentQuestion = { word: msg.word, phonetic: msg.phonetic, options: msg.options };

            document.getElementById('game1v1-round-badge').innerText = `Raund ${msg.round} / ${msg.totalRounds}`;
            document.getElementById('game1v1-timer-text').innerText = `${this.state1v1.timeLeft}s`;
            document.getElementById('game1v1-question-word').innerText = msg.word;
            document.getElementById('game1v1-phonetic').innerText = msg.phonetic || '';

            speakForeignWord(msg.word, this.state1v1.lang);

            const optionsContainer = document.getElementById('game1v1-options-container');
            optionsContainer.innerHTML = '';
            msg.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'game-opt-btn';
                btn.innerText = opt;
                btn.onclick = () => this.handle1v1UserAnswer(opt, btn);
                optionsContainer.appendChild(btn);
            });

            // Start round timer
            clearInterval(this.state1v1.timer);
            this.state1v1.timer = setInterval(() => {
                this.state1v1.timeLeft--;
                const timerEl = document.getElementById('game1v1-timer-text');
                if (timerEl) timerEl.innerText = `${this.state1v1.timeLeft}s`;
                if (this.state1v1.timeLeft <= 0) {
                    clearInterval(this.state1v1.timer);
                }
            }, 1000);

            const oppBadge = document.getElementById('game1v1-opp-status');
            if (oppBadge) oppBadge.innerText = "O'ylamoqda...";
        }

        if (msg.type === 'player_answered') {
            if (msg.isUser) {
                document.getElementById('game1v1-user-score').innerText = msg.userScore;
            } else {
                document.getElementById('game1v1-opponent-score').innerText = msg.opponentScore;
                const oppBadge = document.getElementById('game1v1-opp-status');
                if (oppBadge) {
                    oppBadge.innerText = msg.isCorrect ? `Javob berdi! ⚡ +${msg.points}` : `Xato qildi ❌`;
                }
            }
        }

        if (msg.type === 'round_ended') {
            clearInterval(this.state1v1.timer);
            const allBtns = document.querySelectorAll('#game1v1-options-container .game-opt-btn');
            allBtns.forEach(b => {
                b.disabled = true;
                if (b.innerText === msg.correctAnswer) {
                    b.classList.add('correct');
                }
            });
        }

        if (msg.type === 'match_over') {
            clearInterval(this.state1v1.timer);
            const isWinner = msg.isWinner;
            if (isWinner) {
                SoundEffects.playWin();
                App.addStars(msg.stars || 5);
                if (typeof App.recordWin === 'function') App.recordWin(this.state1v1.lang || 'en');
            } else {
                SoundEffects.playWrong();
            }

            const resultModal = document.getElementById('game-result-modal');
            if (resultModal) {
                document.getElementById('game-res-title').innerText = isWinner ? "G'alaba qozondingiz! 🏆" : "Ajoyib o'yin!";
                document.getElementById('game-res-score').innerText = `Siz: ${document.getElementById('game1v1-user-score').innerText} | Raqib: ${document.getElementById('game1v1-opponent-score').innerText}`;
                document.getElementById('game-res-stars').innerText = isWinner ? "+5 ⭐ Yulduz yutib oldingiz!" : "0 ⭐";
                resultModal.classList.add('active');
            }
        }

        if (msg.type === 'opponent_left') {
            App.showToast(msg.message, 'success');
            App.addStars(msg.stars || 5);
            SoundEffects.playWin();
            setTimeout(() => this.reset1v1ToAbout(), 2000);
        }

        // 2. 6-PLAYER MATCH EVENTS
        if (msg.type === '6p_match_found') {
            clearInterval(this.radarTimer6p);
            const matchBox = document.getElementById('game6p-matchmaking');
            const arenaSection = document.getElementById('game6p-arena-section');
            if (matchBox) matchBox.style.display = 'none';
            if (arenaSection) arenaSection.style.display = 'block';

            this.state6p.players = msg.players;
            this.render6pLobby();
            SoundEffects.playCorrect();
        }

        if (msg.type === '6p_new_round') {
            this.state6p.round = msg.round;
            this.state6p.totalRounds = msg.totalRounds;
            this.state6p.answered = false;
            this.state6p.timeLeft = msg.timeLimitSec || 10;
            this.state6p.currentQuestion = { word: msg.word, phonetic: msg.phonetic, options: msg.options };

            document.getElementById('game6p-round-badge').innerText = `Raund ${msg.round} / ${msg.totalRounds}`;
            document.getElementById('game6p-timer-text').innerText = `${this.state6p.timeLeft}s`;
            document.getElementById('game6p-question-word').innerText = msg.word;
            document.getElementById('game6p-phonetic').innerText = msg.phonetic || '';

            speakForeignWord(msg.word, this.state6p.lang);

            const optionsContainer = document.getElementById('game6p-options-container');
            optionsContainer.innerHTML = '';
            msg.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'game-opt-btn';
                btn.innerText = opt;
                btn.onclick = () => this.handle6pUserAnswer(opt, btn);
                optionsContainer.appendChild(btn);
            });

            clearInterval(this.state6p.timer);
            this.state6p.timer = setInterval(() => {
                this.state6p.timeLeft--;
                const timerEl = document.getElementById('game6p-timer-text');
                if (timerEl) timerEl.innerText = `${this.state6p.timeLeft}s`;
                if (this.state6p.timeLeft <= 0) clearInterval(this.state6p.timer);
            }, 1000);
        }

        if (msg.type === '6p_leaderboard_update') {
            this.state6p.players = msg.players;
            this.render6pLobby();
        }

        if (msg.type === '6p_round_ended') {
            clearInterval(this.state6p.timer);
            const allBtns = document.querySelectorAll('#game6p-options-container .game-opt-btn');
            allBtns.forEach(b => {
                b.disabled = true;
                if (b.innerText === msg.correctAnswer) b.classList.add('correct');
            });
        }

        if (msg.type === '6p_game_over') {
            clearInterval(this.state6p.timer);
            const stars = msg.stars || 0;
            if (stars > 0) {
                SoundEffects.playWin();
                App.addStars(stars);
            } else {
                SoundEffects.playWrong();
            }

            const resultModal = document.getElementById('game-result-modal');
            if (resultModal) {
                document.getElementById('game-res-title').innerText = msg.rank === 1 ? "Chempion! 👑" : `${msg.rank}-o'rinni egalladingiz!`;
                document.getElementById('game-res-score').innerText = `6 kishilik liga yakunlandi`;
                document.getElementById('game-res-stars').innerText = stars > 0 ? `+${stars} ⭐ Yulduz berildi!` : "0 ⭐";
                resultModal.classList.add('active');
            }
        }
    },

    // ==========================================
    // 1 VS 1 LUG'AT BELLASHUV
    // ==========================================
    start1v1Game() {
        const lang = document.getElementById('game1v1-lang-select')?.value || 'en';
        this.state1v1.lang = lang;

        if (this.mode1v1 === 'bot') {
            this.start1v1BotGame();
            return;
        }

        // Live Multiplayer Mode
        const aboutSection = document.getElementById('game1v1-about-section');
        const matchBox = document.getElementById('game1v1-matchmaking');
        const radarAvatar = document.getElementById('radar-1v1-avatar');
        const radarTitle = document.getElementById('radar-1v1-title');
        const radarDesc = document.getElementById('radar-1v1-desc');
        const radarTimer = document.getElementById('radar-1v1-timer');

        if (aboutSection) aboutSection.style.display = 'none';
        if (matchBox) matchBox.style.display = 'flex';
        if (radarAvatar) radarAvatar.innerText = App.user.avatar || '👨‍🎓';
        if (radarTitle) radarTitle.innerText = "Raqib qidirilmoqda...";
        if (radarDesc) radarDesc.innerText = "O'zbekiston bo'ylab onlayn o'quvchilar tarmog'idan raqib izlanmoqda";

        let secondsLeft = 5;
        if (radarTimer) radarTimer.innerText = `00:0${secondsLeft}`;
        clearInterval(this.radarTimer1v1);
        this.radarTimer1v1 = setInterval(() => {
            secondsLeft--;
            if (secondsLeft > 0) {
                if (radarTimer) radarTimer.innerText = `00:0${secondsLeft}`;
            } else {
                clearInterval(this.radarTimer1v1);
            }
        }, 1000);

        this.connectWS(
            () => {
                this.sendWS({
                    type: 'join_queue',
                    gameType: '1v1',
                    lang,
                    user: {
                        id: App.user.id || ('std_' + Date.now()),
                        name: App.user.name || "O'quvchi",
                        avatar: App.user.avatar || '👨‍🎓',
                        rating: (App.user.stars || 100) * 5
                    }
                });
            },
            () => {
                // Connection failed - fallback to bot mode
                clearInterval(this.radarTimer1v1);
                App.showToast("⚡ Jonli serverga ulanib bo'lmadi. Mashg'ulot rejimi ishga tushirildi! 🤖", 'info');
                this.cancel1v1Matchmaking();
                this.start1v1BotGame();
            }
        );
    },

    cancel1v1Matchmaking() {
        clearInterval(this.radarTimer1v1);
        this.sendWS({ type: 'cancel_queue' });
        const aboutSection = document.getElementById('game1v1-about-section');
        const matchBox = document.getElementById('game1v1-matchmaking');
        if (aboutSection) aboutSection.style.display = 'block';
        if (matchBox) matchBox.style.display = 'none';
    },

    start1v1BotGame() {
        const lang = this.state1v1.lang || 'en';
        this.isLiveMatch = false;
        this.state1v1.active = true;
        this.state1v1.round = 0;
        this.state1v1.userScore = 0;
        this.state1v1.opponentScore = 0;
        this.state1v1.answered = false;
        this.state1v1.usedWords = new Set();

        const opponent = this.botNames[Math.floor(Math.random() * this.botNames.length)];
        this.state1v1.opponent = opponent;

        const aboutSection = document.getElementById('game1v1-about-section');
        const matchBox = document.getElementById('game1v1-matchmaking');
        const arenaSection = document.getElementById('game1v1-arena-section');
        if (aboutSection) aboutSection.style.display = 'none';
        if (matchBox) matchBox.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'block';

        document.getElementById('game1v1-opponent-name').innerText = opponent.name;
        document.getElementById('game1v1-opponent-avatar').innerText = opponent.avatar;
        document.getElementById('game1v1-opponent-score').innerText = '0';
        document.getElementById('game1v1-user-score').innerText = '0';

        const liveBadge = document.getElementById('game1v1-live-badge');
        if (liveBadge) {
            liveBadge.innerText = '🤖 Mashg\'ulot';
            liveBadge.className = 'live-indicator-pill bot';
        }

        SoundEffects.playCountdown();
        this.next1v1Round();
    },

    next1v1Round() {
        if (this.state1v1.round >= this.state1v1.totalRounds) {
            this.finish1v1Game();
            return;
        }

        this.state1v1.round++;
        this.state1v1.answered = false;
        this.state1v1.timeLeft = 10;

        document.getElementById('game1v1-round-badge').innerText = `Raund ${this.state1v1.round} / ${this.state1v1.totalRounds}`;
        document.getElementById('game1v1-timer-text').innerText = '10s';

        const item = this.getNextQuestion(this.state1v1.lang, this.state1v1.usedWords);
        this.state1v1.currentQuestion = item;

        const questionWordEl = document.getElementById('game1v1-question-word');
        const phoneticEl = document.getElementById('game1v1-phonetic');
        if (questionWordEl) questionWordEl.innerText = item.word;
        if (phoneticEl) phoneticEl.innerText = item.phonetic || '';

        speakForeignWord(item.word, this.state1v1.lang);

        const options = item.options;
        const optionsContainer = document.getElementById('game1v1-options-container');
        optionsContainer.innerHTML = '';

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-opt-btn';
            btn.innerText = opt;
            btn.onclick = () => this.handle1v1UserAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });

        clearInterval(this.state1v1.timer);
        this.state1v1.timer = setInterval(() => {
            this.state1v1.timeLeft--;
            const timerEl = document.getElementById('game1v1-timer-text');
            if (timerEl) timerEl.innerText = `${this.state1v1.timeLeft}s`;

            if (this.state1v1.timeLeft <= 0) {
                clearInterval(this.state1v1.timer);
                if (!this.state1v1.answered) {
                    this.handle1v1Timeout();
                }
            }
        }, 1000);

        // Bot response simulation in offline mode
        const botReactionTime = 2000 + Math.random() * 4500;
        setTimeout(() => {
            if (this.state1v1.active && !this.state1v1.answered) {
                const oppBadge = document.getElementById('game1v1-opp-status');
                if (Math.random() > 0.3) {
                    const botPoints = Math.floor(60 + Math.random() * 45);
                    this.state1v1.opponentScore += botPoints;
                    document.getElementById('game1v1-opponent-score').innerText = this.state1v1.opponentScore;
                    if (oppBadge) oppBadge.innerText = 'To\'g\'ri topdi! ⚡';
                } else {
                    if (oppBadge) oppBadge.innerText = 'Xato qildi ❌';
                }
            }
        }, botReactionTime);
    },

    handle1v1UserAnswer(selectedText, btn) {
        if (this.state1v1.answered) return;
        this.state1v1.answered = true;

        if (this.isLiveMatch) {
            // Live WebSocket answer
            const timeSpent = 10 - this.state1v1.timeLeft;
            this.sendWS({
                type: 'submit_answer',
                roomId: this.activeRoomId,
                round: this.state1v1.round,
                option: selectedText,
                timeSpent
            });

            btn.classList.add('selected');
            const allBtns = document.querySelectorAll('#game1v1-options-container .game-opt-btn');
            allBtns.forEach(b => b.disabled = true);
            return;
        }

        // Offline bot mode
        clearInterval(this.state1v1.timer);
        const isCorrect = selectedText === this.state1v1.currentQuestion.tr;
        const allBtns = document.querySelectorAll('#game1v1-options-container .game-opt-btn');

        allBtns.forEach(b => {
            b.disabled = true;
            if (b.innerText === this.state1v1.currentQuestion.tr) {
                b.classList.add('correct');
            }
        });

        if (isCorrect) {
            btn.classList.add('correct');
            SoundEffects.playCorrect();
            const pointsEarned = 70 + (this.state1v1.timeLeft * 5);
            this.state1v1.userScore += pointsEarned;
            document.getElementById('game1v1-user-score').innerText = this.state1v1.userScore;
        } else {
            btn.classList.add('wrong');
            SoundEffects.playWrong();
        }

        setTimeout(() => {
            this.next1v1Round();
            const oppBadge = document.getElementById('game1v1-opp-status');
            if (oppBadge) oppBadge.innerText = 'O\'ylamoqda...';
        }, 1800);
    },

    handle1v1Timeout() {
        this.state1v1.answered = true;
        SoundEffects.playWrong();
        const allBtns = document.querySelectorAll('#game1v1-options-container .game-opt-btn');
        allBtns.forEach(b => {
            b.disabled = true;
            if (b.innerText === this.state1v1.currentQuestion.tr) {
                b.classList.add('correct');
            }
        });
        setTimeout(() => {
            this.next1v1Round();
            const oppBadge = document.getElementById('game1v1-opp-status');
            if (oppBadge) oppBadge.innerText = 'O\'ylamoqda...';
        }, 1800);
    },

    finish1v1Game() {
        this.state1v1.active = false;
        clearInterval(this.state1v1.timer);

        const isUserWinner = this.state1v1.userScore >= this.state1v1.opponentScore;
        const starsEarned = isUserWinner ? 5 : 0;

        if (isUserWinner) {
            SoundEffects.playWin();
            App.addStars(starsEarned);
            if (typeof App.recordWin === 'function') App.recordWin(this.state1v1.lang || 'en');
        } else {
            SoundEffects.playWrong();
        }

        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) {
            document.getElementById('game-res-title').innerText = isUserWinner ? "G'alaba qozondingiz! 🏆" : "Ajoyib o'yin!";
            document.getElementById('game-res-score').innerText = `Siz: ${this.state1v1.userScore} | Raqib: ${this.state1v1.opponentScore}`;
            document.getElementById('game-res-stars').innerText = isUserWinner ? "+5 ⭐ Yulduz yutib oldingiz!" : "0 ⭐";
            resultModal.classList.add('active');
        }
    },

    reset1v1ToAbout() {
        this.cancel1v1Matchmaking();
        this.state1v1.active = false;
        clearInterval(this.state1v1.timer);
        const aboutSection = document.getElementById('game1v1-about-section');
        const matchBox = document.getElementById('game1v1-matchmaking');
        const arenaSection = document.getElementById('game1v1-arena-section');
        if (aboutSection) aboutSection.style.display = 'block';
        if (matchBox) matchBox.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'none';
        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) resultModal.classList.remove('active');
    },

    // ==========================================
    // 2. LUG'AT BELLASHUV 6 KISHILIK
    // ==========================================
    start6pGame() {
        const lang = document.getElementById('game6p-lang-select')?.value || 'en';
        this.state6p.lang = lang;

        if (this.mode6p === 'bot') {
            this.start6pBotGame();
            return;
        }

        // Live 6P Multiplayer Mode
        const aboutSection = document.getElementById('game6p-about-section');
        const matchBox = document.getElementById('game6p-matchmaking');
        const radarTimer = document.getElementById('radar-6p-timer');

        if (aboutSection) aboutSection.style.display = 'none';
        if (matchBox) matchBox.style.display = 'flex';

        let secondsLeft = 5;
        if (radarTimer) radarTimer.innerText = `00:0${secondsLeft}`;
        clearInterval(this.radarTimer6p);
        this.radarTimer6p = setInterval(() => {
            secondsLeft--;
            if (secondsLeft > 0) {
                if (radarTimer) radarTimer.innerText = `00:0${secondsLeft}`;
            } else {
                clearInterval(this.radarTimer6p);
            }
        }, 1000);

        this.connectWS(
            () => {
                this.sendWS({
                    type: 'join_queue',
                    gameType: '6p',
                    lang,
                    user: {
                        id: App.user.id || ('std_' + Date.now()),
                        name: App.user.name || "O'quvchi",
                        avatar: App.user.avatar || '👨‍🎓',
                        rating: (App.user.stars || 100) * 5
                    }
                });
            },
            () => {
                clearInterval(this.radarTimer6p);
                App.showToast("⚡ Jonli serverga ulanib bo'lmadi. Mashg'ulot rejimi ishga tushirildi! 🤖", 'info');
                this.cancel6pMatchmaking();
                this.start6pBotGame();
            }
        );
    },

    cancel6pMatchmaking() {
        clearInterval(this.radarTimer6p);
        this.sendWS({ type: 'cancel_queue' });
        const aboutSection = document.getElementById('game6p-about-section');
        const matchBox = document.getElementById('game6p-matchmaking');
        if (aboutSection) aboutSection.style.display = 'block';
        if (matchBox) matchBox.style.display = 'none';
    },

    start6pBotGame() {
        this.state6p.active = true;
        this.state6p.round = 0;
        this.state6p.answered = false;
        this.state6p.usedWords = new Set();

        const currentUser = App.getCurrentUser ? App.getCurrentUser() : App.user;
        this.state6p.players = [
            { id: 'user', name: `${currentUser.name} (Siz)`, avatar: currentUser.avatar || '👨‍🎓', score: 0, isUser: true },
            { id: 'p1', name: 'Madina U.', avatar: '👩‍💼', score: 0 },
            { id: 'p2', name: 'Bobur K.', avatar: '🧑‍💻', score: 0 },
            { id: 'p3', name: 'Zarina T.', avatar: '👩‍🎓', score: 0 },
            { id: 'p4', name: 'Jasur M.', avatar: '👨‍🚀', score: 0 },
            { id: 'p5', name: 'Ulug\'bek R.', avatar: '🧑‍🎨', score: 0 }
        ];

        const aboutSection = document.getElementById('game6p-about-section');
        const matchBox = document.getElementById('game6p-matchmaking');
        const arenaSection = document.getElementById('game6p-arena-section');
        if (aboutSection) aboutSection.style.display = 'none';
        if (matchBox) matchBox.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'block';

        this.render6pLobby();
        SoundEffects.playCountdown();
        this.next6pRound();
    },

    render6pLobby() {
        const sorted = [...this.state6p.players].sort((a, b) => b.score - a.score);
        const container = document.getElementById('game6p-players-grid');
        if (!container) return;

        container.innerHTML = sorted.map((p, idx) => `
            <div class="player-slot-card ${p.isUser ? 'is-user-slot' : ''}">
                <div class="slot-rank">#${idx + 1}</div>
                <div class="slot-avatar">${p.avatar}</div>
                <div class="slot-info">
                    <div class="slot-name">${p.name}</div>
                    <div class="slot-score">${p.score} ball</div>
                </div>
                ${idx === 0 && p.score > 0 ? '<span class="crown-icon">👑</span>' : ''}
            </div>
        `).join('');
    },

    next6pRound() {
        if (this.state6p.round >= this.state6p.totalRounds) {
            this.finish6pGame();
            return;
        }

        this.state6p.round++;
        this.state6p.answered = false;
        this.state6p.timeLeft = 10;

        document.getElementById('game6p-round-badge').innerText = `Raund ${this.state6p.round} / ${this.state6p.totalRounds}`;
        document.getElementById('game6p-timer-text').innerText = '10s';

        const item = this.getNextQuestion(this.state6p.lang, this.state6p.usedWords);
        this.state6p.currentQuestion = item;

        document.getElementById('game6p-question-word').innerText = item.word;
        document.getElementById('game6p-phonetic').innerText = item.phonetic || '';
        speakForeignWord(item.word, this.state6p.lang);

        const options = item.options;
        const optionsContainer = document.getElementById('game6p-options-container');
        optionsContainer.innerHTML = '';

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-opt-btn';
            btn.innerText = opt;
            btn.onclick = () => this.handle6pUserAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });

        clearInterval(this.state6p.timer);
        this.state6p.timer = setInterval(() => {
            this.state6p.timeLeft--;
            const timerEl = document.getElementById('game6p-timer-text');
            if (timerEl) timerEl.innerText = `${this.state6p.timeLeft}s`;

            if (this.state6p.timeLeft <= 0) {
                clearInterval(this.state6p.timer);
                if (!this.state6p.answered) this.handle6pTimeout();
            }
        }, 1000);

        this.state6p.players.forEach(p => {
            if (p.isUser) return;
            const delay = 1200 + Math.random() * 4500;
            setTimeout(() => {
                if (this.state6p.active && Math.random() > 0.25) {
                    const pts = Math.floor(50 + Math.random() * 45);
                    p.score += pts;
                    this.render6pLobby();
                }
            }, delay);
        });
    },

    handle6pUserAnswer(selectedText, btn) {
        if (this.state6p.answered) return;
        this.state6p.answered = true;

        if (this.isLiveMatch) {
            const timeSpent = 10 - this.state6p.timeLeft;
            this.sendWS({
                type: 'submit_6p_answer',
                roomId: this.activeRoomId,
                round: this.state6p.round,
                option: selectedText,
                timeSpent
            });
            btn.classList.add('selected');
            const allBtns = document.querySelectorAll('#game6p-options-container .game-opt-btn');
            allBtns.forEach(b => b.disabled = true);
            return;
        }

        clearInterval(this.state6p.timer);
        const isCorrect = selectedText === this.state6p.currentQuestion.tr;
        const allBtns = document.querySelectorAll('#game6p-options-container .game-opt-btn');

        allBtns.forEach(b => {
            b.disabled = true;
            if (b.innerText === this.state6p.currentQuestion.tr) b.classList.add('correct');
        });

        const userPlayer = this.state6p.players.find(p => p.isUser);
        if (isCorrect) {
            btn.classList.add('correct');
            SoundEffects.playCorrect();
            const pointsEarned = 75 + (this.state6p.timeLeft * 6);
            if (userPlayer) userPlayer.score += pointsEarned;
        } else {
            btn.classList.add('wrong');
            SoundEffects.playWrong();
        }

        this.render6pLobby();
        setTimeout(() => this.next6pRound(), 2000);
    },

    handle6pTimeout() {
        this.state6p.answered = true;
        SoundEffects.playWrong();
        const allBtns = document.querySelectorAll('#game6p-options-container .game-opt-btn');
        allBtns.forEach(b => {
            b.disabled = true;
            if (b.innerText === this.state6p.currentQuestion.tr) b.classList.add('correct');
        });
        setTimeout(() => this.next6pRound(), 2000);
    },

    finish6pGame() {
        this.state6p.active = false;
        clearInterval(this.state6p.timer);

        const sorted = [...this.state6p.players].sort((a, b) => b.score - a.score);
        const userRank = sorted.findIndex(p => p.isUser) + 1;

        let starsEarned = 0;
        if (userRank === 1) starsEarned = 3;
        else if (userRank === 2) starsEarned = 2;
        else if (userRank === 3) starsEarned = 1;

        if (starsEarned > 0) {
            SoundEffects.playWin();
            App.addStars(starsEarned);
            if (userRank === 1 && typeof App.recordWin === 'function') {
                App.recordWin(this.state6p.lang || 'en');
            }
        } else {
            SoundEffects.playWrong();
        }

        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) {
            const userPlayer = sorted.find(p => p.isUser);
            const userScore = userPlayer ? userPlayer.score : 0;

            document.getElementById('game-res-title').innerText = userRank === 1 ? "Chempion! 👑" : `${userRank}-o'rinni egalladingiz!`;
            document.getElementById('game-res-score').innerText = `To'plangan ball: ${userScore}`;
            document.getElementById('game-res-stars').innerText = starsEarned > 0 ? `+${starsEarned} ⭐ Yulduz berildi!` : "0 ⭐";
            resultModal.classList.add('active');
        }
    },

    reset6pToAbout() {
        this.cancel6pMatchmaking();
        this.state6p.active = false;
        clearInterval(this.state6p.timer);
        const aboutSection = document.getElementById('game6p-about-section');
        const matchBox = document.getElementById('game6p-matchmaking');
        const arenaSection = document.getElementById('game6p-arena-section');
        if (aboutSection) aboutSection.style.display = 'block';
        if (matchBox) matchBox.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'none';
        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) resultModal.classList.remove('active');
    },

    // ==========================================
    // 3. YOZISH 2 VS 2 (TYPING TUG-OF-WAR)
    // ==========================================
    start2v2Game() {
        const lang = document.getElementById('game2v2-lang-select')?.value || 'en';
        // Always clear cached pools to ensure no synthetic words remain from old sessions
        this._cachedPools = {};
        if (window.School77Vocabulary && School77Vocabulary.cache) School77Vocabulary.cache = {};
        const pool = this.getGameWordPool(lang);
        if (!pool || pool.length === 0) return;

        this.state2v2.active = true;
        this.state2v2.lang = lang;
        this.state2v2.timeLeft = 45;
        this.state2v2.teamScore = 50;
        this.state2v2.userWordsCount = 0;

        const words = pool.map(v => v.word).sort(() => Math.random() - 0.5);
        this.state2v2.wordsQueue = words;

        const aboutSection = document.getElementById('game2v2-about-section');
        const arenaSection = document.getElementById('game2v2-arena-section');
        if (aboutSection) aboutSection.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'block';

        this.updateTugOfWarBar();
        this.showNextTypingWord();

        const inputEl = document.getElementById('game2v2-input');
        if (inputEl) {
            inputEl.value = '';
            inputEl.focus();
        }

        clearInterval(this.state2v2.timer);
        this.state2v2.timer = setInterval(() => {
            this.state2v2.timeLeft--;
            const timerEl = document.getElementById('game2v2-timer-text');
            if (timerEl) timerEl.innerText = `${this.state2v2.timeLeft}s`;

            if (this.state2v2.timeLeft <= 0 || this.state2v2.teamScore <= 0 || this.state2v2.teamScore >= 100) {
                this.finish2v2Game();
            }
        }, 1000);

        clearInterval(this.state2v2.botInterval);
        this.state2v2.botInterval = setInterval(() => {
            if (!this.state2v2.active) return;
            if (Math.random() > 0.4) {
                this.state2v2.teamScore = Math.min(100, this.state2v2.teamScore + 3);
            }
            if (Math.random() > 0.35) {
                this.state2v2.teamScore = Math.max(0, this.state2v2.teamScore - 4);
            }
            this.updateTugOfWarBar();
        }, 2200);

        SoundEffects.playCountdown();
    },

    showNextTypingWord() {
        if (this.state2v2.wordsQueue.length === 0) {
            const pool = this.getGameWordPool(this.state2v2.lang);
            this.state2v2.wordsQueue = pool.map(v => v.word).sort(() => Math.random() - 0.5);
        }
        const nextWord = this.state2v2.wordsQueue.pop();
        this.state2v2.currentWord = nextWord;

        const targetEl = document.getElementById('game2v2-target-word');
        if (targetEl) targetEl.innerText = nextWord;
        speakForeignWord(nextWord, this.state2v2.lang);
    },

    handle2v2TypingInput(e) {
        if (!this.state2v2.active || !this.state2v2.currentWord) return;
        const val = e.target.value.trim();
        const target = this.state2v2.currentWord;

        if (val.toLowerCase() === target.toLowerCase()) {
            SoundEffects.playCorrect();
            this.state2v2.userWordsCount++;
            this.state2v2.teamScore = Math.min(100, this.state2v2.teamScore + 8);
            this.updateTugOfWarBar();

            e.target.value = '';
            document.getElementById('game2v2-words-count').innerText = `${this.state2v2.userWordsCount} ta so'z`;

            const targetEl = document.getElementById('game2v2-target-word');
            if (targetEl) {
                targetEl.classList.add('flash-correct');
                setTimeout(() => targetEl.classList.remove('flash-correct'), 300);
            }
            this.showNextTypingWord();
        }
    },

    updateTugOfWarBar() {
        const bar = document.getElementById('game2v2-tug-indicator');
        const percentageText = document.getElementById('game2v2-balance-text');
        if (bar) bar.style.left = `${this.state2v2.teamScore}%`;
        if (percentageText) {
            percentageText.innerText = `Burgutlar: ${this.state2v2.teamScore}% | Lochinlar: ${100 - this.state2v2.teamScore}%`;
        }
    },

    finish2v2Game() {
        this.state2v2.active = false;
        clearInterval(this.state2v2.timer);
        clearInterval(this.state2v2.botInterval);

        const isWinner = this.state2v2.teamScore >= 50;
        const starsEarned = isWinner ? 5 : 0;

        if (isWinner) {
            SoundEffects.playWin();
            App.addStars(starsEarned);
            if (typeof App.recordWin === 'function') App.recordWin(this.state2v2.lang || 'en');
        } else {
            SoundEffects.playWrong();
        }

        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) {
            document.getElementById('game-res-title').innerText = isWinner ? "Burgutlar G'alaba Qozondi! 🦅" : "Lochinlar G'alaba Qozondi! 🦅";
            document.getElementById('game-res-score').innerText = `Siz kiritgan to'g'ri so'zlar: ${this.state2v2.userWordsCount}`;
            document.getElementById('game-res-stars').innerText = isWinner ? "+5 ⭐ Yulduz yutib oldingiz!" : "0 ⭐";
            resultModal.classList.add('active');
        }
    },

    reset2v2ToAbout() {
        this.state2v2.active = false;
        clearInterval(this.state2v2.timer);
        clearInterval(this.state2v2.botInterval);
        const aboutSection = document.getElementById('game2v2-about-section');
        const arenaSection = document.getElementById('game2v2-arena-section');
        if (aboutSection) aboutSection.style.display = 'block';
        if (arenaSection) arenaSection.style.display = 'none';
        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) resultModal.classList.remove('active');
    }
};

// Global exports
window.MiniGames = MiniGames;
window.GamesApp = MiniGames;
