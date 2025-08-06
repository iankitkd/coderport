"use client";

import { useEffect, useState } from "react";

import RatingsCard from "./Cards/RatingsCard";
import ProblemsCard from "./Cards/ProblemsCard";
import { PlatformRating, PlatformsData, PlatformsType } from "@/types";

export default function DetailsSection({userRatings, data}: {userRatings: PlatformRating[], data: PlatformsData}) {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformsType>("LeetCode");
  const [problems, setProblems] = useState(data.leetcode?.problems);
  const [totalSolved, setTotalSolved] = useState(data.leetcode?.totalSolved || 0);
  
  useEffect(() => {
    if(selectedPlatform === "LeetCode") {
        setProblems(data.leetcode?.problems);
        setTotalSolved(data.leetcode?.totalSolved || 0);
    };
    if(selectedPlatform === "CodeForces") {
        setProblems(data.codeforces?.problems);
        setTotalSolved(data.codeforces?.totalSolved || 0);
    };
    if(selectedPlatform === "CodeChef") {
        setProblems(data.codechef?.problems);
        setTotalSolved(data.codechef?.totalSolved || 0);
    };
    if(selectedPlatform === "GeeksForGeeks") {
        setProblems(data.gfg?.problems);
        setTotalSolved(data.gfg?.totalSolved || 0);
    };
  }, [selectedPlatform, data])
  
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2 pb-2">
      <RatingsCard selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} ratings={userRatings} />
      <ProblemsCard totalSolved={totalSolved} problems={problems} />
    </div>
  );
}
