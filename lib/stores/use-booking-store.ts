"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookingStore {
  selectedServices: string[];
  selectedProducts: string[];
  selectedBarber: string | null;
  toggleService: (serviceId: string) => void;
  toggleProduct: (productId: string) => void;
  setSelectedBarber: (barberId: string) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
      selectedServices: [],
      selectedProducts: [],
      selectedBarber: null,
      toggleService: (serviceId) =>
        set((state) => ({
          selectedServices: state.selectedServices.includes(serviceId)
            ? state.selectedServices.filter((id) => id !== serviceId)
            : [...state.selectedServices, serviceId],
        })),
      toggleProduct: (productId) =>
        set((state) => ({
          selectedProducts: state.selectedProducts.includes(productId)
            ? state.selectedProducts.filter((id) => id !== productId)
            : [...state.selectedProducts, productId],
        })),
      setSelectedBarber: (barberId) =>
        set({ selectedBarber: barberId }),
      reset: () =>
        set({
          selectedServices: [],
          selectedProducts: [],
          selectedBarber: null,
        }),
    }),
    {
      name: "booking-store",
    }
  )
);