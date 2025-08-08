"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users2, MessageSquare, Phone, CheckCircle } from 'lucide-react';

export function TeamActivity() {
  const activities = [
    {
      user: "Marie Dubois",
      avatar: "MD",
      action: "a envoyé 12 messages",
      time: "Il y a 5 min",
      type: "message",
      status: "online"
    },
    {
      user: "Pierre Durand",
      avatar: "PD",
      action: "a passé un appel client",
      time: "Il y a 15 min",
      type: "call",
      status: "busy"
    },
    {
      user: "Sophie Martin",
      avatar: "SM",
      action: "a qualifié 3 prospects",
      time: "Il y a 30 min",
      type: "qualification",
      status: "online"
    },
    {
      user: "Marie Dubois",
      avatar: "MD",
      action: "a créé une campagne",
      time: "Il y a 1h",
      type: "campaign",
      status: "online"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "busy": return "bg-orange-500";
      case "away": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "message": return MessageSquare;
      case "call": return Phone;
      case "qualification": return CheckCircle;
      default: return MessageSquare;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users2 className="h-5 w-5" />
          Activité de l'équipe
        </CardTitle>
        <CardDescription>
          Actions récentes des membres de l'équipe
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const TypeIcon = getTypeIcon(activity.type);
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/placeholder-32px.png?height=32&width=32`} alt={activity.user} />
                    <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(activity.status)}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{' '}
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <TypeIcon className="h-4 w-4 text-muted-foreground" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
