import PageHero from "@/components/PageHero";
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
    : <b>{id.toUpperCase()}</b>;
}

export default async function Statistic({ params }) {
  const { lang } = await params;
  const d = getDict(lang).stat;
  const name = id => UNI_NAMES[id]?.[lang] ?? id;
  const short = id => UNI_NAMES[id]?.short?.[lang] ?? name(id);

  const byPax = [...UNIS].sort((a, b) => b.pax - a.pax);

  const top = STATS.topTeams, rest = STATS.teams - top;
  const note = d.topNote(top, STATS.teams, Math.round(STATS.teams / top));

  return (
    <>
      <PageHero img="/assets/gallery/o1.jpg" title={d.title} hl={d.hl} sub={d.sub} />

      {/* ===== 1. มาจากกี่มหาวิทยาลัย ===== */}
      <section className="sec"><div className="inner">
        <div className="head">
          <h2>{d.unisTitle(STATS.universities)}</h2>
          <p>{d.unisSub(STATS.applicants, STATS.teams)}</p>
        </div>
        <ul className="ulogos">
          {byPax.map(u => (
            <li key={u.id} title={`${name(u.id)} · ${d.paxN(u.pax)} · ${d.teamsN(u.teams)}`}>
              <div className="ulogo"><Logo id={u.id} name={name(u.id)} /></div>
              <strong>{short(u.id)}</strong>
              <small>{d.paxN(u.pax)}</small>
            </li>
          ))}
          {UNIS_OTHER.count > 0 && <li><div className="ulogo"><b>+{UNIS_OTHER.count}</b></div><strong>{d.others(UNIS_OTHER.count)}</strong><small>{d.paxN(UNIS_OTHER.pax)}</small></li>}
        </ul>
      </div></section>

      {/* ===== 2. 10 ทีมสุดท้าย คิดเป็นกี่ % ของทีมทั้งหมด ===== */}
      <section className="sec cream"><div className="inner">
        <div className="head">
          <h2>{d.topTitle(top)}</h2>
          <p>{d.topSub(STATS.teams)}</p>
        </div>
        <div className="topx">
          <div className="topx-num">
            <b>{pct(top, STATS.teams)}<i>%</i></b>
            <strong>{d.topOf}</strong>
            <small>{note}</small>
          </div>
          <figure aria-label={note}>
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
