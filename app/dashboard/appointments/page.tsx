import { AppointmentsHeader } from "@/components/appointments/appointments-header";
import { DailySchedule } from "@/components/appointments/daily-schedule";

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <AppointmentsHeader />
      <DailySchedule />
    </div>
  );
}