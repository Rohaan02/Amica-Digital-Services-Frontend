import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import blogs from "../data/blogData.json";

/* ─── Section Renderers ─── */

const Paragraph = ({ content }) => (
  <p
    className="text-slate-300 leading-relaxed text-base mb-5"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Heading = ({ content }) => (
  <h2 className="text-2xl font-extrabold text-white mt-10 mb-4 border-l-4 border-primary pl-4">
    {content}
  </h2>
);

const Subheading = ({ content }) => (
  <h3 className="text-lg font-bold text-primary mt-7 mb-3">{content}</h3>
);

const BulletList = ({ items }) => (
  <ul className="mb-6 space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-slate-300 text-base">
        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const KeyPoints = ({ items }) => (
  <div className="grid sm:grid-cols-2 gap-4 my-6">
    {items.map((item, i) => (
      <div
        key={i}
        className="rounded-xl border border-slate-700 bg-slate-800/40 p-5 hover:border-primary/40 transition-colors"
      >
        <p className="font-bold text-white mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 inline-block" />
          {item.title}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed">{item.content}</p>
      </div>
    ))}
  </div>
);

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto my-8 rounded-xl border border-slate-700">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-primary/10 border-b border-slate-700">
          {headers.map((h, i) => (
            <th
              key={i}
              className="text-left px-5 py-3 font-bold text-primary whitespace-nowrap"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr
            key={ri}
            className={`border-b border-slate-800 last:border-0 ${
              ri % 2 === 0 ? "bg-slate-900/50" : "bg-slate-800/20"
            }`}
          >
            {row.map((cell, ci) => (
              <td
                key={ci}
                className={`px-5 py-3 text-slate-300 ${
                  ci === 0 ? "font-semibold text-white" : ""
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderSection = (section, idx) => {
  switch (section.type) {
    case "paragraph":
      return <Paragraph key={idx} content={section.content} />;
    case "heading":
      return <Heading key={idx} content={section.content} />;
    case "subheading":
      return <Subheading key={idx} content={section.content} />;
    case "list":
      return <BulletList key={idx} items={section.items} />;
    case "keypoints":
      return <KeyPoints key={idx} items={section.items} />;
    case "table":
      return <Table key={idx} headers={section.headers} rows={section.rows} />;
    default:
      return null;
  }
};

/* ─── Main Component ─── */

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.slug === slug);
  const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background-dark flex flex-col">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <span className="material-icons text-7xl text-slate-700 mb-4">
            article
          </span>
          <h1 className="text-3xl font-extrabold text-white mb-3">
            Blog Not Found
          </h1>
          <p className="text-slate-400 mb-8">
            This article doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <span className="material-icons">arrow_back</span>
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark">
      <Navigation />

      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/70 to-background-dark/30" />
      </div>

      {/* Article */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 -mt-24 relative z-10 pb-24">
        {/* Meta card */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-10 mb-10 shadow-2xl">
          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              {blog.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <span className="material-icons text-xs">schedule</span>
              {blog.readTime}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <span className="material-icons text-xs">calendar_today</span>
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <span className="material-icons text-xs">person</span>
              {blog.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p
            className="text-slate-400 text-base leading-relaxed border-l-2 border-primary/40 pl-4 italic"
            dangerouslySetInnerHTML={{ __html: blog.excerpt }}
          />
        </div>

        {/* Body */}
        <div className="prose-custom">
          {blog.sections.map((section, idx) => renderSection(section, idx))}
        </div>

        {/* Back + CTA */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-primary text-slate-300 hover:text-primary font-bold px-6 py-3 rounded-lg transition-all"
          >
            <span className="material-icons">arrow_back</span>
            Back to Blog
          </button>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-icons">bolt</span>
            Work with Amica Digital
          </Link>
        </div>

        {/* Related posts */}
        {otherBlogs.length > 0 && (
          <div className="mt-20">
            <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
              <span className="material-icons text-primary">auto_stories</span>
              More Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {otherBlogs.map((b) => (
                <Link
                  key={b.id}
                  to={`/blog/${b.slug}`}
                  className="group flex flex-col gap-2 p-5 rounded-xl border border-slate-700 hover:border-primary/40 bg-slate-900/60 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-xs font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full w-fit">
                    {b.category}
                  </span>
                  <p className="font-bold text-white group-hover:text-primary transition-colors text-sm leading-snug">
                    {b.title}
                  </p>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-xs">schedule</span>
                    {b.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
