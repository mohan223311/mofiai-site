import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail } from "lucide-react";

export function MentorFinalCTA() {
  return (
    <section className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-lime/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-7xl leading-[1.05]"
        >
          Ready for<br /><span className="text-lime">Personalized AI Mastery?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white/70 max-w-2xl mx-auto"
        >
          Join our exclusive 1:1 program and learn directly from instructors with proven global client experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/919347301449?text=Hi,%20I'm%20interested%20in%20the%201:1%20Mentorship%20Program"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-lime text-lime-foreground px-8 py-4 text-sm font-semibold shadow-2xl shadow-lime/30"
          >
            Book 1:1 Mentorship — ₹30,000 →
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/course"
              className="inline-flex rounded-md border border-white/30 px-8 py-4 text-sm font-medium hover:bg-white/10"
            >
              Or Start with N8N Course @ ₹5,000
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/70"
        >
          <a href="https://wa.me/919347301449" className="inline-flex items-center gap-2 hover:text-lime">
            <MessageCircle className="h-4 w-4 text-lime" /> +91 93473 01449
          </a>
          <a href="https://wa.me/917075979578" className="inline-flex items-center gap-2 hover:text-lime">
            <MessageCircle className="h-4 w-4 text-lime" /> +91 70759 79578
          </a>
          <a href="mailto:profitgrowthai223311@gmail.com" className="inline-flex items-center gap-2 hover:text-lime">
            <Mail className="h-4 w-4 text-lime" /> profitgrowthai223311@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
