import CampaignOverview from './CampaignOverview';
import Grid from './Grid';
import { Test } from './Test';


export const Dashboard = () => {
  return (
    <div className="relative bg-white rounded-lg pb-4 shadow h-[200vh]">
        <Test />
        <Grid />
        <CampaignOverview />

    </div>
  );
};