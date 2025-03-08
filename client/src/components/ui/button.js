import React from "react";
import "./button.css"; // Create a CSS file for styling if needed

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
