"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { servicesData } from "@/data/services";
import { HelpCircle, Search, HelpCircle as HelpIcon } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbs = [{ label: "FAQ" }];

  const generalFAQs = [
    {
      question: "What are the working hours of Om Enterprise?",
      answer: "Our office hours are Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays and public government holidays. However, you can submit inquiries or upload documents on WhatsApp at any time, and we will address them first thing on the next business day."
    },
    {
      question: "Are your services limited to Rajkot and Gujarat?",
      answer: "No. While our primary consulting hub is in Rajkot, Gujarat, we assist business entities and individuals across all Indian states and Union Territories. Since most registration portals (GST, Udyam, Income Tax) are fully digital, we operate smoothly through remote document sharing."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major digital payment methods including UPI (Google Pay, PhonePe, Paytm), Net Banking transfers, and IMPS/NEFT. Standard consultation fees are quoted upfront, and details are shared prior to commencing any draft application."
    },
    {
      question: "How do you ensure my identity documents remain secure?",
      answer: "We hold client privacy in the highest regard. All government identity papers (Aadhaar, PAN, Electricity bills) uploaded on WhatsApp or shared via email are stored securely. We use placeholders like '[Aadhaar Redacted]' in templates and delete sensitive files upon completion of RTO/GST certificates as requested."
    },
    {
      question: "What happens if my registration application gets rejected by a government officer?",
      answer: "We maintain a 98.6% first-attempt approval rate. In the rare case that a tax or passport officer raises a query (clarification request), our package covers drafting and filing responses at no extra charge. If the application is rejected due to minor database errors, we guide you on corrections and refile."
    }
  ];

  // Consolidate all FAQs from services
  const allServiceFAQs = servicesData.flatMap((service) =>
    service.faqs.map((faq) => ({
      ...faq,
      category: service.title,
    }))
  );

  const mergedFAQs = [
    ...generalFAQs.map((faq) => ({ ...faq, category: "General" })),
    ...allServiceFAQs,
  ];

  const filteredFAQs = mergedFAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 pb-24 overflow-hidden">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <ScrollReveal direction="up" className="mb-12 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 text-secondary font-bold text-xs uppercase tracking-wider">
          <HelpIcon className="w-4 h-4" />
          <span>Centralized Help Desk</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface dark:text-surface-bright">
          Frequently Asked Questions
        </h1>
        <p className="text-on-surface-variant dark:text-slate-400 text-base md:text-lg leading-relaxed">
          Search our comprehensive database covering general business registration guidelines, GST compliance, MSME schemes, and personal documentation rules.
        </p>
      </ScrollReveal>

      {/* Search Input */}
      <ScrollReveal direction="up" delay={0.15} className="relative max-w-xl mb-12">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant dark:text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search FAQs by services, keywords, or topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white dark:bg-slate-950 border border-outline-variant/60 dark:border-slate-800 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-on-surface dark:text-surface-bright shadow-sm"
        />
      </ScrollReveal>

      {/* FAQ Accordion Grid */}
      {filteredFAQs.length > 0 ? (
        <div className="space-y-12">
          {/* Grouped by Category */}
          {Array.from(new Set(filteredFAQs.map((faq) => faq.category))).map((category, index) => {
            const categoryFAQs = filteredFAQs.filter((faq) => faq.category === category);
            return (
              <ScrollReveal
                key={`${category}-${searchQuery}`}
                direction="up"
                delay={Math.min(index * 0.05, 0.2)}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright border-l-4 border-secondary pl-3 uppercase tracking-wide text-xs">
                  {category} FAQ
                </h3>
                <FAQAccordion faqs={categoryFAQs} />
              </ScrollReveal>
            );
          })}
        </div>
      ) : (
        <ScrollReveal direction="fade" className="text-center py-20 bg-surface-container-low/20 rounded-2xl border border-outline-variant/20">
          <HelpCircle className="w-12 h-12 text-outline mx-auto mb-4" />
          <h3 className="text-lg font-bold text-on-surface">No matching questions found</h3>
          <p className="text-on-surface-variant text-sm mt-1">Try entering another query, or search for "GST", "Udyam", "PAN" etc.</p>
        </ScrollReveal>
      )}
    </div>
  );
}
