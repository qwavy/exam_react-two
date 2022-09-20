
import { Routes, Route, Link } from 'react-router-dom'

import  Home  from './pages/Home'
import  Cart  from './pages/Cart'
import  Product  from './pages/Product'
import  Profile  from './pages/Profile'
import  NotFound  from './pages/NotFound'

import { useState, useEffect } from 'react'

function App() {

    return (
      <div>
        <div>

          {/* <a href='/'></a> */}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </div>
    )
  }

export default App;
