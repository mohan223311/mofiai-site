import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SectionLabel } from "@/components/site/SectionLabel";
import {
  Rocket,
  Puzzle,
  Target,
  Trophy,
  Users,
  Calendar,
  Clock,
  GraduationCap,
  Languages,
  CheckCircle2,
  Megaphone,
  ArrowRight,
  Video,
  Handshake,
  PiggyBank,
  Briefcase,
  Mail,
  Phone,
  User as UserIcon,
  MessageSquare,
  Info,
  HelpCircle,
  Headphones,
  Flame,
  Star,
  TrendingUp,
  Award,
  PlayCircle,
  Users2,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/batches")({
  head: () => ({
    meta: [
      { title: "Live Group Batches — MOFI AI" },
      {
        name: "description",
        content:
          "Join a cohort of learners in structured live N8N training with peer collaboration and group projects.",
      },
    ],
  }),
  component: BatchesPage,
});

import batchesHero from "@/assets/batches-hero.png";
import { FloatingParticles } from "@/components/site/CursorGlow";

function BatchesPage() {
  return (
    <div className="theme-red min-h-screen">
      <ScrollProgress />
      <Hero />
      <WhatAreBatches />
      <BatchStructure />
      <WhatsIncluded />
      <Benefits />
      <UpcomingSchedule />
      <Pricing />
      <WhoShouldJoin />
      <WaitlistAndFAQ />
      <ContactBanner />
      <BottomBanner />
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark text-dark-foreground">
      <Header />
      <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.16 125 / 0.25), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.18 220 / 0.22), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />
      <FloatingParticles count={18} color="red" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs tracking-widest text-lime"
          >
            <Rocket className="h-3.5 w-3.5" /> COMING SOON
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]"
          >
            Learn <span className="text-lime">N8N</span> in
            <br />
            Live Group Batches
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-dark-foreground/75 max-w-md"
          >
            Join a cohort of learners in structured live training with peer
            collaboration and group projects
          </motion.p>

          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-lime px-8 py-4 text-lime-foreground font-medium text-lg"
          >
            Join Waitlist <ArrowRight className="h-5 w-5" />
          </motion.a>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 max-w-2xl border-t border-white/10 pt-6">
            {[
              { i: Users, t: "Live Instruction", d: "Interactive & Engaging" },
              { i: Users, t: "Peer Collaboration", d: "Learn Together" },
              { i: GraduationCap, t: "Certificate", d: "On Completion" },
              { i: Megaphone, t: "Continued Support", d: "Even After Batch" },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-start gap-2"
              >
                <b.i className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium">{b.t}</div>
                  <div className="text-xs text-dark-foreground/60">{b.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-6 rounded-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.62 0.24 25 / 0.35), transparent 70%)" }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.img
            src={batchesHero}
            alt="Live N8N AI Agents & Automations Group Batches"
            className="relative w-full max-w-xl rounded-2xl shadow-2xl border border-white/10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- WHAT ARE LIVE BATCHES ---------- */
function WhatAreBatches() {
  const points = [
    "Learn from peers' questions and experiences",
    "Collaborate on real projects together",
    "Build professional network in automation field",
    "Structured learning path with accountability",
    "More affordable than 1:1 mentorship",
    "Share knowledge and help each other grow",
  ];

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
        >
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-xl bg-lime/15 border border-lime/30 flex items-center justify-center shrink-0">
              <Users className="h-6 w-6 text-lime-foreground" />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl">What Are Live Batches?</h2>
              <p className="mt-2 text-lime font-medium">Group Learning with Live Instruction</p>
            </div>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Live Group Batches combine the structure of classroom learning with the
            flexibility of online education. Learn n8n automation alongside a cohort
            of students in live sessions, collaborate on projects, and build your
            professional network.
          </p>

          <div className="mt-10 grid grid-cols-4 gap-3 items-end">
            {["💜", "💛", "💚", "💙"].map((c, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                className="aspect-square rounded-xl bg-secondary/60 border border-border flex items-center justify-center text-3xl"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="font-display text-2xl font-black text-foreground">Why Group Learning Works:</h3>
          <ul className="mt-6 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-lime mt-0.5 shrink-0" />
                <span className="text-foreground">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- BATCH STRUCTURE ---------- */
function BatchStructure() {
  const weeks = [
    {
      n: 1,
      title: "Foundations",
      icon: Rocket,
      tone: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      items: [
        "N8N introduction and setup",
        "Understanding nodes and workflows",
        "Building first automation",
        "AI fundamentals and prompt engineering",
      ],
    },
    {
      n: 2,
      title: "Intermediate Concepts",
      icon: Puzzle,
      tone: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      items: [
        "Data handling and transformation",
        "API integrations and webhooks",
        "AI nodes and HITL implementation",
        "Error handling basics",
      ],
    },
    {
      n: 3,
      title: "Advanced Topics",
      icon: Target,
      tone: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      items: [
        "RAG and vector databases",
        "Voice agents and WhatsApp automation",
        "Web scraping and lead generation",
        "Advanced workflow patterns",
      ],
    },
    {
      n: 4,
      title: "Real Projects",
      icon: Trophy,
      tone: "text-rose-400 bg-rose-500/10 border-rose-500/30",
      items: [
        "Group project: Build complete automation",
        "Individual project presentations",
        "Deployment and production practices",
        "Career guidance and freelancing tips",
      ],
    },
  ];

  const sidebar = [
    { i: Video, t: "2 Live Sessions", s: "Per Week" },
    { i: Clock, t: "2 hours", s: "per session" },
    { i: GraduationCap, t: "16 hours live training", s: "+ recorded materials" },
    { i: Users, t: "10–15 students", s: "maximum" },
    { i: Languages, t: "Language:", s: "Telugu" },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-border bg-card p-8 md:p-10"
        >
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            {/* Sidebar */}
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-lime/15 border border-lime/30 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-lime-foreground" />
                </div>
                <h3 className="font-display text-3xl">Batch Structure</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {sidebar.map((s, i) => (
                  <motion.li
                    key={s.t}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3"
                  >
                    <s.i className="h-4 w-4 text-lime shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">{s.t}</span>{" "}
                      <span className="text-muted-foreground">{s.s}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right side */}
            <div>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <h3 className="font-display text-2xl md:text-3xl text-center font-black text-foreground">
                  4-Week Intensive Program
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-10 relative grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Connector line */}
                <div className="hidden md:block absolute top-[120px] left-[10%] right-[10%] h-px border-t border-dashed border-border" />

                {weeks.map((w, i) => (
                  <motion.div
                    key={w.n}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-2xl border border-border bg-secondary/30 p-5"
                  >
                    <div className="text-xs font-mono tracking-widest text-muted-foreground">
                      WEEK {w.n}
                    </div>
                    <div className={`mt-1 font-display text-xl ${w.tone.split(" ")[0]}`}>
                      {w.title}
                    </div>

                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      className={`mx-auto my-5 h-16 w-16 rounded-full border flex items-center justify-center ${w.tone}`}
                    >
                      <w.icon className="h-7 w-7" />
                    </motion.div>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {w.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- BOTTOM BANNER ---------- */
function BottomBanner() {
  return (
    <section id="waitlist" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="h-14 w-14 rounded-xl bg-lime/15 border border-lime/30 flex items-center justify-center shrink-0">
            <Megaphone className="h-6 w-6 text-lime-foreground" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="font-display text-xl text-lime-foreground">
              Live learning. Real collaboration. Career transformation.
            </p>
            <p className="mt-1 text-muted-foreground text-sm">
              Batches starting soon — Join waitlist to get notified first!
            </p>
          </div>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="hidden md:block"
          >
            <ArrowRight className="h-6 w-6 text-lime" />
          </motion.div>
          <div className="flex items-center gap-2">
            {[Users, Users, Users].map((I, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                className="h-10 w-10 rounded-full bg-lime/15 border border-lime/30 flex items-center justify-center"
              >
                <I className="h-4 w-4 text-lime" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- WHAT'S INCLUDED ---------- */
function WhatsIncluded() {
  const cards = [
    {
      i: PlayCircle,
      tone: "text-rose-400 bg-rose-500/10 border-rose-500/30",
      t: "Live Sessions",
      items: ["8 live sessions (2 hours each)", "Interactive Q&A during sessions", "Screen sharing and live coding", "Real-time problem solving"],
    },
    {
      i: Users2,
      tone: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      t: "Group Projects",
      items: ["Collaborative project work", "Peer code reviews", "Group problem-solving sessions", "Team-based learning"],
    },
    {
      i: Video,
      tone: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      t: "Recordings",
      items: ["All sessions recorded", "Lifetime access to recordings", "Supplementary video materials", "Reference documentation"],
    },
    {
      i: Users,
      tone: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      t: "Community",
      items: ["Private batch WhatsApp group", "Peer networking and collaboration", "Alumni network access", "Continued support after batch ends"],
    },
    {
      i: Headphones,
      tone: "text-rose-400 bg-rose-500/10 border-rose-500/30",
      t: "Support",
      items: ["Daily doubt resolution in group", "Weekend mentor sessions", "Project feedback and guidance", "Career advice and mentorship"],
    },
  ];

  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-4">
          <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-lime/50" />
          <h2 className="font-display text-4xl md:text-5xl text-center">What's Included in Live Batches</h2>
          <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-lime/50" />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
                className={`mx-auto h-16 w-16 rounded-full border flex items-center justify-center ${c.tone}`}
              >
                <c.i className="h-7 w-7" />
              </motion.div>
              <h3 className={`mt-4 text-center font-display text-xl ${c.tone.split(" ")[0]}`}>{c.t}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                    <span>{it}</span>
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

/* ---------- BENEFITS ---------- */
function Benefits() {
  const items = [
    { n: "01", t: "Learn from Peers", tone: "text-purple-400 bg-purple-500/10 border-purple-500/30", icon: Users, d: "Questions asked by other students often address topics you hadn't considered. Learn from diverse perspectives and experiences." },
    { n: "02", t: "Build Your Network", tone: "text-blue-400 bg-blue-500/10 border-blue-500/30", icon: Handshake, d: "Connect with professionals, students, and entrepreneurs learning automation. Collaborate on projects and build lasting professional relationships." },
    { n: "03", t: "Structured Accountability", tone: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", icon: Calendar, d: "Fixed schedule keeps you accountable. Progress with the batch, complete assignments together, and stay motivated through group momentum." },
    { n: "04", t: "More Affordable", tone: "text-amber-400 bg-amber-500/10 border-amber-500/30", icon: PiggyBank, d: "Get live instruction and mentorship at a fraction of 1:1 cost. Perfect balance between self-paced course and personal mentorship." },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-4">
          <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-lime/50" />
          <h2 className="font-display text-4xl md:text-5xl text-center">Benefits of Group Learning</h2>
          <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-lime/50" />
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 relative"
            >
              <div className={`absolute top-5 left-5 h-10 w-10 rounded-full border flex items-center justify-center font-mono text-sm ${it.tone}`}>
                {it.n}
              </div>
              <div className="pl-16">
                <h3 className={`font-display text-2xl ${it.tone.split(" ")[0]}`}>{it.t}</h3>
              </div>
              <div className="mt-5 grid grid-cols-[64px_1fr] gap-4 items-start">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className={`h-16 w-16 rounded-full border flex items-center justify-center ${it.tone}`}
                >
                  <it.icon className="h-7 w-7" />
                </motion.div>
                <p className="text-muted-foreground">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- UPCOMING SCHEDULE ---------- */
function UpcomingSchedule() {
  const batches = [
    {
      label: "BATCH 1 (Announced Soon)",
      tone: "bg-purple-500/15 text-purple-300 border-purple-500/40",
      icon: PlayCircle,
      iconTone: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      rows: [
        ["Start Date:", "To Be Announced"],
        ["Timings:", "Weekday evenings or weekends (To be decided based on student availability)"],
        ["Duration:", "4 weeks"],
        ["Seats:", "15 maximum"],
      ],
      status: { label: "Waitlist Open", tone: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
    },
    {
      label: "BATCH 2 (Planned)",
      tone: "bg-blue-500/15 text-blue-300 border-blue-500/40",
      icon: Calendar,
      iconTone: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      rows: [
        ["Start Date:", "6 weeks after Batch 1"],
        ["Timings:", "To be announced"],
        ["Duration:", "4 weeks"],
        ["Seats:", "15 maximum"],
      ],
      status: { label: "Early registration opening soon", tone: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
    },
  ];

  return (
    <section className="py-12 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4">
          <Calendar className="h-7 w-7 text-lime" />
          <h2 className="font-display text-3xl md:text-4xl">Upcoming Batch Schedule</h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-lime/50 to-transparent" />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {batches.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${b.tone}`}>
                {b.label}
              </div>

              <div className="mt-6 grid grid-cols-[96px_1fr] gap-5 items-start">
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    className={`h-20 w-20 rounded-full border flex items-center justify-center ${b.iconTone}`}
                  >
                    <b.icon className="h-9 w-9" />
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Status:</div>
                  <div className={`text-xs rounded-md border px-2 py-1 text-center ${b.status.tone}`}>{b.status.label}</div>
                </div>

                <div className="space-y-3">
                  {b.rows.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[110px_1fr] gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-lime" />
                        <span>{k}</span>
                      </div>
                      <div className="text-foreground">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  const included = [
    "8 live sessions (16 hours total)",
    "All session recordings with lifetime access",
    "Group projects and collaboration",
    "Private batch WhatsApp community",
    "Supplementary learning materials",
    "Certificate of completion",
    "Alumni network access",
    "Career guidance sessions",
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-dark text-dark-foreground p-8 md:p-10 grid lg:grid-cols-2 gap-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
          <div className="relative text-center">
            <h2 className="font-display text-4xl">Pricing</h2>

            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400/20 border border-amber-300/40 px-4 py-1.5 text-amber-300 text-xs font-bold tracking-widest"
            >
              <Flame className="h-4 w-4" /> EARLY BIRD PRICE
            </motion.div>

            <div className="mt-4 font-display text-6xl text-amber-300">₹8,000</div>
            <p className="mt-2 text-sm text-dark-foreground/70">(First 10 enrollments in each batch)</p>

            <div className="mt-8 h-px bg-white/10" />

            <div className="mt-6 inline-block rounded-md bg-white/10 px-3 py-1 text-xs tracking-widest text-dark-foreground/80">
              REGULAR PRICE
            </div>
            <div className="mt-2 font-display text-4xl text-dark-foreground/90">₹10,000</div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-dark-foreground/70">
              <span className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">₹</span>
              Payment: Full payment before batch start
            </p>
          </div>

          <div className="relative rounded-2xl bg-card text-foreground p-6">
            <h3 className="font-display text-xl">What's Included:</h3>
            <ul className="mt-5 space-y-3">
              {included.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span>{it}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- WHO SHOULD JOIN ---------- */
function WhoShouldJoin() {
  const cards = [
    { i: GraduationCap, tone: "text-purple-400 bg-purple-500/10 border-purple-500/30", t: "Students", d: "Learn with peers at your level and build study groups" },
    { i: Briefcase, tone: "text-blue-400 bg-blue-500/10 border-blue-500/30", t: "Working Professionals", d: "Fixed evening/weekend schedule fits your work routine" },
    { i: Target, tone: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", t: "Career Switchers", d: "Structured program with peer support for career transition" },
    { i: PiggyBank, tone: "text-amber-400 bg-amber-500/10 border-amber-500/30", t: "Budget-Conscious Learners", d: "Live training at more affordable price than 1:1" },
    { i: Users, tone: "text-rose-400 bg-rose-500/10 border-rose-500/30", t: "Social Learners", d: "Prefer group interaction and collaborative learning" },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-4">
          <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-lime/50" />
          <h2 className="font-display text-4xl md:text-5xl text-center">Who Should Join Live Batches?</h2>
          <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-lime/50" />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                className={`h-14 w-14 rounded-full border flex items-center justify-center ${c.tone}`}
              >
                <c.i className="h-6 w-6" />
              </motion.div>
              <h3 className={`mt-5 font-display text-xl ${c.tone.split(" ")[0]}`}>{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WAITLIST + FAQ ---------- */
function WaitlistAndFAQ() {
  const faqs = [
    { q: "When will the first batch start?", a: "We're currently gauging interest and will announce the first batch date once we have enough enrolled students. Waitlist members will be notified first." },
    { q: "What if I miss a live session?", a: "All sessions are recorded and shared immediately. You can catch up, but we encourage live attendance for interaction and questions." },
    { q: "How is this different from the N8N Course?", a: "The course is self-paced pre-recorded videos. Live Batches have scheduled live sessions with group interaction and collaborative projects." },
    { q: "Can I get 1:1 attention in a group batch?", a: "Batches are limited to 15 students for manageable group size. While not fully 1:1, you get personalized attention and can ask questions anytime." },
    { q: "Is there a refund policy?", a: "If the batch doesn't start due to insufficient enrollment, full refunds provided. Once batch starts, no refunds (same as course policy)." },
    { q: "Do I get the same projects as the N8N Course?", a: "Core concepts are same, but projects are adapted for group collaboration. Some projects done individually, others as team projects." },
    { q: "Will there be certificate?", a: "Yes, certificate of completion provided after finishing all sessions and projects." },
  ];

  return (
    <section id="waitlist" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-lime">✦</span>
              <div className="h-12 w-12 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-lime">✦</span>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Be First to Know When Batches Open</h2>
            <p className="mt-2 text-muted-foreground text-sm">Join the waitlist and get priority enrollment + early bird pricing</p>
          </div>

          <form className="mt-8 grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <Field icon={UserIcon} label="Name" placeholder="Enter your full name" />
            <Field icon={Mail} label="Email" placeholder="Enter your email address" />
            <Field icon={Phone} label="Phone Number (WhatsApp)" placeholder="Enter your WhatsApp number" />
            <SelectField icon={Briefcase} label="Current Occupation" placeholder="Select your occupation" options={["Student", "Working Professional", "Career Switcher", "Entrepreneur", "Other"]} />
            <div className="sm:col-span-2">
              <SelectField icon={Calendar} label="Preferred Batch Timing" placeholder="Select your preferred timing" options={["Weekday evenings", "Weekend mornings", "Weekend evenings", "Flexible"]} />
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3">
                <MessageSquare className="h-4 w-4 text-lime mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-semibold">Why do you want to learn n8n? (Optional)</div>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your goals and how n8n will help you…"
                    className="mt-1 w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground resize-none"
                  />
                </div>
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 font-medium"
            >
              <Users className="h-5 w-5" /> Join Waitlist
            </motion.button>
          </form>

          <div className="mt-6 flex items-start gap-3 rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
            <Info className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <div className="font-semibold">Waitlist members get priority enrollment and early bird pricing</div>
              <div className="text-muted-foreground text-xs mt-0.5">when batches open. We'll notify you via WhatsApp and email.</div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-purple-400" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-xl border border-border bg-secondary/40 px-5 py-4 [&_summary::-webkit-details-marker]:hidden open:bg-secondary/70 open:border-purple-500/40 transition-colors"
              >
                <summary className="flex items-start gap-3 cursor-pointer list-none">
                  <span className="h-7 w-7 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">Q</span>
                  <div className="flex-1 font-semibold text-foreground">{f.q}</div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90 group-open:rotate-[270deg] transition-transform shrink-0 mt-1" />
                </summary>
                <div className="mt-3 ml-10 text-sm text-muted-foreground flex gap-2">
                  <span className="text-lime font-bold">A:</span>
                  <span>{f.a}</span>
                </div>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, placeholder }: { icon: any; label: string; placeholder: string }) {
  return (
    <label className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3">
      <Icon className="h-4 w-4 text-lime shrink-0" />
      <div className="flex-1">
        <div className="text-xs font-semibold">{label}</div>
        <input className="mt-0.5 w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground" placeholder={placeholder} />
      </div>
    </label>
  );
}

function SelectField({ icon: Icon, label, placeholder, options }: { icon: any; label: string; placeholder: string; options: string[] }) {
  return (
    <label className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3">
      <Icon className="h-4 w-4 text-lime shrink-0" />
      <div className="flex-1">
        <div className="text-xs font-semibold">{label}</div>
        <select defaultValue="" className="mt-0.5 w-full bg-transparent outline-none text-sm text-muted-foreground">
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o} value={o} className="bg-card text-foreground">{o}</option>)}
        </select>
      </div>
    </label>
  );
}

/* ---------- CONTACT BANNER ---------- */
function ContactBanner() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-dark text-dark-foreground p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
          <div className="relative grid lg:grid-cols-[auto_1fr_auto_auto] gap-6 items-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-16 w-16 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center"
            >
              <Headphones className="h-7 w-7 text-purple-300" />
            </motion.div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl">Have Questions About Live Batches?</h3>
              <p className="text-dark-foreground/70 text-sm mt-1">We're here to help! Reach out to us for any queries.</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-emerald-300" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-dark-foreground/80">+919347301449</div>
                <div className="text-dark-foreground/80">+917075979578</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                <Mail className="h-5 w-5 text-purple-300" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Email</div>
                <div className="text-dark-foreground/80">profitgrowthai223311@gmail.com</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl border border-border bg-card p-6 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center"
        >
          <div className="h-14 w-14 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
            <Star className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <p className="font-display text-xl">Live learning. Real connections. Real results.</p>
            <p className="text-muted-foreground text-sm">Join a community of learners and build your automation career together.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { i: Users, t: "Learn Together", tone: "text-purple-400" },
              { i: Puzzle, t: "Build Together", tone: "text-blue-400" },
              { i: TrendingUp, t: "Grow Together", tone: "text-emerald-400" },
              { i: Trophy, t: "Succeed Together", tone: "text-amber-400" },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                className="flex items-center gap-2"
              >
                <b.i className={`h-5 w-5 ${b.tone}`} />
                <span className="text-sm font-medium">{b.t}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
