"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Plus } from "lucide-react";
import Link from "next/link";

interface ExpensesHeaderProps {
  onNewExpense: () => void;
}

export function ExpensesHeader({ onNewExpense }: ExpensesHeaderProps) {
  return (
    <div className="space-y-4">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="mb-2"
      >
        <Link href="/dashboard/finance" className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Link>
      </Button>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Despesas</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Gerencie as despesas da sua barbearia
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 sm:flex-initial"
          >
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button 
            size="sm" 
            onClick={onNewExpense}
            className="flex-1 sm:flex-initial"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Despesa
          </Button>
        </div>
      </div>
    </div>
  );
}