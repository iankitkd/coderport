import { notFound } from "next/navigation";

import { myUserName, userProfile } from "@/data";
import Dashboard from "@/components/section/Dashboard";
import { aggregateStats, getContestRatings } from "@/lib/utils";
import { PlatformsData } from "@/types";

import { fetchLeetCodeData } from "@/actions/leetcode";
import { fetchCodeForcesData } from "@/actions/codeforces";
import { fetchCodeChefData } from "@/actions/codechef";
import { fetchGFGData } from "@/actions/gfg";

type Params = Promise<{ username: string }>;

export default async function page(props: { params: Params }) {
  const { username } = await props.params;

  if (username !== myUserName) {
    return notFound();
  }

  const responses = await Promise.allSettled([
    fetchCodeForcesData(username),
    fetchLeetCodeData(username),
    fetchCodeChefData(username),
    fetchGFGData(username),
  ]);

  const data: PlatformsData = {};
  if (responses[0].status === "fulfilled") data.codeforces = responses[0].value;
  if (responses[1].status === "fulfilled") data.leetcode = responses[1].value;
  if (responses[2].status === "fulfilled") data.codechef = responses[2].value;
  if (responses[3].status === "fulfilled") data.gfg = responses[3].value;

  const userStats = aggregateStats(data);
  const userRatings = getContestRatings(data);

  return (
    <Dashboard
      userProfile={userProfile}
      userStats={userStats}
      userRatings={userRatings}
      data={data}
    />
  )
}
