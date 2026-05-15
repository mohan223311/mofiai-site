import { motion } from "framer-motion";
import { Clock, Rocket, Languages, IndianRupee, Calendar, MessageCircle } from "lucide-react";

const highlights = [
  { icon: Clock, label: "20+ Hours Content" },
  { icon: Rocket, label: "6 Real Projects" },
  { icon: Languages, label: "100% Telugu" },
  { icon: IndianRupee, label: "₹5,000 One-Time" },
  { icon: Calendar, label: "1 Year Access" },
];

export function CourseHero() {
  return (
    <section className="relative bg-dark text-dark-foreground overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 dotted-bg opacity-50" />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-20 -right-40 h-[400px] w-[400px] rounded-full bg-lime/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-lime/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs uppercase tracking-widest text-lime"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          Comprehensive Course
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-5xl"
        >
          Master <span className="text-lime">N8N Automation</span><br />
          & Build AI Agents<br /> from Scratch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Complete 20+ hour course in Telugu — From absolute beginner to expert with 6 real-world projects.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-3">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-sm"
              >
                <motion.span
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                >
                  <Icon className="h-4 w-4 text-lime" />
                </motion.span>
                {h.label}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.superprofile.bio/course/mofiai"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-lime text-lime-foreground px-7 py-3.5 text-sm font-semibold shadow-2xl shadow-lime/20"
          >
            Enroll Now @ ₹5,000 →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#syllabus"
            className="rounded-md border border-white/30 px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            View Complete Syllabus
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex items-center gap-2 text-xs text-white/60"
        >
          <MessageCircle className="h-4 w-4 text-lime" />
          Questions? WhatsApp: <a className="text-lime" href="https://wa.me/919347301449">+91 93473 01449</a>
        </motion.div>
      </div>
    </section>
  );
}
