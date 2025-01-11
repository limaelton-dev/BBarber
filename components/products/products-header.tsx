"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ProductDialog } from "./product-dialog";

export function ProductsHeader() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Produtos</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Gerencie o estoque de produtos da sua barbearia
          </p>
        </div>
        <div>
          <Button
            onClick={() => setDialogOpen(true)}
            size="sm"
            className="w-full sm:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </div>
      </div>

      <ProductDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode="create"
      />
    </>
  );
}