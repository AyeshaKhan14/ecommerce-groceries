import React from "react";
import { Carousel } from "../Components/carousel";
import ProductList from "../Components/ProductList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Banner} from "../Components/banner";
import { GridCards } from "../Components/GridCard";
import { MdBanners } from "../Components/MdBanner";

export const Home = () => {
  // const dispatch = useDispatch();

  // const Products = useSelector(state => state.product.products)

  // useEffect(()=>{
  //   dispatch(initializeProductsAC());
  // },[])


  return (
    <>
      <Carousel />
      <Banner img_link="banner1"/>
      <Banner img_link="banner2"/>
      <Banner img_link="banner3"/>
      <GridCards/>
      <MdBanners/>
      <ProductList />
    </>
  );
};
