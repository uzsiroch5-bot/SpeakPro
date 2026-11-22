/**
 * School77 2026 — Backend REST API Server & Database
 * 77-School O'quv Markazi
 * 
 * Standalone Node.js server (Built-in zero-dependency HTTP server + JSON Database).
 * Can run with: `node server.js`
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');
const CLIENT_DIR = path.join(__dirname, '..');

// Helper to load database
function loadDatabase() {
    try {
        if (!fs.existsSync(DB_FILE)) {
            console.error('db.json topilmadi!');
            return { admin: {}, students: [], storeGifts: [], customVocabulary: [], customDialogues: [], customIdioms: [] };
        }
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.error('DB o\'qishda xato:', e);
        return { admin: {}, students: [], storeGifts: [], customVocabulary: [], customDialogues: [], customIdioms: [] };
    }
}

// Helper to save database
function saveDatabase(db) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
        return true;
    } catch (e) {
        console.error('DB yozishda xato:', e);
        return false;
    }
}

// Helper to send JSON response
function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end(JSON.stringify(data));
}

// Parse request body
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                resolve({});
            }
        });
        req.on('error', err => reject(err));
    });
}

// Serve static frontend files
function serveStatic(req, res, filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.mp3': 'audio/mpeg',
        '.wav': 'audio/wav'
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('404 Fayl topilmadi');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('500 Server xatosi: ' + err.code);
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*'
            });
            res.end(content);
        }
    });
}

// Create HTTP server
const server = http.createServer(async (req, res) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.end();
        return;
    }

    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${pathname}`);

    // ==================== REST API ROUTES ====================

    // 1. Health check & Stats
    if (pathname === '/api/health' && method === 'GET') {
        const db = loadDatabase();
        return sendJSON(res, 200, {
            status: 'online',
            service: 'School77 API Server',
            center: '77-School O\'quv Markazi',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            stats: {
                studentsCount: db.students.length,
                storeItemsCount: db.storeGifts.length,
                vocabularyCount: db.customVocabulary.length,
                dialoguesCount: db.customDialogues.length,
                idiomsCount: db.customIdioms.length
            }
        });
    }

    // 2. Admin Login Verification
    // Credentials: admin@school77.uz / 7578mf
    if (pathname === '/api/auth/admin-login' && method === 'POST') {
        const body = await parseBody(req);
        const db = loadDatabase();
        if (body.email === db.admin.email && body.code === db.admin.code) {
            return sendJSON(res, 200, {
                success: true,
                message: 'Administrator muvaffaqiyatli kirdi!',
                admin: {
                    email: db.admin.email,
                    name: db.admin.name,
                    role: db.admin.role,
                    avatar: db.admin.avatar,
                    token: 'School77-admin-token-' + Date.now()
                }
            });
        } else {
            return sendJSON(res, 401, {
                success: false,
                message: 'Email yoki maxfiy kod noto\'g\'ri!'
            });
        }
    }

    // 2.8 Speaking AI Intelligent Conversational Engine
    if (pathname === '/api/ai/chat' && method === 'POST') {
        const body = await parseBody(req);
        const { coach = 'laylo', lang = 'en', step = 'in_conversation', message = '', history = [] } = body;
        const lower = String(message).toLowerCase().trim();

        console.log(`[AI-CHAT] Coach: ${coach}, Lang: ${lang}, Step: ${step}, Msg: "${message}"`);

        // STEP 1: Language selection step
        if (step === 'ask_language') {
            let detectedLang = 'en';
            if (lower.includes('rus') || lower.includes('рус') || lower.includes('ru')) detectedLang = 'ru';
            else if (lower.includes('nem') || lower.includes('deutsch') || lower.includes('ger') || lower.includes('de')) detectedLang = 'de';
            else if (lower.includes('ing') || lower.includes('eng') || lower.includes('en')) detectedLang = 'en';

            let reply = "";
            let tr = "";
            let suggestions = [];

            if (detectedLang === 'en') {
                reply = coach === 'laylo' 
                    ? "Wonderful choice! Let us speak in English. How are you feeling today?" 
                    : "Excellent choice! English it is. Tell me, how was your day today?";
                tr = coach === 'laylo' 
                    ? "Ajoyib tanlov! Keling, ingliz tilida suhbatlashamiz. Bugun kayfiyatingiz qanday?" 
                    : "Zo'r tanlov! Demak, inglizcha gaplashamiz. Ayting-chi, bugungi kuningiz qanday o'tdi?";
                suggestions = [
                    { label: "I am feeling great!", value: "I am feeling great and energetic today!" },
                    { label: "Pretty good, thank you", value: "Pretty good, thank you for asking." },
                    { label: "A bit tired today", value: "I had a busy day, so I am a bit tired." }
                ];
            } else if (detectedLang === 'ru') {
                reply = coach === 'laylo' 
                    ? "Прекрасный выбор! Будем говорить по-русски. Как ваши дела сегодня?" 
                    : "Отличный выбор! Русский язык принят. Как проходит ваш день?";
                tr = "Ajoyib tanlov! Rus tilida suhbatlashamiz. Bugun ishlaringiz qanday ketmoqda?";
                suggestions = [
                    { label: "Всё отлично!", value: "Всё просто отлично, спасибо!" },
                    { label: "Хорошо, работаю", value: "Всё хорошо, сегодня много дел." },
                    { label: "Немного устал", value: "День был насыщенным, немного устал." }
                ];
            } else {
                reply = coach === 'laylo' 
                    ? "Wunderbar! Wir sprechen jetzt Deutsch. Wie geht es Ihnen heute?" 
                    : "Ausgezeichnet! Deutsch ist fantastisch. Wie läuft Ihr Tag?";
                tr = "Ajoyib! Endi nemis tilida gaplashamiz. Bugun holingiz qanday?";
                suggestions = [
                    { label: "Mir geht es sehr gut!", value: "Mir geht es sehr gut, danke!" },
                    { label: "Alles bestens", value: "Alles bestens, ich lerne fleißig Deutsch." },
                    { label: "Ein bisschen müde", value: "Ich bin heute ein bisschen müde, aber motiviert." }
                ];
            }

            return sendJSON(res, 200, {
                success: true,
                detectedLang,
                step: 'in_conversation',
                reply,
                tr,
                emotion: 'happy',
                suggestions
            });
        }

        // STEP 2: In-conversation contextual intelligent response
        let reply = "";
        let tr = "";
        let emotion = "happy";
        let suggestions = [];

        if (lang === 'en') {
            if (lower.includes('great') || lower.includes('good') || lower.includes('fine') || lower.includes('well')) {
                reply = coach === 'laylo'
                    ? "I am so happy to hear that! When you feel positive, learning languages becomes so much easier. What do you enjoy doing in your free time?"
                    : "Awesome energy! That is the spirit of a winner. Tell me, what hobbies or passions make you happiest?";
                tr = "Buni eshitishdan judayam xursandman! Kayfiyatingiz a'lo bo'lsa, til o'rganish ancha osonlashadi. Bo'sh vaqtingizda nimalar qilishni yoqtirasiz?";
                emotion = "impressed";
                suggestions = [
                    { label: "I love reading books", value: "I really love reading motivational books and learning new words." },
                    { label: "I enjoy programming", value: "I enjoy coding and exploring modern technologies." },
                    { label: "I like sports and gym", value: "I like playing football and going to the gym regularly." }
                ];
            } else if (lower.includes('book') || lower.includes('read') || lower.includes('tech') || lower.includes('code') || lower.includes('sport') || lower.includes('music')) {
                reply = coach === 'laylo'
                    ? "That is fascinating! Engaging in meaningful activities broadens your worldview. How many hours a day do you dedicate to self-development?"
                    : "Great choice! Dedication to your craft is what leads to mastery. Tell me about your biggest goal for this year!";
                tr = "Bu judayam qiziq mashg'ulot! Foydali ishlar dunyoqarashingizni boyitadi. O'z ustingizda ishlash uchun kuniga qancha vaqt ajratasiz?";
                emotion = "supportive";
                suggestions = [
                    { label: "At least one hour", value: "I dedicate at least one to two hours every day." },
                    { label: "I study on weekends", value: "I study intensely mostly during the weekends." },
                    { label: "My goal is IELTS 7.5+", value: "My biggest goal is to achieve C1 level and IELTS 7.5+." }
                ];
            } else if (lower.includes('goal') || lower.includes('ielts') || lower.includes('hour') || lower.includes('plan')) {
                reply = coach === 'laylo'
                    ? "Your determination is truly admirable! With consistency and our 77-School platform, you will achieve it with ease. How confident do you feel speaking English now?"
                    : "Now that is a real champion's goal! Discipline beats talent every time. How do you evaluate your speaking confidence right now?";
                tr = "Sizning qat'iyatingiz tahsinga loyiq! Rejali harakat bilan bu maqsadga albatta erishasiz. Hozir o'zingizda gapirish bo'yicha ishonchni qanday his qilyapsiz?";
                emotion = "impressed";
                suggestions = [
                    { label: "Much more confident!", value: "I feel much more confident speaking with you today!" },
                    { label: "I need more vocabulary", value: "I want to memorize more advanced idioms and vocabulary." },
                    { label: "Practice makes perfect", value: "Every single conversation helps me speak without fear." }
                ];
            } else {
                reply = coach === 'laylo'
                    ? "You expressed your thoughts very clearly! I love how naturally you speak. Could you tell me more about your experience learning at 77-School center?"
                    : "Well put! Your pronunciation and sentence structure are getting sharper with every sentence. What excites you the most about learning languages?";
                tr = "Fikringizni juda ravon va tushunarli ifodaladingiz! 77-School O'quv Markazidagi taassurotlaringiz haqida ham so'zlab bera olasizmi?";
                emotion = "happy";
                suggestions = [
                    { label: "77-School is amazing", value: "Learning at 77-School center is fun, competitive, and very practical." },
                    { label: "I love mini games", value: "The vocabulary mini games and interactive quizzes are my favorite." },
                    { label: "The AI coach is great", value: "Having a virtual AI coach to practice speaking with is revolutionary." }
                ];
            }
        } else if (lang === 'ru') {
            if (lower.includes('хорош') || lower.includes('отличн') || lower.includes('норм') || lower.includes('дела')) {
                reply = "Рада это слышать! Когда настроение на высоте, слова запоминаются сами собой. Расскажите, чем вы любите заниматься в свободное время?";
                tr = "Buni eshitishdan xursandman! Kayfiyat a'lo bo'lganda, so'zlar o'z-o'zidan yodda qoladi. Bo'sh vaqtingizda nimalar qilishni yoqtirasiz?";
                emotion = "happy";
                suggestions = [
                    { label: "Люблю читать книги", value: "Я люблю читать интересные книги и статьи." },
                    { label: "Занимаюсь спортом", value: "Регулярно занимаюсь спортом и веду активный образ жизни." },
                    { label: "Изучаю языки", value: "Всё свободное время посвящаю изучению иностранных языков." }
                ];
            } else {
                reply = "Вы замечательно формулируете мысли! Речь звучит уверенно и свободно. Какая у вас главная цель в изучении русского языка?";
                tr = "Fikrlaringizni ajoyib ifodalayapsiz! Nutqingiz ishonchli va erkin eshitilmoqda. Rus tilini o'rganishdagi asosiy maqsadingiz nima?";
                emotion = "supportive";
                suggestions = [
                    { label: "Для карьеры и работы", value: "Русский язык мне нужен для успешной карьеры и бизнеса." },
                    { label: "Для путешествий", value: "Хочу свободно общаться во время путешествий." },
                    { label: "Для чтения книг", value: "Хочу читать классическую литературу в оригинале." }
                ];
            }
        } else {
            // German
            if (lower.includes('gut') || lower.includes('prima') || lower.includes('super')) {
                reply = "Das freut mich sehr! Eine positive Einstellung ist der beste Schlüssel zum Erfolg. Welche Hobbys haben Sie?";
                tr = "Bunga judayam xursandman! Ijobiy kayfiyat muvaffaqiyatning eng yaxshi kalitidir. Qanday qiziqishlaringiz bor?";
                emotion = "happy";
                suggestions = [
                    { label: "Ich mag Musik", value: "Ich höre gern Musik und treibe regelmäßig Sport." },
                    { label: "Ich lerne gern", value: "Ich lerne sehr gern neue Fremdsprachen." },
                    { label: "Reisen ist mein Hobby", value: "Ich liebe es zu reisen und neue Kulturen kennenzulernen." }
                ];
            } else {
                reply = "Sehr gut ausgedrückt! Ihre Aussprache wird von Tag zu Tag besser. Was ist Ihr größter Traum in Deutschland?";
                tr = "Juda yaxshi ifodalangan! Talaffuzingiz kundan-kunga yaxshilanib bormoqda. Germaniyadagi eng katta orzuingiz nima?";
                emotion = "impressed";
                suggestions = [
                    { label: "Studium in Deutschland", value: "Mein Traum ist ein Studium an einer renommierten Universität in Deutschland." },
                    { label: "Arbeiten als Spezialist", value: "Ich möchte als hochqualifizierter Spezialist in Europa arbeiten." },
                    { label: "Fließend Deutsch sprechen", value: "Mein Ziel ist es, absolut fließend auf C1-Niveau Deutsch zu sprechen." }
                ];
            }
        }

        return sendJSON(res, 200, {
            success: true,
            step: 'in_conversation',
            reply,
            tr,
            emotion,
            suggestions
        });
    }

    // 2.5 Student Public Registration API
    if (pathname === '/api/auth/register' && method === 'POST') {
        const body = await parseBody(req);
        const db = loadDatabase();
        const newStudent = {
            id: body.id || ('std-' + Date.now()),
            name: body.name || 'Yangi O\'quvchi',
            email: body.email || `student_${Date.now()}@School77.uz`,
            phone: body.phone || '+998 90 000 00 00',
            lang: body.lang || 'en',
            avatar: body.avatar || '👨‍🎓',
            stars: parseInt(body.stars, 10) || 100,
            wins: parseInt(body.wins, 10) || 0,
            tier: body.tier || 'bronze_1',
            registeredAt: body.registeredAt || new Date().toISOString().split('T')[0],
            status: 'active'
        };
        // Check if student with this email already exists
        const existingIdx = db.students.findIndex(s => s.email === newStudent.email);
        if (existingIdx !== -1) {
            db.students[existingIdx] = { ...db.students[existingIdx], ...newStudent };
        } else {
            db.students.unshift(newStudent);
        }
        saveDatabase(db);
        console.log(`[AUTH] Yangi o'quvchi ro'yxatdan o'tdi: ${newStudent.name} (${newStudent.email})`);
        return sendJSON(res, 201, { success: true, student: newStudent });
    }

    // 3. STUDENTS API
    if (pathname === '/api/students') {
        const db = loadDatabase();
        if (method === 'GET') {
            return sendJSON(res, 200, { success: true, students: db.students });
        }
        if (method === 'POST') {
            const body = await parseBody(req);
            const newStudent = {
                id: 'std-' + Date.now(),
                name: body.name || 'Yangi O\'quvchi',
                email: body.email || `student_${Date.now()}@School77.uz`,
                phone: body.phone || '+998 90 000 00 00',
                avatar: body.avatar || '👨‍🎓',
                stars: parseInt(body.stars, 10) || 100,
                wins: parseInt(body.wins, 10) || 0,
                tier: body.tier || 'bronze_1',
                registeredAt: new Date().toISOString().split('T')[0],
                status: 'active'
            };
            db.students.unshift(newStudent);
            saveDatabase(db);
            return sendJSON(res, 201, { success: true, student: newStudent });
        }
    }

    // Update / Delete specific student: /api/students/:id
    if (pathname.startsWith('/api/students/')) {
        const studentId = pathname.replace('/api/students/', '');
        const db = loadDatabase();
        const index = db.students.findIndex(s => s.id === studentId);

        if (index === -1) {
            return sendJSON(res, 404, { success: false, message: 'O\'quvchi topilmadi!' });
        }

        if (method === 'PUT') {
            const body = await parseBody(req);
            db.students[index] = { ...db.students[index], ...body };
            saveDatabase(db);
            return sendJSON(res, 200, { success: true, student: db.students[index] });
        }

        if (method === 'DELETE') {
            const deleted = db.students.splice(index, 1);
            saveDatabase(db);
            return sendJSON(res, 200, { success: true, deleted: deleted[0] });
        }
    }

    // 4. STAR STORE GIFTS API
    if (pathname === '/api/store') {
        const db = loadDatabase();
        if (method === 'GET') {
            return sendJSON(res, 200, { success: true, storeGifts: db.storeGifts });
        }
        if (method === 'POST') {
            const body = await parseBody(req);
            const newItem = {
                id: 'g_' + Date.now(),
                title: body.title || 'Yangi Sovg\'a',
                category: body.category || 'Maxsus',
                cost: parseInt(body.cost, 10) || 100,
                icon: body.icon || '🎁',
                desc: body.desc || 'School77 maxsus do\'kon mahsuloti.',
                badge: body.badge || 'Yangi'
            };
            db.storeGifts.push(newItem);
            saveDatabase(db);
            return sendJSON(res, 201, { success: true, item: newItem });
        }
    }

    // Update / Delete specific store item: /api/store/:id
    if (pathname.startsWith('/api/store/')) {
        const itemId = pathname.replace('/api/store/', '');
        const db = loadDatabase();
        const index = db.storeGifts.findIndex(g => g.id === itemId);

        if (index === -1) {
            return sendJSON(res, 404, { success: false, message: 'Mahsulot topilmadi!' });
        }

        if (method === 'PUT') {
            const body = await parseBody(req);
            db.storeGifts[index] = { ...db.storeGifts[index], ...body };
            if (body.cost !== undefined) db.storeGifts[index].cost = parseInt(body.cost, 10);
            saveDatabase(db);
            return sendJSON(res, 200, { success: true, item: db.storeGifts[index] });
        }

        if (method === 'DELETE') {
            const deleted = db.storeGifts.splice(index, 1);
            saveDatabase(db);
            return sendJSON(res, 200, { success: true, deleted: deleted[0] });
        }
    }

    // 5. VOCABULARY API
    if (pathname === '/api/vocabulary') {
        const db = loadDatabase();
        if (method === 'GET') {
            return sendJSON(res, 200, { success: true, vocabulary: db.customVocabulary });
        }
        if (method === 'POST') {
            const body = await parseBody(req);
            const newWord = {
                id: 'voc_' + Date.now(),
                lang: body.lang || 'en',
                lvl: body.lvl || 'A1',
                w: body.w || '',
                ph: body.ph || '',
                pos: body.pos || 'noun',
                uz: body.uz || '',
                ru: body.ru || '',
                ex: body.ex || '',
                exTr: body.exTr || ''
            };
            db.customVocabulary.unshift(newWord);
            saveDatabase(db);
            return sendJSON(res, 201, { success: true, word: newWord });
        }
    }

    if (pathname.startsWith('/api/vocabulary/')) {
        const wordId = pathname.replace('/api/vocabulary/', '');
        const db = loadDatabase();
        const index = db.customVocabulary.findIndex(w => w.id === wordId);
        if (index !== -1 && method === 'DELETE') {
            db.customVocabulary.splice(index, 1);
            saveDatabase(db);
            return sendJSON(res, 200, { success: true });
        }
    }

    // 6. DIALOGUES API
    if (pathname === '/api/dialogues') {
        const db = loadDatabase();
        if (method === 'GET') {
            return sendJSON(res, 200, { success: true, dialogues: db.customDialogues });
        }
        if (method === 'POST') {
            const body = await parseBody(req);
            const newDlg = {
                id: 'dlg_' + Date.now(),
                lang: body.lang || 'en',
                lvl: body.lvl || 'A1',
                title: body.title || 'New Dialogue',
                titleUz: body.titleUz || 'Yangi Dialog',
                category: body.category || 'general',
                categoryName: body.categoryName || 'Kundalik suhbat',
                icon: body.icon || '💬',
                desc: body.desc || '',
                lines: Array.isArray(body.lines) ? body.lines : []
            };
            db.customDialogues.unshift(newDlg);
            saveDatabase(db);
            return sendJSON(res, 201, { success: true, dialogue: newDlg });
        }
    }

    if (pathname.startsWith('/api/dialogues/')) {
        const dlgId = pathname.replace('/api/dialogues/', '');
        const db = loadDatabase();
        const index = db.customDialogues.findIndex(d => d.id === dlgId);
        if (index !== -1 && method === 'DELETE') {
            db.customDialogues.splice(index, 1);
            saveDatabase(db);
            return sendJSON(res, 200, { success: true });
        }
    }

    // 7. IDIOMS API
    if (pathname === '/api/idioms') {
        const db = loadDatabase();
        if (method === 'GET') {
            return sendJSON(res, 200, { success: true, idioms: db.customIdioms });
        }
        if (method === 'POST') {
            const body = await parseBody(req);
            const newIdiom = {
                id: 'idm_' + Date.now(),
                lang: body.lang || 'en',
                lvl: body.lvl || 'A1',
                idiom: body.idiom || '',
                uz: body.uz || '',
                ru: body.ru || '',
                ex: body.ex || '',
                exTr: body.exTr || ''
            };
            db.customIdioms.unshift(newIdiom);
            saveDatabase(db);
            return sendJSON(res, 201, { success: true, idiom: newIdiom });
        }
    }

    if (pathname.startsWith('/api/idioms/')) {
        const idmId = pathname.replace('/api/idioms/', '');
        const db = loadDatabase();
        const index = db.customIdioms.findIndex(i => i.id === idmId);
        if (index !== -1 && method === 'DELETE') {
            db.customIdioms.splice(index, 1);
            saveDatabase(db);
            return sendJSON(res, 200, { success: true });
        }
    }

    // 8. BACKUP & RESTORE
    if (pathname === '/api/backup' && method === 'GET') {
        const db = loadDatabase();
        return sendJSON(res, 200, { success: true, database: db });
    }

    if (pathname === '/api/restore' && method === 'POST') {
        const body = await parseBody(req);
        if (body.database) {
            saveDatabase(body.database);
            return sendJSON(res, 200, { success: true, message: 'Ma\'lumotlar bazasi qayta tiklandi!' });
        }
        return sendJSON(res, 400, { success: false, message: 'Noto\'g\'ri format!' });
    }

    // ==================== STATIC WEB SERVER ====================
    // Serve frontend client from parent directory
    let filePath = path.join(CLIENT_DIR, pathname === '/' ? 'index.html' : pathname);

    // Security check to avoid directory traversal
    if (!filePath.startsWith(CLIENT_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('403 Taqiqlangan');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }
        serveStatic(req, res, filePath);
    });
});

// Attach Real-Time WebSocket Engine
setupWebSocketServer(server);

// Start listening
server.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║         🚀 School77 2026 — BACKEND SERVER FAOL!               ║
║             77-School O'quv Markazi Loyihasi                  ║
╠═══════════════════════════════════════════════════════════════╣
║  🌐 Web & API URL:   http://localhost:${PORT}                    ║
║  🔑 Admin Login:     admin@school77.uz                        ║
║  🔒 Maxfiy Kod:      7578mf                                   ║
║  📊 API Health:      http://localhost:${PORT}/api/health         ║
║  💾 Ma'lumotlar:     server/db.json                           ║
╚═══════════════════════════════════════════════════════════════╝
    `);
});




// ==================== REAL-TIME WEBSOCKET MULTIPLAYER ENGINE ====================
const crypto = require('crypto');

const VOCAB_BANK = {
    en: [
        { word: "Knowledge", ph: "/ˈnɒl.ɪdʒ/", tr: "Bilim, ma'lumot", distractors: ["Kitob", "Maktab", "Kutubxona"] },
        { word: "Opportunity", ph: "/ˌɒp.əˈtjuː.nə.ti/", tr: "Imkoniyat, qulay vaziyat", distractors: ["Qiyinchilik", "Vaqt", "Boylik"] },
        { word: "Confidence", ph: "/ˈkɒn.fɪ.dəns/", tr: "Ishonch, dadillik", distractors: ["Qo'rquv", "Shubha", "Sabr"] },
        { word: "Improvement", ph: "/ɪmˈpruːv.mənt/", tr: "Rivojlanish, yaxshilanish", distractors: ["Pastroq bo'lish", "To'xtab qolish", "Tugash"] },
        { word: "Challenge", ph: "/ˈtʃæl.ɪndʒ/", tr: "Sinov, chaqiriq", distractors: ["Oson ish", "Sovg'a", "Dam olish"] },
        { word: "Fluency", ph: "/ˈfluː.ən.si/", tr: "Ravonlik, erkin so'zlashuv", distractors: ["Sekinlik", "To'xtash", "Xatolik"] },
        { word: "Achieve", ph: "/əˈtʃiːv/", tr: "Erishmoq, muvaffaqiyat qozonmoq", distractors: ["Yo'qotmoq", "Uxlash", "Qochmoq"] },
        { word: "Accurate", ph: "/ˈæk.jə.rət/", tr: "Aniq, to'g'ri, xatosiz", distractors: ["Noaniq", "Xato", "Taxminiy"] },
        { word: "Dedication", ph: "/ˌded.ɪˈkeɪ.ʃən/", tr: "Fidoyilik, sadoqat", distractors: ["Beparvolik", "G'azab", "Dangasalik"] },
        { word: "Inspire", ph: "/ɪnˈspaɪər/", tr: "Ilhomlantirmoq, ruhlantirmoq", distractors: ["Xafa qilmoq", "To'xtatmoq", "Aldamoq"] },
        { word: "Practice", ph: "/ˈpræk.tɪs/", tr: "Mashq qilmoq, amaliyot", distractors: ["Nazariya", "Reja", "Kutish"] },
        { word: "Vocabulary", ph: "/vəˈkæb.jə.lər.i/", tr: "Lug'at boyligi, so'zlar", distractors: ["Grammatika", "Harflar", "Tovushlar"] }
    ],
    ru: [
        { word: "Возможность", ph: "[вазможнаст']", tr: "Imkoniyat", distractors: ["Xavf", "To'siq", "Natija"] },
        { word: "Знание", ph: "[знанийэ]", tr: "Bilim", distractors: ["Fikr", "Kitob", "Tajriba"] },
        { word: "Уверенность", ph: "[ув'эрэннаст']", tr: "Ishonch, qat'iyat", distractors: ["Qo'rquv", "Zaiflik", "Tinchlik"] },
        { word: "Развитие", ph: "[разв'ит'ийэ]", tr: "Rivojlanish, o'sish", distractors: ["Orqaga ketish", "Sokinlik", "Boshlanish"] },
        { word: "Успех", ph: "[усп'эх]", tr: "Muvaffaqiyat, zafar", distractors: ["Omadsizlik", "Harajat", "Vaqt"] },
        { word: "Свободно", ph: "[свабодна]", tr: "Erkin, ravon", distractors: ["Qiyin", "Sekin", "Bog'liq"] },
        { word: "Достигать", ph: "[даст'игат']", tr: "Erishmoq, yetmoq", distractors: ["Kutmoq", "Qoldirmoq", "Qo'rqmoq"] },
        { word: "Практика", ph: "[практ'ика]", tr: "Amaliyot, mashq", distractors: ["Hayol", "Nazariya", "Uyqu"] }
    ],
    de: [
        { word: "Gelegenheit", ph: "[ɡəˈleːɡn̩haɪ̯t]", tr: "Qulay fursat, imkoniyat", distractors: ["Xavf", "Zarar", "Reja"] },
        { word: "Wissen", ph: "[ˈvɪsn̩]", tr: "Bilim, ilim", distractors: ["Savol", "Hikoya", "Kitob"] },
        { word: "Selbstvertrauen", ph: "[ˈzɛlpstfɛɐ̯ˌtʁaʊ̯ən]", tr: "O'ziga ishonch", distractors: ["Qo'rquv", "Uyat", "Shubha"] },
        { word: "Erfolg", ph: "[ɛɐ̯ˈfɔlk]", tr: "Muvaffaqiyat, natija", distractors: ["Xato", "Yo'qotish", "Kechikish"] },
        { word: "Übung", ph: "[ˈyːbʊŋ]", tr: "Mashq, amaliyot", distractors: ["Qoida", "Tanaffus", "Qonun"] },
        { word: "Entwicklung", ph: "[ɛntˈvɪklʊŋ]", tr: "Rivojlanish, taraqqiyot", distractors: ["To'xtash", "Xavotir", "Pasayish"] },
        { word: "Fließend", ph: "[ˈfliːsn̩t]", tr: "Ravon, to'siqsiz gapirish", distractors: ["Duduqlanib", "Sekin", "Qiyin"] },
        { word: "Erreichen", ph: "[ɛɐ̯ˈʁaɪ̯çn̩]", tr: "Erishmoq, yetib bormoq", distractors: ["Yiqilmoq", "Unutmoq", "Boshlamoq"] }
    ]
};

const BOT_COMPETITORS = [
    { name: "Sardor Toshkent", avatar: "👨‍💻", rating: 1460 },
    { name: "Kamola Samarqand", avatar: "👩‍🎓", rating: 1520 },
    { name: "Diyor Buxoro", avatar: "🧑‍🎓", rating: 1390 },
    { name: "Madina Farg'ona", avatar: "👩‍💼", rating: 1480 },
    { name: "Javohir Namangan", avatar: "👨‍🚀", rating: 1440 },
    { name: "Elena Berlin", avatar: "👱‍♀️", rating: 1550 },
    { name: "Alex London", avatar: "🧔", rating: 1580 }
];

function generateQuestionsForMatch(lang, count = 5) {
    const list = VOCAB_BANK[lang] || VOCAB_BANK.en;
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return selected.map((item, idx) => {
        // Collect distractors
        const otherTrs = list.filter(w => w.tr !== item.tr).map(w => w.tr);
        otherTrs.sort(() => Math.random() - 0.5);
        const distractors = otherTrs.slice(0, 3);
        while (distractors.length < 3) {
            distractors.push(['Bilim', 'Imkoniyat', 'Dars', 'Natija'][distractors.length]);
        }
        const options = [...distractors, item.tr].sort(() => Math.random() - 0.5);

        return {
            round: idx + 1,
            word: item.word,
            phonetic: item.phonetic || item.ph || '',
            correct: item.tr,
            options
        };
    });
}

const GameHub = {
    queues: {
        '1v1_en': [], '1v1_ru': [], '1v1_de': [],
        '6p_en': [], '6p_ru': [], '6p_de': []
    },
    rooms: new Map(),

    joinQueue(client, msg) {
        const gameType = msg.gameType || '1v1';
        const lang = msg.lang || 'en';
        const queueKey = `${gameType}_${lang}`;
        const queue = this.queues[queueKey];
        if (!queue) return;

        // Prevent duplicate queue entry
        this.leaveQueue(client);

        client.user = msg.user || { id: 'std_' + Date.now(), name: "O'quvchi", avatar: "👨‍🎓", rating: 1200 };
        client.gameType = gameType;
        client.lang = lang;
        client.queueKey = queueKey;

        console.log(`[GAME-HUB] Player joined queue: ${client.user.name} (${queueKey})`);

        if (gameType === '1v1') {
            if (queue.length > 0) {
                // Real player matched!
                const opponent = queue.shift();
                clearTimeout(opponent.matchTimeout);
                this.create1v1Match(client, opponent, lang);
            } else {
                queue.push(client);
                client.send({ type: 'queue_waiting', message: "Raqib qidirilmoqda...", timeoutSec: 6 });
                // If no real player matches within 5s, match with intelligent sparring bot
                client.matchTimeout = setTimeout(() => {
                    const idx = queue.indexOf(client);
                    if (idx !== -1) {
                        queue.splice(idx, 1);
                        const bot = BOT_COMPETITORS[Math.floor(Math.random() * BOT_COMPETITORS.length)];
                        const virtualOpponent = {
                            isVirtual: true,
                            user: { id: 'bot_' + Date.now(), name: bot.name, avatar: bot.avatar, rating: bot.rating },
                            send: () => {}
                        };
                        this.create1v1Match(client, virtualOpponent, lang);
                    }
                }, 5000);
            }
        } else if (gameType === '6p') {
            queue.push(client);
            client.send({ type: 'queue_waiting', message: "6 kishilik xonaga ulanmoqda...", playersCount: queue.length });

            // Start countdown when at least 1 player is waiting
            if (!queue.timerStarted) {
                queue.timerStarted = true;
                setTimeout(() => {
                    queue.timerStarted = false;
                    const waitingClients = queue.splice(0, 6);
                    if (waitingClients.length > 0) {
                        this.create6pMatch(waitingClients, lang);
                    }
                }, 4500);
            }
        }
    },

    leaveQueue(client) {
        if (client.queueKey && this.queues[client.queueKey]) {
            const q = this.queues[client.queueKey];
            const idx = q.indexOf(client);
            if (idx !== -1) q.splice(idx, 1);
            if (client.matchTimeout) clearTimeout(client.matchTimeout);
        }
    },

    create1v1Match(player1, player2, lang) {
        const roomId = 'room_1v1_' + Date.now();
        const questions = generateQuestionsForMatch(lang, 5);

        const room = {
            id: roomId,
            type: '1v1',
            lang,
            players: [player1, player2],
            questions,
            roundIndex: 0,
            scores: { [player1.user.id]: 0, [player2.user.id]: 0 },
            answersReceived: new Set(),
            roundTimer: null,
            isBotMatch: !!player2.isVirtual
        };

        this.rooms.set(roomId, room);
        player1.room = room;
        player2.room = room;

        console.log(`[GAME-HUB] Match started: ${player1.user.name} VS ${player2.user.name} (Room: ${roomId})`);

        // Notify Player 1
        player1.send({
            type: 'match_found',
            roomId,
            opponent: player2.user,
            isLivePlayer: !player2.isVirtual,
            totalRounds: 5
        });

        // Notify Player 2 if real
        if (!player2.isVirtual) {
            player2.send({
                type: 'match_found',
                roomId,
                opponent: player1.user,
                isLivePlayer: true,
                totalRounds: 5
            });
        }

        // Start round 1 after 2.5s intro
        setTimeout(() => this.startNext1v1Round(room), 2500);
    },

    startNext1v1Round(room) {
        if (!room || room.roundIndex >= room.questions.length) {
            this.finish1v1Match(room);
            return;
        }

        const currentQ = room.questions[room.roundIndex];
        room.answersReceived.clear();
        room.currentQuestionStartTime = Date.now();

        const roundPayload = {
            type: 'new_round',
            round: room.roundIndex + 1,
            totalRounds: room.questions.length,
            word: currentQ.word,
            phonetic: currentQ.phonetic,
            options: currentQ.options,
            timeLimitSec: 10
        };

        room.players.forEach(p => {
            if (!p.isVirtual) p.send(roundPayload);
        });

        // Virtual player automatic response simulation
        if (room.isBotMatch) {
            const botPlayer = room.players[1];
            const botDelay = 1800 + Math.random() * 3200; // 1.8s - 5.0s
            room.botTimeout = setTimeout(() => {
                if (!room.answersReceived.has(botPlayer.user.id)) {
                    const isBotCorrect = Math.random() > 0.20; // 80% accuracy
                    const chosenOption = isBotCorrect
                        ? currentQ.correct
                        : currentQ.options.find(o => o !== currentQ.correct) || currentQ.options[0];

                    this.handlePlayerAnswer(botPlayer, {
                        roomId: room.id,
                        round: room.roundIndex + 1,
                        option: chosenOption,
                        timeSpent: botDelay / 1000
                    });
                }
            }, botDelay);
        }

        // 10s Round Timeout
        room.roundTimer = setTimeout(() => {
            this.end1v1Round(room);
        }, 10500);
    },

    handlePlayerAnswer(client, msg) {
        const room = client.room;
        if (!room) return;
        const currentQ = room.questions[room.roundIndex];
        if (!currentQ) return;

        if (room.answersReceived.has(client.user.id)) return;
        room.answersReceived.add(client.user.id);

        const isCorrect = msg.option === currentQ.correct;
        const timeSpent = Math.max(0.5, msg.timeSpent || ((Date.now() - room.currentQuestionStartTime) / 1000));
        let earnedPoints = 0;

        if (isCorrect) {
            earnedPoints = Math.max(30, 120 - Math.round(timeSpent * 9));
        }

        room.scores[client.user.id] = (room.scores[client.user.id] || 0) + earnedPoints;

        // Broadcast live reaction to players
        room.players.forEach(p => {
            if (!p.isVirtual) {
                p.send({
                    type: 'player_answered',
                    playerId: client.user.id,
                    isUser: p.user.id === client.user.id,
                    isCorrect,
                    points: earnedPoints,
                    userScore: room.scores[p.user.id] || 0,
                    opponentScore: room.scores[room.players.find(o => o.user.id !== p.user.id)?.user.id] || 0
                });
            }
        });

        // If both players have answered, conclude round early
        if (room.answersReceived.size >= room.players.length) {
            clearTimeout(room.roundTimer);
            if (room.botTimeout) clearTimeout(room.botTimeout);
            setTimeout(() => this.end1v1Round(room), 1200);
        }
    },

    end1v1Round(room) {
        if (!room) return;
        clearTimeout(room.roundTimer);
        if (room.botTimeout) clearTimeout(room.botTimeout);

        const currentQ = room.questions[room.roundIndex];
        const p1 = room.players[0];
        const p2 = room.players[1];

        const roundEndPayload = {
            type: 'round_ended',
            round: room.roundIndex + 1,
            correctAnswer: currentQ.correct,
            scores: {
                [p1.user.id]: room.scores[p1.user.id] || 0,
                [p2.user.id]: room.scores[p2.user.id] || 0
            }
        };

        room.players.forEach(p => {
            if (!p.isVirtual) p.send(roundEndPayload);
        });

        room.roundIndex++;

        // Delay 2s and proceed to next round
        setTimeout(() => this.startNext1v1Round(room), 2200);
    },

    finish1v1Match(room) {
        if (!room) return;
        const p1 = room.players[0];
        const p2 = room.players[1];
        const s1 = room.scores[p1.user.id] || 0;
        const s2 = room.scores[p2.user.id] || 0;

        let winnerId = null;
        if (s1 > s2) winnerId = p1.user.id;
        else if (s2 > s1) winnerId = p2.user.id;

        const gameOverPayload = {
            type: 'match_over',
            finalScores: { [p1.user.id]: s1, [p2.user.id]: s2 },
            winnerId,
            starsAwarded: 5
        };

        room.players.forEach(p => {
            if (!p.isVirtual) {
                p.send({
                    ...gameOverPayload,
                    isWinner: winnerId === p.user.id,
                    stars: (winnerId === p.user.id) ? 5 : 0
                });
                p.room = null;
            }
        });

        this.rooms.delete(room.id);
        console.log(`[GAME-HUB] Match concluded: Room ${room.id}. Winner: ${winnerId || 'Draw'}`);
    },

    create6pMatch(humanClients, lang) {
        const roomId = 'room_6p_' + Date.now();
        const questions = generateQuestionsForMatch(lang, 5);
        const players = [...humanClients];

        // Fill remaining slots up to 6 players with realistic students
        let botIdx = 0;
        while (players.length < 6) {
            const b = BOT_COMPETITORS[botIdx % BOT_COMPETITORS.length];
            players.push({
                isVirtual: true,
                user: { id: 'bot_6p_' + botIdx, name: b.name, avatar: b.avatar, rating: b.rating },
                send: () => {}
            });
            botIdx++;
        }

        const room = {
            id: roomId,
            type: '6p',
            lang,
            players,
            questions,
            roundIndex: 0,
            scores: {},
            answersReceived: new Set()
        };
        players.forEach(p => { room.scores[p.user.id] = 0; p.room = room; });
        this.rooms.set(roomId, room);

        const lobbyPayload = {
            type: '6p_match_found',
            roomId,
            players: players.map(p => p.user),
            totalRounds: 5
        };
        humanClients.forEach(c => c.send(lobbyPayload));

        setTimeout(() => this.startNext6pRound(room), 3000);
    },

    startNext6pRound(room) {
        if (!room || room.roundIndex >= room.questions.length) {
            this.finish6pMatch(room);
            return;
        }

        const currentQ = room.questions[room.roundIndex];
        room.answersReceived.clear();
        room.currentQuestionStartTime = Date.now();

        const roundPayload = {
            type: '6p_new_round',
            round: room.roundIndex + 1,
            totalRounds: room.questions.length,
            word: currentQ.word,
            phonetic: currentQ.phonetic,
            options: currentQ.options,
            timeLimitSec: 10
        };

        room.players.forEach(p => {
            if (!p.isVirtual) p.send(roundPayload);
        });

        // Simulate bots answering
        room.players.filter(p => p.isVirtual).forEach((bot, bIdx) => {
            const delay = 1600 + (bIdx * 800) + Math.random() * 2000;
            setTimeout(() => {
                if (room.roundIndex < room.questions.length && !room.answersReceived.has(bot.user.id)) {
                    const isCorrect = Math.random() > 0.25;
                    const option = isCorrect ? currentQ.correct : currentQ.options[0];
                    this.handle6pAnswer(bot, { roomId: room.id, option, timeSpent: delay / 1000 });
                }
            }, delay);
        });

        room.roundTimer = setTimeout(() => this.end6pRound(room), 10500);
    },

    handle6pAnswer(client, msg) {
        const room = client.room;
        if (!room) return;
        const currentQ = room.questions[room.roundIndex];
        if (!currentQ) return;

        if (room.answersReceived.has(client.user.id)) return;
        room.answersReceived.add(client.user.id);

        const isCorrect = msg.option === currentQ.correct;
        const timeSpent = Math.max(0.5, msg.timeSpent || ((Date.now() - room.currentQuestionStartTime) / 1000));
        let points = 0;
        if (isCorrect) {
            const rankOrder = room.answersReceived.size;
            points = Math.max(30, (130 - (rankOrder * 15)) - Math.round(timeSpent * 5));
        }

        room.scores[client.user.id] = (room.scores[client.user.id] || 0) + points;

        // Broadcast leaderboard ranking update
        const sorted = room.players.map(p => ({
            id: p.user.id,
            name: p.user.name,
            avatar: p.user.avatar,
            score: room.scores[p.user.id] || 0,
            isUser: !p.isVirtual
        })).sort((a, b) => b.score - a.score);

        room.players.forEach(p => {
            if (!p.isVirtual) {
                p.send({
                    type: '6p_leaderboard_update',
                    players: sorted,
                    answeredPlayerId: client.user.id,
                    isCorrect
                });
            }
        });
    },

    end6pRound(room) {
        if (!room) return;
        clearTimeout(room.roundTimer);
        const currentQ = room.questions[room.roundIndex];

        room.players.forEach(p => {
            if (!p.isVirtual) {
                p.send({
                    type: '6p_round_ended',
                    round: room.roundIndex + 1,
                    correctAnswer: currentQ.correct,
                    scores: room.scores
                });
            }
        });

        room.roundIndex++;
        setTimeout(() => this.startNext6pRound(room), 2500);
    },

    finish6pMatch(room) {
        if (!room) return;
        const sorted = room.players.map(p => ({
            id: p.user.id,
            name: p.user.name,
            avatar: p.user.avatar,
            score: room.scores[p.user.id] || 0
        })).sort((a, b) => b.score - a.score);

        room.players.forEach(p => {
            if (!p.isVirtual) {
                const rank = sorted.findIndex(s => s.id === p.user.id) + 1;
                let stars = 0;
                if (rank === 1) stars = 5;
                else if (rank === 2) stars = 3;
                else if (rank === 3) stars = 2;

                p.send({
                    type: '6p_game_over',
                    rank,
                    stars,
                    standings: sorted
                });
                p.room = null;
            }
        });
        this.rooms.delete(room.id);
    },

    handleDisconnect(client) {
        this.leaveQueue(client);
        if (client.room) {
            const room = client.room;
            room.players.forEach(p => {
                if (p !== client && !p.isVirtual) {
                    p.send({
                        type: 'opponent_left',
                        message: "Raqib o'yindan chiqib ketdi. Siz g'olib bo'ldingiz! 🏆",
                        stars: 5
                    });
                }
            });
            this.rooms.delete(room.id);
        }
    }
};

// Setup Zero-Dependency RFC-6455 WebSocket Server
function setupWebSocketServer(httpServer) {
    httpServer.on('upgrade', (req, socket, head) => {
        const parsedUrl = new URL(req.url, 'http://localhost');
        if (parsedUrl.pathname !== '/ws/game' && parsedUrl.pathname !== '/ws') {
            socket.destroy();
            return;
        }

        const key = req.headers['sec-websocket-key'];
        if (!key) {
            socket.destroy();
            return;
        }

        const acceptHash = crypto.createHash('sha1')
            .update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
            .digest('base64');

        const responseHeaders = [
            'HTTP/1.1 101 Switching Protocols',
            'Upgrade: websocket',
            'Connection: Upgrade',
            `Sec-WebSocket-Accept: ${acceptHash}`,
            '\r\n'
        ];

        socket.write(responseHeaders.join('\r\n'));

        // Wrap connection
        const client = {
            id: 'ws_' + Math.random().toString(36).substring(2, 9),
            socket,
            user: null,
            room: null,
            send(obj) {
                try {
                    const payload = Buffer.from(JSON.stringify(obj), 'utf8');
                    const len = payload.length;
                    let header;
                    if (len <= 125) {
                        header = Buffer.from([0x81, len]);
                    } else if (len <= 65535) {
                        header = Buffer.alloc(4);
                        header[0] = 0x81;
                        header[1] = 126;
                        header.writeUInt16BE(len, 2);
                    } else {
                        header = Buffer.alloc(10);
                        header[0] = 0x81;
                        header[1] = 127;
                        header.writeBigUInt64BE(BigInt(len), 2);
                    }
                    socket.write(Buffer.concat([header, payload]));
                } catch (e) {}
            }
        };

        let buffer = Buffer.alloc(0);

        socket.on('data', chunk => {
            buffer = Buffer.concat([buffer, chunk]);
            while (buffer.length >= 2) {
                const firstByte = buffer[0];
                const secondByte = buffer[1];
                const opcode = firstByte & 0x0f;
                const isMasked = (secondByte & 0x80) !== 0;
                let payloadLen = secondByte & 0x7f;
                let offset = 2;

                if (payloadLen === 126) {
                    if (buffer.length < 4) return;
                    payloadLen = buffer.readUInt16BE(2);
                    offset = 4;
                } else if (payloadLen === 127) {
                    if (buffer.length < 10) return;
                    payloadLen = Number(buffer.readBigUInt64BE(2));
                    offset = 10;
                }

                const maskLen = isMasked ? 4 : 0;
                if (buffer.length < offset + maskLen + payloadLen) return;

                let mask = null;
                if (isMasked) {
                    mask = buffer.slice(offset, offset + 4);
                    offset += 4;
                }

                const payload = buffer.slice(offset, offset + payloadLen);
                buffer = buffer.slice(offset + payloadLen);

                if (isMasked && mask) {
                    for (let i = 0; i < payload.length; i++) {
                        payload[i] ^= mask[i % 4];
                    }
                }

                // Opcode 8: Close connection
                if (opcode === 0x8) {
                    socket.end();
                    GameHub.handleDisconnect(client);
                    return;
                }
                // Opcode 9: Ping -> respond with Pong
                if (opcode === 0x9) {
                    socket.write(Buffer.from([0x8a, 0]));
                    continue;
                }
                // Opcode 1: Text message
                if (opcode === 0x1) {
                    try {
                        const msg = JSON.parse(payload.toString('utf8'));
                        if (msg.type === 'join_queue') {
                            GameHub.joinQueue(client, msg);
                        } else if (msg.type === 'cancel_queue') {
                            GameHub.leaveQueue(client);
                        } else if (msg.type === 'submit_answer') {
                            GameHub.handlePlayerAnswer(client, msg);
                        } else if (msg.type === 'submit_6p_answer') {
                            GameHub.handle6pAnswer(client, msg);
                        }
                    } catch (e) {
                        console.error('WS JSON parse error:', e);
                    }
                }
            }
        });

        socket.on('close', () => GameHub.handleDisconnect(client));
        socket.on('error', () => GameHub.handleDisconnect(client));
    });

    console.log(`[WEBSOCKET] Real-Time Game Engine attached to /ws/game`);
}