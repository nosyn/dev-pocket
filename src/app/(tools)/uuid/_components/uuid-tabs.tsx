import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UUIDGeneratorTab } from './uuid-generator-tab';
import { UUIDValidatorTab } from './uuid-validator-tab';

export function UUIDTabs() {
  return (
    <Tabs defaultValue='generator' className='rounded-lg  shadow-sm flex-1'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='generator'>Generator</TabsTrigger>
        <TabsTrigger value='validator'>Validator</TabsTrigger>
      </TabsList>
      <TabsContent value='generator'>
        <UUIDGeneratorTab />
      </TabsContent>
      <TabsContent value='validator'>
        <UUIDValidatorTab />
      </TabsContent>
    </Tabs>
  );
}
