import { useEffect, useState } from 'react';
import { useUUIDStore } from '../../store';
import { useCopyToClipboard } from 'react-use';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { CopyIcon, RotateCcwIcon } from 'lucide-react';
import { toast } from 'sonner';

export function UUIDItem() {
  const { generateUUID, selectedVersion, autoRegenerateAfterCopy } =
    useUUIDStore();
  const [uuid, setUUID] = useState('');
  const [_state, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (selectedVersion) {
      setUUID(generateUUID());
    }
  }, [selectedVersion, generateUUID]);

  return (
    <div className='flex items-center justify-between bg-muted rounded-md px-4 py-2 flex-1'>
      <span>{uuid}</span>
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='ml-4'
              onClick={() => {
                copyToClipboard(uuid);
                autoRegenerateAfterCopy && setUUID(generateUUID());
                toast('UUID Copied');
              }}
            >
              <CopyIcon className='w-4 h-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Copy</TooltipContent>
        </Tooltip>
        {!autoRegenerateAfterCopy && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='ml-4'
                onClick={() => {
                  setUUID(generateUUID());
                }}
              >
                <RotateCcwIcon className='w-4 h-4' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Regenerate</TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
