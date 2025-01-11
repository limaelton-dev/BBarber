"use client";

import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Scissors className="h-6 w-6" />
          <span className="text-xl font-bold">Business Barber</span>
        </Link>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="ghost">
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Criar Conta</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Button asChild size="sm">
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}