"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Target, Plus, Play, Pause, BarChart3, Users, MessageSquare, TrendingUp, Calendar, Filter } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";

const campagnes = [
  {
    id: 1,
    nom: "Promotion Été 2024",
    statut: "Active",
    cible: "Clients Chauds",
    envoyes: 1250,
    ouverts: 892,
    reponses: 234,
    conversions: 45,
    dateCreation: "2024-01-15",
    tauxOuverture: 71.4,
    tauxReponse: 18.7,
    tauxConversion: 3.6
  },
  {
    id: 2,
    nom: "Relance Prospects",
    statut: "En pause",
    cible: "Prospects Tièdes",
    envoyes: 890,
    ouverts: 445,
    reponses: 89,
    conversions: 12,
    dateCreation: "2024-01-10",
    tauxOuverture: 50.0,
    tauxReponse: 10.0,
    tauxConversion: 1.3
  },
  {
    id: 3,
    nom: "Nouveaux Services",
    statut: "Programmée",
    cible: "Tous les clients",
    envoyes: 0,
    ouverts: 0,
    reponses: 0,
    conversions: 0,
    dateCreation: "2024-01-20",
    tauxOuverture: 0,
    tauxReponse: 0,
    tauxConversion: 0
  },
];

export default function CampaignsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(campagnes[0]);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "En pause": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Programmée": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Terminée": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Campagnes marketing</h1>
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-6">
        {/* En-tête avec bouton de création */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Vos campagnes WhatsApp</h2>
            <p className="text-muted-foreground">
              Créez et gérez vos campagnes marketing ciblées
            </p>
          </div>
          <Button onClick={() => setShowCreateForm(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nouvelle campagne
          </Button>
        </div>

        {showCreateForm ? (
          /* Formulaire de création */
          <Card>
            <CardHeader>
              <CardTitle>Créer une nouvelle campagne</CardTitle>
              <CardDescription>
                Configurez votre campagne marketing WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom de la campagne</Label>
                  <Input id="nom" placeholder="Ex: Promotion Black Friday" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cible">Audience cible</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner l'audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tous">Tous les clients</SelectItem>
                      <SelectItem value="chauds">Clients Chauds</SelectItem>
                      <SelectItem value="tiedes">Clients Tièdes</SelectItem>
                      <SelectItem value="froids">Clients Froids</SelectItem>
                      <SelectItem value="vip">Clients VIP</SelectItem>
                      <SelectItem value="prospects">Prospects</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message de la campagne</Label>
                <Textarea
                  id="message"
                  placeholder="Rédigez votre message..."
                  rows={4}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="date">Date d'envoi</Label>
                  <Input id="date" type="datetime-local" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequence">Fréquence</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Une fois" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Une fois</SelectItem>
                      <SelectItem value="daily">Quotidien</SelectItem>
                      <SelectItem value="weekly">Hebdomadaire</SelectItem>
                      <SelectItem value="monthly">Mensuel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="limite">Limite d'envois/jour</Label>
                  <Input id="limite" type="number" placeholder="100" />
                </div>
              </div>

              <div className="flex gap-3">
                <Button>Créer la campagne</Button>
                <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                  Annuler
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="liste" className="w-full">
            <TabsList>
              <TabsTrigger value="liste">Liste des campagnes</TabsTrigger>
              <TabsTrigger value="analytics">Analyses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="liste" className="space-y-4">
              {/* Liste des campagnes */}
              <div className="grid gap-4">
                {campagnes.map((campagne) => (
                  <Card key={campagne.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Target className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="text-lg font-semibold">{campagne.nom}</h3>
                            <p className="text-sm text-muted-foreground">
                              Cible: {campagne.cible} • Créée le {new Date(campagne.dateCreation).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatutColor(campagne.statut)}>
                            {campagne.statut}
                          </Badge>
                          {campagne.statut === "Active" ? (
                            <Button variant="outline" size="sm">
                              <Pause className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm">
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{campagne.envoyes}</div>
                          <div className="text-sm text-muted-foreground">Messages envoyés</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{campagne.ouverts}</div>
                          <div className="text-sm text-muted-foreground">
                            Ouverts ({campagne.tauxOuverture}%)
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{campagne.reponses}</div>
                          <div className="text-sm text-muted-foreground">
                            Réponses ({campagne.tauxReponse}%)
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{campagne.conversions}</div>
                          <div className="text-sm text-muted-foreground">
                            Conversions ({campagne.tauxConversion}%)
                          </div>
                        </div>
                      </div>

                      {campagne.envoyes > 0 && (
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Taux d'ouverture</span>
                            <span>{campagne.tauxOuverture}%</span>
                          </div>
                          <Progress value={campagne.tauxOuverture} className="h-2" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              {/* Statistiques globales */}
              <div className="grid gap-4 md:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total envoyés</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,140</div>
                    <p className="text-xs text-muted-foreground">
                      +12% ce mois-ci
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Taux d'ouverture</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">62.5%</div>
                    <p className="text-xs text-muted-foreground">
                      +5.2% ce mois-ci
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Taux de réponse</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">15.1%</div>
                    <p className="text-xs text-muted-foreground">
                      +2.1% ce mois-ci
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversions</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">57</div>
                    <p className="text-xs text-muted-foreground">
                      +8.3% ce mois-ci
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Graphique de performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance des campagnes</CardTitle>
                  <CardDescription>
                    Comparaison des taux de réussite par campagne
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {campagnes.filter(c => c.envoyes > 0).map((campagne) => (
                      <div key={campagne.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{campagne.nom}</span>
                          <span className="text-sm text-muted-foreground">
                            {campagne.conversions} conversions
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Ouverture: {campagne.tauxOuverture}%</span>
                            <span>Réponse: {campagne.tauxReponse}%</span>
                            <span>Conversion: {campagne.tauxConversion}%</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="flex-1 bg-green-200 h-2 rounded">
                              <div 
                                className="bg-green-500 h-2 rounded" 
                                style={{ width: `${campagne.tauxOuverture}%` }}
                              ></div>
                            </div>
                            <div className="flex-1 bg-orange-200 h-2 rounded">
                              <div 
                                className="bg-orange-500 h-2 rounded" 
                                style={{ width: `${campagne.tauxReponse}%` }}
                              ></div>
                            </div>
                            <div className="flex-1 bg-purple-200 h-2 rounded">
                              <div 
                                className="bg-purple-500 h-2 rounded" 
                                style={{ width: `${campagne.tauxConversion * 10}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
