"use client";

import { useQueryClient } from "@tanstack/react-query";

export function useOptimisticUpdate<T>(queryKey: string) {
  const queryClient = useQueryClient();

  const update = async (
    updateFn: (oldData: T[]) => T[],
    mutationFn: () => Promise<void>
  ) => {
    // Snapshot the previous value
    const previousData = queryClient.getQueryData<T[]>([queryKey]);

    // Optimistically update to the new value
    if (previousData) {
      queryClient.setQueryData<T[]>([queryKey], (old) => 
        old ? updateFn(old) : []
      );
    }

    try {
      // Try to execute the mutation
      await mutationFn();
    } catch (error) {
      // If it fails, roll back to the previous value
      if (previousData) {
        queryClient.setQueryData([queryKey], previousData);
      }
      throw error;
    }
  };

  return { update };
}