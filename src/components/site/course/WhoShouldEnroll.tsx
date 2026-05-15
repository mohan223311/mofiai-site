import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";

const groups = [
  {
    icon: "🎓",
    title: "Students",
    points: [
      "Learn cutting-edge automation skills",
      "Build a portfolio with 6 real projects",
      "Gain a competitive edge in the job market",
      "Future-proof your career",
    ],
  },
  {
    icon: "💼",
    title: "Business Owners",
    points: [
      "Automate repetitive business processes",
      "Reduce operational costs dramatically",
      "Scale operations without proportional cost",
      "Implement AI without hiring developers",
    ],
  },
  {
    icon: "👔",
    title: "Working Professionals",
    points: [
      "Add automation expertise to your skillset",
      "Increase productivity in current role",
      "Unlock promotions & better roles",
      "Transition into AI specialization",
    ],
  },
  {
    icon: "💻",
    title: "Freelancers",
    points: [
      "Offer high-value automation services",
      "Build recurring revenue streams",
      "Charge premium rates for AI agents",
      "Expand beyond traditional services",
    ],
  },
  {
    icon: "🚀",
    title: "Entrepreneurs",
    points: [
      "Build automated systems from day one",
      "Launch automation-as-a-service business",
      "Reduce dependency on large teams",
      "Create efficient, scalable operations",
    ],
  },
];

export function WhoShouldEnroll() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Who Should Enroll</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-4xl"
        >
          Perfect For Everyone —<br />Find Your Learning Path
        </motion.h2>
        <p className="mt-4 text-muted-foreground">Tailored benefits for every learner type.</p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-card border border-border p-7 relative"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                className="text-5xl inline-block"
              >
                {g.icon}
              </motion.div>
              <h3 className="mt-4 font-display text-2xl">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.points.map((p, j) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
