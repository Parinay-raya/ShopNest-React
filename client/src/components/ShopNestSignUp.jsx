import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "swiper/css"; // Assuming you're using SwiperJS
import "../assets/style.css"

const ShopNestSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  useEffect(() => {
    const buyNowButton = document.querySelector(".buyNow");
    const createAccountFast = document.querySelector(".createaccountfast");

    if (buyNowButton && createAccountFast) {
      buyNowButton.onclick = () => {
        createAccountFast.classList.toggle("active");
      };
    }

    return () => {
      if (buyNowButton) buyNowButton.onclick = null;
    };
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, phone, address, password } = formData;

    if (!fullname || !email || !phone || !address || !password) {
      alert("⚠️ All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("🎉 Signup successful! Redirecting to login...");
        navigate("/login");
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error("❌ Signup Failed:", error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contanier">
      {/* Signup Form */}
      <div className="box-sign-up">
        <div className="signup">
          <form id="signupForm" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Name</label>
            <div className="inp">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your name"
                required
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="email">Email</label>
            <div className="inp">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="phone">Phone</label>
            <div className="inp">
              <i className="fa-solid fa-phone"></i>
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="address">Address</label>
            <div className="inp">
              <i className="fa-solid fa-map-marker-alt"></i>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="inp">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="check-box">
              <div className="check">
                <input type="checkbox" id="saveAccount" />
                <span>Save Account</span>
              </div>
            </div>

            <button type="submit">Create Account</button>
          </form>

          <span className="line-sign">or</span>

          <div className="sign-soc">
            <div className="box">
              <a className="btn" href="#">
                <img src="img/google.png" alt="Google Logo" /> Log in with Google Account
              </a>
            </div>
          </div>

          <p className="creat-ac">
            Do you have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopNestSignUp;
