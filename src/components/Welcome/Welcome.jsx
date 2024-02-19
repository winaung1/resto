import React from 'react'
import { Left } from './Left'
import { Right } from './Right'

export const Welcome = () => {
  return (
    <div className='flex-col-reverse flex max-w-7xl md:flex-row lg:max-w-5xl mx-auto pt-24 items-center'>
        <Left/>
        <Right/>
    </div>
  )
}
