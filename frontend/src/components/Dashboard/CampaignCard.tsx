import ProgressBar from './ProgressBar';
import { SocialIcon } from 'react-social-icons';

export type CampaignCardProps = {
  icon: string;
  updateDate: string;
  title: string;
  details: string;
  endDate: string;
  progress: number;
}

export default function CampaignCard(
  {icon,updateDate,title,details,endDate,progress}:CampaignCardProps){
  return (
    <div className="border-1 border-gray-300 min-h-[170px] rounded">
      <div className="flex bg-gray-100 w-full h-13 overlow-hidden
        items-center justify-between"
      >
        <SocialIcon network={icon} className="ml-4"
          style={{ width: 40, height: 40 }}
        />
        <div className='mr-4 text-sm'>
          <span className='text-black-500'>Last Update: </span>
          <span className='font-semibold text-black-500'> {updateDate}</span>
        </div>
      </div>

      <div className='p-4'>
        <h3 className='font-semibold mb-4 min-h-[2rem] line-clamp-2'>
          {title}
        </h3>
        <p className='mb-5 line-clamp-2 overflow-hidden text-sm min-h-[2rem]'>
          {details}
        </p>
        <span className='text-sm'>
          End Date: <b>{endDate}</b>
        </span>
        <ProgressBar value={progress} />
      </div>

    </div>
  )
}

//TODO: why does min-h-[200px] work?
//TODO: put types in their owm files