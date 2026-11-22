// School77 - Main Application Logic & Single Page Router

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
        email: 'student@School77.uz',
        phone: '+998 90 123 45 67',
        wins: 58,
        langWins: { en: 32, ru: 16, de: 10 },
        claimedTiers: ['bronze_1'],
        appLang: 'uz',
        isLoggedIn: false,
        role: 'student'
    },

    currentView: 'home',
    currentLeaderboardTab: 'all',

    init() {
        this.loadUserState();
        if (window.School77I18n) {
            School77I18n.init();
        }
        this.applyTheme(this.user.theme);
        this.updateHeaderProfile();
        this.bindEvents();
        this.renderLanguages();
        this.renderLessons();
        this.renderLeaderboard('all');
        this.renderStarStore();
        this.updateProfileOverview();

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
            const savedTheme = localStorage.getItem('School77_theme');
            if (savedTheme) this.user.theme = savedTheme;
            const savedLang = localStorage.getItem('School77_app_lang');
            if (savedLang) this.user.appLang = savedLang;
            const saved = localStorage.getItem('School77_user');
            if (saved) {
                this.user = { ...this.user, ...JSON.parse(saved) };
                if (savedTheme) this.user.theme = savedTheme;
                if (savedLang) this.user.appLang = savedLang;
            }

            // Load custom store gifts if customized by Admin
            const savedStore = localStorage.getItem('School77_admin_store');
            if (savedStore && window.School77Data) {
                try {
                    const parsed = JSON.parse(savedStore);
                    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
                        School77Data.storeGifts = parsed;
                    }
                } catch(e) {}
            }
        } catch (e) {
            console.error('Failed to load user state', e);
        }
        SoundEffects.enabled = this.user.sound;
    },

    saveUserState() {
        try {
            localStorage.setItem('School77_user', JSON.stringify(this.user));
            localStorage.setItem('School77_theme', this.user.theme);
            if (this.user.appLang) localStorage.setItem('School77_app_lang', this.user.appLang);

            // Sync student star updates into Admin database
            if (this.user.email && this.user.role !== 'admin') {
                const adminList = JSON.parse(localStorage.getItem('School77_admin_students') || '[]');
                const idx = adminList.findIndex(s => s.email === this.user.email);
                if (idx !== -1) {
                    adminList[idx].stars = this.user.stars;
                    adminList[idx].wins = this.user.wins || adminList[idx].wins;
                    adminList[idx].name = this.user.name;
                    localStorage.setItem('School77_admin_students', JSON.stringify(adminList));
                    if (window.AdminApp && AdminApp.data && Array.isArray(AdminApp.data.students)) {
                        const aIdx = AdminApp.data.students.findIndex(s => s.email === this.user.email);
                        if (aIdx !== -1) {
                            AdminApp.data.students[aIdx].stars = this.user.stars;
                            AdminApp.data.students[aIdx].wins = this.user.wins || AdminApp.data.students[aIdx].wins;
                        }
                    }
                }
            }
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

        // Header logout button & mobile login/logout links
        const headerLogoutBtn = document.getElementById('header-btn-logout');
        const headerAdminBtn = document.getElementById('header-btn-admin');
        const mobileLogoutLink = document.getElementById('mobile-logout-link');
        const mobileLoginLink = document.getElementById('mobile-login-link');
        if (this.user.isLoggedIn) {
            if (headerLogoutBtn) headerLogoutBtn.style.display = 'flex';
            if (mobileLogoutLink) mobileLogoutLink.style.display = '';
            if (mobileLoginLink) mobileLoginLink.style.display = 'none';
        } else {
            if (headerLogoutBtn) headerLogoutBtn.style.display = 'none';
            if (mobileLogoutLink) mobileLogoutLink.style.display = 'none';
            if (mobileLoginLink) mobileLoginLink.style.display = '';
        }

        // Toggle Admin Panel button in header
        if (this.user.isLoggedIn && this.user.role === 'admin') {
            if (headerAdminBtn) headerAdminBtn.style.display = 'inline-flex';
        } else {
            if (headerAdminBtn) headerAdminBtn.style.display = 'none';
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
        if (settingEmail) settingEmail.value = this.user.email || 'student@School77.uz';
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
        const currentAppLang = this.user.appLang || (window.School77I18n ? School77I18n.currentLang : 'uz');
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
        if (window.School77I18n) {
            School77I18n.setLanguage(langCode);
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
            localStorage.removeItem('School77_lessons_progress');
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
        let isLugat = false;
        if (viewId === 'lugat') {
            isLugat = true;
            viewId = 'darslar';
        }
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
            if (dest === (isLugat ? 'lugat' : viewId) || (viewId.startsWith('game-') && dest === 'games-parent')) {
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

        if (isLugat) {
            if (window.LessonsApp) {
                LessonsApp.openVocabulary('en');
            }
        } else if (viewId === 'darslar' && window.LessonsApp) {
            if (LessonsApp.step !== 'dialogs' && LessonsApp.step !== 'idioms' && LessonsApp.step !== 'vocabulary') {
                LessonsApp.goToStep('lang');
            }
        } else if (viewId === 'speaking' && window.SpeakingApp) {
            SpeakingApp.init();
        } else if (viewId === 'login') {
            const loggedInCard = document.getElementById('auth-logged-in-card');
            const mainCard = document.getElementById('auth-main-card');
            if (mainCard) mainCard.style.display = 'grid';
            if (this.user.isLoggedIn) {
                if (loggedInCard) loggedInCard.style.display = 'block';
                const bannerAvatar = document.getElementById('auth-banner-avatar');
                const bannerUsername = document.getElementById('auth-banner-username');
                const bannerEmail = document.getElementById('auth-banner-email');
                if (bannerAvatar) bannerAvatar.textContent = this.user.avatar;
                if (bannerUsername) bannerUsername.textContent = this.user.name;
                if (bannerEmail) bannerEmail.textContent = this.user.email || 'student@School77.uz';
            } else {
                if (loggedInCard) loggedInCard.style.display = 'none';
                this.switchAuthMode('login');
            }
        } else if (viewId === 'star') {
            this.renderStarStore();
            const counter = document.getElementById('star-page-counter');
            if (counter) counter.textContent = (this.user.stars || 0) + ' ⭐';
        } else if (viewId === 'admin') {
            if (!this.user.isLoggedIn || this.user.role !== 'admin') {
                this.showToast("Admin panelga faqat admin@school77.uz va 7578mf paroli bilan kirish mumkin!", 'error');
                this.navigate('login');
                return;
            }
            if (window.AdminApp) {
                AdminApp.init();
            }
        } else if (viewId === 'reyting') {
            this.renderLeaderboard(this.currentLeaderboardTab || 'all');
        } else if (viewId === 'sozlamalar') {
            this.updateProfileOverview();
        }

        // Update URL hash for browser history & sharing
        const hashTarget = isLugat ? 'lugat' : viewId;
        if (window.location.hash !== '#' + hashTarget) {
            try {
                history.pushState(null, '', '#' + hashTarget);
            } catch (e) {
                window.location.hash = hashTarget;
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
            localStorage.setItem('School77_theme', theme);
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

        // Auth Modal open triggers — now navigate to login page instead
        const loginBtn = document.getElementById('btn-open-login');
        const registerBtn = document.getElementById('btn-open-register');
        const authModal = document.getElementById('auth-modal');
        const authCloseBtn = document.getElementById('auth-modal-close');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => { this.navigate('login'); this.switchAuthMode('login'); });
        }
        if (registerBtn) {
            registerBtn.addEventListener('click', () => { this.navigate('login'); this.switchAuthMode('register'); });
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
                const msg = window.School77I18n ? School77I18n.t('toast_saved') : 'Barcha sozlamalar muvaffaqiyatli saqlandi! ✅';
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

    // ==================== LOGIN PAGE METHODS ====================

    logout() {
        this.user.isLoggedIn = false;
        this.user.role = 'student';
        this.saveUserState();
        this.showToast('Akkauntdan muvaffaqiyatli chiqildi.', 'info');
        this.navigate('login');
    },

    switchAuthMode(mode) {
        const loginTab = document.getElementById('page-auth-tab-login');
        const registerTab = document.getElementById('page-auth-tab-register');
        const nameGroup = document.getElementById('p-auth-name-group');
        const langGroup = document.getElementById('p-auth-lang-group');
        const submitBtn = document.getElementById('p-auth-submit-btn');
        const heading = document.getElementById('page-auth-heading');
        const subheading = document.getElementById('page-auth-subheading');
        const forgotLink = document.getElementById('p-auth-forgot');

        if (mode === 'register') {
            if (loginTab) loginTab.classList.remove('active');
            if (registerTab) registerTab.classList.add('active');
            if (nameGroup) nameGroup.style.display = 'block';
            if (langGroup) langGroup.style.display = 'block';
            if (submitBtn) submitBtn.querySelector('span').textContent = "Ro'yxatdan O'tish 🎉";
            if (heading) heading.textContent = "Yangi hisob yaratish! 🚀";
            if (subheading) subheading.textContent = "Bir daqiqada ro'yxatdan o'ting va o'rganishni boshlang.";
            if (forgotLink) forgotLink.style.display = 'none';
        } else {
            if (registerTab) registerTab.classList.remove('active');
            if (loginTab) loginTab.classList.add('active');
            if (nameGroup) nameGroup.style.display = 'none';
            if (langGroup) langGroup.style.display = 'none';
            if (submitBtn) submitBtn.querySelector('span').textContent = "Tizimga Kirish 🚀";
            if (heading) heading.textContent = "Xush kelibsiz! 👋";
            if (subheading) subheading.textContent = "Platformaga kirish uchun ma'lumotlaringizni kiriting.";
            if (forgotLink) forgotLink.style.display = '';
        }
    },

    handlePageAuthSubmit(event) {
        event.preventDefault();
        const isRegister = document.getElementById('page-auth-tab-register')?.classList.contains('active');
        const nameInput = document.getElementById('p-auth-name');
        const idInput = document.getElementById('p-auth-id');
        const pwdInput = document.getElementById('p-auth-pwd');

        const rawId = (idInput?.value || '').trim();
        const rawPwd = (pwdInput?.value || '').trim();

        // Check Super Admin Credentials: admin@school77.uz / 7578mf
        if (rawId.toLowerCase() === 'admin@school77.uz' && rawPwd === '7578mf') {
            this.user.name = "Bosh Administrator";
            this.user.email = "admin@school77.uz";
            this.user.avatar = "👑";
            this.user.role = "admin";
            this.user.isLoggedIn = true;
            this.saveUserState();
            this.showToast("👑 Xush kelibsiz, Bosh Administrator! Admin panel ochilmoqda...", 'success');
            if (window.SoundEffects) SoundEffects.playWin();
            this.navigate('admin');
            return;
        }

        if (isRegister) {
            const studentName = (nameInput && nameInput.value.trim()) || 'Yangi O\'quvchi';
            const studentLang = document.getElementById('p-auth-lang')?.value || 'en';
            const studentContact = rawId || '+998 90 000 00 00';
            const isEmail = studentContact.includes('@');

            const newStudent = {
                id: 'std-' + Date.now(),
                name: studentName,
                email: isEmail ? studentContact : (studentName.toLowerCase().replace(/[^a-z0-9]/g, '.') + '@mail.uz'),
                phone: isEmail ? '+998 90 ' + Math.floor(1000000 + Math.random() * 9000000) : studentContact,
                lang: studentLang,
                avatar: '👨‍🎓',
                stars: 100,
                wins: 0,
                tier: 'bronze_1',
                registeredAt: new Date().toISOString().split('T')[0],
                status: 'active'
            };

            this.user.name = studentName;
            this.user.email = newStudent.email;
            this.user.phone = newStudent.phone;
            this.user.stars = 100;
            this.user.role = 'student';

            // Sync directly with Admin database (LocalStorage + Backend)
            if (window.AdminApp) {
                if (!AdminApp.data.students || AdminApp.data.students.length === 0) {
                    AdminApp.loadLocalData();
                }
                AdminApp.data.students.unshift(newStudent);
                AdminApp.saveLocalData();
                if (typeof AdminApp.renderStats === 'function') AdminApp.renderStats();
            } else {
                try {
                    const existing = JSON.parse(localStorage.getItem('School77_admin_students') || '[]');
                    existing.unshift(newStudent);
                    localStorage.setItem('School77_admin_students', JSON.stringify(existing));
                } catch(e) {}
            }

            // Also post to backend server if running
            try {
                fetch('http://localhost:3000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newStudent)
                }).catch(() => {});
            } catch(e) {}
        } else {
            if (idInput && idInput.value) {
                const contact = idInput.value.trim();
                const displayName = contact.includes('@') ? contact.split('@')[0] : contact;
                this.user.name = displayName;
                this.user.email = contact.includes('@') ? contact : (displayName.toLowerCase().replace(/[^a-z0-9]/g, '.') + '@mail.uz');
                this.user.phone = contact.includes('@') ? '+998 90 ' + Math.floor(1000000 + Math.random() * 9000000) : contact;
                this.user.role = 'student';

                // Check if already in students database, if not, record as active student
                let existingList = [];
                try {
                    existingList = JSON.parse(localStorage.getItem('School77_admin_students') || '[]');
                } catch(e) {}

                const alreadyExists = existingList.some(s => s.email === this.user.email || s.phone === this.user.phone);
                if (!alreadyExists) {
                    const newLoginStudent = {
                        id: 'std-' + Date.now(),
                        name: displayName,
                        email: this.user.email,
                        phone: this.user.phone,
                        lang: 'en',
                        avatar: '👨‍🎓',
                        stars: this.user.stars || 100,
                        wins: 0,
                        tier: 'bronze_1',
                        registeredAt: new Date().toISOString().split('T')[0],
                        status: 'active'
                    };
                    if (window.AdminApp) {
                        if (!AdminApp.data.students || AdminApp.data.students.length === 0) {
                            AdminApp.loadLocalData();
                        }
                        AdminApp.data.students.unshift(newLoginStudent);
                        AdminApp.saveLocalData();
                        if (typeof AdminApp.renderStats === 'function') AdminApp.renderStats();
                    } else {
                        existingList.unshift(newLoginStudent);
                        localStorage.setItem('School77_admin_students', JSON.stringify(existingList));
                    }
                    try {
                        fetch('http://localhost:3000/api/auth/register', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newLoginStudent)
                        }).catch(() => {});
                    } catch(e) {}
                }
            }
        }
        this.user.isLoggedIn = true;
        this.saveUserState();
        this.showToast(`Xush kelibsiz, ${this.user.name}! ✅`, 'success');
        if (window.SoundEffects) SoundEffects.playCorrect();
        this.navigate('home');
    },

    loginAsDemo() {
        this.user.isLoggedIn = true;
        this.user.name = "Demo O'quvchi";
        this.saveUserState();
        this.showToast("⚡ Demo rejimda kirdingiz! Xush kelibsiz!", 'success');
        if (window.SoundEffects) SoundEffects.playCorrect();
        this.navigate('home');
    },

    socialLogin(provider) {
        this.showToast(`${provider} orqali kirish tez orada qo'shiladi!`, 'info');
    },

    togglePasswordVisibility(inputId, btn) {
        const input = document.getElementById(inputId);
        if (!input) return;
        if (input.type === 'password') {
            input.type = 'text';
            btn.textContent = '🙈';
        } else {
            input.type = 'password';
            btn.textContent = '👁️';
        }
    },

    handleForgotPassword() {
        this.showToast("Parolni tiklash funksiyasi tez orada qo'shiladi!", 'info');
    },

    // ============================================================

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

        const uiLang = (window.School77I18n && School77I18n.currentLang) || 'uz';
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

        container.innerHTML = Object.values(School77Data.languages).map(lang => `
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
        const lesson = School77Data.lessons.find(l => l.id === lessonId);
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

    // =========================================================================
    // LEAGUES AND TIERS MATRIX (50-100 Bronza, 100-300 Kumush, 300-800+ Oltin)
    // =========================================================================
    getLeagueTier(wins = 0) {
        const TIERS = [
            { id: 'bronze_1', league: 'bronze', tier: 1, name: 'Bronza 1', icon: '🥉', minWins: 50, maxWins: 66, rewardStars: 10, color: '#cd7f32', bg: 'rgba(205, 127, 50, 0.15)', border: '#cd7f32' },
            { id: 'bronze_2', league: 'bronze', tier: 2, name: 'Bronza 2', icon: '🥉', minWins: 67, maxWins: 83, rewardStars: 15, color: '#cd7f32', bg: 'rgba(205, 127, 50, 0.15)', border: '#cd7f32' },
            { id: 'bronze_3', league: 'bronze', tier: 3, name: 'Bronza 3', icon: '🥉', minWins: 84, maxWins: 100, rewardStars: 30, color: '#cd7f32', bg: 'rgba(205, 127, 50, 0.15)', border: '#cd7f32' },
            { id: 'silver_1', league: 'silver', tier: 1, name: 'Kumush 1', icon: '🥈', minWins: 101, maxWins: 166, rewardStars: 40, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.15)', border: '#94a3b8' },
            { id: 'silver_2', league: 'silver', tier: 2, name: 'Kumush 2', icon: '🥈', minWins: 167, maxWins: 233, rewardStars: 50, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.15)', border: '#94a3b8' },
            { id: 'silver_3', league: 'silver', tier: 3, name: 'Kumush 3', icon: '🥈', minWins: 234, maxWins: 300, rewardStars: 60, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.15)', border: '#94a3b8' },
            { id: 'gold_1', league: 'gold', tier: 1, name: 'Oltin 1', icon: '🥇', minWins: 301, maxWins: 466, rewardStars: 80, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)', border: '#f59e0b' },
            { id: 'gold_2', league: 'gold', tier: 2, name: 'Oltin 2', icon: '🥇', minWins: 467, maxWins: 633, rewardStars: 100, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)', border: '#f59e0b' },
            { id: 'gold_3', league: 'gold', tier: 3, name: 'Oltin 3', icon: '👑', minWins: 634, maxWins: 999999, rewardStars: 120, color: '#eab308', bg: 'rgba(234, 179, 8, 0.18)', border: '#eab308' }
        ];

        if (wins < 50) {
            return {
                id: 'starter',
                league: 'starter',
                tier: 0,
                name: 'Boshlang\'ich',
                icon: '🌱',
                minWins: 0,
                maxWins: 49,
                rewardStars: 0,
                color: '#10b981',
                bg: 'rgba(16, 185, 129, 0.15)',
                border: '#10b981',
                nextTier: TIERS[0],
                winsToNext: 50 - wins,
                progressPercent: Math.min(100, Math.round((wins / 50) * 100)),
                allTiers: TIERS
            };
        }

        for (let i = TIERS.length - 1; i >= 0; i--) {
            if (wins >= TIERS[i].minWins) {
                const current = TIERS[i];
                const next = TIERS[i + 1] || null;
                let winsToNext = 0;
                let progressPercent = 100;

                if (next) {
                    winsToNext = Math.max(0, next.minWins - wins);
                    const range = next.minWins - current.minWins;
                    const earnedInRange = wins - current.minWins;
                    progressPercent = Math.min(100, Math.max(0, Math.round((earnedInRange / range) * 100)));
                }

                return {
                    ...current,
                    nextTier: next,
                    winsToNext,
                    progressPercent,
                    allTiers: TIERS
                };
            }
        }
        return { ...TIERS[0], allTiers: TIERS };
    },

    // Calculate Lessons Progress & Mastery Rating
    calculateLessonsProgress() {
        let watchedCount = 0;
        let testsPassedCount = 0;
        let mockDoneCount = 0;

        try {
            const saved = localStorage.getItem('School77_lessons_progress');
            if (saved) {
                const prog = JSON.parse(saved);
                watchedCount = Object.keys(prog.watchedVideos || {}).length;
                testsPassedCount = Object.keys(prog.passedLevelTests || {}).length;
                mockDoneCount = Object.keys(prog.mockTestsDone || {}).length;
            }
        } catch(e) {}

        const benchmarkVideos = 30;
        const benchmarkTests = 15;

        const videoScore = Math.min(50, (watchedCount / benchmarkVideos) * 50);
        const testScore = Math.min(50, (testsPassedCount / benchmarkTests) * 50);
        const totalPercent = Math.min(100, Math.max(12, Math.round(videoScore + testScore + (mockDoneCount * 5))));

        let grade = 'O\'rta (C)';
        if (totalPercent >= 85) {
            grade = 'A\'lo daraja (A+)';
        } else if (totalPercent >= 70) {
            grade = 'Yaxshi (B+)';
        } else if (totalPercent >= 50) {
            grade = 'Qoniqarli (B)';
        }

        return {
            percent: totalPercent,
            grade,
            watchedCount,
            testsPassedCount,
            mockDoneCount
        };
    },

    // Record a Win and Check Tier Promotion Rewards
    recordWin(lang = 'en') {
        this.user.wins = (this.user.wins || 0) + 1;
        this.user.langWins = this.user.langWins || { en: 0, ru: 0, de: 0 };
        this.user.langWins[lang] = (this.user.langWins[lang] || 0) + 1;
        this.user.claimedTiers = this.user.claimedTiers || [];

        const tierInfo = this.getLeagueTier(this.user.wins);
        if (tierInfo.allTiers) {
            tierInfo.allTiers.forEach(t => {
                if (this.user.wins >= t.minWins && !this.user.claimedTiers.includes(t.id)) {
                    this.user.claimedTiers.push(t.id);
                    this.user.stars = (this.user.stars || 0) + t.rewardStars;
                    this.showToast(`🎉 TABRIKLAYMIZ! Siz "${t.name}" ligasiga ko'tarildingiz va +${t.rewardStars} Star ⭐ mukofotini qo'lga kiritdingiz!`, 'success');
                    if (window.SoundEffects) SoundEffects.playWin();
                    this.triggerConfetti();
                }
            });
        }

        this.saveUserState();
        this.updateHeaderProfile();
        this.renderLeaderboard(this.currentLeaderboardTab || 'all');
        this.updateProfileOverview();
    },

    // Switch Leaderboard Tab
    switchLeaderboardTab(tabLang) {
        this.currentLeaderboardTab = tabLang;
        document.querySelectorAll('.lb-tab-btn').forEach(btn => {
            if (btn.getAttribute('data-lb-lang') === tabLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        this.renderLeaderboard(tabLang);
    },

    // Get combined sorted leaderboard data
    getLeaderboardData(lang = 'all') {
        let players = [...(School77Data.leaderboard || [])];
        if (lang !== 'all') {
            players = players.filter(p => p.lang === lang);
        }

        // Get user wins for current tab
        let userWins = this.user.wins || 58;
        if (lang !== 'all') {
            const lw = this.user.langWins || {};
            userWins = lw[lang] !== undefined ? lw[lang] : (lang === 'en' ? Math.round(this.user.wins * 0.5) : (lang === 'ru' ? Math.round(this.user.wins * 0.3) : Math.round(this.user.wins * 0.2)));
        }

        const userTier = this.getLeagueTier(userWins);
        const userEntry = {
            isCurrentUser: true,
            name: this.user.name || 'Azizbek',
            avatar: this.user.avatar || '👨‍🎓',
            wins: userWins,
            stars: this.user.stars || 350,
            lang: lang === 'all' ? 'all' : lang,
            langName: lang === 'en' ? 'Ingliz tili' : (lang === 'ru' ? 'Rus tili' : (lang === 'de' ? 'Nemis tili' : 'Barcha tillar')),
            tier: userTier
        };

        const combined = players.map(p => ({
            ...p,
            isCurrentUser: false,
            tier: this.getLeagueTier(p.wins)
        }));
        combined.push(userEntry);

        // SORT STRICTLY BY WINS (with stars tie-breaker)
        combined.sort((a, b) => b.wins - a.wins || b.stars - a.stars);

        let userRank = 1;
        combined.forEach((p, idx) => {
            p.rank = idx + 1;
            if (p.isCurrentUser) userRank = p.rank;
        });

        return { combined, userRank, userEntry, userTier };
    },

    // Render Full Leaderboard with Multi-Language Support, Podium & Standings
    renderLeaderboard(tabLang = 'all') {
        this.currentLeaderboardTab = tabLang;
        const tbody = document.getElementById('leaderboard-tbody');
        const userCard = document.getElementById('leaderboard-user-card');
        const podiumWrap = document.getElementById('leaderboard-podium');
        const rulesBody = document.getElementById('league-rules-body');

        const { combined, userRank, userEntry, userTier } = this.getLeaderboardData(this.currentLeaderboardTab);

        // 1. Render User Standings Card
        if (userCard) {
            const nextInfo = userTier.nextTier ? `
                <div class="user-tier-next-info">
                    <span>Keyingi bosqich: <strong>${userTier.nextTier.name} (${userTier.nextTier.minWins} g'alaba)</strong></span>
                    <span class="user-tier-reward-tag">+${userTier.nextTier.rewardStars} Star ⭐ mukofot</span>
                </div>
                <div class="tier-progress-track">
                    <div class="tier-progress-bar" style="width: ${userTier.progressPercent}%;"></div>
                </div>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
                    Yana <strong>${userTier.winsToNext} ta g'alaba</strong> qoldi (${userTier.progressPercent}% yakunlandi)
                </div>
            ` : `
                <div class="user-tier-next-info">
                    <span style="color: #eab308; font-weight: 800;">👑 Siz eng oliy Oltin 3 Ligasidasiz!</span>
                </div>
            `;

            userCard.innerHTML = `
                <div class="live-user-inner">
                    <div class="live-user-left">
                        <div class="live-user-avatar">${userEntry.avatar}</div>
                        <div>
                            <div class="live-user-name-row">
                                <span class="live-user-name">${userEntry.name}</span>
                                <span class="live-user-you-tag">Siz</span>
                                <span class="rank-hero-pill">#${userRank} - O'rin</span>
                            </div>
                            <div class="live-user-meta-sub">
                                <span class="tier-badge-pill" style="background: ${userTier.bg}; color: ${userTier.color}; border: 1px solid ${userTier.border};">
                                    ${userTier.icon} ${userTier.name} Ligasi
                                </span>
                                <span>🔥 <strong>${userEntry.wins} ta</strong> g'alaba</span>
                                <span>⭐ <strong>${userEntry.stars}</strong> star</span>
                            </div>
                        </div>
                    </div>

                    <div class="live-user-center">
                        ${nextInfo}
                    </div>

                    <div class="live-user-actions">
                        <button class="btn btn-primary btn-sm" onclick="App.recordWin('${this.currentLeaderboardTab === 'all' ? 'en' : this.currentLeaderboardTab}')" title="G'alaba qo'shish va reytingda ko'tarilish">
                            ⚡ +1 G'alaba Qozonish (Sinov)
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="App.navigate('game-1v1')">
                            ⚔️ 1vs1 Bellashuv
                        </button>
                    </div>
                </div>
            `;
        }

        // 2. Render Top 3 Podium
        if (podiumWrap && combined.length >= 3) {
            const p1 = combined[0];
            const p2 = combined[1];
            const p3 = combined[2];

            podiumWrap.innerHTML = `
                <!-- 2-O'rin (Kumush) -->
                <div class="podium-card podium-rank-2">
                    <div class="podium-medal-icon">🥈</div>
                    <div class="podium-avatar-wrap">
                        <span class="podium-avatar">${p2.avatar}</span>
                        <span class="podium-rank-tag tag-silver">2</span>
                    </div>
                    <h4 class="podium-name">${p2.name}</h4>
                    <span class="podium-tier" style="color: ${p2.tier.color};">${p2.tier.icon} ${p2.tier.name}</span>
                    <div class="podium-stats">
                        <span>🔥 <strong>${p2.wins}</strong> g'alaba</span>
                        <span>⭐ ${p2.stars}</span>
                    </div>
                </div>

                <!-- 1-O'rin (Oltin) -->
                <div class="podium-card podium-rank-1">
                    <div class="podium-crown-icon">👑</div>
                    <div class="podium-avatar-wrap">
                        <span class="podium-avatar">${p1.avatar}</span>
                        <span class="podium-rank-tag tag-gold">1</span>
                    </div>
                    <h4 class="podium-name">${p1.name}</h4>
                    <span class="podium-tier" style="color: ${p1.tier.color};">${p1.tier.icon} ${p1.tier.name}</span>
                    <div class="podium-stats">
                        <span>🔥 <strong>${p1.wins}</strong> g'alaba</span>
                        <span>⭐ ${p1.stars}</span>
                    </div>
                </div>

                <!-- 3-O'rin (Bronza) -->
                <div class="podium-card podium-rank-3">
                    <div class="podium-medal-icon">🥉</div>
                    <div class="podium-avatar-wrap">
                        <span class="podium-avatar">${p3.avatar}</span>
                        <span class="podium-rank-tag tag-bronze">3</span>
                    </div>
                    <h4 class="podium-name">${p3.name}</h4>
                    <span class="podium-tier" style="color: ${p3.tier.color};">${p3.tier.icon} ${p3.tier.name}</span>
                    <div class="podium-stats">
                        <span>🔥 <strong>${p3.wins}</strong> g'alaba</span>
                        <span>⭐ ${p3.stars}</span>
                    </div>
                </div>
            `;
        }

        // 3. Render League Rules & Star Rewards Roadmap
        if (rulesBody) {
            rulesBody.innerHTML = this.renderLeagueRoadmapHtml();
        }

        // 4. Render Table Rows
        if (tbody) {
            tbody.innerHTML = combined.map(p => {
                let rankBadge = '';
                if (p.rank === 1) rankBadge = '<span class="rank-badge-pill gold">🥇 1</span>';
                else if (p.rank === 2) rankBadge = '<span class="rank-badge-pill silver">🥈 2</span>';
                else if (p.rank === 3) rankBadge = '<span class="rank-badge-pill bronze">🥉 3</span>';
                else rankBadge = `<span class="rank-badge-pill">#${p.rank}</span>`;

                const langIcon = p.lang === 'en' ? '🇬🇧 Ingliz' : (p.lang === 'ru' ? '🇷🇺 Rus' : (p.lang === 'de' ? '🇩🇪 Nemis' : '🌐 Barcha'));

                return `
                    <tr class="${p.isCurrentUser ? 'current-user-row' : ''}">
                        <td class="rank-cell" style="text-align: center;">${rankBadge}</td>
                        <td>
                            <div class="user-cell">
                                <div class="user-avatar-circle">${p.avatar}</div>
                                <div class="user-details">
                                    <div style="display: flex; align-items: center; gap: 6px;">
                                        <span class="user-name-text">${p.name}</span>
                                        ${p.isCurrentUser ? '<span class="user-tag-pill">Siz</span>' : ''}
                                    </div>
                                    <span class="user-sub-text">${p.langName || langIcon}</span>
                                </div>
                            </div>
                        </td>
                        <td><span class="lang-flag-pill">${langIcon}</span></td>
                        <td style="text-align: center;">
                            <span class="wins-highlight-pill">🔥 <strong>${p.wins}</strong> ta</span>
                        </td>
                        <td>
                            <span class="tier-badge-pill" style="background: ${p.tier.bg}; color: ${p.tier.color}; border: 1px solid ${p.tier.border};">
                                ${p.tier.icon} ${p.tier.name}
                            </span>
                        </td>
                        <td style="text-align: right;"><span class="stars-cell-value">${p.stars.toLocaleString()} ⭐</span></td>
                    </tr>
                `;
            }).join('');
        }
    },

    // Render League Roadmap Grid HTML
    renderLeagueRoadmapHtml() {
        const TIERS = [
            { id: 'bronze_1', league: 'Bronza Liga', tier: 'Bronza 1', min: 50, max: 66, reward: 10, icon: '🥉', color: '#cd7f32' },
            { id: 'bronze_2', league: 'Bronza Liga', tier: 'Bronza 2', min: 67, max: 83, reward: 15, icon: '🥉', color: '#cd7f32' },
            { id: 'bronze_3', league: 'Bronza Liga', tier: 'Bronza 3', min: 84, max: 100, reward: 30, icon: '🥉', color: '#cd7f32' },
            { id: 'silver_1', league: 'Kumush Liga', tier: 'Kumush 1', min: 101, max: 166, reward: 40, icon: '🥈', color: '#94a3b8' },
            { id: 'silver_2', league: 'Kumush Liga', tier: 'Kumush 2', min: 167, max: 233, reward: 50, icon: '🥈', color: '#94a3b8' },
            { id: 'silver_3', league: 'Kumush Liga', tier: 'Kumush 3', min: 234, max: 300, reward: 60, icon: '🥈', color: '#94a3b8' },
            { id: 'gold_1', league: 'Oltin Liga', tier: 'Oltin 1', min: 301, max: 466, reward: 80, icon: '🥇', color: '#f59e0b' },
            { id: 'gold_2', league: 'Oltin Liga', tier: 'Oltin 2', min: 467, max: 633, reward: 100, icon: '🥇', color: '#f59e0b' },
            { id: 'gold_3', league: 'Oltin Liga', tier: 'Oltin 3', min: 634, max: '800+', reward: 120, icon: '👑', color: '#eab308' }
        ];

        const userWins = this.user.wins || 58;

        return `
            <div class="roadmap-grid">
                ${TIERS.map(t => {
                    const isUnlocked = userWins >= t.min;
                    const isNext = !isUnlocked && userWins < t.min && (userWins >= (t.min - 35));
                    return `
                        <div class="roadmap-tier-card ${isUnlocked ? 'unlocked' : (isNext ? 'next-target' : 'locked')}">
                            <div class="roadmap-tier-top">
                                <span class="roadmap-tier-icon">${t.icon}</span>
                                <span class="roadmap-tier-reward">+${t.reward} ⭐ Star</span>
                            </div>
                            <h5 class="roadmap-tier-name">${t.tier}</h5>
                            <div class="roadmap-tier-range">Talab: <strong>${t.min}${t.max !== '800+' ? '-' + t.max : '+'}</strong> g'alaba</div>
                            <div class="roadmap-tier-status">
                                ${isUnlocked ? '<span class="status-tag done">✅ Yutilgan</span>' : (isNext ? '<span class="status-tag target">🎯 Keyingi maqsad</span>' : '<span class="status-tag lock">🔒 Qulflangan</span>')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    // Render Student Profile Mastery & Ranking Overview
    updateProfileOverview() {
        const container = document.getElementById('profile-mastery-container');
        if (!container) return;

        const wins = this.user.wins || 58;
        const tier = this.getLeagueTier(wins);
        const lessonsProg = this.calculateLessonsProgress();
        const { userRank } = this.getLeaderboardData('all');
        const lw = this.user.langWins || { en: Math.round(wins * 0.5), ru: Math.round(wins * 0.3), de: Math.round(wins * 0.2) };

        container.innerHTML = `
            <div class="profile-mastery-wrap">
                <!-- User Identity Badge Header -->
                <div class="profile-hero-strip">
                    <div class="profile-avatar-big">${this.user.avatar || '👨‍🎓'}</div>
                    <div class="profile-hero-text">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <h3 style="margin: 0; font-size: 20px; font-weight: 900; color: var(--text-primary);">${this.user.name || 'Azizbek'}</h3>
                            <span class="profile-role-tag">Faol O'quvchi</span>
                        </div>
                        <p style="margin: 2px 0 0; font-size: 13px; color: var(--text-muted);">
                            ID: <strong>SP-2026-9482</strong> • Ro'yxatdan o'tgan: 77-School O'quv Markazi
                        </p>
                    </div>
                    <div class="profile-hero-tier-badge" style="background: ${tier.bg}; color: ${tier.color}; border: 1.5px solid ${tier.border};">
                        <span style="font-size: 24px;">${tier.icon}</span>
                        <div>
                            <div style="font-size: 11px; text-transform: uppercase; font-weight: 800; opacity: 0.85;">Joriy Liga</div>
                            <strong style="font-size: 15px;">${tier.name}</strong>
                        </div>
                    </div>
                </div>

                <!-- 4 Core Performance Tiles -->
                <div class="profile-metrics-grid">
                    
                    <!-- Tile 1: Reyting O'rni -->
                    <div class="profile-metric-tile">
                        <div class="metric-icon-box" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">
                            🏆
                        </div>
                        <div class="metric-text-box">
                            <span class="metric-label">Sayt Reyting O'rni</span>
                            <strong class="metric-val">#${userRank} - o'rin</strong>
                            <span class="metric-hint">Top ${Math.min(99, Math.max(1, Math.round((userRank / 31) * 100)))}% o'quvchilar orasida</span>
                        </div>
                    </div>

                    <!-- Tile 2: Jami G'alabalar -->
                    <div class="profile-metric-tile">
                        <div class="metric-icon-box" style="background: rgba(239, 68, 68, 0.15); color: #ef4444;">
                            ⚔️
                        </div>
                        <div class="metric-text-box">
                            <span class="metric-label">Yutgan G'alabalar</span>
                            <strong class="metric-val">${wins} ta g'alaba</strong>
                            <span class="metric-hint">🇬🇧 ${lw.en || 0} • 🇷🇺 ${lw.ru || 0} • 🇩🇪 ${lw.de || 0}</span>
                        </div>
                    </div>

                    <!-- Tile 3: Joriy Liga va Keyingi Tur -->
                    <div class="profile-metric-tile">
                        <div class="metric-icon-box" style="background: ${tier.bg}; color: ${tier.color};">
                            ${tier.icon}
                        </div>
                        <div class="metric-text-box" style="width: 100%;">
                            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                <span class="metric-label">Liga va Tur</span>
                                <strong class="metric-val" style="font-size: 15px; color: ${tier.color};">${tier.name}</strong>
                            </div>
                            <div class="tier-progress-track" style="margin: 6px 0;">
                                <div class="tier-progress-bar" style="width: ${tier.progressPercent}%; background: ${tier.color};"></div>
                            </div>
                            <span class="metric-hint">
                                ${tier.nextTier ? `Keyingi (${tier.nextTier.name}) gacha: <strong>${tier.winsToNext} g'alaba</strong> (+${tier.nextTier.rewardStars} ⭐)` : 'Oliy Oltin 3 Ligasidasiz!'}
                            </span>
                        </div>
                    </div>

                    <!-- Tile 4: Dars O'zlashtirish Reytingi -->
                    <div class="profile-metric-tile">
                        <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">
                            📚
                        </div>
                        <div class="metric-text-box" style="width: 100%;">
                            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                <span class="metric-label">Dars O'zlashtirish Reytingi</span>
                                <strong class="metric-val" style="color: #10b981;">${lessonsProg.percent}%</strong>
                            </div>
                            <div class="tier-progress-track" style="margin: 6px 0;">
                                <div class="tier-progress-bar" style="width: ${lessonsProg.percent}%; background: #10b981;"></div>
                            </div>
                            <span class="metric-hint">
                                Baho: <strong>${lessonsProg.grade}</strong> • 📹 ${lessonsProg.watchedCount} video ko'rilgan
                            </span>
                        </div>
                    </div>

                </div>

                <!-- Star Balansi & Sinov G'alaba Tugmalari -->
                <div class="profile-quick-action-strip">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 20px;">⭐</span>
                        <div>
                            <span style="font-size: 12px; color: var(--text-muted); font-weight: 700;">Star Balansingiz:</span>
                            <strong style="font-size: 16px; color: #f59e0b; margin-left: 4px;">${this.user.stars} ⭐</strong>
                        </div>
                    </div>

                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <button type="button" class="btn btn-primary btn-sm" onclick="App.recordWin('en')" title="G'alaba qo'shish va ligalarda ko'tarilish">
                            ⚡ +1 G'alaba Qozonish (Sinov)
                        </button>
                        <button type="button" class="btn btn-secondary btn-sm" onclick="App.navigate('reyting')">
                            🏆 To'liq Reyting Jadvali
                        </button>
                    </div>
                </div>

                <!-- Ligalar Yo'l Xaritasi (Roadmap) -->
                <div class="profile-roadmap-box">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                        <strong style="font-size: 14px; color: var(--text-primary);">🏅 Ligalar Pog'onalari va Star Mukofotlari:</strong>
                        <span style="font-size: 12px; color: var(--text-muted);">Jami 9 ta bosqich (Bronza, Kumush, Oltin)</span>
                    </div>
                    ${this.renderLeagueRoadmapHtml()}
                </div>
            </div>
        `;
    },

    renderStarStore() {
        const container = document.getElementById('star-store-grid');
        if (!container) return;

        const i18n = window.School77I18n;
        const t = (key) => i18n ? i18n.t(key) : key;

        container.innerHTML = School77Data.storeGifts.map(gift => {
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
        const gift = School77Data.storeGifts.find(g => g.id === giftId);
        if (!gift) return;

        const i18n = window.School77I18n;
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





