"use client";

import { useEffect, useState } from "react";

import RatingsCard from "./Cards/RatingsCard";
import ProblemsCard from "./Cards/ProblemsCard";
import { PlatformRating, PlatformsData, PlatformsType } from "@/types";
import MyLineChart from "./Charts/MyLineChart";

export default function DetailsSection({
  userRatings,
  data,
}: {
  userRatings: PlatformRating[];
  data: PlatformsData;
}) {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformsType>("LeetCode");
  const [problems, setProblems] = useState(data.leetcode?.problems);
  const [totalSolved, setTotalSolved] = useState(data.leetcode?.totalSolved || 0);
  const [contests, setContests] = useState(data.leetcode?.contests || 0);
  const [contestsHistory, setContestsHistory] = useState(data.leetcode?.contestsHistory);

  useEffect(() => {
    if (selectedPlatform === "LeetCode") {
      setProblems(data.leetcode?.problems);
      setTotalSolved(data.leetcode?.totalSolved || 0);
      setContests(data.leetcode?.contests || 0);
      setContestsHistory(data.leetcode?.contestsHistory);
    }
    if (selectedPlatform === "CodeForces") {
      setProblems(data.codeforces?.problems);
      setTotalSolved(data.codeforces?.totalSolved || 0);
      setContests(data.codeforces?.contests || 0);
      setContestsHistory(data.codeforces?.contestsHistory);
    }
    if (selectedPlatform === "CodeChef") {
      setProblems(data.codechef?.problems);
      setTotalSolved(data.codechef?.totalSolved || 0);
      setContests(data.codechef?.contests || 0);
      setContestsHistory(data.codechef?.contestsHistory);
    }
    if (selectedPlatform === "GeeksForGeeks") {
      setProblems(data.gfg?.problems);
      setTotalSolved(data.gfg?.totalSolved || 0);
      setContests(data.gfg?.contests || 0);
      setContestsHistory(data.gfg?.contestsHistory);
    }
  }, [selectedPlatform, data]);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2">
      <div className="w-full lg:w-3/5 flex flex-col gap-2">
        <RatingsCard selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} ratings={userRatings} />
        <div className="bg-white rounded-xl shadow py-2">
          <div className="flex justify-between items-center gap-2 p-4">
            <h2 className="text-xl font-semibold">Contests</h2>
            <div className="text-2xl font-bold">{contests}</div>
          </div>
          {contestsHistory && (
            <div className="w-full h-50">
              <MyLineChart chartData={contestsHistory} />
            </div>
          )}
        </div>
      </div>

      <div className="flex-1">
        <ProblemsCard totalSolved={totalSolved} problems={problems} />
      </div>
    </div>
  );
}
