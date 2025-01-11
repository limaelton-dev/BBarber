"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WorkingHoursStepProps {
  onNext: () => void;
  onBack: () => void;
}

const weekDays = [
  { id: 0, name: "Domingo" },
  { id: 1, name: "Segunda-feira" },
  { id: 2, name: "Terça-feira" },
  { id: 3, name: "Quarta-feira" },
  { id: 4, name: "Quinta-feira" },
  { id: 5, name: "Sexta-feira" },
  { id: 6, name: "Sábado" },
];

const hours = Array.from({ length: 15 }, (_, i) => {
  const hour = i + 7; // Start from 7 AM
  return `${hour.toString().padStart(2, "0")}:00`;
});

export function WorkingHoursStep({ onNext, onBack }: WorkingHoursStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {weekDays.map((day) => (
          <div key={day.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Switch id={`day-${day.id}`} />
              <Label htmlFor={`day-${day.id}`}>{day.name}</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Select defaultValue="09:00">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Início" />
                </SelectTrigger>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour} value={hour}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span>até</span>
              <Select defaultValue="18:00">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Fim" />
                </SelectTrigger>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour} value={hour}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>Voltar</Button>
        <Button onClick={onNext}>Próximo</Button>
      </div>
    </div>
  );
}