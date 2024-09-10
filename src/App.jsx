import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Favourites from './components/Favourites'
import Brand from './components/Brand'

function App() {
  return (
    <div className='w-full h-full bg-[#FCF7E6]'>
      <Navbar />
      <LandingPage />
      <About />
      <Favourites />
      <Brand />
    </div>
  )
}

export default App