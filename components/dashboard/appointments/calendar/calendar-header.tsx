"use client";

import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";

export function CalendarHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Calendário</h3>
      <Button variant="outline" size="sm">
        <CalendarIcon className="h-4 w-4 mr-2" />
        Sincronizar
      </Button>
    </div>
  );
}