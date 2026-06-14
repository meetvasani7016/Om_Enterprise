import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Om Enterprise",
  description: "Read the privacy guidelines of Om Enterprise. Learn how we handle and protect client identity documents and registration details.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: "Privacy Policy" }];

  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 pb-24 max-w-4xl overflow-hidden">
      <Breadcrumbs items={breadcrumbs} />

      <ScrollReveal direction="up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface dark:text-surface-bright mb-8 tracking-tight">
          Privacy Policy
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <div className="prose prose-slate dark:prose-invert max-w-none text-on-surface-variant dark:text-slate-300 space-y-6 text-sm md:text-base leading-relaxed">
          <p><strong>Last Updated: June 14, 2026</strong></p>
          <p>
            At Om Enterprise, accessible from Rajkot, Gujarat, India, one of our main priorities is the privacy of our clients. This Privacy Policy document contains types of information that is collected and recorded by Om Enterprise and how we use it.
          </p>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">1. Information We Collect</h3>
          <p>
            To process business registrations and compliance filings, we collect personal and corporate documentation, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identity Proofs (Aadhaar Cards, PAN Cards, Passports, Voter IDs).</li>
            <li>Address Proofs (Electricity bills, rent agreements, municipal tax receipts).</li>
            <li>Corporate credentials (partnership deeds, certificates of incorporation).</li>
            <li>Contact details (Name, mobile phone numbers, email addresses).</li>
            <li>Financial reports (bank statements, sales registers, purchase registers).</li>
          </ul>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">2. How We Use Your Information</h3>
          <p>We use the collected documents and information solely to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prepare and submit registration applications on official government portals (GST, Udyam, Income Tax, RTO, Passport).</li>
            <li>Reconcile purchases and sales for monthly/quarterly GST return filings.</li>
            <li>Coordinate appointments at PSK (Passport Seva Kendra) or RTO.</li>
            <li>Communicate filing status updates and request clarifications.</li>
          </ul>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">3. Data Redaction & Deletion</h3>
          <p>
            We strictly follow data privacy practices. Government numbers such as Aadhaar and PAN are treated with the highest confidentiality. Upon successful completion of your service and certificate delivery, you may request the deletion of your sensitive document files from our communication histories.
          </p>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">4. Sharing of Information</h3>
          <p>
            Om Enterprise does not sell, lease, or share your documents with third-party advertising companies. Your data is uploaded exclusively to secure official government portals (e.g. gst.gov.in, incometax.gov.in, udyamregistration.gov.in) for the express purpose of processing your requested registrations.
          </p>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">5. Contact Us</h3>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at:
          </p>
          <p className="font-semibold text-on-surface dark:text-slate-200">
            Om Enterprise<br />
            204, Shivdhara Complex, Opp. Bank of Baroda, Pedak Road, Rajkot, Gujarat 360003<br />
            Email: om.support.01@gmail.com<br />
            Call/WhatsApp: +91 7016837772
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
