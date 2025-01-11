import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DailyRevenue } from "@/components/dashboard/daily-revenue";
import { UpcomingAppointments } from "@/components/dashboard/upcoming-appointments";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Visão geral do seu negócio e atividades recentes
        </p>
      </div>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2">
        <DailyRevenue />
        <UpcomingAppointments />
      </div>
    </div>
  );
}