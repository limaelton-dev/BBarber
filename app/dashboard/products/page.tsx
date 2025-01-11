import { ProductsList } from "@/components/products/products-list";
import { ProductsHeader } from "@/components/products/products-header";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <ProductsHeader />
      <ProductsList />
    </div>
  );
}