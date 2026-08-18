import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Provides direct channels for professional contact. */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50 waguri:bg-space-indigo-950/70" id="contact">
      <div className="section py-16">
        <p className="eyebrow">Mari terhubung</p>
        <h2 className="section-title mt-4 max-w-3xl">Mari berdiskusi dan mengembangkan solusi berbasis AI.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href="mailto:hjm.imi092005@gmail.com"><Mail size={16} /> Email</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/PacarKaoruko" rel="noreferrer" target="_blank"><Github size={16} /> GitHub</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/haitamim-jm-894274346/" rel="noreferrer" target="_blank"><Linkedin size={16} /> LinkedIn</a>
          </Button>
        </div>
        <p className="mt-14 text-sm text-slate-500">© 2026 Haitamim Jahran Mahendra.</p>
      </div>
    </footer>
  );
}
