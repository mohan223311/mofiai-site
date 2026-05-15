import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionLabel } from "../SectionLabel";

const faqs = [
  { q: "Is this course suitable for complete beginners?", a: "Absolutely! No technical knowledge or coding background is required. Our instructors come from non-technical backgrounds, so we know how to teach automation to beginners. We start from the basics and build up gradually." },
  { q: "What language is the course taught in?", a: "The entire course is delivered in Telugu only. All videos, explanations, and support are in Telugu." },
  { q: "What do I need to start the course?", a: "A laptop or computer with basic specs, stable internet, basic English to read tool interfaces, and the willingness to learn something new." },
  { q: "How long do I have access to the course?", a: "1 year of full access from the date of purchase, including all future updates added during that period. Learn at your own pace." },
  { q: "Are there any additional costs beyond ₹5,000?", a: "Most tools used offer free trials sufficient for completion. OpenAI requires a paid subscription for advanced features, but overall extra investment is minimal. We'll guide you on minimizing costs." },
  { q: "What support is included in the course?", a: "Private WhatsApp community for direct support, weekly Saturday live doubt clearing sessions (30min–1hr), and 24-hour response support from our team." },
  { q: "Do I get a certificate after completion?", a: "The course focuses on practical skills and real portfolio projects you can showcase. Project demonstrations are more valuable than certificates. For specific certification questions, contact our team." },
  { q: "Can I get a refund if I'm not satisfied?", a: "We have a strict no-refund policy. Please review the full detailed syllabus, watch our free YouTube content, and contact us with questions before enrolling." },
  { q: "Who are the course instructors?", a: "Shaik Fhiroj and Mohan from MOFI AI. Both have 1 year of professional experience delivering automation projects for clients in India, USA, Singapore, and New Zealand. Both come from non-technical backgrounds." },
  { q: "How do I enroll in the course?", a: "Click the Enroll Now button to go to our secure payment page. After payment, you're added to the WhatsApp community immediately and receive access to all course materials." },
];

export function FAQ() {
  const mid = Math.ceil(faqs.length / 2);
  const cols = [faqs.slice(0, mid), faqs.slice(mid)];

  return (
    <section className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <SectionLabel light>FAQ</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl"
        >
          Frequently Asked<br />Questions
        </motion.h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
          {cols.map((col, ci) => (
            <Accordion key={ci} type="single" collapsible className="space-y-3">
              {col.map((f, i) => {
                const idx = ci * mid + i;
                return (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <AccordionItem value={`q${idx}`} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{f.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-dark-foreground/70 text-sm">{f.a}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
