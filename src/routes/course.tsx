import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CourseHero } from "@/components/site/course/CourseHero";
import { CourseOverview } from "@/components/site/course/CourseOverview";
import { WhoShouldEnroll } from "@/components/site/course/WhoShouldEnroll";
import { Syllabus } from "@/components/site/course/Syllabus";
import { CourseProjects } from "@/components/site/course/CourseProjects";
import { WhatYouGet } from "@/components/site/course/WhatYouGet";
import { CourseTestimonials } from "@/components/site/course/CourseTestimonials";
import { Pricing } from "@/components/site/course/Pricing";
import { FAQ } from "@/components/site/course/FAQ";
import { ReadyToStart } from "@/components/site/course/ReadyToStart";

const courseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "N8N Mastery Course in Telugu",
      "description": "Comprehensive 20+ hour self-paced course on N8N automation and AI agents, taught entirely in Telugu. Covers 22 sections, 6 real-world projects, with 1 year access and a private WhatsApp community.",
      "url": "https://mofiai.com/course",
      "inLanguage": "te",
      "provider": {
        "@type": "Organization",
        "@id": "https://mofiai.com/#organization",
        "name": "MOFI AI",
        "url": "https://mofiai.com"
      },
      "educationalLevel": "Beginner",
      "teaches": ["N8N automation", "AI agents", "workflow automation", "API integration", "WhatsApp automation"],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT20H",
        "inLanguage": "te",
        "location": { "@type": "VirtualLocation", "url": "https://mofiai.com/course" }
      },
      "offers": {
        "@type": "Offer",
        "price": "5000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.superprofile.bio/course/mofiai",
        "validFrom": "2024-01-01"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "10",
        "bestRating": "5"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mofiai.com/" },
        { "@type": "ListItem", "position": 2, "name": "N8N Course", "item": "https://mofiai.com/course" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the MOFI AI N8N Mastery Course?",
          "acceptedAnswer": { "@type": "Answer", "text": "The MOFI AI N8N Mastery Course is a 20+ hour self-paced course on N8N automation and AI agents taught entirely in Telugu. It covers 22 sections and 6 real-world automation projects. Students get 1 year of content access and access to a private WhatsApp community. Price: ₹5,000." }
        },
        {
          "@type": "Question",
          "name": "How much does the N8N course in Telugu cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "The N8N Mastery Course by MOFI AI costs ₹5,000 INR as a one-time payment. It includes 1 year access to all 20+ hours of video content, 6 project files, and lifetime WhatsApp community support." }
        },
        {
          "@type": "Question",
          "name": "Is the MOFI AI N8N course available in Telugu?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, the entire MOFI AI N8N course is taught in Telugu. It is the most comprehensive N8N automation course available in the Telugu language, designed specifically for learners in Hyderabad, Telangana, and Andhra Pradesh." }
        },
        {
          "@type": "Question",
          "name": "Can beginners with no coding experience join the N8N course?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. The MOFI AI N8N course is beginner-friendly. No prior programming, coding, or technical experience is required. The course starts from absolute basics and gradually covers advanced automation topics." }
        },
        {
          "@type": "Question",
          "name": "What projects do students build in the N8N course?",
          "acceptedAnswer": { "@type": "Answer", "text": "Students build 6 real-world automation projects including AI chatbots, WhatsApp automation systems, voice agents, workflow automations, and API integrations — the same type of projects delivered to real clients." }
        },
        {
          "@type": "Question",
          "name": "What is N8N and why should I learn it?",
          "acceptedAnswer": { "@type": "Answer", "text": "N8N is an open-source workflow automation tool that lets you connect apps, APIs, and AI models without writing code. Learning N8N is one of the most in-demand skills in 2025 for freelancers and businesses. MOFI AI teaches it in Telugu so anyone in Hyderabad and Telangana can learn it." }
        },
        {
          "@type": "Question",
          "name": "Does the N8N course include a certificate?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Students who complete the MOFI AI N8N Mastery Course receive a course completion certificate." }
        },
        {
          "@type": "Question",
          "name": "What is the best N8N course in Telugu?",
          "acceptedAnswer": { "@type": "Answer", "text": "MOFI AI's N8N Mastery Course is widely recognized as the best N8N course in Telugu. It is the only course that teaches N8N automation comprehensively in Telugu with real-world projects, instructor support, and community access." }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Start Learning N8N Automation in Telugu",
      "description": "Step-by-step guide to starting your N8N automation learning journey in Telugu with MOFI AI.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Watch free tutorials", "text": "Start with free N8N tutorials in Telugu on the MOFI AI YouTube channel at https://www.youtube.com/@mofiai123-f to understand the basics." },
        { "@type": "HowToStep", "position": 2, "name": "Enroll in the N8N Mastery Course", "text": "Enroll in the MOFI AI N8N Mastery Course at https://mofiai.com/course for ₹5,000 to get 20+ hours of structured Telugu content and 6 real projects." },
        { "@type": "HowToStep", "position": 3, "name": "Build your first automation", "text": "Follow the beginner modules to build your first N8N workflow — no coding required." },
        { "@type": "HowToStep", "position": 4, "name": "Complete the 6 real projects", "text": "Work through all 6 real-world projects in the course to build a portfolio of AI automations." },
        { "@type": "HowToStep", "position": 5, "name": "Join the WhatsApp community", "text": "Get support and network with other Telugu automation learners in the MOFI AI private WhatsApp community included with the course." }
      ]
    }
  ]
};

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      { title: "Best N8N Course in Telugu — 20+ Hours | AI Automation Training Hyderabad ₹5,000" },
      { name: "description", content: "Best N8N automation & AI agents course in Telugu. Trusted by learners in Hyderabad, Telangana & across India. 20+ hours, 6 real projects, 1 year access. Enroll for ₹5,000. Beginner-friendly." },
      { name: "keywords", content: "n8n course Telugu, n8n course Hyderabad, AI automation course Telugu, n8n training Hyderabad, AI agents course Telugu, n8n automation Hyderabad, best automation course Telugu, n8n Telugu Telangana, MOFI AI course" },
      { property: "og:title", content: "Best N8N Course in Telugu — AI Automation Training | MOFI AI ₹5,000" },
      { property: "og:description", content: "Top-rated N8N automation course in Telugu for Hyderabad & Telangana. 20+ hours, 6 projects, private community. ₹5,000 one-time." },
      { property: "og:url", content: "https://mofiai.com/course" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Best N8N Course in Telugu — MOFI AI ₹5,000 | Hyderabad" },
      { name: "twitter:description", content: "Top N8N automation course in Telugu for Hyderabad & Telangana learners. 20+ hours, 6 real projects, lifetime access." },
    ],
    links: [
      { rel: "canonical", href: "https://mofiai.com/course" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(courseSchema) },
    ],
  }),
  component: CoursePage,
});

function CoursePage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <CourseHero />
      <CourseOverview />
      <WhoShouldEnroll />
      <Syllabus />
      <CourseProjects />
      <WhatYouGet />
      <CourseTestimonials />
      <Pricing />
      <FAQ />
      <ReadyToStart />
      <Footer />
    </div>
  );
}
