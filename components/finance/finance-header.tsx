"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function FinanceHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Financeiro</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Gerencie as finanças da sua barbearia
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Filtrar Período
        </Button>
        <Button 
          size="sm"
          asChild
          className="w-full sm:w-auto"
        >
          <Link href="/dashboard/finance/expenses">
            Despesas
          </Link>
        </Button>
      </div>
    </div>
  );
}