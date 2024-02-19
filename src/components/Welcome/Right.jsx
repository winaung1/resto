import React from 'react'
import { Button } from '../Button'
import asset1 from '../../images/special/Assetnnf12.png'
import asset2 from '../../images/special/Group 7.png'
import asset3 from '../../images/special/Asset28417.png'
export const Right = () => {
  return (
    <div className='relative px-4 lg:w-3/4 pb-10 lg:pb-0'>
        <h1 className='text-2xl medium'>Welcome to Our Restaurant</h1>
        <p className='py-4 text-gray-500'>Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros. Praesent egestas gravida tincidunt. Etiam convallis.</p>
        <div className='flex items-center space-x-2 justify-center md:justify-start'>
        <Button name="Menu" bg={'bg-black'}/>
        <Button name="Book a table" bg={'bg-orange-500'}/>
        </div>
        <div className='absolute top-10 -right-60'>
            <img src={asset1} alt="" />
        </div>
        <div className='absolute top-40 left-0'>
            <img src={asset2} alt="" />
        </div>
        <div className='absolute -top-20 left-40'>
            <img src={asset3} alt="" />
        </div>
    </div>
  )
}
