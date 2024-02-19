import React from 'react'
import { Button } from '../Button'
import asset1 from '../../images/special/Assetnnf12.png'
import asset2 from '../../images/special/Group 7.png'
import asset3 from '../../images/special/Asset28417.png'
export const Right = () => {
  return (
    <div data-aos-ease="linear" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="500" className='relative px-4 lg:w-3/4 pb-10 lg:pb-0'>
        <h1 className='text-2xl medium'>Welcome to Our Restaurant</h1>
        <p className='py-4 text-gray-500'>At our restaurant, we believe in creating culinary experiences that go beyond mere meals. Our motto, 'Where Every Bite Tells a Story,' reflects our commitment to crafting dishes with passion, purpose, and a touch of storytelling. From the first taste to the last, we invite you to savor not just flavors but the narratives behind each carefully prepared dish. Join us on a gastronomic journey where every bite is a chapter in a delightful culinary tale</p>
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
