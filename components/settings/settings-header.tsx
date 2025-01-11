"use client";

import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export function SettingsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Configurações</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Gerencie as configurações da sua barbearia
        </p>
      </div>
      <div>
        <Button size="sm" className="w-full sm:w-auto">
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
}