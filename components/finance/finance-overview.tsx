"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, DollarSign, Percent } from "lucide-react";

const stats = [
  {
    title: "Receita Total",
    value: "R$ 15.231,00",
    description: "+20.1% em relação ao mês anterior",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Despesas",
    value: "R$ 4.231,00",
    description: "+4.5% em relação ao mês anterior",
    trend: "up",
    icon: ArrowDown,
  },
  {
    title: "Lucro Líquido",
    value: "R$ 11.000,00",
    description: "+28.4% em relação ao mês anterior",
    trend: "up",
    icon: ArrowUp,
  },
  {
    title: "Margem de Lucro",
    value: "72.2%",
    description: "+5.2% em relação ao mês anterior",
    trend: "up",
    icon: Percent,
  },
];

export function FinanceOverview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
              {stat.trend === "up" ? (
                <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-500" />
              ) : (
                <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
              )}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}