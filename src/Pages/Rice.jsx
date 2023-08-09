import React, { useState } from "react";
import ProductList from "../Components/ProductList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'


export const Rice = () => {
  const [products,setProducts]= useState([])
//   const dispatch = useDispatch();

  useEffect(()=>{
    async function getResults() {
        const results = await axios('http://localhost:4000/products/all');
        setProducts(results.data.products)
        console.log(results.data.products)
      }
      getResults()
  },[])


  return (
    <>
      <ProductList Products={products}/>
    </>
  );
};
