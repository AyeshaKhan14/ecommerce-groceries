import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Loading } from '../Components/Loading'
import { api } from '../Redux/ProductReducer/action'
import "../Style/Fresh.css"

export const Fresh = () => {

 const [fresh,setFresh] = useState([])
 const [load,setLoad]= useState(false)

 useEffect(()=>{
  setLoad(true)
  axios.get(`${api}/64d22a31ff299bf81e8e5a74`)
  .then((res)=>{
    console.log(res.data.products,"data")
    setFresh(res.data.products)
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
      {fresh.map((el)=>{
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
  )
}
