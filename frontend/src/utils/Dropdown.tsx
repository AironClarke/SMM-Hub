import React, { useState, useRef, useEffect } from 'react';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  onSelect: (value: string) => void;
};

const defaultOptions: DropdownOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Facebook', value: 'facebook' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Youtube', value: 'youtube' },
  { label: 'TikTok', value: 'tiktok' },
  { label: 'Twitch', value: 'twitch' },
  { label: 'X', value: 'x' },
];

function Dropdown({ onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleOptionClick = (option: DropdownOption) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option.value);
  };

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
        <button onClick={toggleDropdown} className="w-20 hover:cursor-pointer">
          {selected ? selected.label : 'Filter'}
          <span className="float-right">&#x25BC;</span>
        </button>

        {isOpen && (
          <ul
            className="absolute z-10 mt-2 bg-white border
            border-gray-200 rounded-md shadow-lg right-0"
          >
            {defaultOptions.map(option => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 flex items-start hover:bg-gray-100 cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
