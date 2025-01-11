import * as z from "zod";

export const barbershopSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("Email inválido"),
  address: z.object({
    street: z.string().min(3, "Rua é obrigatória"),
    number: z.string().min(1, "Número é obrigatório"),
    complement: z.string().optional(),
    district: z.string().min(2, "Bairro é obrigatório"),
    city: z.string().min(2, "Cidade é obrigatória"),
    state: z.string().length(2, "Estado inválido"),
    postalCode: z.string().length(8, "CEP inválido"),
  }),
});

export const serviceSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  price: z.number().min(0, "Preço deve ser maior que zero"),
  duration: z.number().min(15, "Duração mínima de 15 minutos"),
  isActive: z.boolean().default(true),
});

export const productSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  price: z.number().min(0, "Preço deve ser maior que zero"),
  costPrice: z.number().min(0, "Custo deve ser maior que zero"),
  stock: z.number().min(0, "Estoque não pode ser negativo"),
  isActive: z.boolean().default(true),
});