import { UUIDTabs } from './_components/uuid-tabs';

export default function DashboardPage() {
  return (
    <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 max-h-[calc(100vh-72px)] overflow-y-scroll'>
      <UUIDTabs />
    </main>
  );
}
