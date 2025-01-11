"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Scissors } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

interface BarbershopServicesProps {
  services: Service[];
}

export function BarbershopServices({ services }: BarbershopServicesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Serviços</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="space-y-1">
              <h3 className="font-medium">{service.name}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {service.duration} minutos
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">R$ {service.price.toFixed(2)}</p>
              <Button size="sm" className="mt-2">
                <Scissors className="h-4 w-4 mr-2" />
                Agendar
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}