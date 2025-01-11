export type ExpenseRecurrence = 
  | "daily" 
  | "weekly" 
  | "monthly" 
  | "yearly" 
  | "custom" 
  | "none";

export interface Expense {
  id: string;
  name: string;
  category: string;
  amount: number;
  recurrence: ExpenseRecurrence;
  dueDate?: string;
  customRecurrence?: {
    interval: number;
    unit: "days" | "weeks" | "months" | "years";
  };
}

export const EXPENSE_CATEGORIES = [
  { value: "instalacoes", label: "Instalações" },
  { value: "utilidades", label: "Utilidades" },
  { value: "salarios", label: "Salários" },
  { value: "marketing", label: "Marketing" },
  { value: "produtos", label: "Produtos" },
  { value: "outros", label: "Outros" },
] as const;