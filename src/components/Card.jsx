import React from "react";

const Card = ({
  children,
  variant = "default",
  hover = false,
  className = "",
  icon = null,
  iconColor = "text-primary",
  iconBg = "bg-primary/10",
  title = null,
  description = null,
}) => {
  const baseStyles = "rounded-2xl transition-all duration-300";

  const variants = {
    default:
      "bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5",
    service:
      "p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5",
    feature:
      "p-6 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5",
    pricing:
      "p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800",
    highlighted:
      "p-8 bg-white dark:bg-slate-900 border-2 border-primary shadow-lg shadow-primary/10 relative scale-105",
  };

  const hoverClass = hover ? "card-hover cursor-pointer" : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverClass} ${className}`}
    >
      {icon && (
        <div
          className={`w-12 h-12 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
        >
          <span className="material-icons text-3xl">{icon}</span>
        </div>
      )}

      {title && (
        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
          {title}
        </h3>
      )}

      {description && <p className="text-slate-500 mb-6">{description}</p>}

      {children}
    </div>
  );
};

export default Card;
