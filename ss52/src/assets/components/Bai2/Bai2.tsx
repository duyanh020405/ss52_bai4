import React from 'react'
import Home from '../Bai1/Home'
import Contact from '../Bai1/Contact'
import About from '../Bai1/About'
import { Link, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
export default function Bai2() {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <div>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
        <Link to='home'>Home</Link>
      </div>
    </div>
  )
}
