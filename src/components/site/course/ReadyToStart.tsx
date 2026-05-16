import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

export function ReadyToStart() {
  return (
    <section className="relative bg-dark text-dark-foreground py-24 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-lime/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-6xl"
        >
          Ready to Start?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-white/70 max-w-2xl mx-auto"
        >
          Join students, professionals, and entrepreneurs mastering AI automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.superprofile.bio/course/mofiai"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-lime text-lime-foreground px-7 py-3.5 text-sm font-semibold shadow-2xl shadow-lime/20"
          >
            Enroll in N8N Course — ₹5,000
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/919347301449"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/30 px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Explore 1:1 Mentorship
          </motion.a>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <a className="flex items-center gap-2 hover:text-lime" href="https://wa.me/919347301449">
            <MessageCircle className="h-4 w-4 text-lime" /> +91 93473 01449
          </a>
          <a className="flex items-center gap-2 hover:text-lime" href="https://wa.me/917075979578">
            <MessageCircle className="h-4 w-4 text-lime" /> +91 70759 79578
          </a>
          <a className="flex items-center gap-2 hover:text-lime" href="mailto:profitgrowthai223311@gmail.com">
            <Mail className="h-4 w-4 text-lime" /> profitgrowthai223311@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
