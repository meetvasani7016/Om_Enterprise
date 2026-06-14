"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "GST Registration",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");

        // Parallel execution: try to open WhatsApp link in a separate tab
        const whatsappMessage = encodeURIComponent(
          `Hello, I need assistance regarding ${formData.service}. My name is ${formData.name}.`
        );
        const whatsappLink = `https://wa.me/917016837772?text=${whatsappMessage}`;
        window.open(whatsappLink, "_blank");

        // Clear form fields
        setFormData({
          name: "",
          phone: "",
          service: "GST Registration",
          businessType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Database submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="glass-card p-6 md:p-10 rounded-[2.5rem] premium-border shadow-2xl shadow-secondary/5 dark:bg-slate-900/40">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 flex flex-col items-center justify-center space-y-5"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400 px-2 leading-snug">
            Request Submitted Successfully!
          </h3>
          <p className="text-on-surface-variant dark:text-slate-300 max-w-md text-sm md:text-base leading-relaxed px-4">
            Your details are securely logged into the Om Enterprise management system. Our team will contact you directly on your mobile number within 2 business hours. You do not need to take any further action.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-2.5 bg-secondary text-white rounded-xl hover:bg-primary transition-colors text-sm font-semibold active:scale-95 shadow-md"
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : status === "error" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 flex flex-col items-center justify-center space-y-4"
        >
          <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/30 flex items-center justify-center text-red-500">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-on-surface dark:text-surface-bright">Submission Error</h3>
          <p className="text-on-surface-variant dark:text-slate-400 max-w-sm text-sm">
            Something went wrong while connecting to our database. Please check your internet connection and try again.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-2 bg-secondary text-white rounded-xl hover:bg-primary transition-colors text-sm font-semibold"
          >
            Try Again
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="form-name" className="block text-sm font-semibold text-on-surface-variant dark:text-slate-300 mb-2 ml-1">
                {t("contactFormName")} <span className="text-red-500">*</span>
              </label>
              <input
                id="form-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white dark:bg-slate-950 border border-outline-variant/50 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-on-surface dark:text-surface-bright"
                placeholder={t("contactFormPlaceholderName")}
                required
                type="text"
              />
            </div>
            <div>
              <label htmlFor="form-phone" className="block text-sm font-semibold text-on-surface-variant dark:text-slate-300 mb-2 ml-1">
                {t("contactFormPhone")} <span className="text-red-500">*</span>
              </label>
              <input
                id="form-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white dark:bg-slate-950 border border-outline-variant/50 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-on-surface dark:text-surface-bright"
                placeholder={t("contactFormPlaceholderPhone")}
                required
                type="tel"
              />
            </div>
          </div>
          <div>
            <label htmlFor="form-service" className="block text-sm font-semibold text-on-surface-variant dark:text-slate-300 mb-2 ml-1">
              {t("contactFormService")}
            </label>
            <select
              id="form-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white dark:bg-slate-950 border border-outline-variant/50 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all cursor-pointer text-on-surface dark:text-surface-bright"
            >
              <option>GST Registration</option>
              <option>GST Return Filing</option>
              <option>Udyam Registration</option>
              <option>MSME Registration</option>
              <option>PAN Card Services</option>
              <option>Passport Assistance</option>
              <option>Driving Licence Services</option>
              <option>Agreement Services</option>
              <option>Accounting Services</option>
              <option>Income Tax Return (ITR) Filing</option>
              <option>Other / Not Sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="form-type" className="block text-sm font-semibold text-on-surface-variant dark:text-slate-300 mb-2 ml-1">
              {t("contactFormType")}
            </label>
            <input
              id="form-type"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full bg-white dark:bg-slate-950 border border-outline-variant/50 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-on-surface dark:text-surface-bright"
              placeholder={t("contactFormPlaceholderType")}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="form-msg" className="block text-sm font-semibold text-on-surface-variant dark:text-slate-300 mb-2 ml-1">
              {t("contactFormMsg")}
            </label>
            <textarea
              id="form-msg"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full bg-white dark:bg-slate-950 border border-outline-variant/50 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-on-surface dark:text-surface-bright"
              placeholder={t("contactFormPlaceholderMsg")}
            />
          </div>
          <button
            className="w-full bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white transition-all active:scale-95 shadow-lg shadow-secondary/10 flex items-center justify-center gap-2"
            type="submit"
            disabled={status === "submitting"}
          >
            <Send className="w-5 h-5" />
            <span>{status === "submitting" ? "Submitting..." : t("contactFormSubmit")}</span>
          </button>
          <p className="text-center text-xs text-on-surface-variant dark:text-slate-400 mt-2">
            By submitting, you agree to be contacted by our compliance experts.
          </p>
        </form>
      )}
    </div>
  );
};
