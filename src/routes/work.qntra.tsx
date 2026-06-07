import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import qntra from "@/assets/qntra.jpg";
import coverSPAsset from "@/assets/SPCover.webp.asset.json";
import insightsSPAsset from "@/assets/Insights.webp.asset.json";
import decisionsSPAsset from "@/assets/SPdecisions.webp.asset.json";

const coverSP = coverSPAsset.url;
const insightsSP = insightsSPAsset.url;
const decisionsSP = decisionsSPAsset.url;

export const Route = createFileRoute("/work/qntra")({
  head: () => ({
    meta: [
      { title: "ParkPay — Smart Parking App | Nicole Stoyanova" },
      {
        name: "description",
        content:
          "A mobile parking concept that eliminates physical tickets  through live session tracking, in-app payments, and a  seamless entry and exit flow.",
      },
      { property: "og:title", content: "ParkPay — Smart Parking App" },
      {
        property: "og:description",
        content:
          "A mobile parking concept that eliminates physical tickets  through live session tracking, in-app payments, and a  seamless entry and exit flow.",
      },
      { property: "og:image", content: qntra },
    ],
  }),
  component: ParkPayCase,
});

function ParkPayCase() {
  return (
    <CaseStudy
      eyebrow="Project Overview"
      subtitle="Smart Parking"
      title="Smart Parking"
      sub="A mobile parking concept that eliminates physical tickets  through live session tracking, in-app payments, and a  seamless entry and exit flow."
      meta={[
        { label: "Year", value: "2025" },
        { label: "Role", value: "UX Research\u00a0 ·\u00a0 User Flows\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping" },
      ]}
      banner={coverSP}
      heroVariant="wide"
      sections={[
        {
          num: "01",
          eyebrow: "About",
          title: "The missing layer on smart infrastructure",
          body: (
            <p>
              Smart parking is a mobile parking app designed around existing private parking infrastructure — ANPR
              cameras, barrier automation, and parking management systems. Instead of replacing what works, the app adds
              the missing layer: a connected mobile experience that gives drivers live session visibility, digital
              payments, and a seamless entry and exit flow.
            </p>
          ),
        },
        {
          num: "02",
          eyebrow: "Core Problem",
          title: "Smart infrastructure, manual experience",
          body: (
            <p>
              Despite advances in parking automation, drivers still rely on physical tickets and manual payment
              terminals to manage their parking sessions. The result is unnecessary friction — keeping track of a paper
              ticket, queuing at a payment machine, and having no visibility over session duration or cost until the
              very end.
            </p>
          ),
          callout: {
            text: "The infrastructure was already smart. The user experience wasn't.",
          },
        },
        {
          num: "03",
          eyebrow: "Insights",
          title: "What was getting in drivers' way",
          body: (
            <>
              <p>
                Drivers still relied on physical tickets and payment terminals to exit parking areas, creating queues,
                delays, and unnecessary friction during busy hours.
              </p>
              <p>
                Without real-time visibility over session duration or parking costs, the experience often felt
                stressful, inconsistent, and difficult to manage.
              </p>
              <p>These frustrations revealed opportunities for a more seamless parking experience.</p>
            </>
          ),
          media: [{ src: insightsSP, width: 1920, alt: "Driver insights" }],
          mediaWide: true,
        },

        {
          num: "04",
          eyebrow: "Key Decisions",
          title: "What we built, and why",
          body: (
            <div className="space-y-8">
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">Ticketless parking</p>
                <p>
                  Drivers enter and exit parking areas through license plate recognition, removing the need for physical
                  tickets entirely.
                </p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Live session visibility
                </p>
                <p>
                  The app provides real-time session tracking and cost visibility, helping drivers feel more informed
                  throughout the experience.
                </p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Frictionless exit flow
                </p>
                <p>
                  Automatic payments and fallback verification flows reduce queues while keeping the system reliable in
                  edge cases.
                </p>
              </div>
            </div>
          ),
          media: [{ src: decisionsSP, width: 1920, alt: "Key app decisions" }],
          mediaWide: true,
        },
        {
          num: "05",
          eyebrow: "Outcomes & Learnings",
          title: "The missing layer, not a new system",
          body: (
            <p>
              Building around existing infrastructure rather than replacing it led to a more realistic and operationally
              viable product. Usability testing shaped the final scope: simplifying to private parking only resulted in
              a cleaner, faster core experience.
            </p>
          ),
          learning: "Drivers don't need a new system. They need the existing one to finally talk to them.",
          badge: "Full case study available upon request.",
        },
      ]}
    />
  );
}
