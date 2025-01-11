"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicesList } from "./info-tabs/services-list";
import { ProductsList } from "./info-tabs/products-list";
import { TeamList } from "./info-tabs/team-list";
import { Barbershop } from "@/lib/types/barbershop";
import { cn } from "@/lib/utils";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

export function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  const [activeTab, setActiveTab] = useState("services");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (value: string) => {
    setIsTransitioning(true);
    setActiveTab(value);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <Tabs 
      defaultValue="services" 
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-full"
    >
      <TabsList className="w-full grid grid-cols-3 md:w-[400px] md:mx-auto">
        <TabsTrigger value="services">Serviços</TabsTrigger>
        <TabsTrigger value="products">Produtos</TabsTrigger>
        <TabsTrigger value="team">Equipe</TabsTrigger>
      </TabsList>
      
      <div className="relative mt-6">
        <TabsContent 
          value="services" 
          className={cn(
            "transition-all duration-300 absolute w-full",
            activeTab === "services" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
          )}
        >
          <ServicesList services={barbershop.services} />
        </TabsContent>
        
        <TabsContent 
          value="products"
          className={cn(
            "transition-all duration-300 absolute w-full",
            activeTab === "products" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
          )}
        >
          <ProductsList products={barbershop.products} />
        </TabsContent>
        
        <TabsContent 
          value="team"
          className={cn(
            "transition-all duration-300 absolute w-full",
            activeTab === "team" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
          )}
        >
          <TeamList team={barbershop.team} />
        </TabsContent>
      </div>

      {/* Spacer div to maintain container height */}
      <div className="h-[600px]" />
    </Tabs>
  );
}