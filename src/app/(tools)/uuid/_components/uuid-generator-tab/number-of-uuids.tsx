import { Label } from '@/components/ui/label';
import { useUUIDStore } from '../../store';
import { Input } from '@/components/ui/input';

export function NumberOfUUIDs() {
  const { numberOfUUIDs, setNumberOfUUIDs } = useUUIDStore();

  return (
    <div className='space-y-2'>
      <Label>Number of UUIDs</Label>
      <Input
        type='number'
        value={numberOfUUIDs}
        onChange={(e) => {
          setNumberOfUUIDs(Number(e.target.value));
        }}
      />
    </div>
  );
}
