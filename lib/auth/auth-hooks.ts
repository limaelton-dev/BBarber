import { useAuth } from './auth-context'

export function useUser() {
  const { user, profile, isLoading } = useAuth()
  return { user, profile, isLoading }
}

export function useSignIn() {
  const { signIn } = useAuth()
  return async (email: string, password: string, type: 'client' | 'barbershop') => {
    await signIn(email, password, type);
  };
}

export function useSignUp() {
  const { signUp } = useAuth()
  return async (data: {
    email: string;
    password: string;
    fullName: string;
    type: 'client' | 'barbershop';
  }) => {
    await signUp(data.email, data.password, data.fullName, data.type);
  };
}

export function useSignOut() {
  const { signOut } = useAuth()
  return signOut
}