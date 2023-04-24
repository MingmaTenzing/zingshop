type Props = {}
function Loading({}: Props) {
  return (
    <div className=" animate-pulse m-4">
        <div className="w-[280px] h-[280px] bg-gray-500"></div>
        <div className="w-[280px] h-[110px] bg-gray-300 p-2 py-4 space-y-3">
            <div className=" w-[200px] h-3 bg-gray-600 "></div>
            <div className=" w-[160px] h-2 bg-gray-500 "></div>
            <div className=" w-[120px] h-2 bg-gray-400 "></div>
        </div>
    </div>
  )
}
export default Loading