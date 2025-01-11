"use client";

import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/lib/stores/use-sidebar-store";
import { LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SidebarFooter() {
  const { isCollapsed } = useSidebarStore();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout clicked");
  };

  return (
    <div className="border-t p-4">
      <div className="flex flex-col gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="justify-start"
        >
          {theme === "light" ? (
            <>
              <Moon className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">Modo Escuro</span>}
            </>
          ) : (
            <>
              <Sun className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">Modo Claro</span>}
            </>
          )}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="justify-start text-destructive"
        >
          <LogOut className="h-4 w-4" />
          {!isCollapsed && <span className="ml-2">Sair</span>}
        </Button>
      </div>
    </div>
  );
}