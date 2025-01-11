"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { BarbershopService } from "@/lib/services/barbershop-service";
import { ProductService } from "@/lib/services/product-service";
import { ServiceService } from "@/lib/services/service-service";

const barbershopService = new BarbershopService();
const productService = new ProductService();
const serviceService = new ServiceService();

export function usePrefetch() {
  const queryClient = useQueryClient();

  const prefetchBarbershop = useCallback(async (id: string) => {
    await queryClient.prefetchQuery({
      queryKey: ["barbershop", id],
      queryFn: () => barbershopService.getBarbershopById(id),
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }, [queryClient]);

  const prefetchProducts = useCallback(async (barbershopId: string) => {
    await queryClient.prefetchQuery({
      queryKey: ["products", barbershopId],
      queryFn: () => productService.getProducts(barbershopId),
      staleTime: 5 * 60 * 1000,
    });
  }, [queryClient]);

  const prefetchServices = useCallback(async (barbershopId: string) => {
    await queryClient.prefetchQuery({
      queryKey: ["services", barbershopId],
      queryFn: () => serviceService.getServices(barbershopId),
      staleTime: 5 * 60 * 1000,
    });
  }, [queryClient]);

  return {
    prefetchBarbershop,
    prefetchProducts,
    prefetchServices,
  };
}