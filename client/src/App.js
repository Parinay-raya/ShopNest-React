import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopNestUI from "./components/ShopNestUi";
import ShopNestDashboard from "./components/ShopNestDashboard";
import ShopNestLogin from "./components/ShopNestLogin";
import ShopNestSignUp from "./components/ShopNestSignUp";

function App() {
  return (
    <Router> {/* ✅ Wrap everything inside BrowserRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<ShopNestUI />} />
        <Route path="/dashboard" element={<ShopNestDashboard />} />
        <Route path="/login" element={<ShopNestLogin />} />  {/* ✅ Add login route */}
        <Route path="/signup" element={<ShopNestSignUp />} /> {/* ✅ Add sign-up route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
