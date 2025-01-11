"use client";

import { Button } from "@/components/ui/button";
import { useBookingFlowStore } from "@/lib/stores/use-booking-flow-store";
import { formatCurrency } from "@/lib/utils/format";
import { CalendarDays, Clock, User } from "lucide-react";

interface BookingConfirmationProps {
  onConfirm: () => void;
}

export function BookingConfirmation({ onConfirm }: BookingConfirmationProps) {
  const {
    getSelectedServicesWithDetails,
    getSelectedProductsWithDetails,
    getSelectedProfessionalDetails,
    selectedDate,
    selectedTime,
    getTotalPrice,
  } = useBookingFlowStore();

  const services = getSelectedServicesWithDetails();
  const products = getSelectedProductsWithDetails();
  const professional = getSelectedProfessionalDetails();
  const total = getTotalPrice();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Resumo do Agendamento</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Profissional: {professional?.name}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>Data: {selectedDate?.toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Horário: {selectedTime}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">Serviços Selecionados</h4>
        <div className="space-y-1">
          {services.map((service) => (
            <div key={service.id} className="flex justify-between text-sm">
              <span>{service.name}</span>
              <span className="font-medium">{formatCurrency(service.price)}</span>
            </div>
          ))}
        </div>
      </div>

      {products.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium">Produtos Selecionados</h4>
          <div className="space-y-1">
            {products.map((product) => (
              <div key={product.id} className="flex justify-between text-sm">
                <span>{product.name}</span>
                <span className="font-medium">{formatCurrency(product.price)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="text-lg font-bold">
            {formatCurrency(total)}
          </span>
        </div>

        <Button 
          className="w-full" 
          size="lg"
          onClick={onConfirm}
        >
          Confirmar Agendamento
        </Button>
      </div>
    </div>
  );
}