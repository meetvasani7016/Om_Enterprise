"use client";

import React, { useState, useEffect } from "react";

export const MouseGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 mix-blend-screen hidden md:block transition-opacity duration-500"
      style={{
        opacity: isVisible ? 0.35 : 0,
        background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(197, 168, 128, 0.12), rgba(0, 88, 190, 0.03), transparent 70%)`,
      }}
    />
  );
};
