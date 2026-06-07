import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const [rot, setRot] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setRot(window.scrollY * 0.12));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Page-wide subtle grain */}
      <div className="pointer-events-none absolute inset-0 grain-texture opacity-[0.08] mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center relative">
        <div className="md:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-px w-8 bg-foreground/40" />
            Nicole Stoyanova <span className="mx-1">·</span> UX UI Designer
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3rem] lg:text-[3.5rem] xl:text-[4.25rem] 2xl:text-[4.75rem] leading-[1.06] tracking-[-0.015em] text-balance max-w-[18ch]">
            Designing digital experiences that bring{" "}
            <em className="italic text-primary/90 font-serif">clarity</em> to complex systems.
          </h1>

          <p className="mt-6 max-w-md text-base md:text-[1.05rem] leading-relaxed text-muted-foreground text-pretty">
            Driven by curiosity, creativity, and the desire to build meaningful experiences.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm transition-all hover:bg-primary"
            >
              Let's connect
              <span className="grid place-items-center h-9 w-9 rounded-full bg-background/10 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="relative">
                View selected work
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground/30 origin-right scale-x-100 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Decorative */}
        <div className="hidden md:block md:col-span-5 relative h-[300px] md:h-[360px] lg:h-[440px]">
          <div className="absolute -top-6 right-6 h-56 w-56 md:h-64 md:w-64 lg:h-96 lg:w-96 gradient-orange-glow blur-3xl opacity-80" />

          <div
            className="absolute right-2 top-6 h-56 w-56 md:h-60 md:w-60 lg:h-80 lg:w-80 xl:h-[26rem] xl:w-[26rem] rounded-full border border-foreground/30"
            style={{ transform: `rotate(${rot}deg)`, transition: "transform 0.1s linear" }}
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
            <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-foreground/60" />
          </div>

          {/* Hairline crosshair */}
          <div className="absolute bottom-10 right-6 flex flex-col items-end gap-3 text-[10px] tracking-[0.3em] text-muted-foreground/70 uppercase">
            <span className="h-px w-10 bg-foreground/20" />
            <span>Portfolio · 2026</span>
          </div>

          <div className="absolute bottom-6 right-10 h-16 w-16 grid-dots opacity-50" />
          <div className="absolute top-8 left-0 text-xs tracking-[0.3em] text-muted-foreground rotate-90 origin-left">
            EST · SOFIA
          </div>
        </div>
      </div>
    </section>
  );
}
