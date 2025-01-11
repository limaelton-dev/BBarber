"use client";

import { ClientHeader } from "@/components/layout/client-header";
import { useUser } from "@/lib/auth/auth-hooks";

export default function BarbershopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = useUser();
  
  const user = profile ? {
    name: profile.full_name,
    email: "", // Email is stored in auth.users
    image: profile.avatar_url,
  } : undefined;

  return (
    <div>
      <ClientHeader user={user} />
      {children}
    </div>
  );
}