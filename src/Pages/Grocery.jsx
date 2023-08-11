
import React, { useState } from "react";
import "../Style/Fresh.css"
import { useEffect } from 'react';
import axios from 'axios'
import { Loading } from "../Components/Loading";
import { api } from "../Redux/ProductReducer/action";
import { useDispatch } from "react-redux";
import { Api, postCart } from "../Redux/CartReducer/action";
import { useToast } from '@chakra-ui/react'
import { UserId } from "../data/demo";
import { Navigate, useNavigate } from "react-router-dom";

export const Grocery = () => {
  const [grocery,setGrocery]= useState([])
  const [load,setLoad]= useState(false)
  const toast = useToast()
  const navigate= useNavigate()

  const getGrocery=()=>{
    setLoad(true)
    axios.get(`${Api}/products/all/cagegory/64d31c155c41b4a4a42a9b33`)
    .then((res)=>{
     // console.log(res.data.products,"data")
      setGrocery(res.data.products)
      setLoad(false)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getGrocery()
  },[])
    

  const handleAddCart= async (el)=>{
    const { image, name, _id: productId, description } = el;

    const productToBeAdded = {
      userId: UserId,
      productId: productId,
      image,
      name,
      description,
    };
  
    try {
      // Adding the Item into the Cart:
      if (localStorage.getItem('eco-token')){
        const { data } = await axios.post(`${process.env.REACT_APP_BACKENED_URL}/carts/add`, productToBeAdded);
  
        console.log(data);
        if(data.message==="Product already exists in the cart.")
        {
          toast({
            title: 'Product already exists',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:"top"
          })
        }
        else{
          toast({
            title: 'Item Added Successful',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:"top"
          })
        }
      }
     else{
        return navigate("/login");
      }
   } catch (error) {
      console.error("Error adding item to cart:", error);
  };
}





  if(load){
    return <Loading/>
  }

  return (
    <div className='fresh_div_conttainer'>
    {grocery.map((el)=>{
      return <div className='container_div_grid'>
           <img src={el.image} alt=""/>
           <h3>{el.name}</h3>
           <p>{el.description}</p>
           <div className='price_div_solid'> <p>$20</p>
           <p style={{color:"gray",fontSize:"16px",fontStyle:"italic"}}>sold:{el.sold}</p>
           </div>
           <button className='button_addtocart' onClick={()=>handleAddCart(el)}>Add to Cart</button>
      </div>
    })}
  </div>
  );
};

