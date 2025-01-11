"use client";

import { create } from "zustand";
import { Appointment, Barber } from "@/lib/types/appointments";
import { mockAppointments, mockBarbers } from "@/lib/data/mock-appointments";
import { startOfDay, isSameDay } from "date-fns";

interface AppointmentsStore {
  selectedDate: Date;
  setSelectedDate: (date: Date | undefined) => void;
  selectedBarber: string;
  setSelectedBarber: (barberId: string) => void;
  appointments: Appointment[];
  barbers: Barber[];
  filteredAppointments: Appointment[];
}

export const useAppointments = create<AppointmentsStore>((set, get) => ({
  selectedDate: new Date(),
  setSelectedDate: (date) => {
    const newDate = date || new Date();
    set({ 
      selectedDate: newDate,
      filteredAppointments: mockAppointments.filter(apt => 
        isSameDay(new Date(apt.date), newDate)
      )
    });
  },
  selectedBarber: "all",
  setSelectedBarber: (barberId) => {
    set({ 
      selectedBarber: barberId,
      filteredAppointments: get().appointments.filter(apt => 
        isSameDay(new Date(apt.date), get().selectedDate) &&
        (barberId === "all" || apt.barber.id === barberId)
      )
    });
  },
  appointments: mockAppointments,
  barbers: mockBarbers,
  filteredAppointments: mockAppointments.filter(apt => 
    isSameDay(new Date(apt.date), new Date())
  ),
}));