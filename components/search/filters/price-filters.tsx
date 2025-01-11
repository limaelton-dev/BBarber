"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { priceRanges } from "@/lib/data/filters";
import { useSearchFilters } from "@/lib/hooks/use-search-filters";

export function PriceFilters() {
  const { filters, setPriceRanges } = useSearchFilters();

  const handlePriceChange = (checked: boolean, price: string) => {
    setPriceRanges(
      checked
        ? [...filters.priceRanges, price]
        : filters.priceRanges.filter((p) => p !== price)
    );
  };

  return (
    <div className="space-y-2">
      {priceRanges.map((price) => (
        <div key={price.id} className="flex items-center space-x-2">
          <Checkbox
            id={price.id}
            checked={filters.priceRanges.includes(price.id)}
            onCheckedChange={(checked) =>
              handlePriceChange(checked as boolean, price.id)
            }
          />
          <Label
            htmlFor={price.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {price.label}
          </Label>
        </div>
      ))}
    </div>
  );
}