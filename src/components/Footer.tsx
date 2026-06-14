"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/services";
import { Phone, Mail, MapPin, Share2, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: "Om Enterprise - Business Compliance Partner",
        text: "Check out Om Enterprise for GST, ITR, MSME and other registration services.",
        url: window.location.origin,
      }).catch(console.error);
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.origin);
      alert("Website link copied to clipboard!");
    }
  };

  return (
    <footer className="bg-surface-container-lowest dark:bg-slate-950 border-t border-outline-variant/30 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {/* About Column */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-3 font-headline-md text-xl md:text-2xl font-bold text-on-surface dark:text-surface-bright">
            <img src="/om-logo.png" alt="Om Enterprise Logo" className="w-8 h-8 object-contain" />
            <span>Om Enterprise</span>
          </div>
          <p className="text-on-surface-variant dark:text-slate-400 text-body-sm leading-relaxed max-w-sm">
            {t("footerTagline")}
          </p>
          <div className="flex flex-col space-y-3 font-body-sm text-body-sm text-on-surface-variant dark:text-slate-400">
            <a href="tel:+917016837772" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4 text-secondary" />
              <span>+91 7016837772</span>
            </a>
            <a href="mailto:om.support.01@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4 text-secondary" />
              <span>om.support.01@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              <span className="text-xs">204, Shivdhara Complex, Opp. Bank of Baroda, Pedak Road, Rajkot, Gujarat 360003</span>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="font-bold text-base text-on-surface dark:text-surface-bright mb-6 uppercase tracking-wider text-sm">
            {t("footerServices")}
          </h4>
          <ul className="space-y-3 font-body-sm text-body-sm">
            {servicesData.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  className="text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-surface-bright transition-colors block"
                  href={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="text-secondary dark:text-sky-400 font-semibold hover:underline block"
                href="/services"
              >
                All 10 Services »
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-bold text-base text-on-surface dark:text-surface-bright mb-6 uppercase tracking-wider text-sm">
            {t("footerCompany")}
          </h4>
          <ul className="space-y-3 font-body-sm text-body-sm">
            <li>
              <Link className="text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-surface-bright transition-colors block" href="/about">
                {t("navAbout")}
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-surface-bright transition-colors block" href="/faq">
                {t("navFAQ")}
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-surface-bright transition-colors block" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-surface-bright transition-colors block" href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h4 className="font-bold text-base text-on-surface dark:text-surface-bright mb-6 uppercase tracking-wider text-sm">
            {t("footerConnect")}
          </h4>
          <div className="flex space-x-3 mb-6">
            <button
              onClick={handleShareClick}
              className="w-10 h-10 rounded-full bg-surface-container dark:bg-slate-800 flex items-center justify-center text-on-surface-variant dark:text-slate-300 hover:bg-secondary hover:text-on-primary dark:hover:bg-secondary dark:hover:text-white transition-all active:scale-95"
              title="Share Website"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <div
              className="w-10 h-10 rounded-full bg-surface-container dark:bg-slate-800 flex items-center justify-center text-on-surface-variant dark:text-slate-300 transition-all cursor-default"
              title="Target Focus: Rajkot, Gujarat"
            >
              <Globe className="w-5 h-5" />
            </div>
          </div>
          <p className="text-on-surface-variant dark:text-slate-400 text-sm">
            Providing trusted compliance and documentation consulting across Rajkot & Gujarat.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-outline-variant/20 dark:border-slate-800 py-8 text-center transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop text-on-surface-variant dark:text-slate-500 text-body-sm">
          {t("footerRights")}
        </div>
      </div>
    </footer>
  );
};
