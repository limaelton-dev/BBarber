import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/database.types'

type Appointment = Database['public']['Tables']['appointments']['Row']

export class AppointmentService {
  async getAppointments(barbershopId: string, date: string) {
    const { data, error } = await supabase
      .from('appointments')
      .select(`
        *,
        profiles (full_name, avatar_url),
        services (name, duration, price),
        employees (profiles (full_name))
      `)
      .eq('barbershop_id', barbershopId)
      .eq('date', date)

    if (error) throw error
    return data
  }

  async createAppointment(appointment: Partial<Appointment>) {
    const { data, error } = await supabase
      .from('appointments')
      .insert(appointment)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async updateAppointmentStatus(
    id: string, 
    status: 'confirmed' | 'cancelled' | 'completed'
  ) {
    const { data, error } = await supabase
      .from('appointments')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async getClientAppointments(clientId: string) {
    const { data, error } = await supabase
      .from('appointments')
      .select(`
        *,
        barbershops (name, logo_url),
        services (name, duration, price),
        employees (profiles (full_name))
      `)
      .eq('client_id', clientId)
      .order('date', { ascending: false })

    if (error) throw error
    return data
  }
}