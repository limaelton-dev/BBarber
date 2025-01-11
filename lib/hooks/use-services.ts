"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ServiceService } from "@/lib/services/service-service";
import { Database } from "@/lib/supabase/database.types";

type Service = Database["public"]["Tables"]["services"]["Row"];
const serviceService = new ServiceService();

export function useServices(barbershopId: string) {
  const queryClient = useQueryClient();
  const queryKey = ["services", barbershopId];

  const {
    data: services = [],
    isLoading,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => serviceService.getServices(barbershopId),
  });

  const createMutation = useMutation({
    mutationFn: (service: Partial<Service>) => serviceService.createService(service),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Service> }) =>
      serviceService.updateService(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const assignEmployeeMutation = useMutation({
    mutationFn: ({ serviceId, employeeId }: { serviceId: string; employeeId: string }) =>
      serviceService.assignEmployeeToService(serviceId, employeeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const removeEmployeeMutation = useMutation({
    mutationFn: ({ serviceId, employeeId }: { serviceId: string; employeeId: string }) =>
      serviceService.removeEmployeeFromService(serviceId, employeeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return {
    services,
    isLoading,
    error,
    createService: createMutation.mutateAsync,
    updateService: updateMutation.mutateAsync,
    assignEmployee: assignEmployeeMutation.mutateAsync,
    removeEmployee: removeEmployeeMutation.mutateAsync,
  };
}