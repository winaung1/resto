import React, { useContext } from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl'
import { AppContextProvider } from '../App'
import logo from '../images/logo/logo.png'

function Sidebar() {
const {showSideBar, setShowSideBar} = useContext(AppContextProvider)
const hanleClickSideBar = () => {
  document.body.classList.remove('hideIt')
  setShowSideBar(false)
}
  return (
    <>
    <div className={showSideBar ? 'lg:hidden fixed left-0 min-h-screen bg-white w-60 z-[2100] flex flex-col transition-all duration-300 ease-linear' : 'fixed -left-80 bg-white min-h-screen w-60 z-[2100] flex flex-col justify-between transition-all duration-300 ease-linear'}>
      <div className='w-full p-4 text-white text-2xl flex items-center justify-between'>
        <img src={logo} alt="" />
        <button onClick={() => hanleClickSideBar()} className='font-extrabold text-sm'>X</button>
      </div>
      <div className='flex flex-col justify-around h-screen'>

      {/* <div className='text-xl flex flex-col gap-8 justify-between py-10 p-4'> */}
      <ul className='text-xl flex flex-col gap-8 justify-between py-10 p-4'>
                <li>Menu</li>
                <li>Gallery</li>
                <li>Events</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
      {/* </div> */}
      <div className=' flex text-orange-600 items-center space-x-4 justify-around text-2xl  py-10'>
          <SlSocialFacebook/>
          <SlSocialInstagram/>
          <SlSocialLinkedin/>
          <SlSocialYoutube/>
      </div>
      </div>
    </div>
      <div onClick={() => hanleClickSideBar()} className={showSideBar && 'lg:hidden z-[2000] fixed inset-0 w-full min-h-screen bg-black/40'}></div>
    </>
  )
}

export default Sidebar