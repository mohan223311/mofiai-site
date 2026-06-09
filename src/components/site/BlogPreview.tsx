import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getBlogPosts, formatDate, type BlogPost } from "@/lib/contentful";
import { SectionLabel } from "./SectionLabel";

export function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getBlogPosts(3, 0)
      .then(({ posts }) => { setPosts(posts); setLoaded(true); })
      .catch(() => setLoaded(true));
  }, []);

  if (loaded && posts.length === 0) return null;

  return (
    <section className="bg-dark text-dark-foreground py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <SectionLabel>From the Blog</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl sm:text-3xl md:text-4xl mt-3"
            >
              AI Automation <span className="text-lime">Insights</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="shrink-0"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-lime text-sm font-medium hover:gap-2.5 transition-all duration-200"
            >
              View all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Skeleton while loading */}
        {!loaded ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl bg-white/[0.04] h-60 sm:h-72 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.48, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex flex-col h-full bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden hover:border-lime/40 hover:bg-white/[0.08] transition-all duration-300 focus-ring"
                >
                  {/* Thumbnail */}
                  {post.featuredImageUrl ? (
                    <div className="aspect-[16/9] overflow-hidden shrink-0">
                      <img
                        src={post.featuredImageUrl}
                        alt={post.featuredImageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-gradient-to-br from-lime/10 via-white/[0.02] to-white/5 flex items-center justify-center shrink-0">
                      <BookOpen className="h-9 w-9 text-lime/35" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2.5">
                    <h3 className="font-display text-[0.9375rem] sm:text-base leading-snug text-white group-hover:text-lime transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/38 pt-2.5 border-t border-white/[0.07] mt-auto">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 shrink-0" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 shrink-0" />
                        {post.readTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
