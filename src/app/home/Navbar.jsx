import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="icon-section">
        <img
          src="https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png"
          alt="Logo"
          className="icon"
        />
      </div>

      {/* Navigation Links */}
      <div className="links-section">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact Us</a>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Axtarış..."
          className="search-input"
        />
      </div>

      {/* Cart and Favorites Section */}
      <div className="cart-section">
        <button className="favorites-button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png" /* Heart icon */
            alt="Favorites"
            className="favorites-icon"
          />
          <span>Favorites</span>
        </button>
        <button className="cart-button">
          <img
            src="https://banner2.cleanpng.com/20180816/yxl/kisspng-computer-icons-logo-symbol-basket-shopping-downloadicons-net-sharing-icons-for-your-projects-5b74f732baf8a9.1506309215343921147659.jpg"
            alt="Cart"
            className="cart-icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
