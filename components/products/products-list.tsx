"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { ProductDialog } from "./product-dialog";
import { Product, categoryMap, calculateProfitMargin } from "@/lib/types/products";

const products: Product[] = [
  {
    id: "1",
    name: "Pomada Modeladora",
    description: "Pomada para cabelo com fixação forte",
    price: 45.90,
    costPrice: 22.95,
    isActive: true,
    category: "finalizacao",
    image: "https://images.unsplash.com/photo-1597854710119-a5a38aaae0b5?w=800",
  },
  // ... other products
];

export function ProductsList() {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"create" | "edit">("create");

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setDialogMode("edit");
    setDialogOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {products.map((product) => {
              const profitMargin = calculateProfitMargin(product.price, product.costPrice);

              return (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg space-y-3 sm:space-y-0"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={product.image} />
                      <AvatarFallback>
                        {product.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1 sm:flex-initial">
                      <p className="font-medium truncate">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {categoryMap[product.category]}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
                    <div className="flex flex-col space-y-1 w-full sm:w-auto">
                      <p className="text-sm">
                        Venda: <span className="font-medium">R$ {product.price.toFixed(2)}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Custo: R$ {product.costPrice.toFixed(2)}
                      </p>
                      <p className="text-sm text-emerald-500">
                        Margem: {profitMargin.toFixed(1)}%
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                      <Badge
                        variant={product.isActive ? "success" : "destructive"}
                        className="flex-shrink-0"
                      >
                        {product.isActive ? "Ativo" : "Inativo"}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 flex-shrink-0"
                          >
                            <span className="sr-only">Abrir menu</span>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Ações</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleEdit(product)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <ProductDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        product={selectedProduct}
        mode={dialogMode}
      />
    </>
  );
}