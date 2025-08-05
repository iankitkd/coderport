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
    const userTitle = getLeetCodeTitleInfo(userRating);

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
      title: userTitle.title || "Unrated",
      totalSolved: problems.all || 0,
      problems: problems,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch LeetCode data");
  }
};

function getLeetCodeTitleInfo(rating: number) {
  if (rating === null || rating === undefined)
    return { title: "Unrated", color: "gray" };

  if (rating < 1400) return { title: "Newbie", color: "gray" };
  if (rating < 1600) return { title: "Knight", color: "green" };
  if (rating < 1800) return { title: "Guardian", color: "blue" };
  if (rating < 2000) return { title: "Crusader", color: "purple" };
  if (rating < 2200) return { title: "Paladin", color: "yellow" };
  if (rating < 2400) return { title: "Challenger", color: "orange" };
  return { title: "Legendary", color: "red" };
}
