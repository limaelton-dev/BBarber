"use client";

import { Card } from "@/components/ui/card";
import { Product } from "@/lib/types/barbershop";
import { formatCurrency } from "@/lib/utils/format";

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <Card key={product.id} className="p-4">
          <div className="flex gap-4">
            {product.image && (
              <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-medium truncate">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <p className="font-medium whitespace-nowrap">
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}