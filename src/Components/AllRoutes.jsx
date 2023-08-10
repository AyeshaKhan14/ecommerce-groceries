import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Meat } from '../Pages/Meat'
import { Grocery } from '../Pages/Grocery'
import { CartPage } from '../Pages/CartPage'
import { Fresh } from '../Pages/Fresh'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/grocery" element={<Grocery/>} />
            <Route path="/meat" element={<Meat/>} />
            <Route path="/fresh" element={<Fresh/>} />
            <Route path="/cart" element={<CartPage/>} />
        </Routes>
    </div>
  )
}
