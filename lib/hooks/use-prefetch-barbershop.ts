"use client";

import { usePrefetchQuery } from "./use-prefetch-query";
import { BarbershopService } from "@/lib/services/barbershop-service";
import { ServiceService } from "@/lib/services/service-service";
import { ProductService } from "@/lib/services/product-service";

const barbershopService = new BarbershopService();
const serviceService = new ServiceService();
const productService = new ProductService();

export function usePrefetchBarbershop() {
  const { prefetchQuery } = usePrefetchQuery();

  const prefetchBarbershopData = async (barbershopId: string) => {
    await Promise.all([
      // Prefetch barbershop details
      prefetchQuery(
        ["barbershop", barbershopId],
        () => barbershopService.getBarbershopById(barbershopId)
      ),

      // Prefetch services
      prefetchQuery(
        ["services", barbershopId],
        () => serviceService.getServices(barbershopId)
      ),

      // Prefetch products
      prefetchQuery(
        ["products", barbershopId],
        () => productService.getProducts(barbershopId)
      ),
    ]);
  };

  return {
    prefetchBarbershopData,
  };
}