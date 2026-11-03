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
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

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
      className="relative w-full max-w-[540px] lg:max-w-[620px] mx-auto aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* Background Ambient Glow (Carefully controlled - max 8% opacity) */}
      <div className="absolute inset-0 bg-lime-glow-subtle pointer-events-none rounded-full blur-3xl opacity-75" />

      {/* Outer Rotating Calibration Compass Ring */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
        className="absolute w-[88%] h-[88%] rounded-full border border-[#1E2638]/70 pointer-events-none"
      >
        {/* Cardinal tick marks */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#1E2638]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-3 bg-[#1E2638]" />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-1.5 bg-[#1E2638]" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-1.5 bg-[#1E2638]" />

        {/* Degree coordinate marks */}
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#71717A]/60 tracking-wider">
          000°
        </span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-[#71717A]/60 tracking-wider">
          090°
        </span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#71717A]/60 tracking-wider">
          180°
        </span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-[#71717A]/60 tracking-wider">
          270°
        </span>
      </motion.div>

      {/* Secondary Inner Concentric Calibration Arc */}
      <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-[#1E2638]/60 pointer-events-none" />

      {/* Isometric 45-degree guideline planes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[94%] h-px bg-gradient-to-r from-transparent via-[#1E2638]/60 to-transparent rotate-45" />
        <div className="w-[94%] h-px bg-gradient-to-r from-transparent via-[#1E2638]/60 to-transparent -rotate-45" />
      </div>

      {/* 3D Motion Plate with the Interlocking Mark */}
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
        className="relative z-10 w-[78%] h-[78%] flex items-center justify-center"
      >
        {/* Hairline Technical Carrier Card */}
        <div className="absolute inset-0 rounded-2xl bg-[#101522]/60 backdrop-blur-[2px] border border-[#1E2638] shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Subtle Hairline Grid inside carrier */}
          <div className="absolute inset-0 bg-tech-grid opacity-35" />

          {/* Crosshair markers in corners */}
          <span className="absolute top-3 left-3 text-[#71717A] text-[10px] font-mono select-none">+</span>
          <span className="absolute top-3 right-3 text-[#71717A] text-[10px] font-mono select-none">+</span>
          <span className="absolute bottom-3 left-3 text-[#71717A] text-[10px] font-mono select-none">+</span>
          <span className="absolute bottom-3 right-3 text-[#71717A] text-[10px] font-mono select-none">+</span>

          {/* Top Left Telemetry Readout */}
          <div className="absolute top-3 left-7 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#A1A1AA] uppercase">
              SYS // KINETIC CORE
            </span>
          </div>

          {/* Bottom Right Coordinate Readout */}
          <div className="absolute bottom-3 right-7">
            <span className="text-[10px] font-mono tracking-wider text-[#71717A]">
              BOLXOLVE // 51.5074° N
            </span>
          </div>
        </div>

        {/* Central Interlocking BOLXOLVE Symbol Assembly */}
        <div className="relative z-20 w-48 h-64 sm:w-56 sm:h-72 flex items-center justify-center">
          {/* Subtle Under-Glow behind the Mark */}
          <div className="absolute w-44 h-44 rounded-full bg-[#BAF247]/10 blur-xl pointer-events-none" />

          {/* The Actual Official BOLXOLVE High-Resolution Transparent Mark */}
          <Image
            src="/brand/logo_icon_hi_res.png"
            alt="BOLXOLVE Kinetic Geometric Mark"
            width={234}
            height={307}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_4px_24px_rgba(186,242,71,0.22)] select-none pointer-events-none"
          />

          {/* Dynamic Laser Intersect Line (Shear Axis) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.3, 0.8, 0.3],
                    scaleX: [0.95, 1.05, 0.95],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="absolute top-[48%] left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#BAF247]/80 to-transparent pointer-events-none"
          />
        </div>

        {/* Floating Telemetry Annotation Badge 1 (Top Right) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-3, 3, -3],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded bg-[#101522] border border-[#1E2638] shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center space-x-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
          <div className="flex flex-col">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#BAF247] font-semibold">
              DUAL-PATH INTERLOCK
            </span>
            <span className="text-[8px] font-mono text-[#71717A]">
              PRECISION GEOMETRY
            </span>
          </div>
        </motion.div>

        {/* Floating Telemetry Annotation Badge 2 (Bottom Left) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [3, -3, 3],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-3 -left-2 sm:-left-4 px-3 py-1.5 rounded bg-[#101522] border border-[#1E2638] shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center space-x-2"
        >
          <div className="flex flex-col">
            <span className="text-[9px] font-mono uppercase tracking-wider text-white font-medium">
              SOLVE VECTOR
            </span>
            <span className="text-[8px] font-mono text-[#BAF247]">
              ACTIVE // 100% NOMINAL
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
