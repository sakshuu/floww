import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Gallery, Home } from './pages'
import { Cakes, Flowers, GiftHampers, IdolsGift, Plants, Toys } from './components'


const App = () => {
  return <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/photo-gallery' element={<Gallery/>} />

          <Route path='/cakes' element={<Cakes/>} />
          <Route path='/plants' element={<Plants/>} />
          <Route path='/flowers' element={<Flowers/>} />
          <Route path='/toy' element={<Toys/>} />
          <Route path='/gift' element={<GiftHampers/>} />
          <Route path='/idols' element={<IdolsGift/>} />
          
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
  </>
}

export default App