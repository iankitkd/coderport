import apiRequest from "@/lib/apiRequest";

export const fetchCodeForcesData = async (username: string) => {
  try {
    const [response, ratingResponse, statusResponse] = await 
      Promise.all([
        apiRequest(`https://codeforces.com/api/user.info?handles=${username}`),
        apiRequest(`https://codeforces.com/api/user.rating?handle=${username}`),
        apiRequest(`https://codeforces.com/api/user.status?handle=${username}`),
    ]);

    const userData = response.result[0];
    
    const solvedProblems = new Set<string>();
    const activeDates = new Set<string>();
    for (const sub of statusResponse.result) {
      if (sub.verdict === 'OK') {
        const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
        solvedProblems.add(problemId);
      }
      const timestamp = sub.creationTimeSeconds;
      const date = new Date(timestamp * 1000).toISOString().split('T')[0];  // 'YYYY-MM-DD'
      activeDates.add(date);
    }

    return {
      name: userData.firstName? (userData.firstName + ' ' + userData.lastName) : "",
      username: userData.handle,
      avatar: userData.avatar || '',
      title: userData.rank || '',
      rating: userData.rating || 0,
      ratingColor: getRatingColor(userData.rank),
      maxRating: userData.maxRating || 0,
      contests: ratingResponse.result.length || 0,
      totalSolved: solvedProblems.size || 0,
      activeDays: activeDates.size|| 0,
      activeDates: Array.from(activeDates || []),
    };
  } catch (error) {
    throw new Error(`Failed to fetch CodeForces data ${error}`);
  }
};

const getRatingColor = (title: string) => {
  if(!title) return "";
  switch(title.toLowerCase()) {
    case "newbie": return "text-gray-600";
    case "pupil": return "text-green-600";
    case "specialist": return "text-cyan-600";
    case "expert": return "text-blue-700";
    case "candidate master": return "text-violet-700";
    case "master": return "text-orange-500";
    case "international master": return "text-orange-500";
  }
  return "text-red-600";
}