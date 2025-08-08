"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, TrendingUp, Phone, Target, Bot, Zap, Calendar, Clock, Activity, AlertCircle } from 'lucide-react';
import { AdvancedStatsCard } from "@/components/advanced-stats-card";
import { RealTimeChart } from "@/components/real-time-chart";
import { PerformanceMetrics } from "@/components/performance-metrics";
import { QuickActions } from "@/components/quick-actions";
import { TeamActivity } from "@/components/team-activity";
import { NotificationsPanel } from "@/components/notifications-panel";
import { ModeToggle } from "@/components/mode-toggle";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Vue d'ensemble de votre activité WhatsApp CRM
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <Activity className="h-3 w-3 mr-1" />
              Système opérationnel
            </Badge>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Aujourd'hui
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-6">
        {/* Alertes importantes */}
        <div className="grid gap-4">
          <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20">
            <CardContent className="flex items-center gap-3 p-4">
              <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <div className="flex-1">
                <p className="font-medium text-orange-900 dark:text-orange-100">
                  3 clients VIP en attente de réponse
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Temps d'attente moyen: 25 minutes
                </p>
              </div>
              <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-700 dark:text-orange-300">
                Voir les clients
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistiques principales améliorées */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AdvancedStatsCard
            title="Messages envoyés"
            value="12,543"
            description="par rapport au mois dernier"
            icon={MessageSquare}
            trend="up"
            percentage={20.1}
            progressValue={75}
            color="blue"
          />
          <AdvancedStatsCard
            title="Clients actifs"
            value="2,847"
            description="par rapport au mois dernier"
            icon={Users}
            trend="up"
            percentage={15.3}
            progressValue={68}
            color="green"
          />
          <AdvancedStatsCard
            title="Taux de réponse"
            value="68.2%"
            description="par rapport au mois dernier"
            icon={TrendingUp}
            trend="up"
            percentage={5.2}
            progressValue={68}
            color="purple"
          />
          <AdvancedStatsCard
            title="Appels effectués"
            value="1,234"
            description="par rapport au mois dernier"
            icon={Phone}
            trend="up"
            percentage={12.5}
            progressValue={82}
            color="orange"
          />
        </div>

        {/* Graphique temps réel et métriques */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RealTimeChart />
          </div>
          <PerformanceMetrics />
        </div>

        {/* Activité équipe et actions rapides */}
        <div className="grid gap-6 lg:grid-cols-2">
          <TeamActivity />
          <QuickActions />
        </div>

        {/* Notifications et résumé */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NotificationsPanel />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Résumé de la journée
              </CardTitle>
              <CardDescription>
                Bilan des performances d'aujourd'hui
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Messages</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">847</p>
                  <p className="text-xs text-muted-foreground">+12% vs hier</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Nouveaux clients</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">23</p>
                  <p className="text-xs text-muted-foreground">+8% vs hier</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Conversions</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">15</p>
                  <p className="text-xs text-muted-foreground">+25% vs hier</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium">IA utilisée</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">156</p>
                  <p className="text-xs text-muted-foreground">suggestions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
