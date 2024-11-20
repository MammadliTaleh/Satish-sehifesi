"use client"
import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Məlumatları API-dən gətirmək
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); 
        if (!response.ok) {
          throw new Error("Məlumat yüklənərkən xəta baş verdi!");
        }
        const data = await response.json();
        setProducts(data.slice(0, 20)); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Yüklənmə və ya xəta vəziyyətləri
  if (loading) return <p>Məlumat yüklənir...</p>;
  if (error) return <p>Xəta: {error}</p>;

  return (
    <div className="card-container">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image} // API-dən gələn "image" açarı
          title={product.title} // API-dən gələn "title" açarı
          price={product.price} // API-dən gələn "price" açarı
        />
      ))}

    </div>
  );
};

export default CardList;
