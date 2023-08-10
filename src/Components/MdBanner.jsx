import React from 'react'
import "../Style/MdBanner.css";

export const MdBanners = () => {
  return (
    <div className='MdBanners'>
        <div className="MdBanner" >
        <MdBanner img_link="small_banner1"/>
        <MdBanner img_link="small_banner2"/>
        <MdBanner img_link="small_banner3"/>
        <MdBanner img_link="small_banner4"/>
        </div>
    </div>
  )
}


export const MdBanner = ({img_link}) => {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`images/${img_link}.avif`} className="d-block w-100 mdbanner_img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>Sale sale sale</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

