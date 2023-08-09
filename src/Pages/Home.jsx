import React from "react";
import { Carousel } from "../Components/carousel";
import ProductList from "../Components/ProductList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Banner} from "../Components/banner";
import { GridCards } from "../Components/GridCard";
import { MdBanners } from "../Components/MdBanner";
import CardSlider from "../Components/CardSlider";
import TitleBar from "../Components/TitleBar";
import EmptyCart from "../Components/EmptyCart";

export const Home = () => {
  // const dispatch = useDispatch();

  // const Products = useSelector(state => state.product.products)

  // useEffect(()=>{
  //   dispatch(initializeProductsAC());
  // },[])


  return (
    <>
      <Carousel />
      <TitleBar text="Offer Banner"/>
      <Banner img_link="banner1"/>
      <TitleBar text="Offer Banner"/>
      <Banner img_link="banner2"/>
      <TitleBar text="Offer Banner"/>
      <Banner img_link="banner3"/>
      <TitleBar text="Offer Banner"/>
      <GridCards/>
      <TitleBar text="Offer Banner"/>
      <MdBanners/>
      {/* <CardSlider/> */}
    {/* <ProductList /> */}
    </>
  );
};
