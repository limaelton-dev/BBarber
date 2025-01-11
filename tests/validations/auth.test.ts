import { describe, it, expect } from 'vitest'
import { loginSchema, registerSchema } from '@/lib/validations/auth'

describe('Auth Validation Schemas', () => {
  describe('loginSchema', () => {
    it('should validate valid login data', () => {
      const validData = {
        email: 'test@example.com',
        password: '123456',
      }
      
      const result = loginSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid email', () => {
      const invalidData = {
        email: 'invalid-email',
        password: '123456',
      }
      
      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('registerSchema', () => {
    it('should validate valid registration data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: '123456',
        confirmPassword: '123456',
        type: 'client' as const,
      }
      
      const result = registerSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject mismatched passwords', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: '123456',
        confirmPassword: '1234567',
        type: 'client' as const,
      }
      
      const result = registerSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})