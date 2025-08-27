import { PlatformRating, PlatformsData } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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
    contestRating.push({ name: "LeetCode", rating: data.leetcode.rating, title: data.leetcode.title, color: data.leetcode.ratingColor });
  }
  if (data.codeforces) {
    contestRating.push({ name: "CodeForces", rating: data.codeforces.rating, title: data.codeforces.title, color: data.codeforces.ratingColor});
  }
  if (data.codechef) {
    contestRating.push({ name: "CodeChef", rating: data.codechef.rating, title: data.codechef.title, color: data.codechef.ratingColor});
  }
  if (data.gfg) {
    contestRating.push({ name: "GeeksForGeeks", rating: data.gfg.rating, title: data.gfg.title, color: data.gfg.ratingColor});
  }

  return contestRating;
};

export const getUserUrlForPlatform = (platform: string, username: string) => {
  if (!username) return "#";

  let url = "";
  switch (platform) {
    case "LeetCode":
      url = `https://leetcode.com/u/${username}`;
      break;
    case "CodeForces":
      url = `https://codeforces.com/profile/${username}`;
      break;
    case "CodeChef":
      url = `https://codechef.com/users/${username}`;
      break;
    case "GeeksForGeeks":
      url = `https://geeksforgeeks.org/user/${username}`;
      break;
    default:
      url = `#`;
      break;
  }
  return url;
};