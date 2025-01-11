"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const transactions = [
  {
    id: "1",
    type: "income",
    description: "Corte + Barba",
    amount: 75.0,
    date: "2024-01-15",
    client: {
      name: "João Silva",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=João",
    },
  },
  {
    id: "2",
    type: "expense",
    description: "Produtos de Limpeza",
    amount: 120.5,
    date: "2024-01-15",
    supplier: "Fornecedor XYZ",
  },
  {
    id: "3",
    type: "income",
    description: "Produtos Vendidos",
    amount: 150.0,
    date: "2024-01-14",
    client: {
      name: "Maria Santos",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
        <CardDescription>
          Últimas movimentações financeiras
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between space-x-4 rounded-lg border p-4"
              >
                <div className="flex items-center space-x-4">
                  {transaction.client ? (
                    <Avatar>
                      <AvatarImage src={transaction.client.image} />
                      <AvatarFallback>
                        {transaction.client.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {transaction.supplier?.[0]}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge
                    variant={transaction.type === "income" ? "success" : "destructive"}
                  >
                    {transaction.type === "income" ? "+" : "-"} R${" "}
                    {transaction.amount.toFixed(2)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}