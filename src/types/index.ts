interface Profile {
  name: string;
  username: string;
  image?: string;
  title?: string;
  location?: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  handles: {
    CodeForces: string;
    CodeChef: string;
    LeetCode: string;
    GeeksForGeeks: string;
  };
}

interface Stats {
  totalSolved: number;
  totalContests: number;
  activeDays: number;
}
