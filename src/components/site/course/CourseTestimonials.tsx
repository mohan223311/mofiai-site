import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

const items = [
  { client: "Sai Krishna", project: "1:1 Consultation", location: "🇺🇸 United States", quote: "Hands-on automation guidance that translated directly into client work.", shortId: "91dw5lTXZlQ" },
  { client: "Vivek", project: "1:1 Consultation", location: "🇳🇿 New Zealand", quote: "Personalized training transformed my automation capabilities.", shortId: "iuy-gOCZJ_4" },
  { client: "Vineel", project: "1:1 Consultation", location: "🇺🇸 United States", quote: "Best mentorship I've had — practical, customized, and result-driven.", shortId: "S3SzCAlE5SM" },
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
            <motion.div
              key={t.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="block rounded-2xl bg-card border border-border p-6"
            >
              <div className="aspect-[9/16] rounded-xl overflow-hidden mb-5 bg-dark border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${t.shortId}`}
                  title={t.client}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <Quote className="h-6 w-6 text-muted-foreground" />
              <p className="mt-3 font-display text-xl leading-snug">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-dashed border-border text-xs">
                <div className="font-medium">{t.client}</div>
                <div className="text-muted-foreground">{t.project} · {t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
