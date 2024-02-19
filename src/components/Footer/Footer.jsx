import React from 'react'
import logo from '../../images/logo/logo.png'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import footerimg from '../../images/Footer/footer.png'
export const Footer = () => {
  return (
    <div className='text-gray-500 px-4 relative py-20 max-w-7xl mx-auto md:flex md:space-x-6 justify-between'>
        <div>
            <img src={logo} alt="" />
            <p className='w-80 py-4'>Our motto, 'Where Every Bite Tells a Story,' reflects our commitment to crafting dishes with passion, purpose, and a touch of storytelling. </p>

            <h1 className='font-semibold py-2'>OPENING HOURS</h1>
            <div className='md:flex leading-10 md:space-x-4 '>

            <div>
                <p>Monday-Friday</p>
                <p>8:00 am to 9:00 pm</p>
            </div>
            <div>
                <p>Saturday</p>
                <p>Closed</p>
            </div>
            <div>
                <p>Sunday</p>
                <p>8:00 am to 9:00 pm</p>
            </div>
            </div>
        </div>
        <div>
            <h1 className='font-semibold py-2'>Navigation</h1>
            <ul className='leading-7'>
                <li>Menu</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Main Dishes</li>
            </ul>
        </div>
        <div>
            <h1 className='font-semibold py-2'>Dishes</h1>
            <ul className='leading-7'>
                <li>Fish & Viggie</li>
                <li>Tofu Chili</li>
                <li>Egg & Cucumber</li>
                <li>Lumpia w/ Sauce</li>
            </ul>
        </div>
        <div>
            <h1 className='font-semibold py-2'>Follow us</h1>
            <div className='flex items-center space-x-4'>
                <BsFacebook/>
                <BsTwitter/>
                <BsInstagram/>
            </div>
        </div>
        <div className='absolute top-20 right-40'>
            <img className='w-[600px]' src={footerimg} alt="" />
        </div>
    </div>
  )
}
