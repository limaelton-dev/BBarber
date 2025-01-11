"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Appointment } from "@/lib/types/appointments";
import { formatCurrency } from "@/lib/utils/format";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils/string";

interface TimeSlotProps {
  time: string;
  appointments: Appointment[];
}

export function TimeSlot({ time, appointments }: TimeSlotProps) {
  const hasAppointments = appointments.length > 0;

  return (
    <div
      className={cn(
        "p-3 md:p-4 rounded-lg border",
        hasAppointments && "bg-secondary/50"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm md:text-base">{time}</span>
        {hasAppointments && (
          <Badge variant="secondary" className="text-xs md:text-sm">
            {appointments.length} agendamento{appointments.length > 1 && "s"}
          </Badge>
        )}
      </div>
      
      {hasAppointments && (
        <div className="space-y-2 md:space-y-3">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-2 md:p-3 rounded-md bg-background"
            >
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <Avatar className="h-8 w-8 md:h-9 md:w-9 border-2 flex-shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {getInitials(appointment.client.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="font-medium text-sm md:text-base truncate">
                    {appointment.client.name}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">
                    com {appointment.barber.name}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {appointment.services.map((service) => (
                      <Badge
                        key={service.id}
                        variant="outline"
                        className="text-[10px] md:text-xs"
                      >
                        {service.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <p className="font-medium text-sm md:text-base">
                  {formatCurrency(
                    appointment.services.reduce(
                      (total, service) => total + service.price,
                      0
                    )
                  )}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {appointment.duration}min
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}