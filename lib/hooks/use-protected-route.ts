"use client";

import { useUser } from '@/lib/auth/auth-hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useProtectedRoute(requiredType?: 'client' | 'barbershop') {
  const { user, profile, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }

    if (!isLoading && requiredType && profile?.type !== requiredType) {
      router.replace('/');
    }
  }, [user, profile, isLoading, router, requiredType]);

  return { isLoading, isAuthenticated: !!user };
}