"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bot, MessageSquare, Send, Zap, History, ExternalLink, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { WhatsAppChatInterface } from "@/components/whatsapp-chat-interface";
import { AIAssistantPanel } from "@/components/ai-assistant-panel";
import { ModeToggle } from "@/components/mode-toggle";

const conversations = [
  {
    id: 1,
    client: "Jean Dupont",
    avatar: "JD",
    derniereMessage: "Merci pour les informations, je vais y réfléchir.",
    timestamp: "Il y a 2 heures",
    statut: "En attente",
    nonLu: 0
  },
  {
    id: 2,
    client: "Marie Martin",
    avatar: "MM",
    derniereMessage: "Pouvez-vous m'envoyer plus de détails ?",
    timestamp: "Il y a 5 heures",
    statut: "Nouveau",
    nonLu: 2
  },
];

const historique = [
  {
    id: 1,
    type: "message",
    expediteur: "Vous",
    contenu: "Bonjour Jean, j'espère que vous allez bien. Je vous contacte concernant notre offre premium.",
    timestamp: "Aujourd'hui 14:30",
    statut: "Lu"
  },
  {
    id: 2,
    type: "message",
    expediteur: "Jean Dupont",
    contenu: "Bonjour, oui merci. Pouvez-vous me donner plus de détails sur les tarifs ?",
    timestamp: "Aujourd'hui 14:45",
    statut: "Lu"
  },
  {
    id: 3,
    type: "ia",
    expediteur: "IA Assistant",
    contenu: "Suggestion de réponse générée automatiquement basée sur le profil client.",
    timestamp: "Aujourd'hui 14:46",
    statut: "Suggestion"
  },
];

export default function CRMPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState("");
  const [suggestionIA, setSuggestionIA] = useState("");

  const genererSuggestion = () => {
    // Simulation de génération IA
    const suggestions = [
      "Bonjour Jean, nos tarifs premium commencent à 99€/mois avec tous les avantages inclus. Souhaitez-vous que je vous envoie une présentation détaillée ?",
      "Je comprends votre intérêt. Nos forfaits sont flexibles et s'adaptent à vos besoins. Puis-je vous proposer un appel de 15 minutes pour en discuter ?",
      "Excellente question ! Nos prix sont très compétitifs. Permettez-moi de vous expliquer la valeur ajoutée de notre solution premium."
    ];
    
    const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setSuggestionIA(suggestion);
  };

  const utiliserSuggestion = () => {
    setMessage(suggestionIA);
    setSuggestionIA("");
  };

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">CRM & Intelligence Artificielle</h1>
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex-1 p-6">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Liste des conversations */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Conversations
              </CardTitle>
              <CardDescription>
                Historique WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedConversation.id === conv.id 
                        ? "border-primary bg-primary/5" 
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedConversation(conv)}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} alt={conv.client} />
                        <AvatarFallback>{conv.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{conv.client}</p>
                          {conv.nonLu > 0 && (
                            <Badge variant="destructive" className="text-xs">
                              {conv.nonLu}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {conv.derniereMessage}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {conv.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interface de conversation */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} alt={selectedConversation.client} />
                    <AvatarFallback>{selectedConversation.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{selectedConversation.client}</CardTitle>
                    <CardDescription>En ligne il y a 5 minutes</CardDescription>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ouvrir WhatsApp
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="conversation" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="conversation">Conversation</TabsTrigger>
                  <TabsTrigger value="ia">Assistant IA</TabsTrigger>
                  <TabsTrigger value="integration">Intégrations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="conversation" className="space-y-4">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <WhatsAppChatInterface />
                    <div className="space-y-4">
                      <AIAssistantPanel />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ia" className="space-y-4">
                  <div className="grid gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Bot className="h-5 w-5" />
                          Réponses automatiques
                        </CardTitle>
                        <CardDescription>
                          Configuration de l'IA pour les réponses automatiques
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Ton de la réponse</label>
                          <Select defaultValue="professionnel">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="professionnel">Professionnel</SelectItem>
                              <SelectItem value="amical">Amical</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Délai de réponse automatique</label>
                          <Select defaultValue="5min">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immédiat">Immédiat</SelectItem>
                              <SelectItem value="5min">5 minutes</SelectItem>
                              <SelectItem value="30min">30 minutes</SelectItem>
                              <SelectItem value="1h">1 heure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button className="w-full">
                          <Zap className="h-4 w-4 mr-2" />
                          Activer les réponses automatiques
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Messages types générés par IA</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm">Message de bienvenue</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              "Bonjour ! Merci de nous avoir contactés. Comment puis-je vous aider aujourd'hui ?"
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm">Suivi commercial</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              "J'espère que vous avez eu le temps de réfléchir à notre proposition. Avez-vous des questions ?"
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm">Relance</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              "Bonjour, je me permets de revenir vers vous concernant votre demande. Êtes-vous toujours intéressé ?"
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="integration" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>HubSpot</CardTitle>
                        <CardDescription>
                          Synchroniser avec votre CRM HubSpot
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Statut</span>
                            <Badge variant="outline">Non connecté</Badge>
                          </div>
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Connecter HubSpot
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Zapier</CardTitle>
                        <CardDescription>
                          Automatiser avec 5000+ applications
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Statut</span>
                            <Badge variant="outline">Non connecté</Badge>
                          </div>
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Connecter Zapier
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Salesforce</CardTitle>
                        <CardDescription>
                          Intégration avec Salesforce CRM
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Statut</span>
                            <Badge variant="secondary">Connecté</Badge>
                          </div>
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Configurer
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>API Webhook</CardTitle>
                        <CardDescription>
                          Intégration personnalisée via API
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Input placeholder="URL du webhook" />
                          <Button variant="outline" className="w-full">
                            Tester la connexion
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
