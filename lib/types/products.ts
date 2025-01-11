export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  costPrice: number;
  isActive: boolean;
  image?: string;
  category: "finalizacao" | "cuidados" | "barba" | "cabelo" | "acessorios";
}

export const categoryMap = {
  finalizacao: "Finalização",
  cuidados: "Cuidados",
  barba: "Barba",
  cabelo: "Cabelo",
  acessorios: "Acessórios",
} as const;

export function calculateProfitMargin(price: number, costPrice: number): number {
  return ((price - costPrice) / costPrice) * 100;
}