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
    title: "Statistic", hl: "ภาพรวมการแข่งขันในมุมของข้อมูล", sub: "สถิติผู้สมัคร เส้นทางสู่รอบชิง มหาวิทยาลัย ชั้นปี คณะ และดัชนีชี้วัดของรอบ Finalist",
    kpi: {
      applicants: ["ผู้สมัครทั้งหมด", "คน (อัตราส่วน 100%)"],
      teams: ["จำนวนทีมทั้งหมด", a => `ทีม (เฉลี่ย ${a} คน/ทีม)`],
      unis: ["สถาบันการศึกษา", "สถาบันทั่วประเทศ"],
      semi: ["ผ่านรอบรอง (Semifinal)", n => `ทีม (Qualified ${n} ทีม)`],
      finalists: ["รอบชิงชนะเลิศ (Finalist)", "ทีม (2 Tracks • 4 Divisions)"],
    },
    funnelPill: "COMPETITION FUNNEL", funnelTitle: "เส้นทางสู่รอบชิงชนะเลิศ", funnelSub: "จำนวนทีมและผู้เข้าแข่งขันที่ผ่านในแต่ละรอบ (สัดส่วนเทียบกับผู้สมัครทั้งหมด)",
    stage: "ขั้นตอนการแข่งขัน", teams: "ทีม", pax: "คน", teamPct: "สัดส่วนทีม", paxPct: "สัดส่วนคน",
    structTitle: "โครงสร้างรอบชิงชนะเลิศ", div: (i, n) => `Div ${i}: ${n} ทีม`, teamsN: n => `${n} ทีม`, paxN: n => `${n} คน`,
    finalTotal: "รวม Finalists ทั้ง 2 แทร็ค", finalRate: "อัตราการเข้าชิง", semiRate: "อัตราผ่านเข้ารอบรอง", ofApplicants: "ของทีมสมัคร",
    unisPill: "PARTICIPATING UNIVERSITIES", unisTitle: "ผู้เข้าแข่งขันมาจากที่ไหนบ้าง?", unisSub: "จำนวนผู้สมัครและจำนวนทีมแยกตามมหาวิทยาลัย",
    tableTitle: "มหาวิทยาลัยที่เข้าร่วม (Top 5)", uni: "มหาวิทยาลัย", others: n => `มหาวิทยาลัยอื่น ๆ (${n} แห่ง)`, total: "รวมทั้งหมด", viewAll: "ดูมหาวิทยาลัยทั้งหมด",
    chartTitle: "สัดส่วนผู้สมัครแยกตามมหาวิทยาลัย", lgPax: "ผู้สมัคร (คน)",
    profilePill: "PARTICIPANT PROFILE", profileTitle: "ผู้สมัครเป็นใครบ้าง?", profileSub: "แยกตามระดับชั้นปีและกลุ่มคณะวิชา (teams = จำนวนทีมที่มีสมาชิกจากกลุ่มนั้น)",
    yearTitle: "ระดับชั้นปี", year: "ชั้นปี", facTitle: "กลุ่มคณะวิชา", fac: "คณะ",
    finalPill: "FINALIST KPI DASHBOARD", finalTitle: "การวิเคราะห์รอบ Finalist", finalSub: "ดัชนีชี้วัดเชิงกลยุทธ์ของ 20 ทีมที่เข้าชิง • ข้ามแทร็คและข้ามสถาบัน",
    kpiTitle: "ดัชนีชี้วัดเชิงกลยุทธ์", kpiDim: "ดัชนี", actual: "สถิติจริง", bench: "เกณฑ์เปรียบเทียบ", status: "สถานะ",
    instTitle: "ผู้เข้าชิงแยกตามสถาบัน", inst: "สถาบัน", finalTotalRow: n => `รวม Finalists ทั้งหมด (ทีมข้ามสถาบัน ${n} ทีม)`,
    statuses: { "Optimal": "เหมาะสม", "Target Met": "ถึงเป้าหมาย", "Balanced": "สมดุล", "Strong": "แข็งแกร่ง", "Healthy": "อยู่ในเกณฑ์ดี", "High Stability": "เสถียรสูง", "Diversified": "หลากหลาย" },
    winPill: "WINNERS & TRACKS", winTitle: "มหาวิทยาลัยที่ชนะ & สายการแข่งขัน", winSub: "สัดส่วนทีมที่ได้รับรางวัลในแต่ละ Track แยกตามมหาวิทยาลัย",
    awardTeams: "ทีมรางวัล", share: "สัดส่วน", base: n => `ฐานคำนวณ: ${n} ทีมที่ได้รับรางวัล · รวม 100%`,
    modal: {
      title: "มหาวิทยาลัยที่เข้าร่วมทั้งหมด", search: "ค้นหามหาวิทยาลัย...", close: "ปิด ✕", prev: "ก่อนหน้า", next: "ถัดไป",
      none: "ไม่พบข้อมูล", page: (p, n, c) => `หน้า ${p} จาก ${n} · ${c} สถาบัน`,
    },
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
    title: "Statistic", hl: "The competition in numbers", sub: "Applicants, the road to the final, universities, year of study, faculties and finalist KPIs",
    kpi: {
      applicants: ["Total applicants", "participants (100%)"],
      teams: ["Total teams", a => `teams (avg. ${a} per team)`],
      unis: ["Universities", "institutions nationwide"],
      semi: ["Semifinalists", n => `teams (${n} qualified)`],
      finalists: ["Finalists", "teams (2 tracks • 4 divisions)"],
    },
    funnelPill: "COMPETITION FUNNEL", funnelTitle: "The road to the final", funnelSub: "Teams and participants advancing through each round (share of all applicants)",
    stage: "Stage", teams: "Teams", pax: "Pax", teamPct: "Team %", paxPct: "Pax %",
    structTitle: "Final round structure", div: (i, n) => `Div ${i}: ${n} teams`, teamsN: n => `${n} teams`, paxN: n => `${n} pax`,
    finalTotal: "Finalists, both tracks", finalRate: "Finalist rate", semiRate: "Semifinal rate", ofApplicants: "of registered teams",
    unisPill: "PARTICIPATING UNIVERSITIES", unisTitle: "Where did the competitors come from?", unisSub: "Applicants and teams by university",
    tableTitle: "Participating universities (top 5)", uni: "University", others: n => `Other universities (${n})`, total: "Total", viewAll: "View all universities",
    chartTitle: "Applicants by university", lgPax: "Applicants",
    profilePill: "PARTICIPANT PROFILE", profileTitle: "Who applied?", profileSub: "By year of study and faculty (teams = teams with at least one member from that group)",
    yearTitle: "Year of study", year: "Year", facTitle: "Top faculties", fac: "Faculty",
    finalPill: "FINALIST KPI DASHBOARD", finalTitle: "Finalist analytics", finalSub: "Strategic indicators for the 20 finalist teams • across tracks and institutions",
    kpiTitle: "Strategic KPIs", kpiDim: "Indicator", actual: "Actual", bench: "Benchmark", status: "Status",
    instTitle: "Finalists by institution", inst: "Institution", finalTotalRow: n => `All finalists (${n} cross-institution teams)`,
    statuses: {},
    winPill: "WINNERS & TRACKS", winTitle: "Winning universities by track", winSub: "Share of award-winning teams in each track, by university",
    awardTeams: "Award teams", share: "Share", base: n => `Based on ${n} award-winning teams · totals 100%`,
    modal: {
      title: "All participating universities", search: "Search universities...", close: "Close ✕", prev: "Previous", next: "Next",
      none: "No results", page: (p, n, c) => `Page ${p} of ${n} · ${c} institutions`,
    },
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
