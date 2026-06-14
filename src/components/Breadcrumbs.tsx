"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav className="flex mb-6 text-sm overflow-x-auto whitespace-nowrap scrollbar-none py-1" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-secondary dark:text-slate-400 dark:hover:text-surface-bright transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t("breadcrumbHome")}</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-outline-variant mx-1 dark:text-slate-600 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-on-surface font-semibold dark:text-slate-200" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-on-surface-variant hover:text-secondary dark:text-slate-400 dark:hover:text-surface-bright transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
