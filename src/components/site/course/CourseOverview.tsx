import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";

const benefits = [
  {
    icon: "🎓",
    title: "No Coding Required",
    desc: "Taught by instructors from non-technical backgrounds who understand your learning journey. Every concept explained in simple Telugu.",
  },
  {
    icon: "💼",
    title: "Experience-Based Teaching",
    desc: "Every lesson is based on real projects delivered to clients in India, USA, Singapore, and New Zealand.",
  },
  {
    icon: "🤖",
    title: "Build Production-Ready Projects",
    desc: "Multi-Orchestration Agent, Voice Agent, Crypto Agent, Video Automation, Maps Scraper, and WhatsApp Agent.",
  },
  {
    icon: "🔄",
    title: "Lifetime Updates Included",
    desc: "New modules added regularly. Free access to all updates throughout your 1-year enrollment period.",
  },
];

export function CourseOverview() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Comprehensive Training</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-4xl"
        >
          From Zero to Expert<br />in N8N Automation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-muted-foreground max-w-2xl"
        >
          Whether you're a student, business owner, working professional, freelancer, or entrepreneur — this complete Telugu course is designed for you. No technical background required.
        </motion.p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl bg-card border border-border p-6 relative overflow-hidden group"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
                className="text-4xl"
              >
                {b.icon}
              </motion.div>
              <h3 className="mt-4 font-display text-xl">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              <motion.div
                className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-lime/10 group-hover:bg-lime/20 blur-2xl"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
