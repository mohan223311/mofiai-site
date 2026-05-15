import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  const pct = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);

  return (
    <>
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] border-flow shadow-[0_0_12px_2px_oklch(0.88_0.16_125/0.6)]"
      />
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="fixed top-[3px] left-0 right-0 h-[1px] bg-lime/40 z-[100] blur-[2px]"
      />
      <motion.div
        className="fixed top-3 right-3 z-[100] hidden md:flex items-center gap-1.5 rounded-full bg-dark/80 backdrop-blur border border-lime/30 text-lime text-[10px] font-mono px-2.5 py-1 tracking-widest"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
        <motion.span>{pct}</motion.span>
      </motion.div>
    </>
  );
}
