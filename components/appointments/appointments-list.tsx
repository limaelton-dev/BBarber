"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const appointments = [
  {
    id: "1",
    client: {
      name: "João Silva",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=João",
    },
    service: "Corte + Barba",
    time: "14:30",
    status: "pending",
  },
  {
    id: "2",
    client: {
      name: "Maria Santos",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    service: "Corte Feminino",
    time: "15:00",
    status: "confirmed",
  },
  {
    id: "3",
    client: {
      name: "Pedro Costa",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    },
    service: "Barba",
    time: "15:30",
    status: "completed",
  },
];

const statusMap = {
  pending: {
    label: "Pendente",
    variant: "warning" as const,
  },
  confirmed: {
    label: "Confirmado",
    variant: "default" as const,
  },
  completed: {
    label: "Concluído",
    variant: "success" as const,
  },
  cancelled: {
    label: "Cancelado",
    variant: "destructive" as const,
  },
};

export function AppointmentsList() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Hoje</h3>
        <Button variant="ghost" size="sm">
          Ver todos
        </Button>
      </div>
      <ScrollArea className="h-[600px]">
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex flex-col space-y-2 rounded-lg border p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={appointment.client.image} />
                    <AvatarFallback>
                      {appointment.client.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">
                      {appointment.client.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {appointment.service}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={statusMap[appointment.status as keyof typeof statusMap].variant}
                >
                  {statusMap[appointment.status as keyof typeof statusMap].label}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {appointment.time}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">
                    Editar
                  </Button>
                  <Button size="sm" variant="ghost" className="text-destructive">
                    Cancelar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}