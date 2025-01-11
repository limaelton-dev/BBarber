"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "./tabs/profile-settings";
import { BusinessSettings } from "./tabs/business-settings";
import { WorkingHoursSettings } from "./tabs/working-hours-settings";
import { NotificationSettings } from "./tabs/notification-settings";

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="w-full flex flex-wrap gap-2 h-auto p-2">
        <TabsTrigger value="profile" className="flex-1">Perfil</TabsTrigger>
        <TabsTrigger value="business" className="flex-1">Empresa</TabsTrigger>
        <TabsTrigger value="hours" className="flex-1">Horários</TabsTrigger>
        <TabsTrigger value="notifications" className="flex-1">Notificações</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="space-y-4">
        <ProfileSettings />
      </TabsContent>

      <TabsContent value="business" className="space-y-4">
        <BusinessSettings />
      </TabsContent>

      <TabsContent value="hours" className="space-y-4">
        <WorkingHoursSettings />
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4">
        <NotificationSettings />
      </TabsContent>
    </Tabs>
  );
}