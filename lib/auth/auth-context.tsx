import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/database.types'

type Profile = Database['public']['Tables']['profiles']['Row']

interface AuthState {
  user: User | null
  profile: Profile | null
  isLoading: boolean
}

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string, type: 'client' | 'barbershop') => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    isLoading: true,
  })

  useEffect(() => {
    let isInitialized = false; // Flag para evitar interferência no login inicial
  
    async function initializeAuth() {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error || !session) {
        setState({ user: null, profile: null, isLoading: false });
        return;
      }
      setState({ user: session.user, profile: null, isLoading: false });
      fetchProfile(session.user.id);
    }
  
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!isInitialized) return; // Evita execução durante a inicialização
  
        if (session) {
          setState({ user: session.user, profile: null, isLoading: false });
          await fetchProfile(session.user.id);
        } else {
          setState({ user: null, profile: null, isLoading: false });
        }
      }
    );
  
    initializeAuth().then(() => {
      isInitialized = true; // Permite que o listener funcione após a inicialização
    });
  
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error fetching profile:', error)
      return
    }

    setState(prev => ({ ...prev, profile: data, isLoading: false }))
  }

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Erro ao autenticar:', error);
      throw error; // Certifique-se de que o erro está sendo lançado
    }
  
    if (data.user) {
      setState(prev => ({ ...prev, user: data.user, isLoading: false }));
    }
  };
  

  const signUp = async (email: string, password: string, fullName: string, type: 'client' | 'barbershop') => {
    const { data: { user }, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError || !user) throw signUpError

    const { error: profileError } = await supabase.from('profiles').insert({
      id: user.id,
      full_name: fullName,
      type,
    })

    if (profileError) throw profileError
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    setState({ user: null, profile: null, isLoading: false })
  }

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}