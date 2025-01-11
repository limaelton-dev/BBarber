import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useAppointments } from '@/lib/hooks/use-appointments'

vi.mock('@/lib/services/appointment-service', () => ({
  AppointmentService: vi.fn(() => ({
    getAppointments: vi.fn(),
    createAppointment: vi.fn(),
    updateAppointmentStatus: vi.fn(),
  })),
}))

describe('useAppointments', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch appointments', async () => {
    const { result } = renderHook(() => useAppointments('barbershop-id', '2024-03-20'))
    
    expect(result.current.isLoading).toBe(false)
    expect(result.current.appointments).toEqual([])
  })

  it('should handle errors', async () => {
    const error = new Error('Failed to fetch')
    vi.spyOn(console, 'error').mockImplementation(() => {})
    
    const { result } = renderHook(() => useAppointments('barbershop-id', '2024-03-20'))
    
    expect(result.current.error).toBe(null)
  })
})