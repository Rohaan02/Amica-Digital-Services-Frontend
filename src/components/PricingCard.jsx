import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const PricingCard = ({
  title,
  description,
  price,
  setupFee,
  features = [],
  highlighted = false,
  badgeText = null,
  buttonText = "Get Started",
  buttonVariant = "outline",
}) => {
  const cardClass = highlighted
    ? "relative bg-white dark:bg-slate-900 border-2 border-primary p-8 rounded-xl pricing-card-hover flex flex-col shadow-2xl shadow-primary/10 transform scale-105 z-10"
    : "bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-xl pricing-card-hover flex flex-col transition-all";

  return (
    <div className={cardClass}>
      {badgeText && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
          {badgeText}
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {description}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
            {price}
          </span>
          <span className="text-slate-500 dark:text-slate-400">/mo</span>
        </div>
        {setupFee && (
          <p className="text-primary font-semibold text-sm mt-1">
            + {setupFee} setup fee
          </p>
        )}
      </div>

      <div className="flex-grow space-y-4 mb-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="material-icons text-primary text-lg">
              check_circle
            </span>
            <span className="text-slate-700 dark:text-slate-300">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <Link to="/contact-us">
        <Button
          variant={highlighted ? "primary" : buttonVariant}
          className="w-full"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
