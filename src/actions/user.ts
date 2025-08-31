"use server"

import { prisma } from "@/lib/prisma";
import { profileSchema, ProfileValues, SignupValues } from "@/lib/validators";
import { Profile } from "@/types";

export const createUser = async ({name, email, password}: SignupValues) => {
  const user = await prisma.user.create({data: {
    name,
    email,
    password,
  }});
  return user;
};

export const getUserByID = async (id: string) => {
  const user = await prisma.user.findUnique({where: { id },});
  return user;
};
export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({where: { email },});
  return user;
};

export const getUserProfile = async (userId: string): Promise<Profile | null> => {
  const profileData = await prisma.profile.findUnique({where: {userId}});

  return profileData as Profile;
}

export const updateUserProfile = async (userId:string, values: ProfileValues) => {
  try {
    const validatedFields = profileSchema.safeParse(values);
    
    if (!validatedFields.success) {
      return { success: false, message: "Invalid fields!" };
    }

    const data = {...(validatedFields.data), onboarded: true};
    await prisma.profile.upsert({
      where: { userId },
      update: data,
      create: {
        ...data,
        user: { connect: { id: userId } },
      },
    });

    return { success: true, message: "Profile update successfully!" };
  } catch (error) {
    return { success: false, message: "Something went wrong", error: error };
  }
}