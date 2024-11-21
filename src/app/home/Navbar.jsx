"use client"
import React from "react";
import "./Navbar.css";

const Navbar = ({ cartItems, removeFromCart, toggleModal, isModalOpen }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

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
         {/* Search Section */}
         <div className="search-section">
        <input
          type="text"
          placeholder="Axtarış..."
          className="search-input"
        />
      </div>
      <button className="favorites-button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png" /* Heart icon */
            alt="Favorites"
            className="favorites-icon"
          />
          <span>Favorites</span>
        </button>
      <div className="cart-section">
        <button className="cart-button" onClick={toggleModal}>
          <img
            src="https://banner2.cleanpng.com/20180816/yxl/kisspng-computer-icons-logo-symbol-basket-shopping-downloadicons-net-sharing-icons-for-your-projects-5b74f732baf8a9.1506309215343921147659.jpg"
            alt="Cart"
            className="cart-icon"
          />
          <span className="cart-count">{cartItems.length}</span>
        </button>
      </div>
      {isModalOpen && (
  <div className="cart-modal">
    <h3 className="modal-h3">Səbətindəkilər</h3>
    {cartItems.length === 0 ? (
      <p className="modal-p">Səbətiniz boşdur</p>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <span>${item.price.toFixed(2)}</span>
            <button className="remove-button" onClick={() => removeFromCart(index)}>Çıxar</button>
          </li>
        ))}
      </ul>
    )}
    <div className="cart-total">Toplam: ${totalPrice.toFixed(2)}</div>
    <button className="close-modal" onClick={toggleModal}>
      Bağla
    </button>
  </div>
)}

    </nav>
  );
};

export default Navbar;
