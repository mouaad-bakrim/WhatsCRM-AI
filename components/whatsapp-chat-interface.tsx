"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Phone, Video, MoreVertical, Paperclip } from 'lucide-react';

export function WhatsAppChatInterface() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      sender: "Jean Dupont",
      content: "Bonjour, je suis intéressé par vos services premium. Pouvez-vous me donner plus d'informations ?",
      timestamp: "14:30",
      type: "received",
      status: "read"
    },
    {
      id: 2,
      sender: "Vous",
      content: "Bonjour Jean ! Merci pour votre intérêt. Nos services premium incluent un support 24/7, des fonctionnalités avancées et une intégration complète.",
      timestamp: "14:32",
      type: "sent",
      status: "read"
    },
    {
      id: 3,
      sender: "Jean Dupont",
      content: "Parfait ! Quel est le tarif mensuel ?",
      timestamp: "14:35",
      type: "received",
      status: "read"
    },
    {
      id: 4,
      sender: "Vous",
      content: "Le tarif est de 99€/mois. Souhaitez-vous que je vous envoie une présentation détaillée ?",
      timestamp: "14:37",
      type: "sent",
      status: "delivered"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Logique d'envoi de message
      console.log("Message envoyé:", message);
      setMessage("");
    }
  };

  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jean Dupont" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">Jean Dupont</CardTitle>
              <CardDescription className="text-sm">
                En ligne • +33123456789
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
              Actif
            </Badge>
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        {/* Zone de messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.type === 'sent'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs opacity-70">{msg.timestamp}</span>
                  {msg.type === 'sent' && (
                    <span className="text-xs opacity-70">
                      {msg.status === 'read' ? '✓✓' : '✓'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Zone de saisie */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Tapez votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
