import { useAuth } from '@/lib/auth/auth-context';

export function useUser() {
  const { user, profile, isLoading } = useAuth();
  return { user, profile, isLoading };
}