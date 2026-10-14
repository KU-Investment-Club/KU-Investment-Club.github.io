import Link from "next/link";
import Gallery from "@/components/Gallery";
import { STATS, SPONSORS, SPONSORS_MAIN } from "@/lib/data";
import { getDict } from "@/lib/i18n";

const fmt = n => n.toLocaleString("en-US");
const Logo = ([n, f]) => <div title={n} key={f}><img src={`/assets/sponsors/${f}`} alt={n} loading="lazy" /></div>;

export default async function Home({ params }) {
  const { lang } = await params;
  const D = getDict(lang), base = `/${lang}`;
  const tick = [["APPLICANTS", STATS.applicants], ["TEAMS", STATS.teams], ["UNIVERSITIES", STATS.universities],
    ["FINALISTS", STATS.finalists], ["TRACK A", "DR"], ["TRACK B", "SET"], ["TISC", 2026]];
  const tape = tick.map(([k, v]) => <span key={k}>{k} <b>{typeof v === "number" ? fmt(v) : v}</b> <i>▲</i></span>);

  return (
    <>
      <div className="hero">
        <div className="wrap">
          <small className="eyebrow">{D.hero.eyebrow}</small>
          <h1>TISC <span>2026</span></h1>
          <p className="motto">“Invest Intelligently, Lead Globally”</p>
          <p>{D.hero.lead}</p>
          <div className="btns">
            <Link className="btn o" href={`${base}/statistic/`}>{D.hero.results}</Link>
            <a className="btn ghost" href="#gallery">{D.hero.photos}</a>
          </div>
          <p className="presented">{D.hero.presented} <img src="/assets/sponsors/set.png" alt="SET" /><img src="/assets/sponsors/bualuang.png" alt="Bualuang Securities" /></p>
        </div>
      </div>
      <div className="ticker" aria-hidden="true"><div className="tape">{tape}{tape}</div></div>

      <section id="overview"><div className="wrap center overview reveal">
        <span className="pill">{D.overview.pill}</span>
        <h2>TISC – Thailand Intercollegiate Stock Challenge</h2>
        {D.overview.p.map((p, i) => <p key={i}>{p}</p>)}
        <div className="stats">
          {[[STATS.applicants, D.overview.applicants], [STATS.teams, D.overview.teams], [STATS.universities, D.overview.unis]].map(([n, l]) => (
            <div className="stat" key={l}><b data-count={n}>{fmt(n)}</b><span>{l}</span></div>
          ))}
          <div className="stat"><b className="o">Track A&amp;B</b><span>{D.overview.tracks}</span></div>
        </div>
      </div></section>

      <section id="tracks" className="cream"><div className="wrap">
        <div className="center reveal">
          <span className="pill">{D.tracks.pill}</span>
          <h2>{D.tracks.title}</h2>
          <p className="sub">{D.tracks.sub}</p>
        </div>
        <div className="tracks">
          {["A", "B"].map(k => (
            <article key={k} className={`track reveal${k === "B" ? " b" : ""}`}><span className="tag">TRACK {k}</span>
              <h3>{D.tracks[k].name}</h3><p>{D.tracks[k].desc}</p></article>
          ))}
        </div>
        <div className="steps reveal">
          {D.tracks.steps.map(([s, t], i) => <div key={s}><b>0{i + 1}</b><strong>{s}</strong><span>{t}</span></div>)}
        </div>
      </div></section>

      <section id="gallery" className="dark"><div className="wrap">
        <div className="reveal">
          <span className="pill o">{D.gallery.pill}</span>
          <h2>{D.gallery.title}</h2>
          <p className="sub">{D.gallery.sub}</p>
        </div>
        <Gallery lang={lang} />
      </div></section>

      <section id="organizers"><div className="wrap center">
        <div className="reveal">
          <span className="pill">{D.org.pill}</span>
          <h2>{D.org.title}</h2>
          <p className="sub">{D.org.sub}</p>
        </div>
        <div className="grid2">
          <div className="card reveal"><img src="/assets/kic-logo.png" alt="Kasetsart Investment Club" /><h3>KIC</h3>
            <p><b>Kasetsart Investment Club</b><br />{D.org.ku}</p><Link className="btn" href={`${base}/our-team/#kic`}>{D.org.visit}</Link></div>
          <div className="card reveal"><img src="/assets/ibmp-logo.png" alt="IBMP Investment Club" className="wide" /><h3>IBMPIC</h3>
            <p><b>IBMP Investment Club</b><br />{D.org.tu}</p><Link className="btn o" href={`${base}/our-team/#ibmp`}>{D.org.visit}</Link></div>
        </div>
      </div></section>

      <section id="sponsors" className="cream"><div className="wrap center">
        <div className="reveal"><span className="pill">{D.spons.pill}</span><h2>{D.spons.title}</h2></div>
        <h3 className="tier">{D.spons.main}</h3>
        <div className="spons main">{SPONSORS_MAIN.map(Logo)}</div>
        <h3 className="tier">{D.spons.rest}</h3>
        <div className="spons">{SPONSORS.map(Logo)}</div>
      </div></section>
    </>
  );
}
