import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe2, BarChart3, Star, Rocket, Search, Ruler, Wrench, Sparkles, MessageCircle,
  Bot, Mic, Settings2, MessageSquare, Map as MapIcon, Link2, Cpu, Database, Cloud,
  CheckCircle2, IndianRupee, Phone, Mail, ArrowRight, Trophy, Handshake, GraduationCap, Zap,
  ChevronDown,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { AnimatedLines, AnimatedHeading } from "@/components/site/AnimatedHeading";
import { FloatingParticles } from "@/components/site/CursorGlow";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI Automation Services — MOFI AI" },
      { name: "description", content: "Professional AI automation services: chatbots, voice agents, n8n workflows, WhatsApp automation, web scraping & custom integrations." },
      { property: "og:title", content: "AI Automation Services — MOFI AI" },
      { property: "og:description", content: "We build intelligent automation systems that scale your operations and eliminate manual work." },
    ],
  }),
  component: ServicesPage,
});

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-dark text-dark-foreground overflow-hidden pt-32 pb-20">
      <FloatingParticles count={22} />
      <div
        aria-hidden
        className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-bold"
            style={{ background: "linear-gradient(90deg,#7c3aed,#a78bfa)" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Professional Services
          </motion.div>

          <AnimatedLines
            lines={["AI Automation", "Solutions for", "Your Business"]}
            className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]"
            highlight={["Solutions", "Business"]}
            highlightClass="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent"
          />


          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-6 text-lg text-white/70 max-w-xl"
          >
            We build intelligent automation systems that scale your operations, reduce costs, and
            eliminate repetitive manual work.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919347301449?text=I%27d%20like%20to%20discuss%20automation%20for%20my%20business"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-bold text-white shadow-lg hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Request Free Consultation
            </a>
            <a href="#case-studies"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Star className="h-4 w-4" /> View Our Work
            </a>
          </motion.div>
        </div>

        {/* Floating service icons cluster */}
        <div className="relative h-[440px] hidden lg:block">
          <FloatingIconCluster />
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto max-w-7xl px-6 mt-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Globe2, value: "4", label: "Countries Served", color: "text-emerald-400" },
            { icon: BarChart3, value: "20+", label: "Projects Delivered", color: "text-violet-400" },
            { icon: Star, value: "100%", label: "Client Satisfaction", color: "text-amber-400" },
            { icon: Rocket, value: "80%", label: "Avg Time Saved", color: "text-sky-400" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }} className="flex items-center gap-4">
              <s.icon className={`h-9 w-9 ${s.color}`} />
              <div>
                <div className="font-display text-2xl text-white">{s.value}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingIconCluster() {
  // positions chosen to mirror the reference image (top, right-top, right-bot, bottom, left-bot, left-top)
  const icons = [
    { Icon: Bot,           label: "Chatbots",       color: "#60a5fa", x: 50, y: 6  },
    { Icon: Mic,           label: "Voice Agents",   color: "#a78bfa", x: 88, y: 22 },
    { Icon: BarChart3,     label: "Data & Insights",color: "#38bdf8", x: 92, y: 62 },
    { Icon: Link2,         label: "Integrations",   color: "#fb923c", x: 52, y: 88 },
    { Icon: MessageSquare, label: "WhatsApp",       color: "#22c55e", x: 8,  y: 62 },
    { Icon: Settings2,     label: "Workflows",      color: "#34d399", x: 6,  y: 22 },
  ];
  // center of the cube within the SVG viewBox (percent based)
  const cx = 50, cy = 45;
  return (
    <>
      {/* Connecting dotted lines + glow dots — drawn behind */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
        </defs>
        {icons.map((it, i) => (
          <g key={it.label}>
            <motion.line
              x1={cx} y1={cy} x2={it.x} y2={it.y}
              stroke="#60a5fa" strokeOpacity="0.45" strokeWidth="0.22"
              strokeDasharray="0.8 0.8" vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.25, 0.7, 0.25] }}
              transition={{ pathLength: { duration: 1, delay: 0.2 + i * 0.12 }, opacity: { duration: 3, repeat: Infinity, delay: i * 0.3 } }}
            />
            <circle cx={it.x} cy={it.y} r="2.2" fill="url(#nodeGlow)" />
          </g>
        ))}
      </svg>

      {/* Ambient outer pulsing rings */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full border border-dashed border-violet-300/20"
      />

      {/* 3D AI CUBE */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
        style={{ perspective: "900px" }}
      >
        <motion.div
          animate={{ rotateX: [18, 22, 18], rotateY: [-25, -20, -25], y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ transformStyle: "preserve-3d", width: 160, height: 160 }}
        >
          {/* Glow base / platform */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: "100%",
              width: 240, height: 70,
              transform: "translateY(-10px) rotateX(75deg)",
              background: "radial-gradient(ellipse at center, rgba(167,139,250,0.55) 0%, rgba(124,58,237,0.25) 40%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
          {/* concentric platform rings */}
          {[260, 210, 170].map((w, i) => (
            <div key={w}
              className="absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{
                top: "100%",
                width: w, height: w * 0.28,
                transform: `translateY(${-6 + i * 4}px) rotateX(75deg)`,
                border: "1px solid rgba(167,139,250,0.35)",
                boxShadow: "0 0 30px rgba(124,58,237,0.4) inset",
              }}
            />
          ))}

          {/* Cube faces */}
          {/* Front */}
          <div className="absolute inset-0 rounded-xl flex items-center justify-center font-display text-3xl text-white"
               style={{
                 transform: "translateZ(80px)",
                 background: "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(59,7,100,0.95))",
                 border: "1px solid rgba(167,139,250,0.6)",
                 boxShadow: "0 0 40px rgba(167,139,250,0.5), inset 0 0 30px rgba(167,139,250,0.25)",
               }}>
            AI
          </div>
          {/* Back */}
          <div className="absolute inset-0 rounded-xl"
               style={{
                 transform: "rotateY(180deg) translateZ(80px)",
                 background: "linear-gradient(135deg, rgba(76,29,149,0.9), rgba(30,5,60,0.95))",
                 border: "1px solid rgba(167,139,250,0.4)",
               }} />
          {/* Right */}
          <div className="absolute inset-0 rounded-xl"
               style={{
                 transform: "rotateY(90deg) translateZ(80px)",
                 background: "linear-gradient(135deg, rgba(99,102,241,0.85), rgba(49,46,129,0.95))",
                 border: "1px solid rgba(167,139,250,0.5)",
                 boxShadow: "inset 0 0 40px rgba(99,102,241,0.4)",
               }} />
          {/* Left */}
          <div className="absolute inset-0 rounded-xl"
               style={{
                 transform: "rotateY(-90deg) translateZ(80px)",
                 background: "linear-gradient(135deg, rgba(67,56,202,0.85), rgba(30,27,75,0.95))",
                 border: "1px solid rgba(167,139,250,0.4)",
               }} />
          {/* Top */}
          <div className="absolute inset-0 rounded-xl"
               style={{
                 transform: "rotateX(90deg) translateZ(80px)",
                 background: "linear-gradient(135deg, rgba(167,139,250,0.9), rgba(124,58,237,0.95))",
                 border: "1px solid rgba(196,181,253,0.7)",
                 boxShadow: "inset 0 0 30px rgba(255,255,255,0.25)",
               }} />
          {/* Bottom */}
          <div className="absolute inset-0 rounded-xl"
               style={{
                 transform: "rotateX(-90deg) translateZ(80px)",
                 background: "linear-gradient(135deg, rgba(49,46,129,0.95), rgba(15,12,40,0.95))",
                 border: "1px solid rgba(99,102,241,0.4)",
               }} />
        </motion.div>
      </div>

      {/* Floating icon cards */}
      {icons.map(({ Icon, label, color, x, y }, i) => (
        <motion.div
          key={label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="h-14 w-14 rounded-xl flex items-center justify-center backdrop-blur-md"
              style={{
                background: `linear-gradient(135deg, ${color}33, ${color}11)`,
                border: `1px solid ${color}88`,
                color,
                boxShadow: `0 0 25px ${color}55, inset 0 0 15px ${color}33`,
              }}
            >
              <Icon className="h-7 w-7" />
            </div>
            <span className="text-[11px] font-semibold text-white/85 whitespace-nowrap px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
              {label}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
}

/* -------------------- PROCESS -------------------- */
function Process() {
  const steps = [
    { icon: Search, title: "Consultation & Discovery", desc: "We understand your business, processes, pain points, and automation goals through detailed consultation calls.", tag: "1-2 sessions", color: "#7c3aed" },
    { icon: Ruler, title: "Solution Design", desc: "Design custom automation architecture tailored to your specific needs, tech stack, and workflows.", tag: "Architecture & proposal", color: "#10b981" },
    { icon: Wrench, title: "Development & Integration", desc: "Build, test, and integrate automation systems with your existing tools and databases.", tag: "2-6 weeks", color: "#3b82f6" },
    { icon: Rocket, title: "Deployment & Training", desc: "Deploy to production, train your team on usage, and provide comprehensive documentation.", tag: "Live system + docs", color: "#8b5cf6" },
    { icon: MessageCircle, title: "Ongoing Support", desc: "Post-launch support, bug fixes, optimizations, and system improvements as needed.", tag: "As per agreement", color: "#f97316" },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl text-slate-900"
          highlight="You">How We Work With You</AnimatedHeading>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}
              className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-md"
            >
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ background: s.color }}>{i + 1}</div>
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.2 }}
                className="h-14 w-14 rounded-xl flex items-center justify-center mb-4"
                style={{ background: s.color + "15", color: s.color }}>
                <s.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="font-display text-lg text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 inline-block rounded-md px-3 py-1 text-xs font-semibold"
                style={{ background: s.color + "15", color: s.color }}>{s.tag}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- DETAILED SERVICES -------------------- */
const services = [
  {
    n: 1, icon: Bot, title: "AI Chatbots & Conversational Agents", color: "#3b82f6",
    overview: "Intelligent conversational AI systems for customer support, sales, lead qualification, and user engagement. Natural language understanding with context awareness and multi-turn conversations.",
    build: ["Customer support chatbots (website, app, WhatsApp)", "Sales qualification bots", "FAQ automation systems", "Internal employee helpdesk bots", "Lead capture and nurturing agents", "Multi-language support bots"],
    tech: ["OpenAI GPT-4", "Claude", "Gemini", "n8n", "LangChain", "Pinecone / Qdrant"],
    cases: ["24/7 customer support without hiring agents", "Qualify leads before sales team involvement", "Handle common queries automatically", "Reduce support ticket volume 60-80%", "Collect customer info conversationally"],
    timeline: "3-4 weeks", price: "Custom quote", cta: "Request Chatbot Quote",
  },
  {
    n: 2, icon: Mic, title: "Voice Agents & Call Automation", color: "#f97316",
    overview: "Automated phone systems with human-like voice interactions. Handle inbound calls, make outbound campaigns, book appointments, and provide info without human agents.",
    build: ["Restaurant reservation systems", "Appointment scheduling agents", "Customer service hotlines", "Lead follow-up call automation", "Survey and feedback collection", "Order taking and confirmation"],
    tech: ["Retell AI", "Twilio", "OpenAI", "n8n", "CRM integrations"],
    cases: ["Automate restaurant bookings 24/7", "Follow up with leads automatically", "Handle appointment scheduling", "Reduce call center costs dramatically", "Scale customer service without hiring"],
    timeline: "4-6 weeks", price: "Custom quote", cta: "Request Voice Agent Quote",
  },
  {
    n: 3, icon: Settings2, title: "N8N Workflow Automation", color: "#10b981",
    overview: "Custom automation systems connecting your existing tools, eliminating manual data entry, synchronizing databases, and automating repetitive business processes.",
    build: ["CRM data synchronization", "Email marketing workflows", "Invoice generation & payment tracking", "Report generation & distribution", "Lead routing and assignment", "Data entry & form processing", "Inventory management", "Customer onboarding flows"],
    tech: ["n8n", "REST APIs & Webhooks", "PostgreSQL / MySQL / MongoDB", "Google Sheets", "Airtable", "200+ apps"],
    cases: ["Sync data between CRM & accounting", "Automate email sequences", "Generate & send invoices automatically", "Create reports without manual work", "Route leads to sales team automatically"],
    timeline: "2-4 weeks", price: "Custom quote", cta: "Request Automation Quote",
    roi: "10-20 hours saved per week per employee",
  },
  {
    n: 4, icon: MessageSquare, title: "WhatsApp Business Automation", color: "#22c55e",
    overview: "End-to-end WhatsApp automation for customer communication, order management, notifications, and marketing campaigns using WhatsApp Business API.",
    build: ["Order confirmation & tracking", "Appointment reminders", "Customer support on WhatsApp", "Marketing broadcast campaigns", "Lead qualification via WhatsApp", "Payment collection flows", "Catalog & product sharing", "Automated responses"],
    tech: ["WhatsApp Business API", "n8n", "AI responses", "Payment gateways", "CRM sync"],
    cases: ["Send order updates automatically", "Handle inquiries 24/7", "Reduce no-shows with reminders", "Collect payments via WhatsApp", "Run marketing campaigns"],
    timeline: "3-5 weeks", price: "Custom quote + API costs", cta: "Request WhatsApp Bot Quote",
  },
  {
    n: 5, icon: MapIcon, title: "Web Scraping & Lead Generation", color: "#fb923c",
    overview: "Automated data extraction from websites, directories, and online databases. Generate leads, monitor competitors, track prices, and collect business intelligence.",
    build: ["Google Maps business leads", "E-commerce product data", "Competitor pricing", "Contact info from directories", "Job & real estate listings", "Social media (where allowed)", "News & content aggregation"],
    tech: ["Python (Scrapy, Selenium, BS4)", "n8n", "Proxy rotation", "Data cleaning", "Google Sheets / CRM export"],
    cases: ["Generate B2B leads from Google Maps", "Monitor competitor pricing daily", "Build targeted email lists", "Aggregate product data", "Track brand mentions"],
    timeline: "1-3 weeks", price: "Custom quote based on volume", cta: "Request Scraping Quote",
    note: "All scraping done ethically and in compliance with ToS and applicable laws.",
  },
  {
    n: 6, icon: Link2, title: "Custom API Integrations & Middleware", color: "#a855f7",
    overview: "Connect disparate systems, build custom middleware, develop REST APIs, and create automation infrastructure when off-the-shelf solutions don't meet your needs.",
    build: ["Custom REST API development", "Middleware for system integration", "Webhook handlers & processors", "OAuth authentication flows", "Data transformation layers", "Sync engines between platforms", "Custom automation servers", "API documentation"],
    tech: ["Node.js / Python", "Express / FastAPI", "n8n", "PostgreSQL / MongoDB", "Docker", "AWS / DigitalOcean"],
    cases: ["Connect ERP with e-commerce", "Build custom API for mobile app", "Sync incompatible systems", "Legacy system middleware", "Backend for custom workflows"],
    timeline: "4-8 weeks", price: "Custom quote based on scope", cta: "Request Integration Quote",
  },
];

function DetailedServices() {
  return (
    <section className="py-24 bg-dark text-dark-foreground relative overflow-hidden">
      <FloatingParticles count={15} />
      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl"
          highlight="Services">Our Services Detailed</AnimatedHeading>
        <p className="text-center text-white/60 mt-3">Professional AI solutions tailored to your business needs</p>

        <div className="mt-14 space-y-8">
          {services.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-7 md:p-9 hover:border-white/20 transition-colors"
              style={{ boxShadow: `0 10px 50px -25px ${s.color}80` }}
            >
              <div className="flex items-start gap-5 mb-6">
                <motion.div whileHover={{ rotate: 12, scale: 1.1 }}
                  className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ background: s.color + "22", border: `1px solid ${s.color}66`, color: s.color }}>
                  <s.icon className="h-8 w-8" />
                </motion.div>
                <div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: s.color }}>
                    Service {s.n}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mt-1">{s.title}</h3>
                </div>
              </div>

              <p className="text-white/70 mb-6 max-w-4xl">{s.overview}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl bg-black/30 p-5 border border-white/5">
                  <div className="text-sm font-bold mb-3" style={{ color: s.color }}>What We Build</div>
                  <ul className="space-y-2">
                    {s.build.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: s.color }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-black/30 p-5 border border-white/5">
                  <div className="text-sm font-bold mb-3" style={{ color: s.color }}>Technologies We Use</div>
                  <div className="flex flex-wrap gap-2">
                    {s.tech.map(t => (
                      <span key={t} className="rounded-md px-3 py-1.5 text-xs font-medium"
                        style={{ background: s.color + "1a", color: s.color, border: `1px solid ${s.color}44` }}>{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 text-sm font-bold mb-2" style={{ color: s.color }}>Use Cases</div>
                  <ul className="space-y-1.5">
                    {s.cases.map(c => (
                      <li key={c} className="text-sm text-white/75 flex items-start gap-2">
                        <span style={{ color: s.color }}>✓</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {s.roi && (
                <div className="rounded-lg bg-emerald-500/10 border border-emerald-400/30 p-3 mb-4 text-sm text-emerald-200">
                  <strong>Typical ROI:</strong> {s.roi}
                </div>
              )}
              {s.note && (
                <div className="rounded-lg bg-amber-500/10 border border-amber-400/30 p-3 mb-4 text-sm text-amber-100">
                  <strong>Legal Note:</strong> {s.note}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-5 text-sm text-white/70">
                  <span><strong className="text-white">Timeline:</strong> {s.timeline}</span>
                  <span><strong className="text-white">Starting Price:</strong> {s.price}</span>
                </div>
                <a href="https://wa.me/919347301449?text=Quote%20request"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold text-white hover:scale-105 transition-transform"
                  style={{ background: s.color, boxShadow: `0 10px 24px -10px ${s.color}` }}>
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CASE STUDIES -------------------- */
function CaseStudies() {
  const studies = [
    {
      flag: "🇸🇬", title: "Voice Agent for Singapore Retail",
      client: "Retail Business, Singapore",
      challenge: "High call volume, limited staff, language barriers",
      solution: "Retell AI voice agent for customer inquiries and orders",
      results: ["200+ calls/day handled automatically", "80% reduction in human workload", "24/7 availability incl. holidays", "Multi-language (English + Mandarin)"],
      tech: "Retell AI · n8n · Twilio · OpenAI",
      color: "#3b82f6",
      video: "https://youtu.be/JHt5pk2D9g8?si=nzUGfskLLuQau--v",
    },
    {
      flag: "🛒", title: "Complete Website Automation",
      client: "E-commerce Business",
      challenge: "Manual order processing, inventory sync issues",
      solution: "Full automation pipeline from order to fulfillment",
      results: ["90% reduction in manual entry", "Real-time inventory sync", "Automated customer notifications", "5 hours/day saved"],
      tech: "n8n · Shopify API · Google Sheets · WhatsApp API",
      color: "#10b981",
    },
    {
      flag: "🇺🇸", title: "Lead Generation System",
      client: "B2B Service Company, USA",
      challenge: "Manual lead research taking 20+ hours/week",
      solution: "Automated Google Maps scraping + enrichment",
      results: ["5,000+ qualified leads/month", "20 hours/week saved", "3x increase in outreach capacity", "Clean structured data in CRM"],
      tech: "Python · n8n · Google Maps API · HubSpot",
      color: "#f97316",
    },
  ];
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl text-slate-900"
          highlight="Results">Real Projects Real Results</AnimatedHeading>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {studies.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }} whileHover={{ y: -8 }}
              className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-5 flex items-center justify-between text-white" style={{ background: c.color }}>
                <span className="text-xs uppercase font-bold tracking-widest">Case Study</span>
                <span className="text-2xl">{c.flag}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-lg text-slate-900">{c.title}</h3>
                <div className="text-xs text-slate-500 mt-1">{c.client}</div>
                <div className="mt-4 text-sm"><strong className="text-slate-700">Challenge:</strong> <span className="text-slate-600">{c.challenge}</span></div>
                <div className="mt-2 text-sm"><strong className="text-slate-700">Solution:</strong> <span className="text-slate-600">{c.solution}</span></div>
                <ul className="mt-4 space-y-1.5 flex-1">
                  {c.results.map(r => (
                    <li key={r} className="text-sm flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: c.color }} /> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500"><strong>Tech:</strong> {c.tech}</div>
                {c.video && (
                  <a href={c.video} target="_blank" rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold hover:underline" style={{ color: c.color }}>
                    ▶ Watch Video Testimonial
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TECH STACK -------------------- */
function TechStack() {
  const groups = [
    { icon: Settings2, title: "Automation Platforms", items: ["n8n (primary)", "Make.com", "Zapier (when needed)"], color: "#10b981" },
    { icon: Cpu, title: "AI & Language Models", items: ["OpenAI (GPT-4, GPT-4o)", "Anthropic Claude", "Google Gemini", "Local LLMs"], color: "#8b5cf6" },
    { icon: Mic, title: "Voice & Communication", items: ["Retell AI", "Twilio", "WhatsApp Business API", "Telegram Bot API"], color: "#f97316" },
    { icon: Database, title: "Databases & Storage", items: ["PostgreSQL", "MongoDB", "Pinecone (vector DB)", "Supabase", "Airtable"], color: "#3b82f6" },
    { icon: Wrench, title: "Development", items: ["Node.js", "Python", "React (dashboards)", "REST APIs", "Docker"], color: "#ec4899" },
    { icon: Cloud, title: "Cloud & Hosting", items: ["AWS", "DigitalOcean", "Vercel", "Render"], color: "#06b6d4" },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl text-slate-900"
          highlight="Stack">Our Technology Stack</AnimatedHeading>
        <p className="text-center text-slate-500 mt-3">We use modern, reliable, industry-leading technologies</p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div key={g.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md"
            >
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: g.color + "15", color: g.color }}>
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-slate-900">{g.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {g.items.map(it => (
                  <li key={it} className="text-sm text-slate-700 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: g.color }} /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */
function Pricing() {
  const tiers = [
    { title: "Simple Automation", price: "₹25,000 – ₹50,000", bullets: ["2-3 tool integrations", "Basic workflows", "1-2 weeks development", "e.g., Email-to-CRM sync"], color: "#10b981" },
    { title: "Medium Complexity", price: "₹50,000 – ₹1,50,000", bullets: ["4-6 tool integrations", "Multiple workflows", "3-4 weeks development", "e.g., WhatsApp bot + CRM"], color: "#f97316", popular: true },
    { title: "Complex System", price: "₹1,50,000 – ₹5,00,000+", bullets: ["Custom development", "Multiple systems integrated", "6-12 weeks development", "e.g., Voice agent + custom CRM"], color: "#8b5cf6" },
    { title: "Enterprise Solutions", price: "Custom", bullets: ["Large-scale infrastructure", "Multiple automations", "Ongoing support contracts", "Volume pricing available"], color: "#3b82f6" },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl text-slate-900"
          highlight="Packages">Pricing And Packages</AnimatedHeading>
        <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">
          Custom quotes based on project complexity, integrations required, and ongoing maintenance needs.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t, i) => (
            <motion.div key={t.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-6 border-2 bg-white shadow-lg ${t.popular ? "ring-2 ring-offset-2" : ""}`}
              style={{ borderColor: t.color, ...(t.popular ? { boxShadow: `0 20px 50px -20px ${t.color}` } : {}) }}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-white"
                  style={{ background: t.color }}>Most Popular</div>
              )}
              <IndianRupee className="h-7 w-7 mb-3" style={{ color: t.color }} />
              <h3 className="font-display text-lg text-slate-900">{t.title}</h3>
              <div className="mt-2 font-display text-xl" style={{ color: t.color }}>{t.price}</div>
              <ul className="mt-4 space-y-2">
                {t.bullets.map(b => (
                  <li key={b} className="text-sm text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: t.color }} /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-5 text-center text-amber-900">
          <strong>Monthly Maintenance:</strong> ₹10,000 – ₹50,000 depending on system complexity
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- WHY CHOOSE -------------------- */
function WhyChooseUs() {
  const reasons = [
    { icon: Trophy, title: "Real-World Experience", desc: "1 year delivering automation projects for clients across 4 countries. We've seen what works and what doesn't in production.", color: "#10b981" },
    { icon: Handshake, title: "End-to-End Service", desc: "From consultation to deployment to ongoing support. We don't just build and disappear.", color: "#f97316" },
    { icon: IndianRupee, title: "Cost-Effective", desc: "As a small team, our overhead is low. You get enterprise-quality work at startup-friendly pricing.", color: "#3b82f6" },
    { icon: Zap, title: "Rapid Delivery", desc: "Most projects completed in 2-6 weeks. We move fast without compromising on quality.", color: "#8b5cf6" },
    { icon: GraduationCap, title: "Training Included", desc: "We train your team on using and managing the automation. You're not dependent on us forever.", color: "#06b6d4" },
    { icon: MessageCircle, title: "Telugu Support", desc: "Communicate in Telugu if preferred. No language barriers in understanding requirements.", color: "#ec4899" },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl text-slate-900"
          highlight={["MOFI", "AI"]}>Why Choose MOFI AI</AnimatedHeading>
        <p className="text-center text-slate-500 mt-3">Your success is our priority</p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl p-6 border border-slate-200 bg-white shadow-md"
            >
              <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                className="h-14 w-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: r.color + "15", color: r.color }}>
                <r.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="font-display text-lg text-slate-900">{i + 1}. {r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- GET STARTED -------------------- */
function GetStarted() {
  const steps = [
    { n: 1, title: "Schedule", desc: "Schedule free 30-minute consultation call" },
    { n: 2, title: "Analyze", desc: "We analyze your needs and propose solution" },
    { n: 3, title: "Quote", desc: "Receive detailed quote and timeline" },
    { n: 4, title: "Build & Deploy", desc: "We build, deploy, and train your team" },
  ];
  return (
    <section className="py-24 bg-dark text-dark-foreground relative overflow-hidden">
      <FloatingParticles count={18} />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl"
          highlight={["Automate", "Business"]}>Ready to Automate Your Business</AnimatedHeading>

        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-lg mb-3">{s.n}</div>
              <div className="font-display text-lg">{s.title}</div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="https://wa.me/919347301449?text=I%27d%20like%20to%20discuss%20automation%20for%20my%20business"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-4 text-base font-bold text-white shadow-xl"
          >
            <Phone className="h-5 w-5" /> WhatsApp +91 93473 01449
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="mailto:profitgrowthai223311@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-6 py-4 text-base font-bold text-white"
          >
            <Mail className="h-5 w-5" /> Email Requirements
          </motion.a>
        </div>
        <p className="mt-4 text-center text-sm text-white/60">Quick Response · No Obligation · Free Consultation</p>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
function FAQ() {
  const items = [
    { q: "How long does a typical project take?", a: "Simple automations: 1-2 weeks. Medium complexity: 3-4 weeks. Complex systems: 6-12 weeks. We provide an exact timeline after understanding requirements." },
    { q: "Do you work with businesses outside India?", a: "Yes! We've delivered projects in USA, Singapore, and New Zealand. Time zone differences are managed effectively." },
    { q: "What if we need changes after deployment?", a: "Minor tweaks are included free for the first 2 weeks. Ongoing changes are covered under a monthly maintenance contract or billed hourly." },
    { q: "Can you integrate with our existing tools?", a: "Most likely yes. n8n connects with 200+ apps out of the box. For custom systems, we build API integrations." },
    { q: "Do we need technical knowledge to use the automation?", a: "No. We build user-friendly systems and train your team. Most automations run invisibly in the background." },
    { q: "What if the automation breaks?", a: "We provide monitoring and support. Monthly maintenance includes bug fixes and uptime monitoring." },
    { q: "Can we own the automation code?", a: "Yes. Upon project completion and final payment, all code and workflows are yours." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedHeading className="text-center font-display text-4xl md:text-5xl text-slate-900"
          highlight="Questions">Frequently Asked Questions</AnimatedHeading>

        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={it.q}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
              >
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left">
                  <span className="font-semibold text-slate-900 flex items-start gap-2">
                    <span className="text-violet-500 shrink-0">Q:</span> {it.q}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 text-slate-700 text-sm leading-relaxed flex gap-2">
                    <span className="font-bold text-emerald-600">A:</span> <span>{it.a}</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PAGE -------------------- */
function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Process />
      <DetailedServices />
      <CaseStudies />
      <TechStack />
      <Pricing />
      <WhyChooseUs />
      <GetStarted />
      <FAQ />
      <Footer />
    </div>
  );
}
