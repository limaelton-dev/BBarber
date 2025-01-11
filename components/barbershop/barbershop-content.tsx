"use client";

import { useState, useEffect } from "react";
import { BarbershopHeader } from "@/components/barbershop/barbershop-header";
import { BarbershopInfo } from "@/components/barbershop/barbershop-info";
import { BookingFlow } from "@/components/booking/booking-flow";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { Barbershop } from "@/lib/types/barbershop";
import { cn } from "@/lib/utils";

interface BarbershopContentProps {
  barbershop: Barbershop;
}

export function BarbershopContent({ barbershop }: BarbershopContentProps) {
  const [isBooking, setIsBooking] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showBookingContent, setShowBookingContent] = useState(false);

  useEffect(() => {
    if (isBooking) {
      setShowBookingContent(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(false);
      const timer = setTimeout(() => {
        setShowBookingContent(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isBooking]);

  const handleStartBooking = () => {
    setIsTransitioning(true);
    setIsBooking(true);
  };

  const handleCancelBooking = () => {
    setIsTransitioning(true);
    setIsBooking(false);
  };

  return (
    <div className="w-full min-w-[320px]">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-[1400px]">
        <BarbershopHeader barbershop={barbershop} />
        
        {/* Info View */}
        <div 
          className={cn(
            "transition-all duration-300 ease-in-out absolute w-full left-0 px-4",
            isBooking ? "opacity-0 translate-x-[-100%]" : "opacity-100 translate-x-0"
          )}
        >
          <div className="mt-6 max-w-[1400px] mx-auto">
            <Button 
              size="lg" 
              className="w-full md:w-[300px] md:mx-auto md:block text-lg font-semibold py-6"
              onClick={handleStartBooking}
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Agendar Horário
            </Button>
          </div>

          <div className="mt-8 max-w-[1400px] mx-auto">
            <BarbershopInfo barbershop={barbershop} />
          </div>
        </div>

        {/* Booking View */}
        {showBookingContent && (
          <div 
            className={cn(
              "transition-all duration-300 ease-in-out absolute w-full left-0 px-4",
              isBooking ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            )}
          >
            <div className="mt-6 max-w-[1400px] mx-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancelBooking}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <div className="md:max-w-3xl md:mx-auto">
                <BookingFlow />
              </div>
            </div>
          </div>
        )}

        {/* Spacer div to maintain container height */}
        <div className="h-[800px]" />
      </div>
    </div>
  );
}