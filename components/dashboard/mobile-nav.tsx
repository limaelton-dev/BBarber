import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BarChart3,
  Calendar,
  Home,
  Menu,
  Package,
  Settings,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { icon: Home, label: 'Início', href: '/dashboard' },
  { icon: Calendar, label: 'Agenda', href: '/dashboard/appointments' },
  { icon: Users, label: 'Funcionários', href: '/dashboard/employees' },
  { icon: Package, label: 'Produtos', href: '/dashboard/products' },
  { icon: BarChart3, label: 'Financeiro', href: '/dashboard/finance' },
  { icon: Settings, label: 'Configurações', href: '/dashboard/settings' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        {/* Adicionando o título obrigatório */}
        <SheetTitle className="text-lg font-semibold px-6 py-4 border-b">
          BarberBook
        </SheetTitle>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="p-4">
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  <Button
                    variant={pathname === item.href ? 'secondary' : 'ghost'}
                    className={cn(
                      'w-full justify-start gap-2',
                      pathname === item.href && 'bg-muted'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
