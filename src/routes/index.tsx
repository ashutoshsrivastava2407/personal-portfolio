import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashutosh Srivastava — Full-Stack & AI/ML Engineer" },
      { name: "description", content: "Portfolio of Ashutosh Srivastava, a B.Tech CSE AI & Analytics engineer building full-stack and AI/ML systems." },
      { property: "og:title", content: "Ashutosh Srivastava — Full-Stack & AI/ML Engineer" },
      { property: "og:description", content: "Explore production-minded AI, network intelligence, knowledge retrieval, and enterprise systems by Ashutosh Srivastava." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
