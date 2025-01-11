"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/register/image-upload";

interface BasicInfoStepProps {
  onNext: () => void;
}

export function BasicInfoStep({ onNext }: BasicInfoStepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <Label className="text-lg">Logo da Barbearia</Label>
          <p className="text-sm text-muted-foreground mb-4">
            Adicione uma logo para sua barbearia se destacar
          </p>
          <ImageUpload className="mt-2" />
        </div>

        <div>
          <Label htmlFor="name" className="text-lg">Nome da Barbearia</Label>
          <Input 
            id="name" 
            placeholder="Digite o nome da sua barbearia" 
            className="mt-2 h-12" 
          />
        </div>

        <div>
          <Label htmlFor="description" className="text-lg">Descrição</Label>
          <p className="text-sm text-muted-foreground mb-2">
            Conte um pouco sobre sua barbearia e o que a torna especial
          </p>
          <Textarea
            id="description"
            placeholder="Descreva sua barbearia..."
            className="mt-2 min-h-[120px] resize-none"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onNext} size="lg" className="w-[200px]">
          Próximo
        </Button>
      </div>
    </div>
  );
}