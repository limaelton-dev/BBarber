"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const appointments = [
  {
    id: "1",
    client: { name: "João S.", initials: "JS" },
    service: "Corte + Barba",
    time: "14:30",
    price: "R$ 75,00",
    barber: "Carlos Silva",
    status: "scheduled",
  },
  // Add more appointments here...
].map((apt, index) => ({
  ...apt,
  status: index === 0 ? "next" : "scheduled",
}));

export function RecentAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximos Agendamentos</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className={cn(
                  "flex items-center justify-between rounded-lg border p-4 transition-colors",
                  appointment.status === "next" && "bg-primary/5 border-primary"
                )}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border-2">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {appointment.client.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{appointment.client.name}</p>
                      {appointment.status === "next" && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          Próximo
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {appointment.service}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      com {appointment.barber}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{appointment.time}</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}