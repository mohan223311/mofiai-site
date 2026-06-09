import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { getBlogPosts, formatDate, type BlogPost } from "@/lib/contentful";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const SITE = "https://mofiai.com";

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE}/blog#webpage`,
      "url": `${SITE}/blog`,
      "name": "MOFI AI Blog — AI Automation & N8N Tutorials in Telugu",
      "description": "Free AI automation guides, N8N tutorials, and business automation articles in Telugu for learners and businesses in Hyderabad.",
      "publisher": { "@id": `${SITE}/#organization` },
      "inLanguage": "te",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog` },
      ],
    },
  ],
};

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const { posts, total } = await getBlogPosts(20, 0);
    return { posts, total };
  },
  head: () => ({
    meta: [
      { title: "MOFI AI Blog — AI Automation & N8N Tutorials Telugu | Hyderabad" },
      { name: "description", content: "Free AI automation guides, N8N workflow tutorials, and Telugu business automation articles for learners and businesses in Hyderabad, Telangana and beyond." },
      { name: "keywords", content: "n8n blog Telugu, AI automation tutorials Hyderabad, WhatsApp automation guide Telugu, AI tools blog Telugu, automation learning resources Hyderabad, MOFI AI articles" },
      { property: "og:title", content: "MOFI AI Blog — AI Automation & N8N Tutorials Telugu" },
      { property: "og:description", content: "Free N8N, AI agents and automation guides in Telugu for Hyderabad businesses and learners." },
      { property: "og:url", content: `${SITE}/blog` },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "MOFI AI Blog — AI Automation Tutorials in Telugu" },
      { name: "twitter:description", content: "Free N8N and AI automation guides for Hyderabad learners." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blog` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(blogSchema) }],
  }),
  component: BlogIndex,
});

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
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
          <div className="aspect-[16/9] bg-gradient-to-br from-lime/10 via-white/[0.03] to-white/5 flex items-center justify-center shrink-0">
            <BookOpen className="h-10 w-10 text-lime/40" />
          </div>
        )}

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">
          <h2 className="font-display text-base sm:text-lg leading-snug text-white group-hover:text-lime transition-colors line-clamp-2">
            {post.title}
          </h2>

          <p className="text-sm sm:text-[0.9375rem] text-white/60 leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/40 mt-auto pt-3 border-t border-white/[0.07]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0" />
              {post.readTime} min read
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-lime text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
            Read article <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function BlogIndex() {
  const { posts, total } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-dark text-dark-foreground">
      <Header />

      {/* Page hero */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[600px] sm:h-[500px] sm:w-[700px] rounded-full blur-[100px] sm:blur-[120px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.88 0.16 125), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center px-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-[11px] sm:text-xs tracking-[0.15em] text-lime uppercase mb-5"
          >
            MOFI AI Blog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-5"
          >
            AI Automation <span className="text-lime">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38 }}
            className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
          >
            Free guides, tutorials and deep-dives on N8N, AI agents and automation — for Telugu learners and businesses in Hyderabad.
          </motion.p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 sm:pb-28">
        {total === 0 || posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 sm:py-28 text-center px-4"
          >
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center mb-5 sm:mb-6">
              <BookOpen className="h-7 w-7 sm:h-9 sm:w-9 text-lime/60" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl text-white mb-3">Articles coming soon</h2>
            <p className="text-white/50 text-sm sm:text-base max-w-xs sm:max-w-sm leading-relaxed">
              We're preparing in-depth AI automation guides in Telugu. Subscribe on YouTube to stay notified.
            </p>
            <a
              href="https://www.youtube.com/@mofiai123-f"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-lime/40 px-5 sm:px-6 py-3 text-lime hover:bg-lime/10 transition-colors text-sm font-medium"
            >
              Visit our YouTube channel
            </a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
