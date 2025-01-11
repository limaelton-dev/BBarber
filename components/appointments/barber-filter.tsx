"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppointments } from "@/hooks/use-appointments";

export function BarberFilter() {
  const { selectedBarber, setSelectedBarber, barbers } = useAppointments();

  return (
    <Select value={selectedBarber} onValueChange={setSelectedBarber}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Filtrar por barbeiro" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos os barbeiros</SelectItem>
        {barbers.map((barber) => (
          <SelectItem key={barber.id} value={barber.id}>
            {barber.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}