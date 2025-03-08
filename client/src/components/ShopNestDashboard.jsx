import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const ShopNestDashboard = () => {
    const navigate = useNavigate(); // ✅ Now useNavigate is defined

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            if (window.location.pathname !== "/sign-in-page") {
                alert("Please log in first!");
                navigate("/sign-in-page"); // Redirects only if not already on sign-in page
            }
            return;
        }

        const welcomeMessage = document.getElementById("welcomeMessage");
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome, ${user.fullname || "Guest"}!`;
        }

        // Logout functionality
        const logoutLink = document.getElementById("logoutLink");
        if (logoutLink) {
            const handleLogout = (event) => {
                event.preventDefault();
                localStorage.removeItem("user");
                navigate("/"); // Redirects to homepage
            };

            logoutLink.addEventListener("click", handleLogout);

            return () => logoutLink.removeEventListener("click", handleLogout);
        }
    }, [navigate]);

    return (
        <div>
            {/* Sidebar */}
            <div className="sidebar p-3 text-center" style={sidebarStyle}>
                <a href="../index.html">
                    <img
                        src="https://res.cloudinary.com/dqznjnjv9/image/upload/v1740904793/Logo-img_p5jqtf.png"
                        alt="ShopNest Logo"
                        className="img-fluid mb-3"
                        style={{ maxWidth: "150px" }}
                    />
                </a>
                <a href="myaccount.html">
                    <i className="fas fa-home"></i> Dashboard
                </a>
                <a href="#">
                    <i className="fas fa-box"></i> My Orders
                </a>
                <a href="#">
                    <i className="fas fa-heart"></i> Wishlist
                </a>
                <a href="profile.html">
                    <i className="fas fa-user"></i> Profile
                </a>
                <a href="#">
                    <i className="fas fa-cog"></i> Settings
                </a>
                <a href="#" id="logoutLink">
                    <i className="fas fa-sign-out-alt"></i> Logout
                </a>
            </div>

            {/* Main Content */}
            <div className="main-content" style={{ marginLeft: "250px", padding: "20px" }}>
                <div className="container-fluid">
                    {/* Navbar */}
                    <nav className="navbar navbar-light bg-light shadow rounded p-3 d-flex justify-content-between align-items-center">
                        <form className="d-flex w-50">
                            <input className="form-control me-2" type="search" placeholder="Search products..." />
                            <button className="btn btn-primary" type="submit">
                                Search
                            </button>
                        </form>

                        <span id="welcomeMessage" className="fw-bold"></span>

                        <div>
                            <i className="fas fa-bell fa-lg me-3"></i>
                            <i className="fas fa-user-circle fa-lg"></i>
                        </div>
                    </nav>

                    <br />

                    {/* Stats Section */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow p-3">
                                <h5>
                                    <i className="fas fa-shopping-cart"></i> Total Orders
                                </h5>
                                <h3>120</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow p-3">
                                <h5>
                                    <i className="fas fa-heart"></i> Wishlist Items
                                </h5>
                                <h3>8</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow p-3">
                                <h5>
                                    <i className="fas fa-wallet"></i> Wallet Balance
                                </h5>
                                <h3>Rs25000</h3>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Recent Orders Table */}
                    <div className="card shadow p-3">
                        <h5>Recent Orders</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Product</th>
                                    <th>Status</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1023</td>
                                    <td>Wireless Headphones</td>
                                    <td>
                                        <span className="badge bg-success">Delivered</span>
                                    </td>
                                    <td>$49.99</td>
                                </tr>
                                <tr>
                                    <td>#1024</td>
                                    <td>Smartwatch</td>
                                    <td>
                                        <span className="badge bg-warning">Pending</span>
                                    </td>
                                    <td>$79.99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />

                    {/* Recommended Products */}
                    <h5>Recommended for You</h5>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card p-2">
                                <img src="./img/product-12.jpg" className="card-img-top" alt="Product" />
                                <div className="card-body">
                                    <h6>Bluetooth Speaker</h6>
                                    <p>$39.99</p>
                                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <img src="./img/product-16.jpg" className="card-img-top" alt="Product" />
                                <div className="card-body">
                                    <h6>Gaming Mouse</h6>
                                    <p>$24.99</p>
                                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sidebar Styling
const sidebarStyle = {
    width: "250px",
    height: "100vh",
    background: "#c9eff6",
    position: "fixed",
};

// Export the component
export default ShopNestDashboard;
