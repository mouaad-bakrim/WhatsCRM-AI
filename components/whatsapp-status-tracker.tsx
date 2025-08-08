"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Wifi, Battery, Signal, RefreshCw, AlertCircle } from 'lucide-react';

export function WhatsAppStatusTracker() {
  const connectionStatus = {
    status: "connected",
    lastSeen: "Maintenant",
    battery: 85,
    signal: 4,
    messages: {
      sent: 1247,
      delivered: 1198,
      read: 1089,
      failed: 12
    },
    limits: {
      daily: { used: 847, max: 1000 },
      hourly: { used: 23, max: 100 }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "connecting": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "disconnected": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "connected": return "Connecté";
      case "connecting": return "Connexion...";
      case "disconnected": return "Déconnecté";
      default: return "Inconnu";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="h-5 w-5" />
          Statut WhatsApp
        </CardTitle>
        <CardDescription>
          Surveillance de la connexion WhatsApp Business
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Statut de connexion */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            <span className="text-sm font-medium">Connexion</span>
          </div>
          <Badge className={getStatusColor(connectionStatus.status)}>
            {getStatusText(connectionStatus.status)}
          </Badge>
        </div>

        {/* Informations système */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Battery className="h-4 w-4" />
              <span className="text-sm">Batterie</span>
            </div>
            <span className="text-sm font-medium">{connectionStatus.battery}%</span>
          </div>
          <Progress value={connectionStatus.battery} className="h-2" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Signal className="h-4 w-4" />
              <span className="text-sm">Signal</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`w-1 h-3 rounded-sm ${
                    bar <= connectionStatus.signal 
                      ? 'bg-green-500' 
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistiques des messages */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Messages aujourd'hui</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {connectionStatus.messages.sent}
              </p>
              <p className="text-xs text-muted-foreground">Envoyés</p>
            </div>
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-lg font-bold text-green-600 dark:text-green-400">
                {connectionStatus.messages.delivered}
              </p>
              <p className="text-xs text-muted-foreground">Livrés</p>
            </div>
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {connectionStatus.messages.read}
              </p>
              <p className="text-xs text-muted-foreground">Lus</p>
            </div>
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-lg font-bold text-red-600 dark:text-red-400">
                {connectionStatus.messages.failed}
              </p>
              <p className="text-xs text-muted-foreground">Échecs</p>
            </div>
          </div>
        </div>

        {/* Limites d'envoi */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Limites d'envoi</h4>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Limite quotidienne</span>
              <span>{connectionStatus.limits.daily.used}/{connectionStatus.limits.daily.max}</span>
            </div>
            <Progress 
              value={(connectionStatus.limits.daily.used / connectionStatus.limits.daily.max) * 100} 
              className="h-2" 
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Limite horaire</span>
              <span>{connectionStatus.limits.hourly.used}/{connectionStatus.limits.hourly.max}</span>
            </div>
            <Progress 
              value={(connectionStatus.limits.hourly.used / connectionStatus.limits.hourly.max) * 100} 
              className="h-2" 
            />
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button variant="outline" className="w-full" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualiser le statut
          </Button>
          
          {connectionStatus.messages.failed > 0 && (
            <Button variant="outline" className="w-full" size="sm">
              <AlertCircle className="h-4 w-4 mr-2" />
              Voir les échecs ({connectionStatus.messages.failed})
            </Button>
          )}
        </div>

        {/* Dernière mise à jour */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Dernière mise à jour: {connectionStatus.lastSeen}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
