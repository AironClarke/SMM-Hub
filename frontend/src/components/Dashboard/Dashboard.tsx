import Helper from './Helper'
import Topbar from './Topbar'

export const Dashboard = () => {
  return (
    <div className='bg-white rounded-lg pb-4 shadow h-[200vh]'>
      <Topbar />
      <Helper />
    </div>
  )
}