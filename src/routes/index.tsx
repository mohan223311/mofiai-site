import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { TrainingPrograms } from "@/components/site/TrainingPrograms";
import { Instructors } from "@/components/site/Instructors";
import { YouTubeSection } from "@/components/site/YouTubeSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOFI AI — Build AI Agents & Automation That Scale" },
      { name: "description", content: "Master AI automation in Telugu. Professional AI automation services and N8N courses to grow your business." },
      { property: "og:title", content: "MOFI AI — AI Agents & Automation Training in Telugu" },
      { property: "og:description", content: "Expert AI automation services and Telugu training programs—n8n, voice agents, WhatsApp bots, API integrations." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <WhatWeDo />
      <ServicesGrid />
      <WhyChoose />
      <Testimonials />
      <TrainingPrograms />
      <Instructors />
      <YouTubeSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
