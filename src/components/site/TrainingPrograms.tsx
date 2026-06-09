import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, ArrowRight, Crown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimatedLines } from "./AnimatedHeading";

const programs = [
  {
    icon: BookOpen,
    badge: "Self-Paced",
    title: "N8N Mastery Course",
    duration: "20+ Hours",
    language: "Telugu",
    price: "₹5,000",
    desc: "Comprehensive self-paced video course covering n8n automation from beginner to expert level.",
    includes: ["22 detailed sections", "6 end-to-end real-world projects", "1 year course access", "Private WhatsApp community", "Weekly doubt sessions"],
    best: "Self-learners, students, budget-conscious professionals",
    cta: "Learn More",
    to: "/course" as const,
    // Sapphire
    accent: "#3b82f6",
    accentSoft: "rgba(59,130,246,0.12)",
    cardBg:
      "linear-gradient(160deg, #ffffff 0%, #f4f8ff 60%, #e7f0ff 100%)",
    border: "border-blue-200",
  },
  {
    icon: Crown,
    badge: "★ Premium",
    title: "1:1 Mentorship",
    duration: "45+ Hours (25 live + 20 recorded)",
    language: "Telugu",
    price: "₹30,000",
    desc: "Personalized live training customized to your specific goals with direct instructor guidance.",
    includes: ["Completely customized curriculum", "1-on-1 private group with instructors", "Free N8N course (₹5,000 value)", "10 days extended support", "5 private doubt sessions", "Lifetime access"],
    best: "Serious learners, client project goals, career switchers",
    cta: "Learn More",
    highlight: true,
    to: "/mentorship" as const,
    // Gold premium
    accent: "#D4AF37",
    accentSoft: "rgba(212,175,55,0.18)",
    cardBg:
      "linear-gradient(160deg, #1a1408 0%, #2a1f0a 40%, #1a1408 100%)",
    border: "border-amber-400/50",
  },
  {
    icon: GraduationCap,
    badge: "Cohort",
    title: "Live Group Batches",
    duration: "4-Week Program",
    language: "Telugu",
    price: "Join Waitlist",
    desc: "Learn together with a cohort in live group sessions with peer collaboration and projects.",
    includes: ["2 live sessions per week", "Group projects and assignments", "Peer learning and networking", "Lifetime recordings access"],
    best: "Group learners, networking seekers",
    cta: "Learn More",
    to: "/batches" as const,
    // Ruby
    accent: "#e11d48",
    accentSoft: "rgba(225,29,72,0.12)",
    cardBg:
      "linear-gradient(160deg, #ffffff 0%, #fff4f6 60%, #ffe4ea 100%)",
    border: "border-rose-200",
  },
];

export function TrainingPrograms() {
  return (
    <section
      id="courses"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fffaf0 0%, #fff5e0 40%, #fef3c7 100%)",
      }}
    >
      {/* Premium gold accents */}
      <div
        aria-hidden
        className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #C9A227 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-bold text-amber-900"
          style={{ background: "linear-gradient(90deg,#fde68a,#fcd34d)", boxShadow: "0 6px 24px -8px rgba(212,175,55,.55)" }}
        >
          <Crown className="h-3.5 w-3.5" />
          Learning Paths
        </motion.div>

        <AnimatedLines
          lines={["Master AI", "Automation Skills"]}
          className="mt-5 text-5xl md:text-6xl font-display max-w-3xl"
          highlight={["AI", "Skills"]}
        />

        <p className="mt-4 text-amber-900/70 max-w-xl">
          Choose the learning path that fits your goals and schedule.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            const isPremium = p.highlight;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-80px" }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-5 md:p-7 border ${p.border} ${isPremium ? "text-white shadow-2xl sm:col-span-2 md:col-span-1" : "text-slate-900 shadow-lg"}`}
                style={{
                  background: p.cardBg,
                  boxShadow: isPremium
                    ? "0 30px 60px -25px rgba(212,175,55,0.55), 0 0 0 1px rgba(212,175,55,0.35) inset"
                    : "0 18px 40px -22px rgba(0,0,0,0.18)",
                }}
              >
                {isPremium && (
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgba(212,175,55,0.18) 50%, transparent 70%)",
                    }}
                    animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                )}

                <span
                  className="absolute top-5 right-5 text-[10px] uppercase tracking-widest rounded-full px-3 py-1 font-bold"
                  style={
                    isPremium
                      ? { background: "linear-gradient(90deg,#fde68a,#D4AF37)", color: "#3a2a05" }
                      : { background: p.accentSoft, color: p.accent }
                  }
                >
                  {p.badge}
                </span>

                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-xl border"
                  style={{
                    background: isPremium ? "rgba(212,175,55,0.18)" : p.accentSoft,
                    borderColor: isPremium ? "rgba(212,175,55,0.5)" : p.accent + "55",
                    color: isPremium ? "#FFD76A" : p.accent,
                  }}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                <div className={`mt-2 text-sm ${isPremium ? "text-amber-100/70" : "text-slate-600"}`}>
                  {p.duration} · {p.language}
                </div>
                <div
                  className="mt-4 font-display text-4xl"
                  style={isPremium ? { color: "#FFD76A" } : { color: p.accent }}
                >
                  {p.price}
                </div>
                <p className={`mt-4 text-sm ${isPremium ? "text-amber-50/80" : "text-slate-700"}`}>
                  {p.desc}
                </p>
                <ul className={`mt-5 space-y-2 border-t border-dashed pt-4 ${isPremium ? "border-amber-300/25" : "border-slate-300/60"}`}>
                  {p.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <span
                        className="h-1.5 w-1.5 rounded-full mt-2 shrink-0"
                        style={{ background: isPremium ? "#FFD76A" : p.accent }}
                      />
                      <span className={isPremium ? "text-amber-50/90" : "text-slate-700"}>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-5 text-xs ${isPremium ? "text-amber-100/60" : "text-slate-500"}`}>
                  Best for: {p.best}
                </div>
                <Link
                  to={p.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold transition-transform hover:scale-105"
                  style={
                    isPremium
                      ? {
                          background: "linear-gradient(90deg,#FFD76A,#D4AF37)",
                          color: "#2a1f0a",
                          boxShadow: "0 10px 24px -10px rgba(212,175,55,0.7)",
                        }
                      : { background: p.accent, color: "#fff" }
                  }
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
