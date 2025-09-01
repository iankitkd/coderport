import ProblemsCard from "../cards/ProblemsCard";
import ProblemsCardPie from "../cards/ProblemsCardPie";

import { PieChartDataEntry, ProblemsInterface } from "@/types";

const COLORS = ["#C154C1", "#3B82F6", "#10B981", "#F97316", "#EF4444"];

interface ProblemsSectionProps {
  leetcodeProblems?: ProblemsInterface;
  gfgProblems?: ProblemsInterface;
  codechefTotalSolved?: number;
  codeforcesTotalSolved?: number;
}

export default function ProblemsSection({
  leetcodeProblems,
  gfgProblems,
  codechefTotalSolved,
  codeforcesTotalSolved,
}: ProblemsSectionProps) {

  let gfgPieChartData: PieChartDataEntry[] = [];
  let gfgTotal = 0;
  if(gfgProblems) {
    gfgPieChartData = Object.entries(gfgProblems).filter(([key]) => key !== "total").map(([key, value], index) => ({
      "name": key,
      "value": value,
      "color": COLORS[index],
    }));
    gfgTotal = gfgProblems.total;
  }

  const cpTotal = (codeforcesTotalSolved || 0) + (codechefTotalSolved || 0);
  const cpPieChartData: PieChartDataEntry[] = [
    {name: "CodeForces", value: (codeforcesTotalSolved || 0), color: COLORS[0]},
    {name: "CodeChef", value: (codechefTotalSolved || 0), color: COLORS[1]},
  ]

  return (
    <div className="bg-card rounded-xl shadow px-6 py-4 w-full space-y-2">
      <h2 className="text-xl font-semibold text-center w-full mb-3 border-b border-border">
        Problems Solved
      </h2>
      {leetcodeProblems && (
        <ProblemsCard
          platform="LeetCode"
          problems={leetcodeProblems}
          totalSolved={leetcodeProblems.total}
        />
      )}

      {gfgProblems && gfgTotal > 0 && (
        <ProblemsCardPie data={gfgPieChartData} label="Solved on GeeksForGeeks" total={gfgTotal} />
      )}

      {cpTotal > 0 && (
        <ProblemsCardPie data={cpPieChartData} label="Competitive Programming" total={cpTotal} />
      )}
    </div>
  );
}
