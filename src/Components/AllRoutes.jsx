import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Dal } from '../Pages/Dal'
import { CartPage } from '../Pages/CartPage'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/dal" element={<Dal/>} />
            <Route path="/cart" element={<CartPage/>} />
        </Routes>
    </div>
  )
}
