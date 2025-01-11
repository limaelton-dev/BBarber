import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/database.types'

type Profile = Database['public']['Tables']['profiles']['Row']

export class AuthService {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  }

  async signUp(
    email: string, 
    password: string, 
    fullName: string, 
    type: 'client' | 'barbershop'
  ) {
    const { data: { user }, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError || !user) throw signUpError

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: user.id,
        full_name: fullName,
        type,
      })
      .select()
      .single()

    if (profileError) throw profileError

    return { user, profile }
  }

  async getProfile(userId: string): Promise<Profile> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    return data
  }

  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    if (error) throw error
    return data
  }
}