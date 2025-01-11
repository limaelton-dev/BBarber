import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/database.types'

type Barbershop = Database['public']['Tables']['barbershops']['Row']
type Service = Database['public']['Tables']['services']['Row']

export class BarbershopService {
  async getBarbershops() {
    const { data, error } = await supabase
      .from('barbershops')
      .select(`
        *,
        services (*),
        working_hours (*),
        reviews (
          rating,
          comment,
          created_at,
          profiles (full_name, avatar_url)
        )
      `)
      .eq('is_active', true)

    if (error) throw error
    return data
  }

  async getBarbershopById(id: string) {
    const { data, error } = await supabase
      .from('barbershops')
      .select(`
        *,
        services (*),
        working_hours (*),
        employees (
          id,
          profiles (full_name, avatar_url),
          employee_services (service_id)
        ),
        reviews (
          rating,
          comment,
          created_at,
          profiles (full_name, avatar_url)
        )
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  }

  async createBarbershop(barbershop: Partial<Barbershop>) {
    const { data, error } = await supabase
      .from('barbershops')
      .insert(barbershop)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async updateBarbershop(id: string, updates: Partial<Barbershop>) {
    const { data, error } = await supabase
      .from('barbershops')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async addService(service: Partial<Service>) {
    const { data, error } = await supabase
      .from('services')
      .insert(service)
      .select()
      .single()

    if (error) throw error
    return data
  }
}