import React from "react";
import { Link } from "react-router-dom";

const categoryColors = {
  "Healthcare AI": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Digital Marketing": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Tools": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Case Study": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const getCategoryClass = (category) =>
  categoryColors[category] || "bg-primary/10 text-primary border-primary/20";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="group block rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-background-dark overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-slate-800 to-slate-900 flex items-center justify-center">
            <span className="material-icons text-6xl text-primary opacity-10">
              article
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
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
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors leading-snug">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {blog.excerpt}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
          Read More
          <span className="material-icons text-base group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
