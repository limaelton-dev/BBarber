import { supabase } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/database.types'

type Product = Database['public']['Tables']['products']['Row']

export class ProductService {
  async getProducts(barbershopId: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('barbershop_id', barbershopId)
      .order('name')

    if (error) throw error
    return data
  }

  async getProductById(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  }

  async createProduct(product: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async updateProduct(id: string, updates: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  async updateStock(id: string, quantity: number) {
    const { data, error } = await supabase.rpc('update_product_stock', {
      product_id: id,
      quantity_change: quantity
    })

    if (error) throw error
    return data
  }
}