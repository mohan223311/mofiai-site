import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Workflow, Brain, Plug, Activity, Zap, Shield } from "lucide-react";

const tags = [
  ["Qualify leads", "Support sales reps", "Answer FAQs", "Assist customers"],
  ["Create tickets", "Create images", "Simplify concepts", "Generate posts", "Assist"],
  ["Uncover sales leads", "Centralize leads", "Coach sales reps", "AI voice summary"],
  ["Score calls", "Prepare for calls", "Implement IT support", "Help customers"],
];

const features = [
  { icon: Workflow, title: "Visual Workflow Builder", desc: "Design workflows using a drag-and-drop canvas. Build complex logic without code and deploy changes instantly." },
  { icon: Brain, title: "AI-Powered Decision Logic", desc: "Use AI to analyze data, classify inputs, and decide the next action automatically—reducing manual intervention." },
  { icon: Plug, title: "App Integrations", desc: "Connect seamlessly with your existing tools and systems to automate actions across your entire tech stack." },
  { icon: Activity, title: "Real-Time Monitoring & Logs", desc: "Track workflow status, execution history, and performance in real time to quickly identify issues or bottlenecks." },
  { icon: Zap, title: "Conditional Rules & Triggers", desc: "Trigger workflows based on events, schedules, or conditions to ensure the right action happens at the right time." },
  { icon: Shield, title: "Secure & Scalable Execution", desc: "Run workflows reliably at high volume with enterprise-grade security, permissions, and access control." },
];

export function Features() {
  return (
    <section className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="space-y-4 mb-16 overflow-hidden">
          {tags.map((row, ri) => (
            <motion.div
              key={ri}
              animate={{ x: ri % 2 === 0 ? ["-10%", "0%", "-10%"] : ["10%", "0%", "10%"] }}
              transition={{ duration: 12 + ri * 2, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 whitespace-nowrap"
            >
              {row.map((t) => (
                <motion.div
                  key={t}
                  whileHover={{ scale: 1.08, color: "var(--lime)" }}
                  className="flex items-center gap-3"
                >
                  <span className="h-2 w-2 bg-lime/60" />
                  <span className="border border-white/15 rounded-md px-5 py-2.5 text-white/80">{t}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <SectionLabel light>Features</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display"
        >
          Powerful Features<br />For Automated Workflows
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-md">
          Everything you need to design, run, and scale workflows across teams and tools.
        </p>
        <motion.button whileHover={{ scale: 1.05 }} className="mt-6 rounded-md bg-lime text-lime-foreground px-5 py-2.5 text-sm font-medium">
          Get Started
        </motion.button>

        <div className="mt-16 grid md:grid-cols-3 gap-x-10 gap-y-12 border-t border-dashed border-white/15 pt-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <span className="absolute -top-12 left-0 h-3 w-3 bg-lime" />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-lime/10 border border-lime/30 text-lime"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h4 className="font-semibold">{f.title}</h4>
                <p className="mt-2 text-sm text-white/60">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
