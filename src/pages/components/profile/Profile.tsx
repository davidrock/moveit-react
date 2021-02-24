export function Profile() {
  return (
    <div className="flex align-center">
      <img
        className="w-16 h-16 rounded-full"
        src="http://github.com/davidrock.png"
        alt="David Rock"
      />
      <div className="ml-4">
        <strong className="text-2xl font-semibold text-gray-700">
          David Rock
        </strong>
        <div className="flex flex-1 gap-2 mt-2 ">
          <img className="mr-2" src="icons/level.svg" alt="Level" />
          <span className="text-base text-gray-500">Level 1</span>
        </div>
      </div>
    </div>
  );
}
