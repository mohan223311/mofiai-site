import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Target, CalendarRange, Radio } from "lucide-react";

const controls = [
  {
    icon: Target,
    tag: "You Control the Skill",
    title: "Choose Your Topics",
    desc: "Select any AI topic from our offerings or completely customize your learning path. Not limited to predefined curriculum.",
  },
  {
    icon: CalendarRange,
    tag: "You Control the Time",
    title: "Flexible Scheduling",
    desc: "1 or 2-hour sessions with 1-day gaps between each. Learn at your own comfortable pace. No rush, no pressure.",
  },
  {
    icon: Radio,
    tag: "You Learn Live",
    title: "Real-Time Interaction",
    desc: "Live face-to-face sessions with both instructors. Ask questions instantly, work on real problems together.",
  },
];

export function ControlEverything() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Total Flexibility</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-3xl"
        >
          You Control Everything in Your<br /><span className="text-shimmer">Learning Journey</span>
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {controls.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, rotate: -0.5 }}
                className="relative rounded-2xl bg-card border border-border p-7 overflow-hidden group"
              >
                <motion.div
                  className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-lime/10 blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
                  className="relative h-14 w-14 rounded-2xl bg-dark text-lime flex items-center justify-center shadow-lg"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{c.tag}</div>
                <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/919347301449?text=I'm%20interested%20in%20the%201:1%20Mentorship%20Program"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-dark text-dark-foreground px-7 py-3.5 text-sm font-semibold border border-lime/40 hover:bg-lime hover:text-lime-foreground transition-colors"
          >
            Start Learning Your Own Way →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
