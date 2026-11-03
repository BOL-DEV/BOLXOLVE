import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050915] text-white px-6">
      <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#BAF247] mb-4">
        404 — Page Not Found
      </span>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
        Lost in digital space
      </h1>
      <p className="text-sm md:text-base text-[#A1A1AA] max-w-md text-center mb-8">
        The page you are looking for does not exist or has been moved to another coordinate.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-mono font-semibold bg-[#BAF247] text-[#050915] hover:bg-[#c9f668] transition-colors rounded-sm"
      >
        Return Home
      </Link>
    </div>
  );
}

