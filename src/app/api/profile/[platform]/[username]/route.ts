import { NextResponse } from "next/server";

import { fetchCodeChefData } from "@/actions/codechef";
import { fetchCodeForcesData } from "@/actions/codeforces";
import { fetchGFGData } from "@/actions/gfg";
import { fetchLeetCodeData } from "@/actions/leetcode";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ platform: string; username: string }> }
) {
  const { platform, username } = await params;

  if (!platform || !username) {
    return NextResponse.json({ error: 'Missing platform or username' }, {status: 400});
  }
  
  try {
    let data;
    switch (platform) {
      case 'leetcode':
        data = await fetchLeetCodeData(username);
        break;
      case 'codeforces':
        data = await fetchCodeForcesData(username);
        break;
      case 'codechef':
        data = await fetchCodeChefData(username);
        break;
      case 'gfg':
        data = await fetchGFGData(username);
        break;
      default:
        return NextResponse.json({ error: 'Invalid Platform' }, {status: 400});
    }
    
    if (!data) {
      return NextResponse.json({ error: 'User not found' }, {status: 404});
    }
    return NextResponse.json(data, {status: 200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: `Failed to fetch ${platform} data` }, {status: 500})
  }
}