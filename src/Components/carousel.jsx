import React from 'react';

export const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000" >
            <img src="images/offer-slider1.png" style={{maxHeight:"400px"}} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Sale sale sale</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="images/offer-slider2.jpg" style={{maxHeight:"400px"}} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Damaka offer</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="images/offer-slider3.jfif" style={{maxHeight:"400px"}} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Grab It Fast.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
  )
}
