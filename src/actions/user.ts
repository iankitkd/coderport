"use server"

import { prisma } from "@/lib/prisma";
import { SignupValues } from "@/lib/validators";
import { Profile } from "@/types";

export const createUser = async ({name, email, password}: SignupValues) => {
  const user = await prisma.user.create({data: {
    name,
    email,
    password,
  }});
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({where: { email },});
  return user;
};

export const getUserProfile = async (id: string): Promise<Profile | null> => {
  const profileData = await prisma.profile.findUnique({where: {id}});

  if(!profileData) return null;

  const transformedData = {
    ...profileData,
    social: {
      github: profileData.github,
      linkedin: profileData.linkedin,
      email: profileData.email
    },
    handles: {
      codeforces: profileData.codeforces,
      codechef: profileData.codechef,
      leetcode: profileData.leetcode,
      geeksforgeeks: profileData.geeksforgeeks
    }
  };
  return transformedData as Profile;
}