export default function DataListItem( {children, label, content, pills, message, startJourney, endJourney} ) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-1">
        {children}
        <span className="text-zinc-400">{label}</span>
      </div>
      <p className="ml-7 text-zinc-800">{content}</p>
      {
        pills && 
        <div className="flex ml-6 py-1 px-3 rounded-full bg-blue-50 w-max items-center justify-center">
          <p className="text-blue-500">{startJourney} - {endJourney}</p>
        </div>
      }
      <span className="ml-6 text-sm text-zinc-400 max-w-[300px] w-full flex mt-2" >{message}</span>
    </div>
  )
}