import { motion } from "framer-motion";
import {
  Mic,
  Settings,
  MessageSquare,
  Bot,
  RefreshCw,
  Globe,
  LineChart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";
import { YouTubeIcon } from "./BrandIcons";

const floatingLabels = [
  { label: "Voice Agent", icon: Mic, x: 3, y: 12 },
  { label: "N8N", icon: Settings, x: 88, y: 18 },
  { label: "WhatsApp Bot", icon: MessageSquare, x: 2, y: 58 },
  { label: "AI Agent", icon: Bot, x: 86, y: 54 },
];

export function Hero() {
  return (
    <section
      id="main-content"
      aria-label="Hero"
      className="relative overflow-hidden bg-dark text-dark-foreground pt-24 pb-16 md:pt-28 md:pb-20 min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.16 125), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-[100px] opacity-15"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.18 200), transparent 70%)" }}
      />

      {/* Static floating pills — desktop only, entrance only */}
      {floatingLabels.map((f, i) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: `${f.x}%`, top: `${f.y}%` }}
            className="absolute hidden lg:flex items-center gap-2 rounded-full border border-lime/20 bg-white/[0.06] backdrop-blur-md px-3.5 py-1.5 text-[11px] text-white/70 shadow-lg"
          >
            <Icon className="h-3 w-3 text-lime/80" />
            {f.label}
          </motion.div>
        );
      })}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs tracking-[0.15em] text-lime uppercase mb-6 md:mb-8"
            >
              Telugu AI Training · Hyderabad &amp; Online
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Build <span className="text-lime">AI</span> Agents
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                &amp; Automation
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                That Scale.
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-white/70 max-w-lg mt-5 md:mt-6 text-base md:text-lg leading-relaxed"
            >
              Learn N8N, AI Agents &amp; automation — taught in Telugu by practitioners
              who've delivered real projects globally.
            </motion.p>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 md:mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] sm:text-[13px] text-white/50"
            >
              {[
                { icon: Globe, text: "Clients in 4 Countries" },
                { icon: LineChart, text: "20+ Projects Delivered" },
                { icon: CheckCircle, text: "100% Success Rate" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-lime/70 shrink-0" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-7 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <motion.a
                href="https://www.superprofile.bio/course/mofiai"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px oklch(0.88 0.16 125 / 0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime text-lime-foreground px-7 py-3.5 font-semibold shadow-lg shadow-lime/30 focus-ring text-[15px] min-h-[48px]"
              >
                Enroll Now — ₹5,000 <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@mofiai123-f"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 text-white px-7 py-3.5 font-semibold transition-colors hover:bg-white/5 focus-ring text-[15px] min-h-[48px]"
              >
                <YouTubeIcon className="h-4 w-4" />
                Watch on YouTube
              </motion.a>
            </motion.div>

            {/* Subscriber nudge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-3 text-[12px] text-white/35"
            >
              4K+ YouTube subscribers · Free content before you commit
            </motion.p>
          </div>

          {/* Right: Illustration — shown on all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-[60px] opacity-40"
                style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.88 0.16 125 / 0.4), transparent 70%)" }}
              />
              <img
                src={heroImg}
                alt="AI Automation Illustration"
                className="relative rounded-2xl w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[540px] mx-auto"
                width={540}
                height={540}
                loading="eager"
              />

              {/* Glass cards — hidden on small screens to prevent overflow */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="hidden sm:block absolute -top-4 -right-4 bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-xl px-4 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-lime/20 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-lime" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/60 uppercase tracking-wider">AI Agents</div>
                    <div className="text-sm font-semibold text-white">Built &amp; Deployed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="hidden sm:block absolute -bottom-4 -left-4 bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-xl px-4 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/60 uppercase tracking-wider">Workflows</div>
                    <div className="text-sm font-semibold text-white">Automated 24/7</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
