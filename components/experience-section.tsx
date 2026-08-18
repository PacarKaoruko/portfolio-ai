import { experiences, education } from "@/lib/data";

/** Presents relevant work experience and formal education in a timeline. */
export function ExperienceSection() {
  return (
    <section className="section border-t border-white/10" id="experience">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow">Perjalanan</p>
          <h2 className="section-title mt-4">Experience</h2>
          <div className="mt-9 space-y-8 border-l border-sky-300/35 pl-6 waguri:border-lavender-blush-300/45">
            {experiences.map((experience) => (
              <article className="relative" key={experience.role}>
                <span className="absolute -left-[31px] top-2 size-3 rounded-full bg-sky-300 ring-4 ring-[#060b16] waguri:bg-lavender-blush-300 waguri:ring-space-indigo-950" />
                <p className="text-sm font-medium text-sky-200 waguri:text-lavender-blush-200">
                  {experience.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{experience.role}</h3>
                <p className="mt-1 font-medium text-slate-300">{experience.organization}</p>
                <p className="mt-3 max-w-xl leading-7 text-slate-300">{experience.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Pendidikan</p>
          <h2 className="section-title mt-4">Education</h2>
          <div className="mt-9 space-y-5">
            {education.map((item) => (
              <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-6" key={item.school}>
                <p className="text-sm font-medium text-sky-200 waguri:text-lavender-blush-200">{item.period}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{item.degree}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.school}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
