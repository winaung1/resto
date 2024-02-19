import React from 'react'
import welcome1 from '../../images/special/bowl-0.png'
import leaf1 from '../../images/special/leaf-1.png'
import leaf2 from '../../images/special/leaf-4.png'
import leaf3 from '../../images/special/leaf-4.png'
import leaf4 from '../../images/special/leaf-1.png'


export const Left = () => {
  return (
    <div className=' w-3/4'>
    
        <div className='w-[500px] relative' >
            <img className='w-full' src={welcome1} alt="" />
            <div className='absolute top-0 w-16'>
                <img src={leaf1} alt="" />
            </div>
            <div className='absolute -bottom-20 left-20 w-16'>
                <img src={leaf2} alt="" />
            </div>
            <div className='absolute top-0 right-0 w-16'>
                <img src={leaf3} alt="" />
            </div>
            <div className='absolute -bottom-20 right-20 w-16'>
                <img src={leaf4} alt="" />
            </div>
        </div>
    </div>
  )
}
