import React, { useEffect, useState } from 'react'
import Data from "../data/data.json"
import axios from 'axios'

const ProductList = () => {
  const [Products,setProducts] = useState([])
  useEffect(() => {
    async function getResults() {
      const results = await axios('http://localhost:4000/products/all');
      setProducts(results.data)
      console.log(results.data)
    }
    getResults()
  },[])
  return (
    <div className="container mb-5 mt-5 ">
    <div id="products" className="row">
        
       {Data.Products.map(product => <div className="col-xl-2 col-lg-2 col-md-3 position-relative">
        
        <div className="card product-item">
          {/* <i className="bi bi-heart-fill position-absolute liked"></i>
          <i className="bi bi-heart position-absolute like"></i> */}
          {/* <Link to={`/product/${product._id}`}> */}
          <img src="images/rice.jpeg" className="card-img-top product-img" alt="..." data-bs-toggle="tooltip" data-bs-placement="top" title="Click to See Product Details"/>
          {/* <p>images/${product.photos}.jpg</p> */}
          {/* </Link> */}
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted  fw-light">{product.category}</h6>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text price"> ${product.price} 
            {/* <span className="float-end rating-stars" >
              {[...Array(product.rating)].map(()=> <i className="bi bi-star-fill"></i>)}
            </span>  */}
            </p>
            {/* <div className="text-center">
              <a className="btn btn-dark w-100" onClick={"() => addTOCart(product)"} role="button" > Add To Cart</a>
            </div> */}
          </div>
        </div>
    </div>)} 
    </div>
</div>
  )
}

export default ProductList
