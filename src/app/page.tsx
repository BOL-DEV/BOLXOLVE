import React from "react";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import SelectedWork from "@/components/work/SelectedWork";
import Technology from "@/components/technology/Technology";
import About from "@/components/about/About";

export default function Home() {
  return (
    <main className="grow flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Services & Capabilities Section */}
      <Services />

      {/* Selected Solutions Section */}
      <SelectedWork />

      {/* Technology & Engineering / How We Work Section */}
      <Technology />

      {/* About / Company Section */}
      <About />
    </main>
  );
}
