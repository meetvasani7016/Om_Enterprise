import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Award, Shield, Users, Clock, ArrowRight, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Om Enterprise Rajkot",
  description: "Learn more about Om Enterprise, Rajkot's leading business registration and compliance consultancy. Our history, vision, values, and dedication to accuracy.",
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us" }];

  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Compliance Partner</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface dark:text-surface-bright leading-tight">
            Simplifying Compliance for Local Entrepreneurs
          </h1>
          <p className="text-on-surface-variant dark:text-slate-300 text-lg leading-relaxed">
            At Om Enterprise, we believe that starting and managing a business shouldn't be stalled by complex online portals and government documentation checklists. 
          </p>
          <p className="text-on-surface-variant dark:text-slate-400 text-base leading-relaxed">
            Based in Rajkot, Gujarat, we are a 100% Trusted partner for clients across the state and nationwide. We coordinate everything from GST registrations and monthly tax filing to MSME certifications, passport updates, and driving licences—bridging the gap between business needs and government requirements.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-outline-variant/30">
            <img
              alt="Rajkot business offices"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover min-h-[300px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 right-6 bg-secondary text-white p-6 rounded-2xl shadow-lg max-w-[200px]">
            <span className="text-2xl font-extrabold block">100% Trusted</span>
            <span className="text-xs text-slate-200">Business compliance and documentation.</span>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 border-t border-outline-variant/20 dark:border-slate-800/80 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="glass-card p-8 md:p-10 rounded-[2rem] border-outline-variant/30 space-y-4 dark:bg-slate-900/30">
          <h3 className="text-2xl font-bold text-on-surface dark:text-surface-bright">Our Vision</h3>
          <p className="text-on-surface-variant dark:text-slate-400 text-base leading-relaxed">
            To build a digital-first, friction-free compliance ecosystem where Indian entrepreneurs can establish and operate their companies without worrying about deadlines, portal queries, or spelling mistakes. We aim to become Gujarat's most trusted, transparent business registration consultant.
          </p>
        </div>
        <div className="glass-card p-8 md:p-10 rounded-[2rem] border-outline-variant/30 space-y-4 dark:bg-slate-900/30">
          <h3 className="text-2xl font-bold text-on-surface dark:text-surface-bright">Our Mission</h3>
          <p className="text-on-surface-variant dark:text-slate-400 text-base leading-relaxed">
            To deliver 100% accurate, fast, and transparent document processing services via simple client channels (like WhatsApp). We eliminate the need for complicated dashboards, providing direct access to compliance experts who ensure a 98.6% first-attempt approval rate.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-surface-container-low dark:bg-slate-900/30 rounded-[2.5rem] px-8 md:px-12 my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-on-surface dark:text-surface-bright mb-12 text-center">
          Our Core Operating Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary dark:bg-slate-800">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright">Absolute Transparency</h4>
            <p className="text-on-surface-variant dark:text-slate-400 text-sm">
              We list all checklist requirements, state rules, and timelines upfront. No surprise processing charges.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary dark:bg-slate-800">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright">Process Accuracy</h4>
            <p className="text-on-surface-variant dark:text-slate-400 text-sm">
              We crosscheck spelling and DOB parameters across databases, mitigating the risk of RTO or GST rejections.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary dark:bg-slate-800">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright">Turnaround Priority</h4>
            <p className="text-on-surface-variant dark:text-slate-400 text-sm">
              Applications are drafted and uploaded within hours of document delivery to ensure rapid portal approvals.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary dark:bg-slate-800">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright">Bilingual Support</h4>
            <p className="text-on-surface-variant dark:text-slate-400 text-sm">
              We communicate in the language you are comfortable with, offering support in English and Gujarati.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 text-center space-y-6 max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-on-surface dark:text-surface-bright">
          Need Assistance with Registrations?
        </h3>
        <p className="text-on-surface-variant dark:text-slate-400">
          Get in touch with our Rajkot office today. We process submissions for GST, PAN, Passports, and deeds.
        </p>
        <Link href="/contact" className="inline-block">
          <button className="px-8 py-3.5 bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 font-bold rounded-xl hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-secondary/10">
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </section>
    </div>
  );
}
