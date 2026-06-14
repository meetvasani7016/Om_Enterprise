import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData, ServiceData } from "@/data/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  MessageSquare,
  PhoneCall,
  Scale,
  UserCheck,
  ChevronRight
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate Static Paths for SEO / Static Export
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 2. Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const focusKeyword = `${service.title} Rajkot`;
  return {
    title: `${service.title} Services in Rajkot, Gujarat`,
    description: `${service.description} Fast turnaround of ${service.timeline}. Get expert compliance support from Om Enterprise in Rajkot.`,
    keywords: [focusKeyword, ...service.keywords],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Om Enterprise Rajkot`,
      description: service.tagline,
      url: `/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find 3 related services in the same category, or fallback to first 3
  const relatedServices = servicesData
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  // JSON-LD Structured Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Om Enterprise",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    "telephone": "+917016837772",
    "email": "meetvasani9898@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "url": "https://omenterprisecompliance.com"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Om Enterprise"
    },
    "areaServed": {
      "@type": "State",
      "name": "Gujarat"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: service.title }
  ];

  const whatsappLink = `https://wa.me/917016837772?text=${encodeURIComponent(
    `Hello, I need assistance regarding your ${service.title} services.`
  )}`;

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 pb-24">
        <Breadcrumbs items={breadcrumbs} />

        {/* 1. Service Hero */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-surface-container-low/50 to-surface-container/20 dark:from-slate-900/40 dark:to-slate-900/10 rounded-[2rem] px-6 md:px-12 border border-outline-variant/20 mb-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-secondary/10 text-secondary dark:bg-slate-800 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
              {service.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface dark:text-surface-bright leading-tight tracking-tight">
              {service.heroTitle}
            </h1>
            <p className="text-on-surface-variant dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
              {service.heroSub}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#20ba5a] transition-all active:scale-95 shadow-md shadow-green-500/10"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Apply via WhatsApp</span>
              </a>
              <a
                href="#contact-section"
                className="inline-flex items-center gap-2 bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white transition-all active:scale-95"
              >
                <span>Request Consultation</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Columns (Detailed content) */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright border-b border-outline-variant/30 pb-4">
                Service Overview
              </h2>
              <p className="text-on-surface-variant dark:text-slate-300 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright border-b border-outline-variant/30 pb-4">
                Key Benefits & Advantages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start p-4 bg-surface-container-lowest dark:bg-slate-900/30 rounded-xl border border-outline-variant/20">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant dark:text-slate-300 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright border-b border-outline-variant/30 pb-4">
                Eligibility criteria
              </h2>
              <ul className="space-y-4">
                {service.eligibility.map((elig, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <UserCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-on-surface dark:text-slate-300 text-sm md:text-base leading-relaxed">
                      {elig}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright border-b border-outline-variant/30 pb-4">
                Required Documents Checklist
              </h2>
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 flex gap-3 mb-6 items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5 dark:text-yellow-400" />
                <p className="text-xs md:text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Important:</strong> Please ensure that names, father's names, and dates of birth match exactly across all identity documents. If there is a mismatch, we recommend applying for a name correction first.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center p-4 bg-surface-container-low/50 dark:bg-slate-900/20 rounded-xl border border-outline-variant/15"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-on-surface dark:text-slate-300 text-sm font-medium">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Process */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright border-b border-outline-variant/30 pb-4">
                Step-by-Step Registration Process
              </h2>
              <div className="space-y-8 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/40 dark:before:bg-slate-800">
                {service.process.map((proc) => (
                  <div key={proc.step} className="relative space-y-2">
                    <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-background" />
                    <h4 className="font-bold text-base md:text-lg text-on-surface dark:text-surface-bright">
                      Step {proc.step}: {proc.title}
                    </h4>
                    <p className="text-on-surface-variant dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules & Regulations */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright border-b border-outline-variant/30 pb-4">
                Compliance Rules & Guidelines
              </h2>
              <ul className="space-y-4">
                {service.rules.map((rule, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Scale className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-on-surface dark:text-slate-300 text-sm md:text-base leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright border-b border-outline-variant/30 pb-4">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8 lg:sticky lg:top-24">
            {/* Timeline Widget */}
            <div className="p-6 rounded-3xl bg-surface-container-low dark:bg-slate-900/30 border border-outline-variant/30 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-secondary" />
                <h4 className="font-bold text-on-surface dark:text-surface-bright text-base md:text-lg">Expected Timeline</h4>
              </div>
              <div className="text-2xl font-extrabold text-secondary dark:text-sky-400">
                {service.timeline}
              </div>
              <p className="text-xs text-on-surface-variant dark:text-slate-400 leading-relaxed">
                This timeline represents standard processing duration. Minor variations might occur depending on government server traffic or verification queries.
              </p>
            </div>

            {/* Sidebar Contact Card */}
            <div id="contact-section" className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright">Apply Online Now</h3>
                <p className="text-xs text-on-surface-variant dark:text-slate-400">
                  Fill in your contact details, and a case officer will reach out.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* 3. Related Services */}
        <section className="mt-24 pt-16 border-t border-outline-variant/20 dark:border-slate-800">
          <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface dark:text-surface-bright mb-8">
            Other Documentation Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 rounded-2xl bg-surface-container-low dark:bg-slate-900/20 border border-outline-variant/20 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </div>
                <Link
                  href={`/services/${rel.slug}`}
                  className="mt-6 flex items-center gap-1 text-xs font-bold text-secondary dark:text-sky-400 hover:underline"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 4. Sticky Bottom Consultation Bar (Visible on mobile viewports) */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-surface/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-outline-variant/30 flex lg:hidden items-center justify-between p-4 px-margin-mobile gap-3 shadow-lg">
        <a
          href="tel:+917016837772"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 py-3.5 rounded-xl text-sm font-bold active:scale-95 shadow-md"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call Support</span>
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl text-sm font-bold active:scale-95 shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
}
