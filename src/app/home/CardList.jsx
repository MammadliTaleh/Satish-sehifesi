"use client"
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Error fetching products!");
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

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card-container">
      {products.map((product) => (
        <Card
          key={product.id}
          item={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default CardList;
