import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { WorkflowCard } from "./WorkflowCard";

const items = [
  { title: "Real-Time Decision Making", desc: "AI analyzes live data to route tasks, trigger actions, and choose the best next step without waiting for manual input." },
  { title: "Adaptive Execution", desc: "Workflows automatically adjust to changing conditions, exceptions, and priorities—keeping processes moving without interruptions." },
  { title: "Continuous Optimization", desc: "AI monitors performance, detects bottlenecks, and improves workflow efficiency over time based on real usage patterns." },
];

const cardSet = [
  { variant: "trigger" as const, title: "Run this workflow every week on Monday", subtitle: "Start immediately after activation" },
  { variant: "action" as const, title: "Run AI prompt", subtitle: "Send follow-up email introducing our product" },
  { variant: "followup" as const, title: "If AI response status = success", subtitle: "Add to contact lists" },
  { variant: "action" as const, title: "Score and qualify lead", subtitle: "Push to CRM with priority tag" },
];

export function ThinkAdapt() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % cardSet.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
        <div>
          <SectionLabel>AI Support</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-6xl font-display"
          >
            Workflows That<br />Think And Adapt
          </motion.h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Run complex operations with AI-powered decision-making and automation.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center rounded-md bg-lime text-lime-foreground px-6 py-3 text-sm font-semibold min-h-[44px] shadow-md shadow-lime/25 focus-ring cursor-pointer clickable-element"
          >
            Get Started
          </motion.a>
          <div className="mt-12 space-y-6">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-dashed border-border pt-5 relative"
              >
                <span className="absolute -top-1.5 left-0 h-3 w-3 bg-lime" />
                <h4 className="font-semibold">{it.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] hidden md:flex items-center justify-center overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" fill="none">
            <motion.path
              animate={{ pathLength: [0, 1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              d="M 100 80 Q 300 200 100 320 Q -50 440 250 540"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-border"
            />
          </svg>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={idx}
              initial={{ y: 200, opacity: 0, scale: 0.85 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -200, opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute"
            >
              <WorkflowCard
                variant={cardSet[idx].variant}
                title={cardSet[idx].title}
                subtitle={cardSet[idx].subtitle}
                delay={0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
