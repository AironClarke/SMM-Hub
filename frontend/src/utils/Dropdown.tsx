import React, { useState, useRef, useEffect } from 'react';

type DropdownOption = {
  label: string;
  value: string;
};

const defaultOptions: DropdownOption[] = [
  { label: 'Option 1', value: 'one' },
  { label: 'Option 2', value: 'two' },
  { label: 'Option 3', value: 'three' },
];

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleOptionClick = (option: DropdownOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className='w-16 hover:cursor-pointer'
        >
          {selected ? selected.label : 'Filter'}
          <span className="float-right">&#x25BC;</span>
        </button>

        {isOpen && (
          <ul
            className="absolute z-10 mt-2 bg-white border
            border-gray-200 rounded-md shadow-lg"
          >
            {defaultOptions.map(option => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;