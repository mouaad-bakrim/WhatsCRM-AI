"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp } from 'lucide-react';

export function RealTimeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Activité en temps réel
        </CardTitle>
        <CardDescription>
          Messages et interactions des dernières 24 heures
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 flex items-center justify-center text-muted-foreground border-2 border-dashed border-muted rounded-lg">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
            <p className="text-lg font-medium">Graphique temps réel</p>
            <p className="text-sm">À implémenter avec Recharts ou Chart.js</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
