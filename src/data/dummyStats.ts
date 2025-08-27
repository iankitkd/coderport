import { PlatformRating, PlatformsData, RatingHistoryEntry } from "@/types";

export const dummyUserProfile = {
  name: "John Doe",
  username: "johndoe",
  image: "",
  title: "Senior Software Engineer",
  location: "San Francisco, CA",
  social: {
    github: "#",
    linkedin: "#",
    email: "#",
  },
  handles: {
    LeetCode: "",
    CodeForces: "",
    CodeChef: "",
    GeeksForGeeks: "",
  },
};

export const dummyStats = {
  totalSolved: 1641,
  contests: 87,
  activeDays: 632,
};

export const dummyRatings: PlatformRating[] = [
  { name: "LeetCode", rating: 2150 },
  { name: "CodeForces", rating: 1876 },
  { name: "CodeChef", rating: 2011 },
  // { name: "GeeksForGeeks", rating: 0 },
];

const leetcodeContestsHistory: RatingHistoryEntry[] = [
  {date: "", rating: 1400},
  {date: "", rating: 1579},
  {date: "", rating: 1814},
  {date: "", rating: 1700},
  {date: "", rating: 1978},
  {date: "", rating: 1914},
  {date: "", rating: 1943},
  {date: "", rating: 1699},
  {date: "", rating: 1893},
  {date: "", rating: 2069},
  {date: "", rating: 1913},
  {date: "", rating: 2150},
];
const codechefContestsHistory: RatingHistoryEntry[] = [
  {date: "", rating: 1200},
  {date: "", rating: 1579},
  {date: "", rating: 1314},
  {date: "", rating: 1600},
  {date: "", rating: 1978},
  {date: "", rating: 1914},
  {date: "", rating: 1943},
  {date: "", rating: 1799},
  {date: "", rating: 1893},
  {date: "", rating: 2069},
  {date: "", rating: 1913},
  {date: "", rating: 2150},
];
const codeforcesContestsHistory: RatingHistoryEntry[] = [
  {date: "", rating: 800},
  {date: "", rating: 1179},
  {date: "", rating: 914},
  {date: "", rating: 1200},
  {date: "", rating: 1578},
  {date: "", rating: 1514},
  {date: "", rating: 1343},
  {date: "", rating: 1699},
  {date: "", rating: 1893},
  {date: "", rating: 2069},
  {date: "", rating: 1913},
  {date: "", rating: 2150},
];

export const dummyData: PlatformsData = {
  leetcode: {
    name: "",
    username: "",
    totalSolved: 1245,
    contests: 34,
    title: "",
    rating: 2150,
    problems: {
      total: 1245,
      easy: 645,
      medium: 452,
      hard: 148,
    },
    contestsHistory: leetcodeContestsHistory,
  },
  codechef: {
    name: "",
    username: "",
    totalSolved: 122,
    contests: 21,
    title: "",
    rating: 2011,
    contestsHistory: codechefContestsHistory,
  },
  codeforces: {
    name: "",
    username: "",
    totalSolved: 274,
    contests: 32,
    title: "",
    rating: 1876,
    contestsHistory: codeforcesContestsHistory,
  },
};