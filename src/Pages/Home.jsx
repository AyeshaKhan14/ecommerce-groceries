import React from "react";
import { Carousel } from "../Components/carousel";
import {Banner} from "../Components/banner";
import { GridCards } from "../Components/GridCard";
import { MdBanners } from "../Components/MdBanner";
import CardSlider from "../Components/CardSlider";
import TitleBar from "../Components/TitleBar";
import { ProductSlider } from "../Components/ProductSlider";

export const Home = () => {
  return (
    <div style={{maxHeight:"100%",marginBottom:"10px"}}>
      <Carousel />
      <TitleBar text="Grab The Best Deal On Wednesday" color="Black"/>
      <Banner img_link="banner1"/>
      <TitleBar text="At Lowest Price Delivery" color="Black"/>
      <Banner img_link="banner2"/>
      <TitleBar text="Best Offer On DISINFECTANTS" color="Black"/>
      <Banner img_link="banner3"/>
      <TitleBar text="Shop from Top Categories" color="Black"/>
      <Banner img_link="banner4"/>
      <TitleBar text="Your Daily Neads" color="Red"/>
      <GridCards/>
      <TitleBar text="Top Offer" color="Black"/>
      <MdBanners/>
      <ProductSlider/>
    </div>
    </>
  );
};
