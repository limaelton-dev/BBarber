"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Plus, Minus } from "lucide-react";
import { useBookingStore } from "@/lib/stores/use-booking-store";
import { Service } from "@/lib/types/barbershop";

interface ServicesListProps {
  services: Service[];
}

export function ServicesList({ services }: ServicesListProps) {
  const { selectedServices, toggleService } = useBookingStore();

  return (
    <div className="space-y-4">
      {services.map((service) => {
        const isSelected = selectedServices.includes(service.id);
        
        return (
          <Card key={service.id} className="p-4">
            <div className="flex items-center justify-between">
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
                <Button 
                  size="sm" 
                  className="mt-2"
                  onClick={() => toggleService(service.id)}
                  title={isSelected ? "Remover serviço" : "Adicionar serviço"}
                >
                  {isSelected ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}