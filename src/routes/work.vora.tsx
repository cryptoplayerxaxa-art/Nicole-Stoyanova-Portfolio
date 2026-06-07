import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import voraAsset from "@/assets/CoverVora.webp.asset.json";
import voraInsightsAsset from "@/assets/InsigntsVora.webp.asset.json";
import voraDecisionsAsset from "@/assets/DecisionsVora.webp.asset.json";

const vora = voraAsset.url;
const voraInsights = voraInsightsAsset.url;
const voraDecisions = voraDecisionsAsset.url;

export const Route = createFileRoute("/work/vora")({
  head: () => ({
    meta: [
      { title: "Vora — KYC & Onboarding Flow | Nicole Stoyanova" },
      {
        name: "description",
        content:
          "Identity verification flow for a money account app — designed to reduce drop-off by improving clarity, trust, and real-time guidance.",
      },
      { property: "og:title", content: "Vora — KYC & Onboarding Flow" },
      {
        property: "og:description",
        content:
          "Identity verification flow for a money account app — designed to reduce drop-off by improving clarity, trust, and real-time guidance.",
      },
      { property: "og:image", content: vora },
    ],
  }),
  component: VoraCase,
});

function VoraCase() {
  return (
    <CaseStudy
      eyebrow="Project Overview"
      subtitle="Vora"
      title="Vora"
      sub="A conceptual KYC onboarding experience designed to reduce verification drop-off through clearer guidance, trust-driven interactions, and real-time feedback."
      meta={[
        { label: "Year", value: "2025" },
        { label: "Role", value: "UX Research\u00a0 ·\u00a0 KYC Flow\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping" },
      ]}
      banner={vora}
      sections={[
        {
          num: "01",
          eyebrow: "About",
          title: "Verification without the friction",
          body: (
            <p>
              Vora is a concept project exploring the KYC and onboarding experience in fintech which is the most
              critical and often most frustrating part of any financial product. The goal was to design a
              verification flow that feels guided and trustworthy, based on patterns observed working in
              compliance for three years.
            </p>
          ),
        },
        {
          num: "02",
          eyebrow: "Core Problem",
          title: "Where users abandon",
          body: (
            <p>
              Users of fintech platforms frequently abandon identity verification mid-flow. The reasons
              are consistent: unclear requirements, no feedback after failed attempts, and anxiety around uploading
              sensitive personal data. For fintech products, this drop-off directly impacts activation and revenue.
            </p>
          ),
          callout: {
            text: "Regulation requires the data. Good design determines whether users feel safe enough to share it.",
          },
        },
        {
          num: "03",
          eyebrow: "Insights",
          title: "Observed on the compliance side",
          body: (
            <>
              <p>
                Users frequently abandoned identity verification mid-flow, often without understanding why they were
                rejected or what was expected of them.
              </p>
              <p>
                Without clear feedback or transparent communication, the experience felt opaque and anxiety-inducing,
                particularly around uploading sensitive personal data.
              </p>
              <p>
                These frustrations revealed an opportunity to redesign verification as a guided, human experience rather
                than a regulatory formality.
              </p>
            </>
          ),
          media: [{ src: voraInsights, width: 1920, alt: "Vora insights — user concerns around verification" }],
          mediaWide: true,
        },
        {
          num: "04",
          eyebrow: "Key Decisions",
          title: "What we built, and why",
          decisions: undefined,
          body: (
            <div className="space-y-8">
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Step-by-step structure
                </p>
                <p>
                  Breaking the flow into three clearly labelled steps reduced cognitive load and gave users a sense of
                  progress and control throughout verification.
                </p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Real-time capture feedback
                </p>
                <p>
                  The scan frame shifts from neutral to amber to green as conditions improve, with automatic capture
                  once ready and a manual option always visible.
                </p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Contextual trust signals
                </p>
                <p>
                  Encryption notices and plain-language explanations appear at the moment they are needed, not buried in
                  a terms page.
                </p>
              </div>
            </div>
          ),
          media: [{ src: voraDecisions, width: 1920, alt: "Vora key decisions — document choice, scan capture, verified state" }],
          mediaWide: true,
        },
        {
          num: "05",
          eyebrow: "Outcomes & Learnings",
          title: "Clarity is the product",
          body: (
            <p>
              Designing this flow with a compliance background meant understanding not just user frustration but the
              regulatory reasons behind each requirement. That dual perspective as both user advocate and compliance
              realist shaped every decision: what to ask for, when to ask for it, and how to explain it without creating
              alarm.
            </p>
          ),
          learning: "In high-anxiety flows, clarity is not just good UX. It is the product.",
          badge: "Full case study available upon request.",
        },
      ]}
    />
  );
}
