import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";

const features = [
  { i: "🎥", t: "20+ Hours Video Content", d: "Step-by-step tutorials covering all topics in Telugu with practical demos." },
  { i: "📱", t: "Private WhatsApp Community", d: "Direct access to instructors and fellow students for support and networking." },
  { i: "🗓️", t: "Weekly Saturday Doubt Sessions", d: "Live doubt clearing every Saturday (30min–1hr, flexible to needs)." },
  { i: "⚡", t: "24-Hour Response Support", d: "All queries answered within 24 hours, instant on WhatsApp during work hours." },
  { i: "🔄", t: "Free Course Updates", d: "New modules added regularly. Free access during your 1-year enrollment." },
  { i: "🛠️", t: "Practical Tools Training", d: "Hands-on with n8n, OpenAI and more. Most tools have free trials." },
  { i: "📜", t: "Lifetime Recordings Access", d: "All live sessions recorded and accessible throughout your access period." },
  { i: "🌐", t: "No Technical Background Needed", d: "Beginner-friendly approach by instructors from non-technical backgrounds." },
];

export function WhatYouGet() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>What You'll Get</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl"
        >
          Everything You Need<br />to Succeed
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl bg-card border border-border p-5"
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 4 + i * 0.2, repeat: Infinity }}
                className="text-4xl"
              >
                {f.i}
              </motion.div>
              <h3 className="mt-3 font-display text-lg">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
