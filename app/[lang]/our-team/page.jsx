import PageHero from "@/components/PageHero";
import { ACTS, LINKS } from "@/lib/data";
import { getDict, t } from "@/lib/i18n";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getDict(lang).meta.team, alternates: { canonical: `/${lang}/our-team/`, languages: { th: "/th/our-team/", en: "/en/our-team/" } } };
}

export default async function OurTeam({ params }) {
  const { lang } = await params;
  const d = getDict(lang).team;
  const clubs = [
    { id: "kic", name: "Kasetsart Investment Club", ...d.kic, href: LINKS.kic, cta: "LinkedIn KIC ↗", logo: "kic-logo.png" },
    { id: "ibmp", name: "IBMP Investment Club", ...d.ibmp, href: LINKS.ibmp, cta: "LinkedIn IBMPIC ↗", logo: "ibmp-logo.png", rev: true },
  ];

  return (
    <>
      <PageHero img="/assets/gallery/o2.jpg" title={d.title} hl={d.hl} sub={d.sub} />
      <div className="tabs"><a href="#kic">KIC</a><a href="#ibmp">IBMP</a><a href="#recap">Highlights</a></div>

      {clubs.map(c => (
        <section id={c.id} key={c.id} className={`club${c.rev ? " rev cream" : ""}`}><div className="club-in">
          <div className="club-txt">
            <div className="kicker">{c.pill}</div>
            <h2>{c.name}</h2>
            <p>{c.about}</p>
            <a className="btn navy" target="_blank" rel="noopener" href={c.href}>{c.cta}</a>
          </div>
          <div className="club-logo"><img src={`/assets/${c.logo}`} alt={`${c.name} logo`} className={c.rev ? "wide" : undefined} /></div>
        </div></section>
      ))}

      <section id="recap" className="sec recap"><div className="inner">
        <div className="head">
          <h2>{d.recap.title}</h2>
          <p>{d.recap.sub}</p>
        </div>
        <div className="acts">
          {ACTS.map(a => (
            <article className="act" key={a.img}>
              <div className="act-img"><img src={`/assets/activities/${a.img}`} alt={t(a.title, lang)} loading="lazy" /></div>
              <div className="kicker">{a.club}</div>
              <h3>{t(a.title, lang)}</h3>
              <p>{t(a.desc, lang)}</p>
            </article>
          ))}
        </div>
      </div></section>
    </>
  );
}
