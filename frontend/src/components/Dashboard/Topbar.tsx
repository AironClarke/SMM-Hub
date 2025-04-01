const HelperText = ({ text, maxLength }: {text: string, maxLength: number}) => {
  const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <div className="overflow-hidden text-ellipsis text-sm font-bold block">
      {truncatedText}
    </div>
  );
};


export default function Topbar() {
  return (
    <div
      className="border-b px-8 mb-4 mt-2 pb-4 border-stone-200"
    >
      <div className="flex items-center justify-between p-0.5">
        <div>
          <HelperText
            text={'Acc Placeholder'}
            maxLength={10}
          />
          <span className="text-xs block text-stone-500">
            Tuesday, Aug 8th 2023
          </span>
        </div>
      </div>
    </div>
  )
}