import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Play, PlayCircle as Youtube, Link2, GraduationCap, Lightbulb, RefreshCw,
  ListVideo, Globe, Bell,
  MessageSquare, Gift, Video, Users, ExternalLink, Rocket,
  CheckCircle2, Sparkles, ArrowRight, UserPlus as UserStar,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SectionLabel } from "@/components/site/SectionLabel";
import { FloatingParticles } from "@/components/site/CursorGlow";
import { YouTubeIcon, TelegramIcon, InstagramIcon } from "@/components/site/BrandIcons";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free N8N & AI Resources — MOFI AI YouTube" },
      { name: "description", content: "Free N8N & AI automation tutorials, playlists and latest uploads on the MOFI AI YouTube channel." },
      { property: "og:title", content: "Free N8N & AI Resources — MOFI AI" },
      { property: "og:description", content: "Watch free tutorials, walkthroughs and playlists. Subscribe to MOFI AI on YouTube." },
    ],
  }),
  component: ResourcesPage,
});

/* ---------- Reusable atoms ---------- */
function TitleDecor({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-3">
      <span className="hidden sm:flex items-center gap-1">
        <span className="block h-[2px] w-12 bg-lime" />
        <span className="h-2 w-2 rounded-full bg-lime" />
      </span>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="font-display text-3xl md:text-4xl text-dark-foreground tracking-tight"
      >
        {children}
      </motion.h2>
      <span className="hidden sm:flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-lime" />
        <span className="block h-[2px] w-12 bg-lime" />
      </span>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const } }),
};

/* ---------- 1. Hero ---------- */
function YTHero() {
  return (
    <section className="relative bg-dark text-dark-foreground overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <FloatingParticles count={20} color="red" />
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.16 125/0.25), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase mb-7"
          >
            <span className="inline-flex h-4 w-5 items-center justify-center rounded-sm bg-lime-foreground">
              <Play className="h-2.5 w-2.5 text-lime" fill="currentColor" />
            </span>
            Free Content
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            Free <span className="text-lime">N8N & AI</span><br />
            <span className="text-shimmer-dark">Automation Tutorials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-6 max-w-xl text-white/70 leading-relaxed"
          >
            Learn automation basics, watch project walkthroughs, and get tips from our YouTube channel — completely free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 items-start"
          >
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="https://www.youtube.com/@mofiAI123-f" target="_blank" rel="noreferrer"
              className="glow-ring inline-flex items-center gap-3 rounded-md bg-lime text-lime-foreground px-7 py-4 font-bold"
            >
              <Youtube className="h-5 w-5" />
              Subscribe to MOFI AI <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Live YouTube channel preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-6 rounded-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.62 0.24 25 / 0.45), transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative rounded-2xl border border-lime/40 bg-white/[0.04] backdrop-blur p-3 shadow-2xl">
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/_WIHtqoAmsE?autoplay=0&rel=0&modestbranding=1"
                title="MOFI AI YouTube Channel Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
            <div className="h-3 mt-1 rounded-b bg-white/10" />
          </div>
          <motion.div
            className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-lime/40 blur-2xl"
            animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 2. Why Watch ---------- */
function WhyWatch() {
  const cards = [
    { num: "1", title: "Learn Before You Buy", icon: GraduationCap, body: "Get a taste of our teaching style, content quality, and approach before enrolling in paid courses. See if our teaching resonates with you." },
    { num: "2", title: "Free Tutorials & Tips", icon: Lightbulb, body: "Regular uploads of n8n tutorials, automation tips, AI agent guides, and workflow examples. Learn valuable skills for free." },
    { num: "3", title: "Stay Updated", icon: RefreshCw, body: "Latest updates on n8n, new AI tools, automation trends, and industry insights. Keep your skills current." },
  ];
  return (
    <section className="bg-dark text-dark-foreground py-24 relative">
      <div className="absolute inset-0 animated-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <SectionLabel light>Why Watch</SectionLabel>
        <TitleDecor>Why Watch Our Content</TitleDecor>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-lime/20 bg-white/[0.03] backdrop-blur p-9 flex flex-col items-center group"
            >
              <div className="relative h-20 w-20 rounded-full bg-lime/15 border border-lime/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <c.icon className="h-9 w-9 text-lime" />
                <div className="absolute -bottom-1 -right-1 h-6 w-7 rounded bg-lime flex items-center justify-center">
                  <Play className="h-3 w-3 text-lime-foreground" fill="currentColor" />
                </div>
              </div>
              <h3 className="text-lime text-lg font-bold mb-3">{c.num}. {c.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Featured Videos ---------- */
const featured = [
  { title: "Build Your First AI Agent with n8n (Full Tutorial) | OpenAI Integration", meta: "12K views • 3 weeks ago", duration: "31:25", grad: "from-emerald-900 via-dark to-black", chip: "BUILD YOUR FIRST", big: "AI AGENT", small: "with n8n" },
  { title: "N8N Tutorial for Beginners in Telugu | Complete Guide 2024", meta: "18K views • 1 month ago", duration: "28:45", grad: "from-fuchsia-900 via-purple-950 to-black", chip: "N8N TUTORIAL", big: "FOR BEGINNERS", small: "Complete Guide" },
  { title: "WhatsApp AI Agent using n8n (Step by Step Tutorial)", meta: "9.6K views • 2 weeks ago", duration: "23:10", grad: "from-green-900 via-dark to-black", chip: "WHATSAPP", big: "AI AGENT", small: "with n8n" },
];

function FeaturedVideos() {
  return (
    <section className="bg-dark text-dark-foreground py-20 relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 mb-10">
          <div className="flex-1"><TitleDecor>Featured Videos</TitleDecor></div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.youtube.com/@mofiAI123-f/videos" target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-lime/60 text-lime px-4 py-2 text-sm font-medium hover:bg-lime/10"
          >
            View all videos <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((v, i) => (
            <motion.a
              key={v.title}
              href="https://www.youtube.com/@mofiAI123-f" target="_blank" rel="noreferrer"
              custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              className="group block"
            >
              <div className={`relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${v.grad} border border-white/10`}>
                <div className="absolute inset-0 dotted-bg opacity-30" />
                <div className="relative h-full p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] tracking-widest text-white/80">{v.chip}</div>
                    <div className="font-display text-3xl text-lime mt-1">{v.big}</div>
                    <div className="text-xs text-white/70 mt-1">{v.small}</div>
                  </div>
                  <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.4, repeat: Infinity }} className="self-center">
                    <div className="h-12 w-12 rounded-full bg-lime flex items-center justify-center">
                      <Play className="h-5 w-5 text-lime-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
                <span className="absolute bottom-2 right-2 text-[11px] font-semibold bg-black/85 text-white rounded px-1.5 py-0.5">{v.duration}</span>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3].map((d) => (
            <span key={d} className={`h-2 rounded-full transition-all ${d === 0 ? "w-6 bg-lime" : "w-2 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Playlists ---------- */
const playlists = [
  { num: "1", title: "N8N Beginner Tutorials", desc: "Start here if you're completely new to n8n. Basic concepts, first workflows, and fundamental nodes explained step-by-step.", count: 32, big: "n8n", chip: "BEGINNER TUTORIALS", grad: "from-fuchsia-900 to-black" },
  { num: "2", title: "AI Agent Projects", desc: "Build complete AI agents from scratch. ChatGPT integration, voice agents, WhatsApp bots, and more.", count: 27, big: "AI AGENT", chip: "PROJECTS", grad: "from-emerald-900 to-black" },
  { num: "3", title: "Automation Tips & Tricks", desc: "Quick tips, common mistakes, best practices, and workflow optimization techniques.", count: 41, big: "AUTOMATION", chip: "TIPS & TRICKS", grad: "from-blue-950 to-black" },
  { num: "4", title: "Client Project Walkthroughs", desc: "Real client projects explained. Learn from actual paid work and see how projects are built professionally.", count: 19, big: "CLIENT PROJECT", chip: "WALKTHROUGHS", grad: "from-indigo-950 to-black" },
];

function Playlists() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#ffffff 0%,#fff5f5 60%,#ffe3e3 100%)" }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle,#FF0000,transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] text-white px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-bold mb-3"
        >
          <ListVideo className="h-3.5 w-3.5" /> Playlists
        </motion.div>
        <h2 className="font-display text-3xl md:text-4xl text-slate-900 mb-3">Video Playlists</h2>
        <p className="text-slate-600 mb-12">Curated playlists to help you learn systematically</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {playlists.map((p, i) => (
            <motion.div
              key={p.num}
              custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-red-100 bg-white overflow-hidden shadow-lg shadow-red-200/40 hover:shadow-2xl hover:shadow-red-300/50 transition-shadow"
            >
              <div className={`relative aspect-video bg-gradient-to-br ${p.grad} p-4 flex flex-col justify-between`}>
                <div>
                  <div className="font-display text-2xl text-white">{p.big}</div>
                  <div className="text-[11px] tracking-widest text-white/80 mt-0.5">{p.chip}</div>
                </div>
                <span className="self-end inline-flex items-center gap-1 bg-black/70 rounded px-2 py-0.5 text-[10px] text-white">
                  <ListVideo className="h-3 w-3" /> Playlist
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-slate-900">{p.num}. {p.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500">
                  <Play className="h-3 w-3 text-[#FF0000]" fill="currentColor" /> {p.count} videos
                </div>
                <a
                  href="https://www.youtube.com/@mofiAI123-f/playlists" target="_blank" rel="noreferrer"
                  aria-label="Watch playlist on YouTube"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF0000] text-white px-3 py-2 text-xs font-bold hover:bg-red-700 transition-colors"
                >
                  <Play className="h-3 w-3" fill="currentColor" /> Watch Playlist
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Latest Uploads ---------- */
const latest = [
  { title: "Build AI Voice Agent with n8n (Complete Tutorial)", meta: "6.2K views • 2 days ago", duration: "24:18", big: "AI VOICE AGENT" },
  { title: "n8n Webhook Tutorial for Beginners in Telugu", meta: "4.8K views • 5 days ago", duration: "16:45", big: "n8n WEBHOOK" },
  { title: "WhatsApp Bot using n8n Step by Step Tutorial", meta: "9.1K views • 1 week ago", duration: "28:32", big: "WHATSAPP BOT" },
  { title: "Google Sheets Integration with n8n (Full Guide)", meta: "3.7K views • 1 week ago", duration: "18:26", big: "GOOGLE SHEETS" },
  { title: "Build AI Agent with Memory in n8n (Complete Guide)", meta: "5.9K views • 1 week ago", duration: "27:14", big: "AI AGENT MEMORY" },
  { title: "Error Handling in n8n Workflows Explained", meta: "2.6K views • 2 weeks ago", duration: "14:52", big: "ERROR HANDLING" },
  { title: "RAG System using n8n (Complete Tutorial)", meta: "4.2K views • 2 weeks ago", duration: "31:07", big: "RAG SYSTEM" },
  { title: "Web Scraping with n8n Step by Step Tutorial", meta: "3.3K views • 2 weeks ago", duration: "22:19", big: "WEB SCRAPING" },
];

function LatestUploads() {
  return (
    <section className="bg-dark text-dark-foreground py-20 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 mb-3">
          <div className="flex-1"><TitleDecor>Latest Uploads</TitleDecor></div>
          <motion.a
            whileHover={{ scale: 1.05 }} href="https://www.youtube.com/@mofiAI123-f/videos" target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-lime/60 text-lime px-4 py-2 text-sm font-medium hover:bg-lime/10"
          >
            View all videos <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
        <p className="text-center text-white/65 mb-10">Check out our most recent videos</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {latest.map((v, i) => (
            <motion.a
              key={v.title}
              href="https://www.youtube.com/@mofiAI123-f" target="_blank" rel="noreferrer"
              custom={i % 4} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }} className="group block"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-dark via-black to-purple-950/40 border border-white/10 p-4 flex items-center justify-center">
                <div className="absolute inset-0 dotted-bg opacity-30" />
                <div className="relative text-center">
                  <div className="font-display text-lg text-lime leading-tight">{v.big}</div>
                  <div className="text-[10px] tracking-widest text-white/70 mt-1">WITH n8n</div>
                </div>
                <span className="absolute bottom-2 right-2 text-[11px] font-semibold bg-black/85 rounded px-1.5 py-0.5">{v.duration}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Never Miss Banner ---------- */
function NeverMiss() {
  const items = [
    { Icon: Video, label: "New tutorials every week", color: "bg-red-500/20 text-red-400 border-red-400/40" },
    { Icon: Bell, label: "Get notified of new uploads", color: "bg-amber-500/20 text-amber-400 border-amber-400/40" },
    { Icon: MessageSquare, label: "Join discussion in comments", color: "bg-blue-500/20 text-blue-400 border-blue-400/40" },
    { Icon: Gift, label: "Exclusive giveaways for subscribers", color: "bg-purple-500/20 text-purple-400 border-purple-400/40" },
  ];
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-lime/30 bg-gradient-to-br from-black via-dark to-black p-10 md:p-12 grid lg:grid-cols-3 gap-10 items-center">
          <div>
            <h3 className="font-display text-2xl text-white mb-6">Never Miss an Upload</h3>
            <ul className="space-y-3">
              {items.map(({ Icon, label, color }) => (
                <motion.li key={label} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 text-sm text-white/80">
                  <span className={`h-8 w-8 rounded-md border flex items-center justify-center ${color}`}><Icon className="h-4 w-4" /></span>
                  {label}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.4, repeat: Infinity }}
              className="relative h-32 w-32 rounded-full bg-lime flex items-center justify-center"
              style={{ boxShadow: "0 0 0 16px oklch(0.88 0.16 125/0.18), 0 0 0 36px oklch(0.88 0.16 125/0.08), 0 0 70px oklch(0.88 0.16 125/0.4)" }}
            >
              <Play className="h-12 w-12 text-lime-foreground ml-1" fill="currentColor" />
            </motion.div>
            <div className="mt-6 font-display text-4xl text-white">4K+</div>
            <div className="text-sm text-white/60 flex items-center gap-1.5"><Users className="h-4 w-4" /> Subscribers</div>
          </div>

          <div>
            <div className="text-white/65 text-sm">Subscribe to</div>
            <div className="font-display text-4xl mt-1">
              <span className="text-white">MOFI </span><span className="text-lime">AI</span>
            </div>
            <div className="text-white/55 text-sm mt-1 mb-6">Learn. Automate. Grow.</div>
            <motion.a
              whileHover={{ scale: 1.03 }} href="https://www.youtube.com/@mofiAI123-f" target="_blank" rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-lime text-lime-foreground px-5 py-3.5 font-bold"
            >
              <Youtube className="h-5 w-5" /> Subscribe to MOFI AI on YouTube
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Structured Learning ---------- */
function StructuredLearning() {
  return (
    <section className="bg-dark text-dark-foreground py-24 relative">
      <div className="absolute inset-0 animated-grid opacity-15" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="block h-[2px] w-10 bg-lime" />
          <Rocket className="h-5 w-5 text-lime" />
          <span className="text-sm uppercase tracking-[0.18em] text-lime font-bold">Want More?</span>
          <span className="block h-[2px] w-10 bg-lime" />
        </div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-5xl tracking-tight">
          Ready for Complete Structured Learning?
        </motion.h2>
        <p className="mt-4 text-white/65 max-w-2xl mx-auto">
          YouTube is great for learning basics and getting tips, but for comprehensive mastery and real projects, enroll in our full course or mentorship program.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
          {/* N8N Course */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-lime/30 bg-white/[0.03] backdrop-blur p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-lime/20 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-lime" />
              </div>
              <h3 className="font-display text-2xl text-lime">N8N Mastery Course</h3>
            </div>
            <p className="text-sm text-white/65 mb-5">Complete self-paced course with real projects and lifetime access.</p>
            <ul className="space-y-2.5 mb-6">
              {["Complete 20+ hour structured curriculum","6 end-to-end real world projects","Community support and doubt sessions","Lifetime access to all materials","Perfect for self-paced learners"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="font-display text-4xl text-white">₹5,000</div>
                <div className="text-xs text-white/50">One-time payment</div>
              </div>
              <Link to="/course" className="inline-flex items-center gap-2 rounded-md border border-lime/60 text-lime px-5 py-2.5 text-sm font-semibold hover:bg-lime/10">
                View Course Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Mentorship */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-lime/30 bg-white/[0.03] backdrop-blur p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-2xl bg-lime/20 flex items-center justify-center">
                <UserStar className="h-7 w-7 text-lime" />
              </div>
              <h3 className="font-display text-2xl text-lime">1:1 Personalized Mentorship</h3>
            </div>
            <p className="text-sm text-white/65 mb-5">Live one-on-one training customized to your goals and requirements.</p>
            <ul className="space-y-2.5 mb-6">
              {["45+ hours live 1:1 training sessions","Customized learning path for your goals","Direct access to instructor","Real projects based on your needs","Career guidance and freelancing support"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-lime flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="font-display text-4xl text-white">₹30,000</div>
                <div className="text-xs text-white/50">One-time investment</div>
              </div>
              <Link to="/mentorship" className="inline-flex items-center gap-2 rounded-md bg-lime text-lime-foreground px-5 py-2.5 text-sm font-bold">
                Learn About 1:1 Program <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Social ---------- */

function Social() {
  const items = [
    {
      Icon: YouTubeIcon,
      name: "YouTube",
      desc: "Free tutorials, project walkthroughs and automation tips",
      href: "https://www.youtube.com/@mofiAI123-f",
      btnBg: "#FF0000",
      btnLabel: "Subscribe",
    },
    {
      Icon: TelegramIcon,
      name: "Telegram Community",
      desc: "Join our community, ask doubts, get help and network",
      href: "https://t.me/ai_telugu_community",
      btnBg: "#229ED9",
      btnLabel: "Join Channel",
    },
    {
      Icon: InstagramIcon,
      name: "Instagram",
      desc: "Behind the scenes, updates, tips and automation reels",
      href: "https://instagram.com/mofi_ai",
      btnBg: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
      btnLabel: "Follow",
    },
    {
      Icon: Globe,
      name: "Website",
      desc: "Learn more about our services, courses and resources",
      href: "https://profitgrowthai.in",
      btnBg: "#22c55e",
      btnLabel: "Visit",
    },
  ];
  return (
    <section className="bg-dark text-dark-foreground py-24 relative">
      <div className="absolute inset-0 dotted-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <SectionLabel light>Stay Connected</SectionLabel>
        <TitleDecor>Connect on Social Media</TitleDecor>
        <p className="text-white/65 mb-12">Follow us for updates, tips, and community discussions</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, name, desc, href, btnBg, btnLabel }, i) => (
            <motion.div
              key={name}
              custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col items-center"
            >
              <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <Icon className="h-9 w-9" />
              </div>
              <h4 className="font-semibold text-white">{name}</h4>
              <p className="text-xs text-white/60 mt-2 leading-relaxed mb-4">{desc}</p>
              <motion.a
                href={href} target="_blank" rel="noreferrer" aria-label={btnLabel + " " + name}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-lg"
                style={{ background: btnBg }}
              >
                <Icon className="h-4 w-4" /> {btnLabel}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Keep Learning Dark Band ---------- */
function KeepLearning() {
  const features = [
    { Icon: Video, label: "Quality Content", color: "bg-red-900/40 text-red-300" },
    { Icon: Bell, label: "Turn On Notifications", color: "bg-amber-900/40 text-amber-300" },
    { Icon: MessageSquare, label: "Engage in Comments", color: "bg-blue-900/40 text-blue-300" },
    { Icon: Gift, label: "Exclusive Giveaways", color: "bg-purple-900/40 text-purple-300" },
  ];
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-lime/30 bg-gradient-to-br from-black via-dark to-black p-10 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.15]">
              <span className="text-white">Keep Learning.</span><br />
              <span className="text-lime">Keep Automating.</span><br />
              <span className="text-shimmer-dark">Keep Growing.</span>
            </h2>
            <p className="mt-6 text-white/65 leading-relaxed max-w-md">
              Join thousands of learners who are building amazing automations and transforming their careers with n8n and AI.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-lime" />
              <div>
                <div className="font-display text-xl text-white">MOFI AI</div>
                <div className="text-[11px] tracking-[0.18em] text-white/50">AUTOMATE. INNOVATE. GROW.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-lime/20 bg-white/[0.04] p-7 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-white/60 mb-2">
              <Youtube className="h-4 w-4 text-lime" /> Join Our Learning Community
            </div>
            <h3 className="text-xl font-bold text-white">Subscribe to <span className="text-lime">MOFI AI</span></h3>
            <p className="text-xs text-white/60 mt-1">New tutorials every week!</p>
            <div className="grid grid-cols-4 gap-3 my-6">
              {features.map(({ Icon, label, color }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className={`h-11 w-11 rounded-full flex items-center justify-center ${color}`}><Icon className="h-5 w-5" /></div>
                  <div className="text-[10px] text-white/70 leading-tight">{label}</div>
                </div>
              ))}
            </div>
            <motion.a whileHover={{ scale: 1.02 }} href="https://www.youtube.com/@mofiAI123-f" target="_blank" rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-lime text-lime-foreground py-3.5 font-bold">
              <Youtube className="h-5 w-5" /> Subscribe to MOFI AI on YouTube <ArrowRight className="h-4 w-4" />
            </motion.a>
            <div className="mt-3 flex items-center justify-center gap-2 rounded-md bg-white/[0.05] py-2.5 text-sm">
              <Users className="h-4 w-4 text-white/60" />
              <span className="text-white font-bold">4K+</span>
              <span className="text-white/60">Subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Quote Footer ---------- */
function QuoteFooter() {
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl border border-lime/20 bg-white/[0.03] p-10 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center"
        >
          <div className="flex items-start gap-4">
            <span className="font-display text-7xl text-lime leading-none">"</span>
            <p className="text-xl md:text-2xl text-white/85 leading-snug">
              The best time to learn automation was yesterday.<br />
              The second best time is <span className="text-lime font-bold">now.</span>
            </p>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
            className="hidden md:flex items-center gap-4"
          >
            <div className="h-16 w-16 rounded-2xl bg-lime/10 border border-lime/30 flex items-center justify-center">
              <Sparkles className="h-7 w-7 text-lime" />
            </div>
            <div className="h-px w-12 dashed-divider text-lime/50" />
            <div className="h-16 w-16 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center">
              <Play className="h-6 w-6 text-lime ml-0.5" fill="currentColor" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function ResourcesPage() {
  return (
    <div className="theme-red min-h-screen bg-dark">
      <ScrollProgress />
      <Header />
      <YTHero />
      <WhyWatch />
      <FeaturedVideos />
      <Playlists />
      <LatestUploads />
      <NeverMiss />
      <StructuredLearning />
      <Social />
      <KeepLearning />
      <QuoteFooter />
      <Footer />
    </div>
  );
}
