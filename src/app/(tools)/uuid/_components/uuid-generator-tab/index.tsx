'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { useUUIDStore } from '../../store';
import { NumberOfUUIDs } from './number-of-uuids';
import { SelectUUIDVersion } from './select-uuid-version';
import { UUIDItem } from './uuid-item';

export const UUIDGeneratorTab = () => {
  const { numberOfUUIDs } = useUUIDStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate UUIDs</CardTitle>
        <CardDescription>
          Select the number of UUIDs to generate and the version.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex gap-4 items-center'>
          <SelectUUIDVersion />
          <Separator orientation='vertical' className='h-10' />
          <NumberOfUUIDs />
        </div>
        <div className='flex flex-col gap-2 '>
          {Array.from({ length: numberOfUUIDs }).map((_, index) => (
            <div key={index} className='flex items-center gap-2'>
              <span className='text-muted-foreground'>{index + 1}.</span>
              <UUIDItem />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
