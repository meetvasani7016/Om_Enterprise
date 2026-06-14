"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceData } from "@/data/services";
import {
  Building,
  FileText,
  Briefcase,
  Store,
  CreditCard,
  PlaneTakeoff,
  FileSignature,
  Scale,
  BookOpen,
  Calculator,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: ServiceData;
}

// Map slug to Lucide Icon
const getIcon = (slug: string) => {
  switch (slug) {
    case "gst-registration":
      return <Building className="w-8 h-8 text-secondary" />;
    case "gst-return-filing":
      return <FileText className="w-8 h-8 text-secondary" />;
    case "udyam-registration":
      return <Briefcase className="w-8 h-8 text-secondary" />;
    case "msme-registration":
      return <Store className="w-8 h-8 text-secondary" />;
    case "pan-card-services":
      return <CreditCard className="w-8 h-8 text-secondary" />;
    case "passport-assistance":
      return <PlaneTakeoff className="w-8 h-8 text-secondary" />;
    case "driving-licence-services":
      return <FileSignature className="w-8 h-8 text-secondary" />;
    case "agreement-services":
      return <Scale className="w-8 h-8 text-secondary" />;
    case "accounting-services":
      return <BookOpen className="w-8 h-8 text-secondary" />;
    case "income-tax-return-filing":
      return <Calculator className="w-8 h-8 text-secondary" />;
    default:
      return <FileText className="w-8 h-8 text-secondary" />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate relative mouse coordinates (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-coords.y * 12}deg) rotateY(${coords.x * 12}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "none" : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease",
      }}
      className="glass-card p-6 md:p-8 rounded-[2rem] premium-border flex flex-col h-full hover:shadow-2xl hover:shadow-secondary/10 transition-shadow duration-300 dark:bg-slate-900/30 group relative overflow-hidden cursor-pointer"
    >
      {/* Golden Shine Sweep Overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none z-10">
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
      </div>

      {/* Icon with Zoom Effect */}
      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 dark:bg-slate-800 shrink-0 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
        {getIcon(service.slug)}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-on-surface dark:text-surface-bright mb-2 group-hover:text-secondary-light transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-secondary dark:text-gold-light text-xs font-semibold mb-4 uppercase tracking-wider">
        {service.category}
      </p>

      <p className="text-on-surface-variant dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
        {service.description}
      </p>

      <div className="space-y-3 mb-8">
        {service.process.slice(0, 3).map((proc, index) => (
          <div key={index} className="flex items-center gap-2 text-xs text-on-surface dark:text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            <span className="truncate">{proc.title}</span>
          </div>
        ))}
      </div>

      <Link href={`/services/${service.slug}`} className="w-full mt-auto">
        <button className="w-full py-3 bg-secondary/5 text-secondary dark:bg-slate-800 dark:text-surface-bright font-bold rounded-xl hover:bg-secondary hover:text-on-primary dark:hover:bg-secondary dark:hover:text-white transition-all flex items-center justify-center gap-2 text-sm active:scale-95 shadow-sm cursor-pointer">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </Link>
    </motion.div>
  );
};
