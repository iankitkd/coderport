import { dummyUserData, dummyUserProfile } from "@/data";
import ProfileCard from "./ProfileCard";

interface DashboardProps {
  userProfile?: Profile;
  userData?: String;
}

export default function Dashboard({
  userProfile = dummyUserProfile,
  userData,
}: DashboardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-1">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <ProfileCard profile={userProfile} />
      </div>

      <div className="w-full md:w-1/3 lg:w-3/4">
        
      </div>
    </div>
  );
}
