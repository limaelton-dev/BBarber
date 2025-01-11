"use client";

import { useState, useCallback } from 'react';

export function useAsyncError() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsync = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    errorMessage = 'An error occurred'
  ): Promise<T | undefined> => {
    try {
      setIsLoading(true);
      setError(null);
      return await asyncFn();
    } catch (err) {
      const error = err instanceof Error ? err : new Error(errorMessage);
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    error,
    isLoading,
    handleAsync,
    setError,
  };
}