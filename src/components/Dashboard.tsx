import ProfileCard from "./ProfileCard";
import Stats from "./Stats";

import { PlatformRating, ProblemsInterface, Profile, StatsInterface } from "@/types";
import { dummyProblemsCount, dummyRatings, dummyStats, dummyUserProfile } from "@/data";
import RatingsCard from "./RatingsCard";
import ProblemsCard from "./ProblemsCard";

interface DashboardProps {
  userProfile?: Profile;
  userStats?: StatsInterface;
  userRatings?: PlatformRating[];
  problems?: ProblemsInterface;
}

export default function Dashboard({
  userProfile = dummyUserProfile,
  userStats = dummyStats,
  userRatings = dummyRatings,
  problems = dummyProblemsCount,
}: DashboardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-3">
      <section className="w-full md:w-1/3 lg:w-1/4">
        <ProfileCard profile={userProfile} />
      </section>

      <section className="w-full md:w-2/3 lg:w-3/4">
        <Stats stats={userStats} />
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <RatingsCard ratings={userRatings} />
          <ProblemsCard problems={problems} />
        </div>
      </section>
    </div>
  );
}
