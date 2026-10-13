/* ================== helpers ================== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const fmt = n => n.toLocaleString("en-US");
const pct = (a, b) => b ? +(a / b * 100).toFixed(1) : 0;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/* ================== HOME ================== */
// stats (count-up when visible)
$("#home-stats").innerHTML = [
  [STATS.applicants, "ผู้สมัครทั้งหมด"],
  [STATS.teams, "จำนวนทีมทั้งหมด"],
  [STATS.universities, "สถาบันการศึกษา"],
].map(([n, l]) => `<div class="stat"><b data-count="${n}">${fmt(n)}</b><span>${l}</span></div>`).join("")
  + `<div class="stat"><b class="o">Track A&amp;B</b><span>สายการแข่งขัน</span></div>`;

// ticker tape (decorative)
const tick = [["APPLICANTS", STATS.applicants], ["TEAMS", STATS.teams], ["UNIVERSITIES", STATS.universities],
  ["FINALISTS", STATS.finalists], ["TRACK A", "DR"], ["TRACK B", "SET"], ["TISC", 2026]]
  .map(([k, v]) => `<span>${k} <b>${typeof v === "number" ? fmt(v) : v}</b> <i>▲</i></span>`).join("");
$("#tape").innerHTML = tick + tick;

// gallery with tabs
const galKeys = Object.keys(GALLERY).filter(k => GALLERY[k].length);
let galKey = galKeys[0], lbList = [], lbIdx = 0;
function drawGallery() {
  $("#gtabs").innerHTML = galKeys.map(k => `<button role="tab" aria-selected="${k === galKey}" data-g="${esc(k)}">${esc(k)} <small>${GALLERY[k].length}</small></button>`).join("");
  lbList = GALLERY[galKey].map((f, i) => ({ src: `assets/gallery/${f}.jpg`, cap: `${galKey} · ${i + 1}/${GALLERY[galKey].length}` }));
  $("#gal").innerHTML = lbList.map((p, i) => `<button class="ph${i === 0 ? " big" : ""}" data-i="${i}" aria-label="ดูภาพ ${esc(p.cap)}"><img src="${p.src}" alt="${esc(p.cap)}" loading="lazy"></button>`).join("");
}
$("#gtabs").onclick = e => { const b = e.target.closest("[data-g]"); if (b) { galKey = b.dataset.g; drawGallery(); } };
$("#gal").onclick = e => { const b = e.target.closest("[data-i]"); if (b) openLb(+b.dataset.i); };
if (galKeys.length) drawGallery(); else $("#gallery").hidden = true;

// lightbox
const lb = $("#lb");
function showLb() { const p = lbList[lbIdx]; $("#lb-img").src = p.src; $("#lb-img").alt = p.cap; $("#lb-cap").textContent = p.cap; }
function openLb(i) { lbIdx = i; showLb(); lb.showModal(); }
const stepLb = d => { lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLb(); };
$("#lb-prev").onclick = () => stepLb(-1);
$("#lb-next").onclick = () => stepLb(1);
$("#lb-x").onclick = () => lb.close();
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") stepLb(-1); if (e.key === "ArrowRight") stepLb(1); });

// sponsors
const logo = ([n, f]) => `<div title="${esc(n)}"><img src="assets/sponsors/${f}" alt="${esc(n)}" loading="lazy" onerror="this.replaceWith(this.alt)"></div>`;
$("#spons-main").innerHTML = SPONSORS_MAIN.map(logo).join("");
$("#spons").innerHTML = SPONSORS.map(logo).join("");

/* ================== OUR TEAM ================== */
$("#acts").innerHTML = ACTS.length
  ? ACTS.map(([t, f]) => `<article class="act"><div class="ph"><img src="assets/ibmp/${f}.jpg" alt="${esc(t)}" loading="lazy"></div><h3>${esc(t)}</h3></article>`).join("")
  : `<a class="act-empty" href="https://canva.link/enn3a3vr0wfddo9" target="_blank" rel="noopener">ดู Recap กิจกรรมทั้งหมดของ IBMPIC บน Canva ↗</a>`;

/* ================== STATISTIC ================== */
$("#kpis").innerHTML = [
  [fmt(STATS.universities), "มหาวิทยาลัยที่เข้าร่วม", "สถาบัน"],
  [fmt(STATS.teams), "ทีมที่ลงทะเบียน", `ทีม · จากผู้สมัครทั้งหมด ${fmt(STATS.applicants)} คน`],
  [fmt(STATS.finalists), "ทีมที่เข้าสู่รอบ Finalist", "ทีม"],
  [pct(STATS.finalists, STATS.teams) + "%", "อัตราเข้าสู่รอบ Finalist", "ทีม Finalist ÷ ทีมทั้งหมด"],
].map(([b, s, m]) => `<div class="kpi"><b>${b}</b><strong>${s}</strong><small>${m}</small></div>`).join("");

const byTeams = [...UNIS].sort((a, b) => b.teams - a.teams);
const topUnis = byTeams.slice(0, 5);
const rest = STATS.teams - topUnis.reduce((s, u) => s + u.teams, 0);
$("#top-rows").innerHTML = topUnis.map(u => `<tr><td>${esc(u.name)}</td><td class="r"><b>${u.teams}</b></td></tr>`).join("")
  + (rest > 0 ? `<tr><td>มหาวิทยาลัยอื่น ๆ</td><td class="r"><b>${rest}</b></td></tr>` : "");
$("#total").textContent = fmt(STATS.teams);

const max = Math.max(...UNIS.map(u => u.teams));
$("#chart").innerHTML = byTeams.slice(0, 8).map(u => `<div class="bar"><span title="${esc(u.name)}">${esc(u.short || u.name)}</span>
  <div><i style="--w:${u.teams / max * 100}%;background:var(--navy)"></i><i style="--w:${u.finalists / max * 100}%;background:var(--orange)"></i></div>
  <b>${u.teams}<em>${u.finalists}</em></b></div>`).join("");

$("#awards").innerHTML = Object.entries(AWARDS).map(([k, v]) => {
  const sum = v.reduce((s, [, c]) => s + c, 0);
  return `<div class="box"><h3>Track ${k} · ${k === "A" ? "Depositary Receipt" : "SET-Listed Thai Stock"}</h3>
  <table><thead><tr><th>มหาวิทยาลัย</th><th class="r">ทีมรางวัล</th><th class="r">สัดส่วน</th></tr></thead>
  <tbody>${v.map(([n, c]) => `<tr><td>${esc(n)}<span class="meter"><i style="width:${pct(c, sum)}%"></i></span></td><td class="r"><b>${c}</b></td><td class="r"><b>${pct(c, sum)}%</b></td></tr>`).join("")}</tbody></table>
  <small>ฐานคำนวณ: ${sum} ทีมที่ได้รับรางวัล · รวม 100%</small></div>`;
}).join("");

// modal: full university table (search + sort + pagination)
const dlg = $("#dlg"), PER = 10;
let page = 0, key = "teams", dir = -1, term = "";
function draw() {
  const d = UNIS.filter(u => u.name.includes(term))
    .sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0) * dir);
  const pages = Math.max(1, Math.ceil(d.length / PER));
  page = Math.min(page, pages - 1);
  $("#rows").innerHTML = d.slice(page * PER, page * PER + PER)
    .map(u => `<tr><td>${esc(u.name)}</td><td class="r">${u.teams}</td><td class="r">${u.finalists}</td></tr>`).join("")
    || `<tr><td colspan="3" class="center">ไม่พบข้อมูล</td></tr>`;
  $("#pg").textContent = `หน้า ${page + 1} จาก ${pages} · ${d.length} สถาบัน`;
  $("#prev").disabled = page === 0;
  $("#next").disabled = page >= pages - 1;
}
$("#open-all").onclick = () => { dlg.showModal(); draw(); };
$("#close").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
$("#q").oninput = e => { term = e.target.value.trim(); page = 0; draw(); };
$("#prev").onclick = () => { page--; draw(); };
$("#next").onclick = () => { page++; draw(); };
$$("th[data-k]").forEach(th => th.onclick = () => { const k = th.dataset.k; dir = key === k ? -dir : -1; key = k; draw(); });

/* ================== mobile nav ================== */
const burger = $("#burger");
const setNav = open => { document.body.classList.toggle("nav-open", open); burger.setAttribute("aria-expanded", open); };
burger.onclick = () => setNav(!document.body.classList.contains("nav-open"));
$("#nav").onclick = e => { if (e.target.closest("a")) setNav(false); };

/* ================== reveal + count-up ================== */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function countUp(el) {
  const end = +el.dataset.count, t0 = performance.now();
  const step = t => { const p = Math.min(1, (t - t0) / 1200); el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
if ("IntersectionObserver" in window && !reduce) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    e.target.querySelectorAll("[data-count]").forEach(countUp);
    io.unobserve(e.target);
  }), { threshold: .15 });
  $$(".reveal, .chart, .awards .box").forEach(el => io.observe(el));
} else $$(".reveal, .chart, .awards .box").forEach(el => el.classList.add("in"));

/* ================== router ==================
   #/ , #/statistic , #/our-team , #/our-team-ibmp  = หน้า
   #overview, #gallery, #contact ฯลฯ                 = เลื่อนไปยังส่วนนั้น */
const ROUTES = {
  "": ["p-home", "TISC 2026 – Thailand Intercollegiate Stock Challenge"],
  "statistic": ["p-statistic", "Statistic · TISC 2026"],
  "our-team": ["p-team", "Our Team · TISC 2026"],
  "our-team-ibmp": ["p-team", "Our Team · TISC 2026"],
};
let current = null;
function route() {
  const h = location.hash;
  const isPage = h === "" || h.startsWith("#/");
  const r = isPage ? h.replace(/^#\/?/, "") : null;
  const target = isPage ? null : document.getElementById(decodeURIComponent(h.slice(1)));
  // anchors inside another page (or footer) keep the current page; unknown hash → home
  let name = isPage ? (r in ROUTES ? r : "") : (current ?? "");
  if (target && !isPage) { const pg = target.closest(".page"); if (pg) name = Object.keys(ROUTES).find(k => ROUTES[k][0] === pg.id); }
  const [id, title] = ROUTES[name];
  const changed = current !== name;
  current = name;
  $$(".page").forEach(p => p.classList.toggle("on", p.id === id));
  const navKey = name.startsWith("our-team") ? "our-team" : name;
  $$("nav a[data-r]").forEach(a => a.classList.toggle("on", a.dataset.r === navKey));
  $$("nav a[data-r]").forEach(a => a.dataset.r === navKey ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  $$(".tabs a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + name));
  document.title = title;
  if (target) setTimeout(() => target.scrollIntoView(), 0);
  else if (name === "our-team-ibmp") setTimeout(() => $("#ibmp").scrollIntoView(), 0);
  else if (changed || isPage) window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
route();

// header shadow + back-to-top
addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", scrollY > 10);
  document.body.classList.toggle("far", scrollY > 900);
}, { passive: true });
