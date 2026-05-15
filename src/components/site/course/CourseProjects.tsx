import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";

const projects = [
  {
    icon: "🤖",
    name: "Multi-Orchestration Agent",
    complexity: "Advanced",
    duration: "3-4 hours",
    desc: "Build a sophisticated multi-orchestration AI agent that handles multiple tasks simultaneously.",
    builds: ["Manages multiple sub-agents", "Task delegation system", "Complex workflow orchestration", "Result aggregation & reporting"],
    tech: "n8n, OpenAI, Multiple APIs, Webhooks",
    use: "Business process automation, multi-step workflows",
  },
  {
    icon: "🎙️",
    name: "Retell + N8N Voice Agent",
    complexity: "Advanced",
    duration: "4-5 hours",
    desc: "Complete voice agent for retail businesses using Retell AI integration with natural conversation.",
    builds: ["Inbound call handling", "Voice recognition & response", "Appointment booking via voice", "Recording & transcription"],
    tech: "Retell AI, n8n, Twilio, OpenAI",
    use: "Restaurant reservations, customer service",
  },
  {
    icon: "💰",
    name: "Crypto Coin Analysis Agent",
    complexity: "Intermediate",
    duration: "2-3 hours",
    desc: "Automate cryptocurrency market analysis with real-time data, AI sentiment, and trading signals.",
    builds: ["Real-time price monitoring", "Technical analysis automation", "AI sentiment analysis", "Automated alerts"],
    tech: "n8n, CoinGecko API, OpenAI, Telegram",
    use: "Crypto trading, market research",
  },
  {
    icon: "🎬",
    name: "Auto Video & Social Posting",
    complexity: "Advanced",
    duration: "4-5 hours",
    desc: "Generate videos with HeyGen and post across platforms — full content pipeline automation.",
    builds: ["AI script generation", "Video creation with HeyGen", "Multi-platform posting", "Scheduling & analytics"],
    tech: "HeyGen, n8n, OpenAI, Social APIs",
    use: "Content marketing, social media",
  },
  {
    icon: "🗺️",
    name: "Google Maps Leads Scraper",
    complexity: "Intermediate",
    duration: "2-3 hours",
    desc: "Scrape business data from Google Maps efficiently — extract, clean and export to CRM.",
    builds: ["Automated Maps scraping", "Business data extraction", "Cleaning & formatting", "Export to Sheets / CRM"],
    tech: "n8n, Scraping APIs, Sheets API",
    use: "B2B lead generation, prospecting",
  },
  {
    icon: "💬",
    name: "End-to-End WhatsApp Agent",
    complexity: "Advanced",
    duration: "4-5 hours",
    desc: "Complete WhatsApp automation agent for business communication and AI-powered response.",
    builds: ["WhatsApp Business API", "Message routing & handling", "AI response system", "Order processing"],
    tech: "WhatsApp API, n8n, OpenAI, DB",
    use: "Customer support, order management",
  },
];

export function CourseProjects() {
  return (
    <section className="relative bg-dark text-dark-foreground py-24 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-lime/15 border border-lime/40 text-lime px-3 py-1 text-xs uppercase tracking-widest">
          Included in Course
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-4xl"
        >
          6 Complete Production-<br />Ready Projects
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          Not just tutorials — complete end-to-end projects built from scratch using all the concepts learned.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: -1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <motion.div
                  animate={{ rotate: [0, 14, -14, 0], y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
                  className="text-5xl"
                >
                  {p.icon}
                </motion.div>
                <span className="text-[10px] uppercase tracking-widest text-lime border border-lime/40 rounded-full px-2 py-1">
                  {p.complexity}
                </span>
              </div>
              <div className="mt-5 text-xs text-white/50">PROJECT 0{i + 1} · {p.duration}</div>
              <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
              <p className="mt-3 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 pt-4 border-t border-dashed border-white/15 space-y-1.5">
                {p.builds.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-xs text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime mt-1.5" />
                    {b}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-white/50">
                <span className="text-lime">Tech:</span> {p.tech}
              </div>
              <div className="text-xs text-white/50 mt-1">
                <span className="text-lime">Use:</span> {p.use}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
