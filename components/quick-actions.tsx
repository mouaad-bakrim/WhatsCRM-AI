"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Target, Upload, Bot, Phone } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      title: "Nouveau message",
      description: "Envoyer un message WhatsApp",
      icon: MessageSquare,
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Ajouter client",
      description: "Créer un nouveau contact",
      icon: Users,
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Nouvelle campagne",
      description: "Lancer une campagne marketing",
      icon: Target,
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "Importer données",
      description: "Importer fichier CSV/Excel",
      icon: Upload,
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      title: "Assistant IA",
      description: "Générer réponse automatique",
      icon: Bot,
      color: "bg-indigo-500 hover:bg-indigo-600"
    },
    {
      title: "Appel client",
      description: "Passer un appel téléphonique",
      icon: Phone,
      color: "bg-pink-500 hover:bg-pink-600"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
        <CardDescription>
          Raccourcis vers les fonctionnalités principales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-muted/50"
            >
              <action.icon className="h-5 w-5" />
              <div className="text-center">
                <p className="text-sm font-medium">{action.title}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
