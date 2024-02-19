import React from 'react'
import { Left } from './Left'
import { Right } from './Right'

export const SectionChef = () => {
  return (
    <div className='bg-white py-40 items-center lg:flex max-w-7xl mx-auto'>
        <Left/>
        <Right/>
    </div>
  )
}
