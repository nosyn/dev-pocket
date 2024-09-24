import { AmpersandIcon, LucideIcon } from 'lucide-react';

type RouteConfig = {
  Icon: LucideIcon;
  title: string;
  href: string;
};

export const RoutesConfig: RouteConfig[] = [
  {
    Icon: AmpersandIcon,
    title: 'UUID',
    href: '/uuid',
  },
];
