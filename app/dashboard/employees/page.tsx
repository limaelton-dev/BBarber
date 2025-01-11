import { EmployeesList } from "@/components/employees/employees-list";
import { EmployeesHeader } from "@/components/employees/employees-header";

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      <EmployeesHeader />
      <EmployeesList />
    </div>
  );
}