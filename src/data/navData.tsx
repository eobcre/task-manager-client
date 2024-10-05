import { nanoid } from 'nanoid';

export interface NavItemProps {
  id: string;
  iconName: string;
  nav: string;
  link: string;
  style: string;
}

export const navData: NavItemProps[] = [
  {
    id: nanoid(),
    iconName: 'ic:twotone-task-alt',
    nav: 'Tasks',
    link: '/Tasks',
    style: 'text-white w-[32px] h-[32px]'
  },
  {
    id: nanoid(),
    iconName: 'proicons:settings',
    nav: 'Settings',
    link: '/Settings',
    style: 'text-white w-[32px] h-[32px]'
  },
];
