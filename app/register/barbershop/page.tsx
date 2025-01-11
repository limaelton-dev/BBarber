"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { BasicInfoStep } from "@/components/register/basic-info-step";
import { ContactInfoStep } from "@/components/register/contact-info-step";
import { WorkingHoursStep } from "@/components/register/working-hours-step";
import { FinishStep } from "@/components/register/finish-step";

const steps = [
  { id: "basic-info", title: "Informações Básicas" },
  { id: "contact", title: "Contato" },
  { id: "hours", title: "Horários" },
  { id: "finish", title: "Finalizar" },
];

export default function BarbershopRegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">Cadastro de Barbearia</h1>
          <p className="text-muted-foreground text-lg">
            {steps[currentStep].title} ({currentStep + 1} de {steps.length})
          </p>
          <Progress value={progress} className="mt-6" />
        </div>

        <Card className="p-8 shadow-lg">
          <Tabs value={steps[currentStep].id}>
            <TabsContent value="basic-info">
              <BasicInfoStep onNext={nextStep} />
            </TabsContent>
            <TabsContent value="contact">
              <ContactInfoStep onNext={nextStep} onBack={prevStep} />
            </TabsContent>
            <TabsContent value="hours">
              <WorkingHoursStep onNext={nextStep} onBack={prevStep} />
            </TabsContent>
            <TabsContent value="finish">
              <FinishStep onBack={prevStep} />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}