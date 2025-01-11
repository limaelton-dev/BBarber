import { SearchHeader } from "@/components/search/search-header";
import { SearchFilters } from "@/components/search/search-filters";
import { BarbershopList } from "@/components/search/barbershop-list";

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SearchHeader />
      <div className="grid gap-6 md:grid-cols-4 lg:gap-8">
        <SearchFilters />
        <div className="md:col-span-3">
          <BarbershopList />
        </div>
      </div>
    </div>
  );
}