import { notFound } from "next/navigation";

import { myUserName, userProfile } from "@/data";
import Dashboard from "@/components/Dashboard";
import apiRequest from "@/lib/apiRequest";
import { aggregateStats } from "@/lib/utils";
import { PlatformsData } from "@/types";

const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";


type Params = Promise<{ username: string }>;

export default async function page(props: { params: Params }) {
  const { username } = await props.params;

  if (username !== myUserName) {
    return notFound();
  }

  const responses = await Promise.allSettled([
    apiRequest(`${APP_BASE_URL}/api/profile/codeforces/${userProfile.handles.CodeForces}`)]);

  const data: PlatformsData = {};
  if (responses[0].status === 'fulfilled') data.codeforces = responses[0].value;

  const userStats = aggregateStats(data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <Dashboard userProfile={userProfile} userStats={userStats} />
      </div>
    </div>
  );
}
