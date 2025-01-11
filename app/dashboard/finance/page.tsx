import { FinanceHeader } from "@/components/finance/finance-header";
import { FinanceOverview } from "@/components/finance/finance-overview";
import { RevenueByService } from "@/components/finance/charts/revenue-by-service";
import { RevenueChart } from "@/components/finance/charts/revenue-chart";

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <FinanceHeader />
      <FinanceOverview />
      
      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4">
          <RevenueChart />
        </div>
        <div className="md:col-span-3">
          <RevenueByService />
        </div>
      </div>
      
    </div>
  );
}