import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, BookOpen, ArrowRight } from "lucide-react";
import { getBlogPostBySlug, formatDate } from "@/lib/contentful";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const SITE = "https://mofiai.com";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getBlogPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const articleSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${SITE}/blog/${post.slug}#article`,
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.publishedAt,
          "dateModified": post.updatedAt,
          "author": { "@type": "Organization", "name": "MOFI AI", "@id": `${SITE}/#organization` },
          "publisher": { "@id": `${SITE}/#organization` },
          "url": `${SITE}/blog/${post.slug}`,
          "inLanguage": "te",
          ...(post.featuredImageUrl
            ? { "image": { "@type": "ImageObject", "url": post.featuredImageUrl } }
            : {}),
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog` },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE}/blog/${post.slug}` },
          ],
        },
      ],
    };
    return {
      meta: [
        { title: `${post.title} | MOFI AI Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} | MOFI AI Blog` },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `${SITE}/blog/${post.slug}` },
        { property: "og:type", content: "article" },
        ...(post.featuredImageUrl
          ? [{ property: "og:image", content: post.featuredImageUrl }]
          : []),
        { name: "twitter:title", content: `${post.title} | MOFI AI Blog` },
        { name: "twitter:description", content: post.excerpt },
        ...(post.featuredImageUrl
          ? [{ name: "twitter:image", content: post.featuredImageUrl }]
          : []),
      ],
      links: [{ rel: "canonical", href: `${SITE}/blog/${post.slug}` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(articleSchema) }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-dark text-dark-foreground">
      <Header />

      {/* Full-width featured image hero */}
      {post.featuredImageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full h-[220px] sm:h-[340px] md:h-[440px] overflow-hidden mt-[72px]"
        >
          <img
            src={post.featuredImageUrl}
            alt={post.featuredImageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark pointer-events-none" />
        </motion.div>
      )}

      <article className={`mx-auto max-w-2xl px-4 sm:px-6 pb-20 sm:pb-28 ${post.featuredImageUrl ? "pt-8 sm:pt-12" : "pt-28 sm:pt-32"}`}>

        {/* Breadcrumb + back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-lime transition-colors py-1"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* No image fallback */}
        {!post.featuredImageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-gradient-to-br from-lime/10 to-white/5 border border-white/10 h-36 sm:h-48 flex items-center justify-center mb-8"
          >
            <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-lime/30" />
          </motion.div>
        )}

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-white/45 mb-4 sm:mb-5"
        >
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {post.readTime} min read
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 sm:mb-10 text-white"
        >
          {post.title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="origin-left h-px bg-gradient-to-r from-lime/50 to-transparent mb-8 sm:mb-10"
        />

        {/* Article body */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 sm:mt-16 rounded-2xl bg-gradient-to-br from-lime/15 to-lime/5 border border-lime/25 p-6 sm:p-8 text-center"
        >
          <div className="h-12 w-12 rounded-xl bg-lime/20 border border-lime/30 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-6 w-6 text-lime" />
          </div>
          <h3 className="font-display text-xl sm:text-2xl mb-3 text-white">Learn AI Automation in Telugu</h3>
          <p className="text-white/60 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
            Want to build these automations yourself? Join the MOFI AI N8N course taught by practitioners in Telugu.
          </p>
          <a
            href="https://www.superprofile.bio/course/mofiai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-lime text-lime-foreground px-6 sm:px-8 py-3 sm:py-3.5 font-semibold shadow-lg shadow-lime/25 text-sm sm:text-[15px] hover:opacity-90 transition-opacity"
          >
            Enroll Now — ₹5,000 <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Back to blog */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-lime transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
