"use client";

import { useEffect, useState } from "react";

import RatingsCard from "./cards/RatingsCard";
import { PlatformRating, PlatformsData, PlatformsType } from "@/types";
import MyLineChart from "./charts/MyLineChart";

export default function ContestsSection({
  userRatings,
  data,
}: {
  userRatings: PlatformRating[];
  data: PlatformsData;
}) {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformsType>("LeetCode");
  const [contests, setContests] = useState(data.leetcode?.contests || 0);
  const [contestsHistory, setContestsHistory] = useState(data.leetcode?.contestsHistory);

  useEffect(() => {
    if (selectedPlatform === "LeetCode") {
      setContests(data.leetcode?.contests || 0);
      setContestsHistory(data.leetcode?.contestsHistory);
    }
    if (selectedPlatform === "CodeForces") {
      setContests(data.codeforces?.contests || 0);
      setContestsHistory(data.codeforces?.contestsHistory);
    }
    if (selectedPlatform === "CodeChef") {
      setContests(data.codechef?.contests || 0);
      setContestsHistory(data.codechef?.contestsHistory);
    }
    if (selectedPlatform === "GeeksForGeeks") {
      setContests(data.gfg?.contests || 0);
      setContestsHistory(data.gfg?.contestsHistory);
    }
  }, [selectedPlatform, data]);

  return (
    <>
      <RatingsCard selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} ratings={userRatings} />
      <div className="bg-white rounded-xl shadow py-2">
        <div className="flex justify-between items-center gap-2 p-4">
          <h2 className="text-xl font-semibold">Contests Participated</h2>
          <div className="text-2xl font-bold">{contests}</div>
        </div>
        {contestsHistory && (
          <div className="w-full h-50">
            <MyLineChart chartData={contestsHistory} />
          </div>
        )}
      </div>
    </>
  );
}
