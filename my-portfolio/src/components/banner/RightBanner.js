import React from 'react'
import {bannerImg} from '../../assets/index.js'

const RightBanner = () => {

  return (
    // {/*Right div  */}

    <div className='w-full lg:w-1/2 lg:ml-10 flex justify-center items-center lg:mt-7'>
    <img className='lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] z-10 rounded-full border-4 border-black' 
    src={bannerImg} 
    alt="img" 
    />

      <div className='absolute lg:w-[480px] lg:h-[450px] w-[330px] h-[370px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>

      </div>

    </div>

  )
}

export default RightBanner
