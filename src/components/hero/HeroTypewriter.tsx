"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const PHRASES = [
  "powerful digital solutions.",
  "custom business software.",
  "automated digital workflows.",
  "intelligent web platforms.",
];

interface HeroTypewriterProps {
  className?: string;
}

export const HeroTypewriter: React.FC<HeroTypewriterProps> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(PHRASES[0]);
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];

    // If user is hovering/paused, hold current state
    if (isPaused) return;

    // Typing speed: ~70ms per character
    // Deleting speed: ~35ms per character (brisk backspace)
    // Pause at completed word: 3000ms
    // Pause before typing next word: 350ms
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      // Completed phrase — pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && displayText === "") {
      // Finished deleting — switch to next phrase and pause briefly
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      timer = setTimeout(() => {}, 350);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? 35 : 70;
      timer = setTimeout(() => {
        const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1;
        setDisplayText(currentPhrase.slice(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, isPaused, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {PHRASES[0]}
      </span>
    );
  }

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full primary phrase for SEO crawlers and screen readers */}
      <span className="sr-only">{PHRASES[0]}</span>
      <span aria-hidden="true" className="text-[#BAF247] font-bold">
        {displayText || "\u00A0"}
      </span>
      {/* Sleek Electric Lime Blinking Terminal Cursor */}
      <span
        aria-hidden="true"
        className="inline-block w-[3px] sm:w-[4px] h-[0.85em] ml-1 sm:ml-1.5 bg-[#BAF247] align-baseline animate-pulse shadow-[0_0_12px_rgba(186,242,71,0.85)]"
      />
    </span>
  );
};

export default HeroTypewriter;

