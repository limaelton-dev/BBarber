export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  image?: string;
  status: "active" | "inactive" | "vacation";
  commission?: number;
  salary?: number;
}