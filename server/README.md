# 🚀 School77 — Backend Server & Ma'lumotlar Bazasi (Database)
**77-School O'quv Markazi** uchun ishlab chiqilgan maxsus REST API va Admin boshqaruv serveri.

---

## 📌 Asosiy Ma'lumotlar
* **Port:** `3000` (yoki `process.env.PORT`)
* **Baza fayli:** `server/db.json` (avtomatik yangilanuvchi JSON database)
* **Bosh Administrator:**
  * **Email:** `admin@school77.uz`
  * **Kod:** `7578mf`

---

## ⚡ 1. Lokal Kompyuterda Ishga Tushirish

### 1-qadam: Node.js o'rnatilganligini tekshiring
Kompyuteringiz terminalida (PowerShell yoki CMD) quyidagi buyruqni bering:
```bash
node -v
```
Agar o'rnatilmagan bo'lsa, rasmiy saytdan yuklab oling: [https://nodejs.org](https://nodejs.org) (LTS versiyasini tanlang).

### 2-qadam: Server papkasiga o'ting va ishga tushiring
```bash
cd server
node server.js
```
Hech qanday qo'shimcha `npm install` talab qilinmaydi — server to'liq built-in Node.js texnologiyasida yozilgan!

Server ishga tushgach, terminalda quyidagicha yozuv chiqadi:
```
╔═══════════════════════════════════════════════════════════════╗
║         🚀 School77 2026 — BACKEND SERVER FAOL!               ║
║             77-School O'quv Markazi Loyihasi                  ║
╠═══════════════════════════════════════════════════════════════╣
║  🌐 Web & API URL:   http://localhost:3000                    ║
║  🔑 Admin Login:     admin@school77.uz                        ║
║  🔒 Maxfiy Kod:      7578mf                                   ║
║  📊 API Health:      http://localhost:3000/api/health         ║
║  💾 Ma'lumotlar:     server/db.json                           ║
╚═══════════════════════════════════════════════════════════════╝
```

Brauzeringizda **`http://localhost:3000`** manzilini oching — butun platforma va admin panel server orqali ishlaydi!

---

## 🌐 2. Doimiy Ishlash Rejimi (PM2 bilan)
Server kompyuter yopilganda ham yoki fonda to'xtamasdan ishlashi uchun `pm2` dan foydalanishingiz mumkin:
```bash
npm install -g pm2
cd server
pm2 start server.js --name "School77-api"
pm2 save
```

---

## ☁️ 3. Internetga (Server / Hosting) Joylashtirish

### A) Render.com (Bepul va juda tez)
1. GitHub ga loyihani yuklang (`git push origin main`).
2. [Render.com](https://render.com) ga kiring -> **New Web Service**.
3. Repozitoriyingizni ulang.
4. Sozlamalar:
   - **Root Directory:** `server`
   - **Build Command:** *(bo'sh qoldiring yoki `npm install`)*
   - **Start Command:** `node server.js`
5. **Deploy** tugmasini bosing! Sizga `https://School77.onrender.com` kabi bepul global havola beriladi.

### B) VPS (Ubuntu / Debian)
```bash
sudo apt update && sudo apt install nodejs npm -y
git clone <sizning-repozitoriyingiz>
cd deuPro/server
node server.js
```
Nginx orqali 80/443 portlarga reverse proxy qilib qo'yishingiz mumkin.

---

## 🔌 4. Frontendni Serverga Ulash
Frontend ilovasi aqlli **Avtomatik Sinxronlash (Smart Sync)** rejimiga ega:
1. Agar `http://localhost:3000` serveri yoniq bo'lsa, barcha o'zgarishlar (o'quvchilar, yulduzlar narxi, yangi lug'atlar, dialoglar, idiomalar) to'g'ridan-to'g'ri `db.json` fayliga yoziladi.
2. Agar server o'chiq bo'lsa, ilova avtomatik tarzda `localStorage` orqali oflayn ishlashni davom ettiradi.
3. Admin paneldagi **«Server & DB»** bo'limida server holati (Online/Offline) jonli ko'rinib turadi.
