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
        ${location.pathname === '/' && 'bg-indigo-200'}
        ${location.pathname === '/compo' && 'bg-red-200'}
        ${location.pathname === '/restaurants' && 'bg-lime-200'}
        `}
      >
        <Header />
        <div className="flex flex-col mb-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compo" element={<Compo />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<OneRestaurant />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
