"use client";

import { ClientHeader } from "@/components/layout/client-header";
import { useUser } from "@/lib/auth/auth-hooks";

export default function BarbershopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile } = useUser();
  
  const userInfo = profile ? {
    name: profile.full_name,
    email: user?.email ?? "",
    image: profile.avatar_url || undefined,
  } : undefined;

  return (
    <div>
      <ClientHeader user={userInfo} />
      {children}
    </div>
  );
}