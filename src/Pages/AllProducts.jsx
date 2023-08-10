import React, { useState } from "react";
import ProductList from "../Components/ProductList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { Loading } from '../Components/Loading'

const AllProducts = () => {
    const [products,setProducts]= useState([])
    const [load,setLoad]= useState(false)

  useEffect(()=>{
    setLoad(true)
    async function getResults() {
        const results = await axios('https://ecom-backend-wdkk.onrender.com/products/all');
        setProducts(results.data.products)
        console.log(results.data.products)
        setLoad(false)
      }
      getResults()
  },[])

  if(load){
    return <Loading/>
   }

  return (
    <>
      <ProductList Products={products}/>
    </>
  )
}

export default AllProducts

