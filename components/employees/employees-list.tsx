"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { EmployeeDialog } from "./employee-dialog";
import { Employee } from "@/lib/types/employees";

const employees: Employee[] = [
  {
    id: "1",
    name: "Carlos Silva",
    email: "carlos.silva@example.com",
    phone: "(11) 99999-9999",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    status: "active",
    commission: 30,
    salary: 2000,
  },
  // ... outros funcionários
];

const statusMap = {
  active: {
    label: "Ativo",
    variant: "success" as const,
  },
  inactive: {
    label: "Inativo",
    variant: "destructive" as const,
  },
  vacation: {
    label: "Férias",
    variant: "warning" as const,
  },
};

export function EmployeesList() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"create" | "edit">("create");

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setDialogMode("edit");
    setDialogOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Equipe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0 p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                    <AvatarImage src={employee.image} />
                    <AvatarFallback>
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm sm:text-base font-medium leading-none">
                      {employee.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {employee.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                  <Badge
                    variant={
                      statusMap[employee.status as keyof typeof statusMap]
                        .variant
                    }
                    className="sm:mr-4"
                  >
                    {statusMap[employee.status as keyof typeof statusMap].label}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                      >
                        <span className="sr-only">Abrir menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleEdit(employee)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <EmployeeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        employee={selectedEmployee}
        mode={dialogMode}
      />
    </>
  );
}