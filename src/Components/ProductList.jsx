import React, { useEffect, useState } from 'react'
import Data from "../data/data.json"
import axios from 'axios'
import "../Style/ProductList.css"

const ProductList = ({Products}) => {
  // const [Products,setProducts] = useState([])
  // useEffect(() => {
  //   async function getResults() {
  //     const results = await axios('http://localhost:4000/products/all');
  //     setProducts(results.data.products)
  //     console.log(results.data.products)
  //   }
  //   getResults()
  // },[])
  
  return (
    <div className="container mb-5 mt-5 ">
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
              <a className="btn btn-info w-100" onClick={"() => addTOCart(product)"} role="button" > Add To Cart</a>
            </div>
          </div>
        </div>
    </div>)} 
    </div>
</div>
  )
}

export default ProductList
