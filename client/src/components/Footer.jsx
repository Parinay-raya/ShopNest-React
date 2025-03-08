import React from "react";
import { FaHeadset, FaAngleLeft } from "react-icons/fa";
import "../assets/style.css"

const Footer = () => {
  return (
    <footer>
      <div className="contanier">
        <div className="top-footer">
          <div className="row">
            <img className="logo" src="img/Logo-img.png" alt="" />
            <div className="hotline">
              <div className="hotline-text">
                <h6>24/7 Customer Service</h6>
                <span>(+100) 123 456 7890</span>
              </div>
              <i className="fa-solid fa-headset" />
            </div>
          </div>
          <div className="small-row">
            <h6>Learn More About Us</h6>
            <div className="links-row">
              <a href="#">
                {" "}
                <i className="fa-solid fa-angle-left" /> About Shopnest
              </a>
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Shipping &amp; Delivery{" "}
              </a>
            </div>
          </div>
          <div className="small-row">
            <h6>Shop with Us</h6>
            <div className="links-row">
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Your Account
              </a>
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Your Orders
              </a>
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Your Addresses
              </a>
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Your Lists
              </a>
            </div>
          </div>
          <div className="small-row">
            <h6>Let Us Help You</h6>
            <div className="links-row">
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Help &amp; Support
              </a>
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Track Order
              </a>
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Return Policy
              </a>
              <a href="#">
                <i className="fa-solid fa-angle-left" /> Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="contanier">
          <p>
            Copyright © <span>Shopnest. </span>Powered by <span>Parinay Raya</span>
          </p>
          <div className="payment">
            <img src="img/payment-1.png" alt="" />
            <img src="img/payment-2.png" alt="" />
            <img src="img/payment-3.png" alt="" />
            <img src="img/payment-4.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
