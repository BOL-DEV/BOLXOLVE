"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse interaction values for subtle, weighted 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end organic feel
  const springConfig = { damping: 32, stiffness: 85 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Restrained, dignified tilt angles (-3.5deg to +3.5deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3.5, 3.5]);

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
      className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] aspect-[4/5] sm:aspect-square flex items-center justify-center lg:justify-end select-none overflow-visible"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* Carefully Controlled Atmospheric Lime Lighting (Centered on Symbol) */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#BAF247]/10 via-[#BAF247]/3 to-transparent blur-3xl opacity-75" />
      </div>

      {/* The Monumental Official BOLXOLVE Symbol (Ultra-High Resolution Master Asset) */}
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
                y: [-6, 6, -6],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 8.5,
          ease: "easeInOut",
        }}
        className="relative z-10 flex items-center justify-center translate-x-0 sm:translate-x-3 lg:translate-x-8 xl:translate-x-12"
      >
        <div className="relative w-[270px] h-[350px] sm:w-[360px] sm:h-[467px] md:w-[420px] md:h-[545px] lg:w-[460px] lg:h-[597px] xl:w-[520px] xl:h-[675px] transition-transform duration-200">
          <Image
            src="/brand/logo_symbol_hd.png"
            alt="BOLXOLVE Official Brandmark"
            width={1150}
            height={1493}
            priority
            quality={100}
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
