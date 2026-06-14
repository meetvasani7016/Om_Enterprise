import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service | Om Enterprise",
  description: "Read the Terms of Service for Om Enterprise compliance and registration consultancy services in Gujarat.",
};

export default function TermsOfServicePage() {
  const breadcrumbs = [{ label: "Terms of Service" }];

  return (
    <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 pb-24 max-w-4xl overflow-hidden">
      <Breadcrumbs items={breadcrumbs} />

      <ScrollReveal direction="up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface dark:text-surface-bright mb-8 tracking-tight">
          Terms of Service
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <div className="prose prose-slate dark:prose-invert max-w-none text-on-surface-variant dark:text-slate-300 space-y-6 text-sm md:text-base leading-relaxed">
          <p><strong>Last Updated: June 14, 2026</strong></p>
          <p>
            Welcome to Om Enterprise. By accessing our consulting services, submitting documents, or requesting filings (GST, MSME, ITR, Passports, Driving Licences, legal deeds), you agree to be bound by the following terms and conditions.
          </p>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">1. Scope of Service</h3>
          <p>
            Om Enterprise acts as a professional document processing and portal facilitation consultant. We do not issue certificates directly. Government authorities (such as the Goods and Services Tax Department, Ministry of MSME, Income Tax Department, Ministry of External Affairs, and Regional Transport Offices) are the sole approving authorities for certificates, cards, and licences.
          </p>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">2. Accuracy of Client Documentation</h3>
          <p>
            Clients must provide 100% genuine and accurate information, signatures, and government identity documents. Om Enterprise is not liable for delayed approvals, query notices, or penalties arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Spelling discrepancies between different database records (e.g. PAN card not matching Aadhaar).</li>
            <li>Expired or invalid utility bills or lease papers submitted for business address proof.</li>
            <li>Failure to verify Aadhaar-linked OTP codes in a timely manner when requested.</li>
          </ul>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">3. Quotations & Payments</h3>
          <p>
            Consultation fees are quoted prior to beginning the application drafting process. Payment is due in full or part as agreed before submitting the final documents on government portals. Official government application fees (where applicable, e.g., passport fee, driving test RTO fee) must be paid via our consult or directly online by the client.
          </p>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">4. Refund Policy</h3>
          <p>
            Fees paid for drafting, document checks, and verification are non-refundable once the application has been submitted to the respective government portal or notary public. If an application is rejected due to a drafting error on our part, we will refile the application at no additional consultation fee.
          </p>

          <h3 className="text-xl font-bold text-on-surface dark:text-surface-bright pt-4">5. Modifications to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. Changes will be updated on this page. For any clarifications regarding these terms, please connect with us via call or WhatsApp.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
