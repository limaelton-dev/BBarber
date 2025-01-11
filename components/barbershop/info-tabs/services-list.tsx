"use client";

import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Service } from "@/lib/types/barbershop";
import { formatCurrency } from "@/lib/utils/format";

interface ServicesListProps {
  services: Service[];
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <Card key={service.id} className="p-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{service.name}</h3>
              <span className="font-medium">
                {formatCurrency(service.price)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {service.duration} minutos
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}