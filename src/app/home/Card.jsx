import React from "react";
import "./Card.css"; // CSS faylına istinad

const Card = ({ image, title, price }) => {
  return (
 <div className="body">
     <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-footer">
        <p className="card-price">{price} AZN</p>
        <button className="card-button">Əlavə et</button>
        </div>
      </div>
      
    </div>
 </div>
  );
};

export default Card;
