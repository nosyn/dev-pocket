import { RotateCcwIcon } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';
import { useUUIDStore } from '../../store';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

export function AutoRegenerateAfterCopy() {
  const { toggleAutoRegenerateAfterCopy, autoRegenerateAfterCopy } =
    useUUIDStore();
  return (
    <Tooltip>
      <TooltipTrigger>
        <Toggle
          aria-label='Toggle bold'
          pressed={autoRegenerateAfterCopy}
          onClick={() => {
            toggleAutoRegenerateAfterCopy();
          }}
        >
          <RotateCcwIcon className='h-4 w-4' />
        </Toggle>
      </TooltipTrigger>
      <TooltipContent>Auto Regenerate After Copy</TooltipContent>
    </Tooltip>
  );
}
