"use client";

import { useInfiniteList } from "./use-infinite-query";
import { AppointmentService } from "@/lib/services/appointment-service";

const appointmentService = new AppointmentService();

export function useInfiniteAppointments(clientId: string) {
  return useInfiniteList({
    queryKey: ["appointments", clientId],
    queryFn: async (page, pageSize) => {
      const start = (page - 1) * pageSize;
      const appointments = await appointmentService.getClientAppointments(clientId);
      return appointments.slice(start, start + pageSize);
    },
    pageSize: 5,
  });
}