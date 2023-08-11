import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../Components/Loading'
import "../Style/Fresh.css"
import { Api } from '../Redux/CartReducer/action'
import { useToast } from '@chakra-ui/react'
import { UserId } from '../data/demo'
import { useNavigate } from 'react-router-dom'



export const Fresh = () => {
  const toast = useToast()
 const [fresh,setFresh] = useState([])
 const [load,setLoad]= useState(false)
 const navigate=useNavigate()

const getItem=()=>{
  setLoad(true)
  axios.get(`${Api}/products/all/cagegory/64d22a31ff299bf81e8e5a74`)
  .then((res)=>{
    // console.log(res.data.products,"data")
    setFresh(res.data.products)
    setLoad(false)
  }).catch((err)=>{
    console.log(err)
  })
}

const handleAddCart = async (item) => {
  const { image, name, _id: productId, description } = item;

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


   useEffect(()=>{
    getItem()
  
   },[])
  


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
