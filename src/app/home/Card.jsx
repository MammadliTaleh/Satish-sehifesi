"use client"
import React from "react";
import "./Card.css";
import { TiShoppingCart } from "react-icons/ti";

const Card = ({ item, addToCart, openModal }) => {
  return (
    <div className="card" onClick={() => openModal(item)}>
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-footer">
          <p className="card-price">${item.price.toFixed(2)}</p>
          <button onClick={(e) => { e.stopPropagation(); addToCart(item); }} className="card-button">
           <TiShoppingCart className="cart-icon"/> <p>Əlavə et</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;