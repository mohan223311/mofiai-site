import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";

const services = [
  "🤖 AI Agents & Chatbots",
  "🎙️ Voice Agents (Retell Integration)",
  "⚙️ N8N Automation Systems",
  "📱 WhatsApp Business Automation",
  "🔗 API Integrations & Workflows",
  "🏗️ AI Infrastructure Setup",
];

const training = [
  "📚 N8N Mastery Course (₹5,000)",
  "👥 1:1 Personalized Mentorship (₹30,000)",
  "🎓 Live Group Batches (Coming Soon)",
  "🎥 Free YouTube Resources",
];

function Column({
  badge,
  title,
  desc,
  list,
  cta,
  to,
  hash,
  delay = 0,
}: {
  badge: string;
  title: string;
  desc: string;
  list: string[];
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
      whileHover={{ y: -6 }}
      className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
    >
      <span className="absolute top-6 right-6 text-[10px] tracking-widest uppercase text-lime-foreground bg-lime rounded-full px-3 py-1">
        {badge}
      </span>
      <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground">{desc}</p>
      <ul className="mt-6 space-y-3">
        {list.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ delay: delay + i * 0.06 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 text-sm border-b border-dashed border-border pb-3"
          >
            <span className="h-2 w-2 bg-lime" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
      <Link
        to={to}
        hash={hash}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function WhatWeDo() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Our Offerings</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display max-w-3xl"
        >
          Professional Services<br />& Training Programs
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <Column
            badge="Services"
            title="AI Automation Solutions for Business"
            desc="We build intelligent automation systems that scale operations, reduce costs, and eliminate repetitive tasks—from AI chatbots to complete workflow automation."
            list={services}
            cta="View Our Services"
            to="/services"
          />
          <Column
            badge="Training"
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
