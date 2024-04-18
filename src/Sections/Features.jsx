import React from 'react'
import leftImg from '../assets/left.png'
import rightImg from '../assets/right.png'
import FeatureBox from '../components/FeatureBox'

const Features = () => {
  return (
    <section className='w-full max-container'>
      <div className='flex flex-col justify-center items-center sm:flex-row'>
        <FeatureBox
          title='Our unique process'
          subtitle='The key to the perfect cup.'
          bgURL='bg-left'
        />
        <FeatureBox
          title='Our explicit menu'
          subtitle='What we bring to the table.'
          bgURL='bg-right'
        />
      </div>
    </section>
  )
}

export default Features