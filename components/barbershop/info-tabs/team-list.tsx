"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { TeamMember } from "@/lib/types/barbershop";

interface TeamListProps {
  team: TeamMember[];
}

export function TeamList({ team }: TeamListProps) {
  return (
    <div className="space-y-4">
      {team.map((member) => (
        <Card key={member.id} className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={member.image} />
              <AvatarFallback>
                {member.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="ml-1 text-sm">
                  {member.rating} ({member.reviews})
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {member.specialties.map((specialty) => (
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
        </Card>
      ))}
    </div>
  );
}