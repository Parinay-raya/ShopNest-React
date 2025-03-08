import React from "react";
// import { FaBars, FaShoppingBag, FaUserPlus } from "react-icons/fa"; // Fixed FaBagShopping
import { Link } from "react-router-dom";

import "../assets/style.css"

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className="header-top">
        <div className="contanier">
          <p> Welcome to Shopnest</p>
          <div className="link-top-heder">
            <a href="/./Dashboard/myaccount.html">My Account</a>
            <a href="#">My Wishlist</a>
            <Link to="/login" id="authLink">Sign In</Link>
            <a href="#">Compare</a>
          </div>
        </div>
      </div>
      <div className="header-info">
        <div className="contanier">
          <img className="logo" src="https://res.cloudinary.com/dqznjnjv9/image/upload/v1740904793/Logo-img_p5jqtf.png" alt="" />
          <div className="search-bar">
            <form action="">
              <input type="search" placeholder="Search for your order." />
              <button className="btn-srch">Search</button>
            </form>
          </div>
          <div className="cart-icon">
            <div className="price">
              <p>Cart :</p>
              <span>Rs 25500.00</span>
            </div>
            <a href="mycart.html">
              <i className="fa-solid fa-bag-shopping" />{" "}
              <span className="count-in-card">2</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="contanier">
          <i id="open-side" className="fa-solid fa-bars" />
          <ul className="nav-links">
            <li>
              <a href="index.html"> Home</a>
            </li>
            <li>
              <a href="features.html">Electrical Appliances</a>
              <div className="drobdwon">
                <ul>
                  <li>
                    <a href="smart-phones.html">Smartphones</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">headphones</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Laptops</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Smartphones</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="home-essentials.html">Home Essentials</a>
            </li>
            <li>
              <a href="smart-phones.html">Mobilesphones &amp; accessories</a>
            </li>
            <li>
              <a href="index.html"> Clothing</a>
            </li>
            {/* <li><a href="betuflpage.html"> accessories</a></li>
              <li><a href="index.html"> Electronics</a></li> */}
          </ul>
          <Link to="/signup" className="sign-in-btn">
            <i className="fa-solid fa-user-plus" />
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
