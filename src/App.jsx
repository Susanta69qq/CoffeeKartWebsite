import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Favourites from './components/Favourites'

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Favourites />
    </div>
  )
}

export default App