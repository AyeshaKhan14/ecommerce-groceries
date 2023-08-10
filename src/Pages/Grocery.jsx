
import React, { useState } from "react";
import "../Style/Fresh.css"
import { useEffect } from 'react';
import axios from 'axios'
import { Loading } from "../Components/Loading";
import { api } from "../Redux/ProductReducer/action";
import { useDispatch } from "react-redux";
import { postCart } from "../Redux/CartReducer/action";
import { useToast } from '@chakra-ui/react'


export const Grocery = () => {
  const [grocery,setGrocery]= useState([])
  const [load,setLoad]= useState(false)
  const dispatch= useDispatch()
  const toast = useToast()

  useEffect(()=>{
    setLoad(true)
    axios.get(`${api}/64d31c155c41b4a4a42a9b33`)
    .then((res)=>{
      console.log(res.data.products,"data")
      setGrocery(res.data.products)
      setLoad(false)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
    

  const handleAddCart=(el)=>{
    // console.log(id,"data")
    const {user} = JSON.parse(localStorage.getItem("eco-token"))
    // console.log(user?._id);
  
          dispatch(postCart({userId: user?._id, productId:el._id, quantity: 1,image:el.image,productName:el.name,description:el.description}))
          .then((res)=>{
            console.log(res)
            if(res.type==="CART_POST_SUCCESS")
            {
              toast({
                title: 'Item Added Successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
            }
            else{
              toast({
                title: 'Item Already exists',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
            }
          }).catch((err)=>{
            console.log(err)
          })
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

