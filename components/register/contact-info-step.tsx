"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ContactInfoStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function ContactInfoStep({ onNext, onBack }: ContactInfoStepProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <Label htmlFor="email" className="text-lg">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="contato@suabarbearia.com" 
            className="mt-2 h-12" 
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-lg">Telefone</Label>
          <Input 
            id="phone" 
            placeholder="(00) 00000-0000" 
            className="mt-2 h-12" 
          />
        </div>

        <div>
          <Label htmlFor="address" className="text-lg">Endereço Completo</Label>
          <Input 
            id="address" 
            placeholder="Rua, número, bairro" 
            className="mt-2 h-12" 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className="text-lg">Cidade</Label>
            <Input id="city" className="mt-2 h-12" />
          </div>
          <div>
            <Label htmlFor="state" className="text-lg">Estado</Label>
            <Input id="state" className="mt-2 h-12" />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={onBack} 
          size="lg"
          className="w-[200px]"
        >
          Voltar
        </Button>
        <Button 
          onClick={onNext} 
          size="lg"
          className="w-[200px]"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}