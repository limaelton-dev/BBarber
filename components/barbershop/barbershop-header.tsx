"use client";

import { Card } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Info } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BarbershopHeaderProps {
  barbershop: {
    name: string;
    rating: number;
    reviews: number;
    image: string;
    address: string;
    phone: string;
    hours: string;
    description?: string;
  };
}

export function BarbershopHeader({ barbershop }: BarbershopHeaderProps) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        {/* Image Section */}
        <div className="relative h-64 md:h-auto md:w-1/3">
          <Image
            src={barbershop.image}
            alt={barbershop.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:w-2/3 space-y-6">
          {/* Header Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{barbershop.name}</h1>
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="ml-1 font-medium">
                  {barbershop.rating} ({barbershop.reviews} avaliações)
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{barbershop.address}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>{barbershop.phone}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>{barbershop.hours}</span>
              </div>
            </div>
          </div>

          {/* Description Section */}
          {barbershop.description && (
            <div className="pt-4 border-t">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Info className="h-5 w-5" />
                <h2 className="font-medium text-foreground">Sobre nós</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {barbershop.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}