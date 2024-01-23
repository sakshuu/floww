import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery'
import Home from './pages/Home'

const App = () => {
  return <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/photo-gallery' element={<Gallery/>} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
  </>
}

export default App