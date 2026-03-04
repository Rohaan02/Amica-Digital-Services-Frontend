import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  icon,
  iconColor = "text-primary",
  title,
  description,
  features = [],
  featureIconColor = "text-primary",
  slug,
}) => {
  return (
    <Link to={`/services/${slug}`} className="block">
      <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 card-hover transition-all duration-300">
        <div
          className={`${iconColor} mb-6 group-hover:scale-110 transition-transform inline-block`}
        >
          <span className="material-icons text-4xl">{icon}</span>
        </div>

        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="text-slate-500 mb-6">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-3 text-sm font-medium">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-slate-400">
                <span
                  className={`material-icons text-xs mr-2 ${featureIconColor}`}
                >
                  circle
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard;
