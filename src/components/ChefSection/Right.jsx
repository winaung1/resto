import React from 'react'
import chef from '../../images/chef/chef.png'
import garlic from '../../images/chef/Group 18.png'
export const Right = () => {
  return (
    <div className='relative px-4 py-4 w-full lg:w-3/4'>
   
        <div>
            <img alt='' className='h-[700px] w-full object-contain' src={chef}/>
        </div>
        <div className='absolute top-20 lg:-left-40'>
            <img className='w-40' src={garlic} alt="" />
        </div>
    </div>
  )
}
