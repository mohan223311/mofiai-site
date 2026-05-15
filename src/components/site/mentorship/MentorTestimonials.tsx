import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Quote } from "lucide-react";

const items = [
  {
    title: "Sai Krishna",
    flag: "🇺🇸",
    location: "United States",
    quote: "1:1 consultation with MOFI AI completely changed how I approach automation projects.",
    outcome: "1:1 Consultation Success",
    shortId: "91dw5lTXZlQ",
  },
  {
    title: "Vivek",
    flag: "🇳🇿",
    location: "New Zealand",
    quote: "Personalized mentorship and real, practical guidance — exactly what I needed.",
    outcome: "1:1 Consultation Success",
    shortId: "iuy-gOCZJ_4",
  },
  {
    title: "Vineel",
    flag: "🇺🇸",
    location: "United States",
    quote: "Hands-on, customized to my goals — best automation mentorship I've taken.",
    outcome: "1:1 Consultation Success",
    shortId: "S3SzCAlE5SM",
  },
];

export function MentorTestimonials() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Success Stories</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl"
        >
          1:1 Mentorship<br />Success Stories
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-card border border-border p-6 overflow-hidden"
            >
              <div className="aspect-[9/16] rounded-xl overflow-hidden mb-5 border border-border bg-dark">
                <iframe
                  src={`https://www.youtube.com/embed/${it.shortId}`}
                  title={it.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <Quote className="h-6 w-6 text-lime/50" />
              <p className="mt-3 text-sm leading-relaxed">"{it.quote}"</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{it.title}</div>
                  <div className="text-xs text-muted-foreground">{it.flag} {it.location}</div>
                </div>
              </div>
              <div className="mt-3 inline-flex text-xs text-lime">→ {it.outcome}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
