import { addDays, subDays } from "date-fns";
import { Appointment, Barber } from "@/lib/types/appointments";

export const mockBarbers: Barber[] = [
  {
    id: "1",
    name: "Carlos Silva",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    services: ["1", "2", "3"],
  },
  {
    id: "2",
    name: "Roberto Santos",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    services: ["1", "2"],
  },
  {
    id: "3",
    name: "André Lima",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andre",
    services: ["1", "2", "4"],
  },
];

const today = new Date();

export const mockAppointments: Appointment[] = [
  // Hoje
  {
    id: "1",
    client: {
      id: "c1",
      name: "João Silva",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=João",
    },
    barber: mockBarbers[0],
    services: [
      { id: "1", name: "Corte", price: 45 },
      { id: "2", name: "Barba", price: 35 },
    ],
    date: today.toISOString(),
    time: "09:30",
    duration: 60,
    status: "confirmed",
  },
  {
    id: "2",
    client: {
      id: "c2",
      name: "Pedro Costa",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    },
    barber: mockBarbers[1],
    services: [
      { id: "1", name: "Corte", price: 45 },
    ],
    date: today.toISOString(),
    time: "10:00",
    duration: 30,
    status: "confirmed",
  },
  {
    id: "3",
    client: {
      id: "c3",
      name: "Lucas Mendes",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
    },
    barber: mockBarbers[2],
    services: [
      { id: "1", name: "Corte", price: 45 },
      { id: "4", name: "Pigmentação", price: 50 },
    ],
    date: today.toISOString(),
    time: "14:00",
    duration: 75,
    status: "pending",
  },

  // Amanhã
  {
    id: "4",
    client: {
      id: "c4",
      name: "Rafael Santos",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafael",
    },
    barber: mockBarbers[0],
    services: [
      { id: "1", name: "Corte", price: 45 },
      { id: "2", name: "Barba", price: 35 },
    ],
    date: addDays(today, 1).toISOString(),
    time: "11:00",
    duration: 60,
    status: "confirmed",
  },

  // Ontem
  {
    id: "5",
    client: {
      id: "c5",
      name: "Marcos Paulo",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcos",
    },
    barber: mockBarbers[1],
    services: [
      { id: "1", name: "Corte", price: 45 },
    ],
    date: subDays(today, 1).toISOString(),
    time: "15:30",
    duration: 30,
    status: "completed",
  },
];