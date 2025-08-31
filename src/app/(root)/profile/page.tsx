import { redirect } from "next/navigation";
import { auth } from "@/auth";

import ProfileCard from "@/components/cards/ProfileCard";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/Button";

import { getUserProfile } from "@/actions/user";
import { Profile } from "@/types";
import Link from "next/link";
import SignoutButton from "@/components/auth/SignoutButton";

export default async function page() {
  const session = await auth();

  const user = session?.user;

  if (!user || !user.id) {
    redirect("/login");
  }

  const profile : Profile | null = await getUserProfile(user.id);
  if(!profile) return;
  if(!profile?.onboarded) {
    redirect(`/onboarding`);
  }
  const username = profile.username;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="py-4">
        <Link href={`/user/${username}`}>
          <Button
            variant="gradient"
            className="w-full py-3 px-6 rounded-2xl text-xl flex items-center gap-2"
          >
            <Icon name="barChart" />
            View Your Stats
          </Button>
        </Link>
      </div>

      <ProfileCard profile={profile} />

      <div className="flex flex-col gap-4 pt-8 pb-4">
        <Link href={`/profile/edit`}>
          <Button
            variant="outline"
            className="rounded-xl px-1 w-full text-nowrap flex items-center gap-2"
          >
            <Icon name="edit" />
            Edit Profile
          </Button>
        </Link>

        <SignoutButton />
      </div>
    </div>
  );
}
