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
import { Badge } from '@/components/ui/badge';

export const UUIDValidatorTab = () => {
  const { version } = useUUIDStore();
  const [uuid, setUUID] = useState('');
  const UUIDVersion = version(uuid);
  const isValidUUID = UUIDVersion !== 0;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uuid = String(event.target.value).trim();
    setUUID(uuid);
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
        {uuid && (
          <Badge variant={isValidUUID ? 'default' : 'destructive'}>
            {isValidUUID ? `UUID v${UUIDVersion}` : 'Invalid UUID'}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};
