import React from "react";
import GridShowcase from "@/components/marketplace/GridShowcase";
import HeroBanner from "@/components/marketplace/HeroBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <HeroBanner />
      
      {/* Spacer for floating box */}
      <div className="h-48 md:h-32 w-full bg-white shrink-0"></div>
      
      <div className="bg-white flex-grow pb-24 z-10 relative">
        <GridShowcase />
      </div>
    </main>
  );
}
