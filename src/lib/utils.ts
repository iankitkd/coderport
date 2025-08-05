import { PlatformsData } from "@/types";

export const aggregateStats = (data: PlatformsData) => {    
    const totalSolved = 
      (data.leetcode?.totalSolved || 0) +
      (data.codeforces?.totalSolved || 0) +
      (data.codechef?.totalSolved || 0) +
      (data.gfg?.totalSolved || 0);
      
    const contests = 
      (data.leetcode?.contests || 0) +
      (data.codeforces?.contests || 0) +
      (data.codechef?.contests || 0);

    const activeDays = 0;
      
    return {
      totalSolved,
      contests,
      // activeDays
    };
  };