import React from 'react'

const Quality = () => {
  return (
    <div className='flex h-[200px] items-center md:h-[600px] justify-between gap-1 md:gap-5 md:px-[5%]'>
        <div className='md:text-3xl h-[110px] md:h-auto w-1/4 flex flex-col justify-center items-center space-y-4 px-3 md:space-y-10 text-xl'>
            <img className='h-[50%] w-[30px] md:w-[100px] object-contain' src="/soft.png" alt="Soft Fabric" />
            <h1 className='text-center md:tracking-widest text-sm md:text-3xl font-light'>Soft Fabric</h1>
        </div>
        <div className='md:text-3xl w-1/4 flex flex-col justify-center items-center text-xl space-y-10'>
        <img className='h-[50%] w-[30px] md:w-[100px] object-contain' src="/stitch.png" alt="Soft Fabric" />
        <h1 className=' md:tracking-widest text-center text-sm md:text-3xl font-light'>Durable Stitching</h1>
        </div>
        <div className='md:text-3xl w-1/4 flex flex-col justify-center items-center text-xl space-y-10'>
        <img className='h-[50%] w-[30px] md:w-[100px] object-contain' src="/breath.png" alt="Soft Fabric" />
        <h1 className=' md:tracking-widest text-center text-sm md:text-3xl font-light'>Breathable Material</h1>
        </div> 
        <div className='md:text-3xl w-1/4 flex flex-col justify-center items-center text-xl space-y-10'>
        <img className='h-[50%] w-[30px] md:w-[100px] object-contain' src="/color.png" alt="Soft Fabric" />
        <h1 className=' md:tracking-widest text-center text-sm md:text-3xl font-light'>Color Fastness</h1>
        </div>
    </div>
  )
}

export default Quality