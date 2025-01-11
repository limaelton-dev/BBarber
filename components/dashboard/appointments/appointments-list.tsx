"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { AppointmentCard } from "./appointment-card";
import { useAppointments } from "@/lib/hooks/use-appointments";

export function AppointmentsList() {
  const { appointments, handleEdit, handleCancel } = useAppointments();

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
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onEdit={handleEdit}
              onCancel={handleCancel}
            />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}