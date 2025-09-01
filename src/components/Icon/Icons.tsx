import { ComponentType } from 'react';
import { ImageIcon } from './ImageIcon';

import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaUser, FaLock, FaCheckCircle, FaExclamationTriangle, FaLaptopCode, FaEdit, FaClock } from 'react-icons/fa';
import { MdBarChart, MdLogout, MdMail } from "react-icons/md";
import { FcGoogle } from 'react-icons/fc';
import { IconType } from 'react-icons';
import { ImageProps } from 'next/image';
import { CiLock } from 'react-icons/ci';
import { FaChartSimple, FaCode, FaLocationDot } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';

type ReactIconComponent = IconType;
type PNGIconComponent = ComponentType<Omit<ImageProps, 'src' | 'alt'>>;
export type IconComponent = ReactIconComponent | PNGIconComponent;

export type IconName = 'github' | 'linkedin' | 'email' | 'user' | 'logout'
  | 'codeforces' | 'codechef' | 'leetcode' | 'leetcodedark' | 'geeksforgeeks' | 'google'
  | 'externalLink' | 'lock' | 'lockOutline' | 'checkCircle' | 'exclamationTriangle'
  | 'laptopCode'| 'edit' | 'barChart' | 'location' | 'user2' | 'chart' | 'code' | 'clock';

export const Icons: Record<IconName, IconComponent> = {
  user: FaUser,
  github: FaGithub,
  linkedin: FaLinkedin,
  email: MdMail,
  externalLink: FaExternalLinkAlt,
  codeforces: () => <ImageIcon src="/logos/codeforces.png" alt="Codeforces" />,
  codechef: () => <ImageIcon src="/logos/codechef.png" alt="Codechef"/>,
  leetcode: () => <ImageIcon src="/logos/leetcode-light.png" alt="Leetcode" />,
  leetcodedark: () => <ImageIcon src="/logos/leetcode-dark.png" alt="Leetcode Dark" />,
  geeksforgeeks: () => <ImageIcon src="/logos/gfg.png" alt="GFG" />,
  google: FcGoogle,
  lock: FaLock,
  lockOutline: CiLock,
  logout: MdLogout,
  checkCircle: FaCheckCircle,
  exclamationTriangle: FaExclamationTriangle,
  laptopCode: FaLaptopCode,
  edit: FaEdit,
  barChart: MdBarChart,
  location: FaLocationDot,
  user2: FiUser,
  chart: FaChartSimple,
  code: FaCode,
  clock: FaClock,
};
