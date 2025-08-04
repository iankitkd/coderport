import { dummyStats, dummyUserProfile } from "@/data";
import ProfileCard from "./ProfileCard";
import Stats from "./Stats";

interface DashboardProps {
  userProfile?: Profile;
  userStats?: Stats;
}

export default function Dashboard({
  userProfile = dummyUserProfile,
  userStats = dummyStats,
}: DashboardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-1">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <ProfileCard profile={userProfile} />
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4">
        <Stats stats={userStats} />
      </div>
    </div>
  );
}
