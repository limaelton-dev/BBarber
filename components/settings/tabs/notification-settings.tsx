"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    id: "new-appointment",
    title: "Novos Agendamentos",
    description: "Receba notificações quando houver novos agendamentos",
  },
  {
    id: "appointment-reminder",
    title: "Lembretes de Agendamentos",
    description: "Receba lembretes de agendamentos próximos",
  },
  {
    id: "low-stock",
    title: "Estoque Baixo",
    description: "Receba alertas quando produtos estiverem com estoque baixo",
  },
  {
    id: "reviews",
    title: "Novas Avaliações",
    description: "Receba notificações de novas avaliações de clientes",
  },
  {
    id: "promotions",
    title: "Promoções e Novidades",
    description: "Receba informações sobre promoções e atualizações do sistema",
  },
];

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferências de Notificação</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center justify-between"
          >
            <div className="space-y-1">
              <Label htmlFor={notification.id}>{notification.title}</Label>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
            </div>
            <Switch id={notification.id} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}