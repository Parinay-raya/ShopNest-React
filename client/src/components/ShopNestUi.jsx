import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./ui/card";
import Button from "./ui/button";
import { Menu, ShoppingCart, Star, Truck } from "lucide-react";
import "../assets/style.css"

const Sidebar = () => (
  <aside className="w-1/5 p-4 bg-gray-100 hidden md:block">
    <ul className="space-y-4">
      <li className="flex items-center gap-2 cursor-pointer"><Menu /> Categories</li>
      <li className="cursor-pointer">Electronics</li>
      <li className="cursor-pointer">Clothing</li>
      <li className="cursor-pointer">Home & Kitchen</li>
      <li className="cursor-pointer">Beauty & Health</li>
    </ul>
  </aside>
);

const Slider = () => (
  <Swiper className="w-full h-64">
    <SwiperSlide><img src="/images/slider1.jpg" alt="Slide 1" className="w-full h-full object-cover" /></SwiperSlide>
    <SwiperSlide><img src="/images/slider2.jpg" alt="Slide 2" className="w-full h-full object-cover" /></SwiperSlide>
  </Swiper>
);

const Features = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    <Card className="flex flex-col items-center p-4"><Truck size={24} /><p>Free Shipping</p></Card>
    <Card className="flex flex-col items-center p-4"><Star size={24} /><p>Top Rated</p></Card>
    <Card className="flex flex-col items-center p-4"><ShoppingCart size={24} /><p>Secure Checkout</p></Card>
    <Card className="flex flex-col items-center p-4"><Menu size={24} /><p>24/7 Support</p></Card>
  </div>
);

const Deals = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold">Today's Deals</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {[1, 2, 3, 4].map((item) => (
        <Card key={item} className="p-4 text-center">
          <img src={`/images/deal${item}.jpg`} alt={`Deal ${item}`} className="w-full h-40 object-cover" />
          <p className="mt-2">Product {item}</p>
          <Button className="mt-2">Shop Now</Button>
        </Card>
      ))}
    </div>
  </div>
);

const ShopNestUI = () => {
  return (
    <>
      <section className="slide-sec contanier">
        <div id="side-bar" className="side-bar">
          <h5>
            <i className="fa-solid fa-bars" /> SHOP BY DEPARTMENT
          </h5>
          <img className="logo-slide" src="img/Logo-img.png" alt="" />
          <i id="btn-close" className="fa-solid fa-bars fa-times" />
          <ul className="side-links">
            <a href="#">
              <li>Home Appliances</li>
            </a>
            <a href="#">
              <li>Children's Toys</li>
            </a>
            <a href="#">
              <li>Chargers</li>
            </a>
            <a href="#">
              <li>Furnishings</li>
            </a>
            <a href="#">
              <li>Phones</li>
            </a>
            <a href="#">
              <li>Clothing</li>
            </a>
            <a href="#">
              <li>Shoes</li>
            </a>
            <a href="#">
              <li>Accessories</li>
            </a>
            <a href="#">
              <li>Cosmetics</li>
            </a>
            <a href="#">
              <li>Televisions</li>
            </a>
          </ul>
        </div>
        <div className="slide">
          <div className="slide-swp swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-slide1">
                <img src="img/slide1.jpg" alt="" />
              </div>
              <div className="swiper-slide swiper-slide2">
                <img src="img/slider2.jpg" alt="" />
              </div>
              <div className="swiper-slide swiper-slide3">
                <img src="img/slide3.png" alt="" />
              </div>
              <div className="swiper-slide swiper-slide3">
                <img src="img/slide4.jpg" alt="" />
              </div>
              <div className="swiper-slide swiper-slide3">
                <img src="img/slide5.jpg" alt="" />
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      <div className="features contanier">
        <div className="boxs">
          <div className="box">
            <div className="content">
              <h6>Free Shipping</h6>
              <p>Delivery within one to three days</p>
            </div>
            <img src="img/features1.png" alt="" />
          </div>
          <div className="box">
            <div className="content">
              <h6>Money Guarantee</h6>
              <p>14-day money-back guarantee</p>
            </div>
            <img src="img/features2.png" alt="" />
          </div>
          <div className="box">
            <div className="content">
              <h6>24/7 Online Support</h6>
              <p>Technical support is ready at all times</p>
            </div>
            <img src="img/features3.png" alt="" />
          </div>
          <div className="box">
            <div className="content">
              <h6>Secure Payment</h6>
              <p>All payment methods are accepted</p>
            </div>
            <img src="img/features4.png" alt="" />
          </div>
          <div className="box">
            <div className="content">
              <h6>Daily Offers</h6>
              <p>Discounts up to 50%</p>
            </div>
            <img src="img/features5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="banner contanier">
        <div className="boxs">
          <div className="box">
            <a href="buy product.html">
              <img src="img/banner-1.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
          <div className="box">
            <a href="buy product.html">
              <img src="img/banner-2.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
          <div className="box">
            <a href="buy product.html">
              <img src="img/banner-3.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
        </div>
      </div>
      <section className="deals contanier swiper mySwiper">
        <div className="section-head">
          <h4>
            Special <span>Offers</span>
          </h4>
        </div>
        <div className="boxs swiper-wrapper">
          <div className="box product-item swiper-slide">
            <a href="#"></a>
            <div className="product-btn">
              <a href="#"></a>
              <ul className="product-action">
                <a href="#"></a>
                <li>
                  <a href="#" />
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-14.jpg" className="img-product" />
              <img src="img/product-2.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a href="buy product.html" className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>Rs12000.00</span>
                <del>Rs12500.00</del>
              </div>
              <p className="product-parg">
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit...
              </p>
              <h4>Hurry Up! Offer ends in:</h4>
              <ul className="countdown">
                <li>
                  <span>0</span> Days
                </li>
                <li>
                  <span>19</span> Hours
                </li>
                <li>
                  <span>54</span>Mins
                </li>
                <li>
                  <span>39</span>Sec
                </li>
              </ul>
            </div>
          </div>
          <div className="box product-item swiper-slide">
            <a href="#"></a>
            <div className="product-btn">
              <a href="#"></a>
              <ul className="product-action">
                <a href="#"></a>
                <li>
                  <a href="#" />
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-13.jpg" className="img-product" />
              <img src="img/product-2.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a href="buy product.html" className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>Rs12000.00</span>
                <del>Rs12500.00</del>
              </div>
              <p className="product-parg">
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit...
              </p>
              <h4>Hurry Up! Offer ends in:</h4>
              <ul className="countdown">
                <li>
                  <span>0</span> Days
                </li>
                <li>
                  <span>19</span> Hours
                </li>
                <li>
                  <span>54</span>Mins
                </li>
                <li>
                  <span>39</span>Sec
                </li>
              </ul>
            </div>
          </div>
          <div className="box product-item swiper-slide">
            <a href="#"></a>
            <div className="product-btn">
              <a href="#"></a>
              <ul className="product-action">
                <a href="#"></a>
                <li>
                  <a href="#" />
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-9.jpg" className="img-product" />
              <img src="img/product-2.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a href="buy product.html" className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>Rs12000.00</span>
                <del>Rs12500.00</del>
              </div>
              <p className="product-parg">
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit...
              </p>
              <h4>Hurry Up! Offer ends in:</h4>
              <ul className="countdown">
                <li>
                  <span>0</span> Days
                </li>
                <li>
                  <span>19</span> Hours
                </li>
                <li>
                  <span>54</span>Mins
                </li>
                <li>
                  <span>39</span>Sec
                </li>
              </ul>
            </div>
          </div>
          <div className="box product-item swiper-slide">
            <a href="#"></a>
            <div className="product-btn">
              <a href="#"></a>
              <ul className="product-action">
                <a href="#"></a>
                <li>
                  <a href="#" />
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-8.jpg" className="img-product" />
              <img src="img/product-2.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a href="buy product.html" className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>Rs12000.00</span>
                <del>Rs12500.00</del>
              </div>
              <p className="product-parg">
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit...
              </p>
              <h4>Hurry Up! Offer ends in:</h4>
              <ul className="countdown">
                <li>
                  <span>0</span> Days
                </li>
                <li>
                  <span>19</span> Hours
                </li>
                <li>
                  <span>54</span>Mins
                </li>
                <li>
                  <span>39</span>Sec
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-btn" />
        <div className="swiper-button-prev swiper-btn" />
      </section>
      <section className="sale-sec contanier swiper mySwiper">
        <div className="section-head">
          <h4>
            Discounts <span>on Products</span>
          </h4>
        </div>
        <div className="boxs swiper-wrapper">
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-8.jpg" className="img-product" />
              <img src="img/product-1.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>Rs12000.00</span>
                <del>Rs12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-2.jpg" className="img-product" />
              <img src="img/product-9.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>Rs12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-3.jpg" className="img-product" />
              <img src="img/product-10.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>Rs12000.00</span>
                <del>Rs12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-4.jpg" className="img-product" />
              <img src="img/product-8.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>Rs12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-9.jpg" className="img-product" />
              <img src="img/product-16.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-12.jpg" className="img-product" />
              <img src="img/product-3.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-15.jpg" className="img-product" />
              <img src="img/product-1.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-14.jpg" className="img-product" />
              <img src="img/product-6.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-7.jpg" className="img-product" />
              <img src="img/product-11.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <span className="discount">34%</span>
              <img src="img/product-15.jpg" className="img-product" />
              <img src="img/product-16.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-btn" />
        <div className="swiper-button-prev swiper-btn" />
      </section>
      <div className="banner2 contanier">
        <div className="boxs">
          <div className="box">
            <a href="#">
              <img src="img/banner-4.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
          <div className="box">
            <a href="#">
              <img src="img/banner-5.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
        </div>
      </div>
      <section className="slide-with-img contanier">
        <div className="section-head">
          <h4>
            Electronics Devices
            <span />{" "}
          </h4>
        </div>
        <div className="cont">
          <div className="img-with-slide">
            <a href="#">
              <img src="img/banner-sm-1.jpg" alt="" />
            </a>
          </div>
          <div className="swip-with-img swiper mySwiper">
            <div className="boxs swiper-wrapper">
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-3.jpg" className="img-product" />
                  <img src="img/product-9.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-8.jpg" className="img-product" />
                  <img src="img/product-2.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-1.jpg" className="img-product" />
                  <img src="img/product-15.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-7.jpg" className="img-product" />
                  <img src="img/product-14.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-15.jpg" className="img-product" />
                  <img src="img/product-9.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-2.jpg" className="img-product" />
                  <img src="img/product-6.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-11.jpg" className="img-product" />
                  <img src="img/product-1.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-5.jpg" className="img-product" />
                  <img src="img/product-16.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next swiper-btn" />
            <div className="swiper-button-prev swiper-btn" />
          </div>
        </div>
      </section>
      <section className="slide-with-img contanier">
        <div className="section-head">
          <h4>
            Mobile Phones &amp; Accessories
            <span />
          </h4>
        </div>
        <div className="cont">
          <div className="swip-with-img swiper mySwiper">
            <div className="boxs swiper-wrapper">
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-1.jpg" className="img-product" />
                  <img src="img/product-14.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-4.jpg" className="img-product" />
                  <img src="img/product-14.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-7.jpg" className="img-product" />
                  <img src="img/product-2.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-3.jpg" className="img-product" />
                  <img src="img/product-1.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-9.jpg" className="img-product" />
                  <img src="img/product-13.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-14.jpg" className="img-product" />
                  <img src="img/product-5.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-13.jpg" className="img-product" />
                  <img src="img/product-9.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-15.jpg" className="img-product" />
                  <img src="img/product-6.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next swiper-btn" />
            <div className="swiper-button-prev swiper-btn" />
          </div>
          <div className="img-with-slide">
            <a href="#">
              <img src="img/banner-sm-2.jpg" alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="slide-with-img contanier">
        <div className="section-head">
          <h4>
            Electrical Appliances <span />
          </h4>
        </div>
        <div className="cont">
          <div className="img-with-slide">
            <a href="#">
              <img src="img/banner-sm-3.jpg" alt="" />
            </a>
          </div>
          <div className="swip-with-img swiper mySwiper">
            <div className="boxs swiper-wrapper">
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-15.jpg" className="img-product" />
                  <img src="img/product-5.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-8.jpg" className="img-product" />
                  <img src="img/product-12.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-11.jpg" className="img-product" />
                  <img src="img/product-2.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-3.jpg" className="img-product" />
                  <img src="img/product-2.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-9.jpg" className="img-product" />
                  <img src="img/product-11.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-14.jpg" className="img-product" />
                  <img src="img/product-4.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-5.jpg" className="img-product" />
                  <img src="img/product-7.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
              <div className="box column product-item swiper-slide">
                <div className="product-btn">
                  <ul className="product-action">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="mycart.html">
                        <i className="fa-solid fa-cart-arrow-down" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-print" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="div-img">
                  <img src="img/product-4.jpg" className="img-product" />
                  <img src="img/product-9.jpg" className="hover-img" />
                </div>
                <div className="content">
                  <a className="product-item-link">
                    {" "}
                    Original Mobile Android Dual SIM Smart Phone G3{" "}
                  </a>
                  <div className="stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <div className="price">
                    <span>RS12000.00</span>
                    <del>RS12500.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next swiper-btn" />
            <div className="swiper-button-prev swiper-btn" />
          </div>
        </div>
      </section>
      <div className="banner contanier">
        <div className="boxs">
          <div className="box">
            <a href="#">
              <img src="img/banner-6.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
          <div className="box">
            <a href="#">
              <img src="img/banner-7.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
          <div className="box">
            <a href="#">
              <img src="img/banner-8.jpg" alt="" />
              <span className="glass-hover" />
            </a>
          </div>
        </div>
      </div>
      <section className="sale-sec contanier swiper mySwiper">
        <div className="section-head">
          <h4>
            Recently Viewed Products <span />
          </h4>
        </div>
        <div className="boxs swiper-wrapper">
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-8.jpg" className="img-product" />
              <img src="img/product-1.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-2.jpg" className="img-product" />
              <img src="img/product-9.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-3.jpg" className="img-product" />
              <img src="img/product-10.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-4.jpg" className="img-product" />
              <img src="img/product-8.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="div-img">
              <img src="img/product-9.jpg" className="img-product" />
              <img src="img/product-16.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-12.jpg" className="img-product" />
              <img src="img/product-3.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-15.jpg" className="img-product" />
              <img src="img/product-1.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-14.jpg" className="img-product" />
              <img src="img/product-6.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-7.jpg" className="img-product" />
              <img src="img/product-11.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
          <div className="box column product-item swiper-slide">
            <div className="product-btn">
              <ul className="product-action">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart" />
                  </a>
                </li>
                <li>
                  <a href="mycart.html">
                    <i className="fa-solid fa-cart-arrow-down" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-print" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-img">
              <img src="img/product-15.jpg" className="img-product" />
              <img src="img/product-16.jpg" className="hover-img" />
            </div>
            <div className="content">
              <a className="product-item-link">
                {" "}
                Original Mobile Android Dual SIM Smart Phone G3{" "}
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <div className="price">
                <span>RS12000.00</span>
                <del>RS12500.00</del>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-btn" />
        <div className="swiper-button-prev swiper-btn" />
      </section>
      <div className="newsletter">
        <div className="contanier">
          <div className="subscribe-content">
            <img src="img/icon_email.png" alt="" />
            <div className="text">
              <h4>Subscribe for the Latest News</h4>
              <p>
                Sign up with your email to receive the latest news and new products
              </p>
              <span />
            </div>
          </div>
          <div className="subscribe-form">
            <form id="subscribe-form">
              <input
                type="email"
                id="email"
                placeholder="Enter your email here to subscribe"
                required=""
              />
              <button type="submit" className="btn-srch">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="back-top">
        <a href="#">Back to Top</a>
      </div>
    </>
  );
};

export default ShopNestUI;
