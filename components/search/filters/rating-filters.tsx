"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ratings } from "@/lib/data/filters";
import { useSearchFilters } from "@/lib/hooks/use-search-filters";

export function RatingFilters() {
  const { filters, setRating } = useSearchFilters();

  return (
    <RadioGroup
      value={filters.rating || ""}
      onValueChange={setRating}
    >
      {ratings.map((rating) => (
        <div key={rating.value} className="flex items-center space-x-2">
          <RadioGroupItem value={rating.value} id={rating.value} />
          <Label htmlFor={rating.value}>{rating.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}