import React from "react";
import { Link} from "react-router-dom";

export default function Product(props) {
  let desc = "";
  if (props.description && props.description.length > 20) {
    desc = props.el.description.substr(0, 20) + " ...";
  } else {
    desc = props.el.description;
  }

  return (
    <div className="card">
       <Link className="navbar-brand" to="/allProducts">
       <img className="product--image" src={props.el.image} alt="product image" />
      <h5>{props.el.name}</h5>
      <p className="price" style={{color:"gray",fontSize:"16px",fontStyle:"italic",fontWeight:"bold" }}>Price: ${props.el.price}</p>
      <p style={{maxWidth:"100%",overflow:"hidden", textoverflow:"ellipsis", whiteSpace:"nowrap"}}>{desc}</p>
      </Link>
    </div>
  );
}