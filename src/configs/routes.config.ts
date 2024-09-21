import { Home, LucideIcon } from 'lucide-react';

type RouteConfig = {
  Icon: LucideIcon;
  title: string;
  href: string;
};

export const RoutesConfig: RouteConfig[] = [
  {
    Icon: Home,
    title: 'Dashboard',
    href: '/',
  },
];
