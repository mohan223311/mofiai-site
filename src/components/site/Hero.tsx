import { motion } from "framer-motion";

const floatingLabels = [
  { label: "Voice Agent 🎙️", x: 6, y: 12 },
  { label: "N8N ⚙️", x: 86, y: 18 },
  { label: "WhatsApp Bot 💬", x: 4, y: 58 },
  { label: "AI Agent 🤖", x: 84, y: 54 },
  { label: "Automation 🔄", x: 14, y: 33 },
  { label: "API 🔗", x: 80, y: 38 },
  { label: "Lead Scraper 🗺️", x: 18, y: 76 },
  { label: "Chatbot 💬", x: 78, y: 76 },
  { label: "AI Voice Agents 🎧", x: 50, y: 8 },
];

const headline = ["Build", "AI", "Agents", "&"];
const headline2 = ["Automation", "That", "Scale"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-dark text-dark-foreground pt-32 pb-28 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 dotted-bg opacity-50" />

      {/* Floating labels — slow random drift */}
      {floatingLabels.map((f, i) => {
        const dur = 14 + ((i * 3) % 11);
        const dx = i % 2 ? 28 : -32;
        const dy = i % 3 === 0 ? -22 : 18;
        return (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 1, 1, 1],
              scale: 1,
              x: [0, dx, dx * 0.4, -dx * 0.6, 0],
              y: [0, dy, -dy * 0.7, dy * 0.5, 0],
              rotate: [0, i % 2 ? 4 : -4, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 + i * 0.1 },
              scale: { duration: 0.8, delay: 0.4 + i * 0.1 },
              x: { duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
              y: { duration: dur + 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              rotate: { duration: dur, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ left: `${f.x}%`, top: `${f.y}%` }}
            className="absolute hidden md:flex items-center gap-2 rounded-full border border-lime/30 bg-white/[0.06] backdrop-blur-md px-4 py-2 text-xs text-white/85 shadow-lg shadow-lime/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            {f.label}
          </motion.div>
        );
      })}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-[0.25em] text-lime mb-6 uppercase"
        >
          Master AI Automation in Telugu
        </motion.p>

        {/* Word-by-word "firming" reveal */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-lime leading-[1.05]">
          <span className="block">
            {headline.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-3"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {headline2.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.3 + (headline.length + i) * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-3"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-white/70 max-w-xl mx-auto mt-8 text-lg"
        >
          Expert training in Telugu & professional AI automation solutions to grow your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-lime text-lime-foreground px-6 py-3 font-medium shadow-lg shadow-lime/30"
          >
            Explore Our Services
          </motion.a>
          <motion.a
            href="#courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md border border-lime/60 text-lime px-6 py-3 font-medium hover:bg-lime/10 transition-colors"
          >
            View Courses
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="mt-14 inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-3 text-sm text-white/80"
        >
          <span>🌍 4 Countries</span>
          <span className="h-3 w-px bg-white/20" />
          <span>📊 20+ Projects</span>
          <span className="h-3 w-px bg-white/20" />
          <span>⏱️ 1 Year Experience</span>
        </motion.div>
      </div>
    </section>
  );
}
