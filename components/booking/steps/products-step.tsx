"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useBookingFlowStore } from "@/lib/stores/use-booking-flow-store";

const products = [
  {
    id: "1",
    name: "Pomada Modeladora",
    description: "Pomada para cabelo com fixação forte",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1597854710119-a5a38aaae0b5?w=800",
  },
  {
    id: "2",
    name: "Óleo para Barba",
    description: "Óleo hidratante para barba",
    price: 35.90,
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=800",
  },
  {
    id: "3",
    name: "Shampoo Especial",
    description: "Shampoo para cabelos masculinos",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800",
  },
];

export function ProductsStep() {
  const { selectedProducts, setSelectedProducts } = useBookingFlowStore();

  const toggleProduct = (productId: string) => {
    setSelectedProducts(
      selectedProducts.includes(productId)
        ? selectedProducts.filter(id => id !== productId)
        : [...selectedProducts, productId]
    );
  };

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <Card key={product.id} className="p-4">
          <div className="flex gap-4">
            <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
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
                    onClick={() => toggleProduct(product.id)}
                    variant={selectedProducts.includes(product.id) ? "default" : "outline"}
                  >
                    {selectedProducts.includes(product.id) ? (
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
      ))}
    </div>
  );
}