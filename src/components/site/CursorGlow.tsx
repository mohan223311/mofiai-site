import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // skip on touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden />;
}

/** Drifting floating dots for ambient motion on any section. */
export function FloatingParticles({ count = 14, color = "lime" }: { count?: number; color?: "lime" | "red" | "white" }) {
  const colorClass =
    color === "red" ? "bg-[#ff3b5c]/40" : color === "white" ? "bg-white/30" : "bg-lime/40";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const size = 4 + (i % 5) * 3;
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 10 + (i % 7) * 2;
        const delay = (i % 9) * 0.7;
        return (
          <span
            key={i}
            className={`absolute rounded-full ${colorClass} blur-[1px] float-drift`}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
