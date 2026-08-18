import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { DarkGradientBg } from "@/components/ui/elegant-dark-pattern";

/** Renders the portfolio as a single, navigable page. */
export default function Home() {
  return (
    <DarkGradientBg>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </DarkGradientBg>
  );
}
