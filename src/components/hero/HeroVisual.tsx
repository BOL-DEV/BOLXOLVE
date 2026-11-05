"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse interaction values for subtle 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end organic feel
  const springConfig = { damping: 28, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Restrained, dignified tilt angles (-5deg to +5deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[640px] aspect-[4/5] sm:aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1400 }}
      aria-hidden="true"
    >
      {/* Ambient Lighting & Controlled Lime Atmospheric Bloom */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#BAF247]/10 via-[#BAF247]/5 to-transparent blur-3xl" />
        <div className="w-[60%] h-[60%] rounded-full bg-[#101522]/90 blur-2xl" />
      </div>

      {/* Layer 1: Oversized Cropped Silhouette / Brand Geometry Watermark */}
      <div className="absolute -top-10 -right-12 w-[380px] h-[498px] sm:w-[460px] sm:h-[600px] opacity-[0.045] pointer-events-none overflow-hidden select-none">
        <Image
          src="/brand/logo_icon_hi_res.png"
          alt=""
          width={234}
          height={307}
          className="w-full h-full object-contain filter grayscale contrast-200"
        />
      </div>

      {/* Layer 2: Subtle Architectural Gallery Registration Rules */}
      <div className="absolute inset-4 sm:inset-6 pointer-events-none">
        {/* Corner registration brackets */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1E2638]" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#1E2638]" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#1E2638]" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#1E2638]" />

        {/* Fine hairline datum lines across center */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E2638]/40 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1E2638]/40 to-transparent" />
      </div>

      {/* Layer 3: Dynamic 3D Parallax Stage with the Official BOLXOLVE Symbol */}
      <motion.div
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-7, 7, -7],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 8.5,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        {/* Soft Radial Backlight directly behind the symbol */}
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#BAF247]/12 blur-2xl pointer-events-none" />

        {/* The Official BOLXOLVE High-Resolution Transparent Mark */}
        <div className="relative w-52 h-[272px] sm:w-68 sm:h-[356px] md:w-76 md:h-[400px] lg:w-[320px] lg:h-[420px] xl:w-[360px] xl:h-[472px]">
          <Image
            src="/brand/logo_icon_hi_res.png"
            alt="BOLXOLVE Official Brandmark"
            width={234}
            height={307}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] drop-shadow-[0_0_36px_rgba(186,242,71,0.18)] select-none pointer-events-none"
          />
        </div>

        {/* Refined Brand Identity Tag (Authentic, Restrained) */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2.5 text-[10px] font-mono tracking-[0.24em] text-[#71717A] uppercase select-none">
          <span>BOLXOLVE BRANDMARK</span>
          <span className="w-1 h-1 rounded-full bg-[#BAF247]" />
          <span>GEOMETRIC EDITION</span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
