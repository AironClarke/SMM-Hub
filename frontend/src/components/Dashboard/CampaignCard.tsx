import { AiFillFacebook } from 'react-icons/ai';

export default function CampaignCard(){
  return (
    <div className="border-1 border-black min-h-[170px] rounded">
      <div className="flex bg-gray-100 w-full h-10 overlow-hidden
        items-center justify-between"
      >
        <AiFillFacebook className='ml-4 h-8 w-8'/>
        <div className='mr-4'>
          <span className='text-sm text-stone-500'>Last Update: </span>
          <span className='text-sm text-black-500'>24 Sept 2024</span>
        </div>
      </div>

      <div>
        text contents
      </div>
    </div>
  )
}

//TODO: why does min-h-[200px] work?