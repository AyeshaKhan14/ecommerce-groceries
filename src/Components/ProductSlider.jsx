import React, { useEffect, useState } from "react";
import { responsive } from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import "../Style/ProductSlider.css";
import axios from 'axios'


export const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getResults() {
      const results = await axios(
        "https://ecom-backend-wdkk.onrender.com/products/all"
      );
      setProducts(results.data.products);
      console.log(results.data.products);
    }
    getResults();
  }, []);
  const product = products.map((item) => (
    <Product
      name={item.name}
      url={item.image}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};
