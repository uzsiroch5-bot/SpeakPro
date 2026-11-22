/**
 * School77 — Admin Panel Logic
 * 77-School O'quv Markazi
 * 
 * Super Admin Credentials:
 * Email: admin@school77.uz
 * Parol/Kod: 7578mf
 */

const AdminApp = {
    apiBaseUrl: 'http://localhost:3000/api',
    isServerOnline: false,

    // Local in-memory state initialized with defaults
    data: {
        students: [],
        storeGifts: [],
        vocabulary: [],
        dialogues: [],
        idioms: []
    },

    currentTab: 'students',

    init() {
        this.loadLocalData();
        this.checkServerHealth();
        this.renderAll();
        this.bindEvents();
    },

    // Check if current logged-in user is admin
    isAdmin() {
        return window.App && App.user && App.user.email === 'admin@school77.uz' && App.user.role === 'admin';
    },

    // Load data from localStorage or seed
    loadLocalData() {
        try {
            const defaultSeed = [{"id":"std-1","name":"Shohruh Mirzayev","email":"shohruh@School77.uz","phone":"+998 99 111 22 33","lang":"en","avatar":"👨‍🚀","stars":1280,"wins":340,"tier":"gold_3","registeredAt":"2026-01-10","status":"active"},{"id":"std-2","name":"Diyora Alimova","email":"diyora.alimova@gmail.com","phone":"+998 90 234 56 78","lang":"de","avatar":"👩‍💼","stars":1150,"wins":310,"tier":"gold_2","registeredAt":"2026-01-14","status":"active"},{"id":"std-3","name":"Jasurbek Toshmatov","email":"jasur@mail.ru","phone":"+998 93 555 44 33","lang":"ru","avatar":"👨‍💼","stars":980,"wins":285,"tier":"gold_1","registeredAt":"2026-01-18","status":"active"},{"id":"std-4","name":"Nilufar Usmonova","email":"nilufar@yahoo.com","phone":"+998 97 777 88 99","lang":"en","avatar":"👩‍🎨","stars":850,"wins":240,"tier":"silver_3","registeredAt":"2026-01-22","status":"active"},{"id":"std-5","name":"Bobur Mahmudov","email":"bobur.dev@gmail.com","phone":"+998 91 333 44 55","lang":"en","avatar":"👨‍💻","stars":740,"wins":210,"tier":"silver_2","registeredAt":"2026-01-28","status":"active"},{"id":"std-6","name":"Madina Rahimova","email":"madina@gmail.com","phone":"+998 91 987 65 43","lang":"ru","avatar":"👩‍🎓","stars":620,"wins":175,"tier":"silver_1","registeredAt":"2026-02-02","status":"active"},{"id":"std-7","name":"Sardorbek Umarov","email":"sardor.umarov@gmail.com","phone":"+998 94 444 55 66","lang":"de","avatar":"👨‍🔬","stars":540,"wins":150,"tier":"silver_1","registeredAt":"2026-02-08","status":"active"},{"id":"std-8","name":"Sevara Qosimova","email":"sevara.q@mail.ru","phone":"+998 97 123 99 88","lang":"ru","avatar":"👩‍🏫","stars":460,"wins":120,"tier":"silver_1","registeredAt":"2026-02-12","status":"active"},{"id":"std-9","name":"Azizbek Karimov","email":"student@School77.uz","phone":"+998 90 123 45 67","lang":"en","avatar":"👨‍🎓","stars":350,"wins":95,"tier":"bronze_3","registeredAt":"2026-02-15","status":"active"},{"id":"std-10","name":"Shahzoda Xoliqova","email":"shahzoda.x@gmail.com","phone":"+998 93 888 77 66","lang":"en","avatar":"👩‍🎤","stars":310,"wins":88,"tier":"bronze_3","registeredAt":"2026-02-20","status":"active"},{"id":"std-11","name":"Rustam Saidov","email":"rustam.saidov@inbox.ru","phone":"+998 99 555 11 22","lang":"ru","avatar":"👨‍✈️","stars":280,"wins":76,"tier":"bronze_2","registeredAt":"2026-02-24","status":"active"},{"id":"std-12","name":"Kamola Yo\u0027ldosheva","email":"kamola.y@yahoo.com","phone":"+998 90 666 33 22","lang":"de","avatar":"👩‍⚕️","stars":240,"wins":65,"tier":"bronze_2","registeredAt":"2026-03-01","status":"active"},{"id":"std-13","name":"Bekzod Norboyev","email":"bekzod.norboyev@gmail.com","phone":"+998 91 777 00 11","lang":"en","avatar":"👨‍🎨","stars":210,"wins":58,"tier":"bronze_1","registeredAt":"2026-03-06","status":"active"},{"id":"std-14","name":"Laylo Eshonqulova","email":"laylo.eshon@mail.ru","phone":"+998 94 999 44 33","lang":"en","avatar":"👩‍🌾","stars":190,"wins":52,"tier":"bronze_1","registeredAt":"2026-03-11","status":"active"},{"id":"std-15","name":"Jamshid Ergashev","email":"jamshid.e@School77.uz","phone":"+998 97 456 78 90","lang":"ru","avatar":"👨‍🍳","stars":170,"wins":46,"tier":"bronze_1","registeredAt":"2026-03-15","status":"active"},{"id":"std-16","name":"Umida Rasulova","email":"umida.rasulova@gmail.com","phone":"+998 90 987 11 22","lang":"de","avatar":"👩‍🔧","stars":160,"wins":42,"tier":"bronze_1","registeredAt":"2026-03-19","status":"active"},{"id":"std-17","name":"Farrux Oripov","email":"farrux.oripov@gmail.com","phone":"+998 93 222 33 44","lang":"en","avatar":"👨‍💻","stars":150,"wins":38,"tier":"bronze_1","registeredAt":"2026-03-24","status":"active"},{"id":"std-18","name":"Malika Shokirova","email":"malika.sh@inbox.uz","phone":"+998 99 777 55 44","lang":"en","avatar":"👩‍🎓","stars":140,"wins":34,"tier":"bronze_1","registeredAt":"2026-03-28","status":"active"},{"id":"std-19","name":"Doniyor Shavkatov","email":"doniyor.shavkatov@gmail.com","phone":"+998 91 888 99 00","lang":"ru","avatar":"👨‍🎓","stars":130,"wins":28,"tier":"bronze_1","registeredAt":"2026-04-02","status":"active"},{"id":"std-20","name":"Ziyoda Jo\u0027rayeva","email":"ziyoda.j@mail.ru","phone":"+998 94 333 88 77","lang":"en","avatar":"👩‍🎓","stars":120,"wins":22,"tier":"bronze_1","registeredAt":"2026-04-07","status":"active"},{"id":"std-21","name":"Sherzod G\u0027aniyev","email":"sherzod.ganiyev@School77.uz","phone":"+998 97 555 66 77","lang":"de","avatar":"👨‍🏫","stars":115,"wins":18,"tier":"bronze_1","registeredAt":"2026-04-12","status":"active"},{"id":"std-22","name":"Dilnoza Sobirova","email":"dilnoza.sobirova@gmail.com","phone":"+998 90 444 11 22","lang":"en","avatar":"👩‍🎓","stars":110,"wins":14,"tier":"bronze_1","registeredAt":"2026-04-18","status":"active"},{"id":"std-23","name":"Akmal Zokirov","email":"akmal.zokirov@mail.ru","phone":"+998 93 111 99 88","lang":"ru","avatar":"👨‍🎓","stars":105,"wins":10,"tier":"bronze_1","registeredAt":"2026-04-23","status":"active"},{"id":"std-24","name":"Zarina Karimova","email":"zarina.karimova@gmail.com","phone":"+998 94 777 22 11","lang":"en","avatar":"👩‍💼","stars":100,"wins":8,"tier":"bronze_1","registeredAt":"2026-05-01","status":"active"},{"id":"std-25","name":"Otabek Hasanov","email":"otabek.hasanov@School77.uz","phone":"+998 99 333 22 11","lang":"de","avatar":"👨‍🎓","stars":100,"wins":5,"tier":"bronze_1","registeredAt":"2026-05-04","status":"active"}];
            const savedStudents = localStorage.getItem('School77_admin_students');
            if (savedStudents) {
                const parsed = JSON.parse(savedStudents);
                const map = new Map();
                parsed.forEach(s => map.set(s.id, s));
                defaultSeed.forEach(s => {
                    if (!map.has(s.id)) map.set(s.id, s);
                });
                this.data.students = Array.from(map.values());
            } else {
                this.data.students = defaultSeed;
                this.saveLocalData();
            }

            const defaultGifts = [
                { id: 'g1', title: 'School77 & 77-School Maxsus Ryukzaki', category: 'Esdalik sovg\'alari', cost: 500, icon: '🎒', desc: 'Suv o\'tkazmaydigan, noutbuk uchun maxsus bo\'lmali zamonaviy ryukzak.', badge: 'Eng ommabop' },
                { id: 'g2', title: '77-School Brendli Hoodie (Sviter)', category: 'Kiyim-kechak', cost: 450, icon: '👕', desc: 'Issiq va qulay, 100% paxta sifatli matodan tayyorlangan School77 sviteri.', badge: 'Trendda' },
                { id: 'g3', title: 'Simsiz Bluetooth Quloqchinlar', category: 'Elektronika', cost: 800, icon: '🎧', desc: 'Chet tili darslarini va chet el qo\'shiqlarini tiniq eshitish uchun moslama.', badge: 'Premium' },
                { id: 'g4', title: 'Chet Tili Kitoblar To\'plami', category: 'Kitoblar', cost: 300, icon: '📚', desc: 'Grammatika va so\'z boyligini mustahkamlovchi 3 jildli qo\'llanma.', badge: 'Foydali' },
                { id: 'g5', title: 'Professional Termos (Termokrujka)', category: 'Idish-tovoq', cost: 250, icon: '☕', desc: 'Issiq choy yoki kofe bilan dars qilish uchun School77 logotipli termos.', badge: 'Yangi' },
                { id: 'g6', title: 'Oltin VIP O\'quvchi Nishoni (1 oy)', category: 'Raqamli xizmat', cost: 600, icon: '👑', desc: 'Profilga maxsus oltin toj va darslarda 2x ko\'proq yulduz yig\'ish imkoniyati.', badge: 'Eksklyuziv' }
            ];

            const savedStore = localStorage.getItem('School77_admin_store');
            if (savedStore) {
                try {
                    const parsed = JSON.parse(savedStore);
                    this.data.storeGifts = (parsed && parsed.length > 0) ? parsed : defaultGifts;
                } catch(e) {
                    this.data.storeGifts = defaultGifts;
                }
            } else {
                this.data.storeGifts = (window.School77Data && School77Data.storeGifts && School77Data.storeGifts.length > 0) ? JSON.parse(JSON.stringify(School77Data.storeGifts)) : defaultGifts;
            }

            const savedVoc = localStorage.getItem('School77_admin_vocabulary');
            if (savedVoc) this.data.vocabulary = JSON.parse(savedVoc);

            const savedDlg = localStorage.getItem('School77_admin_dialogues');
            if (savedDlg) this.data.dialogues = JSON.parse(savedDlg);

            const savedIdm = localStorage.getItem('School77_admin_idioms');
            if (savedIdm) this.data.idioms = JSON.parse(savedIdm);

            // Sync with global runtime objects
            this.syncWithClientApps();
        } catch (e) {
            console.error('Admin data load error:', e);
        }
    },

    saveLocalData() {
        try {
            localStorage.setItem('School77_admin_students', JSON.stringify(this.data.students));
            localStorage.setItem('School77_admin_store', JSON.stringify(this.data.storeGifts));
            localStorage.setItem('School77_admin_vocabulary', JSON.stringify(this.data.vocabulary));
            localStorage.setItem('School77_admin_dialogues', JSON.stringify(this.data.dialogues));
            localStorage.setItem('School77_admin_idioms', JSON.stringify(this.data.idioms));
            this.syncWithClientApps();
        } catch (e) {
            console.error('Admin data save error:', e);
        }
    },

    // Reflect admin changes immediately in School77Data, School77Vocabulary, etc.
    syncWithClientApps() {
        if (window.School77Data && this.data.storeGifts.length > 0) {
            School77Data.storeGifts = this.data.storeGifts;
            if (window.App && App.renderStarStore) App.renderStarStore();
        }

        // Inject custom vocabulary into School77Vocabulary rawLexicon
        if (window.School77Vocabulary && School77Vocabulary.rawLexicon) {
            this.data.vocabulary.forEach(item => {
                const list = School77Vocabulary.rawLexicon[item.lang];
                if (list && !list.some(w => w.w.toLowerCase() === item.w.toLowerCase())) {
                    list.unshift(item);
                }
            });
        }

        // Inject custom dialogues into School77Dialogues
        if (window.School77Dialogues) {
            this.data.dialogues.forEach(dlg => {
                const list = School77Dialogues[dlg.lang];
                if (list && !list.some(d => d.id === dlg.id)) {
                    list.unshift(dlg);
                }
            });
        }

        // Inject custom idioms into School77Idioms
        if (window.School77Idioms) {
            this.data.idioms.forEach(idm => {
                const list = School77Idioms[idm.lang];
                if (list && !list.some(i => i.idiom.toLowerCase() === idm.idiom.toLowerCase())) {
                    list.unshift(idm);
                }
            });
        }
    },

    // Check server health
    async checkServerHealth() {
        const pill = document.getElementById('admin-server-pill');
        const text = document.getElementById('admin-server-status-text');
        try {
            const res = await fetch(`${this.apiBaseUrl}/health`, { method: 'GET', signal: AbortSignal.timeout(2000) });
            if (res.ok) {
                const data = await res.json();
                this.isServerOnline = true;
                if (pill) { pill.classList.remove('offline'); }
                if (text) { text.textContent = 'Server: Online (3000)'; }
                // Pull live data from server if online
                this.pullFromServer();
                return;
            }
        } catch (e) {
            this.isServerOnline = false;
        }
        if (pill) { pill.classList.add('offline'); }
        if (text) { text.textContent = 'Server: Oflayn (Lokal DB)'; }
    },

    // Pull database from server
    async pullFromServer() {
        try {
            const res = await fetch(`${this.apiBaseUrl}/backup`);
            if (res.ok) {
                const body = await res.json();
                if (body.database) {
                    if (body.database.students) this.data.students = body.database.students;
                    if (body.database.storeGifts) this.data.storeGifts = body.database.storeGifts;
                    if (body.database.customVocabulary) this.data.vocabulary = body.database.customVocabulary;
                    if (body.database.customDialogues) this.data.dialogues = body.database.customDialogues;
                    if (body.database.customIdioms) this.data.idioms = body.database.customIdioms;
                    this.saveLocalData();
                    this.renderAll();
                }
            }
        } catch (e) {}
    },

    // Push local database to server
    async pushToServer() {
        if (!this.isServerOnline) {
            App.showToast("Server oflayn! Avval 'node server/server.js' ni ishga tushiring.", 'error');
            return;
        }
        try {
            const payload = {
                database: {
                    admin: { email: 'admin@school77.uz', code: '7578mf', role: 'superadmin' },
                    students: this.data.students,
                    storeGifts: this.data.storeGifts,
                    customVocabulary: this.data.vocabulary,
                    customDialogues: this.data.dialogues,
                    customIdioms: this.data.idioms
                }
            };
            const res = await fetch(`${this.apiBaseUrl}/restore`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                App.showToast("Barcha ma'lumotlar serverga (db.json) saqlandi! ✅", 'success');
            } else {
                App.showToast("Serverga yozishda xatolik yuz berdi.", 'error');
            }
        } catch (e) {
            App.showToast("Server bilan aloqa uzildi: " + e.message, 'error');
        }
    },

    bindEvents() {
        // Tab switching
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabId = btn.getAttribute('data-admin-tab');
                if (tabId) this.switchTab(tabId);
            });
        });

        // Search inputs
        const stdSearch = document.getElementById('admin-student-search');
        if (stdSearch) {
            stdSearch.addEventListener('input', () => this.renderStudents());
        }

        const vocSearch = document.getElementById('admin-voc-search');
        if (vocSearch) {
            vocSearch.addEventListener('input', () => this.renderVocabulary());
        }
    },

    switchTab(tabId) {
        this.currentTab = tabId;
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-admin-tab') === tabId);
        });
        document.querySelectorAll('.admin-tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.id === `admin-tab-${tabId}`);
        });

        if (tabId === 'students') this.renderStudents();
        if (tabId === 'store') this.renderStore();
        if (tabId === 'vocabulary') this.renderVocabulary();
        if (tabId === 'dialogues') this.renderDialogues();
        if (tabId === 'idioms') this.renderIdioms();
        if (tabId === 'server') this.checkServerHealth();
    },

    renderAll() {
        this.renderStats();
        this.renderStudents();
        this.renderStore();
        this.renderVocabulary();
        this.renderDialogues();
        this.renderIdioms();
    },

    renderStats() {
        const totalStudents = this.data.students.length;
        const totalStars = this.data.students.reduce((acc, s) => acc + (parseInt(s.stars, 10) || 0), 0);
        const totalStore = this.data.storeGifts.length;
        const totalVoc = this.data.vocabulary.length;

        const elStd = document.getElementById('admin-stat-students-count');
        const elStars = document.getElementById('admin-stat-stars-count');
        const elStore = document.getElementById('admin-stat-store-count');
        const elVoc = document.getElementById('admin-stat-words-count');

        if (elStd) elStd.textContent = totalStudents + " nafar";
        if (elStars) elStars.textContent = totalStars.toLocaleString() + " ⭐";
        if (elStore) elStore.textContent = totalStore + " xil";
        if (elVoc) elVoc.textContent = totalVoc + " ta yangi";
    },

    // ==================== 1. STUDENTS MANAGEMENT ====================
    renderStudents() {
        const tbody = document.getElementById('admin-students-tbody');
        if (!tbody) return;

        const query = (document.getElementById('admin-student-search')?.value || '').toLowerCase().trim();
        const tierFilter = document.getElementById('admin-student-tier-filter')?.value || 'all';

        let filtered = this.data.students.filter(s => {
            const matchesQuery = s.name.toLowerCase().includes(query) || s.email.toLowerCase().includes(query) || (s.phone && s.phone.includes(query));
            const matchesTier = tierFilter === 'all' || s.tier.startsWith(tierFilter);
            return matchesQuery && matchesTier;
        });

        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 24px; color: var(--text-muted);">Hech qanday o'quvchi topilmadi.</td></tr>`;
            return;
        }

        tbody.innerHTML = filtered.map(s => {
            const tierClass = s.tier.startsWith('gold') ? 'badge-gold' : s.tier.startsWith('silver') ? 'badge-silver' : 'badge-bronze';
            const tierName = s.tier.replace('_', ' ').toUpperCase();

            const langCode = (s.lang || 'en').toUpperCase();
            const langFlag = langCode === 'RU' ? '🇷🇺 RU' : langCode === 'DE' ? '🇩🇪 DE' : '🇬🇧 EN';

            return `
            <tr>
                <td>
                    <div class="user-meta-cell">
                        <div class="user-avatar-small">${s.avatar || '👨‍🎓'}</div>
                        <div>
                            <strong>${s.name}</strong>
                            <span>${s.email}</span>
                        </div>
                    </div>
                </td>
                <td>${s.phone || '-'}</td>
                <td>
                    <span class="badge-tier-pill badge-silver">${langFlag}</span>
                </td>
                <td>
                    <span class="stars-count-pill">${s.stars} ⭐</span>
                </td>
                <td><strong>${s.wins || 0}</strong> g'alaba</td>
                <td>
                    <span class="badge-tier-pill ${tierClass}">${tierName}</span>
                </td>
                <td style="font-size: 12px; color: var(--text-muted); white-space: nowrap;">${s.registeredAt || '2026-01-15'}</td>
                <td>
                    <div class="table-actions">
                        <button class="btn-table-action" onclick="AdminApp.openEditStarsModal('${s.id}')" title="Yulduz qo'shish / ayirish">
                            ⭐ Star
                        </button>
                        <button class="btn-table-action" onclick="AdminApp.openEditStudentModal('${s.id}')" title="Tahrirlash">
                            ✏️
                        </button>
                        <button class="btn-table-action btn-table-delete" onclick="AdminApp.deleteStudent('${s.id}')" title="O'chirish">
                            🗑️
                        </button>
                    </div>
                </td>
            </tr>
            `;
        }).join('');
    },

    openAddStudentModal() {
        document.getElementById('modal-std-id').value = '';
        document.getElementById('modal-std-name').value = '';
        document.getElementById('modal-std-email').value = '';
        document.getElementById('modal-std-phone').value = '';
        document.getElementById('modal-std-stars').value = '100';
        document.getElementById('modal-std-avatar').value = '👨‍🎓';
        document.getElementById('modal-student-title').textContent = "Yangi O'quvchi Qo'shish";
        document.getElementById('admin-student-modal').classList.add('active');
    },

    openEditStudentModal(studentId) {
        const student = this.data.students.find(s => s.id === studentId);
        if (!student) return;

        document.getElementById('modal-std-id').value = student.id;
        document.getElementById('modal-std-name').value = student.name;
        document.getElementById('modal-std-email').value = student.email;
        document.getElementById('modal-std-phone').value = student.phone || '';
        document.getElementById('modal-std-stars').value = student.stars;
        document.getElementById('modal-std-avatar').value = student.avatar || '👨‍🎓';
        document.getElementById('modal-student-title').textContent = "O'quvchini Tahrirlash";
        document.getElementById('admin-student-modal').classList.add('active');
    },

    saveStudentModal(event) {
        event.preventDefault();
        const id = document.getElementById('modal-std-id').value;
        const name = document.getElementById('modal-std-name').value.trim();
        const email = document.getElementById('modal-std-email').value.trim();
        const phone = document.getElementById('modal-std-phone').value.trim();
        const stars = parseInt(document.getElementById('modal-std-stars').value, 10) || 100;
        const avatar = document.getElementById('modal-std-avatar').value || '👨‍🎓';

        if (!name || !email) {
            App.showToast("Ism va Email to'ldirilishi shart!", 'error');
            return;
        }

        if (id) {
            // Update
            const index = this.data.students.findIndex(s => s.id === id);
            if (index !== -1) {
                this.data.students[index] = { ...this.data.students[index], name, email, phone, stars, avatar };
                App.showToast("O'quvchi muvaffaqiyatli yangilandi! ✅", 'success');
            }
        } else {
            // Add new
            const newStudent = {
                id: 'std-' + Date.now(),
                name,
                email,
                phone,
                stars,
                avatar,
                wins: 0,
                tier: 'bronze_1',
                registeredAt: new Date().toISOString().split('T')[0]
            };
            this.data.students.unshift(newStudent);
            App.showToast("Yangi o'quvchi qo'shildi! 🎉", 'success');
        }

        this.saveLocalData();
        this.renderStats();
        this.renderStudents();
        this.closeModal('admin-student-modal');
    },

    openEditStarsModal(studentId) {
        const student = this.data.students.find(s => s.id === studentId);
        if (!student) return;

        document.getElementById('modal-stars-std-id').value = student.id;
        document.getElementById('modal-stars-std-name').textContent = student.name;
        document.getElementById('modal-stars-current').textContent = `${student.stars} ⭐`;
        document.getElementById('modal-stars-amount').value = '50';
        document.getElementById('admin-stars-modal').classList.add('active');
    },

    applyStarChange(action) {
        const id = document.getElementById('modal-stars-std-id').value;
        const student = this.data.students.find(s => s.id === id);
        if (!student) return;

        const amount = parseInt(document.getElementById('modal-stars-amount').value, 10) || 0;
        if (amount <= 0) {
            App.showToast("0 dan katta miqdor kiriting!", 'error');
            return;
        }

        if (action === 'add') {
            student.stars += amount;
            App.showToast(`+${amount} ⭐ qo'shildi! Jami: ${student.stars} ⭐`, 'success');
        } else if (action === 'deduct') {
            student.stars = Math.max(0, student.stars - amount);
            App.showToast(`-${amount} ⭐ ayirildi! Qoldi: ${student.stars} ⭐`, 'info');
        } else if (action === 'set') {
            student.stars = amount;
            App.showToast(`⭐ Yulduzlar ${amount} ga o'rnatildi!`, 'success');
        }

        // If this is currently logged-in user, also update App.user
        if (window.App && App.user && App.user.email === student.email) {
            App.user.stars = student.stars;
            App.saveUserState();
        }

        this.saveLocalData();
        this.renderStats();
        this.renderStudents();
        this.closeModal('admin-stars-modal');
    },

    deleteStudent(studentId) {
        if (!confirm("Haqiqatan ham bu o'quvchini o'chirmoqchimisiz?")) return;
        this.data.students = this.data.students.filter(s => s.id !== studentId);
        this.saveLocalData();
        this.renderStats();
        this.renderStudents();
        App.showToast("O'quvchi o'chirildi! 🗑️", 'info');
    },

    // ==================== 2. STAR STORE & PRICES ====================
    renderStore() {
        const grid = document.getElementById('admin-store-grid');
        if (!grid) return;

        grid.innerHTML = this.data.storeGifts.map(gift => `
            <div class="admin-store-item-card">
                <div>
                    <div class="store-item-head">
                        <span class="store-item-icon">${gift.icon}</span>
                        <span class="store-item-badge">${gift.badge || 'Do\'kon'}</span>
                    </div>
                    <h4 class="store-item-title">${gift.title}</h4>
                    <p class="store-item-desc">${gift.desc}</p>
                </div>
                <div class="store-item-foot">
                    <span class="store-item-cost">${gift.cost} ⭐</span>
                    <div class="table-actions">
                        <button class="btn-table-action" onclick="AdminApp.openEditStorePriceModal('${gift.id}')">
                            ✏️ Narx
                        </button>
                        <button class="btn-table-action btn-table-delete" onclick="AdminApp.deleteStoreGift('${gift.id}')">
                            🗑️
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    openAddStoreModal() {
        document.getElementById('modal-gift-id').value = '';
        document.getElementById('modal-gift-title').value = '';
        document.getElementById('modal-gift-icon').value = '🎁';
        document.getElementById('modal-gift-cost').value = '200';
        document.getElementById('modal-gift-category').value = 'Sovg\'alar';
        document.getElementById('modal-gift-desc').value = '';
        document.getElementById('modal-gift-badge').value = 'Yangi';
        document.getElementById('modal-gift-title-head').textContent = "Yangi Mahsulot Qo'shish";
        document.getElementById('admin-gift-modal').classList.add('active');
    },

    openEditStorePriceModal(giftId) {
        const gift = this.data.storeGifts.find(g => g.id === giftId);
        if (!gift) return;

        document.getElementById('modal-gift-id').value = gift.id;
        document.getElementById('modal-gift-title').value = gift.title;
        document.getElementById('modal-gift-icon').value = gift.icon;
        document.getElementById('modal-gift-cost').value = gift.cost;
        document.getElementById('modal-gift-category').value = gift.category || 'Sovg\'alar';
        document.getElementById('modal-gift-desc').value = gift.desc || '';
        document.getElementById('modal-gift-badge').value = gift.badge || '';
        document.getElementById('modal-gift-title-head').textContent = "Mahsulot Narxini Belgilash";
        document.getElementById('admin-gift-modal').classList.add('active');
    },

    saveGiftModal(event) {
        event.preventDefault();
        const id = document.getElementById('modal-gift-id').value;
        const title = document.getElementById('modal-gift-title').value.trim();
        const icon = document.getElementById('modal-gift-icon').value.trim() || '🎁';
        const cost = parseInt(document.getElementById('modal-gift-cost').value, 10) || 100;
        const category = document.getElementById('modal-gift-category').value.trim() || 'Sovg\'alar';
        const desc = document.getElementById('modal-gift-desc').value.trim() || '';
        const badge = document.getElementById('modal-gift-badge').value.trim() || 'Yangi';

        if (!title) {
            App.showToast("Mahsulot nomi kiritilishi shart!", 'error');
            return;
        }

        if (id) {
            const index = this.data.storeGifts.findIndex(g => g.id === id);
            if (index !== -1) {
                this.data.storeGifts[index] = { ...this.data.storeGifts[index], title, icon, cost, category, desc, badge };
                App.showToast(`"${title}" narxi ${cost} ⭐ ga o'zgartirildi! ✅`, 'success');
            }
        } else {
            const newItem = {
                id: 'g_' + Date.now(),
                title,
                icon,
                cost,
                category,
                desc,
                badge
            };
            this.data.storeGifts.push(newItem);
            App.showToast("Do'konga yangi mahsulot qo'shildi! 🎁", 'success');
        }

        this.saveLocalData();
        this.renderStats();
        this.renderStore();
        this.closeModal('admin-gift-modal');
    },

    deleteStoreGift(giftId) {
        if (!confirm("Haqiqatan ham bu mahsulotni do'kondan o'chirmoqchimisiz?")) return;
        this.data.storeGifts = this.data.storeGifts.filter(g => g.id !== giftId);
        this.saveLocalData();
        this.renderStats();
        this.renderStore();
        App.showToast("Mahsulot o'chirildi! 🗑️", 'info');
    },

    // ==================== 3. VOCABULARY MANAGEMENT ====================
    renderVocabulary() {
        const tbody = document.getElementById('admin-voc-tbody');
        if (!tbody) return;

        const query = (document.getElementById('admin-voc-search')?.value || '').toLowerCase().trim();
        const langFilter = document.getElementById('admin-voc-lang-filter')?.value || 'all';

        let list = this.data.vocabulary.filter(v => {
            const matchQuery = v.w.toLowerCase().includes(query) || v.uz.toLowerCase().includes(query);
            const matchLang = langFilter === 'all' || v.lang === langFilter;
            return matchQuery && matchLang;
        });

        if (list.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: var(--text-muted);">Admin tomonidan qo'shilgan so'zlar hozircha yo'q. Yuqoridagi formadan yangi so'z qo'shing.</td></tr>`;
            return;
        }

        tbody.innerHTML = list.map(item => `
            <tr>
                <td><strong>${item.w}</strong> <span style="color: var(--text-muted); font-size: 11px;">${item.ph || ''}</span></td>
                <td><span class="badge-tier-pill badge-silver">${item.lang.toUpperCase()}</span></td>
                <td><span class="badge-tier-pill badge-gold">${item.lvl}</span></td>
                <td>${item.uz}</td>
                <td><em style="color: var(--text-secondary); font-size: 12px;">${item.ex || '-'}</em></td>
                <td>
                    <button class="btn-table-action btn-table-delete" onclick="AdminApp.deleteVocabulary('${item.id}')">
                        🗑️
                    </button>
                </td>
            </tr>
        `).join('');
    },

    handleNewWordSubmit(event) {
        event.preventDefault();
        const lang = document.getElementById('voc-form-lang').value;
        const lvl = document.getElementById('voc-form-lvl').value;
        const w = document.getElementById('voc-form-word').value.trim();
        const ph = document.getElementById('voc-form-ph').value.trim();
        const pos = document.getElementById('voc-form-pos').value;
        const uz = document.getElementById('voc-form-uz').value.trim();
        const ru = document.getElementById('voc-form-ru').value.trim();
        const ex = document.getElementById('voc-form-ex').value.trim();
        const exTr = document.getElementById('voc-form-extr').value.trim();

        if (!w || !uz) {
            App.showToast("So'z va uning o'zbekcha tarjimasi kiritilishi shart!", 'error');
            return;
        }

        const newWord = {
            id: 'voc_' + Date.now(),
            lang,
            lvl,
            w,
            ph: ph ? `/${ph.replace(/^\/|\/$/g, '')}/` : '',
            pos,
            uz,
            ru,
            ex,
            exTr
        };

        this.data.vocabulary.unshift(newWord);
        this.saveLocalData();
        this.renderStats();
        this.renderVocabulary();

        // Reset form
        document.getElementById('voc-form-word').value = '';
        document.getElementById('voc-form-ph').value = '';
        document.getElementById('voc-form-uz').value = '';
        document.getElementById('voc-form-ru').value = '';
        document.getElementById('voc-form-ex').value = '';
        document.getElementById('voc-form-extr').value = '';

        App.showToast(`"${w}" so'zi ${lang.toUpperCase()} ${lvl} lug'atiga qo'shildi! 📖`, 'success');
    },

    deleteVocabulary(wordId) {
        this.data.vocabulary = this.data.vocabulary.filter(v => v.id !== wordId);
        this.saveLocalData();
        this.renderStats();
        this.renderVocabulary();
        App.showToast("So'z o'chirildi! 🗑️", 'info');
    },

    // ==================== 4. DIALOGUES MANAGEMENT ====================
    renderDialogues() {
        const tbody = document.getElementById('admin-dlg-tbody');
        if (!tbody) return;

        if (this.data.dialogues.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px; color: var(--text-muted);">Admin tomonidan qo'shilgan dialoglar hozircha yo'q. Yuqoridagi formadan qo'shing.</td></tr>`;
            return;
        }

        tbody.innerHTML = this.data.dialogues.map(dlg => `
            <tr>
                <td><strong>${dlg.icon || '💬'} ${dlg.title}</strong><br><small style="color: var(--text-muted);">${dlg.titleUz || ''}</small></td>
                <td><span class="badge-tier-pill badge-silver">${dlg.lang.toUpperCase()}</span></td>
                <td><span class="badge-tier-pill badge-gold">${dlg.lvl}</span></td>
                <td>${(dlg.lines || []).length} ta gap</td>
                <td>
                    <button class="btn-table-action btn-table-delete" onclick="AdminApp.deleteDialogue('${dlg.id}')">
                        🗑️ O'chirish
                    </button>
                </td>
            </tr>
        `).join('');
    },

    handleNewDialogueSubmit(event) {
        event.preventDefault();
        const lang = document.getElementById('dlg-form-lang').value;
        const lvl = document.getElementById('dlg-form-lvl').value;
        const title = document.getElementById('dlg-form-title').value.trim();
        const titleUz = document.getElementById('dlg-form-title-uz').value.trim();
        const categoryName = document.getElementById('dlg-form-cat').value.trim();
        const icon = document.getElementById('dlg-form-icon').value.trim() || '💬';
        const linesRaw = document.getElementById('dlg-form-lines').value.trim();

        if (!title || !linesRaw) {
            App.showToast("Dialog sarlavhasi va gaplari kiritilishi shart!", 'error');
            return;
        }

        // Parse line-by-line format: A: Hello! | Salom!
        const lines = [];
        linesRaw.split('\n').forEach(line => {
            const trimmed = line.trim();
            if (!trimmed) return;
            const parts = trimmed.split('|');
            const speakerPart = parts[0] || '';
            const trPart = parts[1] ? parts[1].trim() : '';

            let speaker = 'A';
            let role = 'Suhbatdosh 1';
            let text = speakerPart.trim();

            if (speakerPart.startsWith('A:') || speakerPart.startsWith('a:')) {
                speaker = 'A';
                role = 'A shaxs';
                text = speakerPart.substring(2).trim();
            } else if (speakerPart.startsWith('B:') || speakerPart.startsWith('b:')) {
                speaker = 'B';
                role = 'B shaxs';
                text = speakerPart.substring(2).trim();
            }

            lines.push({ speaker, role, text, tr: trPart });
        });

        const newDlg = {
            id: 'dlg_' + Date.now(),
            lang,
            lvl,
            title,
            titleUz: titleUz || title,
            category: 'custom',
            categoryName: categoryName || 'Umumiy suhbat',
            icon,
            desc: `${lines.length} ta replikadan iborat amaliy suhbat`,
            lines
        };

        this.data.dialogues.unshift(newDlg);
        this.saveLocalData();
        this.renderStats();
        this.renderDialogues();

        document.getElementById('dlg-form-title').value = '';
        document.getElementById('dlg-form-title-uz').value = '';
        document.getElementById('dlg-form-lines').value = '';

        App.showToast(`"${title}" dialogi muvaffaqiyatli qo'shildi! 💬`, 'success');
    },

    deleteDialogue(dlgId) {
        this.data.dialogues = this.data.dialogues.filter(d => d.id !== dlgId);
        this.saveLocalData();
        this.renderStats();
        this.renderDialogues();
        App.showToast("Dialog o'chirildi! 🗑️", 'info');
    },

    // ==================== 5. IDIOMS MANAGEMENT ====================
    renderIdioms() {
        const tbody = document.getElementById('admin-idm-tbody');
        if (!tbody) return;

        if (this.data.idioms.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px; color: var(--text-muted);">Admin tomonidan qo'shilgan idiomalar hozircha yo'q. Yuqoridagi formadan qo'shing.</td></tr>`;
            return;
        }

        tbody.innerHTML = this.data.idioms.map(idm => `
            <tr>
                <td><strong>${idm.idiom}</strong></td>
                <td><span class="badge-tier-pill badge-silver">${idm.lang.toUpperCase()}</span></td>
                <td><span class="badge-tier-pill badge-gold">${idm.lvl}</span></td>
                <td>${idm.uz}</td>
                <td>
                    <button class="btn-table-action btn-table-delete" onclick="AdminApp.deleteIdiom('${idm.id}')">
                        🗑️ O'chirish
                    </button>
                </td>
            </tr>
        `).join('');
    },

    handleNewIdiomSubmit(event) {
        event.preventDefault();
        const lang = document.getElementById('idm-form-lang').value;
        const lvl = document.getElementById('idm-form-lvl').value;
        const idiom = document.getElementById('idm-form-idiom').value.trim();
        const uz = document.getElementById('idm-form-uz').value.trim();
        const ru = document.getElementById('idm-form-ru').value.trim();
        const ex = document.getElementById('idm-form-ex').value.trim();
        const exTr = document.getElementById('idm-form-extr').value.trim();

        if (!idiom || !uz) {
            App.showToast("Idioma iborasi va ma'nosi kiritilishi shart!", 'error');
            return;
        }

        const newIdiom = {
            id: 'idm_' + Date.now(),
            lang,
            lvl,
            idiom,
            uz,
            ru,
            ex,
            exTr
        };

        this.data.idioms.unshift(newIdiom);
        this.saveLocalData();
        this.renderStats();
        this.renderIdioms();

        document.getElementById('idm-form-idiom').value = '';
        document.getElementById('idm-form-uz').value = '';
        document.getElementById('idm-form-ru').value = '';
        document.getElementById('idm-form-ex').value = '';
        document.getElementById('idm-form-extr').value = '';

        App.showToast(`"${idiom}" idiomasi qo'shildi! 💡`, 'success');
    },

    deleteIdiom(idmId) {
        this.data.idioms = this.data.idioms.filter(i => i.id !== idmId);
        this.saveLocalData();
        this.renderStats();
        this.renderIdioms();
        App.showToast("Idioma o'chirildi! 🗑️", 'info');
    },

    // ==================== 6. BACKUP & EXPORT/IMPORT ====================
    exportJSON() {
        const fullDatabase = {
            exportedAt: new Date().toISOString(),
            version: '2026.1',
            system: '77-School O'quv Markazi',
            admin: { email: 'admin@school77.uz', code: '7578mf' },
            students: this.data.students,
            storeGifts: this.data.storeGifts,
            customVocabulary: this.data.vocabulary,
            customDialogues: this.data.dialogues,
            customIdioms: this.data.idioms
        };

        const jsonStr = JSON.stringify(fullDatabase, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `School77_db_backup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        App.showToast("Ma'lumotlar bazasi zaxira nusxasi (JSON) yuklab olindi! 💾", 'success');
    },

    importJSON(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                if (parsed.students) this.data.students = parsed.students;
                if (parsed.storeGifts) this.data.storeGifts = parsed.storeGifts;
                if (parsed.customVocabulary) this.data.vocabulary = parsed.customVocabulary;
                if (parsed.customDialogues) this.data.dialogues = parsed.customDialogues;
                if (parsed.customIdioms) this.data.idioms = parsed.customIdioms;

                this.saveLocalData();
                this.renderAll();
                App.showToast("Ma'lumotlar bazasi fayldan muvaffaqiyatli tiklandi! 🎉", 'success');
            } catch (err) {
                App.showToast("Faylni o'qishda xatolik: Noto'g'ri JSON format!", 'error');
            }
        };
        reader.readAsText(file);
    },

    closeModal(modalId) {
        document.getElementById(modalId)?.classList.remove('active');
    }
};

// Global export
window.AdminApp = AdminApp;





// Auto-load Admin local data on script load
try { AdminApp.loadLocalData(); } catch(e) {}
