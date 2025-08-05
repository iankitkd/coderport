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

export interface StatsInterface {
  totalSolved: number;
  contests?: number;
  activeDays?: number;
}

export type PlatformRating = {
  name: string;
  rating: string | number;
  title?: string;
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
  avatar: string;
  title: string;
  rating: string;
  maxRating: string;
  contests: number;
  totalSolved: number;
  activeDays: number;
  activeDates: Array<string>;
}