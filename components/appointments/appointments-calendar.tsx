"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function AppointmentsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="p-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        components={{
          DayContent: (props) => (
            <div className="relative">
              {props.date.getDate()}
              {/* Example indicator for days with appointments */}
              {[5, 12, 19, 25].includes(props.date.getDate()) && (
                <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </div>
          ),
        }}
      />
    </Card>
  );
}