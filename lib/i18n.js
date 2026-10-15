/* ข้อความ UI ทั้งเว็บ 2 ภาษา — แก้ข้อความที่นี่ (ข้อมูลตัวเลข/รูป อยู่ที่ lib/data.js) */

export const LANGS = ["th", "en"];
export const isLang = l => LANGS.includes(l);
export const t = (v, lang) => (v && typeof v === "object" ? v[lang] ?? v.th : v); // {th,en} → string

const th = {
  meta: {
    title: "TISC 2026 – Thailand Intercollegiate Stock Challenge",
    desc: "TISC – Thailand Intercollegiate Stock Challenge: การแข่งขัน Stock Pitch ระดับอุดมศึกษาทั่วประเทศ จัดโดย Kasetsart Investment Club (KIC) และ IBMP Investment Club",
    statistic: "สถิติ · TISC 2026",
    team: "ทีมผู้จัด · TISC 2026",
  },
  nav: { home: "หน้าแรก", statistic: "สถิติ", team: "ทีมผู้จัด", contact: "ติดต่อ", skip: "ข้ามไปยังเนื้อหา", menu: "เปิดเมนู", switchTo: "Switch to English", toTop: "กลับขึ้นด้านบน" },
  hero: {
    eyebrow: "THAILAND INTERCOLLEGIATE STOCK CHALLENGE",
    lead: "การแข่งขัน Stock Pitch ระดับอุดมศึกษาทั่วประเทศ เปิดโอกาสให้นักศึกษาได้พัฒนาทักษะการวิเคราะห์และนำเสนอแนวคิดการลงทุนอย่างมืออาชีพ",
    results: "ดูผลการแข่งขัน", photos: "ชมภาพบรรยากาศ", presented: "Presented by",
  },
  overview: {
    pill: "ภาพรวม",
    p: [
      "TISC (Thailand Intercollegiate Stock Challenge) คือการแข่งขัน Stock Pitch ระดับประเทศ เปิดรับนักศึกษามหาวิทยาลัยทั่วประเทศไทย ทดสอบความรู้ด้านตลาดหุ้น การวิเคราะห์ทางการเงิน และทักษะการนำเสนอ ผู้เข้าแข่งขันต้องค้นคว้า ประเมิน และนำเสนอแนวคิดการลงทุนของตนเอง",
      "ภายใต้วิสัยทัศน์ “Invest Intelligently, Lead Globally” TISC เปิดโอกาสให้นักศึกษาฝึกการคิดเชิงวิเคราะห์และสื่อสารมุมมองการลงทุนผ่านรูปแบบ Stock Pitch ที่ใกล้เคียงมาตรฐานจริงในอุตสาหกรรม เพื่อสร้างทักษะที่จำเป็นต่อการทำงานในสายการเงินและตลาดทุน",
      "TISC 2026 จัดร่วมกันโดย Kasetsart Investment Club (มหาวิทยาลัยเกษตรศาสตร์) และ IBMP Investment Club (มหาวิทยาลัยธรรมศาสตร์)",
    ],
    applicants: "ผู้สมัครทั้งหมด", teams: "จำนวนทีมทั้งหมด", unis: "สถาบันการศึกษา", tracks: "สายการแข่งขัน",
  },
  tracks: {
    pill: "Competition Tracks", title: "สายการแข่งขัน",
    sub: "แต่ละทีมเลือกแข่งขันใน Track ใด Track หนึ่ง และนำเสนอ Stock Pitch ต่อคณะกรรมการจากภาคอุตสาหกรรม",
    A: { name: "Depositary Receipt (DR)", desc: "วิเคราะห์และนำเสนอหุ้นต่างประเทศผ่าน Depositary Receipt ที่ซื้อขายในตลาดหลักทรัพย์แห่งประเทศไทย" },
    B: { name: "SET-Listed Thai Stock", desc: "วิเคราะห์และนำเสนอหุ้นไทยที่จดทะเบียนในตลาดหลักทรัพย์แห่งประเทศไทย (SET)" },
    steps: [
      ["Research", "ค้นคว้าข้อมูลบริษัท อุตสาหกรรม และงบการเงิน"],
      ["Valuation", "ประเมินมูลค่าและสร้างมุมมองการลงทุนของทีม"],
      ["Pitch", "นำเสนอต่อกรรมการและตอบคำถามแบบมืออาชีพ"],
      ["Awards", "Winner · 1st & 2nd Runner-up · Honorable Mention ในแต่ละ Track"],
    ],
  },
  gallery: {
    pill: "บรรยากาศงาน", title: "ภาพบรรยากาศการแข่งขัน",
    sub: "บรรยากาศความคึกคักและความเข้มข้นของการแข่งขันในแต่ละ Track · คลิกที่ภาพเพื่อดูขนาดใหญ่",
    photos: n => `${n} ภาพ`, empty: "ภาพบรรยากาศของ Track นี้จะมาเร็ว ๆ นี้",
    view: "ดูภาพ", close: "ปิด", prev: "ภาพก่อนหน้า", next: "ภาพถัดไป", dialog: "ดูภาพขนาดใหญ่",
  },
  org: {
    pill: "ผู้จัดงาน", title: "Organized By", sub: "TISC จัดขึ้นโดยความร่วมมือระหว่างสองชมรมการลงทุน",
    ku: "มหาวิทยาลัยเกษตรศาสตร์", tu: "มหาวิทยาลัยธรรมศาสตร์", visit: "เยี่ยมชมชมรม",
  },
  spons: { pill: "ผู้สนับสนุน", title: "Sponsors", main: "Presented by", rest: "Supported by" },
  stat: {
    title: "Statistic", hl: "ภาพรวมการแข่งขันในมุมของข้อมูล", sub: "ผู้เข้าแข่งขันมาจากไหนบ้าง และ 10 ทีมสุดท้ายคัดมาเข้มข้นแค่ไหน",
    unisPill: "PARTICIPATING UNIVERSITIES", unisTitle: n => `ผู้เข้าแข่งขันจาก ${n} สถาบันทั่วประเทศ`,
    unisSub: (pax, teams) => `ผู้สมัคร ${pax} คน ${teams} ทีม เรียงตามจำนวนผู้สมัคร`,
    paxN: n => `${n} คน`, teamsN: n => `${n} ทีม`, others: n => `อีก ${n} สถาบัน`,
    topPill: "FINAL 10", topTitle: n => `${n} ทีมสุดท้าย`, topSub: n => `ผ่านการคัดเลือกจากทีมที่สมัครทั้งหมด ${n} ทีม`,
    topOf: "ของทีมที่สมัครทั้งหมด", topNote: (n, t, k) => `${n} จาก ${t} ทีม · ประมาณ 1 ใน ${k} ทีม`,
    lgTop: n => `${n} ทีมสุดท้าย`, lgRest: n => `อีก ${n} ทีม`,
  },
  team: {
    title: "Our Team", hl: "ชมรมผู้จัดงาน TISC 2026", sub: "TISC จัดโดยความร่วมมือของ Kasetsart Investment Club และ IBMP Investment Club",
    kic: {
      pill: "KIC · มหาวิทยาลัยเกษตรศาสตร์",
      about: "Kasetsart Investment Club (KIC) คือชุมชนนักลงทุนรุ่นใหม่ของมหาวิทยาลัยเกษตรศาสตร์ เรามุ่งทำให้เรื่องการเงินและการลงทุนเป็นเรื่องที่นำไปใช้ได้จริงสำหรับนักศึกษาทุกคน ผ่านกิจกรรมการเรียนรู้ การวิเคราะห์หุ้น และการแข่งขัน พร้อมเชื่อมสมาชิกเข้ากับผู้คนและโอกาสในตลาดทุนไทย",
    },
    ibmp: {
      pill: "IBMP · มหาวิทยาลัยธรรมศาสตร์",
      about: "IBMP Investment Club คือชุมชนที่ตั้งใจทำให้ความรู้ด้านการลงทุนเข้าถึงง่ายและเข้าใจได้สำหรับทุกคน ผ่านการเรียนรู้ การทำงานร่วมกัน และประสบการณ์จริง เราช่วยให้นักศึกษาพัฒนาทักษะการลงทุน เข้าใจโลกการเงิน และเติบโตไปด้วยกันในฐานะนักลงทุนที่มีความรู้",
    },
    recap: {
      pill: "CLUB HIGHLIGHTS", title: "กิจกรรมของ KIC และ IBMPIC",
      sub: "ตัวอย่างกิจกรรมที่สองชมรมจัดขึ้นตลอดปี", canva: "ดู Recap ทั้งหมดของ IBMPIC บน Canva ↗",
    },
  },
  footer: {
    title: "ติดต่อเรา", tiscPill: "งาน TISC", tisc: "LinkedIn ของงาน", kic: "LinkedIn ของ KIC", ibmp: "LinkedIn ของ IBMPIC",
    rights: "© 2026 TISC – Thailand Intercollegiate Stock Challenge. สงวนลิขสิทธิ์",
  },
};

const en = {
  meta: {
    title: "TISC 2026 – Thailand Intercollegiate Stock Challenge",
    desc: "TISC – Thailand Intercollegiate Stock Challenge: a nationwide university stock pitch competition organized by Kasetsart Investment Club (KIC) and IBMP Investment Club.",
    statistic: "Statistic · TISC 2026",
    team: "Our Team · TISC 2026",
  },
  nav: { home: "HOME", statistic: "STATISTIC", team: "OUR TEAM", contact: "CONTACT", skip: "Skip to content", menu: "Open menu", switchTo: "เปลี่ยนเป็นภาษาไทย", toTop: "Back to top" },
  hero: {
    eyebrow: "THAILAND INTERCOLLEGIATE STOCK CHALLENGE",
    lead: "A nationwide university stock pitch competition where students sharpen their analytical skills and present investment ideas like professionals.",
    results: "See the results", photos: "View photos", presented: "Presented by",
  },
  overview: {
    pill: "Overview",
    p: [
      "TISC (Thailand Intercollegiate Stock Challenge) is a nationwide stock pitch competition open to university students across Thailand. The competition tests participants on stock market knowledge, financial analysis, and pitching skills, challenging them to research, evaluate, and present original investment ideas.",
      "Under the vision “Invest Intelligently, Lead Globally,” TISC gives students the opportunity to practice analytical thinking and communicate investment perspectives through a Stock Pitch format modeled closely on real industry standards. The competition is designed to help participants build the practical skills needed to pursue careers in finance and capital markets.",
      "TISC 2026 is co-hosted by the Kasetsart Investment Club (Kasetsart University) and the IBMP Investment Club (Thammasat University).",
    ],
    applicants: "Total applicants", teams: "Total teams", unis: "Universities", tracks: "Competition tracks",
  },
  tracks: {
    pill: "Competition Tracks", title: "Competition Tracks",
    sub: "Each team competes in one track and pitches to a panel of industry judges.",
    A: { name: "Depositary Receipt (DR)", desc: "Analyze and pitch a foreign stock through a Depositary Receipt traded on the Stock Exchange of Thailand." },
    B: { name: "SET-Listed Thai Stock", desc: "Analyze and pitch a Thai stock listed on the Stock Exchange of Thailand (SET)." },
    steps: [
      ["Research", "Study the company, its industry and its financial statements"],
      ["Valuation", "Value the business and build the team’s investment view"],
      ["Pitch", "Present to the judges and handle Q&A like a professional"],
      ["Awards", "Winner · 1st & 2nd Runner-up · Honorable Mention in each track"],
    ],
  },
  gallery: {
    pill: "Atmosphere", title: "Competition Gallery",
    sub: "The energy and intensity of each track · Click a photo to enlarge",
    photos: n => `${n} photos`, empty: "Photos from this track are coming soon",
    view: "View photo", close: "Close", prev: "Previous photo", next: "Next photo", dialog: "Photo viewer",
  },
  org: {
    pill: "Organizers", title: "Organized By", sub: "TISC is a collaboration between two university investment clubs",
    ku: "Kasetsart University", tu: "Thammasat University", visit: "Visit the club",
  },
  spons: { pill: "Sponsors", title: "Sponsors", main: "Presented by", rest: "Supported by" },
  stat: {
    title: "Statistic", hl: "The competition in numbers", sub: "Where the competitors came from, and how selective the final 10 was",
    unisPill: "PARTICIPATING UNIVERSITIES", unisTitle: n => `Competitors from ${n} institutions nationwide`,
    unisSub: (pax, teams) => `${pax} applicants in ${teams} teams, ordered by number of applicants`,
    paxN: n => `${n} pax`, teamsN: n => `${n} teams`, others: n => `+${n} more institutions`,
    topPill: "FINAL 10", topTitle: n => `The final ${n}`, topSub: n => `Selected from all ${n} registered teams`,
    topOf: "of all registered teams", topNote: (n, t, k) => `${n} of ${t} teams · roughly 1 in ${k}`,
    lgTop: n => `Final ${n} teams`, lgRest: n => `${n} other teams`,
  },
  team: {
    title: "Our Team", hl: "The clubs behind TISC 2026", sub: "TISC is organized by Kasetsart Investment Club and IBMP Investment Club",
    kic: {
      pill: "KIC · KASETSART UNIVERSITY",
      about: "Kasetsart Investment Club (KIC) is a student investment community at Kasetsart University. We aim to make finance and investing practical for every student through learning sessions, stock research, and competitions — and to connect members with the people and opportunities of Thailand’s capital market.",
    },
    ibmp: {
      pill: "IBMP · THAMMASAT UNIVERSITY",
      about: "IBMP Investment Club is a community dedicated to making investment knowledge accessible and understandable to everyone. Through learning, collaboration, and hands-on experiences, we empower students to develop their investment skills, gain financial insights, and grow together as informed investors.",
    },
    recap: {
      pill: "CLUB HIGHLIGHTS", title: "What KIC & IBMPIC do",
      sub: "A taste of the activities both clubs run throughout the year", canva: "See the full IBMPIC recap on Canva ↗",
    },
  },
  footer: {
    title: "Contact Us", tiscPill: "TISC", tisc: "TISC on LinkedIn", kic: "KIC on LinkedIn", ibmp: "IBMPIC on LinkedIn",
    rights: "© 2026 TISC – Thailand Intercollegiate Stock Challenge. All rights reserved.",
  },
};

export const DICT = { th, en };
export const getDict = lang => DICT[lang] ?? th;
