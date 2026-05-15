import { motion } from "framer-motion";

const floatingLabels = [
  { label: "Voice Agent 🎙️", pos: "top-[12%] left-[6%]" },
  { label: "N8N ⚙️", pos: "top-[20%] right-[8%]" },
  { label: "WhatsApp Bot 💬", pos: "top-[60%] left-[4%]" },
  { label: "AI Agent 🤖", pos: "top-[55%] right-[6%]" },
  { label: "Automation 🔄", pos: "top-[35%] left-[14%]" },
  { label: "API 🔗", pos: "top-[40%] right-[14%]" },
  { label: "Lead Scraper 🗺️", pos: "top-[78%] left-[18%]" },
  { label: "Chatbot 💬", pos: "top-[78%] right-[18%]" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-dark text-dark-foreground pt-32 pb-28 min-h-screen flex items-center">
      <div className="absolute inset-0 dotted-bg opacity-50" />

      {/* Floating labels */}
      {floatingLabels.map((f, i) => (
        <motion.div
          key={f.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 1],
            scale: 1,
            y: [0, -14, 0],
            x: [0, i % 2 ? 8 : -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 + i * 0.1 },
            scale: { duration: 0.6, delay: 0.3 + i * 0.1 },
            y: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
            x: { duration: 5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
          className={`absolute ${f.pos} hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-xs text-white/85 shadow-lg`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {f.label}
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-[0.25em] text-lime mb-6 uppercase"
        >
          Master AI Automation in Telugu
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-lime leading-[1.05]"
        >
          Build AI Agents &<br />Automation That Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/70 max-w-xl mx-auto mt-8 text-lg"
        >
          Expert training in Telugu & professional AI automation solutions to grow your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-lime text-lime-foreground px-6 py-3 font-medium"
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

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
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
