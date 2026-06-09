import { motion } from "framer-motion";

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold ${light ? "text-white/50" : "text-muted-foreground"}`}
    >
      <span className="h-px w-8 bg-lime" />
      {children}
    </motion.div>
  );
}
