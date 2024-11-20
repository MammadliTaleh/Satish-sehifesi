
import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="icon-section">
        <img
          src="https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png"
          alt="Logo"
          className="icon"
        />
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Axtarış..."
          className="search-input"
        />
      </div>


      <div className="cart-section">
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
