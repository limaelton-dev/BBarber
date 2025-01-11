"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppointmentStatus } from "@/lib/types/appointments";

interface AppointmentCardProps {
  appointment: {
    id: string;
    client: {
      name: string;
      image: string;
    };
    service: string;
    time: string;
    status: AppointmentStatus;
  };
  onEdit: (id: string) => void;
  onCancel: (id: string) => void;
}

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

export function AppointmentCard({ appointment, onEdit, onCancel }: AppointmentCardProps) {
  return (
    <div className="flex flex-col space-y-2 rounded-lg border p-3">
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
          variant={statusMap[appointment.status].variant}
        >
          {statusMap[appointment.status].label}
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {appointment.time}
        </p>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="ghost"
            onClick={() => onEdit(appointment.id)}
          >
            Editar
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-destructive"
            onClick={() => onCancel(appointment.id)}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}