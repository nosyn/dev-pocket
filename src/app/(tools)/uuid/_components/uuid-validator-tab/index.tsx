'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useUUIDStore } from '../../store';

export const UUIDValidatorTab = () => {
  const { validateUUID } = useUUIDStore();
  const [uuid, setUUID] = useState('');
  const [isValidUUID, setIsValidUUID] = useState<boolean | null>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uuid = String(event.target.value).trim();

    setUUID(uuid);

    setIsValidUUID(uuid.length ? validateUUID(event.target.value) : null);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Validate UUID</CardTitle>
        <CardDescription>Enter a UUID to validate.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Label htmlFor='uuid'>UUID</Label>
          <Input
            id='uuid'
            type='text'
            placeholder='Enter UUID'
            value={uuid}
            onChange={handleOnChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        {isValidUUID !== null && (
          <p className={isValidUUID ? 'text-green-500' : 'text-destructive'}>
            {isValidUUID ? 'Valid UUID' : 'Invalid UUID'}
          </p>
        )}
      </CardFooter>
    </Card>
  );
};
