import { describe, it, expect } from 'vitest'
import { barbershopSchema, serviceSchema, productSchema } from '@/lib/validations/barbershop'

describe('Barbershop Validation Schemas', () => {
  describe('barbershopSchema', () => {
    it('should validate valid barbershop data', () => {
      const validData = {
        name: 'Barbearia Exemplo',
        description: 'Uma barbearia moderna e profissional',
        phone: '1199999999',
        email: 'contato@barbearia.com',
        address: {
          street: 'Rua Exemplo',
          number: '123',
          district: 'Centro',
          city: 'São Paulo',
          state: 'SP',
          postalCode: '12345678',
        },
      }
      
      const result = barbershopSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
  })

  describe('serviceSchema', () => {
    it('should validate valid service data', () => {
      const validData = {
        name: 'Corte Masculino',
        description: 'Corte profissional com acabamento perfeito',
        price: 50,
        duration: 30,
        isActive: true,
      }
      
      const result = serviceSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
  })

  describe('productSchema', () => {
    it('should validate valid product data', () => {
      const validData = {
        name: 'Pomada Modeladora',
        description: 'Pomada para cabelo com fixação forte',
        price: 45.90,
        costPrice: 22.95,
        stock: 10,
        isActive: true,
      }
      
      const result = productSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
  })
})