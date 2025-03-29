import Helper from './Helper'
import Topbar from './Topbar'

export const Dashboard = () => {
  return (
    <div className='bg-white rounded-lg pb-4 shadow h-[200vh]'>
       <div className="min-h-screen bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:55px_55px]
       h-[2vh]">
        <Topbar />
        <Helper />
        </div>
    </div>
  )
}