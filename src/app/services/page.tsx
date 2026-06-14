"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { servicesData } from "@/data/services";
import { ShieldAlert, BookOpen, Layers } from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Taxation & Business", "MSME Services", "Personal Documentation", "Legal & Agreements"];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === "All") return true;
    return service.category === activeCategory;
  });

  const breadcrumbs = [{ label: "Services" }];

  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 overflow-hidden">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <ScrollReveal direction="up" className="mb-12 space-y-4">
        <div className="inline-flex items-center gap-1 text-secondary font-bold text-xs uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Om Enterprise Portfolio</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface dark:text-surface-bright">
          Business Compliance & Documentation Services
        </h1>
        <p className="text-on-surface-variant dark:text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
          Explore our complete catalog of 10 professional services designed to keep your business legally compliant, financially accurate, and properly registered. We handle the portals so you don't have to.
        </p>
      </ScrollReveal>

      {/* Category Tabs */}
      <ScrollReveal direction="up" delay={0.15} className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-outline-variant/20 dark:border-slate-800/80">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all whitespace-nowrap border shrink-0 ${
                isActive
                  ? "bg-primary border-primary text-on-primary dark:bg-slate-100 dark:border-slate-100 dark:text-slate-900 shadow-sm"
                  : "bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:text-primary dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400 dark:hover:text-surface-bright"
              }`}
            >
              {category}
            </button>
          );
        })}
      </ScrollReveal>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ScrollReveal
              key={`${service.slug}-${activeCategory}`}
              direction="up"
              delay={(index % 3) * 0.08}
              duration={0.6}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <ScrollReveal direction="fade" className="text-center py-20 bg-surface-container-low/30 rounded-2xl border border-outline-variant/20">
          <ShieldAlert className="w-12 h-12 text-outline mx-auto mb-4" />
          <h3 className="text-lg font-bold text-on-surface">No services found</h3>
          <p className="text-on-surface-variant text-sm mt-1">Please select a different category.</p>
        </ScrollReveal>
      )}

      {/* Sticky Bottom Note */}
      <ScrollReveal direction="up" className="mt-16 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 dark:bg-slate-900/20 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4 items-start md:items-center">
          <Layers className="w-10 h-10 text-secondary shrink-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-on-surface dark:text-surface-bright text-base">
              Need a customized package or ongoing support?
            </h4>
            <p className="text-on-surface-variant dark:text-slate-400 text-sm">
              We offer monthly retainers for shops and business houses in Rajkot covering accounting, return filing, and document renewals.
            </p>
          </div>
        </div>
        <Link href="/contact">
          <button className="px-6 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-primary transition-colors text-sm shrink-0 whitespace-nowrap active:scale-95 shadow-sm cursor-pointer">
            Inquire About Package
          </button>
        </Link>
      </ScrollReveal>
    </div>
  );
}
