"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { services } from "@/lib/data/filters";
import { useSearchFilters } from "@/lib/hooks/use-search-filters";

export function ServiceFilters() {
  const { filters, setServices } = useSearchFilters();

  const handleServiceChange = (checked: boolean, service: string) => {
    setServices(
      checked
        ? [...filters.services, service]
        : filters.services.filter((s) => s !== service)
    );
  };

  return (
    <div className="space-y-2">
      {services.map((service) => (
        <div key={service.id} className="flex items-center space-x-2">
          <Checkbox
            id={service.id}
            checked={filters.services.includes(service.id)}
            onCheckedChange={(checked) =>
              handleServiceChange(checked as boolean, service.id)
            }
          />
          <Label
            htmlFor={service.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {service.label}
          </Label>
        </div>
      ))}
    </div>
  );
}