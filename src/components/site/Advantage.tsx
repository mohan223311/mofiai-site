import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const stats = [
  { value: "+380%", label: "Faster Execution", desc: "AI-driven workflows adapt in real time, eliminating manual handoffs and accelerating process completion across teams." },
  { value: "90%", label: "Fewer Manual Errors", desc: "Standardized, automated execution reduces human error and ensures consistent outcomes at scale." },
  { value: "3×", label: "Operational Scalability", desc: "Handle higher workload and complexity without adding headcount or operational overhead." },
];

const pills = [
  { label: "When this happens", pos: "top-[35%] left-[8%]" },
  { label: "Then do this", pos: "top-[20%] right-[10%]" },
  { label: "Followed-Up", pos: "top-[55%] right-[5%]" },
];

export function Advantage() {
  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative h-[380px] mb-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0"
          >
            <div className="relative">
              <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-b from-muted to-transparent flex items-start justify-center pt-24">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 rounded-full bg-card shadow-xl flex items-center justify-center"
                >
                  <Globe className="h-20 w-20 text-foreground/80" strokeWidth={1} />
                </motion.div>
              </div>
            </div>
          </motion.div>
          {pills.map((p, i) => (
            <motion.div
              key={p.label}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className={`absolute ${p.pos} bg-card border border-border rounded-full px-4 py-2 text-sm shadow-lg flex items-center gap-2`}
            >
              <span className="text-lime">●</span>
              {p.label}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <SectionLabel>Advantage</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 text-5xl md:text-6xl font-display"
            >
              The Real Advantage<br />Of AI Automation At Scale
            </motion.h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Intelligent automation that improves speed, accuracy, and consistency across every process.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 rounded-md bg-lime text-lime-foreground px-5 py-2.5 text-sm font-medium"
            >
              Get Started
            </motion.button>

            {/* Continuous flowing balls line */}
            <div className="relative mt-10 h-6 w-full overflow-hidden">
              <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-border" />
              {[0, 0.6, 1.2, 1.8, 2.4, 3.0, 3.6].map((d, i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(190,242,100,0.6)]"
                  initial={{ x: "-5%" }}
                  animate={{ x: "105%" }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: d }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-dashed border-border pt-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <span className="absolute -top-12 left-0 h-3 w-3 bg-lime" />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className="text-5xl font-display"
              >
                {s.value}
              </motion.div>
              <div className="mt-3 font-semibold">{s.label}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
