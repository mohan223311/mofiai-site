import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

const items = [
  {
    quote: "Professional voice agent delivered for our retail business exceeded all expectations. Production-ready solution.",
    client: "Singapore Retail Business Owner",
    project: "Voice Agent for Customer Service",
    location: "🇸🇬 Singapore",
    href: "https://youtu.be/JHt5pk2D9g8",
  },
  {
    quote: "Complete website automation solution transformed our operations. We've reduced manual work by 80%.",
    client: "E-commerce Business",
    project: "Full Website Automation",
    location: "🌐 Online",
    href: "https://drive.google.com/file/d/1WwyoNmfT7B7vQyT022fOQR9vL6LeFZQn/view",
  },
  {
    quote: "Personalized training transformed my automation capabilities. From zero to building production AI agents in weeks.",
    client: "New Zealand Professional",
    project: "1:1 Mentorship",
    location: "🇳🇿 New Zealand",
    href: "https://youtube.com/shorts/iuy-gOCZJ_4",
  },
];

export function CourseTestimonials() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Student & Client Wins</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl max-w-3xl"
        >
          Real Results From<br />Real Students & Clients
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.a
              key={t.client}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group block rounded-2xl bg-card border border-border p-6"
            >
              <div className="aspect-video rounded-xl bg-dark text-dark-foreground relative overflow-hidden flex items-center justify-center mb-5">
                <div className="absolute inset-0 dotted-bg opacity-40" />
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10 h-14 w-14 rounded-full bg-lime text-lime-foreground flex items-center justify-center shadow-2xl"
                >
                  <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                </motion.div>
              </div>
              <Quote className="h-6 w-6 text-muted-foreground" />
              <p className="mt-3 font-display text-xl leading-snug">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-dashed border-border text-xs">
                <div className="font-medium">{t.client}</div>
                <div className="text-muted-foreground">{t.project} · {t.location}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
