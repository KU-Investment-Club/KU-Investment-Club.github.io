import { getDict } from "@/lib/i18n";
import { LINKS } from "@/lib/data";

export default function Footer({ lang }) {
  const d = getDict(lang).footer;
  const cards = [
    ["pill o", d.tiscPill, <>Thailand Intercollegiate<br />Stock Challenge</>, LINKS.tisc, d.tisc, "tisc-logo.png", "TISC"],
    ["pill", "KIC CLUB", <>KIC<br />Kasetsart Investment Club</>, LINKS.kic, d.kic, "kic-logo.png", "Kasetsart Investment Club"],
    ["pill o", "IBMP CLUB", <>IBMP<br />Investment Club</>, LINKS.ibmp, d.ibmp, "ibmp-logo.png", "IBMP Investment Club"],
  ];
  return (
    <footer id="contact"><div className="wrap">
      <h2>{d.title}</h2>
      <div className="fc">
        {cards.map(([cls, pill, name, href, label, logo, alt]) => (
          <div className="fcard" key={href}>
            <div className="fhead">
              <div><span className={cls}>{pill}</span><h3>{name}</h3></div>
              <img className="flogo" src={`/assets/${logo}`} alt={alt} loading="lazy" />
            </div>
            <a target="_blank" rel="noopener" href={href}><b>in</b>{label}</a></div>
        ))}
      </div>
      <div className="copy"><span>{d.rights}</span><span>Organized by KIC × IBMPIC · <a href="https://tiscofficial.com/">tiscofficial.com</a></span></div>
    </div></footer>
  );
}
