import React from 'react'

const FeatureBox = ({ title, subtitle, bgURL }) => {

  return (
    <div className={`w-full h-[60vw] ${bgURL} bg-cover flex flex-col justify-center items-center text-center  sm:w-[50%] sm:h-[30vw]  xl:h-[432px]`} >
      <div className='flex flex-col gap-y-1 md:gap-y-[10px]'>
        <h1 className='text-[1.5rem] min-[400px]:text-[2rem] min-[500px]:text-[2.3rem] min-[550px]:text-[2.4rem] sm:text-lg min-[700px]:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide'>{title}</h1>
      <h2 className='text-[14px] min-[400px]:text-[1.2rem] min-[500px]:text-[1.3rem] min-[550px]:text-[1.4rem] sm:text-[10px] min-[700px]:text-[12px] md:text-sm lg:text-xl xl:text-2xl tracking-wide'>{subtitle}</h2>
     </div>
    </div>
  )
}

export default FeatureBox