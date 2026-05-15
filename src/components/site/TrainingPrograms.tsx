import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";

const programs = [
  {
    icon: BookOpen,
    badge: "Self-Paced",
    title: "N8N Mastery Course",
    duration: "20+ Hours",
    language: "Telugu",
    price: "₹5,000",
    desc: "Comprehensive self-paced video course covering n8n automation from beginner to expert level.",
    includes: ["22 detailed sections", "6 end-to-end real-world projects", "1 year course access", "Private WhatsApp community", "Weekly doubt sessions"],
    best: "Self-learners, students, budget-conscious professionals",
    cta: "Learn More",
    to: "/course" as const,
  },
  {
    icon: Users,
    badge: "Recommended",
    title: "1:1 Mentorship",
    duration: "45+ Hours (25 live + 20 recorded)",
    language: "Telugu",
    price: "₹30,000",
    desc: "Personalized live training customized to your specific goals with direct instructor guidance.",
    includes: ["Completely customized curriculum", "1-on-1 private group with instructors", "Free N8N course (₹5,000 value)", "10 days extended support", "5 private doubt sessions", "Lifetime access"],
    best: "Serious learners, client project goals, career switchers",
    cta: "Learn More",
    highlight: true,
    to: "/mentorship" as const,
  },
  {
    icon: GraduationCap,
    badge: "Coming Soon",
    title: "Live Group Batches",
    duration: "4-Week Program",
    language: "Telugu",
    price: "Join Waitlist",
    desc: "Learn together with a cohort in live group sessions with peer collaboration and projects.",
    includes: ["2 live sessions per week", "Group projects and assignments", "Peer learning and networking", "Lifetime recordings access"],
    best: "Group learners, networking seekers",
    cta: "Learn More",
    to: "/batches" as const,
  },
];

export function TrainingPrograms() {
  return (
    <section id="courses" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Learning Paths</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display max-w-3xl"
        >
          Master AI<br />Automation Skills
        </motion.h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          Choose the learning path that fits your goals and schedule.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-80px" }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-7 border ${
                  p.highlight
                    ? "bg-dark text-dark-foreground border-lime shadow-2xl"
                    : "bg-card border-border"
                }`}
              >
                <span className={`absolute top-5 right-5 text-[10px] uppercase tracking-widest rounded-full px-3 py-1 ${
                  p.highlight ? "bg-lime text-lime-foreground" : "bg-foreground/10 text-foreground"
                }`}>
                  {p.badge}
                </span>
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                    p.highlight ? "bg-lime/20 text-lime" : "bg-lime/15 text-lime-foreground border border-lime/40"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                <div className={`mt-2 text-sm ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                  {p.duration} · {p.language}
                </div>
                <div className="mt-4 font-display text-4xl">{p.price}</div>
                <p className={`mt-4 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-2 border-t border-dashed border-current/20 pt-4">
                  {p.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                      <span className={p.highlight ? "text-white/80" : ""}>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-5 text-xs ${p.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                  Best for: {p.best}
                </div>
                <Link
                  to={p.to}
                  className={`mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105 ${
                    p.highlight ? "bg-lime text-lime-foreground" : "bg-foreground text-background"
                  }`}
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
