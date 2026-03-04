import React from "react";

const SectionHeader = ({
  badge = null,
  title,
  description = null,
  align = "center",
  className = "",
  titleClass = "",
  descriptionClass = "",
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const containerClass = align === "center" ? "max-w-3xl mx-auto" : "max-w-xl";

  return (
    <div className={`${containerClass} ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          {badge}
        </span>
      )}

      <h2
        className={`text-4xl font-extrabold mb-6 text-slate-900 dark:text-white ${titleClass}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-lg text-slate-600 dark:text-slate-400 ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
