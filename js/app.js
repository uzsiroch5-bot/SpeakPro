// SpeakPro - Main Application Logic & Single Page Router

const App = {
    // Current user state
    user: {
        name: 'Azizbek',
        avatar: '👨‍🎓',
        stars: 350,
        streakDays: 7,
        theme: 'light',
        sound: true,
        speechEnabled: true,
        volume: 100,
        email: 'student@speakpro.uz',
        phone: '+998 90 123 45 67',
        wins: 18,
        appLang: 'uz',
        isLoggedIn: true
    },

    currentView: 'home',

    init() {
        this.loadUserState();
        if (window.SpeakProI18n) {
            SpeakProI18n.init();
        }
        this.applyTheme(this.user.theme);
        this.updateHeaderProfile();
        this.bindEvents();
        this.renderLanguages();
        this.renderLessons();
        this.renderLeaderboard('weekly');
        this.renderStarStore();

        // Listen for popstate if needed
        window.addEventListener('hashchange', () => this.handleHashChange());
        
        // Initial route from URL hash if present
        if (window.location.hash) {
            const route = window.location.hash.replace('#', '');
            this.navigate(route);
        } else {
            this.navigate('home');
        }
    },

    loadUserState() {
        try {
            const savedTheme = localStorage.getItem('speakpro_theme');
            if (savedTheme) this.user.theme = savedTheme;
            const savedLang = localStorage.getItem('speakpro_app_lang');
            if (savedLang) this.user.appLang = savedLang;
            const saved = localStorage.getItem('speakpro_user');
            if (saved) {
                this.user = { ...this.user, ...JSON.parse(saved) };
                if (savedTheme) this.user.theme = savedTheme;
                if (savedLang) this.user.appLang = savedLang;
            }
        } catch (e) {
            console.error('Failed to load user state', e);
        }
        SoundEffects.enabled = this.user.sound;
    },

    saveUserState() {
        try {
            localStorage.setItem('speakpro_user', JSON.stringify(this.user));
            localStorage.setItem('speakpro_theme', this.user.theme);
            if (this.user.appLang) localStorage.setItem('speakpro_app_lang', this.user.appLang);
        } catch (e) {
            console.error('Failed to save user state', e);
        }
        this.updateHeaderProfile();
    },

    getCurrentUser() {
        return this.user;
    },

    addStars(amount) {
        this.user.stars += amount;
        this.saveUserState();
        SoundEffects.playStarEarned();
        this.showToast(`+${amount} ⭐ Yulduz qo'shildi! Jami: ${this.user.stars} ⭐`, 'success');
        this.triggerConfetti();
    },

    deductStars(amount) {
        if (this.user.stars < amount) return false;
        this.user.stars -= amount;
        this.saveUserState();
        return true;
    },

    updateHeaderProfile() {
        const starsBadge = document.getElementById('nav-user-stars');
        const starPageCounter = document.getElementById('star-page-counter');
        const userAvatar = document.getElementById('nav-user-avatar');
        const userName = document.getElementById('nav-user-name');
        const authBtnGroup = document.getElementById('nav-auth-buttons');
        const userProfileGroup = document.getElementById('nav-profile-group');

        if (starsBadge) starsBadge.innerText = `${this.user.stars} ⭐`;
        if (starPageCounter) starPageCounter.innerText = `${this.user.stars} ⭐`;
        if (userAvatar) userAvatar.innerText = this.user.avatar;
        if (userName) userName.innerText = this.user.name;

        if (this.user.isLoggedIn) {
            if (authBtnGroup) authBtnGroup.style.display = 'none';
            if (userProfileGroup) userProfileGroup.style.display = 'flex';
        } else {
            if (authBtnGroup) authBtnGroup.style.display = 'flex';
            if (userProfileGroup) userProfileGroup.style.display = 'none';
        }

        // Update settings form inputs
        const settingName = document.getElementById('setting-name-input');
        const settingEmail = document.getElementById('setting-email-input');
        const settingPhone = document.getElementById('setting-phone-input');
        const settingSound = document.getElementById('setting-sound-toggle');
        const settingSpeech = document.getElementById('setting-speech-toggle');
        const settingVolume = document.getElementById('setting-volume-slider');
        const userStarsStat = document.getElementById('settings-user-stars');
        const userWinsStat = document.getElementById('settings-user-wins');

        if (settingName) settingName.value = this.user.name;
        if (settingEmail) settingEmail.value = this.user.email || 'student@speakpro.uz';
        if (settingPhone) settingPhone.value = this.user.phone || '+998 90 123 45 67';
        if (settingSound) settingSound.checked = this.user.sound;
        if (settingSpeech) settingSpeech.checked = this.user.speechEnabled !== false;
        if (settingVolume && this.user.volume !== undefined) settingVolume.value = this.user.volume;
        if (userStarsStat) userStarsStat.innerText = `${this.user.stars} ⭐`;
        if (userWinsStat) userWinsStat.innerText = `${this.user.wins || 18} ta`;

        // Update active avatar button
        document.querySelectorAll('.avatar-pick-btn').forEach(btn => {
            if (btn.getAttribute('data-avatar') === this.user.avatar) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update active language card
        const currentAppLang = this.user.appLang || (window.SpeakProI18n ? SpeakProI18n.currentLang : 'uz');
        document.querySelectorAll('.lang-option-card').forEach(card => {
            if (card.getAttribute('data-app-lang') === currentAppLang) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update active theme card
        const lightCard = document.getElementById('theme-card-light');
        const darkCard = document.getElementById('theme-card-dark');
        if (lightCard) lightCard.classList.toggle('active', this.user.theme === 'light');
        if (darkCard) darkCard.classList.toggle('active', this.user.theme === 'dark');
    },

    setAppLanguage(langCode) {
        this.user.appLang = langCode;
        if (window.SpeakProI18n) {
            SpeakProI18n.setLanguage(langCode);
        }
        this.saveUserState();
        SoundEffects.playClick();
    },

    setAvatar(avatarEmoji) {
        this.user.avatar = avatarEmoji;
        this.saveUserState();
        SoundEffects.playClick();
        this.showToast(`Yangi profil rasmi tanlandi: ${avatarEmoji}`, 'info');
    },

    toggleSoundFX(enabled) {
        this.user.sound = enabled;
        SoundEffects.enabled = enabled;
        this.saveUserState();
        if (enabled) SoundEffects.playClick();
    },

    toggleSpeechAudio(enabled) {
        this.user.speechEnabled = enabled;
        this.saveUserState();
        SoundEffects.playClick();
        this.showToast(enabled ? '🔊 Nutq talaffuzi yoqildi' : '🔇 Nutq talaffuzi o\'chirildi', 'info');
    },

    resetUserProgress() {
        if (confirm('Barcha darslar progressi va yulduzlaringizni qayta tiklamoqchimisiz?')) {
            this.user.stars = 100;
            this.user.wins = 0;
            localStorage.removeItem('speakpro_lessons_progress');
            if (window.LessonsApp) {
                LessonsApp.progress = { watchedVideos: {}, passedLevelTests: {}, mockTestsDone: {} };
            }
            this.saveUserState();
            this.showToast('Progress tozalandi! Boshlang\'ich 100 ⭐ berildi.', 'info');
            SoundEffects.playClick();
        }
    },

    // Navigation Router
    navigate(viewId) {
        SoundEffects.playClick();
        this.currentView = viewId;

        // Hide all views
        const views = document.querySelectorAll('.app-view');
        views.forEach(v => v.classList.remove('active'));

        // Show target view
        const targetView = document.getElementById(`view-${viewId}`);
        if (targetView) {
            targetView.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update active navigation link
        const navLinks = document.querySelectorAll('.nav-menu-link, .sub-menu-item');
        navLinks.forEach(link => {
            const dest = link.getAttribute('data-view');
            if (dest === viewId || (viewId.startsWith('game-') && dest === 'games-parent')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-nav-panel');
        if (mobileMenu) mobileMenu.classList.remove('open');

        // Reset game arena views to about views when entering
        if (viewId === 'game-1v1') MiniGames.reset1v1ToAbout();
        if (viewId === 'game-6p') MiniGames.reset6pToAbout();
        if (viewId === 'game-2v2') MiniGames.reset2v2ToAbout();

        // When navigating to darslar from nav menu, show step 1 (language selection)
        if (viewId === 'darslar' && window.LessonsApp) {
            LessonsApp.goToStep('lang');
        }

        // Update URL hash for browser history & sharing
        if (window.location.hash !== '#' + viewId) {
            try {
                history.pushState(null, '', '#' + viewId);
            } catch (e) {
                window.location.hash = viewId;
            }
        }
    },

    handleHashChange() {
        const hash = window.location.hash.replace('#', '');
        if (hash) this.navigate(hash);
    },

    // Theme toggler with visual SVG icon change
    applyTheme(theme) {
        this.user.theme = theme;
        const toggleBtn = document.getElementById('btn-theme-toggle');
        const themeSelect = document.getElementById('setting-theme-select');

        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            if (toggleBtn) {
                toggleBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                `;
                toggleBtn.setAttribute('title', 'Kunduzgi rejimga o\'tish (Light Mode)');
            }
            if (themeSelect) themeSelect.value = 'dark';
        } else {
            document.body.classList.remove('dark-theme');
            if (toggleBtn) {
                toggleBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                `;
                toggleBtn.setAttribute('title', 'Tungi rejimga o\'tish (Dark Mode)');
            }
            if (themeSelect) themeSelect.value = 'light';
        }

        try {
            localStorage.setItem('speakpro_theme', theme);
        } catch(e) {}

        // Also update visual theme cards in settings
        const lightCard = document.getElementById('theme-card-light');
        const darkCard = document.getElementById('theme-card-dark');
        if (lightCard) lightCard.classList.toggle('active', theme === 'light');
        if (darkCard) darkCard.classList.toggle('active', theme === 'dark');
    },

    toggleTheme() {
        const next = this.user.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(next);
        this.saveUserState();
        SoundEffects.playClick();
        this.showToast(next === 'dark' ? '🌙 Tungi rejim faollashtirildi' : '☀️ Kunduzgi rejim faollashtirildi', 'info');
    },

    bindEvents() {
        // Global Delegated click listener for all data-view navigation
        document.addEventListener('click', (e) => {
            const navElem = e.target.closest('[data-view]');
            if (navElem) {
                const view = navElem.getAttribute('data-view');
                if (view && view !== 'games-parent') {
                    e.preventDefault();
                    this.navigate(view);
                    return;
                } else if (view === 'games-parent') {
                    e.preventDefault();
                    const dropdown = document.getElementById('nav-games-dropdown');
                    if (dropdown) dropdown.classList.toggle('mobile-open');
                    return;
                }
            }

            // Theme toggle button
            const themeBtn = e.target.closest('#btn-theme-toggle');
            if (themeBtn) {
                e.preventDefault();
                this.toggleTheme();
                return;
            }
        });

        // Mini games dropdown behavior (desktop hover & mobile tap)
        const dropdownParent = document.getElementById('nav-games-dropdown');
        if (dropdownParent) {
            dropdownParent.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    dropdownParent.classList.toggle('mobile-open');
                }
            });
        }

        // Mobile menu toggle button
        const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
        const mobilePanel = document.getElementById('mobile-nav-panel');
        if (mobileToggleBtn && mobilePanel) {
            mobileToggleBtn.addEventListener('click', () => {
                mobilePanel.classList.toggle('open');
            });
        }

        // Auth Modal open triggers
        const loginBtn = document.getElementById('btn-open-login');
        const registerBtn = document.getElementById('btn-open-register');
        const authModal = document.getElementById('auth-modal');
        const authCloseBtn = document.getElementById('auth-modal-close');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.openAuthModal('login'));
        }
        if (registerBtn) {
            registerBtn.addEventListener('click', () => this.openAuthModal('register'));
        }
        if (authCloseBtn && authModal) {
            authCloseBtn.addEventListener('click', () => authModal.classList.remove('active'));
        }

        // Auth Tabs switch
        const tabLogin = document.getElementById('auth-tab-login');
        const tabRegister = document.getElementById('auth-tab-register');
        if (tabLogin && tabRegister) {
            tabLogin.addEventListener('click', () => this.switchAuthTab('login'));
            tabRegister.addEventListener('click', () => this.switchAuthTab('register'));
        }

        // Auth Form submit
        const authForm = document.getElementById('auth-form');
        if (authForm) {
            authForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAuthSubmit();
            });
        }

        // Demo login button
        const demoLoginBtn = document.getElementById('btn-demo-login');
        if (demoLoginBtn) {
            demoLoginBtn.addEventListener('click', () => {
                this.user.isLoggedIn = true;
                this.user.name = 'Azizbek (O\'quvchi)';
                this.saveUserState();
                authModal.classList.remove('active');
                this.showToast('Xush kelibsiz, Azizbek! Profil faollashtirildi.', 'success');
            });
        }

        // Logout button
        const logoutBtn = document.getElementById('btn-logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.user.isLoggedIn = false;
                this.saveUserState();
                this.showToast('Tizimdan chiqildi.', 'info');
            });
        }

        // Theme select change directly in settings
        const settingThemeSelect = document.getElementById('setting-theme-select');
        if (settingThemeSelect) {
            settingThemeSelect.addEventListener('change', (e) => {
                this.applyTheme(e.target.value);
                this.saveUserState();
                SoundEffects.playClick();
                this.showToast(e.target.value === 'dark' ? '🌙 Tungi rejim faollashtirildi' : '☀️ Kunduzgi rejim faollashtirildi', 'info');
            });
        }

        // Settings save
        const settingsForm = document.getElementById('settings-form');
        if (settingsForm) {
            settingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const nameInput = document.getElementById('setting-name-input');
                const emailInput = document.getElementById('setting-email-input');
                const phoneInput = document.getElementById('setting-phone-input');
                const soundToggle = document.getElementById('setting-sound-toggle');
                const speechToggle = document.getElementById('setting-speech-toggle');
                const volumeSlider = document.getElementById('setting-volume-slider');

                if (nameInput) this.user.name = nameInput.value.trim() || 'O\'quvchi';
                if (emailInput) this.user.email = emailInput.value.trim();
                if (phoneInput) this.user.phone = phoneInput.value.trim();
                if (soundToggle) {
                    this.user.sound = soundToggle.checked;
                    SoundEffects.enabled = this.user.sound;
                }
                if (speechToggle) {
                    this.user.speechEnabled = speechToggle.checked;
                }
                if (volumeSlider) {
                    this.user.volume = parseInt(volumeSlider.value);
                }

                this.saveUserState();
                SoundEffects.playCorrect();
                const msg = window.SpeakProI18n ? SpeakProI18n.t('toast_saved') : 'Barcha sozlamalar muvaffaqiyatli saqlandi! ✅';
                this.showToast(msg, 'success');
            });
        }

        // Game 1v1 Start button
        const start1v1Btn = document.getElementById('btn-start-1v1');
        if (start1v1Btn) {
            start1v1Btn.addEventListener('click', () => MiniGames.start1v1Game());
        }

        // Game 6p Start button
        const start6pBtn = document.getElementById('btn-start-6p');
        if (start6pBtn) {
            start6pBtn.addEventListener('click', () => MiniGames.start6pGame());
        }

        // Game 2v2 Start button and typing input
        const start2v2Btn = document.getElementById('btn-start-2v2');
        if (start2v2Btn) {
            start2v2Btn.addEventListener('click', () => MiniGames.start2v2Game());
        }

        const typingInput = document.getElementById('game2v2-input');
        if (typingInput) {
            typingInput.addEventListener('input', (e) => MiniGames.handle2v2TypingInput(e));
        }

        // Modal close for game result
        const gameResClose = document.getElementById('game-res-close');
        if (gameResClose) {
            gameResClose.addEventListener('click', () => {
                document.getElementById('game-result-modal')?.classList.remove('active');
            });
        }

        // Pronounce buttons in 1v1 and 6p arena
        const pronounce1v1 = document.getElementById('game1v1-listen-btn');
        if (pronounce1v1) {
            pronounce1v1.addEventListener('click', () => {
                if (MiniGames.state1v1.currentQuestion) {
                    speakForeignWord(MiniGames.state1v1.currentQuestion.word, MiniGames.state1v1.lang);
                }
            });
        }

        const pronounce6p = document.getElementById('game6p-listen-btn');
        if (pronounce6p) {
            pronounce6p.addEventListener('click', () => {
                if (MiniGames.state6p.currentQuestion) {
                    speakForeignWord(MiniGames.state6p.currentQuestion.word, MiniGames.state6p.lang);
                }
            });
        }
    },

    openAuthModal(type = 'login') {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            this.switchAuthTab(type);
            modal.classList.add('active');
        }
    },

    switchAuthTab(type) {
        const tabLogin = document.getElementById('auth-tab-login');
        const tabRegister = document.getElementById('auth-tab-register');
        const registerFields = document.getElementById('auth-register-only-fields');
        const submitBtn = document.getElementById('auth-submit-btn');

        if (type === 'login') {
            tabLogin.classList.add('active');
            tabRegister.classList.remove('active');
            if (registerFields) registerFields.style.display = 'none';
            if (submitBtn) submitBtn.innerText = 'Tizimga Kirish';
        } else {
            tabRegister.classList.add('active');
            tabLogin.classList.remove('active');
            if (registerFields) registerFields.style.display = 'block';
            if (submitBtn) submitBtn.innerText = 'Ro\'yxatdan O\'tish';
        }
    },

    handleAuthSubmit() {
        const isRegister = document.getElementById('auth-tab-register')?.classList.contains('active');
        const nameInput = document.getElementById('auth-input-name');
        const emailInput = document.getElementById('auth-input-email');

        if (isRegister && nameInput && nameInput.value.trim()) {
            this.user.name = nameInput.value.trim();
        } else if (emailInput && emailInput.value) {
            this.user.name = emailInput.value.split('@')[0];
        }

        this.user.isLoggedIn = true;
        this.saveUserState();

        document.getElementById('auth-modal')?.classList.remove('active');
        this.showToast(`Xush kelibsiz, ${this.user.name}! ✅`, 'success');
        SoundEffects.playCorrect();
    },

    renderLanguages() {
        const container = document.getElementById('languages-cards-container');
        if (!container) return;

        const flagSvgs = {
            en: `<svg viewBox="0 0 60 60" width="56" height="56"><clipPath id="ukClip"><circle cx="30" cy="30" r="30"/></clipPath><g clip-path="url(#ukClip)"><rect width="60" height="60" fill="#012169"/><path d="M0 0 L60 60 M60 0 L0 60" stroke="#fff" stroke-width="10"/><path d="M0 0 L60 60 M60 0 L0 60" stroke="#C8102E" stroke-width="6"/><path d="M30 0 v60 M0 30 h60" stroke="#fff" stroke-width="16"/><path d="M30 0 v60 M0 30 h60" stroke="#C8102E" stroke-width="10"/></g></svg>`,
            ru: `<svg viewBox="0 0 60 60" width="56" height="56"><clipPath id="ruClip"><circle cx="30" cy="30" r="30"/></clipPath><g clip-path="url(#ruClip)"><rect y="0" width="60" height="20" fill="#ffffff"/><rect y="20" width="60" height="20" fill="#0039A6"/><rect y="40" width="60" height="20" fill="#D52B1E"/></g></svg>`,
            de: `<svg viewBox="0 0 60 60" width="56" height="56"><clipPath id="deClip"><circle cx="30" cy="30" r="30"/></clipPath><g clip-path="url(#deClip)"><rect y="0" width="60" height="20" fill="#000000"/><rect y="20" width="60" height="20" fill="#DD0000"/><rect y="40" width="60" height="20" fill="#FFCE00"/></g></svg>`
        };

        const uiLang = (window.SpeakProI18n && SpeakProI18n.currentLang) || 'uz';
        const localizedLangNames = {
            en: { uz: '🇬🇧 Ingliz tili', ru: '🇬🇧 Английский язык', en: '🇬🇧 English Language' },
            ru: { uz: '🇷🇺 Rus tili', ru: '🇷🇺 Русский язык', en: '🇷🇺 Russian Language' },
            de: { uz: '🇩🇪 Nemis tili', ru: '🇩🇪 Немецкий язык', en: '🇩🇪 German Language' }
        };
        const localizedDescs = {
            en: {
                uz: 'Xalqaro biznes, IT sohasi, chet el sayohati va global ilmiy maqolalar uchun asosiy raqamli til.',
                ru: 'Главный цифровой язык для международного бизнеса, IT-сферы, зарубежных путешествий и науки.',
                en: 'The essential digital lingua franca for international business, IT, travel, and science.'
            },
            ru: {
                uz: 'MDH mamlakatlari bo\'ylab keng qo\'llaniladigan va savdo-sotiq hamda ilmiy sohalarda erkin so\'zlashishni ta\'minlaydigan boy til.',
                ru: 'Богатый язык, широко используемый в странах СНГ для коммерции, науки и свободного культурного общения.',
                en: 'Widely spoken across Eurasia, empowering fluent commerce, scientific research, and cultural dialogue.'
            },
            de: {
                uz: 'Germaniya, Avstriya va Shveytsariyada nufuzli universitetlarda bepul ta\'lim olish va yuqori daromadli mutaxassislik sari yo\'llanma.',
                ru: 'Путеводитель к бесплатному высшему образованию в университетах Германии и высокооплачиваемой карьере.',
                en: 'Gateway to tuition-free university education and high-paying engineering careers in Germany.'
            }
        };
        const btnText = uiLang === 'ru' ? 'Начать Обучение 🚀' : uiLang === 'en' ? 'Start Learning 🚀' : 'O\'rganishni Boshlash 🚀';
        const listenText = uiLang === 'ru' ? 'Слушать' : uiLang === 'en' ? 'Listen' : 'Tinglash';
        const livePronounceText = uiLang === 'ru' ? 'Живое произношение:' : uiLang === 'en' ? 'Live Pronunciation:' : 'Jonli Talaffuz:';
        const vocabLabel = uiLang === 'ru' ? 'активных слов' : uiLang === 'en' ? 'active words' : 'so\'z boyligi';

        container.innerHTML = Object.values(SpeakProData.languages).map(lang => `
            <div class="luxury-lang-card">
                <div class="lang-card-header">
                    <div class="vector-flag-emblem">${flagSvgs[lang.id] || ''}</div>
                    <span class="lang-card-native">${lang.nativeName}</span>
                </div>
                <h3 class="lang-card-title">${(localizedLangNames[lang.id] && localizedLangNames[lang.id][uiLang]) || lang.name}</h3>
                <p class="lang-card-desc">${(localizedDescs[lang.id] && localizedDescs[lang.id][uiLang]) || lang.description}</p>
                
                <div class="audio-sample-strip">
                    <div>
                        <div style="font-size: 10px; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">${livePronounceText}</div>
                        <div class="sample-phrase-text">"${lang.samplePhrase.text}"</div>
                    </div>
                    <button class="sample-listen-btn" onclick="speakForeignWord('${lang.samplePhrase.text.replace(/'/g, "\\'")}', '${lang.id}')" title="${listenText}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                        ${listenText}
                    </button>
                </div>

                <div class="lang-highlights-list">
                    <div class="highlight-row">
                        <svg class="highlight-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>${lang.stats.words} ${vocabLabel}</span>
                    </div>
                    <div class="highlight-row">
                        <svg class="highlight-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>${lang.stats.lessons}</span>
                    </div>
                </div>

                <button class="btn btn-primary w-full" onclick="App.selectLanguageAndLearn('${lang.id}')">
                    ${btnText}
                </button>
            </div>
        `).join('');
    },

    selectLanguageAndLearn(langId) {
        this.navigate('darslar');
        if (window.LessonsApp) {
            LessonsApp.selectLanguage(langId);
        }
    },

    renderLessons() {
        if (window.LessonsApp) {
            LessonsApp.init();
        }
    },

    filterLessons(langId) {
        const cards = document.querySelectorAll('.lesson-card');
        const filterBtns = document.querySelectorAll('.lesson-filter-btn');

        filterBtns.forEach(btn => {
            if (btn.getAttribute('data-filter') === langId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        cards.forEach(card => {
            if (langId === 'all' || card.getAttribute('data-lang') === langId) {
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
            } else {
                card.style.display = 'none';
            }
        });
    },

    openLessonModal(lessonId) {
        const lesson = SpeakProData.lessons.find(l => l.id === lessonId);
        if (!lesson) return;

        const modal = document.getElementById('lesson-detail-modal');
        if (!modal) return;

        document.getElementById('lesson-modal-title').innerText = `${lesson.langName} — ${lesson.title}`;
        document.getElementById('lesson-modal-desc').innerText = lesson.desc;

        const cardsContainer = document.getElementById('lesson-modal-cards');
        cardsContainer.innerHTML = lesson.items.map((item, i) => `
            <div class="vocab-flashcard">
                <div class="vocab-top">
                    <span class="vocab-index">#${i + 1}</span>
                    <button class="audio-btn-sm" onclick="speakForeignWord('${item.audio.replace(/'/g, "\\'")}', '${lesson.lang}')">
                        🔊 Ovoz
                    </button>
                </div>
                <div class="vocab-term">${item.term}</div>
                <div class="vocab-translation">${item.tr}</div>
            </div>
        `).join('');

        // Completion button
        const completeBtn = document.getElementById('btn-complete-lesson');
        if (completeBtn) {
            completeBtn.onclick = () => {
                this.addStars(lesson.stars);
                modal.classList.remove('active');
                this.showToast(`Tabriklaymiz! Dars yakunlandi va +${lesson.stars} ⭐ berildi!`, 'success');
            };
        }

        modal.classList.add('active');
    },

    renderLeaderboard(filter = 'weekly') {
        const tbody = document.getElementById('leaderboard-tbody');
        if (!tbody) return;

        const i18n = window.SpeakProI18n;
        const t = (key) => i18n ? i18n.t(key) : key;

        // League name localizer
        const localizeLeague = (league) => {
            const lowerLeague = league.toLowerCase();
            if (lowerLeague.includes('oltin') || lowerLeague.includes('gold') || lowerLeague.includes('золот')) return t('league_gold');
            if (lowerLeague.includes('kumush') || lowerLeague.includes('silver') || lowerLeague.includes('сереб')) return t('league_silver');
            if (lowerLeague.includes('bronza') || lowerLeague.includes('bronze') || lowerLeague.includes('бронз')) return t('league_bronze');
            return league;
        };

        // Language tag localizer
        const localizeLang = (lang) => {
            const lowerLang = lang.toLowerCase();
            if (lowerLang.includes('ingliz') || lowerLang.includes('english') || lowerLang.includes('англ')) return t('lang_tag_en');
            if (lowerLang.includes('rus') || lowerLang.includes('russian') || lowerLang.includes('рус')) return t('lang_tag_ru');
            if (lowerLang.includes('nemis') || lowerLang.includes('german') || lowerLang.includes('немец')) return t('lang_tag_de');
            return lang;
        };

        const winsSuffix = t('wins_suffix');

        // Sort data
        const sorted = [...SpeakProData.leaderboard].sort((a, b) => b.stars - a.stars);

        tbody.innerHTML = sorted.map((p, idx) => {
            let rankPill = '';
            if (idx === 0) rankPill = '<span class="rank-badge-pill gold">🥇 1</span>';
            else if (idx === 1) rankPill = '<span class="rank-badge-pill silver">🥈 2</span>';
            else if (idx === 2) rankPill = '<span class="rank-badge-pill bronze">🥉 3</span>';
            else rankPill = `<span class="rank-badge-pill">#${idx + 1}</span>`;

            return `
                <tr>
                    <td class="rank-cell">${rankPill}</td>
                    <td>
                        <div class="user-cell">
                            <div class="user-avatar-circle">${p.avatar}</div>
                            <div class="user-details">
                                <span class="user-name-text">${p.name}</span>
                                <span class="user-sub-text">${localizeLang(p.lang)}</span>
                            </div>
                        </div>
                    </td>
                    <td><span class="league-badge ${p.league.toLowerCase().replace(' ', '-')}">${localizeLeague(p.league)}</span></td>
                    <td><strong>${p.wins}${winsSuffix ? ' ' + winsSuffix : ''}</strong></td>
                    <td><span class="stars-cell-value">${p.stars} ⭐</span></td>
                </tr>
            `;
        }).join('');
    },

    renderStarStore() {
        const container = document.getElementById('star-store-grid');
        if (!container) return;

        const i18n = window.SpeakProI18n;
        const t = (key) => i18n ? i18n.t(key) : key;

        container.innerHTML = SpeakProData.storeGifts.map(gift => {
            const title = t('store_' + gift.id + '_title') !== 'store_' + gift.id + '_title' ? t('store_' + gift.id + '_title') : gift.title;
            const category = t('store_' + gift.id + '_category') !== 'store_' + gift.id + '_category' ? t('store_' + gift.id + '_category') : gift.category;
            const desc = t('store_' + gift.id + '_desc') !== 'store_' + gift.id + '_desc' ? t('store_' + gift.id + '_desc') : gift.desc;
            const badge = t('store_' + gift.id + '_badge') !== 'store_' + gift.id + '_badge' ? t('store_' + gift.id + '_badge') : gift.badge;
            const btnText = t('btn_redeem');

            return `
            <div class="gift-card">
                <div class="gift-badge">${badge}</div>
                <div class="gift-icon">${gift.icon}</div>
                <div class="gift-category">${category}</div>
                <h4 class="gift-title">${title}</h4>
                <p class="gift-desc">${desc}</p>
                <div class="gift-footer">
                    <div class="gift-cost">${gift.cost} ⭐</div>
                    <button class="btn btn-primary btn-sm" onclick="App.redeemGift('${gift.id}')">
                        ${btnText}
                    </button>
                </div>
            </div>
        `}).join('');
    },

    redeemGift(giftId) {
        const gift = SpeakProData.storeGifts.find(g => g.id === giftId);
        if (!gift) return;

        const i18n = window.SpeakProI18n;
        const t = (key) => i18n ? i18n.t(key) : key;
        const giftTitle = t('store_' + gift.id + '_title') !== 'store_' + gift.id + '_title' ? t('store_' + gift.id + '_title') : gift.title;

        if (this.user.stars < gift.cost) {
            SoundEffects.playWrong();
            const msg = t('store_not_enough').replace('{stars}', this.user.stars).replace('{cost}', gift.cost);
            this.showToast(msg, 'error');
            return;
        }

        const confirmMsg = t('store_confirm').replace('{title}', giftTitle).replace('{cost}', gift.cost);
        const confirmed = confirm(confirmMsg);
        if (confirmed) {
            if (this.deductStars(gift.cost)) {
                SoundEffects.playWin();
                this.triggerConfetti();
                const successMsg = t('store_success_title').replace('{title}', giftTitle);
                alert(successMsg);
                const toastMsg = t('store_success_toast').replace('{title}', giftTitle).replace('{cost}', gift.cost);
                this.showToast(toastMsg, 'success');
            }
        }
    },

    // Toast alert system
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span class="toast-message">${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    },

    // Confetti particles generator
    triggerConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;

        const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
        for (let i = 0; i < 40; i++) {
            const conf = document.createElement('div');
            conf.className = 'confetti-piece';
            conf.style.left = `${Math.random() * 100}vw`;
            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            conf.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
            conf.style.animationDuration = `${1.5 + Math.random() * 2}s`;
            conf.style.animationDelay = `${Math.random() * 0.4}s`;
            container.appendChild(conf);

            setTimeout(() => conf.remove(), 3500);
        }
    }
};

// Expose to window for inline HTML onclick handlers
window.App = App;
window.MiniGames = MiniGames;
window.SoundEffects = SoundEffects;

// Global startup when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
