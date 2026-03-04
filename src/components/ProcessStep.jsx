import React from "react";

const ProcessStep = ({
  number,
  title,
  description,
  isActive = false,
  className = "",
}) => {
  return (
    <div className={`relative text-center lg:text-left ${className}`}>
      <div
        className={`w-16 h-16 rounded-full ${
          isActive
            ? "bg-primary text-white shadow-lg shadow-primary/40"
            : "bg-slate-800 text-slate-400"
        } flex items-center justify-center font-bold text-2xl mx-auto lg:mx-0 mb-8 relative z-10 ring-4 ring-slate-950`}
      >
        {number}
      </div>
      <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ProcessStep;
