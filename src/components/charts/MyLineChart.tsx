"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { RatingHistoryEntry } from "@/types";

export default function MyLineChart({ chartData } : {chartData: RatingHistoryEntry[]}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
      >
        {/* <XAxis
          dataKey="date"
          tickFormatter={(date) => new Date(date).toLocaleDateString()}
        /> */}
        <XAxis tick={false}/>
        <YAxis domain={["auto", "auto"]} />
        <Tooltip
          // position={{x: 300, y: 0}}
          formatter={(value: number, name: string) => [`${value}`, name]}
          labelFormatter={(index) => `Date: ${chartData[index].date}`}
        />
        <Line
          type="monotone"
          dataKey="rating"
          stroke="#1F8ACB"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
          name="Rating"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
