import React from "react";
import { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Om Enterprise | Business Registration & GST Compliance in Rajkot",
  description: "Om Enterprise offers quick and reliable GST registration, return filing, MSME, Udyam, PAN, and passport assistance in Rajkot, Gujarat. 100% Trusted compliance support.",
};

export default function HomePage() {
  return <HomeClient />;
}
