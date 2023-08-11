import React, { useEffect, useState } from "react";
import { responsive } from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import "../Style/ProductSlider.css";
import axios from 'axios'


export const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [load,setLoad]= useState(false)

  const getItem=()=>{
    setLoad(true)
    axios.get(`https://ecom-backend-wdkk.onrender.com/products/all`)
    .then((res)=>{
      // console.log(res.data.products,"data")
      setProducts(res.data.products)
      setLoad(false)
    }).catch((err)=>{
      console.log(err)
    })
  }


  useEffect(() => {
    getItem()
  }, []);




  const product = products.map((el) => (
    <Product el={el} />
  ));
  return (
    <div>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};
