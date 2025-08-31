"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { PieChartDataEntry } from "@/types";

export default function MyPieChart({ data }: { data: PieChartDataEntry[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          paddingAngle={1}
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              stroke="#ffffff"
              strokeWidth={2}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
