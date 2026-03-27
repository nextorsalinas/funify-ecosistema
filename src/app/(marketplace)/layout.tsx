import React from "react";
import Header from "@/components/layout/Header";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[116px] md:pt-[116px]">
      <Header />
      {children}
    </div>
  );
}
