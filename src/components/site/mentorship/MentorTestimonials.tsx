import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Play, Quote } from "lucide-react";

const items = [
  {
    title: "1:1 Consultation Client",
    flag: "🇳🇿",
    location: "New Zealand",
    quote: "Personalized mentorship completely transformed how I approach automation. Within 3 weeks, I was confident enough to take on my first client project.",
    outcome: "Now freelancing as automation consultant",
    href: "https://youtube.com/shorts/iuy-gOCZJ_4?si=Q7WuEGtuZTlCskGf",
  },
  {
    title: "Singapore Client — Voice Agent",
    flag: "🇸🇬",
    location: "Singapore",
    quote: "Professional guidance helped us deploy production-ready voice agents. The personalized approach made all the difference.",
    outcome: "Voice Agent for Retail",
    href: "https://youtu.be/JHt5pk2D9g8?si=nzUGfskLLuQau--v",
  },
  {
    title: "Website Automation Client",
    flag: "🌐",
    location: "Custom Project",
    quote: "Custom solutions built exactly for our business needs. Not generic templates — actual tailored automation.",
    outcome: "Complete Website Automation",
    href: "https://drive.google.com/file/d/1WwyoNmfT7B7vQyT022fOQR9vL6LeFZQn/view?usp=drivesdk",
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
            <motion.a
              key={it.title}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-card border border-border p-6 overflow-hidden block"
            >
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
                className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-lime/15 blur-xl"
              />
              <Quote className="h-6 w-6 text-lime/50" />
              <p className="mt-4 text-sm leading-relaxed">"{it.quote}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{it.title}</div>
                  <div className="text-xs text-muted-foreground">{it.flag} {it.location}</div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-11 w-11 rounded-full bg-lime text-lime-foreground flex items-center justify-center shadow-lg"
                >
                  <Play className="h-4 w-4 fill-current ml-0.5" />
                </motion.div>
              </div>
              <div className="mt-3 inline-flex text-xs text-lime">→ {it.outcome}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
