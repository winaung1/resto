
import logo from '../../images/logo/logo.png'
import { Button } from '../Button'
import React, { useContext, useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiMinutemailer} from 'react-icons/si'
import {FaArrowUp} from 'react-icons/fa'
import ScrollToTop from "react-scroll-to-top";
import { AppContextProvider } from '../../App'
export const Nav = () => {
      const {setShowSideBar, scrolled, setScrolled, goToTop, handleClickScroll} = useContext(AppContextProvider)
      const [hideSideBarItems,setHideSideBarItems] = useState(false)
    
      const hanleHide = () => {
        document.body.classList.add('hideIt')
        setShowSideBar(true)
      }
      useEffect(() => {
        window.addEventListener('scroll', () => {
          if(window.scrollY > 50){
            setScrolled(true)
            console.log('true')
          } else{
            setScrolled(false)
            console.log('false')
          }
        })
        
      }, [])

    return (
    // <div className='p-4 py-4 max-w-7xl mx-auto flex items-center space-x-4 justify-between'>
    //     <div className='log'>
    //         <img src={logo} alt="" />
    //     </div>
            // <ul className='flex items-center space-x-8 '>
            //     <li>Menu</li>
            //     <li>Gallery</li>
            //     <li>Events</li>
            //     <li>About</li>
            //     <li>Contact</li>
            // </ul>
    //         <Button name='Book a table' bg={'bg-[#EA6D27]'}/>
    // </div>
    <>
    <div className='relative'>
    <div className={scrolled && 'backdrop-blur-2xl bg-white/60 fixed top-0 h-20 z-[1000]  transition-all duration-400  ease-linear w-full'}>
    </div>
      <div className='fixed top-0 left-0 z-[1000] flex text-4xl justify-between items-center w-full h-10 pt-10 px-4'>
        <a href="/">

        <img alt='' className='cursor-pointer w-32 xl:w-40' onClick={goToTop} src={logo}/>
        </a>
        {!hideSideBarItems &&
        <div className={scrolled ? 'hidden text-lg lg:flex space-x-6 text-gray-900' : 'hidden text-lg lg:flex space-x-6 text-gray-400'}>
            <ul className='flex items-center space-x-8 '>
                <li>Menu</li>
                <li>Gallery</li>
                <li>Events</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        }
        {!hideSideBarItems &&
        <Button attr={'hidden lg:block'} onClick={() => handleClickScroll(2)} name={'Book a table'} bg={'bg-[#EA6D27] text-sm'} />
        } 
        {!hideSideBarItems &&
        <div className='flex space-x-4 items-center lg:hidden'>
        <SiMinutemailer onClick={() => handleClickScroll(2)} className='bg-orange-600 text-5xl text-white p-3 rounded-xl hover:text-orange-600 transition-all duration-300 ease-linear hover:border hover:border-orange-600 hover:bg-white'/>
        <GiHamburgerMenu className={scrolled ? 'text-gray-600' : 'text-gray-200'} onClick={() => hanleHide()}/>
        </div>
        }
      </div>
    </div>
    </>
  )
}


