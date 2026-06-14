import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Om Enterprise Rajkot",
  description: "Get in touch with Om Enterprise in Rajkot, Gujarat. Call +91 7016837772 or visit our office. We provide quick responses within 4 business hours.",
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  const whatsappLink = `https://wa.me/917016837772?text=${encodeURIComponent(
    "Hello, I need assistance regarding your services."
  )}`;

  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 pb-24 overflow-hidden">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <ScrollReveal direction="up" className="mb-12 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 text-secondary font-bold text-xs uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface dark:text-surface-bright">
          Ready to Get Compliant?
        </h1>
        <p className="text-on-surface-variant dark:text-slate-400 text-base md:text-lg leading-relaxed">
          Reach out to our compliance consultants in Rajkot, Gujarat. Submit your inquiry online or connect with us directly on WhatsApp for instant assistance.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info Column */}
        <ScrollReveal direction="left" delay={0.15} className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-on-surface dark:text-surface-bright">
              Office Details & Location
            </h3>
            <p className="text-on-surface-variant dark:text-slate-400">
              For document handovers, stamp signings, or offline consultations, you can reach out via call or visit our hub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-surface-container-low dark:bg-slate-900/20 border border-outline-variant/30 rounded-2xl space-y-3">
              <Phone className="w-6 h-6 text-secondary" />
              <h4 className="font-bold text-on-surface dark:text-surface-bright">Call or Text</h4>
              <a href="tel:+917016837772" className="text-base font-extrabold text-secondary hover:underline block">
                +91 7016837772
              </a>
              <p className="text-xs text-on-surface-variant dark:text-slate-400">Available Mon-Sat, 9AM-7PM</p>
            </div>

            <div className="p-6 bg-surface-container-low dark:bg-slate-900/20 border border-outline-variant/30 rounded-2xl space-y-3">
              <Mail className="w-6 h-6 text-secondary" />
              <h4 className="font-bold text-on-surface dark:text-surface-bright">Email Support</h4>
              <a href="mailto:om.support.01@gmail.com" className="text-base font-extrabold text-secondary hover:underline block truncate">
                om.support.01@gmail.com
              </a>
              <p className="text-xs text-on-surface-variant dark:text-slate-400">Response in 4 business hours</p>
            </div>

            <div className="p-6 bg-surface-container-low dark:bg-slate-900/20 border border-outline-variant/30 rounded-2xl space-y-3">
              <MapPin className="w-6 h-6 text-secondary" />
              <h4 className="font-bold text-on-surface dark:text-surface-bright">Local Address</h4>
              <p className="text-xs font-semibold text-on-surface dark:text-slate-300">
                204, Shivdhara Complex, Opp. Bank of Baroda, Pedak Road, Rajkot, Gujarat 360003
              </p>
              <p className="text-xs text-on-surface-variant dark:text-slate-400">Corporate Compliance Centre</p>
            </div>

            <div className="p-6 bg-surface-container-low dark:bg-slate-900/20 border border-outline-variant/30 rounded-2xl space-y-3">
              <Clock className="w-6 h-6 text-secondary" />
              <h4 className="font-bold text-on-surface dark:text-surface-bright">Operating Hours</h4>
              <p className="text-sm font-semibold text-on-surface dark:text-slate-300">
                Mon–Sat: 9:00 AM – 7:00 PM
              </p>
              <p className="text-xs text-red-500 font-semibold">Closed on Sunday</p>
            </div>
          </div>

          <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-bold text-on-surface dark:text-surface-bright">Need immediate registration?</h4>
              <p className="text-xs text-on-surface-variant dark:text-slate-400">
                Skip form-filling entirely and send your documents directly on WhatsApp.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#20ba5a] transition-all active:scale-95 shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Interactive Maps Placeholder */}
          <div className="rounded-[2rem] border border-outline-variant/30 overflow-hidden shadow-lg h-[250px] relative bg-slate-100 dark:bg-slate-900/50">
            <div className="absolute inset-0 bg-cover bg-center opacity-65 dark:opacity-40" style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/70.8022,22.3039,12,0/800x250?access_token=mock')" }}>
              {/* Fallback pattern */}
              <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-900 flex-col space-y-2">
                <MapPin className="w-10 h-10 text-secondary animate-bounce" />
                <span className="font-bold text-xs text-on-surface text-center px-4">204, Shivdhara Complex, Opp. Bank of Baroda, Pedak Road, Rajkot, Gujarat 360003</span>
                <span className="text-xs text-on-surface-variant">Central Hub Location Map</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md p-3 rounded-xl border border-outline-variant/30 text-xs shadow-md">
              <a
                href="https://goo.gl/maps/nL9c5ALQbfwgF92t7?g_st=aw"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-bold text-secondary hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Form Column */}
        <ScrollReveal direction="right" delay={0.2} className="relative">
          <ContactForm />
        </ScrollReveal>
      </div>
    </div>
  );
}
