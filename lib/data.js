/* ==================================================================
   DATA — แก้ข้อมูลทั้งเว็บที่ไฟล์นี้ไฟล์เดียว (ข้อความ UI อยู่ที่ lib/i18n.js)
   ข้อความที่ต้องมี 2 ภาษา เขียนเป็น { th: "...", en: "..." }
   ================================================================== */

// ตัวเลขภาพรวม (ใช้ทั้งหน้า Home และหน้า Statistic)
export const STATS = {
  applicants: 606,    // ผู้สมัครทั้งหมด (คน)
  teams: 161,         // ทีมที่ลงทะเบียน
  universities: 24,   // สถาบันการศึกษาที่เข้าร่วม
  qualified: 130,     // ทีมที่ผ่านรอบ Qualification
  semifinalists: 39,  // ทีมที่ผ่านรอบ Semifinal
  finalists: 20,      // ทีมที่เข้ารอบ Finalist
  finalistPax: 74,    // จำนวนคนในรอบ Finalist
  topTeams: 10,       // 10 ทีมสุดท้าย (หน้า Statistic คิด % เทียบกับ teams)
};

// ขั้นตอนการแข่งขัน (funnel) — % คำนวณเทียบกับแถวแรกให้อัตโนมัติ
export const FUNNEL = [
  { stage: { th: "สมัครทั้งหมด", en: "All applicants" }, teams: 161, pax: 606 },
  { stage: { th: "ผ่านรอบ Qualification", en: "Passed Qualification" }, teams: 130, pax: 492 },
  { stage: { th: "ผ่านรอบ Semifinal", en: "Passed Semifinal" }, teams: 39, pax: 151 },
  { stage: { th: "ผ่านเข้ารอบ Finalist", en: "Finalists" }, teams: 20, pax: 74 },
  { stage: { th: "ทีมชนะเลิศ (Podium Top 3)", en: "Podium (Top 3)" }, teams: 6, pax: 23 },
];

// โครงสร้างรอบชิงชนะเลิศ: จำนวนทีมต่อ Division
export const FINAL_TRACKS = [
  { track: "A", label: { th: "หุ้นต่างประเทศ (DR)", en: "Foreign stocks (DR)" }, teams: 10, pax: 37, divs: [5, 5] },
  { track: "B", label: { th: "หุ้นไทย (Thai Equities)", en: "Thai equities" }, teams: 10, pax: 37, divs: [5, 5] },
];

// ชื่อมหาวิทยาลัย (ใช้ร่วมกันทั้ง UNIS และ AWARDS) — short = ชื่อย่อในกราฟ
export const UNI_NAMES = {
  tu:    { th: "มหาวิทยาลัยธรรมศาสตร์", en: "Thammasat University", short: { th: "ธรรมศาสตร์", en: "TU" } },
  cu:    { th: "จุฬาลงกรณ์มหาวิทยาลัย", en: "Chulalongkorn University", short: { th: "จุฬาฯ", en: "CU" } },
  ku:    { th: "มหาวิทยาลัยเกษตรศาสตร์", en: "Kasetsart University", short: { th: "เกษตรศาสตร์", en: "KU" } },
  swu:   { th: "มหาวิทยาลัยศรีนครินทรวิโรฒ", en: "Srinakharinwirot University", short: { th: "มศว.", en: "SWU" } },
  kku:   { th: "มหาวิทยาลัยขอนแก่น", en: "Khon Kaen University", short: { th: "ขอนแก่น", en: "KKU" } },
  kmitl: { th: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", en: "King Mongkut's Institute of Technology Ladkrabang", short: { th: "สจล.", en: "KMITL" } },
  kmutt: { th: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", en: "King Mongkut's University of Technology Thonburi", short: { th: "มจธ.", en: "KMUTT" } },
  bu:    { th: "มหาวิทยาลัยกรุงเทพ", en: "Bangkok University", short: { th: "ม.กรุงเทพ", en: "BU" } },
  utcc:  { th: "มหาวิทยาลัยหอการค้าไทย", en: "University of the Thai Chamber of Commerce", short: { th: "ม.หอการค้าฯ", en: "UTCC" } },
  mu:    { th: "มหาวิทยาลัยมหิดล", en: "Mahidol University", short: { th: "มหิดล", en: "MU" } },
  psu:   { th: "มหาวิทยาลัยสงขลานครินทร์", en: "Prince of Songkla University", short: { th: "ม.อ.", en: "PSU" } },
  mfu:   { th: "มหาวิทยาลัยแม่ฟ้าหลวง", en: "Mae Fah Luang University", short: { th: "แม่ฟ้าหลวง", en: "MFU" } },
  nida:  { th: "สถาบันบัณฑิตพัฒนบริหารศาสตร์", en: "National Institute of Development Administration", short: { th: "นิด้า", en: "NIDA" } },
  ru:    { th: "มหาวิทยาลัยรามคำแหง", en: "Ramkhamhaeng University", short: { th: "รามคำแหง", en: "RU" } },
  rsu:   { th: "มหาวิทยาลัยรังสิต", en: "Rangsit University", short: { th: "รังสิต", en: "RSU" } },
  siit:  { th: "สถาบันเทคโนโลยีนานาชาติสิรินธร ม.ธรรมศาสตร์", en: "SIIT, Thammasat University", short: { th: "SIIT", en: "SIIT" } },
  au:    { th: "มหาวิทยาลัยอัสสัมชัญ", en: "Assumption University", short: { th: "เอแบค", en: "AU" } },
  cmu:   { th: "มหาวิทยาลัยเชียงใหม่", en: "Chiang Mai University", short: { th: "มช.", en: "CMU" } },
  nus:   { th: "มหาวิทยาลัยแห่งชาติสิงคโปร์", en: "National University of Singapore", short: { th: "NUS", en: "NUS" } },
  fudan: { th: "มหาวิทยาลัยฟู่ตั้น", en: "Fudan University", short: { th: "ฟู่ตั้น", en: "Fudan" } },
  renmin:{ th: "มหาวิทยาลัยเหรินหมิน", en: "Renmin University of China", short: { th: "เหรินหมิน", en: "Renmin" } },
};

// โลโก้มหาวิทยาลัย: ไฟล์อยู่ใน public/assets/unis/ (ที่มา: Wikipedia / Wikimedia Commons)
export const UNI_LOGOS = {
  tu: "tu.png", cu: "cu.png", ku: "ku.png", swu: "swu.png", kku: "kku.png", kmitl: "kmitl.png",
  kmutt: "kmutt.png", bu: "bu.png", utcc: "utcc.png", mu: "mu.png", psu: "psu.png", mfu: "mfu.png",
  nida: "nida.png", ru: "ru.png", rsu: "rsu.png", siit: "siit.jpg", au: "au.png", cmu: "cmu.png",
  nus: "nus.png", fudan: "fudan.png", renmin: "renmin.png",
};

// มหาวิทยาลัยที่เข้าร่วม: pax = จำนวนผู้สมัคร (คน), teams = จำนวนทีม
// ตาราง, กราฟ และ popup "ดูทั้งหมด" ในหน้า Statistic ใช้ข้อมูลชุดนี้ชุดเดียว
export const UNIS = [
  { id: "tu", pax: 163, teams: 60 },
  { id: "cu", pax: 132, teams: 52 },
  { id: "ku", pax: 112, teams: 44 },
  { id: "swu", pax: 49, teams: 16 },
  { id: "kku", pax: 37, teams: 11 },
  { id: "kmitl", pax: 28, teams: 13 },
  { id: "kmutt", pax: 18, teams: 9 },
  { id: "bu", pax: 11, teams: 4 },
  { id: "utcc", pax: 9, teams: 3 },
  { id: "mu", pax: 8, teams: 4 },
  { id: "psu", pax: 7, teams: 3 },
  { id: "mfu", pax: 5, teams: 2 },
  { id: "nida", pax: 4, teams: 1 },
  { id: "ru", pax: 4, teams: 2 },
  { id: "rsu", pax: 4, teams: 3 },
  { id: "siit", pax: 4, teams: 1 },
  { id: "au", pax: 3, teams: 1 },
  { id: "cmu", pax: 2, teams: 2 },
  { id: "nus", pax: 1, teams: 1 },
  { id: "fudan", pax: 1, teams: 1 },
  { id: "renmin", pax: 1, teams: 1 },
];
// มหาวิทยาลัยอื่น ๆ ที่ยังไม่ได้แยกรายชื่อ (ใส่ชื่อแล้วย้ายขึ้นไปใน UNIS + UNI_NAMES + UNI_LOGOS) — count: 0 จะซ่อนช่อง "+n"
export const UNIS_OTHER = { count: 3, pax: 3, teams: 3 };

// ระดับชั้นปีของผู้สมัคร: teams = จำนวนทีมที่มีสมาชิกชั้นปีนั้น
export const YEARS = [
  { label: { th: "ชั้นปีที่ 1", en: "Year 1" }, pax: 134, teams: 47 },
  { label: { th: "ชั้นปีที่ 2", en: "Year 2" }, pax: 129, teams: 53 },
  { label: { th: "ชั้นปีที่ 3", en: "Year 3" }, pax: 213, teams: 75 },
  { label: { th: "ชั้นปีที่ 4", en: "Year 4" }, pax: 129, teams: 44 },
  { label: { th: "ชั้นปีที่ 5 ขึ้นไป", en: "Year 5+" }, pax: 1, teams: 1 },
];

// กลุ่มคณะวิชา (teams = null → แสดง "-")
export const FACULTIES = [
  { label: { th: "คณะบริหารธุรกิจ", en: "Business Administration" }, pax: 171, teams: 66 },
  { label: { th: "คณะพาณิชยศาสตร์และการบัญชี", en: "Commerce and Accountancy" }, pax: 142, teams: 52 },
  { label: { th: "คณะเศรษฐศาสตร์", en: "Economics" }, pax: 132, teams: 53 },
  { label: { th: "คณะวิศวกรรมศาสตร์", en: "Engineering" }, pax: 74, teams: 33 },
  { label: { th: "คณะวิทยาศาสตร์", en: "Science" }, pax: 21, teams: 13 },
  { label: { th: "คณะนิติศาสตร์", en: "Law" }, pax: 6, teams: 3 },
  { label: { th: "คณะนิเทศศาสตร์ / วารสารศาสตร์", en: "Communication Arts / Journalism" }, pax: 5, teams: 3 },
  { label: { th: "คณะเทคโนโลยีสารสนเทศ", en: "Information Technology" }, pax: 5, teams: 2 },
  { label: { th: "คณะอื่น ๆ", en: "Other faculties" }, pax: 50, teams: null },
];

// ===== รอบ Finalist =====
// การ์ด KPI สรุป
export const FINAL_CARDS = [
  { k: { th: "อัตราคัดเลือกเข้าชิง", en: "Selection yield" }, v: "12.4%",
    note: { th: "20 จาก 161 ทีม (ผู้สมัคร 74/606 คน • 12.2%)", en: "20 of 161 teams (74/606 participants • 12.2%)" } },
  { k: { th: "ความสมดุลแทร็ค", en: "Track parity" }, v: "50% / 50%",
    note: { th: "Track A: 10 ทีม (37 คน) | Track B: 10 ทีม (37 คน)", en: "Track A: 10 teams (37) | Track B: 10 teams (37)" } },
  { k: { th: "ทีมข้ามสถาบัน", en: "Cross-uni synergy" }, v: "30.0%",
    note: { th: "6 ทีมข้ามสถาบัน (ทีมสถาบันเดี่ยว 14 ทีม • 70%)", en: "6 cross-institution teams (14 single-institution • 70%)" } },
  { k: { th: "อัตราความสมบูรณ์ทีม", en: "Team retention" }, v: { th: "3.70 คน", en: "3.70 members" },
    note: { th: "74 คน / 20 ทีม (สมาชิกเต็ม 4 คน: 14 ทีม, 3 คน: 6 ทีม)", en: "74 / 20 teams (4 members: 14 teams, 3 members: 6 teams)" } },
];

// ดัชนีชี้วัดเชิงกลยุทธ์: [ดัชนี, สถิติจริง, เกณฑ์, สถานะ]
export const FINAL_KPIS = [
  [{ th: "อัตราคัดเลือกเข้าชิง (Finalist Selectivity)", en: "Finalist selectivity rate" }, "12.4%", "10.0% – 15.0%", "Optimal"],
  [{ th: "อัตราผ่านรอบรองสู่รอบชิง (Semifinal Conversion)", en: "Semifinal conversion" }, "51.3%", "50.0%", "Target Met"],
  [{ th: "สมดุลแทร็คหุ้นนอก vs ไทย (Track Parity)", en: "Track parity index (foreign vs Thai)" }, "50.0% : 50.0%", "50.0% : 50.0%", "Balanced"],
  [{ th: "การรวมทีมข้ามสถาบัน (Cross-Uni Synergy)", en: "Cross-uni synergy" }, { th: "30.0% (6/20 ทีม)", en: "30.0% (6/20 teams)" }, "> 15.0%", "Strong"],
  [{ th: "สัดส่วน 3 สถาบันหลัก (Top 3 Uni Dominance)", en: "Top-3 university dominance" }, { th: "81.1% (60/74 คน)", en: "81.1% (60/74)" }, "< 85.0%", "Healthy"],
  [{ th: "เสถียรภาพสมาชิกทีม (Team Capacity Retention)", en: "Team capacity retention" }, "92.5% (3.70/4.00)", "> 90.0%", "High Stability"],
  [{ th: "ความหลากหลายคณะ (Interdisciplinary Diversity)", en: "Interdisciplinary diversity" }, { th: "4 กลุ่มคณะหลัก", en: "4 main faculty groups" }, { th: "≥ 3 กลุ่มคณะ", en: "≥ 3 groups" }, "Diversified"],
];

// ผู้เข้าชิงแยกตามสถาบัน: [ชื่อ, คน, ทีม, ทีม Track A, ทีม Track B]
export const FINAL_BY_INST = [
  [{ th: "จุฬาลงกรณ์มหาวิทยาลัย (CU)", en: "Chulalongkorn University (CU)" }, 37, 12, 5, 7],
  [{ th: "มหาวิทยาลัยธรรมศาสตร์ (TU)", en: "Thammasat University (TU)" }, 15, 5, 4, 1],
  [{ th: "มหาวิทยาลัยเกษตรศาสตร์ (KU)", en: "Kasetsart University (KU)" }, 8, 3, 1, 2],
  [{ th: "สถาบันเทคโนโลยี (KMUTT, KMITL)", en: "Institutes of technology (KMUTT, KMITL)" }, 6, 2, 2, 0],
  [{ th: "มศว และมหิดล (SWU, MU)", en: "SWU & Mahidol (SWU, MU)" }, 5, 2, 1, 1],
  [{ th: "สถาบันต่างประเทศ (NUS, Fudan, Renmin)", en: "International (NUS, Fudan, Renmin)" }, 3, 3, 0, 3],
];
// หมายเหตุ: ใน 20 ทีมมี 6 ทีมข้ามสถาบัน (30%)
export const FINAL_CROSS_TEAMS = 6;

// ทีมที่ได้รับรางวัลในแต่ละ Track: [id มหาวิทยาลัย, จำนวนทีมที่ได้รางวัล]
export const AWARDS = {
  A: [["cu", 2], ["tu", 1], ["ku", 1], ["mu", 1]],
  B: [["cu", 2], ["tu", 1], ["ku", 1], ["mu", 1]],
};

// รูปบรรยากาศแยกตาม Track: วางไฟล์ไว้ที่ public/assets/gallery/ แล้วใส่ชื่อไฟล์ (ไม่ต้องใส่ .jpg)
// Track ที่ยังไม่มีรูป ให้ปล่อยเป็น [] — จะแสดงข้อความ "เร็ว ๆ นี้"
// แนะนำ: ย่อรูปให้กว้างไม่เกิน 1600px ก่อนใส่
export const GALLERY = {
  // เรียงตามผลรางวัล: Winner → 1st Runner-up → 2nd Runner-up → Honorable Mention
  A: ["a4", "a3", "a2", "a1"],
  B: ["b4", "b3", "b2", "b1"],
};

// สปอนเซอร์: [ชื่อ, ไฟล์โลโก้ใน public/assets/sponsors/]
export const SPONSORS_MAIN = [
  ["The Stock Exchange of Thailand", "set.png"],
  ["Bualuang Securities", "bualuang.png"],
];
export const SPONSORS = [
  ["Singha Corporation", "singha.jpg"],
  ["Major Cineplex", "major-cineplex.webp"],
  ["Double A", "double-a.png"],
  ["Big One Group", "big-one-group.png"],
  ["Lactasoy", "lactasoy.webp"],
  ["MEGACHEF", "megachef.png"],
  ["Siam Amazing Park", "siam-amazing-park.png"],
  ["Escape Room Thailand", "escape-room.jpg"],
  ["Rise Buddy", "rise-buddy.png"],
  ["แม่ซู่กี่ ขนมไทย", "mae-sukee.jpg"],
  ["Sponsor", "mascot.jpg"], // TODO: ใส่ชื่อแบรนด์ที่ถูกต้อง
];

// กิจกรรมของชมรม (Club Highlights): รูปอยู่ใน public/assets/activities/
export const ACTS = [
  {
    club: "KIC",
    img: "kic-investment-talk-2026.jpg",
    title: { th: "Investment Talk 2026", en: "Investment Talk 2026" },
    desc: {
      th: "งานเสวนาการลงทุนโดย Kasetsart Investment Club ชวนผู้เชี่ยวชาญจากตลาดทุนมาแบ่งปันมุมมองกับนักศึกษา",
      en: "An investment talk hosted by Kasetsart Investment Club, bringing capital-market professionals to share their views with students.",
    },
  },
  {
    club: "IBMPIC",
    img: "ibmpic-sessions-2025.jpg",
    title: { th: "IBMPIC Sessions", en: "IBMPIC Sessions" },
    desc: {
      th: "เซสชันโดยผู้เชี่ยวชาญจากแวดวงการเงิน เพื่อทำให้ความรู้ทางการเงินเข้าถึงได้ตั้งแต่พื้นฐาน",
      en: "Expert-led sessions featuring professionals from across the finance industry, making financial literacy accessible from the ground up.",
    },
  },
];

export const LINKS = {
  tisc: "https://www.linkedin.com/company/thailand-intercollegiate-stock-challenge/",
  kic: "https://www.linkedin.com/company/kasetsart-investment-club/",
  ibmp: "https://www.linkedin.com/company/ibmpic/",
  ibmpCanva: "https://canva.link/enn3a3vr0wfddo9",
};
