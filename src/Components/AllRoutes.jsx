import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { Wheat } from '../Pages/Wheat'
import { Rice } from '../Pages/Rice'
import { Dal } from '../Pages/Dal'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Rice" element={<Rice/>} />
            <Route path="/Wheat" element={<Wheat/>} />
            <Route path="/dal" element={<Dal/>} />
        </Routes>
    </div>
  )
}
