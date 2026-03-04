import React from "react";

const FormInput = ({
  label,
  type = "text",
  id,
  placeholder = "",
  required = false,
  options = [], // For select inputs
  className = "",
  ...props
}) => {
  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-slate-700 dark:text-slate-300"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {type === "select" ? (
        <div className="relative">
          <select
            id={id}
            className={`${inputClass} appearance-none`}
            {...props}
          >
            <option value="">{placeholder || "Select an option"}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            expand_more
          </span>
        </div>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={`${inputClass} min-h-[120px] resize-y`}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={inputClass}
          {...props}
        />
      )}
    </div>
  );
};

export default FormInput;
