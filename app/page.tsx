import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Scissors } from 'lucide-react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center space-x-2">
              <Scissors className="h-12 w-12" />
              <h1 className="text-4xl font-bold">Business Barber</h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Sistema completo de gestão e agendamentos para barbearias. 
              Gerencie sua barbearia ou encontre o melhor horário para seu corte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-12">
              <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Para Barbearias</h2>
                <p className="text-muted-foreground flex-grow">
                  Gerencie sua barbearia com ferramentas profissionais. 
                  Controle agendamentos, funcionários e finanças em um só lugar.
                </p>
                <Link href="/register/barbershop" className="mt-6">
                  <Button className="w-full h-11">Cadastrar Barbearia</Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">Para Clientes</h2>
                <p className="text-muted-foreground flex-grow">
                  Encontre as melhores barbearias e agende seu horário 
                  de forma rápida e conveniente.
                </p>
                <Link href="/search" className="mt-6">
                  <Button className="w-full h-11" variant="secondary">
                    Encontrar Barbearia
                  </Button>
                </Link>
              </Card>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8">Recursos Principais</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <feature.icon className="h-8 w-8 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const features = [
  {
    title: 'Gestão Completa',
    description: 'Controle total sobre agendamentos, funcionários e finanças da sua barbearia.',
    icon: Scissors,
  },
  {
    title: 'Agendamento Fácil',
    description: 'Interface intuitiva para clientes agendarem horários com seus profissionais favoritos.',
    icon: Scissors,
  },
  {
    title: 'Análise de Dados',
    description: 'Relatórios e gráficos detalhados para acompanhar o desempenho do seu negócio.',
    icon: Scissors,
  },
];