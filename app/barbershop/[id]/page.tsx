import { BarbershopContent } from "@/components/barbershop/barbershop-content";
import { barbershops } from "@/lib/data/barbershops";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return barbershops.map((barbershop) => ({
    id: barbershop.id,
  }));
}

export default function BarbershopPage({ params }: BarbershopPageProps) {
  const barbershop = barbershops.find((b) => b.id === params.id);

  if (!barbershop) {
    notFound();
  }

  return <BarbershopContent barbershop={barbershop} />;
}