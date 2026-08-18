import { BrainCircuit, Code2, Database, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Card } from "@/components/ui/card";

const icons = [Database, Code2, BrainCircuit, Wrench];

/** Explains the profile and groups relevant technical skills. */
export function AboutSection() {
  return (
    <section className="section border-t border-white/10" id="about">
      <p className="eyebrow">Tentang saya</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:gap-16">
        <h2 className="section-title">Menerjemahkan rasa ingin tahu menjadi sistem yang dapat dipakai.</h2>
        <p className="section-copy text-lg">
          Saya adalah mahasiswa Teknik Informatika yang mengembangkan solusi
          dengan pendekatan data-first. Saya menikmati proses dari merapikan
          data, menguji model, hingga menghadirkan antarmuka yang jelas.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];

          return (
            <Card className="border-white/10 bg-white/[0.035]" key={group.title}>
              <Icon className="text-sky-300 waguri:text-lavender-blush-300" size={24} />
              <h3 className="mt-5 text-lg font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
