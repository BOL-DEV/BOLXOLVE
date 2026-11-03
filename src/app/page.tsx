import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050915] text-white">
      {/* Official Refined Navigation */}
      <Navbar />

      {/* Official Hero Section */}
      <main className="grow flex flex-col">
        <Hero />
      </main>
    </div>
  );
}
