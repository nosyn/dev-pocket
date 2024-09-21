'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AppConfig, RoutesConfig } from '@/configs';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const CollapseNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
          <Menu className='h-5 w-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col'>
        <nav className='grid gap-2 text-lg font-medium'>
          <Link
            href='/'
            className='flex items-center gap-2 text-lg font-semibold'
          >
            <AppConfig.Icon className='h-6 w-6' />
            <span className='text-base'>{AppConfig.name}</span>
          </Link>
          {RoutesConfig.map((rc, index) => {
            const { href, title, Icon } = rc;

            return (
              <Link
                key={index}
                href={href}
                className={cn(
                  'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground',
                  pathname === href
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                <Icon className='h-5 w-5' />
                {title}
              </Link>
            );
          })}
        </nav>
        <div className='mt-auto'>
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
      {RoutesConfig.map((rc, index) => {
        const { href, title, Icon } = rc;

        return (
          <Link
            key={index}
            href={href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              pathname === href
                ? 'bg-muted text-primary'
                : 'text-muted-foreground'
            )}
          >
            <Icon className='h-5 w-5' />
            {title}
          </Link>
        );
      })}
    </nav>
  );
};
