import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Video, Lightbulb, Film } from "lucide-react";

const rows = [
  { i: Video, t: "Live Classes", h: 25, pct: 50, color: "bg-lime", desc: "1:1 personalized sessions, real-time problem solving, custom project development." },
  { i: Lightbulb, t: "Doubt Solving Sessions", h: 5, pct: 10, color: "bg-amber-400", desc: "Dedicated time for your questions. Deep dive, troubleshooting, debugging." },
  { i: Film, t: "Pre-Recorded Content", h: 20, pct: 40, color: "bg-purple-400", desc: "Complete N8N Course (₹5,000 value) + supplementary learning material." },
];

export function TimeBreakdown() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Training Breakdown</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl"
        >
          Complete Training<br />Breakdown
        </motion.h2>

        <div className="mt-14 space-y-4">
          {rows.map((r, i) => {
            const Icon = r.i;
            return (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-card border border-border p-6"
              >
                <div className="flex items-center gap-4 flex-wrap">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
                    className="h-12 w-12 rounded-xl bg-dark text-lime flex items-center justify-center"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl">{r.t}</h3>
                      <span className="font-mono text-lime">{r.h} hours</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.pct}%` }}
                    transition={{ duration: 1.2, delay: i * 0.15 }}
                    className={`h-full ${r.color} relative`}
                  >
                    <motion.span
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 rounded-2xl bg-dark text-dark-foreground p-6 flex items-center justify-between flex-wrap gap-4 border border-lime/30"
        >
          <div>
            <div className="text-xs uppercase tracking-widest text-lime">Total Duration</div>
            <div className="font-display text-4xl mt-1">50 Hours</div>
          </div>
          <div className="text-sm text-white/70 max-w-md">
            ✓ All live sessions will be recorded and shared with lifetime access.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
