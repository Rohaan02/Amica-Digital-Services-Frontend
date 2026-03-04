import React from "react";

const FeaturePoint = ({
  icon,
  iconColor = "text-primary",
  iconBg = "bg-primary/10",
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 transition-all hover:bg-primary/5 ${className}`}
    >
      <div
        className={`w-12 h-12 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center mb-6`}
      >
        <span className="material-icons">{icon}</span>
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
};

export default FeaturePoint;
