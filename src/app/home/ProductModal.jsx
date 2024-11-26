
import React, { useState } from "react";
import "./ProductModal.css"; 

const ProductModal = ({ product, closeModal, addToCart }) => {
  const [size, setSize] = useState("");

  const handleAddToCart = () => {
    if (size) {
      addToCart({ ...product, size });
      closeModal(); // Modalı bağlayır
    } else {
      alert("Bədən ölçüsü seçin!");
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeModal}>X</button>
        <div className="modal-left">
          <img src={product.image} alt={product.title} className="modal-image" />
        </div>
        <div className="modal-right">
          <h3>{product.title}</h3>
          <p className="price">${product.price.toFixed(2)}</p>
          <label>
            Ölçü seçin:
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Seçin</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </label>
          <button onClick={handleAddToCart}>Əlavə et</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
