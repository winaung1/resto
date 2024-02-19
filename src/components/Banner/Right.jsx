import React from 'react'
import banner1 from '../../images/Banner/banner1.png'
import banner2 from '../../images/Banner/bannerbowl-3.png'
import banner3 from '../../images/Banner/Asset19.png'
import banner4 from '../../images/Banner/Layer3.png'
import banner5 from '../../images/Banner/Layer4.png'
export const Right = () => {
  return (
    <div data-aos-ease="linear" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="500" className='px-4 py-14 lg:py-4 w-full lg:w-3/4'>
        <div className='relative z-10'>
            <div>
                <img alt='' className='h-[500px] w-full' src={banner1}/>
            </div>
            <div className='absolute -bottom-20 -left-20'>
                <img alt='' className='w-80 h-80' src={banner2}/>
            </div>
            <div className='absolute -top-20 -right-10 -z-10'>
                <img alt='' className='w-80 h-80' src={banner3}/>
            </div>
            <div className='absolute -top-20 -left-20 -z-10'>
                <img alt='' className='w-80 h-80' src={banner4}/>
            </div>
            <div className='absolute -bottom-20 -right-20 -z-10'>
                <img alt='' className='w-80 h-80' src={banner5}/>
            </div>
          
        </div>
    </div>
  )
}
