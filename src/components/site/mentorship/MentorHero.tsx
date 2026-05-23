import { motion } from "framer-motion";
import { Users, Globe, Sparkles, Crown, Diamond, Star } from "lucide-react";

export function MentorHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-28 text-white"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% -10%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(167,139,250,0.18), transparent 60%), linear-gradient(180deg,#0a0805 0%,#120c04 45%,#0a0805 100%)",
      }}
    >
      {/* Gold mesh dots */}
      <div className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212,175,55,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Animated gold rings */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(212,175,55,0.35), transparent 40%, rgba(255,233,160,0.25), transparent 80%)",
          filter: "blur(60px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.3), transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating premium icons */}
      {[Crown, Diamond, Sparkles, Star, Users, Globe].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{
            top: `${12 + (i % 3) * 24}%`,
            right: `${4 + (i % 2) * 8 + i * 2}%`,
            left: i > 3 ? `${4 + i * 2}%` : undefined,
          }}
          animate={{ y: [0, -18, 0], rotate: [0, 360] }}
          transition={{
            y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20 + i * 4, repeat: Infinity, ease: "linear" },
          }}
        >
          <div
            className="h-14 w-14 rounded-2xl flex items-center justify-center backdrop-blur border"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(167,139,250,0.12))",
              borderColor: "rgba(212,175,55,0.45)",
              boxShadow:
                "0 10px 30px -10px rgba(212,175,55,0.5), inset 0 0 20px rgba(212,175,55,0.15)",
            }}
          >
            <Icon className="h-6 w-6" style={{ color: "#FFD76A" }} />
          </div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.22em] font-bold"
          style={{
            background: "linear-gradient(90deg,#fde68a,#D4AF37,#FFE9A0)",
            color: "#2a1f0a",
            boxShadow: "0 10px 30px -10px rgba(212,175,55,0.8)",
          }}
        >
          <Crown className="h-3.5 w-3.5" /> Exclusive · Invitation Only
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-5xl"
        >
          The Private{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#FFE9A0,#D4AF37,#FFE9A0)",
            }}
          >
            1:1 AI Mentorship
          </span>
          <br />
          Reserved for Serious Builders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-amber-50/75"
        >
          A bespoke mentorship crafted around your goals — direct access to both
          instructors, a fully customized curriculum, and white-glove support
          until you ship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full px-5 py-2.5 text-sm"
          style={{
            background: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.35)",
            boxShadow: "inset 0 0 30px rgba(212,175,55,0.08)",
          }}
        >
          <Star className="h-4 w-4" style={{ color: "#FFD76A" }} />
          <span className="text-amber-50">4 Students Successfully Trained</span>
          <span className="text-amber-100/30">|</span>
          <Globe className="h-4 w-4" style={{ color: "#FFD76A" }} />
          <span className="text-amber-50">Clients in 4 Countries</span>
          <span className="text-amber-100/30">|</span>
          <Diamond className="h-4 w-4" style={{ color: "#FFD76A" }} />
          <span className="text-amber-50">Lifetime Access</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/919347301449?text=I'm%20interested%20in%20the%201:1%20Mentorship%20Program"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold"
            style={{
              background: "linear-gradient(90deg,#FFE9A0,#D4AF37)",
              color: "#2a1f0a",
              boxShadow: "0 18px 40px -12px rgba(212,175,55,0.8)",
            }}
          >
            <Crown className="h-4 w-4" /> Claim Your Seat
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="#program-details"
            className="inline-flex items-center gap-2 rounded-md border px-7 py-3.5 text-sm font-medium text-amber-50 hover:bg-amber-400/10 transition-colors"
            style={{ borderColor: "rgba(212,175,55,0.5)" }}
          >
            See What's Inside →
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-xs uppercase tracking-[0.25em] text-amber-200/60"
        >
          ✦ Limited to a handful of mentees per quarter
        </motion.p>
      </div>
    </section>
  );
}
