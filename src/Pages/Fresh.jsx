import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Loading } from '../Components/Loading'
import { api } from '../Redux/ProductReducer/action'
import "../Style/Fresh.css"
import { postCart } from '../Redux/CartReducer/action'
import { useToast } from '@chakra-ui/react'


export const Fresh = () => {
  const toast = useToast()
const dispatch= useDispatch()
 const [fresh,setFresh] = useState([])
 const [load,setLoad]= useState(false)

 useEffect(()=>{
  setLoad(true)
  axios.get(`${api}/64d22a31ff299bf81e8e5a74`)
  .then((res)=>{
    // console.log(res.data.products,"data")
    setFresh(res.data.products)
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
      {fresh.map((el)=>{
        return <div key={el._id} className='container_div_grid'>
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
  )
}
