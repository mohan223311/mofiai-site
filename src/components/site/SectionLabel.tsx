import { motion } from "framer-motion";

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] font-medium ${light ? "text-white/80" : "text-foreground"}`}
    >
      <span className="relative inline-flex h-3 w-3">
        <span className="absolute inset-0 rounded-sm bg-lime" />
        <span className="absolute inset-0 rounded-sm bg-lime" style={{ animation: "ping-slow 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
      </span>
      <span className="relative">
        {children}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-gradient-to-r from-lime via-lime/40 to-transparent"
        />
      </span>
    </motion.div>
  );
}
