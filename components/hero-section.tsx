import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Introduces Haitamim's AI engineering focus and primary actions. */
export function HeroSection() {
  return (
    <section
      className="section grid min-h-[78vh] items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]"
      id="home"
    >
      <div>
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-sm font-medium text-emerald-100 waguri:border-lavender-blush-300/30 waguri:bg-lavender-blush-400/15">
          <span aria-hidden="true">🟢</span>
          Available for Research &amp; AI Projects
        </p>
        <p className="eyebrow">Portfolio 2026</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-7xl">
          Hi, I&apos;m Haitamim.
        </h1>
        <p className="mt-5 text-xl font-semibold text-sky-200 waguri:text-lavender-blush-200">
          AI Engineer &amp; Software Developer
        </p>
        <p className="section-copy mt-6 max-w-2xl text-lg">
          Berfokus pada RAG lokal, data engineering, dan sistem agentic untuk
          mengubah data serta ide menjadi produk yang berguna.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#projects">
              Lihat Proyek <ArrowUpRight size={16} />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a download href="/CV_Haitamim_Jahran_Mahendra.pdf">
              Unduh CV <ArrowDownToLine size={16} />
            </a>
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7 shadow-2xl backdrop-blur-sm waguri:border-old-rose-400/35 waguri:bg-space-indigo-900/60 sm:p-9">
        <p className="eyebrow">Fokus saat ini</p>
        <p className="mt-5 text-3xl font-bold leading-tight text-white">
          Sistem AI yang memahami konteks, menjaga privasi, dan siap dipakai.
        </p>
        <div className="mt-10 space-y-5">
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <span>Local RAG</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="h-full w-[90%] rounded-full bg-sky-400 waguri:bg-lavender-blush-400" />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <span>Data engineering</span>
              <span>85%</span>
            </div>
            <div className="progress">
              <div className="h-full w-[85%] rounded-full bg-sky-400 waguri:bg-lavender-blush-400" />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <span>Agentic systems</span>
              <span>80%</span>
            </div>
            <div className="progress">
              <div className="h-full w-4/5 rounded-full bg-sky-400 waguri:bg-lavender-blush-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
