"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const appointments = [
  {
    id: "1",
    client: { name: "João S.", initials: "JS" },
    service: ["Corte", "Barba"],
    time: "14:30",
    price: "R$ 75,00",
    barber: "Carlos Silva",
    status: "next",
  },
  {
    id: "2",
    client: { name: "Maria S.", initials: "MS" },
    service: ["Corte Feminino"],
    time: "15:00",
    price: "R$ 85,00",
    barber: "Ana Santos",
    status: "scheduled",
  },
  // Add more appointments as needed
];

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">
          Próximos Agendamentos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[250px]">
          <div className="space-y-3">
            {appointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="border bg-card/50"
              >
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {appointment.client.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">
                            {appointment.client.name}
                          </p>
                          {appointment.status === "next" && (
                            <Badge variant="secondary" className="text-[10px]">
                              Próximo
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          com {appointment.barber}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{appointment.time}</p>
                      <p className="text-xs text-muted-foreground">
                        {appointment.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {appointment.service.map((service) => (
                      <Badge
                        key={service}
                        variant="outline"
                        className="text-[10px] bg-background"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}