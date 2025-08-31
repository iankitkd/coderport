import { auth } from '@/auth';
import ProfileForm from '@/components/auth/ProfileForm'
import { getUserProfile } from '@/actions/user';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await auth();
  const user = session?.user;
  if(!user?.id) {
    return;
  }

  const profile = await getUserProfile(user.id);

  if(profile?.onboarded) {
    redirect('/profile');
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <ProfileForm 
        mode="onboarding"
        userId={user.id} 
        userName={user.name || ""}
        initialData={profile}
      />
    </div>
  )
}
