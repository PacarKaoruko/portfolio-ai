"use client";

import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/** Displays project summaries and an accessible detail dialog. */
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section border-t border-white/10" id="projects">
      <p className="eyebrow">Pilihan karya</p>
      <h2 className="section-title mt-4">Projects yang membangun konteks.</h2>
      <p className="section-copy mt-4 max-w-2xl">
        Dari retrieval yang terukur sampai rekomendasi berbasis konten, setiap
        proyek dirancang untuk memecahkan kebutuhan yang spesifik.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <button
            className="group text-left"
            key={project.title}
            onClick={() => setSelectedProject(project)}
            type="button"
          >
            <Card className="flex h-full flex-col border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:bg-white/[0.07] waguri:hover:border-old-rose-300">
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-sky-300 waguri:text-lavender-blush-200">
                  0{index + 1}
                </span>
                <ArrowUpRight className="text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1" size={19} />
              </div>
              <h3 className="mt-7 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-400 waguri:text-space-indigo-200">
                {project.period}
              </p>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-300 waguri:text-space-indigo-100">
                {project.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </Card>
          </button>
        ))}
      </div>
      {selectedProject && (
        <div
          aria-labelledby="project-title"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end bg-slate-950/80 p-4 backdrop-blur-sm sm:items-center sm:justify-center"
          onClick={() => setSelectedProject(null)}
          role="dialog"
        >
          <div
            className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#101827] p-6 shadow-2xl sm:p-9 waguri:bg-space-indigo-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow">{selectedProject.period}</p>
                <h3 className="mt-3 text-3xl font-bold text-white" id="project-title">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-300">
                  {selectedProject.role}
                </p>
              </div>
              <button
                aria-label="Tutup detail proyek"
                className="rounded-full p-2 text-white transition hover:bg-white/10"
                onClick={() => setSelectedProject(null)}
                type="button"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
              <p><strong className="text-white">Tantangan: </strong>{selectedProject.challenge}</p>
              <p><strong className="text-white">Yang dikerjakan: </strong>{selectedProject.work}</p>
              <p><strong className="text-white">Hasil: </strong>{selectedProject.outcome}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {selectedProject.url && (
                <Button asChild>
                  <a href={selectedProject.url} rel="noreferrer" target="_blank">
                    Lihat Proyek <ExternalLink size={16} />
                  </a>
                </Button>
              )}
              <Button asChild variant="outline">
                <a href="https://github.com/PacarKaoruko" rel="noreferrer" target="_blank">
                  GitHub <Github size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
