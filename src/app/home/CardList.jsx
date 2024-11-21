"use client"
import React, { useState, useEffect } from "react";
import Card from "./Card";
import ProductModal from "./ProductModal"; // Yeni modal komponentini daxil et
import "./CardList.css";

const CardList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal vəziyyəti
  const [selectedProduct, setSelectedProduct] = useState(null); // Seçilmiş məhsul

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Məkumatın Yüklənməsində Problem Yaşandı");
        }
        const data = await response.json();
        setProducts(data.slice(0, 20)); // Limit to 20 products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Məlumat Yüklənir...</p>;
  if (error) return <p>Məkumatın Yüklənməsində Problem Yaşandı: {error}</p>;

  // Modalı bağlamaq üçün funksiya
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Məhsul seçildikdə modal açılır
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="card-container">
      {products.map((product) => (
        <Card
          key={product.id}
          item={product}
          addToCart={addToCart}
          openModal={openModal} // Modalı açmaq üçün funksiya
        />
      ))}

      {/* Modalın görünməsi üçün */}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={closeModal}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default CardList;
