import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import shaikImg from "@/assets/shaik-fhiroj.png";
import mohanImg from "@/assets/mohan-rao.png";

const instructors = [
  {
    name: "Shaik Fhiroj",
    role: "AI Automation Expert & Co-Founder",
    image: shaikImg,
    spec: "Voice Agents · N8N Workflows · AI Chatbots",
    bg: "Non-technical background, self-taught automation expert.",
  },
  {
    name: "Mohan Rao",
    role: "AI Automation Expert & Co-Founder",
    image: mohanImg,
    spec: "WhatsApp Automation · API Integration · Web Scraping",
    bg: "Non-technical background, practical hands-on expert.",
  },
];

const stats = [
  "📅 1 Year Professional Experience",
  "🌍 Clients in 4 Countries",
  "👨‍🎓 4 Successful 1:1 Students Trained",
  "🎥 YouTube: MOFI AI",
];

export function Instructors() {
  return (
    <section id="mentorship" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Your Mentors</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display max-w-3xl"
        >
          Learn from<br />Industry Practitioners
        </motion.h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          Real-world experience delivering automation projects globally.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {instructors.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-card border border-border p-6 flex gap-6 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="h-28 w-28 shrink-0 rounded-2xl overflow-hidden ring-2 ring-lime/40 shadow-xl bg-gradient-to-br from-lime/20 to-lime/5"
              >
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </motion.div>
              <div>
                <h4 className="font-display text-2xl">{p.name}</h4>
                <p className="text-sm text-muted-foreground">{p.role}</p>
                <p className="mt-3 text-sm">
                  <span className="text-muted-foreground">Specialization: </span>
                  {p.spec}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{p.bg}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm"
            >
              {s}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
