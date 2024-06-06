import React from 'react'


import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Elements from './Elements'
import Index from './Index'
import About2 from './About2'
import Contact2 from './Contact2'
export default function Bai3() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<About2></About2>}></Route>
        <Route path='/contact2' element={<Contact2></Contact2>}></Route>
        <Route path='/elements' element={<Elements></Elements>}></Route>
        <Route path='/index' element={<Index></Index>}></Route>
      </Routes>
    </div>
  )
}
