"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, TypeIcon as type, LucideIcon } from 'lucide-react';

interface AdvancedStatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend: "up" | "down";
  percentage: number;
  progressValue: number;
  color: "blue" | "green" | "purple" | "orange";
}

export function AdvancedStatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  percentage,
  progressValue,
  color
}: AdvancedStatsCardProps) {
  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    purple: "text-purple-600 dark:text-purple-400",
    orange: "text-orange-600 dark:text-orange-400"
  };

  const progressColorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500"
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${colorClasses[color]}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            {trend === "up" ? (
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
            )}
            <span className={trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              {Math.abs(percentage)}%
            </span>
          </div>
          <span>{description}</span>
        </div>
        <div className="mt-3">
          <Progress 
            value={progressValue} 
            className="h-2"
            style={{
              background: `hsl(var(--muted))`,
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
