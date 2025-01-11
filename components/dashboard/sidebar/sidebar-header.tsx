"use client";

import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/lib/stores/use-sidebar-store";
import { ChevronLeft, ChevronRight, Scissors } from "lucide-react";
import Image from "next/image";

interface SidebarHeaderProps {
  barbershopLogo?: string;
}

export function SidebarHeader({ barbershopLogo }: SidebarHeaderProps) {
  const { isCollapsed, toggleCollapse } = useSidebarStore();

  return (
    <div className="flex h-16 items-center justify-between border-b px-4">
      <div className="flex items-center space-x-3">
        {barbershopLogo ? (
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={barbershopLogo}
              alt="Logo da barbearia"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <Scissors className="h-6 w-6" />
        )}
        {!isCollapsed && <span className="text-lg font-semibold">Business Barber</span>}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleCollapse}
        className="h-8 w-8 p-0"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}