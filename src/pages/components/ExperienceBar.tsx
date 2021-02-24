export function ExperienceBar() {
  return (
    <header className="flex text-center">
      <span>0 xp</span>
      <div className="flex-1 rounded h-1 relative bg-gray-200 mx-4 mt-2">
        <div className="w-3/100 bg-green-300 h-1 rounded "></div>
        <span className="pt-2 transform -translate-x-2/4" style={{ position: 'absolute', left: '30%' }}>300xp</span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
