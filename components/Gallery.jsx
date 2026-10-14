"use client";
import { useEffect, useRef, useState } from "react";
import { GALLERY } from "@/lib/data";
import { getDict } from "@/lib/i18n";

/** ภาพบรรยากาศแยกตาม Track + lightbox */
export default function Gallery({ lang }) {
  const D = getDict(lang), d = D.gallery;
  const [lb, setLb] = useState(null); // { track, i }
  const dlg = useRef(null);

  const list = lb ? GALLERY[lb.track] : [];
  const cap = (k, i) => `Track ${k} · ${i + 1}/${GALLERY[k].length}`;
  const step = n => setLb(s => ({ ...s, i: (s.i + n + list.length) % list.length }));

  useEffect(() => {
    const el = dlg.current;
    if (lb && !el.open) el.showModal();
    if (!lb && el.open) el.close();
  }, [lb]);

  return (
    <>
      <div className="gtracks">
        {Object.keys(GALLERY).map(k => {
          const pics = GALLERY[k];
          return (
            <div className={`gtrack reveal${k === "B" ? " b" : ""}`} key={k}>
              <div className="gt-head">
                <span className="tag">TRACK {k}</span>
                <h3>{D.tracks[k].name}</h3>
                {pics.length > 0 && <small>{d.photos(pics.length)}</small>}
              </div>
              {pics.length ? (
                <div className={`gal${pics.length === 4 ? " four" : ""}`}>
                  {pics.map((f, i) => (
                    <button key={f} className={`ph${i === 0 ? " big" : ""}`} onClick={() => setLb({ track: k, i })} aria-label={`${d.view} ${cap(k, i)}`}>
                      <img src={`/assets/gallery/${f}.jpg`} alt={cap(k, i)} loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              ) : <p className="gal-empty">{d.empty}</p>}
            </div>
          );
        })}
      </div>

      <dialog ref={dlg} className="lb" aria-label={d.dialog} onClose={() => setLb(null)}
        onClick={e => { if (e.target === dlg.current) setLb(null); }}
        onKeyDown={e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); }}>
        <button className="lb-x" aria-label={d.close} onClick={() => setLb(null)}>✕</button>
        <button className="lb-nav prev" aria-label={d.prev} onClick={() => step(-1)}>‹</button>
        {lb && (
          <figure>
            <img src={`/assets/gallery/${list[lb.i]}.jpg`} alt={cap(lb.track, lb.i)} />
            <figcaption>{cap(lb.track, lb.i)}</figcaption>
          </figure>
        )}
        <button className="lb-nav next" aria-label={d.next} onClick={() => step(1)}>›</button>
      </dialog>
    </>
  );
}
