import { FiFilter, FiSearch } from 'react-icons/fi';
import CampaignCard from './CampaignCard';
import ProgressStatus from './ProgressStatus';
import { useState } from 'react';
import type { CampaignCardProps } from './CampaignCard';
import { getCardDetails } from './getCardDetails';

export default function CampaignOverview(){

  const [selectedStaus, setSelectedStaus] = useState<string>('In Progress')

  const statuses = [
    { status: 'In Progress', count: 8 },
    { status: 'Completed', count: 8 },
    { status: 'Upcomming', count: 3},
    { status: 'Draft', count: 2 }
  ];

  const cardDetails = getCardDetails(selectedStaus)

  return (
    <div className="w-[100%-2rem] mx-4">

      <div className="flex mb-4">

        {statuses.map((item) => {
          return (
            <ProgressStatus
              key={item.status}
              status={item.status}
              count={item.count}
              statusType={selectedStaus === item.status}
              onClick={() => setSelectedStaus(item.status)}
            />
          )
        })}

        <div className="flex flex-wrap flex-grow-1 items-end">
          <div className='w-full bg-gray-300 h-0.5'></div>
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
        {cardDetails.map((card : CampaignCardProps, index: number) => {
          return (
            <CampaignCard
              key={card.title + index}
              icon={card.icon}
              updateDate={card.updateDate}
              title={card.title}
              details={card.details}
              endDate={card.endDate}
              progress={card.progress}
            />
          )
        })}
      </div>

    </div>
  )
}
