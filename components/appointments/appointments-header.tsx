"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Filter } from "lucide-react";
import { DatePicker } from "@/components/appointments/date-picker";
import { BarberFilter } from "@/components/appointments/barber-filter";
import { NewAppointmentDialog } from "./new-appointment-dialog";

export function AppointmentsHeader() {
  return (
    <div className="space-y-4 md:space-y-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Agendamentos</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Gerencie os agendamentos da sua barbearia
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <DatePicker />
            <BarberFilter />
          </div>
          <NewAppointmentDialog />
        </div>
      </div>
    </div>
  );
}