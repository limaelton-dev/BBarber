import { barbershops } from "@/lib/data/barbershops";
import { priceRanges } from "@/lib/data/filters";

interface Filters {
  services: string[];
  priceRanges: string[];
  rating: string | null;
  searchQuery: string;
}

export function filterBarbershops(filters: Filters) {
  return barbershops.filter((barbershop) => {
    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesName = barbershop.name.toLowerCase().includes(query);
      const matchesAddress = barbershop.address.toLowerCase().includes(query);
      if (!matchesName && !matchesAddress) return false;
    }

    // Filter by services
    if (filters.services.length > 0) {
      const barbershopServices = barbershop.services.map(s => s.name.toLowerCase());
      const hasAllServices = filters.services.every(service =>
        barbershopServices.some(s => s.includes(service.toLowerCase()))
      );
      if (!hasAllServices) return false;
    }

    // Filter by price range
    if (filters.priceRanges.length > 0) {
      const prices = barbershop.services.map(s => s.price);
      const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
      
      const inRange = filters.priceRanges.some(rangeId => {
        const range = priceRanges.find(r => r.id === rangeId);
        if (!range) return false;
        return avgPrice >= range.min && avgPrice <= range.max;
      });
      
      if (!inRange) return false;
    }

    // Filter by rating
    if (filters.rating) {
      const minRating = parseFloat(filters.rating);
      if (barbershop.rating < minRating) return false;
    }

    return true;
  });
}