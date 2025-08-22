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

const dummyContestsHistory: RatingHistoryEntry[] = [
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
    contestsHistory: dummyContestsHistory,
  },
  codechef: {
    name: "",
    username: "",
    totalSolved: 122,
    contests: 21,
    title: "",
    rating: 2011,
  },
  codeforces: {
    name: "",
    username: "",
    totalSolved: 274,
    contests: 32,
    title: "",
    rating: 1876,
  },
};

export const myUserName = "iankitkd";

export const userProfile = {
  name: "Ankit Kumar",
  username: "iankitkd",
  image: "",
  title: "",
  location: "",
  social: {
    github: "https://github.com/iankitkd",
    linkedin: "https://linkedin.com/in/iankitkd",
    email: "mailto:iankitkd@gmail.com",
  },
  handles: {
    LeetCode: "iankitkd",
    CodeForces: "iankitkd",
    CodeChef: "iankitkd",
    GeeksForGeeks: "iankitkd",
  },
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
