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

const mentorshipSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "1:1 AI Automation Mentorship Program in Telugu",
      "description": "Personalized live 1:1 AI mentorship in Telugu — 45+ hours of customized training, real client-grade automations, free N8N course included, lifetime access.",
      "url": "https://mofiai.com/mentorship",
      "provider": {
        "@type": "Organization",
        "@id": "https://mofiai.com/#organization",
        "name": "MOFI AI",
        "url": "https://mofiai.com"
      },
      "serviceType": "AI Automation Training",
      "areaServed": ["Hyderabad", "Telangana", "Andhra Pradesh", "India", "USA", "Singapore", "New Zealand"],
      "inLanguage": "te",
      "offers": {
        "@type": "Offer",
        "price": "30000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://mofiai.com/mentorship"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mofiai.com/" },
        { "@type": "ListItem", "position": 2, "name": "1:1 Mentorship", "item": "https://mofiai.com/mentorship" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the MOFI AI 1:1 AI Automation Mentorship?",
          "acceptedAnswer": { "@type": "Answer", "text": "The MOFI AI 1:1 mentorship is a personalized, live AI automation training program in Telugu. Students get 45+ hours of one-on-one sessions with the founders, a custom curriculum tailored to their goals, real client-grade projects, the N8N Mastery Course included free, and lifetime community access. Price: ₹30,000." }
        },
        {
          "@type": "Question",
          "name": "How is the mentorship different from the self-paced course?",
          "acceptedAnswer": { "@type": "Answer", "text": "The self-paced N8N course (₹5,000) is pre-recorded video content you study at your own pace. The mentorship (₹30,000) is live 1:1 training with the MOFI AI founders — fully personalized, with direct feedback, real project work, and a curriculum designed around your specific goals." }
        },
        {
          "@type": "Question",
          "name": "Is the MOFI AI mentorship available in Telugu?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. All MOFI AI mentorship sessions are conducted in Telugu. It is the only personalized 1:1 AI automation mentorship available in Telugu for learners in Hyderabad, Telangana, and Andhra Pradesh." }
        },
        {
          "@type": "Question",
          "name": "Who teaches in the 1:1 mentorship?",
          "acceptedAnswer": { "@type": "Answer", "text": "The mentorship sessions are taught directly by MOFI AI founders Shaik Fhiroj and Mohan Rao — both practicing AI automation engineers with 20+ real client projects delivered globally." }
        },
        {
          "@type": "Question",
          "name": "What will I learn in the 1:1 AI mentorship?",
          "acceptedAnswer": { "@type": "Answer", "text": "In the MOFI AI mentorship you will learn N8N workflow automation, AI agent development, WhatsApp Business API automation, voice agent development using Retell AI, API integrations, and how to deliver automation projects for real clients — all in Telugu." }
        },
        {
          "@type": "Question",
          "name": "Can I get a freelancing career after the MOFI AI mentorship?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. The MOFI AI mentorship is specifically designed to help students land freelancing clients and deliver real automation projects. Students build a portfolio during the program and get guidance on pricing, client finding, and project delivery." }
        }
      ]
    }
  ]
};

export const Route = createFileRoute("/mentorship")({
  head: () => ({
    meta: [
      { title: "1:1 AI Automation Mentorship in Telugu — Hyderabad & Online | MOFI AI ₹30,000" },
      { name: "description", content: "Best 1:1 AI automation mentorship in Telugu. Personalized live training for learners in Hyderabad, Telangana & India. 45+ hours, custom curriculum, real projects, free N8N course. ₹30,000." },
      { name: "keywords", content: "AI mentorship Telugu, 1:1 AI training Hyderabad, AI automation coaching Telugu, n8n mentorship Hyderabad, AI agent training Telangana, personalized AI course Telugu, AI training Hyderabad" },
      { property: "og:title", content: "1:1 AI Mentorship in Telugu — Hyderabad | MOFI AI ₹30,000" },
      { property: "og:description", content: "Personalized AI automation mentorship in Telugu for Hyderabad & Telangana learners. 45+ hours live, custom curriculum, free N8N course. ₹30,000." },
      { property: "og:url", content: "https://mofiai.com/mentorship" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "1:1 AI Automation Mentorship Telugu — MOFI AI | Hyderabad" },
      { name: "twitter:description", content: "Best AI automation mentorship in Telugu. Serving Hyderabad & Telangana. 45+ hours, custom curriculum, lifetime access." },
    ],
    links: [
      { rel: "canonical", href: "https://mofiai.com/mentorship" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(mentorshipSchema) },
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
