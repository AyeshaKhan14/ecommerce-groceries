import React, { useState } from "react";
import ProductList from "../Components/ProductList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const Wheat = () => {
  const [products,setProducts]= useState([])
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setProducts());
  },[])


  return (
    <>
      <ProductList Products={products}/>
    </>
  );
};
