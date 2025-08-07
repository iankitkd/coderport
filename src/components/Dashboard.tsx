import { PlatformRating, PlatformsData, Profile, StatsInterface } from "@/types";
import { dummyData, dummyRatings, dummyStats, dummyUserProfile } from "@/data";
import ProfileCard from "./Cards/ProfileCard";
import StatsSection from "./StatsSection";
import DetailsSection from "./DetailsSection";

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
    <div className="flex flex-col md:flex-row gap-6 p-3 md:overflow-hidden md:max-h-dvh">
      <section className="w-full md:w-1/3 lg:w-1/4">
        <ProfileCard profile={userProfile} />
      </section>

      <section className="w-full md:w-2/3 lg:w-3/4 space-y-2 overflow-y-auto">
        <StatsSection stats={userStats} />
        <DetailsSection userRatings={userRatings} data={data} />
      </section>
    </div>
  );
}
