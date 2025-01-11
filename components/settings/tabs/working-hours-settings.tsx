"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const weekDays = [
  { id: 0, name: "Domingo", shortName: "Dom" },
  { id: 1, name: "Segunda-feira", shortName: "Seg" },
  { id: 2, name: "Terça-feira", shortName: "Ter" },
  { id: 3, name: "Quarta-feira", shortName: "Qua" },
  { id: 4, name: "Quinta-feira", shortName: "Qui" },
  { id: 5, name: "Sexta-feira", shortName: "Sex" },
  { id: 6, name: "Sábado", shortName: "Sáb" },
];

const hours = Array.from({ length: 15 }, (_, i) => {
  const hour = i + 7; // Start from 7 AM
  return `${hour.toString().padStart(2, "0")}:00`;
});

export function WorkingHoursSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Horário de Funcionamento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {weekDays.map((day) => (
          <div
            key={day.id}
            className="flex flex-col gap-3 border rounded-lg p-3 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center justify-between md:w-1/3">
              <div className="flex items-center gap-3">
                <Switch id={`day-${day.id}`} />
                <Label htmlFor={`day-${day.id}`}>
                  <span className="hidden sm:inline">{day.name}</span>
                  <span className="sm:hidden">{day.shortName}</span>
                </Label>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center md:w-2/3">
              <Select defaultValue="09:00">
                <SelectTrigger className="flex-1 min-w-[100px]">
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
              <span className="text-sm text-muted-foreground text-center md:text-left px-1">
                até
              </span>
              <Select defaultValue="18:00">
                <SelectTrigger className="flex-1 min-w-[100px]">
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
      </CardContent>
    </Card>
  );
}
