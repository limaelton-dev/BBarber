export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  reviews: number;
  specialties: string[];
}

export interface Barbershop {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  address: string;
  phone: string;
  hours: string;
  services: Service[];
  products: Product[];
  team: TeamMember[];
}