import Link from "next/link";
import UniTable from "@/components/UniTable";
import {
  STATS, FUNNEL, FINAL_TRACKS, UNIS, UNIS_OTHER, UNI_NAMES, YEARS, FACULTIES,
  FINAL_CARDS, FINAL_KPIS, FINAL_BY_INST, FINAL_CROSS_TEAMS, AWARDS,
} from "@/lib/data";
import { getDict, t } from "@/lib/i18n";

const fmt = n => n.toLocaleString("en-US");
const pct = (a, b) => b ? +(a / b * 100).toFixed(1) : 0;
const pctS = (a, b) => pct(a, b).toFixed(1) + "%";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getDict(lang).meta.statistic, alternates: { canonical: `/${lang}/statistic/`, languages: { th: "/th/statistic/", en: "/en/statistic/" } } };
}

/** ตาราง pax / % / teams พร้อม meter (ใช้กับชั้นปีและคณะ) */
function ShareTable({ title, head, rows, lang, d }) {
  const sum = rows.reduce((s, r) => s + r.pax, 0);
  return (
    <div className="box"><h3>{title}</h3>
      <table>
        <thead><tr><th>{head}</th><th className="r">{d.pax}</th><th className="r">%</th><th className="r">{d.teams}</th></tr></thead>
        <tbody>{rows.map(r => (
          <tr key={t(r.label, "en")}><td>{t(r.label, lang)}<span className="meter"><i style={{ width: `${pct(r.pax, sum)}%` }} /></span></td>
            <td className="r"><b>{fmt(r.pax)}</b></td><td className="r">{pctS(r.pax, sum)}</td><td className="r">{r.teams ?? "-"}</td></tr>
        ))}</tbody>
        <tfoot><tr><td>{d.total}</td><td className="r">{fmt(sum)}</td><td className="r">100.0%</td><td className="r">-</td></tr></tfoot>
      </table>
    </div>
  );
}

export default async function Statistic({ params }) {
  const { lang } = await params;
  const D = getDict(lang), d = D.stat, k = d.kpi;
  const name = id => UNI_NAMES[id]?.[lang] ?? id;
  const short = id => UNI_NAMES[id]?.short?.[lang] ?? name(id);
  const status = s => d.statuses[s] ?? s;

  const kpis = [
    [fmt(STATS.applicants), k.applicants[0], k.applicants[1]],
    [fmt(STATS.teams), k.teams[0], k.teams[1]((STATS.applicants / STATS.teams).toFixed(2))],
    [fmt(STATS.universities), k.unis[0], k.unis[1]],
    [fmt(STATS.semifinalists), k.semi[0], k.semi[1](STATS.qualified)],
    [fmt(STATS.finalists), k.finalists[0], k.finalists[1]],
  ];
  const [all] = FUNNEL;
  const byPax = [...UNIS].sort((a, b) => b.pax - a.pax);
  const top = byPax.slice(0, 5);
  const restPax = STATS.applicants - top.reduce((s, u) => s + u.pax, 0);
  // ทีมข้ามสถาบันถูกนับในทุกมหาวิทยาลัยของสมาชิก ผลรวมรายมหาวิทยาลัยจึงมากกว่า STATS.teams
  const restTeams = byPax.slice(5).reduce((s, u) => s + u.teams, 0) + UNIS_OTHER.teams;
  const maxPax = byPax[0].pax;
  const finalPax = FINAL_BY_INST.reduce((s, r) => s + r[1], 0);

  return (
    <>
      <div className="phead"><div className="wrap">
        <div className="crumb"><Link href={`/${lang}/`}>Home</Link> / Statistic</div>
        <h1>{d.title}<i>.</i></h1>
        <span className="hl">{d.hl}</span>
        <p className="sub">{d.sub}</p>
        <div className="kpis five">{kpis.map(([b, s, m]) => <div className="kpi" key={s}><b>{b}</b><strong>{s}</strong><small>{m}</small></div>)}</div>
      </div></div>

      {/* ===== funnel ===== */}
      <section><div className="wrap">
        <span className="pill">{d.funnelPill}</span>
        <h2>{d.funnelTitle}</h2>
        <p className="sub">{d.funnelSub}</p>
        <div className="two">
          <div className="box">
            <table>
              <thead><tr><th>{d.stage}</th><th className="r">{d.teams}</th><th className="r">{d.teamPct}</th><th className="r">{d.pax}</th><th className="r">{d.paxPct}</th></tr></thead>
              <tbody>{FUNNEL.map((f, i) => (
                <tr key={i}><td><b className="num">{i + 1}</b>{t(f.stage, lang)}<span className="meter"><i style={{ width: `${pct(f.teams, all.teams)}%` }} /></span></td>
                  <td className="r"><b>{f.teams}</b></td><td className="r">{pctS(f.teams, all.teams)}</td>
                  <td className="r"><b>{f.pax}</b></td><td className="r">{pctS(f.pax, all.pax)}</td></tr>
              ))}</tbody>
            </table>
          </div>
          <div className="chart">
            <h3>{d.structTitle}</h3>
            <div className="ftracks">
              {FINAL_TRACKS.map(f => (
                <div className={`ftrack${f.track === "B" ? " b" : ""}`} key={f.track}>
                  <span className="tag">TRACK {f.track}</span>
                  <strong>{t(f.label, lang)}</strong>
                  <p><b>{d.teamsN(f.teams)}</b> · {d.paxN(f.pax)}</p>
                  <small>{f.divs.map((n, i) => d.div(i + 1, n)).join(" • ")}</small>
                </div>
              ))}
            </div>
            <ul className="facts">
              <li><span>{d.finalTotal}</span><b>{d.teamsN(STATS.finalists)} · {d.paxN(STATS.finalistPax)}</b></li>
              <li><span>{d.finalRate}</span><b>{pctS(STATS.finalists, STATS.teams)} <small>{d.ofApplicants}</small></b></li>
              <li><span>{d.semiRate}</span><b>{pctS(STATS.semifinalists, STATS.teams)} <small>{d.ofApplicants}</small></b></li>
            </ul>
          </div>
        </div>
      </div></section>

      {/* ===== universities ===== */}
      <section className="cream"><div className="wrap">
        <span className="pill">{d.unisPill}</span>
        <h2>{d.unisTitle}</h2>
        <p className="sub">{d.unisSub}</p>
        <div className="two">
          <div className="box"><h3>{d.tableTitle}</h3>
            <table>
              <thead><tr><th>{d.uni}</th><th className="r">{d.pax}</th><th className="r">%</th><th className="r">{d.teams}</th></tr></thead>
              <tbody>
                {top.map(u => <tr key={u.id}><td>{name(u.id)}</td><td className="r"><b>{u.pax}</b></td><td className="r">{pctS(u.pax, STATS.applicants)}</td><td className="r">{u.teams}</td></tr>)}
                <tr><td>{d.others(STATS.universities - top.length)}</td><td className="r"><b>{restPax}</b></td><td className="r">{pctS(restPax, STATS.applicants)}</td><td className="r">{restTeams}</td></tr>
              </tbody>
              <tfoot><tr><td>{d.total}</td><td className="r">{fmt(STATS.applicants)}</td><td className="r">100.0%</td><td className="r">{fmt(STATS.teams)}</td></tr></tfoot>
            </table>
            <UniTable lang={lang} />
          </div>
          <div className="chart"><h3>{d.chartTitle}</h3>
            <div className="lg"><span><s style={{ background: "var(--navy)" }} />{d.lgPax}</span></div>
            <div>
              {byPax.slice(0, 10).map(u => (
                <div className="bar" key={u.id}><span title={name(u.id)}>{short(u.id)}</span>
                  <div><i style={{ "--w": `${u.pax / maxPax * 100}%`, background: "var(--navy)" }} /></div>
                  <b>{u.pax}<em>{pctS(u.pax, STATS.applicants)}</em></b></div>
              ))}
            </div>
          </div>
        </div>
      </div></section>

      {/* ===== profile ===== */}
      <section><div className="wrap">
        <span className="pill">{d.profilePill}</span>
        <h2>{d.profileTitle}</h2>
        <p className="sub">{d.profileSub}</p>
        <div className="two even">
          <ShareTable title={d.yearTitle} head={d.year} rows={YEARS} lang={lang} d={d} />
          <ShareTable title={d.facTitle} head={d.fac} rows={FACULTIES} lang={lang} d={d} />
        </div>
      </div></section>

      {/* ===== finalist KPI dashboard ===== */}
      <section className="dark"><div className="wrap">
        <span className="pill o">{d.finalPill}</span>
        <h2>{d.finalTitle}</h2>
        <p className="sub">{d.finalSub}</p>
        <div className="fcards">
          {FINAL_CARDS.map(c => (
            <div className="fkpi" key={t(c.k, "en")}><strong>{t(c.k, lang)}</strong><b>{t(c.v, lang)}</b><small>{t(c.note, lang)}</small></div>
          ))}
        </div>
        <div className="awards">
          <div className="box wide"><h3>{d.kpiTitle}</h3>
            <div className="scroll"><table>
              <thead><tr><th>{d.kpiDim}</th><th className="r">{d.actual}</th><th className="r">{d.bench}</th><th className="r">{d.status}</th></tr></thead>
              <tbody>{FINAL_KPIS.map(([dim, act, bench, st], i) => (
                <tr key={i}><td>{i + 1}. {t(dim, lang)}</td><td className="r"><b>{t(act, lang)}</b></td><td className="r">{t(bench, lang)}</td>
                  <td className="r"><span className="status">{status(st)}</span></td></tr>
              ))}</tbody>
            </table></div>
          </div>
          <div className="box wide"><h3>{d.instTitle}</h3>
            <div className="scroll"><table>
              <thead><tr><th>{d.inst}</th><th className="r">{d.pax}</th><th className="r">%</th><th className="r">{d.teams}</th><th className="r">A | B</th></tr></thead>
              <tbody>{FINAL_BY_INST.map(([n, pax, teams, a, b]) => (
                <tr key={t(n, "en")}><td>{t(n, lang)}<span className="meter"><i style={{ width: `${pct(pax, finalPax)}%` }} /></span></td>
                  <td className="r"><b>{pax}</b></td><td className="r">{pctS(pax, finalPax)}</td><td className="r"><b>{teams}</b></td><td className="r">{a} | {b}</td></tr>
              ))}</tbody>
              <tfoot><tr><td>{d.finalTotalRow(FINAL_CROSS_TEAMS)}</td><td className="r">{finalPax}</td><td className="r">100.0%</td><td className="r">{STATS.finalists}</td><td className="r">-</td></tr></tfoot>
            </table></div>
          </div>
        </div>
      </div></section>

      {/* ===== awards ===== */}
      <section className="cream"><div className="wrap">
        <span className="pill">{d.winPill}</span>
        <h2>{d.winTitle}</h2>
        <p className="sub">{d.winSub}</p>
        <div className="awards">
          {Object.entries(AWARDS).map(([tk, v]) => {
            const sum = v.reduce((s, [, c]) => s + c, 0);
            return (
              <div className="box" key={tk}><h3>Track {tk} · {D.tracks[tk].name}</h3>
                <table><thead><tr><th>{d.uni}</th><th className="r">{d.awardTeams}</th><th className="r">{d.share}</th></tr></thead>
                  <tbody>{v.map(([id, c]) => (
                    <tr key={id}><td>{name(id)}<span className="meter"><i style={{ width: `${pct(c, sum)}%` }} /></span></td>
                      <td className="r"><b>{c}</b></td><td className="r"><b>{pct(c, sum)}%</b></td></tr>
                  ))}</tbody></table>
                <small>{d.base(sum)}</small></div>
            );
          })}
        </div>
      </div></section>
    </>
  );
}
