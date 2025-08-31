"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import AuthFormWrapper from "./AuthFormWrapper";
import FormError from "../shared/FormError";
import FormSucess from "../shared/FormSuccess";
import { Button } from "../ui/Button";
import TextInput from "../ui/TextInput";

import { profileSchema, ProfileValues } from "@/lib/validators";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";
import { updateUserProfile } from "@/actions/user";
import { Profile } from "@/types";

interface ProfileFormProps {
  userId: string;
  userName?: string;
  mode: "onboarding" | "edit";
  initialData: Profile | null;
}

export default function ProfileForm({ mode, userId, userName, initialData }: ProfileFormProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileFormContent mode={mode} userId={userId} userName={userName} initialData={initialData}/>
    </Suspense>
  )
}

export function ProfileFormContent({mode, userId, userName, initialData}: ProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params?.get("callbackUrl");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialData  || {name: userName}
  });

  const profileHandle = async (values: ProfileValues) => {
    setError("");
    setSuccess("");
    setIsLoading(true);
    try {
      const res = await updateUserProfile(userId, values);
      if (res.success) {
        setSuccess(res.message);
        router.push(callbackUrl || DEFAULT_SIGNIN_REDIRECT);
      } else {
        setError(res.message);
      }
    } catch (error) {
      setError("Something went wrong!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormWrapper
      showSocials={false}
      label={ mode == "onboarding" ? "Complete Your Profile" : "Edit Your Profile" }
      className="max-w-4xl"
    >
      <form onSubmit={handleSubmit(profileHandle)} className="space-y-4">

        {/* todo image update */}
        {/* <div className="flex justify-center">
          <div className="bg-gray-200 rounded-full w-24 h-24 mb-2">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="User image"
                height={24}
                width={24}
                className="h-full w-full object-cover"
              />
            ) : (
              <Icon name="user" className="w-full h-full p-4" />
            )}
          </div>
        </div> */}

        <div className="space-y-4">
          {/* profile info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg underline text-center py-2">
                Profile Info
              </h3>

              <TextInput
                label="Name"
                id="name"
                type="name"
                register={register("name")}
                error={errors.name?.message}
                iconName="user2"
                showRequired={true}
                required
              />

              <TextInput
                label="Username"
                id="username"
                type="text"
                register={register("username")}
                error={errors.username?.message}
                iconName="user"
                showRequired={true}
                required
              />

              <TextInput
                label="Title"
                id="title"
                type="title"
                register={register("title")}
                error={errors.title?.message}
                iconName="user"
              />

              <TextInput
                label="Location"
                id="location"
                type="location"
                register={register("location")}
                error={errors.location?.message}
                iconName="location"
              />
            </div>

            {/* coding handles */}
            <div>
              <h3 className="font-semibold text-lg underline text-center py-2">
                Coding Profile Handle
              </h3>

              <TextInput
                label="CodeForces"
                id="codeforces"
                type="codeforces"
                register={register("codeforces")}
                error={errors.codeforces?.message}
                iconName="codeforces"
              />

              <TextInput
                label="CodeChef"
                id="codechef"
                type="codechef"
                register={register("codechef")}
                error={errors.codechef?.message}
                iconName="codechef"
              />

              <TextInput
                label="LeetCode"
                id="leetcode"
                type="leetcode"
                register={register("leetcode")}
                error={errors.leetcode?.message}
                iconName="leetcode"
              />

              <TextInput
                label="GeeksForGeeks"
                id="geeksforgeeksg"
                type="geeksforgeeks"
                register={register("geeksforgeeks")}
                error={errors.geeksforgeeks?.message}
                iconName="geeksforgeeks"
              />
            </div>
          </div>

          {/* social handles */}
          <div className="max-w-md mx-auto">
            <h3 className="font-semibold text-lg underline text-center py-2">
              Social Profile Handle
            </h3>

            <TextInput
              label="Github"
              id="github"
              type="github"
              register={register("github")}
              error={errors.github?.message}
              iconName="github"
            />

            <TextInput
              label="LinkedIn"
              id="linkedin"
              type="linkedin"
              register={register("linkedin")}
              error={errors.linkedin?.message}
              iconName="linkedin"
            />

            <TextInput
              label="Display Email"
              id="email"
              type="email"
              register={register("email")}
              error={errors.email?.message}
              iconName="email"
            />
          </div>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          {success && <FormSucess message={success} />}
          {error && <FormError message={error} />}

          <Button
            type="submit"
            variant="gradient"
            className="w-full max-w-md"
            isLoading={isLoading}
            loadingText="Updating..."
          >
            Update
          </Button>
        </div>
      </form>
    </AuthFormWrapper>
  );
}
