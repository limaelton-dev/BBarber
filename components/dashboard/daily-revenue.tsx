"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

const generateHourlyData = () => {
  const data = [];
  for (let i = 0; i < 24; i++) {
    data.push({
      hour: `${i.toString().padStart(2, "0")}:00`,
      value: Math.floor(Math.random() * 500) + 100,
    });
  }
  return data;
};

const data = generateHourlyData();
const todayTotal = data.reduce((acc, curr) => acc + curr.value, 0);
const yesterdayTotal = todayTotal * 0.9;
const difference = todayTotal - yesterdayTotal;
const percentageChange = ((difference / yesterdayTotal) * 100).toFixed(1);

export function DailyRevenue() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">
          Faturamento do Dia
        </CardTitle>
        <div className="text-right text-sm">
          <div className="font-bold text-2xl">
            R$ {todayTotal.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 text-xs">
            <span className={difference >= 0 ? "text-emerald-500" : "text-red-500"}>
              {difference >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {percentageChange}%
            </span>
            <span className="text-muted-foreground">vs ontem</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="hour"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
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
                              {payload[0].payload.hour}
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
                dot={false}
                activeDot={{
                  r: 4,
                  style: { fill: "hsl(var(--primary))" },
                }}
                style={{
                  stroke: "hsl(var(--primary))",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}