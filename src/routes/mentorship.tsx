import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { MentorHero } from "@/components/site/mentorship/MentorHero";
import { HowItWorks } from "@/components/site/mentorship/HowItWorks";
import { ControlEverything } from "@/components/site/mentorship/ControlEverything";
import { ProgramDetails } from "@/components/site/mentorship/ProgramDetails";
import { ExtendedSupport } from "@/components/site/mentorship/ExtendedSupport";
import { TimeBreakdown } from "@/components/site/mentorship/TimeBreakdown";
import { PaymentOptions } from "@/components/site/mentorship/PaymentOptions";
import { WhyMentorship } from "@/components/site/mentorship/WhyMentorship";
import { MentorTestimonials } from "@/components/site/mentorship/MentorTestimonials";
import { CompareTable } from "@/components/site/mentorship/CompareTable";
import { MentorFinalCTA } from "@/components/site/mentorship/MentorFinalCTA";

export const Route = createFileRoute("/mentorship")({
  head: () => ({
    meta: [
      { title: "1:1 AI Mentorship Program — MOFI AI" },
      { name: "description", content: "Personalized 1:1 AI mentorship in Telugu. 45+ hours, custom curriculum, lifetime access. ₹30,000." },
      { property: "og:title", content: "1:1 AI Mentorship Program — MOFI AI" },
      { property: "og:description", content: "Live, customized AI mentorship with both instructors. Build real client-grade automations." },
    ],
  }),
  component: MentorshipPage,
});

function MentorshipPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <MentorHero />
      <HowItWorks />
      <ControlEverything />
      <ProgramDetails />
      <ExtendedSupport />
      <TimeBreakdown />
      <PaymentOptions />
      <WhyMentorship />
      <MentorTestimonials />
      <CompareTable />
      <MentorFinalCTA />
      <Footer />
    </div>
  );
}
