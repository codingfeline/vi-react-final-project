import { useState } from 'react'
import './App.css'

// prettier-ignore
import { Home, Footer, Header, Compo } from '@compo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Restaurants } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="bg-red-100 flex flex-col h-screen justify-between">
          <Header />
          <div className="flex flex-col mb-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compo" element={<Compo />} />
              <Route path="/restaurants" element={<Restaurants />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
