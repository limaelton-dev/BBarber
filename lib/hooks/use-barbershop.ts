"use client";

import { useQuery } from '@tanstack/react-query';
import { BarbershopService } from '@/lib/services/barbershop-service';
import { Database } from '@/lib/supabase/database.types';

type Barbershop = Database['public']['Tables']['barbershops']['Row'];

const barbershopService = new BarbershopService();

export function useBarbershops() {
  const {
    data: barbershops = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['barbershops'],
    queryFn: () => barbershopService.getBarbershops(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    barbershops,
    isLoading,
    error,
  };
}

export function useBarbershop(id: string) {
  const {
    data: barbershop,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['barbershop', id],
    queryFn: () => barbershopService.getBarbershopById(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    barbershop,
    isLoading,
    error,
  };
}