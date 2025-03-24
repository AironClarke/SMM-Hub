export default function Helper() {
  return (
    <div className="px-8 bg-white flex flex-col ">
      <div className="min-h-screen bg-white bg-[linear-gradient(rgba(0,0,0,0.1)_1px,
      transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)]
      bg-[size:20px_20px]">
      <h1 className="text-4xl font-bold text-black">Hello, Courtney</h1>
      <div className="flex items-center gap-8 pt-1">
        <p
          className="text-4xl bg-clip-text bg-gradient-to-r from-blue-500
          via-purple-500 to-pink-500 text-transparent font-semibold"
        >
          How can I help you today?
        </p>
        <div className="">
          <ul className="flex gap-2 ">
            <li>
              <button className="bg-purple-500 text-white
                rounded-full text-sm border-2 border-purple-500
                shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)]
                 overflow-visible
                hover:cursor-pointer
                hover:shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]"
              >
                <span className="block px-4 py-2 rounded-full bg-purple-500">
                  ★ Ask AI
                </span>
              </button>
            </li>

            <li>
              <button className="relative text-sm text-gray-700 rounded-full
                border-2 border-transparent bg-gradient-to-r from-blue-500
                via-purple-500 to-pink-500
                shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)]
                overflow-visible
                hover:cursor-pointer
                hover:shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]"
              >
                <span className="block px-4 py-2 rounded-full bg-white
                  hover:bg-gradient-to-r from-blue-100
                via-purple-100 to-pink-100"
                >
                  Update tasks
                </span>
              </button>
            </li>

            <li>
              <button className="relative text-sm text-gray-700 rounded-full
                border-2 border-transparent bg-gradient-to-r from-blue-500
                via-purple-500 to-pink-500
                shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)]
                overflow-visible
                hover:cursor-pointer
                hover:shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]"
              >
                <span className="block px-4 py-2 rounded-full bg-white
                  hover:bg-gradient-to-r from-blue-100
                via-purple-100 to-pink-100"
                >
                  Create workspace
                </span>
              </button>
            </li>

            <li>
              <button className="relative text-sm text-gray-700 rounded-full
                border-2 border-transparent bg-gradient-to-r from-blue-500
                via-purple-500 to-pink-500
                shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)]
                overflow-visible
                hover:cursor-pointer
                hover:shadow-[0px_7px_7px_-5px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_12px_4px_rgba(0,0,0,0.12)]
                transition-[box-shadow,background]
            duration-[280ms,15ms]
            delay-[0ms,30ms]
            ease-[cubic-bezier(0.4,0,0.2,1),linear]"
              >
                <span className="block px-4 py-2 rounded-full bg-white
                  hover:bg-gradient-to-r from-blue-100
                via-purple-100 to-pink-100"
                >
                  Connect app
                </span>
              </button>
            </li>
          </ul>

        </div>
    </div>
      </div>
  </div>
  )
}