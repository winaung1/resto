import React from 'react'
import { Button } from '../Button'

export const Left = () => {
  return (
    <div data-aos-ease="linear" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="300" className='px-4 w-full md:w-3/4'>
        <h1 className='text-5xl md:text-7xl medium'>Provide the best food for you.</h1>
        <p className='py-4 text-xl text-gray-500'>Welcome to our gastronomic haven! Indulge in the finest flavors meticulously crafted for you. Every dish is a journey, and we're thrilled to have you embark on this culinary adventure with us. Enjoy! </p>
        <div className='flex items-center space-x-2'>
        <Button name="Menu" bg={'bg-black'}/>
        <Button name="Book a table" bg={'bg-orange-500'}/>
        </div>
    </div>
  )
}
