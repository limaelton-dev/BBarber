// Função auxiliar para gerar dados dos últimos N dias
export function generateDailyRevenueData(days: number) {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
      revenue: Math.floor(Math.random() * 2000) + 500, // Simulando valores entre 500 e 2500
    });
  }
  
  return data;
}

export const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
] as const;