import React from "react";
import "./Card.css"; // CSS faylına istinad

const Card = ({ image, title, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price} AZN</p>
      </div>
    </div>
  );
};

export default Card;
