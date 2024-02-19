
import { createContext, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Nav } from './components/Navbar/Nav';
import Sidebar from './components/Siderbar';
import { Banner } from './components/Banner/Banner';
import { SpecialDish } from './components/Special/SpecialDish';
import { SectionChef } from './components/ChefSection/SectionChef';
import { Customers } from './components/Customer/Customers';
import { Footer } from './components/Footer/Footer';
import logo from './images/logo/logo.png'
export const AppContextProvider = createContext();
function App() {
  const [loading, setLoading] = useState(false)
  const [showSideBar, setShowSideBar] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [showSlide, setShowSlide] = useState(false)
  const [showThisSlide, setShowThisSlide] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [filteredItems, setFilteredItems] = useState('')

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  const handleClickScroll = (index) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowSlide(true)
    setShowThisSlide(element)
    setCurrentIndex(index)

  };


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const values = {filteredItems, setFilteredItems, Aos, setShowSideBar, showSideBar, handleClickScroll, goToTop, currentIndex, setCurrentIndex, scrolled, setScrolled}

  return (
   <div className='overflow-hidden'>
    {loading ? 
    <div className='bg-gray-900 flex flex-col justify-center items-center h-screen'>
    <div className='w-fit mx-auto'>
      <img className='w-full' src={logo}/>
    </div>

<p className='text-white py-4 lg:text-2xl font-bold tracking-widest'>Please wait...</p>
  </div>
:
    <AppContextProvider.Provider value={values}>
    <Sidebar/>
    <Nav/>
    <Banner/>
    <SpecialDish/>
    <SectionChef/>
    <Customers/>
    <Footer/>
    <FaArrowUp onClick={goToTop} className={scrolled ? 'z-[1000] fixed bottom-10 cursor-pointer right-5 border-2 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-none border-orange-600 w-10 h-12 p-3 rounded-xl transition-all duration-500 ease-linear' : ''}/> 
    </AppContextProvider.Provider>
  }
   </div>
   );
  }
  
  export default App;
  