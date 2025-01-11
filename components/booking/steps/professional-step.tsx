"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useBookingFlowStore } from "@/lib/stores/use-booking-flow-store";

const professionals = [
  {
    id: "1",
    name: "Carlos Silva",
    role: "Barbeiro Senior",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    rating: 4.9,
    reviews: 156,
    specialties: ["Corte", "Barba", "Pigmentação"],
  },
  {
    id: "2",
    name: "Roberto Santos",
    role: "Barbeiro",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    rating: 4.7,
    reviews: 98,
    specialties: ["Corte", "Barba"],
  },
  {
    id: "3",
    name: "André Lima",
    role: "Barbeiro",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andre",
    rating: 4.8,
    reviews: 124,
    specialties: ["Corte", "Barba", "Desenho"],
  },
];

export function ProfessionalStep() {
  const { selectedProfessional, setSelectedProfessional } = useBookingFlowStore();

  return (
    <div className="space-y-4">
      {professionals.map((professional) => (
        <Card key={professional.id} className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={professional.image} />
                <AvatarFallback>
                  {professional.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{professional.name}</h3>
                <p className="text-sm text-muted-foreground">{professional.role}</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1 text-sm">
                    {professional.rating} ({professional.reviews})
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {professional.specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="secondary"
                      className="text-xs"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <Button
              variant={selectedProfessional === professional.id ? "default" : "outline"}
              onClick={() => setSelectedProfessional(professional.id)}
              className="w-full sm:w-auto"
            >
              {selectedProfessional === professional.id ? "Selecionado" : "Selecionar"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}