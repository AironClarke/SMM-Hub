/* eslint-disable max-len */
export default function HelperButton({text}: {text: string}){
  return (
    <button className="relative text-sm text-gray-700 rounded-full
    border-2 border-transparent bg-gradient-to-r from-blue-500
    via-purple-500 to-pink-500
    shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)]
    hover:shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]
    hover:cursor-pointer
    transition-shadow duration-300 ease-in-out"
    >
      <span className="block px-4 py-2 rounded-full bg-white
        hover:bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"
      >
        {text}
      </span>
    </button>
  )
}