export const dummyUserProfile = {
  name: "John Doe",
  username: "johndoe",
  image: "",
  title: "Senior Software Engineer",
  location: "San Francisco, CA",
  social: {
    github: "#",
    linkedin: "#",
    email: "#",
  },
  handles: {
    LeetCode: "",
    CodeForces: "",
    CodeChef: "",
    GeeksForGeeks: "",
  },
};

export const dummyStats = {
  totalSolved: 1245,
  totalContests: 87,
  activeDays: 632,
};

export const dummyRatings = [
  {name: "LeetCode", rating: 2150},
  {name: "CodeForces", rating: 1876},
  {name: "CodeChef", rating: 2011},
  {name: "GeeksForGeeks", rating: 1966},
];

export const dummyProblemsCount = {
  platform: "LeetCode",
  total: 1245,
  easy: 645,
  medium: 452,
  hard: 148,
};

export const myUserName = "iankitkd";

export const userProfile = {
  name: "Ankit Kumar",
  username: "iankitkd",
  image: "",
  title: "",
  location: "",
  social: {
    github: "https://github.com/iankitkd",
    linkedin: "https://linkedin.com/in/iankitkd",
    email: "mailto:iankitkd@gmail.com",
  },
  handles: {
    LeetCode: "iankitkd",
    CodeForces: "iankitkd",
    CodeChef: "iankitkd",
    GeeksForGeeks: "iankitkd",
  },
};


export const getUserUrlForPlatform = (platform: string, username:string) =>{
  if(!username) return "#";
  
  let url = "";
  switch(platform) {
    case 'LeetCode' : 
      url = `https://leetcode.com/u/${username}`;
      break;
    case 'CodeForces' : 
      url = `https://codeforces.com/profile/${username}`;
      break;
    case 'CodeChef' : 
      url = `https://codechef.com/users/${username}`;
      break;
    case 'GeeksForGeeks' : 
      url = `https://geeksforgeeks.org/user/${username}`;
      break;
    default :
      url = `#`;
      break;
  }
  return url;
}