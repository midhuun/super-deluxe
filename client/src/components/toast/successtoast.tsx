import React from 'react'

const Successtoast = ({istoast,toastmsg}:{istoast:boolean,toastmsg:string}) => {
  return (
    <div className={`${istoast?"fixed":"hidden"} top-5 left-1/2 transform -translate-x-1/2 z-[400]`}>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-2 md:p-4 flex items-center space-x-2 md:space-x-4 transition-transform transform duration-300 ease-in-out">
                <div className="flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className=" ">
                    <p className="text-gray-800 text-sm font-semibold">{toastmsg}</p>
                </div>
            </div>
        </div>
  )
}

export default Successtoast