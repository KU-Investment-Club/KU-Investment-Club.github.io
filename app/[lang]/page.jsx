import Link from "next/link";
import Gallery from "@/components/Gallery";
import { GALLERY, SPONSORS, SPONSORS_MAIN } from "@/lib/data";
import { getDict } from "@/lib/i18n";

const Logo = ([n, f]) => <div title={n} key={f}><img src={`/assets/sponsors/${f}`} alt={n} loading="lazy" /></div>;

export default async function Home({ params }) {
  const { lang } = await params;
  const D = getDict(lang), base = `/${lang}`;

  return (
    <>
      <section className="hero">
        <img src="/assets/hero.jpg" alt="" fetchPriority="high" />
        <div className="hero-in">
          <p className="eyebrow">{D.hero.eyebrow}</p>
          <h1>TISC <span>2026</span></h1>
          <p className="motto">“Invest Intelligently, Lead Globally”</p>
          <p className="lead">{D.hero.lead}</p>
          <Link className="btn" href={`${base}/statistic/`}>{D.hero.results}</Link>
        </div>
      </section>

      <section id="overview" className="sec"><div className="overview">
        <h2>TISC – Thailand Intercollegiate Stock Challenge</h2>
        <div className="rule" />
        {D.overview.p.map((p, i) => <p key={i}>{p}</p>)}
      </div></section>

      <section id="tracks" className="sec cream"><div className="inner">
        <div className="head">
          <h2>{D.tracks.title}</h2>
          <p>{D.tracks.sub}</p>
        </div>
        <div className="tracks">
          {["A", "B"].map(k => (
            <article key={k} className={`track${k === "B" ? " b" : ""}`}>
              <div className="track-img">
                <img src={`/assets/gallery/${GALLERY[k][0]}.jpg`} alt={`Track ${k}`} loading="lazy" />
                <span className="tag">TRACK {k}</span>
              </div>
              <div className="track-body">
                <b>{k}</b>
                <div><h3>{D.tracks[k].name}</h3><p>{D.tracks[k].desc}</p></div>
              </div>
            </article>
          ))}
        </div>
        <ol className="steps">
          {D.tracks.steps.map(([s, t], i) => <li key={s}><b>0{i + 1}</b><strong>{s}</strong><span>{t}</span></li>)}
        </ol>
      </div></section>

      <section id="gallery" className="sec dark"><div className="gallery">
        <div className="head">
          <h2>{D.gallery.title}</h2>
          <p>{D.gallery.sub}</p>
        </div>
        <Gallery lang={lang} />
      </div></section>

      <section id="organizers" className="sec">
        <div className="head">
          <h2>{D.org.title}</h2>
          <p>{D.org.sub}</p>
        </div>
        <div className="orgs">
          {[["kic", "kic-logo.png", "KIC", "Kasetsart Investment Club", D.org.ku, ""],
            ["ibmp", "ibmp-logo.png", "IBMPIC", "IBMP Investment Club", D.org.tu, "wide"]].map(([id, logo, short, full, uni, cls]) => (
            <div className="org" key={id}>
              <div className="org-logo"><img src={`/assets/${logo}`} alt={full} className={cls || undefined} /></div>
              <h3>{short}</h3>
              <p>{full}<br />{uni}</p>
              <Link className="ulink" href={`${base}/our-team/#${id}`}>{D.org.visit} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="sponsors" className="sec spons"><div className="inner">
        <h2 className="h2">{D.spons.title}</h2>
        <h3 className="tier">{D.spons.main}</h3>
        <div className="sp-main">{SPONSORS_MAIN.map(Logo)}</div>
        <div className="divider" />
        <h3 className="tier">{D.spons.rest}</h3>
        <div className="sp-rest">{SPONSORS.map(Logo)}</div>
      </div></section>
    </>
  );
}
