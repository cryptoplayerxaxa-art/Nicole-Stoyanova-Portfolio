import { ArrowUpRight } from "lucide-react";
import { useFadeUp } from "@/hooks/use-fade-up";

export function Contact() {
  const ref = useFadeUp<HTMLDivElement>();
  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fef8f5 0%, #ffffff 50%, #fef0e8 100%)' }}>
      <div className="pointer-events-none absolute inset-0 grain-texture opacity-[0.06] mix-blend-multiply" />
      <div className="absolute -bottom-10 left-1/3 h-72 w-72 gradient-orange-glow blur-3xl opacity-40 pointer-events-none" />
      <div ref={ref} className="fade-up relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">( 04 ) — Contact</div>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl text-balance">
          Great design begins with <em className="italic text-primary/90">hello</em>.
        </h2>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            {/* Email */}
            <a
              href="mailto:nicolestoyanovva@gmail.com"
              className="group flex-1 py-4 border-b border-border/60 transition-colors hover:border-foreground/30"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</div>
              <div className="flex items-center gap-3">
                <span className="relative text-sm md:text-base text-foreground">
                  nicolestoyanovva@gmail.com
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground/20 origin-right scale-x-100 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <span className="text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nicole-stoyanova-615a03278"
              target="_blank"
              rel="noreferrer"
              className="group flex-1 py-4 border-b border-border/60 transition-colors hover:border-foreground/30"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">LinkedIn</div>
              <div className="flex items-center gap-3">
                <span className="relative text-sm md:text-base text-foreground">
                  /in/nicole-stoyanova
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground/20 origin-right scale-x-100 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <span className="text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
