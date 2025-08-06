import { PlatformRating, PlatformsData } from "@/types";

export const aggregateStats = (data: PlatformsData) => {
  const totalSolved =
    (data.leetcode?.totalSolved || 0) +
    (data.codeforces?.totalSolved || 0) +
    (data.codechef?.totalSolved || 0) +
    (data.gfg?.totalSolved || 0);

  const contests =
    (data.leetcode?.contests || 0) +
    (data.codeforces?.contests || 0) +
    (data.codechef?.contests || 0) +
    (data.gfg?.contests || 0);

  const globalActiveDays = new Set<string>();
  data.leetcode?.activeDates?.forEach((date) => globalActiveDays.add(date));
  data.codeforces?.activeDates?.forEach((date) => globalActiveDays.add(date));
  data.codechef?.activeDates?.forEach((date) => globalActiveDays.add(date));
  data.gfg?.activeDates?.forEach((date) => globalActiveDays.add(date));

  const activeDays = globalActiveDays.size;

  return {
    totalSolved,
    contests,
    activeDays,
  };
};

export const getContestRatings = (data: PlatformsData) => {
  const contestRating: PlatformRating[] = [];

  if (data.leetcode) {
    contestRating.push({ name: "LeetCode", rating: data.leetcode.rating, title: data.leetcode.title });
  }
  if (data.codeforces) {
    contestRating.push({ name: "CodeForces", rating: data.codeforces.rating, title: data.codeforces.title });
  }
  if (data.codechef) {
    contestRating.push({ name: "CodeChef", rating: data.codechef.rating, title: data.codechef.title });
  }
  if (data.gfg) {
    contestRating.push({ name: "GeeksForGeeks", rating: data.gfg.rating, title: data.gfg.title });
  }

  return contestRating;
};
