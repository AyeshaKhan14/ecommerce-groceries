import React from 'react'
import axios from 'axios'
import "../Style/ProductList.css"
import { UserId } from '../data/demo'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'



const ProductList = ({Products}) => {
   const toast = useToast()
   const navigate=useNavigate()


   //add to cart
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
  
  return (
    <div className="container mb-5 mt-5" style={{marginTop:"5%"}}>
    <div id="products" className="row">
       {Products.map(product => <div className="col-xl-3 col-lg-4 col-md-6 col-sm-4 position-relative" style={{marginBottom:"10px",marginTop:"10px"}}>
        <div className="card product-item">
          <img src={product.image} className="card-img-top" style={{maxHeight:"200px" ,maxWidth:"230px",marginLeft:"auto",marginRight:"auto"}} alt="..." data-bs-toggle="tooltip" data-bs-placement="top" title="Click to See Product Details"/>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted  fw-light">{product.category}</h6>
            <h5 className="card-title">{product.name}</h5>
            
            <div className='price_div_solid'> <p className="card-text price"> ${product.price} </p>
           <p style={{color:"gray",fontSize:"16px",fontStyle:"italic"}}>sold:{product.sold}</p>
           </div>
            <div className="text-center">
              <a className="btn btn-info w-100 " style={{backgroundColor:"#008ecc"}} onClick={() => handleAddCart(Products)} role="button" > Add To Cart</a>
            </div>
          </div>
        </div>
    </div>)} 
    </div>
</div>
  )
}

export default ProductList
