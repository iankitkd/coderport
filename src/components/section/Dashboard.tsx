import { PlatformRating, PlatformsData, Profile, StatsInterface } from "@/types";
import { dummyData, dummyRatings, dummyStats, dummyUserProfile } from "@/data/dummyStats";
import ProfileCard from "../cards/ProfileCard";
import StatsSection from "./StatsSection";
import ContestsSection from "./ContestsSection";
import ProblemsSection from "./ProblemsSection";

interface DashboardProps {
  userProfile?: Profile;
  userStats?: StatsInterface;
  userRatings?: PlatformRating[];
  data?: PlatformsData;
}

export default function Dashboard({
  userProfile = dummyUserProfile,
  userStats = dummyStats,
  userRatings = dummyRatings,
  data = dummyData,
}: DashboardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-3">
      <section className="w-full md:w-1/3 lg:w-1/4">
        <ProfileCard profile={userProfile} />
      </section>

      <section className="w-full md:w-2/3 lg:w-3/4 space-y-2">
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div className="w-full lg:w-3/5 flex flex-col gap-2">
            <StatsSection stats={userStats} />
            <ContestsSection userRatings={userRatings} data={data} />
          </div>

          <div className="flex-1">
            <ProblemsSection 
              leetcodeProblems={data.leetcode?.problems} 
              gfgProblems={data.gfg?.problems} 
              codechefTotalSolved={data.codechef?.totalSolved}
              codeforcesTotalSolved={data.codeforces?.totalSolved}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
