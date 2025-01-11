"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  title: string;
}

interface BookingStepIndicatorProps {
  steps: readonly Step[];
  currentStep: string;
}

export function BookingStepIndicator({ steps, currentStep }: BookingStepIndicatorProps) {
  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <div className="hidden sm:flex items-center justify-between">
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isCurrent = step.id === currentStep;

        return (
          <div
            key={step.id}
            className={cn(
              "flex items-center",
              index !== steps.length - 1 && "flex-1"
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border-2",
                isCompleted && "bg-primary border-primary",
                isCurrent && "border-primary",
                !isCompleted && !isCurrent && "border-muted"
              )}
            >
              {isCompleted ? (
                <Check className="w-4 h-4 text-primary-foreground" />
              ) : (
                <span
                  className={cn(
                    "text-sm font-medium",
                    isCurrent && "text-primary",
                    !isCurrent && "text-muted-foreground"
                  )}
                >
                  {index + 1}
                </span>
              )}
            </div>
            
            <span
              className={cn(
                "ml-3 text-sm font-medium",
                isCurrent && "text-primary",
                !isCurrent && "text-muted-foreground"
              )}
            >
              {step.title}
            </span>

            {index !== steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 ml-3 h-0.5",
                  isCompleted ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}