"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, CloudRain, MapPin } from 'lucide-react';

export function WeatherWidget() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
          <MapPin className="h-4 w-4" />
          Paris, France
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sun className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">22°C</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">Ensoleillé</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
            Idéal pour les appels
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
