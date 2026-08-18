import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/** Sticky navigation for the portfolio sections and theme preference. */
export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#060b16]/80 backdrop-blur waguri:bg-space-indigo-950/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          className="text-lg font-black tracking-tight text-white"
          href="#home"
        >
          HJM.
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              className="text-sm text-slate-300 transition hover:text-white waguri:text-space-indigo-200 waguri:hover:text-lavender-blush-100"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
