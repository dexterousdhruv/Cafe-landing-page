import React from 'react'

const SocialBox =  ({bgURL, iconURL})  => {
  return (
    <div className={` w-full ${bgURL} aspect-square bg-cover grid place-content-center lg:basis-1/4 min-[600px]:basis-1/2`}>
      <img src={iconURL} alt="icon"  className='w-[70px] min-[400px]:w-20 lg:w-[65px] mt-0 duration-150 hover:-mt-10' />
    </div>
  )
   
   
}

export default SocialBox