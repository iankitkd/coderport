
import { auth } from "@/auth";
import { getProfile } from "@/actions/user";
import ProfileForm from "@/components/auth/ProfileForm";

export default async function page() {
  const session = await auth();
  const user = session?.user;
  if (!user?.id) {
    return;
  }

  const profile = await getProfile(user.id);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <ProfileForm 
        mode="edit" 
        userId={user.id} 
        initialData={profile} 
      />
    </div>
  );
}
