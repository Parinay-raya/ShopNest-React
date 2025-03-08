import React, { useState, useEffect } from "react";
import "../assets/style.css"
import { Link } from "react-router-dom";

const ShopNestLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const authLink = document.getElementById("authLink");
    const myAccountLink = document.getElementById("myAccountLink");

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      authLink.textContent = "Logout";
      authLink.href = "#";
      authLink.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.reload();
      });

      if (myAccountLink) {
        myAccountLink.href = "/./Dashboard/myaccount.html";
      }
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("⚠️ Please enter email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("✅ Login Response:", data);

      if (response.ok) {
        alert("🎉 Login successful!");

        if (data.fullname) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              fullname: data.fullname,
              email: data.email,
              token: data.token,
            })
          );
        } else {
          console.warn("⚠️ Fullname is missing in response!");
        }

        window.location.href = "index.html"; // Redirect to dashboard
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error("❌ Login Failed:", error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="box-sign-up">
        <div className="signup">
          <form id="loginForm" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <div className="inp">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label htmlFor="password">Password</label>
            <div
              className="inp"
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                style={{ flex: 1, border: "none", outline: "none" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer", padding: "5px" }}
              ></i>
            </div>

            <div className="check-box">
              <div className="check">
                <input type="checkbox" />
                <span>Save Account</span>
              </div>
              <a href="#" className="forg">
                Forgot Password?
              </a>
            </div>

            <button type="submit">Login</button>
          </form>

          <span className="line-sign">or</span>

          <div className="sign-soc">
            <div className="box">
              <a className="btn" href="#">
                <img src="img/google.png" alt="" /> Log in with Google Account
              </a>
            </div>
          </div>

          <p className="creat-ac">
            Don't have an account? <Link to="/signup">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopNestLogin;
