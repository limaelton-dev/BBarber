"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useBookingFlowStore } from "@/lib/stores/use-booking-flow-store";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

interface Step {
  id: string;
  title: string;
}

interface BookingStepTabsProps {
  steps: readonly Step[];
}

export function BookingStepTabs({ steps }: BookingStepTabsProps) {
  const { step: currentStep, setStep, canProceed } = useBookingFlowStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  // Center the current step when it changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const currentStepElement = container.children[currentStepIndex] as HTMLElement;
      
      if (currentStepElement) {
        const containerWidth = container.offsetWidth;
        const stepWidth = currentStepElement.offsetWidth;
        const scrollLeft = currentStepElement.offsetLeft - (containerWidth / 2) + (stepWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth"
        });
      }
    }
  }, [currentStep, currentStepIndex]);

  return (
    <div 
      ref={scrollContainerRef}
      className="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar snap-x snap-mandatory"
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isCurrent = step.id === currentStep;
        const isDisabled = index > currentStepIndex && !canProceed();

        return (
          <Button
            key={step.id}
            variant="ghost"
            size="sm"
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-full px-4 snap-center flex-shrink-0",
              isCurrent && "bg-primary/10 text-primary",
              isDisabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => !isDisabled && setStep(step.id as any)}
            disabled={isDisabled}
          >
            <div
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full border",
                isCompleted && "bg-primary border-primary",
                isCurrent && "border-primary",
                !isCompleted && !isCurrent && "border-muted"
              )}
            >
              {isCompleted ? (
                <Check className="h-3 w-3 text-primary-foreground" />
              ) : (
                <span
                  className={cn(
                    "text-xs",
                    isCurrent && "text-primary",
                    !isCurrent && "text-muted-foreground"
                  )}
                >
                  {index + 1}
                </span>
              )}
            </div>
            <span>{step.title}</span>
          </Button>
        );
      })}
    </div>
  );
}