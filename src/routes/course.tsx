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

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      { title: "N8N Mastery Course in Telugu — MOFI AI" },
      { name: "description", content: "Master N8N automation & build AI agents from scratch. 20+ hours in Telugu, 6 real projects, ₹5,000 one-time, 1 year access." },
      { property: "og:title", content: "N8N Mastery Course in Telugu — MOFI AI" },
      { property: "og:description", content: "Complete 20+ hour course with 6 end-to-end real-world projects. Beginner-friendly, Telugu-only." },
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
