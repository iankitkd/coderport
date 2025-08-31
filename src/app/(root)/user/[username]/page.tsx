import { notFound } from "next/navigation";

import Dashboard from "@/components/section/Dashboard";
import { aggregateStats, getContestRatings } from "@/lib/utils";
import { PlatformsData } from "@/types";

import { fetchLeetCodeData } from "@/actions/leetcode";
import { fetchCodeForcesData } from "@/actions/codeforces";
import { fetchCodeChefData } from "@/actions/codechef";
import { fetchGFGData } from "@/actions/gfg";
import { getProfileByUsername } from "@/actions/user";

type Params = Promise<{ username: string }>;

export default async function page(props: { params: Params }) {
  const { username } = await props.params;

  const profile = await getProfileByUsername(username);

  if (!profile) {
    return notFound();
  }

  const responses = await Promise.allSettled([
    fetchCodeForcesData(profile.codeforces || ""),
    fetchLeetCodeData(profile.leetcode || ""),
    fetchCodeChefData(profile.codechef || ""),
    fetchGFGData(profile.geeksforgeeks || ""),
  ]);

  const data: PlatformsData = {
    codeforces: null,
    leetcode: null,
    codechef: null,
    gfg: null
  };
  if (responses[0].status === "fulfilled") data.codeforces = responses[0].value;
  if (responses[1].status === "fulfilled") data.leetcode = responses[1].value;
  if (responses[2].status === "fulfilled") data.codechef = responses[2].value;
  if (responses[3].status === "fulfilled") data.gfg = responses[3].value;

  const userStats = aggregateStats(data);
  const userRatings = getContestRatings(data);

  return (
    <Dashboard
      userProfile={profile}
      userStats={userStats}
      userRatings={userRatings}
      data={data}
    />
  )
}
