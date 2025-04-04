// TODO: move out types

type ProgressStatusProps = {
  status: string;
  count: number;
  statusType: boolean;
  onClick: () => void;
}

export default function ProgressStatus(
  {status, count, statusType, onClick}: ProgressStatusProps){

    if(statusType){
      return (
        <div
          className="flex flex-wrap items-start hover:cursor-pointer"
          onClick={onClick}
        >
          <div className="flex flex-row gap-3 justify-center items-center pb-2 pl-3 pr-3">
            <span className="font-medium">{status}</span>
            <div>
              <span
                className="h-6 w-6 bg-purple-500 rounded-full
                flex items-center justify-center text-white"
              >
                {count}
              </span>
            </div>
          </div>
          <div className='w-full bg-purple-500 h-1'></div>
        </div>
      )
    } else {
      return (
        <div
          className="flex flex-wrap items-start hover:cursor-pointer group"
          onClick={onClick}
        >
          <div className="flex flex-row gap-3 justify-center items-center pb-2 pl-3 pr-3">
            <span className="font-medium text-stone-400
              group-hover:text-stone-500"
            >
              {status}</span>
            <div>
              <span
                className="h-6 w-6 bg-gray-300 rounded-full
                flex items-center justify-center text-stone-400
                group-hover:text-stone-500 group-hover:bg-purple-200"
              >
                {count}
              </span>
            </div>
          </div>
          <div className='w-full bg-gray-300 h-0.5 group-hover:bg-purple-200'></div>
        </div>
      )
    }

}