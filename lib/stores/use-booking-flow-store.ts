"use client";

import { create } from "zustand";
import { mockServices, mockProducts, mockProfessionals } from "@/lib/utils/mock-data";

export type BookingStep = "services" | "products" | "professional" | "datetime" | "confirmation";

interface BookingFlowStore {
  step: BookingStep;
  selectedServices: string[];
  selectedProducts: string[];
  selectedProfessional: string | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  setStep: (step: BookingStep) => void;
  setSelectedServices: (services: string[]) => void;
  setSelectedProducts: (products: string[]) => void;
  setSelectedProfessional: (professionalId: string) => void;
  setSelectedDate: (date: Date) => void;
  setSelectedTime: (time: string) => void;
  reset: () => void;
  canProceed: () => boolean;
  getSelectedServicesWithDetails: () => Array<{ id: string; name: string; price: number }>;
  getSelectedProductsWithDetails: () => Array<{ id: string; name: string; price: number }>;
  getSelectedProfessionalDetails: () => { name: string } | null;
  getTotalPrice: () => number;
  getTotalDuration: () => number;
}

export const useBookingFlowStore = create<BookingFlowStore>((set, get) => ({
  step: "services",
  selectedServices: [],
  selectedProducts: [],
  selectedProfessional: null,
  selectedDate: null,
  selectedTime: null,

  setStep: (step) => set({ step }),
  setSelectedServices: (services) => set({ selectedServices: services }),
  setSelectedProducts: (products) => set({ selectedProducts: products }),
  setSelectedProfessional: (professionalId) => set({ selectedProfessional: professionalId }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),

  reset: () => set({
    step: "services",
    selectedServices: [],
    selectedProducts: [],
    selectedProfessional: null,
    selectedDate: null,
    selectedTime: null,
  }),

  canProceed: () => {
    const state = get();
    switch (state.step) {
      case "services":
        return state.selectedServices.length > 0;
      case "products":
        return true; // Products are optional
      case "professional":
        return !!state.selectedProfessional;
      case "datetime":
        return !!state.selectedDate && !!state.selectedTime;
      default:
        return false;
    }
  },

  getSelectedServicesWithDetails: () => {
    const state = get();
    return state.selectedServices.map(id => {
      const service = mockServices.find(s => s.id === id);
      return {
        id,
        name: service?.name || "",
        price: service?.price || 0
      };
    });
  },

  getSelectedProductsWithDetails: () => {
    const state = get();
    return state.selectedProducts.map(id => {
      const product = mockProducts.find(p => p.id === id);
      return {
        id,
        name: product?.name || "",
        price: product?.price || 0
      };
    });
  },

  getSelectedProfessionalDetails: () => {
    const state = get();
    const professional = mockProfessionals.find(p => p.id === state.selectedProfessional);
    return professional ? { name: professional.name } : null;
  },

  getTotalPrice: () => {
    const state = get();
    const servicesTotal = state.getSelectedServicesWithDetails()
      .reduce((sum, service) => sum + service.price, 0);
    const productsTotal = state.getSelectedProductsWithDetails()
      .reduce((sum, product) => sum + product.price, 0);
    return servicesTotal + productsTotal;
  },

  getTotalDuration: () => {
    const state = get();
    return state.selectedServices.reduce((total, id) => {
      const service = mockServices.find(s => s.id === id);
      return total + (service?.duration || 0);
    }, 0);
  },
}));