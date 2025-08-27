import { ComponentType } from 'react';
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaUser, FaLock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
import { FcGoogle } from 'react-icons/fc';

import { ImageIcon } from './ImageIcon';
import { IconType } from 'react-icons';
import { ImageProps } from 'next/image';

type ReactIconComponent = IconType;
type PNGIconComponent = ComponentType<Omit<ImageProps, 'src' | 'alt'>>;
export type IconComponent = ReactIconComponent | PNGIconComponent;

export type IconName = 'github' | 'linkedin' | 'email' | 'user' 
  | 'CodeForces' | 'CodeChef' | 'LeetCode' | 'LeetCodeDark' | 'GeeksForGeeks' | 'google'
  | 'externalLink' | 'lock' | 'checkCircle' | 'exclamationTriangle';

export const Icons: Record<IconName, IconComponent> = {
  user: FaUser,
  github: FaGithub,
  linkedin: FaLinkedin,
  email: MdMail,
  externalLink: FaExternalLinkAlt,
  CodeForces: () => <ImageIcon src="/logos/codeforces.png" alt="Codeforces" />,
  CodeChef: () => <ImageIcon src="/logos/codechef.png" alt="Codechef"/>,
  LeetCode: () => <ImageIcon src="/logos/leetcode-light.png" alt="Leetcode" />,
  LeetCodeDark: () => <ImageIcon src="/logos/leetcode-dark.png" alt="Leetcode Dark" />,
  GeeksForGeeks: () => <ImageIcon src="/logos/gfg.png" alt="GFG" />,
  google: FcGoogle,
  lock: FaLock,
  checkCircle: FaCheckCircle,
  exclamationTriangle: FaExclamationTriangle,
};
