import React from 'react'
import { Button } from '../Button'
import { FaCheckCircle } from 'react-icons/fa'
export const Left = () => {
  const lists = [
    {id: 1, icon: <FaCheckCircle/>, list: 'Aenean luctus nulla sit amet nibh '},
    {id: 2, icon: <FaCheckCircle/>, list: 'Aenean luctus nulla sit amet nibh '},
    {id: 3, icon: <FaCheckCircle/>, list: 'Aenean luctus nulla sit amet nibh '},
    {id: 4, icon: <FaCheckCircle/>, list: 'Aenean luctus nulla sit amet nibh '},
    {id: 5, icon: <FaCheckCircle/>, list: 'Aenean luctus nulla sit amet nibh '},
    {id: 6, icon: <FaCheckCircle/>, list: 'Aenean luctus nulla sit amet nibh '},
  ]
  return (
    <div className='px-4 w-full lg:w-3/4 text-center lg:text-start'>
    <h1 className='text-5xl medium'>Our Expert Chefs</h1>
    <p className='py-4 text-gray-500 md:w-3/4 lg:ml-0 mx-auto'>Aenean luctus nulla sit amet nibh ultricies, sit amet gravida libero venenatis. Nunc eu consectetur nisl. Phasellus ligula quam, maximus in hendrerit in, sagittis nec nisi. Cras maxim.</p>
    <div className='px-4 grid grid-cols-2 md:w-fit lg:w-full mx-auto gap-5 py-10'>
        {
            lists.map(list => (
                <div className='flex space-x-4 w-60 text-xl'>
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
