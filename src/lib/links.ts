import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiHashnode,
  SiDevdotto,
  SiLinkedin,
} from 'react-icons/si';
import { IconType } from 'react-icons';

export type Link = {
  name: string;
  url: string;
  value: string;
  icon: IconType;
};

export type Links = Link[];

export const links: Links = [
  {
    name: 'Discord',
    url: 'https://discord.com/users/828994256987226132',
    value: 'Bhaveek#5125',
    icon: SiDiscord,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bhaveek424',
    value: '@bhaveek424',
    icon: SiGithub,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/bhaveek',
    value: 'Bhaveek Jain',
    icon: SiLinkedin,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/bhaveek321',
    value: '@bhaveek321',
    icon: SiInstagram,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jBhaveek',
    value: '@jBhaveek',
    icon: SiTwitter,
  },

  {
    name: 'Hashnode',
    url: 'https://bhaveek.hashnode.dev/',
    value: '@bhaveek',
    icon: SiHashnode,
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/bhaveek',
    value: '@bhaveek',
    icon: SiDevdotto,
  },
];
