import React from 'react'
import logoFaded from '../assets/logo-faded.png'

const Description = () => {
  return (
    <section className='max-container bg-dark-gray relative flex justify-center items-center px-[10%] py-[8%] xl:py-[100px]'>
      <img src={logoFaded}  className='absolute left-[10%] top-[7%] z-[2] w-[120px] min-[600px]:w-[160px] lg:w-[180px]  xl:top-[13%]' />
        
      
      <div className='z-[3]'>
      <h2 className='tracking-wide text-[2.1rem] mt-10 mb-8 sm:mb-10 lg:mb-12 min-[400px]:text-[2.5rem] min-[450px]:text-5xl min-[600px]:text-6xl md:text-7xl lg:text-[80px]  lg:translate-x-[-12%] xl:text-8xl' >This is our story</h2>
      
      <div className='relative  mb-10 flex flex-col gap-y-8 before:content-[""] before:h-[100%] before:w-[8px] before:bg-brown  before:absolute before:left-[-10%] min-[400px]:text-[19px] min-[600px]:before:left-[-10%] md:grid md:grid-cols-2 gap-x-16 place-content-center' >
        <p className='text-lg text-justify tracking-[0.1px] min-[400px]:text-[19px] sm:text-left md:max-w-[360px]'>
            As milk acerbic, crema grinder redeye extra spoon cortado. Black pumpkin spice aromatic at medium so robusta plunger pot sweet grinder. <br /> <br />
            Aroma dripper, coffee mazagran instant whipped irish robusta spoon robust. Sweet, organic, galão body mocha white single shot. Con panna variety pumpkin spice est carajillo so seasonal. That, strong aroma, grounds barista.
        </p>
          
        <p className='text-lg text-justify tracking-[0.1px] min-[400px]:text-[19px] sm:text-left md:max-w-[360px]'>
            Espresso, coffee frappuccino variety java doppio to go aroma spoon. Blue mountain, milk grounds chicory so that beans single origin. <br /> <br />
            Ut seasonal, flavour single origin seasonal froth in spoon iced french press. Est decaffeinated, acerbic con panna cappuccino grounds aftertaste barista.
        </p>
      </div>
      </div>
    </section>
  )
}

export default Description