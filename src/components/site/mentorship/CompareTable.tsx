import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "../SectionLabel";

const rows = [
  ["Duration", "20+ hours recorded videos", "45+ hours (25 live + 20 recorded)"],
  ["Learning Style", "Self-paced video course", "Live personalized sessions"],
  ["Content", "Fixed curriculum for everyone", "Completely customized to YOUR goals"],
  ["Support", "Weekly group doubt sessions", "Private 1-on-1 access to instructors"],
  ["Projects", "6 predefined standard projects", "Custom projects built for YOU"],
  ["Doubt Solving", "Group sessions (shared time)", "5 private 1-hour sessions (dedicated)"],
  ["Course Access", "1 year access period", "Lifetime access to all content"],
  ["Instructor Interaction", "Limited group interaction", "Direct personal mentorship"],
  ["Curriculum Flexibility", "Fixed 22 sections", "Fully flexible based on needs"],
  ["Best For", "Self-learners, students", "Serious learners, client work, career switchers"],
];

export function CompareTable() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Compare</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-7xl font-black text-foreground tracking-tight"
        >
          Choose Your<br /><span className="text-shimmer">Learning Path</span>
        </motion.h2>
        <p className="mt-4 text-base md:text-lg font-medium text-foreground/80">Compare both options to find your perfect fit.</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 overflow-x-auto rounded-3xl border-2 border-foreground/15 bg-card shadow-2xl shadow-foreground/10"
        >
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-foreground/20 bg-foreground text-background">
                <th className="text-left px-6 py-5 font-black uppercase tracking-wider text-sm">Feature</th>
                <th className="text-left px-6 py-5 font-black uppercase tracking-wider text-sm">
                  N8N Course
                  <div className="text-xs text-background/70 font-bold mt-1 normal-case tracking-normal">₹5,000</div>
                </th>
                <th className="text-left px-6 py-5 font-black uppercase tracking-wider text-sm bg-lime text-lime-foreground relative">
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -top-3 right-3 text-[10px] uppercase tracking-widest bg-foreground text-background px-2.5 py-1 rounded-full font-black shadow-lg"
                  >
                    ★ Recommended
                  </motion.span>
                  1:1 Mentorship
                  <div className="text-xs font-bold mt-1 normal-case tracking-normal opacity-90">₹30,000</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={r[0]}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-foreground/10 last:border-0 hover:bg-secondary/50 transition-colors"
                >
                  <td className="px-6 py-5 font-extrabold text-foreground text-base">{r[0]}</td>
                  <td className="px-6 py-5 font-medium text-foreground/75">{r[1]}</td>
                  <td className="px-6 py-5 bg-lime/10 font-bold text-foreground">{r[2]}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <motion.div whileHover={{ scale: 1.04 }}>
            <Link
              to="/course"
              className="inline-flex rounded-md border border-foreground px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Enroll in N8N Course
            </Link>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="https://wa.me/919347301449?text=I'm%20interested%20in%20the%201:1%20Mentorship%20Program"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-lime text-lime-foreground px-7 py-3.5 text-sm font-semibold shadow-lg shadow-lime/30"
          >
            Book 1:1 Mentorship →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
