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
  const springConfig = { damping: 30, stiffness: 90 };
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
      className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] aspect-[4/5] sm:aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* Symmetrical, Carefully Controlled Ambient Atmospheric Glow (No offset, no silhouette) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-[#BAF247]/8 via-[#BAF247]/3 to-transparent blur-3xl opacity-60" />
      </div>

      {/* The Single, Pristine Official BOLXOLVE Brand Symbol */}
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
          duration: 8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="relative w-48 h-[252px] sm:w-60 sm:h-[315px] lg:w-72 lg:h-[378px] xl:w-[310px] xl:h-[407px]">
          <Image
            src="/brand/logo_icon_hi_res.png"
            alt="BOLXOLVE Official Brandmark"
            width={234}
            height={307}
            priority
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
