import Helper from './Helper'
import Topbar from './Topbar'

export const Test = () => {
  return (
    <div className="relative bg-white rounded-lg pb-10">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:0px_55px] h-auto"></div>

      {/* Content */}
      <div className="relative z-10">
        <Topbar />
        <Helper />
      </div>
    </div>
  );
};