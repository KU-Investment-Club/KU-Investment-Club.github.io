"use client";
import { useEffect, useRef, useState } from "react";
import { GALLERY, GALLERY_CAPS } from "@/lib/data";
import { getDict } from "@/lib/i18n";

/** ภาพบรรยากาศ: แท็บเลือก Track + lightbox */
export default function Gallery({ lang }) {
  const D = getDict(lang), d = D.gallery;
  const [track, setTrack] = useState("A");
  const [lb, setLb] = useState(null); // { k, i }
  const dlg = useRef(null);

  const src = (k, i) => `/assets/gallery/${GALLERY[k][i]}.jpg`;
  const cap = (k, i) => `TRACK ${k} · ${(GALLERY_CAPS[i] ?? `${i + 1}/${GALLERY[k].length}`).toUpperCase()}`;
  const step = n => setLb(s => ({ ...s, i: (s.i + n + GALLERY[s.k].length) % GALLERY[s.k].length }));

  useEffect(() => {
    const el = dlg.current;
    if (lb && !el.open) el.showModal();
    if (!lb && el.open) el.close();
  }, [lb]);

  return (
    <>
      <div className="gtabs" role="tablist">
        {Object.keys(GALLERY).map(k => (
          <button key={k} role="tab" aria-selected={k === track} onClick={() => setTrack(k)}>TRACK {k}</button>
        ))}
      </div>
      <p className="gname">{D.tracks[track].name}</p>
      <div className="gal" role="tabpanel">
        {GALLERY[track].map((f, i) => (
          <button key={f} className="ph" onClick={() => setLb({ k: track, i })} aria-label={`${d.view} ${cap(track, i)}`}>
            <img src={src(track, i)} alt={cap(track, i)} loading="lazy" decoding="async" />
            <span>{cap(track, i)}</span>
          </button>
        ))}
      </div>

      <dialog ref={dlg} className="lb" aria-label={d.dialog} onClose={() => setLb(null)}
        onClick={e => { if (e.target === dlg.current) setLb(null); }}
        onKeyDown={e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); }}>
        {lb && (
          <figure>
            <img src={src(lb.k, lb.i)} alt={cap(lb.k, lb.i)} />
            <figcaption>
              <button aria-label={d.prev} onClick={() => step(-1)}>←</button>
              <span>{cap(lb.k, lb.i)}</span>
              <div>
                <button aria-label={d.next} onClick={() => step(1)}>→</button>
                <button aria-label={d.close} onClick={() => setLb(null)}>✕</button>
              </div>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
