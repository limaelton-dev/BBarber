"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useBookingFlowStore } from "@/lib/stores/use-booking-flow-store";
import { Progress } from "@/components/ui/progress";
import confetti from "canvas-confetti";
import { BookingStepTabs } from "./booking-step-tabs";
import { BookingConfirmation } from "./booking-confirmation";
import { ServicesStep } from "./steps/services-step";
import { ProductsStep } from "./steps/products-step";
import { ProfessionalStep } from "./steps/professional-step";
import { DateTimeStep } from "./steps/datetime-step";

const steps = [
  { id: "services", title: "Serviços" },
  { id: "products", title: "Produtos" },
  { id: "professional", title: "Profissional" },
  { id: "datetime", title: "Data e Hora" },
  { id: "confirmation", title: "Confirmação" },
] as const;

export function BookingFlow() {
  const { step, canProceed, setStep } = useBookingFlowStore();
  
  const currentStepIndex = steps.findIndex((s) => s.id === step);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(steps[currentStepIndex + 1].id as any);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setStep(steps[currentStepIndex - 1].id as any);
    }
  };

  const handleConfirm = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const renderStepContent = () => {
    switch (step) {
      case "services":
        return <ServicesStep />;
      case "products":
        return <ProductsStep />;
      case "professional":
        return <ProfessionalStep />;
      case "datetime":
        return <DateTimeStep />;
      case "confirmation":
        return <BookingConfirmation onConfirm={handleConfirm} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 min-w-[320px]">
      <div className="space-y-2">
        <BookingStepTabs steps={steps} />
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-4">
        {renderStepContent()}
        
        {step !== "confirmation" && (
          <div className="flex justify-between pt-4">
            {currentStepIndex > 0 && (
              <Button variant="outline" onClick={handleBack}>
                Voltar
              </Button>
            )}
            <Button 
              className="ml-auto"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              {currentStepIndex === steps.length - 2 ? "Finalizar" : "Próximo"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}