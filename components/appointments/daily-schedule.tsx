"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TimeSlot } from "./time-slot";
import { useAppointments } from "@/hooks/use-appointments";
import { generateTimeSlots } from "@/lib/utils/time";

export function DailySchedule() {
  const { selectedBarber, filteredAppointments } = useAppointments();
  const timeSlots = generateTimeSlots();

  return (
    <Card className="flex-1">
      <ScrollArea className="h-[calc(100vh-13rem)] md:h-[calc(100vh-11rem)]">
        <div className="p-2 md:p-4 space-y-2">
          {timeSlots.map((time) => (
            <TimeSlot
              key={time}
              time={time}
              appointments={filteredAppointments.filter(
                (apt) => apt.time === time &&
                  (selectedBarber === "all" || apt.barber.id === selectedBarber)
              )}
            />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}