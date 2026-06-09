import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const stats = [
  { value: "+380%", label: "Faster Execution", desc: "Automation speeds up business processes dramatically, reducing manual work and human error." },
  { value: "4", label: "Countries Served", desc: "Successfully delivered projects for clients across India, USA, Singapore, and New Zealand." },
  { value: "100%", label: "Success Rate", desc: "All client projects delivered successfully with complete satisfaction and ongoing support." },
];

const clients = [
  { flag: "🇮🇳", country: "India", outcome: "WhatsApp automation for retail chain" },
  { flag: "🇺🇸", country: "USA", outcome: "AI voice agent for customer support" },
  { flag: "🇸🇬", country: "Singapore", outcome: "Voice agent for restaurant bookings" },
  { flag: "🇳🇿", country: "New Zealand", outcome: "AI automation & 1:1 mentorship" },
];

export function WhyChoose() {
  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <SectionLabel>Our Track Record</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display"
            >
              Proven Results<br />Across 4 Countries
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-muted-foreground max-w-md"
            >
              Real automation projects delivered globally — measurable impact for every client we work with.
            </motion.p>

            <div className="relative mt-10 h-6 w-full overflow-hidden">
              <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-border" />
              {[0, 0.6, 1.2, 1.8, 2.4, 3.0, 3.6].map((d, i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(190,242,100,0.6)]"
                  initial={{ x: "-5%" }}
                  animate={{ x: "105%" }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: d }}
                />
              ))}
            </div>
          </div>

          {/* Right: 2×2 country outcome cards */}
          <div className="grid grid-cols-2 gap-4">
            {clients.map((c, i) => (
              <motion.div
                key={c.country}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card border border-border p-5"
              >
                <span className="text-2xl">{c.flag}</span>
                <div className="mt-3 font-semibold text-sm">{c.country}</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.outcome}</p>
                <span className="mt-3 inline-flex h-1.5 w-6 rounded-full bg-lime" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-dashed border-border pt-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <span className="absolute -top-12 left-0 h-3 w-3 bg-lime" />
              <div className="text-5xl font-display">{s.value}</div>
              <div className="mt-3 font-semibold">{s.label}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
