import React from "react";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import SelectedWork from "@/components/work/SelectedWork";

export default function Home() {
  return (
    <main className="grow flex flex-col">
      {/* Phase 2: Hero Section */}
      <Hero />

      {/* Phase 3: Services & Capabilities Section */}
      <Services />

      {/* Phase 4: Selected Work / Portfolio Section */}
      <SelectedWork />
    </main>
  );
}
