"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, DollarSign, Scissors, Users } from "lucide-react";

const stats = [
  {
    title: "Agendamentos Hoje",
    value: "12",
    description: "+2 pendentes",
    icon: Calendar,
  },
  {
    title: "Clientes Ativos",
    value: "245",
    description: "+18% este mês",
    icon: Users,
  },
  {
    title: "Serviços Realizados",
    value: "89",
    description: "Esta semana",
    icon: Scissors,
  },
  {
    title: "Receita Mensal",
    value: "R$ 4.200",
    description: "+10% vs. último mês",
    icon: DollarSign,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}