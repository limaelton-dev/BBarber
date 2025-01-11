"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExpensesFilters } from "./expenses-filters";
import { ExpensesList } from "./expenses-list";
import { ExpenseForm } from "./expense-form";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { useState } from "react";

interface ExpensesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExpensesDialog({ open, onOpenChange }: ExpensesDialogProps) {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Despesas</DialogTitle>
        </DialogHeader>

        {showNewExpenseForm ? (
          <ExpenseForm onCancel={() => setShowNewExpenseForm(false)} />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <ExpensesFilters />
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
                <Button size="sm" onClick={() => setShowNewExpenseForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Despesa
                </Button>
              </div>
            </div>
            <ExpensesList />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}