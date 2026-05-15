import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const letters = "MOFI AI".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
        >
          <div className="absolute inset-0 dotted-bg opacity-30" />
          <motion.div
            className="absolute h-[420px] w-[420px] rounded-full bg-lime/20 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <div className="relative flex items-center gap-4">
            <motion.div
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" }, scale: { duration: 0.6 } }}
            >
              <Sparkles className="h-10 w-10 md:h-14 md:w-14 text-lime" />
            </motion.div>
            <div className="flex">
              {letters.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 60, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-6xl md:text-8xl text-lime inline-block"
                  style={{ textShadow: "0 0 40px rgba(190,242,100,0.5)" }}
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="relative mt-6 text-xs tracking-[0.4em] uppercase text-white/60"
          >
            Automate · Innovate · Grow
          </motion.p>
          <div className="absolute bottom-20 h-0.5 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-lime to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
