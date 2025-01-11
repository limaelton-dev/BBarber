"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInfiniteAppointments } from "@/lib/hooks/use-infinite-appointments";
import { useInView } from "react-intersection-observer";
import { AppointmentCard } from "./appointment-card";
import { Loader2 } from "lucide-react";

interface InfiniteAppointmentsListProps {
  clientId: string;
}

export function InfiniteAppointmentsList({ clientId }: InfiniteAppointmentsListProps) {
  const { ref, inView } = useInView();
  const {
    items: appointments,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteAppointments(clientId);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onEdit={() => {}}
          onCancel={() => {}}
        />
      ))}

      {hasNextPage && (
        <div ref={ref} className="flex justify-center p-4">
          {isFetchingNextPage && (
            <Loader2 className="h-6 w-6 animate-spin" />
          )}
        </div>
      )}
    </div>
  );
}