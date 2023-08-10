import React from "react";

export default function Product(props) {
    let desc=""
    if(props.description.length>20){
        desc=props.description.substr(0,20)+" ...";
    }else{
        desc=props.description;
    }
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h5>{props.name}</h5>
      <p className="price">{props.price}</p>
      <p >{desc}</p>
    </div>
  );
}