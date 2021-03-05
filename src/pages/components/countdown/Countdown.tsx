export function Countdown() {
  return (
    <div className="flex items-center font-semibold text-gray-800 font-rajdhani">
      <div className="flex items-center flex-1 text-center bg-white rounded-md shadow text-9xl justify-evenly">
        <span className="flex-1 border-r">2</span>
        <span className="flex-1 ">5</span>
      </div>
      <span className="mx-2 text-8xl">:</span>
      <div className="flex items-center flex-1 text-center bg-white rounded-md shadow text-9xl justify-evenly">
        <span className="flex-1 border-r">0</span>
        <span className="flex-1 ">0</span>
      </div>
    </div>
  );
}
