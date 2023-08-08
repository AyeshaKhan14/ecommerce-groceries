import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProduct } from '../Redux/ProductReducer/action'

export const Dal = () => {

const dispatch=useDispatch()

useEffect(()=>{
    
    dispatch(getProduct())

},[])


  return (
    <div>Dal</div>
  )
}
