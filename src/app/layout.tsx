import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Om Enterprise | Business Compliance & Registration Services",
    template: "%s | Om Enterprise",
  },
  description: "Om Enterprise offers expert business compliance services in Rajkot, Gujarat including GST registration, return filing, Udyam MSME certificate, Income Tax (ITR) filing, PAN cards, passports, and driving licence assistance.",
  keywords: [
    "GST Registration Rajkot",
    "GST Return Filing Rajkot",
    "MSME Registration Rajkot",
    "ITR Filing Rajkot",
    "Passport Agent Rajkot",
    "Business Compliance Gujarat",
  ],
  metadataBase: new URL("https://omenterprisecompliance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Om Enterprise | Trusted Business Compliance Partner",
    description: "Simplifying GST, MSME, ITR, Passports, and legal agreements for Indian entrepreneurs. Rajkot-based, Pan-India support.",
    url: "/",
    siteName: "Om Enterprise",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Enterprise | Trusted Business Compliance Partner",
    description: "Simplifying GST, MSME, ITR, Passports, and legal agreements. Expert consultants based in Rajkot, Gujarat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="bg-background text-on-surface font-sans overflow-x-hidden min-h-full flex flex-col antialiased selection:bg-secondary/20">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
