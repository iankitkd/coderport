import apiRequest from "@/lib/apiRequest";
import { PlatformData } from "@/types";

type Difficulty = "easy" | "medium" | "hard" | "all";

interface SubmissionStats {
  difficulty: Difficulty;
  count: number;
  submissions: number;
}

export const fetchLeetCodeData = async (username: string): Promise<PlatformData> => {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        profile {
          realName
          userAvatar
          ranking
        }
      }
      userContestRanking(username: $username) {
        rating
        attendedContestsCount
      }
    }
  `;

  try {
    const response = await apiRequest("https://leetcode.com/graphql", "POST", {
      data: {
        query,
        variables: { username },
      },
    });

    const data = response.data;
    if (!data.matchedUser) {
      throw new Error("Failed to fetch LeetCode data");
    };

    const userRating = Math.round(data.userContestRanking?.rating);
    // const userTitle = getLeetCodeTitleInfo(userRating);

    let problems = data.matchedUser.submitStats.acSubmissionNum.reduce(
      (acc: Record<Difficulty, number>, item: SubmissionStats) => ({
        ...acc,
        [item.difficulty.toLowerCase() as Difficulty]: item.count,
      }),
      { easy: 0, medium: 0, hard: 0, all: 0 }
    );
    problems = {...problems, total: problems.all, platform: "LeetCode"};

    return {
      name: data.matchedUser.profile.realName || "",
      username: username,
      avatar: data.matchedUser.profile.userAvatar,
      contests: data.userContestRanking?.attendedContestsCount || 0,
      rating: userRating || 0,
      title: "",
      totalSolved: problems.all || 0,
      problems: problems,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch LeetCode data");
  }
};

// function getLeetCodeTitleInfo(rating: number) {
//   if (rating === null || rating === undefined)
//     return { title: "Unrated", color: "gray" };

//   if (rating < 1400) return { title: "Newbie", color: "text-gray-600" };
//   if (rating < 1600) return { title: "Knight", color: "text-green-700" };
//   if (rating < 1800) return { title: "Guardian", color: "text-blue-700" };
//   if (rating < 2000) return { title: "Crusader", color: "text-purple-800" };
//   if (rating < 2200) return { title: "Paladin", color: "text-yellow-500" };
//   if (rating < 2400) return { title: "Challenger", color: "text-orange-500" };
//   return { title: "Legendary", color: "text-red-600" };
// }
