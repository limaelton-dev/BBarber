"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { useSearchFilters } from "@/lib/hooks/use-search-filters";
import { ServiceFilters } from "./filters/service-filters";
import { PriceFilters } from "./filters/price-filters";
import { RatingFilters } from "./filters/rating-filters";
import { FilterSection } from "./filters/filter-section";

export function SearchFilters() {
  const { resetFilters } = useSearchFilters();

  return (
    <Card className="p-4">
      <Accordion type="single" collapsible className="w-full">
        <FilterSection value="services" title="Serviços">
          <ServiceFilters />
        </FilterSection>

        <FilterSection value="price" title="Preço">
          <PriceFilters />
        </FilterSection>

        <FilterSection value="rating" title="Avaliação">
          <RatingFilters />
        </FilterSection>
      </Accordion>

      <Button
        variant="outline"
        size="sm"
        className="w-full mt-4"
        onClick={resetFilters}
      >
        Limpar Filtros
      </Button>
    </Card>
  );
}