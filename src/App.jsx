import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Favourites from './components/Favourites'
import Brand from './components/Brand'
import ImageBack from './components/ImageBack'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'
import AllProducts from './components/AllProducts'
import LoginPage from './components/LoginPage'
import Register from './components/Register'

function App() {
  return (
    <div className='w-full h-full bg-[#FCF7E6]'>
      <LandingPage />
      <About />
      <Favourites />
      <Brand />
      <ImageBack />
      <VisitUs />
      <Footer />
    </div>
  )
}

export default App