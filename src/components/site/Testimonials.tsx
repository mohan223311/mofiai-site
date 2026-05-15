import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    quote: "Professional voice agent delivered for our retail business exceeded expectations.",
    location: "🇸🇬 Singapore",
    client: "Retail Business Owner",
    tag: "Voice Agent",
    href: "https://youtu.be/JHt5pk2D9g8",
  },
  {
    quote: "Complete website automation solution transformed our operations.",
    location: "🌐 Online",
    client: "E-commerce Business",
    tag: "Website Automation",
    href: "https://drive.google.com/file/d/1WwyoNmfT7B7vQyT022fOQR9vL6LeFZQn/view",
  },
  {
    quote: "Personalized training completely transformed my automation capabilities.",
    location: "🇳🇿 New Zealand",
    client: "Automation Professional",
    tag: "1:1 Consultation",
    href: "https://youtube.com/shorts/iuy-gOCZJ_4",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Trusted Globally</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display max-w-3xl"
        >
          Real Results<br />From Real Clients
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
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
              className="group block rounded-2xl bg-card border border-border p-6 shadow-sm relative overflow-hidden"
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
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-lime bg-dark/80 px-2 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
              <Quote className="h-6 w-6 text-muted-foreground" />
              <p className="mt-3 font-display text-xl leading-snug">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-dashed border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{t.client}</span>
                <span>{t.location}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
