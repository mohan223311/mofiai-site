import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function Testimonial({ imgSrc }: { imgSrc: string }) {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>Testimonial</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-6xl font-display"
          >
            What Teams Say<br />About MOFI AI
          </motion.h2>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-6 rounded-md bg-lime text-lime-foreground px-5 py-2.5 text-sm font-medium">
            Get Started
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <Quote className="h-8 w-8 text-muted-foreground" />
            <p className="mt-4 text-2xl md:text-3xl font-display leading-snug max-w-lg">
              "AI-Powered Workflows Changed How We Operate. We Reduced Manual Errors, Improved Consistency, And Scaled Without Adding More People"
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— Product Operations Manager, Fintech</p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-dashed border-border pt-6 max-w-md">
            {[{ v: "+120%", l: "Workflow Execution Speed" }, { v: "+90%", l: "Reduction in Manual Tasks" }].map((s) => (
              <div key={s.v} className="relative">
                <span className="absolute -top-9 left-0 h-3 w-3 bg-lime" />
                <div className="text-3xl font-display">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-2xl overflow-hidden"
        >
          <img src={imgSrc} alt="Happy customer" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
