import { motion } from "framer-motion";
import { 
  ArrowRight,
  Bot, 
  Mic, 
  Settings, 
  MessageSquare, 
  Link as LinkIcon, 
  Cpu, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Video 
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";

interface ListItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: ListItem[] = [
  { label: "AI Agents & Chatbots", icon: Bot },
  { label: "Voice Agents (Retell Integration)", icon: Mic },
  { label: "N8N Automation Systems", icon: Settings },
  { label: "WhatsApp Business Automation", icon: MessageSquare },
  { label: "API Integrations & Workflows", icon: LinkIcon },
  { label: "AI Infrastructure Setup", icon: Cpu },
];

const training: ListItem[] = [
  { label: "N8N Mastery Course (₹5,000)", icon: BookOpen },
  { label: "1:1 Personalized Mentorship (₹30,000)", icon: Users },
  { label: "Live Group Batches (Coming Soon)", icon: GraduationCap },
  { label: "Free YouTube Resources", icon: Video },
];

function Column({
  title,
  desc,
  list,
  cta,
  to,
  hash,
  delay = 0,
}: {
  title: string;
  desc: string;
  list: ListItem[];
  cta: string;
  to: string;
  hash?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px -16px oklch(0.18 0.025 180 / 0.14)" }}
      className="relative rounded-2xl border border-border bg-card p-5 md:p-8 shadow-sm transition-shadow"
    >
      <h3 className="font-display text-3xl md:text-4xl leading-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground">{desc}</p>
      <ul className="mt-6 space-y-3">
        {list.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ delay: delay + i * 0.06 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-sm border-b border-dashed border-border pb-3 text-foreground/80 hover:text-foreground transition-colors"
            >
              <Icon className="h-4 w-4 text-lime shrink-0" />
              <span>{item.label}</span>
            </motion.li>
          );
        })}
      </ul>
      <Link
        to={to}
        hash={hash}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105 focus-ring cursor-pointer clickable-element"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function WhatWeDo() {
  return (
    <section className="bg-background py-24 md:py-32 relative">
      {/* Subtle top separator gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>Our Offerings</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display"
          >
            Professional Services
            <br />
            <span className="text-foreground/40">& Training Programs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            We offer enterprise-grade automation solutions alongside comprehensive learning programs—all in Telugu.
          </motion.p>
        </div>

        <div className="mt-14 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          <Column
            title="AI Automation Solutions for Business"
            desc="We build intelligent automation systems that scale operations, reduce costs, and eliminate repetitive tasks—from AI chatbots to complete workflow automation."
            list={services}
            cta="View Our Services"
            to="/services"
          />
          <Column
            title="Learn AI Automation from Experts"
            desc="Master n8n automation and AI agents through comprehensive Telugu courses. From self-paced learning to personalized mentorship programs."
            list={training}
            cta="Explore Courses"
            to="/"
            hash="courses"
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
