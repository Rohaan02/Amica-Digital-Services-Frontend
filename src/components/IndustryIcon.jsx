import React from "react";

const IndustryIcon = ({ icon, label, className = "" }) => {
  return (
    <div
      className={`flex items-center space-x-3 group cursor-default ${className}`}
    >
      <span className="material-icons text-primary group-hover:scale-125 transition-transform">
        {icon}
      </span>
      <span className="font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </span>
    </div>
  );
};

export default IndustryIcon;
