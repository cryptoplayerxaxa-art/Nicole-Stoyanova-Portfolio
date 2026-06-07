import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useFadeUp } from "@/hooks/use-fade-up";
import type { ReactNode } from "react";

export type CaseMeta = { label: string; value: string };
export type CaseInsight = { num: string; title: string; body: string };
export type CaseDecision = { text: string; tone?: "orange" | "green" };

export type CaseSection = {
  num: string;
  eyebrow: string;
  title: string;
  body?: ReactNode;
  callout?: { text: string; tone?: "orange" | "green" };
  insights?: CaseInsight[];
  decisions?: CaseDecision[];
  learning?: string;
  badge?: string;
  media?: { src: string; width: number; alt?: string }[];
  mediaWide?: boolean;

};

export type CaseStudyProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  sub: string;
  meta: CaseMeta[];
  banner: string;
  heroVariant?: "wide" | "portrait";
  sections: CaseSection[];
};

export function CaseStudy(props: CaseStudyProps) {
  const heroRef = useFadeUp<HTMLDivElement>();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-30 h-16 px-6 md:px-10 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/60">
        <Link
          to="/"
          hash="work"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back
        </Link>
        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {props.subtitle}
        </span>
      </div>

      <section ref={heroRef} className="fade-up max-w-5xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
          {props.eyebrow}
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl text-balance py-[4px] lg:text-6xl">
          {props.title}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
          {props.sub}
        </p>
        <div className="flex flex-wrap gap-x-14 gap-y-6 pt-8 border-t border-border/60">
          {props.meta.map((m) => (
            <div key={m.label}>
              <div className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
                {m.label}
              </div>
              <div className="font-serif text-[18px]">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {props.heroVariant === "portrait" ? (
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-muted/40 to-background py-10 md:py-16">
            <img
              src={props.banner}
              alt={`${props.subtitle} cover`}
              className="w-full max-w-[720px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      ) : (
        <div className="w-[calc(100vw-3rem)] md:w-[calc(100vw-5rem)] max-w-7xl mx-auto">
          <img
            src={props.banner}
            alt={`${props.subtitle} cover`}
            className="w-full h-auto object-contain"
            style={{ imageRendering: "auto", transform: "none" }}
            decoding="async"
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 space-y-20 md:space-y-24">
        {props.sections.map((s) => (
          <Section key={s.num} section={s} />
        ))}
      </article>
    </main>
  );
}

function Section({ section: s }: { section: CaseSection }) {
  const ref = useFadeUp<HTMLDivElement>();
  return (
    <div ref={ref} className="fade-up">
      <div className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">
        {s.num} — {s.eyebrow}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">{s.title}</h2>
      {s.body && (
        <div className="space-y-4 text-base text-foreground/75 leading-[1.85]">{s.body}</div>
      )}

      {s.callout && (
        <blockquote
          className={`mt-7 border-l-2 px-6 py-4 rounded-r-lg italic leading-relaxed ${
            s.callout.tone === "green"
              ? "border-emerald-500 bg-emerald-50/60"
              : "border-primary bg-primary/5"
          }`}
        >
          {s.callout.text}
        </blockquote>
      )}

      {s.insights && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-6">
          {s.insights.map((i) => (
            <div key={i.num} className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="font-serif text-4xl opacity-20 leading-none mb-2.5">{i.num}</div>
              <h4 className="text-sm font-medium mb-2">{i.title}</h4>
              <p className="text-[0.83rem] text-muted-foreground leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      )}

      {s.decisions && (
        <ul className="mt-5 flex flex-col gap-2.5">
          {s.decisions.map((d, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-border bg-card/60 px-5 py-3.5 text-sm text-foreground/75 leading-relaxed"
            >
              <span
                className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${
                  d.tone === "green" ? "bg-emerald-500" : "bg-primary"
                }`}
              />
              <span>{d.text}</span>
            </li>
          ))}
        </ul>
      )}

      {s.learning && (
        <blockquote className="mt-7 border-l-2 border-primary bg-primary/5 px-6 py-4 rounded-r-lg italic leading-relaxed">
          <p className="font-serif text-lg md:text-xl leading-[1.7] text-foreground">
            {s.learning}
          </p>
        </blockquote>
      )}

      {s.badge && (
        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>{s.badge}</span>
        </div>
      )}

      {s.media && s.media.length > 0 && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-6 ${
            s.mediaWide
              ? "relative left-1/2 -translate-x-1/2 w-[calc(100vw-3rem)] md:w-[calc(100vw-5rem)]"
              : ""
          }`}
          style={{ marginTop: s.mediaWide ? "96px" : "48px", marginBottom: "16px" }}
        >

          {s.media.map((m, i) => (
            <img
              key={i}
              src={m.src}
              alt={m.alt ?? ""}
              style={s.mediaWide ? { width: "100%", height: "auto", imageRendering: "auto", transform: "none" } : { width: "100%", maxWidth: `${m.width}px`, height: "auto", imageRendering: "auto", transform: "none" }}
              className={`object-contain ${s.media!.length === 1 ? "sm:col-span-2" : ""}`}
              decoding="async"
            />
          ))}
        </div>
      )}
    </div>
  );
}
