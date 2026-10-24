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

  useEffect(() => setOpen(false), [path]);

  const remember = l => { try { localStorage.setItem("lang", l); } catch {} };
  const other = LANGS.find(l => l !== lang);
  const items = [["", d.home], ["statistic", d.statistic], ["our-team", d.team]];
  const links = close => (
    <>
      {items.map(([r, label]) => (
        <Link key={r} href={`/${lang}/${r ? r + "/" : ""}`} className={seg === r ? "on" : undefined}
          aria-current={seg === r ? "page" : undefined} onClick={close}>{label}</Link>
      ))}
      <a href="#contact" onClick={close}>{d.contact}</a>
    </>
  );

  return (
    <header id="top">
      <div className="hbar">
        <Link className="brand" href={`/${lang}/`}>
          <img src="/assets/tisc-logo.png" alt="TISC" />
          <span>THAILAND INTERCOLLEGIATE<br />STOCK CHALLENGE</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links()}
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((l, i) => (
              <span key={l} style={{ display: "contents" }}>
                {i > 0 && <i aria-hidden="true">/</i>}
                <Link href={`/${l}${rest}`} hrefLang={l} lang={l} onClick={() => remember(l)}
                  className={l === lang ? "on" : undefined} aria-current={l === lang ? "true" : undefined}
                  aria-label={l === lang ? undefined : d.switchTo}>{l.toUpperCase()}</Link>
              </span>
            ))}
          </div>
        </nav>
        <div className="mtools">
          <Link href={`/${other}${rest}`} hrefLang={other} lang={other} onClick={() => remember(other)} aria-label={d.switchTo}>{other.toUpperCase()}</Link>
          <button className="burger" aria-label={d.menu} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}><i /><i /><i /></button>
        </div>
      </div>
      <nav id="mnav" className={`mnav${open ? " open" : ""}`} aria-label="Main">{links(() => setOpen(false))}</nav>
    </header>
  );
}
