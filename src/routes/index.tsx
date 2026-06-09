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
import { BlogPreview } from "@/components/site/BlogPreview";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const SITE = "https://mofiai.com";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": "https://mofiai.com/#organization",
      "name": "MOFI AI",
      "legalName": "MOFI AI",
      "alternateName": ["MOFI AI Automation", "MOFI AI Telugu", "MOFI AI Hyderabad"],
      "slogan": "India's #1 AI Automation Training in Telugu",
      "url": "https://mofiai.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mofiai.com/og-image.png",
        "width": 1200,
        "height": 630
      },
      "image": "https://mofiai.com/og-image.png",
      "description": "MOFI AI is India's leading AI automation training institute and agency teaching in Telugu. Founded in 2024 by Shaik Fhiroj and Mohan Rao, MOFI AI offers N8N automation courses, AI agent training, and delivers professional automation services — chatbots, voice agents, WhatsApp bots, and N8N workflows — for businesses in Hyderabad, Telangana, and globally.",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "@id": "https://mofiai.com/#founder-fhiroj",
          "name": "Shaik Fhiroj",
          "jobTitle": "Co-founder & AI Automation Engineer",
          "worksFor": { "@id": "https://mofiai.com/#organization" },
          "knowsAbout": ["N8N Automation", "AI Agents", "WhatsApp Business API", "Workflow Automation", "Voice Agents"],
          "sameAs": ["https://www.youtube.com/@mofiai123-f"]
        },
        {
          "@type": "Person",
          "@id": "https://mofiai.com/#founder-mohan",
          "name": "Mohan Rao",
          "jobTitle": "Co-founder & N8N Automation Expert",
          "worksFor": { "@id": "https://mofiai.com/#organization" },
          "knowsAbout": ["N8N Automation", "AI Training", "Telugu Education", "Workflow Automation", "API Integration"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vijayawada",
        "addressLocality": "Vijayawada",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "520001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.5062,
        "longitude": 80.6480
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-93473-01449",
          "contactType": "customer service",
          "availableLanguage": ["Telugu", "English"],
          "contactOption": "TollFree",
          "areaServed": "IN"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-70759-79578",
          "contactType": "sales",
          "availableLanguage": ["Telugu", "English"],
          "areaServed": "IN"
        },
        {
          "@type": "ContactPoint",
          "email": "profitgrowthai223311@gmail.com",
          "contactType": "customer service"
        }
      ],
      "sameAs": [
        "https://www.youtube.com/@mofiai123-f",
        "https://instagram.com/mofi_ai",
        "https://t.me/ai_telugu_community",
        "https://wa.me/919347301449"
      ],
      "areaServed": [
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "State", "name": "Telangana" },
        { "@type": "State", "name": "Andhra Pradesh" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "New Zealand" }
      ],
      "knowsAbout": [
        "N8N Automation",
        "AI Agents",
        "WhatsApp Automation",
        "Voice Agents",
        "AI Chatbots",
        "Workflow Automation",
        "Retell AI",
        "OpenAI GPT-4",
        "Anthropic Claude",
        "API Integration",
        "Web Scraping",
        "Business Process Automation",
        "Telugu AI Education"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "MOFI AI Courses and Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Course",
              "name": "N8N Mastery Course in Telugu",
              "url": "https://mofiai.com/course",
              "description": "20+ hour self-paced N8N and AI automation course taught in Telugu. 6 real-world projects, 1 year access, ₹5,000.",
              "inLanguage": "te"
            },
            "price": "5000",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "1:1 AI Automation Mentorship",
              "url": "https://mofiai.com/mentorship",
              "description": "Personalized 45+ hour live mentorship in Telugu, ₹30,000."
            },
            "price": "30000",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation Services for Businesses",
              "url": "https://mofiai.com/services",
              "description": "Custom AI chatbots, voice agents, WhatsApp automation, N8N workflows for Hyderabad businesses."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://mofiai.com/#website",
      "url": "https://mofiai.com",
      "name": "MOFI AI",
      "description": "India's #1 AI automation training in Telugu. N8N courses, AI agents training, and automation services for Hyderabad businesses.",
      "publisher": { "@id": "https://mofiai.com/#organization" },
      "inLanguage": ["en", "te"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://mofiai.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://mofiai.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MOFI AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOFI AI is India's leading AI automation training institute and agency that teaches N8N automation, AI agents, WhatsApp automation, and voice agents entirely in Telugu. Founded in 2024 by Shaik Fhiroj and Mohan Rao, MOFI AI also delivers professional automation services for businesses in Hyderabad, Telangana, and globally."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an N8N course in Telugu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MOFI AI offers the most comprehensive N8N course in Telugu — 20+ hours of self-paced video content, 6 real-world projects, 1 year access, private WhatsApp community, and a certificate. Price: ₹5,000. Available at https://mofiai.com/course"
          }
        },
        {
          "@type": "Question",
          "name": "Who are the instructors at MOFI AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOFI AI is founded and taught by Shaik Fhiroj and Mohan Rao — both practicing AI automation engineers who have delivered 20+ real automation projects for clients in India, USA, Singapore, and New Zealand."
          }
        },
        {
          "@type": "Question",
          "name": "Does MOFI AI offer AI automation services in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MOFI AI builds custom AI chatbots, WhatsApp automation systems, voice agents (using Retell AI), N8N workflow automation, and web scraping solutions for businesses in Hyderabad, Telangana, Andhra Pradesh, and globally."
          }
        },
        {
          "@type": "Question",
          "name": "How much does the MOFI AI N8N course cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The self-paced N8N Mastery Course costs ₹5,000 INR. The 1:1 personalized AI mentorship costs ₹30,000 INR. Free tutorials are available on the MOFI AI YouTube channel at https://www.youtube.com/@mofiai123-f"
          }
        },
        {
          "@type": "Question",
          "name": "Is MOFI AI good for beginners with no coding experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MOFI AI courses are designed for complete beginners — no prior coding or technical experience is required. The course is taught step by step in Telugu, making it accessible to anyone in Hyderabad, Telangana or Andhra Pradesh who wants to learn AI automation."
          }
        },
        {
          "@type": "Question",
          "name": "What AI tools does MOFI AI teach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MOFI AI teaches N8N (workflow automation), AI agents using Claude and GPT-4, Retell AI (voice call automation), WhatsApp Business API, web scraping, and custom API/webhook integrations."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact MOFI AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact MOFI AI on WhatsApp at +91 93473 01449 or +91 70759 79578, or by email at profitgrowthai223311@gmail.com. You can also visit https://mofiai.com/contact or message via WhatsApp at https://wa.me/919347301449"
          }
        }
      ]
    },
    {
      "@type": "Speakable",
      "cssSelector": ["h1", ".hero-badge", ".social-proof-strip"]
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOFI AI — #1 N8N & AI Automation Course in Telugu | Hyderabad" },
      { name: "description", content: "India's best N8N automation & AI agents course in Telugu. Trusted by businesses in Hyderabad, Telangana & globally. Learn AI chatbots, voice agents, WhatsApp automation & N8N workflows. Enroll from ₹5,000." },
      { name: "keywords", content: "n8n course Hyderabad, AI automation course Telugu, n8n training Hyderabad, AI agents training Telugu, AI automation Hyderabad, WhatsApp automation Hyderabad, n8n Telugu, AI course Telangana, automation training Telugu, MOFI AI Hyderabad" },
      { property: "og:title", content: "MOFI AI — #1 N8N & AI Automation Course in Telugu | Hyderabad" },
      { property: "og:description", content: "India's best N8N automation & AI agents training in Telugu. AI chatbots, voice agents, WhatsApp automation for Hyderabad businesses. Enroll from ₹5,000." },
      { property: "og:url", content: "https://mofiai.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "MOFI AI — #1 N8N & AI Automation Course in Telugu | Hyderabad" },
      { name: "twitter:description", content: "Best N8N automation & AI agents course in Telugu. Trusted by Hyderabad & Telangana learners. From ₹5,000." },
    ],
    links: [
      { rel: "canonical", href: "https://mofiai.com/" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(homeSchema) },
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
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}
