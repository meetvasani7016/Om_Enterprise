"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-surface-container-low p-1 border border-outline-variant/30 dark:bg-slate-800 dark:border-slate-700">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-on-primary shadow-sm"
            : "text-on-surface-variant hover:text-primary dark:text-outline dark:hover:text-surface-bright"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("gj")}
        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
          language === "gj"
            ? "bg-primary text-on-primary shadow-sm"
            : "text-on-surface-variant hover:text-primary dark:text-outline dark:hover:text-surface-bright"
        }`}
      >
        ગુજરાતી
      </button>
    </div>
  );
};
