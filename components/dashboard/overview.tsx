"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

const generateHourlyData = () => {
  const currentHour = new Date().getHours();
  const data = [];
  
  for (let i = 0; i < 24; i++) {
    data.push({
      hour: `${i}:00`,
      value: Math.floor(Math.random() * 500) + 100,
    });
  }
  
  return data;
};

const data = generateHourlyData();
const todayTotal = data.reduce((acc, curr) => acc + curr.value, 0);
const yesterdayTotal = todayTotal * 0.9; // Simulating yesterday's data
const difference = todayTotal - yesterdayTotal;
const percentageChange = ((difference / yesterdayTotal) * 100).toFixed(1);

export function Overview() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">Faturamento do Dia</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold">
              R$ {todayTotal.toLocaleString()}
            </span>
            <div className={`flex items-center ${difference >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
              {difference >= 0 ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {percentageChange}% vs ontem
              </span>
            </div>
          </div>
        </div>
        <div className="text-right text-sm text-muted-foreground">
          <p>Ontem: R$ {yesterdayTotal.toLocaleString()}</p>
          <p>Diferença: R$ {Math.abs(difference).toLocaleString()}</p>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="hour"
              stroke="currentColor"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="currentColor"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `R$ ${value}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Hora
                          </span>
                          <span className="font-bold">
                            {payload[0].payload.hour}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Valor
                          </span>
                          <span className="font-bold">
                            R$ {payload[0].value}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: "hsl(var(--primary))" },
              }}
              style={{
                stroke: "hsl(var(--primary))",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}