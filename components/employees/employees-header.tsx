"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { EmployeeDialog } from "./employee-dialog";

export function EmployeesHeader() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Funcionários</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Gerencie a equipe da sua barbearia
          </p>
        </div>
        <div>
          <Button
            onClick={() => setDialogOpen(true)}
            size="sm"
            className="w-full sm:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Funcionário
          </Button>
        </div>
      </div>

      <EmployeeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode="create"
      />
    </>
  );
}