# TISC Website — tiscofficial.com

เว็บไซต์ static (HTML/CSS/JS ล้วน ไม่ต้อง build) มี 3 หน้า: **Home**, **Statistic**, **Our Team**

## วิธีเปิดดูเว็บ
- VS Code: ติดตั้ง **Live Server** แล้วคลิกขวา `index.html` > **Open with Live Server**
- หรือใช้ Python: `python -m http.server 5500` แล้วเปิด http://localhost:5500

## ไฟล์ไหนแก้อะไร
| ต้องการแก้ | ไฟล์ |
|---|---|
| ตัวเลขสถิติ, มหาวิทยาลัย, รางวัล, รูปบรรยากาศ, สปอนเซอร์, กิจกรรม IBMPIC | `js/data.js` (ไฟล์เดียวจบ) |
| ข้อความ (Overview, Track, แนะนำชมรม, ติดต่อ) | `index.html` |
| สี ฟอนต์ ระยะห่าง | `css/style.css` (สีหลักอยู่ที่ `:root` บนสุด) |
| ระบบเปลี่ยนหน้า / ตาราง / lightbox | `js/main.js` |

## รูปภาพ (ใช้ไฟล์ใน `assets/` เท่านั้น)
- `assets/tisc-logo.png`, `kic-logo.png`, `ibmp-logo.png`, `hero.jpg` (ภาพพื้นหลังหน้าแรก)
- `assets/gallery/` : `o1..o5.jpg` (Overall), `a1..a8.jpg` (Track A) → แก้รายชื่อใน `GALLERY` ใน `js/data.js`
- `assets/sponsors/` : โลโก้สปอนเซอร์ → แก้รายชื่อใน `SPONSORS` / `SPONSORS_MAIN`
- `assets/ibmp/` : รูปกิจกรรม IBMPIC → แก้ใน `ACTS`

**สำคัญ:** ย่อรูปก่อนใส่ (กว้าง ≤ 1600px, ~200KB) — รูปจากกล้องตรง ๆ 7MB ทำให้เว็บโหลดช้ามาก
โฟลเดอร์ต้นฉบับ (`บรรยากาศ/`, `Pic_TrackA/`, `Pic_TrackB/`, `Logo_Spon/`, `Logoชมรม/`) ไม่ต้องอัปโหลดขึ้นโฮสต์

## เพิ่มรูป Track B
1. ย่อรูปแล้ววางเป็น `assets/gallery/b1.jpg`, `b2.jpg`, …
2. ใน `js/data.js` แก้ `"Track B": ["b1", "b2", …]` — แท็บ Track B จะขึ้นเอง

## Deploy ขึ้น tiscofficial.com
อัปโหลดเฉพาะ: `index.html`, `css/`, `js/`, `assets/`, `CNAME`, `robots.txt`, `sitemap.xml`
- **GitHub Pages:** push ขึ้น repo > Settings > Pages > เลือก branch — ไฟล์ `CNAME` ตั้งโดเมนให้แล้ว
  จากนั้นที่ผู้ให้บริการโดเมน ตั้ง A record ชี้ไป `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  และ CNAME `www` → `<username>.github.io`
- **Netlify / Vercel / Cloudflare Pages:** ลากโฟลเดอร์ขึ้นไป แล้วเพิ่ม custom domain `tiscofficial.com` ในหน้า settings
