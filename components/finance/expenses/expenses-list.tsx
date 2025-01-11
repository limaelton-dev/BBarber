"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Expense, EXPENSE_CATEGORIES } from "@/lib/types/expenses";
import { ExpenseModal } from "./expense-modal";

const mockExpenses: Expense[] = [
  {
    id: "1",
    name: "Aluguel",
    amount: 2500,
    dueDate: "2024-04-10",
    recurrence: "monthly",
    category: "instalacoes",
  },
  {
    id: "2",
    name: "Energia Elétrica",
    amount: 450,
    dueDate: "2024-04-15",
    recurrence: "monthly",
    category: "utilidades",
  },
];

export function ExpensesList() {
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);
  const [selectedExpense, setSelectedExpense] = useState<Expense>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (expense: Expense) => {
    setSelectedExpense(expense);
    setIsModalOpen(true);
  };

  const handleSuccess = () => {
    setExpenses(prevExpenses => {
      if (selectedExpense) {
        return prevExpenses.map(exp => 
          exp.id === selectedExpense.id ? selectedExpense : exp
        );
      }
      return prevExpenses;
    });
  };

  return (
    <>
      <div className="space-y-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex flex-col p-4 border rounded-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarFallback className="bg-primary/10">
                    {expense.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{expense.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {EXPENSE_CATEGORIES.find(c => c.value === expense.category)?.label}
                  </p>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleEdit(expense)}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Vencimento: {new Date(expense.dueDate).toLocaleDateString()}
                </p>
                <p className="font-medium text-lg">
                  R$ {expense.amount.toFixed(2)}
                </p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <ExpenseModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        expense={selectedExpense}
        onSuccess={handleSuccess}
      />
    </>
  );
}