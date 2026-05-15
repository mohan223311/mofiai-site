import { motion } from "framer-motion";

export function AnimatedBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-60" />
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.16 125 / 0.35), transparent 70%)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.18 220 / 0.28), transparent 70%)" }}
        animate={{ x: [0, -60, 30, 0], y: [0, -40, 50, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.15 320 / 0.25), transparent 70%)" }}
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -40, 0], scale: [1, 1.2, 1, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
