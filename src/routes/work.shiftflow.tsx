import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";

const placeholder = "/projects/shiftflow-placeholder.svg";

export const Route = createFileRoute("/work/shiftflow")({
  head: () => ({
    meta: [
      { title: "ShiftFlow — Workforce Scheduling Platform | Nicole Stoyanova" },
      {
        name: "description",
        content:
          "A workforce scheduling platform that helps managers coordinate shifts, prevent conflicts, and keep growing teams in sync.",
      },
      { property: "og:title", content: "ShiftFlow — Workforce Scheduling Platform" },
      {
        property: "og:description",
        content:
          "A workforce scheduling platform that helps managers coordinate shifts, prevent conflicts, and keep growing teams in sync.",
      },
      { property: "og:image", content: placeholder },
    ],
  }),
  component: ShiftFlowCase,
});

function ShiftFlowCase() {
  return (
    <CaseStudy
      eyebrow="Project Overview"
      subtitle="ShiftFlow"
      title="ShiftFlow"
      sub="A workforce scheduling platform that helps managers coordinate shifts, prevent conflicts, and keep growing teams in sync."
      meta={[
        { label: "Year", value: "2026" },
        { label: "Role", value: "Interaction Design\u00a0 ·\u00a0 UX Research\u00a0 ·\u00a0 UI Design\u00a0 ·\u00a0 Prototyping" },
      ]}
      banner={placeholder}
      heroVariant="wide"
      sections={[
        {
          num: "01",
          eyebrow: "About",
          title: "A scheduling tool built for growing teams",
          body: (
            <>
              <p>
                ShiftFlow is a workforce scheduling platform designed to help managers coordinate employee shifts across
                growing teams. As scheduling complexity increases, managers often rely on spreadsheets, messages, and
                manual updates to keep operations running smoothly.
              </p>
              <p>
                Designing a grid-based scheduling interface gave me hands-on experience with the complexity of
                interactive web tools, managing state, preventing errors, and keeping dense information readable at a
                glance.
              </p>
            </>
          ),
        },
        {
          num: "02",
          eyebrow: "Core Problem",
          title: "Schedules fragmented across tools",
          body: (
            <>
              <p>
                Managers coordinating medium-sized teams often manage schedules across spreadsheets, messages, and
                individual requests. As shift changes, time-off requests, and employee availability need constant
                updating, maintaining an accurate schedule becomes a repetitive, time-consuming process.
              </p>
              <p>
                Without a centralized workflow, information becomes fragmented, increasing the likelihood of scheduling
                mistakes and operational inefficiencies.
              </p>
            </>
          ),
          callout: {
            text: "Building the schedule is easy. Keeping it updated is the hard part.",
          },
        },
        {
          num: "03",
          eyebrow: "Insights",
          title: "Maintenance is the real workload",
          body: (
            <>
              <p>
                As teams grow, scheduling becomes increasingly difficult to manage manually. While spreadsheets work
                well for creating an initial schedule, availability checks, shift swaps, and time-off requests require
                constant coordination.
              </p>
              <p>Maintaining an accurate schedule becomes more time-consuming than creating it.</p>
              <blockquote className="mt-2 border-l-2 border-primary bg-primary/5 px-6 py-4 rounded-r-lg italic leading-relaxed not-italic">
                <p className="italic">"Building the schedule is easy. Keeping it updated is the hard part."</p>
              </blockquote>
              <blockquote className="border-l-2 border-primary bg-primary/5 px-6 py-4 rounded-r-lg italic leading-relaxed not-italic">
                <p className="italic">"Before making any changes, I need to check availability in three different places."</p>
              </blockquote>
            </>
          ),
          media: [{ src: placeholder, width: 1920, alt: "ShiftFlow insights placeholder" }],
          mediaWide: true,
        },
        {
          num: "04",
          eyebrow: "Key Decisions",
          title: "What we built, and why",
          body: (
            <div className="space-y-8">
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Prioritized visibility over flexibility
                </p>
                <p>
                  Managers need to understand the entire schedule at a glance before making any adjustments.
                </p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Prevented errors before publication
                </p>
                <p>
                  Conflict indicators help identify scheduling issues early, reducing the need for manual checks.
                </p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1.5">
                  Created a single source of truth
                </p>
                <p>
                  Availability, shifts, and employee information were consolidated into one workflow to simplify
                  schedule management.
                </p>
              </div>
            </div>
          ),
          media: [{ src: placeholder, width: 1920, alt: "ShiftFlow key decisions placeholder" }],
          mediaWide: true,
        },
        {
          num: "05",
          eyebrow: "In Progress",
          title: "Currently in development",
          body: (
            <p>
              Currently in development. Future iterations will focus on validating key assumptions, testing the
              workflow, and improving the experience based on real user feedback.
            </p>
          ),
          badge: "Coming soon",
        },
      ]}
    />
  );
}
