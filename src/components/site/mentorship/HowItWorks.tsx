import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { AnimatedLines } from "../AnimatedHeading";
import { BookOpen, Clock, Video } from "lucide-react";

const topics = [
  "ChatGPT & Prompt Engineering",
  "AI Agents & Orchestration",
  "n8n Workflow Automation",
  "Vibe Coding & Web Development",
  "Custom Topics (Your Choice)",
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>How It Works</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-3xl"
        >
          Learn Anything.<br />Anywhere. In <span className="text-lime">AI</span>.
        </motion.h2>
        <p className="mt-4 text-muted-foreground">Get started in just 3 simple steps</p>

        <div className="relative mt-16 grid md:grid-cols-3 gap-6">
          {/* connecting animated line */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-px bg-border overflow-hidden">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_2px_oklch(0.88_0.16_125/0.8)]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-lime/60"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.3 }}
            />
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-lime/40"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2.6 }}
            />
          </div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl bg-card border border-border p-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="h-12 w-12 rounded-xl bg-lime/15 border border-lime/30 text-lime flex items-center justify-center"
              >
                <BookOpen className="h-5 w-5" />
              </motion.div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Step 01</div>
            </div>
            <h3 className="mt-5 font-display text-2xl">Select What You Want to Learn</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {topics.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {t}
                </motion.li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Choose from our core topics or completely customize your own learning path.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl bg-card border border-border p-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="h-12 w-12 rounded-xl bg-lime/15 border border-lime/30 text-lime flex items-center justify-center"
              >
                <Clock className="h-5 w-5" />
              </motion.div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Step 02</div>
            </div>
            <h3 className="mt-5 font-display text-2xl">Select Session Duration</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {["1 Hour / Session", "2 Hours / Session"].map((d) => (
                <div key={d} className="rounded-lg border border-border bg-secondary/40 px-3 py-3 text-center">
                  {d}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              1-day gap between sessions for practice and implementation.
            </p>
            {/* timeline */}
            <div className="mt-5 flex items-center gap-1.5 overflow-hidden">
              {["S1", "•", "S2", "•", "S3", "•", "S4"].map((n, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className={`text-[10px] font-mono px-2 py-1 rounded ${n === "•" ? "text-muted-foreground" : "bg-lime/15 text-lime border border-lime/30"}`}
                >
                  {n}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl bg-card border border-border p-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-12 w-12 rounded-xl bg-red-500/15 border border-red-500/30 text-red-500 flex items-center justify-center relative"
              >
                <Video className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              </motion.div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Step 03</div>
            </div>
            <h3 className="mt-5 font-display text-2xl">Join Live & Learn</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Real-time interaction with both instructors. Ask questions instantly, get personalized guidance, learn by doing.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs rounded-full bg-lime/10 border border-lime/30 text-lime px-3 py-1.5">
              <span>✓</span> All recordings provided · lifetime access
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
