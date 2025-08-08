"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, MessageSquare, Users, TrendingUp } from 'lucide-react';

export function PerformanceMetrics() {
  const metrics = [
    {
      label: "Taux de réponse",
      value: 85,
      target: 90,
      icon: MessageSquare,
      color: "bg-blue-500"
    },
    {
      label: "Satisfaction client",
      value: 92,
      target: 95,
      icon: Users,
      color: "bg-green-500"
    },
    {
      label: "Conversion",
      value: 68,
      target: 75,
      icon: Target,
      color: "bg-purple-500"
    },
    {
      label: "Croissance",
      value: 78,
      target: 80,
      icon: TrendingUp,
      color: "bg-orange-500"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Métriques de performance</CardTitle>
        <CardDescription>
          Indicateurs clés de performance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <metric.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{metric.label}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {metric.value}% / {metric.target}%
              </span>
            </div>
            <Progress value={metric.value} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
