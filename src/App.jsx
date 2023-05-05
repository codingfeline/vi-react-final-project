import { useEffect, useState } from 'react'
import './App.css'

// prettier-ignore
import { Home, Footer, Header, Compo } from '@compo'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Restaurants, OneRestaurant } from './components'

function App() {
  const location = useLocation()

  useEffect(() => {}, [location])

  return (
    <>
      <div
        className={` flex flex-col h-screen justify-between
        ${location.pathname === '/' && 'bg1'}
        ${location.pathname === '/compo' && 'bg2'}
        ${location.pathname === '/restaurants' && 'bg3'}
        ${location.pathname.includes('/one') && 'bg4'} 
        `}
      >
        <Header />
        <div className="flex flex-col mb-auto h-screen lg:max-w-4x place-self-center w-full md:w-11/12 lg:w-3/4  bg-red-100 ">
          <div className="py-">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compo" element={<Compo />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/restaurant/one/:id" element={<OneRestaurant />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
