"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchFilters } from "@/lib/hooks/use-search-filters";
import { useDebounce } from "@/lib/hooks/use-debounce";
import { useEffect, useState } from "react";

export function SearchHeader() {
  const { filters, setSearchQuery } = useSearchFilters();
  const [query, setQuery] = useState(filters.searchQuery);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Encontre a Barbearia Perfeita
      </h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Busque por nome ou localização..."
          className="pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}