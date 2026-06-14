import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { servicesData } from "@/data/services";
import {
  CheckCircle,
  Bolt,
  ShieldCheck,
  Headphones,
  MapPin,
  Mail,
  Phone,
  HelpCircle,
  Award,
  Users,
  Clock,
  ThumbsUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Om Enterprise | Business Registration & GST Compliance in Rajkot",
  description: "Om Enterprise offers quick and reliable GST registration, return filing, MSME, Udyam, PAN, and passport assistance in Rajkot, Gujarat. 100% Trusted compliance support.",
};

export default function HomePage() {
  // Select first 4 general FAQs for the preview
  const generalFAQs = [
    {
      question: "What documents do I need for GST registration?",
      answer: "Generally, you need a PAN card, Aadhaar card, applicant photograph, proof of business address (electricity bill/municipal tax receipt/rent agreement with NOC), and bank details (cancelled cheque or statement). Our team handles the verification."
    },
    {
      question: "How long does Udyam registration take?",
      answer: "Udyam registration is typically instant once Aadhaar-linked OTP verification is completed. We map your NIC codes properly to ensure the certificate is issued without error within 24-48 hours."
    },
    {
      question: "Is it mandatory to file GST returns if I have zero sales?",
      answer: "Yes, 'Nil' returns must be filed even if there are no transactions. Failure to file GSTR-1 and GSTR-3B leads to daily late fees and blocking of E-way bills."
    },
    {
      question: "Do you provide consultation services outside of Rajkot?",
      answer: "Yes, we serve clients across Gujarat and all other Indian states. Since government portals are fully digitized, we coordinate documentation securely over phone, email, and WhatsApp."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-12 md:pt-20 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-high/65 border border-outline-variant/30 text-secondary mb-8 dark:bg-slate-800 dark:border-slate-700">
            <span className="text-xs md:text-sm font-semibold tracking-wide flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Trusted Business Compliance Partner
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl mx-auto leading-[1.15] tracking-tight text-on-surface dark:text-surface-bright">
            Your Business, Compliant. <br />
            <span className="text-secondary dark:text-sky-400 bg-clip-text">From Day One.</span>
          </h1>
          <p className="text-on-surface-variant dark:text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Om Enterprise handles the paperwork, portals, and government processes — so you can focus on building your business. Fast, accurate, and completely hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-md mx-auto sm:max-w-none">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 rounded-xl font-bold text-base md:text-lg transition-all hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white hover:shadow-xl active:scale-95">
                Get Started Today
              </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-surface-container-lowest border border-outline-variant text-on-surface dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 rounded-xl font-bold text-base md:text-lg transition-all hover:bg-surface-container hover:border-outline active:scale-95">
                Explore Our Services
              </button>
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="border-t border-outline-variant/30 dark:border-slate-800 pt-8 mt-4">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-on-surface-variant dark:text-slate-400 font-semibold text-xs md:text-sm tracking-wide">
              <span className="flex items-center gap-2">✦ 100% Trusted</span>
              <span className="flex items-center gap-2">✦ 98.6% First-Attempt Approval Rate</span>
              <span className="flex items-center gap-2">✦ Avg. 48-Hour Turnaround</span>
              <span className="flex items-center gap-2">✦ Rajkot-Based, Pan-India Service</span>
            </div>
          </div>
        </div>

        {/* Ambient Blur Background Graphic */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-secondary/10 dark:bg-sky-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-primary/5 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* 2. About Preview Section */}
      <section className="py-20 md:py-24 bg-surface-container-low/40 dark:bg-slate-900/10 border-y border-outline-variant/10" id="about">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface dark:text-surface-bright tracking-tight">
                Who We Are & Our Local Roots
              </h2>
              <p className="text-on-surface-variant dark:text-slate-400 text-base md:text-lg leading-relaxed">
                Founded in Rajkot, Om Enterprise was built on a simple observation: small and medium businesses lose thousands of hours to government paperwork and complex online portals. We are a team of compliance specialists, documentation experts, and process consultants dedicated to one thing: making business compliance invisible for you.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 dark:bg-slate-800">
                    <Bolt className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright mb-1">Speed Without Compromise</h4>
                    <p className="text-on-surface-variant dark:text-slate-400 text-sm">We leverage deep knowledge of portal mechanics to submit applications in hours, not days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 dark:bg-slate-800">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright mb-1">Accuracy First</h4>
                    <p className="text-on-surface-variant dark:text-slate-400 text-sm">A single typo can delay your business by weeks. Our multi-check process ensures every document is perfect.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 dark:bg-slate-800">
                    <Headphones className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface dark:text-surface-bright mb-1">Real Human Support</h4>
                    <p className="text-on-surface-variant dark:text-slate-400 text-sm">No bots. You’ll have a dedicated compliance manager available on WhatsApp whenever you need them.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-outline-variant/30 max-h-[500px]">
                <img
                  alt="Professional compliance office in Rajkot"
                  className="w-full h-full object-cover min-h-[350px] md:min-h-[450px]"
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-outline-variant/30 max-w-[240px] dark:bg-slate-950 dark:border-slate-800">
                <p className="text-2xl font-extrabold text-secondary mb-1">100% Trusted</p>
                <p className="text-xs font-semibold text-on-surface-variant dark:text-slate-400">
                  Compliance consulting for businesses in Rajkot, Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section className="py-20 md:py-24 bg-surface" id="services">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface dark:text-surface-bright">
              Comprehensive Compliance Solutions
            </h2>
            <p className="text-on-surface-variant dark:text-slate-400 text-base md:text-lg">
              Everything you need to launch and grow your business, legally and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mid-page CTA Banner */}
      <section className="py-16 bg-primary text-on-primary dark:bg-slate-950 dark:border-y dark:border-slate-800 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Not Sure Which Registration You Need?
            </h3>
            <p className="text-white/70 max-w-xl text-sm md:text-base">
              Our experts can guide you based on your business size, activities, and growth goals. Free 10-minute consultation.
            </p>
          </div>
          <a href="tel:+917016837772" className="w-full md:w-auto text-center shrink-0">
            <button className="w-full md:w-auto px-8 py-4 bg-white text-primary dark:bg-slate-100 dark:text-slate-900 font-bold rounded-xl hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white transition-all whitespace-nowrap active:scale-95 shadow-md">
              Call +91 7016837772
            </button>
          </a>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl -mr-32 -mt-32" />
      </section>

      {/* 5. Statistics Section */}
      <section className="py-20 bg-surface-container-low/20 dark:bg-slate-900/20 border-b border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary">100%</div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-on-surface-variant dark:text-slate-400">
                Trusted
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary">98.6%</div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-on-surface-variant dark:text-slate-400">
                Approval Rate
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary">48-Hr</div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-on-surface-variant dark:text-slate-400">
                Average Turnaround
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg md:text-xl font-extrabold text-secondary">All Your Business Needs in One Place</div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-on-surface-variant dark:text-slate-400">
                Our Services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-surface-container-low dark:bg-slate-900/30" id="why-us">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface dark:text-surface-bright tracking-tight">
              We've Handled Thousands of Applications.<br />
              <span className="text-secondary dark:text-sky-400">Yours Will Be No Different.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-on-surface dark:text-surface-bright">First-Attempt Accuracy</h4>
                <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed">
                  Our 98.6% success rate means you won't have to deal with rejected applications, redundant corrections, or duplicate processing fees.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-on-surface dark:text-surface-bright">No Hidden Charges</h4>
                <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed">
                  The price we quote is the final amount. Zero surprise charges or undeclared portal processing fees. Transparency is key.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-on-surface dark:text-surface-bright">Rajkot-Based, Pan-India</h4>
                <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed">
                  Enjoy the peace of mind of local physical accountability in Rajkot while getting registrations filed across any Indian state.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-on-surface dark:text-surface-bright">WhatsApp-First Convenience</h4>
                <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed">
                  No complex client dashboards. Send your paperwork as clear photos and receive progress updates directly in your chat.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-on-surface dark:text-surface-bright">Dedicated Manager</h4>
                <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed">
                  You aren't just another ticket number. You get a direct phone line to a consultant who knows your business compliance history.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-on-surface dark:text-surface-bright">Government-Compliant</h4>
                <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed">
                  All documents are processed strictly in compliance with prevailing Acts (GST, Stamp Act, RTO rules), protecting your legal stand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-20 md:py-24 bg-[#131b2e] text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16 text-center text-white">
            Real Stories From Local Business Owners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <p className="text-base md:text-lg italic mb-8 leading-relaxed text-slate-300">
                "I was struggling with GST registration for 3 weeks on my own. Om Enterprise handled it in just 48 hours. The WhatsApp support was incredibly convenient!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                  RM
                </div>
                <div>
                  <p className="font-bold">Rajesh Mehta</p>
                  <p className="text-xs text-slate-400">Founder, Mehta Textiles Rajkot</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <p className="text-base md:text-lg italic mb-8 leading-relaxed text-slate-300">
                "Filing GST returns was a monthly headache until I partnered with Om Enterprise. Now I just send my invoices on WhatsApp, and they handle the rest perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                  PS
                </div>
                <div>
                  <p className="font-bold">Priya Shah</p>
                  <p className="text-xs text-slate-400">Owner, Bloom Design Studio</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <p className="text-base md:text-lg italic mb-8 leading-relaxed text-slate-300">
                "Got my Udyam and MSME registration done through them. They explained the benefits of the schemes which I wasn't even aware of. Very professional team."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                  KP
                </div>
                <div>
                  <p className="font-bold">Kiran Patel</p>
                  <p className="text-xs text-slate-400">Director, Patel Engineering Works</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <p className="text-base md:text-lg italic mb-8 leading-relaxed text-slate-300">
                "I needed a passport renewal urgently for a business trip. Their team handled the documentation so smoothly that I got my appointment and passport much faster than expected."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                  NJ
                </div>
                <div>
                  <p className="font-bold">Neha Joshi</p>
                  <p className="text-xs text-slate-400">Freelance Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview Section */}
      <section className="py-20 md:py-24 bg-surface" id="faq">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface dark:text-surface-bright tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant dark:text-slate-400 text-sm md:text-base">
              Clarity on our processes and compliance requirements.
            </p>
          </div>
          <FAQAccordion faqs={generalFAQs} />
          <div className="text-center mt-12">
            <Link href="/faq" className="inline-flex items-center gap-1 font-bold text-secondary hover:underline">
              <HelpCircle className="w-4 h-4" />
              <span>View Centralized FAQ Database ({servicesData.length * 5}+ answers)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Contact CTA Section */}
      <section className="py-20 md:py-24 bg-surface-container-low/50 dark:bg-slate-900/10 border-t border-outline-variant/15" id="contact">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface dark:text-surface-bright tracking-tight leading-tight">
                Ready to <br />
                <span className="text-secondary dark:text-sky-400 bg-clip-text">Get Compliant?</span>
              </h2>
              <p className="text-on-surface-variant dark:text-slate-400 text-base md:text-lg">
                Submit your details for a free consultation. Our team will get back to you within 4 business hours.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 text-on-surface-variant dark:text-slate-400">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface opacity-60 dark:text-slate-500 uppercase">Call or WhatsApp</p>
                    <a href="tel:+917016837772" className="text-lg font-bold text-on-surface dark:text-surface-bright hover:text-secondary transition-colors">
                      +91 7016837772
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant dark:text-slate-400">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface opacity-60 dark:text-slate-500 uppercase">Our Office Location</p>
                    <p className="text-xs font-bold text-on-surface dark:text-surface-bright">204, Shivdhara Complex, Opp. Bank of Baroda, Pedak Road, Rajkot, Gujarat 360003</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant dark:text-slate-400">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:bg-slate-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface opacity-60 dark:text-slate-500 uppercase">Email Us Directly</p>
                    <a href="mailto:om.support.01@gmail.com" className="text-lg font-bold text-on-surface dark:text-surface-bright hover:text-secondary transition-colors">
                      om.support.01@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
