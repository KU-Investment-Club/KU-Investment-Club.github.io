"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LANGS, getDict } from "@/lib/i18n";

export default function Header({ lang }) {
  const d = getDict(lang).nav;
  const path = usePathname() || `/${lang}/`;
  const rest = path.replace(/^\/(th|en)(?=\/|$)/, "") || "/"; // "/statistic/"
  const seg = rest.replace(/\//g, "");                         // "statistic"
  const [open, setOpen] = useState(false);

  useEffect(() => { document.body.classList.toggle("nav-open", open); }, [open]);
  useEffect(() => setOpen(false), [path]);

  const remember = l => { try { localStorage.setItem("lang", l); } catch {} };
  const items = [["", d.home], ["statistic", d.statistic], ["our-team", d.team]];

  return (
    <header id="top"><div className="wrap">
      <Link className="brand" href={`/${lang}/`}>
        <img src="/assets/tisc-logo.png" alt="TISC" />
        <span>THAILAND INTERCOLLEGIATE<br />STOCK CHALLENGE</span>
      </Link>
      <div className="hright">
        <div className="lang" role="group" aria-label="Language">
          {LANGS.map(l => (
            <Link key={l} href={`/${l}${rest}`} hrefLang={l} lang={l} onClick={() => remember(l)}
              className={l === lang ? "on" : undefined} aria-current={l === lang ? "true" : undefined}
              aria-label={l === lang ? undefined : d.switchTo}>{l.toUpperCase()}</Link>
          ))}
        </div>
        <button className="burger" aria-label={d.menu} aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}><i /><i /><i /></button>
      </div>
      <nav id="nav" aria-label="Main" onClick={e => { if (e.target.closest("a")) setOpen(false); }}>
        {items.map(([r, label]) => (
          <Link key={r} href={`/${lang}/${r ? r + "/" : ""}`} className={seg === r ? "on" : undefined}
            aria-current={seg === r ? "page" : undefined}>{label}</Link>
        ))}
        <a href="#contact" className="nav-cta">{d.contact}</a>
      </nav>
    </div></header>
  );
}
