import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicole Stoyanova — UX/UI Designer Portfolio" },
      {
        name: "description",
        content:
          "Nicole Stoyanova is a UX/UI Designer crafting intuitive product experiences for infrastructure and fintech.",
      },
      { property: "og:title", content: "Nicole Stoyanova — UX/UI Designer" },
      {
        property: "og:description",
        content: "Designing digital products that simplify complex experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
