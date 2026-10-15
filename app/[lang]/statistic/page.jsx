import Link from "next/link";
import { STATS, UNIS, UNIS_OTHER, UNI_NAMES, UNI_LOGOS } from "@/lib/data";
import { getDict } from "@/lib/i18n";

const pct = (a, b) => (b ? a / b * 100 : 0).toFixed(1);

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getDict(lang).meta.statistic, alternates: { canonical: `/${lang}/statistic/`, languages: { th: "/th/statistic/", en: "/en/statistic/" } } };
}

function Logo({ id, name }) {
  return UNI_LOGOS[id]
    ? <img src={`/assets/unis/${UNI_LOGOS[id]}`} alt={name} loading="lazy" />
    : <span className="ulogo-txt">{id.toUpperCase()}</span>;
}

export default async function Statistic({ params }) {
  const { lang } = await params;
  const d = getDict(lang).stat;
  const name = id => UNI_NAMES[id]?.[lang] ?? id;
  const short = id => UNI_NAMES[id]?.short?.[lang] ?? name(id);

  const byPax = [...UNIS].sort((a, b) => b.pax - a.pax);

  const top = STATS.topTeams, rest = STATS.teams - top;

  return (
    <>
      <div className="phead"><div className="wrap">
        <div className="crumb"><Link href={`/${lang}/`}>Home</Link> / Statistic</div>
        <h1>{d.title}<i>.</i></h1>
        <span className="hl">{d.hl}</span>
        <p className="sub">{d.sub}</p>
      </div></div>

      {/* ===== 1. มาจากกี่มหาวิทยาลัย ===== */}
      <section><div className="wrap center">
        <span className="pill">{d.unisPill}</span>
        <h2>{d.unisTitle(STATS.universities)}</h2>
        <p className="sub">{d.unisSub(STATS.applicants, STATS.teams)}</p>
        <ul className="ulogos">
          {byPax.map(u => (
            <li key={u.id} title={`${name(u.id)} · ${d.paxN(u.pax)} · ${d.teamsN(u.teams)}`}>
              <div className="ulogo"><Logo id={u.id} name={name(u.id)} /></div>
              <strong>{short(u.id)}</strong>
              <small>{d.paxN(u.pax)}</small>
            </li>
          ))}
          {UNIS_OTHER.count > 0 && <li className="more"><div className="ulogo"><b>+{UNIS_OTHER.count}</b></div><strong>{d.others(UNIS_OTHER.count)}</strong><small>{d.paxN(UNIS_OTHER.pax)}</small></li>}
        </ul>
      </div></section>

      {/* ===== 2. 10 ทีมสุดท้าย คิดเป็นกี่ % ของทีมทั้งหมด ===== */}
      <section className="cream"><div className="wrap">
        <span className="pill">{d.topPill}</span>
        <h2>{d.topTitle(top)}</h2>
        <p className="sub">{d.topSub(STATS.teams)}</p>
        <div className="topx">
          <div className="topx-num">
            <b>{pct(top, STATS.teams)}<i>%</i></b>
            <strong>{d.topOf}</strong>
            <small>{d.topNote(top, STATS.teams, Math.round(STATS.teams / top))}</small>
          </div>
          <figure className="topx-chart" aria-label={d.topNote(top, STATS.teams, Math.round(STATS.teams / top))}>
            <div className="waffle" aria-hidden="true">
              {Array.from({ length: STATS.teams }, (_, i) => <i key={i} className={i < top ? "on" : undefined} />)}
            </div>
            <figcaption className="lg">
              <span><s className="on" />{d.lgTop(top)}</span>
              <span><s />{d.lgRest(rest)}</span>
            </figcaption>
          </figure>
        </div>
      </div></section>
    </>
  );
}
