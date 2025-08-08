"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, MessageSquare, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export function NotificationsPanel() {
  const notifications = [
    {
      id: 1,
      type: "urgent",
      title: "Client VIP en attente",
      message: "Jean Dupont attend une réponse depuis 25 minutes",
      time: "Il y a 2 min",
      unread: true
    },
    {
      id: 2,
      type: "message",
      title: "Nouveau message reçu",
      message: "Marie Martin a envoyé un message",
      time: "Il y a 5 min",
      unread: true
    },
    {
      id: 3,
      type: "success",
      title: "Campagne terminée",
      message: "Promotion Été 2024 - 45 conversions",
      time: "Il y a 1h",
      unread: false
    },
    {
      id: 4,
      type: "reminder",
      title: "Rappel programmé",
      message: "Appeler Pierre Durand à 15h00",
      time: "Il y a 2h",
      unread: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "urgent": return AlertTriangle;
      case "message": return MessageSquare;
      case "success": return CheckCircle;
      case "reminder": return Clock;
      default: return Bell;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgent": return "text-red-500";
      case "message": return "text-blue-500";
      case "success": return "text-green-500";
      case "reminder": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Alertes et messages importants
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Tout marquer comme lu
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => {
            const TypeIcon = getTypeIcon(notification.type);
            return (
              <div
                key={notification.id}
                className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                  notification.unread 
                    ? "bg-muted/50 border-primary/20" 
                    : "hover:bg-muted/30"
                }`}
              >
                <TypeIcon className={`h-4 w-4 mt-0.5 ${getTypeColor(notification.type)}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{notification.title}</p>
                    {notification.unread && (
                      <Badge variant="secondary" className="h-2 w-2 p-0 bg-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
