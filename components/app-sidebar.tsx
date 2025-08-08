"use client";

import * as React from "react";
import { BarChart3, Bot, FileText, Home, MessageSquare, Settings, Target, Users, Users2, Upload, Star, Activity, Smartphone } from 'lucide-react';

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
    },
    {
      title: "Importation",
      url: "/import",
      icon: Upload,
    },
    {
      title: "Clients",
      url: "/clients",
      icon: Users,
    },
    {
      title: "Qualification",
      url: "/qualification",
      icon: Star,
    },
    {
      title: "Campagnes",
      url: "/campaigns",
      icon: Target,
    },
    {
      title: "Collaboration",
      url: "/collaboration",
      icon: Users2,
    },
    {
      title: "CRM & IA",
      url: "/crm",
      icon: Bot,
    },
    {
      title: "Monitoring WhatsApp",
      url: "/whatsapp-monitor",
      icon: Smartphone,
    },
    {
      title: "Paramètres",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MessageSquare className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">WhatsCRM AI</span>
            <span className="truncate text-xs">Automatisation WhatsApp</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
