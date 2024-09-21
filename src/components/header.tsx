import { CollapseNav } from './navs';
import { SearchBox } from './search-box';
import { UserMenu } from './user-menu';

export const Header = () => {
  return (
    <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
      {/* Collapse navigation component which will be used for smaller screen */}
      <CollapseNav />

      {/* Search box for the application */}
      <SearchBox />

      {/* User menu dropdown */}
      <UserMenu />
    </header>
  );
};
