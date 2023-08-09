import { Link} from "react-router-dom";
import React, { useEffect } from 'react'

import '../Style/Nav.css';
import axios from "axios";


export const Nav = ({cartCount}) => {
 return (
    <nav className="navbar navbar-expand-lg nav-bar navbar-dark ">
        <div className="container-fluid nav-container" >
          <Link className="navbar-brand" to="/">Shopper</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item dropdown navbar-dark">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop By Category
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown colorset">
                  <li><a className="dropdown-item" href="/#products">Rice</a></li>
                  <li><a className="dropdown-item" href="/#products">Weate</a></li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li><a className="dropdown-item" href="/#products">Dal</a></li>
                </ul>
              </li>
              
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 mx-lg-2 order-sm-last ">
            <li className="nav-item colorset">
                <Link className="nav-link" to="/cart" tabindex="-1">
                  Cart<i className="bi bi-cart-plus-fill"></i> 
                  <span className="cart-badge badge bg-success">{cartCount}</span></Link>
              </li>
              <li className="nav-item dropdown colorset">
                <a className="nav-link "  id="Login/Signup" role="button"  aria-expanded="false">
                  Login/Signup
                </a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
  )
}
