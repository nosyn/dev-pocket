import Link from 'next/link';

import { Header } from '@/components/header';
import { SideNav } from '@/components/navs';
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AppConfig } from '@/configs';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-muted/40 md:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <Link href='/' className='flex items-center gap-2 font-semibold'>
              <AppConfig.Icon className='h-6 w-6' />
              <span className='text-base'>{AppConfig.name}</span>
            </Link>
            <div className='ml-auto'>
              <ModeToggle />
            </div>
          </div>
          <div className='flex-1'>
            {/* Side navigation component which will be visible in medium or larger screen */}
            <SideNav />
          </div>
          <div className='mt-auto p-4'>
            <Card x-chunk='dashboard-02-chunk-0'>
              <CardHeader className='p-2 pt-0 md:p-4'>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
                <Button size='sm' className='w-full'>
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <Header />
        {children}
      </div>
    </div>
  );
}
