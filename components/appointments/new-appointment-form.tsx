"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  clientId: z.string().min(1, "Selecione um cliente"),
  barberId: z.string().min(1, "Selecione um barbeiro"),
  services: z.array(z.string()).min(1, "Selecione pelo menos um serviço"),
  products: z.array(z.string()),
  date: z.date({ required_error: "Selecione uma data" }),
  time: z.string().min(1, "Selecione um horário"),
});

const mockClients = [
  { id: "1", name: "João Silva" },
  { id: "2", name: "Maria Santos" },
];

const mockBarbers = [
  { id: "1", name: "Carlos Silva" },
  { id: "2", name: "André Lima" },
];

const mockServices = [
  { id: "1", name: "Corte", price: 45 },
  { id: "2", name: "Barba", price: 35 },
  { id: "3", name: "Corte + Barba", price: 75 },
];

const mockProducts = [
  { id: "1", name: "Pomada", price: 35 },
  { id: "2", name: "Óleo para Barba", price: 45 },
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

export function NewAppointmentForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      products: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: Implement appointment creation
  }

  const calculateTotal = () => {
    const servicesTotal = mockServices
      .filter((service) => selectedServices.includes(service.id))
      .reduce((acc, service) => acc + service.price, 0);

    const productsTotal = mockProducts
      .filter((product) => selectedProducts.includes(product.id))
      .reduce((acc, product) => acc + product.price, 0);

    return servicesTotal + productsTotal;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="clientId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cliente</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um cliente" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mockClients.map((client) => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="barberId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Barbeiro</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um barbeiro" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mockBarbers.map((barber) => (
                      <SelectItem key={barber.id} value={barber.id}>
                        {barber.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horário</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <FormLabel>Serviços</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                {mockServices.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center space-x-3 space-y-0 rounded-md border p-3"
                  >
                    <Checkbox
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={(checked) => {
                        const newServices = checked
                          ? [...selectedServices, service.id]
                          : selectedServices.filter((id) => id !== service.id);
                        setSelectedServices(newServices);
                        form.setValue("services", newServices);
                      }}
                    />
                    <div className="flex flex-1 items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{service.name}</p>
                        <p className="text-sm text-muted-foreground">
                          R$ {service.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="products"
          render={() => (
            <FormItem>
              <FormLabel>Produtos</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                {mockProducts.map((product) => (
                  <label
                    key={product.id}
                    className="flex items-center space-x-3 space-y-0 rounded-md border p-3"
                  >
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={(checked) => {
                        const newProducts = checked
                          ? [...selectedProducts, product.id]
                          : selectedProducts.filter((id) => id !== product.id);
                        setSelectedProducts(newProducts);
                        form.setValue("products", newProducts);
                      }}
                    />
                    <div className="flex flex-1 items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          R$ {product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-lg font-medium">
            Total: R$ {calculateTotal().toFixed(2)}
          </div>
          <Button type="submit">Confirmar Agendamento</Button>
        </div>
      </form>
    </Form>
  );
}