"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

interface PrefetchOptions {
  staleTime?: number;
}

export function usePrefetchQuery() {
  const queryClient = useQueryClient();
  const defaultStaleTime = 5 * 60 * 1000; // 5 minutes

  const prefetchQuery = useCallback(
    async <T>(
      key: string[],
      queryFn: () => Promise<T>,
      options: PrefetchOptions = {}
    ) => {
      const { staleTime = defaultStaleTime } = options;

      await queryClient.prefetchQuery({
        queryKey: key,
        queryFn,
        staleTime,
      });
    },
    [queryClient, defaultStaleTime]
  );

  const warmCache = useCallback(
    async <T>(
      key: string[],
      data: T,
      options: PrefetchOptions = {}
    ) => {
      const { staleTime = defaultStaleTime } = options;
      
      queryClient.setQueryData(key, data, {
        updatedAt: Date.now(),
        staleTime,
      });
    },
    [queryClient, defaultStaleTime]
  );

  return {
    prefetchQuery,
    warmCache,
  };
}