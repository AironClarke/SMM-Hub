import { useState } from 'react';
import Dropdown from '../../../src/utils/Dropdown';
import { getCardDetails } from './getCardDetails';
import CampaignCard from './CampaignCard';
import ProgressStatus from './ProgressStatus';
import { FiSearch } from 'react-icons/fi';

import {
  progressCardDetails,
  completedCardDetails,
  upcommingCardDetails,
  draftCardDetails
} from './cardDetails'

export default function CampaignOverview() {
  const [selectedStatus, setSelectedStatus] = useState<string>('In Progress');
  const [platformFilter, setPlatformFilter] = useState<string>('all');

  const cardDetails = getCardDetails(selectedStatus);

  const filteredCards = cardDetails.filter(card => {
    if (platformFilter === 'all') return true;
    return card.icon?.toLowerCase() === platformFilter;
  });

  const statuses = [
    { status: 'In Progress', count: progressCardDetails.length },
    { status: 'Completed', count: completedCardDetails.length },
    { status: 'Upcomming', count: upcommingCardDetails.length },
    { status: 'Draft', count: draftCardDetails.length }
  ];

  return (
    <div className="w-[100%-2rem] mx-4">
      <div className="flex mb-4">
        {statuses.map(item => (
          <ProgressStatus
            key={item.status}
            status={item.status}
            count={item.count}
            statusType={selectedStatus === item.status}
            onClick={() => setSelectedStatus(item.status)}
          />
        ))}
        <div className="flex flex-wrap flex-grow-1 items-end">
          <div className='w-full bg-gray-300 h-0.5'></div>
        </div>
      </div>

      <div className='flex justify-between'>
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

        <button className="border border-stone-300 shadow-md hover:shadow-lg
          transition-shadow duration-300 mb-4 relative flex items-center
          px-2 py-1.5 text-sm w-24 rounded bg-white hover:cursor-pointer
          hover:bg-gray-100"
        >
          <Dropdown onSelect={setPlatformFilter} />
        </button>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {filteredCards.map((card, index) => (
          <CampaignCard
            key={card.title + index}
            icon={card.icon}
            updateDate={card.updateDate}
            title={card.title}
            details={card.details}
            endDate={card.endDate}
            progress={card.progress}
          />
        ))}
      </div>
    </div>
  );
}