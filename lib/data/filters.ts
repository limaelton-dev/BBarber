import { ServiceFilter, PriceRangeFilter, RatingFilter } from '@/lib/types/filters';

export const services: ServiceFilter[] = [
  { id: "haircut", label: "Corte de Cabelo" },
  { id: "beard", label: "Barba" },
  { id: "hair-beard", label: "Cabelo + Barba" },
  { id: "hair-design", label: "Desenho" },
  { id: "hair-wash", label: "Lavagem" },
  { id: "hair-hydration", label: "Hidratação" },
] as const;

export const priceRanges: PriceRangeFilter[] = [
  { id: "0-50", label: "Até R$ 50", min: 0, max: 50 },
  { id: "50-100", label: "R$ 50 - R$ 100", min: 50, max: 100 },
  { id: "100-150", label: "R$ 100 - R$ 150", min: 100, max: 150 },
  { id: "150+", label: "Acima de R$ 150", min: 150, max: Infinity },
] as const;

export const ratings: RatingFilter[] = [
  { value: "4.5", label: "4.5+ estrelas" },
  { value: "4.0", label: "4.0+ estrelas" },
  { value: "3.5", label: "3.5+ estrelas" },
] as const;