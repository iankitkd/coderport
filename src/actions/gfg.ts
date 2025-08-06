import * as cheerio from "cheerio";

import { PlatformData } from "@/types";

export const fetchGFGData = async (username: string): Promise<PlatformData> => {
  try {
    const response = await fetch(`https://www.geeksforgeeks.org/user/${username}`);
    const html = await response.text();

    const $ = cheerio.load(html);

    const name = $('[class^="profilePicSection_head_userHandle"]').text().trim();
    // const codingScore = $('[class^="scoreCard_head_left--score"]').eq(0).text().trim();
    const totalSolved = $('[class^="scoreCard_head_left--score"]').eq(1).text().trim();
    const contestRating = $('[class^="scoreCard_head_left--score"]').eq(2).text().trim();

    // Extract problems solved by difficulty
    const schoolProblems = $('[class^="problemNavbar_head_nav--text__UaGCx"]').eq(0).text().trim().match(/\d+/); 
    const basicProblems = $('[class^="problemNavbar_head_nav--text__UaGCx"]').eq(1).text().trim().match(/\d+/); 
    const easyProblems = $('[class^="problemNavbar_head_nav--text__UaGCx"]').eq(2).text().trim().match(/\d+/); 
    const mediumProblems = $('[class^="problemNavbar_head_nav--text__UaGCx"]').eq(3).text().trim().match(/\d+/);
    const hardProblems = $('[class^="problemNavbar_head_nav--text__UaGCx"]').eq(4).text().trim().match(/\d+/);

    const problems = {
      school: (schoolProblems ? parseInt(schoolProblems[0]) : 0),
      basic: (basicProblems ? parseInt(basicProblems[0]) : 0),
      easy: (easyProblems ? parseInt(easyProblems[0]) : 0),
      medium: (mediumProblems ? parseInt(mediumProblems[0]) : 0),
      hard: (hardProblems ? parseInt(hardProblems[0]) : 0),
    };   

    return {
      name,
      username,
      avatar: "",
      totalSolved: parseInt(totalSolved || "0"),
      rating: parseInt(contestRating) || 0,
      title: "",
      contests: 0,
      problems,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch GFG data");
  }
};
