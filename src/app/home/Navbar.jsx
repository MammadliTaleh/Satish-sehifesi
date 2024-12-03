"use client";
import React from "react";
import "./Navbar.css";
import { TiShoppingCart } from "react-icons/ti";
import { useRouter } from "next/navigation";

const Navbar = ({ cartItems }) => {
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="icon-section">
        <img
          src="https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png"
          alt="Logo"
          className="icon"
        />
      </div>
      <div className="links-section">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact Us</a>
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Axtarış..."
          className="search-input"
        />
      </div>
      <div className="cart-section">
        <button
          className="cart-button"
          onClick={() => router.push("/cart")} // Burada /cart səhifəsinə yönləndiririk
        >
          <TiShoppingCart size={50} style={{ color: "white" }} className="cart-icon" />
          <span className="cart-count">{cartItems.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 