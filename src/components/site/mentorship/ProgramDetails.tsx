import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Check } from "lucide-react";

const includes = [
  "Total Duration: 45+ Hours (25 hours live + 20 hours pre-recorded)",
  "FREE N8N Course (₹5,000 value) included",
  "1-on-1 Private Group with Both Instructors — Direct access anytime",
  "Completely Customized Based on Your Specific Goals",
  "Live Step-by-Step Training with Personal Guidance",
  "All Sessions Recorded & Shared Immediately After Each Session",
  "Lifetime Access to All Content and Recordings",
];

export function ProgramDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Complete Program</SectionLabel>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          className="relative mt-8 rounded-3xl bg-dark text-dark-foreground p-8 md:p-12 border border-lime/30 overflow-hidden"
        >
          <div className="absolute inset-0 dotted-bg opacity-30" />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-lime/20 blur-3xl"
          />

          <div className="relative">
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime-foreground animate-pulse" />
              Recommended
            </motion.span>

            <h2 className="mt-5 font-display text-5xl md:text-6xl leading-tight">
              1-on-1 Mentorship<br />Program
            </h2>
            <div className="mt-6 flex items-end gap-3">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" }}
                className="font-display text-7xl text-lime"
              >
                ₹30,000
              </motion.span>
              <span className="text-white/60 mb-3">The most comprehensive training we offer</span>
            </div>

            <ul className="mt-10 grid md:grid-cols-2 gap-3">
              {includes.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-white/85 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
                >
                  <span className="h-5 w-5 rounded-full bg-lime/20 text-lime flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  {it}
                </motion.li>
              ))}
            </ul>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-10 border-l-2 border-lime pl-5 italic text-white/80 max-w-3xl"
            >
              "You learn LIVE, step-by-step, with two experienced instructors guiding you personally
              through every concept. This isn't a course — it's personalized mentorship."
            </motion.blockquote>

            <div className="mt-10 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919347301449?text=I'm%20interested%20in%20the%201:1%20Mentorship%20Program"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-lime text-lime-foreground px-7 py-3.5 text-sm font-semibold shadow-2xl shadow-lime/30"
              >
                Book Mentorship — ₹30,000 →
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#payment"
                className="rounded-md border border-white/30 px-7 py-3.5 text-sm font-medium hover:bg-white/5"
              >
                See Payment Options
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
