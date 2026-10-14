"use client";
import { useMemo, useRef, useState } from "react";
import { STATS, UNIS, UNI_NAMES } from "@/lib/data";
import { getDict } from "@/lib/i18n";

const PER = 10;

/** ปุ่ม "ดูมหาวิทยาลัยทั้งหมด" + modal (ค้นหา, เรียง, แบ่งหน้า) */
export default function UniTable({ lang }) {
  const D = getDict(lang).stat, d = D.modal;
  const dlg = useRef(null);
  const [term, setTerm] = useState("");
  const [sort, setSort] = useState({ key: "pax", dir: -1 });
  const [page, setPage] = useState(0);

  const rows = useMemo(() => {
    const q = term.toLowerCase();
    return UNIS.map(u => ({ ...u, name: UNI_NAMES[u.id]?.[lang] ?? u.id }))
      .filter(u => u.name.toLowerCase().includes(q))
      .sort((a, b) => (a[sort.key] > b[sort.key] ? 1 : a[sort.key] < b[sort.key] ? -1 : 0) * sort.dir);
  }, [term, sort, lang]);
  const pages = Math.max(1, Math.ceil(rows.length / PER));
  const pg = Math.min(page, pages - 1);
  const by = key => () => setSort(s => ({ key, dir: s.key === key ? -s.dir : -1 }));

  return (
    <>
      <button className="expand" onClick={() => dlg.current.showModal()}>{D.viewAll} <span aria-hidden="true">⤢</span></button>
      <dialog id="dlg" ref={dlg} aria-labelledby="dt" onClick={e => { if (e.target === dlg.current) dlg.current.close(); }}>
        <div className="mh"><h3 id="dt">{d.title}</h3>
          <div className="mh-tools">
            <input type="search" placeholder={d.search} aria-label={d.search} value={term} onChange={e => { setTerm(e.target.value.trim()); setPage(0); }} />
            <button className="btn out" onClick={() => dlg.current.close()}>{d.close}</button>
          </div></div>
        <div className="mb"><table>
          <thead><tr>
            <th onClick={by("name")}>{D.uni} ⇅</th>
            <th className="r" onClick={by("pax")}>{D.pax} ⇅</th>
            <th className="r">%</th>
            <th className="r" onClick={by("teams")}>{D.teams} ⇅</th>
          </tr></thead>
          <tbody>
            {rows.length ? rows.slice(pg * PER, pg * PER + PER).map(u => (
              <tr key={u.id}><td>{u.name}</td><td className="r">{u.pax}</td><td className="r">{(u.pax / STATS.applicants * 100).toFixed(1)}%</td><td className="r">{u.teams}</td></tr>
            )) : <tr><td colSpan={4} className="center">{d.none}</td></tr>}
          </tbody>
        </table></div>
        <div className="mf"><span>{d.page(pg + 1, pages, rows.length)}</span>
          <div className="mh-tools">
            <button className="btn out" disabled={pg === 0} onClick={() => setPage(pg - 1)}>{d.prev}</button>
            <button className="btn out" disabled={pg >= pages - 1} onClick={() => setPage(pg + 1)}>{d.next}</button>
          </div></div>
      </dialog>
    </>
  );
}
