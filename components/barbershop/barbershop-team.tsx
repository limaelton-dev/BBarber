"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  reviews: number;
  specialties: string[];
}

interface BarbershopTeamProps {
  team: TeamMember[];
}

export function BarbershopTeam({ team }: BarbershopTeamProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nossa Equipe</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
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
            <Button>Agendar</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}