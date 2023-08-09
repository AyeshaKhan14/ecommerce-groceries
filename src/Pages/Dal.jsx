import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/ProductReducer/action'
import axios from 'axios'

export const Dal = () => {

const dispatch=useDispatch()
const product= useSelector((state)=>state.ProductReducer.product)
console.log(product,"pro")

 const [dal,setDal] = useState([])


useEffect(()=>{
     dispatch(getProduct())

     
    
},[])


  return (
    <div>
    
    </div>
  )
}
