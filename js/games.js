// SpeakPro - Mini Games Engine
// Contains 3 interactive game modes:
// 1. 1 vs 1 Lug'at Bellashuv
// 2. Lug'at Bellashuv 6 Kishilik
// 3. Yozish 2 vs 2 (Typing Tug-of-War)

const MiniGames = {
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
        opponent: null
    },

    state6p: {
        active: false,
        lang: 'en',
        round: 0,
        totalRounds: 5,
        timer: null,
        timeLeft: 10,
        answered: false,
        players: []
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
    // 1 VS 1 LUG'AT BELLASHUV
    // ==========================================
    start1v1Game() {
        const lang = document.getElementById('game1v1-lang-select')?.value || 'en';
        const vocabList = SpeakProData.vocabulary[lang];
        if (!vocabList || vocabList.length === 0) return;

        // Reset state
        this.state1v1.active = true;
        this.state1v1.lang = lang;
        this.state1v1.round = 0;
        this.state1v1.userScore = 0;
        this.state1v1.opponentScore = 0;
        this.state1v1.answered = false;

        // Pick random opponent
        const opponent = this.botNames[Math.floor(Math.random() * this.botNames.length)];
        this.state1v1.opponent = opponent;

        // Show match arena, hide about section
        const aboutSection = document.getElementById('game1v1-about-section');
        const arenaSection = document.getElementById('game1v1-arena-section');
        if (aboutSection) aboutSection.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'block';

        // Update Opponent Info UI
        document.getElementById('game1v1-opponent-name').innerText = opponent.name;
        document.getElementById('game1v1-opponent-avatar').innerText = opponent.avatar;
        document.getElementById('game1v1-opponent-score').innerText = '0';
        document.getElementById('game1v1-user-score').innerText = '0';

        // Sound effect
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

        // Update Round label
        document.getElementById('game1v1-round-badge').innerText = `Raund ${this.state1v1.round} / ${this.state1v1.totalRounds}`;
        document.getElementById('game1v1-timer-text').innerText = '10s';

        // Pick a question
        const vocabList = SpeakProData.vocabulary[this.state1v1.lang];
        const item = vocabList[Math.floor(Math.random() * vocabList.length)];
        this.state1v1.currentQuestion = item;

        // Display question word and sound trigger
        const questionWordEl = document.getElementById('game1v1-question-word');
        const phoneticEl = document.getElementById('game1v1-phonetic');
        if (questionWordEl) questionWordEl.innerText = item.word;
        if (phoneticEl) phoneticEl.innerText = item.phonetic || '';

        // Auto pronounce word
        speakForeignWord(item.word, this.state1v1.lang);

        // Prepare 4 options (1 correct + 3 distractors) shuffled
        const options = [...item.distractors, item.tr];
        options.sort(() => Math.random() - 0.5);

        const optionsContainer = document.getElementById('game1v1-options-container');
        optionsContainer.innerHTML = '';

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-opt-btn';
            btn.innerText = opt;
            btn.onclick = () => this.handle1v1UserAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });

        // Start timer
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

        // Schedule opponent answer (simulated AI)
        const opponentDelay = 1500 + Math.random() * 2500;
        setTimeout(() => {
            if (this.state1v1.active && !this.state1v1.answered) {
                const isCorrect = Math.random() > 0.3; // 70% chance correct
                if (isCorrect) {
                    this.state1v1.opponentScore += 100;
                    document.getElementById('game1v1-opponent-score').innerText = this.state1v1.opponentScore;
                    this.showOpponentFeedback(true);
                } else {
                    this.showOpponentFeedback(false);
                }
            }
        }, opponentDelay);
    },

    handle1v1UserAnswer(selectedText, btn) {
        if (this.state1v1.answered) return;
        this.state1v1.answered = true;
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
            // Faster answer gives more points
            const pointsEarned = 70 + (this.state1v1.timeLeft * 5);
            this.state1v1.userScore += pointsEarned;
            document.getElementById('game1v1-user-score').innerText = this.state1v1.userScore;
        } else {
            btn.classList.add('wrong');
            SoundEffects.playWrong();
        }

        // Wait 1.8 seconds then proceed
        setTimeout(() => {
            this.next1v1Round();
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
        }, 1800);
    },

    showOpponentFeedback(isCorrect) {
        const oppBadge = document.getElementById('game1v1-opp-status');
        if (!oppBadge) return;
        oppBadge.innerText = isCorrect ? 'Javob berdi ✅' : 'Xato qildi ❌';
        oppBadge.className = isCorrect ? 'opp-status text-green' : 'opp-status text-red';
        setTimeout(() => {
            if (oppBadge) oppBadge.innerText = 'O\'ylamoqda...';
        }, 1200);
    },

    finish1v1Game() {
        this.state1v1.active = false;
        clearInterval(this.state1v1.timer);

        const isUserWinner = this.state1v1.userScore >= this.state1v1.opponentScore;
        const starsEarned = isUserWinner ? 5 : 0;

        if (isUserWinner) {
            SoundEffects.playWin();
            App.addStars(starsEarned);
        } else {
            SoundEffects.playWrong();
        }

        const i18n = window.SpeakProI18n;
        const t = (key) => i18n ? i18n.t(key) : key;

        // Show game over modal or card
        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) {
            document.getElementById('game-res-title').innerText = isUserWinner ? t('result_victory') : t('result_good_game');
            document.getElementById('game-res-score').innerText = t('result_score_1v1').replace('{userScore}', this.state1v1.userScore).replace('{oppScore}', this.state1v1.opponentScore);
            document.getElementById('game-res-stars').innerText = isUserWinner ? t('result_stars_win') : t('result_stars_lose');
            const closeBtn = document.getElementById('game-res-close');
            if (closeBtn) closeBtn.innerText = t('modal_close');
            const lbBtn = document.getElementById('game-res-leaderboard');
            if (lbBtn) lbBtn.innerText = t('modal_view_leaderboard');
            resultModal.classList.add('active');
        }
    },

    reset1v1ToAbout() {
        this.state1v1.active = false;
        clearInterval(this.state1v1.timer);
        const aboutSection = document.getElementById('game1v1-about-section');
        const arenaSection = document.getElementById('game1v1-arena-section');
        if (aboutSection) aboutSection.style.display = 'block';
        if (arenaSection) arenaSection.style.display = 'none';
        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) resultModal.classList.remove('active');
    },

    // ==========================================
    // 2. LUG'AT BELLASHUV 6 KISHILIK
    // ==========================================
    start6pGame() {
        const lang = document.getElementById('game6p-lang-select')?.value || 'en';
        const vocabList = SpeakProData.vocabulary[lang];
        if (!vocabList || vocabList.length === 0) return;

        this.state6p.active = true;
        this.state6p.lang = lang;
        this.state6p.round = 0;
        this.state6p.answered = false;

        // Initialize 6 players (User + 5 realistic players)
        const currentUser = App.getCurrentUser();
        this.state6p.players = [
            { id: 'user', name: `${currentUser.name} (Siz)`, avatar: currentUser.avatar, score: 0, isUser: true },
            { id: 'p1', name: 'Madina U.', avatar: '👩‍💼', score: 0 },
            { id: 'p2', name: 'Bobur K.', avatar: '🧑‍💻', score: 0 },
            { id: 'p3', name: 'Zarina T.', avatar: '👩‍🎓', score: 0 },
            { id: 'p4', name: 'Jasur M.', avatar: '👨‍🚀', score: 0 },
            { id: 'p5', name: 'Ulug\'bek R.', avatar: '🧑‍🎨', score: 0 }
        ];

        // Switch to Arena
        const aboutSection = document.getElementById('game6p-about-section');
        const arenaSection = document.getElementById('game6p-arena-section');
        if (aboutSection) aboutSection.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'block';

        this.render6pLobby();
        SoundEffects.playCountdown();
        this.next6pRound();
    },

    render6pLobby() {
        // Sort players descending by score
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

        const vocabList = SpeakProData.vocabulary[this.state6p.lang];
        const item = vocabList[Math.floor(Math.random() * vocabList.length)];
        this.state6p.currentQuestion = item;

        document.getElementById('game6p-question-word').innerText = item.word;
        document.getElementById('game6p-phonetic').innerText = item.phonetic || '';
        speakForeignWord(item.word, this.state6p.lang);

        const options = [...item.distractors, item.tr].sort(() => Math.random() - 0.5);
        const optionsContainer = document.getElementById('game6p-options-container');
        optionsContainer.innerHTML = '';

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-opt-btn';
            btn.innerText = opt;
            btn.onclick = () => this.handle6pUserAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });

        // Round timer
        clearInterval(this.state6p.timer);
        this.state6p.timer = setInterval(() => {
            this.state6p.timeLeft--;
            const timerEl = document.getElementById('game6p-timer-text');
            if (timerEl) timerEl.innerText = `${this.state6p.timeLeft}s`;

            if (this.state6p.timeLeft <= 0) {
                clearInterval(this.state6p.timer);
                if (!this.state6p.answered) {
                    this.handle6pTimeout();
                }
            }
        }, 1000);

        // Simulate other 5 players answering throughout the round
        this.state6p.players.forEach(p => {
            if (p.isUser) return;
            const delay = 1200 + Math.random() * 4500;
            setTimeout(() => {
                if (this.state6p.active && Math.random() > 0.25) {
                    // Correct answer with points based on speed
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
        clearInterval(this.state6p.timer);

        const isCorrect = selectedText === this.state6p.currentQuestion.tr;
        const allBtns = document.querySelectorAll('#game6p-options-container .game-opt-btn');

        allBtns.forEach(b => {
            b.disabled = true;
            if (b.innerText === this.state6p.currentQuestion.tr) {
                b.classList.add('correct');
            }
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

        setTimeout(() => {
            this.next6pRound();
        }, 2000);
    },

    handle6pTimeout() {
        this.state6p.answered = true;
        SoundEffects.playWrong();
        const allBtns = document.querySelectorAll('#game6p-options-container .game-opt-btn');
        allBtns.forEach(b => {
            b.disabled = true;
            if (b.innerText === this.state6p.currentQuestion.tr) {
                b.classList.add('correct');
            }
        });
        setTimeout(() => {
            this.next6pRound();
        }, 2000);
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
        } else {
            SoundEffects.playWrong();
        }

        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) {
            const i18n = window.SpeakProI18n;
            const t = (key) => i18n ? i18n.t(key) : key;
            const userScore = sorted.find(p=>p.isUser).score;

            document.getElementById('game-res-title').innerText = userRank === 1 ? t('result_6p_champion') : t('result_6p_place').replace('{rank}', userRank);
            document.getElementById('game-res-score').innerText = t('result_6p_score').replace('{score}', userScore);
            document.getElementById('game-res-stars').innerText = starsEarned > 0 ? t('result_6p_stars_win').replace('{stars}', starsEarned) : t('result_6p_stars_lose');
            const closeBtn = document.getElementById('game-res-close');
            if (closeBtn) closeBtn.innerText = t('modal_close');
            const lbBtn = document.getElementById('game-res-leaderboard');
            if (lbBtn) lbBtn.innerText = t('modal_view_leaderboard');
            resultModal.classList.add('active');
        }
    },

    reset6pToAbout() {
        this.state6p.active = false;
        clearInterval(this.state6p.timer);
        const aboutSection = document.getElementById('game6p-about-section');
        const arenaSection = document.getElementById('game6p-arena-section');
        if (aboutSection) aboutSection.style.display = 'block';
        if (arenaSection) arenaSection.style.display = 'none';
        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) resultModal.classList.remove('active');
    },

    // ==========================================
    // 3. YOZISH 2 VS 2 (TYPING TUG-OF-WAR)
    // ==========================================
    start2v2Game() {
        const lang = document.getElementById('game2v2-lang-select')?.value || 'en';
        const vocabList = SpeakProData.vocabulary[lang];
        if (!vocabList || vocabList.length === 0) return;

        this.state2v2.active = true;
        this.state2v2.lang = lang;
        this.state2v2.timeLeft = 45;
        this.state2v2.teamScore = 50; // starts in middle
        this.state2v2.userWordsCount = 0;

        // Populate words queue
        const words = [...vocabList].map(v => v.word).sort(() => Math.random() - 0.5);
        this.state2v2.wordsQueue = words;

        // Switch to Arena
        const aboutSection = document.getElementById('game2v2-about-section');
        const arenaSection = document.getElementById('game2v2-arena-section');
        if (aboutSection) aboutSection.style.display = 'none';
        if (arenaSection) arenaSection.style.display = 'block';

        this.updateTugOfWarBar();
        this.showNextTypingWord();

        const inputEl = document.getElementById('game2v2-input');
        if (inputEl) {
            inputEl.value = '';
            inputEl.disabled = false;
            inputEl.focus();
        }

        // Timer countdown
        clearInterval(this.state2v2.timer);
        this.state2v2.timer = setInterval(() => {
            this.state2v2.timeLeft--;
            const timerEl = document.getElementById('game2v2-timer');
            if (timerEl) timerEl.innerText = `${this.state2v2.timeLeft}s`;

            if (this.state2v2.timeLeft <= 0 || this.state2v2.teamScore <= 5 || this.state2v2.teamScore >= 95) {
                this.finish2v2Game();
            }
        }, 1000);

        // Simulate teammate & opponent typing
        clearInterval(this.state2v2.botInterval);
        this.state2v2.botInterval = setInterval(() => {
            if (!this.state2v2.active) return;
            // Teammate types occasionally
            if (Math.random() > 0.4) {
                this.state2v2.teamScore = Math.min(100, this.state2v2.teamScore + 3);
            }
            // 2 Opponents type
            if (Math.random() > 0.35) {
                this.state2v2.teamScore = Math.max(0, this.state2v2.teamScore - 4);
            }
            this.updateTugOfWarBar();
        }, 2200);

        SoundEffects.playCountdown();
    },

    showNextTypingWord() {
        if (this.state2v2.wordsQueue.length === 0) {
            const vocabList = SpeakProData.vocabulary[this.state2v2.lang];
            this.state2v2.wordsQueue = [...vocabList].map(v => v.word).sort(() => Math.random() - 0.5);
        }
        const nextWord = this.state2v2.wordsQueue.pop();
        this.state2v2.currentWord = nextWord;

        const targetEl = document.getElementById('game2v2-target-word');
        if (targetEl) targetEl.innerText = nextWord;

        // Word pronunciation
        speakForeignWord(nextWord, this.state2v2.lang);
    },

    handle2v2TypingInput(e) {
        if (!this.state2v2.active || !this.state2v2.currentWord) return;
        const val = e.target.value.trim();
        const target = this.state2v2.currentWord;

        if (val.toLowerCase() === target.toLowerCase()) {
            // Correct word typed!
            SoundEffects.playCorrect();
            this.state2v2.userWordsCount++;
            this.state2v2.teamScore = Math.min(100, this.state2v2.teamScore + 8);
            this.updateTugOfWarBar();

            e.target.value = '';
            document.getElementById('game2v2-words-count').innerText = `${this.state2v2.userWordsCount} ta so'z`;

            // Flash effect
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
        if (bar) {
            bar.style.left = `${this.state2v2.teamScore}%`;
        }
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
        } else {
            SoundEffects.playWrong();
        }

        const resultModal = document.getElementById('game-result-modal');
        if (resultModal) {
            const i18n = window.SpeakProI18n;
            const t = (key) => i18n ? i18n.t(key) : key;

            document.getElementById('game-res-title').innerText = isWinner ? t('result_2v2_red_win') : t('result_2v2_blue_win');
            document.getElementById('game-res-score').innerText = t('result_2v2_score').replace('{count}', this.state2v2.userWordsCount);
            document.getElementById('game-res-stars').innerText = isWinner ? t('result_stars_win') : t('result_stars_lose');
            const closeBtn = document.getElementById('game-res-close');
            if (closeBtn) closeBtn.innerText = t('modal_close');
            const lbBtn = document.getElementById('game-res-leaderboard');
            if (lbBtn) lbBtn.innerText = t('modal_view_leaderboard');
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
