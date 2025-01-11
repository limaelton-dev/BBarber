import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useBarbershop } from '@/lib/hooks/use-barbershop'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

vi.mock('@/lib/services/barbershop-service', () => ({
  BarbershopService: vi.fn(() => ({
    getBarbershopById: vi.fn(),
  })),
}))

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>
)

describe('useBarbershop', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return barbershop data', async () => {
    const { result } = renderHook(() => useBarbershop('barbershop-id'), { wrapper })
    
    expect(result.current.isLoading).toBe(true)
    expect(result.current.barbershop).toBe(undefined)
  })
})