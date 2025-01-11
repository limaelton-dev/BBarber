"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { CalendarHeader } from "./calendar-header";
import { CalendarDay } from "./calendar-day";
import { useAppointmentCalendar } from "@/lib/hooks/use-appointment-calendar";

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { appointmentsByDate } = useAppointmentCalendar();

  return (
    <Card className="p-4">
      <CalendarHeader />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        components={{
          DayContent: (props) => (
            <CalendarDay
              {...props}
              appointments={appointmentsByDate[props.date.toISOString().split('T')[0]] || []}
            />
          ),
        }}
      />
    </Card>
  );
}