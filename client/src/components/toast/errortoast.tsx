import { MdErrorOutline } from "react-icons/md";
const Errortoast = ({iserror,errormsg}:{iserror:boolean,errormsg:string}) => {
  return (
    <div className={`${iserror?"fixed":"hidden"} text-red-600 top-5 left-1/2 transform -translate-x-1/2 z-[400]`}>
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-2 md:p-4 flex items-center space-x-2 md:space-x-4 transition-transform transform duration-300 ease-in-out">
        <div className="flex-shrink-0">
            <MdErrorOutline className="h-6 w-6" />
        </div>
        <div className=" ">
            <p className="text-gray-800 text-sm font-semibold">{errormsg}</p>
        </div>
    </div>
</div>
  )
}

export default Errortoast