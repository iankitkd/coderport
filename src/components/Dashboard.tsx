import ProfileCard from "./ProfileCard";
import Stats from "./Stats";

import { PlatformRating, Profile, StatsInterface } from "@/types";
import { dummyRatings, dummyStats, dummyUserProfile } from "@/data";
import RatingsCard from "./RatingsCard";

interface DashboardProps {
  userProfile?: Profile;
  userStats?: StatsInterface;
  userRatings?: PlatformRating[];
}

export default function Dashboard({
  userProfile = dummyUserProfile,
  userStats = dummyStats,
  userRatings = dummyRatings,
}: DashboardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-3">
      <section className="w-full md:w-1/3 lg:w-1/4">
        <ProfileCard profile={userProfile} />
      </section>

      <section className="w-full md:w-2/3 lg:w-3/4">
        <Stats stats={userStats} />
        <RatingsCard ratings={userRatings} />
      </section>
    </div>
  );
}
