"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface FinishStepProps {
  onBack: () => void;
}

export function FinishStep({ onBack }: FinishStepProps) {
  const router = useRouter();

  const handleFinish = () => {
    // TODO: Submit all data
    router.push("/dashboard");
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Tudo Pronto!</h2>
        <p className="text-muted-foreground">
          Revise todas as informações antes de finalizar o cadastro.
          Você poderá editar essas informações posteriormente no painel de controle.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>Voltar</Button>
        <Button onClick={handleFinish}>Finalizar Cadastro</Button>
      </div>
    </div>
  );
}