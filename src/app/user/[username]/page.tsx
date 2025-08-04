import { notFound } from "next/navigation";

import { myUserName, userProfile } from "@/data";
import Dashboard from "@/components/Dashboard";

type Params = Promise<{ username: string }>;

export default async function page(props: { params: Params }) {
  const params = await props.params;
  const { username } = params;

  if (username !== myUserName) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <Dashboard userProfile={userProfile} />
      </div>
    </div>
  );
}
