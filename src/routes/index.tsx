import { createFileRoute } from "@tanstack/react-router";
import { SnapScroll } from "@/components/SnapScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Placeholder } from "@/components/sections/Placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aabha Boob — AI Engineer" },
      {
        name: "description",
        content:
          "Aabha Boob, AI Engineer in Hyderabad. LLM pipelines, conversational agents, production-grade backends.",
      },
      { property: "og:title", content: "Aabha Boob — AI Engineer" },
      {
        property: "og:description",
        content: "LLM pipelines, conversational agents, and production-grade backends.",
      },
    ],
  }),
  component: Index,
});

const sectionIds = ["hero", "about", "demos", "experience", "contact"];

function Index() {
  const sections = [
    <Hero key="hero" sectionIds={sectionIds} />,
    <Placeholder key="about" title="About" />,
    <Placeholder key="demos" title="Demos" />,
    <Placeholder key="experience" title="Experience" />,
    <Placeholder key="contact" title="Contact" />,
  ];

  return (
    <main style={{ backgroundColor: "var(--bg)" }}>
      <SnapScroll sections={sections} sectionIds={sectionIds}>
        <Nav sectionIds={sectionIds} />
      </SnapScroll>
    </main>
  );
}
