import React from "react";
import "../Style/Footer.css";

export const Footer = () => {
  return (
    <div className="footer mt-auto bg-dark text-light">
      <div className="container py-3">
        <div className="row d-flex footer-items">
          <div className="col-lg-4">
            <h5>More About</h5>

            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Green bigbasket</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Help</h5>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">bb Wallet FAQs</a>
              </li>
              <li>
                <a href="#">bb Wallet T&Cs</a>
              </li>
              <li>
                <a href="#">Vendor Connect</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Get Social With Us</h5>
            <div className="mt-2">
              <div
                className="btn-group me-2 social-icons"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center"
                >
                  <i className="bi bi-facebook"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center"
                >
                  <i className="bi bi-instagram"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center"
                >
                  <i className="bi bi-twitter"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center"
                >
                  <i className="bi bi-linkedin"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center"></div>
      </div>
    </div>
  );
};
