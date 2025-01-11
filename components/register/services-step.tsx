"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
}

interface ServicesStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function ServicesStep({ onNext, onBack }: ServicesStepProps) {
  const [services, setServices] = useState<Service[]>([
    { id: "1", name: "", price: "", duration: "" },
  ]);

  const addService = () => {
    setServices([
      ...services,
      { id: Math.random().toString(), name: "", price: "", duration: "" },
    ]);
  };

  const removeService = (id: string) => {
    if (services.length > 1) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="grid gap-4 p-4 border rounded-lg">
            <div>
              <Label>Nome do Serviço</Label>
              <Input placeholder="Ex: Corte Masculino" className="mt-2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Preço (R$)</Label>
                <Input type="number" placeholder="0,00" className="mt-2" />
              </div>
              <div>
                <Label>Duração (min)</Label>
                <Input type="number" placeholder="30" className="mt-2" />
              </div>
            </div>
            {services.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive"
                onClick={() => removeService(service.id)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remover Serviço
              </Button>
            )}
          </div>
        ))}

        <Button variant="outline" className="w-full" onClick={addService}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Serviço
        </Button>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>Voltar</Button>
        <Button onClick={onNext}>Próximo</Button>
      </div>
    </div>
  );
}