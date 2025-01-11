"use client";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/lib/stores/use-sidebar-store";
import { DashboardHeader } from "@/components/dashboard/layout/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/layout/dashboard-sidebar";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebarStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar isCollapsed={isCollapsed} />
      <div
        className={cn(
          "flex-1 transition-all duration-300",
          isCollapsed ? "md:pl-20" : "md:pl-64"
        )}
      >
        <DashboardHeader />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}