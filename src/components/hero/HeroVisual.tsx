"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse interaction values for dynamic 3D perspective tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Responsive spring physics for fluid cursor-following response
  const springConfig = { damping: 24, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Noticeable, tactile tilt angles (-8deg to +8deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  // Track cursor across the entire window so the logo dynamically reacts from anywhere on screen
  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      const xPct = e.clientX / window.innerWidth - 0.5;
      const yPct = e.clientY / window.innerHeight - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleWindowMouseMove);
  }, [shouldReduceMotion, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] aspect-[4/5] sm:aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
      aria-hidden="true"
    >
      {/* Living Atmospheric Lime Radiance (Breathes synchronously with floating motion) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [0.92, 1.15, 0.92],
                opacity: [0.45, 0.8, 0.45],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 5.5,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[75%] h-[75%] rounded-full bg-gradient-to-tr from-[#BAF247]/10 via-[#BAF247]/3 to-transparent blur-3xl" />
      </motion.div>

      {/* Floating 3D Stage with the Official BOLXOLVE Brand Symbol */}
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
                y: [-14, 14, -14],
                rotateZ: [-1.8, 1.8, -1.8],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 5.5,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="relative z-10 flex items-center justify-center cursor-pointer"
      >
        <div className="relative w-[210px] h-[273px] sm:w-[280px] sm:h-[364px] md:w-[330px] md:h-[428px] lg:w-[360px] lg:h-[467px] xl:w-[410px] xl:h-[532px] transition-transform duration-200">
          {/* Master Resolution Transparent Brand Symbol */}
          <Image
            src="/brand/logo_symbol_hd.png"
            alt="BOLXOLVE Official Brandmark"
            width={1150}
            height={1493}
            priority
            quality={100}
            className="w-full h-full object-contain select-none pointer-events-none filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
          />

          {/* Periodic Specular Light Gleam passing across the brandmark */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                x: ["-140%", "180%"],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 3.5,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="absolute inset-0 pointer-events-none overflow-hidden [mask-image:url(/brand/logo_symbol_hd.png)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url(/brand/logo_symbol_hd.png)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-25" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
