"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { WhatsAppStatusTracker } from "@/components/whatsapp-status-tracker";
import { WhatsAppChatInterface } from "@/components/whatsapp-chat-interface";
import { AIAssistantPanel } from "@/components/ai-assistant-panel";
import { ModeToggle } from "@/components/mode-toggle";

export default function WhatsAppMonitorPage() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-xl font-semibold">Monitoring WhatsApp</h1>
            <p className="text-sm text-muted-foreground">
              Surveillance et gestion de votre connexion WhatsApp Business
            </p>
          </div>
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex-1 p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <WhatsAppStatusTracker />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <WhatsAppChatInterface />
            <AIAssistantPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
