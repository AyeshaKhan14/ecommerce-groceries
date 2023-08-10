import React, { useState } from "react";
import "../Style/Fresh.css"
import { useEffect } from 'react';
import axios from 'axios'
import { api } from "../Redux/ProductReducer/action";
import { Loading } from "../Components/Loading";


export const Meat = () => {
  const [meat,setMeat]= useState([])
  const [load,setLoad]= useState(false)


  useEffect(()=>{
    setLoad(true)
    axios.get(`${api}/64d31c405c41b4a4a42a9b35`)
    .then((res)=>{
      console.log(res.data.products,"data")
      setMeat(res.data.products)
      setLoad(false)
    }).catch((err)=>{
      console.log(err)
    })
  
  },[])
     
  if(load){
    return <Loading/>
  }

  return (
    <div className='fresh_div_conttainer'>
    {meat.map((el)=>{
      return <div className='container_div_grid'>
           <img src={el.image} alt=""/>
           <h3>{el.name}</h3>
           <p>{el.description}</p>
           <div className='price_div_solid'> <p>$20</p>
           <p style={{color:"gray",fontSize:"16px",fontStyle:"italic"}}>sold:{el.sold}</p>
           </div>
           <button className='button_addtocart'>Add to Cart</button>
      </div>
    })}
  </div>
  );
};


