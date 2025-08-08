"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Lun", messages: 400, reponses: 240 },
  { name: "Mar", messages: 300, reponses: 139 },
  { name: "Mer", messages: 200, reponses: 980 },
  { name: "Jeu", messages: 278, reponses: 390 },
  { name: "Ven", messages: 189, reponses: 480 },
  { name: "Sam", messages: 239, reponses: 380 },
  { name: "Dim", messages: 349, reponses: 430 },
];

export function CampaignChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="messages"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Area
          type="monotone"
          dataKey="reponses"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
