import { useEffect, useState } from "react";
import nsLogo from "@/assets/ns-logo.png";


const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About me" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center" aria-label="Nicole Stoyanova — Home">
          <img src={nsLogo} alt="Nicole Stoyanova" className="h-9 md:h-11 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative inline-block transition-colors hover:text-foreground after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-foreground after:origin-right after:scale-x-0 after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="hidden sm:inline">Available for work</span>
        </div>
      </nav>
    </header>
  );
}
