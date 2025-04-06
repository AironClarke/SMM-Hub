import { FiSearch } from 'react-icons/fi';

export default function SearchBar(){
  return (
    <div className="border-1 border-stone-300 mb-4 relative flex
      items-center px-2 py-1.5 text-sm w-56 rounded shadow-md">
      <FiSearch className='mr-2' />
      <input
        onFocus={(e) => e.target.blur()}
        type="text"
        placeholder="Search"
        className="w-full bg-transparent
        placeholder:text-stone-400 focus:outline-none"
      />
    </div>
  )
}
