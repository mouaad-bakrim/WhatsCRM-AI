"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, X, RefreshCw } from 'lucide-react';
import { useState } from "react";

const tips = [
  {
    title: "Optimisez vos heures d'envoi",
    description: "Les messages envoyés entre 10h et 16h ont 23% plus de chances d'être lus.",
    action: "Programmer mes messages"
  },
  {
    title: "Utilisez l'IA pour personnaliser",
    description: "Les messages personnalisés par IA augmentent le taux de réponse de 35%.",
    action: "Activer l'IA"
  },
  {
    title: "Segmentez vos campagnes",
    description: "Les campagnes ciblées par qualification ont 2x plus de conversions.",
    action: "Créer des segments"
  },
  {
    title: "Suivez vos métriques",
    description: "Consultez vos KPIs quotidiennement pour améliorer vos performances.",
    action: "Voir les rapports"
  }
];

export function ProductivityTips() {
  const [currentTip, setCurrentTip] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  if (dismissed) return null;

  const tip = tips[currentTip];

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-purple-900 dark:text-purple-100">
            <Lightbulb className="h-4 w-4" />
            Conseil du jour
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={nextTip} className="h-6 w-6 p-0">
              <RefreshCw className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setDismissed(true)} className="h-6 w-6 p-0">
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h3 className="font-medium text-purple-900 dark:text-purple-100">{tip.title}</h3>
          <p className="text-sm text-purple-700 dark:text-purple-300">{tip.description}</p>
          <Button variant="outline" size="sm" className="border-purple-300 text-purple-700 hover:bg-purple-100 dark:border-purple-700 dark:text-purple-300">
            {tip.action}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
