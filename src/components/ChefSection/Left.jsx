import React from 'react'
import { Button } from '../Button'
import { FaCheckCircle } from 'react-icons/fa'
export const Left = () => {
  const lists = [
    { id: 1, icon: <FaCheckCircle />, list: 'Culinary Creativity: Innovative dish creation' },
    { id: 2, icon: <FaCheckCircle />, list: 'Knife Skills: Precision in chopping, dicing, and slicing' },
    { id: 3, icon: <FaCheckCircle />, list: 'Menu Planning: Well-balanced and thoughtful menus' },
    { id: 4, icon: <FaCheckCircle />, list: 'Adaptability: Handling challenges and adjusting on the fly' },
    { id: 5, icon: <FaCheckCircle />, list: 'Taste Proficiency: Refined palate for balanced flavors' },
    { id: 6, icon: <FaCheckCircle />, list: 'Leadership: Effective management of kitchen staff and resources' },
  ];
  
  return (
    <div data-aos-ease="linear" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="300" className='px-4 w-full lg:w-3/4 text-center lg:text-start'>
    <h1 className='text-5xl medium'>Our Expert Chefs</h1>
    <p className='py-4 text-gray-500 md:w-3/4 lg:ml-0 mx-auto'>Step into the world of culinary excellence with our esteemed chef. With a passion for innovation and a commitment to crafting unforgettable dining experiences, Chef brings a wealth of expertise to our kitchen.</p>
    <div className='px-4 grid md:grid-cols-2 md:w-fit lg:w-full mx-auto gap-5 py-10'>
        {
            lists.map(list => (
                <div className='flex space-x-4 text-left md:w-60 text-xl'>
                    <div className='text-orange-500'>{list.icon}</div>
                    <p className='text-gray-600'>{list.list}</p>
                </div>
            ))
        }
    </div>
    <div className='flex items-center space-x-2 justify-center lg:justify-start'>
    <Button name="Menu" bg={'bg-black'}/>
    <Button name="Book a table" bg={'bg-orange-500'}/>
    </div>
</div>
  )
}
