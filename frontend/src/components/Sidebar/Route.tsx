import type { IconType } from 'react-icons';

export const Route = ({
    selected,
    Icon,
    title
  } : {
    selected: boolean;
    Icon: IconType;
    title: string;
  }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full
      rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]
      hover:cursor-pointer
      ${selected ? 'bg-white text-stone-950 shadow' :
      'hover:bg-stone-200 bg-transparent text-stone-500 shadow-none'}`}
    >
      <Icon className={selected ? 'text-violet-500' : ''}/>
      <span>{title}</span>
    </button>
  )
}