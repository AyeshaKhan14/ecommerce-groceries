import React from "react";
import "../Style/CardSlider.css";

const CardSlider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide cards" data-ride="carousel" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
        </ol>
      <div className="carousel-inner">
        <div className="carousel-item active item" data-bs-interval="3000">
          <CardSliderCarousel
            img_link1="CardSlider1-1"
            img_link2="CardSlider1-2"
            img_link3="CardSlider1-3"
          />
          
        </div>
        <div className="carousel-item item" data-bs-interval="3000">
        <CardSliderCarousel
            img_link1="CardSlider2-1"
            img_link2="CardSlider2-2"
            img_link3="CardSlider2-3"
          />
          
        </div>
        <div className="carousel-item item" data-bs-interval="3000">
        <CardSliderCarousel
            img_link1="CardSlider3-1"
            img_link2="CardSlider3-2"
            img_link3="CardSlider3-3"
          />
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
    </div>
  );
};

export default CardSlider;



export const CardSliderCarousel = ({img_link1, img_link2, img_link3}) => {
  return (
    <div className="cards-wrapper">
      <div className="card">
        <img
          src={`images/${img_link1}.jpeg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card d-none d-md-block">
        <img
          src={`images/${img_link2}.jpeg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card d-none d-md-block">
        <img
          src={`images/${img_link3}.jpeg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
