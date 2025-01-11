"use client";

export const mockServices = [
  {
    id: "1",
    name: "Corte Masculino",
    description: "Corte tradicional ou moderno com acabamento perfeito",
    price: 45.0,
    duration: 30,
  },
  {
    id: "2",
    name: "Barba",
    description: "Barba feita com navalha e produtos especiais",
    price: 35.0,
    duration: 30,
  },
  {
    id: "3",
    name: "Corte + Barba",
    description: "Combo completo de corte e barba",
    price: 75.0,
    duration: 60,
  },
  {
    id: "4",
    name: "Pigmentação",
    description: "Disfarce com pigmentação para barba ou cabelo",
    price: 50.0,
    duration: 45,
  },
];

export const mockProducts = [
  {
    id: "1",
    name: "Pomada Modeladora",
    description: "Pomada para cabelo com fixação forte",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1597854710119-a5a38aaae0b5?w=800",
  },
  {
    id: "2",
    name: "Óleo para Barba",
    description: "Óleo hidratante para barba",
    price: 35.90,
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=800",
  },
  {
    id: "3",
    name: "Shampoo Especial",
    description: "Shampoo para cabelos masculinos",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800",
  },
];

export const mockProfessionals = [
  {
    id: "1",
    name: "Carlos Silva",
    role: "Barbeiro Senior",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    rating: 4.9,
    reviews: 156,
    specialties: ["Corte", "Barba", "Pigmentação"],
  },
  {
    id: "2",
    name: "Roberto Santos",
    role: "Barbeiro",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    rating: 4.7,
    reviews: 98,
    specialties: ["Corte", "Barba"],
  },
  {
    id: "3",
    name: "André Lima",
    role: "Barbeiro",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andre",
    rating: 4.8,
    reviews: 124,
    specialties: ["Corte", "Barba", "Desenho"],
  },
];