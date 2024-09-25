import { Label } from '@/components/ui/label';
import {
  SUPPORTED_UUID_VERSIONS,
  SupportedUUIDVersion,
  useUUIDStore,
} from '../../store';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectUUIDVersion() {
  const { onSelectVersion, selectedVersion } = useUUIDStore();

  return (
    <div className='space-y-2'>
      <Label>Select UUID version</Label>
      <Select
        defaultValue={selectedVersion}
        onValueChange={(version) => {
          onSelectVersion(version as SupportedUUIDVersion);
        }}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select a version' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>UUID Version</SelectLabel>
            {SUPPORTED_UUID_VERSIONS.map((version) => (
              <SelectItem key={version} value={version}>
                {version.toUpperCase()}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
