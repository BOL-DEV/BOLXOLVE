import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import SelectedWork from "@/components/work/SelectedWork";

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

        {/* Phase 4: Selected Work / Portfolio Section */}
        <SelectedWork />
      </main>
    </div>
  );
}
