"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? "bg-surface-container-high border-outline-variant/60 dark:bg-slate-800 dark:border-slate-700"
                : "bg-surface-container-low border-outline-variant/20 dark:bg-slate-900/30 dark:border-slate-800/80 hover:border-outline-variant/50"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-6 py-5 font-semibold text-left text-on-surface dark:text-surface-bright text-base md:text-lg focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-on-surface-variant dark:text-slate-400 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-secondary" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-on-surface-variant dark:text-slate-300 text-sm md:text-base leading-relaxed border-t border-outline-variant/10 dark:border-slate-700/50 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
