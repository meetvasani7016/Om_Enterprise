"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-margin-mobile">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-md w-full p-8 md:p-10 rounded-[2.5rem] premium-border text-center space-y-6 dark:bg-slate-900/30"
      >
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto dark:bg-slate-800">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-on-surface dark:text-surface-bright tracking-tight">
            404 - Page Not Found
          </h1>
          <p className="text-on-surface-variant dark:text-slate-400 text-sm md:text-base leading-relaxed">
            The page you are looking for does not exist, has been moved, or is temporarily unavailable.
          </p>
        </div>
        <Link href="/" className="inline-block w-full">
          <button className="w-full bg-primary text-on-primary dark:bg-slate-100 dark:text-slate-900 py-3.5 rounded-xl font-bold transition-all hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white flex items-center justify-center gap-2 text-sm active:scale-95 shadow-md shadow-secondary/5">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
