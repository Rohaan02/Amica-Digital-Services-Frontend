import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import blogs from "../data/blogData.json";

const categoryColors = {
  "Healthcare AI": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Digital Marketing": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Tools": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Case Study": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const getCategoryClass = (category) =>
  categoryColors[category] || "bg-primary/10 text-primary border-primary/20";

const BlogCard = ({ blog, featured = false }) => {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className={`group block rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-background-dark overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Cover Image Placeholder */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-primary/20 via-slate-800 to-navy-deep ${
          featured ? "h-64" : "h-44"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="material-icons text-8xl text-primary">article</span>
        </div>
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(19,127,236,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(19,127,236,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryClass(
              blog.category,
            )}`}
          >
            {blog.category}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <span className="material-icons text-xs">schedule</span>
            {blog.readTime}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <span className="material-icons text-xs">calendar_today</span>
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h2
          className={`font-extrabold text-white group-hover:text-primary transition-colors leading-snug mb-3 ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-5">
          {blog.excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-2 text-primary text-sm font-bold">
          Read Article
          <span className="material-icons text-base group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
};

const BlogList = () => {
  const [featured, ...rest] = blogs;

  return (
    <div className="min-h-screen bg-background-dark">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full mb-6">
            <span className="material-icons text-sm">rss_feed</span>
            Amica Insights
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Blog & <span className="text-primary">Resources</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Expert insights on AI automation, digital marketing, and healthcare
            technology to help your business grow smarter.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        {blogs.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            <span className="material-icons text-6xl mb-4 block">article</span>
            No blogs yet. Add entries to blogData.json to get started.
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="mb-8">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-icons text-sm">star</span>
                  Featured
                </p>
                <BlogCard blog={featured} featured />
              </div>
            )}

            {/* Remaining posts */}
            {rest.length > 0 && (
              <>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 mt-10">
                  Latest Articles
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default BlogList;
