import MyPieChart from "../charts/MyPieChart";

import { PieChartDataEntry } from "@/types";

export default function ProblemsCardPie({
  label,
  total,
  data,
}: {
  label: string;
  total: number;
  data: PieChartDataEntry[];
}) {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-semibold">{label}</h3>
      <div className="flex gap-1 items-center py-3">
        <div className="relative flex w-1/2 h-30">
          <MyPieChart data={data} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-2xl font-bold text-gray-800">{total}</div>
          </div>
        </div>
        <div className="w-1/2 px-2">
          {data.filter(el => el.value > 0).map((el) => (
            <div key={el.name} className="flex justify-between items-center">
              <div className={`capitalize font-semibold text-[${el.color}]`} style={{ color: el.color }}>{el.name}</div>
              <div className="font-semibold">{el.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
