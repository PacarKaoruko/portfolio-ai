"use client";

import { Palette, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

/** Switches between the default dark appearance and the Waguri palette. */
export function ThemeToggle() {
  const [isWaguri, setIsWaguri] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const shouldUseWaguri = savedTheme === "waguri";

    setIsWaguri(shouldUseWaguri);
    document.documentElement.classList.toggle("waguri", shouldUseWaguri);
  }, []);

  function toggleTheme() {
    const nextTheme = !isWaguri;

    setIsWaguri(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme ? "waguri" : "modern");
    document.documentElement.classList.toggle("waguri", nextTheme);
  }

  return (
    <button
      aria-label="Ganti tema tampilan"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 waguri:border-old-rose-400/50 waguri:bg-old-rose-900/40"
      onClick={toggleTheme}
      type="button"
    >
      {isWaguri ? <Palette size={15} /> : <Sparkles size={15} />}
      {isWaguri ? "Waguri" : "Modern"}
    </button>
  );
}
