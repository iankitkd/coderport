import * as cheerio from 'cheerio';

import { PlatformData } from '@/types';
import apiRequest from '@/lib/apiRequest';

export const fetchCodeChefData = async (username: string): Promise<PlatformData> => {
  try {
    const html = await apiRequest(`https://www.codechef.com/users/${username}`, "GET", {}, "text");
    
    const $ = cheerio.load(html);
    
    // Extract rating
    const ratingText = $('.rating-number').text();
    const rating = parseInt(ratingText.match(/\d+/)?.[0] || '0');
    const starText = $('.rating-star').text();
    const title = starText ?? "";
    const ratingColor = getRatingColor(title.length);
    
    // Extract contests participated
    const contestsText = $('.contest-participated-count').text();
    const contestsMatch = contestsText.match(/(\d+)/);
    const contests = contestsMatch ? parseInt(contestsMatch[0]) : 0;

    // Extract problems solved
    const totalSolvedText = $('h3:contains("Total Problems Solved")').text();
    const totalSolved = parseInt(totalSolvedText.split(':')[1].trim() || '0'); 
    
    return {
      name: $('h1.h2-style').text().trim() || "",
      username: username,
      avatar: $('.user-details-container img').attr('src') || '',
      title,
      rating,
      ratingColor,
      contests,
      totalSolved,
    };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch CodeChef data');
  }
};

const getRatingColor = (star: number) => {
  switch(star) {
    case 1: return "text-gray-600";
    case 2: return "text-green-700";
    case 3: return "text-blue-700";
    case 4: return "text-purple-800";
    case 5: return "text-yellow-500";
    case 6: return "text-orange-500";
    case 7: return "text-red-600";
  }
  return "text-gray-600";
}