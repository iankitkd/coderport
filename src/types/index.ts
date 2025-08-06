export interface Profile {
  name: string;
  username: string;
  image?: string;
  title?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  handles: {
    CodeForces?: string;
    CodeChef?: string;
    LeetCode?: string;
    GeeksForGeeks?: string;
  };
}

export type PlatformsType = "LeetCode" | "CodeForces" | "CodeChef" | "GeeksForGeeks";

export interface StatsInterface {
  totalSolved: number;
  contests?: number;
  activeDays?: number;
}

export interface ProblemsInterface {
  platform: string;
  total: number;
  all?: number;
  school?: number;
  basic?: number;
  easy: number;
  medium: number;
  hard: number;
};

export type PlatformRating = {
  name: PlatformsType;
  rating: number;
  title?: string;
  color?: string;
};

export interface PlatformsData {
  leetcode?: PlatformData;
  codeforces?: PlatformData;
  codechef?: PlatformData;
  gfg?: PlatformData;
}

export interface PlatformData {
  name: string;
  username: string;
  avatar?: string;
  title: string;
  rating: number;
  ratingColor?: string;
  maxRating?: number;
  contests: number;
  totalSolved: number;
  activeDays?: number;
  activeDates?: Array<string>;
  problems?: ProblemsInterface;
}