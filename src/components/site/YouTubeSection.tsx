import { motion } from "framer-motion";
import { Play, PlayCircle as Youtube } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const videos = [
  { id: "vd7NJad_lJg", title: "AI Automation Walkthrough" },
  { id: "X_stzn8XQGo", title: "Build Your First Workflow" },
  { id: "ycMIAJCN7Rg", title: "N8N Tips & Tricks" },
];

export function YouTubeSection() {
  return (
    <section id="youtube" className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel light>Learn for Free</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display max-w-3xl"
        >
          Watch Our Content<br />on YouTube
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-xl">
          Get a taste of our teaching style before enrolling.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.a
              key={v.id}
              href={`https://youtu.be/${v.id}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group block rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] backdrop-blur"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="h-16 w-16 rounded-full bg-lime text-lime-foreground flex items-center justify-center shadow-2xl">
                    <Play className="h-7 w-7 ml-1" fill="currentColor" />
                  </div>
                </motion.div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold">{v.title}</h4>
                <p className="text-xs text-white/60 mt-1">youtu.be/{v.id}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.a
            href="https://www.youtube.com/@mofiAI123-f"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-md bg-lime text-lime-foreground px-6 py-3 text-sm font-medium"
          >
            <Youtube className="h-5 w-5" /> Subscribe to MOFI AI on YouTube
          </motion.a>
        </div>
      </div>
    </section>
  );
}
