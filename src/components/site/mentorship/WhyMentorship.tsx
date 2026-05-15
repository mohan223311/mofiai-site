import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Sparkles, Zap, Wrench, Bot, Target, UsersRound, Briefcase } from "lucide-react";

const benefits = [
  { i: Sparkles, t: "Personalized Teaching", h: "Curriculum Adapted to YOU", d: "Not generic content. Your goals, your industry, your projects." },
  { i: Zap, t: "Faster Learning Path", h: "Cut Learning Time by 60%", d: "Direct guidance eliminates trial-and-error. Learn in weeks what takes months alone." },
  { i: Wrench, t: "Custom-Built Projects", h: "Real Projects for Your Portfolio", d: "Build actual projects you can use for your business or showcase to clients." },
  { i: Bot, t: "Advanced Topics", h: "Agentic AI & Voice Agents", d: "Cutting-edge topics not covered in standard courses — Retell, orchestration, production deployment." },
  { i: Target, t: "Deep Training", h: "45+ Hours Comprehensive", d: "More than double the standard course duration. Master every aspect thoroughly." },
  { i: UsersRound, t: "Direct Instructor Access", h: "Personal Mentorship", d: "Both instructors personally involved. Available for questions even after completion." },
  { i: Briefcase, t: "Start Earning ASAP", h: "Deploy Real Automations", d: "Build production-ready solutions during training. Many students freelance before completing." },
];

export function WhyMentorship() {
  return (
    <section className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel light>Why 1:1</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-4xl"
        >
          Why 1:1 is Your<br /><span className="text-shimmer-dark">Best Investment</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-white/70">
          If your goal is mastery, client projects, or building real automations, 1:1 mentorship is the clear winner.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.i;
            return (
              <motion.div
                key={b.h}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8, rotate: -0.4 }}
                className="relative rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur p-6 overflow-hidden group"
              >
                <motion.div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-lime/20 blur-2xl opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], y: [0, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i * 0.15 }}
                  className="relative h-12 w-12 rounded-xl bg-lime/20 border border-lime/40 text-lime flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <div className="mt-4 text-xs uppercase tracking-widest text-white/60">{b.t}</div>
                <h3 className="font-display text-xl mt-1 text-white">{b.h}</h3>
                <p className="mt-2 text-sm text-white/70">{b.d}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-12 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/919347301449?text=I'm%20interested%20in%20the%201:1%20Mentorship%20Program"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-lime text-lime-foreground px-8 py-4 text-sm font-semibold shadow-2xl shadow-lime/30"
          >
            Book Your 1:1 Mentorship — ₹30,000 →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
