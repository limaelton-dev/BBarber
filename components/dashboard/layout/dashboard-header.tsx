"use client";

import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import { HeaderControls } from "@/components/dashboard/header/header-controls";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b flex items-center justify-between px-4 md:px-6 bg-card">
      <div className="flex items-center gap-4">
        <MobileNav />
      </div>
      <div className="md:hidden">
        <h1 className="text-lg font-semibold">Business Barber</h1>
      </div>
      <HeaderControls />
    </header>
  );
}