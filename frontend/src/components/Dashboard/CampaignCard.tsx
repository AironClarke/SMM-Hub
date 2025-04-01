import ProgressBar from './ProgressBar';
import { SocialIcon } from 'react-social-icons';

export default function CampaignCard(){
  return (
    <div className="border-1 border-gray-300 min-h-[170px] rounded">
      <div className="flex bg-gray-100 w-full h-13 overlow-hidden
        items-center justify-between"
      >
        <SocialIcon network="facebook" className="ml-4"
          style={{ width: 40, height: 40 }}
        />
        <div className='mr-4 text-sm'>
          <span className='text-black-500'>Last Update: </span>
          <span className='font-semibold text-black-500'> 24 Sept 2024</span>
        </div>
      </div>

      <div className='p-4'>
        <h3 className='font-semibold pb-4'>
          Protect What Matters Most: Insights from Cybersecurity Week
        </h3>
        <p className='mb-5 line-clamp-2 overflow-hidden text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae, dolor cupiditate. Cumque aspernatur explicabo unde
          alias voluptatem, delectus ratione fugiat at ipsa doloremque
          illo magnam cupiditate odio doloribus tempora sed, odit natus
          mollitia ut itaque eveniet libero quia veritatis minima. Iusto
          labore asperiores minima eius architecto natus quisquam excepturi vel!
        </p>
        <span className='text-sm'>
          End Date: <b>30 Dec 2024</b>
        </span>
        <ProgressBar value={70} />
      </div>

    </div>
  )
}

//TODO: why does min-h-[200px] work?