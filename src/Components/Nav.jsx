import { Link} from "react-router-dom";
import React, { useEffect } from 'react'
import '../Style/Nav.css';
import axios from "axios";
import { useSelector } from "react-redux";
import { UserName } from "./UserName";


export const Nav = ({cartCount}) => {
 const user= useSelector((state)=>state.AuthReducer.isAuth)

 return (
    <nav className="navbar navbar-expand-lg nav-bar navbar-dark ">
        <div className="container-fluid nav-container" >
          <Link className="navbar-brand" to="/">Shopper</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item dropdown navbar-dark">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <label className="colorset">Shop By Category</label>
                  
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown colorset">

                  <li><span className="dropdown-item" href="/#products">
                  <Link className="navbar-brand" to="/fresh">Fresh Grocery</Link>
                    </span></li>
                  <li><span className="dropdown-item" href="/#products">
                  <Link className="navbar-brand" to="/grocery">Daily Grocery</Link>
                    </span></li>
                  <li><span className="dropdown-item" href="/#products">
                  <Link className="navbar-brand" to="/meat">
                    Meat
                    </Link>
                  </span>
                  </li>
                </ul>
              </li>        
            </ul>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ul className="navbar-nav mb-2 mb-lg-0 mx-lg-2 order-sm-last ">
            <li className="nav-item" style={{marginRight:"12px",marginTop:"auto",marginBottom:"3px"}}>
                <Link className="nav-link colorset" to="/cart" tabindex="-1">
                  <label className="colorset" >Cart</label>
                  <i className="bi bi-cart-plus-fill" ></i> 
                  <span className="cart-badge badge bg-success">{cartCount}</span></Link>
              </li>
                    {!user ? ( <li className="nav-item dropdown colorset">
              <Link  to="/login" tabindex="-1">
                <a className="nav-link "  id="Login/Signup" role="button"  aria-expanded="false">
                <label className="colorset" >Login/Signup</label>
                </a></Link>
              </li> ) : (<UserName/>)}
            </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}
