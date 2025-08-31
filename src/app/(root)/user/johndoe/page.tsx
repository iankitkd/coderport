import Dashboard from "@/components/section/Dashboard";
import { dummyData, dummyRatings, dummyStats, dummyUserProfile } from "@/data/dummyStats";

export default function page() {
  return (
    <Dashboard
      userProfile={dummyUserProfile}
      userStats={dummyStats}
      userRatings={dummyRatings}
      data={dummyData}
    />
  );
}
