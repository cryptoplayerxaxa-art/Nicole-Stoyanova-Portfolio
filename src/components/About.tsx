import { useFadeUp } from "@/hooks/use-fade-up";
import { Download } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";

export function About() {
  const ref = useFadeUp<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-36 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            ( 03 ) — About
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A quiet eye for <em className="italic text-primary/90">complex</em> systems.
          </h2>
        </div>
        <div ref={ref} className="fade-up md:col-span-6 md:col-start-6 space-y-6 text-lg md:text-xl text-foreground/80 text-pretty">
          <p className="text-balance">
            I design user-centered digital products, from research, wireframing, and prototyping to high-fidelity UI, creating experiences that feel intuitive and solve real problems. Curious by nature, I care about the small details that turn a tool into something people actually enjoy using. Outside of work, that same curiosity takes me to photography, drawing, reading, hiking, and sports.
          </p>
          <div className="mt-10">
            <a
              href={cvAsset.url}
              download="CV-Nicole-Stoyanova.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm transition-all hover:bg-primary"
            >
              Download CV
              <span className="grid place-items-center h-10 w-10 rounded-full bg-background/10 transition-transform group-hover:translate-y-0.5">
                <Download className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
