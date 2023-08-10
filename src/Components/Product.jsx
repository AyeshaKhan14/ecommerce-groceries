import React from "react";
import { Link} from "react-router-dom";

export default function Product(props) {
    let desc=""
    if(props.description.length>20){
        desc=props.description.substr(0,20)+" ...";
    }else{
        desc=props.description;
    }
  return (
    <div className="card">
       <Link className="navbar-brand" to="/allProducts">
      <img className="product--image" src={props.url} alt="product image" />
      <h5>{props.name}</h5>
      <p className="price" style={{color:"gray",fontSize:"16px",fontStyle:"italic",fontWeight:"bold" }}>Price: ${props.price}</p>
      <p >{desc}</p>
      </Link>
    </div>
  );
}