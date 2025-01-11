"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePrefetchBarbershop } from "@/lib/hooks/use-prefetch-barbershop";
import { filterBarbershops } from "@/lib/utils/filter-barbershops";
import { useSearchFilters } from "@/lib/hooks/use-search-filters";

export function BarbershopList() {
  const { filters } = useSearchFilters();
  const { prefetchBarbershopData } = usePrefetchBarbershop();
  const filteredBarbershops = filterBarbershops(filters);

  const handlePrefetch = async (shopId: string) => {
    await prefetchBarbershopData(shopId);
  };

  if (filteredBarbershops.length === 0) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">
          Nenhuma barbearia encontrada
        </h3>
        <p className="text-muted-foreground">
          Tente ajustar os filtros para ver mais resultados
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {filteredBarbershops.map((shop) => (
        <Card key={shop.id} className="overflow-hidden">
          <div 
            className="md:flex"
            onMouseEnter={() => handlePrefetch(shop.id)}
          >
            <div className="relative h-48 md:h-auto md:w-72 flex-shrink-0">
              <Image
                src={shop.image}
                alt={shop.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{shop.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1 text-sm font-medium">
                    {shop.rating} ({shop.reviews})
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {shop.address}
              </p>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {shop.services.map((service) => (
                    <span
                      key={service.id}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {service.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  A partir de R$ {Math.min(...shop.services.map(s => s.price)).toFixed(2)}
                </p>
                <Link href={`/barbershop/${shop.id}`} className="flex-shrink-0">
                  <Button>Agendar</Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}