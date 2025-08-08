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
import { Users2, MessageSquare, Phone, Calendar, Bell, CheckCircle, Clock, AlertCircle, Plus, Send } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";

const equipe = [
  {
    id: 1,
    nom: "Marie Dubois",
    role: "Manager",
    statut: "En ligne",
    avatar: "MD",
    messagesTraites: 45,
    appelsEffectues: 12,
    derniereSeen: "Maintenant"
  },
  {
    id: 2,
    nom: "Pierre Durand",
    role: "Agent",
    statut: "Occupé",
    avatar: "PD",
    messagesTraites: 32,
    appelsEffectues: 8,
    derniereSeen: "Il y a 5 min"
  },
  {
    id: 3,
    nom: "Sophie Martin",
    role: "Agent",
    statut: "Absent",
    avatar: "SM",
    messagesTraites: 28,
    appelsEffectues: 15,
    derniereSeen: "Il y a 2h"
  },
];

const taches = [
  {
    id: 1,
    titre: "Rappeler Jean Dupont",
    description: "Suivi commercial pour la proposition premium",
    assigneA: "Pierre Durand",
    priorite: "Haute",
    echeance: "2024-01-16 14:00",
    statut: "En cours",
    client: "Jean Dupont"
  },
  {
    id: 2,
    titre: "Envoyer devis à Marie Martin",
    description: "Préparer et envoyer le devis personnalisé",
    assigneA: "Sophie Martin",
    priorite: "Moyenne",
    echeance: "2024-01-17 10:00",
    statut: "À faire",
    client: "Marie Martin"
  },
  {
    id: 3,
    titre: "Relance prospect Lucas",
    description: "Relancer le prospect après 1 semaine sans réponse",
    assigneA: "Marie Dubois",
    priorite: "Basse",
    echeance: "2024-01-18 16:00",
    statut: "Terminé",
    client: "Lucas Bernard"
  },
];

const notifications = [
  {
    id: 1,
    type: "message",
    titre: "Nouveau message de Jean Dupont",
    description: "Message reçu il y a 2 minutes",
    timestamp: "Il y a 2 min",
    lu: false
  },
  {
    id: 2,
    type: "tache",
    titre: "Tâche assignée par Marie",
    description: "Rappeler le client VIP avant 17h",
    timestamp: "Il y a 15 min",
    lu: false
  },
  {
    id: 3,
    type: "appel",
    titre: "Appel manqué",
    description: "Sophie Martin - Client urgent",
    timestamp: "Il y a 30 min",
    lu: true
  },
];

export default function CollaborationPage() {
  const [messageEquipe, setMessageEquipe] = useState("");
  const [nouvelleTache, setNouvelleTache] = useState({
    titre: "",
    description: "",
    assigneA: "",
    priorite: "Moyenne",
    echeance: ""
  });

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "En ligne": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Occupé": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Absent": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getPrioriteColor = (priorite: string) => {
    switch (priorite) {
      case "Haute": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Moyenne": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Basse": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatutTacheColor = (statut: string) => {
    switch (statut) {
      case "Terminé": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "En cours": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "À faire": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Collaboration & Équipe</h1>
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-6">
        <Tabs defaultValue="equipe" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="equipe">Équipe</TabsTrigger>
            <TabsTrigger value="taches">Tâches</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appels">Historique d'appels</TabsTrigger>
          </TabsList>
          
          <TabsContent value="equipe" className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Liste de l'équipe */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users2 className="h-5 w-5" />
                    Membres de l'équipe
                  </CardTitle>
                  <CardDescription>
                    Statut et performance de votre équipe
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {equipe.map((membre) => (
                      <div key={membre.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} alt={membre.nom} />
                            <AvatarFallback>{membre.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{membre.nom}</h3>
                              <Badge variant="outline">{membre.role}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span>{membre.messagesTraites} messages</span>
                              <span>{membre.appelsEffectues} appels</span>
                              <span>{membre.derniereSeen}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatutColor(membre.statut)}>
                            {membre.statut}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chat interne */}
              <Card>
                <CardHeader>
                  <CardTitle>Chat interne</CardTitle>
                  <CardDescription>
                    Communication entre agents
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-64 overflow-y-auto border rounded-lg p-3 space-y-3">
                    <div className="flex items-start gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">MD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Marie</p>
                        <p className="text-sm text-muted-foreground">
                          N'oubliez pas le rappel client à 15h
                        </p>
                        <p className="text-xs text-muted-foreground">Il y a 10 min</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">PD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Pierre</p>
                        <p className="text-sm text-muted-foreground">
                          C'est noté, merci !
                        </p>
                        <p className="text-xs text-muted-foreground">Il y a 8 min</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="Tapez votre message..."
                      value={messageEquipe}
                      onChange={(e) => setMessageEquipe(e.target.value)}
                    />
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="taches" className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Liste des tâches */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Tâches assignées</CardTitle>
                  <CardDescription>
                    Suivi des tâches et rappels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {taches.map((tache) => (
                      <div key={tache.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold">{tache.titre}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {tache.description}
                            </p>
                          </div>
                          <Badge className={getStatutTacheColor(tache.statut)}>
                            {tache.statut}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span>Assigné à: <strong>{tache.assigneA}</strong></span>
                            <Badge className={getPrioriteColor(tache.priorite)} variant="outline">
                              {tache.priorite}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(tache.echeance).toLocaleString('fr-FR')}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Créer une tâche */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Nouvelle tâche
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Titre</label>
                    <Input
                      placeholder="Titre de la tâche"
                      value={nouvelleTache.titre}
                      onChange={(e) => setNouvelleTache({...nouvelleTache, titre: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      placeholder="Description détaillée"
                      value={nouvelleTache.description}
                      onChange={(e) => setNouvelleTache({...nouvelleTache, description: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assigner à</label>
                    <Select value={nouvelleTache.assigneA} onValueChange={(value) => setNouvelleTache({...nouvelleTache, assigneA: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un agent" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipe.map((membre) => (
                          <SelectItem key={membre.id} value={membre.nom}>
                            {membre.nom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-4 grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Priorité</label>
                      <Select value={nouvelleTache.priorite} onValueChange={(value) => setNouvelleTache({...nouvelleTache, priorite: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Basse">Basse</SelectItem>
                          <SelectItem value="Moyenne">Moyenne</SelectItem>
                          <SelectItem value="Haute">Haute</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Échéance</label>
                      <Input
                        type="datetime-local"
                        value={nouvelleTache.echeance}
                        onChange={(e) => setNouvelleTache({...nouvelleTache, echeance: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Créer la tâche
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Alertes et rappels de l'équipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`p-4 border rounded-lg ${!notif.lu ? 'bg-blue-50 dark:bg-blue-950' : ''}`}>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          {notif.type === 'message' && <MessageSquare className="h-4 w-4 text-blue-500" />}
                          {notif.type === 'tache' && <CheckCircle className="h-4 w-4 text-green-500" />}
                          {notif.type === 'appel' && <Phone className="h-4 w-4 text-orange-500" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{notif.titre}</h4>
                          <p className="text-sm text-muted-foreground">{notif.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notif.timestamp}</p>
                        </div>
                        {!notif.lu && (
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appels" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Historique d'appels
                </CardTitle>
                <CardDescription>
                  Suivi des appels avec les clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Jean Dupont</h4>
                          <p className="text-sm text-muted-foreground">+33123456789</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Répondu
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Durée: 12 minutes • Agent: Pierre Durand</p>
                      <p>Aujourd'hui à 14:30</p>
                      <p className="mt-1">Note: Discussion sur l'offre premium, client intéressé</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>MM</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Marie Martin</h4>
                          <p className="text-sm text-muted-foreground">+33987654321</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-red-100 text-red-800">
                        Manqué
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Tentative d'appel • Agent: Sophie Martin</p>
                      <p>Hier à 16:45</p>
                      <p className="mt-1">Note: À rappeler demain matin</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
