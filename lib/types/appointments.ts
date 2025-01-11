export interface Appointment {
  id: string;
  client: {
    id: string;
    name: string;
    image?: string;
  };
  barber: {
    id: string;
    name: string;
  };
  services: {
    id: string;
    name: string;
    price: number;
  }[];
  date: string;
  time: string;
  duration: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
}

export interface Barber {
  id: string;
  name: string;
  image?: string;
  services: string[]; // Service IDs
}