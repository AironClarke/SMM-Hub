import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function SearchBar({ searchValue, setSearchValue }: SearchBarProps){
  return (
    <div className="border-1 border-stone-300 mb-4 relative flex
      items-center px-2 py-1.5 text-sm w-56 rounded shadow-md">
      <FiSearch className='mr-2' />
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search for a campaign title"
        className="w-full bg-transparent
        placeholder:text-stone-400 focus:outline-none"
       />
    </div>
  )
}
