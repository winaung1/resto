import React from 'react'
import dish1 from '../../images/special/bowl-2.png'
import dish2 from '../../images/special/bowl-4.png'
import dish3 from '../../images/special/bowl.png'
import dish4 from '../../images/special/bowl-5.png'
import { Welcome } from '../Welcome/Welcome'
import assest1 from '../../images/special/Asset 9917.png'
import assest2 from '../../images/special/Asset28417.png'
import assest3 from '../../images/special/Asset33 17.png'
import assest4 from '../../images/special/Asset 2317.png'


export const SpecialDish = () => {
    const dishes = [
        {id: 1, img: dish1, title: 'Lumpia with Sauce', desription: 'Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros.', price: 12},
        {id: 1, img: dish2, title: 'Fish & Veggie', desription: 'Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros.', price: 14},
        {id: 1, img: dish3, title: 'Tofu Chili', desription: 'Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros.', price: 18},
        {id: 1, img: dish4, title: 'Egg and Cocumber', desription: 'Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros.', price: 9},
    ]
  return (
    <div className='relative bg-gray-100 py-20 px-4'>
        <h1 className='text-4xl text-center medium'>Our Special Dish</h1>
        <p className='text-center w-96 py-3 mx-auto text-gray-600'>Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros.</p>
        <div data-aos-ease="linear" data-aos-duration="300" data-aos="zoom-in" data-aos-delay="300" className='grid md:grid-cols-2 gap-10 lg:flex justify-center max-w-7xl mx-auto items-center space-x-6 text-center py-8 z-10'>
            {
                dishes.map(dish => (
                    <div className='relative w-80'>
                        <img className='w-full lg:w-60 pb-6 mx-auto' src={dish.img} alt="" />
                        <h1 className='py-2 font-semibold'>{dish.title}</h1>
                        <p className='text-gray-600'>{dish.desription}</p>
                        <p className='absolute top-10 right-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center'>${dish.price}</p>
                    </div>
                ))
            }
        </div>
        <div className='text-center md:text-left'>
            <Welcome/>
        </div>
        <div className='absolute top-[600px] left-0 lg:top-20 lg:left-96 '>
            <img src={assest1} alt="" />
        </div>
        <div className='absolute top-[1200px] lg:top-44 right-10'>
            <img src={assest2} alt="" />
        </div>
        <div className='absolute top-0 lg:top-80 right-60'>
            <img src={assest3} alt="" />
        </div>
        <div className='absolute top-80 left-0 lg:left-96'>
            <img src={assest4} alt="" />
        </div>
    </div>
  )
}
