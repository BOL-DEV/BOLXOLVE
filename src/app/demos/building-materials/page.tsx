import { Metadata } from "next";
import { DemoProvider } from "@/demos/building-materials/DemoContext";
import BuildingMaterialsApp from "@/demos/building-materials/BuildingMaterialsApp";

export const metadata: Metadata = {
  title: "Building Materials Distribution System — Interactive Concept Demo",
  description:
    "Interactive demonstration of custom business management software for multi-product building materials distribution, inventory control, and transaction workflows. Built by BOLXOLVE LTD.",
};

export default function BuildingMaterialsDemoPage() {
  return (
    <DemoProvider>
      <BuildingMaterialsApp />
    </DemoProvider>
  );
}

