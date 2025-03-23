import { Command } from 'cmdk';

export default function CommandItem(
  {icon: Icon, label}: {icon: React.ElementType, label: string}){

  return (
    <Command.Item
      className='flex cursor-pointer transition-colors p-2 text-sm
    text-stone-950 hover:bg-stone-200 rounded items-center gap-2'
    >
      <Icon />
      {label}
    </Command.Item>
  )
}