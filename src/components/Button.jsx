import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon = null,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles =
    "font-bold transition-all rounded-xl inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
    secondary:
      "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent hover:bg-primary/10 text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="material-icons text-inherit">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="material-icons text-inherit">{icon}</span>
      )}
    </button>
  );
};

export default Button;
