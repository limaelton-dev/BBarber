"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Plus, Minus } from "lucide-react";
import { useBookingFlowStore } from "@/lib/stores/use-booking-flow-store";

const services = [
  {
    id: "1",
    name: "Corte Masculino",
    description: "Corte tradicional ou moderno com acabamento perfeito",
    price: 45.0,
    duration: 30,
  },
  {
    id: "2",
    name: "Barba",
    description: "Barba feita com navalha e produtos especiais",
    price: 35.0,
    duration: 30,
  },
  {
    id: "3",
    name: "Corte + Barba",
    description: "Combo completo de corte e barba",
    price: 75.0,
    duration: 60,
  },
  {
    id: "4",
    name: "Pigmentação",
    description: "Disfarce com pigmentação para barba ou cabelo",
    price: 50.0,
    duration: 45,
  },
];

export function ServicesStep() {
  const { selectedServices, setSelectedServices } = useBookingFlowStore();

  const toggleService = (serviceId: string) => {
    setSelectedServices(
      selectedServices.includes(serviceId)
        ? selectedServices.filter(id => id !== serviceId)
        : [...selectedServices, serviceId]
    );
  };

  return (
    <div className="space-y-4">
      {services.map((service) => (
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
                variant={selectedServices.includes(service.id) ? "default" : "outline"}
              >
                {selectedServices.includes(service.id) ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}