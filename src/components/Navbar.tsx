"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { servicesData } from "@/data/services";
import { ChevronDown, Menu, X, MessageSquare, PhoneCall, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll effect to adjust height & padding
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I need assistance regarding your services.");
    window.open(`https://wa.me/917016837772?text=${message}`, "_blank");
  };

  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-outline-variant/30 h-16 shadow-sm"
          : "bg-surface/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-outline-variant/10 h-20"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop h-full flex justify-between items-center relative">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-headline-md text-xl md:text-2xl font-bold tracking-tight text-on-surface dark:text-surface-bright hover:text-secondary transition-colors"
        >
          <img src="/om-logo.png" alt="Om Enterprise Logo" className="w-8 h-8 object-contain" />
          <span>Om Enterprise</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Services Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 font-medium text-body-base transition-colors ${
                pathname.startsWith("/services")
                  ? "text-secondary font-semibold border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-primary dark:text-slate-300 dark:hover:text-surface-bright"
              }`}
            >
              {t("navServices")}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-[300px] bg-surface-container-lowest/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-xl border border-outline-variant/50 shadow-2xl p-4 grid gap-2 z-50"
                >
                  <div className="font-semibold text-xs tracking-wider text-outline mb-2 uppercase px-2">
                    Our Services
                  </div>
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex flex-col p-2 rounded-lg hover:bg-surface-container-low dark:hover:bg-slate-800 transition-colors"
                    >
                      <span className="font-bold text-sm text-on-surface dark:text-surface-bright">
                        {service.title}
                      </span>
                      <span className="text-xs text-on-surface-variant dark:text-slate-400 line-clamp-1">
                        {service.tagline}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-outline-variant/30 mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block text-center font-bold text-xs text-secondary hover:underline py-1"
                    >
                      View All Services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className={`font-medium text-body-base transition-colors ${
              pathname === "/about"
                ? "text-secondary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant hover:text-primary dark:text-slate-300 dark:hover:text-surface-bright"
            }`}
          >
            {t("navAbout")}
          </Link>

          <Link
            href="/#why-us"
            className="font-medium text-body-base text-on-surface-variant hover:text-primary dark:text-slate-300 dark:hover:text-surface-bright transition-colors"
          >
            {t("navWhyUs")}
          </Link>

          <Link
            href="/faq"
            className={`font-medium text-body-base transition-colors ${
              pathname === "/faq"
                ? "text-secondary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant hover:text-primary dark:text-slate-300 dark:hover:text-surface-bright"
            }`}
          >
            {t("navFAQ")}
          </Link>

          <Link
            href="/contact"
            className={`font-medium text-body-base transition-colors ${
              pathname === "/contact"
                ? "text-secondary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant hover:text-primary dark:text-slate-300 dark:hover:text-surface-bright"
            }`}
          >
            {t("navContact")}
          </Link>
        </div>

        {/* Actions (Search, Language Switcher & WhatsApp Button) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2.5 text-on-surface-variant hover:text-primary dark:text-slate-300 dark:hover:text-surface-bright hover:bg-surface-container-low dark:hover:bg-slate-800 rounded-full transition-all active:scale-95"
            aria-label="Search Services"
          >
            <Search className="w-5 h-5" />
          </button>
          <LanguageSwitcher />
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white shadow-md active:scale-95 text-sm"
          >
            <MessageSquare className="w-4 h-4 text-green-500 fill-green-500" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Mobile Controls (Search, Language Switcher, Menu Toggle) */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-on-surface-variant hover:text-primary dark:text-slate-300 dark:hover:text-surface-bright hover:bg-surface-container rounded-lg transition-all"
            aria-label="Search Services"
          >
            <Search className="w-5.5 h-5.5" />
          </button>
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-on-surface dark:text-surface-bright hover:bg-surface-container rounded-lg transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-xl bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/65 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4 border-b border-outline-variant/30">
                <Search className="w-5 h-5 text-on-surface-variant dark:text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g. GST, ITR, MSME)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow bg-transparent border-none outline-none text-on-surface dark:text-surface-bright text-base focus:ring-0"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-1 text-on-surface-variant hover:text-primary dark:hover:text-surface-bright rounded-lg hover:bg-surface-container-low dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="max-h-[300px] overflow-y-auto p-4 space-y-2 scrollbar-none">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="block p-3 rounded-xl hover:bg-surface-container-low dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="font-bold text-sm text-on-surface dark:text-surface-bright">
                        {service.title}
                      </div>
                      <div className="text-xs text-on-surface-variant dark:text-slate-400 mt-1 line-clamp-1">
                        {service.description}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-6 text-on-surface-variant dark:text-slate-400 text-sm">
                    No matching services found.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface dark:bg-slate-950 border-b border-outline-variant/30 shadow-xl overflow-hidden w-full absolute top-full left-0 z-40"
          >
            <div className="px-margin-mobile py-6 flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <span className="font-bold text-xs tracking-wider text-outline uppercase pl-2">Services</span>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {servicesData.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-sm font-semibold text-on-surface-variant dark:text-slate-300 hover:text-secondary py-1"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="text-sm font-bold text-secondary hover:underline py-1 col-span-2"
                  >
                    All Services ({servicesData.length}) »
                  </Link>
                </div>
              </div>

              <div className="h-px bg-outline-variant/30 w-full" />

              <Link
                href="/about"
                className="text-base font-semibold text-on-surface dark:text-surface-bright hover:text-secondary py-2 pl-2"
              >
                {t("navAbout")}
              </Link>
              <Link
                href="/#why-us"
                className="text-base font-semibold text-on-surface dark:text-surface-bright hover:text-secondary py-2 pl-2"
              >
                {t("navWhyUs")}
              </Link>
              <Link
                href="/faq"
                className="text-base font-semibold text-on-surface dark:text-surface-bright hover:text-secondary py-2 pl-2"
              >
                {t("navFAQ")}
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold text-on-surface dark:text-surface-bright hover:text-secondary py-2 pl-2"
              >
                {t("navContact")}
              </Link>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all shadow-md"
              >
                <MessageSquare className="w-5 h-5 fill-white text-green-500" />
                <span>Contact on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
