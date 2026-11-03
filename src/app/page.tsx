import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050915] text-white">
      {/* Official Refined Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="grow flex flex-col">
        {/* Phase 2: Hero Section */}
        <Hero />

        {/* Phase 3: Services & Capabilities Section */}
        <Services />
      </main>
    </div>
  );
}
