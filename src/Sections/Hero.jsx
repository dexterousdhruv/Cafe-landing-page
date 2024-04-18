import React from 'react'

const Hero = () => {
  return (
    <section className='hero-bg  w-full max-container ' >
      <main className=' h-[100vh] flex flex-col justify-center items-center text-center gap-y-6 sm:gap-y-8 px-[5%]'>
        <h1 className='text-3xl min-[500px]:text-[2.5rem] md:text-5xl lg:text-6xl xl:text-[4.8rem] tracking-wide  '>
          The
          <span className='italic'> secret </span>
          lies within the bean.
        </h1>

        <h2 className='text-[22px] max-[400px]:px-5 min-[500px]:text-2xl sm:text-3xl lg:text-4xl tracking-wide ' >
          Coffee perfection since
          <span className='italic font-bold'> 1927</span>.
        </h2>

      </main>
    </section>
  )
}

export default Hero