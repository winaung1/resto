import React from 'react'
import customer1 from '../../images/customer/pexels-photo-1222271.jpeg'
import customer2 from '../../images/customer/pexels-photo-733872.webp'
import customer3 from '../../images/customer/pexels-photo-91227.webp'
import img8 from '../../images/customer/customerbg.png'
import { FaStar } from 'react-icons/fa'
import res from '../../images/customer/restuarant.jpeg'
export const Customers = () => {
    const n = 5
    const restaurantReviews = [
        { id: 1, img: customer1, name: 'Emma Johnson', comment: 'Had an amazing dining experience! The food was delicious, and the service was outstanding. Will definitely be returning for more culinary delights.' },
        { id: 2, img: customer2, name: 'Alexa Smith', comment: 'A delightful evening at this restaurant! The ambiance was perfect, and each dish was a flavorful masterpiece. Highly recommended for a special night out.' },
        { id: 3, img: customer3, name: 'David Williams', comment: 'Enjoyed the variety on the menu, and the staff was friendly. The cozy atmosphere made it a great place to unwind with friends. Looking forward to my next visit.' },
      ];
      

  return (
    <div className='bg-gray-100 py-20 relative'>
         <h1 className='text-4xl text-center medium'>Our Happy Customers</h1>
         <p className='text-center w-96 py-3 mx-auto text-gray-600'>These happy customers highly recommend our restaurant for a memorable dining experience.</p>

         <div className='w-full md:w-[90%] hidescroll overflow-x-scroll ml-auto flex space-x-6 px-10'>
         {
             restaurantReviews.map(customer => (
                 <div className='z-10 min-w-[600px] text-center text-sm my-14 bg-white rounded-tl-3xl rounded-br-3xl p-4'>
                    <img className='-translate-y-10 w-20 h-20 mx-auto rounded-full object-cover' src={customer.img} alt="" />
                    <div className='flex space-x-2 justify-center'>
                        {[...Array(n)].map((e, i) =>  <div><FaStar className='text-orange-500'/></div>)}
                    </div>
                    <p className='py-3 leading-7 text-gray-500'>{customer.comment}</p>
                    <h1 className='font-semibold'>{customer.name}</h1>
                    <p>{customer.title}</p>
                </div>
            ))
        } 
        </div>
        <div className='absolute top-20 left-0'>
            <img className='w-80 -z-10' src={img8} alt="" />
        </div>

        <div className='medium h-80 w-[90%] rounded-2xl mx-auto my-10 relative text-white text-center'>
            <img alt='' className='w-full h-full object-center mx-auto object-cover rounded-2xl' src={res}/>
            <div className='w-80 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
               <h1 className='text-2xl'>Get Our Promo Code By</h1> 
               <h1 className='text-2xl py-2'>Subscribing To Our Newsletter</h1>
               <div className='w-full my-4 px-2 flex items-center justify-between text-left h-14 rounded-xl bg-white relative'>
                <input className=' outline-none text-black' type="text" placeholder='Enter your email' />
                <button className='absolute top-[3px] right-1 h-[90%] bg-orange-500 text-white px-4 py-3 rounded-2xl'>Subscribe</button>
               </div>
            </div>
            <div className='rounded-2xl w-full h-full absolute inset-0 bg-black/60'/>
        </div>
    </div>
  )
}
