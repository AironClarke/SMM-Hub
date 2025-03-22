import { AccountToggle } from './AccountToggle'
import { Search } from './Search'

export const Sidebar = () => {
  return (
    <div>
      <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
        {/* TODO: main sidebar content */}
        <AccountToggle />
        <Search />
      </div>

      {/* TODO: plan toggle */}
    </div>
  )
}