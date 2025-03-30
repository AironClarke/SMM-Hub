import ActivityGraph from './ActivityGraph';
import StatCard from './StatCard';
import { UsageChart } from './UsageChart';

export default function Grid(){
  return (
    <div
      className="px-4 grid gap-3 grid-cols-12"
    >
      <StatCard />
      <ActivityGraph />
      <UsageChart />
    </div>
  )
}