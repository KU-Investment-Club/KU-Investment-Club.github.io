import Link from "next/link";
import { ACTS, LINKS } from "@/lib/data";
import { getDict, t } from "@/lib/i18n";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: getDict(lang).meta.team, alternates: { canonical: `/${lang}/our-team/`, languages: { th: "/th/our-team/", en: "/en/our-team/" } } };
}

export default async function OurTeam({ params }) {
  const { lang } = await params;
  const D = getDict(lang), d = D.team;

  return (
    <>
      <div className="phead"><div className="wrap">
        <div className="crumb"><Link href={`/${lang}/`}>Home</Link> / Our Team</div>
        <h1>{d.title}<i>.</i></h1>
        <span className="hl">{d.hl}</span>
        <p className="sub">{d.sub}</p>
        <div className="tabs"><a href="#kic">KIC</a><a href="#ibmp">IBMP</a><a href="#recap">Highlights</a></div>
      </div></div>

      <section id="kic"><div className="wrap club">
        <div>
          <span className="pill">{d.kic.pill}</span>
          <h2>Kasetsart Investment Club</h2>
          <p className="about">{d.kic.about}</p>
          <a className="btn" target="_blank" rel="noopener" href={LINKS.kic}>LinkedIn KIC ↗</a>
        </div>
        <div className="logo"><img src="/assets/kic-logo.png" alt="Kasetsart Investment Club logo" /></div>
      </div></section>

      <section id="ibmp" className="cream"><div className="wrap club">
        <div>
          <span className="pill">{d.ibmp.pill}</span>
          <h2>IBMP Investment Club</h2>
          <p className="about">{d.ibmp.about}</p>
          <a className="btn" target="_blank" rel="noopener" href={LINKS.ibmp}>LinkedIn IBMPIC ↗</a>
        </div>
        <div className="logo"><img src="/assets/ibmp-logo.png" alt="IBMP Investment Club logo" className="wide" /></div>
      </div></section>

      <section id="recap"><div className="wrap">
        <span className="pill">{d.recap.pill}</span>
        <h2>{d.recap.title}</h2>
        <p className="sub">{d.recap.sub}</p>
        <div className="acts">
          {ACTS.map(a => (
            <article className="act reveal" key={a.img}>
              <div className="act-img"><img src={`/assets/activities/${a.img}`} alt={t(a.title, lang)} loading="lazy" /></div>
              <div className="act-body">
                <span className={`pill${a.club === "IBMPIC" ? " o" : ""}`}>{a.club}</span>
                <h3>{t(a.title, lang)}</h3>
                <p>{t(a.desc, lang)}</p>
              </div>
            </article>
          ))}
        </div>
      </div></section>
    </>
  );
}
