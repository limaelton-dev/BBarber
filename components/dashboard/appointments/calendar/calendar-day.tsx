"use client";

import { DayContentProps } from "react-day-picker";
import { Appointment } from "@/lib/types/appointments";

interface CalendarDayProps extends DayContentProps {
  appointments: Appointment[];
}

export function CalendarDay({ date, appointments }: CalendarDayProps) {
  return (
    <div className="relative">
      {date.getDate()}
      {appointments.length > 0 && (
        <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
      )}
    </div>
  );
}