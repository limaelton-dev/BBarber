import { Providers } from "./providers";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/use-toast";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BarberBook - Sistema de Agendamento para Barbearias",
  description: "Sistema completo de gestão e agendamentos para barbearias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}