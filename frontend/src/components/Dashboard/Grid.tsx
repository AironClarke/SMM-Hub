import ActivityGraph from './ActivityGraph';
import StatCard from './StatCard';

export default function Grid(){
  return (
    <div
      className="px-4 grid gap-3 grid-cols-12"
    >
      <StatCard />
      <ActivityGraph />
    </div>
  )
}