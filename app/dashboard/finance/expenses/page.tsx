"use client";

import { ExpensesHeader } from "@/components/finance/expenses/expenses-header";
import { ExpensesFilters } from "@/components/finance/expenses/expenses-filters";
import { ExpensesList } from "@/components/finance/expenses/expenses-list";
import { ExpenseModal } from "@/components/finance/expenses/expense-modal";
import { useState } from "react";

export default function ExpensesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <ExpensesHeader 
        onNewExpense={() => setIsModalOpen(true)} 
      />
      
      <div className="flex items-center justify-between">
        <ExpensesFilters />
      </div>
      
      <ExpensesList />

      <ExpenseModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSuccess={() => {
          // TODO: Implement refresh logic
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}