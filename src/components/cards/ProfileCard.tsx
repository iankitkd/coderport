import Image from "next/image";

import Icon from "../Icon";
import { IconName } from "../Icon/Icons";
import { Profile } from "@/types";
import { getUserUrlForPlatform } from "@/lib/utils";

export default async function ProfileCard({ profile }: { profile: Profile }) {
  const { name, image, username, title, location } = profile;
  const socials = {
    ...(profile.github && { github: profile.github }),
    ...(profile.linkedin && { linkedin: profile.linkedin }),
    ...(profile.email && { email: profile.email}),
  };
  const handles = {
    ...(profile.codeforces && { CodeForces: profile.codeforces }),
    ...(profile.codechef && { CodeChef: profile.codechef }),
    ...(profile.leetcode && { LeetCode: profile.leetcode }),
    ...(profile.geeksforgeeks && { GeeksForGeeks: profile.geeksforgeeks }),
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg p-6 space-y-2">
      <div className="flex flex-col items-center">
        <div className="bg-secondary rounded-full w-24 h-24 mb-2">
          {image ? (
            <Image
              src={image}
              alt="User image"
              height={24}
              width={24}
              className="h-full w-full object-cover"
            />
          ) : (
            <Icon name="user" className="w-full h-full p-4" />
          )}
        </div>
        <h2 className="text-xl font-bold text-secondary-foreground">{name}</h2>
        <p className="text-blue-600">@{username}</p>
      </div>

      <div className="border-y border-border py-2 flex justify-center space-x-6">
        {Object.entries(socials).map(([key, value]) => (
          <a href={getUserUrlForPlatform(key, value)} key={key} target="_blank">
            <Icon name={key as IconName} className="text-tertiary-foreground w-8 h-8 hover:text-blue-500 hover:scale-[1.05] transition-colors" />
          </a>
        ))}
      </div>

      <div className="py-2">
        <p className="text-secondary-foreground">{title}</p>
        <p className="text-tertiary-foreground text-sm mt-1">{location}</p>
      </div>

      <div className="">
        <h3 className="font-semibold text-lg text-secondary-foreground mb-3">{Object.entries(handles).length > 0 && "Coding Handles"}</h3>
        <div className="flex flex-col gap-1">
          {Object.entries(handles).map(([key, value]) => (
            <a href={getUserUrlForPlatform(key.toLowerCase(), value)} key={key} target="_blank">
              <div className="flex items-center justify-between px-2 py-2 rounded-2xl hover:bg-card-hover group">
                <div className="flex gap-2">
                  <Icon name={key.toLowerCase() as IconName} className="text-gray-800 w-8 h-8" />
                  <span className="font-medium text-tertiary-foreground">{key}</span>
                </div>

                <Icon name="externalLink" className="text-muted-foreground w-4 h-4 group-hover:text-blue-600" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
