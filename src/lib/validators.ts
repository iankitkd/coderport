import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, {
    error: "Name must be at least 2 characters.",
  }),
  email: z.email({
    error: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    error: "Password must be at least 6 characters.",
  }),
});

export const signinSchema = z.object({
  email: z.email({
    error: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    error: "Password must be at least 6 characters.",
  }),
});

export const profileSchema = z.object({
  name: z.string().min(2, {
    error: "Name must be at least 2 characters.",
  }),
  username: z.string().min(3, {
    error: "Username must be at least 3 characters.",
  }),
  // image: z.string().min(2, {
  //   error: "Image must be at least 2 characters.",
  // }).optional().or(z.literal("")),
  title: z.string().min(2, {
    error: "Title must be at least 2 characters.",
  }).optional().or(z.literal("")),
  location: z.string().min(2, {
    error: "Location must be at least 2 characters.",
  }).optional().or(z.literal("")),

  github: z.string().min(2, {
    error: "Github handle must be at least 2 characters.",
  }).optional().or(z.literal("")),
  linkedin: z.string().min(2, {
    error: "Linkedin handle must be at least 2 characters.",
  }).optional().or(z.literal("")),
  email: z.email({
    error: "Email id must be valid.",
  }).optional().or(z.literal("")),
  
  codeforces: z.string().min(2, {
    error: "CodeForces handle must be at least 2 characters.",
  }).optional().or(z.literal("")),
  codechef: z.string().min(2, {
    error: "CodeChef handle must be at least 2 characters.",
  }).optional().or(z.literal("")),
  leetcode: z.string().min(2, {
    error: "LeetCode handle must be at least 2 characters.",
  }).optional().or(z.literal("")),
  geeksforgeeks: z.string().min(2, {
    error: "GeeksForGeeks handle must be at least 2 characters.",
  }).optional().or(z.literal("")),
});

export type SignupValues = z.infer<typeof signupSchema>;
export type SigninValues = z.infer<typeof signinSchema>;
export type ProfileValues = z.infer<typeof profileSchema>;