import { motion } from "framer-motion";
import { Users, Globe, Sparkles } from "lucide-react";

export function MentorHero() {
  return (
    <section className="relative bg-dark text-dark-foreground overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 dotted-bg opacity-50" />
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute top-10 -right-40 h-[460px] w-[460px] rounded-full bg-lime/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-purple-500/15 blur-3xl"
      />

      {/* floating orbiting icons */}
      {[Users, Globe, Sparkles].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{ top: `${20 + i * 22}%`, right: `${8 + i * 6}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ y: { duration: 4 + i, repeat: Infinity }, rotate: { duration: 18 + i * 4, repeat: Infinity, ease: "linear" } }}
        >
          <div className="h-14 w-14 rounded-2xl bg-lime/10 border border-lime/30 flex items-center justify-center backdrop-blur">
            <Icon className="h-6 w-6 text-lime" />
          </div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs uppercase tracking-widest text-lime"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          Personalized Training
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-5xl"
        >
          1:1 <span className="text-lime">AI Mentorship</span><br />
          Tailored to Your Goals
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Personalized AI learning with direct instructor guidance — completely customized for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full border border-lime/30 bg-lime/5 px-5 py-2.5 text-sm"
        >
          <span className="text-lime">✓</span> 4 Students Successfully Trained
          <span className="text-white/30">|</span>
          <span className="text-lime">🌍</span> Clients in 4 Countries
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/919347301449?text=I'm%20interested%20in%20the%201:1%20Mentorship%20Program"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-lime text-lime-foreground px-7 py-3.5 text-sm font-semibold shadow-2xl shadow-lime/30"
          >
            Customize Your Learning Plan →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
