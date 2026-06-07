import { Link } from "@tanstack/react-router";
import { useFadeUp } from "@/hooks/use-fade-up";

type MetaItem = { label: string; value: string };

type Project = {
  index: string;
  eyebrow: string;
  title: string;
  image: string;
  discipline: string;
  to: "/work/qntra" | "/work/vora" | "/work/shiftflow";
  meta?: MetaItem[];
};

const projects: Project[] = [
  {
    index: "01",
    eyebrow: "ShiftFlow",
    title:
      "A workforce scheduling platform that helps managers coordinate shifts, prevent conflicts, and keep growing teams in sync.",
    image: "/projects/shiftflow-placeholder.svg",
    discipline: "Interaction Design\u00a0 ·\u00a0 UX Research\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping",
    to: "/work/shiftflow",
    meta: [
      { label: "Year", value: "2026" },
      { label: "Role", value: "Interaction Design\u00a0 ·\u00a0 UX Research\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping" },
    ],
  },
  {
    index: "02",
    eyebrow: "Smart Parking",
    title:
      "A mobile parking concept that eliminates physical tickets through live session tracking, in-app payments, and a seamless entry and exit flow.",
    image: "/projects/qntra.png",
    discipline: "UX Research\u00a0 ·\u00a0 User Flows\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping",
    to: "/work/qntra",
    meta: [
      { label: "Year", value: "2025" },
      { label: "Role", value: "UX Research\u00a0 ·\u00a0 User Flows\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping" },
    ],
  },
  {
    index: "03",
    eyebrow: "Vora",
    title:
      "A conceptual KYC onboarding experience designed to reduce verification drop-off through clearer guidance, trust-driven interactions, and real-time feedback.",
    image: "/projects/vora.png",
    discipline: "UX Research\u00a0 ·\u00a0 KYC Flow\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping",
    to: "/work/vora",
    meta: [
      { label: "Year", value: "2025" },
      { label: "Role", value: "UX Research\u00a0 ·\u00a0 KYC Flow\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping" },
    ],
  },
];

function Card({ p }: { p: Project }) {
  const ref = useFadeUp<HTMLElement>();
  const tags = p.discipline.split("·").map((t) => t.trim());
  return (
    <article ref={ref} className="fade-up group">
      <Link
        to={p.to}
        className="block overflow-hidden rounded-3xl bg-secondary/40 transition-transform duration-700 ease-out group-hover:-translate-y-1"
      >
        <div className="overflow-hidden flex items-center justify-center">
          <img
            src={p.image}
            alt={`${p.eyebrow} — project overview preview`}
            className="w-full h-auto object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </Link>

      {p.meta ? (
        <div className="mt-8 md:mt-10 md:pl-16 lg:pl-24 xl:pl-32">
          <h3 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance">{p.eyebrow}</h3>
          <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty max-w-[60ch]">{p.title}</p>
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-x-8 gap-y-6 md:gap-12 lg:gap-20">
            {p.meta!.map((m) => (
              <div key={m.label}>
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">{m.label}</div>
                <div className="font-serif text-[18px]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 md:mt-10 md:pl-16 lg:pl-24 xl:pl-32 flex flex-col md:flex-row md:gap-12 lg:gap-20 items-start">
          <div className="flex-1">
            <h3 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance">{p.eyebrow}</h3>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty max-w-[54ch]">{p.title}</p>
          </div>
          <div className="mt-4 md:mt-1 md:w-44 lg:w-52 shrink-0">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Role</p>
            {tags.map((tag, i) => (
              <p key={i} className="text-sm text-muted-foreground">
                {tag}
              </p>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export function Work() {
  const head = useFadeUp<HTMLDivElement>();
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={head} className="fade-up flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">( 02 ) — Work</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
              Selected <em className="italic text-primary/90">projects</em>
            </h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground max-w-[18rem] text-right text-pretty">
            Designing digital products that simplify complex experiences.
          </div>
        </div>

        <div className="space-y-16 md:space-y-20">
          {projects.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
