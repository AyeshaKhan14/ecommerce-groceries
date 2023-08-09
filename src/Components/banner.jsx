import React from 'react'
import "../Style/Banner.css";

export const Banner = ({img_link}) => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={`images/${img_link}.avif`} className="d-block w-100 banner_img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>Sale sale sale</p> */}
            </div>
          </div>
        </div>
      </div>
  )
}
