import { ComponentType } from 'react';
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';
import { MdMail } from "react-icons/md";

import { ImageIcon } from './ImageIcon';

export type IconName = 'github' | 'linkedin' | 'email' | 'user' | 'CodeForces' | 'CodeChef' | 'LeetCode' | 'LeetCodeDark' | 'GeeksForGeeks' | 'externalLink';

export const Icons: Record<IconName, ComponentType<any>> = {
  user: FaUser,
  github: FaGithub,
  linkedin: FaLinkedin,
  email: MdMail,
  externalLink: FaExternalLinkAlt,
  CodeForces: (props) => <ImageIcon src="/logos/codeforces.png" alt="Codeforces" {...props} />,
  CodeChef: (props) => <ImageIcon src="/logos/codechef.png" alt="Codechef" {...props} />,
  LeetCode: (props) => <ImageIcon src="/logos/leetcode-light.png" alt="Leetcode" {...props} />,
  LeetCodeDark: (props) => <ImageIcon src="/logos/leetcode-dark.png" alt="Leetcode Dark" {...props} />,
  GeeksForGeeks: (props) => <ImageIcon src="/logos/gfg.png" alt="GFG" {...props} />,
};
