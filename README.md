# TISC Website — tiscofficial.com

Next.js (static export) · 2 ภาษา ไทย / English · หน้า: **Home**, **Statistic**, **Our Team**
URL: `/th/…` และ `/en/…` — หน้า `/` จะพาไปภาษาที่เลือกไว้ล่าสุด (หรือตามภาษาเบราว์เซอร์) และรองรับลิงก์เก่าแบบ `#/statistic`

## วิธีรัน
```bash
npm install
npm run dev      # http://localhost:3000 (แก้แล้วเห็นผลทันที)
npm run build    # สร้างเว็บ static ไว้ที่ out/
npm start        # เปิดดู out/ ที่ build แล้ว
```

## ไฟล์ไหนแก้อะไร
| ต้องการแก้ | ไฟล์ |
|---|---|
| ตัวเลขสถิติ, มหาวิทยาลัย, ชั้นปี, คณะ, KPI รอบ Finalist, รางวัล, รูปบรรยากาศ, สปอนเซอร์, กิจกรรมชมรม | `lib/data.js` |
| ข้อความ UI ทั้งเว็บ (ไทย + อังกฤษ) | `lib/i18n.js` (แก้ทั้ง `th` และ `en`) |
| หน้าแต่ละหน้า | `app/[lang]/page.jsx`, `app/[lang]/statistic/page.jsx`, `app/[lang]/our-team/page.jsx` |
| Header / Footer / แกลเลอรี / ตารางมหาวิทยาลัย | `components/` |
| สี ฟอนต์ ระยะห่าง | `app/globals.css` (สีหลักอยู่ที่ `:root` บนสุด) |

## รูปภาพ (อยู่ใน `public/assets/`)
- `tisc-logo.png`, `kic-logo.png`, `ibmp-logo.png` (พื้นหลังโปร่งใส), `hero.jpg`
- `gallery/` : `a1..a4.jpg` (Track A), `b1..b4.jpg` (Track B) → แก้รายชื่อใน `GALLERY` ใน `lib/data.js`
- `activities/` : รูปกิจกรรมชมรม → แก้ใน `ACTS`
- `sponsors/` : โลโก้สปอนเซอร์ → แก้ใน `SPONSORS` / `SPONSORS_MAIN`

**สำคัญ:** ย่อรูปก่อนใส่ (กว้าง ≤ 1600px, ~200KB)
โฟลเดอร์ต้นฉบับ (`บรรยากาศ/`, `Pic_TrackA/`, `Pic_TrackB/`, `Logo_Spon/`, `Logoชมรม/`) ไม่ถูกนำขึ้นเว็บ

## Deploy (GitHub Pages)

push ขึ้น `main` แล้ว GitHub Actions (`.github/workflows/deploy.yml`) จะ build และ deploy ให้อัตโนมัติ
ครั้งแรกต้องตั้งค่า: repo > **Settings > Pages > Source = GitHub Actions** — ไฟล์ `public/CNAME` ตั้งโดเมน tiscofficial.com ไว้แล้ว
(Vercel / Netlify / Cloudflare Pages ก็ได้: build command `npm run build`, output `out`)

## Certificate 2026

หน้า certificate เปิดที่ `https://tiscofficial.com/en/certificate2026/` โดยใช้ไฟล์ `public/en/certificate2026/index.html` และ `config.js` ที่คัดลอกจากโปรเจกต์ `tisc-certificate` และฝัง Apps Script เดิมผ่าน iframe จึงคง URL ของ TISC ไว้ใน address bar

หากแก้หน้าในโปรเจกต์ `tisc-certificate` ให้คัดลอกสองไฟล์นี้มาอัปเดตในเว็บหลักด้วย หากเปลี่ยน Apps Script deployment ให้อัปเดต URL `/exec` ใน `public/en/certificate2026/config.js` แล้ว build และ deploy ใหม่
