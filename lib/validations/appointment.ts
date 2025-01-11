import * as z from "zod";

export const appointmentSchema = z.object({
  barbershopId: z.string().uuid("ID da barbearia inválido"),
  clientId: z.string().uuid("ID do cliente inválido"),
  employeeId: z.string().uuid("ID do funcionário inválido"),
  serviceId: z.string().uuid("ID do serviço inválido"),
  date: z.date({
    required_error: "Data é obrigatória",
    invalid_type_error: "Data inválida",
  }),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Horário inválido"),
  status: z.enum(["pending", "confirmed", "cancelled", "completed"]),
});