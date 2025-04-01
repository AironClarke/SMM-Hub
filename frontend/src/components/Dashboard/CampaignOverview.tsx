/* eslint-disable max-lines */
import { FiFilter, FiSearch } from 'react-icons/fi';
import CampaignCard from './CampaignCard';

export default function CampaignOverview(){
  return (
    <div className="w-[100%-2rem] mx-4">

      <div className="flex mb-4 mt-8">

        <div className="flex flex-wrap items-start hover:cursor-pointer">
          <div className="flex flex-row gap-3 justify-center items-center pb-2 pl-3 pr-3">
            <span className="font-medium text-1xl">Active</span>
            <div>
              <span
                className="h-6 w-6 bg-purple-500 rounded-full
                flex items-center justify-center text-white"
              >
                14
              </span>
            </div>
          </div>
          <div className='w-full bg-purple-500 h-1'></div>
        </div>

        <div className="flex flex-wrap items-start hover:cursor-pointer group">
          <div className="flex flex-row gap-3 justify-center items-center pb-2 pl-3 pr-3">
            <span className="font-medium text-1xl text-stone-400
              group-hover:text-stone-500"
            >
              In Progress</span>
            <div>
              <span
                className="h-6 w-6 bg-gray-300 rounded-full
                flex items-center justify-center text-stone-400
                group-hover:text-stone-500 group-hover:bg-purple-200"
              >
                14
              </span>
            </div>
          </div>
          <div className='w-full bg-gray-300 h-1 group-hover:bg-purple-200'></div>
        </div>

        <div className="flex flex-wrap items-start hover:cursor-pointer group">
          <div className="flex flex-row gap-3 justify-center items-center pb-2 pl-3 pr-3">
            <span className="font-medium text-1xl text-stone-400
              group-hover:text-stone-500"
            >
              Completed</span>
            <div>
              <span
                className="h-6 w-6 bg-gray-300 rounded-full
                flex items-center justify-center text-stone-400
                group-hover:text-stone-500 group-hover:bg-purple-200"
              >
                8
              </span>
            </div>
          </div>
          <div className='w-full bg-gray-300 h-1 group-hover:bg-purple-200'></div>
        </div>

        <div className="flex flex-wrap items-start hover:cursor-pointer group">
          <div className="flex flex-row gap-3 justify-center items-center pb-2 pl-3 pr-3">
            <span className="font-medium text-1xl text-stone-400
              group-hover:text-stone-500"
            >
              Draft</span>
            <div>
              <span
                className="h-6 w-6 bg-gray-300 rounded-full
                flex items-center justify-center text-stone-400
                group-hover:text-stone-500 group-hover:bg-purple-200"
              >
                1
              </span>
            </div>
          </div>
          <div className='w-full bg-gray-300 h-1 group-hover:bg-purple-200'></div>
        </div>

        <div className="flex flex-wrap flex-grow-1 items-end">
          <div className='w-full bg-gray-300 h-1'></div>
        </div>

      </div>

      <div className='flex justify-between'>

        <div className="border-1 border-stone-300 mb-4 relative flex
        items-center px-2 py-1.5 text-sm w-56 rounded shadow-md">
          <FiSearch className='mr-2' />
          <input
            onFocus={(e) => {
              e.target.blur();
            }}
            type="text"
            placeholder="Search"
            className="w-full bg-transparent
            placeholder:text-stone-400 focus:outline-none"
          />
        </div>

        <button className="border border-stone-300 shadow-md hover:shadow-lg
          transition-shadow duration-300 mb-4 relative flex items-center
          px-2 py-1.5 text-sm w-20 rounded bg-white hover:cursor-pointer
          hover:bg-gray-100"
        >
          <FiFilter className="mr-2"/>
          Filter
        </button>

      </div>

      <div className='grid grid-cols-3 gap-4'>
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>

    </div>

  )
}

