export interface ServiceFilter {
  id: string;
  label: string;
}

export interface PriceRangeFilter {
  id: string;
  label: string;
  min: number;
  max: number;
}

export interface RatingFilter {
  value: string;
  label: string;
}

export interface SearchFilters {
  services: string[];
  priceRanges: string[];
  rating: string | null;
  searchQuery: string;
}