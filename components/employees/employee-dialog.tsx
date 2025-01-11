"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EmployeeForm } from "./employee-form";
import { Employee } from "@/lib/types/employees";

interface EmployeeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employee?: Employee;
  mode: "create" | "edit";
}

export function EmployeeDialog({ open, onOpenChange, employee, mode }: EmployeeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Novo Funcionário" : "Editar Funcionário"}
          </DialogTitle>
        </DialogHeader>
        <EmployeeForm 
          employee={employee} 
          mode={mode} 
          onSuccess={() => onOpenChange(false)} 
        />
      </DialogContent>
    </Dialog>
  );
}