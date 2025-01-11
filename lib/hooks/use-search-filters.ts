"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SearchFilters } from '@/lib/types/filters';

interface SearchFiltersStore {
  filters: SearchFilters;
  setServices: (services: string[]) => void;
  setPriceRanges: (priceRanges: string[]) => void;
  setRating: (rating: string | null) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

const initialFilters: SearchFilters = {
  services: [],
  priceRanges: [],
  rating: null,
  searchQuery: '',
};

export const useSearchFilters = create<SearchFiltersStore>()(
  persist(
    (set) => ({
      filters: initialFilters,
      setServices: (services) => 
        set((state) => ({ filters: { ...state.filters, services } })),
      setPriceRanges: (priceRanges) =>
        set((state) => ({ filters: { ...state.filters, priceRanges } })),
      setRating: (rating) =>
        set((state) => ({ filters: { ...state.filters, rating } })),
      setSearchQuery: (searchQuery) =>
        set((state) => ({ filters: { ...state.filters, searchQuery } })),
      resetFilters: () => set({ filters: initialFilters }),
    }),
    {
      name: 'search-filters',
      version: 1,
    }
  )
);