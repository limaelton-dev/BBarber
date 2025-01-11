"use client";

import { useQueryClient } from "@tanstack/react-query";

export function useCache() {
  const queryClient = useQueryClient();

  const invalidateQueries = async (keys: string[]) => {
    await Promise.all(
      keys.map((key) => queryClient.invalidateQueries({ queryKey: [key] }))
    );
  };

  const prefetchQueries = async <T>(
    key: string,
    fn: () => Promise<T>,
    staleTime = 5 * 60 * 1000
  ) => {
    await queryClient.prefetchQuery({
      queryKey: [key],
      queryFn: fn,
      staleTime,
    });
  };

  const setQueryData = <T>(key: string, data: T) => {
    queryClient.setQueryData([key], data);
  };

  return {
    invalidateQueries,
    prefetchQueries,
    setQueryData,
  };
}