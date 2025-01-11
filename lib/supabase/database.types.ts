export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          type: 'client' | 'barbershop'
          full_name: string
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          type: 'client' | 'barbershop'
          full_name: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          type?: 'client' | 'barbershop'
          full_name?: string
          avatar_url?: string | null
          updated_at?: string
        }
      }
      barbershops: {
        Row: {
          id: string
          owner_id: string
          name: string
          description: string | null
          logo_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          name: string
          description?: string | null
          logo_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          owner_id?: string
          name?: string
          description?: string | null
          logo_url?: string | null
          updated_at?: string
        }
      }
      // Add other table types as needed...
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_barbershop_employee: {
        Args: { barbershop_uuid: string }
        Returns: boolean
      }
    }
    Enums: {
      user_type: 'client' | 'barbershop'
      contact_type: 'email' | 'phone'
      appointment_status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
      day_of_week: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'
    }
  }
}