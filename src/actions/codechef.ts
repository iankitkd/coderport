import * as cheerio from 'cheerio';

import { PlatformData } from '@/types';

export const fetchCodeChefData = async (username: string): Promise<PlatformData> => {
  try {
    const response = await fetch(`https://www.codechef.com/users/${username}`);
    const html = await response.text();
    
    const $ = cheerio.load(html);
    // console.log(html)
    // console.log($)
    
    // Extract rating
    const ratingText = $('.rating-number').text();
    const rating = parseInt(ratingText.match(/\d+/)?.[0] || '0');
    const starText = $('.rating-star').text();
    const title = starText ?? "";
    
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
      contests,
      totalSolved,
    };
  } catch (error) {
    throw new Error('Failed to fetch CodeChef data');
  }
};