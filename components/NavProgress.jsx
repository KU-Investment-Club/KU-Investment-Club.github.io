"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** thin top bar: starts on internal link click, completes when the new route renders */
export default function NavProgress() {
  const path = usePathname();
  const [state, setState] = useState("idle"); // idle | loading | done

  useEffect(() => {
    const onClick = e => {
      const a = e.target.closest("a[href]");
      if (!a || a.target || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      setState("loading");
    };
    // capture phase: Next <Link> calls preventDefault before a bubbling listener would run
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    setState(s => (s === "loading" ? "done" : s));
    const t = setTimeout(() => setState(s => (s === "done" ? "idle" : s)), 450);
    return () => clearTimeout(t);
  }, [path]);

  return <div className={`navbar-progress ${state}`} aria-hidden="true" />;
}
