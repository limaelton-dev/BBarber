"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// Paleta de cores mais vibrante e contrastante
const COLORS = [
  "hsl(215, 90%, 50%)", // Azul vibrante
  "hsl(160, 90%, 40%)", // Verde vibrante
  "hsl(280, 90%, 50%)", // Roxo vibrante
  "hsl(35, 90%, 50%)",  // Laranja vibrante
];

const data = [
  { name: "Corte", value: 8500 },
  { name: "Barba", value: 3200 },
  { name: "Pigmentação", value: 2100 },
  { name: "Produtos", value: 1431 },
];

export function RevenueByService() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className="h-[500px]">
      <CardHeader className="flex-none">
        <CardTitle>Receita por Serviço</CardTitle>
        <CardDescription>
          Distribuição da receita por tipo de serviço
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[calc(100%-6.5rem)] flex flex-col">
        {/* Container do gráfico com altura proporcional */}
        <div className="h-[70%] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={2}
                stroke="hsl(var(--background))"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="transition-opacity duration-200 hover:opacity-80"
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const percentage = ((payload[0].value / total) * 100).toFixed(1);
                    return (
                      <div className="rounded-lg border bg-background p-3 shadow-sm">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium">
                            {payload[0].name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            R$ {payload[0].value.toLocaleString()}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {percentage}% do total
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legenda com altura fixa e scroll se necessário */}
        <div className="mt-auto pt-4 grid grid-cols-2 gap-x-4 gap-y-2 overflow-y-auto">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[index] }}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  R$ {item.value.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}