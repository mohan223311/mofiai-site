import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { GraduationCap, Lightbulb, MessagesSquare, Users, Smartphone, ArrowRight } from "lucide-react";

const support = [
  { i: GraduationCap, t: "5 Dedicated Doubt Sessions", d: "1 hour each (5+ total hours), scheduled on your needs." },
  { i: MessagesSquare, t: "Daily Chat Support", d: "Replies within 10–12 hours max. Often instant during working hours." },
  { i: Users, t: "Private Group Access", d: "Direct communication with both instructors anytime." },
  { i: Smartphone, t: "WhatsApp Quick Support", d: "Fast responses, screenshot/video help, voice messages." },
];

export function ExtendedSupport() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>After Training</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-3xl"
        >
          Extended Support After<br />Training Phase
        </motion.h2>

        {/* Phases */}
        <div className="mt-14 grid md:grid-cols-[1fr_auto_1fr] items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-card border border-border p-7"
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-lg shadow-indigo-500/40 flex items-center justify-center"
            >
              <GraduationCap className="h-6 w-6" />
            </motion.div>
            <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Phase 1</div>
            <h3 className="font-display text-3xl mt-1">20-Day Intensive Training</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Live, customized sessions with both instructors. Learn by building real projects.
            </p>
          </motion.div>

          <div className="hidden md:flex flex-col items-center justify-center">
            <motion.div
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="text-lime"
            >
              <ArrowRight className="h-8 w-8" />
            </motion.div>
            <div className="mt-2 h-24 w-px bg-gradient-to-b from-lime via-lime/40 to-transparent relative overflow-hidden">
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-lime"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-card border border-border p-7"
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="h-14 w-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-500 flex items-center justify-center"
            >
              <Lightbulb className="h-6 w-6" />
            </motion.div>
            <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Phase 2</div>
            <h3 className="font-display text-3xl mt-1">10-Day Extended Support</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Continued mentorship as you implement what you've learned. We're with you all the way.
            </p>
          </motion.div>
        </div>

        {/* support cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {support.map((s, i) => {
            const Icon = s.i;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-card border border-border p-5"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className="h-11 w-11 rounded-xl bg-lime/15 border border-lime/30 text-lime flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h4 className="mt-4 font-medium">{s.t}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
