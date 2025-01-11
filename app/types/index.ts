export interface Barbershop {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  description?: string;
  workingHours: WorkingHours[];
}

export interface WorkingHours {
  dayOfWeek: number;
  start: string;
  end: string;
  isOpen: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  barbershopId: string;
}

export interface Barber {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  barbershopId: string;
  services: string[]; // Service IDs
}

export interface Appointment {
  id: string;
  customerId: string;
  barberId: string;
  barbershopId: string;
  serviceId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  totalPrice: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  barbershopId: string;
  image?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}