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
  rating: number;
};

export interface PlatformsData {
  leetcode?: any;
  codeforces?: any;
  codechef?: any;
  gfg?: any;
}