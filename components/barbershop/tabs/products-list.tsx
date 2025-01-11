"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useBookingStore } from "@/lib/stores/use-booking-store";
import { Product } from "@/lib/types/barbershop";

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  const { selectedProducts, toggleProduct } = useBookingStore();

  return (
    <div className="space-y-4">
      {products.map((product) => {
        const isSelected = selectedProducts.includes(product.id);
        
        return (
          <Card key={product.id} className="p-4">
            <div className="flex gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-md object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-medium truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-0 flex-shrink-0">
                    <p className="font-medium whitespace-nowrap">
                      R$ {product.price.toFixed(2)}
                    </p>
                    <Button 
                      size="sm"
                      className="sm:mt-2"
                      onClick={() => toggleProduct(product.id)}
                      title={isSelected ? "Remover produto" : "Adicionar produto"}
                    >
                      {isSelected ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}