import { Command } from 'cmdk'
import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react'
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from 'react-icons/fi';
import CommandItem from './CommandItem';

// TODO: Move this to a types folder
interface OpenState {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const CommandMenu = ({open, setOpen}: OpenState) => {
  const [searchValue, setSearchValue] = useState('')

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open: boolean) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className='fixed inset-0 bg-stone-950/50'
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl border-stone-300
        border overflow-hidden w-full max-w-lg mx-auto mt-12"
      >
        <Command.Input
          value={searchValue}
          onValueChange={setSearchValue}
          placeholder='What are you looking for?'
          className="relative border-b border-stone-300 p-3 text-base
          w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
          <span className="text-violet-500">{searchValue}</span>
          {' '}not found.
          </Command.Empty>

          <Command.Group
            heading="Team"
            className='text-sm mb-3 text-stone-400'
          >
            <CommandItem icon={FiPlus} label="Invite Member" />
            <CommandItem icon={FiEye} label="See Org Chart" />
          </Command.Group>

          <Command.Group
            heading="Integrations"
            className='text-sm mb-3 text-stone-400'
          >
            <CommandItem icon={FiLink} label="Link Services" />
            <CommandItem icon={FiPhone} label="Contact Support" />
          </Command.Group>

          <CommandItem icon={FiLogOut} label="Sign Out" />

        </Command.List>
      </div>
    </Command.Dialog>
  )
}