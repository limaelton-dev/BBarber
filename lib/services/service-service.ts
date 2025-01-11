import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/database.types'

type Service = Database['public']['Tables']['services']['Row']

export class ServiceService {
  async getServices(barbershopId: string) {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        employee_services (
          employees (
            id,
            profiles (full_name)
          )
        )
      `)
      .eq('barbershop_id', barbershopId)
      .order('name')

    if (error) throw error
    return data
  }

  async getServiceById(id: string) {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        employee_services (
          employees (
            id,
            profiles (full_name)
          )
        )
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  }

  async createService(service: Partial<Service>) {
    const { data, error } = await supabase
      .from('services')
      .insert(service)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async updateService(id: string, updates: Partial<Service>) {
    const { data, error } = await supabase
      .from('services')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async assignEmployeeToService(serviceId: string, employeeId: string) {
    const { error } = await supabase
      .from('employee_services')
      .insert({ service_id: serviceId, employee_id: employeeId })

    if (error) throw error
  }

  async removeEmployeeFromService(serviceId: string, employeeId: string) {
    const { error } = await supabase
      .from('employee_services')
      .delete()
      .eq('service_id', serviceId)
      .eq('employee_id', employeeId)

    if (error) throw error
  }
}