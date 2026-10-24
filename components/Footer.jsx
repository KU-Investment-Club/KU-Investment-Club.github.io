import { getDict } from "@/lib/i18n";
import { LINKS } from "@/lib/data";

export default function Footer({ lang }) {
  const d = getDict(lang).footer;
  const cards = [
    [d.tiscPill, "Thailand Intercollegiate Stock Challenge", LINKS.tisc, d.tisc, "tisc-logo.png"],
    ["KIC CLUB", "Kasetsart Investment Club", LINKS.kic, d.kic, "kic-logo.png"],
    ["IBMP CLUB", "IBMP Investment Club", LINKS.ibmp, d.ibmp, "ibmp-logo.png"],
  ];
  return (
    <footer id="contact"><div className="inner">
      <h2>{d.title}</h2>
      <div className="fc">
        {cards.map(([tag, name, href, label, logo]) => (
          <div className="fcard" key={href}>
            <div className="flogo"><img src={`/assets/${logo}`} alt="" loading="lazy" className={logo === "kic-logo.png" ? "tall" : undefined} /></div>
            <small>{tag}</small>
            <h3>{name}</h3>
            <a target="_blank" rel="noopener" href={href}>{label} ↗</a>
          </div>
        ))}
      </div>
      <div className="copy"><span>{d.rights}</span><span>Organized by KIC × IBMPIC · <a href="https://tiscofficial.com/">tiscofficial.com</a></span></div>
    </div></footer>
  );
}
