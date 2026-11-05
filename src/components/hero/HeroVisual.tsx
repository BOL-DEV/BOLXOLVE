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

  // Restrained, dignified tilt angles (-3deg to +3deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);

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
      className="relative w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] aspect-[4/5] sm:aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* Subtle, Soft Ambient Lime Lighting (Reduced Intensity) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-[#BAF247]/8 via-[#BAF247]/2 to-transparent blur-3xl opacity-60" />
      </div>

      {/* The Official BOLXOLVE Brand Symbol (Refined 20–25% Scale & Generous Negative Space) */}
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
                y: [-5, 5, -5],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 8.5,
          ease: "easeInOut",
        }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="relative w-[210px] h-[273px] sm:w-[280px] sm:h-[364px] md:w-[330px] md:h-[428px] lg:w-[360px] lg:h-[467px] xl:w-[410px] xl:h-[532px] transition-transform duration-200">
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
