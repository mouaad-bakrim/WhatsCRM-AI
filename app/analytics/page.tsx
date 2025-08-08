"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart3, TrendingUp, Users, MessageSquare, Target, Download, Calendar, Filter } from 'lucide-react';
import { AdvancedStatsCard } from "@/components/advanced-stats-card";
import { ModeToggle } from "@/components/mode-toggle";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-xl font-semibold">Analytics & Rapports</h1>
            <p className="text-sm text-muted-foreground">
              Analyses détaillées de vos performances
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 derniers jours</SelectItem>
                <SelectItem value="30days">30 derniers jours</SelectItem>
                <SelectItem value="90days">90 derniers jours</SelectItem>
                <SelectItem value="1year">1 an</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="campaigns">Campagnes</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="team">Équipe</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* KPIs principaux */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <AdvancedStatsCard
                title="Revenus générés"
                value="€45,231"
                description="par rapport au mois dernier"
                icon={TrendingUp}
                trend="up"
                percentage={18.2}
                progressValue={82}
                color="green"
              />
              <AdvancedStatsCard
                title="ROI des campagnes"
                value="340%"
                description="retour sur investissement"
                icon={Target}
                trend="up"
                percentage={25.1}
                progressValue={85}
                color="purple"
              />
              <AdvancedStatsCard
                title="Coût par conversion"
                value="€12.50"
                description="par rapport au mois dernier"
                icon={BarChart3}
                trend="down"
                percentage={-8.3}
                progressValue={65}
                color="blue"
              />
              <AdvancedStatsCard
                title="Valeur client moyenne"
                value="€187"
                description="par rapport au mois dernier"
                icon={Users}
                trend="up"
                percentage={12.7}
                progressValue={78}
                color="orange"
              />
            </div>

            {/* Graphiques de performance */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Évolution du chiffre d'affaires</CardTitle>
                  <CardDescription>
                    Revenus générés par mois
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center text-muted-foreground">
                    Graphique des revenus (à implémenter avec Recharts)
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Funnel de conversion</CardTitle>
                  <CardDescription>
                    Parcours client de la prospection à la vente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Prospects contactés</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-sm font-medium">2,847</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Réponses reçues</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '68%'}}></div>
                        </div>
                        <span className="text-sm font-medium">1,936</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Prospects qualifiés</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm font-medium">1,281</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Conversions</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '18%'}}></div>
                        </div>
                        <span className="text-sm font-medium">512</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top performers */}
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Top Campagnes</CardTitle>
                  <CardDescription>
                    Meilleures performances ce mois
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Promotion Été 2024", conversions: 45, roi: "340%" },
                      { name: "Relance Prospects", conversions: 32, roi: "280%" },
                      { name: "Black Friday", conversions: 28, roi: "250%" }
                    ].map((campaign, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium text-sm">{campaign.name}</p>
                          <p className="text-xs text-muted-foreground">{campaign.conversions} conversions</p>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          {campaign.roi}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Agents</CardTitle>
                  <CardDescription>
                    Meilleurs performers de l'équipe
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Marie Dubois", messages: 234, conversions: 18 },
                      { name: "Pierre Durand", messages: 198, conversions: 15 },
                      { name: "Sophie Martin", messages: 176, conversions: 12 }
                    ].map((agent, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium text-sm">{agent.name}</p>
                          <p className="text-xs text-muted-foreground">{agent.messages} messages</p>
                        </div>
                        <Badge variant="outline">
                          {agent.conversions} conv.
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Segments clients</CardTitle>
                  <CardDescription>
                    Répartition par qualification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { segment: "Clients Chauds", count: 127, percentage: 45 },
                      { segment: "Clients Tièdes", count: 89, percentage: 32 },
                      { segment: "Clients Froids", count: 65, percentage: 23 }
                    ].map((segment, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>{segment.segment}</span>
                          <span className="font-medium">{segment.count}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{width: `${segment.percentage}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analyse des messages</CardTitle>
                <CardDescription>
                  Statistiques détaillées sur vos communications WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenu de l'analyse des messages à implémenter...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance des campagnes</CardTitle>
                <CardDescription>
                  Analyse détaillée de vos campagnes marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenu de l'analyse des campagnes à implémenter...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analyse clientèle</CardTitle>
                <CardDescription>
                  Insights sur votre base de clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenu de l'analyse clients à implémenter...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance de l'équipe</CardTitle>
                <CardDescription>
                  Statistiques et KPIs par agent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenu de l'analyse équipe à implémenter...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
