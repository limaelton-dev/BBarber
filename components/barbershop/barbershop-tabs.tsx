"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicesList } from "./tabs/services-list";
import { ProductsList } from "./tabs/products-list";
import { TeamList } from "./tabs/team-list";
import { Service, Product, TeamMember } from "@/lib/types/barbershop";

interface BarbershopTabsProps {
  services: Service[];
  products: Product[];
  team: TeamMember[];
}

export function BarbershopTabs({ services, products, team }: BarbershopTabsProps) {
  return (
    <Tabs defaultValue="services" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="services">Serviços</TabsTrigger>
        <TabsTrigger value="products">Produtos</TabsTrigger>
        <TabsTrigger value="team">Equipe</TabsTrigger>
      </TabsList>
      
      <TabsContent value="services">
        <ServicesList services={services} />
      </TabsContent>
      
      <TabsContent value="products">
        <ProductsList products={products} />
      </TabsContent>
      
      <TabsContent value="team">
        <TeamList team={team} />
      </TabsContent>
    </Tabs>
  );
}