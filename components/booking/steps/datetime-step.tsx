"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useBookingFlowStore } from "@/lib/stores/use-booking-flow-store";
import { ptBR } from "date-fns/locale";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
];

export function DateTimeStep() {
  const { selectedDate, selectedTime, setSelectedDate, setSelectedTime } = useBookingFlowStore();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Selecione uma data</h3>
        <Card className="md:max-w-sm mx-auto">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => setSelectedDate(date || new Date())}
            locale={ptBR}
            disabled={(date) =>
              date < new Date() || date < new Date("1900-01-01")
            }
            className="rounded-md"
          />
        </Card>
      </div>

      <div className="md:max-w-sm mx-auto">
        <h3 className="text-sm font-medium mb-2">Selecione um horário</h3>
        <Select value={selectedTime || ""} onValueChange={setSelectedTime}>
          <SelectTrigger>
            <SelectValue placeholder="Escolha o horário" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}