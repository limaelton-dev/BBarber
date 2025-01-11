"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChart3,
  Calendar,
  Home,
  Package,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";

const sidebarItems = [
  { icon: Home, label: "Início", href: "/dashboard" },
  { icon: Calendar, label: "Agenda", href: "/dashboard/appointments" },
  { icon: Users, label: "Funcionários", href: "/dashboard/employees" },
  { icon: Package, label: "Produtos", href: "/dashboard/products" },
  { icon: BarChart3, label: "Financeiro", href: "/dashboard/finance" },
  { icon: Settings, label: "Configurações", href: "/dashboard/settings" },
];

interface DashboardSidebarProps {
  isCollapsed: boolean;
}

export function DashboardSidebar({ isCollapsed }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col fixed inset-y-0 z-50 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col flex-grow border-r bg-card">
        <SidebarHeader barbershopLogo="/path-to-logo.jpg" />
        <ScrollArea className="flex-1">
          <nav className="flex-1 space-y-1 p-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-2",
                      isActive && "bg-muted"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {!isCollapsed && item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}