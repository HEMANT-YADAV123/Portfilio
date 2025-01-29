import React from 'react'
import {bannerImg} from '../../assets/index.js'

const RightBanner = () => {

  return (
    // {/*Right div  */}

    <div className='w-full lg:w-1/2 lg:ml-10 flex justify-center items-center relative'>
    <img className='lg:w-[500px] lg:h-[680px] w-[300px] h-[400px] z-10 -mt-60' 
    src={bannerImg} 
    alt="img" 
    />

      <div className='absolute bottom-0 lg:w-[480px] lg:h-[400px] w-[300px] h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center -mb-9'>

      </div>

    </div>

  )
}

export default RightBanner
