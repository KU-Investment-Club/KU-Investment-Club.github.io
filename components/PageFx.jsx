"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const fmt = n => n.toLocaleString("en-US");

function countUp(el) {
  const end = +el.dataset.count, t0 = performance.now();
  const step = t => {
    const p = Math.min(1, (t - t0) / 1200);
    el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** reveal-on-scroll + count-up + header shadow / back-to-top (re-runs on every page) */
export default function PageFx() {
  const path = usePathname();

  // layout effect = runs before paint, so on-screen sections never flash invisible
  useLayoutEffect(() => {
    document.documentElement.classList.add("js"); // enables .reveal hiding (see globals.css)
    const els = [...document.querySelectorAll(".reveal, .chart, .awards .box")];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) { els.forEach(el => el.classList.add("in")); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(e.target);
    }), { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    // already on screen → show immediately (no fade), only animate what you scroll to
    const vh = innerHeight;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) { el.classList.add("in"); el.querySelectorAll("[data-count]").forEach(countUp); }
      else io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", scrollY > 10);
      document.body.classList.toggle("far", scrollY > 900);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
