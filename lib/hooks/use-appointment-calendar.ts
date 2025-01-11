"use client";

import { useState, useEffect } from "react";
import { Appointment } from "@/lib/types/appointments";
import { mockAppointments } from "@/lib/data/mock-appointments";

export function useAppointmentCalendar() {
  const [appointmentsByDate, setAppointmentsByDate] = useState<Record<string, Appointment[]>>({});

  useEffect(() => {
    // Group appointments by date
    const grouped = mockAppointments.reduce((acc, appointment) => {
      const date = new Date().toISOString().split('T')[0]; // Using today for mock data
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(appointment);
      return acc;
    }, {} as Record<string, Appointment[]>);

    setAppointmentsByDate(grouped);
  }, []);

  return {
    appointmentsByDate,
  };
}